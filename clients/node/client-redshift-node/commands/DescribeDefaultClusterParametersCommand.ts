import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDefaultClusterParameters } from "../model/operations/DescribeDefaultClusterParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDefaultClusterParametersInput } from "../types/DescribeDefaultClusterParametersInput";
import { DescribeDefaultClusterParametersOutput } from "../types/DescribeDefaultClusterParametersOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeDefaultClusterParametersInput";
export * from "../types/DescribeDefaultClusterParametersOutput";
export * from "../types/DescribeDefaultClusterParametersExceptionsUnion";

export class DescribeDefaultClusterParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDefaultClusterParametersInput,
      OutputTypesUnion,
      DescribeDefaultClusterParametersOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDefaultClusterParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDefaultClusterParametersInput,
    DescribeDefaultClusterParametersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDefaultClusterParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDefaultClusterParametersInput,
    DescribeDefaultClusterParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDefaultClusterParametersInput,
        DescribeDefaultClusterParametersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
