import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUser } from "../model/operations/GetUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUserInput } from "../types/GetUserInput";
import { GetUserOutput } from "../types/GetUserOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/GetUserInput";
export * from "../types/GetUserOutput";
export * from "../types/GetUserExceptionsUnion";

export class GetUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUserInput,
      OutputTypesUnion,
      GetUserOutput,
      CognitoIdentityProviderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUserInput,
    GetUserOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUserInput, GetUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUserInput, GetUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
