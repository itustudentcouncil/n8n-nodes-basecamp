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
// @generated from file google/ads/googleads/v16/resources/account_budget_proposal.proto (package google.ads.googleads.v16.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { AccountBudgetProposalStatusEnum_AccountBudgetProposalStatus } from "../enums/account_budget_proposal_status_pb";
import { file_google_ads_googleads_v16_enums_account_budget_proposal_status } from "../enums/account_budget_proposal_status_pb";
import type { AccountBudgetProposalTypeEnum_AccountBudgetProposalType } from "../enums/account_budget_proposal_type_pb";
import { file_google_ads_googleads_v16_enums_account_budget_proposal_type } from "../enums/account_budget_proposal_type_pb";
import type { SpendingLimitTypeEnum_SpendingLimitType } from "../enums/spending_limit_type_pb";
import { file_google_ads_googleads_v16_enums_spending_limit_type } from "../enums/spending_limit_type_pb";
import type { TimeTypeEnum_TimeType } from "../enums/time_type_pb";
import { file_google_ads_googleads_v16_enums_time_type } from "../enums/time_type_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/resources/account_budget_proposal.proto.
 */
export const file_google_ads_googleads_v16_resources_account_budget_proposal: GenFile = /*@__PURE__*/
  fileDesc("CkBnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzL2FjY291bnRfYnVkZ2V0X3Byb3Bvc2FsLnByb3RvEiJnb29nbGUuYWRzLmdvb2dsZWFkcy52MTYucmVzb3VyY2VzIv4OChVBY2NvdW50QnVkZ2V0UHJvcG9zYWwSTQoNcmVzb3VyY2VfbmFtZRgBIAEoCUI24EEF+kEwCi5nb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vQWNjb3VudEJ1ZGdldFByb3Bvc2FsEhQKAmlkGBkgASgDQgPgQQNIBYgBARJJCg1iaWxsaW5nX3NldHVwGBogASgJQi3gQQX6QScKJWdvb2dsZWFkcy5nb29nbGVhcGlzLmNvbS9CaWxsaW5nU2V0dXBIBogBARJLCg5hY2NvdW50X2J1ZGdldBgbIAEoCUIu4EEF+kEoCiZnb29nbGVhZHMuZ29vZ2xlYXBpcy5jb20vQWNjb3VudEJ1ZGdldEgHiAEBEnMKDXByb3Bvc2FsX3R5cGUYBCABKA4yVy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuQWNjb3VudEJ1ZGdldFByb3Bvc2FsVHlwZUVudW0uQWNjb3VudEJ1ZGdldFByb3Bvc2FsVHlwZUID4EEFEnAKBnN0YXR1cxgPIAEoDjJbLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcy5BY2NvdW50QnVkZ2V0UHJvcG9zYWxTdGF0dXNFbnVtLkFjY291bnRCdWRnZXRQcm9wb3NhbFN0YXR1c0ID4EEDEh8KDXByb3Bvc2VkX25hbWUYHCABKAlCA+BBBUgIiAEBEioKGGFwcHJvdmVkX3N0YXJ0X2RhdGVfdGltZRgeIAEoCUID4EEDSAmIAQESMAoecHJvcG9zZWRfcHVyY2hhc2Vfb3JkZXJfbnVtYmVyGCMgASgJQgPgQQVICogBARIgCg5wcm9wb3NlZF9ub3RlcxgkIAEoCUID4EEFSAuIAQESJAoSY3JlYXRpb25fZGF0ZV90aW1lGCUgASgJQgPgQQNIDIgBARIkChJhcHByb3ZhbF9kYXRlX3RpbWUYJiABKAlCA+BBA0gNiAEBEicKGHByb3Bvc2VkX3N0YXJ0X2RhdGVfdGltZRgdIAEoCUID4EEFSAASXgoYcHJvcG9zZWRfc3RhcnRfdGltZV90eXBlGAcgASgOMjUuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVudW1zLlRpbWVUeXBlRW51bS5UaW1lVHlwZUID4EEFSAASJQoWcHJvcG9zZWRfZW5kX2RhdGVfdGltZRgfIAEoCUID4EEFSAESXAoWcHJvcG9zZWRfZW5kX3RpbWVfdHlwZRgJIAEoDjI1Lmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcy5UaW1lVHlwZUVudW0uVGltZVR5cGVCA+BBBUgBEiUKFmFwcHJvdmVkX2VuZF9kYXRlX3RpbWUYICABKAlCA+BBA0gCElwKFmFwcHJvdmVkX2VuZF90aW1lX3R5cGUYFiABKA4yNS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuVGltZVR5cGVFbnVtLlRpbWVUeXBlQgPgQQNIAhItCh5wcm9wb3NlZF9zcGVuZGluZ19saW1pdF9taWNyb3MYISABKANCA+BBBUgDEnQKHHByb3Bvc2VkX3NwZW5kaW5nX2xpbWl0X3R5cGUYCyABKA4yRy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuU3BlbmRpbmdMaW1pdFR5cGVFbnVtLlNwZW5kaW5nTGltaXRUeXBlQgPgQQVIAxItCh5hcHByb3ZlZF9zcGVuZGluZ19saW1pdF9taWNyb3MYIiABKANCA+BBA0gEEnQKHGFwcHJvdmVkX3NwZW5kaW5nX2xpbWl0X3R5cGUYGCABKA4yRy5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuU3BlbmRpbmdMaW1pdFR5cGVFbnVtLlNwZW5kaW5nTGltaXRUeXBlQgPgQQNIBDqAAepBfQouZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0FjY291bnRCdWRnZXRQcm9wb3NhbBJLY3VzdG9tZXJzL3tjdXN0b21lcl9pZH0vYWNjb3VudEJ1ZGdldFByb3Bvc2Fscy97YWNjb3VudF9idWRnZXRfcHJvcG9zYWxfaWR9QhUKE3Byb3Bvc2VkX3N0YXJ0X3RpbWVCEwoRcHJvcG9zZWRfZW5kX3RpbWVCEwoRYXBwcm92ZWRfZW5kX3RpbWVCGQoXcHJvcG9zZWRfc3BlbmRpbmdfbGltaXRCGQoXYXBwcm92ZWRfc3BlbmRpbmdfbGltaXRCBQoDX2lkQhAKDl9iaWxsaW5nX3NldHVwQhEKD19hY2NvdW50X2J1ZGdldEIQCg5fcHJvcG9zZWRfbmFtZUIbChlfYXBwcm92ZWRfc3RhcnRfZGF0ZV90aW1lQiEKH19wcm9wb3NlZF9wdXJjaGFzZV9vcmRlcl9udW1iZXJCEQoPX3Byb3Bvc2VkX25vdGVzQhUKE19jcmVhdGlvbl9kYXRlX3RpbWVCFQoTX2FwcHJvdmFsX2RhdGVfdGltZUKMAgomY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXNCGkFjY291bnRCdWRnZXRQcm9wb3NhbFByb3RvUAFaS2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzO3Jlc291cmNlc6ICA0dBQaoCIkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNi5SZXNvdXJjZXPKAiJHb29nbGVcQWRzXEdvb2dsZUFkc1xWMTZcUmVzb3VyY2Vz6gImR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpSZXNvdXJjZXNiBnByb3RvMw", [file_google_ads_googleads_v16_enums_account_budget_proposal_status, file_google_ads_googleads_v16_enums_account_budget_proposal_type, file_google_ads_googleads_v16_enums_spending_limit_type, file_google_ads_googleads_v16_enums_time_type, file_google_api_field_behavior, file_google_api_resource]);

