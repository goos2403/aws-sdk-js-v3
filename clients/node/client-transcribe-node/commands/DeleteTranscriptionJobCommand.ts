import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteTranscriptionJob } from "../model/operations/DeleteTranscriptionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTranscriptionJobInput } from "../types/DeleteTranscriptionJobInput";
import { DeleteTranscriptionJobOutput } from "../types/DeleteTranscriptionJobOutput";
import { TranscribeResolvedConfiguration } from "../TranscribeConfiguration";
export * from "../types/DeleteTranscriptionJobInput";
export * from "../types/DeleteTranscriptionJobOutput";
export * from "../types/DeleteTranscriptionJobExceptionsUnion";

export class DeleteTranscriptionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTranscriptionJobInput,
      OutputTypesUnion,
      DeleteTranscriptionJobOutput,
      TranscribeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteTranscriptionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTranscriptionJobInput,
    DeleteTranscriptionJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTranscriptionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TranscribeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTranscriptionJobInput,
    DeleteTranscriptionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTranscriptionJobInput, DeleteTranscriptionJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
