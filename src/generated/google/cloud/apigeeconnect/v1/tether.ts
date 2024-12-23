// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/apigeeconnect/v1/tether.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Duration } from "../../../protobuf/duration.js";
import { Status } from "../../../rpc/status.js";

export const protobufPackage = "google.cloud.apigeeconnect.v1";

/** The action taken by agent. */
export enum Action {
  /** ACTION_UNSPECIFIED - Unspecified Action. */
  ACTION_UNSPECIFIED = 0,
  /** OPEN_NEW_STREAM - Indicates that agent should open a new stream. */
  OPEN_NEW_STREAM = 1,
  UNRECOGNIZED = -1,
}

export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return Action.ACTION_UNSPECIFIED;
    case 1:
    case "OPEN_NEW_STREAM":
      return Action.OPEN_NEW_STREAM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}

export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case Action.OPEN_NEW_STREAM:
      return "OPEN_NEW_STREAM";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Endpoint indicates where the messages will be delivered. */
export enum TetherEndpoint {
  /** TETHER_ENDPOINT_UNSPECIFIED - Unspecified tether endpoint. */
  TETHER_ENDPOINT_UNSPECIFIED = 0,
  /** APIGEE_MART - Apigee MART endpoint. */
  APIGEE_MART = 1,
  /** APIGEE_RUNTIME - Apigee Runtime endpoint. */
  APIGEE_RUNTIME = 2,
  /** APIGEE_MINT_RATING - Apigee Mint Rating endpoint. */
  APIGEE_MINT_RATING = 3,
  UNRECOGNIZED = -1,
}

export function tetherEndpointFromJSON(object: any): TetherEndpoint {
  switch (object) {
    case 0:
    case "TETHER_ENDPOINT_UNSPECIFIED":
      return TetherEndpoint.TETHER_ENDPOINT_UNSPECIFIED;
    case 1:
    case "APIGEE_MART":
      return TetherEndpoint.APIGEE_MART;
    case 2:
    case "APIGEE_RUNTIME":
      return TetherEndpoint.APIGEE_RUNTIME;
    case 3:
    case "APIGEE_MINT_RATING":
      return TetherEndpoint.APIGEE_MINT_RATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TetherEndpoint.UNRECOGNIZED;
  }
}

