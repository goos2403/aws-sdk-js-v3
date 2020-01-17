import {
  DocDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DocDBClient";
import {
  DBClusterSnapshotMessage,
  DescribeDBClusterSnapshotsMessage
} from "../models/index";
import {
  deserializeAws_queryDescribeDBClusterSnapshotsCommand,
  serializeAws_queryDescribeDBClusterSnapshotsCommand
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

export type DescribeDBClusterSnapshotsCommandInput = DescribeDBClusterSnapshotsMessage;
export type DescribeDBClusterSnapshotsCommandOutput = DBClusterSnapshotMessage;

export class DescribeDBClusterSnapshotsCommand extends $Command<
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBClusterSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeDBClusterSnapshotsCommandInput,
    DescribeDBClusterSnapshotsCommandOutput
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
    input: DescribeDBClusterSnapshotsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBClusterSnapshotsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeDBClusterSnapshotsCommandOutput> {
    return deserializeAws_queryDescribeDBClusterSnapshotsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
