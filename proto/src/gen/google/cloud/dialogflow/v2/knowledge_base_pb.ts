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
// @generated from file google/cloud/dialogflow/v2/knowledge_base.proto (package google.cloud.dialogflow.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { EmptySchema, FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/dialogflow/v2/knowledge_base.proto.
 */
export const file_google_cloud_dialogflow_v2_knowledge_base: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvY2xvdWQvZGlhbG9nZmxvdy92Mi9rbm93bGVkZ2VfYmFzZS5wcm90bxIaZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjIi/AEKDUtub3dsZWRnZUJhc2USDAoEbmFtZRgBIAEoCRIZCgxkaXNwbGF5X25hbWUYAiABKAlCA+BBAhIVCg1sYW5ndWFnZV9jb2RlGAQgASgJOqoB6kGmAQonZGlhbG9nZmxvdy5nb29nbGVhcGlzLmNvbS9Lbm93bGVkZ2VCYXNlEjJwcm9qZWN0cy97cHJvamVjdH0va25vd2xlZGdlQmFzZXMve2tub3dsZWRnZV9iYXNlfRJHcHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L2tub3dsZWRnZUJhc2VzL3trbm93bGVkZ2VfYmFzZX0ikwEKGUxpc3RLbm93bGVkZ2VCYXNlc1JlcXVlc3QSPwoGcGFyZW50GAEgASgJQi/gQQL6QSkSJ2RpYWxvZ2Zsb3cuZ29vZ2xlYXBpcy5jb20vS25vd2xlZGdlQmFzZRIRCglwYWdlX3NpemUYAiABKAUSEgoKcGFnZV90b2tlbhgDIAEoCRIOCgZmaWx0ZXIYBCABKAkieQoaTGlzdEtub3dsZWRnZUJhc2VzUmVzcG9uc2USQgoPa25vd2xlZGdlX2Jhc2VzGAEgAygLMikuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjIuS25vd2xlZGdlQmFzZRIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkiWAoXR2V0S25vd2xlZGdlQmFzZVJlcXVlc3QSPQoEbmFtZRgBIAEoCUIv4EEC+kEpCidkaWFsb2dmbG93Lmdvb2dsZWFwaXMuY29tL0tub3dsZWRnZUJhc2UipQEKGkNyZWF0ZUtub3dsZWRnZUJhc2VSZXF1ZXN0Ej8KBnBhcmVudBgBIAEoCUIv4EEC+kEpEidkaWFsb2dmbG93Lmdvb2dsZWFwaXMuY29tL0tub3dsZWRnZUJhc2USRgoOa25vd2xlZGdlX2Jhc2UYAiABKAsyKS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52Mi5Lbm93bGVkZ2VCYXNlQgPgQQIibwoaRGVsZXRlS25vd2xlZGdlQmFzZVJlcXVlc3QSPQoEbmFtZRgBIAEoCUIv4EEC+kEpCidkaWFsb2dmbG93Lmdvb2dsZWFwaXMuY29tL0tub3dsZWRnZUJhc2USEgoFZm9yY2UYAiABKAhCA+BBASKaAQoaVXBkYXRlS25vd2xlZGdlQmFzZVJlcXVlc3QSRgoOa25vd2xlZGdlX2Jhc2UYASABKAsyKS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52Mi5Lbm93bGVkZ2VCYXNlQgPgQQISNAoLdXBkYXRlX21hc2sYAiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrQgPgQQEytA0KDktub3dsZWRnZUJhc2VzEqQCChJMaXN0S25vd2xlZGdlQmFzZXMSNS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52Mi5MaXN0S25vd2xlZGdlQmFzZXNSZXF1ZXN0GjYuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjIuTGlzdEtub3dsZWRnZUJhc2VzUmVzcG9uc2UingHaQQZwYXJlbnSC0+STAo4BWjQSMi92Mi97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9L2tub3dsZWRnZUJhc2VzWi4SLC92Mi97cGFyZW50PXByb2plY3RzLyovYWdlbnR9L2tub3dsZWRnZUJhc2VzEiYvdjIve3BhcmVudD1wcm9qZWN0cy8qfS9rbm93bGVkZ2VCYXNlcxKRAgoQR2V0S25vd2xlZGdlQmFzZRIzLmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyLkdldEtub3dsZWRnZUJhc2VSZXF1ZXN0GikuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjIuS25vd2xlZGdlQmFzZSKcAdpBBG5hbWWC0+STAo4BWjQSMi92Mi97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2tub3dsZWRnZUJhc2VzLyp9Wi4SLC92Mi97bmFtZT1wcm9qZWN0cy8qL2FnZW50L2tub3dsZWRnZUJhc2VzLyp9EiYvdjIve25hbWU9cHJvamVjdHMvKi9rbm93bGVkZ2VCYXNlcy8qfRLYAgoTQ3JlYXRlS25vd2xlZGdlQmFzZRI2Lmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyLkNyZWF0ZUtub3dsZWRnZUJhc2VSZXF1ZXN0GikuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjIuS25vd2xlZGdlQmFzZSLdAdpBFXBhcmVudCxrbm93bGVkZ2VfYmFzZYLT5JMCvgE6Dmtub3dsZWRnZV9iYXNlWkQ6Dmtub3dsZWRnZV9iYXNlIjIvdjIve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qfS9rbm93bGVkZ2VCYXNlc1o+Og5rbm93bGVkZ2VfYmFzZSIsL3YyL3twYXJlbnQ9cHJvamVjdHMvKi9hZ2VudH0va25vd2xlZGdlQmFzZXMiJi92Mi97cGFyZW50PXByb2plY3RzLyp9L2tub3dsZWRnZUJhc2VzEoQCChNEZWxldGVLbm93bGVkZ2VCYXNlEjYuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cudjIuRGVsZXRlS25vd2xlZGdlQmFzZVJlcXVlc3QaFi5nb29nbGUucHJvdG9idWYuRW1wdHkinAHaQQRuYW1lgtPkkwKOAVo0KjIvdjIve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9rbm93bGVkZ2VCYXNlcy8qfVouKiwvdjIve25hbWU9cHJvamVjdHMvKi9hZ2VudC9rbm93bGVkZ2VCYXNlcy8qfSomL3YyL3tuYW1lPXByb2plY3RzLyova25vd2xlZGdlQmFzZXMvKn0SigMKE1VwZGF0ZUtub3dsZWRnZUJhc2USNi5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52Mi5VcGRhdGVLbm93bGVkZ2VCYXNlUmVxdWVzdBopLmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LnYyLktub3dsZWRnZUJhc2UijwLaQRprbm93bGVkZ2VfYmFzZSx1cGRhdGVfbWFza4LT5JMC6wE6Dmtub3dsZWRnZV9iYXNlWlM6Dmtub3dsZWRnZV9iYXNlMkEvdjIve2tub3dsZWRnZV9iYXNlLm5hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9rbm93bGVkZ2VCYXNlcy8qfVpNOg5rbm93bGVkZ2VfYmFzZTI7L3YyL3trbm93bGVkZ2VfYmFzZS5uYW1lPXByb2plY3RzLyovYWdlbnQva25vd2xlZGdlQmFzZXMvKn0yNS92Mi97a25vd2xlZGdlX2Jhc2UubmFtZT1wcm9qZWN0cy8qL2tub3dsZWRnZUJhc2VzLyp9GnjKQRlkaWFsb2dmbG93Lmdvb2dsZWFwaXMuY29t0kFZaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybSxodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RpYWxvZ2Zsb3dCmwEKHmNvbS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy52MkISS25vd2xlZGdlQmFzZVByb3RvUAFaPmNsb3VkLmdvb2dsZS5jb20vZ28vZGlhbG9nZmxvdy9hcGl2Mi9kaWFsb2dmbG93cGI7ZGlhbG9nZmxvd3Bi+AEBogICREaqAhpHb29nbGUuQ2xvdWQuRGlhbG9nZmxvdy5WMmIGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_empty, file_google_protobuf_field_mask]);

