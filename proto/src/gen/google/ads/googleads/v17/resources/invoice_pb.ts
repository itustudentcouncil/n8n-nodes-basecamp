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
// @generated from file google/ads/googleads/v17/resources/invoice.proto (package google.ads.googleads.v17.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { DateRange } from "../common/dates_pb";
import { file_google_ads_googleads_v17_common_dates } from "../common/dates_pb";
import type { InvoiceTypeEnum_InvoiceType } from "../enums/invoice_type_pb";
import { file_google_ads_googleads_v17_enums_invoice_type } from "../enums/invoice_type_pb";
import type { MonthOfYearEnum_MonthOfYear } from "../enums/month_of_year_pb";
import { file_google_ads_googleads_v17_enums_month_of_year } from "../enums/month_of_year_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/resources/invoice.proto.
 */
export const file_google_ads_googleads_v17_resources_invoice: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvcmVzb3VyY2VzL2ludm9pY2UucHJvdG8SImdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5yZXNvdXJjZXMipScKB0ludm9pY2USPwoNcmVzb3VyY2VfbmFtZRgBIAEoCUIo4EED+kEiCiBnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vSW52b2ljZRIUCgJpZBgZIAEoCUID4EEDSACIAQESTgoEdHlwZRgDIAEoDjI7Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtcy5JbnZvaWNlVHlwZUVudW0uSW52b2ljZVR5cGVCA+BBAxIfCg1iaWxsaW5nX3NldHVwGBogASgJQgPgQQNIAYgBARIlChNwYXltZW50c19hY2NvdW50X2lkGBsgASgJQgPgQQNIAogBARIlChNwYXltZW50c19wcm9maWxlX2lkGBwgASgJQgPgQQNIA4gBARIcCgppc3N1ZV9kYXRlGB0gASgJQgPgQQNIBIgBARIaCghkdWVfZGF0ZRgeIAEoCUID4EEDSAWIAQESSwoSc2VydmljZV9kYXRlX3JhbmdlGAkgASgLMiouZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmNvbW1vbi5EYXRlUmFuZ2VCA+BBAxIfCg1jdXJyZW5jeV9jb2RlGB8gASgJQgPgQQNIBogBARIvCiJhZGp1c3RtZW50c19zdWJ0b3RhbF9hbW91bnRfbWljcm9zGBMgASgDQgPgQQMSKgodYWRqdXN0bWVudHNfdGF4X2Ftb3VudF9taWNyb3MYFCABKANCA+BBAxIsCh9hZGp1c3RtZW50c190b3RhbF9hbW91bnRfbWljcm9zGBUgASgDQgPgQQMSNAoncmVndWxhdG9yeV9jb3N0c19zdWJ0b3RhbF9hbW91bnRfbWljcm9zGBYgASgDQgPgQQMSLwoicmVndWxhdG9yeV9jb3N0c190YXhfYW1vdW50X21pY3JvcxgXIAEoA0ID4EEDEjEKJHJlZ3VsYXRvcnlfY29zdHNfdG90YWxfYW1vdW50X21pY3JvcxgYIAEoA0ID4EEDEjYKJGV4cG9ydF9jaGFyZ2Vfc3VidG90YWxfYW1vdW50X21pY3JvcxgoIAEoA0ID4EEDSAeIAQESMQofZXhwb3J0X2NoYXJnZV90YXhfYW1vdW50X21pY3JvcxgpIAEoA0ID4EEDSAiIAQESMwohZXhwb3J0X2NoYXJnZV90b3RhbF9hbW91bnRfbWljcm9zGCogASgDQgPgQQNICYgBARIoChZzdWJ0b3RhbF9hbW91bnRfbWljcm9zGCEgASgDQgPgQQNICogBARIjChF0YXhfYW1vdW50X21pY3JvcxgiIAEoA0ID4EEDSAuIAQESJQoTdG90YWxfYW1vdW50X21pY3JvcxgjIAEoA0ID4EEDSAyIAQESIwoRY29ycmVjdGVkX2ludm9pY2UYJCABKAlCA+BBA0gNiAEBEh4KEXJlcGxhY2VkX2ludm9pY2VzGCUgAygJQgPgQQMSGQoHcGRmX3VybBgmIAEoCUID4EEDSA6IAQESZwoYYWNjb3VudF9idWRnZXRfc3VtbWFyaWVzGBIgAygLMkAuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5JbnZvaWNlLkFjY291bnRCdWRnZXRTdW1tYXJ5QgPgQQMSWgoRYWNjb3VudF9zdW1tYXJpZXMYJyADKAsyOi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcucmVzb3VyY2VzLkludm9pY2UuQWNjb3VudFN1bW1hcnlCA+BBAxrhDQoOQWNjb3VudFN1bW1hcnkSGgoIY3VzdG9tZXIYASABKAlCA+BBA0gAiAEBEjsKKWJpbGxpbmdfY29ycmVjdGlvbl9zdWJ0b3RhbF9hbW91bnRfbWljcm9zGAIgASgDQgPgQQNIAYgBARI2CiRiaWxsaW5nX2NvcnJlY3Rpb25fdGF4X2Ftb3VudF9taWNyb3MYAyABKANCA+BBA0gCiAEBEjgKJmJpbGxpbmdfY29ycmVjdGlvbl90b3RhbF9hbW91bnRfbWljcm9zGAQgASgDQgPgQQNIA4gBARI6Cihjb3Vwb25fYWRqdXN0bWVudF9zdWJ0b3RhbF9hbW91bnRfbWljcm9zGAUgASgDQgPgQQNIBIgBARI1CiNjb3Vwb25fYWRqdXN0bWVudF90YXhfYW1vdW50X21pY3JvcxgGIAEoA0ID4EEDSAWIAQESNwolY291cG9uX2FkanVzdG1lbnRfdG90YWxfYW1vdW50X21pY3JvcxgHIAEoA0ID4EEDSAaIAQESQQovZXhjZXNzX2NyZWRpdF9hZGp1c3RtZW50X3N1YnRvdGFsX2Ftb3VudF9taWNyb3MYCCABKANCA+BBA0gHiAEBEjwKKmV4Y2Vzc19jcmVkaXRfYWRqdXN0bWVudF90YXhfYW1vdW50X21pY3JvcxgJIAEoA0ID4EEDSAiIAQESPgosZXhjZXNzX2NyZWRpdF9hZGp1c3RtZW50X3RvdGFsX2Ftb3VudF9taWNyb3MYCiABKANCA+BBA0gJiAEBEjkKJ3JlZ3VsYXRvcnlfY29zdHNfc3VidG90YWxfYW1vdW50X21pY3JvcxgLIAEoA0ID4EEDSAqIAQESNAoicmVndWxhdG9yeV9jb3N0c190YXhfYW1vdW50X21pY3JvcxgMIAEoA0ID4EEDSAuIAQESNgokcmVndWxhdG9yeV9jb3N0c190b3RhbF9hbW91bnRfbWljcm9zGA0gASgDQgPgQQNIDIgBARI2CiRleHBvcnRfY2hhcmdlX3N1YnRvdGFsX2Ftb3VudF9taWNyb3MYESABKANCA+BBA0gNiAEBEjEKH2V4cG9ydF9jaGFyZ2VfdGF4X2Ftb3VudF9taWNyb3MYEiABKANCA+BBA0gOiAEBEjMKIWV4cG9ydF9jaGFyZ2VfdG90YWxfYW1vdW50X21pY3JvcxgTIAEoA0ID4EEDSA+IAQESKAoWc3VidG90YWxfYW1vdW50X21pY3JvcxgOIAEoA0ID4EEDSBCIAQESIwoRdGF4X2Ftb3VudF9taWNyb3MYDyABKANCA+BBA0gRiAEBEiUKE3RvdGFsX2Ftb3VudF9taWNyb3MYECABKANCA+BBA0gSiAEBQgsKCV9jdXN0b21lckIsCipfYmlsbGluZ19jb3JyZWN0aW9uX3N1YnRvdGFsX2Ftb3VudF9taWNyb3NCJwolX2JpbGxpbmdfY29ycmVjdGlvbl90YXhfYW1vdW50X21pY3Jvc0IpCidfYmlsbGluZ19jb3JyZWN0aW9uX3RvdGFsX2Ftb3VudF9taWNyb3NCKwopX2NvdXBvbl9hZGp1c3RtZW50X3N1YnRvdGFsX2Ftb3VudF9taWNyb3NCJgokX2NvdXBvbl9hZGp1c3RtZW50X3RheF9hbW91bnRfbWljcm9zQigKJl9jb3Vwb25fYWRqdXN0bWVudF90b3RhbF9hbW91bnRfbWljcm9zQjIKMF9leGNlc3NfY3JlZGl0X2FkanVzdG1lbnRfc3VidG90YWxfYW1vdW50X21pY3Jvc0ItCitfZXhjZXNzX2NyZWRpdF9hZGp1c3RtZW50X3RheF9hbW91bnRfbWljcm9zQi8KLV9leGNlc3NfY3JlZGl0X2FkanVzdG1lbnRfdG90YWxfYW1vdW50X21pY3Jvc0IqCihfcmVndWxhdG9yeV9jb3N0c19zdWJ0b3RhbF9hbW91bnRfbWljcm9zQiUKI19yZWd1bGF0b3J5X2Nvc3RzX3RheF9hbW91bnRfbWljcm9zQicKJV9yZWd1bGF0b3J5X2Nvc3RzX3RvdGFsX2Ftb3VudF9taWNyb3NCJwolX2V4cG9ydF9jaGFyZ2Vfc3VidG90YWxfYW1vdW50X21pY3Jvc0IiCiBfZXhwb3J0X2NoYXJnZV90YXhfYW1vdW50X21pY3Jvc0IkCiJfZXhwb3J0X2NoYXJnZV90b3RhbF9hbW91bnRfbWljcm9zQhkKF19zdWJ0b3RhbF9hbW91bnRfbWljcm9zQhQKEl90YXhfYW1vdW50X21pY3Jvc0IWChRfdG90YWxfYW1vdW50X21pY3JvcxroBwoUQWNjb3VudEJ1ZGdldFN1bW1hcnkSGgoIY3VzdG9tZXIYCiABKAlCA+BBA0gAiAEBEisKGWN1c3RvbWVyX2Rlc2NyaXB0aXZlX25hbWUYCyABKAlCA+BBA0gBiAEBEiAKDmFjY291bnRfYnVkZ2V0GAwgASgJQgPgQQNIAogBARIlChNhY2NvdW50X2J1ZGdldF9uYW1lGA0gASgJQgPgQQNIA4gBARInChVwdXJjaGFzZV9vcmRlcl9udW1iZXIYDiABKAlCA+BBA0gEiAEBEigKFnN1YnRvdGFsX2Ftb3VudF9taWNyb3MYDyABKANCA+BBA0gFiAEBEiMKEXRheF9hbW91bnRfbWljcm9zGBAgASgDQgPgQQNIBogBARIlChN0b3RhbF9hbW91bnRfbWljcm9zGBEgASgDQgPgQQNIB4gBARJVChxiaWxsYWJsZV9hY3Rpdml0eV9kYXRlX3JhbmdlGAkgASgLMiouZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmNvbW1vbi5EYXRlUmFuZ2VCA+BBAxImChRzZXJ2ZWRfYW1vdW50X21pY3JvcxgSIAEoA0ID4EEDSAiIAQESJgoUYmlsbGVkX2Ftb3VudF9taWNyb3MYEyABKANCA+BBA0gJiAEBEiwKGm92ZXJkZWxpdmVyeV9hbW91bnRfbWljcm9zGBQgASgDQgPgQQNICogBARIwCh5pbnZhbGlkX2FjdGl2aXR5X2Ftb3VudF9taWNyb3MYFSABKANCA+BBA0gLiAEBEmsKGmludmFsaWRfYWN0aXZpdHlfc3VtbWFyaWVzGBYgAygLMkIuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlcy5JbnZvaWNlLkludmFsaWRBY3Rpdml0eVN1bW1hcnlCA+BBA0ILCglfY3VzdG9tZXJCHAoaX2N1c3RvbWVyX2Rlc2NyaXB0aXZlX25hbWVCEQoPX2FjY291bnRfYnVkZ2V0QhYKFF9hY2NvdW50X2J1ZGdldF9uYW1lQhgKFl9wdXJjaGFzZV9vcmRlcl9udW1iZXJCGQoXX3N1YnRvdGFsX2Ftb3VudF9taWNyb3NCFAoSX3RheF9hbW91bnRfbWljcm9zQhYKFF90b3RhbF9hbW91bnRfbWljcm9zQhcKFV9zZXJ2ZWRfYW1vdW50X21pY3Jvc0IXChVfYmlsbGVkX2Ftb3VudF9taWNyb3NCHQobX292ZXJkZWxpdmVyeV9hbW91bnRfbWljcm9zQiEKH19pbnZhbGlkX2FjdGl2aXR5X2Ftb3VudF9taWNyb3MagQQKFkludmFsaWRBY3Rpdml0eVN1bW1hcnkSaAoZb3JpZ2luYWxfbW9udGhfb2Zfc2VydmljZRgBIAEoDjI7Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtcy5Nb250aE9mWWVhckVudW0uTW9udGhPZlllYXJCA+BBA0gAiAEBEioKGG9yaWdpbmFsX3llYXJfb2Zfc2VydmljZRgCIAEoCUID4EEDSAGIAQESJQoTb3JpZ2luYWxfaW52b2ljZV9pZBgDIAEoCUID4EEDSAKIAQESLgocb3JpZ2luYWxfYWNjb3VudF9idWRnZXRfbmFtZRgEIAEoCUID4EEDSAOIAQESMAoeb3JpZ2luYWxfcHVyY2hhc2Vfb3JkZXJfbnVtYmVyGAUgASgJQgPgQQNIBIgBARIfCg1hbW91bnRfbWljcm9zGAYgASgDQgPgQQNIBYgBAUIcChpfb3JpZ2luYWxfbW9udGhfb2Zfc2VydmljZUIbChlfb3JpZ2luYWxfeWVhcl9vZl9zZXJ2aWNlQhYKFF9vcmlnaW5hbF9pbnZvaWNlX2lkQh8KHV9vcmlnaW5hbF9hY2NvdW50X2J1ZGdldF9uYW1lQiEKH19vcmlnaW5hbF9wdXJjaGFzZV9vcmRlcl9udW1iZXJCEAoOX2Ftb3VudF9taWNyb3M6VOpBUQogZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0ludm9pY2USLWN1c3RvbWVycy97Y3VzdG9tZXJfaWR9L2ludm9pY2VzL3tpbnZvaWNlX2lkfUIFCgNfaWRCEAoOX2JpbGxpbmdfc2V0dXBCFgoUX3BheW1lbnRzX2FjY291bnRfaWRCFgoUX3BheW1lbnRzX3Byb2ZpbGVfaWRCDQoLX2lzc3VlX2RhdGVCCwoJX2R1ZV9kYXRlQhAKDl9jdXJyZW5jeV9jb2RlQicKJV9leHBvcnRfY2hhcmdlX3N1YnRvdGFsX2Ftb3VudF9taWNyb3NCIgogX2V4cG9ydF9jaGFyZ2VfdGF4X2Ftb3VudF9taWNyb3NCJAoiX2V4cG9ydF9jaGFyZ2VfdG90YWxfYW1vdW50X21pY3Jvc0IZChdfc3VidG90YWxfYW1vdW50X21pY3Jvc0IUChJfdGF4X2Ftb3VudF9taWNyb3NCFgoUX3RvdGFsX2Ftb3VudF9taWNyb3NCFAoSX2NvcnJlY3RlZF9pbnZvaWNlQgoKCF9wZGZfdXJsQv4BCiZjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LnJlc291cmNlc0IMSW52b2ljZVByb3RvUAFaS2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvcmVzb3VyY2VzO3Jlc291cmNlc6ICA0dBQaoCIkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5SZXNvdXJjZXPKAiJHb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcUmVzb3VyY2Vz6gImR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE3OjpSZXNvdXJjZXNiBnByb3RvMw", [file_google_ads_googleads_v17_common_dates, file_google_ads_googleads_v17_enums_invoice_type, file_google_ads_googleads_v17_enums_month_of_year, file_google_api_field_behavior, file_google_api_resource]);

