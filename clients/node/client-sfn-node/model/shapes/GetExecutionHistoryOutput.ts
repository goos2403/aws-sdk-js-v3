import { _HistoryEventList } from "./_HistoryEventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetExecutionHistoryOutput: _Structure_ = {
  type: "structure",
  required: ["events"],
  members: {
    events: {
      shape: _HistoryEventList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
