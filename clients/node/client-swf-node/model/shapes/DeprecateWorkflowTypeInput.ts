import { _WorkflowType } from "./_WorkflowType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeprecateWorkflowTypeInput: _Structure_ = {
  type: "structure",
  required: ["domain", "workflowType"],
  members: {
    domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    workflowType: {
      shape: _WorkflowType
    }
  }
};