/**
 * A knowledge base represents a collection of knowledge documents that you
 * provide to Dialogflow. Your knowledge documents contain information that may
 * be useful during conversations with end-users. Some Dialogflow features use
 * knowledge bases when looking for a response to an end-user input.
 *
 * For more information, see the [knowledge base
 * guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases).
 *
 * Note: The `projects.agent.knowledgeBases` resource is deprecated;
 * only use `projects.knowledgeBases`.
 *
 * @generated from message google.cloud.dialogflow.v2.KnowledgeBase
 */
export type KnowledgeBase = Message<"google.cloud.dialogflow.v2.KnowledgeBase"> & {
  /**
   * The knowledge base resource name.
   * The name must be empty when creating a knowledge base.
   * Format: `projects/<Project ID>/locations/<Location
   * ID>/knowledgeBases/<Knowledge Base ID>`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The display name of the knowledge base. The name must be 1024
   * bytes or less; otherwise, the creation request fails.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Language which represents the KnowledgeBase. When the KnowledgeBase is
   * created/updated, expect this to be present for non en-us languages. When
   * unspecified, the default language code en-us applies.
   *
   * @generated from field: string language_code = 4;
   */
  languageCode: string;
};

/**
 * Describes the message google.cloud.dialogflow.v2.KnowledgeBase.
 * Use `create(KnowledgeBaseSchema)` to create a new message.
 */
