// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/gen_ai_cache_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Empty } from "../../../protobuf/empty.js";
import { FieldMask } from "../../../protobuf/field_mask.js";
import { CachedContent } from "./cached_content.js";

export const protobufPackage = "google.cloud.aiplatform.v1beta1";

/**
 * Request message for
 * [GenAiCacheService.CreateCachedContent][google.cloud.aiplatform.v1beta1.GenAiCacheService.CreateCachedContent].
 */
export interface CreateCachedContentRequest {
  /** Required. The parent resource where the cached content will be created */
  parent: string;
  /** Required. The cached content to create */
  cachedContent: CachedContent | undefined;
}

/**
 * Request message for
 * [GenAiCacheService.GetCachedContent][google.cloud.aiplatform.v1beta1.GenAiCacheService.GetCachedContent].
 */
export interface GetCachedContentRequest {
  /** Required. The resource name referring to the cached content */
  name: string;
}

/**
 * Request message for
 * [GenAiCacheService.UpdateCachedContent][google.cloud.aiplatform.v1beta1.GenAiCacheService.UpdateCachedContent].
 * Only expire_time or ttl can be updated.
 */
export interface UpdateCachedContentRequest {
  /** Required. The cached content to update */
  cachedContent:
    | CachedContent
    | undefined;
  /** Required. The list of fields to update. */
  updateMask: string[] | undefined;
}

/**
 * Request message for
 * [GenAiCacheService.DeleteCachedContent][google.cloud.aiplatform.v1beta1.GenAiCacheService.DeleteCachedContent].
 */
export interface DeleteCachedContentRequest {
  /** Required. The resource name referring to the cached content */
  name: string;
}

/** Request to list CachedContents. */
export interface ListCachedContentsRequest {
  /** Required. The parent, which owns this collection of cached contents. */
  parent: string;
  /**
   * Optional. The maximum number of cached contents to return. The service may
   * return fewer than this value. If unspecified, some default (under maximum)
   * number of items will be returned. The maximum value is 1000; values above
   * 1000 will be coerced to 1000.
   */
  pageSize: number;
  /**
   * Optional. A page token, received from a previous `ListCachedContents` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListCachedContents` must
   * match the call that provided the page token.
   */
  pageToken: string;
}

