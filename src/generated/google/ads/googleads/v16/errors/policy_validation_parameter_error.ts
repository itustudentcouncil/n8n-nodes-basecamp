// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/errors/policy_validation_parameter_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.errors";

/** Container for enum describing possible policy validation parameter errors. */
export interface PolicyValidationParameterErrorEnum {
}

/** Enum describing possible policy validation parameter errors. */
export enum PolicyValidationParameterErrorEnum_PolicyValidationParameterError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** UNSUPPORTED_AD_TYPE_FOR_IGNORABLE_POLICY_TOPICS - Ignorable policy topics are not supported for the ad type. */
  UNSUPPORTED_AD_TYPE_FOR_IGNORABLE_POLICY_TOPICS = 2,
  /** UNSUPPORTED_AD_TYPE_FOR_EXEMPT_POLICY_VIOLATION_KEYS - Exempt policy violation keys are not supported for the ad type. */
  UNSUPPORTED_AD_TYPE_FOR_EXEMPT_POLICY_VIOLATION_KEYS = 3,
  /**
   * CANNOT_SET_BOTH_IGNORABLE_POLICY_TOPICS_AND_EXEMPT_POLICY_VIOLATION_KEYS - Cannot set ignorable policy topics and exempt policy violation keys in
   * the same policy violation parameter.
   */
  CANNOT_SET_BOTH_IGNORABLE_POLICY_TOPICS_AND_EXEMPT_POLICY_VIOLATION_KEYS = 4,
  UNRECOGNIZED = -1,
}

export function policyValidationParameterErrorEnum_PolicyValidationParameterErrorFromJSON(
  object: any,
): PolicyValidationParameterErrorEnum_PolicyValidationParameterError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return PolicyValidationParameterErrorEnum_PolicyValidationParameterError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return PolicyValidationParameterErrorEnum_PolicyValidationParameterError.UNKNOWN;
    case 2:
    case "UNSUPPORTED_AD_TYPE_FOR_IGNORABLE_POLICY_TOPICS":
      return PolicyValidationParameterErrorEnum_PolicyValidationParameterError
        .UNSUPPORTED_AD_TYPE_FOR_IGNORABLE_POLICY_TOPICS;
    case 3:
    case "UNSUPPORTED_AD_TYPE_FOR_EXEMPT_POLICY_VIOLATION_KEYS":
      return PolicyValidationParameterErrorEnum_PolicyValidationParameterError
        .UNSUPPORTED_AD_TYPE_FOR_EXEMPT_POLICY_VIOLATION_KEYS;
    case 4:
    case "CANNOT_SET_BOTH_IGNORABLE_POLICY_TOPICS_AND_EXEMPT_POLICY_VIOLATION_KEYS":
      return PolicyValidationParameterErrorEnum_PolicyValidationParameterError
        .CANNOT_SET_BOTH_IGNORABLE_POLICY_TOPICS_AND_EXEMPT_POLICY_VIOLATION_KEYS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicyValidationParameterErrorEnum_PolicyValidationParameterError.UNRECOGNIZED;
  }
}

export function policyValidationParameterErrorEnum_PolicyValidationParameterErrorToJSON(
  object: PolicyValidationParameterErrorEnum_PolicyValidationParameterError,
): string {
  switch (object) {
    case PolicyValidationParameterErrorEnum_PolicyValidationParameterError.UNSPECIFIED:
      return "UNSPECIFIED";
    case PolicyValidationParameterErrorEnum_PolicyValidationParameterError.UNKNOWN:
      return "UNKNOWN";
    case PolicyValidationParameterErrorEnum_PolicyValidationParameterError
      .UNSUPPORTED_AD_TYPE_FOR_IGNORABLE_POLICY_TOPICS:
      return "UNSUPPORTED_AD_TYPE_FOR_IGNORABLE_POLICY_TOPICS";
    case PolicyValidationParameterErrorEnum_PolicyValidationParameterError
      .UNSUPPORTED_AD_TYPE_FOR_EXEMPT_POLICY_VIOLATION_KEYS:
      return "UNSUPPORTED_AD_TYPE_FOR_EXEMPT_POLICY_VIOLATION_KEYS";
    case PolicyValidationParameterErrorEnum_PolicyValidationParameterError
      .CANNOT_SET_BOTH_IGNORABLE_POLICY_TOPICS_AND_EXEMPT_POLICY_VIOLATION_KEYS:
      return "CANNOT_SET_BOTH_IGNORABLE_POLICY_TOPICS_AND_EXEMPT_POLICY_VIOLATION_KEYS";
    case PolicyValidationParameterErrorEnum_PolicyValidationParameterError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePolicyValidationParameterErrorEnum(): PolicyValidationParameterErrorEnum {
  return {};
}

export const PolicyValidationParameterErrorEnum: MessageFns<PolicyValidationParameterErrorEnum> = {
  encode(_: PolicyValidationParameterErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PolicyValidationParameterErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyValidationParameterErrorEnum();
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

  fromJSON(_: any): PolicyValidationParameterErrorEnum {
    return {};
  },

  toJSON(_: PolicyValidationParameterErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PolicyValidationParameterErrorEnum>): PolicyValidationParameterErrorEnum {
    return PolicyValidationParameterErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<PolicyValidationParameterErrorEnum>): PolicyValidationParameterErrorEnum {
    const message = createBasePolicyValidationParameterErrorEnum();
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