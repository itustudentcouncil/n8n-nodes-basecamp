// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/admanager/v1/custom_targeting_value_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import {
  CustomTargetingValueMatchTypeEnum_CustomTargetingValueMatchType,
  customTargetingValueMatchTypeEnum_CustomTargetingValueMatchTypeFromJSON,
  customTargetingValueMatchTypeEnum_CustomTargetingValueMatchTypeToJSON,
  CustomTargetingValueStatusEnum_CustomTargetingValueStatus,
  customTargetingValueStatusEnum_CustomTargetingValueStatusFromJSON,
  customTargetingValueStatusEnum_CustomTargetingValueStatusToJSON,
} from "./custom_targeting_value_enums.js";

export const protobufPackage = "google.ads.admanager.v1";

/** The `CustomTargetingValue` resource. */
export interface CustomTargetingValue {
  /**
   * Identifier. The resource name of the `CustomTargetingValue`.
   * Format:
   * `networks/{network_code}/customTargetingKeys/{custom_targeting_key_id}/customTargetingValues/{custom_targeting_value_id}`
   */
  name: string;
  /**
   * Immutable. Name of the `CustomTargetingValue`. Values can contain up to 40
   * characters each. You can use alphanumeric characters and symbols other than
   * the following: ", ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ]. Values are
   * not data-specific; all values are treated as string. For example, instead
   * of using "age>=18 AND <=34", try "18-34"
   */
  adTagName: string;
  /** Optional. Descriptive name for the `CustomTargetingValue`. */
  displayName: string;
  /**
   * Required. The way in which the CustomTargetingValue.name strings will be
   * matched.
   */
  matchType: CustomTargetingValueMatchTypeEnum_CustomTargetingValueMatchType;
  /** Output only. Status of the `CustomTargetingValue`. */
  status: CustomTargetingValueStatusEnum_CustomTargetingValueStatus;
}

/** Request object for `GetCustomTargetingValue` method. */
export interface GetCustomTargetingValueRequest {
  /**
   * Required. The resource name of the CustomTargetingValue.
   * Format:
   * `networks/{network_code}/customTargetingKeys/{custom_targeting_key_id}/customTargetingValues/{custom_targeting_value_id}`
   */
  name: string;
}

