// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/admanager/v1/ad_partner_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";

export const protobufPackage = "google.ads.admanager.v1";

/** The AdPartner resource. */
export interface AdPartner {
  /**
   * Identifier. The resource name of the AdPartner.
   * Format: `networks/{network_code}/adPartners/{ad_partner_id}`
   */
  name: string;
}

/** Request object for GetAdPartner method. */
export interface GetAdPartnerRequest {
  /**
   * Required. The resource name of the AdPartner.
   * Format: `networks/{network_code}/adPartners/{ad_partner_id}`
   */
  name: string;
}

/** Request object for ListAdPartners method. */
export interface ListAdPartnersRequest {
  /**
   * Required. The parent, which owns this collection of AdPartners.
   * Format: `networks/{network_code}`
   */
  parent: string;
  /**
   * Optional. The maximum number of AdPartners to return. The service may
   * return fewer than this value. If unspecified, at most 50 AdPartners will be
   * returned. The maximum value is 1000; values above 1000 will be coerced to
   * 1000.
   */
  pageSize: number;
  /**
   * Optional. A page token, received from a previous `ListAdPartners` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListAdPartners` must
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
 * Response object for ListAdPartnersRequest containing matching AdPartner
 * resources.
 */
export interface ListAdPartnersResponse {
  /** The AdPartner from the specified network. */
  adPartners: AdPartner[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
  /**
   * Total number of AdPartners.
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

function createBaseAdPartner(): AdPartner {
  return { name: "" };
}

export const AdPartner: MessageFns<AdPartner> = {
  encode(message: AdPartner, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdPartner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdPartner();
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

  fromJSON(object: any): AdPartner {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: AdPartner): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<AdPartner>): AdPartner {
    return AdPartner.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AdPartner>): AdPartner {
    const message = createBaseAdPartner();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGetAdPartnerRequest(): GetAdPartnerRequest {
  return { name: "" };
}

export const GetAdPartnerRequest: MessageFns<GetAdPartnerRequest> = {
  encode(message: GetAdPartnerRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetAdPartnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAdPartnerRequest();
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

  fromJSON(object: any): GetAdPartnerRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetAdPartnerRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetAdPartnerRequest>): GetAdPartnerRequest {
    return GetAdPartnerRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAdPartnerRequest>): GetAdPartnerRequest {
    const message = createBaseGetAdPartnerRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListAdPartnersRequest(): ListAdPartnersRequest {
  return { parent: "", pageSize: 0, pageToken: "", filter: "", orderBy: "", skip: 0 };
}

export const ListAdPartnersRequest: MessageFns<ListAdPartnersRequest> = {
  encode(message: ListAdPartnersRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): ListAdPartnersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAdPartnersRequest();
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

  fromJSON(object: any): ListAdPartnersRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
      skip: isSet(object.skip) ? globalThis.Number(object.skip) : 0,
    };
  },

  toJSON(message: ListAdPartnersRequest): unknown {
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

  create(base?: DeepPartial<ListAdPartnersRequest>): ListAdPartnersRequest {
    return ListAdPartnersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAdPartnersRequest>): ListAdPartnersRequest {
    const message = createBaseListAdPartnersRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    message.skip = object.skip ?? 0;
    return message;
  },
};

function createBaseListAdPartnersResponse(): ListAdPartnersResponse {
  return { adPartners: [], nextPageToken: "", totalSize: 0 };
}

export const ListAdPartnersResponse: MessageFns<ListAdPartnersResponse> = {
  encode(message: ListAdPartnersResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.adPartners) {
      AdPartner.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    if (message.totalSize !== 0) {
      writer.uint32(24).int32(message.totalSize);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListAdPartnersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAdPartnersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adPartners.push(AdPartner.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListAdPartnersResponse {
    return {
      adPartners: globalThis.Array.isArray(object?.adPartners)
        ? object.adPartners.map((e: any) => AdPartner.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
      totalSize: isSet(object.totalSize) ? globalThis.Number(object.totalSize) : 0,
    };
  },

  toJSON(message: ListAdPartnersResponse): unknown {
    const obj: any = {};
    if (message.adPartners?.length) {
      obj.adPartners = message.adPartners.map((e) => AdPartner.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    if (message.totalSize !== 0) {
      obj.totalSize = Math.round(message.totalSize);
    }
    return obj;
  },

  create(base?: DeepPartial<ListAdPartnersResponse>): ListAdPartnersResponse {
    return ListAdPartnersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAdPartnersResponse>): ListAdPartnersResponse {
    const message = createBaseListAdPartnersResponse();
    message.adPartners = object.adPartners?.map((e) => AdPartner.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    message.totalSize = object.totalSize ?? 0;
    return message;
  },
};

/** Provides methods for handling AdPartner objects. */
export type AdPartnerServiceDefinition = typeof AdPartnerServiceDefinition;
export const AdPartnerServiceDefinition = {
  name: "AdPartnerService",
  fullName: "google.ads.admanager.v1.AdPartnerService",
  methods: {
    /** API to retrieve a AdPartner object. */
    getAdPartner: {
      name: "GetAdPartner",
      requestType: GetAdPartnerRequest,
      requestStream: false,
      responseType: AdPartner,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              36,
              18,
              34,
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
              97,
              100,
              80,
              97,
              114,
              116,
              110,
              101,
              114,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** API to retrieve a list of AdPartner objects. */
    listAdPartners: {
      name: "ListAdPartners",
      requestType: ListAdPartnersRequest,
      requestStream: false,
      responseType: ListAdPartnersResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              36,
              18,
              34,
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
              97,
              100,
              80,
              97,
              114,
              116,
              110,
              101,
              114,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface AdPartnerServiceImplementation<CallContextExt = {}> {
  /** API to retrieve a AdPartner object. */
  getAdPartner(request: GetAdPartnerRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AdPartner>>;
  /** API to retrieve a list of AdPartner objects. */
  listAdPartners(
    request: ListAdPartnersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListAdPartnersResponse>>;
}

export interface AdPartnerServiceClient<CallOptionsExt = {}> {
  /** API to retrieve a AdPartner object. */
  getAdPartner(request: DeepPartial<GetAdPartnerRequest>, options?: CallOptions & CallOptionsExt): Promise<AdPartner>;
  /** API to retrieve a list of AdPartner objects. */
  listAdPartners(
    request: DeepPartial<ListAdPartnersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListAdPartnersResponse>;
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