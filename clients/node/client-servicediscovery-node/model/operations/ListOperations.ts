import { ListOperationsInput } from "../shapes/ListOperationsInput";
import { ListOperationsOutput } from "../shapes/ListOperationsOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListOperations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOperations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListOperationsInput
  },
  output: {
    shape: ListOperationsOutput
  },
  errors: [
    {
      shape: InvalidInput
    }
  ]
};
