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
// @generated from file google/cloud/gsuiteaddons/v1/gsuiteaddons.proto (package google.cloud.gsuiteaddons.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { CalendarAddOnManifest } from "../../../apps/script/type/calendar/calendar_addon_manifest_pb";
import { file_google_apps_script_type_calendar_calendar_addon_manifest } from "../../../apps/script/type/calendar/calendar_addon_manifest_pb";
import type { DocsAddOnManifest } from "../../../apps/script/type/docs/docs_addon_manifest_pb";
import { file_google_apps_script_type_docs_docs_addon_manifest } from "../../../apps/script/type/docs/docs_addon_manifest_pb";
import type { DriveAddOnManifest } from "../../../apps/script/type/drive/drive_addon_manifest_pb";
import { file_google_apps_script_type_drive_drive_addon_manifest } from "../../../apps/script/type/drive/drive_addon_manifest_pb";
import type { GmailAddOnManifest } from "../../../apps/script/type/gmail/gmail_addon_manifest_pb";
import { file_google_apps_script_type_gmail_gmail_addon_manifest } from "../../../apps/script/type/gmail/gmail_addon_manifest_pb";
import type { CommonAddOnManifest, HttpOptions } from "../../../apps/script/type/script_manifest_pb";
import { file_google_apps_script_type_script_manifest } from "../../../apps/script/type/script_manifest_pb";
import type { SheetsAddOnManifest } from "../../../apps/script/type/sheets/sheets_addon_manifest_pb";
import { file_google_apps_script_type_sheets_sheets_addon_manifest } from "../../../apps/script/type/sheets/sheets_addon_manifest_pb";
import type { SlidesAddOnManifest } from "../../../apps/script/type/slides/slides_addon_manifest_pb";
import { file_google_apps_script_type_slides_slides_addon_manifest } from "../../../apps/script/type/slides/slides_addon_manifest_pb";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/gsuiteaddons/v1/gsuiteaddons.proto.
 */