/**
 * An invoice. All invoice information is snapshotted to match the PDF invoice.
 * For invoices older than the launch of InvoiceService, the snapshotted
 * information may not match the PDF invoice.
 *
 * @generated from message google.ads.googleads.v17.resources.Invoice
 */
export type Invoice = Message<"google.ads.googleads.v17.resources.Invoice"> & {
  /**
   * Output only. The resource name of the invoice. Multiple customers can share
   * a given invoice, so multiple resource names may point to the same invoice.
   * Invoice resource names have the form:
   *
   * `customers/{customer_id}/invoices/{invoice_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The ID of the invoice. It appears on the invoice PDF as
   * "Invoice number".
   *
   * @generated from field: optional string id = 25;
   */
  id?: string;

  /**
   * Output only. The type of invoice.
   *
   * @generated from field: google.ads.googleads.v17.enums.InvoiceTypeEnum.InvoiceType type = 3;
   */
  type: InvoiceTypeEnum_InvoiceType;

  /**
   * Output only. The resource name of this invoice's billing setup.
   *
   * `customers/{customer_id}/billingSetups/{billing_setup_id}`
   *
   * @generated from field: optional string billing_setup = 26;
   */
  billingSetup?: string;

  /**
   * Output only. A 16 digit ID used to identify the payments account associated
   * with the billing setup, for example, "1234-5678-9012-3456". It appears on
   * the invoice PDF as "Billing Account Number".
   *
   * @generated from field: optional string payments_account_id = 27;
   */
  paymentsAccountId?: string;

  /**
   * Output only. A 12 digit ID used to identify the payments profile associated
   * with the billing setup, for example, "1234-5678-9012". It appears on the
   * invoice PDF as "Billing ID".
   *
   * @generated from field: optional string payments_profile_id = 28;
   */
  paymentsProfileId?: string;

  /**
   * Output only. The issue date in yyyy-mm-dd format. It appears on the invoice
   * PDF as either "Issue date" or "Invoice date".
   *
   * @generated from field: optional string issue_date = 29;
   */
  issueDate?: string;

  /**
   * Output only. The due date in yyyy-mm-dd format.
   *
   * @generated from field: optional string due_date = 30;
   */
  dueDate?: string;

  /**
   * Output only. The service period date range of this invoice. The end date is
   * inclusive.
   *
   * @generated from field: google.ads.googleads.v17.common.DateRange service_date_range = 9;
   */
  serviceDateRange?: DateRange;

  /**
   * Output only. The currency code. All costs are returned in this currency. A
   * subset of the currency codes derived from the ISO 4217 standard is
   * supported.
   *
   * @generated from field: optional string currency_code = 31;
   */
  currencyCode?: string;

  /**
   * Output only. The pretax subtotal amount of invoice level adjustments, in
   * micros.
   *
   * @generated from field: int64 adjustments_subtotal_amount_micros = 19;
   */
  adjustmentsSubtotalAmountMicros: bigint;

  /**
   * Output only. The sum of taxes on the invoice level adjustments, in micros.
   *
   * @generated from field: int64 adjustments_tax_amount_micros = 20;
   */
  adjustmentsTaxAmountMicros: bigint;

  /**
   * Output only. The total amount of invoice level adjustments, in micros.
   *
   * @generated from field: int64 adjustments_total_amount_micros = 21;
   */
  adjustmentsTotalAmountMicros: bigint;

  /**
   * Output only. The pretax subtotal amount of invoice level regulatory costs,
   * in micros.
   *
   * @generated from field: int64 regulatory_costs_subtotal_amount_micros = 22;
   */
  regulatoryCostsSubtotalAmountMicros: bigint;

  /**
   * Output only. The sum of taxes on the invoice level regulatory costs, in
   * micros.
   *
   * @generated from field: int64 regulatory_costs_tax_amount_micros = 23;
   */
  regulatoryCostsTaxAmountMicros: bigint;

  /**
   * Output only. The total amount of invoice level regulatory costs, in micros.
   *
   * @generated from field: int64 regulatory_costs_total_amount_micros = 24;
   */
  regulatoryCostsTotalAmountMicros: bigint;

  /**
   * Output only. The pretax subtotal amount of invoice level export charges, in
   * micros.
   *
   * @generated from field: optional int64 export_charge_subtotal_amount_micros = 40;
   */
  exportChargeSubtotalAmountMicros?: bigint;

  /**
   * Output only. The sum of taxes on the invoice level export charges, in
   * micros.
   *
   * @generated from field: optional int64 export_charge_tax_amount_micros = 41;
   */
  exportChargeTaxAmountMicros?: bigint;

  /**
   * Output only. The total amount of invoice level export charges, in micros.
   *
   * @generated from field: optional int64 export_charge_total_amount_micros = 42;
   */
  exportChargeTotalAmountMicros?: bigint;

  /**
   * Output only. The pretax subtotal amount, in micros. This is equal to the
   * sum of the AccountBudgetSummary subtotal amounts and
   * Invoice.adjustments_subtotal_amount_micros.
   *
   * @generated from field: optional int64 subtotal_amount_micros = 33;
   */
  subtotalAmountMicros?: bigint;

  /**
   * Output only. The sum of all taxes on the invoice, in micros. This equals
   * the sum of the AccountBudgetSummary tax amounts, plus taxes not associated
   * with a specific account budget.
   *
   * @generated from field: optional int64 tax_amount_micros = 34;
   */
  taxAmountMicros?: bigint;

  /**
   * Output only. The total amount, in micros. This equals the sum of
   * Invoice.subtotal_amount_micros, Invoice.tax_amount_micros,
   * Invoice.regulatory_costs_subtotal_amount_micros, and
   * Invoice.export_charge_subtotal_amount_micros (which is separated into a
   * separate line item starting with V14.1).
   *
   * @generated from field: optional int64 total_amount_micros = 35;
   */
  totalAmountMicros?: bigint;

  /**
   * Output only. The resource name of the original invoice corrected, wrote
   * off, or canceled by this invoice, if applicable. If `corrected_invoice` is
   * set, `replaced_invoices` will not be set. Invoice resource names have the
   * form:
   *
   * `customers/{customer_id}/invoices/{invoice_id}`
   *
   * @generated from field: optional string corrected_invoice = 36;
   */
  correctedInvoice?: string;

  /**
   * Output only. The resource name of the original invoice(s) being rebilled or
   * replaced by this invoice, if applicable. There might be multiple replaced
   * invoices due to invoice consolidation. The replaced invoices may not belong
   * to the same payments account. If `replaced_invoices` is set,
   * `corrected_invoice` will not be set. Invoice resource names have the form:
   *
   * `customers/{customer_id}/invoices/{invoice_id}`
   *
   * @generated from field: repeated string replaced_invoices = 37;
   */
  replacedInvoices: string[];

  /**
   * Output only. The URL to a PDF copy of the invoice. Users need to pass in
   * their OAuth token to request the PDF with this URL.
   *
   * @generated from field: optional string pdf_url = 38;
   */
  pdfUrl?: string;

  /**
   * Output only. The list of summarized account budget information associated
   * with this invoice.
   *
   * @generated from field: repeated google.ads.googleads.v17.resources.Invoice.AccountBudgetSummary account_budget_summaries = 18;
   */
  accountBudgetSummaries: Invoice_AccountBudgetSummary[];

  /**
   * Output only. The list of summarized account information associated with
   * this invoice.
   *
   * @generated from field: repeated google.ads.googleads.v17.resources.Invoice.AccountSummary account_summaries = 39;
   */
  accountSummaries: Invoice_AccountSummary[];
};

