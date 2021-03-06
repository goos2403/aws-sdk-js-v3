import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSkillGroup } from "../model/operations/UpdateSkillGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSkillGroupInput } from "../types/UpdateSkillGroupInput";
import { UpdateSkillGroupOutput } from "../types/UpdateSkillGroupOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/UpdateSkillGroupInput";
export * from "../types/UpdateSkillGroupOutput";
export * from "../types/UpdateSkillGroupExceptionsUnion";

export class UpdateSkillGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSkillGroupInput,
      OutputTypesUnion,
      UpdateSkillGroupOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateSkillGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSkillGroupInput,
    UpdateSkillGroupOutput,
    Blob
  >();

  constructor(readonly input: UpdateSkillGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateSkillGroupInput, UpdateSkillGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSkillGroupInput, UpdateSkillGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
