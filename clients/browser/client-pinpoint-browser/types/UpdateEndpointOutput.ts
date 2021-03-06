import { _UnmarshalledMessageBody } from "./_MessageBody";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateEndpointOutput shape
 */
export interface UpdateEndpointOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: _UnmarshalledMessageBody;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
