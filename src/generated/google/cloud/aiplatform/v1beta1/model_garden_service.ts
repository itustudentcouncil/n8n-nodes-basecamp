// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/model_garden_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { PublisherModel } from "./publisher_model.js";

export const protobufPackage = "google.cloud.aiplatform.v1beta1";

/** View enumeration of PublisherModel. */
export enum PublisherModelView {
  /** PUBLISHER_MODEL_VIEW_UNSPECIFIED - The default / unset value. The API will default to the BASIC view. */
  PUBLISHER_MODEL_VIEW_UNSPECIFIED = 0,
  /**
   * PUBLISHER_MODEL_VIEW_BASIC - Include basic metadata about the publisher model, but not the full
   * contents.
   */
  PUBLISHER_MODEL_VIEW_BASIC = 1,
  /** PUBLISHER_MODEL_VIEW_FULL - Include everything. */
  PUBLISHER_MODEL_VIEW_FULL = 2,
  /** PUBLISHER_MODEL_VERSION_VIEW_BASIC - Include: VersionId, ModelVersionExternalName, and SupportedActions. */
  PUBLISHER_MODEL_VERSION_VIEW_BASIC = 3,
  UNRECOGNIZED = -1,
}

export function publisherModelViewFromJSON(object: any): PublisherModelView {
  switch (object) {
    case 0:
    case "PUBLISHER_MODEL_VIEW_UNSPECIFIED":
      return PublisherModelView.PUBLISHER_MODEL_VIEW_UNSPECIFIED;
    case 1:
    case "PUBLISHER_MODEL_VIEW_BASIC":
      return PublisherModelView.PUBLISHER_MODEL_VIEW_BASIC;
    case 2:
    case "PUBLISHER_MODEL_VIEW_FULL":
      return PublisherModelView.PUBLISHER_MODEL_VIEW_FULL;
    case 3:
    case "PUBLISHER_MODEL_VERSION_VIEW_BASIC":
      return PublisherModelView.PUBLISHER_MODEL_VERSION_VIEW_BASIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PublisherModelView.UNRECOGNIZED;
  }
}

