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
// @generated from file google/ads/googleads/v16/resources/geographic_view.proto (package google.ads.googleads.v16.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { GeoTargetingTypeEnum_GeoTargetingType } from "../enums/geo_targeting_type_pb";
import { file_google_ads_googleads_v16_enums_geo_targeting_type } from "../enums/geo_targeting_type_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/resources/geographic_view.proto.
 */
export const file_google_ads_googleads_v16_resources_geographic_view: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzL2dlb2dyYXBoaWNfdmlldy5wcm90bxIiZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlcyL6AgoOR2VvZ3JhcGhpY1ZpZXcSRgoNcmVzb3VyY2VfbmFtZRgBIAEoCUIv4EED+kEpCidnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vR2VvZ3JhcGhpY1ZpZXcSYQoNbG9jYXRpb25fdHlwZRgDIAEoDjJFLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcy5HZW9UYXJnZXRpbmdUeXBlRW51bS5HZW9UYXJnZXRpbmdUeXBlQgPgQQMSJgoUY291bnRyeV9jcml0ZXJpb25faWQYBSABKANCA+BBA0gAiAEBOnzqQXkKJ2dvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9HZW9ncmFwaGljVmlldxJOY3VzdG9tZXJzL3tjdXN0b21lcl9pZH0vZ2VvZ3JhcGhpY1ZpZXdzL3tjb3VudHJ5X2NyaXRlcmlvbl9pZH1+e2xvY2F0aW9uX3R5cGV9QhcKFV9jb3VudHJ5X2NyaXRlcmlvbl9pZEKFAgomY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXNCE0dlb2dyYXBoaWNWaWV3UHJvdG9QAVpLZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9yZXNvdXJjZXM7cmVzb3VyY2VzogIDR0FBqgIiR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LlJlc291cmNlc8oCIkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxSZXNvdXJjZXPqAiZHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OlJlc291cmNlc2IGcHJvdG8z", [file_google_ads_googleads_v16_enums_geo_targeting_type, file_google_api_field_behavior, file_google_api_resource]);

/**
 * A geographic view.
 *
 * Geographic View includes all metrics aggregated at the country level,
 * one row per country. It reports metrics at either actual physical location of
 * the user or an area of interest. If other segment fields are used, you may
 * get more than one row per country.
 *
 * @generated from message google.ads.googleads.v16.resources.GeographicView
 */
export type GeographicView = Message<"google.ads.googleads.v16.resources.GeographicView"> & {
  /**
   * Output only. The resource name of the geographic view.
   * Geographic view resource names have the form:
   *
   * `customers/{customer_id}/geographicViews/{country_criterion_id}~{location_type}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. Type of the geo targeting of the campaign.
   *
   * @generated from field: google.ads.googleads.v16.enums.GeoTargetingTypeEnum.GeoTargetingType location_type = 3;
   */
  locationType: GeoTargetingTypeEnum_GeoTargetingType;

  /**
   * Output only. Criterion Id for the country.
   *
   * @generated from field: optional int64 country_criterion_id = 5;
   */
  countryCriterionId?: bigint;
};

/**
 * Describes the message google.ads.googleads.v16.resources.GeographicView.
 * Use `create(GeographicViewSchema)` to create a new message.
 */
export const GeographicViewSchema: GenMessage<GeographicView> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_geographic_view, 0);
