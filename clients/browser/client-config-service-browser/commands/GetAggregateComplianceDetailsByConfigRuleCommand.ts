import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAggregateComplianceDetailsByConfigRule } from "../model/operations/GetAggregateComplianceDetailsByConfigRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAggregateComplianceDetailsByConfigRuleInput } from "../types/GetAggregateComplianceDetailsByConfigRuleInput";
import { GetAggregateComplianceDetailsByConfigRuleOutput } from "../types/GetAggregateComplianceDetailsByConfigRuleOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetAggregateComplianceDetailsByConfigRuleInput";
export * from "../types/GetAggregateComplianceDetailsByConfigRuleOutput";
export * from "../types/GetAggregateComplianceDetailsByConfigRuleExceptionsUnion";

export class GetAggregateComplianceDetailsByConfigRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAggregateComplianceDetailsByConfigRuleInput,
      OutputTypesUnion,
      GetAggregateComplianceDetailsByConfigRuleOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetAggregateComplianceDetailsByConfigRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAggregateComplianceDetailsByConfigRuleInput,
    GetAggregateComplianceDetailsByConfigRuleOutput,
    Blob
  >();

  constructor(readonly input: GetAggregateComplianceDetailsByConfigRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAggregateComplianceDetailsByConfigRuleInput,
    GetAggregateComplianceDetailsByConfigRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetAggregateComplianceDetailsByConfigRuleInput,
        GetAggregateComplianceDetailsByConfigRuleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
