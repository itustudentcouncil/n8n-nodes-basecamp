// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/admanager/v1/creative_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { AdPartnerDeclaration } from "./ad_partner_declaration.js";

export const protobufPackage = "google.ads.admanager.v1";

/** The Creative resource. */
export interface Creative {
  /**
   * Identifier. The resource name of the Creative.
   * Format: `networks/{network_code}/creatives/{creative_id}`
   */
  name: string;
  /** Output only. `Creative` ID. */
  creativeId: Long;
  /**
   * Optional. Display name of the `Creative`. This attribute has a maximum
   * length of 255 characters.
   */
  displayName: string;
  /**
   * Required. The resource name of the Company, which is of type
   * Company.Type.ADVERTISER, to which this Creative belongs. Format:
   * "networks/{network_code}/companies/{company_id}"
   */
  advertiser: string;
  /** Output only. The instant this Creative was last modified. */
  updateTime:
    | Date
    | undefined;
  /** Output only. The URL of the creative for previewing the media. */
  previewUrl: string;
  /**
   * Output only. String representations of creative size.
   * This field is temporarily available and will be deprecated when
   * `Creative.size` becomes available.
   */
  sizeLabel: string;
  /**
   * Optional. The Ad Partners associated with this creative.
   * This is distinct from any associated companies that Google may detect
   * programmatically.
   */
  adPartnerDeclaration: AdPartnerDeclaration | undefined;
}

/** Request object for GetCreative method. */
export interface GetCreativeRequest {
  /**
   * Required. The resource name of the Creative.
   * Format: `networks/{network_code}/creatives/{creative_id}`
   */
  name: string;
}

/** Request object for ListCreatives method. */
export interface ListCreativesRequest {
  /**
   * Required. The parent, which owns this collection of Creatives.
   * Format: networks/{network_code}
   */
  parent: string;
  /**
   * Optional. The maximum number of Creatives to return. The service may return
   * fewer than this value. If unspecified, at most 50 creatives will be
   * returned. The maximum value is 1000; values above 1000 will be coerced to
   * 1000.
   */
  pageSize: number;
  /**
   * Optional. A page token, received from a previous `ListCreatives` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListCreatives` must
   * match the call that provided the page token.
   */
  pageToken: string;
  /**
   * Optional. Expression to filter the response.
   * See syntax details at
   * https://developers.google.com/ad-manager/api/beta/filters
   */
  filter: string;
  /**
   * Optional. Expression to specify sorting order.
   * See syntax details at
   * https://developers.google.com/ad-manager/api/beta/filters#order
   */
  orderBy: string;
  /** Optional. Number of individual resources to skip while paginating. */
  skip: number;
}

/**
 * Response object for ListCreativesRequest containing matching Creative
 * resources.
 */
