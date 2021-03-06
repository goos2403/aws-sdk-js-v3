import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateUsageReportSubscription } from "../model/operations/CreateUsageReportSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateUsageReportSubscriptionInput } from "../types/CreateUsageReportSubscriptionInput";
import { CreateUsageReportSubscriptionOutput } from "../types/CreateUsageReportSubscriptionOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/CreateUsageReportSubscriptionInput";
export * from "../types/CreateUsageReportSubscriptionOutput";
export * from "../types/CreateUsageReportSubscriptionExceptionsUnion";

export class CreateUsageReportSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateUsageReportSubscriptionInput,
      OutputTypesUnion,
      CreateUsageReportSubscriptionOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = CreateUsageReportSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUsageReportSubscriptionInput,
    CreateUsageReportSubscriptionOutput,
    Blob
  >();

  constructor(readonly input: CreateUsageReportSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateUsageReportSubscriptionInput,
    CreateUsageReportSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateUsageReportSubscriptionInput,
        CreateUsageReportSubscriptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
