import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateMaintenanceWindow } from "../model/operations/CreateMaintenanceWindow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMaintenanceWindowInput } from "../types/CreateMaintenanceWindowInput";
import { CreateMaintenanceWindowOutput } from "../types/CreateMaintenanceWindowOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/CreateMaintenanceWindowInput";
export * from "../types/CreateMaintenanceWindowOutput";
export * from "../types/CreateMaintenanceWindowExceptionsUnion";

export class CreateMaintenanceWindowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMaintenanceWindowInput,
      OutputTypesUnion,
      CreateMaintenanceWindowOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = CreateMaintenanceWindow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMaintenanceWindowInput,
    CreateMaintenanceWindowOutput,
    Blob
  >();

  constructor(readonly input: CreateMaintenanceWindowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateMaintenanceWindowInput,
    CreateMaintenanceWindowOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateMaintenanceWindowInput, CreateMaintenanceWindowOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
