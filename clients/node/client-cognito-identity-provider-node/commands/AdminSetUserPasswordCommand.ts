import * as __aws_sdk_credential_provider_node from "@aws-sdk/credential-provider-node";
import * as __aws_sdk_hash_node from "@aws-sdk/hash-node";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_region_provider from "@aws-sdk/region-provider";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AdminSetUserPassword } from "../model/operations/AdminSetUserPassword";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminSetUserPasswordInput } from "../types/AdminSetUserPasswordInput";
import { AdminSetUserPasswordOutput } from "../types/AdminSetUserPasswordOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminSetUserPasswordInput";
export * from "../types/AdminSetUserPasswordOutput";
export * from "../types/AdminSetUserPasswordExceptionsUnion";

export class AdminSetUserPasswordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminSetUserPasswordInput,
      OutputTypesUnion,
      AdminSetUserPasswordOutput,
      CognitoIdentityProviderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AdminSetUserPassword;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminSetUserPasswordInput,
    AdminSetUserPasswordOutput,
    _stream.Readable
  >();

  constructor(readonly input: AdminSetUserPasswordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminSetUserPasswordInput,
    AdminSetUserPasswordOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminSetUserPasswordInput,
        AdminSetUserPasswordOutput,
        _stream.Readable
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminSetUserPasswordInput, AdminSetUserPasswordOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
