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
// @generated from file google/cloud/talent/v4beta1/completion_service.proto (package google.cloud.talent.v4beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { ResponseMetadata } from "./common_pb";
import { file_google_cloud_talent_v4beta1_common } from "./common_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/talent/v4beta1/completion_service.proto.
 */
export const file_google_cloud_talent_v4beta1_completion_service: GenFile = /*@__PURE__*/
  fileDesc("CjRnb29nbGUvY2xvdWQvdGFsZW50L3Y0YmV0YTEvY29tcGxldGlvbl9zZXJ2aWNlLnByb3RvEhtnb29nbGUuY2xvdWQudGFsZW50LnY0YmV0YTEikwQKFENvbXBsZXRlUXVlcnlSZXF1ZXN0EjMKBnBhcmVudBgBIAEoCUIj4EEC+kEdEhtqb2JzLmdvb2dsZWFwaXMuY29tL0NvbXBhbnkSEgoFcXVlcnkYAiABKAlCA+BBAhIWCg5sYW5ndWFnZV9jb2RlcxgDIAMoCRIWCglwYWdlX3NpemUYBCABKAVCA+BBAhIxCgdjb21wYW55GAUgASgJQiD6QR0KG2pvYnMuZ29vZ2xlYXBpcy5jb20vQ29tcGFueRJQCgVzY29wZRgGIAEoDjJBLmdvb2dsZS5jbG91ZC50YWxlbnQudjRiZXRhMS5Db21wbGV0ZVF1ZXJ5UmVxdWVzdC5Db21wbGV0aW9uU2NvcGUSTgoEdHlwZRgHIAEoDjJALmdvb2dsZS5jbG91ZC50YWxlbnQudjRiZXRhMS5Db21wbGV0ZVF1ZXJ5UmVxdWVzdC5Db21wbGV0aW9uVHlwZSJLCg9Db21wbGV0aW9uU2NvcGUSIAocQ09NUExFVElPTl9TQ09QRV9VTlNQRUNJRklFRBAAEgoKBlRFTkFOVBABEgoKBlBVQkxJQxACImAKDkNvbXBsZXRpb25UeXBlEh8KG0NPTVBMRVRJT05fVFlQRV9VTlNQRUNJRklFRBAAEg0KCUpPQl9USVRMRRABEhAKDENPTVBBTllfTkFNRRACEgwKCENPTUJJTkVEEAMixQIKFUNvbXBsZXRlUXVlcnlSZXNwb25zZRJfChJjb21wbGV0aW9uX3Jlc3VsdHMYASADKAsyQy5nb29nbGUuY2xvdWQudGFsZW50LnY0YmV0YTEuQ29tcGxldGVRdWVyeVJlc3BvbnNlLkNvbXBsZXRpb25SZXN1bHQSPwoIbWV0YWRhdGEYAiABKAsyLS5nb29nbGUuY2xvdWQudGFsZW50LnY0YmV0YTEuUmVzcG9uc2VNZXRhZGF0YRqJAQoQQ29tcGxldGlvblJlc3VsdBISCgpzdWdnZXN0aW9uGAEgASgJEk4KBHR5cGUYAiABKA4yQC5nb29nbGUuY2xvdWQudGFsZW50LnY0YmV0YTEuQ29tcGxldGVRdWVyeVJlcXVlc3QuQ29tcGxldGlvblR5cGUSEQoJaW1hZ2VfdXJpGAMgASgJMtUCCgpDb21wbGV0aW9uEtgBCg1Db21wbGV0ZVF1ZXJ5EjEuZ29vZ2xlLmNsb3VkLnRhbGVudC52NGJldGExLkNvbXBsZXRlUXVlcnlSZXF1ZXN0GjIuZ29vZ2xlLmNsb3VkLnRhbGVudC52NGJldGExLkNvbXBsZXRlUXVlcnlSZXNwb25zZSJggtPkkwJaWicSJS92NGJldGExL3twYXJlbnQ9cHJvamVjdHMvKn06Y29tcGxldGUSLy92NGJldGExL3twYXJlbnQ9cHJvamVjdHMvKi90ZW5hbnRzLyp9OmNvbXBsZXRlGmzKQRNqb2JzLmdvb2dsZWFwaXMuY29t0kFTaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybSxodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2pvYnNCegofY29tLmdvb2dsZS5jbG91ZC50YWxlbnQudjRiZXRhMUIWQ29tcGxldGlvblNlcnZpY2VQcm90b1ABWjdjbG91ZC5nb29nbGUuY29tL2dvL3RhbGVudC9hcGl2NGJldGExL3RhbGVudHBiO3RhbGVudHBiogIDQ1RTYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_talent_v4beta1_common]);

/**
 * Auto-complete parameters.
 *
 * @generated from message google.cloud.talent.v4beta1.CompleteQueryRequest
 */
export type CompleteQueryRequest = Message<"google.cloud.talent.v4beta1.CompleteQueryRequest"> & {
  /**
   * Required. Resource name of tenant the completion is performed within.
   *
   * The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   * "projects/foo/tenant/bar".
   *
   * If tenant id is unspecified, the default tenant is used, for
   * example, "projects/foo".
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The query used to generate suggestions.
   *
   * The maximum number of allowed characters is 255.
   *
   * @generated from field: string query = 2;
   */
  query: string;

  /**
   * The list of languages of the query. This is
   * the BCP-47 language code, such as "en-US" or "sr-Latn".
   * For more information, see
   * [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).
   *
   * The maximum number of allowed characters is 255.
   *
   * @generated from field: repeated string language_codes = 3;
   */
  languageCodes: string[];

  /**
   * Required. Completion result count.
   *
   * The maximum allowed page size is 10.
   *
   * @generated from field: int32 page_size = 4;
   */
  pageSize: number;

  /**
   * If provided, restricts completion to specified company.
   *
   * The format is
   * "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for
   * example, "projects/foo/tenants/bar/companies/baz".
   *
   * If tenant id is unspecified, the default tenant is used, for
   * example, "projects/foo".
   *
   * @generated from field: string company = 5;
   */
  company: string;

  /**
   * The scope of the completion. The defaults is
   * [CompletionScope.PUBLIC][google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScope.PUBLIC].
   *
   * @generated from field: google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScope scope = 6;
   */
  scope: CompleteQueryRequest_CompletionScope;

  /**
   * The completion topic. The default is
   * [CompletionType.COMBINED][google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType.COMBINED].
   *
   * @generated from field: google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType type = 7;
   */
  type: CompleteQueryRequest_CompletionType;
};

/**
 * Describes the message google.cloud.talent.v4beta1.CompleteQueryRequest.
 * Use `create(CompleteQueryRequestSchema)` to create a new message.
 */
export const CompleteQueryRequestSchema: GenMessage<CompleteQueryRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_talent_v4beta1_completion_service, 0);

