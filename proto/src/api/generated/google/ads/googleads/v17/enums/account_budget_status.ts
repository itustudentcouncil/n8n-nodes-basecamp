// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/account_budget_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Message describing AccountBudget statuses. */
export interface AccountBudgetStatusEnum {
}

/** The possible statuses of an AccountBudget. */
export enum AccountBudgetStatusEnum_AccountBudgetStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** PENDING - The account budget is pending approval. */
  PENDING = 2,
  /** APPROVED - The account budget has been approved. */
  APPROVED = 3,
  /** CANCELLED - The account budget has been cancelled by the user. */
  CANCELLED = 4,
  UNRECOGNIZED = -1,
}

export function accountBudgetStatusEnum_AccountBudgetStatusFromJSON(
  object: any,
): AccountBudgetStatusEnum_AccountBudgetStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AccountBudgetStatusEnum_AccountBudgetStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AccountBudgetStatusEnum_AccountBudgetStatus.UNKNOWN;
    case 2:
    case "PENDING":
      return AccountBudgetStatusEnum_AccountBudgetStatus.PENDING;
    case 3:
    case "APPROVED":
      return AccountBudgetStatusEnum_AccountBudgetStatus.APPROVED;
    case 4:
    case "CANCELLED":
      return AccountBudgetStatusEnum_AccountBudgetStatus.CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountBudgetStatusEnum_AccountBudgetStatus.UNRECOGNIZED;
  }
}

export function accountBudgetStatusEnum_AccountBudgetStatusToJSON(
  object: AccountBudgetStatusEnum_AccountBudgetStatus,
): string {
  switch (object) {
    case AccountBudgetStatusEnum_AccountBudgetStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case AccountBudgetStatusEnum_AccountBudgetStatus.UNKNOWN:
      return "UNKNOWN";
    case AccountBudgetStatusEnum_AccountBudgetStatus.PENDING:
      return "PENDING";
    case AccountBudgetStatusEnum_AccountBudgetStatus.APPROVED:
      return "APPROVED";
    case AccountBudgetStatusEnum_AccountBudgetStatus.CANCELLED:
      return "CANCELLED";
    case AccountBudgetStatusEnum_AccountBudgetStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAccountBudgetStatusEnum(): AccountBudgetStatusEnum {
  return {};
}

export const AccountBudgetStatusEnum: MessageFns<AccountBudgetStatusEnum> = {
  encode(_: AccountBudgetStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AccountBudgetStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountBudgetStatusEnum();
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

  fromJSON(_: any): AccountBudgetStatusEnum {
    return {};
  },

  toJSON(_: AccountBudgetStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AccountBudgetStatusEnum>): AccountBudgetStatusEnum {
    return AccountBudgetStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AccountBudgetStatusEnum>): AccountBudgetStatusEnum {
    const message = createBaseAccountBudgetStatusEnum();
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