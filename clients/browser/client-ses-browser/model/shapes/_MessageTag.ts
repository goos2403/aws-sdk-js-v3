import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MessageTag: _Structure_ = {
  type: "structure",
  required: ["Name", "Value"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    }
  }
};
