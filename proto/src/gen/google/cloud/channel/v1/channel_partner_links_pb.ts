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
// @generated from file google/cloud/channel/v1/channel_partner_links.proto (package google.cloud.channel.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { CloudIdentityInfo } from "./common_pb";
import { file_google_cloud_channel_v1_common } from "./common_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/channel/v1/channel_partner_links.proto.
 */
export const file_google_cloud_channel_v1_channel_partner_links: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvY2xvdWQvY2hhbm5lbC92MS9jaGFubmVsX3BhcnRuZXJfbGlua3MucHJvdG8SF2dvb2dsZS5jbG91ZC5jaGFubmVsLnYxIo8EChJDaGFubmVsUGFydG5lckxpbmsSEQoEbmFtZRgBIAEoCUID4EEDEicKGnJlc2VsbGVyX2Nsb3VkX2lkZW50aXR5X2lkGAIgASgJQgPgQQISSQoKbGlua19zdGF0ZRgDIAEoDjIwLmdvb2dsZS5jbG91ZC5jaGFubmVsLnYxLkNoYW5uZWxQYXJ0bmVyTGlua1N0YXRlQgPgQQISHAoPaW52aXRlX2xpbmtfdXJpGAQgASgJQgPgQQMSNAoLY3JlYXRlX3RpbWUYBSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSNAoLdXBkYXRlX3RpbWUYBiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSFgoJcHVibGljX2lkGAcgASgJQgPgQQMSXAojY2hhbm5lbF9wYXJ0bmVyX2Nsb3VkX2lkZW50aXR5X2luZm8YCCABKAsyKi5nb29nbGUuY2xvdWQuY2hhbm5lbC52MS5DbG91ZElkZW50aXR5SW5mb0ID4EEDOnLqQW8KLmNsb3VkY2hhbm5lbC5nb29nbGVhcGlzLmNvbS9DaGFubmVsUGFydG5lckxpbmsSPWFjY291bnRzL3thY2NvdW50fS9jaGFubmVsUGFydG5lckxpbmtzL3tjaGFubmVsX3BhcnRuZXJfbGlua30qPgoWQ2hhbm5lbFBhcnRuZXJMaW5rVmlldxIPCgtVTlNQRUNJRklFRBAAEgkKBUJBU0lDEAESCAoERlVMTBACKnoKF0NoYW5uZWxQYXJ0bmVyTGlua1N0YXRlEioKJkNIQU5ORUxfUEFSVE5FUl9MSU5LX1NUQVRFX1VOU1BFQ0lGSUVEEAASCwoHSU5WSVRFRBABEgoKBkFDVElWRRACEgsKB1JFVk9LRUQQAxINCglTVVNQRU5ERUQQBEJwChtjb20uZ29vZ2xlLmNsb3VkLmNoYW5uZWwudjFCGENoYW5uZWxQYXJ0bmVyTGlua3NQcm90b1ABWjVjbG91ZC5nb29nbGUuY29tL2dvL2NoYW5uZWwvYXBpdjEvY2hhbm5lbHBiO2NoYW5uZWxwYmIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_channel_v1_common, file_google_protobuf_timestamp]);

/**
 * Entity representing a link between distributors and their indirect
 * resellers in an n-tier resale channel.
 *
 * @generated from message google.cloud.channel.v1.ChannelPartnerLink
 */
export type ChannelPartnerLink = Message<"google.cloud.channel.v1.ChannelPartnerLink"> & {
  /**
   * Output only. Resource name for the channel partner link, in the format
   * accounts/{account_id}/channelPartnerLinks/{id}.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. Cloud Identity ID of the linked reseller.
   *
   * @generated from field: string reseller_cloud_identity_id = 2;
   */
  resellerCloudIdentityId: string;

  /**
   * Required. State of the channel partner link.
   *
   * @generated from field: google.cloud.channel.v1.ChannelPartnerLinkState link_state = 3;
   */
  linkState: ChannelPartnerLinkState;

  /**
   * Output only. URI of the web page where partner accepts the link invitation.
   *
   * @generated from field: string invite_link_uri = 4;
   */
  inviteLinkUri: string;

  /**
   * Output only. Timestamp of when the channel partner link is created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 5;
   */
  createTime?: Timestamp;

  /**
   * Output only. Timestamp of when the channel partner link is updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 6;
   */
  updateTime?: Timestamp;

  /**
   * Output only. Public identifier that a customer must use to generate a
   * transfer token to move to this distributor-reseller combination.
   *
   * @generated from field: string public_id = 7;
   */
  publicId: string;

  /**
   * Output only. Cloud Identity info of the channel partner (IR).
   *
   * @generated from field: google.cloud.channel.v1.CloudIdentityInfo channel_partner_cloud_identity_info = 8;
   */
  channelPartnerCloudIdentityInfo?: CloudIdentityInfo;
};

/**
 * Describes the message google.cloud.channel.v1.ChannelPartnerLink.
 * Use `create(ChannelPartnerLinkSchema)` to create a new message.
 */
export const ChannelPartnerLinkSchema: GenMessage<ChannelPartnerLink> = /*@__PURE__*/
  messageDesc(file_google_cloud_channel_v1_channel_partner_links, 0);

/**
 * The level of granularity the
 * [ChannelPartnerLink][google.cloud.channel.v1.ChannelPartnerLink] will
 * display.
 *
 * @generated from enum google.cloud.channel.v1.ChannelPartnerLinkView
 */
export enum ChannelPartnerLinkView {
  /**
   * The default / unset value.
   * The API will default to the BASIC view.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Includes all fields except the
   * [ChannelPartnerLink.channel_partner_cloud_identity_info][google.cloud.channel.v1.ChannelPartnerLink.channel_partner_cloud_identity_info].
   *
   * @generated from enum value: BASIC = 1;
   */
  BASIC = 1,

  /**
   * Includes all fields.
   *
   * @generated from enum value: FULL = 2;
   */
  FULL = 2,
}

/**
 * Describes the enum google.cloud.channel.v1.ChannelPartnerLinkView.
 */
export const ChannelPartnerLinkViewSchema: GenEnum<ChannelPartnerLinkView> = /*@__PURE__*/
  enumDesc(file_google_cloud_channel_v1_channel_partner_links, 0);

/**
 * ChannelPartnerLinkState represents state of a channel partner link.
 *
 * @generated from enum google.cloud.channel.v1.ChannelPartnerLinkState
 */
export enum ChannelPartnerLinkState {
  /**
   * Not used.
   *
   * @generated from enum value: CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED = 0;
   */
  CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED = 0,

  /**
   * An invitation has been sent to the reseller to create a channel partner
   * link.
   *
   * @generated from enum value: INVITED = 1;
   */
  INVITED = 1,

  /**
   * Status when the reseller is active.
   *
   * @generated from enum value: ACTIVE = 2;
   */
  ACTIVE = 2,

  /**
   * Status when the reseller has been revoked by the distributor.
   *
   * @generated from enum value: REVOKED = 3;
   */
  REVOKED = 3,

  /**
   * Status when the reseller is suspended by Google or distributor.
   *
   * @generated from enum value: SUSPENDED = 4;
   */
  SUSPENDED = 4,
}

/**
 * Describes the enum google.cloud.channel.v1.ChannelPartnerLinkState.
 */
export const ChannelPartnerLinkStateSchema: GenEnum<ChannelPartnerLinkState> = /*@__PURE__*/
  enumDesc(file_google_cloud_channel_v1_channel_partner_links, 1);
