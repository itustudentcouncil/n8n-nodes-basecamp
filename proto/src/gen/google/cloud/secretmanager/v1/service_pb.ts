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
// @generated from file google/cloud/secretmanager/v1/service.proto (package google.cloud.secretmanager.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Secret, SecretPayload, SecretSchema, SecretVersion, SecretVersionSchema } from "./resources_pb";
import { file_google_cloud_secretmanager_v1_resources } from "./resources_pb";
import type { GetIamPolicyRequestSchema, SetIamPolicyRequestSchema, TestIamPermissionsRequestSchema, TestIamPermissionsResponseSchema } from "../../../iam/v1/iam_policy_pb";
import { file_google_iam_v1_iam_policy } from "../../../iam/v1/iam_policy_pb";
import type { PolicySchema } from "../../../iam/v1/policy_pb";
import { file_google_iam_v1_policy } from "../../../iam/v1/policy_pb";
import type { EmptySchema, FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/secretmanager/v1/service.proto.
 */
export const file_google_cloud_secretmanager_v1_service: GenFile = /*@__PURE__*/
  fileDesc("Citnb29nbGUvY2xvdWQvc2VjcmV0bWFuYWdlci92MS9zZXJ2aWNlLnByb3RvEh1nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MSKXAQoSTGlzdFNlY3JldHNSZXF1ZXN0EjsKBnBhcmVudBgBIAEoCUIr4EEC+kElEiNzZWNyZXRtYW5hZ2VyLmdvb2dsZWFwaXMuY29tL1NlY3JldBIWCglwYWdlX3NpemUYAiABKAVCA+BBARIXCgpwYWdlX3Rva2VuGAMgASgJQgPgQQESEwoGZmlsdGVyGAQgASgJQgPgQQEiegoTTGlzdFNlY3JldHNSZXNwb25zZRI2CgdzZWNyZXRzGAEgAygLMiUuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjEuU2VjcmV0EhcKD25leHRfcGFnZV90b2tlbhgCIAEoCRISCgp0b3RhbF9zaXplGAMgASgFIqYBChNDcmVhdGVTZWNyZXRSZXF1ZXN0EjsKBnBhcmVudBgBIAEoCUIr4EEC+kElEiNzZWNyZXRtYW5hZ2VyLmdvb2dsZWFwaXMuY29tL1NlY3JldBIWCglzZWNyZXRfaWQYAiABKAlCA+BBAhI6CgZzZWNyZXQYAyABKAsyJS5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MS5TZWNyZXRCA+BBAiKaAQoXQWRkU2VjcmV0VmVyc2lvblJlcXVlc3QSOwoGcGFyZW50GAEgASgJQivgQQL6QSUKI3NlY3JldG1hbmFnZXIuZ29vZ2xlYXBpcy5jb20vU2VjcmV0EkIKB3BheWxvYWQYAiABKAsyLC5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MS5TZWNyZXRQYXlsb2FkQgPgQQIiTQoQR2V0U2VjcmV0UmVxdWVzdBI5CgRuYW1lGAEgASgJQivgQQL6QSUKI3NlY3JldG1hbmFnZXIuZ29vZ2xlYXBpcy5jb20vU2VjcmV0Ip4BChlMaXN0U2VjcmV0VmVyc2lvbnNSZXF1ZXN0EjsKBnBhcmVudBgBIAEoCUIr4EEC+kElCiNzZWNyZXRtYW5hZ2VyLmdvb2dsZWFwaXMuY29tL1NlY3JldBIWCglwYWdlX3NpemUYAiABKAVCA+BBARIXCgpwYWdlX3Rva2VuGAMgASgJQgPgQQESEwoGZmlsdGVyGAQgASgJQgPgQQEiiQEKGkxpc3RTZWNyZXRWZXJzaW9uc1Jlc3BvbnNlEj4KCHZlcnNpb25zGAEgAygLMiwuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjEuU2VjcmV0VmVyc2lvbhIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkSEgoKdG90YWxfc2l6ZRgDIAEoBSJbChdHZXRTZWNyZXRWZXJzaW9uUmVxdWVzdBJACgRuYW1lGAEgASgJQjLgQQL6QSwKKnNlY3JldG1hbmFnZXIuZ29vZ2xlYXBpcy5jb20vU2VjcmV0VmVyc2lvbiKHAQoTVXBkYXRlU2VjcmV0UmVxdWVzdBI6CgZzZWNyZXQYASABKAsyJS5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MS5TZWNyZXRCA+BBAhI0Cgt1cGRhdGVfbWFzaxgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2tCA+BBAiJeChpBY2Nlc3NTZWNyZXRWZXJzaW9uUmVxdWVzdBJACgRuYW1lGAEgASgJQjLgQQL6QSwKKnNlY3JldG1hbmFnZXIuZ29vZ2xlYXBpcy5jb20vU2VjcmV0VmVyc2lvbiKbAQobQWNjZXNzU2VjcmV0VmVyc2lvblJlc3BvbnNlEj0KBG5hbWUYASABKAlCL/pBLAoqc2VjcmV0bWFuYWdlci5nb29nbGVhcGlzLmNvbS9TZWNyZXRWZXJzaW9uEj0KB3BheWxvYWQYAiABKAsyLC5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MS5TZWNyZXRQYXlsb2FkImMKE0RlbGV0ZVNlY3JldFJlcXVlc3QSOQoEbmFtZRgBIAEoCUIr4EEC+kElCiNzZWNyZXRtYW5hZ2VyLmdvb2dsZWFwaXMuY29tL1NlY3JldBIRCgRldGFnGAIgASgJQgPgQQEicgobRGlzYWJsZVNlY3JldFZlcnNpb25SZXF1ZXN0EkAKBG5hbWUYASABKAlCMuBBAvpBLAoqc2VjcmV0bWFuYWdlci5nb29nbGVhcGlzLmNvbS9TZWNyZXRWZXJzaW9uEhEKBGV0YWcYAiABKAlCA+BBASJxChpFbmFibGVTZWNyZXRWZXJzaW9uUmVxdWVzdBJACgRuYW1lGAEgASgJQjLgQQL6QSwKKnNlY3JldG1hbmFnZXIuZ29vZ2xlYXBpcy5jb20vU2VjcmV0VmVyc2lvbhIRCgRldGFnGAIgASgJQgPgQQEicgobRGVzdHJveVNlY3JldFZlcnNpb25SZXF1ZXN0EkAKBG5hbWUYASABKAlCMuBBAvpBLAoqc2VjcmV0bWFuYWdlci5nb29nbGVhcGlzLmNvbS9TZWNyZXRWZXJzaW9uEhEKBGV0YWcYAiABKAlCA+BBATLoHAoUU2VjcmV0TWFuYWdlclNlcnZpY2US1QEKC0xpc3RTZWNyZXRzEjEuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjEuTGlzdFNlY3JldHNSZXF1ZXN0GjIuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjEuTGlzdFNlY3JldHNSZXNwb25zZSJf2kEGcGFyZW50gtPkkwJQWi0SKy92MS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9L3NlY3JldHMSHy92MS97cGFyZW50PXByb2plY3RzLyp9L3NlY3JldHMS7AEKDENyZWF0ZVNlY3JldBIyLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxLkNyZWF0ZVNlY3JldFJlcXVlc3QaJS5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MS5TZWNyZXQigAHaQRdwYXJlbnQsc2VjcmV0X2lkLHNlY3JldILT5JMCYDoGc2VjcmV0WjU6BnNlY3JldCIrL3YxL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKn0vc2VjcmV0cyIfL3YxL3twYXJlbnQ9cHJvamVjdHMvKn0vc2VjcmV0cxKCAgoQQWRkU2VjcmV0VmVyc2lvbhI2Lmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxLkFkZFNlY3JldFZlcnNpb25SZXF1ZXN0GiwuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjEuU2VjcmV0VmVyc2lvbiKHAdpBDnBhcmVudCxwYXlsb2FkgtPkkwJwOgEqWj06ASoiOC92MS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qfTphZGRWZXJzaW9uIiwvdjEve3BhcmVudD1wcm9qZWN0cy8qL3NlY3JldHMvKn06YWRkVmVyc2lvbhLCAQoJR2V0U2VjcmV0Ei8uZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjEuR2V0U2VjcmV0UmVxdWVzdBolLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxLlNlY3JldCJd2kEEbmFtZYLT5JMCUFotEisvdjEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9zZWNyZXRzLyp9Eh8vdjEve25hbWU9cHJvamVjdHMvKi9zZWNyZXRzLyp9EvUBCgxVcGRhdGVTZWNyZXQSMi5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MS5VcGRhdGVTZWNyZXRSZXF1ZXN0GiUuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjEuU2VjcmV0IokB2kESc2VjcmV0LHVwZGF0ZV9tYXNrgtPkkwJuOgZzZWNyZXRaPDoGc2VjcmV0MjIvdjEve3NlY3JldC5uYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qfTImL3YxL3tzZWNyZXQubmFtZT1wcm9qZWN0cy8qL3NlY3JldHMvKn0SuQEKDERlbGV0ZVNlY3JldBIyLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxLkRlbGV0ZVNlY3JldFJlcXVlc3QaFi5nb29nbGUucHJvdG9idWYuRW1wdHkiXdpBBG5hbWWC0+STAlBaLSorL3YxL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qfSofL3YxL3tuYW1lPXByb2plY3RzLyovc2VjcmV0cy8qfRKAAgoSTGlzdFNlY3JldFZlcnNpb25zEjguZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjEuTGlzdFNlY3JldFZlcnNpb25zUmVxdWVzdBo5Lmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxLkxpc3RTZWNyZXRWZXJzaW9uc1Jlc3BvbnNlInXaQQZwYXJlbnSC0+STAmZaOBI2L3YxL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9zZWNyZXRzLyp9L3ZlcnNpb25zEiovdjEve3BhcmVudD1wcm9qZWN0cy8qL3NlY3JldHMvKn0vdmVyc2lvbnMS7QEKEEdldFNlY3JldFZlcnNpb24SNi5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MS5HZXRTZWNyZXRWZXJzaW9uUmVxdWVzdBosLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxLlNlY3JldFZlcnNpb24ic9pBBG5hbWWC0+STAmZaOBI2L3YxL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qL3ZlcnNpb25zLyp9EiovdjEve25hbWU9cHJvamVjdHMvKi9zZWNyZXRzLyovdmVyc2lvbnMvKn0SkAIKE0FjY2Vzc1NlY3JldFZlcnNpb24SOS5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MS5BY2Nlc3NTZWNyZXRWZXJzaW9uUmVxdWVzdBo6Lmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxLkFjY2Vzc1NlY3JldFZlcnNpb25SZXNwb25zZSKBAdpBBG5hbWWC0+STAnRaPxI9L3YxL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qL3ZlcnNpb25zLyp9OmFjY2VzcxIxL3YxL3tuYW1lPXByb2plY3RzLyovc2VjcmV0cy8qL3ZlcnNpb25zLyp9OmFjY2VzcxKMAgoURGlzYWJsZVNlY3JldFZlcnNpb24SOi5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MS5EaXNhYmxlU2VjcmV0VmVyc2lvblJlcXVlc3QaLC5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MS5TZWNyZXRWZXJzaW9uIokB2kEEbmFtZYLT5JMCfDoBKlpDOgEqIj4vdjEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9zZWNyZXRzLyovdmVyc2lvbnMvKn06ZGlzYWJsZSIyL3YxL3tuYW1lPXByb2plY3RzLyovc2VjcmV0cy8qL3ZlcnNpb25zLyp9OmRpc2FibGUSiAIKE0VuYWJsZVNlY3JldFZlcnNpb24SOS5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MS5FbmFibGVTZWNyZXRWZXJzaW9uUmVxdWVzdBosLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxLlNlY3JldFZlcnNpb24ihwHaQQRuYW1lgtPkkwJ6OgEqWkI6ASoiPS92MS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL3NlY3JldHMvKi92ZXJzaW9ucy8qfTplbmFibGUiMS92MS97bmFtZT1wcm9qZWN0cy8qL3NlY3JldHMvKi92ZXJzaW9ucy8qfTplbmFibGUSjAIKFERlc3Ryb3lTZWNyZXRWZXJzaW9uEjouZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjEuRGVzdHJveVNlY3JldFZlcnNpb25SZXF1ZXN0GiwuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjEuU2VjcmV0VmVyc2lvbiKJAdpBBG5hbWWC0+STAnw6ASpaQzoBKiI+L3YxL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qL3ZlcnNpb25zLyp9OmRlc3Ryb3kiMi92MS97bmFtZT1wcm9qZWN0cy8qL3NlY3JldHMvKi92ZXJzaW9ucy8qfTpkZXN0cm95EskBCgxTZXRJYW1Qb2xpY3kSIi5nb29nbGUuaWFtLnYxLlNldElhbVBvbGljeVJlcXVlc3QaFS5nb29nbGUuaWFtLnYxLlBvbGljeSJ+gtPkkwJ4OgEqWkE6ASoiPC92MS97cmVzb3VyY2U9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9zZWNyZXRzLyp9OnNldElhbVBvbGljeSIwL3YxL3tyZXNvdXJjZT1wcm9qZWN0cy8qL3NlY3JldHMvKn06c2V0SWFtUG9saWN5EsMBCgxHZXRJYW1Qb2xpY3kSIi5nb29nbGUuaWFtLnYxLkdldElhbVBvbGljeVJlcXVlc3QaFS5nb29nbGUuaWFtLnYxLlBvbGljeSJ4gtPkkwJyWj4SPC92MS97cmVzb3VyY2U9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9zZWNyZXRzLyp9OmdldElhbVBvbGljeRIwL3YxL3tyZXNvdXJjZT1wcm9qZWN0cy8qL3NlY3JldHMvKn06Z2V0SWFtUG9saWN5EvcBChJUZXN0SWFtUGVybWlzc2lvbnMSKC5nb29nbGUuaWFtLnYxLlRlc3RJYW1QZXJtaXNzaW9uc1JlcXVlc3QaKS5nb29nbGUuaWFtLnYxLlRlc3RJYW1QZXJtaXNzaW9uc1Jlc3BvbnNlIosBgtPkkwKEAToBKlpHOgEqIkIvdjEve3Jlc291cmNlPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qfTp0ZXN0SWFtUGVybWlzc2lvbnMiNi92MS97cmVzb3VyY2U9cHJvamVjdHMvKi9zZWNyZXRzLyp9OnRlc3RJYW1QZXJtaXNzaW9ucxpQykEcc2VjcmV0bWFuYWdlci5nb29nbGVhcGlzLmNvbdJBLmh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm1C6AEKIWNvbS5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MUIMU2VydmljZVByb3RvUAFaR2Nsb3VkLmdvb2dsZS5jb20vZ28vc2VjcmV0bWFuYWdlci9hcGl2MS9zZWNyZXRtYW5hZ2VycGI7c2VjcmV0bWFuYWdlcnBi+AEBogIDR1NNqgIdR29vZ2xlLkNsb3VkLlNlY3JldE1hbmFnZXIuVjHKAh1Hb29nbGVcQ2xvdWRcU2VjcmV0TWFuYWdlclxWMeoCIEdvb2dsZTo6Q2xvdWQ6OlNlY3JldE1hbmFnZXI6OlYxYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_secretmanager_v1_resources, file_google_iam_v1_iam_policy, file_google_iam_v1_policy, file_google_protobuf_empty, file_google_protobuf_field_mask]);

/**
 * Request message for
 * [SecretManagerService.ListSecrets][google.cloud.secretmanager.v1.SecretManagerService.ListSecrets].
 *
 * @generated from message google.cloud.secretmanager.v1.ListSecretsRequest
 */
export type ListSecretsRequest = Message<"google.cloud.secretmanager.v1.ListSecretsRequest"> & {
  /**
   * Required. The resource name of the project associated with the
   * [Secrets][google.cloud.secretmanager.v1.Secret], in the format `projects/*`
   * or `projects/*\/locations/*`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. The maximum number of results to be returned in a single page. If
   * set to 0, the server decides the number of results to return. If the
   * number is greater than 25000, it is capped at 25000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. Pagination token, returned earlier via
   * [ListSecretsResponse.next_page_token][google.cloud.secretmanager.v1.ListSecretsResponse.next_page_token].
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * Optional. Filter string, adhering to the rules in
   * [List-operation
   * filtering](https://cloud.google.com/secret-manager/docs/filtering). List
   * only secrets matching the filter. If filter is empty, all secrets are
   * listed.
   *
   * @generated from field: string filter = 4;
   */
  filter: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1.ListSecretsRequest.
 * Use `create(ListSecretsRequestSchema)` to create a new message.
 */
export const ListSecretsRequestSchema: GenMessage<ListSecretsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 0);

/**
 * Response message for
 * [SecretManagerService.ListSecrets][google.cloud.secretmanager.v1.SecretManagerService.ListSecrets].
 *
 * @generated from message google.cloud.secretmanager.v1.ListSecretsResponse
 */
export type ListSecretsResponse = Message<"google.cloud.secretmanager.v1.ListSecretsResponse"> & {
  /**
   * The list of [Secrets][google.cloud.secretmanager.v1.Secret] sorted in
   * reverse by create_time (newest first).
   *
   * @generated from field: repeated google.cloud.secretmanager.v1.Secret secrets = 1;
   */
  secrets: Secret[];

  /**
   * A token to retrieve the next page of results. Pass this value in
   * [ListSecretsRequest.page_token][google.cloud.secretmanager.v1.ListSecretsRequest.page_token]
   * to retrieve the next page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * The total number of [Secrets][google.cloud.secretmanager.v1.Secret] but 0
   * when the
   * [ListSecretsRequest.filter][google.cloud.secretmanager.v1.ListSecretsRequest.filter]
   * field is set.
   *
   * @generated from field: int32 total_size = 3;
   */
  totalSize: number;
};

/**
 * Describes the message google.cloud.secretmanager.v1.ListSecretsResponse.
 * Use `create(ListSecretsResponseSchema)` to create a new message.
 */
export const ListSecretsResponseSchema: GenMessage<ListSecretsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 1);

/**
 * Request message for
 * [SecretManagerService.CreateSecret][google.cloud.secretmanager.v1.SecretManagerService.CreateSecret].
 *
 * @generated from message google.cloud.secretmanager.v1.CreateSecretRequest
 */
export type CreateSecretRequest = Message<"google.cloud.secretmanager.v1.CreateSecretRequest"> & {
  /**
   * Required. The resource name of the project to associate with the
   * [Secret][google.cloud.secretmanager.v1.Secret], in the format `projects/*`
   * or `projects/*\/locations/*`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. This must be unique within the project.
   *
   * A secret ID is a string with a maximum length of 255 characters and can
   * contain uppercase and lowercase letters, numerals, and the hyphen (`-`) and
   * underscore (`_`) characters.
   *
   * @generated from field: string secret_id = 2;
   */
  secretId: string;

  /**
   * Required. A [Secret][google.cloud.secretmanager.v1.Secret] with initial
   * field values.
   *
   * @generated from field: google.cloud.secretmanager.v1.Secret secret = 3;
   */
  secret?: Secret;
};

/**
 * Describes the message google.cloud.secretmanager.v1.CreateSecretRequest.
 * Use `create(CreateSecretRequestSchema)` to create a new message.
 */
export const CreateSecretRequestSchema: GenMessage<CreateSecretRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 2);

