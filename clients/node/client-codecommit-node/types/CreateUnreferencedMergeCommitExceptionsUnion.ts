import { RepositoryNameRequiredException } from "./RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { TipsDivergenceExceededException } from "./TipsDivergenceExceededException";
import { CommitRequiredException } from "./CommitRequiredException";
import { InvalidCommitException } from "./InvalidCommitException";
import { CommitDoesNotExistException } from "./CommitDoesNotExistException";
import { MergeOptionRequiredException } from "./MergeOptionRequiredException";
import { InvalidMergeOptionException } from "./InvalidMergeOptionException";
import { InvalidConflictDetailLevelException } from "./InvalidConflictDetailLevelException";
import { InvalidConflictResolutionStrategyException } from "./InvalidConflictResolutionStrategyException";
import { InvalidConflictResolutionException } from "./InvalidConflictResolutionException";
import { ManualMergeRequiredException } from "./ManualMergeRequiredException";
import { MaximumConflictResolutionEntriesExceededException } from "./MaximumConflictResolutionEntriesExceededException";
import { MultipleConflictResolutionEntriesException } from "./MultipleConflictResolutionEntriesException";
import { ReplacementTypeRequiredException } from "./ReplacementTypeRequiredException";
import { InvalidReplacementTypeException } from "./InvalidReplacementTypeException";
import { ReplacementContentRequiredException } from "./ReplacementContentRequiredException";
import { InvalidReplacementContentException } from "./InvalidReplacementContentException";
import { PathRequiredException } from "./PathRequiredException";
import { InvalidPathException } from "./InvalidPathException";
import { FileContentSizeLimitExceededException } from "./FileContentSizeLimitExceededException";
import { FolderContentSizeLimitExceededException } from "./FolderContentSizeLimitExceededException";
import { MaximumFileContentToLoadExceededException } from "./MaximumFileContentToLoadExceededException";
import { MaximumItemsToCompareExceededException } from "./MaximumItemsToCompareExceededException";
import { ConcurrentReferenceUpdateException } from "./ConcurrentReferenceUpdateException";
import { FileModeRequiredException } from "./FileModeRequiredException";
import { InvalidFileModeException } from "./InvalidFileModeException";
import { NameLengthExceededException } from "./NameLengthExceededException";
import { InvalidEmailException } from "./InvalidEmailException";
import { CommitMessageLengthExceededException } from "./CommitMessageLengthExceededException";
import { EncryptionIntegrityChecksFailedException } from "./EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "./EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "./EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "./EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "./EncryptionKeyUnavailableException";
export type CreateUnreferencedMergeCommitExceptionsUnion =
  | RepositoryNameRequiredException
  | InvalidRepositoryNameException
  | RepositoryDoesNotExistException
  | TipsDivergenceExceededException
  | CommitRequiredException
  | InvalidCommitException
  | CommitDoesNotExistException
  | MergeOptionRequiredException
  | InvalidMergeOptionException
  | InvalidConflictDetailLevelException
  | InvalidConflictResolutionStrategyException
  | InvalidConflictResolutionException
  | ManualMergeRequiredException
  | MaximumConflictResolutionEntriesExceededException
  | MultipleConflictResolutionEntriesException
  | ReplacementTypeRequiredException
  | InvalidReplacementTypeException
  | ReplacementContentRequiredException
  | InvalidReplacementContentException
  | PathRequiredException
  | InvalidPathException
  | FileContentSizeLimitExceededException
  | FolderContentSizeLimitExceededException
  | MaximumFileContentToLoadExceededException
  | MaximumItemsToCompareExceededException
  | ConcurrentReferenceUpdateException
  | FileModeRequiredException
  | InvalidFileModeException
  | NameLengthExceededException
  | InvalidEmailException
  | CommitMessageLengthExceededException
  | EncryptionIntegrityChecksFailedException
  | EncryptionKeyAccessDeniedException
  | EncryptionKeyDisabledException
  | EncryptionKeyNotFoundException
  | EncryptionKeyUnavailableException;
