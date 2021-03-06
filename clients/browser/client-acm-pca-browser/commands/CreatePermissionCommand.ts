import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePermission } from "../model/operations/CreatePermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePermissionInput } from "../types/CreatePermissionInput";
import { CreatePermissionOutput } from "../types/CreatePermissionOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/CreatePermissionInput";
export * from "../types/CreatePermissionOutput";
export * from "../types/CreatePermissionExceptionsUnion";

export class CreatePermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePermissionInput,
      OutputTypesUnion,
      CreatePermissionOutput,
      ACMPCAResolvedConfiguration,
      Blob
    > {
  readonly model = CreatePermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePermissionInput,
    CreatePermissionOutput,
    Blob
  >();

  constructor(readonly input: CreatePermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<CreatePermissionInput, CreatePermissionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePermissionInput, CreatePermissionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
