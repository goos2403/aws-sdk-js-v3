import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPolicyPrincipals } from "../model/operations/ListPolicyPrincipals";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPolicyPrincipalsInput } from "../types/ListPolicyPrincipalsInput";
import { ListPolicyPrincipalsOutput } from "../types/ListPolicyPrincipalsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListPolicyPrincipalsInput";
export * from "../types/ListPolicyPrincipalsOutput";
export * from "../types/ListPolicyPrincipalsExceptionsUnion";

export class ListPolicyPrincipalsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPolicyPrincipalsInput,
      OutputTypesUnion,
      ListPolicyPrincipalsOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListPolicyPrincipals;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPolicyPrincipalsInput,
    ListPolicyPrincipalsOutput,
    Blob
  >();

  constructor(readonly input: ListPolicyPrincipalsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPolicyPrincipalsInput,
    ListPolicyPrincipalsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPolicyPrincipalsInput, ListPolicyPrincipalsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
