import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateBackupVaultOutput shape
 */
export interface CreateBackupVaultOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The date and time a backup vault is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
