import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttributeValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Value: {
      shape: {
        type: "string"
      },
      locationName: "value"
    }
  }
};
