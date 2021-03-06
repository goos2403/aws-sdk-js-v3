import { Structure as _Structure_ } from "@aws-sdk/types";

export const InternalServerErrorException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ErrorAttribute: {
      shape: {
        type: "string"
      },
      locationName: "errorAttribute"
    },
    Message: {
      shape: {
        type: "string"
      },
      locationName: "message"
    }
  },
  exceptionType: "InternalServerErrorException"
};
