import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListApps } from "../model/operations/ListApps";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAppsInput } from "../types/ListAppsInput";
import { ListAppsOutput } from "../types/ListAppsOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/ListAppsInput";
export * from "../types/ListAppsOutput";
export * from "../types/ListAppsExceptionsUnion";

export class ListAppsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAppsInput,
      OutputTypesUnion,
      ListAppsOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListApps;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAppsInput,
    ListAppsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAppsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAppsInput, ListAppsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAppsInput, ListAppsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
