import { _Workteam } from "./_Workteam";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateWorkteamOutput: _Structure_ = {
  type: "structure",
  required: ["Workteam"],
  members: {
    Workteam: {
      shape: _Workteam
    }
  }
};
