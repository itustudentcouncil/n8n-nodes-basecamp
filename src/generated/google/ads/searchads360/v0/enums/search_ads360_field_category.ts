// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/enums/search_ads360_field_category.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.enums";

/**
 * Container for enum that determines if the described artifact is a resource
 * or a field, and if it is a field, when it segments search queries.
 */
export interface SearchAds360FieldCategoryEnum {
}

/** The category of the artifact. */
export enum SearchAds360FieldCategoryEnum_SearchAds360FieldCategory {
  /** UNSPECIFIED - Unspecified */
  UNSPECIFIED = 0,
  /** UNKNOWN - Unknown */
  UNKNOWN = 1,
  /** RESOURCE - The described artifact is a resource. */
  RESOURCE = 2,
  /**
   * ATTRIBUTE - The described artifact is a field and is an attribute of a resource.
   * Including a resource attribute field in a query may segment the query if
   * the resource to which it is attributed segments the resource found in
   * the FROM clause.
   */
  ATTRIBUTE = 3,
  /** SEGMENT - The described artifact is a field and always segments search queries. */
  SEGMENT = 5,
  /**
   * METRIC - The described artifact is a field and is a metric. It never segments
   * search queries.
   */
  METRIC = 6,
  UNRECOGNIZED = -1,
}

export function searchAds360FieldCategoryEnum_SearchAds360FieldCategoryFromJSON(
  object: any,
): SearchAds360FieldCategoryEnum_SearchAds360FieldCategory {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.UNKNOWN;
    case 2:
    case "RESOURCE":
      return SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.RESOURCE;
    case 3:
    case "ATTRIBUTE":
      return SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.ATTRIBUTE;
    case 5:
    case "SEGMENT":
      return SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.SEGMENT;
    case 6:
    case "METRIC":
      return SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.METRIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.UNRECOGNIZED;
  }
}

export function searchAds360FieldCategoryEnum_SearchAds360FieldCategoryToJSON(
  object: SearchAds360FieldCategoryEnum_SearchAds360FieldCategory,
): string {
  switch (object) {
    case SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.UNSPECIFIED:
      return "UNSPECIFIED";
    case SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.UNKNOWN:
      return "UNKNOWN";
    case SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.RESOURCE:
      return "RESOURCE";
    case SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.ATTRIBUTE:
      return "ATTRIBUTE";
    case SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.SEGMENT:
      return "SEGMENT";
    case SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.METRIC:
      return "METRIC";
    case SearchAds360FieldCategoryEnum_SearchAds360FieldCategory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseSearchAds360FieldCategoryEnum(): SearchAds360FieldCategoryEnum {
  return {};
}

export const SearchAds360FieldCategoryEnum: MessageFns<SearchAds360FieldCategoryEnum> = {
  encode(_: SearchAds360FieldCategoryEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SearchAds360FieldCategoryEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchAds360FieldCategoryEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): SearchAds360FieldCategoryEnum {
    return {};
  },

  toJSON(_: SearchAds360FieldCategoryEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<SearchAds360FieldCategoryEnum>): SearchAds360FieldCategoryEnum {
    return SearchAds360FieldCategoryEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<SearchAds360FieldCategoryEnum>): SearchAds360FieldCategoryEnum {
    const message = createBaseSearchAds360FieldCategoryEnum();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
