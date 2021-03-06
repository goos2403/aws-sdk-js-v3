import { CreateModelInput } from "../shapes/CreateModelInput";
import { CreateModelOutput } from "../shapes/CreateModelOutput";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateModel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateModelInput
  },
  output: {
    shape: CreateModelOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
