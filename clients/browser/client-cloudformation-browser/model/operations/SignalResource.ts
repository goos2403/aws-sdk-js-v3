import { SignalResourceInput } from "../shapes/SignalResourceInput";
import { SignalResourceOutput } from "../shapes/SignalResourceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SignalResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SignalResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SignalResourceInput
  },
  output: {
    shape: SignalResourceOutput
  },
  errors: []
};
