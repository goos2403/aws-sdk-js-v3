import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProtectedResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resourceArn"
    }
  }
};
