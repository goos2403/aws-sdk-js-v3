import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AcknowledgeJob } from "../model/operations/AcknowledgeJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcknowledgeJobInput } from "../types/AcknowledgeJobInput";
import { AcknowledgeJobOutput } from "../types/AcknowledgeJobOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/AcknowledgeJobInput";
export * from "../types/AcknowledgeJobOutput";
export * from "../types/AcknowledgeJobExceptionsUnion";

export class AcknowledgeJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcknowledgeJobInput,
      OutputTypesUnion,
      AcknowledgeJobOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AcknowledgeJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcknowledgeJobInput,
    AcknowledgeJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: AcknowledgeJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<AcknowledgeJobInput, AcknowledgeJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AcknowledgeJobInput, AcknowledgeJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
