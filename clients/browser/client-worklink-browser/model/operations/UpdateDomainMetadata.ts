import { UpdateDomainMetadataInput } from "../shapes/UpdateDomainMetadataInput";
import { UpdateDomainMetadataOutput } from "../shapes/UpdateDomainMetadataOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDomainMetadata: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDomainMetadata",
  http: {
    method: "POST",
    requestUri: "/updateDomainMetadata"
  },
  input: {
    shape: UpdateDomainMetadataInput
  },
  output: {
    shape: UpdateDomainMetadataOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
