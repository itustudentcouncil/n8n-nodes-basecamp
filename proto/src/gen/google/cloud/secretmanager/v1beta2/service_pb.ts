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
// @generated from file google/cloud/secretmanager/v1beta2/service.proto (package google.cloud.secretmanager.v1beta2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Secret, SecretPayload, SecretSchema, SecretVersion, SecretVersionSchema } from "./resources_pb";
import { file_google_cloud_secretmanager_v1beta2_resources } from "./resources_pb";
import type { GetIamPolicyRequestSchema, SetIamPolicyRequestSchema, TestIamPermissionsRequestSchema, TestIamPermissionsResponseSchema } from "../../../iam/v1/iam_policy_pb";
import { file_google_iam_v1_iam_policy } from "../../../iam/v1/iam_policy_pb";
import type { PolicySchema } from "../../../iam/v1/policy_pb";
import { file_google_iam_v1_policy } from "../../../iam/v1/policy_pb";
import type { EmptySchema, FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/secretmanager/v1beta2/service.proto.
 */
export const file_google_cloud_secretmanager_v1beta2_service: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvY2xvdWQvc2VjcmV0bWFuYWdlci92MWJldGEyL3NlcnZpY2UucHJvdG8SImdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIilwEKEkxpc3RTZWNyZXRzUmVxdWVzdBI7CgZwYXJlbnQYASABKAlCK+BBAvpBJRIjc2VjcmV0bWFuYWdlci5nb29nbGVhcGlzLmNvbS9TZWNyZXQSFgoJcGFnZV9zaXplGAIgASgFQgPgQQESFwoKcGFnZV90b2tlbhgDIAEoCUID4EEBEhMKBmZpbHRlchgEIAEoCUID4EEBIn8KE0xpc3RTZWNyZXRzUmVzcG9uc2USOwoHc2VjcmV0cxgBIAMoCzIqLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuU2VjcmV0EhcKD25leHRfcGFnZV90b2tlbhgCIAEoCRISCgp0b3RhbF9zaXplGAMgASgFIqsBChNDcmVhdGVTZWNyZXRSZXF1ZXN0EjsKBnBhcmVudBgBIAEoCUIr4EEC+kElEiNzZWNyZXRtYW5hZ2VyLmdvb2dsZWFwaXMuY29tL1NlY3JldBIWCglzZWNyZXRfaWQYAiABKAlCA+BBAhI/CgZzZWNyZXQYAyABKAsyKi5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MWJldGEyLlNlY3JldEID4EECIp8BChdBZGRTZWNyZXRWZXJzaW9uUmVxdWVzdBI7CgZwYXJlbnQYASABKAlCK+BBAvpBJQojc2VjcmV0bWFuYWdlci5nb29nbGVhcGlzLmNvbS9TZWNyZXQSRwoHcGF5bG9hZBgCIAEoCzIxLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuU2VjcmV0UGF5bG9hZEID4EECIk0KEEdldFNlY3JldFJlcXVlc3QSOQoEbmFtZRgBIAEoCUIr4EEC+kElCiNzZWNyZXRtYW5hZ2VyLmdvb2dsZWFwaXMuY29tL1NlY3JldCKeAQoZTGlzdFNlY3JldFZlcnNpb25zUmVxdWVzdBI7CgZwYXJlbnQYASABKAlCK+BBAvpBJQojc2VjcmV0bWFuYWdlci5nb29nbGVhcGlzLmNvbS9TZWNyZXQSFgoJcGFnZV9zaXplGAIgASgFQgPgQQESFwoKcGFnZV90b2tlbhgDIAEoCUID4EEBEhMKBmZpbHRlchgEIAEoCUID4EEBIo4BChpMaXN0U2VjcmV0VmVyc2lvbnNSZXNwb25zZRJDCgh2ZXJzaW9ucxgBIAMoCzIxLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuU2VjcmV0VmVyc2lvbhIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkSEgoKdG90YWxfc2l6ZRgDIAEoBSJbChdHZXRTZWNyZXRWZXJzaW9uUmVxdWVzdBJACgRuYW1lGAEgASgJQjLgQQL6QSwKKnNlY3JldG1hbmFnZXIuZ29vZ2xlYXBpcy5jb20vU2VjcmV0VmVyc2lvbiKMAQoTVXBkYXRlU2VjcmV0UmVxdWVzdBI/CgZzZWNyZXQYASABKAsyKi5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MWJldGEyLlNlY3JldEID4EECEjQKC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFza0ID4EECIl4KGkFjY2Vzc1NlY3JldFZlcnNpb25SZXF1ZXN0EkAKBG5hbWUYASABKAlCMuBBAvpBLAoqc2VjcmV0bWFuYWdlci5nb29nbGVhcGlzLmNvbS9TZWNyZXRWZXJzaW9uIqABChtBY2Nlc3NTZWNyZXRWZXJzaW9uUmVzcG9uc2USPQoEbmFtZRgBIAEoCUIv+kEsCipzZWNyZXRtYW5hZ2VyLmdvb2dsZWFwaXMuY29tL1NlY3JldFZlcnNpb24SQgoHcGF5bG9hZBgCIAEoCzIxLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuU2VjcmV0UGF5bG9hZCJjChNEZWxldGVTZWNyZXRSZXF1ZXN0EjkKBG5hbWUYASABKAlCK+BBAvpBJQojc2VjcmV0bWFuYWdlci5nb29nbGVhcGlzLmNvbS9TZWNyZXQSEQoEZXRhZxgCIAEoCUID4EEBInIKG0Rpc2FibGVTZWNyZXRWZXJzaW9uUmVxdWVzdBJACgRuYW1lGAEgASgJQjLgQQL6QSwKKnNlY3JldG1hbmFnZXIuZ29vZ2xlYXBpcy5jb20vU2VjcmV0VmVyc2lvbhIRCgRldGFnGAIgASgJQgPgQQEicQoaRW5hYmxlU2VjcmV0VmVyc2lvblJlcXVlc3QSQAoEbmFtZRgBIAEoCUIy4EEC+kEsCipzZWNyZXRtYW5hZ2VyLmdvb2dsZWFwaXMuY29tL1NlY3JldFZlcnNpb24SEQoEZXRhZxgCIAEoCUID4EEBInIKG0Rlc3Ryb3lTZWNyZXRWZXJzaW9uUmVxdWVzdBJACgRuYW1lGAEgASgJQjLgQQL6QSwKKnNlY3JldG1hbmFnZXIuZ29vZ2xlYXBpcy5jb20vU2VjcmV0VmVyc2lvbhIRCgRldGFnGAIgASgJQgPgQQEy9x4KFFNlY3JldE1hbmFnZXJTZXJ2aWNlEukBCgtMaXN0U2VjcmV0cxI2Lmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuTGlzdFNlY3JldHNSZXF1ZXN0GjcuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjFiZXRhMi5MaXN0U2VjcmV0c1Jlc3BvbnNlImnaQQZwYXJlbnSC0+STAlpaMhIwL3YxYmV0YTIve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qfS9zZWNyZXRzEiQvdjFiZXRhMi97cGFyZW50PXByb2plY3RzLyp9L3NlY3JldHMSgAIKDENyZWF0ZVNlY3JldBI3Lmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuQ3JlYXRlU2VjcmV0UmVxdWVzdBoqLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuU2VjcmV0IooB2kEXcGFyZW50LHNlY3JldF9pZCxzZWNyZXSC0+STAmo6BnNlY3JldFo6OgZzZWNyZXQiMC92MWJldGEyL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKn0vc2VjcmV0cyIkL3YxYmV0YTIve3BhcmVudD1wcm9qZWN0cy8qfS9zZWNyZXRzEpYCChBBZGRTZWNyZXRWZXJzaW9uEjsuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjFiZXRhMi5BZGRTZWNyZXRWZXJzaW9uUmVxdWVzdBoxLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuU2VjcmV0VmVyc2lvbiKRAdpBDnBhcmVudCxwYXlsb2FkgtPkkwJ6OgEqWkI6ASoiPS92MWJldGEyL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9zZWNyZXRzLyp9OmFkZFZlcnNpb24iMS92MWJldGEyL3twYXJlbnQ9cHJvamVjdHMvKi9zZWNyZXRzLyp9OmFkZFZlcnNpb24S1gEKCUdldFNlY3JldBI0Lmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuR2V0U2VjcmV0UmVxdWVzdBoqLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuU2VjcmV0ImfaQQRuYW1lgtPkkwJaWjISMC92MWJldGEyL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qfRIkL3YxYmV0YTIve25hbWU9cHJvamVjdHMvKi9zZWNyZXRzLyp9EokCCgxVcGRhdGVTZWNyZXQSNy5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MWJldGEyLlVwZGF0ZVNlY3JldFJlcXVlc3QaKi5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MWJldGEyLlNlY3JldCKTAdpBEnNlY3JldCx1cGRhdGVfbWFza4LT5JMCeDoGc2VjcmV0WkE6BnNlY3JldDI3L3YxYmV0YTIve3NlY3JldC5uYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qfTIrL3YxYmV0YTIve3NlY3JldC5uYW1lPXByb2plY3RzLyovc2VjcmV0cy8qfRLIAQoMRGVsZXRlU2VjcmV0EjcuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjFiZXRhMi5EZWxldGVTZWNyZXRSZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5ImfaQQRuYW1lgtPkkwJaWjIqMC92MWJldGEyL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qfSokL3YxYmV0YTIve25hbWU9cHJvamVjdHMvKi9zZWNyZXRzLyp9EpQCChJMaXN0U2VjcmV0VmVyc2lvbnMSPS5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MWJldGEyLkxpc3RTZWNyZXRWZXJzaW9uc1JlcXVlc3QaPi5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MWJldGEyLkxpc3RTZWNyZXRWZXJzaW9uc1Jlc3BvbnNlIn/aQQZwYXJlbnSC0+STAnBaPRI7L3YxYmV0YTIve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL3NlY3JldHMvKn0vdmVyc2lvbnMSLy92MWJldGEyL3twYXJlbnQ9cHJvamVjdHMvKi9zZWNyZXRzLyp9L3ZlcnNpb25zEoECChBHZXRTZWNyZXRWZXJzaW9uEjsuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjFiZXRhMi5HZXRTZWNyZXRWZXJzaW9uUmVxdWVzdBoxLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuU2VjcmV0VmVyc2lvbiJ92kEEbmFtZYLT5JMCcFo9EjsvdjFiZXRhMi97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL3NlY3JldHMvKi92ZXJzaW9ucy8qfRIvL3YxYmV0YTIve25hbWU9cHJvamVjdHMvKi9zZWNyZXRzLyovdmVyc2lvbnMvKn0SpAIKE0FjY2Vzc1NlY3JldFZlcnNpb24SPi5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MWJldGEyLkFjY2Vzc1NlY3JldFZlcnNpb25SZXF1ZXN0Gj8uZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjFiZXRhMi5BY2Nlc3NTZWNyZXRWZXJzaW9uUmVzcG9uc2UiiwHaQQRuYW1lgtPkkwJ+WkQSQi92MWJldGEyL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qL3ZlcnNpb25zLyp9OmFjY2VzcxI2L3YxYmV0YTIve25hbWU9cHJvamVjdHMvKi9zZWNyZXRzLyovdmVyc2lvbnMvKn06YWNjZXNzEqECChREaXNhYmxlU2VjcmV0VmVyc2lvbhI/Lmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuRGlzYWJsZVNlY3JldFZlcnNpb25SZXF1ZXN0GjEuZ29vZ2xlLmNsb3VkLnNlY3JldG1hbmFnZXIudjFiZXRhMi5TZWNyZXRWZXJzaW9uIpQB2kEEbmFtZYLT5JMChgE6ASpaSDoBKiJDL3YxYmV0YTIve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9zZWNyZXRzLyovdmVyc2lvbnMvKn06ZGlzYWJsZSI3L3YxYmV0YTIve25hbWU9cHJvamVjdHMvKi9zZWNyZXRzLyovdmVyc2lvbnMvKn06ZGlzYWJsZRKdAgoTRW5hYmxlU2VjcmV0VmVyc2lvbhI+Lmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuRW5hYmxlU2VjcmV0VmVyc2lvblJlcXVlc3QaMS5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MWJldGEyLlNlY3JldFZlcnNpb24ikgHaQQRuYW1lgtPkkwKEAToBKlpHOgEqIkIvdjFiZXRhMi97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL3NlY3JldHMvKi92ZXJzaW9ucy8qfTplbmFibGUiNi92MWJldGEyL3tuYW1lPXByb2plY3RzLyovc2VjcmV0cy8qL3ZlcnNpb25zLyp9OmVuYWJsZRKhAgoURGVzdHJveVNlY3JldFZlcnNpb24SPy5nb29nbGUuY2xvdWQuc2VjcmV0bWFuYWdlci52MWJldGEyLkRlc3Ryb3lTZWNyZXRWZXJzaW9uUmVxdWVzdBoxLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTIuU2VjcmV0VmVyc2lvbiKUAdpBBG5hbWWC0+STAoYBOgEqWkg6ASoiQy92MWJldGEyL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qL3ZlcnNpb25zLyp9OmRlc3Ryb3kiNy92MWJldGEyL3tuYW1lPXByb2plY3RzLyovc2VjcmV0cy8qL3ZlcnNpb25zLyp9OmRlc3Ryb3kS1QEKDFNldElhbVBvbGljeRIiLmdvb2dsZS5pYW0udjEuU2V0SWFtUG9saWN5UmVxdWVzdBoVLmdvb2dsZS5pYW0udjEuUG9saWN5IokBgtPkkwKCAToBKlpGOgEqIkEvdjFiZXRhMi97cmVzb3VyY2U9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9zZWNyZXRzLyp9OnNldElhbVBvbGljeSI1L3YxYmV0YTIve3Jlc291cmNlPXByb2plY3RzLyovc2VjcmV0cy8qfTpzZXRJYW1Qb2xpY3kSzgEKDEdldElhbVBvbGljeRIiLmdvb2dsZS5pYW0udjEuR2V0SWFtUG9saWN5UmVxdWVzdBoVLmdvb2dsZS5pYW0udjEuUG9saWN5IoIBgtPkkwJ8WkMSQS92MWJldGEyL3tyZXNvdXJjZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL3NlY3JldHMvKn06Z2V0SWFtUG9saWN5EjUvdjFiZXRhMi97cmVzb3VyY2U9cHJvamVjdHMvKi9zZWNyZXRzLyp9OmdldElhbVBvbGljeRKBAgoSVGVzdElhbVBlcm1pc3Npb25zEiguZ29vZ2xlLmlhbS52MS5UZXN0SWFtUGVybWlzc2lvbnNSZXF1ZXN0GikuZ29vZ2xlLmlhbS52MS5UZXN0SWFtUGVybWlzc2lvbnNSZXNwb25zZSKVAYLT5JMCjgE6ASpaTDoBKiJHL3YxYmV0YTIve3Jlc291cmNlPXByb2plY3RzLyovbG9jYXRpb25zLyovc2VjcmV0cy8qfTp0ZXN0SWFtUGVybWlzc2lvbnMiOy92MWJldGEyL3tyZXNvdXJjZT1wcm9qZWN0cy8qL3NlY3JldHMvKn06dGVzdElhbVBlcm1pc3Npb25zGlDKQRxzZWNyZXRtYW5hZ2VyLmdvb2dsZWFwaXMuY29t0kEuaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybUKBAgomY29tLmdvb2dsZS5jbG91ZC5zZWNyZXRtYW5hZ2VyLnYxYmV0YTJCDFNlcnZpY2VQcm90b1ABWkxjbG91ZC5nb29nbGUuY29tL2dvL3NlY3JldG1hbmFnZXIvYXBpdjFiZXRhMi9zZWNyZXRtYW5hZ2VycGI7c2VjcmV0bWFuYWdlcnBi+AEBogIDR1NNqgIiR29vZ2xlLkNsb3VkLlNlY3JldE1hbmFnZXIuVjFCZXRhMsoCIkdvb2dsZVxDbG91ZFxTZWNyZXRNYW5hZ2VyXFYxYmV0YTLqAiVHb29nbGU6OkNsb3VkOjpTZWNyZXRNYW5hZ2VyOjpWMWJldGEyYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_secretmanager_v1beta2_resources, file_google_iam_v1_iam_policy, file_google_iam_v1_policy, file_google_protobuf_empty, file_google_protobuf_field_mask]);

