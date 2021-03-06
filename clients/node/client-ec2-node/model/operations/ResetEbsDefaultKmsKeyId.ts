import { ResetEbsDefaultKmsKeyIdInput } from "../shapes/ResetEbsDefaultKmsKeyIdInput";
import { ResetEbsDefaultKmsKeyIdOutput } from "../shapes/ResetEbsDefaultKmsKeyIdOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResetEbsDefaultKmsKeyId: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetEbsDefaultKmsKeyId",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetEbsDefaultKmsKeyIdInput
  },
  output: {
    shape: ResetEbsDefaultKmsKeyIdOutput
  },
  errors: []
};
