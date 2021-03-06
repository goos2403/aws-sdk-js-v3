import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeExpressions } from "../model/operations/DescribeExpressions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeExpressionsInput } from "../types/DescribeExpressionsInput";
import { DescribeExpressionsOutput } from "../types/DescribeExpressionsOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DescribeExpressionsInput";
export * from "../types/DescribeExpressionsOutput";
export * from "../types/DescribeExpressionsExceptionsUnion";

export class DescribeExpressionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeExpressionsInput,
      OutputTypesUnion,
      DescribeExpressionsOutput,
      CloudSearchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeExpressions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeExpressionsInput,
    DescribeExpressionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeExpressionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeExpressionsInput,
    DescribeExpressionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeExpressionsInput, DescribeExpressionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
