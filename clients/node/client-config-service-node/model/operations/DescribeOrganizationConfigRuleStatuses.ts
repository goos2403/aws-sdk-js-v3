import { DescribeOrganizationConfigRuleStatusesInput } from "../shapes/DescribeOrganizationConfigRuleStatusesInput";
import { DescribeOrganizationConfigRuleStatusesOutput } from "../shapes/DescribeOrganizationConfigRuleStatusesOutput";
import { NoSuchOrganizationConfigRuleException } from "../shapes/NoSuchOrganizationConfigRuleException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OrganizationAccessDeniedException } from "../shapes/OrganizationAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeOrganizationConfigRuleStatuses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOrganizationConfigRuleStatuses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOrganizationConfigRuleStatusesInput
  },
  output: {
    shape: DescribeOrganizationConfigRuleStatusesOutput
  },
  errors: [
    {
      shape: NoSuchOrganizationConfigRuleException
    },
    {
      shape: InvalidLimitException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: OrganizationAccessDeniedException
    }
  ]
};
