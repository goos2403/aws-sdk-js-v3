import { UpdateEnvironmentMembershipInput } from "../shapes/UpdateEnvironmentMembershipInput";
import { UpdateEnvironmentMembershipOutput } from "../shapes/UpdateEnvironmentMembershipOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateEnvironmentMembership: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEnvironmentMembership",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateEnvironmentMembershipInput
  },
  output: {
    shape: UpdateEnvironmentMembershipOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
