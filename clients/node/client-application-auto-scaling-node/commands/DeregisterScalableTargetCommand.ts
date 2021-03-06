import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterScalableTarget } from "../model/operations/DeregisterScalableTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterScalableTargetInput } from "../types/DeregisterScalableTargetInput";
import { DeregisterScalableTargetOutput } from "../types/DeregisterScalableTargetOutput";
import { ApplicationAutoScalingResolvedConfiguration } from "../ApplicationAutoScalingConfiguration";
export * from "../types/DeregisterScalableTargetInput";
export * from "../types/DeregisterScalableTargetOutput";
export * from "../types/DeregisterScalableTargetExceptionsUnion";

export class DeregisterScalableTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterScalableTargetInput,
      OutputTypesUnion,
      DeregisterScalableTargetOutput,
      ApplicationAutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterScalableTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterScalableTargetInput,
    DeregisterScalableTargetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterScalableTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationAutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterScalableTargetInput,
    DeregisterScalableTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterScalableTargetInput, DeregisterScalableTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
