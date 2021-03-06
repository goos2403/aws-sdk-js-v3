import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetContainerPolicyOutput shape
 */
export interface GetContainerPolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The contents of the access policy.</p>
   */
  Policy: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
