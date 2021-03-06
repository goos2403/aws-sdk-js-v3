import { _SourceConfig } from "./_SourceConfig";
import { _SimulationSoftwareSuite } from "./_SimulationSoftwareSuite";
import { _RobotSoftwareSuite } from "./_RobotSoftwareSuite";
import { _RenderingEngine } from "./_RenderingEngine";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSimulationApplicationInput shape
 */
export interface UpdateSimulationApplicationInput {
  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources: Array<_SourceConfig> | Iterable<_SourceConfig>;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite: _SimulationSoftwareSuite;

  /**
   * <p>Information about the robot software suite.</p>
   */
  robotSoftwareSuite: _RobotSoftwareSuite;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine: _RenderingEngine;

  /**
   * <p>The revision id for the robot application.</p>
   */
  currentRevisionId?: string;

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
