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
// @generated from file google/ads/googleads/v16/resources/campaign_search_term_insight.proto (package google.ads.googleads.v16.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/resources/campaign_search_term_insight.proto.
 */
export const file_google_ads_googleads_v16_resources_campaign_search_term_insight: GenFile = /*@__PURE__*/
  fileDesc("CkVnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzL2NhbXBhaWduX3NlYXJjaF90ZXJtX2luc2lnaHQucHJvdG8SImdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMi+QIKGUNhbXBhaWduU2VhcmNoVGVybUluc2lnaHQSUQoNcmVzb3VyY2VfbmFtZRgBIAEoCUI64EED+kE0CjJnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vQ2FtcGFpZ25TZWFyY2hUZXJtSW5zaWdodBIgCg5jYXRlZ29yeV9sYWJlbBgCIAEoCUID4EEDSACIAQESFAoCaWQYAyABKANCA+BBA0gBiAEBEh0KC2NhbXBhaWduX2lkGAQgASgDQgPgQQNIAogBATqHAepBgwEKMmdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9DYW1wYWlnblNlYXJjaFRlcm1JbnNpZ2h0Ek1jdXN0b21lcnMve2N1c3RvbWVyX2lkfS9jYW1wYWlnblNlYXJjaFRlcm1JbnNpZ2h0cy97Y2FtcGFpZ25faWR9fntjbHVzdGVyX2lkfUIRCg9fY2F0ZWdvcnlfbGFiZWxCBQoDX2lkQg4KDF9jYW1wYWlnbl9pZEKQAgomY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXNCHkNhbXBhaWduU2VhcmNoVGVybUluc2lnaHRQcm90b1ABWktnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L3Jlc291cmNlcztyZXNvdXJjZXOiAgNHQUGqAiJHb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuUmVzb3VyY2VzygIiR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XFJlc291cmNlc+oCJkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6UmVzb3VyY2VzYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource]);

/**
 * A Campaign search term view.
 * Historical data is available starting March 2023.
 *
 * @generated from message google.ads.googleads.v16.resources.CampaignSearchTermInsight
 */
export type CampaignSearchTermInsight = Message<"google.ads.googleads.v16.resources.CampaignSearchTermInsight"> & {
  /**
   * Output only. The resource name of the campaign level search term insight.
   * Campaign level search term insight resource names have the form:
   *
   * `customers/{customer_id}/campaignSearchTermInsights/{campaign_id}~{category_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The label for the search category. An empty string denotes the
   * catch-all category for search terms that didn't fit into another category.
   *
   * @generated from field: optional string category_label = 2;
   */
  categoryLabel?: string;

  /**
   * Output only. The ID of the insight.
   *
   * @generated from field: optional int64 id = 3;
   */
  id?: bigint;

  /**
   * Output only. The ID of the campaign.
   *
   * @generated from field: optional int64 campaign_id = 4;
   */
  campaignId?: bigint;
};

/**
 * Describes the message google.ads.googleads.v16.resources.CampaignSearchTermInsight.
 * Use `create(CampaignSearchTermInsightSchema)` to create a new message.
 */
export const CampaignSearchTermInsightSchema: GenMessage<CampaignSearchTermInsight> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_campaign_search_term_insight, 0);
