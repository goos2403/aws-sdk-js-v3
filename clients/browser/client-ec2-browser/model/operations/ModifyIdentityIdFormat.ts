import { ModifyIdentityIdFormatInput } from "../shapes/ModifyIdentityIdFormatInput";
import { ModifyIdentityIdFormatOutput } from "../shapes/ModifyIdentityIdFormatOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyIdentityIdFormat: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyIdentityIdFormat",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyIdentityIdFormatInput
  },
  output: {
    shape: ModifyIdentityIdFormatOutput
  },
  errors: []
};