/**
 * Describes the message google.ads.googleads.v17.resources.Invoice.
 * Use `create(InvoiceSchema)` to create a new message.
 */
export const InvoiceSchema: GenMessage<Invoice> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_invoice, 0);

/**
 * Represents a summarized view at account level.
 *
 * @generated from message google.ads.googleads.v17.resources.Invoice.AccountSummary
 */
export type Invoice_AccountSummary = Message<"google.ads.googleads.v17.resources.Invoice.AccountSummary"> & {
  /**
   * Output only. The account associated with the account summary.
   *
   * @generated from field: optional string customer = 1;
   */
  customer?: string;

  /**
   * Output only. Pretax billing correction subtotal amount, in micros.
   *
   * @generated from field: optional int64 billing_correction_subtotal_amount_micros = 2;
   */
  billingCorrectionSubtotalAmountMicros?: bigint;

  /**
   * Output only. Tax on billing correction, in micros.
   *
   * @generated from field: optional int64 billing_correction_tax_amount_micros = 3;
   */
  billingCorrectionTaxAmountMicros?: bigint;

  /**
   * Output only. Total billing correction amount, in micros.
   *
   * @generated from field: optional int64 billing_correction_total_amount_micros = 4;
   */
  billingCorrectionTotalAmountMicros?: bigint;

  /**
   * Output only. Pretax coupon adjustment subtotal amount, in micros.
   *
   * @generated from field: optional int64 coupon_adjustment_subtotal_amount_micros = 5;
   */
  couponAdjustmentSubtotalAmountMicros?: bigint;

  /**
   * Output only. Tax on coupon adjustment, in micros.
   *
   * @generated from field: optional int64 coupon_adjustment_tax_amount_micros = 6;
   */
  couponAdjustmentTaxAmountMicros?: bigint;

  /**
   * Output only. Total coupon adjustment amount, in micros.
   *
   * @generated from field: optional int64 coupon_adjustment_total_amount_micros = 7;
   */
  couponAdjustmentTotalAmountMicros?: bigint;

  /**
   * Output only. Pretax excess credit adjustment subtotal amount, in micros.
   *
   * @generated from field: optional int64 excess_credit_adjustment_subtotal_amount_micros = 8;
   */
  excessCreditAdjustmentSubtotalAmountMicros?: bigint;

  /**
   * Output only. Tax on excess credit adjustment, in micros.
   *
   * @generated from field: optional int64 excess_credit_adjustment_tax_amount_micros = 9;
   */
  excessCreditAdjustmentTaxAmountMicros?: bigint;

  /**
   * Output only. Total excess credit adjustment amount, in micros.
   *
   * @generated from field: optional int64 excess_credit_adjustment_total_amount_micros = 10;
   */
  excessCreditAdjustmentTotalAmountMicros?: bigint;

  /**
   * Output only. Pretax regulatory costs subtotal amount, in micros.
   *
   * @generated from field: optional int64 regulatory_costs_subtotal_amount_micros = 11;
   */
  regulatoryCostsSubtotalAmountMicros?: bigint;

  /**
   * Output only. Tax on regulatory costs, in micros.
   *
   * @generated from field: optional int64 regulatory_costs_tax_amount_micros = 12;
   */
  regulatoryCostsTaxAmountMicros?: bigint;

  /**
   * Output only. Total regulatory costs amount, in micros.
   *
   * @generated from field: optional int64 regulatory_costs_total_amount_micros = 13;
   */
  regulatoryCostsTotalAmountMicros?: bigint;

  /**
   * Output only. Pretax export charge subtotal amount, in micros.
   *
   * @generated from field: optional int64 export_charge_subtotal_amount_micros = 17;
   */
  exportChargeSubtotalAmountMicros?: bigint;

  /**
   * Output only. Tax on export charge, in micros.
   *
   * @generated from field: optional int64 export_charge_tax_amount_micros = 18;
   */
  exportChargeTaxAmountMicros?: bigint;

  /**
   * Output only. Total export charge amount, in micros.
   *
   * @generated from field: optional int64 export_charge_total_amount_micros = 19;
   */
  exportChargeTotalAmountMicros?: bigint;

  /**
   * Output only. Total pretax subtotal amount attributable to the account
   * during the service period, in micros.
   *
   * @generated from field: optional int64 subtotal_amount_micros = 14;
   */
  subtotalAmountMicros?: bigint;

  /**
   * Output only. Total tax amount attributable to the account during the
   * service period, in micros.
   *
   * @generated from field: optional int64 tax_amount_micros = 15;
   */
  taxAmountMicros?: bigint;

  /**
   * Output only. Total amount attributable to the account during the service
   * period, in micros. This equals the sum of the subtotal_amount_micros and
   * tax_amount_micros.
   *
   * @generated from field: optional int64 total_amount_micros = 16;
   */
  totalAmountMicros?: bigint;
};