export const KnowledgeBaseSchema: GenMessage<KnowledgeBase> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_knowledge_base, 0);

/**
 * Request message for
 * [KnowledgeBases.ListKnowledgeBases][google.cloud.dialogflow.v2.KnowledgeBases.ListKnowledgeBases].
 *
 * @generated from message google.cloud.dialogflow.v2.ListKnowledgeBasesRequest
 */
export type ListKnowledgeBasesRequest = Message<"google.cloud.dialogflow.v2.ListKnowledgeBasesRequest"> & {
  /**
   * Required. The project to list of knowledge bases for.
   * Format: `projects/<Project ID>/locations/<Location ID>`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The maximum number of items to return in a single page. By
   * default 10 and at most 100.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * The next_page_token value returned from a previous list request.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * The filter expression used to filter knowledge bases returned by the list
   * method. The expression has the following syntax:
   *
   *   <field> <operator> <value> [AND <field> <operator> <value>] ...
   *
   * The following fields and operators are supported:
   *
   * * display_name with has(:) operator
   * * language_code with equals(=) operator
   *
   * Examples:
   *
   * * 'language_code=en-us' matches knowledge bases with en-us language code.
   * * 'display_name:articles' matches knowledge bases whose display name
   *   contains "articles".
   * * 'display_name:"Best Articles"' matches knowledge bases whose display
   *   name contains "Best Articles".
   * * 'language_code=en-gb AND display_name=articles' matches all knowledge
   *   bases whose display name contains "articles" and whose language code is
   *   "en-gb".
   *
   * Note: An empty filter string (i.e. "") is a no-op and will result in no
   * filtering.
   *
   * For more information about filtering, see
   * [API Filtering](https://aip.dev/160).
   *
   * @generated from field: string filter = 4;
   */
  filter: string;
};

/**
 * Describes the message google.cloud.dialogflow.v2.ListKnowledgeBasesRequest.
 * Use `create(ListKnowledgeBasesRequestSchema)` to create a new message.
 */
export const ListKnowledgeBasesRequestSchema: GenMessage<ListKnowledgeBasesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_knowledge_base, 1);

/**
 * Response message for
 * [KnowledgeBases.ListKnowledgeBases][google.cloud.dialogflow.v2.KnowledgeBases.ListKnowledgeBases].
 *
 * @generated from message google.cloud.dialogflow.v2.ListKnowledgeBasesResponse
 */
export type ListKnowledgeBasesResponse = Message<"google.cloud.dialogflow.v2.ListKnowledgeBasesResponse"> & {
  /**
   * The list of knowledge bases.
   *
   * @generated from field: repeated google.cloud.dialogflow.v2.KnowledgeBase knowledge_bases = 1;
   */
  knowledgeBases: KnowledgeBase[];

  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.dialogflow.v2.ListKnowledgeBasesResponse.
 * Use `create(ListKnowledgeBasesResponseSchema)` to create a new message.
 */
export const ListKnowledgeBasesResponseSchema: GenMessage<ListKnowledgeBasesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_knowledge_base, 2);

/**
 * Request message for
 * [KnowledgeBases.GetKnowledgeBase][google.cloud.dialogflow.v2.KnowledgeBases.GetKnowledgeBase].
 *
 * @generated from message google.cloud.dialogflow.v2.GetKnowledgeBaseRequest
 */
export type GetKnowledgeBaseRequest = Message<"google.cloud.dialogflow.v2.GetKnowledgeBaseRequest"> & {
  /**
   * Required. The name of the knowledge base to retrieve.
   * Format `projects/<Project ID>/locations/<Location
   * ID>/knowledgeBases/<Knowledge Base ID>`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.dialogflow.v2.GetKnowledgeBaseRequest.
 * Use `create(GetKnowledgeBaseRequestSchema)` to create a new message.
 */
export const GetKnowledgeBaseRequestSchema: GenMessage<GetKnowledgeBaseRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_knowledge_base, 3);

/**
 * Request message for
 * [KnowledgeBases.CreateKnowledgeBase][google.cloud.dialogflow.v2.KnowledgeBases.CreateKnowledgeBase].
 *
 * @generated from message google.cloud.dialogflow.v2.CreateKnowledgeBaseRequest
 */
export type CreateKnowledgeBaseRequest = Message<"google.cloud.dialogflow.v2.CreateKnowledgeBaseRequest"> & {
  /**
   * Required. The project to create a knowledge base for.
   * Format: `projects/<Project ID>/locations/<Location ID>`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The knowledge base to create.
   *
   * @generated from field: google.cloud.dialogflow.v2.KnowledgeBase knowledge_base = 2;
   */
  knowledgeBase?: KnowledgeBase;
};

