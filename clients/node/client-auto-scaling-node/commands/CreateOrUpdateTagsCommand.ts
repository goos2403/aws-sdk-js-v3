import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateOrUpdateTags } from "../model/operations/CreateOrUpdateTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateOrUpdateTagsInput } from "../types/CreateOrUpdateTagsInput";
import { CreateOrUpdateTagsOutput } from "../types/CreateOrUpdateTagsOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/CreateOrUpdateTagsInput";
export * from "../types/CreateOrUpdateTagsOutput";
export * from "../types/CreateOrUpdateTagsExceptionsUnion";

export class CreateOrUpdateTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateOrUpdateTagsInput,
      OutputTypesUnion,
      CreateOrUpdateTagsOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateOrUpdateTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateOrUpdateTagsInput,
    CreateOrUpdateTagsOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateOrUpdateTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateOrUpdateTagsInput,
    CreateOrUpdateTagsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateOrUpdateTagsInput, CreateOrUpdateTagsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