/**
 * Describes the message google.ads.googleads.v17.resources.Invoice.AccountSummary.
 * Use `create(Invoice_AccountSummarySchema)` to create a new message.
 */
export const Invoice_AccountSummarySchema: GenMessage<Invoice_AccountSummary> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_invoice, 0, 0);

/**
 * Represents a summarized account budget billable cost.
 *
 * @generated from message google.ads.googleads.v17.resources.Invoice.AccountBudgetSummary
 */
export type Invoice_AccountBudgetSummary = Message<"google.ads.googleads.v17.resources.Invoice.AccountBudgetSummary"> & {
  /**
   * Output only. The resource name of the customer associated with this
   * account budget. This contains the customer ID, which appears on the
   * invoice PDF as "Account ID". Customer resource names have the form:
   *
   * `customers/{customer_id}`
   *
   * @generated from field: optional string customer = 10;
   */
  customer?: string;

  /**
   * Output only. The descriptive name of the account budget's customer. It
   * appears on the invoice PDF as "Account".
   *
   * @generated from field: optional string customer_descriptive_name = 11;
   */
  customerDescriptiveName?: string;

  /**
   * Output only. The resource name of the account budget associated with this
   * summarized billable cost. AccountBudget resource names have the form:
   *
   * `customers/{customer_id}/accountBudgets/{account_budget_id}`
   *
   * @generated from field: optional string account_budget = 12;
   */
  accountBudget?: string;

  /**
   * Output only. The name of the account budget. It appears on the invoice
   * PDF as "Account budget".
   *
   * @generated from field: optional string account_budget_name = 13;
   */
  accountBudgetName?: string;

  /**
   * Output only. The purchase order number of the account budget. It appears
   * on the invoice PDF as "Purchase order".
   *
   * @generated from field: optional string purchase_order_number = 14;
   */
  purchaseOrderNumber?: string;

  /**
   * Output only. The pretax subtotal amount attributable to this budget
   * during the service period, in micros.
   *
   * @generated from field: optional int64 subtotal_amount_micros = 15;
   */
  subtotalAmountMicros?: bigint;

  /**
   * Output only. The tax amount attributable to this budget during the
   * service period, in micros.
   *
   * @generated from field: optional int64 tax_amount_micros = 16;
   */
  taxAmountMicros?: bigint;

  /**
   * Output only. The total amount attributable to this budget during the
   * service period, in micros. This equals the sum of the account budget
   * subtotal amount and the account budget tax amount.
   *
   * @generated from field: optional int64 total_amount_micros = 17;
   */
  totalAmountMicros?: bigint;

  /**
   * Output only. The billable activity date range of the account budget,
   * within the service date range of this invoice. The end date is inclusive.
   * This can be different from the account budget's start and end time.
   *
   * @generated from field: google.ads.googleads.v17.common.DateRange billable_activity_date_range = 9;
   */
  billableActivityDateRange?: DateRange;

  /**
   * Output only. The pretax served amount attributable to this budget during
   * the service period, in micros. This is only useful to reconcile invoice
   * and delivery data.
   *
   * @generated from field: optional int64 served_amount_micros = 18;
   */
  servedAmountMicros?: bigint;

  /**
   * Output only. The pretax billed amount attributable to this budget during
   * the service period, in micros. This does not account for any adjustments.
   *
   * @generated from field: optional int64 billed_amount_micros = 19;
   */
  billedAmountMicros?: bigint;

  /**
   * Output only. The pretax overdelivery amount attributable to this budget
   * during the service period, in micros (negative value).
   *
   * @generated from field: optional int64 overdelivery_amount_micros = 20;
   */
  overdeliveryAmountMicros?: bigint;

  /**
   * Output only. The pretax invalid activity amount attributable to this
   * budget in previous months, in micros (negative value).
   *
   * @generated from field: optional int64 invalid_activity_amount_micros = 21;
   */
  invalidActivityAmountMicros?: bigint;

  /**
   * Output only. The list of summarized invalid activity credits with
   * original linkages.
   *
   * @generated from field: repeated google.ads.googleads.v17.resources.Invoice.InvalidActivitySummary invalid_activity_summaries = 22;
   */
  invalidActivitySummaries: Invoice_InvalidActivitySummary[];
};