/**
 * Request message for
 * [SecretManagerService.ListSecrets][google.cloud.secretmanager.v1beta2.SecretManagerService.ListSecrets].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.ListSecretsRequest
 */
export type ListSecretsRequest = Message<"google.cloud.secretmanager.v1beta2.ListSecretsRequest"> & {
  /**
   * Required. The resource name of the project associated with the
   * [Secrets][google.cloud.secretmanager.v1beta2.Secret], in the format
   * `projects/*` or `projects/*\/locations/*`
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
   * [ListSecretsResponse.next_page_token][google.cloud.secretmanager.v1beta2.ListSecretsResponse.next_page_token].
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
 * Describes the message google.cloud.secretmanager.v1beta2.ListSecretsRequest.
 * Use `create(ListSecretsRequestSchema)` to create a new message.
 */
export const ListSecretsRequestSchema: GenMessage<ListSecretsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 0);

/**
 * Response message for
 * [SecretManagerService.ListSecrets][google.cloud.secretmanager.v1beta2.SecretManagerService.ListSecrets].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.ListSecretsResponse
 */
export type ListSecretsResponse = Message<"google.cloud.secretmanager.v1beta2.ListSecretsResponse"> & {
  /**
   * The list of [Secrets][google.cloud.secretmanager.v1beta2.Secret] sorted in
   * reverse by create_time (newest first).
   *
   * @generated from field: repeated google.cloud.secretmanager.v1beta2.Secret secrets = 1;
   */
  secrets: Secret[];

  /**
   * A token to retrieve the next page of results. Pass this value in
   * [ListSecretsRequest.page_token][google.cloud.secretmanager.v1beta2.ListSecretsRequest.page_token]
   * to retrieve the next page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * The total number of [Secrets][google.cloud.secretmanager.v1beta2.Secret]
   * but 0 when the
   * [ListSecretsRequest.filter][google.cloud.secretmanager.v1beta2.ListSecretsRequest.filter]
   * field is set.
   *
   * @generated from field: int32 total_size = 3;
   */
  totalSize: number;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.ListSecretsResponse.
 * Use `create(ListSecretsResponseSchema)` to create a new message.
 */
export const ListSecretsResponseSchema: GenMessage<ListSecretsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 1);

