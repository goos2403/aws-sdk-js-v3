import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateMesh } from "../model/operations/CreateMesh";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMeshInput } from "../types/CreateMeshInput";
import { CreateMeshOutput } from "../types/CreateMeshOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/CreateMeshInput";
export * from "../types/CreateMeshOutput";
export * from "../types/CreateMeshExceptionsUnion";

export class CreateMeshCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMeshInput,
      OutputTypesUnion,
      CreateMeshOutput,
      AppMeshResolvedConfiguration,
      Blob
    > {
  readonly model = CreateMesh;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMeshInput,
    CreateMeshOutput,
    Blob
  >();

  constructor(readonly input: CreateMeshInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateMeshInput, CreateMeshOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateMeshInput, CreateMeshOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
