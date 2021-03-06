import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a <code>CreateSnapshot</code> operation.</p>
 */
export interface CreateSnapshotInput {
  /**
   * <p>The identifier of an existing replication group. The snapshot is created from this replication group.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The identifier of an existing cluster. The snapshot is created from this cluster.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>A name for the snapshot being created.</p>
   */
  SnapshotName: string;

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
