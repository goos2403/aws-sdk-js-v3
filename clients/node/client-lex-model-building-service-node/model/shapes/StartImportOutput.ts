import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartImportOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    mergeStrategy: {
      shape: {
        type: "string"
      }
    },
    importId: {
      shape: {
        type: "string"
      }
    },
    importStatus: {
      shape: {
        type: "string"
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