/**
 * Request message for
 * [SecretManagerService.AddSecretVersion][google.cloud.secretmanager.v1.SecretManagerService.AddSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1.AddSecretVersionRequest
 */
export type AddSecretVersionRequest = Message<"google.cloud.secretmanager.v1.AddSecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [Secret][google.cloud.secretmanager.v1.Secret] to associate with the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] in the format
   * `projects/*\/secrets/*` or `projects/*\/locations/*\/secrets/*`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The secret payload of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion].
   *
   * @generated from field: google.cloud.secretmanager.v1.SecretPayload payload = 2;
   */
  payload?: SecretPayload;
};

/**
 * Describes the message google.cloud.secretmanager.v1.AddSecretVersionRequest.
 * Use `create(AddSecretVersionRequestSchema)` to create a new message.
 */
export const AddSecretVersionRequestSchema: GenMessage<AddSecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 3);

/**
 * Request message for
 * [SecretManagerService.GetSecret][google.cloud.secretmanager.v1.SecretManagerService.GetSecret].
 *
 * @generated from message google.cloud.secretmanager.v1.GetSecretRequest
 */
export type GetSecretRequest = Message<"google.cloud.secretmanager.v1.GetSecretRequest"> & {
  /**
   * Required. The resource name of the
   * [Secret][google.cloud.secretmanager.v1.Secret], in the format
   * `projects/*\/secrets/*` or `projects/*\/locations/*\/secrets/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1.GetSecretRequest.
 * Use `create(GetSecretRequestSchema)` to create a new message.
 */
export const GetSecretRequestSchema: GenMessage<GetSecretRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 4);

