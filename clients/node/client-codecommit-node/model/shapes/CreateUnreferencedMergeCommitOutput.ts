import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUnreferencedMergeCommitOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    commitId: {
      shape: {
        type: "string"
      }
    },
    treeId: {
      shape: {
        type: "string"
      }
    }
  }
};
