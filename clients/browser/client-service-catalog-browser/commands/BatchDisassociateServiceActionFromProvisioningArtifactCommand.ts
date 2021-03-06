import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDisassociateServiceActionFromProvisioningArtifact } from "../model/operations/BatchDisassociateServiceActionFromProvisioningArtifact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDisassociateServiceActionFromProvisioningArtifactInput } from "../types/BatchDisassociateServiceActionFromProvisioningArtifactInput";
import { BatchDisassociateServiceActionFromProvisioningArtifactOutput } from "../types/BatchDisassociateServiceActionFromProvisioningArtifactOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/BatchDisassociateServiceActionFromProvisioningArtifactInput";
export * from "../types/BatchDisassociateServiceActionFromProvisioningArtifactOutput";
export * from "../types/BatchDisassociateServiceActionFromProvisioningArtifactExceptionsUnion";

export class BatchDisassociateServiceActionFromProvisioningArtifactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDisassociateServiceActionFromProvisioningArtifactInput,
      OutputTypesUnion,
      BatchDisassociateServiceActionFromProvisioningArtifactOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = BatchDisassociateServiceActionFromProvisioningArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDisassociateServiceActionFromProvisioningArtifactInput,
    BatchDisassociateServiceActionFromProvisioningArtifactOutput,
    Blob
  >();

  constructor(
    readonly input: BatchDisassociateServiceActionFromProvisioningArtifactInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDisassociateServiceActionFromProvisioningArtifactInput,
    BatchDisassociateServiceActionFromProvisioningArtifactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchDisassociateServiceActionFromProvisioningArtifactInput,
        BatchDisassociateServiceActionFromProvisioningArtifactOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
