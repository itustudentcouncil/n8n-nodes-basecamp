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
// @generated from file google/cloud/iap/v1beta1/service.proto (package google.cloud.iap.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import type { GetIamPolicyRequestSchema, SetIamPolicyRequestSchema, TestIamPermissionsRequestSchema, TestIamPermissionsResponseSchema } from "../../../iam/v1/iam_policy_pb";
import { file_google_iam_v1_iam_policy } from "../../../iam/v1/iam_policy_pb";
import type { PolicySchema } from "../../../iam/v1/policy_pb";
import { file_google_iam_v1_policy } from "../../../iam/v1/policy_pb";

/**
 * Describes the file google/cloud/iap/v1beta1/service.proto.
 */
export const file_google_cloud_iap_v1beta1_service: GenFile = /*@__PURE__*/
  fileDesc("CiZnb29nbGUvY2xvdWQvaWFwL3YxYmV0YTEvc2VydmljZS5wcm90bxIYZ29vZ2xlLmNsb3VkLmlhcC52MWJldGExMoAECh5JZGVudGl0eUF3YXJlUHJveHlBZG1pblYxQmV0YTESeQoMU2V0SWFtUG9saWN5EiIuZ29vZ2xlLmlhbS52MS5TZXRJYW1Qb2xpY3lSZXF1ZXN0GhUuZ29vZ2xlLmlhbS52MS5Qb2xpY3kiLoLT5JMCKDoBKiIjL3YxYmV0YTEve3Jlc291cmNlPSoqfTpzZXRJYW1Qb2xpY3kSeQoMR2V0SWFtUG9saWN5EiIuZ29vZ2xlLmlhbS52MS5HZXRJYW1Qb2xpY3lSZXF1ZXN0GhUuZ29vZ2xlLmlhbS52MS5Qb2xpY3kiLoLT5JMCKDoBKiIjL3YxYmV0YTEve3Jlc291cmNlPSoqfTpnZXRJYW1Qb2xpY3kSnwEKElRlc3RJYW1QZXJtaXNzaW9ucxIoLmdvb2dsZS5pYW0udjEuVGVzdElhbVBlcm1pc3Npb25zUmVxdWVzdBopLmdvb2dsZS5pYW0udjEuVGVzdElhbVBlcm1pc3Npb25zUmVzcG9uc2UiNILT5JMCLjoBKiIpL3YxYmV0YTEve3Jlc291cmNlPSoqfTp0ZXN0SWFtUGVybWlzc2lvbnMaRspBEmlhcC5nb29nbGVhcGlzLmNvbdJBLmh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm1CUAocY29tLmdvb2dsZS5jbG91ZC5pYXAudjFiZXRhMVABWi5jbG91ZC5nb29nbGUuY29tL2dvL2lhcC9hcGl2MWJldGExL2lhcHBiO2lhcHBiYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_iam_v1_iam_policy, file_google_iam_v1_policy]);

/**
 * APIs for Identity-Aware Proxy Admin configurations.
 *
 * @generated from service google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1
 */
export const IdentityAwareProxyAdminV1Beta1: GenService<{
  /**
   * Sets the access control policy for an Identity-Aware Proxy protected
   * resource. Replaces any existing policy.
   * More information about managing access via IAP can be found at:
   * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
   *
   * @generated from rpc google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.SetIamPolicy
   */
  setIamPolicy: {
    methodKind: "unary";
    input: typeof SetIamPolicyRequestSchema;
    output: typeof PolicySchema;
  },
  /**
   * Gets the access control policy for an Identity-Aware Proxy protected
   * resource.
   * More information about managing access via IAP can be found at:
   * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
   *
   * @generated from rpc google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.GetIamPolicy
   */
  getIamPolicy: {
    methodKind: "unary";
    input: typeof GetIamPolicyRequestSchema;
    output: typeof PolicySchema;
  },
  /**
   * Returns permissions that a caller has on the Identity-Aware Proxy protected
   * resource. If the resource does not exist or the caller does not have
   * Identity-Aware Proxy permissions a [google.rpc.Code.PERMISSION_DENIED]
   * will be returned.
   * More information about managing access via IAP can be found at:
   * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
   *
   * @generated from rpc google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.TestIamPermissions
   */
  testIamPermissions: {
    methodKind: "unary";
    input: typeof TestIamPermissionsRequestSchema;
    output: typeof TestIamPermissionsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_iap_v1beta1_service, 0);