/**
 * Describes the message google.ads.googleads.v17.resources.Invoice.AccountBudgetSummary.
 * Use `create(Invoice_AccountBudgetSummarySchema)` to create a new message.
 */
export const Invoice_AccountBudgetSummarySchema: GenMessage<Invoice_AccountBudgetSummary> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_invoice, 0, 1);

/**
 * Details about the invalid activity for the invoice that contain
 * additional details about invoice against which corrections are made.
 *
 * @generated from message google.ads.googleads.v17.resources.Invoice.InvalidActivitySummary
 */
export type Invoice_InvalidActivitySummary = Message<"google.ads.googleads.v17.resources.Invoice.InvalidActivitySummary"> & {
  /**
   * Output only. Original month of service related to this invalid activity
   * credit.
   *
   * @generated from field: optional google.ads.googleads.v17.enums.MonthOfYearEnum.MonthOfYear original_month_of_service = 1;
   */
  originalMonthOfService?: MonthOfYearEnum_MonthOfYear;

  /**
   * Output only. Original year of service related to this invalid activity
   * credit.
   *
   * @generated from field: optional string original_year_of_service = 2;
   */
  originalYearOfService?: string;

  /**
   * Output only. Original invoice number related to this invalid activity
   * credit.
   *
   * @generated from field: optional string original_invoice_id = 3;
   */
  originalInvoiceId?: string;

  /**
   * Output only. Original account budget name related to this invalid
   * activity credit.
   *
   * @generated from field: optional string original_account_budget_name = 4;
   */
  originalAccountBudgetName?: string;

  /**
   * Output only. Original purchase order number related to this invalid
   * activity credit.
   *
   * @generated from field: optional string original_purchase_order_number = 5;
   */
  originalPurchaseOrderNumber?: string;

  /**
   * Output only. Invalid activity amount in micros.
   *
   * @generated from field: optional int64 amount_micros = 6;
   */
  amountMicros?: bigint;
};

/**
 * Describes the message google.ads.googleads.v17.resources.Invoice.InvalidActivitySummary.
 * Use `create(Invoice_InvalidActivitySummarySchema)` to create a new message.
 */
export const Invoice_InvalidActivitySummarySchema: GenMessage<Invoice_InvalidActivitySummary> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_resources_invoice, 0, 2);
