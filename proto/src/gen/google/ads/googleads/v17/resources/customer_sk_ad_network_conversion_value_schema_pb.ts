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
// @generated from file google/ads/googleads/v17/resources/customer_sk_ad_network_conversion_value_schema.proto (package google.ads.googleads.v17.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { SkAdNetworkCoarseConversionValueEnum_SkAdNetworkCoarseConversionValue } from "../enums/sk_ad_network_coarse_conversion_value_pb";
import { file_google_ads_googleads_v17_enums_sk_ad_network_coarse_conversion_value } from "../enums/sk_ad_network_coarse_conversion_value_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/resources/customer_sk_ad_network_conversion_value_schema.proto.
 */
export const file_google_ads_googleads_v17_resources_customer_sk_ad_network_conversion_value_schema: GenFile = /*@__PURE__*/
  fileDesc("Cldnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvcmVzb3VyY2VzL2N1c3RvbWVyX3NrX2FkX25ldHdvcmtfY29udmVyc2lvbl92YWx1ZV9zY2hlbWEucHJvdG8SImdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXMi+RgKKEN1c3RvbWVyU2tBZE5ldHdvcmtDb252ZXJzaW9uVmFsdWVTY2hlbWESYAoNcmVzb3VyY2VfbmFtZRgBIAEoCUJJ4EED+kFDCkFnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vQ3VzdG9tZXJTa0FkTmV0d29ya0NvbnZlcnNpb25WYWx1ZVNjaGVtYRKCAQoGc2NoZW1hGAIgASgLMm0uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5DdXN0b21lclNrQWROZXR3b3JrQ29udmVyc2lvblZhbHVlU2NoZW1hLlNrQWROZXR3b3JrQ29udmVyc2lvblZhbHVlU2NoZW1hQgPgQQMaxhUKIFNrQWROZXR3b3JrQ29udmVyc2lvblZhbHVlU2NoZW1hEhYKBmFwcF9pZBgBIAEoCUIG4EEC4EEDEiUKGG1lYXN1cmVtZW50X3dpbmRvd19ob3VycxgCIAEoBUID4EEDEsYBCiZmaW5lX2dyYWluZWRfY29udmVyc2lvbl92YWx1ZV9tYXBwaW5ncxgDIAMoCzKQAS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcucmVzb3VyY2VzLkN1c3RvbWVyU2tBZE5ldHdvcmtDb252ZXJzaW9uVmFsdWVTY2hlbWEuU2tBZE5ldHdvcmtDb252ZXJzaW9uVmFsdWVTY2hlbWEuRmluZUdyYWluZWRDb252ZXJzaW9uVmFsdWVNYXBwaW5nc0ID4EEDEp0BChFwb3N0YmFja19tYXBwaW5ncxgEIAMoCzJ9Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXMuQ3VzdG9tZXJTa0FkTmV0d29ya0NvbnZlcnNpb25WYWx1ZVNjaGVtYS5Ta0FkTmV0d29ya0NvbnZlcnNpb25WYWx1ZVNjaGVtYS5Qb3N0YmFja01hcHBpbmdCA+BBAxr/AQoiRmluZUdyYWluZWRDb252ZXJzaW9uVmFsdWVNYXBwaW5ncxIqCh1maW5lX2dyYWluZWRfY29udmVyc2lvbl92YWx1ZRgBIAEoBUID4EEDEqwBChhjb252ZXJzaW9uX3ZhbHVlX21hcHBpbmcYAiABKAsyhAEuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5DdXN0b21lclNrQWROZXR3b3JrQ29udmVyc2lvblZhbHVlU2NoZW1hLlNrQWROZXR3b3JrQ29udmVyc2lvblZhbHVlU2NoZW1hLkNvbnZlcnNpb25WYWx1ZU1hcHBpbmdCA+BBAxqLBAoPUG9zdGJhY2tNYXBwaW5nEiQKF3Bvc3RiYWNrX3NlcXVlbmNlX2luZGV4GAEgASgFQgPgQQMSygEKKGNvYXJzZV9ncmFpbmVkX2NvbnZlcnNpb25fdmFsdWVfbWFwcGluZ3MYAiABKAsykgEuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5DdXN0b21lclNrQWROZXR3b3JrQ29udmVyc2lvblZhbHVlU2NoZW1hLlNrQWROZXR3b3JrQ29udmVyc2lvblZhbHVlU2NoZW1hLkNvYXJzZUdyYWluZWRDb252ZXJzaW9uVmFsdWVNYXBwaW5nc0ID4EEDEpkBCiNsb2NrX3dpbmRvd19jb2Fyc2VfY29udmVyc2lvbl92YWx1ZRgDIAEoDjJlLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtcy5Ta0FkTmV0d29ya0NvYXJzZUNvbnZlcnNpb25WYWx1ZUVudW0uU2tBZE5ldHdvcmtDb2Fyc2VDb252ZXJzaW9uVmFsdWVCA+BBA0gAEjAKIWxvY2tfd2luZG93X2ZpbmVfY29udmVyc2lvbl92YWx1ZRgEIAEoBUID4EEDSAASIAoRbG9ja193aW5kb3dfZXZlbnQYBSABKAlCA+BBA0gAQhUKE2xvY2tfd2luZG93X3RyaWdnZXIawwQKJENvYXJzZUdyYWluZWRDb252ZXJzaW9uVmFsdWVNYXBwaW5ncxKwAQocbG93X2NvbnZlcnNpb25fdmFsdWVfbWFwcGluZxgBIAEoCzKEAS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcucmVzb3VyY2VzLkN1c3RvbWVyU2tBZE5ldHdvcmtDb252ZXJzaW9uVmFsdWVTY2hlbWEuU2tBZE5ldHdvcmtDb252ZXJzaW9uVmFsdWVTY2hlbWEuQ29udmVyc2lvblZhbHVlTWFwcGluZ0ID4EEDErMBCh9tZWRpdW1fY29udmVyc2lvbl92YWx1ZV9tYXBwaW5nGAIgASgLMoQBLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXMuQ3VzdG9tZXJTa0FkTmV0d29ya0NvbnZlcnNpb25WYWx1ZVNjaGVtYS5Ta0FkTmV0d29ya0NvbnZlcnNpb25WYWx1ZVNjaGVtYS5Db252ZXJzaW9uVmFsdWVNYXBwaW5nQgPgQQMSsQEKHWhpZ2hfY29udmVyc2lvbl92YWx1ZV9tYXBwaW5nGAMgASgLMoQBLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXMuQ3VzdG9tZXJTa0FkTmV0d29ya0NvbnZlcnNpb25WYWx1ZVNjaGVtYS5Ta0FkTmV0d29ya0NvbnZlcnNpb25WYWx1ZVNjaGVtYS5Db252ZXJzaW9uVmFsdWVNYXBwaW5nQgPgQQMa/gEKFkNvbnZlcnNpb25WYWx1ZU1hcHBpbmcSKAobbWluX3RpbWVfcG9zdF9pbnN0YWxsX2hvdXJzGAEgASgDQgPgQQMSKAobbWF4X3RpbWVfcG9zdF9pbnN0YWxsX2hvdXJzGAIgASgDQgPgQQMSjwEKDW1hcHBlZF9ldmVudHMYAyADKAsycy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcucmVzb3VyY2VzLkN1c3RvbWVyU2tBZE5ldHdvcmtDb252ZXJzaW9uVmFsdWVTY2hlbWEuU2tBZE5ldHdvcmtDb252ZXJzaW9uVmFsdWVTY2hlbWEuRXZlbnRCA+BBAxqiBQoFRXZlbnQSHgoRbWFwcGVkX2V2ZW50X25hbWUYASABKAlCA+BBAxIaCg1jdXJyZW5jeV9jb2RlGAIgASgJQgPgQQMSpQEKE2V2ZW50X3JldmVudWVfcmFuZ2UYAyABKAsygAEuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5DdXN0b21lclNrQWROZXR3b3JrQ29udmVyc2lvblZhbHVlU2NoZW1hLlNrQWROZXR3b3JrQ29udmVyc2lvblZhbHVlU2NoZW1hLkV2ZW50LlJldmVudWVSYW5nZUID4EEDSAASIgoTZXZlbnRfcmV2ZW51ZV92YWx1ZRgEIAEoAUID4EEDSAASsAEKFmV2ZW50X29jY3VycmVuY2VfcmFuZ2UYBSABKAsyiAEuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5DdXN0b21lclNrQWROZXR3b3JrQ29udmVyc2lvblZhbHVlU2NoZW1hLlNrQWROZXR3b3JrQ29udmVyc2lvblZhbHVlU2NoZW1hLkV2ZW50LkV2ZW50T2NjdXJyZW5jZVJhbmdlQgPgQQNIARIcCg1ldmVudF9jb3VudGVyGAYgASgDQgPgQQNIARpOCgxSZXZlbnVlUmFuZ2USHgoRbWluX2V2ZW50X3JldmVudWUYAyABKAFCA+BBAxIeChFtYXhfZXZlbnRfcmV2ZW51ZRgEIAEoAUID4EEDGlIKFEV2ZW50T2NjdXJyZW5jZVJhbmdlEhwKD21pbl9ldmVudF9jb3VudBgBIAEoA0ID4EEDEhwKD21heF9ldmVudF9jb3VudBgCIAEoA0ID4EEDQg4KDHJldmVudWVfcmF0ZUIMCgpldmVudF9yYXRlOpwB6kGYAQpBZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0N1c3RvbWVyU2tBZE5ldHdvcmtDb252ZXJzaW9uVmFsdWVTY2hlbWESU2N1c3RvbWVycy97Y3VzdG9tZXJfaWR9L2N1c3RvbWVyU2tBZE5ldHdvcmtDb252ZXJzaW9uVmFsdWVTY2hlbWFzL3thY2NvdW50X2xpbmtfaWR9Qp8CCiZjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlc0ItQ3VzdG9tZXJTa0FkTmV0d29ya0NvbnZlcnNpb25WYWx1ZVNjaGVtYVByb3RvUAFaS2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvcmVzb3VyY2VzO3Jlc291cmNlc6ICA0dBQaoCIkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5SZXNvdXJjZXPKAiJHb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcUmVzb3VyY2Vz6gImR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE3OjpSZXNvdXJjZXNiBnByb3RvMw", [file_google_ads_googleads_v17_enums_sk_ad_network_coarse_conversion_value, file_google_api_field_behavior, file_google_api_resource]);

