// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/account_link_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Container for enum describing possible statuses of an account link. */
export interface AccountLinkStatusEnum {
}

/**
 * Describes the possible statuses for a link between a Google Ads customer
 * and another account.
 */
export enum AccountLinkStatusEnum_AccountLinkStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** ENABLED - The link is enabled. */
  ENABLED = 2,
  /** REMOVED - The link is removed/disabled. */
  REMOVED = 3,
  /**
   * REQUESTED - The link to the other account has been requested. A user on the other
   * account may now approve the link by setting the status to ENABLED.
   */
  REQUESTED = 4,
  /**
   * PENDING_APPROVAL - This link has been requested by a user on the other account. It may be
   * approved by a user on this account by setting the status to ENABLED.
   */
  PENDING_APPROVAL = 5,
  /** REJECTED - The link is rejected by the approver. */
  REJECTED = 6,
  /** REVOKED - The link is revoked by the user who requested the link. */
  REVOKED = 7,
  UNRECOGNIZED = -1,
}

export function accountLinkStatusEnum_AccountLinkStatusFromJSON(object: any): AccountLinkStatusEnum_AccountLinkStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AccountLinkStatusEnum_AccountLinkStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AccountLinkStatusEnum_AccountLinkStatus.UNKNOWN;
    case 2:
    case "ENABLED":
      return AccountLinkStatusEnum_AccountLinkStatus.ENABLED;
    case 3:
    case "REMOVED":
      return AccountLinkStatusEnum_AccountLinkStatus.REMOVED;
    case 4:
    case "REQUESTED":
      return AccountLinkStatusEnum_AccountLinkStatus.REQUESTED;
    case 5:
    case "PENDING_APPROVAL":
      return AccountLinkStatusEnum_AccountLinkStatus.PENDING_APPROVAL;
    case 6:
    case "REJECTED":
      return AccountLinkStatusEnum_AccountLinkStatus.REJECTED;
    case 7:
    case "REVOKED":
      return AccountLinkStatusEnum_AccountLinkStatus.REVOKED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountLinkStatusEnum_AccountLinkStatus.UNRECOGNIZED;
  }
}

export function accountLinkStatusEnum_AccountLinkStatusToJSON(object: AccountLinkStatusEnum_AccountLinkStatus): string {
  switch (object) {
    case AccountLinkStatusEnum_AccountLinkStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case AccountLinkStatusEnum_AccountLinkStatus.UNKNOWN:
      return "UNKNOWN";
    case AccountLinkStatusEnum_AccountLinkStatus.ENABLED:
      return "ENABLED";
    case AccountLinkStatusEnum_AccountLinkStatus.REMOVED:
      return "REMOVED";
    case AccountLinkStatusEnum_AccountLinkStatus.REQUESTED:
      return "REQUESTED";
    case AccountLinkStatusEnum_AccountLinkStatus.PENDING_APPROVAL:
      return "PENDING_APPROVAL";
    case AccountLinkStatusEnum_AccountLinkStatus.REJECTED:
      return "REJECTED";
    case AccountLinkStatusEnum_AccountLinkStatus.REVOKED:
      return "REVOKED";
    case AccountLinkStatusEnum_AccountLinkStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAccountLinkStatusEnum(): AccountLinkStatusEnum {
  return {};
}

export const AccountLinkStatusEnum: MessageFns<AccountLinkStatusEnum> = {
  encode(_: AccountLinkStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AccountLinkStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLinkStatusEnum();
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

  fromJSON(_: any): AccountLinkStatusEnum {
    return {};
  },

  toJSON(_: AccountLinkStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AccountLinkStatusEnum>): AccountLinkStatusEnum {
    return AccountLinkStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AccountLinkStatusEnum>): AccountLinkStatusEnum {
    const message = createBaseAccountLinkStatusEnum();
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