import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId"],
  members: {
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