/**
 * A CustomerSkAdNetworkConversionValueSchema.
 *
 * @generated from message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema
 */
export type CustomerSkAdNetworkConversionValueSchema = Message<"google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema"> & {
  /**
   * Output only. The resource name of the schema.
   * CustomerSkAdNetworkConversionValueSchema resource names have the form:
   * customers/{customer_id}/customerSkAdNetworkConversionValueSchemas/{account_link_id}
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The schema for the specified resource.
   *
   * @generated from field: google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema schema = 2;
   */
  schema?: CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema;
};

/**
 * Describes the message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.
 * Use `create(CustomerSkAdNetworkConversionValueSchemaSchema)` to create a new message.
 */
export const CustomerSkAdNetworkConversionValueSchemaSchema: GenMessage<CustomerSkAdNetworkConversionValueSchema> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_customer_sk_ad_network_conversion_value_schema, 0);

/**
 * The CustomerLink specific SkAdNetworkConversionValueSchema.
 *
 * @generated from message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema
 */
export type CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema = Message<"google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema"> & {
  /**
   * Required. Output only. Apple App Store app ID.
   *
   * @generated from field: string app_id = 1;
   */
  appId: string;

  /**
   * Output only. A time window (measured in hours) post-install, after which
   * the App Attribution Partner or advertiser stops calling
   * [updateConversionValue]
   * (https://developer.apple.com/documentation/storekit/skadnetwork/3566697-updateconversionvalue).
   *
   * @generated from field: int32 measurement_window_hours = 2;
   */
  measurementWindowHours: number;

  /**
   * Output only. Fine grained conversion value mappings.
   * For SkAdNetwork versions >= 4.0 that support multiple conversion
   * windows, fine grained conversion value mappings are only applicable to
   * the first postback.
   *
   * @generated from field: repeated google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.FineGrainedConversionValueMappings fine_grained_conversion_value_mappings = 3;
   */
  fineGrainedConversionValueMappings: CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_FineGrainedConversionValueMappings[];

  /**
   * Output only. Per-postback conversion value mappings for postbacks in
   * multiple conversion windows. Only applicable for SkAdNetwork versions
   * >= 4.0.
   *
   * @generated from field: repeated google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.PostbackMapping postback_mappings = 4;
   */
  postbackMappings: CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_PostbackMapping[];
};

