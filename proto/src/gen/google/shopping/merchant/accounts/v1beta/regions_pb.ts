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
// @generated from file google/shopping/merchant/accounts/v1beta/regions.proto (package google.shopping.merchant.accounts.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { EmptySchema, FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/shopping/merchant/accounts/v1beta/regions.proto.
 */
export const file_google_shopping_merchant_accounts_v1beta_regions: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvc2hvcHBpbmcvbWVyY2hhbnQvYWNjb3VudHMvdjFiZXRhL3JlZ2lvbnMucHJvdG8SKGdvb2dsZS5zaG9wcGluZy5tZXJjaGFudC5hY2NvdW50cy52MWJldGEiSwoQR2V0UmVnaW9uUmVxdWVzdBI3CgRuYW1lGAEgASgJQingQQL6QSMKIW1lcmNoYW50YXBpLmdvb2dsZWFwaXMuY29tL1JlZ2lvbiKwAQoTQ3JlYXRlUmVnaW9uUmVxdWVzdBI6CgZwYXJlbnQYASABKAlCKuBBAvpBJAoibWVyY2hhbnRhcGkuZ29vZ2xlYXBpcy5jb20vQWNjb3VudBIWCglyZWdpb25faWQYAiABKAlCA+BBAhJFCgZyZWdpb24YAyABKAsyMC5nb29nbGUuc2hvcHBpbmcubWVyY2hhbnQuYWNjb3VudHMudjFiZXRhLlJlZ2lvbkID4EECIpIBChNVcGRhdGVSZWdpb25SZXF1ZXN0EkUKBnJlZ2lvbhgBIAEoCzIwLmdvb2dsZS5zaG9wcGluZy5tZXJjaGFudC5hY2NvdW50cy52MWJldGEuUmVnaW9uQgPgQQISNAoLdXBkYXRlX21hc2sYAiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrQgPgQQEiTgoTRGVsZXRlUmVnaW9uUmVxdWVzdBI3CgRuYW1lGAEgASgJQingQQL6QSMKIW1lcmNoYW50YXBpLmdvb2dsZWFwaXMuY29tL1JlZ2lvbiKBAQoSTGlzdFJlZ2lvbnNSZXF1ZXN0EjoKBnBhcmVudBgBIAEoCUIq4EEC+kEkCiJtZXJjaGFudGFwaS5nb29nbGVhcGlzLmNvbS9BY2NvdW50EhYKCXBhZ2Vfc2l6ZRgCIAEoBUID4EEBEhcKCnBhZ2VfdG9rZW4YAyABKAlCA+BBASJxChNMaXN0UmVnaW9uc1Jlc3BvbnNlEkEKB3JlZ2lvbnMYASADKAsyMC5nb29nbGUuc2hvcHBpbmcubWVyY2hhbnQuYWNjb3VudHMudjFiZXRhLlJlZ2lvbhIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAki8QUKBlJlZ2lvbhIRCgRuYW1lGAEgASgJQgPgQQgSHgoMZGlzcGxheV9uYW1lGAIgASgJQgPgQQFIAIgBARJeChBwb3N0YWxfY29kZV9hcmVhGAMgASgLMj8uZ29vZ2xlLnNob3BwaW5nLm1lcmNoYW50LmFjY291bnRzLnYxYmV0YS5SZWdpb24uUG9zdGFsQ29kZUFyZWFCA+BBARJbCg5nZW90YXJnZXRfYXJlYRgEIAEoCzI+Lmdvb2dsZS5zaG9wcGluZy5tZXJjaGFudC5hY2NvdW50cy52MWJldGEuUmVnaW9uLkdlb1RhcmdldEFyZWFCA+BBARJEChtyZWdpb25hbF9pbnZlbnRvcnlfZWxpZ2libGUYBSABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlQgPgQQMSOgoRc2hpcHBpbmdfZWxpZ2libGUYBiABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlQgPgQQMazwEKDlBvc3RhbENvZGVBcmVhEhgKC3JlZ2lvbl9jb2RlGAEgASgJQgPgQQISagoMcG9zdGFsX2NvZGVzGAIgAygLMk8uZ29vZ2xlLnNob3BwaW5nLm1lcmNoYW50LmFjY291bnRzLnYxYmV0YS5SZWdpb24uUG9zdGFsQ29kZUFyZWEuUG9zdGFsQ29kZVJhbmdlQgPgQQIaNwoPUG9zdGFsQ29kZVJhbmdlEhIKBWJlZ2luGAEgASgJQgPgQQISEAoDZW5kGAIgASgJQgPgQQEaNAoNR2VvVGFyZ2V0QXJlYRIjChZnZW90YXJnZXRfY3JpdGVyaWFfaWRzGAEgAygDQgPgQQI6XOpBWQohbWVyY2hhbnRhcGkuZ29vZ2xlYXBpcy5jb20vUmVnaW9uEiNhY2NvdW50cy97YWNjb3VudH0vcmVnaW9ucy97cmVnaW9ufSoHcmVnaW9uczIGcmVnaW9uQg8KDV9kaXNwbGF5X25hbWUyuQgKDlJlZ2lvbnNTZXJ2aWNlErYBCglHZXRSZWdpb24SOi5nb29nbGUuc2hvcHBpbmcubWVyY2hhbnQuYWNjb3VudHMudjFiZXRhLkdldFJlZ2lvblJlcXVlc3QaMC5nb29nbGUuc2hvcHBpbmcubWVyY2hhbnQuYWNjb3VudHMudjFiZXRhLlJlZ2lvbiI72kEEbmFtZYLT5JMCLhIsL2FjY291bnRzL3YxYmV0YS97bmFtZT1hY2NvdW50cy8qL3JlZ2lvbnMvKn0S1wEKDENyZWF0ZVJlZ2lvbhI9Lmdvb2dsZS5zaG9wcGluZy5tZXJjaGFudC5hY2NvdW50cy52MWJldGEuQ3JlYXRlUmVnaW9uUmVxdWVzdBowLmdvb2dsZS5zaG9wcGluZy5tZXJjaGFudC5hY2NvdW50cy52MWJldGEuUmVnaW9uIlbaQRdwYXJlbnQscmVnaW9uLHJlZ2lvbl9pZILT5JMCNjoGcmVnaW9uIiwvYWNjb3VudHMvdjFiZXRhL3twYXJlbnQ9YWNjb3VudHMvKn0vcmVnaW9ucxLZAQoMVXBkYXRlUmVnaW9uEj0uZ29vZ2xlLnNob3BwaW5nLm1lcmNoYW50LmFjY291bnRzLnYxYmV0YS5VcGRhdGVSZWdpb25SZXF1ZXN0GjAuZ29vZ2xlLnNob3BwaW5nLm1lcmNoYW50LmFjY291bnRzLnYxYmV0YS5SZWdpb24iWNpBEnJlZ2lvbix1cGRhdGVfbWFza4LT5JMCPToGcmVnaW9uMjMvYWNjb3VudHMvdjFiZXRhL3tyZWdpb24ubmFtZT1hY2NvdW50cy8qL3JlZ2lvbnMvKn0SogEKDERlbGV0ZVJlZ2lvbhI9Lmdvb2dsZS5zaG9wcGluZy5tZXJjaGFudC5hY2NvdW50cy52MWJldGEuRGVsZXRlUmVnaW9uUmVxdWVzdBoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSI72kEEbmFtZYLT5JMCLiosL2FjY291bnRzL3YxYmV0YS97bmFtZT1hY2NvdW50cy8qL3JlZ2lvbnMvKn0SyQEKC0xpc3RSZWdpb25zEjwuZ29vZ2xlLnNob3BwaW5nLm1lcmNoYW50LmFjY291bnRzLnYxYmV0YS5MaXN0UmVnaW9uc1JlcXVlc3QaPS5nb29nbGUuc2hvcHBpbmcubWVyY2hhbnQuYWNjb3VudHMudjFiZXRhLkxpc3RSZWdpb25zUmVzcG9uc2UiPdpBBnBhcmVudILT5JMCLhIsL2FjY291bnRzL3YxYmV0YS97cGFyZW50PWFjY291bnRzLyp9L3JlZ2lvbnMaR8pBGm1lcmNoYW50YXBpLmdvb2dsZWFwaXMuY29t0kEnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jb250ZW50Qo4BCixjb20uZ29vZ2xlLnNob3BwaW5nLm1lcmNoYW50LmFjY291bnRzLnYxYmV0YUIMUmVnaW9uc1Byb3RvUAFaTmNsb3VkLmdvb2dsZS5jb20vZ28vc2hvcHBpbmcvbWVyY2hhbnQvYWNjb3VudHMvYXBpdjFiZXRhL2FjY291bnRzcGI7YWNjb3VudHNwYmIGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_wrappers]);

