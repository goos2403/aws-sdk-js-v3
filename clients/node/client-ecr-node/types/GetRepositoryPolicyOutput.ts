import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRepositoryPolicyOutput shape
 */
export interface GetRepositoryPolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The JSON repository policy text associated with the repository.</p>
   */
  policyText?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