/**
 * Describes the message google.cloud.dialogflow.v2.CreateKnowledgeBaseRequest.
 * Use `create(CreateKnowledgeBaseRequestSchema)` to create a new message.
 */
export const CreateKnowledgeBaseRequestSchema: GenMessage<CreateKnowledgeBaseRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_knowledge_base, 4);

/**
 * Request message for
 * [KnowledgeBases.DeleteKnowledgeBase][google.cloud.dialogflow.v2.KnowledgeBases.DeleteKnowledgeBase].
 *
 * @generated from message google.cloud.dialogflow.v2.DeleteKnowledgeBaseRequest
 */
export type DeleteKnowledgeBaseRequest = Message<"google.cloud.dialogflow.v2.DeleteKnowledgeBaseRequest"> & {
  /**
   * Required. The name of the knowledge base to delete.
   * Format: `projects/<Project ID>/locations/<Location
   * ID>/knowledgeBases/<Knowledge Base ID>`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Force deletes the knowledge base. When set to true, any documents
   * in the knowledge base are also deleted.
   *
   * @generated from field: bool force = 2;
   */
  force: boolean;
};

/**
 * Describes the message google.cloud.dialogflow.v2.DeleteKnowledgeBaseRequest.
 * Use `create(DeleteKnowledgeBaseRequestSchema)` to create a new message.
 */
export const DeleteKnowledgeBaseRequestSchema: GenMessage<DeleteKnowledgeBaseRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_knowledge_base, 5);

/**
 * Request message for
 * [KnowledgeBases.UpdateKnowledgeBase][google.cloud.dialogflow.v2.KnowledgeBases.UpdateKnowledgeBase].
 *
 * @generated from message google.cloud.dialogflow.v2.UpdateKnowledgeBaseRequest
 */
export type UpdateKnowledgeBaseRequest = Message<"google.cloud.dialogflow.v2.UpdateKnowledgeBaseRequest"> & {
  /**
   * Required. The knowledge base to update.
   *
   * @generated from field: google.cloud.dialogflow.v2.KnowledgeBase knowledge_base = 1;
   */
  knowledgeBase?: KnowledgeBase;

  /**
   * Optional. Not specified means `update all`.
   * Currently, only `display_name` can be updated, an InvalidArgument will be
   * returned for attempting to update other fields.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.dialogflow.v2.UpdateKnowledgeBaseRequest.
 * Use `create(UpdateKnowledgeBaseRequestSchema)` to create a new message.
 */
export const UpdateKnowledgeBaseRequestSchema: GenMessage<UpdateKnowledgeBaseRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_v2_knowledge_base, 6);

/**
 * Service for managing
 * [KnowledgeBases][google.cloud.dialogflow.v2.KnowledgeBase].
 *
 * @generated from service google.cloud.dialogflow.v2.KnowledgeBases
 */
export const KnowledgeBases: GenService<{
  /**
   * Returns the list of all knowledge bases of the specified agent.
   *
   * @generated from rpc google.cloud.dialogflow.v2.KnowledgeBases.ListKnowledgeBases
   */
  listKnowledgeBases: {
    methodKind: "unary";
    input: typeof ListKnowledgeBasesRequestSchema;
    output: typeof ListKnowledgeBasesResponseSchema;
  },
  /**
   * Retrieves the specified knowledge base.
   *
   * @generated from rpc google.cloud.dialogflow.v2.KnowledgeBases.GetKnowledgeBase
   */
  getKnowledgeBase: {
    methodKind: "unary";
    input: typeof GetKnowledgeBaseRequestSchema;
    output: typeof KnowledgeBaseSchema;
  },
  /**
   * Creates a knowledge base.
   *
   * @generated from rpc google.cloud.dialogflow.v2.KnowledgeBases.CreateKnowledgeBase
   */
  createKnowledgeBase: {
    methodKind: "unary";
    input: typeof CreateKnowledgeBaseRequestSchema;
    output: typeof KnowledgeBaseSchema;
  },
  /**
   * Deletes the specified knowledge base.
   *
   * @generated from rpc google.cloud.dialogflow.v2.KnowledgeBases.DeleteKnowledgeBase
   */
  deleteKnowledgeBase: {
    methodKind: "unary";
    input: typeof DeleteKnowledgeBaseRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Updates the specified knowledge base.
   *
   * @generated from rpc google.cloud.dialogflow.v2.KnowledgeBases.UpdateKnowledgeBase
   */
  updateKnowledgeBase: {
    methodKind: "unary";
    input: typeof UpdateKnowledgeBaseRequestSchema;
    output: typeof KnowledgeBaseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_dialogflow_v2_knowledge_base, 0);
