import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResetImageAttribute } from "../model/operations/ResetImageAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetImageAttributeInput } from "../types/ResetImageAttributeInput";
import { ResetImageAttributeOutput } from "../types/ResetImageAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ResetImageAttributeInput";
export * from "../types/ResetImageAttributeOutput";
export * from "../types/ResetImageAttributeExceptionsUnion";

export class ResetImageAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetImageAttributeInput,
      OutputTypesUnion,
      ResetImageAttributeOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResetImageAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetImageAttributeInput,
    ResetImageAttributeOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResetImageAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetImageAttributeInput,
    ResetImageAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetImageAttributeInput, ResetImageAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