/** Request object for `ListCustomTargetingValues` method. */
export interface ListCustomTargetingValuesRequest {
  /**
   * Required. The parent, which owns this collection of CustomTargetingValues.
   * Format:
   * `networks/{network_code}/customTargetingKeys/{custom_targeting_key_id}`
   */
  parent: string;
  /**
   * Optional. The maximum number of `CustomTargetingValues` to return. The
   * service may return fewer than this value. If unspecified, at most 50
   * `CustomTargetingValues` will be returned. The maximum value is 1000; values
   * above 1000 will be coerced to 1000.
   */
  pageSize: number;
  /**
   * Optional. A page token, received from a previous
   * `ListCustomTargetingValues` call. Provide this to retrieve the subsequent
   * page.
   *
   * When paginating, all other parameters provided to
   * `ListCustomTargetingValues` must match the call that provided the page
   * token.
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
 * Response object for `ListCustomTargetingValuesRequest` containing matching
 * `CustomTargetingValue` objects.
 */
export interface ListCustomTargetingValuesResponse {
  /** The `CustomTargetingValue` objects from the specified network. */
  customTargetingValues: CustomTargetingValue[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
  /**
   * Total number of `CustomTargetingValue` objects.
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

function createBaseCustomTargetingValue(): CustomTargetingValue {
  return { name: "", adTagName: "", displayName: "", matchType: 0, status: 0 };
}

export const CustomTargetingValue: MessageFns<CustomTargetingValue> = {
  encode(message: CustomTargetingValue, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.adTagName !== "") {
      writer.uint32(34).string(message.adTagName);
    }
    if (message.displayName !== "") {
      writer.uint32(42).string(message.displayName);
    }
    if (message.matchType !== 0) {
      writer.uint32(48).int32(message.matchType);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomTargetingValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomTargetingValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.adTagName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.matchType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomTargetingValue {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      adTagName: isSet(object.adTagName) ? globalThis.String(object.adTagName) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      matchType: isSet(object.matchType)
        ? customTargetingValueMatchTypeEnum_CustomTargetingValueMatchTypeFromJSON(object.matchType)
        : 0,
      status: isSet(object.status)
        ? customTargetingValueStatusEnum_CustomTargetingValueStatusFromJSON(object.status)
        : 0,
    };
  },

  toJSON(message: CustomTargetingValue): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.adTagName !== "") {
      obj.adTagName = message.adTagName;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.matchType !== 0) {
      obj.matchType = customTargetingValueMatchTypeEnum_CustomTargetingValueMatchTypeToJSON(message.matchType);
    }
    if (message.status !== 0) {
      obj.status = customTargetingValueStatusEnum_CustomTargetingValueStatusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<CustomTargetingValue>): CustomTargetingValue {
    return CustomTargetingValue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomTargetingValue>): CustomTargetingValue {
    const message = createBaseCustomTargetingValue();
    message.name = object.name ?? "";
    message.adTagName = object.adTagName ?? "";
    message.displayName = object.displayName ?? "";
    message.matchType = object.matchType ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseGetCustomTargetingValueRequest(): GetCustomTargetingValueRequest {
  return { name: "" };
}

export const GetCustomTargetingValueRequest: MessageFns<GetCustomTargetingValueRequest> = {
  encode(message: GetCustomTargetingValueRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetCustomTargetingValueRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCustomTargetingValueRequest();
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

  fromJSON(object: any): GetCustomTargetingValueRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetCustomTargetingValueRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetCustomTargetingValueRequest>): GetCustomTargetingValueRequest {
    return GetCustomTargetingValueRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetCustomTargetingValueRequest>): GetCustomTargetingValueRequest {
    const message = createBaseGetCustomTargetingValueRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListCustomTargetingValuesRequest(): ListCustomTargetingValuesRequest {
  return { parent: "", pageSize: 0, pageToken: "", filter: "", orderBy: "", skip: 0 };
}

export const ListCustomTargetingValuesRequest: MessageFns<ListCustomTargetingValuesRequest> = {
  encode(message: ListCustomTargetingValuesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): ListCustomTargetingValuesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCustomTargetingValuesRequest();
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

  fromJSON(object: any): ListCustomTargetingValuesRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
      skip: isSet(object.skip) ? globalThis.Number(object.skip) : 0,
    };
  },

  toJSON(message: ListCustomTargetingValuesRequest): unknown {
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

  create(base?: DeepPartial<ListCustomTargetingValuesRequest>): ListCustomTargetingValuesRequest {
    return ListCustomTargetingValuesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListCustomTargetingValuesRequest>): ListCustomTargetingValuesRequest {
    const message = createBaseListCustomTargetingValuesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    message.skip = object.skip ?? 0;
    return message;
  },
};

function createBaseListCustomTargetingValuesResponse(): ListCustomTargetingValuesResponse {
  return { customTargetingValues: [], nextPageToken: "", totalSize: 0 };
}

export const ListCustomTargetingValuesResponse: MessageFns<ListCustomTargetingValuesResponse> = {
  encode(message: ListCustomTargetingValuesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.customTargetingValues) {
      CustomTargetingValue.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    if (message.totalSize !== 0) {
      writer.uint32(24).int32(message.totalSize);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListCustomTargetingValuesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCustomTargetingValuesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customTargetingValues.push(CustomTargetingValue.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListCustomTargetingValuesResponse {
    return {
      customTargetingValues: globalThis.Array.isArray(object?.customTargetingValues)
        ? object.customTargetingValues.map((e: any) => CustomTargetingValue.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
      totalSize: isSet(object.totalSize) ? globalThis.Number(object.totalSize) : 0,
    };
  },

  toJSON(message: ListCustomTargetingValuesResponse): unknown {
    const obj: any = {};
    if (message.customTargetingValues?.length) {
      obj.customTargetingValues = message.customTargetingValues.map((e) => CustomTargetingValue.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    if (message.totalSize !== 0) {
      obj.totalSize = Math.round(message.totalSize);
    }
    return obj;
  },

  create(base?: DeepPartial<ListCustomTargetingValuesResponse>): ListCustomTargetingValuesResponse {
    return ListCustomTargetingValuesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListCustomTargetingValuesResponse>): ListCustomTargetingValuesResponse {
    const message = createBaseListCustomTargetingValuesResponse();
    message.customTargetingValues = object.customTargetingValues?.map((e) => CustomTargetingValue.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    message.totalSize = object.totalSize ?? 0;
    return message;
  },
};

/** Provides methods for handling `CustomTargetingValue` objects. */
export type CustomTargetingValueServiceDefinition = typeof CustomTargetingValueServiceDefinition;
export const CustomTargetingValueServiceDefinition = {
  name: "CustomTargetingValueService",
  fullName: "google.ads.admanager.v1.CustomTargetingValueService",
  methods: {
    /** API to retrieve a `CustomTargetingValue` object. */
    getCustomTargetingValue: {
      name: "GetCustomTargetingValue",
      requestType: GetCustomTargetingValueRequest,
      requestStream: false,
      responseType: CustomTargetingValue,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              69,
              18,
              67,
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
              117,
              115,
              116,
              111,
              109,
              84,
              97,
              114,
              103,
              101,
              116,
              105,
              110,
              103,
              75,
              101,
              121,
              115,
              47,
              42,
              47,
              99,
              117,
              115,
              116,
              111,
              109,
              84,
              97,
              114,
              103,
              101,
              116,
              105,
              110,
              103,
              86,
              97,
              108,
              117,
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
    /** API to retrieve a list of `CustomTargetingValue` objects. */
    listCustomTargetingValues: {
      name: "ListCustomTargetingValues",
      requestType: ListCustomTargetingValuesRequest,
      requestStream: false,
      responseType: ListCustomTargetingValuesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              69,
              18,
              67,
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
              47,
              99,
              117,
              115,
              116,
              111,
              109,
              84,
              97,
              114,
              103,
              101,
              116,
              105,
              110,
              103,
              75,
              101,
              121,
              115,
              47,
              42,
              125,
              47,
              99,
              117,
              115,
              116,
              111,
              109,
              84,
              97,
              114,
              103,
              101,
              116,
              105,
              110,
              103,
              86,
              97,
              108,
              117,
              101,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface CustomTargetingValueServiceImplementation<CallContextExt = {}> {
  /** API to retrieve a `CustomTargetingValue` object. */
  getCustomTargetingValue(
    request: GetCustomTargetingValueRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CustomTargetingValue>>;
  /** API to retrieve a list of `CustomTargetingValue` objects. */
  listCustomTargetingValues(
    request: ListCustomTargetingValuesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListCustomTargetingValuesResponse>>;
}

export interface CustomTargetingValueServiceClient<CallOptionsExt = {}> {
  /** API to retrieve a `CustomTargetingValue` object. */
  getCustomTargetingValue(
    request: DeepPartial<GetCustomTargetingValueRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CustomTargetingValue>;
  /** API to retrieve a list of `CustomTargetingValue` objects. */
  listCustomTargetingValues(
    request: DeepPartial<ListCustomTargetingValuesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListCustomTargetingValuesResponse>;
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