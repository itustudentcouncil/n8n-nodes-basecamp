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
// @generated from file google/ads/googleads/v17/enums/month_of_year.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/month_of_year.proto.
 */
export const file_google_ads_googleads_v17_enums_month_of_year: GenFile = /*@__PURE__*/
  fileDesc("CjJnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvbW9udGhfb2ZfeWVhci5wcm90bxIeZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmVudW1zItEBCg9Nb250aE9mWWVhckVudW0ivQEKC01vbnRoT2ZZZWFyEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEgsKB0pBTlVBUlkQAhIMCghGRUJSVUFSWRADEgkKBU1BUkNIEAQSCQoFQVBSSUwQBRIHCgNNQVkQBhIICgRKVU5FEAcSCAoESlVMWRAIEgoKBkFVR1VTVBAJEg0KCVNFUFRFTUJFUhAKEgsKB09DVE9CRVIQCxIMCghOT1ZFTUJFUhAMEgwKCERFQ0VNQkVSEA1C6gEKImNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXNCEE1vbnRoT2ZZZWFyUHJvdG9QAVpDZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNy9lbnVtcztlbnVtc6ICA0dBQaoCHkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5FbnVtc8oCHkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxN1xFbnVtc+oCIkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RW51bXNiBnByb3RvMw");

/**
 * Container for enumeration of months of the year, for example, "January".
 *
 * @generated from message google.ads.googleads.v17.enums.MonthOfYearEnum
 */
export type MonthOfYearEnum = Message<"google.ads.googleads.v17.enums.MonthOfYearEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.MonthOfYearEnum.
 * Use `create(MonthOfYearEnumSchema)` to create a new message.
 */
export const MonthOfYearEnumSchema: GenMessage<MonthOfYearEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_month_of_year, 0);

/**
 * Enumerates months of the year, for example, "January".
 *
 * @generated from enum google.ads.googleads.v17.enums.MonthOfYearEnum.MonthOfYear
 */
export enum MonthOfYearEnum_MonthOfYear {
  /**
   * Not specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The value is unknown in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * January.
   *
   * @generated from enum value: JANUARY = 2;
   */
  JANUARY = 2,

  /**
   * February.
   *
   * @generated from enum value: FEBRUARY = 3;
   */
  FEBRUARY = 3,

  /**
   * March.
   *
   * @generated from enum value: MARCH = 4;
   */
  MARCH = 4,

  /**
   * April.
   *
   * @generated from enum value: APRIL = 5;
   */
  APRIL = 5,

  /**
   * May.
   *
   * @generated from enum value: MAY = 6;
   */
  MAY = 6,

  /**
   * June.
   *
   * @generated from enum value: JUNE = 7;
   */
  JUNE = 7,

  /**
   * July.
   *
   * @generated from enum value: JULY = 8;
   */
  JULY = 8,

  /**
   * August.
   *
   * @generated from enum value: AUGUST = 9;
   */
  AUGUST = 9,

  /**
   * September.
   *
   * @generated from enum value: SEPTEMBER = 10;
   */
  SEPTEMBER = 10,

  /**
   * October.
   *
   * @generated from enum value: OCTOBER = 11;
   */
  OCTOBER = 11,

  /**
   * November.
   *
   * @generated from enum value: NOVEMBER = 12;
   */
  NOVEMBER = 12,

  /**
   * December.
   *
   * @generated from enum value: DECEMBER = 13;
   */
  DECEMBER = 13,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.MonthOfYearEnum.MonthOfYear.
 */
export const MonthOfYearEnum_MonthOfYearSchema: GenEnum<MonthOfYearEnum_MonthOfYear> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_month_of_year, 0, 0);
