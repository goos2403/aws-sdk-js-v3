import { DeleteTrafficMirrorSessionInput } from "../shapes/DeleteTrafficMirrorSessionInput";
import { DeleteTrafficMirrorSessionOutput } from "../shapes/DeleteTrafficMirrorSessionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTrafficMirrorSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTrafficMirrorSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTrafficMirrorSessionInput
  },
  output: {
    shape: DeleteTrafficMirrorSessionOutput
  },
  errors: []
};
