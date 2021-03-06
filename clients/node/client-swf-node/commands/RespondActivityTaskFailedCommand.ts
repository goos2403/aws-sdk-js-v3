import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RespondActivityTaskFailed } from "../model/operations/RespondActivityTaskFailed";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RespondActivityTaskFailedInput } from "../types/RespondActivityTaskFailedInput";
import { RespondActivityTaskFailedOutput } from "../types/RespondActivityTaskFailedOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/RespondActivityTaskFailedInput";
export * from "../types/RespondActivityTaskFailedOutput";
export * from "../types/RespondActivityTaskFailedExceptionsUnion";

export class RespondActivityTaskFailedCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RespondActivityTaskFailedInput,
      OutputTypesUnion,
      RespondActivityTaskFailedOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RespondActivityTaskFailed;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RespondActivityTaskFailedInput,
    RespondActivityTaskFailedOutput,
    _stream.Readable
  >();

  constructor(readonly input: RespondActivityTaskFailedInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RespondActivityTaskFailedInput,
    RespondActivityTaskFailedOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RespondActivityTaskFailedInput, RespondActivityTaskFailedOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
