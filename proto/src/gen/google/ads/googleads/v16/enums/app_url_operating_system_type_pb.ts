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
// @generated from file google/ads/googleads/v16/enums/app_url_operating_system_type.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/app_url_operating_system_type.proto.
 */
export const file_google_ads_googleads_v16_enums_app_url_operating_system_type: GenFile = /*@__PURE__*/
  fileDesc("CkJnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvYXBwX3VybF9vcGVyYXRpbmdfc3lzdGVtX3R5cGUucHJvdG8SHmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcyJwCh1BcHBVcmxPcGVyYXRpbmdTeXN0ZW1UeXBlRW51bSJPChlBcHBVcmxPcGVyYXRpbmdTeXN0ZW1UeXBlEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEgcKA0lPUxACEgsKB0FORFJPSUQQA0L4AQoiY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtc0IeQXBwVXJsT3BlcmF0aW5nU3lzdGVtVHlwZVByb3RvUAFaQ2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTYvZW51bXM7ZW51bXOiAgNHQUGqAh5Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuRW51bXPKAh5Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTZcRW51bXPqAiJHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OkVudW1zYgZwcm90bzM");

/**
 * The possible OS types for a deeplink AppUrl.
 *
 * @generated from message google.ads.googleads.v16.enums.AppUrlOperatingSystemTypeEnum
 */
export type AppUrlOperatingSystemTypeEnum = Message<"google.ads.googleads.v16.enums.AppUrlOperatingSystemTypeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.AppUrlOperatingSystemTypeEnum.
 * Use `create(AppUrlOperatingSystemTypeEnumSchema)` to create a new message.
 */
export const AppUrlOperatingSystemTypeEnumSchema: GenMessage<AppUrlOperatingSystemTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_app_url_operating_system_type, 0);

/**
 * Operating System
 *
 * @generated from enum google.ads.googleads.v16.enums.AppUrlOperatingSystemTypeEnum.AppUrlOperatingSystemType
 */
export enum AppUrlOperatingSystemTypeEnum_AppUrlOperatingSystemType {
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
   * The Apple IOS operating system.
   *
   * @generated from enum value: IOS = 2;
   */
  IOS = 2,

  /**
   * The Android operating system.
   *
   * @generated from enum value: ANDROID = 3;
   */
  ANDROID = 3,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.AppUrlOperatingSystemTypeEnum.AppUrlOperatingSystemType.
 */
export const AppUrlOperatingSystemTypeEnum_AppUrlOperatingSystemTypeSchema: GenEnum<AppUrlOperatingSystemTypeEnum_AppUrlOperatingSystemType> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_app_url_operating_system_type, 0, 0);
