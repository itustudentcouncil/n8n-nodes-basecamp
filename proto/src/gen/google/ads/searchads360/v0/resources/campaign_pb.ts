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
// @generated from file google/ads/searchads360/v0/resources/campaign.proto (package google.ads.searchads360.v0.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { ManualCpa, ManualCpc, ManualCpm, MaximizeConversions, MaximizeConversionValue, PercentCpc, TargetCpa, TargetCpm, TargetImpressionShare, TargetRoas, TargetSpend } from "../common/bidding_pb";
import { file_google_ads_searchads360_v0_common_bidding } from "../common/bidding_pb";
import type { CustomParameter } from "../common/custom_parameter_pb";
import { file_google_ads_searchads360_v0_common_custom_parameter } from "../common/custom_parameter_pb";
import type { FrequencyCapEntry } from "../common/frequency_cap_pb";
import { file_google_ads_searchads360_v0_common_frequency_cap } from "../common/frequency_cap_pb";
import type { RealTimeBiddingSetting } from "../common/real_time_bidding_setting_pb";
import { file_google_ads_searchads360_v0_common_real_time_bidding_setting } from "../common/real_time_bidding_setting_pb";
import type { AdServingOptimizationStatusEnum_AdServingOptimizationStatus } from "../enums/ad_serving_optimization_status_pb";
import { file_google_ads_searchads360_v0_enums_ad_serving_optimization_status } from "../enums/ad_serving_optimization_status_pb";
import type { AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType } from "../enums/advertising_channel_sub_type_pb";
import { file_google_ads_searchads360_v0_enums_advertising_channel_sub_type } from "../enums/advertising_channel_sub_type_pb";
import type { AdvertisingChannelTypeEnum_AdvertisingChannelType } from "../enums/advertising_channel_type_pb";
import { file_google_ads_searchads360_v0_enums_advertising_channel_type } from "../enums/advertising_channel_type_pb";
import type { AssetFieldTypeEnum_AssetFieldType } from "../enums/asset_field_type_pb";
import { file_google_ads_searchads360_v0_enums_asset_field_type } from "../enums/asset_field_type_pb";
import type { BiddingStrategySystemStatusEnum_BiddingStrategySystemStatus } from "../enums/bidding_strategy_system_status_pb";
import { file_google_ads_searchads360_v0_enums_bidding_strategy_system_status } from "../enums/bidding_strategy_system_status_pb";
import type { BiddingStrategyTypeEnum_BiddingStrategyType } from "../enums/bidding_strategy_type_pb";
import { file_google_ads_searchads360_v0_enums_bidding_strategy_type } from "../enums/bidding_strategy_type_pb";
import type { CampaignServingStatusEnum_CampaignServingStatus } from "../enums/campaign_serving_status_pb";
import { file_google_ads_searchads360_v0_enums_campaign_serving_status } from "../enums/campaign_serving_status_pb";
import type { CampaignStatusEnum_CampaignStatus } from "../enums/campaign_status_pb";
import { file_google_ads_searchads360_v0_enums_campaign_status } from "../enums/campaign_status_pb";
import type { NegativeGeoTargetTypeEnum_NegativeGeoTargetType } from "../enums/negative_geo_target_type_pb";
import { file_google_ads_searchads360_v0_enums_negative_geo_target_type } from "../enums/negative_geo_target_type_pb";
import type { OptimizationGoalTypeEnum_OptimizationGoalType } from "../enums/optimization_goal_type_pb";
import { file_google_ads_searchads360_v0_enums_optimization_goal_type } from "../enums/optimization_goal_type_pb";
import type { PositiveGeoTargetTypeEnum_PositiveGeoTargetType } from "../enums/positive_geo_target_type_pb";
import { file_google_ads_searchads360_v0_enums_positive_geo_target_type } from "../enums/positive_geo_target_type_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/resources/campaign.proto.
 */
