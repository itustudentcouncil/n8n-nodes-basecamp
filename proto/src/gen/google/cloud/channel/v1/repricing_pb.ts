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
// @generated from file google/cloud/channel/v1/repricing.proto (package google.cloud.channel.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Date } from "../../../type/date_pb";
import { file_google_type_date } from "../../../type/date_pb";
import type { Decimal } from "../../../type/decimal_pb";
import { file_google_type_decimal } from "../../../type/decimal_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/channel/v1/repricing.proto.
 */
export const file_google_cloud_channel_v1_repricing: GenFile = /*@__PURE__*/
  fileDesc("Cidnb29nbGUvY2xvdWQvY2hhbm5lbC92MS9yZXByaWNpbmcucHJvdG8SF2dvb2dsZS5jbG91ZC5jaGFubmVsLnYxIsUCChdDdXN0b21lclJlcHJpY2luZ0NvbmZpZxIRCgRuYW1lGAEgASgJQgPgQQMSRwoQcmVwcmljaW5nX2NvbmZpZxgCIAEoCzIoLmdvb2dsZS5jbG91ZC5jaGFubmVsLnYxLlJlcHJpY2luZ0NvbmZpZ0ID4EECEjQKC3VwZGF0ZV90aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDOpcB6kGTAQozY2xvdWRjaGFubmVsLmdvb2dsZWFwaXMuY29tL0N1c3RvbWVyUmVwcmljaW5nQ29uZmlnElxhY2NvdW50cy97YWNjb3VudH0vY3VzdG9tZXJzL3tjdXN0b21lcn0vY3VzdG9tZXJSZXByaWNpbmdDb25maWdzL3tjdXN0b21lcl9yZXByaWNpbmdfY29uZmlnfSLvAgodQ2hhbm5lbFBhcnRuZXJSZXByaWNpbmdDb25maWcSEQoEbmFtZRgBIAEoCUID4EEDEkcKEHJlcHJpY2luZ19jb25maWcYAiABKAsyKC5nb29nbGUuY2xvdWQuY2hhbm5lbC52MS5SZXByaWNpbmdDb25maWdCA+BBAhI0Cgt1cGRhdGVfdGltZRgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAzq7AepBtwEKOWNsb3VkY2hhbm5lbC5nb29nbGVhcGlzLmNvbS9DaGFubmVsUGFydG5lclJlcHJpY2luZ0NvbmZpZxJ6YWNjb3VudHMve2FjY291bnR9L2NoYW5uZWxQYXJ0bmVyTGlua3Mve2NoYW5uZWxfcGFydG5lcn0vY2hhbm5lbFBhcnRuZXJSZXByaWNpbmdDb25maWdzL3tjaGFubmVsX3BhcnRuZXJfcmVwcmljaW5nX2NvbmZpZ30ihQUKD1JlcHJpY2luZ0NvbmZpZxJiChdlbnRpdGxlbWVudF9ncmFudWxhcml0eRgEIAEoCzI/Lmdvb2dsZS5jbG91ZC5jaGFubmVsLnYxLlJlcHJpY2luZ0NvbmZpZy5FbnRpdGxlbWVudEdyYW51bGFyaXR5SAASbQobY2hhbm5lbF9wYXJ0bmVyX2dyYW51bGFyaXR5GAUgASgLMkIuZ29vZ2xlLmNsb3VkLmNoYW5uZWwudjEuUmVwcmljaW5nQ29uZmlnLkNoYW5uZWxQYXJ0bmVyR3JhbnVsYXJpdHlCAhgBSAASNwoXZWZmZWN0aXZlX2ludm9pY2VfbW9udGgYASABKAsyES5nb29nbGUudHlwZS5EYXRlQgPgQQISRQoKYWRqdXN0bWVudBgCIAEoCzIsLmdvb2dsZS5jbG91ZC5jaGFubmVsLnYxLlJlcHJpY2luZ0FkanVzdG1lbnRCA+BBAhJFCg9yZWJpbGxpbmdfYmFzaXMYAyABKA4yJy5nb29nbGUuY2xvdWQuY2hhbm5lbC52MS5SZWJpbGxpbmdCYXNpc0ID4EECEksKFWNvbmRpdGlvbmFsX292ZXJyaWRlcxgGIAMoCzIsLmdvb2dsZS5jbG91ZC5jaGFubmVsLnYxLkNvbmRpdGlvbmFsT3ZlcnJpZGUaWwoWRW50aXRsZW1lbnRHcmFudWxhcml0eRJBCgtlbnRpdGxlbWVudBgBIAEoCUIs+kEpCidjbG91ZGNoYW5uZWwuZ29vZ2xlYXBpcy5jb20vRW50aXRsZW1lbnQaHwoZQ2hhbm5lbFBhcnRuZXJHcmFudWxhcml0eToCGAFCDQoLZ3JhbnVsYXJpdHkicwoTUmVwcmljaW5nQWRqdXN0bWVudBJOChVwZXJjZW50YWdlX2FkanVzdG1lbnQYAiABKAsyLS5nb29nbGUuY2xvdWQuY2hhbm5lbC52MS5QZXJjZW50YWdlQWRqdXN0bWVudEgAQgwKCmFkanVzdG1lbnQiQAoUUGVyY2VudGFnZUFkanVzdG1lbnQSKAoKcGVyY2VudGFnZRgCIAEoCzIULmdvb2dsZS50eXBlLkRlY2ltYWwi8gEKE0NvbmRpdGlvbmFsT3ZlcnJpZGUSRQoKYWRqdXN0bWVudBgBIAEoCzIsLmdvb2dsZS5jbG91ZC5jaGFubmVsLnYxLlJlcHJpY2luZ0FkanVzdG1lbnRCA+BBAhJFCg9yZWJpbGxpbmdfYmFzaXMYAiABKA4yJy5nb29nbGUuY2xvdWQuY2hhbm5lbC52MS5SZWJpbGxpbmdCYXNpc0ID4EECEk0KE3JlcHJpY2luZ19jb25kaXRpb24YAyABKAsyKy5nb29nbGUuY2xvdWQuY2hhbm5lbC52MS5SZXByaWNpbmdDb25kaXRpb25CA+BBAiJsChJSZXByaWNpbmdDb25kaXRpb24SSQoTc2t1X2dyb3VwX2NvbmRpdGlvbhgBIAEoCzIqLmdvb2dsZS5jbG91ZC5jaGFubmVsLnYxLlNrdUdyb3VwQ29uZGl0aW9uSABCCwoJY29uZGl0aW9uIiYKEVNrdUdyb3VwQ29uZGl0aW9uEhEKCXNrdV9ncm91cBgBIAEoCSpdCg5SZWJpbGxpbmdCYXNpcxIfChtSRUJJTExJTkdfQkFTSVNfVU5TUEVDSUZJRUQQABIQCgxDT1NUX0FUX0xJU1QQARIYChRESVJFQ1RfQ1VTVE9NRVJfQ09TVBACQmYKG2NvbS5nb29nbGUuY2xvdWQuY2hhbm5lbC52MUIOUmVwcmljaW5nUHJvdG9QAVo1Y2xvdWQuZ29vZ2xlLmNvbS9nby9jaGFubmVsL2FwaXYxL2NoYW5uZWxwYjtjaGFubmVscGJiBnByb3RvMw", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp, file_google_type_date, file_google_type_decimal]);

