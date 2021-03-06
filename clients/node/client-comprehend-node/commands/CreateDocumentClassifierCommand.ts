import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDocumentClassifier } from "../model/operations/CreateDocumentClassifier";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDocumentClassifierInput } from "../types/CreateDocumentClassifierInput";
import { CreateDocumentClassifierOutput } from "../types/CreateDocumentClassifierOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/CreateDocumentClassifierInput";
export * from "../types/CreateDocumentClassifierOutput";
export * from "../types/CreateDocumentClassifierExceptionsUnion";

export class CreateDocumentClassifierCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDocumentClassifierInput,
      OutputTypesUnion,
      CreateDocumentClassifierOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDocumentClassifier;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDocumentClassifierInput,
    CreateDocumentClassifierOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDocumentClassifierInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDocumentClassifierInput,
    CreateDocumentClassifierOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDocumentClassifierInput, CreateDocumentClassifierOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
