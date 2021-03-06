import { InternalServerException } from "./InternalServerException";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeProblemExceptionsUnion =
  | InternalServerException
  | ValidationException
  | ResourceNotFoundException;
