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
// @generated from file google/ads/googleads/v16/enums/image_placeholder_field.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/image_placeholder_field.proto.
 */
export const file_google_ads_googleads_v16_enums_image_placeholder_field: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvaW1hZ2VfcGxhY2Vob2xkZXJfZmllbGQucHJvdG8SHmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcyJgChlJbWFnZVBsYWNlaG9sZGVyRmllbGRFbnVtIkMKFUltYWdlUGxhY2Vob2xkZXJGaWVsZBIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIMCghBU1NFVF9JRBACQvQBCiJjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zQhpJbWFnZVBsYWNlaG9sZGVyRmllbGRQcm90b1ABWkNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2VudW1zO2VudW1zogIDR0FBqgIeR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LkVudW1zygIeR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XEVudW1z6gIiR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpFbnVtc2IGcHJvdG8z");

/**
 * Values for Advertiser Provided Image placeholder fields.
 *
 * @generated from message google.ads.googleads.v16.enums.ImagePlaceholderFieldEnum
 */
export type ImagePlaceholderFieldEnum = Message<"google.ads.googleads.v16.enums.ImagePlaceholderFieldEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.ImagePlaceholderFieldEnum.
 * Use `create(ImagePlaceholderFieldEnumSchema)` to create a new message.
 */
export const ImagePlaceholderFieldEnumSchema: GenMessage<ImagePlaceholderFieldEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_image_placeholder_field, 0);

/**
 * Possible values for Advertiser Provided Image placeholder fields.
 *
 * @generated from enum google.ads.googleads.v16.enums.ImagePlaceholderFieldEnum.ImagePlaceholderField
 */
export enum ImagePlaceholderFieldEnum_ImagePlaceholderField {
  /**
   * Not specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Used for return value only. Represents value unknown in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Data Type: INT64. The asset ID of the image.
   *
   * @generated from enum value: ASSET_ID = 2;
   */
  ASSET_ID = 2,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.ImagePlaceholderFieldEnum.ImagePlaceholderField.
 */
export const ImagePlaceholderFieldEnum_ImagePlaceholderFieldSchema: GenEnum<ImagePlaceholderFieldEnum_ImagePlaceholderField> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_image_placeholder_field, 0, 0);
