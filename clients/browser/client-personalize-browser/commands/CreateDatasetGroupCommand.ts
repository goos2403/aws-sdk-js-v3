import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDatasetGroup } from "../model/operations/CreateDatasetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDatasetGroupInput } from "../types/CreateDatasetGroupInput";
import { CreateDatasetGroupOutput } from "../types/CreateDatasetGroupOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/CreateDatasetGroupInput";
export * from "../types/CreateDatasetGroupOutput";
export * from "../types/CreateDatasetGroupExceptionsUnion";

export class CreateDatasetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDatasetGroupInput,
      OutputTypesUnion,
      CreateDatasetGroupOutput,
      PersonalizeResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDatasetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDatasetGroupInput,
    CreateDatasetGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateDatasetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDatasetGroupInput,
    CreateDatasetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDatasetGroupInput, CreateDatasetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
