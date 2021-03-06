import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CpuOptionsRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CoreCount: {
      shape: {
        type: "integer"
      }
    },
    ThreadsPerCore: {
      shape: {
        type: "integer"
      }
    }
  }
};
