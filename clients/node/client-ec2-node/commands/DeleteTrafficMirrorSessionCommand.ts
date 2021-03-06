import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteTrafficMirrorSession } from "../model/operations/DeleteTrafficMirrorSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTrafficMirrorSessionInput } from "../types/DeleteTrafficMirrorSessionInput";
import { DeleteTrafficMirrorSessionOutput } from "../types/DeleteTrafficMirrorSessionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteTrafficMirrorSessionInput";
export * from "../types/DeleteTrafficMirrorSessionOutput";
export * from "../types/DeleteTrafficMirrorSessionExceptionsUnion";

export class DeleteTrafficMirrorSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTrafficMirrorSessionInput,
      OutputTypesUnion,
      DeleteTrafficMirrorSessionOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteTrafficMirrorSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTrafficMirrorSessionInput,
    DeleteTrafficMirrorSessionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTrafficMirrorSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTrafficMirrorSessionInput,
    DeleteTrafficMirrorSessionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteTrafficMirrorSessionInput,
        DeleteTrafficMirrorSessionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
