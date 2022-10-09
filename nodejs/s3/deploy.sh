#!/bin/bash

SAM_BUCKET_POC=""; # Put your bucket name here
AWS_CLI_PROFILE_NAME="";

sam deploy -t ./s3-connector.sam.yaml \
  --stack-name "s3-connector-poc" \
  --profile $AWS_CLI_PROFILE_NAME \
  --s3-bucket $SAM_BUCKET_POC \
  --capabilities CAPABILITY_IAM;