import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteCertificateAuthority } from "../model/operations/DeleteCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCertificateAuthorityInput } from "../types/DeleteCertificateAuthorityInput";
import { DeleteCertificateAuthorityOutput } from "../types/DeleteCertificateAuthorityOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/DeleteCertificateAuthorityInput";
export * from "../types/DeleteCertificateAuthorityOutput";
export * from "../types/DeleteCertificateAuthorityExceptionsUnion";

export class DeleteCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCertificateAuthorityInput,
      OutputTypesUnion,
      DeleteCertificateAuthorityOutput,
      ACMPCAResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCertificateAuthorityInput,
    DeleteCertificateAuthorityOutput,
    Blob
  >();

  constructor(readonly input: DeleteCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCertificateAuthorityInput,
    DeleteCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteCertificateAuthorityInput,
        DeleteCertificateAuthorityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
