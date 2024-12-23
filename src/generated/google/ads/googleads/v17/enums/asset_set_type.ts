// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/asset_set_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Container for enum describing possible types of an asset set. */
export interface AssetSetTypeEnum {
}

/** Possible types of an asset set. */
export enum AssetSetTypeEnum_AssetSetType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** PAGE_FEED - Page asset set. */
  PAGE_FEED = 2,
  /** DYNAMIC_EDUCATION - Dynamic education asset set. */
  DYNAMIC_EDUCATION = 3,
  /** MERCHANT_CENTER_FEED - Google Merchant Center asset set. */
  MERCHANT_CENTER_FEED = 4,
  /** DYNAMIC_REAL_ESTATE - Dynamic real estate asset set. */
  DYNAMIC_REAL_ESTATE = 5,
  /** DYNAMIC_CUSTOM - Dynamic custom asset set. */
  DYNAMIC_CUSTOM = 6,
  /** DYNAMIC_HOTELS_AND_RENTALS - Dynamic hotels and rentals asset set. */
  DYNAMIC_HOTELS_AND_RENTALS = 7,
  /** DYNAMIC_FLIGHTS - Dynamic flights asset set. */
  DYNAMIC_FLIGHTS = 8,
  /** DYNAMIC_TRAVEL - Dynamic travel asset set. */
  DYNAMIC_TRAVEL = 9,
  /** DYNAMIC_LOCAL - Dynamic local asset set. */
  DYNAMIC_LOCAL = 10,
  /** DYNAMIC_JOBS - Dynamic jobs asset set. */
  DYNAMIC_JOBS = 11,
  /** LOCATION_SYNC - Location sync level asset set. */
  LOCATION_SYNC = 12,
  /** BUSINESS_PROFILE_DYNAMIC_LOCATION_GROUP - Business Profile location group asset set. */
  BUSINESS_PROFILE_DYNAMIC_LOCATION_GROUP = 13,
  /**
   * CHAIN_DYNAMIC_LOCATION_GROUP - Chain location group asset set which can be used for both owned
   * locations and affiliate locations.
   */
  CHAIN_DYNAMIC_LOCATION_GROUP = 14,
  /**
   * STATIC_LOCATION_GROUP - Static location group asset set which can be used for both owned
   * locations and affiliate locations.
   */
  STATIC_LOCATION_GROUP = 15,
  /**
   * HOTEL_PROPERTY - Hotel Property asset set which is used to link a hotel property feed to
   * Performance Max for travel goals campaigns.
   */
  HOTEL_PROPERTY = 16,
  UNRECOGNIZED = -1,
}

export function assetSetTypeEnum_AssetSetTypeFromJSON(object: any): AssetSetTypeEnum_AssetSetType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AssetSetTypeEnum_AssetSetType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AssetSetTypeEnum_AssetSetType.UNKNOWN;
    case 2:
    case "PAGE_FEED":
      return AssetSetTypeEnum_AssetSetType.PAGE_FEED;
    case 3:
    case "DYNAMIC_EDUCATION":
      return AssetSetTypeEnum_AssetSetType.DYNAMIC_EDUCATION;
    case 4:
    case "MERCHANT_CENTER_FEED":
      return AssetSetTypeEnum_AssetSetType.MERCHANT_CENTER_FEED;
    case 5:
    case "DYNAMIC_REAL_ESTATE":
      return AssetSetTypeEnum_AssetSetType.DYNAMIC_REAL_ESTATE;
    case 6:
    case "DYNAMIC_CUSTOM":
      return AssetSetTypeEnum_AssetSetType.DYNAMIC_CUSTOM;
    case 7:
    case "DYNAMIC_HOTELS_AND_RENTALS":
      return AssetSetTypeEnum_AssetSetType.DYNAMIC_HOTELS_AND_RENTALS;
    case 8:
    case "DYNAMIC_FLIGHTS":
      return AssetSetTypeEnum_AssetSetType.DYNAMIC_FLIGHTS;
    case 9:
    case "DYNAMIC_TRAVEL":
      return AssetSetTypeEnum_AssetSetType.DYNAMIC_TRAVEL;
    case 10:
    case "DYNAMIC_LOCAL":
      return AssetSetTypeEnum_AssetSetType.DYNAMIC_LOCAL;
    case 11:
    case "DYNAMIC_JOBS":
      return AssetSetTypeEnum_AssetSetType.DYNAMIC_JOBS;
    case 12:
    case "LOCATION_SYNC":
      return AssetSetTypeEnum_AssetSetType.LOCATION_SYNC;
    case 13:
    case "BUSINESS_PROFILE_DYNAMIC_LOCATION_GROUP":
      return AssetSetTypeEnum_AssetSetType.BUSINESS_PROFILE_DYNAMIC_LOCATION_GROUP;
    case 14:
    case "CHAIN_DYNAMIC_LOCATION_GROUP":
      return AssetSetTypeEnum_AssetSetType.CHAIN_DYNAMIC_LOCATION_GROUP;
    case 15:
    case "STATIC_LOCATION_GROUP":
      return AssetSetTypeEnum_AssetSetType.STATIC_LOCATION_GROUP;
    case 16:
    case "HOTEL_PROPERTY":
      return AssetSetTypeEnum_AssetSetType.HOTEL_PROPERTY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AssetSetTypeEnum_AssetSetType.UNRECOGNIZED;
  }
}