/**
 * Request message for
 * [SecretManagerService.ListSecretVersions][google.cloud.secretmanager.v1.SecretManagerService.ListSecretVersions].
 *
 * @generated from message google.cloud.secretmanager.v1.ListSecretVersionsRequest
 */
export type ListSecretVersionsRequest = Message<"google.cloud.secretmanager.v1.ListSecretVersionsRequest"> & {
  /**
   * Required. The resource name of the
   * [Secret][google.cloud.secretmanager.v1.Secret] associated with the
   * [SecretVersions][google.cloud.secretmanager.v1.SecretVersion] to list, in
   * the format `projects/*\/secrets/*` or `projects/*\/locations/*\/secrets/*`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. The maximum number of results to be returned in a single page. If
   * set to 0, the server decides the number of results to return. If the
   * number is greater than 25000, it is capped at 25000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. Pagination token, returned earlier via
   * ListSecretVersionsResponse.next_page_token][].
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * Optional. Filter string, adhering to the rules in
   * [List-operation
   * filtering](https://cloud.google.com/secret-manager/docs/filtering). List
   * only secret versions matching the filter. If filter is empty, all secret
   * versions are listed.
   *
   * @generated from field: string filter = 4;
   */
  filter: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1.ListSecretVersionsRequest.
 * Use `create(ListSecretVersionsRequestSchema)` to create a new message.
 */
export const ListSecretVersionsRequestSchema: GenMessage<ListSecretVersionsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 5);

