import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterInput: _Structure_ = {
  type: "structure",
  required: ["ClusterArn"],
  members: {
    ClusterArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "clusterArn"
    }
  }
};
