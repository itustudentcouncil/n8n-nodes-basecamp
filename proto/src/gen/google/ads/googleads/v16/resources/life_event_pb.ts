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
// @generated from file google/ads/googleads/v16/resources/life_event.proto (package google.ads.googleads.v16.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { CriterionCategoryAvailability } from "../common/criterion_category_availability_pb";
import { file_google_ads_googleads_v16_common_criterion_category_availability } from "../common/criterion_category_availability_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/resources/life_event.proto.
 */
export const file_google_ads_googleads_v16_resources_life_event: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzL2xpZmVfZXZlbnQucHJvdG8SImdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMihgMKCUxpZmVFdmVudBJBCg1yZXNvdXJjZV9uYW1lGAEgASgJQirgQQP6QSQKImdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9MaWZlRXZlbnQSDwoCaWQYAiABKANCA+BBAxIRCgRuYW1lGAMgASgJQgPgQQMSOgoGcGFyZW50GAQgASgJQirgQQP6QSQKImdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9MaWZlRXZlbnQSHAoPbGF1bmNoZWRfdG9fYWxsGAUgASgIQgPgQQMSWwoOYXZhaWxhYmlsaXRpZXMYBiADKAsyPi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuY29tbW9uLkNyaXRlcmlvbkNhdGVnb3J5QXZhaWxhYmlsaXR5QgPgQQM6W+pBWAoiZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0xpZmVFdmVudBIyY3VzdG9tZXJzL3tjdXN0b21lcl9pZH0vbGlmZUV2ZW50cy97bGlmZV9ldmVudF9pZH1CgAIKJmNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYucmVzb3VyY2VzQg5MaWZlRXZlbnRQcm90b1ABWktnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L3Jlc291cmNlcztyZXNvdXJjZXOiAgNHQUGqAiJHb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuUmVzb3VyY2VzygIiR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XFJlc291cmNlc+oCJkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6UmVzb3VyY2VzYgZwcm90bzM", [file_google_ads_googleads_v16_common_criterion_category_availability, file_google_api_field_behavior, file_google_api_resource]);

/**
 * A life event: a particular interest-based vertical to be targeted to reach
 * users when they are in the midst of important life milestones.
 *
 * @generated from message google.ads.googleads.v16.resources.LifeEvent
 */
export type LifeEvent = Message<"google.ads.googleads.v16.resources.LifeEvent"> & {
  /**
   * Output only. The resource name of the life event.
   * Life event resource names have the form:
   *
   * `customers/{customer_id}/lifeEvents/{life_event_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The ID of the life event.
   *
   * @generated from field: int64 id = 2;
   */
  id: bigint;

  /**
   * Output only. The name of the life event, for example,"Recently Moved"
   *
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * Output only. The parent of the life_event.
   *
   * @generated from field: string parent = 4;
   */
  parent: string;

  /**
   * Output only. True if the life event is launched to all channels and
   * locales.
   *
   * @generated from field: bool launched_to_all = 5;
   */
  launchedToAll: boolean;

  /**
   * Output only. Availability information of the life event.
   *
   * @generated from field: repeated google.ads.googleads.v16.common.CriterionCategoryAvailability availabilities = 6;
   */
  availabilities: CriterionCategoryAvailability[];
};

/**
 * Describes the message google.ads.googleads.v16.resources.LifeEvent.
 * Use `create(LifeEventSchema)` to create a new message.
 */
export const LifeEventSchema: GenMessage<LifeEvent> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_life_event, 0);