/**
 * An account-level budget proposal.
 *
 * All fields prefixed with 'proposed' may not necessarily be applied directly.
 * For example, proposed spending limits may be adjusted before their
 * application.  This is true if the 'proposed' field has an 'approved'
 * counterpart, for example, spending limits.
 *
 * Note that the proposal type (proposal_type) changes which fields are
 * required and which must remain empty.
 *
 * @generated from message google.ads.googleads.v16.resources.AccountBudgetProposal
 */
export type AccountBudgetProposal = Message<"google.ads.googleads.v16.resources.AccountBudgetProposal"> & {
  /**
   * Immutable. The resource name of the proposal.
   * AccountBudgetProposal resource names have the form:
   *
   * `customers/{customer_id}/accountBudgetProposals/{account_budget_proposal_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. The ID of the proposal.
   *
   * @generated from field: optional int64 id = 25;
   */
  id?: bigint;

  /**
   * Immutable. The resource name of the billing setup associated with this
   * proposal.
   *
   * @generated from field: optional string billing_setup = 26;
   */
  billingSetup?: string;

  /**
   * Immutable. The resource name of the account-level budget associated with
   * this proposal.
   *
   * @generated from field: optional string account_budget = 27;
   */
  accountBudget?: string;

  /**
   * Immutable. The type of this proposal, for example, END to end the budget
   * associated with this proposal.
   *
   * @generated from field: google.ads.googleads.v16.enums.AccountBudgetProposalTypeEnum.AccountBudgetProposalType proposal_type = 4;
   */
  proposalType: AccountBudgetProposalTypeEnum_AccountBudgetProposalType;

  /**
   * Output only. The status of this proposal.
   * When a new proposal is created, the status defaults to PENDING.
   *
   * @generated from field: google.ads.googleads.v16.enums.AccountBudgetProposalStatusEnum.AccountBudgetProposalStatus status = 15;
   */
  status: AccountBudgetProposalStatusEnum_AccountBudgetProposalStatus;

  /**
   * Immutable. The name to assign to the account-level budget.
   *
   * @generated from field: optional string proposed_name = 28;
   */
  proposedName?: string;

  /**
   * Output only. The approved start date time in yyyy-mm-dd hh:mm:ss format.
   *
   * @generated from field: optional string approved_start_date_time = 30;
   */
  approvedStartDateTime?: string;

  /**
   * Immutable. A purchase order number is a value that enables the user to help
   * them reference this budget in their monthly invoices.
   *
   * @generated from field: optional string proposed_purchase_order_number = 35;
   */
  proposedPurchaseOrderNumber?: string;

  /**
   * Immutable. Notes associated with this budget.
   *
   * @generated from field: optional string proposed_notes = 36;
   */
  proposedNotes?: string;

  /**
   * Output only. The date time when this account-level budget proposal was
   * created, which is not the same as its approval date time, if applicable.
   *
   * @generated from field: optional string creation_date_time = 37;
   */
  creationDateTime?: string;

  /**
   * Output only. The date time when this account-level budget was approved, if
   * applicable.
   *
   * @generated from field: optional string approval_date_time = 38;
   */
  approvalDateTime?: string;

  /**
   * The proposed start date time of the account-level budget, which cannot be
   * in the past.
   *
   * @generated from oneof google.ads.googleads.v16.resources.AccountBudgetProposal.proposed_start_time
   */
  proposedStartTime: {
    /**
     * Immutable. The proposed start date time in yyyy-mm-dd hh:mm:ss format.
     *
     * @generated from field: string proposed_start_date_time = 29;
     */
    value: string;
    case: "proposedStartDateTime";
  } | {
    /**
     * Immutable. The proposed start date time as a well-defined type, for
     * example, NOW.
     *
     * @generated from field: google.ads.googleads.v16.enums.TimeTypeEnum.TimeType proposed_start_time_type = 7;
     */
    value: TimeTypeEnum_TimeType;
    case: "proposedStartTimeType";
  } | { case: undefined; value?: undefined };

  /**
   * The proposed end date time of the account-level budget, which cannot be in
   * the past.
   *
   * @generated from oneof google.ads.googleads.v16.resources.AccountBudgetProposal.proposed_end_time
   */
  proposedEndTime: {
    /**
     * Immutable. The proposed end date time in yyyy-mm-dd hh:mm:ss format.
     *
     * @generated from field: string proposed_end_date_time = 31;
     */
    value: string;
    case: "proposedEndDateTime";
  } | {
    /**
     * Immutable. The proposed end date time as a well-defined type, for
     * example, FOREVER.
     *
     * @generated from field: google.ads.googleads.v16.enums.TimeTypeEnum.TimeType proposed_end_time_type = 9;
     */
    value: TimeTypeEnum_TimeType;
    case: "proposedEndTimeType";
  } | { case: undefined; value?: undefined };

  /**
   * The approved end date time of the account-level budget.
   *
   * @generated from oneof google.ads.googleads.v16.resources.AccountBudgetProposal.approved_end_time
   */
  approvedEndTime: {
    /**
     * Output only. The approved end date time in yyyy-mm-dd hh:mm:ss format.
     *
     * @generated from field: string approved_end_date_time = 32;
     */
    value: string;
    case: "approvedEndDateTime";
  } | {
    /**
     * Output only. The approved end date time as a well-defined type, for
     * example, FOREVER.
     *
     * @generated from field: google.ads.googleads.v16.enums.TimeTypeEnum.TimeType approved_end_time_type = 22;
     */
    value: TimeTypeEnum_TimeType;
    case: "approvedEndTimeType";
  } | { case: undefined; value?: undefined };

  /**
   * The proposed spending limit.
   *
   * @generated from oneof google.ads.googleads.v16.resources.AccountBudgetProposal.proposed_spending_limit
   */
  proposedSpendingLimit: {
    /**
     * Immutable. The proposed spending limit in micros.  One million is
     * equivalent to one unit.
     *
     * @generated from field: int64 proposed_spending_limit_micros = 33;
     */
    value: bigint;
    case: "proposedSpendingLimitMicros";
  } | {
    /**
     * Immutable. The proposed spending limit as a well-defined type, for
     * example, INFINITE.
     *
     * @generated from field: google.ads.googleads.v16.enums.SpendingLimitTypeEnum.SpendingLimitType proposed_spending_limit_type = 11;
     */
    value: SpendingLimitTypeEnum_SpendingLimitType;
    case: "proposedSpendingLimitType";
  } | { case: undefined; value?: undefined };

  /**
   * The approved spending limit.
   *
   * @generated from oneof google.ads.googleads.v16.resources.AccountBudgetProposal.approved_spending_limit
   */
  approvedSpendingLimit: {
    /**
     * Output only. The approved spending limit in micros.  One million is
     * equivalent to one unit.
     *
     * @generated from field: int64 approved_spending_limit_micros = 34;
     */
    value: bigint;
    case: "approvedSpendingLimitMicros";
  } | {
    /**
     * Output only. The approved spending limit as a well-defined type, for
     * example, INFINITE.
     *
     * @generated from field: google.ads.googleads.v16.enums.SpendingLimitTypeEnum.SpendingLimitType approved_spending_limit_type = 24;
     */
    value: SpendingLimitTypeEnum_SpendingLimitType;
    case: "approvedSpendingLimitType";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.ads.googleads.v16.resources.AccountBudgetProposal.
 * Use `create(AccountBudgetProposalSchema)` to create a new message.
 */
export const AccountBudgetProposalSchema: GenMessage<AccountBudgetProposal> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_account_budget_proposal, 0);
