import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would result in the user exceeding the allowed number of DB parameter groups.</p>
 */
export interface DBParameterGroupQuotaExceededFault
  extends __ServiceException__<_DBParameterGroupQuotaExceededFaultDetails> {
  name: "DBParameterGroupQuotaExceededFault";
}

export interface _DBParameterGroupQuotaExceededFaultDetails {}
