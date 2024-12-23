// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/advertising_channel_sub_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** An immutable specialization of an Advertising Channel. */
export interface AdvertisingChannelSubTypeEnum {
}

/** Enum describing the different channel subtypes. */
export enum AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used as a return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** SEARCH_MOBILE_APP - Mobile app campaigns for Search. */
  SEARCH_MOBILE_APP = 2,
  /** DISPLAY_MOBILE_APP - Mobile app campaigns for Display. */
  DISPLAY_MOBILE_APP = 3,
  /** SEARCH_EXPRESS - AdWords express campaigns for search. */
  SEARCH_EXPRESS = 4,
  /** DISPLAY_EXPRESS - AdWords Express campaigns for display. */
  DISPLAY_EXPRESS = 5,
  /** SHOPPING_SMART_ADS - Smart Shopping campaigns. */
  SHOPPING_SMART_ADS = 6,
  /** DISPLAY_GMAIL_AD - Gmail Ad campaigns. */
  DISPLAY_GMAIL_AD = 7,
  /**
   * DISPLAY_SMART_CAMPAIGN - Smart display campaigns. New campaigns of this sub type cannot be
   * created.
   */
  DISPLAY_SMART_CAMPAIGN = 8,
  /** VIDEO_OUTSTREAM - Video Outstream campaigns. */
  VIDEO_OUTSTREAM = 9,
  /** VIDEO_ACTION - Video TrueView for Action campaigns. */
  VIDEO_ACTION = 10,
  /** VIDEO_NON_SKIPPABLE - Video campaigns with non-skippable video ads. */
  VIDEO_NON_SKIPPABLE = 11,
  /**
   * APP_CAMPAIGN - App Campaign that lets you easily promote your Android or iOS app
   * across Google's top properties including Search, Play, YouTube, and the
   * Google Display Network.
   */
  APP_CAMPAIGN = 12,
  /**
   * APP_CAMPAIGN_FOR_ENGAGEMENT - App Campaign for engagement, focused on driving re-engagement with the
   * app across several of Google's top properties including Search, YouTube,
   * and the Google Display Network.
   */
  APP_CAMPAIGN_FOR_ENGAGEMENT = 13,
  /** LOCAL_CAMPAIGN - Campaigns specialized for local advertising. */
  LOCAL_CAMPAIGN = 14,
  /** SHOPPING_COMPARISON_LISTING_ADS - Shopping Comparison Listing campaigns. */
  SHOPPING_COMPARISON_LISTING_ADS = 15,
  /** SMART_CAMPAIGN - Standard Smart campaigns. */
  SMART_CAMPAIGN = 16,
  /** VIDEO_SEQUENCE - Video campaigns with sequence video ads. */
  VIDEO_SEQUENCE = 17,
  /**
   * APP_CAMPAIGN_FOR_PRE_REGISTRATION - App Campaign for pre registration, specialized for advertising mobile
   * app pre-registration, that targets multiple advertising channels across
   * Google Play, YouTube and Display Network. See
   * https://support.google.com/google-ads/answer/9441344 to learn more.
   */
  APP_CAMPAIGN_FOR_PRE_REGISTRATION = 18,
  /** VIDEO_REACH_TARGET_FREQUENCY - Video reach campaign with Target Frequency bidding strategy. */
  VIDEO_REACH_TARGET_FREQUENCY = 19,
  /** TRAVEL_ACTIVITIES - Travel Activities campaigns. */
  TRAVEL_ACTIVITIES = 20,
  UNRECOGNIZED = -1,
}

