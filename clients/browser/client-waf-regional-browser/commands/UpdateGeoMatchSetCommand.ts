import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateGeoMatchSet } from "../model/operations/UpdateGeoMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGeoMatchSetInput } from "../types/UpdateGeoMatchSetInput";
import { UpdateGeoMatchSetOutput } from "../types/UpdateGeoMatchSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/UpdateGeoMatchSetInput";
export * from "../types/UpdateGeoMatchSetOutput";
export * from "../types/UpdateGeoMatchSetExceptionsUnion";

export class UpdateGeoMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGeoMatchSetInput,
      OutputTypesUnion,
      UpdateGeoMatchSetOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateGeoMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGeoMatchSetInput,
    UpdateGeoMatchSetOutput,
    Blob
  >();

  constructor(readonly input: UpdateGeoMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateGeoMatchSetInput, UpdateGeoMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGeoMatchSetInput, UpdateGeoMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
