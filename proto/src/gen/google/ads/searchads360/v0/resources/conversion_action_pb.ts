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
// @generated from file google/ads/searchads360/v0/resources/conversion_action.proto (package google.ads.searchads360.v0.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { AttributionModelEnum_AttributionModel } from "../enums/attribution_model_pb";
import { file_google_ads_searchads360_v0_enums_attribution_model } from "../enums/attribution_model_pb";
import type { ConversionActionCategoryEnum_ConversionActionCategory } from "../enums/conversion_action_category_pb";
import { file_google_ads_searchads360_v0_enums_conversion_action_category } from "../enums/conversion_action_category_pb";
import type { ConversionActionStatusEnum_ConversionActionStatus } from "../enums/conversion_action_status_pb";
import { file_google_ads_searchads360_v0_enums_conversion_action_status } from "../enums/conversion_action_status_pb";
import type { ConversionActionTypeEnum_ConversionActionType } from "../enums/conversion_action_type_pb";
import { file_google_ads_searchads360_v0_enums_conversion_action_type } from "../enums/conversion_action_type_pb";
import type { DataDrivenModelStatusEnum_DataDrivenModelStatus } from "../enums/data_driven_model_status_pb";
import { file_google_ads_searchads360_v0_enums_data_driven_model_status } from "../enums/data_driven_model_status_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/resources/conversion_action.proto.
 */