export const file_google_cloud_gsuiteaddons_v1_gsuiteaddons: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvY2xvdWQvZ3N1aXRlYWRkb25zL3YxL2dzdWl0ZWFkZG9ucy5wcm90bxIcZ29vZ2xlLmNsb3VkLmdzdWl0ZWFkZG9ucy52MSJaChdHZXRBdXRob3JpemF0aW9uUmVxdWVzdBI/CgRuYW1lGAIgASgJQjHgQQL6QSsKKWdzdWl0ZWFkZG9ucy5nb29nbGVhcGlzLmNvbS9BdXRob3JpemF0aW9uIqcBCg1BdXRob3JpemF0aW9uEgwKBG5hbWUYASABKAkSHQoVc2VydmljZV9hY2NvdW50X2VtYWlsGAIgASgJEhcKD29hdXRoX2NsaWVudF9pZBgDIAEoCTpQ6kFNCilnc3VpdGVhZGRvbnMuZ29vZ2xlYXBpcy5jb20vQXV0aG9yaXphdGlvbhIgcHJvamVjdHMve3Byb2plY3R9L2F1dGhvcml6YXRpb24ivQEKF0NyZWF0ZURlcGxveW1lbnRSZXF1ZXN0EkMKBnBhcmVudBgBIAEoCUIz4EEC+kEtCitjbG91ZHJlc291cmNlbWFuYWdlci5nb29nbGVhcGlzLmNvbS9Qcm9qZWN0EhoKDWRlcGxveW1lbnRfaWQYAiABKAlCA+BBAhJBCgpkZXBsb3ltZW50GAMgASgLMiguZ29vZ2xlLmNsb3VkLmdzdWl0ZWFkZG9ucy52MS5EZXBsb3ltZW50QgPgQQIiXQoYUmVwbGFjZURlcGxveW1lbnRSZXF1ZXN0EkEKCmRlcGxveW1lbnQYAiABKAsyKC5nb29nbGUuY2xvdWQuZ3N1aXRlYWRkb25zLnYxLkRlcGxveW1lbnRCA+BBAiJUChRHZXREZXBsb3ltZW50UmVxdWVzdBI8CgRuYW1lGAEgASgJQi7gQQL6QSgKJmdzdWl0ZWFkZG9ucy5nb29nbGVhcGlzLmNvbS9EZXBsb3ltZW50IoQBChZMaXN0RGVwbG95bWVudHNSZXF1ZXN0EkMKBnBhcmVudBgBIAEoCUIz4EEC+kEtCitjbG91ZHJlc291cmNlbWFuYWdlci5nb29nbGVhcGlzLmNvbS9Qcm9qZWN0EhEKCXBhZ2Vfc2l6ZRgCIAEoBRISCgpwYWdlX3Rva2VuGAMgASgJInEKF0xpc3REZXBsb3ltZW50c1Jlc3BvbnNlEj0KC2RlcGxveW1lbnRzGAEgAygLMiguZ29vZ2xlLmNsb3VkLmdzdWl0ZWFkZG9ucy52MS5EZXBsb3ltZW50EhcKD25leHRfcGFnZV90b2tlbhgCIAEoCSJlChdEZWxldGVEZXBsb3ltZW50UmVxdWVzdBI8CgRuYW1lGAEgASgJQi7gQQL6QSgKJmdzdWl0ZWFkZG9ucy5nb29nbGVhcGlzLmNvbS9EZXBsb3ltZW50EgwKBGV0YWcYAiABKAkiWAoYSW5zdGFsbERlcGxveW1lbnRSZXF1ZXN0EjwKBG5hbWUYASABKAlCLuBBAvpBKAomZ3N1aXRlYWRkb25zLmdvb2dsZWFwaXMuY29tL0RlcGxveW1lbnQiWgoaVW5pbnN0YWxsRGVwbG95bWVudFJlcXVlc3QSPAoEbmFtZRgBIAEoCUIu4EEC+kEoCiZnc3VpdGVhZGRvbnMuZ29vZ2xlYXBpcy5jb20vRGVwbG95bWVudCJaChdHZXRJbnN0YWxsU3RhdHVzUmVxdWVzdBI/CgRuYW1lGAEgASgJQjHgQQL6QSsKKWdzdWl0ZWFkZG9ucy5nb29nbGVhcGlzLmNvbS9JbnN0YWxsU3RhdHVzIrcBCg1JbnN0YWxsU3RhdHVzEgwKBG5hbWUYASABKAkSLQoJaW5zdGFsbGVkGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkJvb2xWYWx1ZTpp6kFmCilnc3VpdGVhZGRvbnMuZ29vZ2xlYXBpcy5jb20vSW5zdGFsbFN0YXR1cxI5cHJvamVjdHMve3Byb2plY3R9L2RlcGxveW1lbnRzL3tkZXBsb3ltZW50fS9pbnN0YWxsU3RhdHVzIs8BCgpEZXBsb3ltZW50EgwKBG5hbWUYASABKAkSFAoMb2F1dGhfc2NvcGVzGAIgAygJEjUKB2FkZF9vbnMYAyABKAsyJC5nb29nbGUuY2xvdWQuZ3N1aXRlYWRkb25zLnYxLkFkZE9ucxIMCgRldGFnGAUgASgJOljqQVUKJmdzdWl0ZWFkZG9ucy5nb29nbGVhcGlzLmNvbS9EZXBsb3ltZW50Eitwcm9qZWN0cy97cHJvamVjdH0vZGVwbG95bWVudHMve2RlcGxveW1lbnR9IpoECgZBZGRPbnMSPAoGY29tbW9uGAEgASgLMiwuZ29vZ2xlLmFwcHMuc2NyaXB0LnR5cGUuQ29tbW9uQWRkT25NYW5pZmVzdBJACgVnbWFpbBgCIAEoCzIxLmdvb2dsZS5hcHBzLnNjcmlwdC50eXBlLmdtYWlsLkdtYWlsQWRkT25NYW5pZmVzdBJACgVkcml2ZRgFIAEoCzIxLmdvb2dsZS5hcHBzLnNjcmlwdC50eXBlLmRyaXZlLkRyaXZlQWRkT25NYW5pZmVzdBJJCghjYWxlbmRhchgGIAEoCzI3Lmdvb2dsZS5hcHBzLnNjcmlwdC50eXBlLmNhbGVuZGFyLkNhbGVuZGFyQWRkT25NYW5pZmVzdBI9CgRkb2NzGAcgASgLMi8uZ29vZ2xlLmFwcHMuc2NyaXB0LnR5cGUuZG9jcy5Eb2NzQWRkT25NYW5pZmVzdBJDCgZzaGVldHMYCCABKAsyMy5nb29nbGUuYXBwcy5zY3JpcHQudHlwZS5zaGVldHMuU2hlZXRzQWRkT25NYW5pZmVzdBJDCgZzbGlkZXMYCiABKAsyMy5nb29nbGUuYXBwcy5zY3JpcHQudHlwZS5zbGlkZXMuU2xpZGVzQWRkT25NYW5pZmVzdBI6CgxodHRwX29wdGlvbnMYDyABKAsyJC5nb29nbGUuYXBwcy5zY3JpcHQudHlwZS5IdHRwT3B0aW9uczKkDQoMR1N1aXRlQWRkT25zEqoBChBHZXRBdXRob3JpemF0aW9uEjUuZ29vZ2xlLmNsb3VkLmdzdWl0ZWFkZG9ucy52MS5HZXRBdXRob3JpemF0aW9uUmVxdWVzdBorLmdvb2dsZS5jbG91ZC5nc3VpdGVhZGRvbnMudjEuQXV0aG9yaXphdGlvbiIy2kEEbmFtZYLT5JMCJRIjL3YxL3tuYW1lPXByb2plY3RzLyovYXV0aG9yaXphdGlvbn0SzgEKEENyZWF0ZURlcGxveW1lbnQSNS5nb29nbGUuY2xvdWQuZ3N1aXRlYWRkb25zLnYxLkNyZWF0ZURlcGxveW1lbnRSZXF1ZXN0GiguZ29vZ2xlLmNsb3VkLmdzdWl0ZWFkZG9ucy52MS5EZXBsb3ltZW50IlnaQR9wYXJlbnQsZGVwbG95bWVudCxkZXBsb3ltZW50X2lkgtPkkwIxOgpkZXBsb3ltZW50IiMvdjEve3BhcmVudD1wcm9qZWN0cy8qfS9kZXBsb3ltZW50cxLGAQoRUmVwbGFjZURlcGxveW1lbnQSNi5nb29nbGUuY2xvdWQuZ3N1aXRlYWRkb25zLnYxLlJlcGxhY2VEZXBsb3ltZW50UmVxdWVzdBooLmdvb2dsZS5jbG91ZC5nc3VpdGVhZGRvbnMudjEuRGVwbG95bWVudCJP2kEKZGVwbG95bWVudILT5JMCPDoKZGVwbG95bWVudBouL3YxL3tkZXBsb3ltZW50Lm5hbWU9cHJvamVjdHMvKi9kZXBsb3ltZW50cy8qfRKhAQoNR2V0RGVwbG95bWVudBIyLmdvb2dsZS5jbG91ZC5nc3VpdGVhZGRvbnMudjEuR2V0RGVwbG95bWVudFJlcXVlc3QaKC5nb29nbGUuY2xvdWQuZ3N1aXRlYWRkb25zLnYxLkRlcGxveW1lbnQiMtpBBG5hbWWC0+STAiUSIy92MS97bmFtZT1wcm9qZWN0cy8qL2RlcGxveW1lbnRzLyp9ErQBCg9MaXN0RGVwbG95bWVudHMSNC5nb29nbGUuY2xvdWQuZ3N1aXRlYWRkb25zLnYxLkxpc3REZXBsb3ltZW50c1JlcXVlc3QaNS5nb29nbGUuY2xvdWQuZ3N1aXRlYWRkb25zLnYxLkxpc3REZXBsb3ltZW50c1Jlc3BvbnNlIjTaQQZwYXJlbnSC0+STAiUSIy92MS97cGFyZW50PXByb2plY3RzLyp9L2RlcGxveW1lbnRzEpUBChBEZWxldGVEZXBsb3ltZW50EjUuZ29vZ2xlLmNsb3VkLmdzdWl0ZWFkZG9ucy52MS5EZWxldGVEZXBsb3ltZW50UmVxdWVzdBoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSIy2kEEbmFtZYLT5JMCJSojL3YxL3tuYW1lPXByb2plY3RzLyovZGVwbG95bWVudHMvKn0SogEKEUluc3RhbGxEZXBsb3ltZW50EjYuZ29vZ2xlLmNsb3VkLmdzdWl0ZWFkZG9ucy52MS5JbnN0YWxsRGVwbG95bWVudFJlcXVlc3QaFi5nb29nbGUucHJvdG9idWYuRW1wdHkiPdpBBG5hbWWC0+STAjA6ASoiKy92MS97bmFtZT1wcm9qZWN0cy8qL2RlcGxveW1lbnRzLyp9Omluc3RhbGwSqAEKE1VuaW5zdGFsbERlcGxveW1lbnQSOC5nb29nbGUuY2xvdWQuZ3N1aXRlYWRkb25zLnYxLlVuaW5zdGFsbERlcGxveW1lbnRSZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5Ij/aQQRuYW1lgtPkkwIyOgEqIi0vdjEve25hbWU9cHJvamVjdHMvKi9kZXBsb3ltZW50cy8qfTp1bmluc3RhbGwSuAEKEEdldEluc3RhbGxTdGF0dXMSNS5nb29nbGUuY2xvdWQuZ3N1aXRlYWRkb25zLnYxLkdldEluc3RhbGxTdGF0dXNSZXF1ZXN0GisuZ29vZ2xlLmNsb3VkLmdzdWl0ZWFkZG9ucy52MS5JbnN0YWxsU3RhdHVzIkDaQQRuYW1lgtPkkwIzEjEvdjEve25hbWU9cHJvamVjdHMvKi9kZXBsb3ltZW50cy8qL2luc3RhbGxTdGF0dXN9Gk/KQRtnc3VpdGVhZGRvbnMuZ29vZ2xlYXBpcy5jb23SQS5odHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtQt0BCiBjb20uZ29vZ2xlLmNsb3VkLmdzdWl0ZWFkZG9ucy52MUIRR1N1aXRlQWRkT25zUHJvdG9QAVpEY2xvdWQuZ29vZ2xlLmNvbS9nby9nc3VpdGVhZGRvbnMvYXBpdjEvZ3N1aXRlYWRkb25zcGI7Z3N1aXRlYWRkb25zcGKqAhxHb29nbGUuQ2xvdWQuR1N1aXRlQWRkT25zLlYxygIcR29vZ2xlXENsb3VkXEdTdWl0ZUFkZE9uc1xWMeoCH0dvb2dsZTo6Q2xvdWQ6OkdTdWl0ZUFkZE9uczo6VjFiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_apps_script_type_calendar_calendar_addon_manifest, file_google_apps_script_type_docs_docs_addon_manifest, file_google_apps_script_type_drive_drive_addon_manifest, file_google_apps_script_type_gmail_gmail_addon_manifest, file_google_apps_script_type_script_manifest, file_google_apps_script_type_sheets_sheets_addon_manifest, file_google_apps_script_type_slides_slides_addon_manifest, file_google_protobuf_empty, file_google_protobuf_wrappers]);

