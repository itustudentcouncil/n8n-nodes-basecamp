// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/errors/currency_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.errors";

/** Container for enum describing possible currency errors. */
export interface CurrencyErrorEnum {
}

/** Enum describing possible currency errors. */
export enum CurrencyErrorEnum_CurrencyError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** VALUE_NOT_MULTIPLE_OF_BILLABLE_UNIT - Bid must be a multiple of billable unit. */
  VALUE_NOT_MULTIPLE_OF_BILLABLE_UNIT = 2,
  UNRECOGNIZED = -1,
}

export function currencyErrorEnum_CurrencyErrorFromJSON(object: any): CurrencyErrorEnum_CurrencyError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CurrencyErrorEnum_CurrencyError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CurrencyErrorEnum_CurrencyError.UNKNOWN;
    case 2:
    case "VALUE_NOT_MULTIPLE_OF_BILLABLE_UNIT":
      return CurrencyErrorEnum_CurrencyError.VALUE_NOT_MULTIPLE_OF_BILLABLE_UNIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CurrencyErrorEnum_CurrencyError.UNRECOGNIZED;
  }
}

export function currencyErrorEnum_CurrencyErrorToJSON(object: CurrencyErrorEnum_CurrencyError): string {
  switch (object) {
    case CurrencyErrorEnum_CurrencyError.UNSPECIFIED:
      return "UNSPECIFIED";
    case CurrencyErrorEnum_CurrencyError.UNKNOWN:
      return "UNKNOWN";
    case CurrencyErrorEnum_CurrencyError.VALUE_NOT_MULTIPLE_OF_BILLABLE_UNIT:
      return "VALUE_NOT_MULTIPLE_OF_BILLABLE_UNIT";
    case CurrencyErrorEnum_CurrencyError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCurrencyErrorEnum(): CurrencyErrorEnum {
  return {};
}

export const CurrencyErrorEnum: MessageFns<CurrencyErrorEnum> = {
  encode(_: CurrencyErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CurrencyErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyErrorEnum();
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

  fromJSON(_: any): CurrencyErrorEnum {
    return {};
  },

  toJSON(_: CurrencyErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CurrencyErrorEnum>): CurrencyErrorEnum {
    return CurrencyErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CurrencyErrorEnum>): CurrencyErrorEnum {
    const message = createBaseCurrencyErrorEnum();
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