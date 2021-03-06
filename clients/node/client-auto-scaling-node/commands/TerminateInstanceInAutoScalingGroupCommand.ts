import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TerminateInstanceInAutoScalingGroup } from "../model/operations/TerminateInstanceInAutoScalingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TerminateInstanceInAutoScalingGroupInput } from "../types/TerminateInstanceInAutoScalingGroupInput";
import { TerminateInstanceInAutoScalingGroupOutput } from "../types/TerminateInstanceInAutoScalingGroupOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/TerminateInstanceInAutoScalingGroupInput";
export * from "../types/TerminateInstanceInAutoScalingGroupOutput";
export * from "../types/TerminateInstanceInAutoScalingGroupExceptionsUnion";

export class TerminateInstanceInAutoScalingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TerminateInstanceInAutoScalingGroupInput,
      OutputTypesUnion,
      TerminateInstanceInAutoScalingGroupOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TerminateInstanceInAutoScalingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateInstanceInAutoScalingGroupInput,
    TerminateInstanceInAutoScalingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: TerminateInstanceInAutoScalingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TerminateInstanceInAutoScalingGroupInput,
    TerminateInstanceInAutoScalingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        TerminateInstanceInAutoScalingGroupInput,
        TerminateInstanceInAutoScalingGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
