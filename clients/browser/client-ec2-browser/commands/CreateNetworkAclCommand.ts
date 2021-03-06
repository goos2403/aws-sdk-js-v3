import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateNetworkAcl } from "../model/operations/CreateNetworkAcl";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNetworkAclInput } from "../types/CreateNetworkAclInput";
import { CreateNetworkAclOutput } from "../types/CreateNetworkAclOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateNetworkAclInput";
export * from "../types/CreateNetworkAclOutput";
export * from "../types/CreateNetworkAclExceptionsUnion";

export class CreateNetworkAclCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNetworkAclInput,
      OutputTypesUnion,
      CreateNetworkAclOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateNetworkAcl;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNetworkAclInput,
    CreateNetworkAclOutput,
    Blob
  >();

  constructor(readonly input: CreateNetworkAclInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateNetworkAclInput, CreateNetworkAclOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNetworkAclInput, CreateNetworkAclOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
