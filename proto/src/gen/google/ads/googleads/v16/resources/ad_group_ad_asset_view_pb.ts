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
// @generated from file google/ads/googleads/v16/resources/ad_group_ad_asset_view.proto (package google.ads.googleads.v16.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { PolicyTopicEntry } from "../common/policy_pb";
import { file_google_ads_googleads_v16_common_policy } from "../common/policy_pb";
import type { AssetFieldTypeEnum_AssetFieldType } from "../enums/asset_field_type_pb";
import { file_google_ads_googleads_v16_enums_asset_field_type } from "../enums/asset_field_type_pb";
import type { AssetPerformanceLabelEnum_AssetPerformanceLabel } from "../enums/asset_performance_label_pb";
import { file_google_ads_googleads_v16_enums_asset_performance_label } from "../enums/asset_performance_label_pb";
import type { AssetSourceEnum_AssetSource } from "../enums/asset_source_pb";
import { file_google_ads_googleads_v16_enums_asset_source } from "../enums/asset_source_pb";
import type { PolicyApprovalStatusEnum_PolicyApprovalStatus } from "../enums/policy_approval_status_pb";
import { file_google_ads_googleads_v16_enums_policy_approval_status } from "../enums/policy_approval_status_pb";
import type { PolicyReviewStatusEnum_PolicyReviewStatus } from "../enums/policy_review_status_pb";
import { file_google_ads_googleads_v16_enums_policy_review_status } from "../enums/policy_review_status_pb";
import type { ServedAssetFieldTypeEnum_ServedAssetFieldType } from "../enums/served_asset_field_type_pb";
import { file_google_ads_googleads_v16_enums_served_asset_field_type } from "../enums/served_asset_field_type_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/resources/ad_group_ad_asset_view.proto.
 */
export const file_google_ads_googleads_v16_resources_ad_group_ad_asset_view: GenFile = /*@__PURE__*/
  fileDesc("Cj9nb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzL2FkX2dyb3VwX2FkX2Fzc2V0X3ZpZXcucHJvdG8SImdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMimQcKEkFkR3JvdXBBZEFzc2V0VmlldxJKCg1yZXNvdXJjZV9uYW1lGAEgASgJQjPgQQP6QS0KK2dvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9BZEdyb3VwQWRBc3NldFZpZXcSRAoLYWRfZ3JvdXBfYWQYCSABKAlCKuBBA/pBJAoiZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0FkR3JvdXBBZEgAiAEBEjoKBWFzc2V0GAogASgJQibgQQP6QSAKHmdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9Bc3NldEgBiAEBEloKCmZpZWxkX3R5cGUYAiABKA4yQS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuQXNzZXRGaWVsZFR5cGVFbnVtLkFzc2V0RmllbGRUeXBlQgPgQQMSGQoHZW5hYmxlZBgIIAEoCEID4EEDSAKIAQESXAoOcG9saWN5X3N1bW1hcnkYAyABKAsyPy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYucmVzb3VyY2VzLkFkR3JvdXBBZEFzc2V0UG9saWN5U3VtbWFyeUID4EEDEm8KEXBlcmZvcm1hbmNlX2xhYmVsGAQgASgOMk8uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zLkFzc2V0UGVyZm9ybWFuY2VMYWJlbEVudW0uQXNzZXRQZXJmb3JtYW5jZUxhYmVsQgPgQQMSaAoMcGlubmVkX2ZpZWxkGAsgASgOMk0uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zLlNlcnZlZEFzc2V0RmllbGRUeXBlRW51bS5TZXJ2ZWRBc3NldEZpZWxkVHlwZUID4EEDElAKBnNvdXJjZRgMIAEoDjI7Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcy5Bc3NldFNvdXJjZUVudW0uQXNzZXRTb3VyY2VCA+BBAzqMAepBiAEKK2dvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9BZEdyb3VwQWRBc3NldFZpZXcSWWN1c3RvbWVycy97Y3VzdG9tZXJfaWR9L2FkR3JvdXBBZEFzc2V0Vmlld3Mve2FkX2dyb3VwX2lkfX57YWRfaWR9fnthc3NldF9pZH1+e2ZpZWxkX3R5cGV9Qg4KDF9hZF9ncm91cF9hZEIICgZfYXNzZXRCCgoIX2VuYWJsZWQixwIKG0FkR3JvdXBBZEFzc2V0UG9saWN5U3VtbWFyeRJUChRwb2xpY3lfdG9waWNfZW50cmllcxgBIAMoCzIxLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb24uUG9saWN5VG9waWNFbnRyeUID4EEDEmUKDXJldmlld19zdGF0dXMYAiABKA4ySS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuUG9saWN5UmV2aWV3U3RhdHVzRW51bS5Qb2xpY3lSZXZpZXdTdGF0dXNCA+BBAxJrCg9hcHByb3ZhbF9zdGF0dXMYAyABKA4yTS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuUG9saWN5QXBwcm92YWxTdGF0dXNFbnVtLlBvbGljeUFwcHJvdmFsU3RhdHVzQgPgQQNCiQIKJmNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYucmVzb3VyY2VzQhdBZEdyb3VwQWRBc3NldFZpZXdQcm90b1ABWktnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L3Jlc291cmNlcztyZXNvdXJjZXOiAgNHQUGqAiJHb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuUmVzb3VyY2VzygIiR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XFJlc291cmNlc+oCJkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6UmVzb3VyY2VzYgZwcm90bzM", [file_google_ads_googleads_v16_common_policy, file_google_ads_googleads_v16_enums_asset_field_type, file_google_ads_googleads_v16_enums_asset_performance_label, file_google_ads_googleads_v16_enums_asset_source, file_google_ads_googleads_v16_enums_policy_approval_status, file_google_ads_googleads_v16_enums_policy_review_status, file_google_ads_googleads_v16_enums_served_asset_field_type, file_google_api_field_behavior, file_google_api_resource]);