/**
 * Request message to get Google Workspace Add-ons authorization information.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.GetAuthorizationRequest
 */
export type GetAuthorizationRequest = Message<"google.cloud.gsuiteaddons.v1.GetAuthorizationRequest"> & {
  /**
   * Required. Name of the project for which to get the Google Workspace Add-ons
   * authorization information.
   *
   * Example: `projects/my_project/authorization`.
   *
   * @generated from field: string name = 2;
   */
  name: string;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.GetAuthorizationRequest.
 * Use `create(GetAuthorizationRequestSchema)` to create a new message.
 */
export const GetAuthorizationRequestSchema: GenMessage<GetAuthorizationRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 0);

/**
 * The authorization information used when invoking deployment endpoints.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.Authorization
 */
export type Authorization = Message<"google.cloud.gsuiteaddons.v1.Authorization"> & {
  /**
   * The canonical full name of this resource.
   * Example:  `projects/123/authorization`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The email address of the service account used to authenticate requests to
   * add-on callback endpoints.
   *
   * @generated from field: string service_account_email = 2;
   */
  serviceAccountEmail: string;

  /**
   * The OAuth client ID used to obtain OAuth access tokens for a user on the
   * add-on's behalf.
   *
   * @generated from field: string oauth_client_id = 3;
   */
  oauthClientId: string;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.Authorization.
 * Use `create(AuthorizationSchema)` to create a new message.
 */
export const AuthorizationSchema: GenMessage<Authorization> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 1);

