// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/positive_geo_target_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Container for enum describing possible positive geo target types. */
export interface PositiveGeoTargetTypeEnum {
}

/** The possible positive geo target types. */
export enum PositiveGeoTargetTypeEnum_PositiveGeoTargetType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The value is unknown in this version. */
  UNKNOWN = 1,
  /**
   * PRESENCE_OR_INTEREST - Specifies that an ad is triggered if the user is in,
   * or shows interest in, advertiser's targeted locations.
   */
  PRESENCE_OR_INTEREST = 5,
  /**
   * SEARCH_INTEREST - Specifies that an ad is triggered if the user
   * searches for advertiser's targeted locations.
   * This can only be used with Search and standard
   * Shopping campaigns.
   */
  SEARCH_INTEREST = 6,
  /**
   * PRESENCE - Specifies that an ad is triggered if the user is in
   * or regularly in advertiser's targeted locations.
   */
  PRESENCE = 7,
  UNRECOGNIZED = -1,
}

export function positiveGeoTargetTypeEnum_PositiveGeoTargetTypeFromJSON(
  object: any,
): PositiveGeoTargetTypeEnum_PositiveGeoTargetType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return PositiveGeoTargetTypeEnum_PositiveGeoTargetType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return PositiveGeoTargetTypeEnum_PositiveGeoTargetType.UNKNOWN;
    case 5:
    case "PRESENCE_OR_INTEREST":
      return PositiveGeoTargetTypeEnum_PositiveGeoTargetType.PRESENCE_OR_INTEREST;
    case 6:
    case "SEARCH_INTEREST":
      return PositiveGeoTargetTypeEnum_PositiveGeoTargetType.SEARCH_INTEREST;
    case 7:
    case "PRESENCE":
      return PositiveGeoTargetTypeEnum_PositiveGeoTargetType.PRESENCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PositiveGeoTargetTypeEnum_PositiveGeoTargetType.UNRECOGNIZED;
  }
}

export function positiveGeoTargetTypeEnum_PositiveGeoTargetTypeToJSON(
  object: PositiveGeoTargetTypeEnum_PositiveGeoTargetType,
): string {
  switch (object) {
    case PositiveGeoTargetTypeEnum_PositiveGeoTargetType.UNSPECIFIED:
      return "UNSPECIFIED";
    case PositiveGeoTargetTypeEnum_PositiveGeoTargetType.UNKNOWN:
      return "UNKNOWN";
    case PositiveGeoTargetTypeEnum_PositiveGeoTargetType.PRESENCE_OR_INTEREST:
      return "PRESENCE_OR_INTEREST";
    case PositiveGeoTargetTypeEnum_PositiveGeoTargetType.SEARCH_INTEREST:
      return "SEARCH_INTEREST";
    case PositiveGeoTargetTypeEnum_PositiveGeoTargetType.PRESENCE:
      return "PRESENCE";
    case PositiveGeoTargetTypeEnum_PositiveGeoTargetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePositiveGeoTargetTypeEnum(): PositiveGeoTargetTypeEnum {
  return {};
}

export const PositiveGeoTargetTypeEnum: MessageFns<PositiveGeoTargetTypeEnum> = {
  encode(_: PositiveGeoTargetTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PositiveGeoTargetTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositiveGeoTargetTypeEnum();
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

  fromJSON(_: any): PositiveGeoTargetTypeEnum {
    return {};
  },

  toJSON(_: PositiveGeoTargetTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PositiveGeoTargetTypeEnum>): PositiveGeoTargetTypeEnum {
    return PositiveGeoTargetTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<PositiveGeoTargetTypeEnum>): PositiveGeoTargetTypeEnum {
    const message = createBasePositiveGeoTargetTypeEnum();
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
