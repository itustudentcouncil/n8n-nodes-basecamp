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
// @generated from file google/cloud/aiplatform/v1/feature_selector.proto (package google.cloud.aiplatform.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/feature_selector.proto.
 */
export const file_google_cloud_aiplatform_v1_feature_selector: GenFile = /*@__PURE__*/
  fileDesc("CjFnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS9mZWF0dXJlX3NlbGVjdG9yLnByb3RvEhpnb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MSIdCglJZE1hdGNoZXISEAoDaWRzGAEgAygJQgPgQQIiUQoPRmVhdHVyZVNlbGVjdG9yEj4KCmlkX21hdGNoZXIYASABKAsyJS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5JZE1hdGNoZXJCA+BBAkLSAQoeY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxQhRGZWF0dXJlU2VsZWN0b3JQcm90b1ABWj5jbG91ZC5nb29nbGUuY29tL2dvL2FpcGxhdGZvcm0vYXBpdjEvYWlwbGF0Zm9ybXBiO2FpcGxhdGZvcm1wYqoCGkdvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxygIaR29vZ2xlXENsb3VkXEFJUGxhdGZvcm1cVjHqAh1Hb29nbGU6OkNsb3VkOjpBSVBsYXRmb3JtOjpWMWIGcHJvdG8z", [file_google_api_field_behavior]);

/**
 * Matcher for Features of an EntityType by Feature ID.
 *
 * @generated from message google.cloud.aiplatform.v1.IdMatcher
 */
export type IdMatcher = Message<"google.cloud.aiplatform.v1.IdMatcher"> & {
  /**
   * Required. The following are accepted as `ids`:
   *
   *  * A single-element list containing only `*`, which selects all Features
   *  in the target EntityType, or
   *  * A list containing only Feature IDs, which selects only Features with
   *  those IDs in the target EntityType.
   *
   * @generated from field: repeated string ids = 1;
   */
  ids: string[];
};

/**
 * Describes the message google.cloud.aiplatform.v1.IdMatcher.
 * Use `create(IdMatcherSchema)` to create a new message.
 */
export const IdMatcherSchema: GenMessage<IdMatcher> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_feature_selector, 0);

/**
 * Selector for Features of an EntityType.
 *
 * @generated from message google.cloud.aiplatform.v1.FeatureSelector
 */
export type FeatureSelector = Message<"google.cloud.aiplatform.v1.FeatureSelector"> & {
  /**
   * Required. Matches Features based on ID.
   *
   * @generated from field: google.cloud.aiplatform.v1.IdMatcher id_matcher = 1;
   */
  idMatcher?: IdMatcher;
};

/**
 * Describes the message google.cloud.aiplatform.v1.FeatureSelector.
 * Use `create(FeatureSelectorSchema)` to create a new message.
 */
export const FeatureSelectorSchema: GenMessage<FeatureSelector> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_feature_selector, 1);
