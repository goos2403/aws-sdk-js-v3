import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateNodeOutput shape
 */
export interface AssociateNodeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains a token which can be passed to the <code>DescribeNodeAssociationStatus</code> API call to get the status of the association request. </p>
   */
  NodeAssociationStatusToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
