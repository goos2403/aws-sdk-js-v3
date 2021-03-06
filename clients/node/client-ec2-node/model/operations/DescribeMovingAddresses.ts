import { DescribeMovingAddressesInput } from "../shapes/DescribeMovingAddressesInput";
import { DescribeMovingAddressesOutput } from "../shapes/DescribeMovingAddressesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMovingAddresses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMovingAddresses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMovingAddressesInput
  },
  output: {
    shape: DescribeMovingAddressesOutput
  },
  errors: []
};
