import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCampaignVersion } from "../model/operations/GetCampaignVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCampaignVersionInput } from "../types/GetCampaignVersionInput";
import { GetCampaignVersionOutput } from "../types/GetCampaignVersionOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetCampaignVersionInput";
export * from "../types/GetCampaignVersionOutput";
export * from "../types/GetCampaignVersionExceptionsUnion";

export class GetCampaignVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCampaignVersionInput,
      OutputTypesUnion,
      GetCampaignVersionOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCampaignVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCampaignVersionInput,
    GetCampaignVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCampaignVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCampaignVersionInput,
    GetCampaignVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCampaignVersionInput, GetCampaignVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
