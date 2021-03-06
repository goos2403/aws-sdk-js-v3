import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetectPHI } from "../model/operations/DetectPHI";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectPHIInput } from "../types/DetectPHIInput";
import { DetectPHIOutput } from "../types/DetectPHIOutput";
import { ComprehendMedicalResolvedConfiguration } from "../ComprehendMedicalConfiguration";
export * from "../types/DetectPHIInput";
export * from "../types/DetectPHIOutput";
export * from "../types/DetectPHIExceptionsUnion";

export class DetectPHICommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectPHIInput,
      OutputTypesUnion,
      DetectPHIOutput,
      ComprehendMedicalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetectPHI;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectPHIInput,
    DetectPHIOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetectPHIInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendMedicalResolvedConfiguration
  ): __aws_sdk_types.Handler<DetectPHIInput, DetectPHIOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectPHIInput, DetectPHIOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
