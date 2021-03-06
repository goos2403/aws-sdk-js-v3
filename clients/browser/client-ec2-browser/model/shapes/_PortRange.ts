import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PortRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    From: {
      shape: {
        type: "integer"
      },
      locationName: "from"
    },
    To: {
      shape: {
        type: "integer"
      },
      locationName: "to"
    }
  }
};