/**
 * Configuration for how a reseller will reprice a Customer.
 *
 * @generated from message google.cloud.channel.v1.CustomerRepricingConfig
 */
export type CustomerRepricingConfig = Message<"google.cloud.channel.v1.CustomerRepricingConfig"> & {
  /**
   * Output only. Resource name of the CustomerRepricingConfig.
   * Format:
   * accounts/{account_id}/customers/{customer_id}/customerRepricingConfigs/{id}.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The configuration for bill modifications made by a reseller
   * before sending it to customers.
   *
   * @generated from field: google.cloud.channel.v1.RepricingConfig repricing_config = 2;
   */
  repricingConfig?: RepricingConfig;

  /**
   * Output only. Timestamp of an update to the repricing rule. If `update_time`
   * is after
   * [RepricingConfig.effective_invoice_month][google.cloud.channel.v1.RepricingConfig.effective_invoice_month]
   * then it indicates this was set mid-month.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;
};

/**
 * Describes the message google.cloud.channel.v1.CustomerRepricingConfig.
 * Use `create(CustomerRepricingConfigSchema)` to create a new message.
 */
export const CustomerRepricingConfigSchema: GenMessage<CustomerRepricingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_channel_v1_repricing, 0);

/**
 * Configuration for how a distributor will rebill a channel partner
 * (also known as a distributor-authorized reseller).
 *
 * @generated from message google.cloud.channel.v1.ChannelPartnerRepricingConfig
 */