/**
 * Request message for the `GetRegion` method.
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.GetRegionRequest
 */
export type GetRegionRequest = Message<"google.shopping.merchant.accounts.v1beta.GetRegionRequest"> & {
  /**
   * Required. The name of the region to retrieve.
   * Format: `accounts/{account}/regions/{region}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.GetRegionRequest.
 * Use `create(GetRegionRequestSchema)` to create a new message.
 */
export const GetRegionRequestSchema: GenMessage<GetRegionRequest> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_regions, 0);

/**
 * Request message for the `CreateRegion` method.
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.CreateRegionRequest
 */
export type CreateRegionRequest = Message<"google.shopping.merchant.accounts.v1beta.CreateRegionRequest"> & {
  /**
   * Required. The account to create a region for.
   * Format: `accounts/{account}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The identifier for the region, unique over all regions of the
   * same account.
   *
   * @generated from field: string region_id = 2;
   */
  regionId: string;

  /**
   * Required. The region to create.
   *
   * @generated from field: google.shopping.merchant.accounts.v1beta.Region region = 3;
   */
  region?: Region;
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.CreateRegionRequest.
 * Use `create(CreateRegionRequestSchema)` to create a new message.
 */
export const CreateRegionRequestSchema: GenMessage<CreateRegionRequest> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_regions, 1);