/**
 * Response message for
 * [SecretManagerService.ListSecretVersions][google.cloud.secretmanager.v1.SecretManagerService.ListSecretVersions].
 *
 * @generated from message google.cloud.secretmanager.v1.ListSecretVersionsResponse
 */
export type ListSecretVersionsResponse = Message<"google.cloud.secretmanager.v1.ListSecretVersionsResponse"> & {
  /**
   * The list of [SecretVersions][google.cloud.secretmanager.v1.SecretVersion]
   * sorted in reverse by create_time (newest first).
   *
   * @generated from field: repeated google.cloud.secretmanager.v1.SecretVersion versions = 1;
   */
  versions: SecretVersion[];

  /**
   * A token to retrieve the next page of results. Pass this value in
   * [ListSecretVersionsRequest.page_token][google.cloud.secretmanager.v1.ListSecretVersionsRequest.page_token]
   * to retrieve the next page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * The total number of
   * [SecretVersions][google.cloud.secretmanager.v1.SecretVersion] but 0 when
   * the
   * [ListSecretsRequest.filter][google.cloud.secretmanager.v1.ListSecretsRequest.filter]
   * field is set.
   *
   * @generated from field: int32 total_size = 3;
   */
  totalSize: number;
};

/**
 * Describes the message google.cloud.secretmanager.v1.ListSecretVersionsResponse.
 * Use `create(ListSecretVersionsResponseSchema)` to create a new message.
 */
