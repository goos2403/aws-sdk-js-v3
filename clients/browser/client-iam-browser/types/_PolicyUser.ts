/**
 * <p>Contains information about a user that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>Using IAM</i> guide. </p>
 */
export interface _PolicyUser {
  /**
   * <p>The name (friendly name, not ARN) identifying the user.</p>
   */
  UserName?: string;

  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  UserId?: string;
}

export type _UnmarshalledPolicyUser = _PolicyUser;
