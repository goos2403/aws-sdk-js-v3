import { RemoveThingFromThingGroupInput } from "../shapes/RemoveThingFromThingGroupInput";
import { RemoveThingFromThingGroupOutput } from "../shapes/RemoveThingFromThingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveThingFromThingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveThingFromThingGroup",
  http: {
    method: "PUT",
    requestUri: "/thing-groups/removeThingFromThingGroup"
  },
  input: {
    shape: RemoveThingFromThingGroupInput
  },
  output: {
    shape: RemoveThingFromThingGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
