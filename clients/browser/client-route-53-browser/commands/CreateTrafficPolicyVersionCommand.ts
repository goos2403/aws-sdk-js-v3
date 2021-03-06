import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTrafficPolicyVersion } from "../model/operations/CreateTrafficPolicyVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTrafficPolicyVersionInput } from "../types/CreateTrafficPolicyVersionInput";
import { CreateTrafficPolicyVersionOutput } from "../types/CreateTrafficPolicyVersionOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/CreateTrafficPolicyVersionInput";
export * from "../types/CreateTrafficPolicyVersionOutput";
export * from "../types/CreateTrafficPolicyVersionExceptionsUnion";

export class CreateTrafficPolicyVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTrafficPolicyVersionInput,
      OutputTypesUnion,
      CreateTrafficPolicyVersionOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTrafficPolicyVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTrafficPolicyVersionInput,
    CreateTrafficPolicyVersionOutput,
    Blob
  >();

  constructor(readonly input: CreateTrafficPolicyVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTrafficPolicyVersionInput,
    CreateTrafficPolicyVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_route53_id_normalizer_middleware.idNormalizerMiddleware,
      {
        step: "initialize",
        priority: 0,
        tags: { NORMALIZE_ROUTE53_IDS: true }
      }
    );
    return stack.resolve(
      handler<
        CreateTrafficPolicyVersionInput,
        CreateTrafficPolicyVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