export const file_google_ads_searchads360_v0_resources_conversion_action: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9yZXNvdXJjZXMvY29udmVyc2lvbl9hY3Rpb24ucHJvdG8SJGdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLnJlc291cmNlcyKNDwoQQ29udmVyc2lvbkFjdGlvbhJLCg1yZXNvdXJjZV9uYW1lGAEgASgJQjTgQQX6QS4KLHNlYXJjaGFkczM2MC5nb29nbGVhcGlzLmNvbS9Db252ZXJzaW9uQWN0aW9uEhQKAmlkGBUgASgDQgPgQQNIAIgBARIRCgRuYW1lGBYgASgJSAGIAQESGgoNY3JlYXRpb25fdGltZRghIAEoCUID4EEDEmMKBnN0YXR1cxgEIAEoDjJTLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmVudW1zLkNvbnZlcnNpb25BY3Rpb25TdGF0dXNFbnVtLkNvbnZlcnNpb25BY3Rpb25TdGF0dXMSYgoEdHlwZRgFIAEoDjJPLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmVudW1zLkNvbnZlcnNpb25BY3Rpb25UeXBlRW51bS5Db252ZXJzaW9uQWN0aW9uVHlwZUID4EEFEh0KEHByaW1hcnlfZm9yX2dvYWwYHyABKAhIAogBARJpCghjYXRlZ29yeRgGIAEoDjJXLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmVudW1zLkNvbnZlcnNpb25BY3Rpb25DYXRlZ29yeUVudW0uQ29udmVyc2lvbkFjdGlvbkNhdGVnb3J5EkkKDm93bmVyX2N1c3RvbWVyGBcgASgJQizgQQP6QSYKJHNlYXJjaGFkczM2MC5nb29nbGVhcGlzLmNvbS9DdXN0b21lckgDiAEBEjkKLGluY2x1ZGVfaW5fY2xpZW50X2FjY291bnRfY29udmVyc2lvbnNfbWV0cmljGBggASgISASIAQESLwodaW5jbHVkZV9pbl9jb252ZXJzaW9uc19tZXRyaWMYICABKAhCA+BBA0gFiAEBEi8KImNsaWNrX3Rocm91Z2hfbG9va2JhY2tfd2luZG93X2RheXMYGSABKANIBogBARJcCg52YWx1ZV9zZXR0aW5ncxgLIAEoCzJELmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLnJlc291cmNlcy5Db252ZXJzaW9uQWN0aW9uLlZhbHVlU2V0dGluZ3MScwoaYXR0cmlidXRpb25fbW9kZWxfc2V0dGluZ3MYDSABKAsyTy5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5yZXNvdXJjZXMuQ29udmVyc2lvbkFjdGlvbi5BdHRyaWJ1dGlvbk1vZGVsU2V0dGluZ3MSEwoGYXBwX2lkGBwgASgJSAeIAQESawoTZmxvb2RsaWdodF9zZXR0aW5ncxgdIAEoCzJJLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLnJlc291cmNlcy5Db252ZXJzaW9uQWN0aW9uLkZsb29kbGlnaHRTZXR0aW5nc0ID4EEDGvgBChhBdHRyaWJ1dGlvbk1vZGVsU2V0dGluZ3MSYgoRYXR0cmlidXRpb25fbW9kZWwYASABKA4yRy5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcy5BdHRyaWJ1dGlvbk1vZGVsRW51bS5BdHRyaWJ1dGlvbk1vZGVsEngKGGRhdGFfZHJpdmVuX21vZGVsX3N0YXR1cxgCIAEoDjJRLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmVudW1zLkRhdGFEcml2ZW5Nb2RlbFN0YXR1c0VudW0uRGF0YURyaXZlbk1vZGVsU3RhdHVzQgPgQQMavwEKDVZhbHVlU2V0dGluZ3MSGgoNZGVmYXVsdF92YWx1ZRgEIAEoAUgAiAEBEiIKFWRlZmF1bHRfY3VycmVuY3lfY29kZRgFIAEoCUgBiAEBEiUKGGFsd2F5c191c2VfZGVmYXVsdF92YWx1ZRgGIAEoCEgCiAEBQhAKDl9kZWZhdWx0X3ZhbHVlQhgKFl9kZWZhdWx0X2N1cnJlbmN5X2NvZGVCGwoZX2Fsd2F5c191c2VfZGVmYXVsdF92YWx1ZRpqChJGbG9vZGxpZ2h0U2V0dGluZ3MSHwoSYWN0aXZpdHlfZ3JvdXBfdGFnGAEgASgJQgPgQQMSGQoMYWN0aXZpdHlfdGFnGAIgASgJQgPgQQMSGAoLYWN0aXZpdHlfaWQYAyABKANCA+BBAzpx6kFuCixzZWFyY2hhZHMzNjAuZ29vZ2xlYXBpcy5jb20vQ29udmVyc2lvbkFjdGlvbhI+Y3VzdG9tZXJzL3tjdXN0b21lcl9pZH0vY29udmVyc2lvbkFjdGlvbnMve2NvbnZlcnNpb25fdHlwZV9pZH1CBQoDX2lkQgcKBV9uYW1lQhMKEV9wcmltYXJ5X2Zvcl9nb2FsQhEKD19vd25lcl9jdXN0b21lckIvCi1faW5jbHVkZV9pbl9jbGllbnRfYWNjb3VudF9jb252ZXJzaW9uc19tZXRyaWNCIAoeX2luY2x1ZGVfaW5fY29udmVyc2lvbnNfbWV0cmljQiUKI19jbGlja190aHJvdWdoX2xvb2tiYWNrX3dpbmRvd19kYXlzQgkKB19hcHBfaWRClQIKKGNvbS5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5yZXNvdXJjZXNCFUNvbnZlcnNpb25BY3Rpb25Qcm90b1ABWk1nb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9zZWFyY2hhZHMzNjAvdjAvcmVzb3VyY2VzO3Jlc291cmNlc6ICB0dBU0EzNjCqAiRHb29nbGUuQWRzLlNlYXJjaEFkczM2MC5WMC5SZXNvdXJjZXPKAiRHb29nbGVcQWRzXFNlYXJjaEFkczM2MFxWMFxSZXNvdXJjZXPqAihHb29nbGU6OkFkczo6U2VhcmNoQWRzMzYwOjpWMDo6UmVzb3VyY2VzYgZwcm90bzM", [file_google_ads_searchads360_v0_enums_attribution_model, file_google_ads_searchads360_v0_enums_conversion_action_category, file_google_ads_searchads360_v0_enums_conversion_action_status, file_google_ads_searchads360_v0_enums_conversion_action_type, file_google_ads_searchads360_v0_enums_data_driven_model_status, file_google_api_field_behavior, file_google_api_resource]);

/**
 * A conversion action.
 *
 * @generated from message google.ads.searchads360.v0.resources.ConversionAction
 */
