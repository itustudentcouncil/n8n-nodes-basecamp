// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/policy_topic_entry_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Container for enum describing possible policy topic entry types. */
export interface PolicyTopicEntryTypeEnum {
}

/** The possible policy topic entry types. */
export enum PolicyTopicEntryTypeEnum_PolicyTopicEntryType {
  /** UNSPECIFIED - No value has been specified. */
  UNSPECIFIED = 0,
  /**
   * UNKNOWN - The received value is not known in this version.
   *
   * This is a response-only value.
   */
  UNKNOWN = 1,
  /** PROHIBITED - The resource will not be served. */
  PROHIBITED = 2,
  /** LIMITED - The resource will not be served under some circumstances. */
  LIMITED = 4,
  /**
   * FULLY_LIMITED - The resource cannot serve at all because of the current targeting
   * criteria.
   */
  FULLY_LIMITED = 8,
  /** DESCRIPTIVE - May be of interest, but does not limit how the resource is served. */
  DESCRIPTIVE = 5,
  /** BROADENING - Could increase coverage beyond normal. */
  BROADENING = 6,
  /**
   * AREA_OF_INTEREST_ONLY - Constrained for all targeted countries, but may serve in other countries
   * through area of interest.
   */
  AREA_OF_INTEREST_ONLY = 7,
  UNRECOGNIZED = -1,
}

export function policyTopicEntryTypeEnum_PolicyTopicEntryTypeFromJSON(
  object: any,
): PolicyTopicEntryTypeEnum_PolicyTopicEntryType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return PolicyTopicEntryTypeEnum_PolicyTopicEntryType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return PolicyTopicEntryTypeEnum_PolicyTopicEntryType.UNKNOWN;
    case 2:
    case "PROHIBITED":
      return PolicyTopicEntryTypeEnum_PolicyTopicEntryType.PROHIBITED;
    case 4:
    case "LIMITED":
      return PolicyTopicEntryTypeEnum_PolicyTopicEntryType.LIMITED;
    case 8:
    case "FULLY_LIMITED":
      return PolicyTopicEntryTypeEnum_PolicyTopicEntryType.FULLY_LIMITED;
    case 5:
    case "DESCRIPTIVE":
      return PolicyTopicEntryTypeEnum_PolicyTopicEntryType.DESCRIPTIVE;
    case 6:
    case "BROADENING":
      return PolicyTopicEntryTypeEnum_PolicyTopicEntryType.BROADENING;
    case 7:
    case "AREA_OF_INTEREST_ONLY":
      return PolicyTopicEntryTypeEnum_PolicyTopicEntryType.AREA_OF_INTEREST_ONLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicyTopicEntryTypeEnum_PolicyTopicEntryType.UNRECOGNIZED;
  }
}

export function policyTopicEntryTypeEnum_PolicyTopicEntryTypeToJSON(
  object: PolicyTopicEntryTypeEnum_PolicyTopicEntryType,
): string {
  switch (object) {
    case PolicyTopicEntryTypeEnum_PolicyTopicEntryType.UNSPECIFIED:
      return "UNSPECIFIED";
    case PolicyTopicEntryTypeEnum_PolicyTopicEntryType.UNKNOWN:
      return "UNKNOWN";
    case PolicyTopicEntryTypeEnum_PolicyTopicEntryType.PROHIBITED:
      return "PROHIBITED";
    case PolicyTopicEntryTypeEnum_PolicyTopicEntryType.LIMITED:
      return "LIMITED";
    case PolicyTopicEntryTypeEnum_PolicyTopicEntryType.FULLY_LIMITED:
      return "FULLY_LIMITED";
    case PolicyTopicEntryTypeEnum_PolicyTopicEntryType.DESCRIPTIVE:
      return "DESCRIPTIVE";
    case PolicyTopicEntryTypeEnum_PolicyTopicEntryType.BROADENING:
      return "BROADENING";
    case PolicyTopicEntryTypeEnum_PolicyTopicEntryType.AREA_OF_INTEREST_ONLY:
      return "AREA_OF_INTEREST_ONLY";
    case PolicyTopicEntryTypeEnum_PolicyTopicEntryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePolicyTopicEntryTypeEnum(): PolicyTopicEntryTypeEnum {
  return {};
}

export const PolicyTopicEntryTypeEnum: MessageFns<PolicyTopicEntryTypeEnum> = {
  encode(_: PolicyTopicEntryTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PolicyTopicEntryTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyTopicEntryTypeEnum();
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

  fromJSON(_: any): PolicyTopicEntryTypeEnum {
    return {};
  },

  toJSON(_: PolicyTopicEntryTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PolicyTopicEntryTypeEnum>): PolicyTopicEntryTypeEnum {
    return PolicyTopicEntryTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<PolicyTopicEntryTypeEnum>): PolicyTopicEntryTypeEnum {
    const message = createBasePolicyTopicEntryTypeEnum();
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