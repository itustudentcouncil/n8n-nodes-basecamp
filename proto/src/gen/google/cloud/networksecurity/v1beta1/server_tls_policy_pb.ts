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
// @generated from file google/cloud/networksecurity/v1beta1/server_tls_policy.proto (package google.cloud.networksecurity.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { CertificateProvider, ValidationCA } from "./tls_pb";
import { file_google_cloud_networksecurity_v1beta1_tls } from "./tls_pb";
import type { FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/networksecurity/v1beta1/server_tls_policy.proto.
 */
export const file_google_cloud_networksecurity_v1beta1_server_tls_policy: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvY2xvdWQvbmV0d29ya3NlY3VyaXR5L3YxYmV0YTEvc2VydmVyX3Rsc19wb2xpY3kucHJvdG8SJGdvb2dsZS5jbG91ZC5uZXR3b3Jrc2VjdXJpdHkudjFiZXRhMSLOBQoPU2VydmVyVGxzUG9saWN5EhEKBG5hbWUYASABKAlCA+BBAhITCgtkZXNjcmlwdGlvbhgCIAEoCRI0CgtjcmVhdGVfdGltZRgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxI0Cgt1cGRhdGVfdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxJRCgZsYWJlbHMYBSADKAsyQS5nb29nbGUuY2xvdWQubmV0d29ya3NlY3VyaXR5LnYxYmV0YTEuU2VydmVyVGxzUG9saWN5LkxhYmVsc0VudHJ5EhIKCmFsbG93X29wZW4YBiABKAgSVQoSc2VydmVyX2NlcnRpZmljYXRlGAcgASgLMjkuZ29vZ2xlLmNsb3VkLm5ldHdvcmtzZWN1cml0eS52MWJldGExLkNlcnRpZmljYXRlUHJvdmlkZXISVQoLbXRsc19wb2xpY3kYCCABKAsyQC5nb29nbGUuY2xvdWQubmV0d29ya3NlY3VyaXR5LnYxYmV0YTEuU2VydmVyVGxzUG9saWN5Lk1UTFNQb2xpY3kaXgoKTVRMU1BvbGljeRJQChRjbGllbnRfdmFsaWRhdGlvbl9jYRgBIAMoCzIyLmdvb2dsZS5jbG91ZC5uZXR3b3Jrc2VjdXJpdHkudjFiZXRhMS5WYWxpZGF0aW9uQ0EaLQoLTGFiZWxzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ATqCAepBfwoubmV0d29ya3NlY3VyaXR5Lmdvb2dsZWFwaXMuY29tL1NlcnZlclRsc1BvbGljeRJNcHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L3NlcnZlclRsc1BvbGljaWVzL3tzZXJ2ZXJfdGxzX3BvbGljeX0igAEKHExpc3RTZXJ2ZXJUbHNQb2xpY2llc1JlcXVlc3QSOQoGcGFyZW50GAEgASgJQingQQL6QSMKIWxvY2F0aW9ucy5nb29nbGVhcGlzLmNvbS9Mb2NhdGlvbhIRCglwYWdlX3NpemUYAiABKAUSEgoKcGFnZV90b2tlbhgDIAEoCSKMAQodTGlzdFNlcnZlclRsc1BvbGljaWVzUmVzcG9uc2USUgoTc2VydmVyX3Rsc19wb2xpY2llcxgBIAMoCzI1Lmdvb2dsZS5jbG91ZC5uZXR3b3Jrc2VjdXJpdHkudjFiZXRhMS5TZXJ2ZXJUbHNQb2xpY3kSFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJImEKGUdldFNlcnZlclRsc1BvbGljeVJlcXVlc3QSRAoEbmFtZRgBIAEoCUI24EEC+kEwCi5uZXR3b3Jrc2VjdXJpdHkuZ29vZ2xlYXBpcy5jb20vU2VydmVyVGxzUG9saWN5IuABChxDcmVhdGVTZXJ2ZXJUbHNQb2xpY3lSZXF1ZXN0EkYKBnBhcmVudBgBIAEoCUI24EEC+kEwEi5uZXR3b3Jrc2VjdXJpdHkuZ29vZ2xlYXBpcy5jb20vU2VydmVyVGxzUG9saWN5EiEKFHNlcnZlcl90bHNfcG9saWN5X2lkGAIgASgJQgPgQQISVQoRc2VydmVyX3Rsc19wb2xpY3kYAyABKAsyNS5nb29nbGUuY2xvdWQubmV0d29ya3NlY3VyaXR5LnYxYmV0YTEuU2VydmVyVGxzUG9saWN5QgPgQQIiqwEKHFVwZGF0ZVNlcnZlclRsc1BvbGljeVJlcXVlc3QSNAoLdXBkYXRlX21hc2sYASABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrQgPgQQESVQoRc2VydmVyX3Rsc19wb2xpY3kYAiABKAsyNS5nb29nbGUuY2xvdWQubmV0d29ya3NlY3VyaXR5LnYxYmV0YTEuU2VydmVyVGxzUG9saWN5QgPgQQIiZAocRGVsZXRlU2VydmVyVGxzUG9saWN5UmVxdWVzdBJECgRuYW1lGAEgASgJQjbgQQL6QTAKLm5ldHdvcmtzZWN1cml0eS5nb29nbGVhcGlzLmNvbS9TZXJ2ZXJUbHNQb2xpY3lCjgIKKGNvbS5nb29nbGUuY2xvdWQubmV0d29ya3NlY3VyaXR5LnYxYmV0YTFCFFNlcnZlclRsc1BvbGljeVByb3RvUAFaUmNsb3VkLmdvb2dsZS5jb20vZ28vbmV0d29ya3NlY3VyaXR5L2FwaXYxYmV0YTEvbmV0d29ya3NlY3VyaXR5cGI7bmV0d29ya3NlY3VyaXR5cGKqAiRHb29nbGUuQ2xvdWQuTmV0d29ya1NlY3VyaXR5LlYxQmV0YTHKAiRHb29nbGVcQ2xvdWRcTmV0d29ya1NlY3VyaXR5XFYxYmV0YTHqAidHb29nbGU6OkNsb3VkOjpOZXR3b3JrU2VjdXJpdHk6OlYxYmV0YTFiBnByb3RvMw", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_networksecurity_v1beta1_tls, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * ServerTlsPolicy is a resource that specifies how a server should authenticate
 * incoming requests. This resource itself does not affect configuration unless
 * it is attached to a target https proxy or endpoint config selector resource.
 *
 * @generated from message google.cloud.networksecurity.v1beta1.ServerTlsPolicy
 */
export type ServerTlsPolicy = Message<"google.cloud.networksecurity.v1beta1.ServerTlsPolicy"> & {
  /**
   * Required. Name of the ServerTlsPolicy resource. It matches the pattern
   * `projects/*\/locations/{location}/serverTlsPolicies/{server_tls_policy}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Free-text description of the resource.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * Output only. The timestamp when the resource was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * Output only. The timestamp when the resource was updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 4;
   */
  updateTime?: Timestamp;

  /**
   * Set of label tags associated with the resource.
   *
   * @generated from field: map<string, string> labels = 5;
   */
  labels: { [key: string]: string };

  /**
   *
   * Determines if server allows plaintext connections. If set to true, server
   * allows plain text connections. By default, it is set to false. This setting
   * is not exclusive of other encryption modes. For example, if `allow_open`
   * and `mtls_policy` are set, server allows both plain text and mTLS
   * connections. See documentation of other encryption modes to confirm
   * compatibility.
   *
   * Consider using it if you wish to upgrade in place your deployment to TLS
   * while having mixed TLS and non-TLS traffic reaching port :80.
   *
   * @generated from field: bool allow_open = 6;
   */
  allowOpen: boolean;

  /**
   *
   * Defines a mechanism to provision server identity (public and private keys).
   * Cannot be combined with `allow_open` as a permissive mode that allows both
   * plain text and TLS is not supported.
   *
   * @generated from field: google.cloud.networksecurity.v1beta1.CertificateProvider server_certificate = 7;
   */
  serverCertificate?: CertificateProvider;

  /**
   *
   * Defines a mechanism to provision peer validation certificates for peer to
   * peer authentication (Mutual TLS - mTLS). If not specified, client
   * certificate will not be requested. The connection is treated as TLS and not
   * mTLS. If `allow_open` and `mtls_policy` are set, server allows both plain
   * text and mTLS connections.
   *
   * @generated from field: google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy mtls_policy = 8;
   */
  mtlsPolicy?: ServerTlsPolicy_MTLSPolicy;
};

/**
 * Describes the message google.cloud.networksecurity.v1beta1.ServerTlsPolicy.
 * Use `create(ServerTlsPolicySchema)` to create a new message.
 */
export const ServerTlsPolicySchema: GenMessage<ServerTlsPolicy> = /*@__PURE__*/
  messageDesc(file_google_cloud_networksecurity_v1beta1_server_tls_policy, 0);

/**
 * Specification of the MTLSPolicy.
 *
 * @generated from message google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy
 */
export type ServerTlsPolicy_MTLSPolicy = Message<"google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy"> & {
  /**
   *
   * Defines the mechanism to obtain the Certificate Authority certificate to
   * validate the client certificate.
   *
   * @generated from field: repeated google.cloud.networksecurity.v1beta1.ValidationCA client_validation_ca = 1;
   */
  clientValidationCa: ValidationCA[];
};

/**
 * Describes the message google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy.
 * Use `create(ServerTlsPolicy_MTLSPolicySchema)` to create a new message.
 */
export const ServerTlsPolicy_MTLSPolicySchema: GenMessage<ServerTlsPolicy_MTLSPolicy> = /*@__PURE__*/
  messageDesc(file_google_cloud_networksecurity_v1beta1_server_tls_policy, 0, 0);

/**
 * Request used by the ListServerTlsPolicies method.
 *
 * @generated from message google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest
 */
export type ListServerTlsPoliciesRequest = Message<"google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest"> & {
  /**
   * Required. The project and location from which the ServerTlsPolicies should
   * be listed, specified in the format `projects/*\/locations/{location}`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Maximum number of ServerTlsPolicies to return per call.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * The value returned by the last `ListServerTlsPoliciesResponse`
   * Indicates that this is a continuation of a prior
   * `ListServerTlsPolicies` call, and that the system
   * should return the next page of data.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest.
 * Use `create(ListServerTlsPoliciesRequestSchema)` to create a new message.
 */
export const ListServerTlsPoliciesRequestSchema: GenMessage<ListServerTlsPoliciesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_networksecurity_v1beta1_server_tls_policy, 1);

/**
 * Response returned by the ListServerTlsPolicies method.
 *
 * @generated from message google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse
 */
export type ListServerTlsPoliciesResponse = Message<"google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse"> & {
  /**
   * List of ServerTlsPolicy resources.
   *
   * @generated from field: repeated google.cloud.networksecurity.v1beta1.ServerTlsPolicy server_tls_policies = 1;
   */
  serverTlsPolicies: ServerTlsPolicy[];

  /**
   * If there might be more results than those appearing in this response, then
   * `next_page_token` is included. To get the next set of results, call this
   * method again using the value of `next_page_token` as `page_token`.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse.
 * Use `create(ListServerTlsPoliciesResponseSchema)` to create a new message.
 */
export const ListServerTlsPoliciesResponseSchema: GenMessage<ListServerTlsPoliciesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_networksecurity_v1beta1_server_tls_policy, 2);

/**
 * Request used by the GetServerTlsPolicy method.
 *
 * @generated from message google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest
 */
export type GetServerTlsPolicyRequest = Message<"google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest"> & {
  /**
   * Required. A name of the ServerTlsPolicy to get. Must be in the format
   * `projects/*\/locations/{location}/serverTlsPolicies/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest.
 * Use `create(GetServerTlsPolicyRequestSchema)` to create a new message.
 */
export const GetServerTlsPolicyRequestSchema: GenMessage<GetServerTlsPolicyRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_networksecurity_v1beta1_server_tls_policy, 3);

/**
 * Request used by the CreateServerTlsPolicy method.
 *
 * @generated from message google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest
 */
export type CreateServerTlsPolicyRequest = Message<"google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest"> & {
  /**
   * Required. The parent resource of the ServerTlsPolicy. Must be in
   * the format `projects/*\/locations/{location}`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. Short name of the ServerTlsPolicy resource to be created. This
   * value should be 1-63 characters long, containing only letters, numbers,
   * hyphens, and underscores, and should not start with a number. E.g.
   * "server_mtls_policy".
   *
   * @generated from field: string server_tls_policy_id = 2;
   */
  serverTlsPolicyId: string;

  /**
   * Required. ServerTlsPolicy resource to be created.
   *
   * @generated from field: google.cloud.networksecurity.v1beta1.ServerTlsPolicy server_tls_policy = 3;
   */
  serverTlsPolicy?: ServerTlsPolicy;
};

/**
 * Describes the message google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest.
 * Use `create(CreateServerTlsPolicyRequestSchema)` to create a new message.
 */
export const CreateServerTlsPolicyRequestSchema: GenMessage<CreateServerTlsPolicyRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_networksecurity_v1beta1_server_tls_policy, 4);