/**
 * Request message for the `UpdateRegion` method.
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.UpdateRegionRequest
 */
export type UpdateRegionRequest = Message<"google.shopping.merchant.accounts.v1beta.UpdateRegionRequest"> & {
  /**
   * Required. The updated region.
   *
   * @generated from field: google.shopping.merchant.accounts.v1beta.Region region = 1;
   */
  region?: Region;

  /**
   * Optional. The comma-separated field mask indicating the fields to update.
   * Example:
   * `"displayName,postalCodeArea.regionCode"`.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.UpdateRegionRequest.
 * Use `create(UpdateRegionRequestSchema)` to create a new message.
 */
export const UpdateRegionRequestSchema: GenMessage<UpdateRegionRequest> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_regions, 2);

/**
 * Request message for the `DeleteRegion` method.
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.DeleteRegionRequest
 */
export type DeleteRegionRequest = Message<"google.shopping.merchant.accounts.v1beta.DeleteRegionRequest"> & {
  /**
   * Required. The name of the region to delete.
   * Format: `accounts/{account}/regions/{region}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.DeleteRegionRequest.
 * Use `create(DeleteRegionRequestSchema)` to create a new message.
 */
export const DeleteRegionRequestSchema: GenMessage<DeleteRegionRequest> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_regions, 3);

/**
 * Request message for the `ListRegions` method.
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.ListRegionsRequest
 */
