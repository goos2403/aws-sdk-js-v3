import { _PatchOrchestratorFilter } from "./_PatchOrchestratorFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePatchBaselinesInput shape
 */
export interface DescribePatchBaselinesInput {
  /**
   * <p>Each element in the array is a structure containing: </p> <p>Key: (string, "NAME_PREFIX" or "OWNER")</p> <p>Value: (array of strings, exactly 1 entry, between 1 and 255 characters)</p>
   */
  Filters?:
    | Array<_PatchOrchestratorFilter>
    | Iterable<_PatchOrchestratorFilter>;

  /**
   * <p>The maximum number of patch baselines to return (per page).</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

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
