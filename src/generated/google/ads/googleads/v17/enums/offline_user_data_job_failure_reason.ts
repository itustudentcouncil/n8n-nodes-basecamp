// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/offline_user_data_job_failure_reason.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/**
 * Container for enum describing reasons why an offline user data job
 * failed to be processed.
 */
export interface OfflineUserDataJobFailureReasonEnum {
}

/** The failure reason of an offline user data job. */
export enum OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** INSUFFICIENT_MATCHED_TRANSACTIONS - The matched transactions are insufficient. */
  INSUFFICIENT_MATCHED_TRANSACTIONS = 2,
  /** INSUFFICIENT_TRANSACTIONS - The uploaded transactions are insufficient. */
  INSUFFICIENT_TRANSACTIONS = 3,
  /**
   * HIGH_AVERAGE_TRANSACTION_VALUE - The average transaction value is unusually high for your account. If this
   *  is intended, contact support to request an exception. Learn more at
   *  https://support.google.com/google-ads/answer/10018944#transaction_value
   */
  HIGH_AVERAGE_TRANSACTION_VALUE = 4,
  /**
   * LOW_AVERAGE_TRANSACTION_VALUE - The average transaction value is unusually low for your account. If this
   * is intended, contact support to request an exception. Learn more at
   * https://support.google.com/google-ads/answer/10018944#transaction_value
   */
  LOW_AVERAGE_TRANSACTION_VALUE = 5,
  /**
   * NEWLY_OBSERVED_CURRENCY_CODE - There's a currency code that you haven't used before in your uploads. If
   * this is intended, contact support to request an exception. Learn more at
   * https://support.google.com/google-ads/answer/10018944#Unrecognized_currency
   */
  NEWLY_OBSERVED_CURRENCY_CODE = 6,
  UNRECOGNIZED = -1,
}

export function offlineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReasonFromJSON(
  object: any,
): OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.UNKNOWN;
    case 2:
    case "INSUFFICIENT_MATCHED_TRANSACTIONS":
      return OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.INSUFFICIENT_MATCHED_TRANSACTIONS;
    case 3:
    case "INSUFFICIENT_TRANSACTIONS":
      return OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.INSUFFICIENT_TRANSACTIONS;
    case 4:
    case "HIGH_AVERAGE_TRANSACTION_VALUE":
      return OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.HIGH_AVERAGE_TRANSACTION_VALUE;
    case 5:
    case "LOW_AVERAGE_TRANSACTION_VALUE":
      return OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.LOW_AVERAGE_TRANSACTION_VALUE;
    case 6:
    case "NEWLY_OBSERVED_CURRENCY_CODE":
      return OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.NEWLY_OBSERVED_CURRENCY_CODE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.UNRECOGNIZED;
  }
}

export function offlineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReasonToJSON(
  object: OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason,
): string {
  switch (object) {
    case OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.UNSPECIFIED:
      return "UNSPECIFIED";
    case OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.UNKNOWN:
      return "UNKNOWN";
    case OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.INSUFFICIENT_MATCHED_TRANSACTIONS:
      return "INSUFFICIENT_MATCHED_TRANSACTIONS";
    case OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.INSUFFICIENT_TRANSACTIONS:
      return "INSUFFICIENT_TRANSACTIONS";
    case OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.HIGH_AVERAGE_TRANSACTION_VALUE:
      return "HIGH_AVERAGE_TRANSACTION_VALUE";
    case OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.LOW_AVERAGE_TRANSACTION_VALUE:
      return "LOW_AVERAGE_TRANSACTION_VALUE";
    case OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.NEWLY_OBSERVED_CURRENCY_CODE:
      return "NEWLY_OBSERVED_CURRENCY_CODE";
    case OfflineUserDataJobFailureReasonEnum_OfflineUserDataJobFailureReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseOfflineUserDataJobFailureReasonEnum(): OfflineUserDataJobFailureReasonEnum {
  return {};
}

export const OfflineUserDataJobFailureReasonEnum: MessageFns<OfflineUserDataJobFailureReasonEnum> = {
  encode(_: OfflineUserDataJobFailureReasonEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OfflineUserDataJobFailureReasonEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOfflineUserDataJobFailureReasonEnum();
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

  fromJSON(_: any): OfflineUserDataJobFailureReasonEnum {
    return {};
  },

  toJSON(_: OfflineUserDataJobFailureReasonEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<OfflineUserDataJobFailureReasonEnum>): OfflineUserDataJobFailureReasonEnum {
    return OfflineUserDataJobFailureReasonEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<OfflineUserDataJobFailureReasonEnum>): OfflineUserDataJobFailureReasonEnum {
    const message = createBaseOfflineUserDataJobFailureReasonEnum();
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