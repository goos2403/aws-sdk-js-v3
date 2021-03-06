import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetUserPoolMfaConfig } from "../model/operations/SetUserPoolMfaConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetUserPoolMfaConfigInput } from "../types/SetUserPoolMfaConfigInput";
import { SetUserPoolMfaConfigOutput } from "../types/SetUserPoolMfaConfigOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/SetUserPoolMfaConfigInput";
export * from "../types/SetUserPoolMfaConfigOutput";
export * from "../types/SetUserPoolMfaConfigExceptionsUnion";

export class SetUserPoolMfaConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetUserPoolMfaConfigInput,
      OutputTypesUnion,
      SetUserPoolMfaConfigOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = SetUserPoolMfaConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetUserPoolMfaConfigInput,
    SetUserPoolMfaConfigOutput,
    Blob
  >();

  constructor(readonly input: SetUserPoolMfaConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetUserPoolMfaConfigInput,
    SetUserPoolMfaConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        SetUserPoolMfaConfigInput,
        SetUserPoolMfaConfigOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<SetUserPoolMfaConfigInput, SetUserPoolMfaConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
