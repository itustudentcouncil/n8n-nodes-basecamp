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
// @generated from file google/ads/googleads/v16/enums/campaign_experiment_type.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/campaign_experiment_type.proto.
 */
export const file_google_ads_googleads_v16_enums_campaign_experiment_type: GenFile = /*@__PURE__*/
  fileDesc("Cj1nb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvY2FtcGFpZ25fZXhwZXJpbWVudF90eXBlLnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMieQoaQ2FtcGFpZ25FeHBlcmltZW50VHlwZUVudW0iWwoWQ2FtcGFpZ25FeHBlcmltZW50VHlwZRIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIICgRCQVNFEAISCQoFRFJBRlQQAxIOCgpFWFBFUklNRU5UEARC9QEKImNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXNCG0NhbXBhaWduRXhwZXJpbWVudFR5cGVQcm90b1ABWkNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2VudW1zO2VudW1zogIDR0FBqgIeR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LkVudW1zygIeR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XEVudW1z6gIiR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpFbnVtc2IGcHJvdG8z");

/**
 * Container for enum describing campaign experiment type.
 *
 * @generated from message google.ads.googleads.v16.enums.CampaignExperimentTypeEnum
 */
export type CampaignExperimentTypeEnum = Message<"google.ads.googleads.v16.enums.CampaignExperimentTypeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.CampaignExperimentTypeEnum.
 * Use `create(CampaignExperimentTypeEnumSchema)` to create a new message.
 */
export const CampaignExperimentTypeEnumSchema: GenMessage<CampaignExperimentTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_campaign_experiment_type, 0);

/**
 * Indicates if this campaign is a normal campaign,
 * a draft campaign, or an experiment campaign.
 *
 * @generated from enum google.ads.googleads.v16.enums.CampaignExperimentTypeEnum.CampaignExperimentType
 */
export enum CampaignExperimentTypeEnum_CampaignExperimentType {
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
   * This is a regular campaign.
   *
   * @generated from enum value: BASE = 2;
   */
  BASE = 2,

  /**
   * This is a draft version of a campaign.
   * It has some modifications from a base campaign,
   * but it does not serve or accrue metrics.
   *
   * @generated from enum value: DRAFT = 3;
   */
  DRAFT = 3,

  /**
   * This is an experiment version of a campaign.
   * It has some modifications from a base campaign,
   * and a percentage of traffic is being diverted
   * from the BASE campaign to this experiment campaign.
   *
   * @generated from enum value: EXPERIMENT = 4;
   */
  EXPERIMENT = 4,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.CampaignExperimentTypeEnum.CampaignExperimentType.
 */
export const CampaignExperimentTypeEnum_CampaignExperimentTypeSchema: GenEnum<CampaignExperimentTypeEnum_CampaignExperimentType> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_campaign_experiment_type, 0, 0);
