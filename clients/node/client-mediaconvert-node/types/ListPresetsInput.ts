import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPresetsInput shape
 */
export interface ListPresetsInput {
  /**
   * Optionally, specify a preset category to limit responses to only presets from that category.
   */
  Category?: string;

  /**
   * Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   */
  ListBy?: "NAME" | "CREATION_DATE" | "SYSTEM" | string;

  /**
   * Optional. Number of presets, up to twenty, that will be returned at one time
   */
  MaxResults?: number;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of presets.
   */
  NextToken?: string;

  /**
   * When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: "ASCENDING" | "DESCENDING" | string;

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
