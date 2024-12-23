// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/errors/media_bundle_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.errors";

/** Container for enum describing possible media bundle errors. */
export interface MediaBundleErrorEnum {
}

/** Enum describing possible media bundle errors. */
export enum MediaBundleErrorEnum_MediaBundleError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** BAD_REQUEST - There was a problem with the request. */
  BAD_REQUEST = 3,
  /** DOUBLECLICK_BUNDLE_NOT_ALLOWED - HTML5 ads using DoubleClick Studio created ZIP files are not supported. */
  DOUBLECLICK_BUNDLE_NOT_ALLOWED = 4,
  /** EXTERNAL_URL_NOT_ALLOWED - Cannot reference URL external to the media bundle. */
  EXTERNAL_URL_NOT_ALLOWED = 5,
  /** FILE_TOO_LARGE - Media bundle file is too large. */
  FILE_TOO_LARGE = 6,
  /** GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED - ZIP file from Google Web Designer is not published. */
  GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED = 7,
  /** INVALID_INPUT - Input was invalid. */
  INVALID_INPUT = 8,
  /** INVALID_MEDIA_BUNDLE - There was a problem with the media bundle. */
  INVALID_MEDIA_BUNDLE = 9,
  /** INVALID_MEDIA_BUNDLE_ENTRY - There was a problem with one or more of the media bundle entries. */
  INVALID_MEDIA_BUNDLE_ENTRY = 10,
  /** INVALID_MIME_TYPE - The media bundle contains a file with an unknown mime type */
  INVALID_MIME_TYPE = 11,
  /** INVALID_PATH - The media bundle contain an invalid asset path. */
  INVALID_PATH = 12,
  /** INVALID_URL_REFERENCE - HTML5 ad is trying to reference an asset not in .ZIP file */
  INVALID_URL_REFERENCE = 13,
  /** MEDIA_DATA_TOO_LARGE - Media data is too large. */
  MEDIA_DATA_TOO_LARGE = 14,
  /** MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY - The media bundle contains no primary entry. */
  MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY = 15,
  /** SERVER_ERROR - There was an error on the server. */
  SERVER_ERROR = 16,
  /** STORAGE_ERROR - The image could not be stored. */
  STORAGE_ERROR = 17,
  /** SWIFFY_BUNDLE_NOT_ALLOWED - Media bundle created with the Swiffy tool is not allowed. */
  SWIFFY_BUNDLE_NOT_ALLOWED = 18,
  /** TOO_MANY_FILES - The media bundle contains too many files. */
  TOO_MANY_FILES = 19,
  /** UNEXPECTED_SIZE - The media bundle is not of legal dimensions. */
  UNEXPECTED_SIZE = 20,
  /** UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT - Google Web Designer not created for "Google Ads" environment. */
  UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT = 21,
  /** UNSUPPORTED_HTML5_FEATURE - Unsupported HTML5 feature in HTML5 asset. */
  UNSUPPORTED_HTML5_FEATURE = 22,
  /** URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT - URL in HTML5 entry is not ssl compliant. */
  URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT = 23,
  /** CUSTOM_EXIT_NOT_ALLOWED - Custom exits not allowed in HTML5 entry. */
  CUSTOM_EXIT_NOT_ALLOWED = 24,
  UNRECOGNIZED = -1,
}

export function mediaBundleErrorEnum_MediaBundleErrorFromJSON(object: any): MediaBundleErrorEnum_MediaBundleError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return MediaBundleErrorEnum_MediaBundleError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return MediaBundleErrorEnum_MediaBundleError.UNKNOWN;
    case 3:
    case "BAD_REQUEST":
      return MediaBundleErrorEnum_MediaBundleError.BAD_REQUEST;
    case 4:
    case "DOUBLECLICK_BUNDLE_NOT_ALLOWED":
      return MediaBundleErrorEnum_MediaBundleError.DOUBLECLICK_BUNDLE_NOT_ALLOWED;
    case 5:
    case "EXTERNAL_URL_NOT_ALLOWED":
      return MediaBundleErrorEnum_MediaBundleError.EXTERNAL_URL_NOT_ALLOWED;
    case 6:
    case "FILE_TOO_LARGE":
      return MediaBundleErrorEnum_MediaBundleError.FILE_TOO_LARGE;
    case 7:
    case "GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED":
      return MediaBundleErrorEnum_MediaBundleError.GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED;
    case 8:
    case "INVALID_INPUT":
      return MediaBundleErrorEnum_MediaBundleError.INVALID_INPUT;
    case 9:
    case "INVALID_MEDIA_BUNDLE":
      return MediaBundleErrorEnum_MediaBundleError.INVALID_MEDIA_BUNDLE;
    case 10:
    case "INVALID_MEDIA_BUNDLE_ENTRY":
      return MediaBundleErrorEnum_MediaBundleError.INVALID_MEDIA_BUNDLE_ENTRY;
    case 11:
    case "INVALID_MIME_TYPE":
      return MediaBundleErrorEnum_MediaBundleError.INVALID_MIME_TYPE;
    case 12:
    case "INVALID_PATH":
      return MediaBundleErrorEnum_MediaBundleError.INVALID_PATH;
    case 13:
    case "INVALID_URL_REFERENCE":
      return MediaBundleErrorEnum_MediaBundleError.INVALID_URL_REFERENCE;
    case 14:
    case "MEDIA_DATA_TOO_LARGE":
      return MediaBundleErrorEnum_MediaBundleError.MEDIA_DATA_TOO_LARGE;
    case 15:
    case "MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY":
      return MediaBundleErrorEnum_MediaBundleError.MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY;
    case 16:
    case "SERVER_ERROR":
      return MediaBundleErrorEnum_MediaBundleError.SERVER_ERROR;
    case 17:
    case "STORAGE_ERROR":
      return MediaBundleErrorEnum_MediaBundleError.STORAGE_ERROR;
    case 18:
    case "SWIFFY_BUNDLE_NOT_ALLOWED":
      return MediaBundleErrorEnum_MediaBundleError.SWIFFY_BUNDLE_NOT_ALLOWED;
    case 19:
    case "TOO_MANY_FILES":
      return MediaBundleErrorEnum_MediaBundleError.TOO_MANY_FILES;
    case 20:
    case "UNEXPECTED_SIZE":
      return MediaBundleErrorEnum_MediaBundleError.UNEXPECTED_SIZE;
    case 21:
    case "UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT":
      return MediaBundleErrorEnum_MediaBundleError.UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT;
    case 22:
    case "UNSUPPORTED_HTML5_FEATURE":
      return MediaBundleErrorEnum_MediaBundleError.UNSUPPORTED_HTML5_FEATURE;
    case 23:
    case "URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT":
      return MediaBundleErrorEnum_MediaBundleError.URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT;
    case 24:
    case "CUSTOM_EXIT_NOT_ALLOWED":
      return MediaBundleErrorEnum_MediaBundleError.CUSTOM_EXIT_NOT_ALLOWED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MediaBundleErrorEnum_MediaBundleError.UNRECOGNIZED;
  }
}

