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
// @generated from file google/cloud/discoveryengine/v1alpha/sample_query.proto (package google.cloud.discoveryengine.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/discoveryengine/v1alpha/sample_query.proto.
 */
export const file_google_cloud_discoveryengine_v1alpha_sample_query: GenFile = /*@__PURE__*/
  fileDesc("Cjdnb29nbGUvY2xvdWQvZGlzY292ZXJ5ZW5naW5lL3YxYWxwaGEvc2FtcGxlX3F1ZXJ5LnByb3RvEiRnb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEilgQKC1NhbXBsZVF1ZXJ5ElMKC3F1ZXJ5X2VudHJ5GAIgASgLMjwuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLlNhbXBsZVF1ZXJ5LlF1ZXJ5RW50cnlIABIRCgRuYW1lGAEgASgJQgPgQQgSNAoLY3JlYXRlX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMawQEKClF1ZXJ5RW50cnkSEgoFcXVlcnkYASABKAlCA+BBAhJUCgd0YXJnZXRzGAMgAygLMkMuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLlNhbXBsZVF1ZXJ5LlF1ZXJ5RW50cnkuVGFyZ2V0GkkKBlRhcmdldBILCgN1cmkYASABKAkSFAoMcGFnZV9udW1iZXJzGAIgAygFEhIKBXNjb3JlGAMgASgBSACIAQFCCAoGX3Njb3JlOpkB6kGVAQoqZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29tL1NhbXBsZVF1ZXJ5Emdwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vc2FtcGxlUXVlcnlTZXRzL3tzYW1wbGVfcXVlcnlfc2V0fS9zYW1wbGVRdWVyaWVzL3tzYW1wbGVfcXVlcnl9QgkKB2NvbnRlbnRCnAIKKGNvbS5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGFCEFNhbXBsZVF1ZXJ5UHJvdG9QAVpSY2xvdWQuZ29vZ2xlLmNvbS9nby9kaXNjb3ZlcnllbmdpbmUvYXBpdjFhbHBoYS9kaXNjb3ZlcnllbmdpbmVwYjtkaXNjb3ZlcnllbmdpbmVwYqICD0RJU0NPVkVSWUVOR0lORaoCJEdvb2dsZS5DbG91ZC5EaXNjb3ZlcnlFbmdpbmUuVjFBbHBoYcoCJEdvb2dsZVxDbG91ZFxEaXNjb3ZlcnlFbmdpbmVcVjFhbHBoYeoCJ0dvb2dsZTo6Q2xvdWQ6OkRpc2NvdmVyeUVuZ2luZTo6VjFhbHBoYWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * Sample Query captures metadata to be used for evaluation.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.SampleQuery
 */
export type SampleQuery = Message<"google.cloud.discoveryengine.v1alpha.SampleQuery"> & {
  /**
   * The content of the sample query.
   *
   * @generated from oneof google.cloud.discoveryengine.v1alpha.SampleQuery.content
   */
  content: {
    /**
     * The query entry.
     *
     * @generated from field: google.cloud.discoveryengine.v1alpha.SampleQuery.QueryEntry query_entry = 2;
     */
    value: SampleQuery_QueryEntry;
    case: "queryEntry";
  } | { case: undefined; value?: undefined };

  /**
   * Identifier. The full resource name of the sample query, in the format of
   * `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}/sampleQueries/{sample_query}`.
   *
   * This field must be a UTF-8 encoded string with a length limit of 1024
   * characters.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Timestamp the
   * [SampleQuery][google.cloud.discoveryengine.v1alpha.SampleQuery] was created
   * at.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.SampleQuery.
 * Use `create(SampleQuerySchema)` to create a new message.
 */
export const SampleQuerySchema: GenMessage<SampleQuery> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_sample_query, 0);

/**
 * Query Entry captures metadata to be used for search evaluation.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.SampleQuery.QueryEntry
 */
export type SampleQuery_QueryEntry = Message<"google.cloud.discoveryengine.v1alpha.SampleQuery.QueryEntry"> & {
  /**
   * Required. The query.
   *
   * @generated from field: string query = 1;
   */
  query: string;

  /**
   * List of targets for the query.
   *
   * @generated from field: repeated google.cloud.discoveryengine.v1alpha.SampleQuery.QueryEntry.Target targets = 3;
   */
  targets: SampleQuery_QueryEntry_Target[];
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.SampleQuery.QueryEntry.
 * Use `create(SampleQuery_QueryEntrySchema)` to create a new message.
 */
export const SampleQuery_QueryEntrySchema: GenMessage<SampleQuery_QueryEntry> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_sample_query, 0, 0);

/**
 * Defines the parameters of the query's expected outcome.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.SampleQuery.QueryEntry.Target
 */
export type SampleQuery_QueryEntry_Target = Message<"google.cloud.discoveryengine.v1alpha.SampleQuery.QueryEntry.Target"> & {
  /**
   * Expected uri of the target.
   *
   * This field must be a UTF-8 encoded string with a length limit of 2048
   * characters.
   *
   * Example of valid uris: `https://example.com/abc`,
   * `gcs://example/example.pdf`.
   *
   * @generated from field: string uri = 1;
   */
  uri: string;

  /**
   * Expected page numbers of the target.
   *
   * Each page number must be non negative.
   *
   * @generated from field: repeated int32 page_numbers = 2;
   */
  pageNumbers: number[];

  /**
   * Relevance score of the target.
   *
   * @generated from field: optional double score = 3;
   */
  score?: number;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.SampleQuery.QueryEntry.Target.
 * Use `create(SampleQuery_QueryEntry_TargetSchema)` to create a new message.
 */
export const SampleQuery_QueryEntry_TargetSchema: GenMessage<SampleQuery_QueryEntry_Target> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_sample_query, 0, 0, 0);
