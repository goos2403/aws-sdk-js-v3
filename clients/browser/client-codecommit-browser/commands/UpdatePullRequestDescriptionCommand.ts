import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdatePullRequestDescription } from "../model/operations/UpdatePullRequestDescription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePullRequestDescriptionInput } from "../types/UpdatePullRequestDescriptionInput";
import { UpdatePullRequestDescriptionOutput } from "../types/UpdatePullRequestDescriptionOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/UpdatePullRequestDescriptionInput";
export * from "../types/UpdatePullRequestDescriptionOutput";
export * from "../types/UpdatePullRequestDescriptionExceptionsUnion";

export class UpdatePullRequestDescriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePullRequestDescriptionInput,
      OutputTypesUnion,
      UpdatePullRequestDescriptionOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = UpdatePullRequestDescription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePullRequestDescriptionInput,
    UpdatePullRequestDescriptionOutput,
    Blob
  >();

  constructor(readonly input: UpdatePullRequestDescriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdatePullRequestDescriptionInput,
    UpdatePullRequestDescriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdatePullRequestDescriptionInput,
        UpdatePullRequestDescriptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
