// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/longrunning/operations.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Any } from "../protobuf/any.js";
import { Duration } from "../protobuf/duration.js";
import { Empty } from "../protobuf/empty.js";
import { Status } from "../rpc/status.js";

export const protobufPackage = "google.longrunning";

/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Operation {
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the
   * `name` should be a resource name ending with `operations/{unique_id}`.
   */
  name: string;
  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time.
   * Some services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   */
  metadata:
    | Any
    | undefined;
  /**
   * If the value is `false`, it means the operation is still in progress.
   * If `true`, the operation is completed, and either `error` or `response` is
   * available.
   */
  done: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?:
    | Status
    | undefined;
  /**
   * The normal response of the operation in case of success.  If the original
   * method returns no data on success, such as `Delete`, the response is
   * `google.protobuf.Empty`.  If the original method is standard
   * `Get`/`Create`/`Update`, the response should be the resource.  For other
   * methods, the response should have the type `XxxResponse`, where `Xxx`
   * is the original method name.  For example, if the original method name
   * is `TakeSnapshot()`, the inferred response type is
   * `TakeSnapshotResponse`.
   */
  response?: Any | undefined;
}

/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequest {
  /** The name of the operation resource. */
  name: string;
}

/** The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter: string;
  /** The standard list page size. */
  pageSize: number;
  /** The standard list page token. */
  pageToken: string;
}

/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations: Operation[];
  /** The standard List next-page token. */
  nextPageToken: string;
}

/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

/** The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface WaitOperationRequest {
  /** The name of the operation resource to wait on. */
  name: string;
  /**
   * The maximum duration to wait before timing out. If left blank, the wait
   * will be at most the time permitted by the underlying HTTP/RPC protocol.
   * If RPC context deadline is also specified, the shorter one will be used.
   */
  timeout: Duration | undefined;
}

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
 */
export interface OperationInfo {
  /**
   * Required. The message name of the primary return type for this
   * long-running operation.
   * This type will be used to deserialize the LRO's response.
   *
   * If the response is in a different package from the rpc, a fully-qualified
   * message name must be used (e.g. `google.protobuf.Struct`).
   *
   * Note: Altering this value constitutes a breaking change.
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
   */
  metadataType: string;
}

function createBaseOperation(): Operation {
  return { name: "", metadata: undefined, done: false, error: undefined, response: undefined };
}

