import { Structure as _Structure_ } from "@aws-sdk/types";

export const ServiceFailureException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Code: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ServiceFailureException"
};
