// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/invoice_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible invoice errors. */
export interface InvoiceErrorEnum {
}

/** Enum describing possible invoice errors. */
export enum InvoiceErrorEnum_InvoiceError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** YEAR_MONTH_TOO_OLD - Cannot request invoices issued before 2019-01-01. */
  YEAR_MONTH_TOO_OLD = 2,
  /** NOT_INVOICED_CUSTOMER - Cannot request invoices for customer who doesn't receive invoices. */
  NOT_INVOICED_CUSTOMER = 3,
  /** BILLING_SETUP_NOT_APPROVED - Cannot request invoices for a non approved billing setup. */
  BILLING_SETUP_NOT_APPROVED = 4,
  /**
   * BILLING_SETUP_NOT_ON_MONTHLY_INVOICING - Cannot request invoices for a billing setup that is not on monthly
   * invoicing.
   */
  BILLING_SETUP_NOT_ON_MONTHLY_INVOICING = 5,
  /** NON_SERVING_CUSTOMER - Cannot request invoices for a non serving customer. */
  NON_SERVING_CUSTOMER = 6,
  UNRECOGNIZED = -1,
}

export function invoiceErrorEnum_InvoiceErrorFromJSON(object: any): InvoiceErrorEnum_InvoiceError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return InvoiceErrorEnum_InvoiceError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return InvoiceErrorEnum_InvoiceError.UNKNOWN;
    case 2:
    case "YEAR_MONTH_TOO_OLD":
      return InvoiceErrorEnum_InvoiceError.YEAR_MONTH_TOO_OLD;
    case 3:
    case "NOT_INVOICED_CUSTOMER":
      return InvoiceErrorEnum_InvoiceError.NOT_INVOICED_CUSTOMER;
    case 4:
    case "BILLING_SETUP_NOT_APPROVED":
      return InvoiceErrorEnum_InvoiceError.BILLING_SETUP_NOT_APPROVED;
    case 5:
    case "BILLING_SETUP_NOT_ON_MONTHLY_INVOICING":
      return InvoiceErrorEnum_InvoiceError.BILLING_SETUP_NOT_ON_MONTHLY_INVOICING;
    case 6:
    case "NON_SERVING_CUSTOMER":
      return InvoiceErrorEnum_InvoiceError.NON_SERVING_CUSTOMER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InvoiceErrorEnum_InvoiceError.UNRECOGNIZED;
  }
}

export function invoiceErrorEnum_InvoiceErrorToJSON(object: InvoiceErrorEnum_InvoiceError): string {
  switch (object) {
    case InvoiceErrorEnum_InvoiceError.UNSPECIFIED:
      return "UNSPECIFIED";
    case InvoiceErrorEnum_InvoiceError.UNKNOWN:
      return "UNKNOWN";
    case InvoiceErrorEnum_InvoiceError.YEAR_MONTH_TOO_OLD:
      return "YEAR_MONTH_TOO_OLD";
    case InvoiceErrorEnum_InvoiceError.NOT_INVOICED_CUSTOMER:
      return "NOT_INVOICED_CUSTOMER";
    case InvoiceErrorEnum_InvoiceError.BILLING_SETUP_NOT_APPROVED:
      return "BILLING_SETUP_NOT_APPROVED";
    case InvoiceErrorEnum_InvoiceError.BILLING_SETUP_NOT_ON_MONTHLY_INVOICING:
      return "BILLING_SETUP_NOT_ON_MONTHLY_INVOICING";
    case InvoiceErrorEnum_InvoiceError.NON_SERVING_CUSTOMER:
      return "NON_SERVING_CUSTOMER";
    case InvoiceErrorEnum_InvoiceError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseInvoiceErrorEnum(): InvoiceErrorEnum {
  return {};
}

export const InvoiceErrorEnum: MessageFns<InvoiceErrorEnum> = {
  encode(_: InvoiceErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InvoiceErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceErrorEnum();
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

  fromJSON(_: any): InvoiceErrorEnum {
    return {};
  },

  toJSON(_: InvoiceErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<InvoiceErrorEnum>): InvoiceErrorEnum {
    return InvoiceErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<InvoiceErrorEnum>): InvoiceErrorEnum {
    const message = createBaseInvoiceErrorEnum();
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