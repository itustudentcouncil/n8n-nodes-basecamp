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
// @generated from file google/ads/googleads/v17/resources/ad_group_ad_label.proto (package google.ads.googleads.v17.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/resources/ad_group_ad_label.proto.
 */
export const file_google_ads_googleads_v17_resources_ad_group_ad_label: GenFile = /*@__PURE__*/
  fileDesc("Cjpnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvcmVzb3VyY2VzL2FkX2dyb3VwX2FkX2xhYmVsLnByb3RvEiJnb29nbGUuYWRzLmdvb2dsZWFkcy52MTcucmVzb3VyY2VzIuwCCg5BZEdyb3VwQWRMYWJlbBJGCg1yZXNvdXJjZV9uYW1lGAEgASgJQi/gQQX6QSkKJ2dvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9BZEdyb3VwQWRMYWJlbBJECgthZF9ncm91cF9hZBgEIAEoCUIq4EEF+kEkCiJnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vQWRHcm91cEFkSACIAQESOgoFbGFiZWwYBSABKAlCJuBBBfpBIAoeZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0xhYmVsSAGIAQE6dupBcwonZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0FkR3JvdXBBZExhYmVsEkhjdXN0b21lcnMve2N1c3RvbWVyX2lkfS9hZEdyb3VwQWRMYWJlbHMve2FkX2dyb3VwX2lkfX57YWRfaWR9fntsYWJlbF9pZH1CDgoMX2FkX2dyb3VwX2FkQggKBl9sYWJlbEKFAgomY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXNCE0FkR3JvdXBBZExhYmVsUHJvdG9QAVpLZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNy9yZXNvdXJjZXM7cmVzb3VyY2VzogIDR0FBqgIiR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE3LlJlc291cmNlc8oCIkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxN1xSZXNvdXJjZXPqAiZHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTc6OlJlc291cmNlc2IGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource]);

/**
 * A relationship between an ad group ad and a label.
 *
 * @generated from message google.ads.googleads.v17.resources.AdGroupAdLabel
 */
export type AdGroupAdLabel = Message<"google.ads.googleads.v17.resources.AdGroupAdLabel"> & {
  /**
   * Immutable. The resource name of the ad group ad label.
   * Ad group ad label resource names have the form:
   * `customers/{customer_id}/adGroupAdLabels/{ad_group_id}~{ad_id}~{label_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Immutable. The ad group ad to which the label is attached.
   *
   * @generated from field: optional string ad_group_ad = 4;
   */
  adGroupAd?: string;

  /**
   * Immutable. The label assigned to the ad group ad.
   *
   * @generated from field: optional string label = 5;
   */
  label?: string;
};

/**
 * Describes the message google.ads.googleads.v17.resources.AdGroupAdLabel.
 * Use `create(AdGroupAdLabelSchema)` to create a new message.
 */
export const AdGroupAdLabelSchema: GenMessage<AdGroupAdLabel> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_ad_group_ad_label, 0);
