import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachVolume } from "../model/operations/AttachVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachVolumeInput } from "../types/AttachVolumeInput";
import { AttachVolumeOutput } from "../types/AttachVolumeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AttachVolumeInput";
export * from "../types/AttachVolumeOutput";
export * from "../types/AttachVolumeExceptionsUnion";

export class AttachVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachVolumeInput,
      OutputTypesUnion,
      AttachVolumeOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AttachVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachVolumeInput,
    AttachVolumeOutput,
    Blob
  >();

  constructor(readonly input: AttachVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachVolumeInput, AttachVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachVolumeInput, AttachVolumeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
