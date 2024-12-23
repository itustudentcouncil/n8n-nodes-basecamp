// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/string_format_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible string format errors. */
export interface StringFormatErrorEnum {
}

/** Enum describing possible string format errors. */
export enum StringFormatErrorEnum_StringFormatError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** ILLEGAL_CHARS - The input string value contains disallowed characters. */
  ILLEGAL_CHARS = 2,
  /** INVALID_FORMAT - The input string value is invalid for the associated field. */
  INVALID_FORMAT = 3,
  UNRECOGNIZED = -1,
}

export function stringFormatErrorEnum_StringFormatErrorFromJSON(object: any): StringFormatErrorEnum_StringFormatError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return StringFormatErrorEnum_StringFormatError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return StringFormatErrorEnum_StringFormatError.UNKNOWN;
    case 2:
    case "ILLEGAL_CHARS":
      return StringFormatErrorEnum_StringFormatError.ILLEGAL_CHARS;
    case 3:
    case "INVALID_FORMAT":
      return StringFormatErrorEnum_StringFormatError.INVALID_FORMAT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StringFormatErrorEnum_StringFormatError.UNRECOGNIZED;
  }
}

export function stringFormatErrorEnum_StringFormatErrorToJSON(object: StringFormatErrorEnum_StringFormatError): string {
  switch (object) {
    case StringFormatErrorEnum_StringFormatError.UNSPECIFIED:
      return "UNSPECIFIED";
    case StringFormatErrorEnum_StringFormatError.UNKNOWN:
      return "UNKNOWN";
    case StringFormatErrorEnum_StringFormatError.ILLEGAL_CHARS:
      return "ILLEGAL_CHARS";
    case StringFormatErrorEnum_StringFormatError.INVALID_FORMAT:
      return "INVALID_FORMAT";
    case StringFormatErrorEnum_StringFormatError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseStringFormatErrorEnum(): StringFormatErrorEnum {
  return {};
}

export const StringFormatErrorEnum: MessageFns<StringFormatErrorEnum> = {
  encode(_: StringFormatErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StringFormatErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringFormatErrorEnum();
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

  fromJSON(_: any): StringFormatErrorEnum {
    return {};
  },

  toJSON(_: StringFormatErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<StringFormatErrorEnum>): StringFormatErrorEnum {
    return StringFormatErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<StringFormatErrorEnum>): StringFormatErrorEnum {
    const message = createBaseStringFormatErrorEnum();
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
