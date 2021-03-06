import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPhoneNumberOrder } from "../model/operations/GetPhoneNumberOrder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPhoneNumberOrderInput } from "../types/GetPhoneNumberOrderInput";
import { GetPhoneNumberOrderOutput } from "../types/GetPhoneNumberOrderOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetPhoneNumberOrderInput";
export * from "../types/GetPhoneNumberOrderOutput";
export * from "../types/GetPhoneNumberOrderExceptionsUnion";

export class GetPhoneNumberOrderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPhoneNumberOrderInput,
      OutputTypesUnion,
      GetPhoneNumberOrderOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = GetPhoneNumberOrder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPhoneNumberOrderInput,
    GetPhoneNumberOrderOutput,
    Blob
  >();

  constructor(readonly input: GetPhoneNumberOrderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPhoneNumberOrderInput,
    GetPhoneNumberOrderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPhoneNumberOrderInput, GetPhoneNumberOrderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
