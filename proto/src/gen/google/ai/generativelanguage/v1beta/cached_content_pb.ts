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
// @generated from file google/ai/generativelanguage/v1beta/cached_content.proto (package google.ai.generativelanguage.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Content, Tool, ToolConfig } from "./content_pb";
import { file_google_ai_generativelanguage_v1beta_content } from "./content_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ai/generativelanguage/v1beta/cached_content.proto.
 */
export const file_google_ai_generativelanguage_v1beta_cached_content: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvYWkvZ2VuZXJhdGl2ZWxhbmd1YWdlL3YxYmV0YS9jYWNoZWRfY29udGVudC5wcm90bxIjZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEi8QcKDUNhY2hlZENvbnRlbnQSMQoLZXhwaXJlX3RpbWUYCSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wSAASLQoDdHRsGAogASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQgPgQQRIABIZCgRuYW1lGAEgASgJQgbgQQjgQQFIAYgBARIhCgxkaXNwbGF5X25hbWUYCyABKAlCBuBBAeBBBUgCiAEBEkYKBW1vZGVsGAIgASgJQjLgQQXgQQL6QSkKJ2dlbmVyYXRpdmVsYW5ndWFnZS5nb29nbGVhcGlzLmNvbS9Nb2RlbEgDiAEBElgKEnN5c3RlbV9pbnN0cnVjdGlvbhgDIAEoCzIsLmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjFiZXRhLkNvbnRlbnRCCeBBAeBBBeBBBEgEiAEBEkkKCGNvbnRlbnRzGAQgAygLMiwuZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEuQ29udGVudEIJ4EEB4EEF4EEEEkMKBXRvb2xzGAUgAygLMikuZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEuVG9vbEIJ4EEB4EEF4EEEElQKC3Rvb2xfY29uZmlnGAYgASgLMi8uZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEuVG9vbENvbmZpZ0IJ4EEB4EEF4EEESAWIAQESNAoLY3JlYXRlX3RpbWUYByABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSNAoLdXBkYXRlX3RpbWUYCCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSXQoOdXNhZ2VfbWV0YWRhdGEYDCABKAsyQC5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxYmV0YS5DYWNoZWRDb250ZW50LlVzYWdlTWV0YWRhdGFCA+BBAxoqCg1Vc2FnZU1ldGFkYXRhEhkKEXRvdGFsX3Rva2VuX2NvdW50GAEgASgFOmjqQWUKL2dlbmVyYXRpdmVsYW5ndWFnZS5nb29nbGVhcGlzLmNvbS9DYWNoZWRDb250ZW50EhNjYWNoZWRDb250ZW50cy97aWR9Kg5jYWNoZWRDb250ZW50czINY2FjaGVkQ29udGVudEIMCgpleHBpcmF0aW9uQgcKBV9uYW1lQg8KDV9kaXNwbGF5X25hbWVCCAoGX21vZGVsQhUKE19zeXN0ZW1faW5zdHJ1Y3Rpb25CDgoMX3Rvb2xfY29uZmlnQp4BCidjb20uZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGFCEkNhY2hlZENvbnRlbnRQcm90b1ABWl1jbG91ZC5nb29nbGUuY29tL2dvL2FpL2dlbmVyYXRpdmVsYW5ndWFnZS9hcGl2MWJldGEvZ2VuZXJhdGl2ZWxhbmd1YWdlcGI7Z2VuZXJhdGl2ZWxhbmd1YWdlcGJiBnByb3RvMw", [file_google_ai_generativelanguage_v1beta_content, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_duration, file_google_protobuf_timestamp]);

/**
 * Content that has been preprocessed and can be used in subsequent request
 * to GenerativeService.
 *
 * Cached content can be only used with model it was created for.
 *
 * @generated from message google.ai.generativelanguage.v1beta.CachedContent
 */
export type CachedContent = Message<"google.ai.generativelanguage.v1beta.CachedContent"> & {
  /**
   * Specifies when this resource will expire.
   *
   * @generated from oneof google.ai.generativelanguage.v1beta.CachedContent.expiration
   */
  expiration: {
    /**
     * Timestamp in UTC of when this resource is considered expired.
     * This is *always* provided on output, regardless of what was sent
     * on input.
     *
     * @generated from field: google.protobuf.Timestamp expire_time = 9;
     */
    value: Timestamp;
    case: "expireTime";
  } | {
    /**
     * Input only. New TTL for this resource, input only.
     *
     * @generated from field: google.protobuf.Duration ttl = 10;
     */
    value: Duration;
    case: "ttl";
  } | { case: undefined; value?: undefined };

  /**
   * Optional. Identifier. The resource name referring to the cached content.
   * Format: `cachedContents/{id}`
   *
   * @generated from field: optional string name = 1;
   */
  name?: string;

  /**
   * Optional. Immutable. The user-generated meaningful display name of the
   * cached content. Maximum 128 Unicode characters.
   *
   * @generated from field: optional string display_name = 11;
   */
  displayName?: string;

  /**
   * Required. Immutable. The name of the `Model` to use for cached content
   * Format: `models/{model}`
   *
   * @generated from field: optional string model = 2;
   */
  model?: string;

  /**
   * Optional. Input only. Immutable. Developer set system instruction.
   * Currently text only.
   *
   * @generated from field: optional google.ai.generativelanguage.v1beta.Content system_instruction = 3;
   */
  systemInstruction?: Content;

  /**
   * Optional. Input only. Immutable. The content to cache.
   *
   * @generated from field: repeated google.ai.generativelanguage.v1beta.Content contents = 4;
   */
  contents: Content[];

  /**
   * Optional. Input only. Immutable. A list of `Tools` the model may use to
   * generate the next response
   *
   * @generated from field: repeated google.ai.generativelanguage.v1beta.Tool tools = 5;
   */
  tools: Tool[];

  /**
   * Optional. Input only. Immutable. Tool config. This config is shared for all
   * tools.
   *
   * @generated from field: optional google.ai.generativelanguage.v1beta.ToolConfig tool_config = 6;
   */
  toolConfig?: ToolConfig;

  /**
   * Output only. Creation time of the cache entry.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 7;
   */
  createTime?: Timestamp;

  /**
   * Output only. When the cache entry was last updated in UTC time.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 8;
   */
  updateTime?: Timestamp;

  /**
   * Output only. Metadata on the usage of the cached content.
   *
   * @generated from field: google.ai.generativelanguage.v1beta.CachedContent.UsageMetadata usage_metadata = 12;
   */
  usageMetadata?: CachedContent_UsageMetadata;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta.CachedContent.
 * Use `create(CachedContentSchema)` to create a new message.
 */
export const CachedContentSchema: GenMessage<CachedContent> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta_cached_content, 0);

/**
 * Metadata on the usage of the cached content.
 *
 * @generated from message google.ai.generativelanguage.v1beta.CachedContent.UsageMetadata
 */
export type CachedContent_UsageMetadata = Message<"google.ai.generativelanguage.v1beta.CachedContent.UsageMetadata"> & {
  /**
   * Total number of tokens that the cached content consumes.
   *
   * @generated from field: int32 total_token_count = 1;
   */
  totalTokenCount: number;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta.CachedContent.UsageMetadata.
 * Use `create(CachedContent_UsageMetadataSchema)` to create a new message.
 */
export const CachedContent_UsageMetadataSchema: GenMessage<CachedContent_UsageMetadata> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta_cached_content, 0, 0);
