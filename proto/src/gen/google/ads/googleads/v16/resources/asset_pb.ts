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
// @generated from file google/ads/googleads/v16/resources/asset.proto (package google.ads.googleads.v16.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { BookOnGoogleAsset, CallAsset, CalloutAsset, CallToActionAsset, DiscoveryCarouselCardAsset, DynamicCustomAsset, DynamicEducationAsset, DynamicFlightsAsset, DynamicHotelsAndRentalsAsset, DynamicJobsAsset, DynamicLocalAsset, DynamicRealEstateAsset, DynamicTravelAsset, HotelCalloutAsset, HotelPropertyAsset, ImageAsset, LeadFormAsset, LocationAsset, MediaBundleAsset, MobileAppAsset, PageFeedAsset, PriceAsset, PromotionAsset, SitelinkAsset, StructuredSnippetAsset, TextAsset, YoutubeVideoAsset } from "../common/asset_types_pb";
import { file_google_ads_googleads_v16_common_asset_types } from "../common/asset_types_pb";
import type { CustomParameter } from "../common/custom_parameter_pb";
import { file_google_ads_googleads_v16_common_custom_parameter } from "../common/custom_parameter_pb";
import type { PolicyTopicEntry } from "../common/policy_pb";
import { file_google_ads_googleads_v16_common_policy } from "../common/policy_pb";
import type { AssetFieldTypeEnum_AssetFieldType } from "../enums/asset_field_type_pb";
import { file_google_ads_googleads_v16_enums_asset_field_type } from "../enums/asset_field_type_pb";
import type { AssetSourceEnum_AssetSource } from "../enums/asset_source_pb";
import { file_google_ads_googleads_v16_enums_asset_source } from "../enums/asset_source_pb";
import type { AssetTypeEnum_AssetType } from "../enums/asset_type_pb";
import { file_google_ads_googleads_v16_enums_asset_type } from "../enums/asset_type_pb";
import type { PolicyApprovalStatusEnum_PolicyApprovalStatus } from "../enums/policy_approval_status_pb";
import { file_google_ads_googleads_v16_enums_policy_approval_status } from "../enums/policy_approval_status_pb";
import type { PolicyReviewStatusEnum_PolicyReviewStatus } from "../enums/policy_review_status_pb";
import { file_google_ads_googleads_v16_enums_policy_review_status } from "../enums/policy_review_status_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/resources/asset.proto.
 */
