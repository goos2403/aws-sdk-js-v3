import * as __aws_sdk_apply_body_checksum_middleware from "@aws-sdk/apply-body-checksum-middleware";
import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_hash_node from "@aws-sdk/hash-node";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as __aws_sdk_util_base64_node from "@aws-sdk/util-base64-node";
import * as _stream from "stream";
import { PutBucketLifecycle } from "../model/operations/PutBucketLifecycle";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutBucketLifecycleInput } from "../types/PutBucketLifecycleInput";
import { PutBucketLifecycleOutput } from "../types/PutBucketLifecycleOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutBucketLifecycleInput";
export * from "../types/PutBucketLifecycleOutput";
export * from "../types/PutBucketLifecycleExceptionsUnion";

export class PutBucketLifecycleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutBucketLifecycleInput,
      OutputTypesUnion,
      PutBucketLifecycleOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutBucketLifecycle;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutBucketLifecycleInput,
    PutBucketLifecycleOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutBucketLifecycleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutBucketLifecycleInput,
    PutBucketLifecycleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_bucket_endpoint_middleware.bucketEndpointMiddleware({
        forcePathStyle: configuration.forcePathStyle,
        preformedBucketEndpoint: configuration.bucketEndpoint,
        useAccelerateEndpoint: configuration.useAccelerateEndpoint,
        useDualstackEndpoint: configuration.useDualstackEndpoint
      }),
      {
        step: "build",
        priority: 0
      }
    );
    stack.add(
      __aws_sdk_apply_body_checksum_middleware.applyBodyChecksumMiddleware(
        "Content-MD5",
        configuration.md5,
        configuration.base64Encoder,
        configuration.streamHasher
      ),
      {
        step: "build",
        priority: 0,
        tags: { BODY_CHECKSUM: true }
      }
    );
    return stack.resolve(
      handler<PutBucketLifecycleInput, PutBucketLifecycleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
