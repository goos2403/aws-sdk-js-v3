import { UpdateDataSourceInput } from "../shapes/UpdateDataSourceInput";
import { UpdateDataSourceOutput } from "../shapes/UpdateDataSourceOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDataSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDataSource",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/datasources/{name}"
  },
  input: {
    shape: UpdateDataSourceInput
  },
  output: {
    shape: UpdateDataSourceOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    }
  ]
};
