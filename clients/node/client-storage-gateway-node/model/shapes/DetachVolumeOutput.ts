import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachVolumeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};