export const file_google_ads_searchads360_v0_resources_campaign: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9yZXNvdXJjZXMvY2FtcGFpZ24ucHJvdG8SJGdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLnJlc291cmNlcyLtJgoIQ2FtcGFpZ24SQwoNcmVzb3VyY2VfbmFtZRgBIAEoCUIs4EEF+kEmCiRzZWFyY2hhZHMzNjAuZ29vZ2xlYXBpcy5jb20vQ2FtcGFpZ24SFAoCaWQYOyABKANCA+BBA0gBiAEBEhEKBG5hbWUYOiABKAlIAogBARJTCgZzdGF0dXMYBSABKA4yQy5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcy5DYW1wYWlnblN0YXR1c0VudW0uQ2FtcGFpZ25TdGF0dXMSbgoOc2VydmluZ19zdGF0dXMYFSABKA4yUS5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcy5DYW1wYWlnblNlcnZpbmdTdGF0dXNFbnVtLkNhbXBhaWduU2VydmluZ1N0YXR1c0ID4EEDEooBCh5iaWRkaW5nX3N0cmF0ZWd5X3N5c3RlbV9zdGF0dXMYTiABKA4yXS5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcy5CaWRkaW5nU3RyYXRlZ3lTeXN0ZW1TdGF0dXNFbnVtLkJpZGRpbmdTdHJhdGVneVN5c3RlbVN0YXR1c0ID4EEDEoUBCh5hZF9zZXJ2aW5nX29wdGltaXphdGlvbl9zdGF0dXMYCCABKA4yXS5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcy5BZFNlcnZpbmdPcHRpbWl6YXRpb25TdGF0dXNFbnVtLkFkU2VydmluZ09wdGltaXphdGlvblN0YXR1cxJ6ChhhZHZlcnRpc2luZ19jaGFubmVsX3R5cGUYCSABKA4yUy5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcy5BZHZlcnRpc2luZ0NoYW5uZWxUeXBlRW51bS5BZHZlcnRpc2luZ0NoYW5uZWxUeXBlQgPgQQUShAEKHGFkdmVydGlzaW5nX2NoYW5uZWxfc3ViX3R5cGUYCiABKA4yWS5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcy5BZHZlcnRpc2luZ0NoYW5uZWxTdWJUeXBlRW51bS5BZHZlcnRpc2luZ0NoYW5uZWxTdWJUeXBlQgPgQQUSIgoVdHJhY2tpbmdfdXJsX3RlbXBsYXRlGDwgASgJSAOIAQESUQoVdXJsX2N1c3RvbV9wYXJhbWV0ZXJzGAwgAygLMjIuZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuY29tbW9uLkN1c3RvbVBhcmFtZXRlchJcChlyZWFsX3RpbWVfYmlkZGluZ19zZXR0aW5nGCcgASgLMjkuZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuY29tbW9uLlJlYWxUaW1lQmlkZGluZ1NldHRpbmcSWAoQbmV0d29ya19zZXR0aW5ncxgOIAEoCzI+Lmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLnJlc291cmNlcy5DYW1wYWlnbi5OZXR3b3JrU2V0dGluZ3MSagoaZHluYW1pY19zZWFyY2hfYWRzX3NldHRpbmcYISABKAsyRi5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5yZXNvdXJjZXMuQ2FtcGFpZ24uRHluYW1pY1NlYXJjaEFkc1NldHRpbmcSWAoQc2hvcHBpbmdfc2V0dGluZxgkIAEoCzI+Lmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLnJlc291cmNlcy5DYW1wYWlnbi5TaG9wcGluZ1NldHRpbmcSZAoXZ2VvX3RhcmdldF90eXBlX3NldHRpbmcYLyABKAsyQy5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5yZXNvdXJjZXMuQ2FtcGFpZ24uR2VvVGFyZ2V0VHlwZVNldHRpbmcSQQoGbGFiZWxzGD0gAygJQjHgQQP6QSsKKXNlYXJjaGFkczM2MC5nb29nbGVhcGlzLmNvbS9DYW1wYWlnbkxhYmVsEk0KD2NhbXBhaWduX2J1ZGdldBg+IAEoCUIv+kEsCipzZWFyY2hhZHMzNjAuZ29vZ2xlYXBpcy5jb20vQ2FtcGFpZ25CdWRnZXRIBIgBARJxChViaWRkaW5nX3N0cmF0ZWd5X3R5cGUYFiABKA4yTS5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5lbnVtcy5CaWRkaW5nU3RyYXRlZ3lUeXBlRW51bS5CaWRkaW5nU3RyYXRlZ3lUeXBlQgPgQQMSYgobYWNjZXNzaWJsZV9iaWRkaW5nX3N0cmF0ZWd5GEcgASgJQj3gQQP6QTcKNXNlYXJjaGFkczM2MC5nb29nbGVhcGlzLmNvbS9BY2Nlc3NpYmxlQmlkZGluZ1N0cmF0ZWd5EhcKCnN0YXJ0X2RhdGUYPyABKAlIBYgBARIVCghlbmRfZGF0ZRhAIAEoCUgGiAEBEh0KEGZpbmFsX3VybF9zdWZmaXgYQSABKAlIB4gBARJMCg5mcmVxdWVuY3lfY2FwcxgoIAMoCzI0Lmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmNvbW1vbi5GcmVxdWVuY3lDYXBFbnRyeRJkChZzZWxlY3RpdmVfb3B0aW1pemF0aW9uGC0gASgLMkQuZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAucmVzb3VyY2VzLkNhbXBhaWduLlNlbGVjdGl2ZU9wdGltaXphdGlvbhJpChlvcHRpbWl6YXRpb25fZ29hbF9zZXR0aW5nGDYgASgLMkYuZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAucmVzb3VyY2VzLkNhbXBhaWduLk9wdGltaXphdGlvbkdvYWxTZXR0aW5nEl0KEHRyYWNraW5nX3NldHRpbmcYLiABKAsyPi5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5yZXNvdXJjZXMuQ2FtcGFpZ24uVHJhY2tpbmdTZXR0aW5nQgPgQQMSFgoJZW5naW5lX2lkGEQgASgJQgPgQQMSbgohZXhjbHVkZWRfcGFyZW50X2Fzc2V0X2ZpZWxkX3R5cGVzGEUgAygOMkMuZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZW51bXMuQXNzZXRGaWVsZFR5cGVFbnVtLkFzc2V0RmllbGRUeXBlEhgKC2NyZWF0ZV90aW1lGE8gASgJQgPgQQMSGgoNY3JlYXRpb25fdGltZRhUIAEoCUID4EEDEh8KEmxhc3RfbW9kaWZpZWRfdGltZRhGIAEoCUID4EEDEiIKFXVybF9leHBhbnNpb25fb3B0X291dBhIIAEoCEgIiAEBEkwKEGJpZGRpbmdfc3RyYXRlZ3kYQyABKAlCMPpBLQorc2VhcmNoYWRzMzYwLmdvb2dsZWFwaXMuY29tL0JpZGRpbmdTdHJhdGVneUgAEkIKCm1hbnVhbF9jcGEYSiABKAsyLC5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5jb21tb24uTWFudWFsQ3BhSAASQgoKbWFudWFsX2NwYxgYIAEoCzIsLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmNvbW1vbi5NYW51YWxDcGNIABJCCgptYW51YWxfY3BtGBkgASgLMiwuZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuY29tbW9uLk1hbnVhbENwbUgAElYKFG1heGltaXplX2NvbnZlcnNpb25zGB4gASgLMjYuZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuY29tbW9uLk1heGltaXplQ29udmVyc2lvbnNIABJfChltYXhpbWl6ZV9jb252ZXJzaW9uX3ZhbHVlGB8gASgLMjouZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuY29tbW9uLk1heGltaXplQ29udmVyc2lvblZhbHVlSAASQgoKdGFyZ2V0X2NwYRgaIAEoCzIsLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmNvbW1vbi5UYXJnZXRDcGFIABJbChd0YXJnZXRfaW1wcmVzc2lvbl9zaGFyZRgwIAEoCzI4Lmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmNvbW1vbi5UYXJnZXRJbXByZXNzaW9uU2hhcmVIABJECgt0YXJnZXRfcm9hcxgdIAEoCzItLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmNvbW1vbi5UYXJnZXRSb2FzSAASRgoMdGFyZ2V0X3NwZW5kGBsgASgLMi4uZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuY29tbW9uLlRhcmdldFNwZW5kSAASRAoLcGVyY2VudF9jcGMYIiABKAsyLS5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5jb21tb24uUGVyY2VudENwY0gAEkIKCnRhcmdldF9jcG0YKSABKAsyLC5nb29nbGUuYWRzLnNlYXJjaGFkczM2MC52MC5jb21tb24uVGFyZ2V0Q3BtSAAamQIKD05ldHdvcmtTZXR0aW5ncxIhChR0YXJnZXRfZ29vZ2xlX3NlYXJjaBgFIAEoCEgAiAEBEiIKFXRhcmdldF9zZWFyY2hfbmV0d29yaxgGIAEoCEgBiAEBEiMKFnRhcmdldF9jb250ZW50X25ldHdvcmsYByABKAhIAogBARIqCh10YXJnZXRfcGFydG5lcl9zZWFyY2hfbmV0d29yaxgIIAEoCEgDiAEBQhcKFV90YXJnZXRfZ29vZ2xlX3NlYXJjaEIYChZfdGFyZ2V0X3NlYXJjaF9uZXR3b3JrQhkKF190YXJnZXRfY29udGVudF9uZXR3b3JrQiAKHl90YXJnZXRfcGFydG5lcl9zZWFyY2hfbmV0d29yaxqPAQoXRHluYW1pY1NlYXJjaEFkc1NldHRpbmcSGAoLZG9tYWluX25hbWUYBiABKAlCA+BBAhIaCg1sYW5ndWFnZV9jb2RlGAcgASgJQgPgQQISIwoWdXNlX3N1cHBsaWVkX3VybHNfb25seRgIIAEoCEgAiAEBQhkKF191c2Vfc3VwcGxpZWRfdXJsc19vbmx5GogCCg9TaG9wcGluZ1NldHRpbmcSHQoLbWVyY2hhbnRfaWQYBSABKANCA+BBBUgAiAEBEhoKDXNhbGVzX2NvdW50cnkYBiABKAlIAYgBARISCgpmZWVkX2xhYmVsGAogASgJEh4KEWNhbXBhaWduX3ByaW9yaXR5GAcgASgFSAKIAQESGQoMZW5hYmxlX2xvY2FsGAggASgISAOIAQESIgoVdXNlX3ZlaGljbGVfaW52ZW50b3J5GAkgASgIQgPgQQVCDgoMX21lcmNoYW50X2lkQhAKDl9zYWxlc19jb3VudHJ5QhQKEl9jYW1wYWlnbl9wcmlvcml0eUIPCg1fZW5hYmxlX2xvY2FsGkIKD1RyYWNraW5nU2V0dGluZxIeCgx0cmFja2luZ191cmwYAiABKAlCA+BBA0gAiAEBQg8KDV90cmFja2luZ191cmwagAIKFEdlb1RhcmdldFR5cGVTZXR0aW5nEnMKGHBvc2l0aXZlX2dlb190YXJnZXRfdHlwZRgBIAEoDjJRLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmVudW1zLlBvc2l0aXZlR2VvVGFyZ2V0VHlwZUVudW0uUG9zaXRpdmVHZW9UYXJnZXRUeXBlEnMKGG5lZ2F0aXZlX2dlb190YXJnZXRfdHlwZRgCIAEoDjJRLmdvb2dsZS5hZHMuc2VhcmNoYWRzMzYwLnYwLmVudW1zLk5lZ2F0aXZlR2VvVGFyZ2V0VHlwZUVudW0uTmVnYXRpdmVHZW9UYXJnZXRUeXBlGmYKFVNlbGVjdGl2ZU9wdGltaXphdGlvbhJNChJjb252ZXJzaW9uX2FjdGlvbnMYAiADKAlCMfpBLgosc2VhcmNoYWRzMzYwLmdvb2dsZWFwaXMuY29tL0NvbnZlcnNpb25BY3Rpb24aiwEKF09wdGltaXphdGlvbkdvYWxTZXR0aW5nEnAKF29wdGltaXphdGlvbl9nb2FsX3R5cGVzGAEgAygOMk8uZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZW51bXMuT3B0aW1pemF0aW9uR29hbFR5cGVFbnVtLk9wdGltaXphdGlvbkdvYWxUeXBlOlrqQVcKJHNlYXJjaGFkczM2MC5nb29nbGVhcGlzLmNvbS9DYW1wYWlnbhIvY3VzdG9tZXJzL3tjdXN0b21lcl9pZH0vY2FtcGFpZ25zL3tjYW1wYWlnbl9pZH1CGwoZY2FtcGFpZ25fYmlkZGluZ19zdHJhdGVneUIFCgNfaWRCBwoFX25hbWVCGAoWX3RyYWNraW5nX3VybF90ZW1wbGF0ZUISChBfY2FtcGFpZ25fYnVkZ2V0Qg0KC19zdGFydF9kYXRlQgsKCV9lbmRfZGF0ZUITChFfZmluYWxfdXJsX3N1ZmZpeEIYChZfdXJsX2V4cGFuc2lvbl9vcHRfb3V0Qo0CCihjb20uZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAucmVzb3VyY2VzQg1DYW1wYWlnblByb3RvUAFaTWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL3NlYXJjaGFkczM2MC92MC9yZXNvdXJjZXM7cmVzb3VyY2VzogIHR0FTQTM2MKoCJEdvb2dsZS5BZHMuU2VhcmNoQWRzMzYwLlYwLlJlc291cmNlc8oCJEdvb2dsZVxBZHNcU2VhcmNoQWRzMzYwXFYwXFJlc291cmNlc+oCKEdvb2dsZTo6QWRzOjpTZWFyY2hBZHMzNjA6OlYwOjpSZXNvdXJjZXNiBnByb3RvMw", [file_google_ads_searchads360_v0_common_bidding, file_google_ads_searchads360_v0_common_custom_parameter, file_google_ads_searchads360_v0_common_frequency_cap, file_google_ads_searchads360_v0_common_real_time_bidding_setting, file_google_ads_searchads360_v0_enums_ad_serving_optimization_status, file_google_ads_searchads360_v0_enums_advertising_channel_sub_type, file_google_ads_searchads360_v0_enums_advertising_channel_type, file_google_ads_searchads360_v0_enums_asset_field_type, file_google_ads_searchads360_v0_enums_bidding_strategy_system_status, file_google_ads_searchads360_v0_enums_bidding_strategy_type, file_google_ads_searchads360_v0_enums_campaign_serving_status, file_google_ads_searchads360_v0_enums_campaign_status, file_google_ads_searchads360_v0_enums_negative_geo_target_type, file_google_ads_searchads360_v0_enums_optimization_goal_type, file_google_ads_searchads360_v0_enums_positive_geo_target_type, file_google_api_field_behavior, file_google_api_resource]);

