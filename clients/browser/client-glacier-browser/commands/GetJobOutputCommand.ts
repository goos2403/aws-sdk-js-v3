import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetJobOutput } from "../model/operations/GetJobOutput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobOutputInput } from "../types/GetJobOutputInput";
import { GetJobOutputOutput } from "../types/GetJobOutputOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/GetJobOutputInput";
export * from "../types/GetJobOutputOutput";
export * from "../types/GetJobOutputExceptionsUnion";

export class GetJobOutputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobOutputInput,
      OutputTypesUnion,
      GetJobOutputOutput,
      GlacierResolvedConfiguration,
      Blob
    > {
  readonly model = GetJobOutput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobOutputInput,
    GetJobOutputOutput,
    Blob
  >();

  constructor(readonly input: GetJobOutputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobOutputInput, GetJobOutputOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobOutputInput, GetJobOutputOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