export function publisherModelViewToJSON(object: PublisherModelView): string {
  switch (object) {
    case PublisherModelView.PUBLISHER_MODEL_VIEW_UNSPECIFIED:
      return "PUBLISHER_MODEL_VIEW_UNSPECIFIED";
    case PublisherModelView.PUBLISHER_MODEL_VIEW_BASIC:
      return "PUBLISHER_MODEL_VIEW_BASIC";
    case PublisherModelView.PUBLISHER_MODEL_VIEW_FULL:
      return "PUBLISHER_MODEL_VIEW_FULL";
    case PublisherModelView.PUBLISHER_MODEL_VERSION_VIEW_BASIC:
      return "PUBLISHER_MODEL_VERSION_VIEW_BASIC";
    case PublisherModelView.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Request message for
 * [ModelGardenService.GetPublisherModel][google.cloud.aiplatform.v1beta1.ModelGardenService.GetPublisherModel]
 */
export interface GetPublisherModelRequest {
  /**
   * Required. The name of the PublisherModel resource.
   * Format:
   * `publishers/{publisher}/models/{publisher_model}`
   */
  name: string;
  /**
   * Optional. The IETF BCP-47 language code representing the language in which
   * the publisher model's text information should be written in.
   */
  languageCode: string;
  /** Optional. PublisherModel view specifying which fields to read. */
  view: PublisherModelView;
  /**
   * Optional. Boolean indicates whether the requested model is a Hugging Face
   * model.
   */
  isHuggingFaceModel: boolean;
  /** Optional. Token used to access Hugging Face gated models. */
  huggingFaceToken: string;
}

/**
 * Request message for
 * [ModelGardenService.ListPublisherModels][google.cloud.aiplatform.v1beta1.ModelGardenService.ListPublisherModels].
 */
export interface ListPublisherModelsRequest {
  /**
   * Required. The name of the Publisher from which to list the PublisherModels.
   * Format: `publishers/{publisher}`
   */
  parent: string;
  /** Optional. The standard list filter. */
  filter: string;
  /** Optional. The standard list page size. */
  pageSize: number;
  /**
   * Optional. The standard list page token.
   * Typically obtained via
   * [ListPublisherModelsResponse.next_page_token][google.cloud.aiplatform.v1beta1.ListPublisherModelsResponse.next_page_token]
   * of the previous
   * [ModelGardenService.ListPublisherModels][google.cloud.aiplatform.v1beta1.ModelGardenService.ListPublisherModels]
   * call.
   */
  pageToken: string;
  /** Optional. PublisherModel view specifying which fields to read. */
  view: PublisherModelView;
  /**
   * Optional. A comma-separated list of fields to order by, sorted in ascending
   * order. Use "desc" after a field name for descending.
   */
  orderBy: string;
  /**
   * Optional. The IETF BCP-47 language code representing the language in which
   * the publisher models' text information should be written in. If not set, by
   * default English (en).
   */
  languageCode: string;
}

/**
 * Response message for
 * [ModelGardenService.ListPublisherModels][google.cloud.aiplatform.v1beta1.ModelGardenService.ListPublisherModels].
 */
export interface ListPublisherModelsResponse {
  /** List of PublisherModels in the requested page. */
  publisherModels: PublisherModel[];
  /**
   * A token to retrieve next page of results.
   * Pass to [ListPublisherModels.page_token][] to obtain that page.
   */
  nextPageToken: string;
}

function createBaseGetPublisherModelRequest(): GetPublisherModelRequest {
  return { name: "", languageCode: "", view: 0, isHuggingFaceModel: false, huggingFaceToken: "" };
}

export const GetPublisherModelRequest: MessageFns<GetPublisherModelRequest> = {
  encode(message: GetPublisherModelRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.languageCode !== "") {
      writer.uint32(18).string(message.languageCode);
    }
    if (message.view !== 0) {
      writer.uint32(24).int32(message.view);
    }
    if (message.isHuggingFaceModel !== false) {
      writer.uint32(40).bool(message.isHuggingFaceModel);
    }
    if (message.huggingFaceToken !== "") {
      writer.uint32(50).string(message.huggingFaceToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetPublisherModelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPublisherModelRequest();
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

          message.languageCode = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.view = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isHuggingFaceModel = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.huggingFaceToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPublisherModelRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      languageCode: isSet(object.languageCode) ? globalThis.String(object.languageCode) : "",
      view: isSet(object.view) ? publisherModelViewFromJSON(object.view) : 0,
      isHuggingFaceModel: isSet(object.isHuggingFaceModel) ? globalThis.Boolean(object.isHuggingFaceModel) : false,
      huggingFaceToken: isSet(object.huggingFaceToken) ? globalThis.String(object.huggingFaceToken) : "",
    };
  },

  toJSON(message: GetPublisherModelRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.languageCode !== "") {
      obj.languageCode = message.languageCode;
    }
    if (message.view !== 0) {
      obj.view = publisherModelViewToJSON(message.view);
    }
    if (message.isHuggingFaceModel !== false) {
      obj.isHuggingFaceModel = message.isHuggingFaceModel;
    }
    if (message.huggingFaceToken !== "") {
      obj.huggingFaceToken = message.huggingFaceToken;
    }
    return obj;
  },

  create(base?: DeepPartial<GetPublisherModelRequest>): GetPublisherModelRequest {
    return GetPublisherModelRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetPublisherModelRequest>): GetPublisherModelRequest {
    const message = createBaseGetPublisherModelRequest();
    message.name = object.name ?? "";
    message.languageCode = object.languageCode ?? "";
    message.view = object.view ?? 0;
    message.isHuggingFaceModel = object.isHuggingFaceModel ?? false;
    message.huggingFaceToken = object.huggingFaceToken ?? "";
    return message;
  },
};

function createBaseListPublisherModelsRequest(): ListPublisherModelsRequest {
  return { parent: "", filter: "", pageSize: 0, pageToken: "", view: 0, orderBy: "", languageCode: "" };
}

export const ListPublisherModelsRequest: MessageFns<ListPublisherModelsRequest> = {
  encode(message: ListPublisherModelsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.filter !== "") {
      writer.uint32(18).string(message.filter);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.view !== 0) {
      writer.uint32(40).int32(message.view);
    }
    if (message.orderBy !== "") {
      writer.uint32(50).string(message.orderBy);
    }
    if (message.languageCode !== "") {
      writer.uint32(58).string(message.languageCode);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListPublisherModelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPublisherModelsRequest();
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

          message.filter = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.view = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.orderBy = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.languageCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListPublisherModelsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      view: isSet(object.view) ? publisherModelViewFromJSON(object.view) : 0,
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
      languageCode: isSet(object.languageCode) ? globalThis.String(object.languageCode) : "",
    };
  },

  toJSON(message: ListPublisherModelsRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
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
    if (message.view !== 0) {
      obj.view = publisherModelViewToJSON(message.view);
    }
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    if (message.languageCode !== "") {
      obj.languageCode = message.languageCode;
    }
    return obj;
  },

  create(base?: DeepPartial<ListPublisherModelsRequest>): ListPublisherModelsRequest {
    return ListPublisherModelsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPublisherModelsRequest>): ListPublisherModelsRequest {
    const message = createBaseListPublisherModelsRequest();
    message.parent = object.parent ?? "";
    message.filter = object.filter ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.view = object.view ?? 0;
    message.orderBy = object.orderBy ?? "";
    message.languageCode = object.languageCode ?? "";
    return message;
  },
};

