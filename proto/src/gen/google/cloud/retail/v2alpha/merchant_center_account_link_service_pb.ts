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
// @generated from file google/cloud/retail/v2alpha/merchant_center_account_link_service.proto (package google.cloud.retail.v2alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { MerchantCenterAccountLink } from "./merchant_center_account_link_pb";
import { file_google_cloud_retail_v2alpha_merchant_center_account_link } from "./merchant_center_account_link_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/retail/v2alpha/merchant_center_account_link_service.proto.
 */
export const file_google_cloud_retail_v2alpha_merchant_center_account_link_service: GenFile = /*@__PURE__*/
  fileDesc("CkZnb29nbGUvY2xvdWQvcmV0YWlsL3YyYWxwaGEvbWVyY2hhbnRfY2VudGVyX2FjY291bnRfbGlua19zZXJ2aWNlLnByb3RvEhtnb29nbGUuY2xvdWQucmV0YWlsLnYyYWxwaGEiXgolTGlzdE1lcmNoYW50Q2VudGVyQWNjb3VudExpbmtzUmVxdWVzdBI1CgZwYXJlbnQYASABKAlCJeBBAvpBHwodcmV0YWlsLmdvb2dsZWFwaXMuY29tL0NhdGFsb2cihwEKJkxpc3RNZXJjaGFudENlbnRlckFjY291bnRMaW5rc1Jlc3BvbnNlEl0KHW1lcmNoYW50X2NlbnRlcl9hY2NvdW50X2xpbmtzGAEgAygLMjYuZ29vZ2xlLmNsb3VkLnJldGFpbC52MmFscGhhLk1lcmNoYW50Q2VudGVyQWNjb3VudExpbmsiwgEKJkNyZWF0ZU1lcmNoYW50Q2VudGVyQWNjb3VudExpbmtSZXF1ZXN0EjUKBnBhcmVudBgBIAEoCUIl4EEC+kEfCh1yZXRhaWwuZ29vZ2xlYXBpcy5jb20vQ2F0YWxvZxJhChxtZXJjaGFudF9jZW50ZXJfYWNjb3VudF9saW5rGAIgASgLMjYuZ29vZ2xlLmNsb3VkLnJldGFpbC52MmFscGhhLk1lcmNoYW50Q2VudGVyQWNjb3VudExpbmtCA+BBAiJvCiZEZWxldGVNZXJjaGFudENlbnRlckFjY291bnRMaW5rUmVxdWVzdBJFCgRuYW1lGAEgASgJQjfgQQL6QTEKL3JldGFpbC5nb29nbGVhcGlzLmNvbS9NZXJjaGFudENlbnRlckFjY291bnRMaW5rMv4HCiBNZXJjaGFudENlbnRlckFjY291bnRMaW5rU2VydmljZRKKAgoeTGlzdE1lcmNoYW50Q2VudGVyQWNjb3VudExpbmtzEkIuZ29vZ2xlLmNsb3VkLnJldGFpbC52MmFscGhhLkxpc3RNZXJjaGFudENlbnRlckFjY291bnRMaW5rc1JlcXVlc3QaQy5nb29nbGUuY2xvdWQucmV0YWlsLnYyYWxwaGEuTGlzdE1lcmNoYW50Q2VudGVyQWNjb3VudExpbmtzUmVzcG9uc2UiX9pBBnBhcmVudILT5JMCUBJOL3YyYWxwaGEve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2NhdGFsb2dzLyp9L21lcmNoYW50Q2VudGVyQWNjb3VudExpbmtzEqEDCh9DcmVhdGVNZXJjaGFudENlbnRlckFjY291bnRMaW5rEkMuZ29vZ2xlLmNsb3VkLnJldGFpbC52MmFscGhhLkNyZWF0ZU1lcmNoYW50Q2VudGVyQWNjb3VudExpbmtSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiKZAspBfAo1Z29vZ2xlLmNsb3VkLnJldGFpbC52MmFscGhhLk1lcmNoYW50Q2VudGVyQWNjb3VudExpbmsSQ2dvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5DcmVhdGVNZXJjaGFudENlbnRlckFjY291bnRMaW5rTWV0YWRhdGHaQSNwYXJlbnQsbWVyY2hhbnRfY2VudGVyX2FjY291bnRfbGlua4LT5JMCbjocbWVyY2hhbnRfY2VudGVyX2FjY291bnRfbGluayJOL3YyYWxwaGEve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2NhdGFsb2dzLyp9L21lcmNoYW50Q2VudGVyQWNjb3VudExpbmtzEt0BCh9EZWxldGVNZXJjaGFudENlbnRlckFjY291bnRMaW5rEkMuZ29vZ2xlLmNsb3VkLnJldGFpbC52MmFscGhhLkRlbGV0ZU1lcmNoYW50Q2VudGVyQWNjb3VudExpbmtSZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5Il3aQQRuYW1lgtPkkwJQKk4vdjJhbHBoYS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2NhdGFsb2dzLyovbWVyY2hhbnRDZW50ZXJBY2NvdW50TGlua3MvKn0aScpBFXJldGFpbC5nb29nbGVhcGlzLmNvbdJBLmh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm1C6QEKH2NvbS5nb29nbGUuY2xvdWQucmV0YWlsLnYyYWxwaGFCJU1lcmNoYW50Q2VudGVyQWNjb3VudExpbmtTZXJ2aWNlUHJvdG9QAVo3Y2xvdWQuZ29vZ2xlLmNvbS9nby9yZXRhaWwvYXBpdjJhbHBoYS9yZXRhaWxwYjtyZXRhaWxwYqICBlJFVEFJTKoCG0dvb2dsZS5DbG91ZC5SZXRhaWwuVjJBbHBoYcoCG0dvb2dsZVxDbG91ZFxSZXRhaWxcVjJhbHBoYeoCHkdvb2dsZTo6Q2xvdWQ6OlJldGFpbDo6VjJhbHBoYWIGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_retail_v2alpha_merchant_center_account_link, file_google_longrunning_operations, file_google_protobuf_empty]);

/**
 * Request for
 * [MerchantCenterAccountLinkService.ListMerchantCenterAccountLinks][google.cloud.retail.v2alpha.MerchantCenterAccountLinkService.ListMerchantCenterAccountLinks]
 * method.
 *
 * @generated from message google.cloud.retail.v2alpha.ListMerchantCenterAccountLinksRequest
 */
export type ListMerchantCenterAccountLinksRequest = Message<"google.cloud.retail.v2alpha.ListMerchantCenterAccountLinksRequest"> & {
  /**
   * Required. The parent Catalog of the resource.
   * It must match this format:
   * `projects/{PROJECT_NUMBER}/locations/global/catalogs/{CATALOG_ID}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;
};

/**
 * Describes the message google.cloud.retail.v2alpha.ListMerchantCenterAccountLinksRequest.
 * Use `create(ListMerchantCenterAccountLinksRequestSchema)` to create a new message.
 */
export const ListMerchantCenterAccountLinksRequestSchema: GenMessage<ListMerchantCenterAccountLinksRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_merchant_center_account_link_service, 0);

/**
 * Response for
 * [MerchantCenterAccountLinkService.ListMerchantCenterAccountLinks][google.cloud.retail.v2alpha.MerchantCenterAccountLinkService.ListMerchantCenterAccountLinks]
 * method.
 *
 * @generated from message google.cloud.retail.v2alpha.ListMerchantCenterAccountLinksResponse
 */
export type ListMerchantCenterAccountLinksResponse = Message<"google.cloud.retail.v2alpha.ListMerchantCenterAccountLinksResponse"> & {
  /**
   * The links.
   *
   * @generated from field: repeated google.cloud.retail.v2alpha.MerchantCenterAccountLink merchant_center_account_links = 1;
   */
  merchantCenterAccountLinks: MerchantCenterAccountLink[];
};

/**
 * Describes the message google.cloud.retail.v2alpha.ListMerchantCenterAccountLinksResponse.
 * Use `create(ListMerchantCenterAccountLinksResponseSchema)` to create a new message.
 */
export const ListMerchantCenterAccountLinksResponseSchema: GenMessage<ListMerchantCenterAccountLinksResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_merchant_center_account_link_service, 1);

