import { DescribeExportTasksInput } from "../shapes/DescribeExportTasksInput";
import { DescribeExportTasksOutput } from "../shapes/DescribeExportTasksOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeExportTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeExportTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeExportTasksInput
  },
  output: {
    shape: DescribeExportTasksOutput
  },
  errors: []
};
