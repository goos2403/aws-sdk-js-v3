import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
export type GetAccountExceptionsUnion =
  | TooManyRequestsException
  | BadRequestException;
