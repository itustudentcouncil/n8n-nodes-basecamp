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
// @generated from file google/ads/googleads/v16/resources/location_view.proto (package google.ads.googleads.v16.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/resources/location_view.proto.
 */
export const file_google_ads_googleads_v16_resources_location_view: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzL2xvY2F0aW9uX3ZpZXcucHJvdG8SImdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMixAEKDExvY2F0aW9uVmlldxJECg1yZXNvdXJjZV9uYW1lGAEgASgJQi3gQQP6QScKJWdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9Mb2NhdGlvblZpZXc6bupBawolZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0xvY2F0aW9uVmlldxJCY3VzdG9tZXJzL3tjdXN0b21lcl9pZH0vbG9jYXRpb25WaWV3cy97Y2FtcGFpZ25faWR9fntjcml0ZXJpb25faWR9QoMCCiZjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlc0IRTG9jYXRpb25WaWV3UHJvdG9QAVpLZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9yZXNvdXJjZXM7cmVzb3VyY2VzogIDR0FBqgIiR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LlJlc291cmNlc8oCIkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxSZXNvdXJjZXPqAiZHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OlJlc291cmNlc2IGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource]);

/**
 * A location view summarizes the performance of campaigns by a Location
 * criterion.
 * If no Location criterion is set, no results are returned; instead, use
 * geographic_view or user_location_view for visitor location data.
 *
 * @generated from message google.ads.googleads.v16.resources.LocationView
 */
export type LocationView = Message<"google.ads.googleads.v16.resources.LocationView"> & {
  /**
   * Output only. The resource name of the location view.
   * Location view resource names have the form:
   *
   * `customers/{customer_id}/locationViews/{campaign_id}~{criterion_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;
};

/**
 * Describes the message google.ads.googleads.v16.resources.LocationView.
 * Use `create(LocationViewSchema)` to create a new message.
 */
export const LocationViewSchema: GenMessage<LocationView> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_location_view, 0);
