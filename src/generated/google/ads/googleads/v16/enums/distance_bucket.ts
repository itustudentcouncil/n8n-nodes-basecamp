// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/distance_bucket.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Container for distance buckets of a user's distance from an advertiser's
 * location extension.
 */
export interface DistanceBucketEnum {
}

/**
 * The distance bucket for a user's distance from an advertiser's location
 * extension.
 */
export enum DistanceBucketEnum_DistanceBucket {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** WITHIN_700M - User was within 700m of the location. */
  WITHIN_700M = 2,
  /** WITHIN_1KM - User was within 1KM of the location. */
  WITHIN_1KM = 3,
  /** WITHIN_5KM - User was within 5KM of the location. */
  WITHIN_5KM = 4,
  /** WITHIN_10KM - User was within 10KM of the location. */
  WITHIN_10KM = 5,
  /** WITHIN_15KM - User was within 15KM of the location. */
  WITHIN_15KM = 6,
  /** WITHIN_20KM - User was within 20KM of the location. */
  WITHIN_20KM = 7,
  /** WITHIN_25KM - User was within 25KM of the location. */
  WITHIN_25KM = 8,
  /** WITHIN_30KM - User was within 30KM of the location. */
  WITHIN_30KM = 9,
  /** WITHIN_35KM - User was within 35KM of the location. */
  WITHIN_35KM = 10,
  /** WITHIN_40KM - User was within 40KM of the location. */
  WITHIN_40KM = 11,
  /** WITHIN_45KM - User was within 45KM of the location. */
  WITHIN_45KM = 12,
  /** WITHIN_50KM - User was within 50KM of the location. */
  WITHIN_50KM = 13,
  /** WITHIN_55KM - User was within 55KM of the location. */
  WITHIN_55KM = 14,
  /** WITHIN_60KM - User was within 60KM of the location. */
  WITHIN_60KM = 15,
  /** WITHIN_65KM - User was within 65KM of the location. */
  WITHIN_65KM = 16,
  /** BEYOND_65KM - User was beyond 65KM of the location. */
  BEYOND_65KM = 17,
  /** WITHIN_0_7MILES - User was within 0.7 miles of the location. */
  WITHIN_0_7MILES = 18,
  /** WITHIN_1MILE - User was within 1 mile of the location. */
  WITHIN_1MILE = 19,
  /** WITHIN_5MILES - User was within 5 miles of the location. */
  WITHIN_5MILES = 20,
  /** WITHIN_10MILES - User was within 10 miles of the location. */
  WITHIN_10MILES = 21,
  /** WITHIN_15MILES - User was within 15 miles of the location. */
  WITHIN_15MILES = 22,
  /** WITHIN_20MILES - User was within 20 miles of the location. */
  WITHIN_20MILES = 23,
  /** WITHIN_25MILES - User was within 25 miles of the location. */
  WITHIN_25MILES = 24,
  /** WITHIN_30MILES - User was within 30 miles of the location. */
  WITHIN_30MILES = 25,
  /** WITHIN_35MILES - User was within 35 miles of the location. */
  WITHIN_35MILES = 26,
  /** WITHIN_40MILES - User was within 40 miles of the location. */
  WITHIN_40MILES = 27,
  /** BEYOND_40MILES - User was beyond 40 miles of the location. */
  BEYOND_40MILES = 28,
  UNRECOGNIZED = -1,
}

