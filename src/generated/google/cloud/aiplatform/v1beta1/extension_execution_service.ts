// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/extension_execution_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Struct } from "../../../protobuf/struct.js";
import { Content } from "./content.js";
import { AuthConfig } from "./extension.js";

export const protobufPackage = "google.cloud.aiplatform.v1beta1";

/**
 * Request message for
 * [ExtensionExecutionService.ExecuteExtension][google.cloud.aiplatform.v1beta1.ExtensionExecutionService.ExecuteExtension].
 */
export interface ExecuteExtensionRequest {
  /**
   * Required. Name (identifier) of the extension;
   * Format:
   * `projects/{project}/locations/{location}/extensions/{extension}`
   */
  name: string;
  /**
   * Required. The desired ID of the operation to be executed in this extension
   *  as defined in
   *  [ExtensionOperation.operation_id][google.cloud.aiplatform.v1beta1.ExtensionOperation.operation_id].
   */
  operationId: string;
  /**
   * Optional. Request parameters that will be used for executing this
   * operation.
   *
   * The struct should be in a form of map with param name as the key and actual
   * param value as the value.
   * E.g. If this operation requires a param "name" to be set to "abc". you can
   * set this to something like {"name": "abc"}.
   */
  operationParams:
    | { [key: string]: any }
    | undefined;
  /**
   * Optional. Auth config provided at runtime to override the default value in
   * [Extension.manifest.auth_config][].
   * The AuthConfig.auth_type should match the value in
   * [Extension.manifest.auth_config][].
   */
  runtimeAuthConfig: AuthConfig | undefined;
}

/**
 * Response message for
 * [ExtensionExecutionService.ExecuteExtension][google.cloud.aiplatform.v1beta1.ExtensionExecutionService.ExecuteExtension].
 */
export interface ExecuteExtensionResponse {
  /**
   * Response content from the extension. The content should be conformant to
   * the response.content schema in the extension's manifest/OpenAPI spec.
   */
  content: string;
}

/**
 * Request message for
 * [ExtensionExecutionService.QueryExtension][google.cloud.aiplatform.v1beta1.ExtensionExecutionService.QueryExtension].
 */
export interface QueryExtensionRequest {
  /**
   * Required. Name (identifier) of the extension;
   * Format:
   * `projects/{project}/locations/{location}/extensions/{extension}`
   */
  name: string;
  /**
   * Required. The content of the current conversation with the model.
   *
   * For single-turn queries, this is a single instance. For multi-turn queries,
   * this is a repeated field that contains conversation history + latest
   * request.
   */
  contents: Content[];
}

/**
 * Response message for
 * [ExtensionExecutionService.QueryExtension][google.cloud.aiplatform.v1beta1.ExtensionExecutionService.QueryExtension].
 */
export interface QueryExtensionResponse {
  /**
   * Steps of extension or LLM interaction, can contain function call,
   * function response, or text response. The last step contains the final
   * response to the query.
   */
  steps: Content[];
  /** Failure message if any. */
  failureMessage: string;
}

function createBaseExecuteExtensionRequest(): ExecuteExtensionRequest {
  return { name: "", operationId: "", operationParams: undefined, runtimeAuthConfig: undefined };
}