export const ListSecretVersionsResponseSchema: GenMessage<ListSecretVersionsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 6);

/**
 * Request message for
 * [SecretManagerService.GetSecretVersion][google.cloud.secretmanager.v1.SecretManagerService.GetSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1.GetSecretVersionRequest
 */
export type GetSecretVersionRequest = Message<"google.cloud.secretmanager.v1.GetSecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] in the format
   * `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * `projects/*\/secrets/*\/versions/latest` or
   * `projects/*\/locations/*\/secrets/*\/versions/latest` is an alias to the most
   * recently created
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion].
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1.GetSecretVersionRequest.
 * Use `create(GetSecretVersionRequestSchema)` to create a new message.
 */
export const GetSecretVersionRequestSchema: GenMessage<GetSecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 7);

/**
 * Request message for
 * [SecretManagerService.UpdateSecret][google.cloud.secretmanager.v1.SecretManagerService.UpdateSecret].
 *
 * @generated from message google.cloud.secretmanager.v1.UpdateSecretRequest
 */
export type UpdateSecretRequest = Message<"google.cloud.secretmanager.v1.UpdateSecretRequest"> & {
  /**
   * Required. [Secret][google.cloud.secretmanager.v1.Secret] with updated field
   * values.
   *
   * @generated from field: google.cloud.secretmanager.v1.Secret secret = 1;
   */
  secret?: Secret;

  /**
   * Required. Specifies the fields to be updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.secretmanager.v1.UpdateSecretRequest.
 * Use `create(UpdateSecretRequestSchema)` to create a new message.
 */
export const UpdateSecretRequestSchema: GenMessage<UpdateSecretRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 8);