/**
 * Request used by UpdateServerTlsPolicy method.
 *
 * @generated from message google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest
 */
export type UpdateServerTlsPolicyRequest = Message<"google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest"> & {
  /**
   * Optional. Field mask is used to specify the fields to be overwritten in the
   * ServerTlsPolicy resource by the update.  The fields
   * specified in the update_mask are relative to the resource, not
   * the full request. A field will be overwritten if it is in the
   * mask. If the user does not provide a mask then all fields will be
   * overwritten.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 1;
   */
  updateMask?: FieldMask;

  /**
   * Required. Updated ServerTlsPolicy resource.
   *
   * @generated from field: google.cloud.networksecurity.v1beta1.ServerTlsPolicy server_tls_policy = 2;
   */
  serverTlsPolicy?: ServerTlsPolicy;
};

/**
 * Describes the message google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest.
 * Use `create(UpdateServerTlsPolicyRequestSchema)` to create a new message.
 */
export const UpdateServerTlsPolicyRequestSchema: GenMessage<UpdateServerTlsPolicyRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_networksecurity_v1beta1_server_tls_policy, 5);

/**
 * Request used by the DeleteServerTlsPolicy method.
 *
 * @generated from message google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest
 */
export type DeleteServerTlsPolicyRequest = Message<"google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest"> & {
  /**
   * Required. A name of the ServerTlsPolicy to delete. Must be in
   * the format `projects/*\/locations/{location}/serverTlsPolicies/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest.
 * Use `create(DeleteServerTlsPolicyRequestSchema)` to create a new message.
 */
export const DeleteServerTlsPolicyRequestSchema: GenMessage<DeleteServerTlsPolicyRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_networksecurity_v1beta1_server_tls_policy, 6);