export type ConversionAction = Message<"google.ads.searchads360.v0.resources.ConversionAction"> & {
  /**
   * Immutable. The resource name of the conversion action.
   * Conversion action resource names have the form:
   *
   * `customers/{customer_id}/conversionActions/{conversion_action_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The ID of the conversion action.
   *
   * @generated from field: optional int64 id = 21;
   */
  id?: bigint;

  /**
   * The name of the conversion action.
   *
   * This field is required and should not be empty when creating new
   * conversion actions.
   *
   * @generated from field: optional string name = 22;
   */
  name?: string;

  /**
   * Output only. Timestamp of the Floodlight activity's creation, formatted in
   * ISO 8601.
   *
   * @generated from field: string creation_time = 33;
   */
  creationTime: string;

  /**
   * The status of this conversion action for conversion event accrual.
   *
   * @generated from field: google.ads.searchads360.v0.enums.ConversionActionStatusEnum.ConversionActionStatus status = 4;
   */
  status: ConversionActionStatusEnum_ConversionActionStatus;

  /**
   * Immutable. The type of this conversion action.
   *
   * @generated from field: google.ads.searchads360.v0.enums.ConversionActionTypeEnum.ConversionActionType type = 5;
   */
  type: ConversionActionTypeEnum_ConversionActionType;

  /**
   * If a conversion action's primary_for_goal bit is false, the conversion
   * action is non-biddable for all campaigns regardless of their customer
   * conversion goal or campaign conversion goal.
   * However, custom conversion goals do not respect primary_for_goal, so if
   * a campaign has a custom conversion goal configured with a
   * primary_for_goal = false conversion action, that conversion action is
   * still biddable.
   * By default, primary_for_goal will be true if not set. In V9,
   * primary_for_goal can only be set to false after creation through an
   * 'update' operation because it's not declared as optional.
   *
   * @generated from field: optional bool primary_for_goal = 31;
   */
  primaryForGoal?: boolean;

  /**
   * The category of conversions reported for this conversion action.
   *
   * @generated from field: google.ads.searchads360.v0.enums.ConversionActionCategoryEnum.ConversionActionCategory category = 6;
   */
  category: ConversionActionCategoryEnum_ConversionActionCategory;

  /**
   * Output only. The resource name of the conversion action owner customer, or
   * null if this is a system-defined conversion action.
   *
   * @generated from field: optional string owner_customer = 23;
   */
  ownerCustomer?: string;

  /**
   * Whether this conversion action should be included in the
   * "client_account_conversions" metric.
   *
   * @generated from field: optional bool include_in_client_account_conversions_metric = 24;
   */
  includeInClientAccountConversionsMetric?: boolean;

  /**
   * Output only. Whether this conversion action should be included in the
   * "conversions" metric.
   *
   * @generated from field: optional bool include_in_conversions_metric = 32;
   */
  includeInConversionsMetric?: boolean;

  /**
   * The maximum number of days that may elapse between an interaction
   * (for example, a click) and a conversion event.
   *
   * @generated from field: optional int64 click_through_lookback_window_days = 25;
   */
  clickThroughLookbackWindowDays?: bigint;

  /**
   * Settings related to the value for conversion events associated with this
   * conversion action.
   *
   * @generated from field: google.ads.searchads360.v0.resources.ConversionAction.ValueSettings value_settings = 11;
   */
  valueSettings?: ConversionAction_ValueSettings;

  /**
   * Settings related to this conversion action's attribution model.
   *
   * @generated from field: google.ads.searchads360.v0.resources.ConversionAction.AttributionModelSettings attribution_model_settings = 13;
   */
  attributionModelSettings?: ConversionAction_AttributionModelSettings;

  /**
   * App ID for an app conversion action.
   *
   * @generated from field: optional string app_id = 28;
   */
  appId?: string;

  /**
   * Output only. Floodlight settings for Floodlight conversion types.
   *
   * @generated from field: google.ads.searchads360.v0.resources.ConversionAction.FloodlightSettings floodlight_settings = 29;
   */
  floodlightSettings?: ConversionAction_FloodlightSettings;
};

