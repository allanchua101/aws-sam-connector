#!/bin/bash

SAM_BUCKET_POC="ac-sam-bucket-pocs"; # Put your bucket name here
AWS_CLI_PROFILE_NAME="my-poc-profile";

sam delete --stack-name "dynamo-connector-poc" \
  --profile $AWS_CLI_PROFILE_NAME \
  --region "ap-southeast-1";