/**
 * Request message for
 * [SecretManagerService.AccessSecretVersion][google.cloud.secretmanager.v1.SecretManagerService.AccessSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1.AccessSecretVersionRequest
 */
export type AccessSecretVersionRequest = Message<"google.cloud.secretmanager.v1.AccessSecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] in the format
   * `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * `projects/*\/secrets/*\/versions/latest` or
   * `projects/*\/locations/*\/secrets/*\/versions/latest` is an alias to the most
   * recently created
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion].
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1.AccessSecretVersionRequest.
 * Use `create(AccessSecretVersionRequestSchema)` to create a new message.
 */
export const AccessSecretVersionRequestSchema: GenMessage<AccessSecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 9);

/**
 * Response message for
 * [SecretManagerService.AccessSecretVersion][google.cloud.secretmanager.v1.SecretManagerService.AccessSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1.AccessSecretVersionResponse
 */
export type AccessSecretVersionResponse = Message<"google.cloud.secretmanager.v1.AccessSecretVersionResponse"> & {
  /**
   * The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] in the format
   * `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Secret payload
   *
   * @generated from field: google.cloud.secretmanager.v1.SecretPayload payload = 2;
   */
  payload?: SecretPayload;
};

/**
 * Describes the message google.cloud.secretmanager.v1.AccessSecretVersionResponse.
 * Use `create(AccessSecretVersionResponseSchema)` to create a new message.
 */
export const AccessSecretVersionResponseSchema: GenMessage<AccessSecretVersionResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 10);

/**
 * Request message for
 * [SecretManagerService.DeleteSecret][google.cloud.secretmanager.v1.SecretManagerService.DeleteSecret].
 *
 * @generated from message google.cloud.secretmanager.v1.DeleteSecretRequest
 */
