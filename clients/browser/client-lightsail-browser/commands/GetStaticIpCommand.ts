import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetStaticIp } from "../model/operations/GetStaticIp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetStaticIpInput } from "../types/GetStaticIpInput";
import { GetStaticIpOutput } from "../types/GetStaticIpOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetStaticIpInput";
export * from "../types/GetStaticIpOutput";
export * from "../types/GetStaticIpExceptionsUnion";

export class GetStaticIpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetStaticIpInput,
      OutputTypesUnion,
      GetStaticIpOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = GetStaticIp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetStaticIpInput,
    GetStaticIpOutput,
    Blob
  >();

  constructor(readonly input: GetStaticIpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetStaticIpInput, GetStaticIpOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetStaticIpInput, GetStaticIpOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
