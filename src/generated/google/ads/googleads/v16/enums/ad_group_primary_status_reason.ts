// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/ad_group_primary_status_reason.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Ad Group Primary Status Reason. Provides insight into why an ad group is not
 * serving or not serving optimally. These reasons are aggregated to determine
 * an overall AdGroupPrimaryStatus.
 */
export interface AdGroupPrimaryStatusReasonEnum {
}

/** Possible ad group status reasons. */
export enum AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /**
   * CAMPAIGN_REMOVED - The user-specified campaign status is removed. Contributes to
   * AdGroupPrimaryStatus.NOT_ELIGIBLE.
   */
  CAMPAIGN_REMOVED = 2,
  /**
   * CAMPAIGN_PAUSED - The user-specified campaign status is paused. Contributes to
   * AdGroupPrimaryStatus.NOT_ELIGIBLE.
   */
  CAMPAIGN_PAUSED = 3,
  /**
   * CAMPAIGN_PENDING - The user-specified time for this campaign to start is in the future.
   * Contributes to AdGroupPrimaryStatus.NOT_ELIGIBLE
   */
  CAMPAIGN_PENDING = 4,
  /**
   * CAMPAIGN_ENDED - The user-specified time for this campaign to end has passed. Contributes
   * to AdGroupPrimaryStatus.NOT_ELIGIBLE.
   */
  CAMPAIGN_ENDED = 5,
  /**
   * AD_GROUP_PAUSED - The user-specified ad group status is paused. Contributes to
   * AdGroupPrimaryStatus.PAUSED.
   */
  AD_GROUP_PAUSED = 6,
  /**
   * AD_GROUP_REMOVED - The user-specified ad group status is removed. Contributes to
   * AdGroupPrimaryStatus.REMOVED.
   */
  AD_GROUP_REMOVED = 7,
  /**
   * AD_GROUP_INCOMPLETE - The construction of this ad group is not yet complete. Contributes to
   * AdGroupPrimaryStatus.NOT_ELIGIBLE.
   */
  AD_GROUP_INCOMPLETE = 8,
  /**
   * KEYWORDS_PAUSED - The user-specified keyword statuses in this ad group are all paused.
   * Contributes to AdGroupPrimaryStatus.NOT_ELIGIBLE.
   */
  KEYWORDS_PAUSED = 9,
  /**
   * NO_KEYWORDS - No eligible keywords exist in this ad group. Contributes to
   * AdGroupPrimaryStatus.NOT_ELIGIBLE.
   */
  NO_KEYWORDS = 10,
  /**
   * AD_GROUP_ADS_PAUSED - The user-specified ad group ads statuses in this ad group are all paused.
   * Contributes to AdGroupPrimaryStatus.NOT_ELIGIBLE.
   */
  AD_GROUP_ADS_PAUSED = 11,
  /**
   * NO_AD_GROUP_ADS - No eligible ad group ads exist in this ad group. Contributes to
   * AdGroupPrimaryStatus.NOT_ELIGIBLE.
   */
  NO_AD_GROUP_ADS = 12,
  /**
   * HAS_ADS_DISAPPROVED - Policy status reason when at least one ad is disapproved. Contributes to
   * multiple AdGroupPrimaryStatus.
   */
  HAS_ADS_DISAPPROVED = 13,
  /**
   * HAS_ADS_LIMITED_BY_POLICY - Policy status reason when at least one ad is limited by policy.
   * Contributes to multiple AdGroupPrimaryStatus.
   */
  HAS_ADS_LIMITED_BY_POLICY = 14,
  /**
   * MOST_ADS_UNDER_REVIEW - Policy status reason when most ads are pending review. Contributes to
   * AdGroupPrimaryStatus.PENDING.
   */
  MOST_ADS_UNDER_REVIEW = 15,
  /**
   * CAMPAIGN_DRAFT - The AdGroup belongs to a Draft campaign. Contributes to
   * AdGroupPrimaryStatus.NOT_ELIGIBLE.
   */
  CAMPAIGN_DRAFT = 16,
  /**
   * AD_GROUP_PAUSED_DUE_TO_LOW_ACTIVITY - Ad group has been paused due to prolonged low activity in serving.
   * Contributes to AdGroupPrimaryStatus.PAUSED.
   */
  AD_GROUP_PAUSED_DUE_TO_LOW_ACTIVITY = 19,
  UNRECOGNIZED = -1,
}

