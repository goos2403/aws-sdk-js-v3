import { DeleteInstanceProfileInput } from "../shapes/DeleteInstanceProfileInput";
import { DeleteInstanceProfileOutput } from "../shapes/DeleteInstanceProfileOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteInstanceProfileInput
  },
  output: {
    shape: DeleteInstanceProfileOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: DeleteConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
