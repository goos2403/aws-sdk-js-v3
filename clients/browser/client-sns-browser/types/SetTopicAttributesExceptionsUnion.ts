import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidSecurityException } from "./InvalidSecurityException";
export type SetTopicAttributesExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | NotFoundException
  | AuthorizationErrorException
  | InvalidSecurityException;