/**
 * Request message to create a deployment.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.CreateDeploymentRequest
 */
export type CreateDeploymentRequest = Message<"google.cloud.gsuiteaddons.v1.CreateDeploymentRequest"> & {
  /**
   * Required. Name of the project in which to create the deployment.
   *
   * Example: `projects/my_project`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The id to use for this deployment.  The full name of the created
   * resource will be `projects/<project_number>/deployments/<deployment_id>`.
   *
   * @generated from field: string deployment_id = 2;
   */
  deploymentId: string;

  /**
   * Required. The deployment to create (deployment.name cannot be set).
   *
   * @generated from field: google.cloud.gsuiteaddons.v1.Deployment deployment = 3;
   */
  deployment?: Deployment;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.CreateDeploymentRequest.
 * Use `create(CreateDeploymentRequestSchema)` to create a new message.
 */
export const CreateDeploymentRequestSchema: GenMessage<CreateDeploymentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 2);

/**
 * Request message to create or replace a deployment.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.ReplaceDeploymentRequest
 */
export type ReplaceDeploymentRequest = Message<"google.cloud.gsuiteaddons.v1.ReplaceDeploymentRequest"> & {
  /**
   * Required. The deployment to create or replace.
   *
   * @generated from field: google.cloud.gsuiteaddons.v1.Deployment deployment = 2;
   */
  deployment?: Deployment;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.ReplaceDeploymentRequest.
 * Use `create(ReplaceDeploymentRequestSchema)` to create a new message.
 */
export const ReplaceDeploymentRequestSchema: GenMessage<ReplaceDeploymentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 3);