/**
 * A campaign.
 *
 * @generated from message google.ads.searchads360.v0.resources.Campaign
 */
export type Campaign = Message<"google.ads.searchads360.v0.resources.Campaign"> & {
  /**
   * Immutable. The resource name of the campaign.
   * Campaign resource names have the form:
   *
   * `customers/{customer_id}/campaigns/{campaign_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The ID of the campaign.
   *
   * @generated from field: optional int64 id = 59;
   */
  id?: bigint;

  /**
   * The name of the campaign.
   *
   * This field is required and should not be empty when creating new
   * campaigns.
   *
   * It must not contain any null (code point 0x0), NL line feed
   * (code point 0xA) or carriage return (code point 0xD) characters.
   *
   * @generated from field: optional string name = 58;
   */
  name?: string;

  /**
   * The status of the campaign.
   *
   * When a new campaign is added, the status defaults to ENABLED.
   *
   * @generated from field: google.ads.searchads360.v0.enums.CampaignStatusEnum.CampaignStatus status = 5;
   */
  status: CampaignStatusEnum_CampaignStatus;

  /**
   * Output only. The ad serving status of the campaign.
   *
   * @generated from field: google.ads.searchads360.v0.enums.CampaignServingStatusEnum.CampaignServingStatus serving_status = 21;
   */
  servingStatus: CampaignServingStatusEnum_CampaignServingStatus;

  /**
   * Output only. The system status of the campaign's bidding strategy.
   *
   * @generated from field: google.ads.searchads360.v0.enums.BiddingStrategySystemStatusEnum.BiddingStrategySystemStatus bidding_strategy_system_status = 78;
   */
  biddingStrategySystemStatus: BiddingStrategySystemStatusEnum_BiddingStrategySystemStatus;

  /**
   * The ad serving optimization status of the campaign.
   *
   * @generated from field: google.ads.searchads360.v0.enums.AdServingOptimizationStatusEnum.AdServingOptimizationStatus ad_serving_optimization_status = 8;
   */
  adServingOptimizationStatus: AdServingOptimizationStatusEnum_AdServingOptimizationStatus;

  /**
   * Immutable. The primary serving target for ads within the campaign.
   * The targeting options can be refined in `network_settings`.
   *
   * This field is required and should not be empty when creating new
   * campaigns.
   *
   * Can be set only when creating campaigns.
   * After the campaign is created, the field can not be changed.
   *
   * @generated from field: google.ads.searchads360.v0.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType advertising_channel_type = 9;
   */
  advertisingChannelType: AdvertisingChannelTypeEnum_AdvertisingChannelType;

  /**
   * Immutable. Optional refinement to `advertising_channel_type`.
   * Must be a valid sub-type of the parent channel type.
   *
   * Can be set only when creating campaigns.
   * After campaign is created, the field can not be changed.
   *
   * @generated from field: google.ads.searchads360.v0.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType advertising_channel_sub_type = 10;
   */
  advertisingChannelSubType: AdvertisingChannelSubTypeEnum_AdvertisingChannelSubType;

  /**
   * The URL template for constructing a tracking URL.
   *
   * @generated from field: optional string tracking_url_template = 60;
   */
  trackingUrlTemplate?: string;

  /**
   * The list of mappings used to substitute custom parameter tags in a
   * `tracking_url_template`, `final_urls`, or `mobile_final_urls`.
   *
   * @generated from field: repeated google.ads.searchads360.v0.common.CustomParameter url_custom_parameters = 12;
   */
  urlCustomParameters: CustomParameter[];

  /**
   * Settings for Real-Time Bidding, a feature only available for campaigns
   * targeting the Ad Exchange network.
   *
   * @generated from field: google.ads.searchads360.v0.common.RealTimeBiddingSetting real_time_bidding_setting = 39;
   */
  realTimeBiddingSetting?: RealTimeBiddingSetting;

  /**
   * The network settings for the campaign.
   *
   * @generated from field: google.ads.searchads360.v0.resources.Campaign.NetworkSettings network_settings = 14;
   */
  networkSettings?: Campaign_NetworkSettings;

  /**
   * The setting for controlling Dynamic Search Ads (DSA).
   *
   * @generated from field: google.ads.searchads360.v0.resources.Campaign.DynamicSearchAdsSetting dynamic_search_ads_setting = 33;
   */
  dynamicSearchAdsSetting?: Campaign_DynamicSearchAdsSetting;

  /**
   * The setting for controlling Shopping campaigns.
   *
   * @generated from field: google.ads.searchads360.v0.resources.Campaign.ShoppingSetting shopping_setting = 36;
   */
  shoppingSetting?: Campaign_ShoppingSetting;

  /**
   * The setting for ads geotargeting.
   *
   * @generated from field: google.ads.searchads360.v0.resources.Campaign.GeoTargetTypeSetting geo_target_type_setting = 47;
   */
  geoTargetTypeSetting?: Campaign_GeoTargetTypeSetting;

  /**
   * Output only. The resource names of labels attached to this campaign.
   *
   * @generated from field: repeated string labels = 61;
   */
  labels: string[];

  /**
   * The budget of the campaign.
   *
   * @generated from field: optional string campaign_budget = 62;
   */
  campaignBudget?: string;

  /**
   * Output only. The type of bidding strategy.
   *
   * A bidding strategy can be created by setting either the bidding scheme to
   * create a standard bidding strategy or the `bidding_strategy` field to
   * create a portfolio bidding strategy.
   *
   * This field is read-only.
   *
   * @generated from field: google.ads.searchads360.v0.enums.BiddingStrategyTypeEnum.BiddingStrategyType bidding_strategy_type = 22;
   */
  biddingStrategyType: BiddingStrategyTypeEnum_BiddingStrategyType;

  /**
   * Output only. Resource name of AccessibleBiddingStrategy, a read-only view
   * of the unrestricted attributes of the attached portfolio bidding strategy
   * identified by 'bidding_strategy'. Empty, if the campaign does not use a
   * portfolio strategy. Unrestricted strategy attributes are available to all
   * customers with whom the strategy is shared and are read from the
   * AccessibleBiddingStrategy resource. In contrast, restricted attributes are
   * only available to the owner customer of the strategy and their managers.
   * Restricted attributes can only be read from the BiddingStrategy resource.
   *
   * @generated from field: string accessible_bidding_strategy = 71;
   */
  accessibleBiddingStrategy: string;

  /**
   * The date when campaign started in serving customer's timezone in YYYY-MM-DD
   * format.
   *
   * @generated from field: optional string start_date = 63;
   */
  startDate?: string;

  /**
   * The last day of the campaign in serving customer's timezone in YYYY-MM-DD
   * format. On create, defaults to 2037-12-30, which means the campaign will
   * run indefinitely. To set an existing campaign to run indefinitely, set this
   * field to 2037-12-30.
   *
   * @generated from field: optional string end_date = 64;
   */
  endDate?: string;

  /**
   * Suffix used to append query parameters to landing pages that are served
   * with parallel tracking.
   *
   * @generated from field: optional string final_url_suffix = 65;
   */
  finalUrlSuffix?: string;

  /**
   * A list that limits how often each user will see this campaign's ads.
   *
   * @generated from field: repeated google.ads.searchads360.v0.common.FrequencyCapEntry frequency_caps = 40;
   */
  frequencyCaps: FrequencyCapEntry[];

  /**
   * Selective optimization setting for this campaign, which includes a set of
   * conversion actions to optimize this campaign towards.
   * This feature only applies to app campaigns that use MULTI_CHANNEL as
   * AdvertisingChannelType and APP_CAMPAIGN or APP_CAMPAIGN_FOR_ENGAGEMENT as
   * AdvertisingChannelSubType.
   *
   * @generated from field: google.ads.searchads360.v0.resources.Campaign.SelectiveOptimization selective_optimization = 45;
   */
  selectiveOptimization?: Campaign_SelectiveOptimization;

  /**
   * Optimization goal setting for this campaign, which includes a set of
   * optimization goal types.
   *
   * @generated from field: google.ads.searchads360.v0.resources.Campaign.OptimizationGoalSetting optimization_goal_setting = 54;
   */
  optimizationGoalSetting?: Campaign_OptimizationGoalSetting;

  /**
   * Output only. Campaign-level settings for tracking information.
   *
   * @generated from field: google.ads.searchads360.v0.resources.Campaign.TrackingSetting tracking_setting = 46;
   */
  trackingSetting?: Campaign_TrackingSetting;

  /**
   * Output only. ID of the campaign in the external engine account. This field
   * is for non-Google Ads account only, for example, Yahoo Japan, Microsoft,
   * Baidu etc. For Google Ads entity, use "campaign.id" instead.
   *
   * @generated from field: string engine_id = 68;
   */
  engineId: string;

  /**
   * The asset field types that should be excluded from this campaign. Asset
   * links with these field types will not be inherited by this campaign from
   * the upper level.
   *
   * @generated from field: repeated google.ads.searchads360.v0.enums.AssetFieldTypeEnum.AssetFieldType excluded_parent_asset_field_types = 69;
   */
  excludedParentAssetFieldTypes: AssetFieldTypeEnum_AssetFieldType[];

  /**
   * Output only. The timestamp when this campaign was created. The timestamp is
   * in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.
   * create_time will be deprecated in v1. Use creation_time instead.
   *
   * @generated from field: string create_time = 79;
   */
  createTime: string;

  /**
   * Output only. The timestamp when this campaign was created. The timestamp is
   * in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format.
   *
   * @generated from field: string creation_time = 84;
   */
  creationTime: string;

  /**
   * Output only. The datetime when this campaign was last modified. The
   * datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss"
   * format.
   *
   * @generated from field: string last_modified_time = 70;
   */
  lastModifiedTime: string;

  /**
   * Represents opting out of URL expansion to more targeted URLs. If opted out
   * (true), only the final URLs in the asset group or URLs specified in the
   * advertiser's Google Merchant Center or business data feeds are targeted.
   * If opted in (false), the entire domain will be targeted. This field can
   * only be set for Performance Max campaigns, where the default value is
   * false.
   *
   * @generated from field: optional bool url_expansion_opt_out = 72;
   */
  urlExpansionOptOut?: boolean;

  /**
   * The bidding strategy for the campaign.
   *
   * Must be either portfolio (created through BiddingStrategy service) or
   * standard, that is embedded into the campaign.
   *
   * @generated from oneof google.ads.searchads360.v0.resources.Campaign.campaign_bidding_strategy
   */
  campaignBiddingStrategy: {
    /**
     * Portfolio bidding strategy used by campaign.
     *
     * @generated from field: string bidding_strategy = 67;
     */
    value: string;
    case: "biddingStrategy";
  } | {
    /**
     * Standard Manual CPA bidding strategy.
     * Manual bidding strategy that allows advertiser to set the bid per
     * advertiser-specified action. Supported only for Local Services campaigns.
     *
     * @generated from field: google.ads.searchads360.v0.common.ManualCpa manual_cpa = 74;
     */
    value: ManualCpa;
    case: "manualCpa";
  } | {
    /**
     * Standard Manual CPC bidding strategy.
     * Manual click-based bidding where user pays per click.
     *
     * @generated from field: google.ads.searchads360.v0.common.ManualCpc manual_cpc = 24;
     */
    value: ManualCpc;
    case: "manualCpc";
  } | {
    /**
     * Standard Manual CPM bidding strategy.
     * Manual impression-based bidding where user pays per thousand
     * impressions.
     *
     * @generated from field: google.ads.searchads360.v0.common.ManualCpm manual_cpm = 25;
     */
    value: ManualCpm;
    case: "manualCpm";
  } | {
    /**
     * Standard Maximize Conversions bidding strategy that automatically
     * maximizes number of conversions while spending your budget.
     *
     * @generated from field: google.ads.searchads360.v0.common.MaximizeConversions maximize_conversions = 30;
     */
    value: MaximizeConversions;
    case: "maximizeConversions";
  } | {
    /**
     * Standard Maximize Conversion Value bidding strategy that automatically
     * sets bids to maximize revenue while spending your budget.
     *
     * @generated from field: google.ads.searchads360.v0.common.MaximizeConversionValue maximize_conversion_value = 31;
     */
    value: MaximizeConversionValue;
    case: "maximizeConversionValue";
  } | {
    /**
     * Standard Target CPA bidding strategy that automatically sets bids to
     * help get as many conversions as possible at the target
     * cost-per-acquisition (CPA) you set.
     *
     * @generated from field: google.ads.searchads360.v0.common.TargetCpa target_cpa = 26;
     */
    value: TargetCpa;
    case: "targetCpa";
  } | {
    /**
     * Target Impression Share bidding strategy. An automated bidding strategy
     * that sets bids to achieve a chosen percentage of impressions.
     *
     * @generated from field: google.ads.searchads360.v0.common.TargetImpressionShare target_impression_share = 48;
     */
    value: TargetImpressionShare;
    case: "targetImpressionShare";
  } | {
    /**
     * Standard Target ROAS bidding strategy that automatically maximizes
     * revenue while averaging a specific target return on ad spend (ROAS).
     *
     * @generated from field: google.ads.searchads360.v0.common.TargetRoas target_roas = 29;
     */
    value: TargetRoas;
    case: "targetRoas";
  } | {
    /**
     * Standard Target Spend bidding strategy that automatically sets your bids
     * to help get as many clicks as possible within your budget.
     *
     * @generated from field: google.ads.searchads360.v0.common.TargetSpend target_spend = 27;
     */
    value: TargetSpend;
    case: "targetSpend";
  } | {
    /**
     * Standard Percent Cpc bidding strategy where bids are a fraction of the
     * advertised price for some good or service.
     *
     * @generated from field: google.ads.searchads360.v0.common.PercentCpc percent_cpc = 34;
     */
    value: PercentCpc;
    case: "percentCpc";
  } | {
    /**
     * A bidding strategy that automatically optimizes cost per thousand
     * impressions.
     *
     * @generated from field: google.ads.searchads360.v0.common.TargetCpm target_cpm = 41;
     */
    value: TargetCpm;
    case: "targetCpm";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.searchads360.v0.resources.Campaign.
 * Use `create(CampaignSchema)` to create a new message.
 */
export const CampaignSchema: GenMessage<Campaign> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_campaign, 0);

/**
 * The network settings for the campaign.
 *
 * @generated from message google.ads.searchads360.v0.resources.Campaign.NetworkSettings
 */
export type Campaign_NetworkSettings = Message<"google.ads.searchads360.v0.resources.Campaign.NetworkSettings"> & {
  /**
   * Whether ads will be served with google.com search results.
   *
   * @generated from field: optional bool target_google_search = 5;
   */
  targetGoogleSearch?: boolean;

  /**
   * Whether ads will be served on partner sites in the Google Search Network
   * (requires `target_google_search` to also be `true`).
   *
   * @generated from field: optional bool target_search_network = 6;
   */
  targetSearchNetwork?: boolean;

  /**
   * Whether ads will be served on specified placements in the Google Display
   * Network. Placements are specified using the Placement criterion.
   *
   * @generated from field: optional bool target_content_network = 7;
   */
  targetContentNetwork?: boolean;

  /**
   * Whether ads will be served on the Google Partner Network.
   * This is available only to some select Google partner accounts.
   *
   * @generated from field: optional bool target_partner_search_network = 8;
   */
  targetPartnerSearchNetwork?: boolean;
};

/**
 * Describes the message google.ads.searchads360.v0.resources.Campaign.NetworkSettings.
 * Use `create(Campaign_NetworkSettingsSchema)` to create a new message.
 */
export const Campaign_NetworkSettingsSchema: GenMessage<Campaign_NetworkSettings> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_campaign, 0, 0);

