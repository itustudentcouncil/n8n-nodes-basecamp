// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/flight_placeholder_field.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Values for Flight placeholder fields.
 * For more information about dynamic remarketing feeds, see
 * https://support.google.com/google-ads/answer/6053288.
 */
export interface FlightPlaceholderFieldEnum {
}

/** Possible values for Flight placeholder fields. */
export enum FlightPlaceholderFieldEnum_FlightPlaceholderField {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /**
   * DESTINATION_ID - Data Type: STRING. Required. Destination id. Example: PAR, LON.
   * For feed items that only have destination id, destination id must be a
   * unique key. For feed items that have both destination id and origin id,
   * then the combination must be a unique key.
   */
  DESTINATION_ID = 2,
  /**
   * ORIGIN_ID - Data Type: STRING. Origin id. Example: PAR, LON.
   * Optional. Combination of destination id and origin id must be unique per
   * offer.
   */
  ORIGIN_ID = 3,
  /**
   * FLIGHT_DESCRIPTION - Data Type: STRING. Required. Main headline with product name to be shown
   * in dynamic ad.
   */
  FLIGHT_DESCRIPTION = 4,
  /** ORIGIN_NAME - Data Type: STRING. Shorter names are recommended. */
  ORIGIN_NAME = 5,
  /** DESTINATION_NAME - Data Type: STRING. Shorter names are recommended. */
  DESTINATION_NAME = 6,
  /**
   * FLIGHT_PRICE - Data Type: STRING. Price to be shown in the ad.
   * Example: "100.00 USD"
   */
  FLIGHT_PRICE = 7,
  /**
   * FORMATTED_PRICE - Data Type: STRING. Formatted price to be shown in the ad.
   * Example: "Starting at $100.00 USD", "$80 - $100"
   */
  FORMATTED_PRICE = 8,
  /**
   * FLIGHT_SALE_PRICE - Data Type: STRING. Sale price to be shown in the ad.
   * Example: "80.00 USD"
   */
  FLIGHT_SALE_PRICE = 9,
  /**
   * FORMATTED_SALE_PRICE - Data Type: STRING. Formatted sale price to be shown in the ad.
   * Example: "On sale for $80.00", "$60 - $80"
   */
  FORMATTED_SALE_PRICE = 10,
  /** IMAGE_URL - Data Type: URL. Image to be displayed in the ad. */
  IMAGE_URL = 11,
  /**
   * FINAL_URLS - Data Type: URL_LIST. Required. Final URLs for the ad when using Upgraded
   * URLs. User will be redirected to these URLs when they click on an ad, or
   * when they click on a specific flight for ads that show multiple
   * flights.
   */
  FINAL_URLS = 12,
  /**
   * FINAL_MOBILE_URLS - Data Type: URL_LIST. Final mobile URLs for the ad when using Upgraded
   * URLs.
   */
  FINAL_MOBILE_URLS = 13,
  /** TRACKING_URL - Data Type: URL. Tracking template for the ad when using Upgraded URLs. */
  TRACKING_URL = 14,
  /**
   * ANDROID_APP_LINK - Data Type: STRING. Android app link. Must be formatted as:
   * android-app://{package_id}/{scheme}/{host_path}.
   * The components are defined as follows:
   * package_id: app ID as specified in Google Play.
   * scheme: the scheme to pass to the application. Can be HTTP, or a custom
   *   scheme.
   * host_path: identifies the specific content within your application.
   */
  ANDROID_APP_LINK = 15,
  /**
   * SIMILAR_DESTINATION_IDS - Data Type: STRING_LIST. List of recommended destination IDs to show
   * together with this item.
   */
  SIMILAR_DESTINATION_IDS = 16,
  /** IOS_APP_LINK - Data Type: STRING. iOS app link. */
  IOS_APP_LINK = 17,
  /** IOS_APP_STORE_ID - Data Type: INT64. iOS app store ID. */
  IOS_APP_STORE_ID = 18,
  UNRECOGNIZED = -1,
}

