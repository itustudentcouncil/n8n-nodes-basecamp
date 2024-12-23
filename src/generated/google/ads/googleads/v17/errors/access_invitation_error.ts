// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/access_invitation_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible AccessInvitation errors. */
export interface AccessInvitationErrorEnum {
}

/** Enum describing possible AccessInvitation errors. */
export enum AccessInvitationErrorEnum_AccessInvitationError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** INVALID_EMAIL_ADDRESS - The email address is invalid for sending an invitation. */
  INVALID_EMAIL_ADDRESS = 2,
  /** EMAIL_ADDRESS_ALREADY_HAS_ACCESS - Email address already has access to this customer. */
  EMAIL_ADDRESS_ALREADY_HAS_ACCESS = 3,
  /** INVALID_INVITATION_STATUS - Invalid invitation status for the operation. */
  INVALID_INVITATION_STATUS = 4,
  /** GOOGLE_CONSUMER_ACCOUNT_NOT_ALLOWED - Email address cannot be like abc+foo@google.com. */
  GOOGLE_CONSUMER_ACCOUNT_NOT_ALLOWED = 5,
  /** INVALID_INVITATION_ID - Invalid invitation ID. */
  INVALID_INVITATION_ID = 6,
  /** EMAIL_ADDRESS_ALREADY_HAS_PENDING_INVITATION - Email address already has a pending invitation. */
  EMAIL_ADDRESS_ALREADY_HAS_PENDING_INVITATION = 7,
  /** PENDING_INVITATIONS_LIMIT_EXCEEDED - Pending invitation limit exceeded for the customer. */
  PENDING_INVITATIONS_LIMIT_EXCEEDED = 8,
  /**
   * EMAIL_DOMAIN_POLICY_VIOLATED - Email address doesn't conform to the email domain policy. See
   * https://support.google.com/google-ads/answer/2375456
   */
  EMAIL_DOMAIN_POLICY_VIOLATED = 9,
  UNRECOGNIZED = -1,
}

export function accessInvitationErrorEnum_AccessInvitationErrorFromJSON(
  object: any,
): AccessInvitationErrorEnum_AccessInvitationError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AccessInvitationErrorEnum_AccessInvitationError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AccessInvitationErrorEnum_AccessInvitationError.UNKNOWN;
    case 2:
    case "INVALID_EMAIL_ADDRESS":
      return AccessInvitationErrorEnum_AccessInvitationError.INVALID_EMAIL_ADDRESS;
    case 3:
    case "EMAIL_ADDRESS_ALREADY_HAS_ACCESS":
      return AccessInvitationErrorEnum_AccessInvitationError.EMAIL_ADDRESS_ALREADY_HAS_ACCESS;
    case 4:
    case "INVALID_INVITATION_STATUS":
      return AccessInvitationErrorEnum_AccessInvitationError.INVALID_INVITATION_STATUS;
    case 5:
    case "GOOGLE_CONSUMER_ACCOUNT_NOT_ALLOWED":
      return AccessInvitationErrorEnum_AccessInvitationError.GOOGLE_CONSUMER_ACCOUNT_NOT_ALLOWED;
    case 6:
    case "INVALID_INVITATION_ID":
      return AccessInvitationErrorEnum_AccessInvitationError.INVALID_INVITATION_ID;
    case 7:
    case "EMAIL_ADDRESS_ALREADY_HAS_PENDING_INVITATION":
      return AccessInvitationErrorEnum_AccessInvitationError.EMAIL_ADDRESS_ALREADY_HAS_PENDING_INVITATION;
    case 8:
    case "PENDING_INVITATIONS_LIMIT_EXCEEDED":
      return AccessInvitationErrorEnum_AccessInvitationError.PENDING_INVITATIONS_LIMIT_EXCEEDED;
    case 9:
    case "EMAIL_DOMAIN_POLICY_VIOLATED":
      return AccessInvitationErrorEnum_AccessInvitationError.EMAIL_DOMAIN_POLICY_VIOLATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessInvitationErrorEnum_AccessInvitationError.UNRECOGNIZED;
  }
}

export function accessInvitationErrorEnum_AccessInvitationErrorToJSON(
  object: AccessInvitationErrorEnum_AccessInvitationError,
): string {
  switch (object) {
    case AccessInvitationErrorEnum_AccessInvitationError.UNSPECIFIED:
      return "UNSPECIFIED";
    case AccessInvitationErrorEnum_AccessInvitationError.UNKNOWN:
      return "UNKNOWN";
    case AccessInvitationErrorEnum_AccessInvitationError.INVALID_EMAIL_ADDRESS:
      return "INVALID_EMAIL_ADDRESS";
    case AccessInvitationErrorEnum_AccessInvitationError.EMAIL_ADDRESS_ALREADY_HAS_ACCESS:
      return "EMAIL_ADDRESS_ALREADY_HAS_ACCESS";
    case AccessInvitationErrorEnum_AccessInvitationError.INVALID_INVITATION_STATUS:
      return "INVALID_INVITATION_STATUS";
    case AccessInvitationErrorEnum_AccessInvitationError.GOOGLE_CONSUMER_ACCOUNT_NOT_ALLOWED:
      return "GOOGLE_CONSUMER_ACCOUNT_NOT_ALLOWED";
    case AccessInvitationErrorEnum_AccessInvitationError.INVALID_INVITATION_ID:
      return "INVALID_INVITATION_ID";
    case AccessInvitationErrorEnum_AccessInvitationError.EMAIL_ADDRESS_ALREADY_HAS_PENDING_INVITATION:
      return "EMAIL_ADDRESS_ALREADY_HAS_PENDING_INVITATION";
    case AccessInvitationErrorEnum_AccessInvitationError.PENDING_INVITATIONS_LIMIT_EXCEEDED:
      return "PENDING_INVITATIONS_LIMIT_EXCEEDED";
    case AccessInvitationErrorEnum_AccessInvitationError.EMAIL_DOMAIN_POLICY_VIOLATED:
      return "EMAIL_DOMAIN_POLICY_VIOLATED";
    case AccessInvitationErrorEnum_AccessInvitationError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAccessInvitationErrorEnum(): AccessInvitationErrorEnum {
  return {};
}

export const AccessInvitationErrorEnum: MessageFns<AccessInvitationErrorEnum> = {
  encode(_: AccessInvitationErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AccessInvitationErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessInvitationErrorEnum();
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

  fromJSON(_: any): AccessInvitationErrorEnum {
    return {};
  },

  toJSON(_: AccessInvitationErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AccessInvitationErrorEnum>): AccessInvitationErrorEnum {
    return AccessInvitationErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AccessInvitationErrorEnum>): AccessInvitationErrorEnum {
    const message = createBaseAccessInvitationErrorEnum();
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
