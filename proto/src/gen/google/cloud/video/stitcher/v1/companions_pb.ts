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
// @generated from file google/cloud/video/stitcher/v1/companions.proto (package google.cloud.video.stitcher.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Event } from "./events_pb";
import { file_google_cloud_video_stitcher_v1_events } from "./events_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/video/stitcher/v1/companions.proto.
 */
export const file_google_cloud_video_stitcher_v1_companions: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvY2xvdWQvdmlkZW8vc3RpdGNoZXIvdjEvY29tcGFuaW9ucy5wcm90bxIeZ29vZ2xlLmNsb3VkLnZpZGVvLnN0aXRjaGVyLnYxIoICCgxDb21wYW5pb25BZHMSXAoTZGlzcGxheV9yZXF1aXJlbWVudBgBIAEoDjI/Lmdvb2dsZS5jbG91ZC52aWRlby5zdGl0Y2hlci52MS5Db21wYW5pb25BZHMuRGlzcGxheVJlcXVpcmVtZW50Ej0KCmNvbXBhbmlvbnMYAiADKAsyKS5nb29nbGUuY2xvdWQudmlkZW8uc3RpdGNoZXIudjEuQ29tcGFuaW9uIlUKEkRpc3BsYXlSZXF1aXJlbWVudBIjCh9ESVNQTEFZX1JFUVVJUkVNRU5UX1VOU1BFQ0lGSUVEEAASBwoDQUxMEAESBwoDQU5ZEAISCAoETk9ORRADIvUDCglDb21wYW5pb24STgoSaWZyYW1lX2FkX3Jlc291cmNlGAogASgLMjAuZ29vZ2xlLmNsb3VkLnZpZGVvLnN0aXRjaGVyLnYxLklmcmFtZUFkUmVzb3VyY2VIABJOChJzdGF0aWNfYWRfcmVzb3VyY2UYCyABKAsyMC5nb29nbGUuY2xvdWQudmlkZW8uc3RpdGNoZXIudjEuU3RhdGljQWRSZXNvdXJjZUgAEkoKEGh0bWxfYWRfcmVzb3VyY2UYDCABKAsyLi5nb29nbGUuY2xvdWQudmlkZW8uc3RpdGNoZXIudjEuSHRtbEFkUmVzb3VyY2VIABIVCg1hcGlfZnJhbWV3b3JrGAEgASgJEhEKCWhlaWdodF9weBgCIAEoBRIQCgh3aWR0aF9weBgDIAEoBRIXCg9hc3NldF9oZWlnaHRfcHgYBCABKAUSGgoSZXhwYW5kZWRfaGVpZ2h0X3B4GAUgASgFEhYKDmFzc2V0X3dpZHRoX3B4GAYgASgFEhkKEWV4cGFuZGVkX3dpZHRoX3B4GAcgASgFEhIKCmFkX3Nsb3RfaWQYCCABKAkSNQoGZXZlbnRzGAkgAygLMiUuZ29vZ2xlLmNsb3VkLnZpZGVvLnN0aXRjaGVyLnYxLkV2ZW50Qg0KC2FkX3Jlc291cmNlIiUKDkh0bWxBZFJlc291cmNlEhMKC2h0bWxfc291cmNlGAEgASgJIh8KEElmcmFtZUFkUmVzb3VyY2USCwoDdXJpGAEgASgJIjYKEFN0YXRpY0FkUmVzb3VyY2USCwoDdXJpGAEgASgJEhUKDWNyZWF0aXZlX3R5cGUYAiABKAlCdwoiY29tLmdvb2dsZS5jbG91ZC52aWRlby5zdGl0Y2hlci52MUIPQ29tcGFuaW9uc1Byb3RvUAFaPmNsb3VkLmdvb2dsZS5jb20vZ28vdmlkZW8vc3RpdGNoZXIvYXBpdjEvc3RpdGNoZXJwYjtzdGl0Y2hlcnBiYgZwcm90bzM", [file_google_cloud_video_stitcher_v1_events]);

/**
 * Metadata for companion ads.
 *
 * @generated from message google.cloud.video.stitcher.v1.CompanionAds
 */
export type CompanionAds = Message<"google.cloud.video.stitcher.v1.CompanionAds"> & {
  /**
   * Indicates how many of the companions should be displayed with the ad.
   *
   * @generated from field: google.cloud.video.stitcher.v1.CompanionAds.DisplayRequirement display_requirement = 1;
   */
  displayRequirement: CompanionAds_DisplayRequirement;

  /**
   * List of companion ads.
   *
   * @generated from field: repeated google.cloud.video.stitcher.v1.Companion companions = 2;
   */
  companions: Companion[];
};

/**
 * Describes the message google.cloud.video.stitcher.v1.CompanionAds.
 * Use `create(CompanionAdsSchema)` to create a new message.
 */
export const CompanionAdsSchema: GenMessage<CompanionAds> = /*@__PURE__*/
  messageDesc(file_google_cloud_video_stitcher_v1_companions, 0);

/**
 * Indicates how many of the companions should be displayed with the ad.
 *
 * @generated from enum google.cloud.video.stitcher.v1.CompanionAds.DisplayRequirement
 */
export enum CompanionAds_DisplayRequirement {
  /**
   * Required companions are not specified. The default is ALL.
   *
   * @generated from enum value: DISPLAY_REQUIREMENT_UNSPECIFIED = 0;
   */
  DISPLAY_REQUIREMENT_UNSPECIFIED = 0,

  /**
   * All companions are required to be displayed.
   *
   * @generated from enum value: ALL = 1;
   */
  ALL = 1,

  /**
   * At least one of companions needs to be displayed.
   *
   * @generated from enum value: ANY = 2;
   */
  ANY = 2,

