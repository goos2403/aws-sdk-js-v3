import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableRule } from "../model/operations/DisableRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableRuleInput } from "../types/DisableRuleInput";
import { DisableRuleOutput } from "../types/DisableRuleOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/DisableRuleInput";
export * from "../types/DisableRuleOutput";
export * from "../types/DisableRuleExceptionsUnion";

export class DisableRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableRuleInput,
      OutputTypesUnion,
      DisableRuleOutput,
      EventBridgeResolvedConfiguration,
      Blob
    > {
  readonly model = DisableRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableRuleInput,
    DisableRuleOutput,
    Blob
  >();

  constructor(readonly input: DisableRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<DisableRuleInput, DisableRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableRuleInput, DisableRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
