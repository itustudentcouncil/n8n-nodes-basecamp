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
// @generated from file google/ads/googleads/v17/resources/customizer_attribute.proto (package google.ads.googleads.v17.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { CustomizerAttributeStatusEnum_CustomizerAttributeStatus } from "../enums/customizer_attribute_status_pb";
import { file_google_ads_googleads_v17_enums_customizer_attribute_status } from "../enums/customizer_attribute_status_pb";
import type { CustomizerAttributeTypeEnum_CustomizerAttributeType } from "../enums/customizer_attribute_type_pb";
import { file_google_ads_googleads_v17_enums_customizer_attribute_type } from "../enums/customizer_attribute_type_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/resources/customizer_attribute.proto.
 */
export const file_google_ads_googleads_v17_resources_customizer_attribute: GenFile = /*@__PURE__*/
  fileDesc("Cj1nb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvcmVzb3VyY2VzL2N1c3RvbWl6ZXJfYXR0cmlidXRlLnByb3RvEiJnb29nbGUuYWRzLmdvb2dsZWFkcy52MTcucmVzb3VyY2VzItoDChNDdXN0b21pemVyQXR0cmlidXRlEksKDXJlc291cmNlX25hbWUYASABKAlCNOBBBfpBLgosZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0N1c3RvbWl6ZXJBdHRyaWJ1dGUSDwoCaWQYAiABKANCA+BBAxIUCgRuYW1lGAMgASgJQgbgQQLgQQUSZgoEdHlwZRgEIAEoDjJTLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtcy5DdXN0b21pemVyQXR0cmlidXRlVHlwZUVudW0uQ3VzdG9taXplckF0dHJpYnV0ZVR5cGVCA+BBBRJsCgZzdGF0dXMYBSABKA4yVy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXMuQ3VzdG9taXplckF0dHJpYnV0ZVN0YXR1c0VudW0uQ3VzdG9taXplckF0dHJpYnV0ZVN0YXR1c0ID4EEDOnnqQXYKLGdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9DdXN0b21pemVyQXR0cmlidXRlEkZjdXN0b21lcnMve2N1c3RvbWVyX2lkfS9jdXN0b21pemVyQXR0cmlidXRlcy97Y3VzdG9taXplcl9hdHRyaWJ1dGVfaWR9QooCCiZjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlc0IYQ3VzdG9taXplckF0dHJpYnV0ZVByb3RvUAFaS2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvcmVzb3VyY2VzO3Jlc291cmNlc6ICA0dBQaoCIkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5SZXNvdXJjZXPKAiJHb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcUmVzb3VyY2Vz6gImR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE3OjpSZXNvdXJjZXNiBnByb3RvMw", [file_google_ads_googleads_v17_enums_customizer_attribute_status, file_google_ads_googleads_v17_enums_customizer_attribute_type, file_google_api_field_behavior, file_google_api_resource]);

/**
 * A customizer attribute.
 * Use CustomerCustomizer, CampaignCustomizer, AdGroupCustomizer, or
 * AdGroupCriterionCustomizer to associate a customizer attribute and
 * set its value at the customer, campaign, ad group, or ad group criterion
 * level, respectively.
 *
 * @generated from message google.ads.googleads.v17.resources.CustomizerAttribute
 */
export type CustomizerAttribute = Message<"google.ads.googleads.v17.resources.CustomizerAttribute"> & {
  /**
   * Immutable. The resource name of the customizer attribute.
   * Customizer Attribute resource names have the form:
   *
   * `customers/{customer_id}/customizerAttributes/{customizer_attribute_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The ID of the customizer attribute.
   *
   * @generated from field: int64 id = 2;
   */
  id: bigint;

  /**
   * Required. Immutable. Name of the customizer attribute. Required. It must
   * have a minimum length of 1 and maximum length of 40. Name of an enabled
   * customizer attribute must be unique (case insensitive).
   *
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * Immutable. The type of the customizer attribute.
   *
   * @generated from field: google.ads.googleads.v17.enums.CustomizerAttributeTypeEnum.CustomizerAttributeType type = 4;
   */
  type: CustomizerAttributeTypeEnum_CustomizerAttributeType;

  /**
   * Output only. The status of the customizer attribute.
   *
   * @generated from field: google.ads.googleads.v17.enums.CustomizerAttributeStatusEnum.CustomizerAttributeStatus status = 5;
   */
  status: CustomizerAttributeStatusEnum_CustomizerAttributeStatus;
};

/**
 * Describes the message google.ads.googleads.v17.resources.CustomizerAttribute.
 * Use `create(CustomizerAttributeSchema)` to create a new message.
 */
export const CustomizerAttributeSchema: GenMessage<CustomizerAttribute> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_customizer_attribute, 0);
