import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateJobStatus } from "../model/operations/UpdateJobStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateJobStatusInput } from "../types/UpdateJobStatusInput";
import { UpdateJobStatusOutput } from "../types/UpdateJobStatusOutput";
import { S3ControlResolvedConfiguration } from "../S3ControlConfiguration";
export * from "../types/UpdateJobStatusInput";
export * from "../types/UpdateJobStatusOutput";
export * from "../types/UpdateJobStatusExceptionsUnion";

export class UpdateJobStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateJobStatusInput,
      OutputTypesUnion,
      UpdateJobStatusOutput,
      S3ControlResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateJobStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateJobStatusInput,
    UpdateJobStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateJobStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ControlResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateJobStatusInput, UpdateJobStatusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateJobStatusInput, UpdateJobStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
