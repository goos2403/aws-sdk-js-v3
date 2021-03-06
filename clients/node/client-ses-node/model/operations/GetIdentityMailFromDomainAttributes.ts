import { GetIdentityMailFromDomainAttributesInput } from "../shapes/GetIdentityMailFromDomainAttributesInput";
import { GetIdentityMailFromDomainAttributesOutput } from "../shapes/GetIdentityMailFromDomainAttributesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetIdentityMailFromDomainAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIdentityMailFromDomainAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetIdentityMailFromDomainAttributesInput
  },
  output: {
    shape: GetIdentityMailFromDomainAttributesOutput,
    resultWrapper: "GetIdentityMailFromDomainAttributesResult"
  },
  errors: []
};
