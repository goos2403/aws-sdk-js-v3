import { CustomKeyStoreHasCMKsException } from "./CustomKeyStoreHasCMKsException";
import { CustomKeyStoreInvalidStateException } from "./CustomKeyStoreInvalidStateException";
import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { KMSInternalException } from "./KMSInternalException";
export type DeleteCustomKeyStoreExceptionsUnion =
  | CustomKeyStoreHasCMKsException
  | CustomKeyStoreInvalidStateException
  | CustomKeyStoreNotFoundException
  | KMSInternalException;
