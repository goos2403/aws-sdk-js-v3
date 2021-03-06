import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartFleetActions } from "../model/operations/StartFleetActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartFleetActionsInput } from "../types/StartFleetActionsInput";
import { StartFleetActionsOutput } from "../types/StartFleetActionsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/StartFleetActionsInput";
export * from "../types/StartFleetActionsOutput";
export * from "../types/StartFleetActionsExceptionsUnion";

export class StartFleetActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartFleetActionsInput,
      OutputTypesUnion,
      StartFleetActionsOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartFleetActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartFleetActionsInput,
    StartFleetActionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartFleetActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<StartFleetActionsInput, StartFleetActionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartFleetActionsInput, StartFleetActionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
