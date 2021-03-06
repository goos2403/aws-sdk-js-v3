import { DescribeVpcEndpointsInput } from "../shapes/DescribeVpcEndpointsInput";
import { DescribeVpcEndpointsOutput } from "../shapes/DescribeVpcEndpointsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVpcEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcEndpoints",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcEndpointsInput
  },
  output: {
    shape: DescribeVpcEndpointsOutput
  },
  errors: []
};
