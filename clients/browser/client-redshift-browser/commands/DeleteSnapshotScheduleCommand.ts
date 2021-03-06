import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSnapshotSchedule } from "../model/operations/DeleteSnapshotSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSnapshotScheduleInput } from "../types/DeleteSnapshotScheduleInput";
import { DeleteSnapshotScheduleOutput } from "../types/DeleteSnapshotScheduleOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DeleteSnapshotScheduleInput";
export * from "../types/DeleteSnapshotScheduleOutput";
export * from "../types/DeleteSnapshotScheduleExceptionsUnion";

export class DeleteSnapshotScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSnapshotScheduleInput,
      OutputTypesUnion,
      DeleteSnapshotScheduleOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSnapshotSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSnapshotScheduleInput,
    DeleteSnapshotScheduleOutput,
    Blob
  >();

  constructor(readonly input: DeleteSnapshotScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSnapshotScheduleInput,
    DeleteSnapshotScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSnapshotScheduleInput, DeleteSnapshotScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