export type DeleteSecretRequest = Message<"google.cloud.secretmanager.v1.DeleteSecretRequest"> & {
  /**
   * Required. The resource name of the
   * [Secret][google.cloud.secretmanager.v1.Secret] to delete in the format
   * `projects/*\/secrets/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Etag of the [Secret][google.cloud.secretmanager.v1.Secret]. The
   * request succeeds if it matches the etag of the currently stored secret
   * object. If the etag is omitted, the request succeeds.
   *
   * @generated from field: string etag = 2;
   */
  etag: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1.DeleteSecretRequest.
 * Use `create(DeleteSecretRequestSchema)` to create a new message.
 */
export const DeleteSecretRequestSchema: GenMessage<DeleteSecretRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 11);

/**
 * Request message for
 * [SecretManagerService.DisableSecretVersion][google.cloud.secretmanager.v1.SecretManagerService.DisableSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1.DisableSecretVersionRequest
 */
export type DisableSecretVersionRequest = Message<"google.cloud.secretmanager.v1.DisableSecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] to disable in
   * the format `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Etag of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion]. The request
   * succeeds if it matches the etag of the currently stored secret version
   * object. If the etag is omitted, the request succeeds.
   *
   * @generated from field: string etag = 2;
   */
  etag: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1.DisableSecretVersionRequest.
 * Use `create(DisableSecretVersionRequestSchema)` to create a new message.
 */
export const DisableSecretVersionRequestSchema: GenMessage<DisableSecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 12);

/**
 * Request message for
 * [SecretManagerService.EnableSecretVersion][google.cloud.secretmanager.v1.SecretManagerService.EnableSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1.EnableSecretVersionRequest
 */
export type EnableSecretVersionRequest = Message<"google.cloud.secretmanager.v1.EnableSecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] to enable in
   * the format `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Etag of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion]. The request
   * succeeds if it matches the etag of the currently stored secret version
   * object. If the etag is omitted, the request succeeds.
   *
   * @generated from field: string etag = 2;
   */
  etag: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1.EnableSecretVersionRequest.
 * Use `create(EnableSecretVersionRequestSchema)` to create a new message.
 */
export const EnableSecretVersionRequestSchema: GenMessage<EnableSecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 13);

/**
 * Request message for
 * [SecretManagerService.DestroySecretVersion][google.cloud.secretmanager.v1.SecretManagerService.DestroySecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1.DestroySecretVersionRequest
 */
