import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type ListUserTagsExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
