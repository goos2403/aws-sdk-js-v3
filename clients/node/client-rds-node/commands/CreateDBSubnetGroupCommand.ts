import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDBSubnetGroup } from "../model/operations/CreateDBSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBSubnetGroupInput } from "../types/CreateDBSubnetGroupInput";
import { CreateDBSubnetGroupOutput } from "../types/CreateDBSubnetGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CreateDBSubnetGroupInput";
export * from "../types/CreateDBSubnetGroupOutput";
export * from "../types/CreateDBSubnetGroupExceptionsUnion";

export class CreateDBSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBSubnetGroupInput,
      OutputTypesUnion,
      CreateDBSubnetGroupOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDBSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBSubnetGroupInput,
    CreateDBSubnetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDBSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDBSubnetGroupInput,
    CreateDBSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDBSubnetGroupInput, CreateDBSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
