import { _ResolverEndpoint } from "./_ResolverEndpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteResolverEndpointOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResolverEndpoint: {
      shape: _ResolverEndpoint
    }
  }
};
