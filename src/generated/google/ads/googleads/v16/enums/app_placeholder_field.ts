// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/app_placeholder_field.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/** Values for App placeholder fields. */
export interface AppPlaceholderFieldEnum {
}

/** Possible values for App placeholder fields. */
export enum AppPlaceholderFieldEnum_AppPlaceholderField {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /**
   * STORE - Data Type: INT64. The application store that the target application
   * belongs to. Valid values are: 1 = Apple iTunes Store; 2 = Google Play
   * Store.
   */
  STORE = 2,
  /** ID - Data Type: STRING. The store-specific ID for the target application. */
  ID = 3,
  /**
   * LINK_TEXT - Data Type: STRING. The visible text displayed when the link is rendered
   * in an ad.
   */
  LINK_TEXT = 4,
  /** URL - Data Type: STRING. The destination URL of the in-app link. */
  URL = 5,
  /**
   * FINAL_URLS - Data Type: URL_LIST. Final URLs for the in-app link when using Upgraded
   * URLs.
   */
  FINAL_URLS = 6,
  /**
   * FINAL_MOBILE_URLS - Data Type: URL_LIST. Final Mobile URLs for the in-app link when using
   * Upgraded URLs.
   */
  FINAL_MOBILE_URLS = 7,
  /**
   * TRACKING_URL - Data Type: URL. Tracking template for the in-app link when using Upgraded
   * URLs.
   */
  TRACKING_URL = 8,
  /**
   * FINAL_URL_SUFFIX - Data Type: STRING. Final URL suffix for the in-app link when using
   * parallel tracking.
   */
  FINAL_URL_SUFFIX = 9,
  UNRECOGNIZED = -1,
}

export function appPlaceholderFieldEnum_AppPlaceholderFieldFromJSON(
  object: any,
): AppPlaceholderFieldEnum_AppPlaceholderField {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return AppPlaceholderFieldEnum_AppPlaceholderField.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return AppPlaceholderFieldEnum_AppPlaceholderField.UNKNOWN;
    case 2:
    case "STORE":
      return AppPlaceholderFieldEnum_AppPlaceholderField.STORE;
    case 3:
    case "ID":
      return AppPlaceholderFieldEnum_AppPlaceholderField.ID;
    case 4:
    case "LINK_TEXT":
      return AppPlaceholderFieldEnum_AppPlaceholderField.LINK_TEXT;
    case 5:
    case "URL":
      return AppPlaceholderFieldEnum_AppPlaceholderField.URL;
    case 6:
    case "FINAL_URLS":
      return AppPlaceholderFieldEnum_AppPlaceholderField.FINAL_URLS;
    case 7:
    case "FINAL_MOBILE_URLS":
      return AppPlaceholderFieldEnum_AppPlaceholderField.FINAL_MOBILE_URLS;
    case 8:
    case "TRACKING_URL":
      return AppPlaceholderFieldEnum_AppPlaceholderField.TRACKING_URL;
    case 9:
    case "FINAL_URL_SUFFIX":
      return AppPlaceholderFieldEnum_AppPlaceholderField.FINAL_URL_SUFFIX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AppPlaceholderFieldEnum_AppPlaceholderField.UNRECOGNIZED;
  }
}

export function appPlaceholderFieldEnum_AppPlaceholderFieldToJSON(
  object: AppPlaceholderFieldEnum_AppPlaceholderField,
): string {
  switch (object) {
    case AppPlaceholderFieldEnum_AppPlaceholderField.UNSPECIFIED:
      return "UNSPECIFIED";
    case AppPlaceholderFieldEnum_AppPlaceholderField.UNKNOWN:
      return "UNKNOWN";
    case AppPlaceholderFieldEnum_AppPlaceholderField.STORE:
      return "STORE";
    case AppPlaceholderFieldEnum_AppPlaceholderField.ID:
      return "ID";
    case AppPlaceholderFieldEnum_AppPlaceholderField.LINK_TEXT:
      return "LINK_TEXT";
    case AppPlaceholderFieldEnum_AppPlaceholderField.URL:
      return "URL";
    case AppPlaceholderFieldEnum_AppPlaceholderField.FINAL_URLS:
      return "FINAL_URLS";
    case AppPlaceholderFieldEnum_AppPlaceholderField.FINAL_MOBILE_URLS:
      return "FINAL_MOBILE_URLS";
    case AppPlaceholderFieldEnum_AppPlaceholderField.TRACKING_URL:
      return "TRACKING_URL";
    case AppPlaceholderFieldEnum_AppPlaceholderField.FINAL_URL_SUFFIX:
      return "FINAL_URL_SUFFIX";
    case AppPlaceholderFieldEnum_AppPlaceholderField.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAppPlaceholderFieldEnum(): AppPlaceholderFieldEnum {
  return {};
}

export const AppPlaceholderFieldEnum: MessageFns<AppPlaceholderFieldEnum> = {
  encode(_: AppPlaceholderFieldEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AppPlaceholderFieldEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppPlaceholderFieldEnum();
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

  fromJSON(_: any): AppPlaceholderFieldEnum {
    return {};
  },

  toJSON(_: AppPlaceholderFieldEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AppPlaceholderFieldEnum>): AppPlaceholderFieldEnum {
    return AppPlaceholderFieldEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AppPlaceholderFieldEnum>): AppPlaceholderFieldEnum {
    const message = createBaseAppPlaceholderFieldEnum();
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