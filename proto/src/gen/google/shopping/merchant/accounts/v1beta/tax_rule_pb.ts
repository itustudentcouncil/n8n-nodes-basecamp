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
// @generated from file google/shopping/merchant/accounts/v1beta/tax_rule.proto (package google.shopping.merchant.accounts.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import type { Interval } from "../../../../type/interval_pb";
import { file_google_type_interval } from "../../../../type/interval_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/shopping/merchant/accounts/v1beta/tax_rule.proto.
 */
export const file_google_shopping_merchant_accounts_v1beta_tax_rule: GenFile = /*@__PURE__*/
  fileDesc("Cjdnb29nbGUvc2hvcHBpbmcvbWVyY2hhbnQvYWNjb3VudHMvdjFiZXRhL3RheF9ydWxlLnByb3RvEihnb29nbGUuc2hvcHBpbmcubWVyY2hhbnQuYWNjb3VudHMudjFiZXRhIoEDCgdUYXhSdWxlEhUKC2xvY2F0aW9uX2lkGAIgASgDSAASXwoPcG9zdF9jb2RlX3JhbmdlGAMgASgLMkQuZ29vZ2xlLnNob3BwaW5nLm1lcmNoYW50LmFjY291bnRzLnYxYmV0YS5UYXhSdWxlLlRheFBvc3RhbENvZGVSYW5nZUgAEhkKD3VzZV9nb29nbGVfcmF0ZRgEIAEoCEgBEiQKGnNlbGZfc3BlY2lmaWVkX3JhdGVfbWljcm9zGAUgASgDSAESEwoLcmVnaW9uX2NvZGUYASABKAkSFgoOc2hpcHBpbmdfdGF4ZWQYBiABKAgSOQoVZWZmZWN0aXZlX3RpbWVfcGVyaW9kGAcgASgLMhUuZ29vZ2xlLnR5cGUuSW50ZXJ2YWxCA+BBAho1ChJUYXhQb3N0YWxDb2RlUmFuZ2USEgoFc3RhcnQYASABKAlCA+BBAhILCgNlbmQYAiABKAlCCgoIbG9jYXRpb25CEgoQcmF0ZV9jYWxjdWxhdGlvbkKOAQosY29tLmdvb2dsZS5zaG9wcGluZy5tZXJjaGFudC5hY2NvdW50cy52MWJldGFCDFRheFJ1bGVQcm90b1ABWk5jbG91ZC5nb29nbGUuY29tL2dvL3Nob3BwaW5nL21lcmNoYW50L2FjY291bnRzL2FwaXYxYmV0YS9hY2NvdW50c3BiO2FjY291bnRzcGJiBnByb3RvMw", [file_google_api_field_behavior, file_google_type_interval]);

/**
 * Primary type convension
 *
 * percent micro : 100% = 1 000 000 and 1% = 10 000
 *                 cannot be negative.
 *
 * Information about tax nexus and related parameters applicable to orders
 * delivered to the area covered by a single tax admin. Nexus is created when a
 * merchant is doing business in an area administered by tax admin (only US
 * states are supported for nexus configuration). If merchant has nexus in a US
 * state, merchant needs to pay tax to all tax authorities associated with
 * the shipping destination.
 * Next Id : 8
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.TaxRule
 */
export type TaxRule = Message<"google.shopping.merchant.accounts.v1beta.TaxRule"> & {
  /**
   * Describe the location through either postal code range or a criteria id.
   *
   * @generated from oneof google.shopping.merchant.accounts.v1beta.TaxRule.location
   */
  location: {
    /**
     * The admin_id or criteria_id of the region in which this rule is
     * applicable.
     *
     * @generated from field: int64 location_id = 2;
     */
    value: bigint;
    case: "locationId";
  } | {
    /**
     * The range of postal codes in which this rule is applicable.
     *
     * @generated from field: google.shopping.merchant.accounts.v1beta.TaxRule.TaxPostalCodeRange post_code_range = 3;
     */
    value: TaxRule_TaxPostalCodeRange;
    case: "postCodeRange";
  } | { case: undefined; value?: undefined };

  /**
   * What is the way to calculate tax rate for deliveries to this admin's area.
   * Can only be set on US states.
   *
   * @generated from oneof google.shopping.merchant.accounts.v1beta.TaxRule.rate_calculation
   */
  rateCalculation: {
    /**
     * Rate that depends on delivery location: if merchant has a nexus in
     * corresponding US state, rates from authorities with jurisdiction over
     * delivery area are added up.
     *
     * @generated from field: bool use_google_rate = 4;
     */
    value: boolean;
    case: "useGoogleRate";
  } | {
    /**
     * A fixed rate specified in micros, where 100% = 1_000_000.
     * Suitable for origin-based states.
     *
     * @generated from field: int64 self_specified_rate_micros = 5;
     */
    value: bigint;
    case: "selfSpecifiedRateMicros";
  } | { case: undefined; value?: undefined };

  /**
   * Region code in which this rule is applicable
   *
   * @generated from field: string region_code = 1;
   */
  regionCode: string;

  /**
   * If set, shipping charge is taxed (at the same rate as product) when
   * delivering to this admin's area.
   * Can only be set on US states without category.
   *
   * @generated from field: bool shipping_taxed = 6;
   */
  shippingTaxed: boolean;

  /**
   * Required. Time period when this rule is effective. If the duration is
   * missing from effective_time listed, then it is open ended to the future.
   * The start of this time period is inclusive, and the end is exclusive.
   *
   * @generated from field: google.type.Interval effective_time_period = 7;
   */
  effectiveTimePeriod?: Interval;
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.TaxRule.
 * Use `create(TaxRuleSchema)` to create a new message.
 */
export const TaxRuleSchema: GenMessage<TaxRule> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_tax_rule, 0);

/**
 * A range of postal codes that defines the area.
 *
 * @generated from message google.shopping.merchant.accounts.v1beta.TaxRule.TaxPostalCodeRange
 */
export type TaxRule_TaxPostalCodeRange = Message<"google.shopping.merchant.accounts.v1beta.TaxRule.TaxPostalCodeRange"> & {
  /**
   * Required. The start of the postal code range, which is also the smallest
   * in the range.
   *
   * @generated from field: string start = 1;
   */
  start: string;

  /**
   * The end of the postal code range. Will be the same as start if not
   * specified.
   *
   * @generated from field: string end = 2;
   */
  end: string;
};

/**
 * Describes the message google.shopping.merchant.accounts.v1beta.TaxRule.TaxPostalCodeRange.
 * Use `create(TaxRule_TaxPostalCodeRangeSchema)` to create a new message.
 */
export const TaxRule_TaxPostalCodeRangeSchema: GenMessage<TaxRule_TaxPostalCodeRange> = /*@__PURE__*/
  messageDesc(file_google_shopping_merchant_accounts_v1beta_tax_rule, 0, 0);
