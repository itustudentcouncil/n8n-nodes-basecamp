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
// @generated from file google/cloud/paymentgateway/issuerswitch/v1/rules.proto (package google.cloud.paymentgateway.issuerswitch.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { AccountReference, ApiType, TransactionType } from "./common_fields_pb";
import { file_google_cloud_paymentgateway_issuerswitch_v1_common_fields } from "./common_fields_pb";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/paymentgateway/issuerswitch/v1/rules.proto.
 */
export const file_google_cloud_paymentgateway_issuerswitch_v1_rules: GenFile = /*@__PURE__*/
  fileDesc("Cjdnb29nbGUvY2xvdWQvcGF5bWVudGdhdGV3YXkvaXNzdWVyc3dpdGNoL3YxL3J1bGVzLnByb3RvEitnb29nbGUuY2xvdWQucGF5bWVudGdhdGV3YXkuaXNzdWVyc3dpdGNoLnYxIpYCCgRSdWxlEgwKBG5hbWUYASABKAkSGAoQcnVsZV9kZXNjcmlwdGlvbhgCIAEoCRJGCghhcGlfdHlwZRgDIAEoDjI0Lmdvb2dsZS5jbG91ZC5wYXltZW50Z2F0ZXdheS5pc3N1ZXJzd2l0Y2gudjEuQXBpVHlwZRJWChB0cmFuc2FjdGlvbl90eXBlGAQgASgOMjwuZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5UcmFuc2FjdGlvblR5cGU6RupBQwogaXNzdWVyc3dpdGNoLmdvb2dsZWFwaXMuY29tL1J1bGUSH3Byb2plY3RzL3twcm9qZWN0fS9ydWxlcy97cnVsZX0iiwIKDFJ1bGVNZXRhZGF0YRIMCgRuYW1lGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEkwKBHR5cGUYAyABKA4yPi5nb29nbGUuY2xvdWQucGF5bWVudGdhdGV3YXkuaXNzdWVyc3dpdGNoLnYxLlJ1bGVNZXRhZGF0YS5UeXBlIiYKBFR5cGUSFAoQVFlQRV9VTlNQRUNJRklFRBAAEggKBExJU1QQATpi6kFfCihpc3N1ZXJzd2l0Y2guZ29vZ2xlYXBpcy5jb20vUnVsZU1ldGFkYXRhEjNwcm9qZWN0cy97cHJvamVjdH0vcnVsZXMve3J1bGV9L21ldGFkYXRhL3ttZXRhZGF0YX0ikQIKEVJ1bGVNZXRhZGF0YVZhbHVlEhEKBG5hbWUYASABKAlCA+BBAxIMCgJpZBgCIAEoCUgAEloKEWFjY291bnRfcmVmZXJlbmNlGAMgASgLMj0uZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5BY2NvdW50UmVmZXJlbmNlSAA6dupBcwotaXNzdWVyc3dpdGNoLmdvb2dsZWFwaXMuY29tL1J1bGVNZXRhZGF0YVZhbHVlEkJwcm9qZWN0cy97cHJvamVjdH0vcnVsZXMve3J1bGV9L21ldGFkYXRhL3ttZXRhZGF0YX0vdmFsdWVzL3t2YWx1ZX1CBwoFdmFsdWUicwoQTGlzdFJ1bGVzUmVxdWVzdBI4CgZwYXJlbnQYASABKAlCKOBBAvpBIhIgaXNzdWVyc3dpdGNoLmdvb2dsZWFwaXMuY29tL1J1bGUSEQoJcGFnZV9zaXplGAIgASgFEhIKCnBhZ2VfdG9rZW4YAyABKAkiggEKEUxpc3RSdWxlc1Jlc3BvbnNlEkAKBXJ1bGVzGAEgAygLMjEuZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5SdWxlEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCRISCgp0b3RhbF9zaXplGAMgASgDIoIBChdMaXN0UnVsZU1ldGFkYXRhUmVxdWVzdBJACgZwYXJlbnQYASABKAlCMOBBAvpBKhIoaXNzdWVyc3dpdGNoLmdvb2dsZWFwaXMuY29tL1J1bGVNZXRhZGF0YRIRCglwYWdlX3NpemUYAiABKAUSEgoKcGFnZV90b2tlbhgDIAEoCSKZAQoYTGlzdFJ1bGVNZXRhZGF0YVJlc3BvbnNlElAKDXJ1bGVfbWV0YWRhdGEYASADKAsyOS5nb29nbGUuY2xvdWQucGF5bWVudGdhdGV3YXkuaXNzdWVyc3dpdGNoLnYxLlJ1bGVNZXRhZGF0YRIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkSEgoKdG90YWxfc2l6ZRgDIAEoAyKNAQodTGlzdFJ1bGVNZXRhZGF0YVZhbHVlc1JlcXVlc3QSRQoGcGFyZW50GAEgASgJQjXgQQL6QS8SLWlzc3VlcnN3aXRjaC5nb29nbGVhcGlzLmNvbS9SdWxlTWV0YWRhdGFWYWx1ZRIRCglwYWdlX3NpemUYAiABKAUSEgoKcGFnZV90b2tlbhgDIAEoCSKXAQoeTGlzdFJ1bGVNZXRhZGF0YVZhbHVlc1Jlc3BvbnNlElwKFHJ1bGVfbWV0YWRhdGFfdmFsdWVzGAEgAygLMj4uZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5SdWxlTWV0YWRhdGFWYWx1ZRIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkizgEKJEJhdGNoQ3JlYXRlUnVsZU1ldGFkYXRhVmFsdWVzUmVxdWVzdBJCCgZwYXJlbnQYASABKAlCMvpBLxItaXNzdWVyc3dpdGNoLmdvb2dsZWFwaXMuY29tL1J1bGVNZXRhZGF0YVZhbHVlEmIKCHJlcXVlc3RzGAIgAygLMksuZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5DcmVhdGVSdWxlTWV0YWRhdGFWYWx1ZVJlcXVlc3RCA+BBAiKEAQolQmF0Y2hDcmVhdGVSdWxlTWV0YWRhdGFWYWx1ZXNSZXNwb25zZRJbChNydWxlX21ldGFkYXRhX3ZhbHVlGAEgAygLMj4uZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5SdWxlTWV0YWRhdGFWYWx1ZSLJAQoeQ3JlYXRlUnVsZU1ldGFkYXRhVmFsdWVSZXF1ZXN0EkUKBnBhcmVudBgBIAEoCUI14EEC+kEvEi1pc3N1ZXJzd2l0Y2guZ29vZ2xlYXBpcy5jb20vUnVsZU1ldGFkYXRhVmFsdWUSYAoTcnVsZV9tZXRhZGF0YV92YWx1ZRgCIAEoCzI+Lmdvb2dsZS5jbG91ZC5wYXltZW50Z2F0ZXdheS5pc3N1ZXJzd2l0Y2gudjEuUnVsZU1ldGFkYXRhVmFsdWVCA+BBAiKwAQokQmF0Y2hEZWxldGVSdWxlTWV0YWRhdGFWYWx1ZXNSZXF1ZXN0EkIKBnBhcmVudBgBIAEoCUIy+kEvEi1pc3N1ZXJzd2l0Y2guZ29vZ2xlYXBpcy5jb20vUnVsZU1ldGFkYXRhVmFsdWUSRAoFbmFtZXMYAiADKAlCNeBBAvpBLwotaXNzdWVyc3dpdGNoLmdvb2dsZWFwaXMuY29tL1J1bGVNZXRhZGF0YVZhbHVlMvIJChFJc3N1ZXJTd2l0Y2hSdWxlcxK6AQoJTGlzdFJ1bGVzEj0uZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5MaXN0UnVsZXNSZXF1ZXN0Gj4uZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5MaXN0UnVsZXNSZXNwb25zZSIu2kEGcGFyZW50gtPkkwIfEh0vdjEve3BhcmVudD1wcm9qZWN0cy8qfS9ydWxlcxLaAQoQTGlzdFJ1bGVNZXRhZGF0YRJELmdvb2dsZS5jbG91ZC5wYXltZW50Z2F0ZXdheS5pc3N1ZXJzd2l0Y2gudjEuTGlzdFJ1bGVNZXRhZGF0YVJlcXVlc3QaRS5nb29nbGUuY2xvdWQucGF5bWVudGdhdGV3YXkuaXNzdWVyc3dpdGNoLnYxLkxpc3RSdWxlTWV0YWRhdGFSZXNwb25zZSI52kEGcGFyZW50gtPkkwIqEigvdjEve3BhcmVudD1wcm9qZWN0cy8qL3J1bGVzLyp9L21ldGFkYXRhEvUBChZMaXN0UnVsZU1ldGFkYXRhVmFsdWVzEkouZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5MaXN0UnVsZU1ldGFkYXRhVmFsdWVzUmVxdWVzdBpLLmdvb2dsZS5jbG91ZC5wYXltZW50Z2F0ZXdheS5pc3N1ZXJzd2l0Y2gudjEuTGlzdFJ1bGVNZXRhZGF0YVZhbHVlc1Jlc3BvbnNlIkLaQQZwYXJlbnSC0+STAjMSMS92MS97cGFyZW50PXByb2plY3RzLyovcnVsZXMvKi9tZXRhZGF0YS8qfS92YWx1ZXMSmQIKHUJhdGNoQ3JlYXRlUnVsZU1ldGFkYXRhVmFsdWVzElEuZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5CYXRjaENyZWF0ZVJ1bGVNZXRhZGF0YVZhbHVlc1JlcXVlc3QaUi5nb29nbGUuY2xvdWQucGF5bWVudGdhdGV3YXkuaXNzdWVyc3dpdGNoLnYxLkJhdGNoQ3JlYXRlUnVsZU1ldGFkYXRhVmFsdWVzUmVzcG9uc2UiUdpBBnBhcmVudILT5JMCQjoBKiI9L3YxL3twYXJlbnQ9cHJvamVjdHMvKi9ydWxlcy8qL21ldGFkYXRhLyp9L3ZhbHVlczpiYXRjaENyZWF0ZRLdAQodQmF0Y2hEZWxldGVSdWxlTWV0YWRhdGFWYWx1ZXMSUS5nb29nbGUuY2xvdWQucGF5bWVudGdhdGV3YXkuaXNzdWVyc3dpdGNoLnYxLkJhdGNoRGVsZXRlUnVsZU1ldGFkYXRhVmFsdWVzUmVxdWVzdBoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSJR2kEGcGFyZW50gtPkkwJCOgEqIj0vdjEve3BhcmVudD1wcm9qZWN0cy8qL3J1bGVzLyovbWV0YWRhdGEvKn0vdmFsdWVzOmJhdGNoRGVsZXRlGk/KQRtpc3N1ZXJzd2l0Y2guZ29vZ2xlYXBpcy5jb23SQS5odHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtQqICCi9jb20uZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MUIKUnVsZXNQcm90b1ABWlNjbG91ZC5nb29nbGUuY29tL2dvL3BheW1lbnRnYXRld2F5L2lzc3VlcnN3aXRjaC9hcGl2MS9pc3N1ZXJzd2l0Y2hwYjtpc3N1ZXJzd2l0Y2hwYqoCK0dvb2dsZS5DbG91ZC5QYXltZW50R2F0ZXdheS5Jc3N1ZXJTd2l0Y2guVjHKAitHb29nbGVcQ2xvdWRcUGF5bWVudEdhdGV3YXlcSXNzdWVyU3dpdGNoXFYx6gIvR29vZ2xlOjpDbG91ZDo6UGF5bWVudEdhdGV3YXk6Oklzc3VlclN3aXRjaDo6VjFiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_paymentgateway_issuerswitch_v1_common_fields, file_google_protobuf_empty]);

/**
 * A rule that is executed by the issuer switch while processing an
 * API transaction.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.Rule
 */
export type Rule = Message<"google.cloud.paymentgateway.issuerswitch.v1.Rule"> & {
  /**
   * The unique identifier for this resource.
   * Format: projects/{project}/rules/{rule}
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The description of the rule.
   *
   * @generated from field: string rule_description = 2;
   */
  ruleDescription: string;

  /**
   * The API Type for which this rule gets executed. A value of
   * `API_TYPE_UNSPECIFIED` indicates that the rule is executed for all API
   * transactions.
   *
   * @generated from field: google.cloud.paymentgateway.issuerswitch.v1.ApiType api_type = 3;
   */
  apiType: ApiType;

  /**
   * The transaction type for which this rule gets executed. A value of
   * `TRANSACTION_TYPE_UNSPECIFIED` indicates that the rule is executed for
   * all transaction types.
   *
   * @generated from field: google.cloud.paymentgateway.issuerswitch.v1.TransactionType transaction_type = 4;
   */
  transactionType: TransactionType;
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.Rule.
 * Use `create(RuleSchema)` to create a new message.
 */
export const RuleSchema: GenMessage<Rule> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 0);

/**
 * The metadata associated with a rule. This defines data that are used by the
 * rule during execution.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.RuleMetadata
 */
export type RuleMetadata = Message<"google.cloud.paymentgateway.issuerswitch.v1.RuleMetadata"> & {
  /**
   * The unique identifier for this resource.
   * Format: projects/{project}/rules/{rule}/metadata/{metadata}
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The description of the rule metadata.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * Type of rule metadata.
   *
   * @generated from field: google.cloud.paymentgateway.issuerswitch.v1.RuleMetadata.Type type = 3;
   */
  type: RuleMetadata_Type;
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.RuleMetadata.
 * Use `create(RuleMetadataSchema)` to create a new message.
 */
export const RuleMetadataSchema: GenMessage<RuleMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 1);

/**
 * The type of metadata.
 *
 * @generated from enum google.cloud.paymentgateway.issuerswitch.v1.RuleMetadata.Type
 */
export enum RuleMetadata_Type {
  /**
   * Unspecified type.
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  TYPE_UNSPECIFIED = 0,

  /**
   * List type. Indicates that the metadata contains a list of values which
   * the rule requires for execution.
   *
   * @generated from enum value: LIST = 1;
   */
  LIST = 1,
}

/**
 * Describes the enum google.cloud.paymentgateway.issuerswitch.v1.RuleMetadata.Type.
 */
export const RuleMetadata_TypeSchema: GenEnum<RuleMetadata_Type> = /*@__PURE__*/
  enumDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 1, 0);

