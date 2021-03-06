import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRiskConfiguration } from "../model/operations/DescribeRiskConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRiskConfigurationInput } from "../types/DescribeRiskConfigurationInput";
import { DescribeRiskConfigurationOutput } from "../types/DescribeRiskConfigurationOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/DescribeRiskConfigurationInput";
export * from "../types/DescribeRiskConfigurationOutput";
export * from "../types/DescribeRiskConfigurationExceptionsUnion";

export class DescribeRiskConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRiskConfigurationInput,
      OutputTypesUnion,
      DescribeRiskConfigurationOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeRiskConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRiskConfigurationInput,
    DescribeRiskConfigurationOutput,
    Blob
  >();

  constructor(readonly input: DescribeRiskConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRiskConfigurationInput,
    DescribeRiskConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        DescribeRiskConfigurationInput,
        DescribeRiskConfigurationOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<DescribeRiskConfigurationInput, DescribeRiskConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
