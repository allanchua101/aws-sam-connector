#!/bin/bash

SAM_BUCKET_POC=""; # Put your bucket name here
AWS_CLI_PROFILE_NAME="";

sam delete --stack-name "dynamo-connector-poc" \
  --profile $AWS_CLI_PROFILE_NAME \
  --region "ap-southeast-1";