export type ChannelPartnerRepricingConfig = Message<"google.cloud.channel.v1.ChannelPartnerRepricingConfig"> & {
  /**
   * Output only. Resource name of the ChannelPartnerRepricingConfig.
   * Format:
   * accounts/{account_id}/channelPartnerLinks/{channel_partner_id}/channelPartnerRepricingConfigs/{id}.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The configuration for bill modifications made by a reseller
   * before sending it to ChannelPartner.
   *
   * @generated from field: google.cloud.channel.v1.RepricingConfig repricing_config = 2;
   */
  repricingConfig?: RepricingConfig;

  /**
   * Output only. Timestamp of an update to the repricing rule. If `update_time`
   * is after
   * [RepricingConfig.effective_invoice_month][google.cloud.channel.v1.RepricingConfig.effective_invoice_month]
   * then it indicates this was set mid-month.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;
};

/**
 * Describes the message google.cloud.channel.v1.ChannelPartnerRepricingConfig.
 * Use `create(ChannelPartnerRepricingConfigSchema)` to create a new message.
 */
export const ChannelPartnerRepricingConfigSchema: GenMessage<ChannelPartnerRepricingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_channel_v1_repricing, 1);

/**
 * Configuration for repricing a Google bill over a period of time.
 *
 * @generated from message google.cloud.channel.v1.RepricingConfig
 */
export type RepricingConfig = Message<"google.cloud.channel.v1.RepricingConfig"> & {
  /**
   * Required. Defines the granularity for repricing.
   *
   * @generated from oneof google.cloud.channel.v1.RepricingConfig.granularity
   */
  granularity: {
    /**
     * Applies the repricing configuration at the entitlement level.
     *
     * Note: If a
     * [ChannelPartnerRepricingConfig][google.cloud.channel.v1.ChannelPartnerRepricingConfig]
     * using
     * [RepricingConfig.EntitlementGranularity][google.cloud.channel.v1.RepricingConfig.EntitlementGranularity]
     * becomes effective, then no existing or future
     * [RepricingConfig.ChannelPartnerGranularity][google.cloud.channel.v1.RepricingConfig.ChannelPartnerGranularity]
     * will apply to the
     * [RepricingConfig.EntitlementGranularity.entitlement][google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.entitlement].
     * This is the recommended value for both
     * [CustomerRepricingConfig][google.cloud.channel.v1.CustomerRepricingConfig]
     * and
     * [ChannelPartnerRepricingConfig][google.cloud.channel.v1.ChannelPartnerRepricingConfig].
     *
     * @generated from field: google.cloud.channel.v1.RepricingConfig.EntitlementGranularity entitlement_granularity = 4;
     */
    value: RepricingConfig_EntitlementGranularity;
    case: "entitlementGranularity";
  } | {
    /**
     * Applies the repricing configuration at the channel partner level.
     * Only
     * [ChannelPartnerRepricingConfig][google.cloud.channel.v1.ChannelPartnerRepricingConfig]
     * supports this value. Deprecated: This is no longer supported. Use
     * [RepricingConfig.entitlement_granularity][google.cloud.channel.v1.RepricingConfig.entitlement_granularity]
     * instead.
     *
     * @generated from field: google.cloud.channel.v1.RepricingConfig.ChannelPartnerGranularity channel_partner_granularity = 5 [deprecated = true];
     * @deprecated
     */
    value: RepricingConfig_ChannelPartnerGranularity;
    case: "channelPartnerGranularity";
  } | { case: undefined; value?: undefined };

  /**
   * Required. The YearMonth when these adjustments activate. The Day field
   * needs to be "0" since we only accept YearMonth repricing boundaries.
   *
   * @generated from field: google.type.Date effective_invoice_month = 1;
   */
  effectiveInvoiceMonth?: Date;

  /**
   * Required. Information about the adjustment.
   *
   * @generated from field: google.cloud.channel.v1.RepricingAdjustment adjustment = 2;
   */
  adjustment?: RepricingAdjustment;

  /**
   * Required. The [RebillingBasis][google.cloud.channel.v1.RebillingBasis] to
   * use for this bill. Specifies the relative cost based on repricing costs you
   * will apply.
   *
   * @generated from field: google.cloud.channel.v1.RebillingBasis rebilling_basis = 3;
   */
  rebillingBasis: RebillingBasis;

  /**
   * The conditional overrides to apply for this configuration. If you list
   * multiple overrides, only the first valid override is used.  If you don't
   * list any overrides, the API uses the normal adjustment and rebilling basis.
   *
   * @generated from field: repeated google.cloud.channel.v1.ConditionalOverride conditional_overrides = 6;
   */
  conditionalOverrides: ConditionalOverride[];
};

