import { _UnmarshalledTagDescription } from "./_TagDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output for DescribeTags.</p>
 */
export interface DescribeTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the tags.</p>
   */
  TagDescriptions?: Array<_UnmarshalledTagDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