  /**
   * All companions are optional for display.
   *
   * @generated from enum value: NONE = 3;
   */
  NONE = 3,
}

/**
 * Describes the enum google.cloud.video.stitcher.v1.CompanionAds.DisplayRequirement.
 */
export const CompanionAds_DisplayRequirementSchema: GenEnum<CompanionAds_DisplayRequirement> = /*@__PURE__*/
  enumDesc(file_google_cloud_video_stitcher_v1_companions, 0, 0);

/**
 * Metadata for a companion.
 *
 * @generated from message google.cloud.video.stitcher.v1.Companion
 */
export type Companion = Message<"google.cloud.video.stitcher.v1.Companion"> & {
  /**
   * Ad resource associated with the companion ad.
   *
   * @generated from oneof google.cloud.video.stitcher.v1.Companion.ad_resource
   */
  adResource: {
    /**
     * The IFrame ad resource associated with the companion ad.
     *
     * @generated from field: google.cloud.video.stitcher.v1.IframeAdResource iframe_ad_resource = 10;
     */
    value: IframeAdResource;
    case: "iframeAdResource";
  } | {
    /**
     * The static ad resource associated with the companion ad.
     *
     * @generated from field: google.cloud.video.stitcher.v1.StaticAdResource static_ad_resource = 11;
     */
    value: StaticAdResource;
    case: "staticAdResource";
  } | {
    /**
     * The HTML ad resource associated with the companion ad.
     *
     * @generated from field: google.cloud.video.stitcher.v1.HtmlAdResource html_ad_resource = 12;
     */
    value: HtmlAdResource;
    case: "htmlAdResource";
  } | { case: undefined; value?: undefined };

  /**
   * The API necessary to communicate with the creative if available.
   *
   * @generated from field: string api_framework = 1;
   */
  apiFramework: string;

  /**
   * The pixel height of the placement slot for the intended creative.
   *
   * @generated from field: int32 height_px = 2;
   */
  heightPx: number;

  /**
   * The pixel width of the placement slot for the intended creative.
   *
   * @generated from field: int32 width_px = 3;
   */
  widthPx: number;

  /**
   * The pixel height of the creative.
   *
   * @generated from field: int32 asset_height_px = 4;
   */
  assetHeightPx: number;

  /**
   * The maximum pixel height of the creative in its expanded state.
   *
   * @generated from field: int32 expanded_height_px = 5;
   */
  expandedHeightPx: number;

  /**
   * The pixel width of the creative.
   *
   * @generated from field: int32 asset_width_px = 6;
   */
  assetWidthPx: number;

  /**
   * The maximum pixel width of the creative in its expanded state.
   *
   * @generated from field: int32 expanded_width_px = 7;
   */
  expandedWidthPx: number;

  /**
   * The ID used to identify the desired placement on a publisher's page.
   * Values to be used should be discussed between publishers and
   * advertisers.
   *
   * @generated from field: string ad_slot_id = 8;
   */
  adSlotId: string;

  /**
   * The list of tracking events for the companion.
   *
   * @generated from field: repeated google.cloud.video.stitcher.v1.Event events = 9;
   */
  events: Event[];
};

/**
 * Describes the message google.cloud.video.stitcher.v1.Companion.
 * Use `create(CompanionSchema)` to create a new message.
 */
export const CompanionSchema: GenMessage<Companion> = /*@__PURE__*/
  messageDesc(file_google_cloud_video_stitcher_v1_companions, 1);

/**
 * Metadata for an HTML ad resource.
 *
 * @generated from message google.cloud.video.stitcher.v1.HtmlAdResource
 */
export type HtmlAdResource = Message<"google.cloud.video.stitcher.v1.HtmlAdResource"> & {
  /**
   * The HTML to display for the ad resource.
   *
   * @generated from field: string html_source = 1;
   */
  htmlSource: string;
};

/**
 * Describes the message google.cloud.video.stitcher.v1.HtmlAdResource.
 * Use `create(HtmlAdResourceSchema)` to create a new message.
 */
export const HtmlAdResourceSchema: GenMessage<HtmlAdResource> = /*@__PURE__*/
  messageDesc(file_google_cloud_video_stitcher_v1_companions, 2);

/**
 * Metadata for an IFrame ad resource.
 *
 * @generated from message google.cloud.video.stitcher.v1.IframeAdResource
 */
export type IframeAdResource = Message<"google.cloud.video.stitcher.v1.IframeAdResource"> & {
  /**
   * URI source for an IFrame to display for the ad resource.
   *
   * @generated from field: string uri = 1;
   */
  uri: string;
};

/**
 * Describes the message google.cloud.video.stitcher.v1.IframeAdResource.
 * Use `create(IframeAdResourceSchema)` to create a new message.
 */
export const IframeAdResourceSchema: GenMessage<IframeAdResource> = /*@__PURE__*/
  messageDesc(file_google_cloud_video_stitcher_v1_companions, 3);

/**
 * Metadata for a static ad resource.
 *
 * @generated from message google.cloud.video.stitcher.v1.StaticAdResource
 */
export type StaticAdResource = Message<"google.cloud.video.stitcher.v1.StaticAdResource"> & {
  /**
   * URI to the static file for the ad resource.
   *
   * @generated from field: string uri = 1;
   */
  uri: string;

  /**
   * Describes the MIME type of the ad resource.
   *
   * @generated from field: string creative_type = 2;
   */
  creativeType: string;
};

/**
 * Describes the message google.cloud.video.stitcher.v1.StaticAdResource.
 * Use `create(StaticAdResourceSchema)` to create a new message.
 */
export const StaticAdResourceSchema: GenMessage<StaticAdResource> = /*@__PURE__*/
  messageDesc(file_google_cloud_video_stitcher_v1_companions, 4);
