// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/errors/region_code_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.errors";

/** Container for enum describing possible region code errors. */
export interface RegionCodeErrorEnum {
}

/** Enum describing possible region code errors. */
export enum RegionCodeErrorEnum_RegionCodeError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** INVALID_REGION_CODE - Invalid region code. */
  INVALID_REGION_CODE = 2,
  UNRECOGNIZED = -1,
}

export function regionCodeErrorEnum_RegionCodeErrorFromJSON(object: any): RegionCodeErrorEnum_RegionCodeError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return RegionCodeErrorEnum_RegionCodeError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return RegionCodeErrorEnum_RegionCodeError.UNKNOWN;
    case 2:
    case "INVALID_REGION_CODE":
      return RegionCodeErrorEnum_RegionCodeError.INVALID_REGION_CODE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RegionCodeErrorEnum_RegionCodeError.UNRECOGNIZED;
  }
}

export function regionCodeErrorEnum_RegionCodeErrorToJSON(object: RegionCodeErrorEnum_RegionCodeError): string {
  switch (object) {
    case RegionCodeErrorEnum_RegionCodeError.UNSPECIFIED:
      return "UNSPECIFIED";
    case RegionCodeErrorEnum_RegionCodeError.UNKNOWN:
      return "UNKNOWN";
    case RegionCodeErrorEnum_RegionCodeError.INVALID_REGION_CODE:
      return "INVALID_REGION_CODE";
    case RegionCodeErrorEnum_RegionCodeError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseRegionCodeErrorEnum(): RegionCodeErrorEnum {
  return {};
}

export const RegionCodeErrorEnum: MessageFns<RegionCodeErrorEnum> = {
  encode(_: RegionCodeErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RegionCodeErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegionCodeErrorEnum();
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

  fromJSON(_: any): RegionCodeErrorEnum {
    return {};
  },

  toJSON(_: RegionCodeErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<RegionCodeErrorEnum>): RegionCodeErrorEnum {
    return RegionCodeErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<RegionCodeErrorEnum>): RegionCodeErrorEnum {
    const message = createBaseRegionCodeErrorEnum();
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