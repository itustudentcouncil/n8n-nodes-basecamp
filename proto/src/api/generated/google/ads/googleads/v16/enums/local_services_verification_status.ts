// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/local_services_verification_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Container for enum describing status of a particular Local Services Ads
 * verification category.
 */
export interface LocalServicesVerificationStatusEnum {
}

/**
 * Enum describing status of a particular Local Services Ads verification
 * category.
 */
export enum LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Unknown verification status. */
  UNKNOWN = 1,
  /** NEEDS_REVIEW - Verification has started, but has not finished. */
  NEEDS_REVIEW = 2,
  /** FAILED - Verification has failed. */
  FAILED = 3,
  /** PASSED - Verification has passed. */
  PASSED = 4,
  /** NOT_APPLICABLE - Verification is not applicable. */
  NOT_APPLICABLE = 5,
  /** NO_SUBMISSION - Verification is required but pending submission. */
  NO_SUBMISSION = 6,
  /** PARTIAL_SUBMISSION - Not all required verification has been submitted. */
  PARTIAL_SUBMISSION = 7,
  /** PENDING_ESCALATION - Verification needs review by Local Services Ads Ops Specialist. */
  PENDING_ESCALATION = 8,
  UNRECOGNIZED = -1,
}

export function localServicesVerificationStatusEnum_LocalServicesVerificationStatusFromJSON(
  object: any,
): LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.UNKNOWN;
    case 2:
    case "NEEDS_REVIEW":
      return LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.NEEDS_REVIEW;
    case 3:
    case "FAILED":
      return LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.FAILED;
    case 4:
    case "PASSED":
      return LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.PASSED;
    case 5:
    case "NOT_APPLICABLE":
      return LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.NOT_APPLICABLE;
    case 6:
    case "NO_SUBMISSION":
      return LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.NO_SUBMISSION;
    case 7:
    case "PARTIAL_SUBMISSION":
      return LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.PARTIAL_SUBMISSION;
    case 8:
    case "PENDING_ESCALATION":
      return LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.PENDING_ESCALATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.UNRECOGNIZED;
  }
}

export function localServicesVerificationStatusEnum_LocalServicesVerificationStatusToJSON(
  object: LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus,
): string {
  switch (object) {
    case LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.UNKNOWN:
      return "UNKNOWN";
    case LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.NEEDS_REVIEW:
      return "NEEDS_REVIEW";
    case LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.FAILED:
      return "FAILED";
    case LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.PASSED:
      return "PASSED";
    case LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.NOT_APPLICABLE:
      return "NOT_APPLICABLE";
    case LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.NO_SUBMISSION:
      return "NO_SUBMISSION";
    case LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.PARTIAL_SUBMISSION:
      return "PARTIAL_SUBMISSION";
    case LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.PENDING_ESCALATION:
      return "PENDING_ESCALATION";
    case LocalServicesVerificationStatusEnum_LocalServicesVerificationStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseLocalServicesVerificationStatusEnum(): LocalServicesVerificationStatusEnum {
  return {};
}

export const LocalServicesVerificationStatusEnum: MessageFns<LocalServicesVerificationStatusEnum> = {
  encode(_: LocalServicesVerificationStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LocalServicesVerificationStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalServicesVerificationStatusEnum();
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

  fromJSON(_: any): LocalServicesVerificationStatusEnum {
    return {};
  },

  toJSON(_: LocalServicesVerificationStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<LocalServicesVerificationStatusEnum>): LocalServicesVerificationStatusEnum {
    return LocalServicesVerificationStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<LocalServicesVerificationStatusEnum>): LocalServicesVerificationStatusEnum {
    const message = createBaseLocalServicesVerificationStatusEnum();
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