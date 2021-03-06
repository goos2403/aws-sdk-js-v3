import { DeleteDhcpOptionsInput } from "../shapes/DeleteDhcpOptionsInput";
import { DeleteDhcpOptionsOutput } from "../shapes/DeleteDhcpOptionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDhcpOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDhcpOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDhcpOptionsInput
  },
  output: {
    shape: DeleteDhcpOptionsOutput
  },
  errors: []
};