/**
 * The setting for controlling Dynamic Search Ads (DSA).
 *
 * @generated from message google.ads.searchads360.v0.resources.Campaign.DynamicSearchAdsSetting
 */
export type Campaign_DynamicSearchAdsSetting = Message<"google.ads.searchads360.v0.resources.Campaign.DynamicSearchAdsSetting"> & {
  /**
   * Required. The Internet domain name that this setting represents, for
   * example, "google.com" or "www.google.com".
   *
   * @generated from field: string domain_name = 6;
   */
  domainName: string;

  /**
   * Required. The language code specifying the language of the domain, for
   * example, "en".
   *
   * @generated from field: string language_code = 7;
   */
  languageCode: string;

  /**
   * Whether the campaign uses advertiser supplied URLs exclusively.
   *
   * @generated from field: optional bool use_supplied_urls_only = 8;
   */
  useSuppliedUrlsOnly?: boolean;
};

/**
 * Describes the message google.ads.searchads360.v0.resources.Campaign.DynamicSearchAdsSetting.
 * Use `create(Campaign_DynamicSearchAdsSettingSchema)` to create a new message.
 */
export const Campaign_DynamicSearchAdsSettingSchema: GenMessage<Campaign_DynamicSearchAdsSetting> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_campaign, 0, 1);

