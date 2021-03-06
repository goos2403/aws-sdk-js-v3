import { ResetDBParameterGroupInput } from "../shapes/ResetDBParameterGroupInput";
import { ResetDBParameterGroupOutput } from "../shapes/ResetDBParameterGroupOutput";
import { InvalidDBParameterGroupStateFault } from "../shapes/InvalidDBParameterGroupStateFault";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResetDBParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetDBParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetDBParameterGroupInput
  },
  output: {
    shape: ResetDBParameterGroupOutput,
    resultWrapper: "ResetDBParameterGroupResult"
  },
  errors: [
    {
      shape: InvalidDBParameterGroupStateFault
    },
    {
      shape: DBParameterGroupNotFoundFault
    }
  ]
};
