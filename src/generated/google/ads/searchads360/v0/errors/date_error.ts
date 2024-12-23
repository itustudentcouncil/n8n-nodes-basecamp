// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/errors/date_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.errors";

/** Container for enum describing possible date errors. */
export interface DateErrorEnum {
}

/** Enum describing possible date errors. */
export enum DateErrorEnum_DateError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** INVALID_FIELD_VALUES_IN_DATE - Given field values do not correspond to a valid date. */
  INVALID_FIELD_VALUES_IN_DATE = 2,
  /** INVALID_FIELD_VALUES_IN_DATE_TIME - Given field values do not correspond to a valid date time. */
  INVALID_FIELD_VALUES_IN_DATE_TIME = 3,
  /** INVALID_STRING_DATE - The string date's format should be yyyy-mm-dd. */
  INVALID_STRING_DATE = 4,
  /** INVALID_STRING_DATE_TIME_MICROS - The string date time's format should be yyyy-mm-dd hh:mm:ss.ssssss. */
  INVALID_STRING_DATE_TIME_MICROS = 6,
  /** INVALID_STRING_DATE_TIME_SECONDS - The string date time's format should be yyyy-mm-dd hh:mm:ss. */
  INVALID_STRING_DATE_TIME_SECONDS = 11,
  /** INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET - The string date time's format should be yyyy-mm-dd hh:mm:ss+|-hh:mm. */
  INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET = 12,
  /** EARLIER_THAN_MINIMUM_DATE - Date is before allowed minimum. */
  EARLIER_THAN_MINIMUM_DATE = 7,
  /** LATER_THAN_MAXIMUM_DATE - Date is after allowed maximum. */
  LATER_THAN_MAXIMUM_DATE = 8,
  /** DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE - Date range bounds are not in order. */
  DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE = 9,
  /** DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL - Both dates in range are null. */
  DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL = 10,
  UNRECOGNIZED = -1,
}

export function dateErrorEnum_DateErrorFromJSON(object: any): DateErrorEnum_DateError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return DateErrorEnum_DateError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return DateErrorEnum_DateError.UNKNOWN;
    case 2:
    case "INVALID_FIELD_VALUES_IN_DATE":
      return DateErrorEnum_DateError.INVALID_FIELD_VALUES_IN_DATE;
    case 3:
    case "INVALID_FIELD_VALUES_IN_DATE_TIME":
      return DateErrorEnum_DateError.INVALID_FIELD_VALUES_IN_DATE_TIME;
    case 4:
    case "INVALID_STRING_DATE":
      return DateErrorEnum_DateError.INVALID_STRING_DATE;
    case 6:
    case "INVALID_STRING_DATE_TIME_MICROS":
      return DateErrorEnum_DateError.INVALID_STRING_DATE_TIME_MICROS;
    case 11:
    case "INVALID_STRING_DATE_TIME_SECONDS":
      return DateErrorEnum_DateError.INVALID_STRING_DATE_TIME_SECONDS;
    case 12:
    case "INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET":
      return DateErrorEnum_DateError.INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET;
    case 7:
    case "EARLIER_THAN_MINIMUM_DATE":
      return DateErrorEnum_DateError.EARLIER_THAN_MINIMUM_DATE;
    case 8:
    case "LATER_THAN_MAXIMUM_DATE":
      return DateErrorEnum_DateError.LATER_THAN_MAXIMUM_DATE;
    case 9:
    case "DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE":
      return DateErrorEnum_DateError.DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE;
    case 10:
    case "DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL":
      return DateErrorEnum_DateError.DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DateErrorEnum_DateError.UNRECOGNIZED;
  }
}

export function dateErrorEnum_DateErrorToJSON(object: DateErrorEnum_DateError): string {
  switch (object) {
    case DateErrorEnum_DateError.UNSPECIFIED:
      return "UNSPECIFIED";
    case DateErrorEnum_DateError.UNKNOWN:
      return "UNKNOWN";
    case DateErrorEnum_DateError.INVALID_FIELD_VALUES_IN_DATE:
      return "INVALID_FIELD_VALUES_IN_DATE";
    case DateErrorEnum_DateError.INVALID_FIELD_VALUES_IN_DATE_TIME:
      return "INVALID_FIELD_VALUES_IN_DATE_TIME";
    case DateErrorEnum_DateError.INVALID_STRING_DATE:
      return "INVALID_STRING_DATE";
    case DateErrorEnum_DateError.INVALID_STRING_DATE_TIME_MICROS:
      return "INVALID_STRING_DATE_TIME_MICROS";
    case DateErrorEnum_DateError.INVALID_STRING_DATE_TIME_SECONDS:
      return "INVALID_STRING_DATE_TIME_SECONDS";
    case DateErrorEnum_DateError.INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET:
      return "INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET";
    case DateErrorEnum_DateError.EARLIER_THAN_MINIMUM_DATE:
      return "EARLIER_THAN_MINIMUM_DATE";
    case DateErrorEnum_DateError.LATER_THAN_MAXIMUM_DATE:
      return "LATER_THAN_MAXIMUM_DATE";
    case DateErrorEnum_DateError.DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE:
      return "DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE";
    case DateErrorEnum_DateError.DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL:
      return "DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL";
    case DateErrorEnum_DateError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseDateErrorEnum(): DateErrorEnum {
  return {};
}

export const DateErrorEnum: MessageFns<DateErrorEnum> = {
  encode(_: DateErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DateErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDateErrorEnum();
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

  fromJSON(_: any): DateErrorEnum {
    return {};
  },

  toJSON(_: DateErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<DateErrorEnum>): DateErrorEnum {
    return DateErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<DateErrorEnum>): DateErrorEnum {
    const message = createBaseDateErrorEnum();
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
