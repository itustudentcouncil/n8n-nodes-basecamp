// Copyright 2024 Google LLC
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
// @generated from file google/ads/googleads/v17/errors/automatically_created_asset_removal_error.proto (package google.ads.googleads.v17.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/errors/automatically_created_asset_removal_error.proto.
 */
export const file_google_ads_googleads_v17_errors_automatically_created_asset_removal_error: GenFile = /*@__PURE__*/
  fileDesc("Ck9nb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzL2F1dG9tYXRpY2FsbHlfY3JlYXRlZF9hc3NldF9yZW1vdmFsX2Vycm9yLnByb3RvEh9nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZXJyb3JzIoYCCilBdXRvbWF0aWNhbGx5Q3JlYXRlZEFzc2V0UmVtb3ZhbEVycm9yRW51bSLYAQolQXV0b21hdGljYWxseUNyZWF0ZWRBc3NldFJlbW92YWxFcnJvchIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIVChFBRF9ET0VTX05PVF9FWElTVBACEhMKD0lOVkFMSURfQURfVFlQRRADEhgKFEFTU0VUX0RPRVNfTk9UX0VYSVNUEAQSIwofQVNTRVRfRklFTERfVFlQRV9ET0VTX05PVF9NQVRDSBAFEiYKIk5PVF9BTl9BVVRPTUFUSUNBTExZX0NSRUFURURfQVNTRVQQBkKKAgojY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lcnJvcnNCKkF1dG9tYXRpY2FsbHlDcmVhdGVkQXNzZXRSZW1vdmFsRXJyb3JQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L2Vycm9ycztlcnJvcnOiAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuRXJyb3JzygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XEVycm9yc+oCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible automatically created asset removal
 * errors.
 *
 * @generated from message google.ads.googleads.v17.errors.AutomaticallyCreatedAssetRemovalErrorEnum
 */
export type AutomaticallyCreatedAssetRemovalErrorEnum = Message<"google.ads.googleads.v17.errors.AutomaticallyCreatedAssetRemovalErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.errors.AutomaticallyCreatedAssetRemovalErrorEnum.
 * Use `create(AutomaticallyCreatedAssetRemovalErrorEnumSchema)` to create a new message.
 */
export const AutomaticallyCreatedAssetRemovalErrorEnumSchema: GenMessage<AutomaticallyCreatedAssetRemovalErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_errors_automatically_created_asset_removal_error, 0);

/**
 * Enum describing possible automatically created asset removal errors.
 *
 * @generated from enum google.ads.googleads.v17.errors.AutomaticallyCreatedAssetRemovalErrorEnum.AutomaticallyCreatedAssetRemovalError
 */
export enum AutomaticallyCreatedAssetRemovalErrorEnum_AutomaticallyCreatedAssetRemovalError {
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
   * The ad does not exist.
   *
   * @generated from enum value: AD_DOES_NOT_EXIST = 2;
   */
  AD_DOES_NOT_EXIST = 2,

  /**
   * Ad type is not supported. Only Responsive Search Ad type is supported.
   *
   * @generated from enum value: INVALID_AD_TYPE = 3;
   */
  INVALID_AD_TYPE = 3,

  /**
   * The asset does not exist.
   *
   * @generated from enum value: ASSET_DOES_NOT_EXIST = 4;
   */
  ASSET_DOES_NOT_EXIST = 4,

  /**
   * The asset field type does not match.
   *
   * @generated from enum value: ASSET_FIELD_TYPE_DOES_NOT_MATCH = 5;
   */
  ASSET_FIELD_TYPE_DOES_NOT_MATCH = 5,

  /**
   * Not an automatically created asset.
   *
   * @generated from enum value: NOT_AN_AUTOMATICALLY_CREATED_ASSET = 6;
   */
  NOT_AN_AUTOMATICALLY_CREATED_ASSET = 6,
}

/**
 * Describes the enum google.ads.googleads.v17.errors.AutomaticallyCreatedAssetRemovalErrorEnum.AutomaticallyCreatedAssetRemovalError.
 */
export const AutomaticallyCreatedAssetRemovalErrorEnum_AutomaticallyCreatedAssetRemovalErrorSchema: GenEnum<AutomaticallyCreatedAssetRemovalErrorEnum_AutomaticallyCreatedAssetRemovalError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_errors_automatically_created_asset_removal_error, 0, 0);
