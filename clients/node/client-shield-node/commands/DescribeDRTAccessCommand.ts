import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDRTAccess } from "../model/operations/DescribeDRTAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDRTAccessInput } from "../types/DescribeDRTAccessInput";
import { DescribeDRTAccessOutput } from "../types/DescribeDRTAccessOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/DescribeDRTAccessInput";
export * from "../types/DescribeDRTAccessOutput";
export * from "../types/DescribeDRTAccessExceptionsUnion";

export class DescribeDRTAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDRTAccessInput,
      OutputTypesUnion,
      DescribeDRTAccessOutput,
      ShieldResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDRTAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDRTAccessInput,
    DescribeDRTAccessOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDRTAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeDRTAccessInput, DescribeDRTAccessOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDRTAccessInput, DescribeDRTAccessOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
