// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file google/longrunning/operations.proto (package google.longrunning, syntax proto3)
/* eslint-disable */

import type { GenExtension, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { extDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../api/annotations_pb";
import { file_google_api_client } from "../api/client_pb";
import type { Any, Duration, EmptySchema, MethodOptions } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any, file_google_protobuf_descriptor, file_google_protobuf_duration, file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import type { Status } from "../rpc/status_pb";
import { file_google_rpc_status } from "../rpc/status_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/longrunning/operations.proto.
 */
export const file_google_longrunning_operations: GenFile = /*@__PURE__*/
  fileDesc("CiNnb29nbGUvbG9uZ3J1bm5pbmcvb3BlcmF0aW9ucy5wcm90bxISZ29vZ2xlLmxvbmdydW5uaW5nIqgBCglPcGVyYXRpb24SDAoEbmFtZRgBIAEoCRImCghtZXRhZGF0YRgCIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSDAoEZG9uZRgDIAEoCBIjCgVlcnJvchgEIAEoCzISLmdvb2dsZS5ycGMuU3RhdHVzSAASKAoIcmVzcG9uc2UYBSABKAsyFC5nb29nbGUucHJvdG9idWYuQW55SABCCAoGcmVzdWx0IiMKE0dldE9wZXJhdGlvblJlcXVlc3QSDAoEbmFtZRgBIAEoCSJcChVMaXN0T3BlcmF0aW9uc1JlcXVlc3QSDAoEbmFtZRgEIAEoCRIOCgZmaWx0ZXIYASABKAkSEQoJcGFnZV9zaXplGAIgASgFEhIKCnBhZ2VfdG9rZW4YAyABKAkiZAoWTGlzdE9wZXJhdGlvbnNSZXNwb25zZRIxCgpvcGVyYXRpb25zGAEgAygLMh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbhIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkiJgoWQ2FuY2VsT3BlcmF0aW9uUmVxdWVzdBIMCgRuYW1lGAEgASgJIiYKFkRlbGV0ZU9wZXJhdGlvblJlcXVlc3QSDAoEbmFtZRgBIAEoCSJQChRXYWl0T3BlcmF0aW9uUmVxdWVzdBIMCgRuYW1lGAEgASgJEioKB3RpbWVvdXQYAiABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb24iPQoNT3BlcmF0aW9uSW5mbxIVCg1yZXNwb25zZV90eXBlGAEgASgJEhUKDW1ldGFkYXRhX3R5cGUYAiABKAkyqgUKCk9wZXJhdGlvbnMSlAEKDkxpc3RPcGVyYXRpb25zEikuZ29vZ2xlLmxvbmdydW5uaW5nLkxpc3RPcGVyYXRpb25zUmVxdWVzdBoqLmdvb2dsZS5sb25ncnVubmluZy5MaXN0T3BlcmF0aW9uc1Jlc3BvbnNlIivaQQtuYW1lLGZpbHRlcoLT5JMCFxIVL3YxL3tuYW1lPW9wZXJhdGlvbnN9En8KDEdldE9wZXJhdGlvbhInLmdvb2dsZS5sb25ncnVubmluZy5HZXRPcGVyYXRpb25SZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiIn2kEEbmFtZYLT5JMCGhIYL3YxL3tuYW1lPW9wZXJhdGlvbnMvKip9En4KD0RlbGV0ZU9wZXJhdGlvbhIqLmdvb2dsZS5sb25ncnVubmluZy5EZWxldGVPcGVyYXRpb25SZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5IifaQQRuYW1lgtPkkwIaKhgvdjEve25hbWU9b3BlcmF0aW9ucy8qKn0SiAEKD0NhbmNlbE9wZXJhdGlvbhIqLmdvb2dsZS5sb25ncnVubmluZy5DYW5jZWxPcGVyYXRpb25SZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5IjHaQQRuYW1lgtPkkwIkOgEqIh8vdjEve25hbWU9b3BlcmF0aW9ucy8qKn06Y2FuY2VsEloKDVdhaXRPcGVyYXRpb24SKC5nb29nbGUubG9uZ3J1bm5pbmcuV2FpdE9wZXJhdGlvblJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIgAaHcpBGmxvbmdydW5uaW5nLmdvb2dsZWFwaXMuY29tOmkKDm9wZXJhdGlvbl9pbmZvEh4uZ29vZ2xlLnByb3RvYnVmLk1ldGhvZE9wdGlvbnMYmQggASgLMiEuZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbkluZm9SDW9wZXJhdGlvbkluZm9CnQEKFmNvbS5nb29nbGUubG9uZ3J1bm5pbmdCD09wZXJhdGlvbnNQcm90b1ABWkNjbG91ZC5nb29nbGUuY29tL2dvL2xvbmdydW5uaW5nL2F1dG9nZW4vbG9uZ3J1bm5pbmdwYjtsb25ncnVubmluZ3Bi+AEBqgISR29vZ2xlLkxvbmdSdW5uaW5nygISR29vZ2xlXExvbmdSdW5uaW5nYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_protobuf_any, file_google_protobuf_duration, file_google_protobuf_empty, file_google_rpc_status, file_google_protobuf_descriptor]);

/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 *
 * @generated from message google.longrunning.Operation
 */
export type Operation = Message<"google.longrunning.Operation"> & {
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the
   * `name` should be a resource name ending with `operations/{unique_id}`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time.
   * Some services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   *
   * @generated from field: google.protobuf.Any metadata = 2;
   */
  metadata?: Any;

  /**
   * If the value is `false`, it means the operation is still in progress.
   * If `true`, the operation is completed, and either `error` or `response` is
   * available.
   *
   * @generated from field: bool done = 3;
   */
  done: boolean;

  /**
   * The operation result, which can be either an `error` or a valid `response`.
   * If `done` == `false`, neither `error` nor `response` is set.
   * If `done` == `true`, exactly one of `error` or `response` is set.
   *
   * @generated from oneof google.longrunning.Operation.result
   */
  result: {
    /**
     * The error result of the operation in case of failure or cancellation.
     *
     * @generated from field: google.rpc.Status error = 4;
     */
    value: Status;
    case: "error";
  } | {
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx`
     * is the original method name.  For example, if the original method name
     * is `TakeSnapshot()`, the inferred response type is
     * `TakeSnapshotResponse`.
     *
     * @generated from field: google.protobuf.Any response = 5;
     */
    value: Any;
    case: "response";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.longrunning.Operation.
 * Use `create(OperationSchema)` to create a new message.
 */
export const OperationSchema: GenMessage<Operation> = /*@__PURE__*/
  messageDesc(file_google_longrunning_operations, 0);

/**
 * The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation].
 *
 * @generated from message google.longrunning.GetOperationRequest
 */
export type GetOperationRequest = Message<"google.longrunning.GetOperationRequest"> & {
  /**
   * The name of the operation resource.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.longrunning.GetOperationRequest.
 * Use `create(GetOperationRequestSchema)` to create a new message.
 */
export const GetOperationRequestSchema: GenMessage<GetOperationRequest> = /*@__PURE__*/
  messageDesc(file_google_longrunning_operations, 1);

/**
 * The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations].
 *
 * @generated from message google.longrunning.ListOperationsRequest
 */
export type ListOperationsRequest = Message<"google.longrunning.ListOperationsRequest"> & {
  /**
   * The name of the operation's parent resource.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * The standard list filter.
   *
   * @generated from field: string filter = 1;
   */
  filter: string;

  /**
   * The standard list page size.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * The standard list page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.longrunning.ListOperationsRequest.
 * Use `create(ListOperationsRequestSchema)` to create a new message.
 */
export const ListOperationsRequestSchema: GenMessage<ListOperationsRequest> = /*@__PURE__*/
  messageDesc(file_google_longrunning_operations, 2);

/**
 * The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations].
 *
 * @generated from message google.longrunning.ListOperationsResponse
 */
export type ListOperationsResponse = Message<"google.longrunning.ListOperationsResponse"> & {
  /**
   * A list of operations that matches the specified filter in the request.
   *
   * @generated from field: repeated google.longrunning.Operation operations = 1;
   */
  operations: Operation[];

  /**
   * The standard List next-page token.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.longrunning.ListOperationsResponse.
 * Use `create(ListOperationsResponseSchema)` to create a new message.
 */
export const ListOperationsResponseSchema: GenMessage<ListOperationsResponse> = /*@__PURE__*/
  messageDesc(file_google_longrunning_operations, 3);

/**
 * The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation].
 *
 * @generated from message google.longrunning.CancelOperationRequest
 */
export type CancelOperationRequest = Message<"google.longrunning.CancelOperationRequest"> & {
  /**
   * The name of the operation resource to be cancelled.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.longrunning.CancelOperationRequest.
 * Use `create(CancelOperationRequestSchema)` to create a new message.
 */
export const CancelOperationRequestSchema: GenMessage<CancelOperationRequest> = /*@__PURE__*/
  messageDesc(file_google_longrunning_operations, 4);

/**
 * The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation].
 *
 * @generated from message google.longrunning.DeleteOperationRequest
 */
export type DeleteOperationRequest = Message<"google.longrunning.DeleteOperationRequest"> & {
  /**
   * The name of the operation resource to be deleted.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.longrunning.DeleteOperationRequest.
 * Use `create(DeleteOperationRequestSchema)` to create a new message.
 */
export const DeleteOperationRequestSchema: GenMessage<DeleteOperationRequest> = /*@__PURE__*/
  messageDesc(file_google_longrunning_operations, 5);

/**
 * The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation].
 *
 * @generated from message google.longrunning.WaitOperationRequest
 */
export type WaitOperationRequest = Message<"google.longrunning.WaitOperationRequest"> & {
  /**
   * The name of the operation resource to wait on.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The maximum duration to wait before timing out. If left blank, the wait
   * will be at most the time permitted by the underlying HTTP/RPC protocol.
   * If RPC context deadline is also specified, the shorter one will be used.
   *
   * @generated from field: google.protobuf.Duration timeout = 2;
   */
  timeout?: Duration;
};

/**
 * Describes the message google.longrunning.WaitOperationRequest.
 * Use `create(WaitOperationRequestSchema)` to create a new message.
 */
export const WaitOperationRequestSchema: GenMessage<WaitOperationRequest> = /*@__PURE__*/
  messageDesc(file_google_longrunning_operations, 6);

/**
 * A message representing the message types used by a long-running operation.
 *
 * Example:
 *
 *   rpc LongRunningRecognize(LongRunningRecognizeRequest)
 *       returns (google.longrunning.Operation) {
 *     option (google.longrunning.operation_info) = {
 *       response_type: "LongRunningRecognizeResponse"
 *       metadata_type: "LongRunningRecognizeMetadata"
 *     };
 *   }
 *
 * @generated from message google.longrunning.OperationInfo
 */
export type OperationInfo = Message<"google.longrunning.OperationInfo"> & {
  /**
   * Required. The message name of the primary return type for this
   * long-running operation.
   * This type will be used to deserialize the LRO's response.
   *
   * If the response is in a different package from the rpc, a fully-qualified
   * message name must be used (e.g. `google.protobuf.Struct`).
   *
   * Note: Altering this value constitutes a breaking change.
   *
   * @generated from field: string response_type = 1;
   */
  responseType: string;

  /**
   * Required. The message name of the metadata type for this long-running
   * operation.
   *
   * If the response is in a different package from the rpc, a fully-qualified
   * message name must be used (e.g. `google.protobuf.Struct`).
   *
   * Note: Altering this value constitutes a breaking change.
   *
   * @generated from field: string metadata_type = 2;
   */
  metadataType: string;
};

/**
 * Describes the message google.longrunning.OperationInfo.
 * Use `create(OperationInfoSchema)` to create a new message.
 */
export const OperationInfoSchema: GenMessage<OperationInfo> = /*@__PURE__*/
  messageDesc(file_google_longrunning_operations, 7);

/**
 * Manages long-running operations with an API service.
 *
 * When an API method normally takes long time to complete, it can be designed
 * to return [Operation][google.longrunning.Operation] to the client, and the client can use this
 * interface to receive the real response asynchronously by polling the
 * operation resource, or pass the operation resource to another API (such as
 * Google Cloud Pub/Sub API) to receive the response.  Any API service that
 * returns long-running operations should implement the `Operations` interface
 * so developers can have a consistent client experience.
 *
 * @generated from service google.longrunning.Operations
 */
export const Operations: GenService<{
  /**
   * Lists operations that match the specified filter in the request. If the
   * server doesn't support this method, it returns `UNIMPLEMENTED`.
   *
   * NOTE: the `name` binding allows API services to override the binding
   * to use different resource name schemes, such as `users/*\/operations`. To
   * override the binding, API services can add a binding such as
   * `"/v1/{name=users/*}/operations"` to their service configuration.
   * For backwards compatibility, the default name includes the operations
   * collection id, however overriding users must ensure the name binding
   * is the parent resource, without the operations collection id.
   *
   * @generated from rpc google.longrunning.Operations.ListOperations
   */
  listOperations: {
    methodKind: "unary";
    input: typeof ListOperationsRequestSchema;
    output: typeof ListOperationsResponseSchema;
  },
  /**
   * Gets the latest state of a long-running operation.  Clients can use this
   * method to poll the operation result at intervals as recommended by the API
   * service.
   *
   * @generated from rpc google.longrunning.Operations.GetOperation
   */
  getOperation: {
    methodKind: "unary";
    input: typeof GetOperationRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Deletes a long-running operation. This method indicates that the client is
   * no longer interested in the operation result. It does not cancel the
   * operation. If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   *
   * @generated from rpc google.longrunning.Operations.DeleteOperation
   */
  deleteOperation: {
    methodKind: "unary";
    input: typeof DeleteOperationRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Starts asynchronous cancellation on a long-running operation.  The server
   * makes a best effort to cancel the operation, but success is not
   * guaranteed.  If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
   * [Operations.GetOperation][google.longrunning.Operations.GetOperation] or
   * other methods to check whether the cancellation succeeded or whether the
   * operation completed despite cancellation. On successful cancellation,
   * the operation is not deleted; instead, it becomes an operation with
   * an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
   * corresponding to `Code.CANCELLED`.
   *
   * @generated from rpc google.longrunning.Operations.CancelOperation
   */
  cancelOperation: {
    methodKind: "unary";
    input: typeof CancelOperationRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Waits until the specified long-running operation is done or reaches at most
   * a specified timeout, returning the latest state.  If the operation is
   * already done, the latest state is immediately returned.  If the timeout
   * specified is greater than the default HTTP/RPC timeout, the HTTP/RPC
   * timeout is used.  If the server does not support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   * Note that this method is on a best-effort basis.  It may return the latest
   * state before the specified timeout (including immediately), meaning even an
   * immediate response is no guarantee that the operation is done.
   *
   * @generated from rpc google.longrunning.Operations.WaitOperation
   */
  waitOperation: {
    methodKind: "unary";
    input: typeof WaitOperationRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_longrunning_operations, 0);

/**
 * Additional information regarding long-running operations.
 * In particular, this specifies the types that are returned from
 * long-running operations.
 *
 * Required for methods that return `google.longrunning.Operation`; invalid
 * otherwise.
 *
 * @generated from extension: google.longrunning.OperationInfo operation_info = 1049;
 */
export const operation_info: GenExtension<MethodOptions, OperationInfo> = /*@__PURE__*/
  extDesc(file_google_longrunning_operations, 0);
