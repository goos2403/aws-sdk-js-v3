import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEventCategories } from "../model/operations/DescribeEventCategories";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventCategoriesInput } from "../types/DescribeEventCategoriesInput";
import { DescribeEventCategoriesOutput } from "../types/DescribeEventCategoriesOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeEventCategoriesInput";
export * from "../types/DescribeEventCategoriesOutput";
export * from "../types/DescribeEventCategoriesExceptionsUnion";

export class DescribeEventCategoriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventCategoriesInput,
      OutputTypesUnion,
      DescribeEventCategoriesOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEventCategories;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventCategoriesInput,
    DescribeEventCategoriesOutput,
    Blob
  >();

  constructor(readonly input: DescribeEventCategoriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEventCategoriesInput,
    DescribeEventCategoriesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventCategoriesInput, DescribeEventCategoriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
