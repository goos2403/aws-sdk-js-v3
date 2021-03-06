import { Structure as _Structure_ } from "@aws-sdk/types";

export const EventDestinationAlreadyExistsException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    EventDestinationName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "EventDestinationAlreadyExistsException",
  exceptionCode: "EventDestinationAlreadyExists"
};