/**
 * Request message for
 * [SecretManagerService.CreateSecret][google.cloud.secretmanager.v1beta2.SecretManagerService.CreateSecret].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.CreateSecretRequest
 */
export type CreateSecretRequest = Message<"google.cloud.secretmanager.v1beta2.CreateSecretRequest"> & {
  /**
   * Required. The resource name of the project to associate with the
   * [Secret][google.cloud.secretmanager.v1beta2.Secret], in the format
   * `projects/*` or `projects/*\/locations/*`.
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
   * Required. A [Secret][google.cloud.secretmanager.v1beta2.Secret] with
   * initial field values.
   *
   * @generated from field: google.cloud.secretmanager.v1beta2.Secret secret = 3;
   */
  secret?: Secret;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.CreateSecretRequest.
 * Use `create(CreateSecretRequestSchema)` to create a new message.
 */
export const CreateSecretRequestSchema: GenMessage<CreateSecretRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 2);

/**
 * Request message for
 * [SecretManagerService.AddSecretVersion][google.cloud.secretmanager.v1beta2.SecretManagerService.AddSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.AddSecretVersionRequest
 */
export type AddSecretVersionRequest = Message<"google.cloud.secretmanager.v1beta2.AddSecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [Secret][google.cloud.secretmanager.v1beta2.Secret] to associate with the
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion] in the
   * format `projects/*\/secrets/*` or `projects/*\/locations/*\/secrets/*`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The secret payload of the
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion].
   *
   * @generated from field: google.cloud.secretmanager.v1beta2.SecretPayload payload = 2;
   */
  payload?: SecretPayload;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.AddSecretVersionRequest.
 * Use `create(AddSecretVersionRequestSchema)` to create a new message.
 */