/**
 * Enum to specify the scope of completion.
 *
 * @generated from enum google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScope
 */
export enum CompleteQueryRequest_CompletionScope {
  /**
   * Default value.
   *
   * @generated from enum value: COMPLETION_SCOPE_UNSPECIFIED = 0;
   */
  COMPLETION_SCOPE_UNSPECIFIED = 0,

  /**
   * Suggestions are based only on the data provided by the client.
   *
   * @generated from enum value: TENANT = 1;
   */
  TENANT = 1,

  /**
   * Suggestions are based on all jobs data in the system that's visible to
   * the client
   *
   * @generated from enum value: PUBLIC = 2;
   */
  PUBLIC = 2,
}

/**
 * Describes the enum google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScope.
 */
export const CompleteQueryRequest_CompletionScopeSchema: GenEnum<CompleteQueryRequest_CompletionScope> = /*@__PURE__*/
  enumDesc(file_google_cloud_talent_v4beta1_completion_service, 0, 0);

/**
 * Enum to specify auto-completion topics.
 *
 * @generated from enum google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType
 */
export enum CompleteQueryRequest_CompletionType {
  /**
   * Default value.
   *
   * @generated from enum value: COMPLETION_TYPE_UNSPECIFIED = 0;
   */
  COMPLETION_TYPE_UNSPECIFIED = 0,

