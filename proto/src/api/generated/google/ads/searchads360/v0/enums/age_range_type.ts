// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/enums/age_range_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.enums";

/** Container for enum describing the type of demographic age ranges. */
export interface AgeRangeTypeEnum {
}

/**
 * The type of demographic age ranges (for example, between 18 and 24 years
 * old).
 */
export enum AgeRangeTypeEnum_AgeRangeType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** AGE_RANGE_18_24 - Between 18 and 24 years old. */
  AGE_RANGE_18_24 = 503001,
  /** AGE_RANGE_25_34 - Between 25 and 34 years old. */
  AGE_RANGE_25_34 = 503002,
  /** AGE_RANGE_35_44 - Between 35 and 44 years old. */
  AGE_RANGE_35_44 = 503003,
  /** AGE_RANGE_45_54 - Between 45 and 54 years old. */
  AGE_RANGE_45_54 = 503004,
  /** AGE_RANGE_55_64 - Between 55 and 64 years old. */
  AGE_RANGE_55_64 = 503005,
  /** AGE_RANGE_65_UP - 65 years old and beyond. */
  AGE_RANGE_65_UP = 503006,
  /** AGE_RANGE_UNDETERMINED - Undetermined age range. */
  AGE_RANGE_UNDETERMINED = 503999,
  UNRECOGNIZED = -1,
}

export function ageRangeTypeEnum_AgeRangeTypeFromJSON(object: any): AgeRangeTypeEnum_AgeRangeType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AgeRangeTypeEnum_AgeRangeType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AgeRangeTypeEnum_AgeRangeType.UNKNOWN;
    case 503001:
    case "AGE_RANGE_18_24":
      return AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_18_24;
    case 503002:
    case "AGE_RANGE_25_34":
      return AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_25_34;
    case 503003:
    case "AGE_RANGE_35_44":
      return AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_35_44;
    case 503004:
    case "AGE_RANGE_45_54":
      return AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_45_54;
    case 503005:
    case "AGE_RANGE_55_64":
      return AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_55_64;
    case 503006:
    case "AGE_RANGE_65_UP":
      return AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_65_UP;
    case 503999:
    case "AGE_RANGE_UNDETERMINED":
      return AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_UNDETERMINED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AgeRangeTypeEnum_AgeRangeType.UNRECOGNIZED;
  }
}

export function ageRangeTypeEnum_AgeRangeTypeToJSON(object: AgeRangeTypeEnum_AgeRangeType): string {
  switch (object) {
    case AgeRangeTypeEnum_AgeRangeType.UNSPECIFIED:
      return "UNSPECIFIED";
    case AgeRangeTypeEnum_AgeRangeType.UNKNOWN:
      return "UNKNOWN";
    case AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_18_24:
      return "AGE_RANGE_18_24";
    case AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_25_34:
      return "AGE_RANGE_25_34";
    case AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_35_44:
      return "AGE_RANGE_35_44";
    case AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_45_54:
      return "AGE_RANGE_45_54";
    case AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_55_64:
      return "AGE_RANGE_55_64";
    case AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_65_UP:
      return "AGE_RANGE_65_UP";
    case AgeRangeTypeEnum_AgeRangeType.AGE_RANGE_UNDETERMINED:
      return "AGE_RANGE_UNDETERMINED";
    case AgeRangeTypeEnum_AgeRangeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAgeRangeTypeEnum(): AgeRangeTypeEnum {
  return {};
}

export const AgeRangeTypeEnum: MessageFns<AgeRangeTypeEnum> = {
  encode(_: AgeRangeTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AgeRangeTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgeRangeTypeEnum();
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

  fromJSON(_: any): AgeRangeTypeEnum {
    return {};
  },

  toJSON(_: AgeRangeTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AgeRangeTypeEnum>): AgeRangeTypeEnum {
    return AgeRangeTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AgeRangeTypeEnum>): AgeRangeTypeEnum {
    const message = createBaseAgeRangeTypeEnum();
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