/**
 * The setting for Shopping campaigns. Defines the universe of products that
 * can be advertised by the campaign, and how this campaign interacts with
 * other Shopping campaigns.
 *
 * @generated from message google.ads.searchads360.v0.resources.Campaign.ShoppingSetting
 */
export type Campaign_ShoppingSetting = Message<"google.ads.searchads360.v0.resources.Campaign.ShoppingSetting"> & {
  /**
   * Immutable. ID of the Merchant Center account.
   * This field is required for create operations. This field is immutable for
   * Shopping campaigns.
   *
   * @generated from field: optional int64 merchant_id = 5;
   */
  merchantId?: bigint;

  /**
   * Sales country of products to include in the campaign.
   *
   *
   * @generated from field: optional string sales_country = 6;
   */
  salesCountry?: string;

  /**
   * Feed label of products to include in the campaign.
   * Only one of feed_label or sales_country can be set.
   * If used instead of sales_country, the feed_label field accepts country
   * codes in the same format for example: 'XX'.
   * Otherwise can be any string used for feed label in Google Merchant
   * Center.
   *
   * @generated from field: string feed_label = 10;
   */
  feedLabel: string;

  /**
   * Priority of the campaign. Campaigns with numerically higher priorities
   * take precedence over those with lower priorities.
   * This field is required for Shopping campaigns, with values between 0 and
   * 2, inclusive.
   * This field is optional for Smart Shopping campaigns, but must be equal to
   * 3 if set.
   *
   * @generated from field: optional int32 campaign_priority = 7;
   */
  campaignPriority?: number;

  /**
   * Whether to include local products.
   *
   * @generated from field: optional bool enable_local = 8;
   */
  enableLocal?: boolean;

  /**
   * Immutable. Whether to target Vehicle Listing inventory.
   *
   * @generated from field: bool use_vehicle_inventory = 9;
   */
  useVehicleInventory: boolean;
};