/**
 * Request message to get a deployment.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.GetDeploymentRequest
 */
export type GetDeploymentRequest = Message<"google.cloud.gsuiteaddons.v1.GetDeploymentRequest"> & {
  /**
   * Required. The full resource name of the deployment to get.
   *
   * Example:  `projects/my_project/deployments/my_deployment`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.GetDeploymentRequest.
 * Use `create(GetDeploymentRequestSchema)` to create a new message.
 */
export const GetDeploymentRequestSchema: GenMessage<GetDeploymentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 4);

/**
 * Request message to list deployments for a project.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.ListDeploymentsRequest
 */
export type ListDeploymentsRequest = Message<"google.cloud.gsuiteaddons.v1.ListDeploymentsRequest"> & {
  /**
   * Required. Name of the project in which to create the deployment.
   *
   * Example: `projects/my_project`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The maximum number of deployments to return. The service may return fewer
   * than this value.
   * If unspecified, at most 1000 deployments will be returned.
   * The maximum value is 1000; values above 1000 will be coerced to 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * A page token, received from a previous `ListDeployments` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListDeployments` must
   * match the call that provided the page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.ListDeploymentsRequest.
 * Use `create(ListDeploymentsRequestSchema)` to create a new message.
 */
export const ListDeploymentsRequestSchema: GenMessage<ListDeploymentsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 5);

