import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVpnConnection } from "../model/operations/DeleteVpnConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVpnConnectionInput } from "../types/DeleteVpnConnectionInput";
import { DeleteVpnConnectionOutput } from "../types/DeleteVpnConnectionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteVpnConnectionInput";
export * from "../types/DeleteVpnConnectionOutput";
export * from "../types/DeleteVpnConnectionExceptionsUnion";

export class DeleteVpnConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVpnConnectionInput,
      OutputTypesUnion,
      DeleteVpnConnectionOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVpnConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVpnConnectionInput,
    DeleteVpnConnectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVpnConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVpnConnectionInput,
    DeleteVpnConnectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVpnConnectionInput, DeleteVpnConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
