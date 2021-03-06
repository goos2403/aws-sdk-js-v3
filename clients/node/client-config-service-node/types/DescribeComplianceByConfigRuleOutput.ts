import { _UnmarshalledComplianceByConfigRule } from "./_ComplianceByConfigRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeComplianceByConfigRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates whether each of the specified AWS Config rules is compliant.</p>
   */
  ComplianceByConfigRules?: Array<_UnmarshalledComplianceByConfigRule>;

  /**
   * <p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
