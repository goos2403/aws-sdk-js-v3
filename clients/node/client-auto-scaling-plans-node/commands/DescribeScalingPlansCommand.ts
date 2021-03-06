import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeScalingPlans } from "../model/operations/DescribeScalingPlans";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScalingPlansInput } from "../types/DescribeScalingPlansInput";
import { DescribeScalingPlansOutput } from "../types/DescribeScalingPlansOutput";
import { AutoScalingPlansResolvedConfiguration } from "../AutoScalingPlansConfiguration";
export * from "../types/DescribeScalingPlansInput";
export * from "../types/DescribeScalingPlansOutput";
export * from "../types/DescribeScalingPlansExceptionsUnion";

export class DescribeScalingPlansCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScalingPlansInput,
      OutputTypesUnion,
      DescribeScalingPlansOutput,
      AutoScalingPlansResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeScalingPlans;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScalingPlansInput,
    DescribeScalingPlansOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeScalingPlansInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingPlansResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScalingPlansInput,
    DescribeScalingPlansOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeScalingPlansInput, DescribeScalingPlansOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
