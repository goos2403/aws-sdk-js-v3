import { _ParameterStringFilterValueList } from "./_ParameterStringFilterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterStringFilter: _Structure_ = {
  type: "structure",
  required: ["Key"],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Option: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _ParameterStringFilterValueList
    }
  }
};
