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
// @generated from file google/cloud/gkehub/v1beta/multiclusteringress/multiclusteringress.proto (package google.cloud.gkehub.multiclusteringress.v1beta, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/gkehub/v1beta/multiclusteringress/multiclusteringress.proto.
 */
export const file_google_cloud_gkehub_v1beta_multiclusteringress_multiclusteringress: GenFile = /*@__PURE__*/
  fileDesc("Ckhnb29nbGUvY2xvdWQvZ2tlaHViL3YxYmV0YS9tdWx0aWNsdXN0ZXJpbmdyZXNzL211bHRpY2x1c3RlcmluZ3Jlc3MucHJvdG8SLmdvb2dsZS5jbG91ZC5na2VodWIubXVsdGljbHVzdGVyaW5ncmVzcy52MWJldGEicgoLRmVhdHVyZVNwZWMSGQoRY29uZmlnX21lbWJlcnNoaXAYASABKAkSSAoHYmlsbGluZxgCIAEoDjI3Lmdvb2dsZS5jbG91ZC5na2VodWIubXVsdGljbHVzdGVyaW5ncmVzcy52MWJldGEuQmlsbGluZypJCgdCaWxsaW5nEhcKE0JJTExJTkdfVU5TUEVDSUZJRUQQABIRCg1QQVlfQVNfWU9VX0dPEAESEgoOQU5USE9TX0xJQ0VOU0UQAkLNAgoyY29tLmdvb2dsZS5jbG91ZC5na2VodWIubXVsdGljbHVzdGVyaW5ncmVzcy52MWJldGFCGE11bHRpQ2x1c3RlckluZ3Jlc3NQcm90b1ABWmRjbG91ZC5nb29nbGUuY29tL2dvL2drZWh1Yi9tdWx0aWNsdXN0ZXJpbmdyZXNzL2FwaXYxYmV0YS9tdWx0aWNsdXN0ZXJpbmdyZXNzcGI7bXVsdGljbHVzdGVyaW5ncmVzc3BiqgIuR29vZ2xlLkNsb3VkLkdrZUh1Yi5NdWx0aUNsdXN0ZXJJbmdyZXNzLlYxQmV0YcoCLkdvb2dsZVxDbG91ZFxHa2VIdWJcTXVsdGlDbHVzdGVySW5ncmVzc1xWMWJldGHqAjJHb29nbGU6OkNsb3VkOjpHa2VIdWI6Ok11bHRpQ2x1c3RlckluZ3Jlc3M6OlYxYmV0YWIGcHJvdG8z");

/**
 * **Multi-cluster Ingress**: The configuration for the MultiClusterIngress
 * feature.
 *
 * @generated from message google.cloud.gkehub.multiclusteringress.v1beta.FeatureSpec
 */
export type FeatureSpec = Message<"google.cloud.gkehub.multiclusteringress.v1beta.FeatureSpec"> & {
  /**
   * Fully-qualified Membership name which hosts the MultiClusterIngress CRD.
   * Example: `projects/foo-proj/locations/global/memberships/bar`
   *
   * @generated from field: string config_membership = 1;
   */
  configMembership: string;

  /**
   * Customer's billing structure
   *
   * @generated from field: google.cloud.gkehub.multiclusteringress.v1beta.Billing billing = 2;
   */
  billing: Billing;
};

/**
 * Describes the message google.cloud.gkehub.multiclusteringress.v1beta.FeatureSpec.
 * Use `create(FeatureSpecSchema)` to create a new message.
 */
export const FeatureSpecSchema: GenMessage<FeatureSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkehub_v1beta_multiclusteringress_multiclusteringress, 0);

/**
 * Billing identifies which billing structure the customer is using.
 *
 * @generated from enum google.cloud.gkehub.multiclusteringress.v1beta.Billing
 */
export enum Billing {
  /**
   * Unknown
   *
   * @generated from enum value: BILLING_UNSPECIFIED = 0;
   */
  BILLING_UNSPECIFIED = 0,

  /**
   * User pays a fee per-endpoint.
   *
   * @generated from enum value: PAY_AS_YOU_GO = 1;
   */
  PAY_AS_YOU_GO = 1,

  /**
   * User is paying for Anthos as a whole.
   *
   * @generated from enum value: ANTHOS_LICENSE = 2;
   */
  ANTHOS_LICENSE = 2,
}

/**
 * Describes the enum google.cloud.gkehub.multiclusteringress.v1beta.Billing.
 */
export const BillingSchema: GenEnum<Billing> = /*@__PURE__*/
  enumDesc(file_google_cloud_gkehub_v1beta_multiclusteringress_multiclusteringress, 0);