export type DestroySecretVersionRequest = Message<"google.cloud.secretmanager.v1.DestroySecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] to destroy in
   * the format `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Etag of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion]. The request
   * succeeds if it matches the etag of the currently stored secret version
   * object. If the etag is omitted, the request succeeds.
   *
   * @generated from field: string etag = 2;
   */
  etag: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1.DestroySecretVersionRequest.
 * Use `create(DestroySecretVersionRequestSchema)` to create a new message.
 */
export const DestroySecretVersionRequestSchema: GenMessage<DestroySecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1_service, 14);

/**
 * Secret Manager Service
 *
 * Manages secrets and operations using those secrets. Implements a REST
 * model with the following objects:
 *
 * * [Secret][google.cloud.secretmanager.v1.Secret]
 * * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion]
 *
 * @generated from service google.cloud.secretmanager.v1.SecretManagerService
 */
export const SecretManagerService: GenService<{
  /**
   * Lists [Secrets][google.cloud.secretmanager.v1.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.ListSecrets
   */
  listSecrets: {
    methodKind: "unary";
    input: typeof ListSecretsRequestSchema;
    output: typeof ListSecretsResponseSchema;
  },
  /**
   * Creates a new [Secret][google.cloud.secretmanager.v1.Secret] containing no
   * [SecretVersions][google.cloud.secretmanager.v1.SecretVersion].
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.CreateSecret
   */
  createSecret: {
    methodKind: "unary";
    input: typeof CreateSecretRequestSchema;
    output: typeof SecretSchema;
  },
  /**
   * Creates a new [SecretVersion][google.cloud.secretmanager.v1.SecretVersion]
   * containing secret data and attaches it to an existing
   * [Secret][google.cloud.secretmanager.v1.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.AddSecretVersion
   */
  addSecretVersion: {
    methodKind: "unary";
    input: typeof AddSecretVersionRequestSchema;
    output: typeof SecretVersionSchema;
  },
  /**
   * Gets metadata for a given [Secret][google.cloud.secretmanager.v1.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.GetSecret
   */
  getSecret: {
    methodKind: "unary";
    input: typeof GetSecretRequestSchema;
    output: typeof SecretSchema;
  },
  /**
   * Updates metadata of an existing
   * [Secret][google.cloud.secretmanager.v1.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.UpdateSecret
   */
  updateSecret: {
    methodKind: "unary";
    input: typeof UpdateSecretRequestSchema;
    output: typeof SecretSchema;
  },
  /**
   * Deletes a [Secret][google.cloud.secretmanager.v1.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.DeleteSecret
   */
  deleteSecret: {
    methodKind: "unary";
    input: typeof DeleteSecretRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Lists [SecretVersions][google.cloud.secretmanager.v1.SecretVersion]. This
   * call does not return secret data.
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.ListSecretVersions
   */
  listSecretVersions: {
    methodKind: "unary";
    input: typeof ListSecretVersionsRequestSchema;
    output: typeof ListSecretVersionsResponseSchema;
  },
  /**
   * Gets metadata for a
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion].
   *
   * `projects/*\/secrets/*\/versions/latest` is an alias to the most recently
   * created [SecretVersion][google.cloud.secretmanager.v1.SecretVersion].
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.GetSecretVersion
   */
  getSecretVersion: {
    methodKind: "unary";
    input: typeof GetSecretVersionRequestSchema;
    output: typeof SecretVersionSchema;
  },
  /**
   * Accesses a [SecretVersion][google.cloud.secretmanager.v1.SecretVersion].
   * This call returns the secret data.
   *
   * `projects/*\/secrets/*\/versions/latest` is an alias to the most recently
   * created [SecretVersion][google.cloud.secretmanager.v1.SecretVersion].
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.AccessSecretVersion
   */
  accessSecretVersion: {
    methodKind: "unary";
    input: typeof AccessSecretVersionRequestSchema;
    output: typeof AccessSecretVersionResponseSchema;
  },
  /**
   * Disables a [SecretVersion][google.cloud.secretmanager.v1.SecretVersion].
   *
   * Sets the [state][google.cloud.secretmanager.v1.SecretVersion.state] of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] to
   * [DISABLED][google.cloud.secretmanager.v1.SecretVersion.State.DISABLED].
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.DisableSecretVersion
   */
  disableSecretVersion: {
    methodKind: "unary";
    input: typeof DisableSecretVersionRequestSchema;
    output: typeof SecretVersionSchema;
  },
  /**
   * Enables a [SecretVersion][google.cloud.secretmanager.v1.SecretVersion].
   *
   * Sets the [state][google.cloud.secretmanager.v1.SecretVersion.state] of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] to
   * [ENABLED][google.cloud.secretmanager.v1.SecretVersion.State.ENABLED].
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.EnableSecretVersion
   */
  enableSecretVersion: {
    methodKind: "unary";
    input: typeof EnableSecretVersionRequestSchema;
    output: typeof SecretVersionSchema;
  },
  /**
   * Destroys a [SecretVersion][google.cloud.secretmanager.v1.SecretVersion].
   *
   * Sets the [state][google.cloud.secretmanager.v1.SecretVersion.state] of the
   * [SecretVersion][google.cloud.secretmanager.v1.SecretVersion] to
   * [DESTROYED][google.cloud.secretmanager.v1.SecretVersion.State.DESTROYED]
   * and irrevocably destroys the secret data.
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.DestroySecretVersion
   */
  destroySecretVersion: {
    methodKind: "unary";
    input: typeof DestroySecretVersionRequestSchema;
    output: typeof SecretVersionSchema;
  },
  /**
   * Sets the access control policy on the specified secret. Replaces any
   * existing policy.
   *
   * Permissions on
   * [SecretVersions][google.cloud.secretmanager.v1.SecretVersion] are enforced
   * according to the policy set on the associated
   * [Secret][google.cloud.secretmanager.v1.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.SetIamPolicy
   */
  setIamPolicy: {
    methodKind: "unary";
    input: typeof SetIamPolicyRequestSchema;
    output: typeof PolicySchema;
  },
  /**
   * Gets the access control policy for a secret.
   * Returns empty policy if the secret exists and does not have a policy set.
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.GetIamPolicy
   */
  getIamPolicy: {
    methodKind: "unary";
    input: typeof GetIamPolicyRequestSchema;
    output: typeof PolicySchema;
  },
  /**
   * Returns permissions that a caller has for the specified secret.
   * If the secret does not exist, this call returns an empty set of
   * permissions, not a NOT_FOUND error.
   *
   * Note: This operation is designed to be used for building permission-aware
   * UIs and command-line tools, not for authorization checking. This operation
   * may "fail open" without warning.
   *
   * @generated from rpc google.cloud.secretmanager.v1.SecretManagerService.TestIamPermissions
   */
  testIamPermissions: {
    methodKind: "unary";
    input: typeof TestIamPermissionsRequestSchema;
    output: typeof TestIamPermissionsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_secretmanager_v1_service, 0);
