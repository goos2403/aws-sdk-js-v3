import { CreateIntegrationInput } from "../shapes/CreateIntegrationInput";
import { CreateIntegrationOutput } from "../shapes/CreateIntegrationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateIntegration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateIntegration",
  http: {
    method: "POST",
    requestUri: "/v2/apis/{apiId}/integrations"
  },
  input: {
    shape: CreateIntegrationInput
  },
  output: {
    shape: CreateIntegrationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
