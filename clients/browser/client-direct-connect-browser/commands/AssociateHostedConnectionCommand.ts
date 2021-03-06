import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateHostedConnection } from "../model/operations/AssociateHostedConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateHostedConnectionInput } from "../types/AssociateHostedConnectionInput";
import { AssociateHostedConnectionOutput } from "../types/AssociateHostedConnectionOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/AssociateHostedConnectionInput";
export * from "../types/AssociateHostedConnectionOutput";
export * from "../types/AssociateHostedConnectionExceptionsUnion";

export class AssociateHostedConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateHostedConnectionInput,
      OutputTypesUnion,
      AssociateHostedConnectionOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateHostedConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateHostedConnectionInput,
    AssociateHostedConnectionOutput,
    Blob
  >();

  constructor(readonly input: AssociateHostedConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateHostedConnectionInput,
    AssociateHostedConnectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateHostedConnectionInput, AssociateHostedConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
