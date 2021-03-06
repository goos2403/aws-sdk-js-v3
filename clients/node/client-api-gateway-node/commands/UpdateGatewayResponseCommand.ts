import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateGatewayResponse } from "../model/operations/UpdateGatewayResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGatewayResponseInput } from "../types/UpdateGatewayResponseInput";
import { UpdateGatewayResponseOutput } from "../types/UpdateGatewayResponseOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateGatewayResponseInput";
export * from "../types/UpdateGatewayResponseOutput";
export * from "../types/UpdateGatewayResponseExceptionsUnion";

export class UpdateGatewayResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGatewayResponseInput,
      OutputTypesUnion,
      UpdateGatewayResponseOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateGatewayResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGatewayResponseInput,
    UpdateGatewayResponseOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateGatewayResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateGatewayResponseInput,
    UpdateGatewayResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGatewayResponseInput, UpdateGatewayResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
