// Copyright 2023 Google LLC
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
// @generated from file google/ads/admanager/v1/creative_service.proto (package google.ads.admanager.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { AdPartnerDeclaration } from "./ad_partner_declaration_pb";
import { file_google_ads_admanager_v1_ad_partner_declaration } from "./ad_partner_declaration_pb";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/admanager/v1/creative_service.proto.
 */
export const file_google_ads_admanager_v1_creative_service: GenFile = /*@__PURE__*/
  fileDesc("Ci5nb29nbGUvYWRzL2FkbWFuYWdlci92MS9jcmVhdGl2ZV9zZXJ2aWNlLnByb3RvEhdnb29nbGUuYWRzLmFkbWFuYWdlci52MSK4AwoIQ3JlYXRpdmUSEQoEbmFtZRgBIAEoCUID4EEIEhgKC2NyZWF0aXZlX2lkGAcgASgDQgPgQQMSGQoMZGlzcGxheV9uYW1lGAggASgJQgPgQQESPAoKYWR2ZXJ0aXNlchgCIAEoCUIo4EEC+kEiCiBhZG1hbmFnZXIuZ29vZ2xlYXBpcy5jb20vQ29tcGFueRI0Cgt1cGRhdGVfdGltZRgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIYCgtwcmV2aWV3X3VybBgEIAEoCUID4EEDEhcKCnNpemVfbGFiZWwYCSABKAlCA+BBAxJSChZhZF9wYXJ0bmVyX2RlY2xhcmF0aW9uGAYgASgLMi0uZ29vZ2xlLmFkcy5hZG1hbmFnZXIudjEuQWRQYXJ0bmVyRGVjbGFyYXRpb25CA+BBATpp6kFmCiFhZG1hbmFnZXIuZ29vZ2xlYXBpcy5jb20vQ3JlYXRpdmUSLG5ldHdvcmtzL3tuZXR3b3JrX2NvZGV9L2NyZWF0aXZlcy97Y3JlYXRpdmV9KgljcmVhdGl2ZXMyCGNyZWF0aXZlIk0KEkdldENyZWF0aXZlUmVxdWVzdBI3CgRuYW1lGAEgASgJQingQQL6QSMKIWFkbWFuYWdlci5nb29nbGVhcGlzLmNvbS9DcmVhdGl2ZSLAAQoUTGlzdENyZWF0aXZlc1JlcXVlc3QSOAoGcGFyZW50GAEgASgJQijgQQL6QSIKIGFkbWFuYWdlci5nb29nbGVhcGlzLmNvbS9OZXR3b3JrEhYKCXBhZ2Vfc2l6ZRgCIAEoBUID4EEBEhcKCnBhZ2VfdG9rZW4YAyABKAlCA+BBARITCgZmaWx0ZXIYBCABKAlCA+BBARIVCghvcmRlcl9ieRgFIAEoCUID4EEBEhEKBHNraXAYBiABKAVCA+BBASJ6ChVMaXN0Q3JlYXRpdmVzUmVzcG9uc2USNAoJY3JlYXRpdmVzGAEgAygLMiEuZ29vZ2xlLmFkcy5hZG1hbmFnZXIudjEuQ3JlYXRpdmUSFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJEhIKCnRvdGFsX3NpemUYAyABKAUy5QIKD0NyZWF0aXZlU2VydmljZRKPAQoLR2V0Q3JlYXRpdmUSKy5nb29nbGUuYWRzLmFkbWFuYWdlci52MS5HZXRDcmVhdGl2ZVJlcXVlc3QaIS5nb29nbGUuYWRzLmFkbWFuYWdlci52MS5DcmVhdGl2ZSIw2kEEbmFtZYLT5JMCIxIhL3YxL3tuYW1lPW5ldHdvcmtzLyovY3JlYXRpdmVzLyp9EqIBCg1MaXN0Q3JlYXRpdmVzEi0uZ29vZ2xlLmFkcy5hZG1hbmFnZXIudjEuTGlzdENyZWF0aXZlc1JlcXVlc3QaLi5nb29nbGUuYWRzLmFkbWFuYWdlci52MS5MaXN0Q3JlYXRpdmVzUmVzcG9uc2UiMtpBBnBhcmVudILT5JMCIxIhL3YxL3twYXJlbnQ9bmV0d29ya3MvKn0vY3JlYXRpdmVzGhvKQRhhZG1hbmFnZXIuZ29vZ2xlYXBpcy5jb21CsQEKG2NvbS5nb29nbGUuYWRzLmFkbWFuYWdlci52MUIUQ3JlYXRpdmVTZXJ2aWNlUHJvdG9QAVpAZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvYWRtYW5hZ2VyL3YxO2FkbWFuYWdlcqICA0dBQaoCF0dvb2dsZS5BZHMuQWRNYW5hZ2VyLlYxygIXR29vZ2xlXEFkc1xBZE1hbmFnZXJcVjFiBnByb3RvMw", [file_google_ads_admanager_v1_ad_partner_declaration, file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * The Creative resource.
 *
 * @generated from message google.ads.admanager.v1.Creative
 */
export type Creative = Message<"google.ads.admanager.v1.Creative"> & {
  /**
   * Identifier. The resource name of the Creative.
   * Format: `networks/{network_code}/creatives/{creative_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. `Creative` ID.
   *
   * @generated from field: int64 creative_id = 7;
   */
  creativeId: bigint;

  /**
   * Optional. Display name of the `Creative`. This attribute has a maximum
   * length of 255 characters.
   *
   * @generated from field: string display_name = 8;
   */
  displayName: string;

  /**
   * Required. The resource name of the Company, which is of type
   * Company.Type.ADVERTISER, to which this Creative belongs. Format:
   * "networks/{network_code}/companies/{company_id}"
   *
   * @generated from field: string advertiser = 2;
   */
  advertiser: string;

  /**
   * Output only. The instant this Creative was last modified.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;

  /**
   * Output only. The URL of the creative for previewing the media.
   *
   * @generated from field: string preview_url = 4;
   */
  previewUrl: string;

  /**
   * Output only. String representations of creative size.
   * This field is temporarily available and will be deprecated when
   * `Creative.size` becomes available.
   *
   * @generated from field: string size_label = 9;
   */
  sizeLabel: string;

  /**
   * Optional. The Ad Partners associated with this creative.
   * This is distinct from any associated companies that Google may detect
   * programmatically.
   *
   * @generated from field: google.ads.admanager.v1.AdPartnerDeclaration ad_partner_declaration = 6;
   */
  adPartnerDeclaration?: AdPartnerDeclaration;
};

/**
 * Describes the message google.ads.admanager.v1.Creative.
 * Use `create(CreativeSchema)` to create a new message.
 */
export const CreativeSchema: GenMessage<Creative> = /*@__PURE__*/
  messageDesc(file_google_ads_admanager_v1_creative_service, 0);

/**
 * Request object for GetCreative method.
 *
 * @generated from message google.ads.admanager.v1.GetCreativeRequest
 */
export type GetCreativeRequest = Message<"google.ads.admanager.v1.GetCreativeRequest"> & {
  /**
   * Required. The resource name of the Creative.
   * Format: `networks/{network_code}/creatives/{creative_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.ads.admanager.v1.GetCreativeRequest.
 * Use `create(GetCreativeRequestSchema)` to create a new message.
 */
export const GetCreativeRequestSchema: GenMessage<GetCreativeRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_admanager_v1_creative_service, 1);

/**
 * Request object for ListCreatives method.
 *
 * @generated from message google.ads.admanager.v1.ListCreativesRequest
 */
export type ListCreativesRequest = Message<"google.ads.admanager.v1.ListCreativesRequest"> & {
  /**
   * Required. The parent, which owns this collection of Creatives.
   * Format: networks/{network_code}
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. The maximum number of Creatives to return. The service may return
   * fewer than this value. If unspecified, at most 50 creatives will be
   * returned. The maximum value is 1000; values above 1000 will be coerced to
   * 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. A page token, received from a previous `ListCreatives` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListCreatives` must
   * match the call that provided the page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * Optional. Expression to filter the response.
   * See syntax details at
   * https://developers.google.com/ad-manager/api/beta/filters
   *
   * @generated from field: string filter = 4;
   */
  filter: string;

  /**
   * Optional. Expression to specify sorting order.
   * See syntax details at
   * https://developers.google.com/ad-manager/api/beta/filters#order
   *
   * @generated from field: string order_by = 5;
   */
  orderBy: string;

  /**
   * Optional. Number of individual resources to skip while paginating.
   *
   * @generated from field: int32 skip = 6;
   */
  skip: number;
};

/**
 * Describes the message google.ads.admanager.v1.ListCreativesRequest.
 * Use `create(ListCreativesRequestSchema)` to create a new message.
 */
export const ListCreativesRequestSchema: GenMessage<ListCreativesRequest> = /*@__PURE__*/
  messageDesc(file_google_ads_admanager_v1_creative_service, 2);

/**
 * Response object for ListCreativesRequest containing matching Creative
 * resources.
 *
 * @generated from message google.ads.admanager.v1.ListCreativesResponse
 */
export type ListCreativesResponse = Message<"google.ads.admanager.v1.ListCreativesResponse"> & {
  /**
   * The Creative from the specified network.
   *
   * @generated from field: repeated google.ads.admanager.v1.Creative creatives = 1;
   */
  creatives: Creative[];

  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * Total number of Creatives.
   * If a filter was included in the request, this reflects the total number
   * after the filtering is applied.
   *
   * `total_size` will not be calculated in the response unless it has been
   * included in a response field mask. The response field mask can be provided
   * to the method by using the URL parameter `$fields` or `fields`, or by using
   * the HTTP/gRPC header `X-Goog-FieldMask`.
   *
   * For more information, see
   * https://developers.google.com/ad-manager/api/beta/field-masks
   *
   * @generated from field: int32 total_size = 3;
   */
  totalSize: number;
};

/**
 * Describes the message google.ads.admanager.v1.ListCreativesResponse.
 * Use `create(ListCreativesResponseSchema)` to create a new message.
 */
export const ListCreativesResponseSchema: GenMessage<ListCreativesResponse> = /*@__PURE__*/
  messageDesc(file_google_ads_admanager_v1_creative_service, 3);

/**
 * Provides methods for handling Creative objects.
 *
 * @generated from service google.ads.admanager.v1.CreativeService
 */
export const CreativeService: GenService<{
  /**
   * API to retrieve a Creative object.
   *
   * @generated from rpc google.ads.admanager.v1.CreativeService.GetCreative
   */
  getCreative: {
    methodKind: "unary";
    input: typeof GetCreativeRequestSchema;
    output: typeof CreativeSchema;
  },
  /**
   * API to retrieve a list of Creative objects.
   *
   * @generated from rpc google.ads.admanager.v1.CreativeService.ListCreatives
   */
  listCreatives: {
    methodKind: "unary";
    input: typeof ListCreativesRequestSchema;
    output: typeof ListCreativesResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_ads_admanager_v1_creative_service, 0);
