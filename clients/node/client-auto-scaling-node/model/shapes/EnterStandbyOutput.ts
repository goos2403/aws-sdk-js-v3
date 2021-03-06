import { _Activities } from "./_Activities";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnterStandbyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Activities: {
      shape: _Activities
    }
  }
};
