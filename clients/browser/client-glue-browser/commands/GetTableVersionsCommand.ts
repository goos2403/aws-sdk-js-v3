import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetTableVersions } from "../model/operations/GetTableVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTableVersionsInput } from "../types/GetTableVersionsInput";
import { GetTableVersionsOutput } from "../types/GetTableVersionsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetTableVersionsInput";
export * from "../types/GetTableVersionsOutput";
export * from "../types/GetTableVersionsExceptionsUnion";

export class GetTableVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTableVersionsInput,
      OutputTypesUnion,
      GetTableVersionsOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetTableVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTableVersionsInput,
    GetTableVersionsOutput,
    Blob
  >();

  constructor(readonly input: GetTableVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTableVersionsInput, GetTableVersionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTableVersionsInput, GetTableVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