/**
 * Describes the message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.
 * Use `create(CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchemaSchema)` to create a new message.
 */
export const CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchemaSchema: GenMessage<CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_customer_sk_ad_network_conversion_value_schema, 0, 0);

/**
 * Mappings for fine grained conversion value.
 *
 * @generated from message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.FineGrainedConversionValueMappings
 */
export type CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_FineGrainedConversionValueMappings = Message<"google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.FineGrainedConversionValueMappings"> & {
  /**
   * Output only. Fine grained conversion value. Valid values are in the
   * inclusive range [0,63].
   *
   * @generated from field: int32 fine_grained_conversion_value = 1;
   */
  fineGrainedConversionValue: number;

  /**
   * Output only. Conversion events the fine grained conversion value maps
   * to.
   *
   * @generated from field: google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.ConversionValueMapping conversion_value_mapping = 2;
   */
  conversionValueMapping?: CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_ConversionValueMapping;
};

/**
 * Describes the message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.FineGrainedConversionValueMappings.
 * Use `create(CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_FineGrainedConversionValueMappingsSchema)` to create a new message.
 */
export const CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_FineGrainedConversionValueMappingsSchema: GenMessage<CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_FineGrainedConversionValueMappings> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_customer_sk_ad_network_conversion_value_schema, 0, 0, 0);