/**
 * Request for
 * [MerchantCenterAccountLinkService.CreateMerchantCenterAccountLink][google.cloud.retail.v2alpha.MerchantCenterAccountLinkService.CreateMerchantCenterAccountLink]
 * method.
 *
 * @generated from message google.cloud.retail.v2alpha.CreateMerchantCenterAccountLinkRequest
 */
export type CreateMerchantCenterAccountLinkRequest = Message<"google.cloud.retail.v2alpha.CreateMerchantCenterAccountLinkRequest"> & {
  /**
   * Required. The branch resource where this MerchantCenterAccountLink will be
   * created. Format:
   * `projects/{PROJECT_NUMBER}/locations/global/catalogs/{CATALOG_ID}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The
   * [MerchantCenterAccountLink][google.cloud.retail.v2alpha.MerchantCenterAccountLink]
   * to create.
   *
   * If the caller does not have permission to create the
   * [MerchantCenterAccountLink][google.cloud.retail.v2alpha.MerchantCenterAccountLink],
   * regardless of whether or not it exists, a PERMISSION_DENIED error is
   * returned.
   *
   * @generated from field: google.cloud.retail.v2alpha.MerchantCenterAccountLink merchant_center_account_link = 2;
   */
  merchantCenterAccountLink?: MerchantCenterAccountLink;
};

