import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchDeletePartition } from "../model/operations/BatchDeletePartition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDeletePartitionInput } from "../types/BatchDeletePartitionInput";
import { BatchDeletePartitionOutput } from "../types/BatchDeletePartitionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchDeletePartitionInput";
export * from "../types/BatchDeletePartitionOutput";
export * from "../types/BatchDeletePartitionExceptionsUnion";

export class BatchDeletePartitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDeletePartitionInput,
      OutputTypesUnion,
      BatchDeletePartitionOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchDeletePartition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDeletePartitionInput,
    BatchDeletePartitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchDeletePartitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDeletePartitionInput,
    BatchDeletePartitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDeletePartitionInput, BatchDeletePartitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
