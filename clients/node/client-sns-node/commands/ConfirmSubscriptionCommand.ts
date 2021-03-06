import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ConfirmSubscription } from "../model/operations/ConfirmSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConfirmSubscriptionInput } from "../types/ConfirmSubscriptionInput";
import { ConfirmSubscriptionOutput } from "../types/ConfirmSubscriptionOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/ConfirmSubscriptionInput";
export * from "../types/ConfirmSubscriptionOutput";
export * from "../types/ConfirmSubscriptionExceptionsUnion";

export class ConfirmSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConfirmSubscriptionInput,
      OutputTypesUnion,
      ConfirmSubscriptionOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ConfirmSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfirmSubscriptionInput,
    ConfirmSubscriptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: ConfirmSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ConfirmSubscriptionInput,
    ConfirmSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ConfirmSubscriptionInput, ConfirmSubscriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
