import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.</p>
 */
export interface ListTagsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of cost allocation tags as key-value pairs.</p>
   */
  TagList?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
