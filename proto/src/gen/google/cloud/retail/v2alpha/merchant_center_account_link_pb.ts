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
// @generated from file google/cloud/retail/v2alpha/merchant_center_account_link.proto (package google.cloud.retail.v2alpha, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/retail/v2alpha/merchant_center_account_link.proto.
 */
export const file_google_cloud_retail_v2alpha_merchant_center_account_link: GenFile = /*@__PURE__*/
  fileDesc("Cj5nb29nbGUvY2xvdWQvcmV0YWlsL3YyYWxwaGEvbWVyY2hhbnRfY2VudGVyX2FjY291bnRfbGluay5wcm90bxIbZ29vZ2xlLmNsb3VkLnJldGFpbC52MmFscGhhItsFChlNZXJjaGFudENlbnRlckFjY291bnRMaW5rEhQKBG5hbWUYASABKAlCBuBBBeBBAxISCgJpZBgIIAEoCUIG4EEF4EEDEicKGm1lcmNoYW50X2NlbnRlcl9hY2NvdW50X2lkGAIgASgDQgPgQQISFgoJYnJhbmNoX2lkGAMgASgJQgPgQQISEgoKZmVlZF9sYWJlbBgEIAEoCRIVCg1sYW5ndWFnZV9jb2RlGAUgASgJEmUKDGZlZWRfZmlsdGVycxgGIAMoCzJPLmdvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5NZXJjaGFudENlbnRlckFjY291bnRMaW5rLk1lcmNoYW50Q2VudGVyRmVlZEZpbHRlchJQCgVzdGF0ZRgHIAEoDjI8Lmdvb2dsZS5jbG91ZC5yZXRhaWwudjJhbHBoYS5NZXJjaGFudENlbnRlckFjY291bnRMaW5rLlN0YXRlQgPgQQMSFwoKcHJvamVjdF9pZBgJIAEoCUID4EEDEhMKBnNvdXJjZRgKIAEoCUID4EEBGk4KGE1lcmNoYW50Q2VudGVyRmVlZEZpbHRlchIXCg9wcmltYXJ5X2ZlZWRfaWQYASABKAMSGQoRcHJpbWFyeV9mZWVkX25hbWUYAiABKAkiQwoFU3RhdGUSFQoRU1RBVEVfVU5TUEVDSUZJRUQQABILCgdQRU5ESU5HEAESCgoGQUNUSVZFEAISCgoGRkFJTEVEEAM6qwHqQacBCi9yZXRhaWwuZ29vZ2xlYXBpcy5jb20vTWVyY2hhbnRDZW50ZXJBY2NvdW50TGluaxJ0cHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L2NhdGFsb2dzL3tjYXRhbG9nfS9tZXJjaGFudENlbnRlckFjY291bnRMaW5rcy97bWVyY2hhbnRfY2VudGVyX2FjY291bnRfbGlua30iiwEKJ0NyZWF0ZU1lcmNoYW50Q2VudGVyQWNjb3VudExpbmtNZXRhZGF0YRIvCgtjcmVhdGVfdGltZRgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASLwoLdXBkYXRlX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQuIBCh9jb20uZ29vZ2xlLmNsb3VkLnJldGFpbC52MmFscGhhQh5NZXJjaGFudENlbnRlckFjY291bnRMaW5rUHJvdG9QAVo3Y2xvdWQuZ29vZ2xlLmNvbS9nby9yZXRhaWwvYXBpdjJhbHBoYS9yZXRhaWxwYjtyZXRhaWxwYqICBlJFVEFJTKoCG0dvb2dsZS5DbG91ZC5SZXRhaWwuVjJBbHBoYcoCG0dvb2dsZVxDbG91ZFxSZXRhaWxcVjJhbHBoYeoCHkdvb2dsZTo6Q2xvdWQ6OlJldGFpbDo6VjJhbHBoYWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * Represents a link between a Merchant Center account and a branch.
 * After a link is established, products from the linked Merchant Center account
 * are streamed to the linked branch.
 *
 * @generated from message google.cloud.retail.v2alpha.MerchantCenterAccountLink
 */
export type MerchantCenterAccountLink = Message<"google.cloud.retail.v2alpha.MerchantCenterAccountLink"> & {
  /**
   * Output only. Immutable. Full resource name of the Merchant Center Account
   * Link, such as
   * `projects/*\/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Immutable.
   * [MerchantCenterAccountLink][google.cloud.retail.v2alpha.MerchantCenterAccountLink]
   * identifier, which is the final component of
   * [name][google.cloud.retail.v2alpha.MerchantCenterAccountLink.name]. This
   * field is auto generated and follows the convention:
   * `BranchId_MerchantCenterAccountId`.
   * `projects/*\/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`.
   *
   * @generated from field: string id = 8;
   */
  id: string;

  /**
   * Required. The linked [Merchant center account
   * id](https://developers.google.com/shopping-content/guides/accountstatuses).
   * The account must be a standalone account or a sub-account of a MCA.
   *
   * @generated from field: int64 merchant_center_account_id = 2;
   */
  merchantCenterAccountId: bigint;

  /**
   * Required. The branch ID (e.g. 0/1/2) within the catalog that products from
   * merchant_center_account_id are streamed to. When updating this field, an
   * empty value will use the currently configured default branch. However,
   * changing the default branch later on won't change the linked branch here.
   *
   * A single branch ID can only have one linked Merchant Center account ID.
   *
   * @generated from field: string branch_id = 3;
   */
  branchId: string;

  /**
   * The FeedLabel used to perform filtering.
   * Note: this replaces
   * [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label).
   *
   * Example value: `US`.
   * Example value: `FeedLabel1`.
   *
   * @generated from field: string feed_label = 4;
   */
  feedLabel: string;

  /**
   * Language of the title/description and other string attributes. Use language
   * tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt).
   * ISO 639-1.
   *
   * This specifies the language of offers in Merchant Center that will be
   * accepted. If empty, no language filtering will be performed.
   *
   * Example value: `en`.
   *
   * @generated from field: string language_code = 5;
   */
  languageCode: string;

  /**
   * Criteria for the Merchant Center feeds to be ingested via the link.
   * All offers will be ingested if the list is empty.
   * Otherwise the offers will be ingested from selected feeds.
   *
   * @generated from field: repeated google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilter feed_filters = 6;
   */
  feedFilters: MerchantCenterAccountLink_MerchantCenterFeedFilter[];

  /**
   * Output only. Represents the state of the link.
   *
   * @generated from field: google.cloud.retail.v2alpha.MerchantCenterAccountLink.State state = 7;
   */
  state: MerchantCenterAccountLink_State;

  /**
   * Output only. Google Cloud project ID.
   *
   * @generated from field: string project_id = 9;
   */
  projectId: string;

  /**
   * Optional. An optional arbitrary string that could be used as a tag for
   * tracking link source.
   *
   * @generated from field: string source = 10;
   */
  source: string;
};

/**
 * Describes the message google.cloud.retail.v2alpha.MerchantCenterAccountLink.
 * Use `create(MerchantCenterAccountLinkSchema)` to create a new message.
 */
export const MerchantCenterAccountLinkSchema: GenMessage<MerchantCenterAccountLink> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_merchant_center_account_link, 0);