export function advertisingChannelSubTypeEnum_AdvertisingChannelSubTypeFromJSON(
  object: any,
): AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.UNKNOWN;
    case 2:
    case "SEARCH_MOBILE_APP":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.SEARCH_MOBILE_APP;
    case 3:
    case "DISPLAY_MOBILE_APP":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.DISPLAY_MOBILE_APP;
    case 4:
    case "SEARCH_EXPRESS":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.SEARCH_EXPRESS;
    case 5:
    case "DISPLAY_EXPRESS":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.DISPLAY_EXPRESS;
    case 6:
    case "SHOPPING_SMART_ADS":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.SHOPPING_SMART_ADS;
    case 7:
    case "DISPLAY_GMAIL_AD":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.DISPLAY_GMAIL_AD;
    case 8:
    case "DISPLAY_SMART_CAMPAIGN":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.DISPLAY_SMART_CAMPAIGN;
    case 9:
    case "VIDEO_OUTSTREAM":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.VIDEO_OUTSTREAM;
    case 10:
    case "VIDEO_ACTION":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.VIDEO_ACTION;
    case 11:
    case "VIDEO_NON_SKIPPABLE":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.VIDEO_NON_SKIPPABLE;
    case 12:
    case "APP_CAMPAIGN":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.APP_CAMPAIGN;
    case 13:
    case "APP_CAMPAIGN_FOR_ENGAGEMENT":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.APP_CAMPAIGN_FOR_ENGAGEMENT;
    case 14:
    case "LOCAL_CAMPAIGN":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.LOCAL_CAMPAIGN;
    case 15:
    case "SHOPPING_COMPARISON_LISTING_ADS":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.SHOPPING_COMPARISON_LISTING_ADS;
    case 16:
    case "SMART_CAMPAIGN":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.SMART_CAMPAIGN;
    case 17:
    case "VIDEO_SEQUENCE":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.VIDEO_SEQUENCE;
    case 18:
    case "APP_CAMPAIGN_FOR_PRE_REGISTRATION":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.APP_CAMPAIGN_FOR_PRE_REGISTRATION;
    case 19:
    case "VIDEO_REACH_TARGET_FREQUENCY":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.VIDEO_REACH_TARGET_FREQUENCY;
    case 20:
    case "TRAVEL_ACTIVITIES":
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.TRAVEL_ACTIVITIES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.UNRECOGNIZED;
  }
}

export function advertisingChannelSubTypeEnum_AdvertisingChannelSubTypeToJSON(
  object: AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType,
): string {
  switch (object) {
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.UNSPECIFIED:
      return "UNSPECIFIED";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.UNKNOWN:
      return "UNKNOWN";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.SEARCH_MOBILE_APP:
      return "SEARCH_MOBILE_APP";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.DISPLAY_MOBILE_APP:
      return "DISPLAY_MOBILE_APP";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.SEARCH_EXPRESS:
      return "SEARCH_EXPRESS";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.DISPLAY_EXPRESS:
      return "DISPLAY_EXPRESS";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.SHOPPING_SMART_ADS:
      return "SHOPPING_SMART_ADS";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.DISPLAY_GMAIL_AD:
      return "DISPLAY_GMAIL_AD";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.DISPLAY_SMART_CAMPAIGN:
      return "DISPLAY_SMART_CAMPAIGN";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.VIDEO_OUTSTREAM:
      return "VIDEO_OUTSTREAM";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.VIDEO_ACTION:
      return "VIDEO_ACTION";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.VIDEO_NON_SKIPPABLE:
      return "VIDEO_NON_SKIPPABLE";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.APP_CAMPAIGN:
      return "APP_CAMPAIGN";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.APP_CAMPAIGN_FOR_ENGAGEMENT:
      return "APP_CAMPAIGN_FOR_ENGAGEMENT";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.LOCAL_CAMPAIGN:
      return "LOCAL_CAMPAIGN";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.SHOPPING_COMPARISON_LISTING_ADS:
      return "SHOPPING_COMPARISON_LISTING_ADS";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.SMART_CAMPAIGN:
      return "SMART_CAMPAIGN";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.VIDEO_SEQUENCE:
      return "VIDEO_SEQUENCE";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.APP_CAMPAIGN_FOR_PRE_REGISTRATION:
      return "APP_CAMPAIGN_FOR_PRE_REGISTRATION";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.VIDEO_REACH_TARGET_FREQUENCY:
      return "VIDEO_REACH_TARGET_FREQUENCY";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.TRAVEL_ACTIVITIES:
      return "TRAVEL_ACTIVITIES";
    case AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAdvertisingChannelSubTypeEnum(): AdvertisingChannelSubTypeEnum {
  return {};
}

export const AdvertisingChannelSubTypeEnum: MessageFns<AdvertisingChannelSubTypeEnum> = {
  encode(_: AdvertisingChannelSubTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdvertisingChannelSubTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdvertisingChannelSubTypeEnum();
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

  fromJSON(_: any): AdvertisingChannelSubTypeEnum {
    return {};
  },

  toJSON(_: AdvertisingChannelSubTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AdvertisingChannelSubTypeEnum>): AdvertisingChannelSubTypeEnum {
    return AdvertisingChannelSubTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AdvertisingChannelSubTypeEnum>): AdvertisingChannelSubTypeEnum {
    const message = createBaseAdvertisingChannelSubTypeEnum();
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
