import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRoom } from "../model/operations/UpdateRoom";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRoomInput } from "../types/UpdateRoomInput";
import { UpdateRoomOutput } from "../types/UpdateRoomOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/UpdateRoomInput";
export * from "../types/UpdateRoomOutput";
export * from "../types/UpdateRoomExceptionsUnion";

export class UpdateRoomCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRoomInput,
      OutputTypesUnion,
      UpdateRoomOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRoom;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRoomInput,
    UpdateRoomOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRoomInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateRoomInput, UpdateRoomOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRoomInput, UpdateRoomOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
