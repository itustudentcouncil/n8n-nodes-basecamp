// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/enums/product_bidding_category_level.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.enums";

/** Level of a product bidding category. */
export interface ProductBiddingCategoryLevelEnum {
}

/** Enum describing the level of the product bidding category. */
export enum ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** LEVEL1 - Level 1. */
  LEVEL1 = 2,
  /** LEVEL2 - Level 2. */
  LEVEL2 = 3,
  /** LEVEL3 - Level 3. */
  LEVEL3 = 4,
  /** LEVEL4 - Level 4. */
  LEVEL4 = 5,
  /** LEVEL5 - Level 5. */
  LEVEL5 = 6,
  UNRECOGNIZED = -1,
}

export function productBiddingCategoryLevelEnum_ProductBiddingCategoryLevelFromJSON(
  object: any,
): ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.UNKNOWN;
    case 2:
    case "LEVEL1":
      return ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.LEVEL1;
    case 3:
    case "LEVEL2":
      return ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.LEVEL2;
    case 4:
    case "LEVEL3":
      return ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.LEVEL3;
    case 5:
    case "LEVEL4":
      return ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.LEVEL4;
    case 6:
    case "LEVEL5":
      return ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.LEVEL5;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.UNRECOGNIZED;
  }
}

export function productBiddingCategoryLevelEnum_ProductBiddingCategoryLevelToJSON(
  object: ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel,
): string {
  switch (object) {
    case ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.UNSPECIFIED:
      return "UNSPECIFIED";
    case ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.UNKNOWN:
      return "UNKNOWN";
    case ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.LEVEL1:
      return "LEVEL1";
    case ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.LEVEL2:
      return "LEVEL2";
    case ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.LEVEL3:
      return "LEVEL3";
    case ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.LEVEL4:
      return "LEVEL4";
    case ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.LEVEL5:
      return "LEVEL5";
    case ProductBiddingCategoryLevelEnum_ProductBiddingCategoryLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseProductBiddingCategoryLevelEnum(): ProductBiddingCategoryLevelEnum {
  return {};
}

export const ProductBiddingCategoryLevelEnum: MessageFns<ProductBiddingCategoryLevelEnum> = {
  encode(_: ProductBiddingCategoryLevelEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProductBiddingCategoryLevelEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductBiddingCategoryLevelEnum();
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

  fromJSON(_: any): ProductBiddingCategoryLevelEnum {
    return {};
  },

  toJSON(_: ProductBiddingCategoryLevelEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ProductBiddingCategoryLevelEnum>): ProductBiddingCategoryLevelEnum {
    return ProductBiddingCategoryLevelEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ProductBiddingCategoryLevelEnum>): ProductBiddingCategoryLevelEnum {
    const message = createBaseProductBiddingCategoryLevelEnum();
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