import { _UnmarshalledUser } from "./_User";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCurrentUserOutput shape
 */
export interface GetCurrentUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Metadata of the user.</p>
   */
  User?: _UnmarshalledUser;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
