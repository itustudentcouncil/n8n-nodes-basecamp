// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/promotion_placeholder_field.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Values for Promotion placeholder fields. */
export interface PromotionPlaceholderFieldEnum {
}

/** Possible values for Promotion placeholder fields. */
export enum PromotionPlaceholderFieldEnum_PromotionPlaceholderField {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /**
   * PROMOTION_TARGET - Data Type: STRING. The text that appears on the ad when the extension is
   * shown.
   */
  PROMOTION_TARGET = 2,
  /**
   * DISCOUNT_MODIFIER - Data Type: STRING. Lets you add "up to" phrase to the promotion,
   * in case you have variable promotion rates.
   */
  DISCOUNT_MODIFIER = 3,
  /**
   * PERCENT_OFF - Data Type: INT64. Takes a value in micros, where 1 million micros
   * represents 1%, and is shown as a percentage when rendered.
   */
  PERCENT_OFF = 4,
  /** MONEY_AMOUNT_OFF - Data Type: MONEY. Requires a currency and an amount of money. */
  MONEY_AMOUNT_OFF = 5,
  /** PROMOTION_CODE - Data Type: STRING. A string that the user enters to get the discount. */
  PROMOTION_CODE = 6,
  /**
   * ORDERS_OVER_AMOUNT - Data Type: MONEY. A minimum spend before the user qualifies for the
   * promotion.
   */
  ORDERS_OVER_AMOUNT = 7,
  /** PROMOTION_START - Data Type: DATE. The start date of the promotion. */
  PROMOTION_START = 8,
  /** PROMOTION_END - Data Type: DATE. The end date of the promotion. */
  PROMOTION_END = 9,
  /**
   * OCCASION - Data Type: STRING. Describes the associated event for the promotion using
   * one of the PromotionExtensionOccasion enum values, for example NEW_YEARS.
   */
  OCCASION = 10,
  /**
   * FINAL_URLS - Data Type: URL_LIST. Final URLs to be used in the ad when using Upgraded
   * URLs.
   */
  FINAL_URLS = 11,
  /**
   * FINAL_MOBILE_URLS - Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded
   * URLs.
   */
  FINAL_MOBILE_URLS = 12,
  /** TRACKING_URL - Data Type: URL. Tracking template for the ad when using Upgraded URLs. */
  TRACKING_URL = 13,
  /**
   * LANGUAGE - Data Type: STRING. A string represented by a language code for the
   * promotion.
   */
  LANGUAGE = 14,
  /**
   * FINAL_URL_SUFFIX - Data Type: STRING. Final URL suffix for the ad when using parallel
   * tracking.
   */
  FINAL_URL_SUFFIX = 15,
  UNRECOGNIZED = -1,
}

export function promotionPlaceholderFieldEnum_PromotionPlaceholderFieldFromJSON(
  object: any,
): PromotionPlaceholderFieldEnum_PromotionPlaceholderField {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.UNKNOWN;
    case 2:
    case "PROMOTION_TARGET":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.PROMOTION_TARGET;
    case 3:
    case "DISCOUNT_MODIFIER":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.DISCOUNT_MODIFIER;
    case 4:
    case "PERCENT_OFF":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.PERCENT_OFF;
    case 5:
    case "MONEY_AMOUNT_OFF":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.MONEY_AMOUNT_OFF;
    case 6:
    case "PROMOTION_CODE":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.PROMOTION_CODE;
    case 7:
    case "ORDERS_OVER_AMOUNT":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.ORDERS_OVER_AMOUNT;
    case 8:
    case "PROMOTION_START":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.PROMOTION_START;
    case 9:
    case "PROMOTION_END":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.PROMOTION_END;
    case 10:
    case "OCCASION":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.OCCASION;
    case 11:
    case "FINAL_URLS":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.FINAL_URLS;
    case 12:
    case "FINAL_MOBILE_URLS":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.FINAL_MOBILE_URLS;
    case 13:
    case "TRACKING_URL":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.TRACKING_URL;
    case 14:
    case "LANGUAGE":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.LANGUAGE;
    case 15:
    case "FINAL_URL_SUFFIX":
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.FINAL_URL_SUFFIX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PromotionPlaceholderFieldEnum_PromotionPlaceholderField.UNRECOGNIZED;
  }
}

export function promotionPlaceholderFieldEnum_PromotionPlaceholderFieldToJSON(
  object: PromotionPlaceholderFieldEnum_PromotionPlaceholderField,
): string {
  switch (object) {
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.UNSPECIFIED:
      return "UNSPECIFIED";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.UNKNOWN:
      return "UNKNOWN";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.PROMOTION_TARGET:
      return "PROMOTION_TARGET";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.DISCOUNT_MODIFIER:
      return "DISCOUNT_MODIFIER";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.PERCENT_OFF:
      return "PERCENT_OFF";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.MONEY_AMOUNT_OFF:
      return "MONEY_AMOUNT_OFF";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.PROMOTION_CODE:
      return "PROMOTION_CODE";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.ORDERS_OVER_AMOUNT:
      return "ORDERS_OVER_AMOUNT";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.PROMOTION_START:
      return "PROMOTION_START";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.PROMOTION_END:
      return "PROMOTION_END";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.OCCASION:
      return "OCCASION";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.FINAL_URLS:
      return "FINAL_URLS";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.FINAL_MOBILE_URLS:
      return "FINAL_MOBILE_URLS";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.TRACKING_URL:
      return "TRACKING_URL";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.LANGUAGE:
      return "LANGUAGE";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.FINAL_URL_SUFFIX:
      return "FINAL_URL_SUFFIX";
    case PromotionPlaceholderFieldEnum_PromotionPlaceholderField.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePromotionPlaceholderFieldEnum(): PromotionPlaceholderFieldEnum {
  return {};
}

export const PromotionPlaceholderFieldEnum: MessageFns<PromotionPlaceholderFieldEnum> = {
  encode(_: PromotionPlaceholderFieldEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PromotionPlaceholderFieldEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePromotionPlaceholderFieldEnum();
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

  fromJSON(_: any): PromotionPlaceholderFieldEnum {
    return {};
  },

  toJSON(_: PromotionPlaceholderFieldEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PromotionPlaceholderFieldEnum>): PromotionPlaceholderFieldEnum {
    return PromotionPlaceholderFieldEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<PromotionPlaceholderFieldEnum>): PromotionPlaceholderFieldEnum {
    const message = createBasePromotionPlaceholderFieldEnum();
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