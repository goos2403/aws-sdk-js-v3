import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRetentionConfigurations } from "../model/operations/DescribeRetentionConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRetentionConfigurationsInput } from "../types/DescribeRetentionConfigurationsInput";
import { DescribeRetentionConfigurationsOutput } from "../types/DescribeRetentionConfigurationsOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeRetentionConfigurationsInput";
export * from "../types/DescribeRetentionConfigurationsOutput";
export * from "../types/DescribeRetentionConfigurationsExceptionsUnion";

export class DescribeRetentionConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRetentionConfigurationsInput,
      OutputTypesUnion,
      DescribeRetentionConfigurationsOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeRetentionConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRetentionConfigurationsInput,
    DescribeRetentionConfigurationsOutput,
    Blob
  >();

  constructor(readonly input: DescribeRetentionConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRetentionConfigurationsInput,
    DescribeRetentionConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeRetentionConfigurationsInput,
        DescribeRetentionConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
