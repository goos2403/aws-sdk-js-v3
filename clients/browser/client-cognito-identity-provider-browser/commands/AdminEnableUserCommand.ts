import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminEnableUser } from "../model/operations/AdminEnableUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminEnableUserInput } from "../types/AdminEnableUserInput";
import { AdminEnableUserOutput } from "../types/AdminEnableUserOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminEnableUserInput";
export * from "../types/AdminEnableUserOutput";
export * from "../types/AdminEnableUserExceptionsUnion";

export class AdminEnableUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminEnableUserInput,
      OutputTypesUnion,
      AdminEnableUserOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminEnableUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminEnableUserInput,
    AdminEnableUserOutput,
    Blob
  >();

  constructor(readonly input: AdminEnableUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<AdminEnableUserInput, AdminEnableUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminEnableUserInput,
        AdminEnableUserOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminEnableUserInput, AdminEnableUserOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
