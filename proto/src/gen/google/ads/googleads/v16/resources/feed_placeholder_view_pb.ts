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
// @generated from file google/ads/googleads/v16/resources/feed_placeholder_view.proto (package google.ads.googleads.v16.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { PlaceholderTypeEnum_PlaceholderType } from "../enums/placeholder_type_pb";
import { file_google_ads_googleads_v16_enums_placeholder_type } from "../enums/placeholder_type_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/resources/feed_placeholder_view.proto.
 */
export const file_google_ads_googleads_v16_resources_feed_placeholder_view: GenFile = /*@__PURE__*/
  fileDesc("Cj5nb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzL2ZlZWRfcGxhY2Vob2xkZXJfdmlldy5wcm90bxIiZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlcyK6AgoTRmVlZFBsYWNlaG9sZGVyVmlldxJLCg1yZXNvdXJjZV9uYW1lGAEgASgJQjTgQQP6QS4KLGdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9GZWVkUGxhY2Vob2xkZXJWaWV3EmIKEHBsYWNlaG9sZGVyX3R5cGUYAiABKA4yQy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuUGxhY2Vob2xkZXJUeXBlRW51bS5QbGFjZWhvbGRlclR5cGVCA+BBAzpy6kFvCixnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vRmVlZFBsYWNlaG9sZGVyVmlldxI/Y3VzdG9tZXJzL3tjdXN0b21lcl9pZH0vZmVlZFBsYWNlaG9sZGVyVmlld3Mve3BsYWNlaG9sZGVyX3R5cGV9QooCCiZjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlc0IYRmVlZFBsYWNlaG9sZGVyVmlld1Byb3RvUAFaS2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzO3Jlc291cmNlc6ICA0dBQaoCIkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNi5SZXNvdXJjZXPKAiJHb29nbGVcQWRzXEdvb2dsZUFkc1xWMTZcUmVzb3VyY2Vz6gImR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpSZXNvdXJjZXNiBnByb3RvMw", [file_google_ads_googleads_v16_enums_placeholder_type, file_google_api_field_behavior, file_google_api_resource]);

/**
 * A feed placeholder view.
 *
 * @generated from message google.ads.googleads.v16.resources.FeedPlaceholderView
 */
export type FeedPlaceholderView = Message<"google.ads.googleads.v16.resources.FeedPlaceholderView"> & {
  /**
   * Output only. The resource name of the feed placeholder view.
   * Feed placeholder view resource names have the form:
   *
   * `customers/{customer_id}/feedPlaceholderViews/{placeholder_type}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The placeholder type of the feed placeholder view.
   *
   * @generated from field: google.ads.googleads.v16.enums.PlaceholderTypeEnum.PlaceholderType placeholder_type = 2;
   */
  placeholderType: PlaceholderTypeEnum_PlaceholderType;
};

/**
 * Describes the message google.ads.googleads.v16.resources.FeedPlaceholderView.
 * Use `create(FeedPlaceholderViewSchema)` to create a new message.
 */
export const FeedPlaceholderViewSchema: GenMessage<FeedPlaceholderView> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_feed_placeholder_view, 0);
