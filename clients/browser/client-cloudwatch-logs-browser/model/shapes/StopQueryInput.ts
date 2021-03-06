import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopQueryInput: _Structure_ = {
  type: "structure",
  required: ["queryId"],
  members: {
    queryId: {
      shape: {
        type: "string"
      }
    }
  }
};