export interface ListCreativesResponse {
  /** The Creative from the specified network. */
  creatives: Creative[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
  /**
   * Total number of Creatives.
   * If a filter was included in the request, this reflects the total number
   * after the filtering is applied.
   *
   * `total_size` will not be calculated in the response unless it has been
   * included in a response field mask. The response field mask can be provided
   * to the method by using the URL parameter `$fields` or `fields`, or by using
   * the HTTP/gRPC header `X-Goog-FieldMask`.
   *
   * For more information, see
   * https://developers.google.com/ad-manager/api/beta/field-masks
   */
  totalSize: number;
}

function createBaseCreative(): Creative {
  return {
    name: "",
    creativeId: Long.ZERO,
    displayName: "",
    advertiser: "",
    updateTime: undefined,
    previewUrl: "",
    sizeLabel: "",
    adPartnerDeclaration: undefined,
  };
}

export const Creative: MessageFns<Creative> = {
  encode(message: Creative, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.creativeId.equals(Long.ZERO)) {
      writer.uint32(56).int64(message.creativeId.toString());
    }
    if (message.displayName !== "") {
      writer.uint32(66).string(message.displayName);
    }
    if (message.advertiser !== "") {
      writer.uint32(18).string(message.advertiser);
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(26).fork()).join();
    }
    if (message.previewUrl !== "") {
      writer.uint32(34).string(message.previewUrl);
    }
    if (message.sizeLabel !== "") {
      writer.uint32(74).string(message.sizeLabel);
    }
    if (message.adPartnerDeclaration !== undefined) {
      AdPartnerDeclaration.encode(message.adPartnerDeclaration, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Creative {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreative();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.creativeId = Long.fromString(reader.int64().toString());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.advertiser = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.previewUrl = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.sizeLabel = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.adPartnerDeclaration = AdPartnerDeclaration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Creative {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      creativeId: isSet(object.creativeId) ? Long.fromValue(object.creativeId) : Long.ZERO,
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      advertiser: isSet(object.advertiser) ? globalThis.String(object.advertiser) : "",
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      previewUrl: isSet(object.previewUrl) ? globalThis.String(object.previewUrl) : "",
      sizeLabel: isSet(object.sizeLabel) ? globalThis.String(object.sizeLabel) : "",
      adPartnerDeclaration: isSet(object.adPartnerDeclaration)
        ? AdPartnerDeclaration.fromJSON(object.adPartnerDeclaration)
        : undefined,
    };
  },

  toJSON(message: Creative): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (!message.creativeId.equals(Long.ZERO)) {
      obj.creativeId = (message.creativeId || Long.ZERO).toString();
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.advertiser !== "") {
      obj.advertiser = message.advertiser;
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.previewUrl !== "") {
      obj.previewUrl = message.previewUrl;
    }
    if (message.sizeLabel !== "") {
      obj.sizeLabel = message.sizeLabel;
    }
    if (message.adPartnerDeclaration !== undefined) {
      obj.adPartnerDeclaration = AdPartnerDeclaration.toJSON(message.adPartnerDeclaration);
    }
    return obj;
  },

  create(base?: DeepPartial<Creative>): Creative {
    return Creative.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Creative>): Creative {
    const message = createBaseCreative();
    message.name = object.name ?? "";
    message.creativeId = (object.creativeId !== undefined && object.creativeId !== null)
      ? Long.fromValue(object.creativeId)
      : Long.ZERO;
    message.displayName = object.displayName ?? "";
    message.advertiser = object.advertiser ?? "";
    message.updateTime = object.updateTime ?? undefined;
    message.previewUrl = object.previewUrl ?? "";
    message.sizeLabel = object.sizeLabel ?? "";
    message.adPartnerDeclaration = (object.adPartnerDeclaration !== undefined && object.adPartnerDeclaration !== null)
      ? AdPartnerDeclaration.fromPartial(object.adPartnerDeclaration)
      : undefined;
    return message;
  },
};

function createBaseGetCreativeRequest(): GetCreativeRequest {
  return { name: "" };
}

export const GetCreativeRequest: MessageFns<GetCreativeRequest> = {
  encode(message: GetCreativeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetCreativeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCreativeRequest();
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

  fromJSON(object: any): GetCreativeRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetCreativeRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetCreativeRequest>): GetCreativeRequest {
    return GetCreativeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetCreativeRequest>): GetCreativeRequest {
    const message = createBaseGetCreativeRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListCreativesRequest(): ListCreativesRequest {
  return { parent: "", pageSize: 0, pageToken: "", filter: "", orderBy: "", skip: 0 };
}

export const ListCreativesRequest: MessageFns<ListCreativesRequest> = {
  encode(message: ListCreativesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    if (message.skip !== 0) {
      writer.uint32(48).int32(message.skip);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListCreativesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCreativesRequest();
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
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderBy = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.skip = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListCreativesRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
      skip: isSet(object.skip) ? globalThis.Number(object.skip) : 0,
    };
  },

  toJSON(message: ListCreativesRequest): unknown {
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
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    if (message.skip !== 0) {
      obj.skip = Math.round(message.skip);
    }
    return obj;
  },

  create(base?: DeepPartial<ListCreativesRequest>): ListCreativesRequest {
    return ListCreativesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListCreativesRequest>): ListCreativesRequest {
    const message = createBaseListCreativesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    message.skip = object.skip ?? 0;
    return message;
  },
};

function createBaseListCreativesResponse(): ListCreativesResponse {
  return { creatives: [], nextPageToken: "", totalSize: 0 };
}

export const ListCreativesResponse: MessageFns<ListCreativesResponse> = {
  encode(message: ListCreativesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.creatives) {
      Creative.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    if (message.totalSize !== 0) {
      writer.uint32(24).int32(message.totalSize);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListCreativesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCreativesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creatives.push(Creative.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalSize = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListCreativesResponse {
    return {
      creatives: globalThis.Array.isArray(object?.creatives)
        ? object.creatives.map((e: any) => Creative.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
      totalSize: isSet(object.totalSize) ? globalThis.Number(object.totalSize) : 0,
    };
  },

  toJSON(message: ListCreativesResponse): unknown {
    const obj: any = {};
    if (message.creatives?.length) {
      obj.creatives = message.creatives.map((e) => Creative.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    if (message.totalSize !== 0) {
      obj.totalSize = Math.round(message.totalSize);
    }
    return obj;
  },

  create(base?: DeepPartial<ListCreativesResponse>): ListCreativesResponse {
    return ListCreativesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListCreativesResponse>): ListCreativesResponse {
    const message = createBaseListCreativesResponse();
    message.creatives = object.creatives?.map((e) => Creative.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    message.totalSize = object.totalSize ?? 0;
    return message;
  },
};

/** Provides methods for handling Creative objects. */
export type CreativeServiceDefinition = typeof CreativeServiceDefinition;
export const CreativeServiceDefinition = {
  name: "CreativeService",
  fullName: "google.ads.admanager.v1.CreativeService",
  methods: {
    /** API to retrieve a Creative object. */
    getCreative: {
      name: "GetCreative",
      requestType: GetCreativeRequest,
      requestStream: false,
      responseType: Creative,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              35,
              18,
              33,
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
              110,
              101,
              116,
              119,
              111,
              114,
              107,
              115,
              47,
              42,
              47,
              99,
              114,
              101,
              97,
              116,
              105,
              118,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** API to retrieve a list of Creative objects. */
    listCreatives: {
      name: "ListCreatives",
      requestType: ListCreativesRequest,
      requestStream: false,
      responseType: ListCreativesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              35,
              18,
              33,
              47,
              118,
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
              110,
              101,
              116,
              119,
              111,
              114,
              107,
              115,
              47,
              42,
              125,
              47,
              99,
              114,
              101,
              97,
              116,
              105,
              118,
              101,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface CreativeServiceImplementation<CallContextExt = {}> {
  /** API to retrieve a Creative object. */
  getCreative(request: GetCreativeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Creative>>;
  /** API to retrieve a list of Creative objects. */
  listCreatives(
    request: ListCreativesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListCreativesResponse>>;
}

export interface CreativeServiceClient<CallOptionsExt = {}> {
  /** API to retrieve a Creative object. */
  getCreative(request: DeepPartial<GetCreativeRequest>, options?: CallOptions & CallOptionsExt): Promise<Creative>;
  /** API to retrieve a list of Creative objects. */
  listCreatives(
    request: DeepPartial<ListCreativesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListCreativesResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
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