function createBaseListPublisherModelsResponse(): ListPublisherModelsResponse {
  return { publisherModels: [], nextPageToken: "" };
}

export const ListPublisherModelsResponse: MessageFns<ListPublisherModelsResponse> = {
  encode(message: ListPublisherModelsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.publisherModels) {
      PublisherModel.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListPublisherModelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPublisherModelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.publisherModels.push(PublisherModel.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListPublisherModelsResponse {
    return {
      publisherModels: globalThis.Array.isArray(object?.publisherModels)
        ? object.publisherModels.map((e: any) => PublisherModel.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListPublisherModelsResponse): unknown {
    const obj: any = {};
    if (message.publisherModels?.length) {
      obj.publisherModels = message.publisherModels.map((e) => PublisherModel.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListPublisherModelsResponse>): ListPublisherModelsResponse {
    return ListPublisherModelsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPublisherModelsResponse>): ListPublisherModelsResponse {
    const message = createBaseListPublisherModelsResponse();
    message.publisherModels = object.publisherModels?.map((e) => PublisherModel.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

/** The interface of Model Garden Service. */
export type ModelGardenServiceDefinition = typeof ModelGardenServiceDefinition;
export const ModelGardenServiceDefinition = {
  name: "ModelGardenService",
  fullName: "google.cloud.aiplatform.v1beta1.ModelGardenService",
  methods: {
    /** Gets a Model Garden publisher model. */
    getPublisherModel: {
      name: "GetPublisherModel",
      requestType: GetPublisherModelRequest,
      requestStream: false,
      responseType: PublisherModel,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              39,
              18,
              37,
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
              117,
              98,
              108,
              105,
              115,
              104,
              101,
              114,
              115,
              47,
              42,
              47,
              109,
              111,
              100,
              101,
              108,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** Lists publisher models in Model Garden. */
    listPublisherModels: {
      name: "ListPublisherModels",
      requestType: ListPublisherModelsRequest,
      requestStream: false,
      responseType: ListPublisherModelsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              39,
              18,
              37,
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
              117,
              98,
              108,
              105,
              115,
              104,
              101,
              114,
              115,
              47,
              42,
              125,
              47,
              109,
              111,
              100,
              101,
              108,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface ModelGardenServiceImplementation<CallContextExt = {}> {
  /** Gets a Model Garden publisher model. */
  getPublisherModel(
    request: GetPublisherModelRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PublisherModel>>;
  /** Lists publisher models in Model Garden. */
  listPublisherModels(
    request: ListPublisherModelsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListPublisherModelsResponse>>;
}

export interface ModelGardenServiceClient<CallOptionsExt = {}> {
  /** Gets a Model Garden publisher model. */
  getPublisherModel(
    request: DeepPartial<GetPublisherModelRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PublisherModel>;
  /** Lists publisher models in Model Garden. */
  listPublisherModels(
    request: DeepPartial<ListPublisherModelsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListPublisherModelsResponse>;
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