/**
 * Response message to list deployments.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.ListDeploymentsResponse
 */
export type ListDeploymentsResponse = Message<"google.cloud.gsuiteaddons.v1.ListDeploymentsResponse"> & {
  /**
   * The list of deployments for the given project.
   *
   * @generated from field: repeated google.cloud.gsuiteaddons.v1.Deployment deployments = 1;
   */
  deployments: Deployment[];

  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.ListDeploymentsResponse.
 * Use `create(ListDeploymentsResponseSchema)` to create a new message.
 */
export const ListDeploymentsResponseSchema: GenMessage<ListDeploymentsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 6);

/**
 * Request message to delete a deployment.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.DeleteDeploymentRequest
 */
export type DeleteDeploymentRequest = Message<"google.cloud.gsuiteaddons.v1.DeleteDeploymentRequest"> & {
  /**
   * Required. The full resource name of the deployment to delete.
   *
   * Example:  `projects/my_project/deployments/my_deployment`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The etag of the deployment to delete.
   * If this is provided, it must match the server's etag.
   *
   * @generated from field: string etag = 2;
   */
  etag: string;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.DeleteDeploymentRequest.
 * Use `create(DeleteDeploymentRequestSchema)` to create a new message.
 */
export const DeleteDeploymentRequestSchema: GenMessage<DeleteDeploymentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 7);

/**
 * Request message to install a developer mode deployment.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.InstallDeploymentRequest
 */
export type InstallDeploymentRequest = Message<"google.cloud.gsuiteaddons.v1.InstallDeploymentRequest"> & {
  /**
   * Required. The full resource name of the deployment to install.
   *
   * Example:  `projects/my_project/deployments/my_deployment`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.InstallDeploymentRequest.
 * Use `create(InstallDeploymentRequestSchema)` to create a new message.
 */
export const InstallDeploymentRequestSchema: GenMessage<InstallDeploymentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 8);

/**
 * Request message to uninstall a developer mode deployment.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.UninstallDeploymentRequest
 */
export type UninstallDeploymentRequest = Message<"google.cloud.gsuiteaddons.v1.UninstallDeploymentRequest"> & {
  /**
   * Required. The full resource name of the deployment to install.
   *
   * Example:  `projects/my_project/deployments/my_deployment`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.UninstallDeploymentRequest.
 * Use `create(UninstallDeploymentRequestSchema)` to create a new message.
 */
export const UninstallDeploymentRequestSchema: GenMessage<UninstallDeploymentRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 9);

/**
 * Request message to get the install status of a developer mode deployment.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.GetInstallStatusRequest
 */
export type GetInstallStatusRequest = Message<"google.cloud.gsuiteaddons.v1.GetInstallStatusRequest"> & {
  /**
   * Required. The full resource name of the deployment.
   *
   * Example:  `projects/my_project/deployments/my_deployment/installStatus`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.GetInstallStatusRequest.
 * Use `create(GetInstallStatusRequestSchema)` to create a new message.
 */
export const GetInstallStatusRequestSchema: GenMessage<GetInstallStatusRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 10);

/**
 * Developer mode install status of a deployment
 *
 * @generated from message google.cloud.gsuiteaddons.v1.InstallStatus
 */
export type InstallStatus = Message<"google.cloud.gsuiteaddons.v1.InstallStatus"> & {
  /**
   * The canonical full resource name of the deployment install status.
   *
   * Example:  `projects/123/deployments/my_deployment/installStatus`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * True if the deployment is installed for the user
   *
   * @generated from field: google.protobuf.BoolValue installed = 2;
   */
  installed?: boolean;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.InstallStatus.
 * Use `create(InstallStatusSchema)` to create a new message.
 */
export const InstallStatusSchema: GenMessage<InstallStatus> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 11);