export const AddSecretVersionRequestSchema: GenMessage<AddSecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 3);

/**
 * Request message for
 * [SecretManagerService.GetSecret][google.cloud.secretmanager.v1beta2.SecretManagerService.GetSecret].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.GetSecretRequest
 */
export type GetSecretRequest = Message<"google.cloud.secretmanager.v1beta2.GetSecretRequest"> & {
  /**
   * Required. The resource name of the
   * [Secret][google.cloud.secretmanager.v1beta2.Secret], in the format
   * `projects/*\/secrets/*` or `projects/*\/locations/*\/secrets/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.GetSecretRequest.
 * Use `create(GetSecretRequestSchema)` to create a new message.
 */
export const GetSecretRequestSchema: GenMessage<GetSecretRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 4);

/**
 * Request message for
 * [SecretManagerService.ListSecretVersions][google.cloud.secretmanager.v1beta2.SecretManagerService.ListSecretVersions].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.ListSecretVersionsRequest
 */
export type ListSecretVersionsRequest = Message<"google.cloud.secretmanager.v1beta2.ListSecretVersionsRequest"> & {
  /**
   * Required. The resource name of the
   * [Secret][google.cloud.secretmanager.v1beta2.Secret] associated with the
   * [SecretVersions][google.cloud.secretmanager.v1beta2.SecretVersion] to list,
   * in the format `projects/*\/secrets/*` or `projects/*\/locations/*\/secrets/*`.
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
 * Describes the message google.cloud.secretmanager.v1beta2.ListSecretVersionsRequest.
 * Use `create(ListSecretVersionsRequestSchema)` to create a new message.
 */
export const ListSecretVersionsRequestSchema: GenMessage<ListSecretVersionsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 5);