  /**
   * Suggest job titles for jobs autocomplete.
   *
   * For
   * [CompletionType.JOB_TITLE][google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType.JOB_TITLE]
   * type, only open jobs with the same
   * [language_codes][google.cloud.talent.v4beta1.CompleteQueryRequest.language_codes]
   * are returned.
   *
   * @generated from enum value: JOB_TITLE = 1;
   */
  JOB_TITLE = 1,

  /**
   * Suggest company names for jobs autocomplete.
   *
   * For
   * [CompletionType.COMPANY_NAME][google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType.COMPANY_NAME]
   * type, only companies having open jobs with the same
   * [language_codes][google.cloud.talent.v4beta1.CompleteQueryRequest.language_codes]
   * are returned.
   *
   * @generated from enum value: COMPANY_NAME = 2;
   */
  COMPANY_NAME = 2,

  /**
   * Suggest both job titles and company names for jobs autocomplete.
   *
   * For
   * [CompletionType.COMBINED][google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType.COMBINED]
   * type, only open jobs with the same
   * [language_codes][google.cloud.talent.v4beta1.CompleteQueryRequest.language_codes]
   * or companies having open jobs with the same
   * [language_codes][google.cloud.talent.v4beta1.CompleteQueryRequest.language_codes]
   * are returned.
   *
   * @generated from enum value: COMBINED = 3;
   */
  COMBINED = 3,
}

/**
 * Describes the enum google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType.
 */
export const CompleteQueryRequest_CompletionTypeSchema: GenEnum<CompleteQueryRequest_CompletionType> = /*@__PURE__*/
  enumDesc(file_google_cloud_talent_v4beta1_completion_service, 0, 1);

/**
 * Response of auto-complete query.
 *
 * @generated from message google.cloud.talent.v4beta1.CompleteQueryResponse
 */
export type CompleteQueryResponse = Message<"google.cloud.talent.v4beta1.CompleteQueryResponse"> & {
  /**
   * Results of the matching job/company candidates.
   *
   * @generated from field: repeated google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult completion_results = 1;
   */
  completionResults: CompleteQueryResponse_CompletionResult[];

  /**
   * Additional information for the API invocation, such as the request
   * tracking id.
   *
   * @generated from field: google.cloud.talent.v4beta1.ResponseMetadata metadata = 2;
   */
  metadata?: ResponseMetadata;
};

/**
 * Describes the message google.cloud.talent.v4beta1.CompleteQueryResponse.
 * Use `create(CompleteQueryResponseSchema)` to create a new message.
 */
export const CompleteQueryResponseSchema: GenMessage<CompleteQueryResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_talent_v4beta1_completion_service, 1);

/**
 * Resource that represents completion results.
 *
 * @generated from message google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult
 */
export type CompleteQueryResponse_CompletionResult = Message<"google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult"> & {
  /**
   * The suggestion for the query.
   *
   * @generated from field: string suggestion = 1;
   */
  suggestion: string;

  /**
   * The completion topic.
   *
   * @generated from field: google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType type = 2;
   */
  type: CompleteQueryRequest_CompletionType;

  /**
   * The URI of the company image for
   * [COMPANY_NAME][google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType.COMPANY_NAME].
   *
   * @generated from field: string image_uri = 3;
   */
  imageUri: string;
};

/**
 * Describes the message google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult.
 * Use `create(CompleteQueryResponse_CompletionResultSchema)` to create a new message.
 */
export const CompleteQueryResponse_CompletionResultSchema: GenMessage<CompleteQueryResponse_CompletionResult> = /*@__PURE__*/
  messageDesc(file_google_cloud_talent_v4beta1_completion_service, 1, 0);

/**
 * A service handles auto completion.
 *
 * @generated from service google.cloud.talent.v4beta1.Completion
 */
export const Completion: GenService<{
  /**
   * Completes the specified prefix with keyword suggestions.
   * Intended for use by a job search auto-complete search box.
   *
   * @generated from rpc google.cloud.talent.v4beta1.Completion.CompleteQuery
   */
  completeQuery: {
    methodKind: "unary";
    input: typeof CompleteQueryRequestSchema;
    output: typeof CompleteQueryResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_talent_v4beta1_completion_service, 0);
