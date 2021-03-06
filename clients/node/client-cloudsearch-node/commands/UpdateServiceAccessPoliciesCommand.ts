import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateServiceAccessPolicies } from "../model/operations/UpdateServiceAccessPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateServiceAccessPoliciesInput } from "../types/UpdateServiceAccessPoliciesInput";
import { UpdateServiceAccessPoliciesOutput } from "../types/UpdateServiceAccessPoliciesOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/UpdateServiceAccessPoliciesInput";
export * from "../types/UpdateServiceAccessPoliciesOutput";
export * from "../types/UpdateServiceAccessPoliciesExceptionsUnion";

export class UpdateServiceAccessPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateServiceAccessPoliciesInput,
      OutputTypesUnion,
      UpdateServiceAccessPoliciesOutput,
      CloudSearchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateServiceAccessPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateServiceAccessPoliciesInput,
    UpdateServiceAccessPoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateServiceAccessPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateServiceAccessPoliciesInput,
    UpdateServiceAccessPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateServiceAccessPoliciesInput,
        UpdateServiceAccessPoliciesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
