import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified domain name is not valid.</p>
 */
export interface InvalidDomainName
  extends __ServiceException__<_InvalidDomainNameDetails> {
  name: "InvalidDomainName";
}

export interface _InvalidDomainNameDetails {
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}