export type ListRegionsRequest = Message<"google.shopping.merchant.accounts.v1beta.ListRegionsRequest"> & {
  /**
   * Required. The account to list regions for.
   * Format: `accounts/{account}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. The maximum number of regions to return. The service may return
   * fewer than this value.
   * If unspecified, at most 50 regions will be returned.
   * The maximum value is 1000; values above 1000 will be coerced to 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. A page token, received from a previous `ListRegions` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListRegions` must
   * match the call that provided the page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.ListRegionsRequest.
 * Use `create(ListRegionsRequestSchema)` to create a new message.
 */
export const ListRegionsRequestSchema: GenMessage<ListRegionsRequest> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_regions, 4);

/**
 * Response message for the `ListRegions` method.
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.ListRegionsResponse
 */
export type ListRegionsResponse = Message<"google.shopping.merchant.accounts.v1beta.ListRegionsResponse"> & {
  /**
   * The regions from the specified merchant.
   *
   * @generated from field: repeated google.shopping.merchant.accounts.v1beta.Region regions = 1;
   */
  regions: Region[];

  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.ListRegionsResponse.
 * Use `create(ListRegionsResponseSchema)` to create a new message.
 */
export const ListRegionsResponseSchema: GenMessage<ListRegionsResponse> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_regions, 5);

/**
 * Represents a geographic region that you can use as a target with both the
 * `RegionalInventory` and `ShippingSettings` services. You can define regions
 * as collections of either postal codes or, in some countries, using predefined
 * geotargets. For more information, see [Set up regions
 * ](https://support.google.com/merchants/answer/7410946#zippy=%2Ccreate-a-new-region)
 * for more information.
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.Region
 */
export type Region = Message<"google.shopping.merchant.accounts.v1beta.Region"> & {
  /**
   * Identifier. The resource name of the region.
   * Format: `accounts/{account}/regions/{region}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. The display name of the region.
   *
   * @generated from field: optional string display_name = 2;
   */
  displayName?: string;

  /**
   * Optional. A list of postal codes that defines the region area.
   *
   * @generated from field: google.shopping.merchant.accounts.v1beta.Region.PostalCodeArea postal_code_area = 3;
   */
  postalCodeArea?: Region_PostalCodeArea;

  /**
   * Optional. A list of geotargets that defines the region area.
   *
   * @generated from field: google.shopping.merchant.accounts.v1beta.Region.GeoTargetArea geotarget_area = 4;
   */
  geotargetArea?: Region_GeoTargetArea;

  /**
   * Output only. Indicates if the region is eligible for use in the Regional
   * Inventory configuration.
   *
   * @generated from field: google.protobuf.BoolValue regional_inventory_eligible = 5;
   */
  regionalInventoryEligible?: boolean;

  /**
   * Output only. Indicates if the region is eligible for use in the Shipping
   * Services configuration.
   *
   * @generated from field: google.protobuf.BoolValue shipping_eligible = 6;
   */
  shippingEligible?: boolean;
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.Region.
 * Use `create(RegionSchema)` to create a new message.
 */
export const RegionSchema: GenMessage<Region> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_regions, 6);

/**
 * A list of postal codes that defines the region area.
 * Note: All regions defined using postal codes are accessible through the
 * account's `ShippingSettings.postalCodeGroups` resource.
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.Region.PostalCodeArea
 */
export type Region_PostalCodeArea = Message<"google.shopping.merchant.accounts.v1beta.Region.PostalCodeArea"> & {
  /**
   * Required. [CLDR territory
   * code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml)
   * or the country the postal code group applies to.
   *
   * @generated from field: string region_code = 1;
   */
  regionCode: string;

  /**
   * Required. A range of postal codes.
   *
   * @generated from field: repeated google.shopping.merchant.accounts.v1beta.Region.PostalCodeArea.PostalCodeRange postal_codes = 2;
   */
  postalCodes: Region_PostalCodeArea_PostalCodeRange[];
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.Region.PostalCodeArea.
 * Use `create(Region_PostalCodeAreaSchema)` to create a new message.
 */
export const Region_PostalCodeAreaSchema: GenMessage<Region_PostalCodeArea> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_regions, 6, 0);

/**
 * A range of postal codes that defines the region area.
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.Region.PostalCodeArea.PostalCodeRange
 */
