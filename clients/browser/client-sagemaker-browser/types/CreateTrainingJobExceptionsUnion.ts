import { ResourceInUse } from "./ResourceInUse";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
export type CreateTrainingJobExceptionsUnion =
  | ResourceInUse
  | ResourceLimitExceeded;
