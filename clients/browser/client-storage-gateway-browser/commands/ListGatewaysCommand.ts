import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListGateways } from "../model/operations/ListGateways";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGatewaysInput } from "../types/ListGatewaysInput";
import { ListGatewaysOutput } from "../types/ListGatewaysOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/ListGatewaysInput";
export * from "../types/ListGatewaysOutput";
export * from "../types/ListGatewaysExceptionsUnion";

export class ListGatewaysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGatewaysInput,
      OutputTypesUnion,
      ListGatewaysOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = ListGateways;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGatewaysInput,
    ListGatewaysOutput,
    Blob
  >();

  constructor(readonly input: ListGatewaysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<ListGatewaysInput, ListGatewaysOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGatewaysInput, ListGatewaysOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
