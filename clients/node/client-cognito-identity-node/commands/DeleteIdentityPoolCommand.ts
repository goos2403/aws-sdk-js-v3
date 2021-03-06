import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteIdentityPool } from "../model/operations/DeleteIdentityPool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIdentityPoolInput } from "../types/DeleteIdentityPoolInput";
import { DeleteIdentityPoolOutput } from "../types/DeleteIdentityPoolOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/DeleteIdentityPoolInput";
export * from "../types/DeleteIdentityPoolOutput";
export * from "../types/DeleteIdentityPoolExceptionsUnion";

export class DeleteIdentityPoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIdentityPoolInput,
      OutputTypesUnion,
      DeleteIdentityPoolOutput,
      CognitoIdentityResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteIdentityPool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIdentityPoolInput,
    DeleteIdentityPoolOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteIdentityPoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteIdentityPoolInput,
    DeleteIdentityPoolOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIdentityPoolInput, DeleteIdentityPoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