/**
 * Describes the message google.cloud.channel.v1.RepricingConfig.
 * Use `create(RepricingConfigSchema)` to create a new message.
 */
export const RepricingConfigSchema: GenMessage<RepricingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_channel_v1_repricing, 2);

/**
 * Applies the repricing configuration at the entitlement level.
 *
 * @generated from message google.cloud.channel.v1.RepricingConfig.EntitlementGranularity
 */
export type RepricingConfig_EntitlementGranularity = Message<"google.cloud.channel.v1.RepricingConfig.EntitlementGranularity"> & {
  /**
   * Resource name of the entitlement.
   * Format:
   * accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
   *
   * @generated from field: string entitlement = 1;
   */
  entitlement: string;
};

/**
 * Describes the message google.cloud.channel.v1.RepricingConfig.EntitlementGranularity.
 * Use `create(RepricingConfig_EntitlementGranularitySchema)` to create a new message.
 */
export const RepricingConfig_EntitlementGranularitySchema: GenMessage<RepricingConfig_EntitlementGranularity> = /*@__PURE__*/
  messageDesc(file_google_cloud_channel_v1_repricing, 2, 0);

/**
 * Applies the repricing configuration at the channel partner level.
 * The channel partner value is derived from the resource name. Takes an
 * empty json object.
 * Deprecated: This is no longer supported. Use
 * [RepricingConfig.EntitlementGranularity][google.cloud.channel.v1.RepricingConfig.EntitlementGranularity]
 * instead.
 *
 * @generated from message google.cloud.channel.v1.RepricingConfig.ChannelPartnerGranularity
 * @deprecated
 */
export type RepricingConfig_ChannelPartnerGranularity = Message<"google.cloud.channel.v1.RepricingConfig.ChannelPartnerGranularity"> & {
};

/**
 * Describes the message google.cloud.channel.v1.RepricingConfig.ChannelPartnerGranularity.
 * Use `create(RepricingConfig_ChannelPartnerGranularitySchema)` to create a new message.
 * @deprecated
 */
export const RepricingConfig_ChannelPartnerGranularitySchema: GenMessage<RepricingConfig_ChannelPartnerGranularity> = /*@__PURE__*/
  messageDesc(file_google_cloud_channel_v1_repricing, 2, 1);

/**
 * A type that represents the various adjustments you can apply to a bill.
 *
 * @generated from message google.cloud.channel.v1.RepricingAdjustment
 */
