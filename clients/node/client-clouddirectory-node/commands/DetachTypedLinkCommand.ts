import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetachTypedLink } from "../model/operations/DetachTypedLink";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachTypedLinkInput } from "../types/DetachTypedLinkInput";
import { DetachTypedLinkOutput } from "../types/DetachTypedLinkOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/DetachTypedLinkInput";
export * from "../types/DetachTypedLinkOutput";
export * from "../types/DetachTypedLinkExceptionsUnion";

export class DetachTypedLinkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachTypedLinkInput,
      OutputTypesUnion,
      DetachTypedLinkOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetachTypedLink;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachTypedLinkInput,
    DetachTypedLinkOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetachTypedLinkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachTypedLinkInput, DetachTypedLinkOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachTypedLinkInput, DetachTypedLinkOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
