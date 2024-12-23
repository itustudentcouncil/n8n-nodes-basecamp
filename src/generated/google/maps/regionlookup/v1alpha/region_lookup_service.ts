// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/regionlookup/v1alpha/region_lookup_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { RegionIdentifier } from "./region_identifier.js";
import { RegionMatch } from "./region_match.js";
import { RegionSearchValue } from "./region_search_values.js";

export const protobufPackage = "google.maps.regionlookup.v1alpha";

/**
 * Lookup Region Request.
 *
 * Next available tag: 4
 */
export interface LookupRegionRequest {
  /**
   * Each `RegionIdentifier` represents the desired fields used to lookup a
   * single region. See `RegionIdentifier` proto for more details and examples.
   */
  identifiers: RegionIdentifier[];
  /**
   * The maximum number of matches to return. The service may return fewer than
   * this value.
   *
   * If unspecified, at most 50 matches will be returned. The maximum value is
   * 1000; values above 1000 will be coerced to 1000.
   */
  pageSize: number;
  /**
   * A page token, received from a previous `LookupRegion` call. Provide this to
   * retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `LookupRegion` must match
   * the call that provided the page token.
   */
  pageToken: string;
}

/**
 * Lookup Region Response.
 *
 * Next available tag: 3
 */
export interface LookupRegionResponse {
  /**
   * Lookup region matches, one for each `RegionIdentifier` in
   * `LookupRegionRequest.identifiers`.
   */
  matches: RegionMatch[];
  /**
   * A token that can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

/**
 * Search Region Request.
 *
 * Next available tag: 4
 */
export interface SearchRegionRequest {
  /**
   * Each value represents desired search values of a single region to match.
   * The API tries to match them to Place IDs. See `RegionSearchValue`
   * proto for more info and examples.
   */
  searchValues: RegionSearchValue[];
  /**
   * The maximum number of matches to return. The service may return fewer than
   * this value.
   *
   * If unspecified, at most 50 matches will be returned. The maximum value is
   * 1000; values above 1000 will be coerced to 1000.
   */
  pageSize: number;
  /**
   * A page token, received from a previous `SearchRegion` call. Provide this to
   * retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `LookupRegion` must match
   * the call that provided the page token.
   */
  pageToken: string;
}

/**
 * Match Region Response.
 *
 * Next available tag: 3
 */
export interface SearchRegionResponse {
  /**
   * Search region matches, one for each `RegionSearchValue` in
   * `SearchRegionRequest.search_values`.
   */
  matches: RegionMatch[];
  /**
   * A token that can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

function createBaseLookupRegionRequest(): LookupRegionRequest {
  return { identifiers: [], pageSize: 0, pageToken: "" };
}

export const LookupRegionRequest: MessageFns<LookupRegionRequest> = {
  encode(message: LookupRegionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.identifiers) {
      RegionIdentifier.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LookupRegionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLookupRegionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifiers.push(RegionIdentifier.decode(reader, reader.uint32()));
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

  fromJSON(object: any): LookupRegionRequest {
    return {
      identifiers: globalThis.Array.isArray(object?.identifiers)
        ? object.identifiers.map((e: any) => RegionIdentifier.fromJSON(e))
        : [],
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: LookupRegionRequest): unknown {
    const obj: any = {};
    if (message.identifiers?.length) {
      obj.identifiers = message.identifiers.map((e) => RegionIdentifier.toJSON(e));
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<LookupRegionRequest>): LookupRegionRequest {
    return LookupRegionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LookupRegionRequest>): LookupRegionRequest {
    const message = createBaseLookupRegionRequest();
    message.identifiers = object.identifiers?.map((e) => RegionIdentifier.fromPartial(e)) || [];
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseLookupRegionResponse(): LookupRegionResponse {
  return { matches: [], nextPageToken: "" };
}

export const LookupRegionResponse: MessageFns<LookupRegionResponse> = {
  encode(message: LookupRegionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.matches) {
      RegionMatch.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LookupRegionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLookupRegionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matches.push(RegionMatch.decode(reader, reader.uint32()));
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

  fromJSON(object: any): LookupRegionResponse {
    return {
      matches: globalThis.Array.isArray(object?.matches) ? object.matches.map((e: any) => RegionMatch.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: LookupRegionResponse): unknown {
    const obj: any = {};
    if (message.matches?.length) {
      obj.matches = message.matches.map((e) => RegionMatch.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<LookupRegionResponse>): LookupRegionResponse {
    return LookupRegionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LookupRegionResponse>): LookupRegionResponse {
    const message = createBaseLookupRegionResponse();
    message.matches = object.matches?.map((e) => RegionMatch.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseSearchRegionRequest(): SearchRegionRequest {
  return { searchValues: [], pageSize: 0, pageToken: "" };
}

export const SearchRegionRequest: MessageFns<SearchRegionRequest> = {
  encode(message: SearchRegionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.searchValues) {
      RegionSearchValue.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SearchRegionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchRegionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.searchValues.push(RegionSearchValue.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SearchRegionRequest {
    return {
      searchValues: globalThis.Array.isArray(object?.searchValues)
        ? object.searchValues.map((e: any) => RegionSearchValue.fromJSON(e))
        : [],
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: SearchRegionRequest): unknown {
    const obj: any = {};
    if (message.searchValues?.length) {
      obj.searchValues = message.searchValues.map((e) => RegionSearchValue.toJSON(e));
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<SearchRegionRequest>): SearchRegionRequest {
    return SearchRegionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchRegionRequest>): SearchRegionRequest {
    const message = createBaseSearchRegionRequest();
    message.searchValues = object.searchValues?.map((e) => RegionSearchValue.fromPartial(e)) || [];
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseSearchRegionResponse(): SearchRegionResponse {
  return { matches: [], nextPageToken: "" };
}

export const SearchRegionResponse: MessageFns<SearchRegionResponse> = {
  encode(message: SearchRegionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.matches) {
      RegionMatch.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SearchRegionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchRegionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matches.push(RegionMatch.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SearchRegionResponse {
    return {
      matches: globalThis.Array.isArray(object?.matches) ? object.matches.map((e: any) => RegionMatch.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: SearchRegionResponse): unknown {
    const obj: any = {};
    if (message.matches?.length) {
      obj.matches = message.matches.map((e) => RegionMatch.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<SearchRegionResponse>): SearchRegionResponse {
    return SearchRegionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchRegionResponse>): SearchRegionResponse {
    const message = createBaseSearchRegionResponse();
    message.matches = object.matches?.map((e) => RegionMatch.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

/** Service definition for the Region Lookup API. */
export type RegionLookupDefinition = typeof RegionLookupDefinition;
export const RegionLookupDefinition = {
  name: "RegionLookup",
  fullName: "google.maps.regionlookup.v1alpha.RegionLookup",
  methods: {
    /**
     * Lookup region RPC.
     *
     * Looks up a set of region Place IDs of types related to geographic
     * boundaries.
     *
     * The API looks up a region Place ID using the `RegionIdentifier` proto. See
     * `RegionIdentifier` for more details and examples.
     *
     * The following region place types are supported for look up: postal_code,
     * administrative_area_level_1, administrative_area_level_2, locality,
     * neighborhood, and country.
     */
    lookupRegion: {
      name: "LookupRegion",
      requestType: LookupRegionRequest,
      requestStream: false,
      responseType: LookupRegionResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              26,
              58,
              1,
              42,
              34,
              21,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
              97,
              58,
              108,
              111,
              111,
              107,
              117,
              112,
              82,
              101,
              103,
              105,
              111,
              110,
            ]),
          ],
        },
      },
    },
    /**
     * Search region RPC.
     *
     * Searches for a set of region Place IDs of types related to geographic
     * boundaries.
     *
     * Similar to `LookupRegion` RPC but instead of looking up Place IDs for the
     * given `RegionIdentifier`, the API searches for Region Place IDs by
     * considering all regions that are contained within a specified location. The
     * `RegionSearchValue` is used to specify the search values. See
     * `RegionSearchValue` for more details and examples.
     *
     * The following region place types are supported for searching: postal_code,
     * administrative_area_level_1, administrative_area_level_2, locality,
     * neighborhood, and country.
     */
    searchRegion: {
      name: "SearchRegion",
      requestType: SearchRegionRequest,
      requestStream: false,
      responseType: SearchRegionResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              26,
              58,
              1,
              42,
              34,
              21,
              47,
              118,
              49,
              97,
              108,
              112,
              104,
              97,
              58,
              115,
              101,
              97,
              114,
              99,
              104,
              82,
              101,
              103,
              105,
              111,
              110,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface RegionLookupServiceImplementation<CallContextExt = {}> {
  /**
   * Lookup region RPC.
   *
   * Looks up a set of region Place IDs of types related to geographic
   * boundaries.
   *
   * The API looks up a region Place ID using the `RegionIdentifier` proto. See
   * `RegionIdentifier` for more details and examples.
   *
   * The following region place types are supported for look up: postal_code,
   * administrative_area_level_1, administrative_area_level_2, locality,
   * neighborhood, and country.
   */
  lookupRegion(
    request: LookupRegionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<LookupRegionResponse>>;
  /**
   * Search region RPC.
   *
   * Searches for a set of region Place IDs of types related to geographic
   * boundaries.
   *
   * Similar to `LookupRegion` RPC but instead of looking up Place IDs for the
   * given `RegionIdentifier`, the API searches for Region Place IDs by
   * considering all regions that are contained within a specified location. The
   * `RegionSearchValue` is used to specify the search values. See
   * `RegionSearchValue` for more details and examples.
   *
   * The following region place types are supported for searching: postal_code,
   * administrative_area_level_1, administrative_area_level_2, locality,
   * neighborhood, and country.
   */
  searchRegion(
    request: SearchRegionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SearchRegionResponse>>;
}

export interface RegionLookupClient<CallOptionsExt = {}> {
  /**
   * Lookup region RPC.
   *
   * Looks up a set of region Place IDs of types related to geographic
   * boundaries.
   *
   * The API looks up a region Place ID using the `RegionIdentifier` proto. See
   * `RegionIdentifier` for more details and examples.
   *
   * The following region place types are supported for look up: postal_code,
   * administrative_area_level_1, administrative_area_level_2, locality,
   * neighborhood, and country.
   */
  lookupRegion(
    request: DeepPartial<LookupRegionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<LookupRegionResponse>;
  /**
   * Search region RPC.
   *
   * Searches for a set of region Place IDs of types related to geographic
   * boundaries.
   *
   * Similar to `LookupRegion` RPC but instead of looking up Place IDs for the
   * given `RegionIdentifier`, the API searches for Region Place IDs by
   * considering all regions that are contained within a specified location. The
   * `RegionSearchValue` is used to specify the search values. See
   * `RegionSearchValue` for more details and examples.
   *
   * The following region place types are supported for searching: postal_code,
   * administrative_area_level_1, administrative_area_level_2, locality,
   * neighborhood, and country.
   */
  searchRegion(
    request: DeepPartial<SearchRegionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SearchRegionResponse>;
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