/**
 * Describes the message google.ads.searchads360.v0.resources.Campaign.ShoppingSetting.
 * Use `create(Campaign_ShoppingSettingSchema)` to create a new message.
 */
export const Campaign_ShoppingSettingSchema: GenMessage<Campaign_ShoppingSetting> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_campaign, 0, 2);

/**
 * Campaign-level settings for tracking information.
 *
 * @generated from message google.ads.searchads360.v0.resources.Campaign.TrackingSetting
 */
export type Campaign_TrackingSetting = Message<"google.ads.searchads360.v0.resources.Campaign.TrackingSetting"> & {
  /**
   * Output only. The url used for dynamic tracking.
   *
   * @generated from field: optional string tracking_url = 2;
   */
  trackingUrl?: string;
};

/**
 * Describes the message google.ads.searchads360.v0.resources.Campaign.TrackingSetting.
 * Use `create(Campaign_TrackingSettingSchema)` to create a new message.
 */
export const Campaign_TrackingSettingSchema: GenMessage<Campaign_TrackingSetting> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_campaign, 0, 3);

/**
 * Represents a collection of settings related to ads geotargeting.
 *
 * @generated from message google.ads.searchads360.v0.resources.Campaign.GeoTargetTypeSetting
 */
export type Campaign_GeoTargetTypeSetting = Message<"google.ads.searchads360.v0.resources.Campaign.GeoTargetTypeSetting"> & {
  /**
   * The setting used for positive geotargeting in this particular campaign.
   *
   * @generated from field: google.ads.searchads360.v0.enums.PositiveGeoTargetTypeEnum.PositiveGeoTargetType positive_geo_target_type = 1;
   */
  positiveGeoTargetType: PositiveGeoTargetTypeEnum_PositiveGeoTargetType;

  /**
   * The setting used for negative geotargeting in this particular campaign.
   *
   * @generated from field: google.ads.searchads360.v0.enums.NegativeGeoTargetTypeEnum.NegativeGeoTargetType negative_geo_target_type = 2;
   */
  negativeGeoTargetType: NegativeGeoTargetTypeEnum_NegativeGeoTargetType;
};

