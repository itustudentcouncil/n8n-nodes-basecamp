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
// @generated from file google/shopping/merchant/quota/v1beta/quota.proto (package google.shopping.merchant.quota.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/shopping/merchant/quota/v1beta/quota.proto.
 */
export const file_google_shopping_merchant_quota_v1beta_quota: GenFile = /*@__PURE__*/
  fileDesc("CjFnb29nbGUvc2hvcHBpbmcvbWVyY2hhbnQvcXVvdGEvdjFiZXRhL3F1b3RhLnByb3RvEiVnb29nbGUuc2hvcHBpbmcubWVyY2hhbnQucXVvdGEudjFiZXRhIq8CCgpRdW90YUdyb3VwEhEKBG5hbWUYASABKAlCA+BBCBIYCgtxdW90YV91c2FnZRgCIAEoA0ID4EEDEhgKC3F1b3RhX2xpbWl0GAMgASgDQgPgQQMSHwoScXVvdGFfbWludXRlX2xpbWl0GAUgASgDQgPgQQMSUQoObWV0aG9kX2RldGFpbHMYBCADKAsyNC5nb29nbGUuc2hvcHBpbmcubWVyY2hhbnQucXVvdGEudjFiZXRhLk1ldGhvZERldGFpbHNCA+BBAzpm6kFjCiVtZXJjaGFudGFwaS5nb29nbGVhcGlzLmNvbS9RdW90YUdyb3VwEiFhY2NvdW50cy97YWNjb3VudH0vZ3JvdXBzL3tncm91cH0qC3F1b3RhR3JvdXBzMgpxdW90YUdyb3VwImIKDU1ldGhvZERldGFpbHMSEwoGbWV0aG9kGAEgASgJQgPgQQMSFAoHdmVyc2lvbhgCIAEoCUID4EEDEhMKBnN1YmFwaRgDIAEoCUID4EEDEhEKBHBhdGgYBCABKAlCA+BBAyKIAQoWTGlzdFF1b3RhR3JvdXBzUmVxdWVzdBI9CgZwYXJlbnQYASABKAlCLeBBAvpBJxIlbWVyY2hhbnRhcGkuZ29vZ2xlYXBpcy5jb20vUXVvdGFHcm91cBIWCglwYWdlX3NpemUYAiABKAVCA+BBARIXCgpwYWdlX3Rva2VuGAMgASgJQgPgQQEiewoXTGlzdFF1b3RhR3JvdXBzUmVzcG9uc2USRwoMcXVvdGFfZ3JvdXBzGAEgAygLMjEuZ29vZ2xlLnNob3BwaW5nLm1lcmNoYW50LnF1b3RhLnYxYmV0YS5RdW90YUdyb3VwEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCTKlAgoMUXVvdGFTZXJ2aWNlEssBCg9MaXN0UXVvdGFHcm91cHMSPS5nb29nbGUuc2hvcHBpbmcubWVyY2hhbnQucXVvdGEudjFiZXRhLkxpc3RRdW90YUdyb3Vwc1JlcXVlc3QaPi5nb29nbGUuc2hvcHBpbmcubWVyY2hhbnQucXVvdGEudjFiZXRhLkxpc3RRdW90YUdyb3Vwc1Jlc3BvbnNlIjnaQQZwYXJlbnSC0+STAioSKC9xdW90YS92MWJldGEve3BhcmVudD1hY2NvdW50cy8qfS9xdW90YXMaR8pBGm1lcmNoYW50YXBpLmdvb2dsZWFwaXMuY29t0kEnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jb250ZW50QrsBCiljb20uZ29vZ2xlLnNob3BwaW5nLm1lcmNoYW50LnF1b3RhLnYxYmV0YUIKUXVvdGFQcm90b1ABWkVjbG91ZC5nb29nbGUuY29tL2dvL3Nob3BwaW5nL21lcmNoYW50L3F1b3RhL2FwaXYxYmV0YS9xdW90YXBiO3F1b3RhcGLqQTgKIm1lcmNoYW50YXBpLmdvb2dsZWFwaXMuY29tL0FjY291bnQSEmFjY291bnRzL3thY2NvdW50fWIGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource]);

/**
 * The group information for methods in the Merchant API. The quota is shared
 * between all methods in the group. Even if none of the methods within the
 * group have usage the information for the group is returned.
 *
 * @generated from message google.shopping.merchant.quota.v1beta.QuotaGroup
 */
export type QuotaGroup = Message<"google.shopping.merchant.quota.v1beta.QuotaGroup"> & {
  /**
   * Identifier. The resource name of the quota group.
   * Format: accounts/{account}/quotas/{group}
   * Note: There is no guarantee on the format of {group}
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. The current quota usage, meaning the number of calls already
   * made on a given day to the methods in the group. The daily quota limits
   * reset at at 12:00 PM midday UTC.
   *
   * @generated from field: int64 quota_usage = 2;
   */
  quotaUsage: bigint;

  /**
   * Output only. The maximum number of calls allowed per day for the group.
   *
   * @generated from field: int64 quota_limit = 3;
   */
  quotaLimit: bigint;

  /**
   * Output only. The maximum number of calls allowed per minute for the group.
   *
   * @generated from field: int64 quota_minute_limit = 5;
   */
  quotaMinuteLimit: bigint;

  /**
   * Output only. List of all methods group quota applies to.
   *
   * @generated from field: repeated google.shopping.merchant.quota.v1beta.MethodDetails method_details = 4;
   */
  methodDetails: MethodDetails[];
};

/**
 * Describes the message google.shopping.merchant.quota.v1beta.QuotaGroup.
 * Use `create(QuotaGroupSchema)` to create a new message.
 */
export const QuotaGroupSchema: GenMessage<QuotaGroup> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_quota_v1beta_quota, 0);

