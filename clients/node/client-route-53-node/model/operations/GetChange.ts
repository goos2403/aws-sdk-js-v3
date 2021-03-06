import { GetChangeInput } from "../shapes/GetChangeInput";
import { GetChangeOutput } from "../shapes/GetChangeOutput";
import { NoSuchChange } from "../shapes/NoSuchChange";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetChange: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetChange",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/change/{Id}"
  },
  input: {
    shape: GetChangeInput
  },
  output: {
    shape: GetChangeOutput
  },
  errors: [
    {
      shape: NoSuchChange
    },
    {
      shape: InvalidInput
    }
  ]
};