/**
 * Mappings for each postback in multiple conversion windows.
 *
 * @generated from message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.PostbackMapping
 */
export type CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_PostbackMapping = Message<"google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.PostbackMapping"> & {
  /**
   * Output only. 0-based index that indicates the order of postback. Valid
   * values are in the inclusive range [0,2].
   *
   * @generated from field: int32 postback_sequence_index = 1;
   */
  postbackSequenceIndex: number;

  /**
   * Output only. Conversion value mappings for all coarse grained
   * conversion values.
   *
   * @generated from field: google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.CoarseGrainedConversionValueMappings coarse_grained_conversion_value_mappings = 2;
   */
  coarseGrainedConversionValueMappings?: CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_CoarseGrainedConversionValueMappings;

  /**
   * Event or conversion value used for locking conversion window.
   *
   * @generated from oneof google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.PostbackMapping.lock_window_trigger
   */
  lockWindowTrigger: {
    /**
     * Output only. Coarse grained conversion value that triggers conversion
     * window lock.
     *
     * @generated from field: google.ads.googleads.v17.enums.SkAdNetworkCoarseConversionValueEnum.SkAdNetworkCoarseConversionValue lock_window_coarse_conversion_value = 3;
     */
    value: SkAdNetworkCoarseConversionValueEnum_SkAdNetworkCoarseConversionValue;
    case: "lockWindowCoarseConversionValue";
  } | {
    /**
     * Output only. Fine grained conversion value that triggers conversion
     * window lock.
     *
     * @generated from field: int32 lock_window_fine_conversion_value = 4;
     */
    value: number;
    case: "lockWindowFineConversionValue";
  } | {
    /**
     * Output only. Event name that triggers conversion window lock.
     *
     * @generated from field: string lock_window_event = 5;
     */
    value: string;
    case: "lockWindowEvent";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.PostbackMapping.
 * Use `create(CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_PostbackMappingSchema)` to create a new message.
 */
export const CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_PostbackMappingSchema: GenMessage<CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_PostbackMapping> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_customer_sk_ad_network_conversion_value_schema, 0, 0, 1);

/**
 * Mappings for coarse grained conversion values.
 *
 * @generated from message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.CoarseGrainedConversionValueMappings
 */
export type CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_CoarseGrainedConversionValueMappings = Message<"google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.CoarseGrainedConversionValueMappings"> & {
  /**
   * Output only. Mapping for "low" coarse conversion value.
   *
   * @generated from field: google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.ConversionValueMapping low_conversion_value_mapping = 1;
   */
  lowConversionValueMapping?: CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_ConversionValueMapping;

  /**
   * Output only. Mapping for "medium" coarse conversion value.
   *
   * @generated from field: google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.ConversionValueMapping medium_conversion_value_mapping = 2;
   */
  mediumConversionValueMapping?: CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_ConversionValueMapping;

  /**
   * Output only. Mapping for "high" coarse conversion value.
   *
   * @generated from field: google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.ConversionValueMapping high_conversion_value_mapping = 3;
   */
  highConversionValueMapping?: CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_ConversionValueMapping;
};

/**
 * Describes the message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.CoarseGrainedConversionValueMappings.
 * Use `create(CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_CoarseGrainedConversionValueMappingsSchema)` to create a new message.
 */
export const CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_CoarseGrainedConversionValueMappingsSchema: GenMessage<CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_CoarseGrainedConversionValueMappings> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_customer_sk_ad_network_conversion_value_schema, 0, 0, 2);

/**
 * Represents mapping from one conversion value to one or more conversion
 * events.
 *
 * @generated from message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.ConversionValueMapping
 */
export type CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_ConversionValueMapping = Message<"google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.ConversionValueMapping"> & {
  /**
   * Output only. The minimum of the time range in which a user was last
   * active during the measurement window.
   *
   * @generated from field: int64 min_time_post_install_hours = 1;
   */
  minTimePostInstallHours: bigint;

  /**
   * Output only. The maximum of the time range in which a user was last
   * active during the measurement window.
   *
   * @generated from field: int64 max_time_post_install_hours = 2;
   */
  maxTimePostInstallHours: bigint;

  /**
   * Output only. The conversion value may be mapped to multiple events with
   * various attributes.
   *
   * @generated from field: repeated google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event mapped_events = 3;
   */
  mappedEvents: CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event[];
};

