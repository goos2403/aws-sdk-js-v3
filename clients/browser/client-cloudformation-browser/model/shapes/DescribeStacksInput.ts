import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStacksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackName: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