export const Operation: MessageFns<Operation> = {
  encode(message: Operation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.metadata !== undefined) {
      Any.encode(message.metadata, writer.uint32(18).fork()).join();
    }
    if (message.done !== false) {
      writer.uint32(24).bool(message.done);
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(34).fork()).join();
    }
    if (message.response !== undefined) {
      Any.encode(message.response, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Operation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.done = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.response = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Operation {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      metadata: isSet(object.metadata) ? Any.fromJSON(object.metadata) : undefined,
      done: isSet(object.done) ? globalThis.Boolean(object.done) : false,
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
      response: isSet(object.response) ? Any.fromJSON(object.response) : undefined,
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.metadata !== undefined) {
      obj.metadata = Any.toJSON(message.metadata);
    }
    if (message.done !== false) {
      obj.done = message.done;
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    if (message.response !== undefined) {
      obj.response = Any.toJSON(message.response);
    }
    return obj;
  },

  create(base?: DeepPartial<Operation>): Operation {
    return Operation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Operation>): Operation {
    const message = createBaseOperation();
    message.name = object.name ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Any.fromPartial(object.metadata)
      : undefined;
    message.done = object.done ?? false;
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? Any.fromPartial(object.response)
      : undefined;
    return message;
  },
};

function createBaseGetOperationRequest(): GetOperationRequest {
  return { name: "" };
}

export const GetOperationRequest: MessageFns<GetOperationRequest> = {
  encode(message: GetOperationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOperationRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetOperationRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetOperationRequest>): GetOperationRequest {
    return GetOperationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetOperationRequest>): GetOperationRequest {
    const message = createBaseGetOperationRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListOperationsRequest(): ListOperationsRequest {
  return { name: "", filter: "", pageSize: 0, pageToken: "" };
}

export const ListOperationsRequest: MessageFns<ListOperationsRequest> = {
  encode(message: ListOperationsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListOperationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListOperationsRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListOperationsRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListOperationsRequest>): ListOperationsRequest {
    return ListOperationsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListOperationsRequest>): ListOperationsRequest {
    const message = createBaseListOperationsRequest();
    message.name = object.name ?? "";
    message.filter = object.filter ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListOperationsResponse(): ListOperationsResponse {
  return { operations: [], nextPageToken: "" };
}

export const ListOperationsResponse: MessageFns<ListOperationsResponse> = {
  encode(message: ListOperationsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListOperationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operations.push(Operation.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListOperationsResponse {
    return {
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListOperationsResponse>): ListOperationsResponse {
    return ListOperationsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListOperationsResponse>): ListOperationsResponse {
    const message = createBaseListOperationsResponse();
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseCancelOperationRequest(): CancelOperationRequest {
  return { name: "" };
}

export const CancelOperationRequest: MessageFns<CancelOperationRequest> = {
  encode(message: CancelOperationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CancelOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelOperationRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: CancelOperationRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<CancelOperationRequest>): CancelOperationRequest {
    return CancelOperationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CancelOperationRequest>): CancelOperationRequest {
    const message = createBaseCancelOperationRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseDeleteOperationRequest(): DeleteOperationRequest {
  return { name: "" };
}

export const DeleteOperationRequest: MessageFns<DeleteOperationRequest> = {
  encode(message: DeleteOperationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteOperationRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeleteOperationRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteOperationRequest>): DeleteOperationRequest {
    return DeleteOperationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteOperationRequest>): DeleteOperationRequest {
    const message = createBaseDeleteOperationRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseWaitOperationRequest(): WaitOperationRequest {
  return { name: "", timeout: undefined };
}

export const WaitOperationRequest: MessageFns<WaitOperationRequest> = {
  encode(message: WaitOperationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WaitOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWaitOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timeout = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WaitOperationRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined,
    };
  },

  toJSON(message: WaitOperationRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.timeout !== undefined) {
      obj.timeout = Duration.toJSON(message.timeout);
    }
    return obj;
  },

  create(base?: DeepPartial<WaitOperationRequest>): WaitOperationRequest {
    return WaitOperationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WaitOperationRequest>): WaitOperationRequest {
    const message = createBaseWaitOperationRequest();
    message.name = object.name ?? "";
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
      : undefined;
    return message;
  },
};

function createBaseOperationInfo(): OperationInfo {
  return { responseType: "", metadataType: "" };
}

export const OperationInfo: MessageFns<OperationInfo> = {
  encode(message: OperationInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.responseType !== "") {
      writer.uint32(10).string(message.responseType);
    }
    if (message.metadataType !== "") {
      writer.uint32(18).string(message.metadataType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OperationInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.responseType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadataType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationInfo {
    return {
      responseType: isSet(object.responseType) ? globalThis.String(object.responseType) : "",
      metadataType: isSet(object.metadataType) ? globalThis.String(object.metadataType) : "",
    };
  },

  toJSON(message: OperationInfo): unknown {
    const obj: any = {};
    if (message.responseType !== "") {
      obj.responseType = message.responseType;
    }
    if (message.metadataType !== "") {
      obj.metadataType = message.metadataType;
    }
    return obj;
  },

  create(base?: DeepPartial<OperationInfo>): OperationInfo {
    return OperationInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OperationInfo>): OperationInfo {
    const message = createBaseOperationInfo();
    message.responseType = object.responseType ?? "";
    message.metadataType = object.metadataType ?? "";
    return message;
  },
};

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
 */
export type OperationsDefinition = typeof OperationsDefinition;
export const OperationsDefinition = {
  name: "Operations",
  fullName: "google.longrunning.Operations",
  methods: {
    /**
     * Lists operations that match the specified filter in the request. If the
     * server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * NOTE: the `name` binding allows API services to override the binding
     * to use different resource name schemes, such as `users/* /operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/*}/operations"` to their service configuration.
     * For backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding
     * is the parent resource, without the operations collection id.
     */
    listOperations: {
      name: "ListOperations",
      requestType: ListOperationsRequest,
      requestStream: false,
      responseType: ListOperationsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([11, 110, 97, 109, 101, 44, 102, 105, 108, 116, 101, 114])],
          578365826: [
            Buffer.from([
              23,
              18,
              21,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Gets the latest state of a long-running operation.  Clients can use this
     * method to poll the operation result at intervals as recommended by the API
     * service.
     */
    getOperation: {
      name: "GetOperation",
      requestType: GetOperationRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              26,
              18,
              24,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Deletes a long-running operation. This method indicates that the client is
     * no longer interested in the operation result. It does not cancel the
     * operation. If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     */
    deleteOperation: {
      name: "DeleteOperation",
      requestType: DeleteOperationRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              26,
              42,
              24,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              42,
              125,
            ]),
          ],
        },
      },
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
     */
    cancelOperation: {
      name: "CancelOperation",
      requestType: CancelOperationRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              36,
              58,
              1,
              42,
              34,
              31,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              42,
              125,
              58,
              99,
              97,
              110,
              99,
              101,
              108,
            ]),
          ],
        },
      },
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
     */
    waitOperation: {
      name: "WaitOperation",
      requestType: WaitOperationRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface OperationsServiceImplementation<CallContextExt = {}> {
  /**
   * Lists operations that match the specified filter in the request. If the
   * server doesn't support this method, it returns `UNIMPLEMENTED`.
   *
   * NOTE: the `name` binding allows API services to override the binding
   * to use different resource name schemes, such as `users/* /operations`. To
   * override the binding, API services can add a binding such as
   * `"/v1/{name=users/*}/operations"` to their service configuration.
   * For backwards compatibility, the default name includes the operations
   * collection id, however overriding users must ensure the name binding
   * is the parent resource, without the operations collection id.
   */
  listOperations(
    request: ListOperationsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListOperationsResponse>>;
  /**
   * Gets the latest state of a long-running operation.  Clients can use this
   * method to poll the operation result at intervals as recommended by the API
   * service.
   */
  getOperation(request: GetOperationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Operation>>;
  /**
   * Deletes a long-running operation. This method indicates that the client is
   * no longer interested in the operation result. It does not cancel the
   * operation. If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   */
  deleteOperation(request: DeleteOperationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
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
   */
  cancelOperation(request: CancelOperationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
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
   */
  waitOperation(request: WaitOperationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Operation>>;
}

export interface OperationsClient<CallOptionsExt = {}> {
  /**
   * Lists operations that match the specified filter in the request. If the
   * server doesn't support this method, it returns `UNIMPLEMENTED`.
   *
   * NOTE: the `name` binding allows API services to override the binding
   * to use different resource name schemes, such as `users/* /operations`. To
   * override the binding, API services can add a binding such as
   * `"/v1/{name=users/*}/operations"` to their service configuration.
   * For backwards compatibility, the default name includes the operations
   * collection id, however overriding users must ensure the name binding
   * is the parent resource, without the operations collection id.
   */
  listOperations(
    request: DeepPartial<ListOperationsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListOperationsResponse>;
  /**
   * Gets the latest state of a long-running operation.  Clients can use this
   * method to poll the operation result at intervals as recommended by the API
   * service.
   */
  getOperation(request: DeepPartial<GetOperationRequest>, options?: CallOptions & CallOptionsExt): Promise<Operation>;
  /**
   * Deletes a long-running operation. This method indicates that the client is
   * no longer interested in the operation result. It does not cancel the
   * operation. If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   */
  deleteOperation(request: DeepPartial<DeleteOperationRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
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
   */
  cancelOperation(request: DeepPartial<CancelOperationRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
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
   */
  waitOperation(request: DeepPartial<WaitOperationRequest>, options?: CallOptions & CallOptionsExt): Promise<Operation>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}