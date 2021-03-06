import { DescribeElasticGpusInput } from "../shapes/DescribeElasticGpusInput";
import { DescribeElasticGpusOutput } from "../shapes/DescribeElasticGpusOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeElasticGpus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeElasticGpus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeElasticGpusInput
  },
  output: {
    shape: DescribeElasticGpusOutput
  },
  errors: []
};
