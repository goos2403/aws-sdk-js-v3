import { DeletePartitionInput } from "../shapes/DeletePartitionInput";
import { DeletePartitionOutput } from "../shapes/DeletePartitionOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePartition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePartition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePartitionInput
  },
  output: {
    shape: DeletePartitionOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
