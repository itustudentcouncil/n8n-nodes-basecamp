// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/access_role.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Container for enum describing possible access role for user. */
export interface AccessRoleEnum {
}

/** Possible access role of a user. */
export enum AccessRoleEnum_AccessRole {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** ADMIN - Owns its account and can control the addition of other users. */
  ADMIN = 2,
  /** STANDARD - Can modify campaigns, but can't affect other users. */
  STANDARD = 3,
  /** READ_ONLY - Can view campaigns and account changes, but cannot make edits. */
  READ_ONLY = 4,
  /**
   * EMAIL_ONLY - Role for \"email only\" access. Represents an email recipient rather than
   * a true User entity.
   */
  EMAIL_ONLY = 5,
  UNRECOGNIZED = -1,
}

export function accessRoleEnum_AccessRoleFromJSON(object: any): AccessRoleEnum_AccessRole {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AccessRoleEnum_AccessRole.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AccessRoleEnum_AccessRole.UNKNOWN;
    case 2:
    case "ADMIN":
      return AccessRoleEnum_AccessRole.ADMIN;
    case 3:
    case "STANDARD":
      return AccessRoleEnum_AccessRole.STANDARD;
    case 4:
    case "READ_ONLY":
      return AccessRoleEnum_AccessRole.READ_ONLY;
    case 5:
    case "EMAIL_ONLY":
      return AccessRoleEnum_AccessRole.EMAIL_ONLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessRoleEnum_AccessRole.UNRECOGNIZED;
  }
}

export function accessRoleEnum_AccessRoleToJSON(object: AccessRoleEnum_AccessRole): string {
  switch (object) {
    case AccessRoleEnum_AccessRole.UNSPECIFIED:
      return "UNSPECIFIED";
    case AccessRoleEnum_AccessRole.UNKNOWN:
      return "UNKNOWN";
    case AccessRoleEnum_AccessRole.ADMIN:
      return "ADMIN";
    case AccessRoleEnum_AccessRole.STANDARD:
      return "STANDARD";
    case AccessRoleEnum_AccessRole.READ_ONLY:
      return "READ_ONLY";
    case AccessRoleEnum_AccessRole.EMAIL_ONLY:
      return "EMAIL_ONLY";
    case AccessRoleEnum_AccessRole.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAccessRoleEnum(): AccessRoleEnum {
  return {};
}

export const AccessRoleEnum: MessageFns<AccessRoleEnum> = {
  encode(_: AccessRoleEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AccessRoleEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessRoleEnum();
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

  fromJSON(_: any): AccessRoleEnum {
    return {};
  },

  toJSON(_: AccessRoleEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AccessRoleEnum>): AccessRoleEnum {
    return AccessRoleEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AccessRoleEnum>): AccessRoleEnum {
    const message = createBaseAccessRoleEnum();
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
