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
// @generated from file google/ads/googleads/v16/enums/offline_conversion_diagnostic_status_enum.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/offline_conversion_diagnostic_status_enum.proto.
 */
export const file_google_ads_googleads_v16_enums_offline_conversion_diagnostic_status_enum: GenFile = /*@__PURE__*/
  fileDesc("Ck5nb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvb2ZmbGluZV9jb252ZXJzaW9uX2RpYWdub3N0aWNfc3RhdHVzX2VudW0ucHJvdG8SHmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcyKvAQolT2ZmbGluZUNvbnZlcnNpb25EaWFnbm9zdGljU3RhdHVzRW51bSKFAQohT2ZmbGluZUNvbnZlcnNpb25EaWFnbm9zdGljU3RhdHVzEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEg0KCUVYQ0VMTEVOVBACEggKBEdPT0QQAxITCg9ORUVEU19BVFRFTlRJT04QBBIUChBOT19SRUNFTlRfVVBMT0FEEAZChAIKImNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXNCKk9mZmxpbmVDb252ZXJzaW9uRGlhZ25vc3RpY1N0YXR1c0VudW1Qcm90b1ABWkNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2VudW1zO2VudW1zogIDR0FBqgIeR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LkVudW1zygIeR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XEVudW1z6gIiR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpFbnVtc2IGcHJvdG8z");

/**
 * All possible statuses for oci diagnostics.
 *
 * @generated from message google.ads.googleads.v16.enums.OfflineConversionDiagnosticStatusEnum
 */
export type OfflineConversionDiagnosticStatusEnum = Message<"google.ads.googleads.v16.enums.OfflineConversionDiagnosticStatusEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.OfflineConversionDiagnosticStatusEnum.
 * Use `create(OfflineConversionDiagnosticStatusEnumSchema)` to create a new message.
 */
export const OfflineConversionDiagnosticStatusEnumSchema: GenMessage<OfflineConversionDiagnosticStatusEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_offline_conversion_diagnostic_status_enum, 0);

/**
 * Possible statuses of the offline ingestion setup.
 *
 * @generated from enum google.ads.googleads.v16.enums.OfflineConversionDiagnosticStatusEnum.OfflineConversionDiagnosticStatus
 */
export enum OfflineConversionDiagnosticStatusEnum_OfflineConversionDiagnosticStatus {
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
   * Your offline data ingestion setup is active and optimal for downstream
   * processing.
   *
   * @generated from enum value: EXCELLENT = 2;
   */
  EXCELLENT = 2,

  /**
   * Your offline ingestion setup is active, but there are further
   * improvements you could make. See alerts.
   *
   * @generated from enum value: GOOD = 3;
   */
  GOOD = 3,

  /**
   * Your offline ingestion setup is active, but there are errors that require
   * your attention. See alerts.
   *
   * @generated from enum value: NEEDS_ATTENTION = 4;
   */
  NEEDS_ATTENTION = 4,

  /**
   * Your offline ingestion setup has not received data in the last 28 days,
   * there may be something wrong.
   *
   * @generated from enum value: NO_RECENT_UPLOAD = 6;
   */
  NO_RECENT_UPLOAD = 6,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.OfflineConversionDiagnosticStatusEnum.OfflineConversionDiagnosticStatus.
 */
export const OfflineConversionDiagnosticStatusEnum_OfflineConversionDiagnosticStatusSchema: GenEnum<OfflineConversionDiagnosticStatusEnum_OfflineConversionDiagnosticStatus> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_offline_conversion_diagnostic_status_enum, 0, 0);
