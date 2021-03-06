import { _PolicyToPathList } from "./_PolicyToPathList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchLookupPolicyResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyToPathList: {
      shape: _PolicyToPathList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
