import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDirectConnectGatewayAttachments } from "../model/operations/DescribeDirectConnectGatewayAttachments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDirectConnectGatewayAttachmentsInput } from "../types/DescribeDirectConnectGatewayAttachmentsInput";
import { DescribeDirectConnectGatewayAttachmentsOutput } from "../types/DescribeDirectConnectGatewayAttachmentsOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeDirectConnectGatewayAttachmentsInput";
export * from "../types/DescribeDirectConnectGatewayAttachmentsOutput";
export * from "../types/DescribeDirectConnectGatewayAttachmentsExceptionsUnion";

export class DescribeDirectConnectGatewayAttachmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDirectConnectGatewayAttachmentsInput,
      OutputTypesUnion,
      DescribeDirectConnectGatewayAttachmentsOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDirectConnectGatewayAttachments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDirectConnectGatewayAttachmentsInput,
    DescribeDirectConnectGatewayAttachmentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDirectConnectGatewayAttachmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDirectConnectGatewayAttachmentsInput,
    DescribeDirectConnectGatewayAttachmentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDirectConnectGatewayAttachmentsInput,
        DescribeDirectConnectGatewayAttachmentsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
