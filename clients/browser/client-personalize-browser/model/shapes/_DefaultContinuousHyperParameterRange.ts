import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DefaultContinuousHyperParameterRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    minValue: {
      shape: {
        type: "float",
        min: -1000000
      }
    },
    maxValue: {
      shape: {
        type: "float",
        min: -1000000
      }
    },
    isTunable: {
      shape: {
        type: "boolean"
      }
    }
  }
};
