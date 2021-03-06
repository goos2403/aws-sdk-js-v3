import { _ByoipCidr } from "./_ByoipCidr";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeprovisionByoipCidrOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ByoipCidr: {
      shape: _ByoipCidr,
      locationName: "byoipCidr"
    }
  }
};
