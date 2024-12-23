// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/ad_parameter_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible ad parameter errors. */
export interface AdParameterErrorEnum {
}

/** Enum describing possible ad parameter errors. */
export enum AdParameterErrorEnum_AdParameterError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** AD_GROUP_CRITERION_MUST_BE_KEYWORD - The ad group criterion must be a keyword criterion. */
  AD_GROUP_CRITERION_MUST_BE_KEYWORD = 2,
  /** INVALID_INSERTION_TEXT_FORMAT - The insertion text is invalid. */
  INVALID_INSERTION_TEXT_FORMAT = 3,
  UNRECOGNIZED = -1,
}

export function adParameterErrorEnum_AdParameterErrorFromJSON(object: any): AdParameterErrorEnum_AdParameterError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AdParameterErrorEnum_AdParameterError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AdParameterErrorEnum_AdParameterError.UNKNOWN;
    case 2:
    case "AD_GROUP_CRITERION_MUST_BE_KEYWORD":
      return AdParameterErrorEnum_AdParameterError.AD_GROUP_CRITERION_MUST_BE_KEYWORD;
    case 3:
    case "INVALID_INSERTION_TEXT_FORMAT":
      return AdParameterErrorEnum_AdParameterError.INVALID_INSERTION_TEXT_FORMAT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AdParameterErrorEnum_AdParameterError.UNRECOGNIZED;
  }
}

export function adParameterErrorEnum_AdParameterErrorToJSON(object: AdParameterErrorEnum_AdParameterError): string {
  switch (object) {
    case AdParameterErrorEnum_AdParameterError.UNSPECIFIED:
      return "UNSPECIFIED";
    case AdParameterErrorEnum_AdParameterError.UNKNOWN:
      return "UNKNOWN";
    case AdParameterErrorEnum_AdParameterError.AD_GROUP_CRITERION_MUST_BE_KEYWORD:
      return "AD_GROUP_CRITERION_MUST_BE_KEYWORD";
    case AdParameterErrorEnum_AdParameterError.INVALID_INSERTION_TEXT_FORMAT:
      return "INVALID_INSERTION_TEXT_FORMAT";
    case AdParameterErrorEnum_AdParameterError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAdParameterErrorEnum(): AdParameterErrorEnum {
  return {};
}

export const AdParameterErrorEnum: MessageFns<AdParameterErrorEnum> = {
  encode(_: AdParameterErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdParameterErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdParameterErrorEnum();
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

  fromJSON(_: any): AdParameterErrorEnum {
    return {};
  },

  toJSON(_: AdParameterErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AdParameterErrorEnum>): AdParameterErrorEnum {
    return AdParameterErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AdParameterErrorEnum>): AdParameterErrorEnum {
    const message = createBaseAdParameterErrorEnum();
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
