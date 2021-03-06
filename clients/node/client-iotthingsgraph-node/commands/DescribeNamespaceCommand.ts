import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeNamespace } from "../model/operations/DescribeNamespace";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNamespaceInput } from "../types/DescribeNamespaceInput";
import { DescribeNamespaceOutput } from "../types/DescribeNamespaceOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/DescribeNamespaceInput";
export * from "../types/DescribeNamespaceOutput";
export * from "../types/DescribeNamespaceExceptionsUnion";

export class DescribeNamespaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNamespaceInput,
      OutputTypesUnion,
      DescribeNamespaceOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeNamespace;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNamespaceInput,
    DescribeNamespaceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeNamespaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeNamespaceInput, DescribeNamespaceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeNamespaceInput, DescribeNamespaceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
