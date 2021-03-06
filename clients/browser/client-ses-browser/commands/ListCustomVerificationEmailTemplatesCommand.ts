import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCustomVerificationEmailTemplates } from "../model/operations/ListCustomVerificationEmailTemplates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCustomVerificationEmailTemplatesInput } from "../types/ListCustomVerificationEmailTemplatesInput";
import { ListCustomVerificationEmailTemplatesOutput } from "../types/ListCustomVerificationEmailTemplatesOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/ListCustomVerificationEmailTemplatesInput";
export * from "../types/ListCustomVerificationEmailTemplatesOutput";
export * from "../types/ListCustomVerificationEmailTemplatesExceptionsUnion";

export class ListCustomVerificationEmailTemplatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCustomVerificationEmailTemplatesInput,
      OutputTypesUnion,
      ListCustomVerificationEmailTemplatesOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = ListCustomVerificationEmailTemplates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCustomVerificationEmailTemplatesInput,
    ListCustomVerificationEmailTemplatesOutput,
    Blob
  >();

  constructor(readonly input: ListCustomVerificationEmailTemplatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCustomVerificationEmailTemplatesInput,
    ListCustomVerificationEmailTemplatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListCustomVerificationEmailTemplatesInput,
        ListCustomVerificationEmailTemplatesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
