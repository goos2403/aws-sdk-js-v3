import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateOrganizationalUnit } from "../model/operations/UpdateOrganizationalUnit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateOrganizationalUnitInput } from "../types/UpdateOrganizationalUnitInput";
import { UpdateOrganizationalUnitOutput } from "../types/UpdateOrganizationalUnitOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/UpdateOrganizationalUnitInput";
export * from "../types/UpdateOrganizationalUnitOutput";
export * from "../types/UpdateOrganizationalUnitExceptionsUnion";

export class UpdateOrganizationalUnitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateOrganizationalUnitInput,
      OutputTypesUnion,
      UpdateOrganizationalUnitOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateOrganizationalUnit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateOrganizationalUnitInput,
    UpdateOrganizationalUnitOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateOrganizationalUnitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateOrganizationalUnitInput,
    UpdateOrganizationalUnitOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateOrganizationalUnitInput, UpdateOrganizationalUnitOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
