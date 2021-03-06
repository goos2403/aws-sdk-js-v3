import { ListGatewaysInput } from "../shapes/ListGatewaysInput";
import { ListGatewaysOutput } from "../shapes/ListGatewaysOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGateways: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGateways",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListGatewaysInput
  },
  output: {
    shape: ListGatewaysOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