/**
 * Describes the message google.cloud.retail.v2alpha.CreateMerchantCenterAccountLinkRequest.
 * Use `create(CreateMerchantCenterAccountLinkRequestSchema)` to create a new message.
 */
export const CreateMerchantCenterAccountLinkRequestSchema: GenMessage<CreateMerchantCenterAccountLinkRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_merchant_center_account_link_service, 2);

/**
 * Request for
 * [MerchantCenterAccountLinkService.DeleteMerchantCenterAccountLink][google.cloud.retail.v2alpha.MerchantCenterAccountLinkService.DeleteMerchantCenterAccountLink]
 * method.
 *
 * @generated from message google.cloud.retail.v2alpha.DeleteMerchantCenterAccountLinkRequest
 */
export type DeleteMerchantCenterAccountLinkRequest = Message<"google.cloud.retail.v2alpha.DeleteMerchantCenterAccountLinkRequest"> & {
  /**
   * Required. Full resource name. Format:
   * `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/merchantCenterAccountLinks/{merchant_center_account_link_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.retail.v2alpha.DeleteMerchantCenterAccountLinkRequest.
 * Use `create(DeleteMerchantCenterAccountLinkRequestSchema)` to create a new message.
 */
export const DeleteMerchantCenterAccountLinkRequestSchema: GenMessage<DeleteMerchantCenterAccountLinkRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_merchant_center_account_link_service, 3);

/**
 * Merchant Center Link service to link a Branch to a Merchant Center Account.
 *
 * @generated from service google.cloud.retail.v2alpha.MerchantCenterAccountLinkService
 */
export const MerchantCenterAccountLinkService: GenService<{
  /**
   * Lists all
   * [MerchantCenterAccountLink][google.cloud.retail.v2alpha.MerchantCenterAccountLink]s
   * under the specified parent [Catalog][google.cloud.retail.v2alpha.Catalog].
   *
   * @generated from rpc google.cloud.retail.v2alpha.MerchantCenterAccountLinkService.ListMerchantCenterAccountLinks
   */
  listMerchantCenterAccountLinks: {
    methodKind: "unary";
    input: typeof ListMerchantCenterAccountLinksRequestSchema;
    output: typeof ListMerchantCenterAccountLinksResponseSchema;
  },
  /**
   * Creates a
   * [MerchantCenterAccountLink][google.cloud.retail.v2alpha.MerchantCenterAccountLink].
   *
   * @generated from rpc google.cloud.retail.v2alpha.MerchantCenterAccountLinkService.CreateMerchantCenterAccountLink
   */
  createMerchantCenterAccountLink: {
    methodKind: "unary";
    input: typeof CreateMerchantCenterAccountLinkRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Deletes a
   * [MerchantCenterAccountLink][google.cloud.retail.v2alpha.MerchantCenterAccountLink].
   * If the
   * [MerchantCenterAccountLink][google.cloud.retail.v2alpha.MerchantCenterAccountLink]
   * to delete does not exist, a NOT_FOUND error is returned.
   *
   * @generated from rpc google.cloud.retail.v2alpha.MerchantCenterAccountLinkService.DeleteMerchantCenterAccountLink
   */
  deleteMerchantCenterAccountLink: {
    methodKind: "unary";
    input: typeof DeleteMerchantCenterAccountLinkRequestSchema;
    output: typeof EmptySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_retail_v2alpha_merchant_center_account_link_service, 0);