/**
 * The method details per method in the Merchant API.
 *
 * @generated from message google.shopping.merchant.quota.v1beta.MethodDetails
 */
export type MethodDetails = Message<"google.shopping.merchant.quota.v1beta.MethodDetails"> & {
  /**
   * Output only. The name of the method for example `products.list`.
   *
   * @generated from field: string method = 1;
   */
  method: string;

  /**
   * Output only. The API version that the method belongs to.
   *
   * @generated from field: string version = 2;
   */
  version: string;

  /**
   * Output only. The sub-API that the method belongs to.
   *
   * @generated from field: string subapi = 3;
   */
  subapi: string;

  /**
   * Output only. The path for the method such as
   * `products/v1/productInputs.insert`
   *
   * @generated from field: string path = 4;
   */
  path: string;
};

/**
 * Describes the message google.shopping.merchant.quota.v1beta.MethodDetails.
 * Use `create(MethodDetailsSchema)` to create a new message.
 */
export const MethodDetailsSchema: GenMessage<MethodDetails> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_quota_v1beta_quota, 1);

/**
 * Request message for the ListQuotaGroups method.
 *
 * @generated from message google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest
 */
export type ListQuotaGroupsRequest = Message<"google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest"> & {
  /**
   * Required. The merchant account who owns the collection of method quotas
   * Format: accounts/{account}
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. The maximum number of quotas to return in the response, used
   * for paging. Defaults to 500; values above 1000 will be coerced to 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. Token (if provided) to retrieve the subsequent page. All other
   * parameters must match the original call that provided the page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.shopping.merchant.quota.v1beta.ListQuotaGroupsRequest.
 * Use `create(ListQuotaGroupsRequestSchema)` to create a new message.
 */
export const ListQuotaGroupsRequestSchema: GenMessage<ListQuotaGroupsRequest> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_quota_v1beta_quota, 2);

/**
 * Response message for the ListMethodGroups method.
 *
 * @generated from message google.shopping.merchant.quota.v1beta.ListQuotaGroupsResponse
 */
export type ListQuotaGroupsResponse = Message<"google.shopping.merchant.quota.v1beta.ListQuotaGroupsResponse"> & {
  /**
   * The methods, current quota usage and limits per each group. The quota is
   * shared between all methods in the group. The groups are sorted in
   * descending order based on
   * [quotaUsage][google.shopping.merchant.quota.v1main.QuotaGroup.quota_usage].
   *
   * @generated from field: repeated google.shopping.merchant.quota.v1beta.QuotaGroup quota_groups = 1;
   */
  quotaGroups: QuotaGroup[];

  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.shopping.merchant.quota.v1beta.ListQuotaGroupsResponse.
 * Use `create(ListQuotaGroupsResponseSchema)` to create a new message.
 */
export const ListQuotaGroupsResponseSchema: GenMessage<ListQuotaGroupsResponse> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_quota_v1beta_quota, 3);

/**
 * Service to get method call quota information per Merchant API method.
 *
 * @generated from service google.shopping.merchant.quota.v1beta.QuotaService
 */
export const QuotaService: GenService<{
  /**
   * Lists the daily call quota and usage per group for your Merchant
   * Center account.
   *
   * @generated from rpc google.shopping.merchant.quota.v1beta.QuotaService.ListQuotaGroups
   */
  listQuotaGroups: {
    methodKind: "unary";
    input: typeof ListQuotaGroupsRequestSchema;
    output: typeof ListQuotaGroupsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_shopping_merchant_quota_v1beta_quota, 0);
