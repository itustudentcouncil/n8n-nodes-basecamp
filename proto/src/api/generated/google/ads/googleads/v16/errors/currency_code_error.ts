// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/errors/currency_code_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.errors";

/** Container for enum describing possible currency code errors. */
export interface CurrencyCodeErrorEnum {
}

/** Enum describing possible currency code errors. */
export enum CurrencyCodeErrorEnum_CurrencyCodeError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** UNSUPPORTED - The currency code is not supported. */
  UNSUPPORTED = 2,
  UNRECOGNIZED = -1,
}

export function currencyCodeErrorEnum_CurrencyCodeErrorFromJSON(object: any): CurrencyCodeErrorEnum_CurrencyCodeError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CurrencyCodeErrorEnum_CurrencyCodeError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CurrencyCodeErrorEnum_CurrencyCodeError.UNKNOWN;
    case 2:
    case "UNSUPPORTED":
      return CurrencyCodeErrorEnum_CurrencyCodeError.UNSUPPORTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CurrencyCodeErrorEnum_CurrencyCodeError.UNRECOGNIZED;
  }
}

export function currencyCodeErrorEnum_CurrencyCodeErrorToJSON(object: CurrencyCodeErrorEnum_CurrencyCodeError): string {
  switch (object) {
    case CurrencyCodeErrorEnum_CurrencyCodeError.UNSPECIFIED:
      return "UNSPECIFIED";
    case CurrencyCodeErrorEnum_CurrencyCodeError.UNKNOWN:
      return "UNKNOWN";
    case CurrencyCodeErrorEnum_CurrencyCodeError.UNSUPPORTED:
      return "UNSUPPORTED";
    case CurrencyCodeErrorEnum_CurrencyCodeError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCurrencyCodeErrorEnum(): CurrencyCodeErrorEnum {
  return {};
}

export const CurrencyCodeErrorEnum: MessageFns<CurrencyCodeErrorEnum> = {
  encode(_: CurrencyCodeErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CurrencyCodeErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyCodeErrorEnum();
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

  fromJSON(_: any): CurrencyCodeErrorEnum {
    return {};
  },

  toJSON(_: CurrencyCodeErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CurrencyCodeErrorEnum>): CurrencyCodeErrorEnum {
    return CurrencyCodeErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CurrencyCodeErrorEnum>): CurrencyCodeErrorEnum {
    const message = createBaseCurrencyCodeErrorEnum();
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