/**
 * Describes the message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.ConversionValueMapping.
 * Use `create(CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_ConversionValueMappingSchema)` to create a new message.
 */
export const CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_ConversionValueMappingSchema: GenMessage<CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_ConversionValueMapping> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_customer_sk_ad_network_conversion_value_schema, 0, 0, 3);

/**
 * Defines a Google conversion event that the conversion value is mapped to.
 *
 * @generated from message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event
 */
export type CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event = Message<"google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event"> & {
  /**
   * Output only. Google event name represented by this conversion value.
   *
   * @generated from field: string mapped_event_name = 1;
   */
  mappedEventName: string;

  /**
   * Output only. The reported currency for the event_revenue. ISO 4217
   * three-letter currency code, for example, "USD"
   *
   * @generated from field: string currency_code = 2;
   */
  currencyCode: string;

  /**
   * Either a range or specific value for event revenue.
   *
   * @generated from oneof google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event.revenue_rate
   */
  revenueRate: {
    /**
     * Output only. The event revenue range.
     *
     * @generated from field: google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event.RevenueRange event_revenue_range = 3;
     */
    value: CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event_RevenueRange;
    case: "eventRevenueRange";
  } | {
    /**
     * Output only. The specific event revenue value.
     *
     * @generated from field: double event_revenue_value = 4;
     */
    value: number;
    case: "eventRevenueValue";
  } | { case: undefined; value?: undefined };

  /**
   * Either a range or specific value for event counter.
   *
   * @generated from oneof google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event.event_rate
   */
  eventRate: {
    /**
     * Output only. The event counter range.
     *
     * @generated from field: google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event.EventOccurrenceRange event_occurrence_range = 5;
     */
    value: CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event_EventOccurrenceRange;
    case: "eventOccurrenceRange";
  } | {
    /**
     * Output only. For specific event counter values.
     *
     * @generated from field: int64 event_counter = 6;
     */
    value: bigint;
    case: "eventCounter";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event.
 * Use `create(CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_EventSchema)` to create a new message.
 */
export const CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_EventSchema: GenMessage<CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_customer_sk_ad_network_conversion_value_schema, 0, 0, 4);

/**
 * Defines a range for revenue values.
 *
 * @generated from message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event.RevenueRange
 */
export type CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event_RevenueRange = Message<"google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event.RevenueRange"> & {
  /**
   * Output only. For revenue ranges, the minimum value in `currency_code`
   * for which this conversion value would be updated. A value of 0 will
   * be treated as unset.
   *
   * @generated from field: double min_event_revenue = 3;
   */
  minEventRevenue: number;

  /**
   * Output only. For revenue ranges, the maximum value in `currency_code`
   * for which this conversion value would be updated. A value of 0 will
   * be treated as unset.
   *
   * @generated from field: double max_event_revenue = 4;
   */
  maxEventRevenue: number;
};

/**
 * Describes the message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event.RevenueRange.
 * Use `create(CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event_RevenueRangeSchema)` to create a new message.
 */
export const CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event_RevenueRangeSchema: GenMessage<CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event_RevenueRange> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_customer_sk_ad_network_conversion_value_schema, 0, 0, 4, 0);

/**
 * Defines a range for event counter values.
 *
 * @generated from message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event.EventOccurrenceRange
 */
export type CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event_EventOccurrenceRange = Message<"google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event.EventOccurrenceRange"> & {
  /**
   * Output only. For event counter ranges, the minimum of the defined
   * range. A value of 0 will be treated as unset.
   *
   * @generated from field: int64 min_event_count = 1;
   */
  minEventCount: bigint;

  /**
   * Output only. For event counter ranges, the maximum of the defined
   * range. A value of 0 will be treated as unset.
   *
   * @generated from field: int64 max_event_count = 2;
   */
  maxEventCount: bigint;
};

/**
 * Describes the message google.ads.googleads.v17.resources.CustomerSkAdNetworkConversionValueSchema.SkAdNetworkConversionValueSchema.Event.EventOccurrenceRange.
 * Use `create(CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event_EventOccurrenceRangeSchema)` to create a new message.
 */
export const CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event_EventOccurrenceRangeSchema: GenMessage<CustomerSkAdNetworkConversionValueSchema_SkAdNetworkConversionValueSchema_Event_EventOccurrenceRange> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_customer_sk_ad_network_conversion_value_schema, 0, 0, 4, 1);
