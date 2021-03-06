import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTrigger } from "../model/operations/GetTrigger";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTriggerInput } from "../types/GetTriggerInput";
import { GetTriggerOutput } from "../types/GetTriggerOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetTriggerInput";
export * from "../types/GetTriggerOutput";
export * from "../types/GetTriggerExceptionsUnion";

export class GetTriggerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTriggerInput,
      OutputTypesUnion,
      GetTriggerOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTrigger;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTriggerInput,
    GetTriggerOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTriggerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTriggerInput, GetTriggerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTriggerInput, GetTriggerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