/**
 * Response message for
 * [SecretManagerService.ListSecretVersions][google.cloud.secretmanager.v1beta2.SecretManagerService.ListSecretVersions].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.ListSecretVersionsResponse
 */
export type ListSecretVersionsResponse = Message<"google.cloud.secretmanager.v1beta2.ListSecretVersionsResponse"> & {
  /**
   * The list of
   * [SecretVersions][google.cloud.secretmanager.v1beta2.SecretVersion] sorted
   * in reverse by create_time (newest first).
   *
   * @generated from field: repeated google.cloud.secretmanager.v1beta2.SecretVersion versions = 1;
   */
  versions: SecretVersion[];

  /**
   * A token to retrieve the next page of results. Pass this value in
   * [ListSecretVersionsRequest.page_token][google.cloud.secretmanager.v1beta2.ListSecretVersionsRequest.page_token]
   * to retrieve the next page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * The total number of
   * [SecretVersions][google.cloud.secretmanager.v1beta2.SecretVersion] but 0
   * when the
   * [ListSecretsRequest.filter][google.cloud.secretmanager.v1beta2.ListSecretsRequest.filter]
   * field is set.
   *
   * @generated from field: int32 total_size = 3;
   */
  totalSize: number;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.ListSecretVersionsResponse.
 * Use `create(ListSecretVersionsResponseSchema)` to create a new message.
 */
export const ListSecretVersionsResponseSchema: GenMessage<ListSecretVersionsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 6);

