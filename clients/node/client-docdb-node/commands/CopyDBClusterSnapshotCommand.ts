import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CopyDBClusterSnapshot } from "../model/operations/CopyDBClusterSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyDBClusterSnapshotInput } from "../types/CopyDBClusterSnapshotInput";
import { CopyDBClusterSnapshotOutput } from "../types/CopyDBClusterSnapshotOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/CopyDBClusterSnapshotInput";
export * from "../types/CopyDBClusterSnapshotOutput";
export * from "../types/CopyDBClusterSnapshotExceptionsUnion";

export class CopyDBClusterSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyDBClusterSnapshotInput,
      OutputTypesUnion,
      CopyDBClusterSnapshotOutput,
      DocDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CopyDBClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyDBClusterSnapshotInput,
    CopyDBClusterSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: CopyDBClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CopyDBClusterSnapshotInput,
    CopyDBClusterSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CopyDBClusterSnapshotInput, CopyDBClusterSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
