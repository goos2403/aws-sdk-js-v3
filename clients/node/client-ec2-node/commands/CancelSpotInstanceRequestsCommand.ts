import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelSpotInstanceRequests } from "../model/operations/CancelSpotInstanceRequests";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelSpotInstanceRequestsInput } from "../types/CancelSpotInstanceRequestsInput";
import { CancelSpotInstanceRequestsOutput } from "../types/CancelSpotInstanceRequestsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CancelSpotInstanceRequestsInput";
export * from "../types/CancelSpotInstanceRequestsOutput";
export * from "../types/CancelSpotInstanceRequestsExceptionsUnion";

export class CancelSpotInstanceRequestsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelSpotInstanceRequestsInput,
      OutputTypesUnion,
      CancelSpotInstanceRequestsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelSpotInstanceRequests;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelSpotInstanceRequestsInput,
    CancelSpotInstanceRequestsOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelSpotInstanceRequestsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelSpotInstanceRequestsInput,
    CancelSpotInstanceRequestsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CancelSpotInstanceRequestsInput,
        CancelSpotInstanceRequestsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
