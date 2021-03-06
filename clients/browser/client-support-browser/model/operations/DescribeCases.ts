import { DescribeCasesInput } from "../shapes/DescribeCasesInput";
import { DescribeCasesOutput } from "../shapes/DescribeCasesOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { CaseIdNotFound } from "../shapes/CaseIdNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCases: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCases",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCasesInput
  },
  output: {
    shape: DescribeCasesOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: CaseIdNotFound
    }
  ]
};
