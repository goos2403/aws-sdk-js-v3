import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type AllocatePublicVirtualInterfaceExceptionsUnion =
  | DuplicateTagKeysException
  | TooManyTagsException
  | DirectConnectServerException
  | DirectConnectClientException;