export function distanceBucketEnum_DistanceBucketFromJSON(object: any): DistanceBucketEnum_DistanceBucket {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return DistanceBucketEnum_DistanceBucket.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return DistanceBucketEnum_DistanceBucket.UNKNOWN;
    case 2:
    case "WITHIN_700M":
      return DistanceBucketEnum_DistanceBucket.WITHIN_700M;
    case 3:
    case "WITHIN_1KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_1KM;
    case 4:
    case "WITHIN_5KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_5KM;
    case 5:
    case "WITHIN_10KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_10KM;
    case 6:
    case "WITHIN_15KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_15KM;
    case 7:
    case "WITHIN_20KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_20KM;
    case 8:
    case "WITHIN_25KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_25KM;
    case 9:
    case "WITHIN_30KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_30KM;
    case 10:
    case "WITHIN_35KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_35KM;
    case 11:
    case "WITHIN_40KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_40KM;
    case 12:
    case "WITHIN_45KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_45KM;
    case 13:
    case "WITHIN_50KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_50KM;
    case 14:
    case "WITHIN_55KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_55KM;
    case 15:
    case "WITHIN_60KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_60KM;
    case 16:
    case "WITHIN_65KM":
      return DistanceBucketEnum_DistanceBucket.WITHIN_65KM;
    case 17:
    case "BEYOND_65KM":
      return DistanceBucketEnum_DistanceBucket.BEYOND_65KM;
    case 18:
    case "WITHIN_0_7MILES":
      return DistanceBucketEnum_DistanceBucket.WITHIN_0_7MILES;
    case 19:
    case "WITHIN_1MILE":
      return DistanceBucketEnum_DistanceBucket.WITHIN_1MILE;
    case 20:
    case "WITHIN_5MILES":
      return DistanceBucketEnum_DistanceBucket.WITHIN_5MILES;
    case 21:
    case "WITHIN_10MILES":
      return DistanceBucketEnum_DistanceBucket.WITHIN_10MILES;
    case 22:
    case "WITHIN_15MILES":
      return DistanceBucketEnum_DistanceBucket.WITHIN_15MILES;
    case 23:
    case "WITHIN_20MILES":
      return DistanceBucketEnum_DistanceBucket.WITHIN_20MILES;
    case 24:
    case "WITHIN_25MILES":
      return DistanceBucketEnum_DistanceBucket.WITHIN_25MILES;
    case 25:
    case "WITHIN_30MILES":
      return DistanceBucketEnum_DistanceBucket.WITHIN_30MILES;
    case 26:
    case "WITHIN_35MILES":
      return DistanceBucketEnum_DistanceBucket.WITHIN_35MILES;
    case 27:
    case "WITHIN_40MILES":
      return DistanceBucketEnum_DistanceBucket.WITHIN_40MILES;
    case 28:
    case "BEYOND_40MILES":
      return DistanceBucketEnum_DistanceBucket.BEYOND_40MILES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DistanceBucketEnum_DistanceBucket.UNRECOGNIZED;
  }
}

export function distanceBucketEnum_DistanceBucketToJSON(object: DistanceBucketEnum_DistanceBucket): string {
  switch (object) {
    case DistanceBucketEnum_DistanceBucket.UNSPECIFIED:
      return "UNSPECIFIED";
    case DistanceBucketEnum_DistanceBucket.UNKNOWN:
      return "UNKNOWN";
    case DistanceBucketEnum_DistanceBucket.WITHIN_700M:
      return "WITHIN_700M";
    case DistanceBucketEnum_DistanceBucket.WITHIN_1KM:
      return "WITHIN_1KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_5KM:
      return "WITHIN_5KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_10KM:
      return "WITHIN_10KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_15KM:
      return "WITHIN_15KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_20KM:
      return "WITHIN_20KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_25KM:
      return "WITHIN_25KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_30KM:
      return "WITHIN_30KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_35KM:
      return "WITHIN_35KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_40KM:
      return "WITHIN_40KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_45KM:
      return "WITHIN_45KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_50KM:
      return "WITHIN_50KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_55KM:
      return "WITHIN_55KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_60KM:
      return "WITHIN_60KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_65KM:
      return "WITHIN_65KM";
    case DistanceBucketEnum_DistanceBucket.BEYOND_65KM:
      return "BEYOND_65KM";
    case DistanceBucketEnum_DistanceBucket.WITHIN_0_7MILES:
      return "WITHIN_0_7MILES";
    case DistanceBucketEnum_DistanceBucket.WITHIN_1MILE:
      return "WITHIN_1MILE";
    case DistanceBucketEnum_DistanceBucket.WITHIN_5MILES:
      return "WITHIN_5MILES";
    case DistanceBucketEnum_DistanceBucket.WITHIN_10MILES:
      return "WITHIN_10MILES";
    case DistanceBucketEnum_DistanceBucket.WITHIN_15MILES:
      return "WITHIN_15MILES";
    case DistanceBucketEnum_DistanceBucket.WITHIN_20MILES:
      return "WITHIN_20MILES";
    case DistanceBucketEnum_DistanceBucket.WITHIN_25MILES:
      return "WITHIN_25MILES";
    case DistanceBucketEnum_DistanceBucket.WITHIN_30MILES:
      return "WITHIN_30MILES";
    case DistanceBucketEnum_DistanceBucket.WITHIN_35MILES:
      return "WITHIN_35MILES";
    case DistanceBucketEnum_DistanceBucket.WITHIN_40MILES:
      return "WITHIN_40MILES";
    case DistanceBucketEnum_DistanceBucket.BEYOND_40MILES:
      return "BEYOND_40MILES";
    case DistanceBucketEnum_DistanceBucket.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseDistanceBucketEnum(): DistanceBucketEnum {
  return {};
}

export const DistanceBucketEnum: MessageFns<DistanceBucketEnum> = {
  encode(_: DistanceBucketEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DistanceBucketEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistanceBucketEnum();
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

  fromJSON(_: any): DistanceBucketEnum {
    return {};
  },

  toJSON(_: DistanceBucketEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<DistanceBucketEnum>): DistanceBucketEnum {
    return DistanceBucketEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<DistanceBucketEnum>): DistanceBucketEnum {
    const message = createBaseDistanceBucketEnum();
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