export function adGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReasonFromJSON(
  object: any,
): AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.UNKNOWN;
    case 2:
    case "CAMPAIGN_REMOVED":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.CAMPAIGN_REMOVED;
    case 3:
    case "CAMPAIGN_PAUSED":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.CAMPAIGN_PAUSED;
    case 4:
    case "CAMPAIGN_PENDING":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.CAMPAIGN_PENDING;
    case 5:
    case "CAMPAIGN_ENDED":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.CAMPAIGN_ENDED;
    case 6:
    case "AD_GROUP_PAUSED":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.AD_GROUP_PAUSED;
    case 7:
    case "AD_GROUP_REMOVED":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.AD_GROUP_REMOVED;
    case 8:
    case "AD_GROUP_INCOMPLETE":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.AD_GROUP_INCOMPLETE;
    case 9:
    case "KEYWORDS_PAUSED":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.KEYWORDS_PAUSED;
    case 10:
    case "NO_KEYWORDS":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.NO_KEYWORDS;
    case 11:
    case "AD_GROUP_ADS_PAUSED":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.AD_GROUP_ADS_PAUSED;
    case 12:
    case "NO_AD_GROUP_ADS":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.NO_AD_GROUP_ADS;
    case 13:
    case "HAS_ADS_DISAPPROVED":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.HAS_ADS_DISAPPROVED;
    case 14:
    case "HAS_ADS_LIMITED_BY_POLICY":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.HAS_ADS_LIMITED_BY_POLICY;
    case 15:
    case "MOST_ADS_UNDER_REVIEW":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.MOST_ADS_UNDER_REVIEW;
    case 16:
    case "CAMPAIGN_DRAFT":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.CAMPAIGN_DRAFT;
    case 19:
    case "AD_GROUP_PAUSED_DUE_TO_LOW_ACTIVITY":
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.AD_GROUP_PAUSED_DUE_TO_LOW_ACTIVITY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.UNRECOGNIZED;
  }
}

export function adGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReasonToJSON(
  object: AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason,
): string {
  switch (object) {
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.UNSPECIFIED:
      return "UNSPECIFIED";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.UNKNOWN:
      return "UNKNOWN";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.CAMPAIGN_REMOVED:
      return "CAMPAIGN_REMOVED";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.CAMPAIGN_PAUSED:
      return "CAMPAIGN_PAUSED";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.CAMPAIGN_PENDING:
      return "CAMPAIGN_PENDING";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.CAMPAIGN_ENDED:
      return "CAMPAIGN_ENDED";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.AD_GROUP_PAUSED:
      return "AD_GROUP_PAUSED";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.AD_GROUP_REMOVED:
      return "AD_GROUP_REMOVED";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.AD_GROUP_INCOMPLETE:
      return "AD_GROUP_INCOMPLETE";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.KEYWORDS_PAUSED:
      return "KEYWORDS_PAUSED";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.NO_KEYWORDS:
      return "NO_KEYWORDS";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.AD_GROUP_ADS_PAUSED:
      return "AD_GROUP_ADS_PAUSED";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.NO_AD_GROUP_ADS:
      return "NO_AD_GROUP_ADS";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.HAS_ADS_DISAPPROVED:
      return "HAS_ADS_DISAPPROVED";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.HAS_ADS_LIMITED_BY_POLICY:
      return "HAS_ADS_LIMITED_BY_POLICY";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.MOST_ADS_UNDER_REVIEW:
      return "MOST_ADS_UNDER_REVIEW";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.CAMPAIGN_DRAFT:
      return "CAMPAIGN_DRAFT";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.AD_GROUP_PAUSED_DUE_TO_LOW_ACTIVITY:
      return "AD_GROUP_PAUSED_DUE_TO_LOW_ACTIVITY";
    case AdGroupPrimaryStatusReasonEnum_AdGroupPrimaryStatusReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAdGroupPrimaryStatusReasonEnum(): AdGroupPrimaryStatusReasonEnum {
  return {};
}

export const AdGroupPrimaryStatusReasonEnum: MessageFns<AdGroupPrimaryStatusReasonEnum> = {
  encode(_: AdGroupPrimaryStatusReasonEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdGroupPrimaryStatusReasonEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdGroupPrimaryStatusReasonEnum();
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

  fromJSON(_: any): AdGroupPrimaryStatusReasonEnum {
    return {};
  },

  toJSON(_: AdGroupPrimaryStatusReasonEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AdGroupPrimaryStatusReasonEnum>): AdGroupPrimaryStatusReasonEnum {
    return AdGroupPrimaryStatusReasonEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AdGroupPrimaryStatusReasonEnum>): AdGroupPrimaryStatusReasonEnum {
    const message = createBaseAdGroupPrimaryStatusReasonEnum();
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
