import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBackupVaultAccessPolicy } from "../model/operations/DeleteBackupVaultAccessPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBackupVaultAccessPolicyInput } from "../types/DeleteBackupVaultAccessPolicyInput";
import { DeleteBackupVaultAccessPolicyOutput } from "../types/DeleteBackupVaultAccessPolicyOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/DeleteBackupVaultAccessPolicyInput";
export * from "../types/DeleteBackupVaultAccessPolicyOutput";
export * from "../types/DeleteBackupVaultAccessPolicyExceptionsUnion";

export class DeleteBackupVaultAccessPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBackupVaultAccessPolicyInput,
      OutputTypesUnion,
      DeleteBackupVaultAccessPolicyOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBackupVaultAccessPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBackupVaultAccessPolicyInput,
    DeleteBackupVaultAccessPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBackupVaultAccessPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBackupVaultAccessPolicyInput,
    DeleteBackupVaultAccessPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteBackupVaultAccessPolicyInput,
        DeleteBackupVaultAccessPolicyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
