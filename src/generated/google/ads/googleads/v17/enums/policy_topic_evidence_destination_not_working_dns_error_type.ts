// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/policy_topic_evidence_destination_not_working_dns_error_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/**
 * Container for enum describing possible policy topic evidence destination not
 * working DNS error types.
 */
export interface PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum {
}

/** The possible policy topic evidence destination not working DNS error types. */
export enum PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType {
  /** UNSPECIFIED - No value has been specified. */
  UNSPECIFIED = 0,
  /**
   * UNKNOWN - The received value is not known in this version.
   *
   * This is a response-only value.
   */
  UNKNOWN = 1,
  /** HOSTNAME_NOT_FOUND - Host name not found in DNS when fetching landing page. */
  HOSTNAME_NOT_FOUND = 2,
  /**
   * GOOGLE_CRAWLER_DNS_ISSUE - Google internal crawler issue when communicating with DNS. This error
   * doesn't mean the landing page doesn't work. Google will recrawl the
   * landing page.
   */
  GOOGLE_CRAWLER_DNS_ISSUE = 3,
  UNRECOGNIZED = -1,
}

export function policyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeFromJSON(
  object: any,
): PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType
        .UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType
        .UNKNOWN;
    case 2:
    case "HOSTNAME_NOT_FOUND":
      return PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType
        .HOSTNAME_NOT_FOUND;
    case 3:
    case "GOOGLE_CRAWLER_DNS_ISSUE":
      return PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType
        .GOOGLE_CRAWLER_DNS_ISSUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType
        .UNRECOGNIZED;
  }
}

export function policyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeToJSON(
  object: PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType,
): string {
  switch (object) {
    case PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType
      .UNSPECIFIED:
      return "UNSPECIFIED";
    case PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType
      .UNKNOWN:
      return "UNKNOWN";
    case PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType
      .HOSTNAME_NOT_FOUND:
      return "HOSTNAME_NOT_FOUND";
    case PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType
      .GOOGLE_CRAWLER_DNS_ISSUE:
      return "GOOGLE_CRAWLER_DNS_ISSUE";
    case PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum_PolicyTopicEvidenceDestinationNotWorkingDnsErrorType
      .UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum(): PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum {
  return {};
}

export const PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum: MessageFns<
  PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum
> = {
  encode(
    _: PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum();
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

  fromJSON(_: any): PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum {
    return {};
  },

  toJSON(_: PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum>,
  ): PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum {
    return PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(
    _: DeepPartial<PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum>,
  ): PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum {
    const message = createBasePolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum();
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
