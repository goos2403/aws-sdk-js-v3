import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTrainingJobs } from "../model/operations/ListTrainingJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTrainingJobsInput } from "../types/ListTrainingJobsInput";
import { ListTrainingJobsOutput } from "../types/ListTrainingJobsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListTrainingJobsInput";
export * from "../types/ListTrainingJobsOutput";
export * from "../types/ListTrainingJobsExceptionsUnion";

export class ListTrainingJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTrainingJobsInput,
      OutputTypesUnion,
      ListTrainingJobsOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTrainingJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTrainingJobsInput,
    ListTrainingJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTrainingJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTrainingJobsInput, ListTrainingJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTrainingJobsInput, ListTrainingJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
