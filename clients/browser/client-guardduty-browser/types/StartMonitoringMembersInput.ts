import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartMonitoringMembersInput shape
 */
export interface StartMonitoringMembersInput {
  /**
   * <p>The unique ID of the detector of the GuardDuty account whom you want to re-enable to monitor members' findings.</p>
   */
  DetectorId: string;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts whose findings you want the master account to monitor.</p>
   */
  AccountIds: Array<string> | Iterable<string>;

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
