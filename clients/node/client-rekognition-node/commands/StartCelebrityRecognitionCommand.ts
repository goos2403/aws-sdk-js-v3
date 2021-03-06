import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartCelebrityRecognition } from "../model/operations/StartCelebrityRecognition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartCelebrityRecognitionInput } from "../types/StartCelebrityRecognitionInput";
import { StartCelebrityRecognitionOutput } from "../types/StartCelebrityRecognitionOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/StartCelebrityRecognitionInput";
export * from "../types/StartCelebrityRecognitionOutput";
export * from "../types/StartCelebrityRecognitionExceptionsUnion";

export class StartCelebrityRecognitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartCelebrityRecognitionInput,
      OutputTypesUnion,
      StartCelebrityRecognitionOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartCelebrityRecognition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartCelebrityRecognitionInput,
    StartCelebrityRecognitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartCelebrityRecognitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartCelebrityRecognitionInput,
    StartCelebrityRecognitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartCelebrityRecognitionInput, StartCelebrityRecognitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