/**
 * Describes the message google.ads.searchads360.v0.resources.Campaign.GeoTargetTypeSetting.
 * Use `create(Campaign_GeoTargetTypeSettingSchema)` to create a new message.
 */
export const Campaign_GeoTargetTypeSettingSchema: GenMessage<Campaign_GeoTargetTypeSetting> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_campaign, 0, 4);

/**
 * Selective optimization setting for this campaign, which includes a set of
 * conversion actions to optimize this campaign towards.
 * This feature only applies to app campaigns that use MULTI_CHANNEL as
 * AdvertisingChannelType and APP_CAMPAIGN or APP_CAMPAIGN_FOR_ENGAGEMENT as
 * AdvertisingChannelSubType.
 *
 * @generated from message google.ads.searchads360.v0.resources.Campaign.SelectiveOptimization
 */
export type Campaign_SelectiveOptimization = Message<"google.ads.searchads360.v0.resources.Campaign.SelectiveOptimization"> & {
  /**
   * The selected set of conversion actions for optimizing this campaign.
   *
   * @generated from field: repeated string conversion_actions = 2;
   */
  conversionActions: string[];
};

/**
 * Describes the message google.ads.searchads360.v0.resources.Campaign.SelectiveOptimization.
 * Use `create(Campaign_SelectiveOptimizationSchema)` to create a new message.
 */
export const Campaign_SelectiveOptimizationSchema: GenMessage<Campaign_SelectiveOptimization> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_campaign, 0, 5);

/**
 * Optimization goal setting for this campaign, which includes a set of
 * optimization goal types.
 *
 * @generated from message google.ads.searchads360.v0.resources.Campaign.OptimizationGoalSetting
 */
export type Campaign_OptimizationGoalSetting = Message<"google.ads.searchads360.v0.resources.Campaign.OptimizationGoalSetting"> & {
  /**
   * The list of optimization goal types.
   *
   * @generated from field: repeated google.ads.searchads360.v0.enums.OptimizationGoalTypeEnum.OptimizationGoalType optimization_goal_types = 1;
   */
  optimizationGoalTypes: OptimizationGoalTypeEnum_OptimizationGoalType[];
};

/**
 * Describes the message google.ads.searchads360.v0.resources.Campaign.OptimizationGoalSetting.
 * Use `create(Campaign_OptimizationGoalSettingSchema)` to create a new message.
 */
export const Campaign_OptimizationGoalSettingSchema: GenMessage<Campaign_OptimizationGoalSetting> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_resources_campaign, 0, 6);
