import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteImageBuilder } from "../model/operations/DeleteImageBuilder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteImageBuilderInput } from "../types/DeleteImageBuilderInput";
import { DeleteImageBuilderOutput } from "../types/DeleteImageBuilderOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DeleteImageBuilderInput";
export * from "../types/DeleteImageBuilderOutput";
export * from "../types/DeleteImageBuilderExceptionsUnion";

export class DeleteImageBuilderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteImageBuilderInput,
      OutputTypesUnion,
      DeleteImageBuilderOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteImageBuilder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteImageBuilderInput,
    DeleteImageBuilderOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteImageBuilderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteImageBuilderInput,
    DeleteImageBuilderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteImageBuilderInput, DeleteImageBuilderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
