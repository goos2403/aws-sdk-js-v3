import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceDoesNotSupportTagging: _Structure_ = {
  type: "structure",
  required: ["ResourceARN"],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 8
      }
    },
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "ResourceDoesNotSupportTagging"
};
