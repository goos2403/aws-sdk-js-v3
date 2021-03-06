import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no CloudWatch Logs log group with the specified ARN.</p>
 */
export interface NoSuchCloudWatchLogsLogGroup
  extends __ServiceException__<_NoSuchCloudWatchLogsLogGroupDetails> {
  name: "NoSuchCloudWatchLogsLogGroup";
}

export interface _NoSuchCloudWatchLogsLogGroupDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