/**
 * A Google Workspace Add-on deployment
 *
 * @generated from message google.cloud.gsuiteaddons.v1.Deployment
 */
export type Deployment = Message<"google.cloud.gsuiteaddons.v1.Deployment"> & {
  /**
   * The deployment resource name.
   * Example:  projects/123/deployments/my_deployment.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The list of Google OAuth scopes for which to request consent from the end
   * user before executing an add-on endpoint.
   *
   * @generated from field: repeated string oauth_scopes = 2;
   */
  oauthScopes: string[];

  /**
   * The Google Workspace Add-on configuration.
   *
   * @generated from field: google.cloud.gsuiteaddons.v1.AddOns add_ons = 3;
   */
  addOns?: AddOns;

  /**
   * This value is computed by the server based on the version of the
   * deployment in storage, and may be sent on update and delete requests to
   * ensure the client has an up-to-date value before proceeding.
   *
   * @generated from field: string etag = 5;
   */
  etag: string;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.Deployment.
 * Use `create(DeploymentSchema)` to create a new message.
 */
export const DeploymentSchema: GenMessage<Deployment> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 12);

/**
 * A Google Workspace Add-on configuration.
 *
 * @generated from message google.cloud.gsuiteaddons.v1.AddOns
 */
export type AddOns = Message<"google.cloud.gsuiteaddons.v1.AddOns"> & {
  /**
   * Configuration that is common across all Google Workspace Add-ons.
   *
   * @generated from field: google.apps.script.type.CommonAddOnManifest common = 1;
   */
  common?: CommonAddOnManifest;

  /**
   * Gmail add-on configuration.
   *
   * @generated from field: google.apps.script.type.gmail.GmailAddOnManifest gmail = 2;
   */
  gmail?: GmailAddOnManifest;

  /**
   * Drive add-on configuration.
   *
   * @generated from field: google.apps.script.type.drive.DriveAddOnManifest drive = 5;
   */
  drive?: DriveAddOnManifest;

  /**
   * Calendar add-on configuration.
   *
   * @generated from field: google.apps.script.type.calendar.CalendarAddOnManifest calendar = 6;
   */
  calendar?: CalendarAddOnManifest;

  /**
   * Docs add-on configuration.
   *
   * @generated from field: google.apps.script.type.docs.DocsAddOnManifest docs = 7;
   */
  docs?: DocsAddOnManifest;

  /**
   * Sheets add-on configuration.
   *
   * @generated from field: google.apps.script.type.sheets.SheetsAddOnManifest sheets = 8;
   */
  sheets?: SheetsAddOnManifest;

  /**
   * Slides add-on configuration.
   *
   * @generated from field: google.apps.script.type.slides.SlidesAddOnManifest slides = 10;
   */
  slides?: SlidesAddOnManifest;

  /**
   * Options for sending requests to add-on HTTP endpoints
   *
   * @generated from field: google.apps.script.type.HttpOptions http_options = 15;
   */
  httpOptions?: HttpOptions;
};

/**
 * Describes the message google.cloud.gsuiteaddons.v1.AddOns.
 * Use `create(AddOnsSchema)` to create a new message.
 */
export const AddOnsSchema: GenMessage<AddOns> = /*@__PURE__*/
  messageDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 13);