export const file_google_ads_googleads_v16_resources_asset: GenFile = /*@__PURE__*/
  fileDesc("Ci5nb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzL2Fzc2V0LnByb3RvEiJnb29nbGUuYWRzLmdvb2dsZWFkcy52MTYucmVzb3VyY2VzIuwXCgVBc3NldBI9Cg1yZXNvdXJjZV9uYW1lGAEgASgJQibgQQX6QSAKHmdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9Bc3NldBIUCgJpZBgLIAEoA0ID4EEDSAGIAQESEQoEbmFtZRgMIAEoCUgCiAEBEkoKBHR5cGUYBCABKA4yNy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuQXNzZXRUeXBlRW51bS5Bc3NldFR5cGVCA+BBAxISCgpmaW5hbF91cmxzGA4gAygJEhkKEWZpbmFsX21vYmlsZV91cmxzGBAgAygJEiIKFXRyYWNraW5nX3VybF90ZW1wbGF0ZRgRIAEoCUgDiAEBEk8KFXVybF9jdXN0b21fcGFyYW1ldGVycxgSIAMoCzIwLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb24uQ3VzdG9tUGFyYW1ldGVyEh0KEGZpbmFsX3VybF9zdWZmaXgYEyABKAlIBIgBARJQCgZzb3VyY2UYJiABKA4yOy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuQXNzZXRTb3VyY2VFbnVtLkFzc2V0U291cmNlQgPgQQMSUwoOcG9saWN5X3N1bW1hcnkYDSABKAsyNi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYucmVzb3VyY2VzLkFzc2V0UG9saWN5U3VtbWFyeUID4EEDEmkKG2ZpZWxkX3R5cGVfcG9saWN5X3N1bW1hcmllcxgoIAMoCzI/Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMuQXNzZXRGaWVsZFR5cGVQb2xpY3lTdW1tYXJ5QgPgQQMSVgoTeW91dHViZV92aWRlb19hc3NldBgFIAEoCzIyLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb24uWW91dHViZVZpZGVvQXNzZXRCA+BBBUgAElQKEm1lZGlhX2J1bmRsZV9hc3NldBgGIAEoCzIxLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb24uTWVkaWFCdW5kbGVBc3NldEID4EEFSAASRwoLaW1hZ2VfYXNzZXQYByABKAsyKy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuY29tbW9uLkltYWdlQXNzZXRCA+BBA0gAEkUKCnRleHRfYXNzZXQYCCABKAsyKi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuY29tbW9uLlRleHRBc3NldEID4EEFSAASSQoPbGVhZF9mb3JtX2Fzc2V0GAkgASgLMi4uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmNvbW1vbi5MZWFkRm9ybUFzc2V0SAASUgoUYm9va19vbl9nb29nbGVfYXNzZXQYCiABKAsyMi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuY29tbW9uLkJvb2tPbkdvb2dsZUFzc2V0SAASSgoPcHJvbW90aW9uX2Fzc2V0GA8gASgLMi8uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmNvbW1vbi5Qcm9tb3Rpb25Bc3NldEgAEkYKDWNhbGxvdXRfYXNzZXQYFCABKAsyLS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuY29tbW9uLkNhbGxvdXRBc3NldEgAElsKGHN0cnVjdHVyZWRfc25pcHBldF9hc3NldBgVIAEoCzI3Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb24uU3RydWN0dXJlZFNuaXBwZXRBc3NldEgAEkgKDnNpdGVsaW5rX2Fzc2V0GBYgASgLMi4uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmNvbW1vbi5TaXRlbGlua0Fzc2V0SAASSQoPcGFnZV9mZWVkX2Fzc2V0GBcgASgLMi4uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmNvbW1vbi5QYWdlRmVlZEFzc2V0SAASWQoXZHluYW1pY19lZHVjYXRpb25fYXNzZXQYGCABKAsyNi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuY29tbW9uLkR5bmFtaWNFZHVjYXRpb25Bc3NldEgAEksKEG1vYmlsZV9hcHBfYXNzZXQYGSABKAsyLy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuY29tbW9uLk1vYmlsZUFwcEFzc2V0SAASUQoTaG90ZWxfY2FsbG91dF9hc3NldBgaIAEoCzIyLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb24uSG90ZWxDYWxsb3V0QXNzZXRIABJACgpjYWxsX2Fzc2V0GBsgASgLMiouZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmNvbW1vbi5DYWxsQXNzZXRIABJCCgtwcmljZV9hc3NldBgcIAEoCzIrLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb24uUHJpY2VBc3NldEgAElcKFGNhbGxfdG9fYWN0aW9uX2Fzc2V0GB0gASgLMjIuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmNvbW1vbi5DYWxsVG9BY3Rpb25Bc3NldEID4EEFSAASXAoZZHluYW1pY19yZWFsX2VzdGF0ZV9hc3NldBgeIAEoCzI3Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb24uRHluYW1pY1JlYWxFc3RhdGVBc3NldEgAElMKFGR5bmFtaWNfY3VzdG9tX2Fzc2V0GB8gASgLMjMuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmNvbW1vbi5EeW5hbWljQ3VzdG9tQXNzZXRIABJpCiBkeW5hbWljX2hvdGVsc19hbmRfcmVudGFsc19hc3NldBggIAEoCzI9Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb24uRHluYW1pY0hvdGVsc0FuZFJlbnRhbHNBc3NldEgAElUKFWR5bmFtaWNfZmxpZ2h0c19hc3NldBghIAEoCzI0Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb24uRHluYW1pY0ZsaWdodHNBc3NldEgAEmkKHWRpc2NvdmVyeV9jYXJvdXNlbF9jYXJkX2Fzc2V0GCIgASgLMjsuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmNvbW1vbi5EaXNjb3ZlcnlDYXJvdXNlbENhcmRBc3NldEID4EEFSAASUwoUZHluYW1pY190cmF2ZWxfYXNzZXQYIyABKAsyMy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuY29tbW9uLkR5bmFtaWNUcmF2ZWxBc3NldEgAElEKE2R5bmFtaWNfbG9jYWxfYXNzZXQYJCABKAsyMi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuY29tbW9uLkR5bmFtaWNMb2NhbEFzc2V0SAASTwoSZHluYW1pY19qb2JzX2Fzc2V0GCUgASgLMjEuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmNvbW1vbi5EeW5hbWljSm9ic0Fzc2V0SAASTQoObG9jYXRpb25fYXNzZXQYJyABKAsyLi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuY29tbW9uLkxvY2F0aW9uQXNzZXRCA+BBA0gAElgKFGhvdGVsX3Byb3BlcnR5X2Fzc2V0GCkgASgLMjMuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmNvbW1vbi5Ib3RlbFByb3BlcnR5QXNzZXRCA+BBBUgAOk7qQUsKHmdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9Bc3NldBIpY3VzdG9tZXJzL3tjdXN0b21lcl9pZH0vYXNzZXRzL3thc3NldF9pZH1CDAoKYXNzZXRfZGF0YUIFCgNfaWRCBwoFX25hbWVCGAoWX3RyYWNraW5nX3VybF90ZW1wbGF0ZUITChFfZmluYWxfdXJsX3N1ZmZpeCL+AgobQXNzZXRGaWVsZFR5cGVQb2xpY3lTdW1tYXJ5EmUKEGFzc2V0X2ZpZWxkX3R5cGUYASABKA4yQS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuQXNzZXRGaWVsZFR5cGVFbnVtLkFzc2V0RmllbGRUeXBlQgPgQQNIAIgBARJbCgxhc3NldF9zb3VyY2UYAiABKA4yOy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuQXNzZXRTb3VyY2VFbnVtLkFzc2V0U291cmNlQgPgQQNIAYgBARJdChNwb2xpY3lfc3VtbWFyeV9pbmZvGAMgASgLMjYuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlcy5Bc3NldFBvbGljeVN1bW1hcnlCA+BBA0gCiAEBQhMKEV9hc3NldF9maWVsZF90eXBlQg8KDV9hc3NldF9zb3VyY2VCFgoUX3BvbGljeV9zdW1tYXJ5X2luZm8ivgIKEkFzc2V0UG9saWN5U3VtbWFyeRJUChRwb2xpY3lfdG9waWNfZW50cmllcxgBIAMoCzIxLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5jb21tb24uUG9saWN5VG9waWNFbnRyeUID4EEDEmUKDXJldmlld19zdGF0dXMYAiABKA4ySS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuUG9saWN5UmV2aWV3U3RhdHVzRW51bS5Qb2xpY3lSZXZpZXdTdGF0dXNCA+BBAxJrCg9hcHByb3ZhbF9zdGF0dXMYAyABKA4yTS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuUG9saWN5QXBwcm92YWxTdGF0dXNFbnVtLlBvbGljeUFwcHJvdmFsU3RhdHVzQgPgQQNC/AEKJmNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYucmVzb3VyY2VzQgpBc3NldFByb3RvUAFaS2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzO3Jlc291cmNlc6ICA0dBQaoCIkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNi5SZXNvdXJjZXPKAiJHb29nbGVcQWRzXEdvb2dsZUFkc1xWMTZcUmVzb3VyY2Vz6gImR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpSZXNvdXJjZXNiBnByb3RvMw", [file_google_ads_googleads_v16_common_asset_types, file_google_ads_googleads_v16_common_custom_parameter, file_google_ads_googleads_v16_common_policy, file_google_ads_googleads_v16_enums_asset_field_type, file_google_ads_googleads_v16_enums_asset_source, file_google_ads_googleads_v16_enums_asset_type, file_google_ads_googleads_v16_enums_policy_approval_status, file_google_ads_googleads_v16_enums_policy_review_status, file_google_api_field_behavior, file_google_api_resource]);