/**
 * Request message for
 * [SecretManagerService.GetSecretVersion][google.cloud.secretmanager.v1beta2.SecretManagerService.GetSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.GetSecretVersionRequest
 */
export type GetSecretVersionRequest = Message<"google.cloud.secretmanager.v1beta2.GetSecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion] in the
   * format `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * `projects/*\/secrets/*\/versions/latest` or
   * `projects/*\/locations/*\/secrets/*\/versions/latest` is an alias to the most
   * recently created
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion].
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.GetSecretVersionRequest.
 * Use `create(GetSecretVersionRequestSchema)` to create a new message.
 */
export const GetSecretVersionRequestSchema: GenMessage<GetSecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 7);

/**
 * Request message for
 * [SecretManagerService.UpdateSecret][google.cloud.secretmanager.v1beta2.SecretManagerService.UpdateSecret].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.UpdateSecretRequest
 */
export type UpdateSecretRequest = Message<"google.cloud.secretmanager.v1beta2.UpdateSecretRequest"> & {
  /**
   * Required. [Secret][google.cloud.secretmanager.v1beta2.Secret] with updated
   * field values.
   *
   * @generated from field: google.cloud.secretmanager.v1beta2.Secret secret = 1;
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
 * Describes the message google.cloud.secretmanager.v1beta2.UpdateSecretRequest.
 * Use `create(UpdateSecretRequestSchema)` to create a new message.
 */
export const UpdateSecretRequestSchema: GenMessage<UpdateSecretRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 8);

/**
 * Request message for
 * [SecretManagerService.AccessSecretVersion][google.cloud.secretmanager.v1beta2.SecretManagerService.AccessSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.AccessSecretVersionRequest
 */
export type AccessSecretVersionRequest = Message<"google.cloud.secretmanager.v1beta2.AccessSecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion] in the
   * format `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * `projects/*\/secrets/*\/versions/latest` or
   * `projects/*\/locations/*\/secrets/*\/versions/latest` is an alias to the most
   * recently created
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion].
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.AccessSecretVersionRequest.
 * Use `create(AccessSecretVersionRequestSchema)` to create a new message.
 */
export const AccessSecretVersionRequestSchema: GenMessage<AccessSecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 9);

/**
 * Response message for
 * [SecretManagerService.AccessSecretVersion][google.cloud.secretmanager.v1beta2.SecretManagerService.AccessSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.AccessSecretVersionResponse
 */
export type AccessSecretVersionResponse = Message<"google.cloud.secretmanager.v1beta2.AccessSecretVersionResponse"> & {
  /**
   * The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion] in the
   * format `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Secret payload
   *
   * @generated from field: google.cloud.secretmanager.v1beta2.SecretPayload payload = 2;
   */
  payload?: SecretPayload;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.AccessSecretVersionResponse.
 * Use `create(AccessSecretVersionResponseSchema)` to create a new message.
 */
export const AccessSecretVersionResponseSchema: GenMessage<AccessSecretVersionResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 10);

