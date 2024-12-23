// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/identitytoolkit/logging/request_log.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Struct } from "../../../protobuf/struct.js";
import { Status } from "../../../rpc/status.js";

export const protobufPackage = "google.cloud.identitytoolkit.logging";

/**
 * Log of a request to Identitytoolkit. This proto is modeled after
 * google.cloud.audit.AuditLog so that consumers can easily query
 * for requests regardless of whether those requests were logged via
 * Cloud Audit Logging or Identitytoolkit request logging.
 */
export interface RequestLog {
  /**
   * The name of the service method or operation.
   * For API calls, this should be the name of the API method.
   * For example,
   *
   *     "google.datastore.v1.Datastore.RunQuery"
   *     "google.logging.v1.LoggingService.DeleteLog"
   */
  methodName: string;
  /** The status of the overall operation. */
  status:
    | Status
    | undefined;
  /** Metadata about the operation. */
  requestMetadata:
    | RequestMetadata
    | undefined;
  /**
   * The operation request. This may not include all request parameters,
   * such as those that are too large, privacy-sensitive, or duplicated
   * elsewhere in the log record.
   * It should never include user-generated data, such as file contents.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   */
  request:
    | { [key: string]: any }
    | undefined;
  /**
   * The operation response. This may not include all response elements,
   * such as those that are too large, privacy-sensitive, or duplicated
   * elsewhere in the log record.
   * It should never include user-generated data, such as file contents.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   */
  response:
    | { [key: string]: any }
    | undefined;
  /**
   * The number of items returned from a List or Query API method,
   * if applicable.
   */
  numResponseItems: Long;
  /**
   * Other service-specific data about the request, response, and other
   * information associated with the current event.
   */
  metadata: { [key: string]: any } | undefined;
}

/** Metadata about the request. */
export interface RequestMetadata {
  /** The IP address of the caller. */
  callerIp: string;
  /**
   * The user agent of the caller.
   * This information is not authenticated and should be treated
   * accordingly.
   *
   * For example:
   *
   * +   `google-api-python-client/1.4.0`:
   *     The request was made by the Google API client for Python.
   * +   `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`:
   *     The request was made by the Google Cloud SDK CLI (gcloud).
   * +   `AppEngine-Google; (+http://code.google.com/appengine; appid:
   *      s~my-project`:
   *     The request was made from the `my-project` App Engine app.
   * NOLINT
   */
  callerSuppliedUserAgent: string;
}

function createBaseRequestLog(): RequestLog {
  return {
    methodName: "",
    status: undefined,
    requestMetadata: undefined,
    request: undefined,
    response: undefined,
    numResponseItems: Long.ZERO,
    metadata: undefined,
  };
}

export const RequestLog: MessageFns<RequestLog> = {
  encode(message: RequestLog, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.methodName !== "") {
      writer.uint32(10).string(message.methodName);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).join();
    }
    if (message.requestMetadata !== undefined) {
      RequestMetadata.encode(message.requestMetadata, writer.uint32(26).fork()).join();
    }
    if (message.request !== undefined) {
      Struct.encode(Struct.wrap(message.request), writer.uint32(34).fork()).join();
    }
    if (message.response !== undefined) {
      Struct.encode(Struct.wrap(message.response), writer.uint32(42).fork()).join();
    }
    if (!message.numResponseItems.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.numResponseItems.toString());
    }
    if (message.metadata !== undefined) {
      Struct.encode(Struct.wrap(message.metadata), writer.uint32(58).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RequestLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.methodName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requestMetadata = RequestMetadata.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.request = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.response = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.numResponseItems = Long.fromString(reader.int64().toString());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestLog {
    return {
      methodName: isSet(object.methodName) ? globalThis.String(object.methodName) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      requestMetadata: isSet(object.requestMetadata) ? RequestMetadata.fromJSON(object.requestMetadata) : undefined,
      request: isObject(object.request) ? object.request : undefined,
      response: isObject(object.response) ? object.response : undefined,
      numResponseItems: isSet(object.numResponseItems) ? Long.fromValue(object.numResponseItems) : Long.ZERO,
      metadata: isObject(object.metadata) ? object.metadata : undefined,
    };
  },

  toJSON(message: RequestLog): unknown {
    const obj: any = {};
    if (message.methodName !== "") {
      obj.methodName = message.methodName;
    }
    if (message.status !== undefined) {
      obj.status = Status.toJSON(message.status);
    }
    if (message.requestMetadata !== undefined) {
      obj.requestMetadata = RequestMetadata.toJSON(message.requestMetadata);
    }
    if (message.request !== undefined) {
      obj.request = message.request;
    }
    if (message.response !== undefined) {
      obj.response = message.response;
    }
    if (!message.numResponseItems.equals(Long.ZERO)) {
      obj.numResponseItems = (message.numResponseItems || Long.ZERO).toString();
    }
    if (message.metadata !== undefined) {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create(base?: DeepPartial<RequestLog>): RequestLog {
    return RequestLog.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RequestLog>): RequestLog {
    const message = createBaseRequestLog();
    message.methodName = object.methodName ?? "";
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    message.requestMetadata = (object.requestMetadata !== undefined && object.requestMetadata !== null)
      ? RequestMetadata.fromPartial(object.requestMetadata)
      : undefined;
    message.request = object.request ?? undefined;
    message.response = object.response ?? undefined;
    message.numResponseItems = (object.numResponseItems !== undefined && object.numResponseItems !== null)
      ? Long.fromValue(object.numResponseItems)
      : Long.ZERO;
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseRequestMetadata(): RequestMetadata {
  return { callerIp: "", callerSuppliedUserAgent: "" };
}

export const RequestMetadata: MessageFns<RequestMetadata> = {
  encode(message: RequestMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.callerIp !== "") {
      writer.uint32(10).string(message.callerIp);
    }
    if (message.callerSuppliedUserAgent !== "") {
      writer.uint32(18).string(message.callerSuppliedUserAgent);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RequestMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.callerIp = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.callerSuppliedUserAgent = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestMetadata {
    return {
      callerIp: isSet(object.callerIp) ? globalThis.String(object.callerIp) : "",
      callerSuppliedUserAgent: isSet(object.callerSuppliedUserAgent)
        ? globalThis.String(object.callerSuppliedUserAgent)
        : "",
    };
  },

  toJSON(message: RequestMetadata): unknown {
    const obj: any = {};
    if (message.callerIp !== "") {
      obj.callerIp = message.callerIp;
    }
    if (message.callerSuppliedUserAgent !== "") {
      obj.callerSuppliedUserAgent = message.callerSuppliedUserAgent;
    }
    return obj;
  },

  create(base?: DeepPartial<RequestMetadata>): RequestMetadata {
    return RequestMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RequestMetadata>): RequestMetadata {
    const message = createBaseRequestMetadata();
    message.callerIp = object.callerIp ?? "";
    message.callerSuppliedUserAgent = object.callerSuppliedUserAgent ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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
