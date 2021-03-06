import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateConnectorDefinitionVersion } from "../model/operations/CreateConnectorDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConnectorDefinitionVersionInput } from "../types/CreateConnectorDefinitionVersionInput";
import { CreateConnectorDefinitionVersionOutput } from "../types/CreateConnectorDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateConnectorDefinitionVersionInput";
export * from "../types/CreateConnectorDefinitionVersionOutput";
export * from "../types/CreateConnectorDefinitionVersionExceptionsUnion";

export class CreateConnectorDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConnectorDefinitionVersionInput,
      OutputTypesUnion,
      CreateConnectorDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateConnectorDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConnectorDefinitionVersionInput,
    CreateConnectorDefinitionVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateConnectorDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateConnectorDefinitionVersionInput,
    CreateConnectorDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateConnectorDefinitionVersionInput,
        CreateConnectorDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
