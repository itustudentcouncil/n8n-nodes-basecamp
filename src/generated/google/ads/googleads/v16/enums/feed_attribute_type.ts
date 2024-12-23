// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/feed_attribute_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum describing possible data types for a feed attribute. */
export interface FeedAttributeTypeEnum {
}

/** Possible data types for a feed attribute. */
export enum FeedAttributeTypeEnum_FeedAttributeType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** INT64 - Int64. */
  INT64 = 2,
  /** DOUBLE - Double. */
  DOUBLE = 3,
  /** STRING - String. */
  STRING = 4,
  /** BOOLEAN - Boolean. */
  BOOLEAN = 5,
  /** URL - Url. */
  URL = 6,
  /** DATE_TIME - Datetime. */
  DATE_TIME = 7,
  /** INT64_LIST - Int64 list. */
  INT64_LIST = 8,
  /** DOUBLE_LIST - Double (8 bytes) list. */
  DOUBLE_LIST = 9,
  /** STRING_LIST - String list. */
  STRING_LIST = 10,
  /** BOOLEAN_LIST - Boolean list. */
  BOOLEAN_LIST = 11,
  /** URL_LIST - Url list. */
  URL_LIST = 12,
  /** DATE_TIME_LIST - Datetime list. */
  DATE_TIME_LIST = 13,
  /** PRICE - Price. */
  PRICE = 14,
  UNRECOGNIZED = -1,
}

export function feedAttributeTypeEnum_FeedAttributeTypeFromJSON(object: any): FeedAttributeTypeEnum_FeedAttributeType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return FeedAttributeTypeEnum_FeedAttributeType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return FeedAttributeTypeEnum_FeedAttributeType.UNKNOWN;
    case 2:
    case "INT64":
      return FeedAttributeTypeEnum_FeedAttributeType.INT64;
    case 3:
    case "DOUBLE":
      return FeedAttributeTypeEnum_FeedAttributeType.DOUBLE;
    case 4:
    case "STRING":
      return FeedAttributeTypeEnum_FeedAttributeType.STRING;
    case 5:
    case "BOOLEAN":
      return FeedAttributeTypeEnum_FeedAttributeType.BOOLEAN;
    case 6:
    case "URL":
      return FeedAttributeTypeEnum_FeedAttributeType.URL;
    case 7:
    case "DATE_TIME":
      return FeedAttributeTypeEnum_FeedAttributeType.DATE_TIME;
    case 8:
    case "INT64_LIST":
      return FeedAttributeTypeEnum_FeedAttributeType.INT64_LIST;
    case 9:
    case "DOUBLE_LIST":
      return FeedAttributeTypeEnum_FeedAttributeType.DOUBLE_LIST;
    case 10:
    case "STRING_LIST":
      return FeedAttributeTypeEnum_FeedAttributeType.STRING_LIST;
    case 11:
    case "BOOLEAN_LIST":
      return FeedAttributeTypeEnum_FeedAttributeType.BOOLEAN_LIST;
    case 12:
    case "URL_LIST":
      return FeedAttributeTypeEnum_FeedAttributeType.URL_LIST;
    case 13:
    case "DATE_TIME_LIST":
      return FeedAttributeTypeEnum_FeedAttributeType.DATE_TIME_LIST;
    case 14:
    case "PRICE":
      return FeedAttributeTypeEnum_FeedAttributeType.PRICE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeedAttributeTypeEnum_FeedAttributeType.UNRECOGNIZED;
  }
}

export function feedAttributeTypeEnum_FeedAttributeTypeToJSON(object: FeedAttributeTypeEnum_FeedAttributeType): string {
  switch (object) {
    case FeedAttributeTypeEnum_FeedAttributeType.UNSPECIFIED:
      return "UNSPECIFIED";
    case FeedAttributeTypeEnum_FeedAttributeType.UNKNOWN:
      return "UNKNOWN";
    case FeedAttributeTypeEnum_FeedAttributeType.INT64:
      return "INT64";
    case FeedAttributeTypeEnum_FeedAttributeType.DOUBLE:
      return "DOUBLE";
    case FeedAttributeTypeEnum_FeedAttributeType.STRING:
      return "STRING";
    case FeedAttributeTypeEnum_FeedAttributeType.BOOLEAN:
      return "BOOLEAN";
    case FeedAttributeTypeEnum_FeedAttributeType.URL:
      return "URL";
    case FeedAttributeTypeEnum_FeedAttributeType.DATE_TIME:
      return "DATE_TIME";
    case FeedAttributeTypeEnum_FeedAttributeType.INT64_LIST:
      return "INT64_LIST";
    case FeedAttributeTypeEnum_FeedAttributeType.DOUBLE_LIST:
      return "DOUBLE_LIST";
    case FeedAttributeTypeEnum_FeedAttributeType.STRING_LIST:
      return "STRING_LIST";
    case FeedAttributeTypeEnum_FeedAttributeType.BOOLEAN_LIST:
      return "BOOLEAN_LIST";
    case FeedAttributeTypeEnum_FeedAttributeType.URL_LIST:
      return "URL_LIST";
    case FeedAttributeTypeEnum_FeedAttributeType.DATE_TIME_LIST:
      return "DATE_TIME_LIST";
    case FeedAttributeTypeEnum_FeedAttributeType.PRICE:
      return "PRICE";
    case FeedAttributeTypeEnum_FeedAttributeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseFeedAttributeTypeEnum(): FeedAttributeTypeEnum {
  return {};
}

export const FeedAttributeTypeEnum: MessageFns<FeedAttributeTypeEnum> = {
  encode(_: FeedAttributeTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeedAttributeTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedAttributeTypeEnum();
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

  fromJSON(_: any): FeedAttributeTypeEnum {
    return {};
  },

  toJSON(_: FeedAttributeTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<FeedAttributeTypeEnum>): FeedAttributeTypeEnum {
    return FeedAttributeTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<FeedAttributeTypeEnum>): FeedAttributeTypeEnum {
    const message = createBaseFeedAttributeTypeEnum();
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
