import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSubscribedRuleGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    }
  }
};
