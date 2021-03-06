import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetNetwork } from "../model/operations/GetNetwork";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetNetworkInput } from "../types/GetNetworkInput";
import { GetNetworkOutput } from "../types/GetNetworkOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/GetNetworkInput";
export * from "../types/GetNetworkOutput";
export * from "../types/GetNetworkExceptionsUnion";

export class GetNetworkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetNetworkInput,
      OutputTypesUnion,
      GetNetworkOutput,
      ManagedBlockchainResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetNetwork;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetNetworkInput,
    GetNetworkOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetNetworkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<GetNetworkInput, GetNetworkOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetNetworkInput, GetNetworkOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
