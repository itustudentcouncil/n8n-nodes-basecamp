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
// @generated from file google/ads/googleads/v16/enums/data_driven_model_status.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/data_driven_model_status.proto.
 */
export const file_google_ads_googleads_v16_enums_data_driven_model_status: GenFile = /*@__PURE__*/
  fileDesc("Cj1nb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvZGF0YV9kcml2ZW5fbW9kZWxfc3RhdHVzLnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMijgEKGURhdGFEcml2ZW5Nb2RlbFN0YXR1c0VudW0icQoVRGF0YURyaXZlbk1vZGVsU3RhdHVzEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEg0KCUFWQUlMQUJMRRACEgkKBVNUQUxFEAMSCwoHRVhQSVJFRBAEEhMKD05FVkVSX0dFTkVSQVRFRBAFQvQBCiJjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zQhpEYXRhRHJpdmVuTW9kZWxTdGF0dXNQcm90b1ABWkNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2VudW1zO2VudW1zogIDR0FBqgIeR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LkVudW1zygIeR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XEVudW1z6gIiR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpFbnVtc2IGcHJvdG8z");

/**
 * Container for enum indicating data driven model status.
 *
 * @generated from message google.ads.googleads.v16.enums.DataDrivenModelStatusEnum
 */
export type DataDrivenModelStatusEnum = Message<"google.ads.googleads.v16.enums.DataDrivenModelStatusEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.DataDrivenModelStatusEnum.
 * Use `create(DataDrivenModelStatusEnumSchema)` to create a new message.
 */
export const DataDrivenModelStatusEnumSchema: GenMessage<DataDrivenModelStatusEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_data_driven_model_status, 0);

/**
 * Enumerates data driven model statuses.
 *
 * @generated from enum google.ads.googleads.v16.enums.DataDrivenModelStatusEnum.DataDrivenModelStatus
 */
export enum DataDrivenModelStatusEnum_DataDrivenModelStatus {
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
   * The data driven model is available.
   *
   * @generated from enum value: AVAILABLE = 2;
   */
  AVAILABLE = 2,

  /**
   * The data driven model is stale. It hasn't been updated for at least 7
   * days. It is still being used, but will become expired if it does not get
   * updated for 30 days.
   *
   * @generated from enum value: STALE = 3;
   */
  STALE = 3,

  /**
   * The data driven model expired. It hasn't been updated for at least 30
   * days and cannot be used. Most commonly this is because there hasn't been
   * the required number of events in a recent 30-day period.
   *
   * @generated from enum value: EXPIRED = 4;
   */
  EXPIRED = 4,

  /**
   * The data driven model has never been generated. Most commonly this is
   * because there has never been the required number of events in any 30-day
   * period.
   *
   * @generated from enum value: NEVER_GENERATED = 5;
   */
  NEVER_GENERATED = 5,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.DataDrivenModelStatusEnum.DataDrivenModelStatus.
 */
export const DataDrivenModelStatusEnum_DataDrivenModelStatusSchema: GenEnum<DataDrivenModelStatusEnum_DataDrivenModelStatus> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_data_driven_model_status, 0, 0);
