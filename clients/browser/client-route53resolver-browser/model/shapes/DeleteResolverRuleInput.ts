import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteResolverRuleInput: _Structure_ = {
  type: "structure",
  required: ["ResolverRuleId"],
  members: {
    ResolverRuleId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
