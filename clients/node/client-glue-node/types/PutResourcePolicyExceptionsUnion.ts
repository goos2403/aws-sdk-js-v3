import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { ConditionCheckFailureException } from "./ConditionCheckFailureException";
export type PutResourcePolicyExceptionsUnion =
  | EntityNotFoundException
  | InternalServiceException
  | OperationTimeoutException
  | InvalidInputException
  | ConditionCheckFailureException;
