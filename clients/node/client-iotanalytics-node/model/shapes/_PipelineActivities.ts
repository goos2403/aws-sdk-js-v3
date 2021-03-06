import { List as _List_ } from "@aws-sdk/types";
import { _PipelineActivity } from "./_PipelineActivity";

export const _PipelineActivities: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _PipelineActivity
  }
};
