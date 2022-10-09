const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const s3Client = new S3Client({ region: "ap-southeast-1" });
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

exports.handler = async () => {
  const bucketParams = {
    Bucket: process.env.SAMPLE_BUCKET_NAME,
    Key: `test-object-${Math.ceil(Math.random() * 10 ** 10)}`,
    Body: "BODY", // Change this with actual file content
  };
  const command = new PutObjectCommand(bucketParams);
  const signedUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 3600,
  });

  console.log(`Generated a signed URL: ${signedUrl}`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      signedUrl,
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://apis.foo.com",
      "Access-Control-Allow-Headers": "Content-Type,x-api-key",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
    },
  };
};
