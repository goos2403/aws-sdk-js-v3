import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFunctionConfiguration } from "../model/operations/UpdateFunctionConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFunctionConfigurationInput } from "../types/UpdateFunctionConfigurationInput";
import { UpdateFunctionConfigurationOutput } from "../types/UpdateFunctionConfigurationOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/UpdateFunctionConfigurationInput";
export * from "../types/UpdateFunctionConfigurationOutput";
export * from "../types/UpdateFunctionConfigurationExceptionsUnion";

export class UpdateFunctionConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFunctionConfigurationInput,
      OutputTypesUnion,
      UpdateFunctionConfigurationOutput,
      LambdaResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateFunctionConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFunctionConfigurationInput,
    UpdateFunctionConfigurationOutput,
    Blob
  >();

  constructor(readonly input: UpdateFunctionConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFunctionConfigurationInput,
    UpdateFunctionConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateFunctionConfigurationInput,
        UpdateFunctionConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