/**
 * Represent a single value in a rule's metadata.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.RuleMetadataValue
 */
export type RuleMetadataValue = Message<"google.cloud.paymentgateway.issuerswitch.v1.RuleMetadataValue"> & {
  /**
   * Output only. The unique identifier for this resource.
   * Format: projects/{project}/rules/{rule}/metadata/{metadata}/values/{value}
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The value of the resource which could be of type string or
   * AccountReference. The metadata values for rules
   * BlockedPayeeAccountReqPayDebitRule, BlockedPayerAccountReqPayDebitRule,
   * BlockedPayeeAccountReqPayCreditRule and BlockedPayerAccountReqPayCreditRule
   * should be of type AccountReference. For all other rules, metadata values
   * should be of type string.
   *
   * The length of the `value` field depends on the type of
   * the value being used for the rule metadata. The following are the minimum
   * and maximum lengths for the different types of values.
   *
   * Value Type | Minimum Length | Maximum Length |
   * -------- | -------- | -------- |
   * Bank account IFSC   | 11   | 11   |
   * Bank account number   | 1   | 255  |
   * Device identifier   | 1   | 255   |
   * Mobile number   | 12   | 12  |
   * Virtual private address (VPA)   | 3   | 255   |
   *
   * @generated from oneof google.cloud.paymentgateway.issuerswitch.v1.RuleMetadataValue.value
   */
  value: {
    /**
     * The value for string metadata.
     *
     * @generated from field: string id = 2;
     */
    value: string;
    case: "id";
  } | {
    /**
     * The value for account reference metadata.
     *
     * @generated from field: google.cloud.paymentgateway.issuerswitch.v1.AccountReference account_reference = 3;
     */
    value: AccountReference;
    case: "accountReference";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.RuleMetadataValue.
 * Use `create(RuleMetadataValueSchema)` to create a new message.
 */
export const RuleMetadataValueSchema: GenMessage<RuleMetadataValue> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 2);

/**
 * Request body for the `ListRules` method.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.ListRulesRequest
 */
export type ListRulesRequest = Message<"google.cloud.paymentgateway.issuerswitch.v1.ListRulesRequest"> & {
  /**
   * Required. The parent resource must have the format of `projects/{project}`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The maximum number of rules to return. The service may return fewer
   * than this value. If unspecified or if the specified value is less than 50,
   * at most 50 rules will be returned. The maximum value is 1000; values above
   * 1000 will be coerced to 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * A page token, received from a previous `ListRulesRequest` call.
   * Specify this parameter to retrieve the next page of rules.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.ListRulesRequest.
 * Use `create(ListRulesRequestSchema)` to create a new message.
 */
export const ListRulesRequestSchema: GenMessage<ListRulesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 3);

/**
 * Response body for the `ListRules` method.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.ListRulesResponse
 */
export type ListRulesResponse = Message<"google.cloud.paymentgateway.issuerswitch.v1.ListRulesResponse"> & {
  /**
   * List of rules satisfying the specified filter criteria.
   *
   * @generated from field: repeated google.cloud.paymentgateway.issuerswitch.v1.Rule rules = 1;
   */
  rules: Rule[];

  /**
   * Pass this token in a subsequent `ListRulesRequest` call to continue to list
   * results. If all results have been returned, this field is an empty string
   * or not present in the response.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * Total number of rules matching request criteria across all pages.
   *
   * @generated from field: int64 total_size = 3;
   */
  totalSize: bigint;
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.ListRulesResponse.
 * Use `create(ListRulesResponseSchema)` to create a new message.
 */
export const ListRulesResponseSchema: GenMessage<ListRulesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 4);

/**
 * Request body for the `ListRuleMetadata` method.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataRequest
 */
export type ListRuleMetadataRequest = Message<"google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataRequest"> & {
  /**
   * Required. The parent resource. The format is
   * `projects/{project}/rules/{rule}`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The maximum number of rule metadata to return. The service may return fewer
   * than this value. If unspecified or if the specified value is less than 50,
   * at most 50 rule metadata will be returned. The maximum value is 1000;
   * values above 1000 will be coerced to 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * A page token, received from a previous `ListRuleMetadataRequest` call.
   * Specify this parameter to retrieve the next page of rule metadata.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataRequest.
 * Use `create(ListRuleMetadataRequestSchema)` to create a new message.
 */
export const ListRuleMetadataRequestSchema: GenMessage<ListRuleMetadataRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 5);

/**
 * Response body for the `ListRuleMetadata` method.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataResponse
 */
export type ListRuleMetadataResponse = Message<"google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataResponse"> & {
  /**
   * List of rule metadata associated with the rule.
   *
   * @generated from field: repeated google.cloud.paymentgateway.issuerswitch.v1.RuleMetadata rule_metadata = 1;
   */
  ruleMetadata: RuleMetadata[];

  /**
   * Pass this token in a subsequent `ListRuleMetadataRequest` call to continue
   * to list results. If all results have been returned, this field is an empty
   * string or not present in the response.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * Total number of rule metadata matching request criteria across all pages.
   *
   * @generated from field: int64 total_size = 3;
   */
  totalSize: bigint;
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataResponse.
 * Use `create(ListRuleMetadataResponseSchema)` to create a new message.
 */
export const ListRuleMetadataResponseSchema: GenMessage<ListRuleMetadataResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 6);

/**
 * Request body for the `ListRuleMetadataValues` method.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataValuesRequest
 */
export type ListRuleMetadataValuesRequest = Message<"google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataValuesRequest"> & {
  /**
   * Required. The parent resource. The format is
   * `projects/{project}/rules/{rule}/metadata/{metadata}`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The maximum number of metadata values to return. The service may return
   * fewer than this value. If unspecified or if the specified value is less
   * than 1, at most 50 rule metadata values will be returned. The maximum
   * value is 1000; values above 1000 will be coerced to 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * A page token received from a previous `ListRuleMetadataValuesRequest`
   * call. Specify this parameter to retrieve the next page of rule metadata
   * values.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataValuesRequest.
 * Use `create(ListRuleMetadataValuesRequestSchema)` to create a new message.
 */
export const ListRuleMetadataValuesRequestSchema: GenMessage<ListRuleMetadataValuesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 7);

/**
 * Response body for ListRuleMetadataValues. Contains a List of values for a
 * given rule metadata resource.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataValuesResponse
 */
export type ListRuleMetadataValuesResponse = Message<"google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataValuesResponse"> & {
  /**
   * List of values for a given rule metadata resource identifier.
   *
   * @generated from field: repeated google.cloud.paymentgateway.issuerswitch.v1.RuleMetadataValue rule_metadata_values = 1;
   */
  ruleMetadataValues: RuleMetadataValue[];

  /**
   * Pass this token in a subsequent `ListRuleMetadataValuesRequest` call to
   * continue to list results. If all results have been returned, this field is
   * an empty string or not present in the response.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.ListRuleMetadataValuesResponse.
 * Use `create(ListRuleMetadataValuesResponseSchema)` to create a new message.
 */
export const ListRuleMetadataValuesResponseSchema: GenMessage<ListRuleMetadataValuesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 8);

/**
 * Request body for the `BatchCreateRuleMetadataValues` method.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.BatchCreateRuleMetadataValuesRequest
 */
export type BatchCreateRuleMetadataValuesRequest = Message<"google.cloud.paymentgateway.issuerswitch.v1.BatchCreateRuleMetadataValuesRequest"> & {
  /**
   * The parent resource shared by all ruleMetadataValue being created. The
   * format is `projects/{project}/rules/{rule}/metadata/{metadata}`. The
   * [CreateRuleMetadataValueRequest.parent][google.cloud.paymentgateway.issuerswitch.v1.CreateRuleMetadataValueRequest.parent]
   * field in the
   * [CreateRuleMetadataValueRequest][google.cloud.paymentgateway.issuerswitch.v1.CreateRuleMetadataValueRequest]
   * messages contained in this request must match this field.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The request message specifying the resources to create.
   * A maximum of 1000 RuleMetadataValues can be created in a batch.
   *
   * @generated from field: repeated google.cloud.paymentgateway.issuerswitch.v1.CreateRuleMetadataValueRequest requests = 2;
   */
  requests: CreateRuleMetadataValueRequest[];
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.BatchCreateRuleMetadataValuesRequest.
 * Use `create(BatchCreateRuleMetadataValuesRequestSchema)` to create a new message.
 */
export const BatchCreateRuleMetadataValuesRequestSchema: GenMessage<BatchCreateRuleMetadataValuesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 9);

/**
 * Response body for the `BatchCreateRuleMetadataValues` method.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.BatchCreateRuleMetadataValuesResponse
 */
export type BatchCreateRuleMetadataValuesResponse = Message<"google.cloud.paymentgateway.issuerswitch.v1.BatchCreateRuleMetadataValuesResponse"> & {
  /**
   * List of RuleMetadataValue created.
   *
   * @generated from field: repeated google.cloud.paymentgateway.issuerswitch.v1.RuleMetadataValue rule_metadata_value = 1;
   */
  ruleMetadataValue: RuleMetadataValue[];
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.BatchCreateRuleMetadataValuesResponse.
 * Use `create(BatchCreateRuleMetadataValuesResponseSchema)` to create a new message.
 */
export const BatchCreateRuleMetadataValuesResponseSchema: GenMessage<BatchCreateRuleMetadataValuesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 10);

/**
 * Request for creating a single `RuleMetadataValue`.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.CreateRuleMetadataValueRequest
 */
export type CreateRuleMetadataValueRequest = Message<"google.cloud.paymentgateway.issuerswitch.v1.CreateRuleMetadataValueRequest"> & {
  /**
   * Required. The parent resource where this RuleMetadataValue will be created.
   * The format is `projects/{project}/rules/{rule}/metadata/{metadata}`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The rule metadata value to create or add to a list.
   *
   * @generated from field: google.cloud.paymentgateway.issuerswitch.v1.RuleMetadataValue rule_metadata_value = 2;
   */
  ruleMetadataValue?: RuleMetadataValue;
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.CreateRuleMetadataValueRequest.
 * Use `create(CreateRuleMetadataValueRequestSchema)` to create a new message.
 */
export const CreateRuleMetadataValueRequestSchema: GenMessage<CreateRuleMetadataValueRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 11);

/**
 * Request body for the `BatchDeleteRuleMetadataValues` method.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.BatchDeleteRuleMetadataValuesRequest
 */
export type BatchDeleteRuleMetadataValuesRequest = Message<"google.cloud.paymentgateway.issuerswitch.v1.BatchDeleteRuleMetadataValuesRequest"> & {
  /**
   * The parent resource shared by all RuleMetadataValues being deleted. The
   * format is `projects/{project}/rules/{rule}/metadata/{metadata}`. If this is
   * set, the parent of all of the RuleMetadataValues specified in the
   * list of names must match this field.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The names of the rule metadata values to delete.
   * A maximum of 1000 RuleMetadataValue can be deleted in a batch.
   * Format: projects/{project}/rules/{rule}/metadata/{metadata}/values/{value}
   *
   * @generated from field: repeated string names = 2;
   */
  names: string[];
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.BatchDeleteRuleMetadataValuesRequest.
 * Use `create(BatchDeleteRuleMetadataValuesRequestSchema)` to create a new message.
 */
export const BatchDeleteRuleMetadataValuesRequestSchema: GenMessage<BatchDeleteRuleMetadataValuesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 12);

/**
 * Manages rules used by the issuer switch's rules engine.
 *
 * @generated from service google.cloud.paymentgateway.issuerswitch.v1.IssuerSwitchRules
 */
export const IssuerSwitchRules: GenService<{
  /**
   * List all rules that are applied on transactions by the issuer switch. Rules
   * can be filtered on API type and transaction type.
   *
   * @generated from rpc google.cloud.paymentgateway.issuerswitch.v1.IssuerSwitchRules.ListRules
   */
  listRules: {
    methodKind: "unary";
    input: typeof ListRulesRequestSchema;
    output: typeof ListRulesResponseSchema;
  },
  /**
   * List all rule metadata for a given rule identifier.
   *
   * @generated from rpc google.cloud.paymentgateway.issuerswitch.v1.IssuerSwitchRules.ListRuleMetadata
   */
  listRuleMetadata: {
    methodKind: "unary";
    input: typeof ListRuleMetadataRequestSchema;
    output: typeof ListRuleMetadataResponseSchema;
  },
  /**
   * List all metadata values for a rule metadata identifier.
   *
   * @generated from rpc google.cloud.paymentgateway.issuerswitch.v1.IssuerSwitchRules.ListRuleMetadataValues
   */
  listRuleMetadataValues: {
    methodKind: "unary";
    input: typeof ListRuleMetadataValuesRequestSchema;
    output: typeof ListRuleMetadataValuesResponseSchema;
  },
  /**
   * Create (add) multiple values to the list of values under the specified rule
   * metadata resource.
   *
   * @generated from rpc google.cloud.paymentgateway.issuerswitch.v1.IssuerSwitchRules.BatchCreateRuleMetadataValues
   */
  batchCreateRuleMetadataValues: {
    methodKind: "unary";
    input: typeof BatchCreateRuleMetadataValuesRequestSchema;
    output: typeof BatchCreateRuleMetadataValuesResponseSchema;
  },
  /**
   * Delete (remove) multiple values from the list of values under the specified
   * rules metadata resource.
   *
   * @generated from rpc google.cloud.paymentgateway.issuerswitch.v1.IssuerSwitchRules.BatchDeleteRuleMetadataValues
   */
  batchDeleteRuleMetadataValues: {
    methodKind: "unary";
    input: typeof BatchDeleteRuleMetadataValuesRequestSchema;
    output: typeof EmptySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_paymentgateway_issuerswitch_v1_rules, 0);
