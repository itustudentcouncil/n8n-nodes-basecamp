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
// @generated from file google/ads/searchads360/v0/errors/custom_column_error.proto (package google.ads.searchads360.v0.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/errors/custom_column_error.proto.
 */
export const file_google_ads_searchads360_v0_errors_custom_column_error: GenFile = /*@__PURE__*/
  fileDesc("Cjtnb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9lcnJvcnMvY3VzdG9tX2NvbHVtbl9lcnJvci5wcm90bxIhZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZXJyb3JzIogBChVDdXN0b21Db2x1bW5FcnJvckVudW0ibwoRQ3VzdG9tQ29sdW1uRXJyb3ISDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESGwoXQ1VTVE9NX0NPTFVNTl9OT1RfRk9VTkQQAhIfChtDVVNUT01fQ09MVU1OX05PVF9BVkFJTEFCTEUQA0KEAgolY29tLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmVycm9yc0IWQ3VzdG9tQ29sdW1uRXJyb3JQcm90b1ABWkdnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9zZWFyY2hhZHMzNjAvdjAvZXJyb3JzO2Vycm9yc6ICB0dBU0EzNjCqAiFHb29nbGUuQWRzLlNlYXJjaEFkczM2MC5WMC5FcnJvcnPKAiFHb29nbGVcQWRzXFNlYXJjaEFkczM2MFxWMFxFcnJvcnPqAiVHb29nbGU6OkFkczo6U2VhcmNoQWRzMzYwOjpWMDo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible custom column errors.
 *
 * @generated from message google.ads.searchads360.v0.errors.CustomColumnErrorEnum
 */
export type CustomColumnErrorEnum = Message<"google.ads.searchads360.v0.errors.CustomColumnErrorEnum"> & {
};

/**
 * Describes the message google.ads.searchads360.v0.errors.CustomColumnErrorEnum.
 * Use `create(CustomColumnErrorEnumSchema)` to create a new message.
 */
export const CustomColumnErrorEnumSchema: GenMessage<CustomColumnErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_errors_custom_column_error, 0);

/**
 * Enum describing possible custom column errors.
 *
 * @generated from enum google.ads.searchads360.v0.errors.CustomColumnErrorEnum.CustomColumnError
 */
export enum CustomColumnErrorEnum_CustomColumnError {
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
   * The custom column has not been found.
   *
   * @generated from enum value: CUSTOM_COLUMN_NOT_FOUND = 2;
   */
  CUSTOM_COLUMN_NOT_FOUND = 2,

  /**
   * The custom column is not available.
   *
   * @generated from enum value: CUSTOM_COLUMN_NOT_AVAILABLE = 3;
   */
  CUSTOM_COLUMN_NOT_AVAILABLE = 3,
}

/**
 * Describes the enum google.ads.searchads360.v0.errors.CustomColumnErrorEnum.CustomColumnError.
 */
export const CustomColumnErrorEnum_CustomColumnErrorSchema: GenEnum<CustomColumnErrorEnum_CustomColumnError> = /*@__PURE__*/
  enumDesc(file_google_ads_searchads360_v0_errors_custom_column_error, 0, 0);
