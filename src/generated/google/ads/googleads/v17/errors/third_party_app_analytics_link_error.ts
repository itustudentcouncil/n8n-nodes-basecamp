// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/third_party_app_analytics_link_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible third party app analytics link errors. */
export interface ThirdPartyAppAnalyticsLinkErrorEnum {
}

/** Enum describing possible third party app analytics link errors. */
export enum ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** INVALID_ANALYTICS_PROVIDER_ID - The provided analytics provider ID is invalid. */
  INVALID_ANALYTICS_PROVIDER_ID = 2,
  /** INVALID_MOBILE_APP_ID - The provided mobile app ID is invalid. */
  INVALID_MOBILE_APP_ID = 3,
  /**
   * MOBILE_APP_IS_NOT_ENABLED - The mobile app corresponding to the provided app ID is not
   * active/enabled.
   */
  MOBILE_APP_IS_NOT_ENABLED = 4,
  /** CANNOT_REGENERATE_SHAREABLE_LINK_ID_FOR_REMOVED_LINK - Regenerating shareable link ID is only allowed on active links */
  CANNOT_REGENERATE_SHAREABLE_LINK_ID_FOR_REMOVED_LINK = 5,
  UNRECOGNIZED = -1,
}

export function thirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkErrorFromJSON(
  object: any,
): ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.UNKNOWN;
    case 2:
    case "INVALID_ANALYTICS_PROVIDER_ID":
      return ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.INVALID_ANALYTICS_PROVIDER_ID;
    case 3:
    case "INVALID_MOBILE_APP_ID":
      return ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.INVALID_MOBILE_APP_ID;
    case 4:
    case "MOBILE_APP_IS_NOT_ENABLED":
      return ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.MOBILE_APP_IS_NOT_ENABLED;
    case 5:
    case "CANNOT_REGENERATE_SHAREABLE_LINK_ID_FOR_REMOVED_LINK":
      return ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError
        .CANNOT_REGENERATE_SHAREABLE_LINK_ID_FOR_REMOVED_LINK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.UNRECOGNIZED;
  }
}

export function thirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkErrorToJSON(
  object: ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError,
): string {
  switch (object) {
    case ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.UNSPECIFIED:
      return "UNSPECIFIED";
    case ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.UNKNOWN:
      return "UNKNOWN";
    case ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.INVALID_ANALYTICS_PROVIDER_ID:
      return "INVALID_ANALYTICS_PROVIDER_ID";
    case ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.INVALID_MOBILE_APP_ID:
      return "INVALID_MOBILE_APP_ID";
    case ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.MOBILE_APP_IS_NOT_ENABLED:
      return "MOBILE_APP_IS_NOT_ENABLED";
    case ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError
      .CANNOT_REGENERATE_SHAREABLE_LINK_ID_FOR_REMOVED_LINK:
      return "CANNOT_REGENERATE_SHAREABLE_LINK_ID_FOR_REMOVED_LINK";
    case ThirdPartyAppAnalyticsLinkErrorEnum_ThirdPartyAppAnalyticsLinkError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseThirdPartyAppAnalyticsLinkErrorEnum(): ThirdPartyAppAnalyticsLinkErrorEnum {
  return {};
}

export const ThirdPartyAppAnalyticsLinkErrorEnum: MessageFns<ThirdPartyAppAnalyticsLinkErrorEnum> = {
  encode(_: ThirdPartyAppAnalyticsLinkErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ThirdPartyAppAnalyticsLinkErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThirdPartyAppAnalyticsLinkErrorEnum();
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

  fromJSON(_: any): ThirdPartyAppAnalyticsLinkErrorEnum {
    return {};
  },

  toJSON(_: ThirdPartyAppAnalyticsLinkErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ThirdPartyAppAnalyticsLinkErrorEnum>): ThirdPartyAppAnalyticsLinkErrorEnum {
    return ThirdPartyAppAnalyticsLinkErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ThirdPartyAppAnalyticsLinkErrorEnum>): ThirdPartyAppAnalyticsLinkErrorEnum {
    const message = createBaseThirdPartyAppAnalyticsLinkErrorEnum();
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
