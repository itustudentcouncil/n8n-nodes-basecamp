// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file google/ads/googleads/v16/errors/media_bundle_error.proto (package google.ads.googleads.v16.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/errors/media_bundle_error.proto.
 */
export const file_google_ads_googleads_v16_errors_media_bundle_error: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZXJyb3JzL21lZGlhX2J1bmRsZV9lcnJvci5wcm90bxIfZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVycm9ycyK4BQoUTWVkaWFCdW5kbGVFcnJvckVudW0inwUKEE1lZGlhQnVuZGxlRXJyb3ISDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESDwoLQkFEX1JFUVVFU1QQAxIiCh5ET1VCTEVDTElDS19CVU5ETEVfTk9UX0FMTE9XRUQQBBIcChhFWFRFUk5BTF9VUkxfTk9UX0FMTE9XRUQQBRISCg5GSUxFX1RPT19MQVJHRRAGEi4KKkdPT0dMRV9XRUJfREVTSUdORVJfWklQX0ZJTEVfTk9UX1BVQkxJU0hFRBAHEhEKDUlOVkFMSURfSU5QVVQQCBIYChRJTlZBTElEX01FRElBX0JVTkRMRRAJEh4KGklOVkFMSURfTUVESUFfQlVORExFX0VOVFJZEAoSFQoRSU5WQUxJRF9NSU1FX1RZUEUQCxIQCgxJTlZBTElEX1BBVEgQDBIZChVJTlZBTElEX1VSTF9SRUZFUkVOQ0UQDRIYChRNRURJQV9EQVRBX1RPT19MQVJHRRAOEiYKIk1JU1NJTkdfUFJJTUFSWV9NRURJQV9CVU5ETEVfRU5UUlkQDxIQCgxTRVJWRVJfRVJST1IQEBIRCg1TVE9SQUdFX0VSUk9SEBESHQoZU1dJRkZZX0JVTkRMRV9OT1RfQUxMT1dFRBASEhIKDlRPT19NQU5ZX0ZJTEVTEBMSEwoPVU5FWFBFQ1RFRF9TSVpFEBQSLworVU5TVVBQT1JURURfR09PR0xFX1dFQl9ERVNJR05FUl9FTlZJUk9OTUVOVBAVEh0KGVVOU1VQUE9SVEVEX0hUTUw1X0ZFQVRVUkUQFhIpCiVVUkxfSU5fTUVESUFfQlVORExFX05PVF9TU0xfQ09NUExJQU5UEBcSGwoXQ1VTVE9NX0VYSVRfTk9UX0FMTE9XRUQQGEL1AQojY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lcnJvcnNCFU1lZGlhQnVuZGxlRXJyb3JQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2Vycm9ycztlcnJvcnOiAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuRXJyb3JzygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XEVycm9yc+oCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible media bundle errors.
 *
 * @generated from message google.ads.googleads.v16.errors.MediaBundleErrorEnum
 */
export type MediaBundleErrorEnum = Message<"google.ads.googleads.v16.errors.MediaBundleErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.errors.MediaBundleErrorEnum.
 * Use `create(MediaBundleErrorEnumSchema)` to create a new message.
 */
export const MediaBundleErrorEnumSchema: GenMessage<MediaBundleErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_errors_media_bundle_error, 0);

/**
 * Enum describing possible media bundle errors.
 *
 * @generated from enum google.ads.googleads.v16.errors.MediaBundleErrorEnum.MediaBundleError
 */
export enum MediaBundleErrorEnum_MediaBundleError {
  /**
   * Enum unspecified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The received error code is not known in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * There was a problem with the request.
   *
   * @generated from enum value: BAD_REQUEST = 3;
   */
  BAD_REQUEST = 3,

  /**
   * HTML5 ads using DoubleClick Studio created ZIP files are not supported.
   *
   * @generated from enum value: DOUBLECLICK_BUNDLE_NOT_ALLOWED = 4;
   */
  DOUBLECLICK_BUNDLE_NOT_ALLOWED = 4,