/**
 * Request message for
 * [SecretManagerService.DeleteSecret][google.cloud.secretmanager.v1beta2.SecretManagerService.DeleteSecret].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.DeleteSecretRequest
 */
export type DeleteSecretRequest = Message<"google.cloud.secretmanager.v1beta2.DeleteSecretRequest"> & {
  /**
   * Required. The resource name of the
   * [Secret][google.cloud.secretmanager.v1beta2.Secret] to delete in the format
   * `projects/*\/secrets/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Etag of the [Secret][google.cloud.secretmanager.v1beta2.Secret].
   * The request succeeds if it matches the etag of the currently stored secret
   * object. If the etag is omitted, the request succeeds.
   *
   * @generated from field: string etag = 2;
   */
  etag: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.DeleteSecretRequest.
 * Use `create(DeleteSecretRequestSchema)` to create a new message.
 */
export const DeleteSecretRequestSchema: GenMessage<DeleteSecretRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 11);

/**
 * Request message for
 * [SecretManagerService.DisableSecretVersion][google.cloud.secretmanager.v1beta2.SecretManagerService.DisableSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.DisableSecretVersionRequest
 */
export type DisableSecretVersionRequest = Message<"google.cloud.secretmanager.v1beta2.DisableSecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion] to
   * disable in the format `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Etag of the
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion]. The
   * request succeeds if it matches the etag of the currently stored secret
   * version object. If the etag is omitted, the request succeeds.
   *
   * @generated from field: string etag = 2;
   */
  etag: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.DisableSecretVersionRequest.
 * Use `create(DisableSecretVersionRequestSchema)` to create a new message.
 */
export const DisableSecretVersionRequestSchema: GenMessage<DisableSecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 12);

/**
 * Request message for
 * [SecretManagerService.EnableSecretVersion][google.cloud.secretmanager.v1beta2.SecretManagerService.EnableSecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.EnableSecretVersionRequest
 */
export type EnableSecretVersionRequest = Message<"google.cloud.secretmanager.v1beta2.EnableSecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion] to enable
   * in the format `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Etag of the
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion]. The
   * request succeeds if it matches the etag of the currently stored secret
   * version object. If the etag is omitted, the request succeeds.
   *
   * @generated from field: string etag = 2;
   */
  etag: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.EnableSecretVersionRequest.
 * Use `create(EnableSecretVersionRequestSchema)` to create a new message.
 */
export const EnableSecretVersionRequestSchema: GenMessage<EnableSecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 13);

/**
 * Request message for
 * [SecretManagerService.DestroySecretVersion][google.cloud.secretmanager.v1beta2.SecretManagerService.DestroySecretVersion].
 *
 * @generated from message google.cloud.secretmanager.v1beta2.DestroySecretVersionRequest
 */
export type DestroySecretVersionRequest = Message<"google.cloud.secretmanager.v1beta2.DestroySecretVersionRequest"> & {
  /**
   * Required. The resource name of the
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion] to
   * destroy in the format `projects/*\/secrets/*\/versions/*` or
   * `projects/*\/locations/*\/secrets/*\/versions/*`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Etag of the
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion]. The
   * request succeeds if it matches the etag of the currently stored secret
   * version object. If the etag is omitted, the request succeeds.
   *
   * @generated from field: string etag = 2;
   */
  etag: string;
};

/**
 * Describes the message google.cloud.secretmanager.v1beta2.DestroySecretVersionRequest.
 * Use `create(DestroySecretVersionRequestSchema)` to create a new message.
 */
export const DestroySecretVersionRequestSchema: GenMessage<DestroySecretVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_secretmanager_v1beta2_service, 14);

/**
 * Secret Manager Service
 *
 * Manages secrets and operations using those secrets. Implements a REST
 * model with the following objects:
 *
 * * [Secret][google.cloud.secretmanager.v1beta2.Secret]
 * * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion]
 *
 * @generated from service google.cloud.secretmanager.v1beta2.SecretManagerService
 */
