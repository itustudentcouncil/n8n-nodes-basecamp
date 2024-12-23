// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/access_invitation_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum for identifying the status of access invitation */
export interface AccessInvitationStatusEnum {
}

/** Possible access invitation status of a user */
export enum AccessInvitationStatusEnum_AccessInvitationStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** PENDING - The initial state of an invitation, before being acted upon by anyone. */
  PENDING = 2,
  /**
   * DECLINED - Invitation process was terminated by the email recipient. No new user was
   * created.
   */
  DECLINED = 3,
  /**
   * EXPIRED - Invitation URLs expired without being acted upon. No new user can be
   * created.  Invitations expire 20 days after creation.
   */
  EXPIRED = 4,
  UNRECOGNIZED = -1,
}

export function accessInvitationStatusEnum_AccessInvitationStatusFromJSON(
  object: any,
): AccessInvitationStatusEnum_AccessInvitationStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AccessInvitationStatusEnum_AccessInvitationStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AccessInvitationStatusEnum_AccessInvitationStatus.UNKNOWN;
    case 2:
    case "PENDING":
      return AccessInvitationStatusEnum_AccessInvitationStatus.PENDING;
    case 3:
    case "DECLINED":
      return AccessInvitationStatusEnum_AccessInvitationStatus.DECLINED;
    case 4:
    case "EXPIRED":
      return AccessInvitationStatusEnum_AccessInvitationStatus.EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessInvitationStatusEnum_AccessInvitationStatus.UNRECOGNIZED;
  }
}

export function accessInvitationStatusEnum_AccessInvitationStatusToJSON(
  object: AccessInvitationStatusEnum_AccessInvitationStatus,
): string {
  switch (object) {
    case AccessInvitationStatusEnum_AccessInvitationStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case AccessInvitationStatusEnum_AccessInvitationStatus.UNKNOWN:
      return "UNKNOWN";
    case AccessInvitationStatusEnum_AccessInvitationStatus.PENDING:
      return "PENDING";
    case AccessInvitationStatusEnum_AccessInvitationStatus.DECLINED:
      return "DECLINED";
    case AccessInvitationStatusEnum_AccessInvitationStatus.EXPIRED:
      return "EXPIRED";
    case AccessInvitationStatusEnum_AccessInvitationStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAccessInvitationStatusEnum(): AccessInvitationStatusEnum {
  return {};
}

export const AccessInvitationStatusEnum: MessageFns<AccessInvitationStatusEnum> = {
  encode(_: AccessInvitationStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AccessInvitationStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessInvitationStatusEnum();
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

  fromJSON(_: any): AccessInvitationStatusEnum {
    return {};
  },

  toJSON(_: AccessInvitationStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AccessInvitationStatusEnum>): AccessInvitationStatusEnum {
    return AccessInvitationStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AccessInvitationStatusEnum>): AccessInvitationStatusEnum {
    const message = createBaseAccessInvitationStatusEnum();
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
