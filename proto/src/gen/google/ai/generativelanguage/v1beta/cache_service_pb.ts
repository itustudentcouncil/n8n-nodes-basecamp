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
// @generated from file google/ai/generativelanguage/v1beta/cache_service.proto (package google.ai.generativelanguage.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { CachedContent, CachedContentSchema } from "./cached_content_pb";
import { file_google_ai_generativelanguage_v1beta_cached_content } from "./cached_content_pb";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { EmptySchema, FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ai/generativelanguage/v1beta/cache_service.proto.
 */
export const file_google_ai_generativelanguage_v1beta_cache_service: GenFile = /*@__PURE__*/
  fileDesc("Cjdnb29nbGUvYWkvZ2VuZXJhdGl2ZWxhbmd1YWdlL3YxYmV0YS9jYWNoZV9zZXJ2aWNlLnByb3RvEiNnb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxYmV0YSJMChlMaXN0Q2FjaGVkQ29udGVudHNSZXF1ZXN0EhYKCXBhZ2Vfc2l6ZRgBIAEoBUID4EEBEhcKCnBhZ2VfdG9rZW4YAiABKAlCA+BBASKCAQoaTGlzdENhY2hlZENvbnRlbnRzUmVzcG9uc2USSwoPY2FjaGVkX2NvbnRlbnRzGAEgAygLMjIuZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEuQ2FjaGVkQ29udGVudBIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkibQoaQ3JlYXRlQ2FjaGVkQ29udGVudFJlcXVlc3QSTwoOY2FjaGVkX2NvbnRlbnQYASABKAsyMi5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxYmV0YS5DYWNoZWRDb250ZW50QgPgQQIiYAoXR2V0Q2FjaGVkQ29udGVudFJlcXVlc3QSRQoEbmFtZRgBIAEoCUI34EEC+kExCi9nZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb20vQ2FjaGVkQ29udGVudCKeAQoaVXBkYXRlQ2FjaGVkQ29udGVudFJlcXVlc3QSTwoOY2FjaGVkX2NvbnRlbnQYASABKAsyMi5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxYmV0YS5DYWNoZWRDb250ZW50QgPgQQISLwoLdXBkYXRlX21hc2sYAiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrImMKGkRlbGV0ZUNhY2hlZENvbnRlbnRSZXF1ZXN0EkUKBG5hbWUYASABKAlCN+BBAvpBMQovZ2VuZXJhdGl2ZWxhbmd1YWdlLmdvb2dsZWFwaXMuY29tL0NhY2hlZENvbnRlbnQyhwgKDENhY2hlU2VydmljZRK4AQoSTGlzdENhY2hlZENvbnRlbnRzEj4uZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEuTGlzdENhY2hlZENvbnRlbnRzUmVxdWVzdBo/Lmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjFiZXRhLkxpc3RDYWNoZWRDb250ZW50c1Jlc3BvbnNlIiHaQQCC0+STAhgSFi92MWJldGEvY2FjaGVkQ29udGVudHMSywEKE0NyZWF0ZUNhY2hlZENvbnRlbnQSPy5nb29nbGUuYWkuZ2VuZXJhdGl2ZWxhbmd1YWdlLnYxYmV0YS5DcmVhdGVDYWNoZWRDb250ZW50UmVxdWVzdBoyLmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjFiZXRhLkNhY2hlZENvbnRlbnQiP9pBDmNhY2hlZF9jb250ZW50gtPkkwIoOg5jYWNoZWRfY29udGVudCIWL3YxYmV0YS9jYWNoZWRDb250ZW50cxK0AQoQR2V0Q2FjaGVkQ29udGVudBI8Lmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjFiZXRhLkdldENhY2hlZENvbnRlbnRSZXF1ZXN0GjIuZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEuQ2FjaGVkQ29udGVudCIu2kEEbmFtZYLT5JMCIRIfL3YxYmV0YS97bmFtZT1jYWNoZWRDb250ZW50cy8qfRLvAQoTVXBkYXRlQ2FjaGVkQ29udGVudBI/Lmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjFiZXRhLlVwZGF0ZUNhY2hlZENvbnRlbnRSZXF1ZXN0GjIuZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEuQ2FjaGVkQ29udGVudCJj2kEaY2FjaGVkX2NvbnRlbnQsdXBkYXRlX21hc2uC0+STAkA6DmNhY2hlZF9jb250ZW50Mi4vdjFiZXRhL3tjYWNoZWRfY29udGVudC5uYW1lPWNhY2hlZENvbnRlbnRzLyp9Ep4BChNEZWxldGVDYWNoZWRDb250ZW50Ej8uZ29vZ2xlLmFpLmdlbmVyYXRpdmVsYW5ndWFnZS52MWJldGEuRGVsZXRlQ2FjaGVkQ29udGVudFJlcXVlc3QaFi5nb29nbGUucHJvdG9idWYuRW1wdHkiLtpBBG5hbWWC0+STAiEqHy92MWJldGEve25hbWU9Y2FjaGVkQ29udGVudHMvKn0aJMpBIWdlbmVyYXRpdmVsYW5ndWFnZS5nb29nbGVhcGlzLmNvbUKdAQonY29tLmdvb2dsZS5haS5nZW5lcmF0aXZlbGFuZ3VhZ2UudjFiZXRhQhFDYWNoZVNlcnZpY2VQcm90b1ABWl1jbG91ZC5nb29nbGUuY29tL2dvL2FpL2dlbmVyYXRpdmVsYW5ndWFnZS9hcGl2MWJldGEvZ2VuZXJhdGl2ZWxhbmd1YWdlcGI7Z2VuZXJhdGl2ZWxhbmd1YWdlcGJiBnByb3RvMw", [file_google_ai_generativelanguage_v1beta_cached_content, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_empty, file_google_protobuf_field_mask]);

/**
 * Request to list CachedContents.
 *
 * @generated from message google.ai.generativelanguage.v1beta.ListCachedContentsRequest
 */
export type ListCachedContentsRequest = Message<"google.ai.generativelanguage.v1beta.ListCachedContentsRequest"> & {
  /**
   * Optional. The maximum number of cached contents to return. The service may
   * return fewer than this value. If unspecified, some default (under maximum)
   * number of items will be returned. The maximum value is 1000; values above
   * 1000 will be coerced to 1000.
   *
   * @generated from field: int32 page_size = 1;
   */
  pageSize: number;

  /**
   * Optional. A page token, received from a previous `ListCachedContents` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListCachedContents` must
   * match the call that provided the page token.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken: string;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta.ListCachedContentsRequest.
 * Use `create(ListCachedContentsRequestSchema)` to create a new message.
 */
export const ListCachedContentsRequestSchema: GenMessage<ListCachedContentsRequest> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta_cache_service, 0);

/**
 * Response with CachedContents list.
 *
 * @generated from message google.ai.generativelanguage.v1beta.ListCachedContentsResponse
 */
export type ListCachedContentsResponse = Message<"google.ai.generativelanguage.v1beta.ListCachedContentsResponse"> & {
  /**
   * List of cached contents.
   *
   * @generated from field: repeated google.ai.generativelanguage.v1beta.CachedContent cached_contents = 1;
   */
  cachedContents: CachedContent[];

  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta.ListCachedContentsResponse.
 * Use `create(ListCachedContentsResponseSchema)` to create a new message.
 */
export const ListCachedContentsResponseSchema: GenMessage<ListCachedContentsResponse> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta_cache_service, 1);

/**
 * Request to create CachedContent.
 *
 * @generated from message google.ai.generativelanguage.v1beta.CreateCachedContentRequest
 */
export type CreateCachedContentRequest = Message<"google.ai.generativelanguage.v1beta.CreateCachedContentRequest"> & {
  /**
   * Required. The cached content to create.
   *
   * @generated from field: google.ai.generativelanguage.v1beta.CachedContent cached_content = 1;
   */
  cachedContent?: CachedContent;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta.CreateCachedContentRequest.
 * Use `create(CreateCachedContentRequestSchema)` to create a new message.
 */
export const CreateCachedContentRequestSchema: GenMessage<CreateCachedContentRequest> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta_cache_service, 2);

/**
 * Request to read CachedContent.
 *
 * @generated from message google.ai.generativelanguage.v1beta.GetCachedContentRequest
 */
export type GetCachedContentRequest = Message<"google.ai.generativelanguage.v1beta.GetCachedContentRequest"> & {
  /**
   * Required. The resource name referring to the content cache entry.
   * Format: `cachedContents/{id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta.GetCachedContentRequest.
 * Use `create(GetCachedContentRequestSchema)` to create a new message.
 */
export const GetCachedContentRequestSchema: GenMessage<GetCachedContentRequest> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta_cache_service, 3);

/**
 * Request to update CachedContent.
 *
 * @generated from message google.ai.generativelanguage.v1beta.UpdateCachedContentRequest
 */
export type UpdateCachedContentRequest = Message<"google.ai.generativelanguage.v1beta.UpdateCachedContentRequest"> & {
  /**
   * Required. The content cache entry to update
   *
   * @generated from field: google.ai.generativelanguage.v1beta.CachedContent cached_content = 1;
   */
  cachedContent?: CachedContent;

  /**
   * The list of fields to update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta.UpdateCachedContentRequest.
 * Use `create(UpdateCachedContentRequestSchema)` to create a new message.
 */
export const UpdateCachedContentRequestSchema: GenMessage<UpdateCachedContentRequest> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta_cache_service, 4);

/**
 * Request to delete CachedContent.
 *
 * @generated from message google.ai.generativelanguage.v1beta.DeleteCachedContentRequest
 */
export type DeleteCachedContentRequest = Message<"google.ai.generativelanguage.v1beta.DeleteCachedContentRequest"> & {
  /**
   * Required. The resource name referring to the content cache entry
   * Format: `cachedContents/{id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.ai.generativelanguage.v1beta.DeleteCachedContentRequest.
 * Use `create(DeleteCachedContentRequestSchema)` to create a new message.
 */
export const DeleteCachedContentRequestSchema: GenMessage<DeleteCachedContentRequest> = /*@__PURE__*/
  messageDesc(file_google_ai_generativelanguage_v1beta_cache_service, 5);

/**
 * API for managing cache of content (CachedContent resources) that can be used
 * in GenerativeService requests. This way generate content requests can benefit
 * from preprocessing work being done earlier, possibly lowering their
 * computational cost. It is intended to be used with large contexts.
 *
 * @generated from service google.ai.generativelanguage.v1beta.CacheService
 */
export const CacheService: GenService<{
  /**
   * Lists CachedContents.
   *
   * @generated from rpc google.ai.generativelanguage.v1beta.CacheService.ListCachedContents
   */
  listCachedContents: {
    methodKind: "unary";
    input: typeof ListCachedContentsRequestSchema;
    output: typeof ListCachedContentsResponseSchema;
  },
  /**
   * Creates CachedContent resource.
   *
   * @generated from rpc google.ai.generativelanguage.v1beta.CacheService.CreateCachedContent
   */
  createCachedContent: {
    methodKind: "unary";
    input: typeof CreateCachedContentRequestSchema;
    output: typeof CachedContentSchema;
  },
  /**
   * Reads CachedContent resource.
   *
   * @generated from rpc google.ai.generativelanguage.v1beta.CacheService.GetCachedContent
   */
  getCachedContent: {
    methodKind: "unary";
    input: typeof GetCachedContentRequestSchema;
    output: typeof CachedContentSchema;
  },
  /**
   * Updates CachedContent resource (only expiration is updatable).
   *
   * @generated from rpc google.ai.generativelanguage.v1beta.CacheService.UpdateCachedContent
   */
  updateCachedContent: {
    methodKind: "unary";
    input: typeof UpdateCachedContentRequestSchema;
    output: typeof CachedContentSchema;
  },
  /**
   * Deletes CachedContent resource.
   *
   * @generated from rpc google.ai.generativelanguage.v1beta.CacheService.DeleteCachedContent
   */
  deleteCachedContent: {
    methodKind: "unary";
    input: typeof DeleteCachedContentRequestSchema;
    output: typeof EmptySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ai_generativelanguage_v1beta_cache_service, 0);