/**
 * Asset is a part of an ad which can be shared across multiple ads.
 * It can be an image (ImageAsset), a video (YoutubeVideoAsset), etc.
 * Assets are immutable and cannot be removed. To stop an asset from serving,
 * remove the asset from the entity that is using it.
 *
 * @generated from message google.ads.googleads.v16.resources.Asset
 */
export type Asset = Message<"google.ads.googleads.v16.resources.Asset"> & {
  /**
   * Immutable. The resource name of the asset.
   * Asset resource names have the form:
   *
   * `customers/{customer_id}/assets/{asset_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The ID of the asset.
   *
   * @generated from field: optional int64 id = 11;
   */
  id?: bigint;

  /**
   * Optional name of the asset.
   *
   * @generated from field: optional string name = 12;
   */
  name?: string;

  /**
   * Output only. Type of the asset.
   *
   * @generated from field: google.ads.googleads.v16.enums.AssetTypeEnum.AssetType type = 4;
   */
  type: AssetTypeEnum_AssetType;

  /**
   * A list of possible final URLs after all cross domain redirects.
   *
   * @generated from field: repeated string final_urls = 14;
   */
  finalUrls: string[];

  /**
   * A list of possible final mobile URLs after all cross domain redirects.
   *
   * @generated from field: repeated string final_mobile_urls = 16;
   */
  finalMobileUrls: string[];

  /**
   * URL template for constructing a tracking URL.
   *
   * @generated from field: optional string tracking_url_template = 17;
   */
  trackingUrlTemplate?: string;

  /**
   * A list of mappings to be used for substituting URL custom parameter tags in
   * the tracking_url_template, final_urls, and/or final_mobile_urls.
   *
   * @generated from field: repeated google.ads.googleads.v16.common.CustomParameter url_custom_parameters = 18;
   */
  urlCustomParameters: CustomParameter[];

  /**
   * URL template for appending params to landing page URLs served with parallel
   * tracking.
   *
   * @generated from field: optional string final_url_suffix = 19;
   */
  finalUrlSuffix?: string;

  /**
   * Output only. Source of the asset.
   *
   * @generated from field: google.ads.googleads.v16.enums.AssetSourceEnum.AssetSource source = 38;
   */
  source: AssetSourceEnum_AssetSource;

  /**
   * Output only. Policy information for the asset.
   *
   * @generated from field: google.ads.googleads.v16.resources.AssetPolicySummary policy_summary = 13;
   */
  policySummary?: AssetPolicySummary;

  /**
   * Output only. Policy information for the asset for each FieldType.
   *
   * @generated from field: repeated google.ads.googleads.v16.resources.AssetFieldTypePolicySummary field_type_policy_summaries = 40;
   */
  fieldTypePolicySummaries: AssetFieldTypePolicySummary[];

  /**
   * The specific type of the asset.
   *
   * @generated from oneof google.ads.googleads.v16.resources.Asset.asset_data
   */
  assetData: {
    /**
     * Immutable. A YouTube video asset.
     *
     * @generated from field: google.ads.googleads.v16.common.YoutubeVideoAsset youtube_video_asset = 5;
     */
    value: YoutubeVideoAsset;
    case: "youtubeVideoAsset";
  } | {
    /**
     * Immutable. A media bundle asset.
     *
     * @generated from field: google.ads.googleads.v16.common.MediaBundleAsset media_bundle_asset = 6;
     */
    value: MediaBundleAsset;
    case: "mediaBundleAsset";
  } | {
    /**
     * Output only. An image asset.
     *
     * @generated from field: google.ads.googleads.v16.common.ImageAsset image_asset = 7;
     */
    value: ImageAsset;
    case: "imageAsset";
  } | {
    /**
     * Immutable. A text asset.
     *
     * @generated from field: google.ads.googleads.v16.common.TextAsset text_asset = 8;
     */
    value: TextAsset;
    case: "textAsset";
  } | {
    /**
     * A lead form asset.
     *
     * @generated from field: google.ads.googleads.v16.common.LeadFormAsset lead_form_asset = 9;
     */
    value: LeadFormAsset;
    case: "leadFormAsset";
  } | {
    /**
     * A book on google asset.
     *
     * @generated from field: google.ads.googleads.v16.common.BookOnGoogleAsset book_on_google_asset = 10;
     */
    value: BookOnGoogleAsset;
    case: "bookOnGoogleAsset";
  } | {
    /**
     * A promotion asset.
     *
     * @generated from field: google.ads.googleads.v16.common.PromotionAsset promotion_asset = 15;
     */
    value: PromotionAsset;
    case: "promotionAsset";
  } | {
    /**
     * A callout asset.
     *
     * @generated from field: google.ads.googleads.v16.common.CalloutAsset callout_asset = 20;
     */
    value: CalloutAsset;
    case: "calloutAsset";
  } | {
    /**
     * A structured snippet asset.
     *
     * @generated from field: google.ads.googleads.v16.common.StructuredSnippetAsset structured_snippet_asset = 21;
     */
    value: StructuredSnippetAsset;
    case: "structuredSnippetAsset";
  } | {
    /**
     * A sitelink asset.
     *
     * @generated from field: google.ads.googleads.v16.common.SitelinkAsset sitelink_asset = 22;
     */
    value: SitelinkAsset;
    case: "sitelinkAsset";
  } | {
    /**
     * A page feed asset.
     *
     * @generated from field: google.ads.googleads.v16.common.PageFeedAsset page_feed_asset = 23;
     */
    value: PageFeedAsset;
    case: "pageFeedAsset";
  } | {
    /**
     * A dynamic education asset.
     *
     * @generated from field: google.ads.googleads.v16.common.DynamicEducationAsset dynamic_education_asset = 24;
     */
    value: DynamicEducationAsset;
    case: "dynamicEducationAsset";
  } | {
    /**
     * A mobile app asset.
     *
     * @generated from field: google.ads.googleads.v16.common.MobileAppAsset mobile_app_asset = 25;
     */
    value: MobileAppAsset;
    case: "mobileAppAsset";
  } | {
    /**
     * A hotel callout asset.
     *
     * @generated from field: google.ads.googleads.v16.common.HotelCalloutAsset hotel_callout_asset = 26;
     */
    value: HotelCalloutAsset;
    case: "hotelCalloutAsset";
  } | {
    /**
     * A call asset.
     *
     * @generated from field: google.ads.googleads.v16.common.CallAsset call_asset = 27;
     */
    value: CallAsset;
    case: "callAsset";
  } | {
    /**
     * A price asset.
     *
     * @generated from field: google.ads.googleads.v16.common.PriceAsset price_asset = 28;
     */
    value: PriceAsset;
    case: "priceAsset";
  } | {
    /**
     * Immutable. A call to action asset.
     *
     * @generated from field: google.ads.googleads.v16.common.CallToActionAsset call_to_action_asset = 29;
     */
    value: CallToActionAsset;
    case: "callToActionAsset";
  } | {
    /**
     * A dynamic real estate asset.
     *
     * @generated from field: google.ads.googleads.v16.common.DynamicRealEstateAsset dynamic_real_estate_asset = 30;
     */
    value: DynamicRealEstateAsset;
    case: "dynamicRealEstateAsset";
  } | {
    /**
     * A dynamic custom asset.
     *
     * @generated from field: google.ads.googleads.v16.common.DynamicCustomAsset dynamic_custom_asset = 31;
     */
    value: DynamicCustomAsset;
    case: "dynamicCustomAsset";
  } | {
    /**
     * A dynamic hotels and rentals asset.
     *
     * @generated from field: google.ads.googleads.v16.common.DynamicHotelsAndRentalsAsset dynamic_hotels_and_rentals_asset = 32;
     */
    value: DynamicHotelsAndRentalsAsset;
    case: "dynamicHotelsAndRentalsAsset";
  } | {
    /**
     * A dynamic flights asset.
     *
     * @generated from field: google.ads.googleads.v16.common.DynamicFlightsAsset dynamic_flights_asset = 33;
     */
    value: DynamicFlightsAsset;
    case: "dynamicFlightsAsset";
  } | {
    /**
     * Immutable. A discovery carousel card asset.
     *
     * @generated from field: google.ads.googleads.v16.common.DiscoveryCarouselCardAsset discovery_carousel_card_asset = 34;
     */
    value: DiscoveryCarouselCardAsset;
    case: "discoveryCarouselCardAsset";
  } | {
    /**
     * A dynamic travel asset.
     *
     * @generated from field: google.ads.googleads.v16.common.DynamicTravelAsset dynamic_travel_asset = 35;
     */
    value: DynamicTravelAsset;
    case: "dynamicTravelAsset";
  } | {
    /**
     * A dynamic local asset.
     *
     * @generated from field: google.ads.googleads.v16.common.DynamicLocalAsset dynamic_local_asset = 36;
     */
    value: DynamicLocalAsset;
    case: "dynamicLocalAsset";
  } | {
    /**
     * A dynamic jobs asset.
     *
     * @generated from field: google.ads.googleads.v16.common.DynamicJobsAsset dynamic_jobs_asset = 37;
     */
    value: DynamicJobsAsset;
    case: "dynamicJobsAsset";
  } | {
    /**
     * Output only. A location asset.
     *
     * @generated from field: google.ads.googleads.v16.common.LocationAsset location_asset = 39;
     */
    value: LocationAsset;
    case: "locationAsset";
  } | {
    /**
     * Immutable. A hotel property asset.
     *
     * @generated from field: google.ads.googleads.v16.common.HotelPropertyAsset hotel_property_asset = 41;
     */
    value: HotelPropertyAsset;
    case: "hotelPropertyAsset";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v16.resources.Asset.
 * Use `create(AssetSchema)` to create a new message.
 */
export const AssetSchema: GenMessage<Asset> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_asset, 0);

/**
 * Contains policy information for an asset under AssetFieldType context.
 *
 * @generated from message google.ads.googleads.v16.resources.AssetFieldTypePolicySummary
 */
export type AssetFieldTypePolicySummary = Message<"google.ads.googleads.v16.resources.AssetFieldTypePolicySummary"> & {
  /**
   * Output only. FieldType of this asset.
   *
   * @generated from field: optional google.ads.googleads.v16.enums.AssetFieldTypeEnum.AssetFieldType asset_field_type = 1;
   */
  assetFieldType?: AssetFieldTypeEnum_AssetFieldType;

  /**
   * Output only. Source of this asset.
   *
   * @generated from field: optional google.ads.googleads.v16.enums.AssetSourceEnum.AssetSource asset_source = 2;
   */
  assetSource?: AssetSourceEnum_AssetSource;

  /**
   * Output only. Policy summary.
   *
   * @generated from field: optional google.ads.googleads.v16.resources.AssetPolicySummary policy_summary_info = 3;
   */
  policySummaryInfo?: AssetPolicySummary;
};

/**
 * Describes the message google.ads.googleads.v16.resources.AssetFieldTypePolicySummary.
 * Use `create(AssetFieldTypePolicySummarySchema)` to create a new message.
 */
export const AssetFieldTypePolicySummarySchema: GenMessage<AssetFieldTypePolicySummary> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_asset, 1);

