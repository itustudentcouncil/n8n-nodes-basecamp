// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/country_code_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing country code errors. */
export interface CountryCodeErrorEnum {
}

/** Enum describing country code errors. */
export enum CountryCodeErrorEnum_CountryCodeError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** INVALID_COUNTRY_CODE - The country code is invalid. */
  INVALID_COUNTRY_CODE = 2,
  UNRECOGNIZED = -1,
}

export function countryCodeErrorEnum_CountryCodeErrorFromJSON(object: any): CountryCodeErrorEnum_CountryCodeError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CountryCodeErrorEnum_CountryCodeError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CountryCodeErrorEnum_CountryCodeError.UNKNOWN;
    case 2:
    case "INVALID_COUNTRY_CODE":
      return CountryCodeErrorEnum_CountryCodeError.INVALID_COUNTRY_CODE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CountryCodeErrorEnum_CountryCodeError.UNRECOGNIZED;
  }
}

export function countryCodeErrorEnum_CountryCodeErrorToJSON(object: CountryCodeErrorEnum_CountryCodeError): string {
  switch (object) {
    case CountryCodeErrorEnum_CountryCodeError.UNSPECIFIED:
      return "UNSPECIFIED";
    case CountryCodeErrorEnum_CountryCodeError.UNKNOWN:
      return "UNKNOWN";
    case CountryCodeErrorEnum_CountryCodeError.INVALID_COUNTRY_CODE:
      return "INVALID_COUNTRY_CODE";
    case CountryCodeErrorEnum_CountryCodeError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCountryCodeErrorEnum(): CountryCodeErrorEnum {
  return {};
}

export const CountryCodeErrorEnum: MessageFns<CountryCodeErrorEnum> = {
  encode(_: CountryCodeErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CountryCodeErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountryCodeErrorEnum();
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

  fromJSON(_: any): CountryCodeErrorEnum {
    return {};
  },

  toJSON(_: CountryCodeErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CountryCodeErrorEnum>): CountryCodeErrorEnum {
    return CountryCodeErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CountryCodeErrorEnum>): CountryCodeErrorEnum {
    const message = createBaseCountryCodeErrorEnum();
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