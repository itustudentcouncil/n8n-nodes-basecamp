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
// @generated from file google/cloud/kms/inventory/v1/key_dashboard_service.proto (package google.cloud.kms.inventory.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { CryptoKey } from "../../v1/resources_pb";
import { file_google_cloud_kms_v1_resources } from "../../v1/resources_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/kms/inventory/v1/key_dashboard_service.proto.
 */
export const file_google_cloud_kms_inventory_v1_key_dashboard_service: GenFile = /*@__PURE__*/
  fileDesc("Cjlnb29nbGUvY2xvdWQva21zL2ludmVudG9yeS92MS9rZXlfZGFzaGJvYXJkX3NlcnZpY2UucHJvdG8SHWdvb2dsZS5jbG91ZC5rbXMuaW52ZW50b3J5LnYxIo0BChVMaXN0Q3J5cHRvS2V5c1JlcXVlc3QSQwoGcGFyZW50GAEgASgJQjPgQQL6QS0KK2Nsb3VkcmVzb3VyY2VtYW5hZ2VyLmdvb2dsZWFwaXMuY29tL1Byb2plY3QSFgoJcGFnZV9zaXplGAIgASgFQgPgQQESFwoKcGFnZV90b2tlbhgDIAEoCUID4EEBImYKFkxpc3RDcnlwdG9LZXlzUmVzcG9uc2USMwoLY3J5cHRvX2tleXMYASADKAsyHi5nb29nbGUuY2xvdWQua21zLnYxLkNyeXB0b0tleRIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkymwIKE0tleURhc2hib2FyZFNlcnZpY2USsgEKDkxpc3RDcnlwdG9LZXlzEjQuZ29vZ2xlLmNsb3VkLmttcy5pbnZlbnRvcnkudjEuTGlzdENyeXB0b0tleXNSZXF1ZXN0GjUuZ29vZ2xlLmNsb3VkLmttcy5pbnZlbnRvcnkudjEuTGlzdENyeXB0b0tleXNSZXNwb25zZSIz2kEGcGFyZW50gtPkkwIkEiIvdjEve3BhcmVudD1wcm9qZWN0cy8qfS9jcnlwdG9LZXlzGk/KQRtrbXNpbnZlbnRvcnkuZ29vZ2xlYXBpcy5jb23SQS5odHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtQsMBCiFjb20uZ29vZ2xlLmNsb3VkLmttcy5pbnZlbnRvcnkudjFCGEtleURhc2hib2FyZFNlcnZpY2VQcm90b1ABWj9jbG91ZC5nb29nbGUuY29tL2dvL2ttcy9pbnZlbnRvcnkvYXBpdjEvaW52ZW50b3J5cGI7aW52ZW50b3J5cGL4AQGqAh1Hb29nbGUuQ2xvdWQuS21zLkludmVudG9yeS5WMcoCHUdvb2dsZVxDbG91ZFxLbXNcSW52ZW50b3J5XFYxYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_kms_v1_resources]);

/**
 * Request message for
 * [KeyDashboardService.ListCryptoKeys][google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys].
 *
 * @generated from message google.cloud.kms.inventory.v1.ListCryptoKeysRequest
 */
export type ListCryptoKeysRequest = Message<"google.cloud.kms.inventory.v1.ListCryptoKeysRequest"> & {
  /**
   * Required. The Google Cloud project for which to retrieve key metadata, in
   * the format `projects/*`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. The maximum number of keys to return. The service may return
   * fewer than this value. If unspecified, at most 1000 keys will be returned.
   * The maximum value is 1000; values above 1000 will be coerced to 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. Pass this into a subsequent request in order to receive the next
   * page of results.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.kms.inventory.v1.ListCryptoKeysRequest.
 * Use `create(ListCryptoKeysRequestSchema)` to create a new message.
 */
export const ListCryptoKeysRequestSchema: GenMessage<ListCryptoKeysRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_kms_inventory_v1_key_dashboard_service, 0);

/**
 * Response message for
 * [KeyDashboardService.ListCryptoKeys][google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys].
 *
 * @generated from message google.cloud.kms.inventory.v1.ListCryptoKeysResponse
 */
export type ListCryptoKeysResponse = Message<"google.cloud.kms.inventory.v1.ListCryptoKeysResponse"> & {
  /**
   * The list of [CryptoKeys][google.cloud.kms.v1.CryptoKey].
   *
   * @generated from field: repeated google.cloud.kms.v1.CryptoKey crypto_keys = 1;
   */
  cryptoKeys: CryptoKey[];

  /**
   * The page token returned from the previous response if the next page is
   * desired.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.kms.inventory.v1.ListCryptoKeysResponse.
 * Use `create(ListCryptoKeysResponseSchema)` to create a new message.
 */
export const ListCryptoKeysResponseSchema: GenMessage<ListCryptoKeysResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_kms_inventory_v1_key_dashboard_service, 1);

/**
 * Provides a cross-region view of all Cloud KMS keys in a given Cloud project.
 *
 * @generated from service google.cloud.kms.inventory.v1.KeyDashboardService
 */
export const KeyDashboardService: GenService<{
  /**
   * Returns cryptographic keys managed by Cloud KMS in a given Cloud project.
   * Note that this data is sourced from snapshots, meaning it may not
   * completely reflect the actual state of key metadata at call time.
   *
   * @generated from rpc google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys
   */
  listCryptoKeys: {
    methodKind: "unary";
    input: typeof ListCryptoKeysRequestSchema;
    output: typeof ListCryptoKeysResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_kms_inventory_v1_key_dashboard_service, 0);