/**
 * Describes the message google.ads.searchads360.v0.resources.ConversionAction.
 * Use `create(ConversionActionSchema)` to create a new message.
 */
export const ConversionActionSchema: GenMessage<ConversionAction> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_conversion_action, 0);

/**
 * Settings related to this conversion action's attribution model.
 *
 * @generated from message google.ads.searchads360.v0.resources.ConversionAction.AttributionModelSettings
 */
export type ConversionAction_AttributionModelSettings = Message<"google.ads.searchads360.v0.resources.ConversionAction.AttributionModelSettings"> & {
  /**
   * The attribution model type of this conversion action.
   *
   * @generated from field: google.ads.searchads360.v0.enums.AttributionModelEnum.AttributionModel attribution_model = 1;
   */
  attributionModel: AttributionModelEnum_AttributionModel;

  /**
   * Output only. The status of the data-driven attribution model for the
   * conversion action.
   *
   * @generated from field: google.ads.searchads360.v0.enums.DataDrivenModelStatusEnum.DataDrivenModelStatus data_driven_model_status = 2;
   */
  dataDrivenModelStatus: DataDrivenModelStatusEnum_DataDrivenModelStatus;
};

/**
 * Describes the message google.ads.searchads360.v0.resources.ConversionAction.AttributionModelSettings.
 * Use `create(ConversionAction_AttributionModelSettingsSchema)` to create a new message.
 */
export const ConversionAction_AttributionModelSettingsSchema: GenMessage<ConversionAction_AttributionModelSettings> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_conversion_action, 0, 0);

/**
 * Settings related to the value for conversion events associated with this
 * conversion action.
 *
 * @generated from message google.ads.searchads360.v0.resources.ConversionAction.ValueSettings
 */
export type ConversionAction_ValueSettings = Message<"google.ads.searchads360.v0.resources.ConversionAction.ValueSettings"> & {
  /**
   * The value to use when conversion events for this conversion action are
   * sent with an invalid, disallowed or missing value, or when
   * this conversion action is configured to always use the default value.
   *
   * @generated from field: optional double default_value = 4;
   */
  defaultValue?: number;

  /**
   * The currency code to use when conversion events for this conversion
   * action are sent with an invalid or missing currency code, or when this
   * conversion action is configured to always use the default value.
   *
   * @generated from field: optional string default_currency_code = 5;
   */
  defaultCurrencyCode?: string;

  /**
   * Controls whether the default value and default currency code are used in
   * place of the value and currency code specified in conversion events for
   * this conversion action.
   *
   * @generated from field: optional bool always_use_default_value = 6;
   */
  alwaysUseDefaultValue?: boolean;
};

/**
 * Describes the message google.ads.searchads360.v0.resources.ConversionAction.ValueSettings.
 * Use `create(ConversionAction_ValueSettingsSchema)` to create a new message.
 */
export const ConversionAction_ValueSettingsSchema: GenMessage<ConversionAction_ValueSettings> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_conversion_action, 0, 1);

/**
 * Settings related to a Floodlight conversion action.
 *
 * @generated from message google.ads.searchads360.v0.resources.ConversionAction.FloodlightSettings
 */
export type ConversionAction_FloodlightSettings = Message<"google.ads.searchads360.v0.resources.ConversionAction.FloodlightSettings"> & {
  /**
   * Output only. String used to identify a Floodlight activity group when
   * reporting conversions.
   *
   * @generated from field: string activity_group_tag = 1;
   */
  activityGroupTag: string;

  /**
   * Output only. String used to identify a Floodlight activity when reporting
   * conversions.
   *
   * @generated from field: string activity_tag = 2;
   */
  activityTag: string;

  /**
   * Output only. ID of the Floodlight activity in DoubleClick Campaign
   * Manager (DCM).
   *
   * @generated from field: int64 activity_id = 3;
   */
  activityId: bigint;
};

/**
 * Describes the message google.ads.searchads360.v0.resources.ConversionAction.FloodlightSettings.
 * Use `create(ConversionAction_FloodlightSettingsSchema)` to create a new message.
 */
export const ConversionAction_FloodlightSettingsSchema: GenMessage<ConversionAction_FloodlightSettings> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_conversion_action, 0, 2);
