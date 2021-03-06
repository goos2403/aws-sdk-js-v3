import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAttachedUserPolicies } from "../model/operations/ListAttachedUserPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAttachedUserPoliciesInput } from "../types/ListAttachedUserPoliciesInput";
import { ListAttachedUserPoliciesOutput } from "../types/ListAttachedUserPoliciesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListAttachedUserPoliciesInput";
export * from "../types/ListAttachedUserPoliciesOutput";
export * from "../types/ListAttachedUserPoliciesExceptionsUnion";

export class ListAttachedUserPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAttachedUserPoliciesInput,
      OutputTypesUnion,
      ListAttachedUserPoliciesOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAttachedUserPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAttachedUserPoliciesInput,
    ListAttachedUserPoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAttachedUserPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAttachedUserPoliciesInput,
    ListAttachedUserPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAttachedUserPoliciesInput, ListAttachedUserPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
