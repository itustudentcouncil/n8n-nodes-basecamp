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
// @generated from file google/ads/admanager/v1/company_type_enum.proto (package google.ads.admanager.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/admanager/v1/company_type_enum.proto.
 */
export const file_google_ads_admanager_v1_company_type_enum: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvYWRzL2FkbWFuYWdlci92MS9jb21wYW55X3R5cGVfZW51bS5wcm90bxIXZ29vZ2xlLmFkcy5hZG1hbmFnZXIudjEirQEKD0NvbXBhbnlUeXBlRW51bSKZAQoLQ29tcGFueVR5cGUSHAoYQ09NUEFOWV9UWVBFX1VOU1BFQ0lGSUVEEAASDgoKQURWRVJUSVNFUhABEhQKEEhPVVNFX0FEVkVSVElTRVIQAhIKCgZBR0VOQ1kQAxIQCgxIT1VTRV9BR0VOQ1kQBBIOCgpBRF9ORVRXT1JLEAUSGAoUVklFV0FCSUxJVFlfUFJPVklERVIQBkKxAQobY29tLmdvb2dsZS5hZHMuYWRtYW5hZ2VyLnYxQhRDb21wYW55VHlwZUVudW1Qcm90b1ABWkBnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9hZG1hbmFnZXIvdjE7YWRtYW5hZ2VyogIDR0FBqgIXR29vZ2xlLkFkcy5BZE1hbmFnZXIuVjHKAhdHb29nbGVcQWRzXEFkTWFuYWdlclxWMWIGcHJvdG8z");

/**
 * Wrapper message for
 * [CompanyType][google.ads.admanager.v1.CompanyTypeEnum.CompanyType]
 *
 * @generated from message google.ads.admanager.v1.CompanyTypeEnum
 */
export type CompanyTypeEnum = Message<"google.ads.admanager.v1.CompanyTypeEnum"> & {
};

/**
 * Describes the message google.ads.admanager.v1.CompanyTypeEnum.
 * Use `create(CompanyTypeEnumSchema)` to create a new message.
 */
export const CompanyTypeEnumSchema: GenMessage<CompanyTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_admanager_v1_company_type_enum, 0);

/**
 * The type of a company.
 *
 * @generated from enum google.ads.admanager.v1.CompanyTypeEnum.CompanyType
 */
export enum CompanyTypeEnum_CompanyType {
  /**
   * No value specified
   *
   * @generated from enum value: COMPANY_TYPE_UNSPECIFIED = 0;
   */
  COMPANY_TYPE_UNSPECIFIED = 0,

  /**
   * A business entity that purchases ad inventory.
   *
   * @generated from enum value: ADVERTISER = 1;
   */
  ADVERTISER = 1,

  /**
   * A company representing the publisher's own advertiser for house ads.
   *
   * @generated from enum value: HOUSE_ADVERTISER = 2;
   */
  HOUSE_ADVERTISER = 2,

  /**
   * An organization that manages ad accounts and offers services, such as ad
   * creation, placement, and management to advertisers.
   *
   * @generated from enum value: AGENCY = 3;
   */
  AGENCY = 3,

  /**
   * A company representing the publisher's own agency.
   *
   * @generated from enum value: HOUSE_AGENCY = 4;
   */
  HOUSE_AGENCY = 4,

  /**
   * A company representing multiple advertisers and agencies.
   *
   * @generated from enum value: AD_NETWORK = 5;
   */
  AD_NETWORK = 5,

  /**
   * A third-party that measures creative viewability.
   *
   * @generated from enum value: VIEWABILITY_PROVIDER = 6;
   */
  VIEWABILITY_PROVIDER = 6,
}

/**
 * Describes the enum google.ads.admanager.v1.CompanyTypeEnum.CompanyType.
 */
export const CompanyTypeEnum_CompanyTypeSchema: GenEnum<CompanyTypeEnum_CompanyType> = /*@__PURE__*/
  enumDesc(file_google_ads_admanager_v1_company_type_enum, 0, 0);
