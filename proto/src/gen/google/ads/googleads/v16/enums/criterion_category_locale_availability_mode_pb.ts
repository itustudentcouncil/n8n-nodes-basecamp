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
// @generated from file google/ads/googleads/v16/enums/criterion_category_locale_availability_mode.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/criterion_category_locale_availability_mode.proto.
 */
export const file_google_ads_googleads_v16_enums_criterion_category_locale_availability_mode: GenFile = /*@__PURE__*/
  fileDesc("ClBnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvY3JpdGVyaW9uX2NhdGVnb3J5X2xvY2FsZV9hdmFpbGFiaWxpdHlfbW9kZS5wcm90bxIeZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zIuEBCitDcml0ZXJpb25DYXRlZ29yeUxvY2FsZUF2YWlsYWJpbGl0eU1vZGVFbnVtIrEBCidDcml0ZXJpb25DYXRlZ29yeUxvY2FsZUF2YWlsYWJpbGl0eU1vZGUSDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESDwoLQUxMX0xPQ0FMRVMQAhIdChlDT1VOVFJZX0FORF9BTExfTEFOR1VBR0VTEAMSHgoaTEFOR1VBR0VfQU5EX0FMTF9DT1VOVFJJRVMQBBIYChRDT1VOVFJZX0FORF9MQU5HVUFHRRAFQoYCCiJjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zQixDcml0ZXJpb25DYXRlZ29yeUxvY2FsZUF2YWlsYWJpbGl0eU1vZGVQcm90b1ABWkNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2VudW1zO2VudW1zogIDR0FBqgIeR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LkVudW1zygIeR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XEVudW1z6gIiR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpFbnVtc2IGcHJvdG8z");

/**
 * Describes locale availability mode for a criterion availability - whether
 * it's available globally, or a particular country with all languages, or a
 * particular language with all countries, or a country-language pair.
 *
 * @generated from message google.ads.googleads.v16.enums.CriterionCategoryLocaleAvailabilityModeEnum
 */
export type CriterionCategoryLocaleAvailabilityModeEnum = Message<"google.ads.googleads.v16.enums.CriterionCategoryLocaleAvailabilityModeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.CriterionCategoryLocaleAvailabilityModeEnum.
 * Use `create(CriterionCategoryLocaleAvailabilityModeEnumSchema)` to create a new message.
 */
export const CriterionCategoryLocaleAvailabilityModeEnumSchema: GenMessage<CriterionCategoryLocaleAvailabilityModeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_criterion_category_locale_availability_mode, 0);

/**
 * Enum containing the possible CriterionCategoryLocaleAvailabilityMode.
 *
 * @generated from enum google.ads.googleads.v16.enums.CriterionCategoryLocaleAvailabilityModeEnum.CriterionCategoryLocaleAvailabilityMode
 */
export enum CriterionCategoryLocaleAvailabilityModeEnum_CriterionCategoryLocaleAvailabilityMode {
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
   * The category is available to campaigns of all locales.
   *
   * @generated from enum value: ALL_LOCALES = 2;
   */
  ALL_LOCALES = 2,

  /**
   * The category is available to campaigns within a list of countries,
   * regardless of language.
   *
   * @generated from enum value: COUNTRY_AND_ALL_LANGUAGES = 3;
   */
  COUNTRY_AND_ALL_LANGUAGES = 3,

  /**
   * The category is available to campaigns within a list of languages,
   * regardless of country.
   *
   * @generated from enum value: LANGUAGE_AND_ALL_COUNTRIES = 4;
   */
  LANGUAGE_AND_ALL_COUNTRIES = 4,

  /**
   * The category is available to campaigns within a list of country, language
   * pairs.
   *
   * @generated from enum value: COUNTRY_AND_LANGUAGE = 5;
   */
  COUNTRY_AND_LANGUAGE = 5,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.CriterionCategoryLocaleAvailabilityModeEnum.CriterionCategoryLocaleAvailabilityMode.
 */
export const CriterionCategoryLocaleAvailabilityModeEnum_CriterionCategoryLocaleAvailabilityModeSchema: GenEnum<CriterionCategoryLocaleAvailabilityModeEnum_CriterionCategoryLocaleAvailabilityMode> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_criterion_category_locale_availability_mode, 0, 0);
