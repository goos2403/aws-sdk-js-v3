import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetConnectors } from "../model/operations/GetConnectors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConnectorsInput } from "../types/GetConnectorsInput";
import { GetConnectorsOutput } from "../types/GetConnectorsOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/GetConnectorsInput";
export * from "../types/GetConnectorsOutput";
export * from "../types/GetConnectorsExceptionsUnion";

export class GetConnectorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConnectorsInput,
      OutputTypesUnion,
      GetConnectorsOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetConnectors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConnectorsInput,
    GetConnectorsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetConnectorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<GetConnectorsInput, GetConnectorsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConnectorsInput, GetConnectorsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