/** Response with a list of CachedContents. */
export interface ListCachedContentsResponse {
  /** List of cached contents. */
  cachedContents: CachedContent[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

function createBaseCreateCachedContentRequest(): CreateCachedContentRequest {
  return { parent: "", cachedContent: undefined };
}

export const CreateCachedContentRequest: MessageFns<CreateCachedContentRequest> = {
  encode(message: CreateCachedContentRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.cachedContent !== undefined) {
      CachedContent.encode(message.cachedContent, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateCachedContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCachedContentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cachedContent = CachedContent.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateCachedContentRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      cachedContent: isSet(object.cachedContent) ? CachedContent.fromJSON(object.cachedContent) : undefined,
    };
  },

  toJSON(message: CreateCachedContentRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.cachedContent !== undefined) {
      obj.cachedContent = CachedContent.toJSON(message.cachedContent);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateCachedContentRequest>): CreateCachedContentRequest {
    return CreateCachedContentRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateCachedContentRequest>): CreateCachedContentRequest {
    const message = createBaseCreateCachedContentRequest();
    message.parent = object.parent ?? "";
    message.cachedContent = (object.cachedContent !== undefined && object.cachedContent !== null)
      ? CachedContent.fromPartial(object.cachedContent)
      : undefined;
    return message;
  },
};

function createBaseGetCachedContentRequest(): GetCachedContentRequest {
  return { name: "" };
}

export const GetCachedContentRequest: MessageFns<GetCachedContentRequest> = {
  encode(message: GetCachedContentRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetCachedContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCachedContentRequest();
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

  fromJSON(object: any): GetCachedContentRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetCachedContentRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetCachedContentRequest>): GetCachedContentRequest {
    return GetCachedContentRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetCachedContentRequest>): GetCachedContentRequest {
    const message = createBaseGetCachedContentRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUpdateCachedContentRequest(): UpdateCachedContentRequest {
  return { cachedContent: undefined, updateMask: undefined };
}

export const UpdateCachedContentRequest: MessageFns<UpdateCachedContentRequest> = {
  encode(message: UpdateCachedContentRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.cachedContent !== undefined) {
      CachedContent.encode(message.cachedContent, writer.uint32(10).fork()).join();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateCachedContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCachedContentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cachedContent = CachedContent.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateCachedContentRequest {
    return {
      cachedContent: isSet(object.cachedContent) ? CachedContent.fromJSON(object.cachedContent) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateCachedContentRequest): unknown {
    const obj: any = {};
    if (message.cachedContent !== undefined) {
      obj.cachedContent = CachedContent.toJSON(message.cachedContent);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateCachedContentRequest>): UpdateCachedContentRequest {
    return UpdateCachedContentRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateCachedContentRequest>): UpdateCachedContentRequest {
    const message = createBaseUpdateCachedContentRequest();
    message.cachedContent = (object.cachedContent !== undefined && object.cachedContent !== null)
      ? CachedContent.fromPartial(object.cachedContent)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseDeleteCachedContentRequest(): DeleteCachedContentRequest {
  return { name: "" };
}

export const DeleteCachedContentRequest: MessageFns<DeleteCachedContentRequest> = {
  encode(message: DeleteCachedContentRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteCachedContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCachedContentRequest();
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

  fromJSON(object: any): DeleteCachedContentRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeleteCachedContentRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteCachedContentRequest>): DeleteCachedContentRequest {
    return DeleteCachedContentRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteCachedContentRequest>): DeleteCachedContentRequest {
    const message = createBaseDeleteCachedContentRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListCachedContentsRequest(): ListCachedContentsRequest {
  return { parent: "", pageSize: 0, pageToken: "" };
}

export const ListCachedContentsRequest: MessageFns<ListCachedContentsRequest> = {
  encode(message: ListCachedContentsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListCachedContentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCachedContentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
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

  fromJSON(object: any): ListCachedContentsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListCachedContentsRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListCachedContentsRequest>): ListCachedContentsRequest {
    return ListCachedContentsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListCachedContentsRequest>): ListCachedContentsRequest {
    const message = createBaseListCachedContentsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListCachedContentsResponse(): ListCachedContentsResponse {
  return { cachedContents: [], nextPageToken: "" };
}

export const ListCachedContentsResponse: MessageFns<ListCachedContentsResponse> = {
  encode(message: ListCachedContentsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.cachedContents) {
      CachedContent.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListCachedContentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCachedContentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cachedContents.push(CachedContent.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListCachedContentsResponse {
    return {
      cachedContents: globalThis.Array.isArray(object?.cachedContents)
        ? object.cachedContents.map((e: any) => CachedContent.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListCachedContentsResponse): unknown {
    const obj: any = {};
    if (message.cachedContents?.length) {
      obj.cachedContents = message.cachedContents.map((e) => CachedContent.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListCachedContentsResponse>): ListCachedContentsResponse {
    return ListCachedContentsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListCachedContentsResponse>): ListCachedContentsResponse {
    const message = createBaseListCachedContentsResponse();
    message.cachedContents = object.cachedContents?.map((e) => CachedContent.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

/** Service for managing Vertex AI's CachedContent resource. */
export type GenAiCacheServiceDefinition = typeof GenAiCacheServiceDefinition;
export const GenAiCacheServiceDefinition = {
  name: "GenAiCacheService",
  fullName: "google.cloud.aiplatform.v1beta1.GenAiCacheService",
  methods: {
    /**
     * Creates cached content, this call will initialize the cached content in the
     * data storage, and users need to pay for the cache data storage.
     */
    createCachedContent: {
      name: "CreateCachedContent",
      requestType: CreateCachedContentRequest,
      requestStream: false,
      responseType: CachedContent,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              21,
              112,
              97,
              114,
              101,
              110,
              116,
              44,
              99,
              97,
              99,
              104,
              101,
              100,
              95,
              99,
              111,
              110,
              116,
              101,
              110,
              116,
            ]),
          ],
          578365826: [
            Buffer.from([
              73,
              58,
              14,
              99,
              97,
              99,
              104,
              101,
              100,
              95,
              99,
              111,
              110,
              116,
              101,
              110,
              116,
              34,
              55,
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
              112,
              97,
              114,
              101,
              110,
              116,
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
              125,
              47,
              99,
              97,
              99,
              104,
              101,
              100,
              67,
              111,
              110,
              116,
              101,
              110,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /** Gets cached content configurations */
    getCachedContent: {
      name: "GetCachedContent",
      requestType: GetCachedContentRequest,
      requestStream: false,
      responseType: CachedContent,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              57,
              18,
              55,
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
              99,
              97,
              99,
              104,
              101,
              100,
              67,
              111,
              110,
              116,
              101,
              110,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** Updates cached content configurations */
    updateCachedContent: {
      name: "UpdateCachedContent",
      requestType: UpdateCachedContentRequest,
      requestStream: false,
      responseType: CachedContent,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              26,
              99,
              97,
              99,
              104,
              101,
              100,
              95,
              99,
              111,
              110,
              116,
              101,
              110,
              116,
              44,
              117,
              112,
              100,
              97,
              116,
              101,
              95,
              109,
              97,
              115,
              107,
            ]),
          ],
          578365826: [
            Buffer.from([
              88,
              58,
              14,
              99,
              97,
              99,
              104,
              101,
              100,
              95,
              99,
              111,
              110,
              116,
              101,
              110,
              116,
              50,
              70,
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
              99,
              97,
              99,
              104,
              101,
              100,
              95,
              99,
              111,
              110,
              116,
              101,
              110,
              116,
              46,
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
              99,
              97,
              99,
              104,
              101,
              100,
              67,
              111,
              110,
              116,
              101,
              110,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** Deletes cached content */
    deleteCachedContent: {
      name: "DeleteCachedContent",
      requestType: DeleteCachedContentRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              57,
              42,
              55,
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
              99,
              97,
              99,
              104,
              101,
              100,
              67,
              111,
              110,
              116,
              101,
              110,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** Lists cached contents in a project */
    listCachedContents: {
      name: "ListCachedContents",
      requestType: ListCachedContentsRequest,
      requestStream: false,
      responseType: ListCachedContentsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              57,
              18,
              55,
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
              112,
              97,
              114,
              101,
              110,
              116,
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
              125,
              47,
              99,
              97,
              99,
              104,
              101,
              100,
              67,
              111,
              110,
              116,
              101,
              110,
              116,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface GenAiCacheServiceImplementation<CallContextExt = {}> {
  /**
   * Creates cached content, this call will initialize the cached content in the
   * data storage, and users need to pay for the cache data storage.
   */
  createCachedContent(
    request: CreateCachedContentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CachedContent>>;
  /** Gets cached content configurations */
  getCachedContent(
    request: GetCachedContentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CachedContent>>;
  /** Updates cached content configurations */
  updateCachedContent(
    request: UpdateCachedContentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CachedContent>>;
  /** Deletes cached content */
  deleteCachedContent(
    request: DeleteCachedContentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  /** Lists cached contents in a project */
  listCachedContents(
    request: ListCachedContentsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListCachedContentsResponse>>;
}

export interface GenAiCacheServiceClient<CallOptionsExt = {}> {
  /**
   * Creates cached content, this call will initialize the cached content in the
   * data storage, and users need to pay for the cache data storage.
   */
  createCachedContent(
    request: DeepPartial<CreateCachedContentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CachedContent>;
  /** Gets cached content configurations */
  getCachedContent(
    request: DeepPartial<GetCachedContentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CachedContent>;
  /** Updates cached content configurations */
  updateCachedContent(
    request: DeepPartial<UpdateCachedContentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CachedContent>;
  /** Deletes cached content */
  deleteCachedContent(
    request: DeepPartial<DeleteCachedContentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  /** Lists cached contents in a project */
  listCachedContents(
    request: DeepPartial<ListCachedContentsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListCachedContentsResponse>;
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