export function flightPlaceholderFieldEnum_FlightPlaceholderFieldFromJSON(
  object: any,
): FlightPlaceholderFieldEnum_FlightPlaceholderField {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.UNKNOWN;
    case 2:
    case "DESTINATION_ID":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.DESTINATION_ID;
    case 3:
    case "ORIGIN_ID":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.ORIGIN_ID;
    case 4:
    case "FLIGHT_DESCRIPTION":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.FLIGHT_DESCRIPTION;
    case 5:
    case "ORIGIN_NAME":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.ORIGIN_NAME;
    case 6:
    case "DESTINATION_NAME":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.DESTINATION_NAME;
    case 7:
    case "FLIGHT_PRICE":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.FLIGHT_PRICE;
    case 8:
    case "FORMATTED_PRICE":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.FORMATTED_PRICE;
    case 9:
    case "FLIGHT_SALE_PRICE":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.FLIGHT_SALE_PRICE;
    case 10:
    case "FORMATTED_SALE_PRICE":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.FORMATTED_SALE_PRICE;
    case 11:
    case "IMAGE_URL":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.IMAGE_URL;
    case 12:
    case "FINAL_URLS":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.FINAL_URLS;
    case 13:
    case "FINAL_MOBILE_URLS":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.FINAL_MOBILE_URLS;
    case 14:
    case "TRACKING_URL":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.TRACKING_URL;
    case 15:
    case "ANDROID_APP_LINK":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.ANDROID_APP_LINK;
    case 16:
    case "SIMILAR_DESTINATION_IDS":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.SIMILAR_DESTINATION_IDS;
    case 17:
    case "IOS_APP_LINK":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.IOS_APP_LINK;
    case 18:
    case "IOS_APP_STORE_ID":
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.IOS_APP_STORE_ID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FlightPlaceholderFieldEnum_FlightPlaceholderField.UNRECOGNIZED;
  }
}

export function flightPlaceholderFieldEnum_FlightPlaceholderFieldToJSON(
  object: FlightPlaceholderFieldEnum_FlightPlaceholderField,
): string {
  switch (object) {
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.UNSPECIFIED:
      return "UNSPECIFIED";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.UNKNOWN:
      return "UNKNOWN";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.DESTINATION_ID:
      return "DESTINATION_ID";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.ORIGIN_ID:
      return "ORIGIN_ID";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.FLIGHT_DESCRIPTION:
      return "FLIGHT_DESCRIPTION";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.ORIGIN_NAME:
      return "ORIGIN_NAME";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.DESTINATION_NAME:
      return "DESTINATION_NAME";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.FLIGHT_PRICE:
      return "FLIGHT_PRICE";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.FORMATTED_PRICE:
      return "FORMATTED_PRICE";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.FLIGHT_SALE_PRICE:
      return "FLIGHT_SALE_PRICE";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.FORMATTED_SALE_PRICE:
      return "FORMATTED_SALE_PRICE";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.IMAGE_URL:
      return "IMAGE_URL";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.FINAL_URLS:
      return "FINAL_URLS";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.FINAL_MOBILE_URLS:
      return "FINAL_MOBILE_URLS";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.TRACKING_URL:
      return "TRACKING_URL";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.ANDROID_APP_LINK:
      return "ANDROID_APP_LINK";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.SIMILAR_DESTINATION_IDS:
      return "SIMILAR_DESTINATION_IDS";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.IOS_APP_LINK:
      return "IOS_APP_LINK";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.IOS_APP_STORE_ID:
      return "IOS_APP_STORE_ID";
    case FlightPlaceholderFieldEnum_FlightPlaceholderField.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseFlightPlaceholderFieldEnum(): FlightPlaceholderFieldEnum {
  return {};
}

export const FlightPlaceholderFieldEnum: MessageFns<FlightPlaceholderFieldEnum> = {
  encode(_: FlightPlaceholderFieldEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FlightPlaceholderFieldEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlightPlaceholderFieldEnum();
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

  fromJSON(_: any): FlightPlaceholderFieldEnum {
    return {};
  },

  toJSON(_: FlightPlaceholderFieldEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<FlightPlaceholderFieldEnum>): FlightPlaceholderFieldEnum {
    return FlightPlaceholderFieldEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<FlightPlaceholderFieldEnum>): FlightPlaceholderFieldEnum {
    const message = createBaseFlightPlaceholderFieldEnum();
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