import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDeploymentConfig } from "../model/operations/GetDeploymentConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeploymentConfigInput } from "../types/GetDeploymentConfigInput";
import { GetDeploymentConfigOutput } from "../types/GetDeploymentConfigOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/GetDeploymentConfigInput";
export * from "../types/GetDeploymentConfigOutput";
export * from "../types/GetDeploymentConfigExceptionsUnion";

export class GetDeploymentConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeploymentConfigInput,
      OutputTypesUnion,
      GetDeploymentConfigOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = GetDeploymentConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeploymentConfigInput,
    GetDeploymentConfigOutput,
    Blob
  >();

  constructor(readonly input: GetDeploymentConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDeploymentConfigInput,
    GetDeploymentConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDeploymentConfigInput, GetDeploymentConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
