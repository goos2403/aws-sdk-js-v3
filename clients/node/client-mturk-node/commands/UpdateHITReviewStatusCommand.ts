import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateHITReviewStatus } from "../model/operations/UpdateHITReviewStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateHITReviewStatusInput } from "../types/UpdateHITReviewStatusInput";
import { UpdateHITReviewStatusOutput } from "../types/UpdateHITReviewStatusOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/UpdateHITReviewStatusInput";
export * from "../types/UpdateHITReviewStatusOutput";
export * from "../types/UpdateHITReviewStatusExceptionsUnion";

export class UpdateHITReviewStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateHITReviewStatusInput,
      OutputTypesUnion,
      UpdateHITReviewStatusOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateHITReviewStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateHITReviewStatusInput,
    UpdateHITReviewStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateHITReviewStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateHITReviewStatusInput,
    UpdateHITReviewStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateHITReviewStatusInput, UpdateHITReviewStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
