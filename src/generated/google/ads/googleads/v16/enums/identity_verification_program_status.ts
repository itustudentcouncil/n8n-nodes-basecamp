// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/identity_verification_program_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for IdentityVerificationProgramStatus. */
export interface IdentityVerificationProgramStatusEnum {
}

/** Program status of identity verification. */
export enum IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The value is unknown in this version. */
  UNKNOWN = 1,
  /** PENDING_USER_ACTION - Verification is pending on user action to proceed. */
  PENDING_USER_ACTION = 2,
  /** PENDING_REVIEW - Verification is pending on review. */
  PENDING_REVIEW = 3,
  /** SUCCESS - Verification succeeded. */
  SUCCESS = 4,
  /** FAILURE - Verification failed. */
  FAILURE = 5,
  UNRECOGNIZED = -1,
}

export function identityVerificationProgramStatusEnum_IdentityVerificationProgramStatusFromJSON(
  object: any,
): IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.UNKNOWN;
    case 2:
    case "PENDING_USER_ACTION":
      return IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.PENDING_USER_ACTION;
    case 3:
    case "PENDING_REVIEW":
      return IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.PENDING_REVIEW;
    case 4:
    case "SUCCESS":
      return IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.SUCCESS;
    case 5:
    case "FAILURE":
      return IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.UNRECOGNIZED;
  }
}

export function identityVerificationProgramStatusEnum_IdentityVerificationProgramStatusToJSON(
  object: IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus,
): string {
  switch (object) {
    case IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.UNKNOWN:
      return "UNKNOWN";
    case IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.PENDING_USER_ACTION:
      return "PENDING_USER_ACTION";
    case IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.PENDING_REVIEW:
      return "PENDING_REVIEW";
    case IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.SUCCESS:
      return "SUCCESS";
    case IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.FAILURE:
      return "FAILURE";
    case IdentityVerificationProgramStatusEnum_IdentityVerificationProgramStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseIdentityVerificationProgramStatusEnum(): IdentityVerificationProgramStatusEnum {
  return {};
}

export const IdentityVerificationProgramStatusEnum: MessageFns<IdentityVerificationProgramStatusEnum> = {
  encode(_: IdentityVerificationProgramStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): IdentityVerificationProgramStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentityVerificationProgramStatusEnum();
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

  fromJSON(_: any): IdentityVerificationProgramStatusEnum {
    return {};
  },

  toJSON(_: IdentityVerificationProgramStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<IdentityVerificationProgramStatusEnum>): IdentityVerificationProgramStatusEnum {
    return IdentityVerificationProgramStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<IdentityVerificationProgramStatusEnum>): IdentityVerificationProgramStatusEnum {
    const message = createBaseIdentityVerificationProgramStatusEnum();
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