export function mediaBundleErrorEnum_MediaBundleErrorToJSON(object: MediaBundleErrorEnum_MediaBundleError): string {
  switch (object) {
    case MediaBundleErrorEnum_MediaBundleError.UNSPECIFIED:
      return "UNSPECIFIED";
    case MediaBundleErrorEnum_MediaBundleError.UNKNOWN:
      return "UNKNOWN";
    case MediaBundleErrorEnum_MediaBundleError.BAD_REQUEST:
      return "BAD_REQUEST";
    case MediaBundleErrorEnum_MediaBundleError.DOUBLECLICK_BUNDLE_NOT_ALLOWED:
      return "DOUBLECLICK_BUNDLE_NOT_ALLOWED";
    case MediaBundleErrorEnum_MediaBundleError.EXTERNAL_URL_NOT_ALLOWED:
      return "EXTERNAL_URL_NOT_ALLOWED";
    case MediaBundleErrorEnum_MediaBundleError.FILE_TOO_LARGE:
      return "FILE_TOO_LARGE";
    case MediaBundleErrorEnum_MediaBundleError.GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED:
      return "GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED";
    case MediaBundleErrorEnum_MediaBundleError.INVALID_INPUT:
      return "INVALID_INPUT";
    case MediaBundleErrorEnum_MediaBundleError.INVALID_MEDIA_BUNDLE:
      return "INVALID_MEDIA_BUNDLE";
    case MediaBundleErrorEnum_MediaBundleError.INVALID_MEDIA_BUNDLE_ENTRY:
      return "INVALID_MEDIA_BUNDLE_ENTRY";
    case MediaBundleErrorEnum_MediaBundleError.INVALID_MIME_TYPE:
      return "INVALID_MIME_TYPE";
    case MediaBundleErrorEnum_MediaBundleError.INVALID_PATH:
      return "INVALID_PATH";
    case MediaBundleErrorEnum_MediaBundleError.INVALID_URL_REFERENCE:
      return "INVALID_URL_REFERENCE";
    case MediaBundleErrorEnum_MediaBundleError.MEDIA_DATA_TOO_LARGE:
      return "MEDIA_DATA_TOO_LARGE";
    case MediaBundleErrorEnum_MediaBundleError.MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY:
      return "MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY";
    case MediaBundleErrorEnum_MediaBundleError.SERVER_ERROR:
      return "SERVER_ERROR";
    case MediaBundleErrorEnum_MediaBundleError.STORAGE_ERROR:
      return "STORAGE_ERROR";
    case MediaBundleErrorEnum_MediaBundleError.SWIFFY_BUNDLE_NOT_ALLOWED:
      return "SWIFFY_BUNDLE_NOT_ALLOWED";
    case MediaBundleErrorEnum_MediaBundleError.TOO_MANY_FILES:
      return "TOO_MANY_FILES";
    case MediaBundleErrorEnum_MediaBundleError.UNEXPECTED_SIZE:
      return "UNEXPECTED_SIZE";
    case MediaBundleErrorEnum_MediaBundleError.UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT:
      return "UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT";
    case MediaBundleErrorEnum_MediaBundleError.UNSUPPORTED_HTML5_FEATURE:
      return "UNSUPPORTED_HTML5_FEATURE";
    case MediaBundleErrorEnum_MediaBundleError.URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT:
      return "URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT";
    case MediaBundleErrorEnum_MediaBundleError.CUSTOM_EXIT_NOT_ALLOWED:
      return "CUSTOM_EXIT_NOT_ALLOWED";
    case MediaBundleErrorEnum_MediaBundleError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseMediaBundleErrorEnum(): MediaBundleErrorEnum {
  return {};
}

export const MediaBundleErrorEnum: MessageFns<MediaBundleErrorEnum> = {
  encode(_: MediaBundleErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MediaBundleErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaBundleErrorEnum();
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

  fromJSON(_: any): MediaBundleErrorEnum {
    return {};
  },

  toJSON(_: MediaBundleErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MediaBundleErrorEnum>): MediaBundleErrorEnum {
    return MediaBundleErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MediaBundleErrorEnum>): MediaBundleErrorEnum {
    const message = createBaseMediaBundleErrorEnum();
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
