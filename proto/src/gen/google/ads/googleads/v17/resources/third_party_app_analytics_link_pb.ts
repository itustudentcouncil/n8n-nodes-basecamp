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
// @generated from file google/ads/googleads/v17/resources/third_party_app_analytics_link.proto (package google.ads.googleads.v17.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/resources/third_party_app_analytics_link.proto.
 */
export const file_google_ads_googleads_v17_resources_third_party_app_analytics_link: GenFile = /*@__PURE__*/
  fileDesc("Ckdnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvcmVzb3VyY2VzL3RoaXJkX3BhcnR5X2FwcF9hbmFseXRpY3NfbGluay5wcm90bxIiZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcyKuAgoaVGhpcmRQYXJ0eUFwcEFuYWx5dGljc0xpbmsSUgoNcmVzb3VyY2VfbmFtZRgBIAEoCUI74EEF+kE1CjNnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vVGhpcmRQYXJ0eUFwcEFuYWx5dGljc0xpbmsSIwoRc2hhcmVhYmxlX2xpbmtfaWQYAyABKAlCA+BBA0gAiAEBOoAB6kF9CjNnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vVGhpcmRQYXJ0eUFwcEFuYWx5dGljc0xpbmsSRmN1c3RvbWVycy97Y3VzdG9tZXJfaWR9L3RoaXJkUGFydHlBcHBBbmFseXRpY3NMaW5rcy97Y3VzdG9tZXJfbGlua19pZH1CFAoSX3NoYXJlYWJsZV9saW5rX2lkQpECCiZjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlc0IfVGhpcmRQYXJ0eUFwcEFuYWx5dGljc0xpbmtQcm90b1ABWktnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L3Jlc291cmNlcztyZXNvdXJjZXOiAgNHQUGqAiJHb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuUmVzb3VyY2VzygIiR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XFJlc291cmNlc+oCJkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6UmVzb3VyY2VzYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource]);

/**
 * A data sharing connection, allowing the import of third party app analytics
 * into a Google Ads Customer.
 *
 * @generated from message google.ads.googleads.v17.resources.ThirdPartyAppAnalyticsLink
 */
export type ThirdPartyAppAnalyticsLink = Message<"google.ads.googleads.v17.resources.ThirdPartyAppAnalyticsLink"> & {
  /**
   * Immutable. The resource name of the third party app analytics link.
   * Third party app analytics link resource names have the form:
   *
   * `customers/{customer_id}/thirdPartyAppAnalyticsLinks/{account_link_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The shareable link ID that should be provided to the third
   * party when setting up app analytics. This is able to be regenerated using
   * regenerate method in the ThirdPartyAppAnalyticsLinkService.
   *
   * @generated from field: optional string shareable_link_id = 3;
   */
  shareableLinkId?: string;
};

/**
 * Describes the message google.ads.googleads.v17.resources.ThirdPartyAppAnalyticsLink.
 * Use `create(ThirdPartyAppAnalyticsLinkSchema)` to create a new message.
 */
export const ThirdPartyAppAnalyticsLinkSchema: GenMessage<ThirdPartyAppAnalyticsLink> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_third_party_app_analytics_link, 0);
