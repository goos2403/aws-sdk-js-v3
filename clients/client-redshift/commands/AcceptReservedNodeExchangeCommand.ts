import {
  RedshiftClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RedshiftClient";
import {
  AcceptReservedNodeExchangeInputMessage,
  AcceptReservedNodeExchangeOutputMessage
} from "../models/index";
import {
  deserializeAws_queryAcceptReservedNodeExchangeCommand,
  serializeAws_queryAcceptReservedNodeExchangeCommand
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type AcceptReservedNodeExchangeCommandInput = AcceptReservedNodeExchangeInputMessage;
export type AcceptReservedNodeExchangeCommandOutput = AcceptReservedNodeExchangeOutputMessage;

export class AcceptReservedNodeExchangeCommand extends $Command<
  AcceptReservedNodeExchangeCommandInput,
  AcceptReservedNodeExchangeCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptReservedNodeExchangeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AcceptReservedNodeExchangeCommandInput,
    AcceptReservedNodeExchangeCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AcceptReservedNodeExchangeCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAcceptReservedNodeExchangeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<AcceptReservedNodeExchangeCommandOutput> {
    return deserializeAws_queryAcceptReservedNodeExchangeCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
