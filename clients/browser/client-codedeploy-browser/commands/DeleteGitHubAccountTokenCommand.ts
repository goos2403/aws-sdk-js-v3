import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteGitHubAccountToken } from "../model/operations/DeleteGitHubAccountToken";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGitHubAccountTokenInput } from "../types/DeleteGitHubAccountTokenInput";
import { DeleteGitHubAccountTokenOutput } from "../types/DeleteGitHubAccountTokenOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/DeleteGitHubAccountTokenInput";
export * from "../types/DeleteGitHubAccountTokenOutput";
export * from "../types/DeleteGitHubAccountTokenExceptionsUnion";

export class DeleteGitHubAccountTokenCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGitHubAccountTokenInput,
      OutputTypesUnion,
      DeleteGitHubAccountTokenOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteGitHubAccountToken;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGitHubAccountTokenInput,
    DeleteGitHubAccountTokenOutput,
    Blob
  >();

  constructor(readonly input: DeleteGitHubAccountTokenInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteGitHubAccountTokenInput,
    DeleteGitHubAccountTokenOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGitHubAccountTokenInput, DeleteGitHubAccountTokenOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
