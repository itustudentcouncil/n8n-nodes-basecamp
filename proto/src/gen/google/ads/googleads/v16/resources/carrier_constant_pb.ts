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
// @generated from file google/ads/googleads/v16/resources/carrier_constant.proto (package google.ads.googleads.v16.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/resources/carrier_constant.proto.
 */
export const file_google_ads_googleads_v16_resources_carrier_constant: GenFile = /*@__PURE__*/
  fileDesc("Cjlnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzL2NhcnJpZXJfY29uc3RhbnQucHJvdG8SImdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMimQIKD0NhcnJpZXJDb25zdGFudBJHCg1yZXNvdXJjZV9uYW1lGAEgASgJQjDgQQP6QSoKKGdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9DYXJyaWVyQ29uc3RhbnQSFAoCaWQYBSABKANCA+BBA0gAiAEBEhYKBG5hbWUYBiABKAlCA+BBA0gBiAEBEh4KDGNvdW50cnlfY29kZRgHIAEoCUID4EEDSAKIAQE6TupBSwooZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0NhcnJpZXJDb25zdGFudBIfY2FycmllckNvbnN0YW50cy97Y3JpdGVyaW9uX2lkfUIFCgNfaWRCBwoFX25hbWVCDwoNX2NvdW50cnlfY29kZUKGAgomY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXNCFENhcnJpZXJDb25zdGFudFByb3RvUAFaS2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzO3Jlc291cmNlc6ICA0dBQaoCIkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNi5SZXNvdXJjZXPKAiJHb29nbGVcQWRzXEdvb2dsZUFkc1xWMTZcUmVzb3VyY2Vz6gImR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpSZXNvdXJjZXNiBnByb3RvMw", [file_google_api_field_behavior, file_google_api_resource]);

/**
 * A carrier criterion that can be used in campaign targeting.
 *
 * @generated from message google.ads.googleads.v16.resources.CarrierConstant
 */
export type CarrierConstant = Message<"google.ads.googleads.v16.resources.CarrierConstant"> & {
  /**
   * Output only. The resource name of the carrier criterion.
   * Carrier criterion resource names have the form:
   *
   * `carrierConstants/{criterion_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The ID of the carrier criterion.
   *
   * @generated from field: optional int64 id = 5;
   */
  id?: bigint;

  /**
   * Output only. The full name of the carrier in English.
   *
   * @generated from field: optional string name = 6;
   */
  name?: string;

  /**
   * Output only. The country code of the country where the carrier is located,
   * for example, "AR", "FR", etc.
   *
   * @generated from field: optional string country_code = 7;
   */
  countryCode?: string;
};

/**
 * Describes the message google.ads.googleads.v16.resources.CarrierConstant.
 * Use `create(CarrierConstantSchema)` to create a new message.
 */
export const CarrierConstantSchema: GenMessage<CarrierConstant> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_carrier_constant, 0);