/**
 * Contains policy information for an asset.
 *
 * @generated from message google.ads.googleads.v16.resources.AssetPolicySummary
 */
export type AssetPolicySummary = Message<"google.ads.googleads.v16.resources.AssetPolicySummary"> & {
  /**
   * Output only. The list of policy findings for this asset.
   *
   * @generated from field: repeated google.ads.googleads.v16.common.PolicyTopicEntry policy_topic_entries = 1;
   */
  policyTopicEntries: PolicyTopicEntry[];

  /**
   * Output only. Where in the review process this asset is.
   *
   * @generated from field: google.ads.googleads.v16.enums.PolicyReviewStatusEnum.PolicyReviewStatus review_status = 2;
   */
  reviewStatus: PolicyReviewStatusEnum_PolicyReviewStatus;

  /**
   * Output only. The overall approval status of this asset, calculated based on
   * the status of its individual policy topic entries.
   *
   * @generated from field: google.ads.googleads.v16.enums.PolicyApprovalStatusEnum.PolicyApprovalStatus approval_status = 3;
   */
  approvalStatus: PolicyApprovalStatusEnum_PolicyApprovalStatus;
};

/**
 * Describes the message google.ads.googleads.v16.resources.AssetPolicySummary.
 * Use `create(AssetPolicySummarySchema)` to create a new message.
 */
export const AssetPolicySummarySchema: GenMessage<AssetPolicySummary> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_asset, 2);
