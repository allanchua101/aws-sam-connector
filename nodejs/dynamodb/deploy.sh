#!/bin/bash

SAM_BUCKET_POC=""; # Put your bucket name here
AWS_CLI_PROFILE_NAME="";

sam deploy -t ./dynamo-connector.sam.yaml \
  --stack-name "dynamo-connector-poc" \
  --profile $AWS_CLI_PROFILE_NAME \
  --s3-bucket $SAM_BUCKET_POC \
  --capabilities CAPABILITY_IAM;