import { _RevisionLocation } from "./_RevisionLocation";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a RegisterApplicationRevision operation.</p>
 */
export interface RegisterApplicationRevisionInput {
  /**
   * <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS account.</p>
   */
  applicationName: string;

  /**
   * <p>A comment about the revision.</p>
   */
  description?: string;

  /**
   * <p>Information about the application revision to register, including type and location.</p>
   */
  revision: _RevisionLocation;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
