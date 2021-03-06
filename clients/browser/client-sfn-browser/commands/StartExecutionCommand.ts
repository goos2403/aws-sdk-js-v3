import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartExecution } from "../model/operations/StartExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartExecutionInput } from "../types/StartExecutionInput";
import { StartExecutionOutput } from "../types/StartExecutionOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/StartExecutionInput";
export * from "../types/StartExecutionOutput";
export * from "../types/StartExecutionExceptionsUnion";

export class StartExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartExecutionInput,
      OutputTypesUnion,
      StartExecutionOutput,
      SFNResolvedConfiguration,
      Blob
    > {
  readonly model = StartExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartExecutionInput,
    StartExecutionOutput,
    Blob
  >();

  constructor(readonly input: StartExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<StartExecutionInput, StartExecutionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartExecutionInput, StartExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