export function tetherEndpointToJSON(object: TetherEndpoint): string {
  switch (object) {
    case TetherEndpoint.TETHER_ENDPOINT_UNSPECIFIED:
      return "TETHER_ENDPOINT_UNSPECIFIED";
    case TetherEndpoint.APIGEE_MART:
      return "APIGEE_MART";
    case TetherEndpoint.APIGEE_RUNTIME:
      return "APIGEE_RUNTIME";
    case TetherEndpoint.APIGEE_MINT_RATING:
      return "APIGEE_MINT_RATING";
    case TetherEndpoint.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** HTTP Scheme. */
export enum Scheme {
  /** SCHEME_UNSPECIFIED - Unspecified scheme. */
  SCHEME_UNSPECIFIED = 0,
  /** HTTPS - HTTPS protocol. */
  HTTPS = 1,
  UNRECOGNIZED = -1,
}

export function schemeFromJSON(object: any): Scheme {
  switch (object) {
    case 0:
    case "SCHEME_UNSPECIFIED":
      return Scheme.SCHEME_UNSPECIFIED;
    case 1:
    case "HTTPS":
      return Scheme.HTTPS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Scheme.UNRECOGNIZED;
  }
}

export function schemeToJSON(object: Scheme): string {
  switch (object) {
    case Scheme.SCHEME_UNSPECIFIED:
      return "SCHEME_UNSPECIFIED";
    case Scheme.HTTPS:
      return "HTTPS";
    case Scheme.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** gRPC request payload for tether. */
export interface EgressRequest {
  /** Unique identifier for the request. */
  id: string;
  /** Actual payload to send to agent. */
  payload:
    | Payload
    | undefined;
  /** Tether Endpoint. */
  endpoint: TetherEndpoint;
  /**
   * GCP Project.
   * Format: `projects/{project_number}`.
   */
  project: string;
  /** Unique identifier for clients to trace their request/response. */
  traceId: string;
  /** Timeout for the HTTP request. */
  timeout: Duration | undefined;
}

/** Payload for EgressRequest. */
export interface Payload {
  /** The HttpRequest proto. */
  httpRequest?:
    | HttpRequest
    | undefined;
  /** The information of stream. */
  streamInfo?:
    | StreamInfo
    | undefined;
  /** The action taken by agent. */
  action?: Action | undefined;
}

/** The Information of bi-directional stream. */
export interface StreamInfo {
  /** Unique identifier for the stream. */
  id: string;
}

/** gRPC response payload for tether. */
export interface EgressResponse {
  /** Unique identifier for the response. Matches the EgressRequest's id. */
  id: string;
  /** HttpResponse. */
  httpResponse:
    | HttpResponse
    | undefined;
  /** Errors from application when handling the http request. */
  status:
    | Status
    | undefined;
  /**
   * GCP Project.
   * Format: `projects/{project_number}`.
   */
  project: string;
  /**
   * Unique identifier for clients to trace their request/response. Matches the
   * EgressRequest's trace id
   */
  traceId: string;
  /** Tether Endpoint. */
  endpoint: TetherEndpoint;
  /**
   * Name is the full resource path of endpoint.
   * Format: `projects/{project_number or project_id}/endpoints/{endpoint}`
   */
  name: string;
}

/** The proto definition of http request. */
export interface HttpRequest {
  /** A unique identifier for the request. */
  id: string;
  /**
   * The HTTP request method.
   * Valid methods: "GET", "HEAD", "POST", "PUT", "PATCH","DELETE".
   */
  method: string;
  /** The HTTP request URL. */
  url:
    | Url
    | undefined;
  /** The HTTP request headers. */
  headers: Header[];
  /** HTTP request body. */
  body: Buffer;
}

/**
 * The proto definition of url.
 * A url represents a URL and the general form represented is:
 *
 *  `[scheme://][google.cloud.apigeeconnect.v1.Url.host][path]`
 */
export interface Url {
  /** Scheme. */
  scheme: Scheme;
  /** Host or Host:Port. */
  host: string;
  /** Path starts with `/`. */
  path: string;
}

/** The http headers. */
export interface Header {
  key: string;
  values: string[];
}

/** The proto definition of http response. */
export interface HttpResponse {
  /** A unique identifier that matches the request ID. */
  id: string;
  /** Status of http response, e.g. "200 OK". */
  status: string;
  /** Status code of http response, e.g. 200. */
  statusCode: number;
  /** The HTTP 1.1 response body. */
  body: Buffer;
  /** The HTTP response headers. */
  headers: Header[];
  /**
   * Content length records the length of the associated content. The
   * value -1 indicates that the length is unknown. Unless http method
   * is "HEAD", values >= 0 indicate that the given number of bytes may
   * be read from Body.
   */
  contentLength: Long;
}

function createBaseEgressRequest(): EgressRequest {
  return { id: "", payload: undefined, endpoint: 0, project: "", traceId: "", timeout: undefined };
}

export const EgressRequest: MessageFns<EgressRequest> = {
  encode(message: EgressRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.payload !== undefined) {
      Payload.encode(message.payload, writer.uint32(18).fork()).join();
    }
    if (message.endpoint !== 0) {
      writer.uint32(24).int32(message.endpoint);
    }
    if (message.project !== "") {
      writer.uint32(34).string(message.project);
    }
    if (message.traceId !== "") {
      writer.uint32(42).string(message.traceId);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EgressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEgressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = Payload.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.endpoint = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.project = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.traceId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): EgressRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      payload: isSet(object.payload) ? Payload.fromJSON(object.payload) : undefined,
      endpoint: isSet(object.endpoint) ? tetherEndpointFromJSON(object.endpoint) : 0,
      project: isSet(object.project) ? globalThis.String(object.project) : "",
      traceId: isSet(object.traceId) ? globalThis.String(object.traceId) : "",
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined,
    };
  },

  toJSON(message: EgressRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.payload !== undefined) {
      obj.payload = Payload.toJSON(message.payload);
    }
    if (message.endpoint !== 0) {
      obj.endpoint = tetherEndpointToJSON(message.endpoint);
    }
    if (message.project !== "") {
      obj.project = message.project;
    }
    if (message.traceId !== "") {
      obj.traceId = message.traceId;
    }
    if (message.timeout !== undefined) {
      obj.timeout = Duration.toJSON(message.timeout);
    }
    return obj;
  },

  create(base?: DeepPartial<EgressRequest>): EgressRequest {
    return EgressRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EgressRequest>): EgressRequest {
    const message = createBaseEgressRequest();
    message.id = object.id ?? "";
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Payload.fromPartial(object.payload)
      : undefined;
    message.endpoint = object.endpoint ?? 0;
    message.project = object.project ?? "";
    message.traceId = object.traceId ?? "";
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
      : undefined;
    return message;
  },
};

function createBasePayload(): Payload {
  return { httpRequest: undefined, streamInfo: undefined, action: undefined };
}

export const Payload: MessageFns<Payload> = {
  encode(message: Payload, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.httpRequest !== undefined) {
      HttpRequest.encode(message.httpRequest, writer.uint32(10).fork()).join();
    }
    if (message.streamInfo !== undefined) {
      StreamInfo.encode(message.streamInfo, writer.uint32(18).fork()).join();
    }
    if (message.action !== undefined) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Payload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.httpRequest = HttpRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.streamInfo = StreamInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Payload {
    return {
      httpRequest: isSet(object.httpRequest) ? HttpRequest.fromJSON(object.httpRequest) : undefined,
      streamInfo: isSet(object.streamInfo) ? StreamInfo.fromJSON(object.streamInfo) : undefined,
      action: isSet(object.action) ? actionFromJSON(object.action) : undefined,
    };
  },

  toJSON(message: Payload): unknown {
    const obj: any = {};
    if (message.httpRequest !== undefined) {
      obj.httpRequest = HttpRequest.toJSON(message.httpRequest);
    }
    if (message.streamInfo !== undefined) {
      obj.streamInfo = StreamInfo.toJSON(message.streamInfo);
    }
    if (message.action !== undefined) {
      obj.action = actionToJSON(message.action);
    }
    return obj;
  },

  create(base?: DeepPartial<Payload>): Payload {
    return Payload.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Payload>): Payload {
    const message = createBasePayload();
    message.httpRequest = (object.httpRequest !== undefined && object.httpRequest !== null)
      ? HttpRequest.fromPartial(object.httpRequest)
      : undefined;
    message.streamInfo = (object.streamInfo !== undefined && object.streamInfo !== null)
      ? StreamInfo.fromPartial(object.streamInfo)
      : undefined;
    message.action = object.action ?? undefined;
    return message;
  },
};

function createBaseStreamInfo(): StreamInfo {
  return { id: "" };
}

export const StreamInfo: MessageFns<StreamInfo> = {
  encode(message: StreamInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StreamInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamInfo {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: StreamInfo): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<StreamInfo>): StreamInfo {
    return StreamInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StreamInfo>): StreamInfo {
    const message = createBaseStreamInfo();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseEgressResponse(): EgressResponse {
  return { id: "", httpResponse: undefined, status: undefined, project: "", traceId: "", endpoint: 0, name: "" };
}

export const EgressResponse: MessageFns<EgressResponse> = {
  encode(message: EgressResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.httpResponse !== undefined) {
      HttpResponse.encode(message.httpResponse, writer.uint32(18).fork()).join();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).join();
    }
    if (message.project !== "") {
      writer.uint32(34).string(message.project);
    }
    if (message.traceId !== "") {
      writer.uint32(42).string(message.traceId);
    }
    if (message.endpoint !== 0) {
      writer.uint32(48).int32(message.endpoint);
    }
    if (message.name !== "") {
      writer.uint32(58).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EgressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEgressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.httpResponse = HttpResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.project = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.traceId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.endpoint = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): EgressResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      httpResponse: isSet(object.httpResponse) ? HttpResponse.fromJSON(object.httpResponse) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      project: isSet(object.project) ? globalThis.String(object.project) : "",
      traceId: isSet(object.traceId) ? globalThis.String(object.traceId) : "",
      endpoint: isSet(object.endpoint) ? tetherEndpointFromJSON(object.endpoint) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: EgressResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.httpResponse !== undefined) {
      obj.httpResponse = HttpResponse.toJSON(message.httpResponse);
    }
    if (message.status !== undefined) {
      obj.status = Status.toJSON(message.status);
    }
    if (message.project !== "") {
      obj.project = message.project;
    }
    if (message.traceId !== "") {
      obj.traceId = message.traceId;
    }
    if (message.endpoint !== 0) {
      obj.endpoint = tetherEndpointToJSON(message.endpoint);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<EgressResponse>): EgressResponse {
    return EgressResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EgressResponse>): EgressResponse {
    const message = createBaseEgressResponse();
    message.id = object.id ?? "";
    message.httpResponse = (object.httpResponse !== undefined && object.httpResponse !== null)
      ? HttpResponse.fromPartial(object.httpResponse)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    message.project = object.project ?? "";
    message.traceId = object.traceId ?? "";
    message.endpoint = object.endpoint ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseHttpRequest(): HttpRequest {
  return { id: "", method: "", url: undefined, headers: [], body: Buffer.alloc(0) };
}

export const HttpRequest: MessageFns<HttpRequest> = {
  encode(message: HttpRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.method !== "") {
      writer.uint32(18).string(message.method);
    }
    if (message.url !== undefined) {
      Url.encode(message.url, writer.uint32(26).fork()).join();
    }
    for (const v of message.headers) {
      Header.encode(v!, writer.uint32(34).fork()).join();
    }
    if (message.body.length !== 0) {
      writer.uint32(42).bytes(message.body);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HttpRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.method = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.url = Url.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.headers.push(Header.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.body = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      method: isSet(object.method) ? globalThis.String(object.method) : "",
      url: isSet(object.url) ? Url.fromJSON(object.url) : undefined,
      headers: globalThis.Array.isArray(object?.headers) ? object.headers.map((e: any) => Header.fromJSON(e)) : [],
      body: isSet(object.body) ? Buffer.from(bytesFromBase64(object.body)) : Buffer.alloc(0),
    };
  },

  toJSON(message: HttpRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.method !== "") {
      obj.method = message.method;
    }
    if (message.url !== undefined) {
      obj.url = Url.toJSON(message.url);
    }
    if (message.headers?.length) {
      obj.headers = message.headers.map((e) => Header.toJSON(e));
    }
    if (message.body.length !== 0) {
      obj.body = base64FromBytes(message.body);
    }
    return obj;
  },

  create(base?: DeepPartial<HttpRequest>): HttpRequest {
    return HttpRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HttpRequest>): HttpRequest {
    const message = createBaseHttpRequest();
    message.id = object.id ?? "";
    message.method = object.method ?? "";
    message.url = (object.url !== undefined && object.url !== null) ? Url.fromPartial(object.url) : undefined;
    message.headers = object.headers?.map((e) => Header.fromPartial(e)) || [];
    message.body = object.body ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseUrl(): Url {
  return { scheme: 0, host: "", path: "" };
}

export const Url: MessageFns<Url> = {
  encode(message: Url, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.scheme !== 0) {
      writer.uint32(8).int32(message.scheme);
    }
    if (message.host !== "") {
      writer.uint32(18).string(message.host);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Url {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUrl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.scheme = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.host = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Url {
    return {
      scheme: isSet(object.scheme) ? schemeFromJSON(object.scheme) : 0,
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
    };
  },

  toJSON(message: Url): unknown {
    const obj: any = {};
    if (message.scheme !== 0) {
      obj.scheme = schemeToJSON(message.scheme);
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create(base?: DeepPartial<Url>): Url {
    return Url.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Url>): Url {
    const message = createBaseUrl();
    message.scheme = object.scheme ?? 0;
    message.host = object.host ?? "";
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseHeader(): Header {
  return { key: "", values: [] };
}

export const Header: MessageFns<Header> = {
  encode(message: Header, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    for (const v of message.values) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.values.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Header {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create(base?: DeepPartial<Header>): Header {
    return Header.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.key = object.key ?? "";
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseHttpResponse(): HttpResponse {
  return { id: "", status: "", statusCode: 0, body: Buffer.alloc(0), headers: [], contentLength: Long.ZERO };
}

export const HttpResponse: MessageFns<HttpResponse> = {
  encode(message: HttpResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.statusCode !== 0) {
      writer.uint32(24).int32(message.statusCode);
    }
    if (message.body.length !== 0) {
      writer.uint32(34).bytes(message.body);
    }
    for (const v of message.headers) {
      Header.encode(v!, writer.uint32(42).fork()).join();
    }
    if (!message.contentLength.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.contentLength.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HttpResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.statusCode = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.body = Buffer.from(reader.bytes());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.headers.push(Header.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.contentLength = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      body: isSet(object.body) ? Buffer.from(bytesFromBase64(object.body)) : Buffer.alloc(0),
      headers: globalThis.Array.isArray(object?.headers) ? object.headers.map((e: any) => Header.fromJSON(e)) : [],
      contentLength: isSet(object.contentLength) ? Long.fromValue(object.contentLength) : Long.ZERO,
    };
  },

  toJSON(message: HttpResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.body.length !== 0) {
      obj.body = base64FromBytes(message.body);
    }
    if (message.headers?.length) {
      obj.headers = message.headers.map((e) => Header.toJSON(e));
    }
    if (!message.contentLength.equals(Long.ZERO)) {
      obj.contentLength = (message.contentLength || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<HttpResponse>): HttpResponse {
    return HttpResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HttpResponse>): HttpResponse {
    const message = createBaseHttpResponse();
    message.id = object.id ?? "";
    message.status = object.status ?? "";
    message.statusCode = object.statusCode ?? 0;
    message.body = object.body ?? Buffer.alloc(0);
    message.headers = object.headers?.map((e) => Header.fromPartial(e)) || [];
    message.contentLength = (object.contentLength !== undefined && object.contentLength !== null)
      ? Long.fromValue(object.contentLength)
      : Long.ZERO;
    return message;
  },
};

/**
 * Tether provides a way for the control plane to send HTTP API requests to
 * services in data planes that runs in a remote datacenter without
 * requiring customers to open firewalls on their runtime plane.
 */
export type TetherDefinition = typeof TetherDefinition;
export const TetherDefinition = {
  name: "Tether",
  fullName: "google.cloud.apigeeconnect.v1.Tether",
  methods: {
    /**
     * Egress streams egress requests and responses. Logically, this is not
     * actually a streaming request, but uses streaming as a mechanism to flip
     * the client-server relationship of gRPC so that the server can act as a
     * client.
     * The listener, the RPC server, accepts connections from the dialer,
     * the RPC client.
     * The listener streams http requests and the dialer streams http responses.
     */
    egress: {
      name: "Egress",
      requestType: EgressResponse,
      requestStream: true,
      responseType: EgressRequest,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface TetherServiceImplementation<CallContextExt = {}> {
  /**
   * Egress streams egress requests and responses. Logically, this is not
   * actually a streaming request, but uses streaming as a mechanism to flip
   * the client-server relationship of gRPC so that the server can act as a
   * client.
   * The listener, the RPC server, accepts connections from the dialer,
   * the RPC client.
   * The listener streams http requests and the dialer streams http responses.
   */
  egress(
    request: AsyncIterable<EgressResponse>,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<EgressRequest>>;
}

export interface TetherClient<CallOptionsExt = {}> {
  /**
   * Egress streams egress requests and responses. Logically, this is not
   * actually a streaming request, but uses streaming as a mechanism to flip
   * the client-server relationship of gRPC so that the server can act as a
   * client.
   * The listener, the RPC server, accepts connections from the dialer,
   * the RPC client.
   * The listener streams http requests and the dialer streams http responses.
   */
  egress(
    request: AsyncIterable<DeepPartial<EgressResponse>>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<EgressRequest>;
}

function bytesFromBase64(b64: string): Uint8Array {
  return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}

function base64FromBytes(arr: Uint8Array): string {
  return globalThis.Buffer.from(arr).toString("base64");
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

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