/**
 * Merchant Center Feed filter criterion.
 *
 * @generated from message google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilter
 */
export type MerchantCenterAccountLink_MerchantCenterFeedFilter = Message<"google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilter"> & {
  /**
   * Merchant Center primary feed ID.
   *
   * @generated from field: int64 primary_feed_id = 1;
   */
  primaryFeedId: bigint;

  /**
   * Merchant Center primary feed name. The name is used for the display
   * purposes only.
   *
   * @generated from field: string primary_feed_name = 2;
   */
  primaryFeedName: string;
};

/**
 * Describes the message google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilter.
 * Use `create(MerchantCenterAccountLink_MerchantCenterFeedFilterSchema)` to create a new message.
 */
export const MerchantCenterAccountLink_MerchantCenterFeedFilterSchema: GenMessage<MerchantCenterAccountLink_MerchantCenterFeedFilter> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_merchant_center_account_link, 0, 0);

/**
 * The state of the link.
 *
 * @generated from enum google.cloud.retail.v2alpha.MerchantCenterAccountLink.State
 */
export enum MerchantCenterAccountLink_State {
  /**
   * Default value.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Link is created and LRO is not complete.
   *
   * @generated from enum value: PENDING = 1;
   */
  PENDING = 1,

  /**
   * Link is active.
   *
   * @generated from enum value: ACTIVE = 2;
   */
  ACTIVE = 2,

  /**
   * Link creation failed.
   *
   * @generated from enum value: FAILED = 3;
   */
  FAILED = 3,
}

/**
 * Describes the enum google.cloud.retail.v2alpha.MerchantCenterAccountLink.State.
 */
export const MerchantCenterAccountLink_StateSchema: GenEnum<MerchantCenterAccountLink_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_retail_v2alpha_merchant_center_account_link, 0, 0);

/**
 * Common metadata related to the progress of the operations.
 *
 * @generated from message google.cloud.retail.v2alpha.CreateMerchantCenterAccountLinkMetadata
 */
export type CreateMerchantCenterAccountLinkMetadata = Message<"google.cloud.retail.v2alpha.CreateMerchantCenterAccountLinkMetadata"> & {
  /**
   * Operation create time.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 1;
   */
  createTime?: Timestamp;

  /**
   * Operation last update time. If the operation is done, this is also the
   * finish time.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 2;
   */
  updateTime?: Timestamp;
};

/**
 * Describes the message google.cloud.retail.v2alpha.CreateMerchantCenterAccountLinkMetadata.
 * Use `create(CreateMerchantCenterAccountLinkMetadataSchema)` to create a new message.
 */
export const CreateMerchantCenterAccountLinkMetadataSchema: GenMessage<CreateMerchantCenterAccountLinkMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_retail_v2alpha_merchant_center_account_link, 1);
