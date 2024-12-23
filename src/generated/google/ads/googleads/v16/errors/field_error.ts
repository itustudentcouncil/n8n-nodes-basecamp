// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/errors/field_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.errors";

/** Container for enum describing possible field errors. */
export interface FieldErrorEnum {
}

/** Enum describing possible field errors. */
export enum FieldErrorEnum_FieldError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** REQUIRED - The required field was not present. */
  REQUIRED = 2,
  /** IMMUTABLE_FIELD - The field attempted to be mutated is immutable. */
  IMMUTABLE_FIELD = 3,
  /** INVALID_VALUE - The field's value is invalid. */
  INVALID_VALUE = 4,
  /** VALUE_MUST_BE_UNSET - The field cannot be set. */
  VALUE_MUST_BE_UNSET = 5,
  /** REQUIRED_NONEMPTY_LIST - The required repeated field was empty. */
  REQUIRED_NONEMPTY_LIST = 6,
  /** FIELD_CANNOT_BE_CLEARED - The field cannot be cleared. */
  FIELD_CANNOT_BE_CLEARED = 7,
  /** BLOCKED_VALUE - The field's value is on a deny-list for this field. */
  BLOCKED_VALUE = 9,
  /** FIELD_CAN_ONLY_BE_CLEARED - The field's value cannot be modified, except for clearing. */
  FIELD_CAN_ONLY_BE_CLEARED = 10,
  UNRECOGNIZED = -1,
}

export function fieldErrorEnum_FieldErrorFromJSON(object: any): FieldErrorEnum_FieldError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return FieldErrorEnum_FieldError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return FieldErrorEnum_FieldError.UNKNOWN;
    case 2:
    case "REQUIRED":
      return FieldErrorEnum_FieldError.REQUIRED;
    case 3:
    case "IMMUTABLE_FIELD":
      return FieldErrorEnum_FieldError.IMMUTABLE_FIELD;
    case 4:
    case "INVALID_VALUE":
      return FieldErrorEnum_FieldError.INVALID_VALUE;
    case 5:
    case "VALUE_MUST_BE_UNSET":
      return FieldErrorEnum_FieldError.VALUE_MUST_BE_UNSET;
    case 6:
    case "REQUIRED_NONEMPTY_LIST":
      return FieldErrorEnum_FieldError.REQUIRED_NONEMPTY_LIST;
    case 7:
    case "FIELD_CANNOT_BE_CLEARED":
      return FieldErrorEnum_FieldError.FIELD_CANNOT_BE_CLEARED;
    case 9:
    case "BLOCKED_VALUE":
      return FieldErrorEnum_FieldError.BLOCKED_VALUE;
    case 10:
    case "FIELD_CAN_ONLY_BE_CLEARED":
      return FieldErrorEnum_FieldError.FIELD_CAN_ONLY_BE_CLEARED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldErrorEnum_FieldError.UNRECOGNIZED;
  }
}

export function fieldErrorEnum_FieldErrorToJSON(object: FieldErrorEnum_FieldError): string {
  switch (object) {
    case FieldErrorEnum_FieldError.UNSPECIFIED:
      return "UNSPECIFIED";
    case FieldErrorEnum_FieldError.UNKNOWN:
      return "UNKNOWN";
    case FieldErrorEnum_FieldError.REQUIRED:
      return "REQUIRED";
    case FieldErrorEnum_FieldError.IMMUTABLE_FIELD:
      return "IMMUTABLE_FIELD";
    case FieldErrorEnum_FieldError.INVALID_VALUE:
      return "INVALID_VALUE";
    case FieldErrorEnum_FieldError.VALUE_MUST_BE_UNSET:
      return "VALUE_MUST_BE_UNSET";
    case FieldErrorEnum_FieldError.REQUIRED_NONEMPTY_LIST:
      return "REQUIRED_NONEMPTY_LIST";
    case FieldErrorEnum_FieldError.FIELD_CANNOT_BE_CLEARED:
      return "FIELD_CANNOT_BE_CLEARED";
    case FieldErrorEnum_FieldError.BLOCKED_VALUE:
      return "BLOCKED_VALUE";
    case FieldErrorEnum_FieldError.FIELD_CAN_ONLY_BE_CLEARED:
      return "FIELD_CAN_ONLY_BE_CLEARED";
    case FieldErrorEnum_FieldError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseFieldErrorEnum(): FieldErrorEnum {
  return {};
}

export const FieldErrorEnum: MessageFns<FieldErrorEnum> = {
  encode(_: FieldErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FieldErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldErrorEnum();
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

  fromJSON(_: any): FieldErrorEnum {
    return {};
  },

  toJSON(_: FieldErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<FieldErrorEnum>): FieldErrorEnum {
    return FieldErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<FieldErrorEnum>): FieldErrorEnum {
    const message = createBaseFieldErrorEnum();
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