export type Region_PostalCodeArea_PostalCodeRange = Message<"google.shopping.merchant.accounts.v1beta.Region.PostalCodeArea.PostalCodeRange"> & {
  /**
   * Required. A postal code or a pattern of the form prefix* denoting the
   * inclusive lower bound of the range defining the area. Examples values:
   * `94108`, `9410*`, `9*`.
   *
   * @generated from field: string begin = 1;
   */
  begin: string;

  /**
   * Optional. A postal code or a pattern of the form `prefix*` denoting the
   * inclusive upper bound of the range defining the area. It must have the
   * same length as postalCodeRangeBegin: if postalCodeRangeBegin is a
   * postal code then postalCodeRangeEnd must be a postal code too; if
   * postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a
   * pattern with the same prefix length. Optional: if not set, then the
   * area is defined as being all the postal codes matching
   * postalCodeRangeBegin.
   *
   * @generated from field: string end = 2;
   */
  end: string;
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.Region.PostalCodeArea.PostalCodeRange.
 * Use `create(Region_PostalCodeArea_PostalCodeRangeSchema)` to create a new message.
 */
export const Region_PostalCodeArea_PostalCodeRangeSchema: GenMessage<Region_PostalCodeArea_PostalCodeRange> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_regions, 6, 0, 0);

/**
 * A list of geotargets that defines the region area.
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.Region.GeoTargetArea
 */
export type Region_GeoTargetArea = Message<"google.shopping.merchant.accounts.v1beta.Region.GeoTargetArea"> & {
  /**
   * Required. A non-empty list of [location
   * IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting).
   * They must all be of the same location type (for example, state).
   *
   * @generated from field: repeated int64 geotarget_criteria_ids = 1;
   */
  geotargetCriteriaIds: bigint[];
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.Region.GeoTargetArea.
 * Use `create(Region_GeoTargetAreaSchema)` to create a new message.
 */
export const Region_GeoTargetAreaSchema: GenMessage<Region_GeoTargetArea> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_regions, 6, 1);

/**
 * Manages regions configuration.
 *
 * This API defines the following resource model:
 *
 * - [Region][google.shopping.merchant.accounts.v1main.Region]
 *
 * @generated from service google.shopping.merchant.accounts.v1beta.RegionsService
 */
export const RegionsService: GenService<{
  /**
   * Retrieves a region defined in your Merchant Center account.
   *
   * @generated from rpc google.shopping.merchant.accounts.v1beta.RegionsService.GetRegion
   */
  getRegion: {
    methodKind: "unary";
    input: typeof GetRegionRequestSchema;
    output: typeof RegionSchema;
  },
  /**
   * Creates a region definition in your Merchant Center account. Executing this
   * method requires admin access.
   *
   * @generated from rpc google.shopping.merchant.accounts.v1beta.RegionsService.CreateRegion
   */
  createRegion: {
    methodKind: "unary";
    input: typeof CreateRegionRequestSchema;
    output: typeof RegionSchema;
  },
  /**
   * Updates a region definition in your Merchant Center account. Executing this
   * method requires admin access.
   *
   * @generated from rpc google.shopping.merchant.accounts.v1beta.RegionsService.UpdateRegion
   */
  updateRegion: {
    methodKind: "unary";
    input: typeof UpdateRegionRequestSchema;
    output: typeof RegionSchema;
  },
  /**
   * Deletes a region definition from your Merchant Center account. Executing
   * this method requires admin access.
   *
   * @generated from rpc google.shopping.merchant.accounts.v1beta.RegionsService.DeleteRegion
   */
  deleteRegion: {
    methodKind: "unary";
    input: typeof DeleteRegionRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Lists the regions in your Merchant Center account.
   *
   * @generated from rpc google.shopping.merchant.accounts.v1beta.RegionsService.ListRegions
   */
  listRegions: {
    methodKind: "unary";
    input: typeof ListRegionsRequestSchema;
    output: typeof ListRegionsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_shopping_merchant_accounts_v1beta_regions, 0);
