// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/customer_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible customer errors. */
export interface CustomerErrorEnum {
}

/** Set of errors that are related to requests dealing with Customer. */
export enum CustomerErrorEnum_CustomerError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /**
   * STATUS_CHANGE_DISALLOWED - Customer status is not allowed to be changed from DRAFT and CLOSED.
   * Currency code and at least one of country code and time zone needs to be
   * set when status is changed to ENABLED.
   */
  STATUS_CHANGE_DISALLOWED = 2,
  /** ACCOUNT_NOT_SET_UP - CustomerService cannot get a customer that has not been fully set up. */
  ACCOUNT_NOT_SET_UP = 3,
  UNRECOGNIZED = -1,
}

export function customerErrorEnum_CustomerErrorFromJSON(object: any): CustomerErrorEnum_CustomerError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CustomerErrorEnum_CustomerError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return CustomerErrorEnum_CustomerError.UNKNOWN;
    case 2:
    case "STATUS_CHANGE_DISALLOWED":
      return CustomerErrorEnum_CustomerError.STATUS_CHANGE_DISALLOWED;
    case 3:
    case "ACCOUNT_NOT_SET_UP":
      return CustomerErrorEnum_CustomerError.ACCOUNT_NOT_SET_UP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CustomerErrorEnum_CustomerError.UNRECOGNIZED;
  }
}

export function customerErrorEnum_CustomerErrorToJSON(object: CustomerErrorEnum_CustomerError): string {
  switch (object) {
    case CustomerErrorEnum_CustomerError.UNSPECIFIED:
      return "UNSPECIFIED";
    case CustomerErrorEnum_CustomerError.UNKNOWN:
      return "UNKNOWN";
    case CustomerErrorEnum_CustomerError.STATUS_CHANGE_DISALLOWED:
      return "STATUS_CHANGE_DISALLOWED";
    case CustomerErrorEnum_CustomerError.ACCOUNT_NOT_SET_UP:
      return "ACCOUNT_NOT_SET_UP";
    case CustomerErrorEnum_CustomerError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCustomerErrorEnum(): CustomerErrorEnum {
  return {};
}

export const CustomerErrorEnum: MessageFns<CustomerErrorEnum> = {
  encode(_: CustomerErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomerErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerErrorEnum();
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

  fromJSON(_: any): CustomerErrorEnum {
    return {};
  },

  toJSON(_: CustomerErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CustomerErrorEnum>): CustomerErrorEnum {
    return CustomerErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CustomerErrorEnum>): CustomerErrorEnum {
    const message = createBaseCustomerErrorEnum();
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
