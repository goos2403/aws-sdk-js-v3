import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteStreamProcessor } from "../model/operations/DeleteStreamProcessor";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteStreamProcessorInput } from "../types/DeleteStreamProcessorInput";
import { DeleteStreamProcessorOutput } from "../types/DeleteStreamProcessorOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/DeleteStreamProcessorInput";
export * from "../types/DeleteStreamProcessorOutput";
export * from "../types/DeleteStreamProcessorExceptionsUnion";

export class DeleteStreamProcessorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteStreamProcessorInput,
      OutputTypesUnion,
      DeleteStreamProcessorOutput,
      RekognitionResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteStreamProcessor;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteStreamProcessorInput,
    DeleteStreamProcessorOutput,
    Blob
  >();

  constructor(readonly input: DeleteStreamProcessorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteStreamProcessorInput,
    DeleteStreamProcessorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteStreamProcessorInput, DeleteStreamProcessorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