export const ExecuteExtensionRequest: MessageFns<ExecuteExtensionRequest> = {
  encode(message: ExecuteExtensionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.operationId !== "") {
      writer.uint32(18).string(message.operationId);
    }
    if (message.operationParams !== undefined) {
      Struct.encode(Struct.wrap(message.operationParams), writer.uint32(26).fork()).join();
    }
    if (message.runtimeAuthConfig !== undefined) {
      AuthConfig.encode(message.runtimeAuthConfig, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExecuteExtensionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteExtensionRequest();
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

          message.operationId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operationParams = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.runtimeAuthConfig = AuthConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecuteExtensionRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
      operationParams: isObject(object.operationParams) ? object.operationParams : undefined,
      runtimeAuthConfig: isSet(object.runtimeAuthConfig) ? AuthConfig.fromJSON(object.runtimeAuthConfig) : undefined,
    };
  },

  toJSON(message: ExecuteExtensionRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.operationId !== "") {
      obj.operationId = message.operationId;
    }
    if (message.operationParams !== undefined) {
      obj.operationParams = message.operationParams;
    }
    if (message.runtimeAuthConfig !== undefined) {
      obj.runtimeAuthConfig = AuthConfig.toJSON(message.runtimeAuthConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<ExecuteExtensionRequest>): ExecuteExtensionRequest {
    return ExecuteExtensionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExecuteExtensionRequest>): ExecuteExtensionRequest {
    const message = createBaseExecuteExtensionRequest();
    message.name = object.name ?? "";
    message.operationId = object.operationId ?? "";
    message.operationParams = object.operationParams ?? undefined;
    message.runtimeAuthConfig = (object.runtimeAuthConfig !== undefined && object.runtimeAuthConfig !== null)
      ? AuthConfig.fromPartial(object.runtimeAuthConfig)
      : undefined;
    return message;
  },
};

function createBaseExecuteExtensionResponse(): ExecuteExtensionResponse {
  return { content: "" };
}

export const ExecuteExtensionResponse: MessageFns<ExecuteExtensionResponse> = {
  encode(message: ExecuteExtensionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExecuteExtensionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteExtensionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecuteExtensionResponse {
    return { content: isSet(object.content) ? globalThis.String(object.content) : "" };
  },

  toJSON(message: ExecuteExtensionResponse): unknown {
    const obj: any = {};
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create(base?: DeepPartial<ExecuteExtensionResponse>): ExecuteExtensionResponse {
    return ExecuteExtensionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExecuteExtensionResponse>): ExecuteExtensionResponse {
    const message = createBaseExecuteExtensionResponse();
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseQueryExtensionRequest(): QueryExtensionRequest {
  return { name: "", contents: [] };
}

export const QueryExtensionRequest: MessageFns<QueryExtensionRequest> = {
  encode(message: QueryExtensionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.contents) {
      Content.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryExtensionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtensionRequest();
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

          message.contents.push(Content.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryExtensionRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      contents: globalThis.Array.isArray(object?.contents) ? object.contents.map((e: any) => Content.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryExtensionRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.contents?.length) {
      obj.contents = message.contents.map((e) => Content.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<QueryExtensionRequest>): QueryExtensionRequest {
    return QueryExtensionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryExtensionRequest>): QueryExtensionRequest {
    const message = createBaseQueryExtensionRequest();
    message.name = object.name ?? "";
    message.contents = object.contents?.map((e) => Content.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryExtensionResponse(): QueryExtensionResponse {
  return { steps: [], failureMessage: "" };
}

export const QueryExtensionResponse: MessageFns<QueryExtensionResponse> = {
  encode(message: QueryExtensionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.steps) {
      Content.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.failureMessage !== "") {
      writer.uint32(18).string(message.failureMessage);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryExtensionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtensionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.steps.push(Content.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.failureMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryExtensionResponse {
    return {
      steps: globalThis.Array.isArray(object?.steps) ? object.steps.map((e: any) => Content.fromJSON(e)) : [],
      failureMessage: isSet(object.failureMessage) ? globalThis.String(object.failureMessage) : "",
    };
  },

  toJSON(message: QueryExtensionResponse): unknown {
    const obj: any = {};
    if (message.steps?.length) {
      obj.steps = message.steps.map((e) => Content.toJSON(e));
    }
    if (message.failureMessage !== "") {
      obj.failureMessage = message.failureMessage;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryExtensionResponse>): QueryExtensionResponse {
    return QueryExtensionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryExtensionResponse>): QueryExtensionResponse {
    const message = createBaseQueryExtensionResponse();
    message.steps = object.steps?.map((e) => Content.fromPartial(e)) || [];
    message.failureMessage = object.failureMessage ?? "";
    return message;
  },
};

/** A service for Extension execution. */
export type ExtensionExecutionServiceDefinition = typeof ExtensionExecutionServiceDefinition;
export const ExtensionExecutionServiceDefinition = {
  name: "ExtensionExecutionService",
  fullName: "google.cloud.aiplatform.v1beta1.ExtensionExecutionService",
  methods: {
    /** Executes the request against a given extension. */
    executeExtension: {
      name: "ExecuteExtension",
      requestType: ExecuteExtensionRequest,
      requestStream: false,
      responseType: ExecuteExtensionResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([17, 110, 97, 109, 101, 44, 111, 112, 101, 114, 97, 116, 105, 111, 110, 95, 105, 100])],
          578365826: [
            Buffer.from([
              64,
              58,
              1,
              42,
              34,
              59,
              47,
              118,
              49,
              98,
              101,
              116,
              97,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              101,
              120,
              116,
              101,
              110,
              115,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              58,
              101,
              120,
              101,
              99,
              117,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /** Queries an extension with a default controller. */
    queryExtension: {
      name: "QueryExtension",
      requestType: QueryExtensionRequest,
      requestStream: false,
      responseType: QueryExtensionResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([13, 110, 97, 109, 101, 44, 99, 111, 110, 116, 101, 110, 116, 115])],
          578365826: [
            Buffer.from([
              62,
              58,
              1,
              42,
              34,
              57,
              47,
              118,
              49,
              98,
              101,
              116,
              97,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              101,
              120,
              116,
              101,
              110,
              115,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              58,
              113,
              117,
              101,
              114,
              121,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface ExtensionExecutionServiceImplementation<CallContextExt = {}> {
  /** Executes the request against a given extension. */
  executeExtension(
    request: ExecuteExtensionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ExecuteExtensionResponse>>;
  /** Queries an extension with a default controller. */
  queryExtension(
    request: QueryExtensionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<QueryExtensionResponse>>;
}

export interface ExtensionExecutionServiceClient<CallOptionsExt = {}> {
  /** Executes the request against a given extension. */
  executeExtension(
    request: DeepPartial<ExecuteExtensionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ExecuteExtensionResponse>;
  /** Queries an extension with a default controller. */
  queryExtension(
    request: DeepPartial<QueryExtensionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<QueryExtensionResponse>;
}

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