/**
 * A link between an AdGroupAd and an Asset.
 * Currently we only support AdGroupAdAssetView for AppAds and Responsive Search
 * Ads.
 *
 * @generated from message google.ads.googleads.v16.resources.AdGroupAdAssetView
 */
export type AdGroupAdAssetView = Message<"google.ads.googleads.v16.resources.AdGroupAdAssetView"> & {
  /**
   * Output only. The resource name of the ad group ad asset view.
   * Ad group ad asset view resource names have the form (Before V4):
   *
   * `customers/{customer_id}/adGroupAdAssets/{AdGroupAdAsset.ad_group_id}~{AdGroupAdAsset.ad.ad_id}~{AdGroupAdAsset.asset_id}~{AdGroupAdAsset.field_type}`
   *
   * Ad group ad asset view resource names have the form (Beginning from V4):
   *
   * `customers/{customer_id}/adGroupAdAssetViews/{AdGroupAdAsset.ad_group_id}~{AdGroupAdAsset.ad_id}~{AdGroupAdAsset.asset_id}~{AdGroupAdAsset.field_type}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The ad group ad to which the asset is linked.
   *
   * @generated from field: optional string ad_group_ad = 9;
   */
  adGroupAd?: string;

  /**
   * Output only. The asset which is linked to the ad group ad.
   *
   * @generated from field: optional string asset = 10;
   */
  asset?: string;

  /**
   * Output only. Role that the asset takes in the ad.
   *
   * @generated from field: google.ads.googleads.v16.enums.AssetFieldTypeEnum.AssetFieldType field_type = 2;
   */
  fieldType: AssetFieldTypeEnum_AssetFieldType;

  /**
   * Output only. The status between the asset and the latest version of the ad.
   * If true, the asset is linked to the latest version of the ad. If false, it
   * means the link once existed but has been removed and is no longer present
   * in the latest version of the ad.
   *
   * @generated from field: optional bool enabled = 8;
   */
  enabled?: boolean;

  /**
   * Output only. Policy information for the ad group ad asset.
   *
   * @generated from field: google.ads.googleads.v16.resources.AdGroupAdAssetPolicySummary policy_summary = 3;
   */
  policySummary?: AdGroupAdAssetPolicySummary;

  /**
   * Output only. Performance of an asset linkage.
   *
   * @generated from field: google.ads.googleads.v16.enums.AssetPerformanceLabelEnum.AssetPerformanceLabel performance_label = 4;
   */
  performanceLabel: AssetPerformanceLabelEnum_AssetPerformanceLabel;

  /**
   * Output only. Pinned field.
   *
   * @generated from field: google.ads.googleads.v16.enums.ServedAssetFieldTypeEnum.ServedAssetFieldType pinned_field = 11;
   */
  pinnedField: ServedAssetFieldTypeEnum_ServedAssetFieldType;

  /**
   * Output only. Source of the ad group ad asset.
   *
   * @generated from field: google.ads.googleads.v16.enums.AssetSourceEnum.AssetSource source = 12;
   */
  source: AssetSourceEnum_AssetSource;
};

/**
 * Describes the message google.ads.googleads.v16.resources.AdGroupAdAssetView.
 * Use `create(AdGroupAdAssetViewSchema)` to create a new message.
 */
export const AdGroupAdAssetViewSchema: GenMessage<AdGroupAdAssetView> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_ad_group_ad_asset_view, 0);

/**
 * Contains policy information for an ad group ad asset.
 *
 * @generated from message google.ads.googleads.v16.resources.AdGroupAdAssetPolicySummary
 */
export type AdGroupAdAssetPolicySummary = Message<"google.ads.googleads.v16.resources.AdGroupAdAssetPolicySummary"> & {
  /**
   * Output only. The list of policy findings for the ad group ad asset.
   *
   * @generated from field: repeated google.ads.googleads.v16.common.PolicyTopicEntry policy_topic_entries = 1;
   */
  policyTopicEntries: PolicyTopicEntry[];

  /**
   * Output only. Where in the review process this ad group ad asset is.
   *
   * @generated from field: google.ads.googleads.v16.enums.PolicyReviewStatusEnum.PolicyReviewStatus review_status = 2;
   */
  reviewStatus: PolicyReviewStatusEnum_PolicyReviewStatus;

  /**
   * Output only. The overall approval status of this ad group ad asset,
   * calculated based on the status of its individual policy topic entries.
   *
   * @generated from field: google.ads.googleads.v16.enums.PolicyApprovalStatusEnum.PolicyApprovalStatus approval_status = 3;
   */
  approvalStatus: PolicyApprovalStatusEnum_PolicyApprovalStatus;
};

/**
 * Describes the message google.ads.googleads.v16.resources.AdGroupAdAssetPolicySummary.
 * Use `create(AdGroupAdAssetPolicySummarySchema)` to create a new message.
 */
export const AdGroupAdAssetPolicySummarySchema: GenMessage<AdGroupAdAssetPolicySummary> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_ad_group_ad_asset_view, 1);