export const SecretManagerService: GenService<{
  /**
   * Lists [Secrets][google.cloud.secretmanager.v1beta2.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.ListSecrets
   */
  listSecrets: {
    methodKind: "unary";
    input: typeof ListSecretsRequestSchema;
    output: typeof ListSecretsResponseSchema;
  },
  /**
   * Creates a new [Secret][google.cloud.secretmanager.v1beta2.Secret]
   * containing no
   * [SecretVersions][google.cloud.secretmanager.v1beta2.SecretVersion].
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.CreateSecret
   */
  createSecret: {
    methodKind: "unary";
    input: typeof CreateSecretRequestSchema;
    output: typeof SecretSchema;
  },
  /**
   * Creates a new
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion]
   * containing secret data and attaches it to an existing
   * [Secret][google.cloud.secretmanager.v1beta2.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.AddSecretVersion
   */
  addSecretVersion: {
    methodKind: "unary";
    input: typeof AddSecretVersionRequestSchema;
    output: typeof SecretVersionSchema;
  },
  /**
   * Gets metadata for a given
   * [Secret][google.cloud.secretmanager.v1beta2.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.GetSecret
   */
  getSecret: {
    methodKind: "unary";
    input: typeof GetSecretRequestSchema;
    output: typeof SecretSchema;
  },
  /**
   * Updates metadata of an existing
   * [Secret][google.cloud.secretmanager.v1beta2.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.UpdateSecret
   */
  updateSecret: {
    methodKind: "unary";
    input: typeof UpdateSecretRequestSchema;
    output: typeof SecretSchema;
  },
  /**
   * Deletes a [Secret][google.cloud.secretmanager.v1beta2.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.DeleteSecret
   */
  deleteSecret: {
    methodKind: "unary";
    input: typeof DeleteSecretRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Lists [SecretVersions][google.cloud.secretmanager.v1beta2.SecretVersion].
   * This call does not return secret data.
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.ListSecretVersions
   */
  listSecretVersions: {
    methodKind: "unary";
    input: typeof ListSecretVersionsRequestSchema;
    output: typeof ListSecretVersionsResponseSchema;
  },
  /**
   * Gets metadata for a
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion].
   *
   * `projects/*\/secrets/*\/versions/latest` is an alias to the most recently
   * created [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion].
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.GetSecretVersion
   */
  getSecretVersion: {
    methodKind: "unary";
    input: typeof GetSecretVersionRequestSchema;
    output: typeof SecretVersionSchema;
  },
  /**
   * Accesses a
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion]. This
   * call returns the secret data.
   *
   * `projects/*\/secrets/*\/versions/latest` is an alias to the most recently
   * created [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion].
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.AccessSecretVersion
   */
  accessSecretVersion: {
    methodKind: "unary";
    input: typeof AccessSecretVersionRequestSchema;
    output: typeof AccessSecretVersionResponseSchema;
  },
  /**
   * Disables a
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion].
   *
   * Sets the [state][google.cloud.secretmanager.v1beta2.SecretVersion.state] of
   * the [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion] to
   * [DISABLED][google.cloud.secretmanager.v1beta2.SecretVersion.State.DISABLED].
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.DisableSecretVersion
   */
  disableSecretVersion: {
    methodKind: "unary";
    input: typeof DisableSecretVersionRequestSchema;
    output: typeof SecretVersionSchema;
  },
  /**
   * Enables a
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion].
   *
   * Sets the [state][google.cloud.secretmanager.v1beta2.SecretVersion.state] of
   * the [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion] to
   * [ENABLED][google.cloud.secretmanager.v1beta2.SecretVersion.State.ENABLED].
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.EnableSecretVersion
   */
  enableSecretVersion: {
    methodKind: "unary";
    input: typeof EnableSecretVersionRequestSchema;
    output: typeof SecretVersionSchema;
  },
  /**
   * Destroys a
   * [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion].
   *
   * Sets the [state][google.cloud.secretmanager.v1beta2.SecretVersion.state] of
   * the [SecretVersion][google.cloud.secretmanager.v1beta2.SecretVersion] to
   * [DESTROYED][google.cloud.secretmanager.v1beta2.SecretVersion.State.DESTROYED]
   * and irrevocably destroys the secret data.
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.DestroySecretVersion
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
   * [SecretVersions][google.cloud.secretmanager.v1beta2.SecretVersion] are
   * enforced according to the policy set on the associated
   * [Secret][google.cloud.secretmanager.v1beta2.Secret].
   *
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.SetIamPolicy
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
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.GetIamPolicy
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
   * @generated from rpc google.cloud.secretmanager.v1beta2.SecretManagerService.TestIamPermissions
   */
  testIamPermissions: {
    methodKind: "unary";
    input: typeof TestIamPermissionsRequestSchema;
    output: typeof TestIamPermissionsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_secretmanager_v1beta2_service, 0);