/**
 * A service for managing Google Workspace Add-ons deployments.
 *
 * A Google Workspace Add-on is a third-party embedded component that can be
 * installed in Google Workspace Applications like Gmail, Calendar, Drive, and
 * the Google Docs, Sheets, and Slides editors. Google Workspace Add-ons can
 * display UI cards, receive contextual information from the host application,
 * and perform actions in the host application (See:
 * https://developers.google.com/gsuite/add-ons/overview for more information).
 *
 * A Google Workspace Add-on deployment resource specifies metadata about the
 * add-on, including a specification of the entry points in the host application
 * that trigger add-on executions (see:
 * https://developers.google.com/gsuite/add-ons/concepts/gsuite-manifests).
 * Add-on deployments defined via the Google Workspace Add-ons API define their
 * entrypoints using HTTPS URLs (See:
 * https://developers.google.com/gsuite/add-ons/guides/alternate-runtimes),
 *
 * A Google Workspace Add-on deployment can be installed in developer mode,
 * which allows an add-on developer to test the experience an end-user would see
 * when installing and running the add-on in their G Suite applications.  When
 * running in developer mode, more detailed error messages are exposed in the
 * add-on UI to aid in debugging.
 *
 * A Google Workspace Add-on deployment can be published to Google Workspace
 * Marketplace, which allows other Google Workspace users to discover and
 * install the add-on.  See:
 * https://developers.google.com/gsuite/add-ons/how-tos/publish-add-on-overview
 * for details.
 *
 * @generated from service google.cloud.gsuiteaddons.v1.GSuiteAddOns
 */
export const GSuiteAddOns: GenService<{
  /**
   * Gets the authorization information for deployments in a given project.
   *
   * @generated from rpc google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetAuthorization
   */
  getAuthorization: {
    methodKind: "unary";
    input: typeof GetAuthorizationRequestSchema;
    output: typeof AuthorizationSchema;
  },
  /**
   * Creates a deployment with the specified name and configuration.
   *
   * @generated from rpc google.cloud.gsuiteaddons.v1.GSuiteAddOns.CreateDeployment
   */
  createDeployment: {
    methodKind: "unary";
    input: typeof CreateDeploymentRequestSchema;
    output: typeof DeploymentSchema;
  },
  /**
   * Creates or replaces a deployment with the specified name.
   *
   * @generated from rpc google.cloud.gsuiteaddons.v1.GSuiteAddOns.ReplaceDeployment
   */
  replaceDeployment: {
    methodKind: "unary";
    input: typeof ReplaceDeploymentRequestSchema;
    output: typeof DeploymentSchema;
  },
  /**
   * Gets the deployment with the specified name.
   *
   * @generated from rpc google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetDeployment
   */
  getDeployment: {
    methodKind: "unary";
    input: typeof GetDeploymentRequestSchema;
    output: typeof DeploymentSchema;
  },
  /**
   * Lists all deployments in a particular project.
   *
   * @generated from rpc google.cloud.gsuiteaddons.v1.GSuiteAddOns.ListDeployments
   */
  listDeployments: {
    methodKind: "unary";
    input: typeof ListDeploymentsRequestSchema;
    output: typeof ListDeploymentsResponseSchema;
  },
  /**
   * Deletes the deployment with the given name.
   *
   * @generated from rpc google.cloud.gsuiteaddons.v1.GSuiteAddOns.DeleteDeployment
   */
  deleteDeployment: {
    methodKind: "unary";
    input: typeof DeleteDeploymentRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Installs a deployment in developer mode.
   * See:
   * https://developers.google.com/gsuite/add-ons/how-tos/testing-gsuite-addons.
   *
   * @generated from rpc google.cloud.gsuiteaddons.v1.GSuiteAddOns.InstallDeployment
   */
  installDeployment: {
    methodKind: "unary";
    input: typeof InstallDeploymentRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Uninstalls a developer mode deployment.
   * See:
   * https://developers.google.com/gsuite/add-ons/how-tos/testing-gsuite-addons.
   *
   * @generated from rpc google.cloud.gsuiteaddons.v1.GSuiteAddOns.UninstallDeployment
   */
  uninstallDeployment: {
    methodKind: "unary";
    input: typeof UninstallDeploymentRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Fetches the install status of a developer mode deployment.
   *
   * @generated from rpc google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetInstallStatus
   */
  getInstallStatus: {
    methodKind: "unary";
    input: typeof GetInstallStatusRequestSchema;
    output: typeof InstallStatusSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_gsuiteaddons_v1_gsuiteaddons, 0);
