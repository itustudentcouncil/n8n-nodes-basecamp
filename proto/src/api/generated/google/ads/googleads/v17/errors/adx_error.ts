// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/adx_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible adx errors. */
export interface AdxErrorEnum {
}

/** Enum describing possible adx errors. */
export enum AdxErrorEnum_AdxError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** UNSUPPORTED_FEATURE - Attempt to use non-AdX feature by AdX customer. */
  UNSUPPORTED_FEATURE = 2,
  UNRECOGNIZED = -1,
}

export function adxErrorEnum_AdxErrorFromJSON(object: any): AdxErrorEnum_AdxError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AdxErrorEnum_AdxError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AdxErrorEnum_AdxError.UNKNOWN;
    case 2:
    case "UNSUPPORTED_FEATURE":
      return AdxErrorEnum_AdxError.UNSUPPORTED_FEATURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AdxErrorEnum_AdxError.UNRECOGNIZED;
  }
}

export function adxErrorEnum_AdxErrorToJSON(object: AdxErrorEnum_AdxError): string {
  switch (object) {
    case AdxErrorEnum_AdxError.UNSPECIFIED:
      return "UNSPECIFIED";
    case AdxErrorEnum_AdxError.UNKNOWN:
      return "UNKNOWN";
    case AdxErrorEnum_AdxError.UNSUPPORTED_FEATURE:
      return "UNSUPPORTED_FEATURE";
    case AdxErrorEnum_AdxError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAdxErrorEnum(): AdxErrorEnum {
  return {};
}

export const AdxErrorEnum: MessageFns<AdxErrorEnum> = {
  encode(_: AdxErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdxErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdxErrorEnum();
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

  fromJSON(_: any): AdxErrorEnum {
    return {};
  },

  toJSON(_: AdxErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AdxErrorEnum>): AdxErrorEnum {
    return AdxErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AdxErrorEnum>): AdxErrorEnum {
    const message = createBaseAdxErrorEnum();
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