export function assetSetTypeEnum_AssetSetTypeToJSON(object: AssetSetTypeEnum_AssetSetType): string {
  switch (object) {
    case AssetSetTypeEnum_AssetSetType.UNSPECIFIED:
      return "UNSPECIFIED";
    case AssetSetTypeEnum_AssetSetType.UNKNOWN:
      return "UNKNOWN";
    case AssetSetTypeEnum_AssetSetType.PAGE_FEED:
      return "PAGE_FEED";
    case AssetSetTypeEnum_AssetSetType.DYNAMIC_EDUCATION:
      return "DYNAMIC_EDUCATION";
    case AssetSetTypeEnum_AssetSetType.MERCHANT_CENTER_FEED:
      return "MERCHANT_CENTER_FEED";
    case AssetSetTypeEnum_AssetSetType.DYNAMIC_REAL_ESTATE:
      return "DYNAMIC_REAL_ESTATE";
    case AssetSetTypeEnum_AssetSetType.DYNAMIC_CUSTOM:
      return "DYNAMIC_CUSTOM";
    case AssetSetTypeEnum_AssetSetType.DYNAMIC_HOTELS_AND_RENTALS:
      return "DYNAMIC_HOTELS_AND_RENTALS";
    case AssetSetTypeEnum_AssetSetType.DYNAMIC_FLIGHTS:
      return "DYNAMIC_FLIGHTS";
    case AssetSetTypeEnum_AssetSetType.DYNAMIC_TRAVEL:
      return "DYNAMIC_TRAVEL";
    case AssetSetTypeEnum_AssetSetType.DYNAMIC_LOCAL:
      return "DYNAMIC_LOCAL";
    case AssetSetTypeEnum_AssetSetType.DYNAMIC_JOBS:
      return "DYNAMIC_JOBS";
    case AssetSetTypeEnum_AssetSetType.LOCATION_SYNC:
      return "LOCATION_SYNC";
    case AssetSetTypeEnum_AssetSetType.BUSINESS_PROFILE_DYNAMIC_LOCATION_GROUP:
      return "BUSINESS_PROFILE_DYNAMIC_LOCATION_GROUP";
    case AssetSetTypeEnum_AssetSetType.CHAIN_DYNAMIC_LOCATION_GROUP:
      return "CHAIN_DYNAMIC_LOCATION_GROUP";
    case AssetSetTypeEnum_AssetSetType.STATIC_LOCATION_GROUP:
      return "STATIC_LOCATION_GROUP";
    case AssetSetTypeEnum_AssetSetType.HOTEL_PROPERTY:
      return "HOTEL_PROPERTY";
    case AssetSetTypeEnum_AssetSetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAssetSetTypeEnum(): AssetSetTypeEnum {
  return {};
}

export const AssetSetTypeEnum: MessageFns<AssetSetTypeEnum> = {
  encode(_: AssetSetTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AssetSetTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSetTypeEnum();
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

  fromJSON(_: any): AssetSetTypeEnum {
    return {};
  },

  toJSON(_: AssetSetTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AssetSetTypeEnum>): AssetSetTypeEnum {
    return AssetSetTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AssetSetTypeEnum>): AssetSetTypeEnum {
    const message = createBaseAssetSetTypeEnum();
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
