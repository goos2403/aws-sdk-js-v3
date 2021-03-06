import { Structure as _Structure_ } from "@aws-sdk/types";

export const AlreadyExistsException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "AlreadyExistsException",
  exceptionCode: "AlreadyExists"
};
