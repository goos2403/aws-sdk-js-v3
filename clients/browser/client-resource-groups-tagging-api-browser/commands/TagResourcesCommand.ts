import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TagResources } from "../model/operations/TagResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TagResourcesInput } from "../types/TagResourcesInput";
import { TagResourcesOutput } from "../types/TagResourcesOutput";
import { ResourceGroupsTaggingAPIResolvedConfiguration } from "../ResourceGroupsTaggingAPIConfiguration";
export * from "../types/TagResourcesInput";
export * from "../types/TagResourcesOutput";
export * from "../types/TagResourcesExceptionsUnion";

export class TagResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TagResourcesInput,
      OutputTypesUnion,
      TagResourcesOutput,
      ResourceGroupsTaggingAPIResolvedConfiguration,
      Blob
    > {
  readonly model = TagResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TagResourcesInput,
    TagResourcesOutput,
    Blob
  >();

  constructor(readonly input: TagResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ResourceGroupsTaggingAPIResolvedConfiguration
  ): __aws_sdk_types.Handler<TagResourcesInput, TagResourcesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TagResourcesInput, TagResourcesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
