// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/errors/conversion_goal_campaign_config_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.errors";

/**
 * Container for enum describing possible conversion goal campaign config
 * errors.
 */
export interface ConversionGoalCampaignConfigErrorEnum {
}

/** Enum describing possible conversion goal campaign config errors. */
export enum ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN - Campaign is managed by Search Ads 360 but uses Unified Goal. */
  CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN = 2,
  /**
   * CUSTOM_GOAL_DOES_NOT_BELONG_TO_GOOGLE_ADS_CONVERSION_CUSTOMER - The campaign is using a custom goal that does not belong to its Google
   * Ads conversion customer (conversion tracking customer).
   */
  CUSTOM_GOAL_DOES_NOT_BELONG_TO_GOOGLE_ADS_CONVERSION_CUSTOMER = 3,
  /** CAMPAIGN_CANNOT_USE_UNIFIED_GOALS - The campaign is not allowed to use unified goals. */
  CAMPAIGN_CANNOT_USE_UNIFIED_GOALS = 4,
  /**
   * EMPTY_CONVERSION_GOALS - The campaign is using campaign override goals but has no goals
   * configured.
   */
  EMPTY_CONVERSION_GOALS = 5,
  /**
   * STORE_SALE_STORE_VISIT_CANNOT_BE_BOTH_INCLUDED - STORE_SALE and STORE_VISIT conversion types cannot be both included in
   * campaign level goal.
   */
  STORE_SALE_STORE_VISIT_CANNOT_BE_BOTH_INCLUDED = 6,
  /**
   * PERFORMANCE_MAX_CAMPAIGN_CANNOT_USE_CUSTOM_GOAL_WITH_STORE_SALES - Performance Max campaign is not allowed to use custom goal with store
   * sales conversion type.
   */
  PERFORMANCE_MAX_CAMPAIGN_CANNOT_USE_CUSTOM_GOAL_WITH_STORE_SALES = 7,
  UNRECOGNIZED = -1,
}

export function conversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigErrorFromJSON(
  object: any,
): ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError.UNKNOWN;
    case 2:
    case "CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN":
      return ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError
        .CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN;
    case 3:
    case "CUSTOM_GOAL_DOES_NOT_BELONG_TO_GOOGLE_ADS_CONVERSION_CUSTOMER":
      return ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError
        .CUSTOM_GOAL_DOES_NOT_BELONG_TO_GOOGLE_ADS_CONVERSION_CUSTOMER;
    case 4:
    case "CAMPAIGN_CANNOT_USE_UNIFIED_GOALS":
      return ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError.CAMPAIGN_CANNOT_USE_UNIFIED_GOALS;
    case 5:
    case "EMPTY_CONVERSION_GOALS":
      return ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError.EMPTY_CONVERSION_GOALS;
    case 6:
    case "STORE_SALE_STORE_VISIT_CANNOT_BE_BOTH_INCLUDED":
      return ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError
        .STORE_SALE_STORE_VISIT_CANNOT_BE_BOTH_INCLUDED;
    case 7:
    case "PERFORMANCE_MAX_CAMPAIGN_CANNOT_USE_CUSTOM_GOAL_WITH_STORE_SALES":
      return ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError
        .PERFORMANCE_MAX_CAMPAIGN_CANNOT_USE_CUSTOM_GOAL_WITH_STORE_SALES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError.UNRECOGNIZED;
  }
}

export function conversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigErrorToJSON(
  object: ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError,
): string {
  switch (object) {
    case ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError.UNSPECIFIED:
      return "UNSPECIFIED";
    case ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError.UNKNOWN:
      return "UNKNOWN";
    case ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError
      .CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN:
      return "CANNOT_USE_CAMPAIGN_GOAL_FOR_SEARCH_ADS_360_MANAGED_CAMPAIGN";
    case ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError
      .CUSTOM_GOAL_DOES_NOT_BELONG_TO_GOOGLE_ADS_CONVERSION_CUSTOMER:
      return "CUSTOM_GOAL_DOES_NOT_BELONG_TO_GOOGLE_ADS_CONVERSION_CUSTOMER";
    case ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError.CAMPAIGN_CANNOT_USE_UNIFIED_GOALS:
      return "CAMPAIGN_CANNOT_USE_UNIFIED_GOALS";
    case ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError.EMPTY_CONVERSION_GOALS:
      return "EMPTY_CONVERSION_GOALS";
    case ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError
      .STORE_SALE_STORE_VISIT_CANNOT_BE_BOTH_INCLUDED:
      return "STORE_SALE_STORE_VISIT_CANNOT_BE_BOTH_INCLUDED";
    case ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError
      .PERFORMANCE_MAX_CAMPAIGN_CANNOT_USE_CUSTOM_GOAL_WITH_STORE_SALES:
      return "PERFORMANCE_MAX_CAMPAIGN_CANNOT_USE_CUSTOM_GOAL_WITH_STORE_SALES";
    case ConversionGoalCampaignConfigErrorEnum_ConversionGoalCampaignConfigError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseConversionGoalCampaignConfigErrorEnum(): ConversionGoalCampaignConfigErrorEnum {
  return {};
}

export const ConversionGoalCampaignConfigErrorEnum: MessageFns<ConversionGoalCampaignConfigErrorEnum> = {
  encode(_: ConversionGoalCampaignConfigErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversionGoalCampaignConfigErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionGoalCampaignConfigErrorEnum();
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

  fromJSON(_: any): ConversionGoalCampaignConfigErrorEnum {
    return {};
  },

  toJSON(_: ConversionGoalCampaignConfigErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ConversionGoalCampaignConfigErrorEnum>): ConversionGoalCampaignConfigErrorEnum {
    return ConversionGoalCampaignConfigErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ConversionGoalCampaignConfigErrorEnum>): ConversionGoalCampaignConfigErrorEnum {
    const message = createBaseConversionGoalCampaignConfigErrorEnum();
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