import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopJob } from "../model/operations/StopJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopJobInput } from "../types/StopJobInput";
import { StopJobOutput } from "../types/StopJobOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/StopJobInput";
export * from "../types/StopJobOutput";
export * from "../types/StopJobExceptionsUnion";

export class StopJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopJobInput,
      OutputTypesUnion,
      StopJobOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = StopJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopJobInput,
    StopJobOutput,
    Blob
  >();

  constructor(readonly input: StopJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<StopJobInput, StopJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopJobInput, StopJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
