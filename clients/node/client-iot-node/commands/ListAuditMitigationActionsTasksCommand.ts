import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAuditMitigationActionsTasks } from "../model/operations/ListAuditMitigationActionsTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAuditMitigationActionsTasksInput } from "../types/ListAuditMitigationActionsTasksInput";
import { ListAuditMitigationActionsTasksOutput } from "../types/ListAuditMitigationActionsTasksOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListAuditMitigationActionsTasksInput";
export * from "../types/ListAuditMitigationActionsTasksOutput";
export * from "../types/ListAuditMitigationActionsTasksExceptionsUnion";

export class ListAuditMitigationActionsTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAuditMitigationActionsTasksInput,
      OutputTypesUnion,
      ListAuditMitigationActionsTasksOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAuditMitigationActionsTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAuditMitigationActionsTasksInput,
    ListAuditMitigationActionsTasksOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAuditMitigationActionsTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAuditMitigationActionsTasksInput,
    ListAuditMitigationActionsTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListAuditMitigationActionsTasksInput,
        ListAuditMitigationActionsTasksOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
