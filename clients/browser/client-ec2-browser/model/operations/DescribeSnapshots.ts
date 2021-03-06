import { DescribeSnapshotsInput } from "../shapes/DescribeSnapshotsInput";
import { DescribeSnapshotsOutput } from "../shapes/DescribeSnapshotsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSnapshots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSnapshots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSnapshotsInput
  },
  output: {
    shape: DescribeSnapshotsOutput
  },
  errors: []
};
