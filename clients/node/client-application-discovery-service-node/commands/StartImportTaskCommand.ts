import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartImportTask } from "../model/operations/StartImportTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartImportTaskInput } from "../types/StartImportTaskInput";
import { StartImportTaskOutput } from "../types/StartImportTaskOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/StartImportTaskInput";
export * from "../types/StartImportTaskOutput";
export * from "../types/StartImportTaskExceptionsUnion";

export class StartImportTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartImportTaskInput,
      OutputTypesUnion,
      StartImportTaskOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartImportTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartImportTaskInput,
    StartImportTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartImportTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<StartImportTaskInput, StartImportTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartImportTaskInput, StartImportTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