export type RepricingAdjustment = Message<"google.cloud.channel.v1.RepricingAdjustment"> & {
  /**
   * A oneof that represents the different types for this adjustment.
   *
   * @generated from oneof google.cloud.channel.v1.RepricingAdjustment.adjustment
   */
  adjustment: {
    /**
     * Flat markup or markdown on an entire bill.
     *
     * @generated from field: google.cloud.channel.v1.PercentageAdjustment percentage_adjustment = 2;
     */
    value: PercentageAdjustment;
    case: "percentageAdjustment";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.channel.v1.RepricingAdjustment.
 * Use `create(RepricingAdjustmentSchema)` to create a new message.
 */
export const RepricingAdjustmentSchema: GenMessage<RepricingAdjustment> = /*@__PURE__*/
  messageDesc(file_google_cloud_channel_v1_repricing, 3);

/**
 * An adjustment that applies a flat markup or markdown to an entire bill.
 *
 * @generated from message google.cloud.channel.v1.PercentageAdjustment
 */
export type PercentageAdjustment = Message<"google.cloud.channel.v1.PercentageAdjustment"> & {
  /**
   * The percentage of the bill to adjust.
   * For example:
   * Mark down by 1% => "-1.00"
   * Mark up by 1%   => "1.00"
   * Pass-Through    => "0.00"
   *
   * @generated from field: google.type.Decimal percentage = 2;
   */
  percentage?: Decimal;
};

/**
 * Describes the message google.cloud.channel.v1.PercentageAdjustment.
 * Use `create(PercentageAdjustmentSchema)` to create a new message.
 */
export const PercentageAdjustmentSchema: GenMessage<PercentageAdjustment> = /*@__PURE__*/
  messageDesc(file_google_cloud_channel_v1_repricing, 4);

/**
 * Specifies the override to conditionally apply.
 *
 * @generated from message google.cloud.channel.v1.ConditionalOverride
 */
export type ConditionalOverride = Message<"google.cloud.channel.v1.ConditionalOverride"> & {
  /**
   * Required. Information about the applied override's adjustment.
   *
   * @generated from field: google.cloud.channel.v1.RepricingAdjustment adjustment = 1;
   */
  adjustment?: RepricingAdjustment;

  /**
   * Required. The [RebillingBasis][google.cloud.channel.v1.RebillingBasis] to
   * use for the applied override. Shows the relative cost based on your
   * repricing costs.
   *
   * @generated from field: google.cloud.channel.v1.RebillingBasis rebilling_basis = 2;
   */
  rebillingBasis: RebillingBasis;

  /**
   * Required. Specifies the condition which, if met, will apply the override.
   *
   * @generated from field: google.cloud.channel.v1.RepricingCondition repricing_condition = 3;
   */
  repricingCondition?: RepricingCondition;
};

/**
 * Describes the message google.cloud.channel.v1.ConditionalOverride.
 * Use `create(ConditionalOverrideSchema)` to create a new message.
 */
export const ConditionalOverrideSchema: GenMessage<ConditionalOverride> = /*@__PURE__*/
  messageDesc(file_google_cloud_channel_v1_repricing, 5);

/**
 * Represents the various repricing conditions you can use for a conditional
 * override.
 *
 * @generated from message google.cloud.channel.v1.RepricingCondition
 */
export type RepricingCondition = Message<"google.cloud.channel.v1.RepricingCondition"> & {
  /**
   * Represents the types of existing conditional statements.
   *
   * @generated from oneof google.cloud.channel.v1.RepricingCondition.condition
   */
  condition: {
    /**
     * SKU Group condition for override.
     *
     * @generated from field: google.cloud.channel.v1.SkuGroupCondition sku_group_condition = 1;
     */
    value: SkuGroupCondition;
    case: "skuGroupCondition";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.channel.v1.RepricingCondition.
 * Use `create(RepricingConditionSchema)` to create a new message.
 */
export const RepricingConditionSchema: GenMessage<RepricingCondition> = /*@__PURE__*/
  messageDesc(file_google_cloud_channel_v1_repricing, 6);

/**
 * A condition that applies the override if a line item SKU is found in the SKU
 * group.
 *
 * @generated from message google.cloud.channel.v1.SkuGroupCondition
 */
export type SkuGroupCondition = Message<"google.cloud.channel.v1.SkuGroupCondition"> & {
  /**
   * Specifies a SKU group (https://cloud.google.com/skus/sku-groups).
   * Resource name of SKU group. Format:
   * accounts/{account}/skuGroups/{sku_group}.
   * Example:
   * "accounts/C01234/skuGroups/3d50fd57-3157-4577-a5a9-a219b8490041".
   *
   * @generated from field: string sku_group = 1;
   */
  skuGroup: string;
};

/**
 * Describes the message google.cloud.channel.v1.SkuGroupCondition.
 * Use `create(SkuGroupConditionSchema)` to create a new message.
 */
export const SkuGroupConditionSchema: GenMessage<SkuGroupCondition> = /*@__PURE__*/
  messageDesc(file_google_cloud_channel_v1_repricing, 7);

/**
 * Specifies the different costs that the modified bill can be based on.
 *
 * @generated from enum google.cloud.channel.v1.RebillingBasis
 */
export enum RebillingBasis {
  /**
   * Not used.
   *
   * @generated from enum value: REBILLING_BASIS_UNSPECIFIED = 0;
   */
  REBILLING_BASIS_UNSPECIFIED = 0,

  /**
   * Use the list cost, also known as the MSRP.
   *
   * @generated from enum value: COST_AT_LIST = 1;
   */
  COST_AT_LIST = 1,

  /**
   * Pass through all discounts except the Reseller Program Discount. If this is
   * the default cost base and no adjustments are specified, the output cost
   * will be exactly what the customer would see if they viewed the bill in the
   * Google Cloud Console.
   *
   * @generated from enum value: DIRECT_CUSTOMER_COST = 2;
   */
  DIRECT_CUSTOMER_COST = 2,
}

/**
 * Describes the enum google.cloud.channel.v1.RebillingBasis.
 */
export const RebillingBasisSchema: GenEnum<RebillingBasis> = /*@__PURE__*/
  enumDesc(file_google_cloud_channel_v1_repricing, 0);
