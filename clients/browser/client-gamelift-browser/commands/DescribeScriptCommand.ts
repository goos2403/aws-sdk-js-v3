import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeScript } from "../model/operations/DescribeScript";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScriptInput } from "../types/DescribeScriptInput";
import { DescribeScriptOutput } from "../types/DescribeScriptOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeScriptInput";
export * from "../types/DescribeScriptOutput";
export * from "../types/DescribeScriptExceptionsUnion";

export class DescribeScriptCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScriptInput,
      OutputTypesUnion,
      DescribeScriptOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeScript;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScriptInput,
    DescribeScriptOutput,
    Blob
  >();

  constructor(readonly input: DescribeScriptInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeScriptInput, DescribeScriptOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeScriptInput, DescribeScriptOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