  /**
   * Cannot reference URL external to the media bundle.
   *
   * @generated from enum value: EXTERNAL_URL_NOT_ALLOWED = 5;
   */
  EXTERNAL_URL_NOT_ALLOWED = 5,

  /**
   * Media bundle file is too large.
   *
   * @generated from enum value: FILE_TOO_LARGE = 6;
   */
  FILE_TOO_LARGE = 6,

  /**
   * ZIP file from Google Web Designer is not published.
   *
   * @generated from enum value: GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED = 7;
   */
  GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED = 7,

  /**
   * Input was invalid.
   *
   * @generated from enum value: INVALID_INPUT = 8;
   */
  INVALID_INPUT = 8,

  /**
   * There was a problem with the media bundle.
   *
   * @generated from enum value: INVALID_MEDIA_BUNDLE = 9;
   */
  INVALID_MEDIA_BUNDLE = 9,

  /**
   * There was a problem with one or more of the media bundle entries.
   *
   * @generated from enum value: INVALID_MEDIA_BUNDLE_ENTRY = 10;
   */
  INVALID_MEDIA_BUNDLE_ENTRY = 10,

  /**
   * The media bundle contains a file with an unknown mime type
   *
   * @generated from enum value: INVALID_MIME_TYPE = 11;
   */
  INVALID_MIME_TYPE = 11,

  /**
   * The media bundle contain an invalid asset path.
   *
   * @generated from enum value: INVALID_PATH = 12;
   */
  INVALID_PATH = 12,

  /**
   * HTML5 ad is trying to reference an asset not in .ZIP file
   *
   * @generated from enum value: INVALID_URL_REFERENCE = 13;
   */
  INVALID_URL_REFERENCE = 13,

  /**
   * Media data is too large.
   *
   * @generated from enum value: MEDIA_DATA_TOO_LARGE = 14;
   */
  MEDIA_DATA_TOO_LARGE = 14,

  /**
   * The media bundle contains no primary entry.
   *
   * @generated from enum value: MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY = 15;
   */
  MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY = 15,

  /**
   * There was an error on the server.
   *
   * @generated from enum value: SERVER_ERROR = 16;
   */
  SERVER_ERROR = 16,

  /**
   * The image could not be stored.
   *
   * @generated from enum value: STORAGE_ERROR = 17;
   */
  STORAGE_ERROR = 17,

  /**
   * Media bundle created with the Swiffy tool is not allowed.
   *
   * @generated from enum value: SWIFFY_BUNDLE_NOT_ALLOWED = 18;
   */
  SWIFFY_BUNDLE_NOT_ALLOWED = 18,

  /**
   * The media bundle contains too many files.
   *
   * @generated from enum value: TOO_MANY_FILES = 19;
   */
  TOO_MANY_FILES = 19,

  /**
   * The media bundle is not of legal dimensions.
   *
   * @generated from enum value: UNEXPECTED_SIZE = 20;
   */
  UNEXPECTED_SIZE = 20,

  /**
   * Google Web Designer not created for "Google Ads" environment.
   *
   * @generated from enum value: UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT = 21;
   */
  UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT = 21,

  /**
   * Unsupported HTML5 feature in HTML5 asset.
   *
   * @generated from enum value: UNSUPPORTED_HTML5_FEATURE = 22;
   */
  UNSUPPORTED_HTML5_FEATURE = 22,

  /**
   * URL in HTML5 entry is not ssl compliant.
   *
   * @generated from enum value: URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT = 23;
   */
  URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT = 23,

  /**
   * Custom exits not allowed in HTML5 entry.
   *
   * @generated from enum value: CUSTOM_EXIT_NOT_ALLOWED = 24;
   */
  CUSTOM_EXIT_NOT_ALLOWED = 24,
}

/**
 * Describes the enum google.ads.googleads.v16.errors.MediaBundleErrorEnum.MediaBundleError.
 */
export const MediaBundleErrorEnum_MediaBundleErrorSchema: GenEnum<MediaBundleErrorEnum_MediaBundleError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_errors_media_bundle_error, 0, 0);
