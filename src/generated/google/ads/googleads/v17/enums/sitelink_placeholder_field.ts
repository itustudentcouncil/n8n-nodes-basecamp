// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/sitelink_placeholder_field.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Values for Sitelink placeholder fields. */
export interface SitelinkPlaceholderFieldEnum {
}

/** Possible values for Sitelink placeholder fields. */
export enum SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** TEXT - Data Type: STRING. The link text for your sitelink. */
  TEXT = 2,
  /** LINE_1 - Data Type: STRING. First line of the sitelink description. */
  LINE_1 = 3,
  /** LINE_2 - Data Type: STRING. Second line of the sitelink description. */
  LINE_2 = 4,
  /**
   * FINAL_URLS - Data Type: URL_LIST. Final URLs for the sitelink when using Upgraded
   * URLs.
   */
  FINAL_URLS = 5,
  /**
   * FINAL_MOBILE_URLS - Data Type: URL_LIST. Final Mobile URLs for the sitelink when using
   * Upgraded URLs.
   */
  FINAL_MOBILE_URLS = 6,
  /**
   * TRACKING_URL - Data Type: URL. Tracking template for the sitelink when using Upgraded
   * URLs.
   */
  TRACKING_URL = 7,
  /**
   * FINAL_URL_SUFFIX - Data Type: STRING. Final URL suffix for sitelink when using parallel
   * tracking.
   */
  FINAL_URL_SUFFIX = 8,
  UNRECOGNIZED = -1,
}

export function sitelinkPlaceholderFieldEnum_SitelinkPlaceholderFieldFromJSON(
  object: any,
): SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.UNKNOWN;
    case 2:
    case "TEXT":
      return SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.TEXT;
    case 3:
    case "LINE_1":
      return SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.LINE_1;
    case 4:
    case "LINE_2":
      return SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.LINE_2;
    case 5:
    case "FINAL_URLS":
      return SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.FINAL_URLS;
    case 6:
    case "FINAL_MOBILE_URLS":
      return SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.FINAL_MOBILE_URLS;
    case 7:
    case "TRACKING_URL":
      return SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.TRACKING_URL;
    case 8:
    case "FINAL_URL_SUFFIX":
      return SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.FINAL_URL_SUFFIX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.UNRECOGNIZED;
  }
}

export function sitelinkPlaceholderFieldEnum_SitelinkPlaceholderFieldToJSON(
  object: SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField,
): string {
  switch (object) {
    case SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.UNSPECIFIED:
      return "UNSPECIFIED";
    case SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.UNKNOWN:
      return "UNKNOWN";
    case SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.TEXT:
      return "TEXT";
    case SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.LINE_1:
      return "LINE_1";
    case SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.LINE_2:
      return "LINE_2";
    case SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.FINAL_URLS:
      return "FINAL_URLS";
    case SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.FINAL_MOBILE_URLS:
      return "FINAL_MOBILE_URLS";
    case SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.TRACKING_URL:
      return "TRACKING_URL";
    case SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.FINAL_URL_SUFFIX:
      return "FINAL_URL_SUFFIX";
    case SitelinkPlaceholderFieldEnum_SitelinkPlaceholderField.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseSitelinkPlaceholderFieldEnum(): SitelinkPlaceholderFieldEnum {
  return {};
}

export const SitelinkPlaceholderFieldEnum: MessageFns<SitelinkPlaceholderFieldEnum> = {
  encode(_: SitelinkPlaceholderFieldEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SitelinkPlaceholderFieldEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSitelinkPlaceholderFieldEnum();
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

  fromJSON(_: any): SitelinkPlaceholderFieldEnum {
    return {};
  },

  toJSON(_: SitelinkPlaceholderFieldEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<SitelinkPlaceholderFieldEnum>): SitelinkPlaceholderFieldEnum {
    return SitelinkPlaceholderFieldEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<SitelinkPlaceholderFieldEnum>): SitelinkPlaceholderFieldEnum {
    const message = createBaseSitelinkPlaceholderFieldEnum();
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