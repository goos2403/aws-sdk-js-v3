import { _Filters } from "./_Filters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeploymentJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    filters: {
      shape: _Filters
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
