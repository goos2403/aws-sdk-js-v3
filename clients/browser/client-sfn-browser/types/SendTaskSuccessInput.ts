import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SendTaskSuccessInput shape
 */
export interface SendTaskSuccessInput {
  /**
   * <p>The token that represents this task. Task tokens are generated by the service when the tasks are assigned to a worker (see <a>GetActivityTaskOutput$taskToken</a>).</p>
   */
  taskToken: string;

  /**
   * <p>The JSON output of the task.</p>
   */
  output: string;

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
