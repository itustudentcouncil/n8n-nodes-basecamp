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
// @generated from file google/cloud/cloudcontrolspartner/v1beta/violations.proto (package google.cloud.cloudcontrolspartner.v1beta, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Interval } from "../../../type/interval_pb";
import { file_google_type_interval } from "../../../type/interval_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/cloudcontrolspartner/v1beta/violations.proto.
 */
export const file_google_cloud_cloudcontrolspartner_v1beta_violations: GenFile = /*@__PURE__*/
  fileDesc("Cjlnb29nbGUvY2xvdWQvY2xvdWRjb250cm9sc3BhcnRuZXIvdjFiZXRhL3Zpb2xhdGlvbnMucHJvdG8SKGdvb2dsZS5jbG91ZC5jbG91ZGNvbnRyb2xzcGFydG5lci52MWJldGEiuQ0KCVZpb2xhdGlvbhIRCgRuYW1lGAEgASgJQgPgQQgSGAoLZGVzY3JpcHRpb24YAiABKAlCA+BBAxIzCgpiZWdpbl90aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjQKC3VwZGF0ZV90aW1lGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjUKDHJlc29sdmVfdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIVCghjYXRlZ29yeRgGIAEoCUID4EEDEk0KBXN0YXRlGAcgASgOMjkuZ29vZ2xlLmNsb3VkLmNsb3VkY29udHJvbHNwYXJ0bmVyLnYxYmV0YS5WaW9sYXRpb24uU3RhdGVCA+BBAxIoChhub25fY29tcGxpYW50X29yZ19wb2xpY3kYCCABKAlCBuBBA+BBBRIRCglmb2xkZXJfaWQYCSABKAMSWQoLcmVtZWRpYXRpb24YDSABKAsyPy5nb29nbGUuY2xvdWQuY2xvdWRjb250cm9sc3BhcnRuZXIudjFiZXRhLlZpb2xhdGlvbi5SZW1lZGlhdGlvbkID4EEDGtAHCgtSZW1lZGlhdGlvbhJnCgxpbnN0cnVjdGlvbnMYASABKAsyTC5nb29nbGUuY2xvdWQuY2xvdWRjb250cm9sc3BhcnRuZXIudjFiZXRhLlZpb2xhdGlvbi5SZW1lZGlhdGlvbi5JbnN0cnVjdGlvbnNCA+BBAhIYChBjb21wbGlhbnRfdmFsdWVzGAIgAygJEm4KEHJlbWVkaWF0aW9uX3R5cGUYAyABKA4yTy5nb29nbGUuY2xvdWQuY2xvdWRjb250cm9sc3BhcnRuZXIudjFiZXRhLlZpb2xhdGlvbi5SZW1lZGlhdGlvbi5SZW1lZGlhdGlvblR5cGVCA+BBAxqKAwoMSW5zdHJ1Y3Rpb25zEnAKE2djbG91ZF9pbnN0cnVjdGlvbnMYASABKAsyUy5nb29nbGUuY2xvdWQuY2xvdWRjb250cm9sc3BhcnRuZXIudjFiZXRhLlZpb2xhdGlvbi5SZW1lZGlhdGlvbi5JbnN0cnVjdGlvbnMuR2Nsb3VkEnIKFGNvbnNvbGVfaW5zdHJ1Y3Rpb25zGAIgASgLMlQuZ29vZ2xlLmNsb3VkLmNsb3VkY29udHJvbHNwYXJ0bmVyLnYxYmV0YS5WaW9sYXRpb24uUmVtZWRpYXRpb24uSW5zdHJ1Y3Rpb25zLkNvbnNvbGUaSgoGR2Nsb3VkEhcKD2djbG91ZF9jb21tYW5kcxgBIAMoCRINCgVzdGVwcxgCIAMoCRIYChBhZGRpdGlvbmFsX2xpbmtzGAMgAygJGkgKB0NvbnNvbGUSFAoMY29uc29sZV91cmlzGAEgAygJEg0KBXN0ZXBzGAIgAygJEhgKEGFkZGl0aW9uYWxfbGlua3MYAyADKAkiwAIKD1JlbWVkaWF0aW9uVHlwZRIgChxSRU1FRElBVElPTl9UWVBFX1VOU1BFQ0lGSUVEEAASLAooUkVNRURJQVRJT05fQk9PTEVBTl9PUkdfUE9MSUNZX1ZJT0xBVElPThABEjgKNFJFTUVESUFUSU9OX0xJU1RfQUxMT1dFRF9WQUxVRVNfT1JHX1BPTElDWV9WSU9MQVRJT04QAhI3CjNSRU1FRElBVElPTl9MSVNUX0RFTklFRF9WQUxVRVNfT1JHX1BPTElDWV9WSU9MQVRJT04QAxJGCkJSRU1FRElBVElPTl9SRVNUUklDVF9DTUVLX0NSWVBUT19LRVlfUFJPSkVDVFNfT1JHX1BPTElDWV9WSU9MQVRJT04QBBIiCh5SRU1FRElBVElPTl9SRVNPVVJDRV9WSU9MQVRJT04QBSJLCgVTdGF0ZRIVChFTVEFURV9VTlNQRUNJRklFRBAAEgwKCFJFU09MVkVEEAESDgoKVU5SRVNPTFZFRBACEg0KCUVYQ0VQVElPThADOr4B6kG6AQotY2xvdWRjb250cm9sc3BhcnRuZXIuZ29vZ2xlYXBpcy5jb20vVmlvbGF0aW9uEnJvcmdhbml6YXRpb25zL3tvcmdhbml6YXRpb259L2xvY2F0aW9ucy97bG9jYXRpb259L2N1c3RvbWVycy97Y3VzdG9tZXJ9L3dvcmtsb2Fkcy97d29ya2xvYWR9L3Zpb2xhdGlvbnMve3Zpb2xhdGlvbn0qCnZpb2xhdGlvbnMyCXZpb2xhdGlvbiLpAQoVTGlzdFZpb2xhdGlvbnNSZXF1ZXN0EkUKBnBhcmVudBgBIAEoCUI14EEC+kEvEi1jbG91ZGNvbnRyb2xzcGFydG5lci5nb29nbGVhcGlzLmNvbS9WaW9sYXRpb24SFgoJcGFnZV9zaXplGAIgASgFQgPgQQESFwoKcGFnZV90b2tlbhgDIAEoCUID4EEBEhMKBmZpbHRlchgEIAEoCUID4EEBEhUKCG9yZGVyX2J5GAUgASgJQgPgQQESLAoIaW50ZXJ2YWwYBiABKAsyFS5nb29nbGUudHlwZS5JbnRlcnZhbEID4EEBIo8BChZMaXN0VmlvbGF0aW9uc1Jlc3BvbnNlEkcKCnZpb2xhdGlvbnMYASADKAsyMy5nb29nbGUuY2xvdWQuY2xvdWRjb250cm9sc3BhcnRuZXIudjFiZXRhLlZpb2xhdGlvbhIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkSEwoLdW5yZWFjaGFibGUYAyADKAkiWgoTR2V0VmlvbGF0aW9uUmVxdWVzdBJDCgRuYW1lGAEgASgJQjXgQQL6QS8KLWNsb3VkY29udHJvbHNwYXJ0bmVyLmdvb2dsZWFwaXMuY29tL1Zpb2xhdGlvbkKnAgosY29tLmdvb2dsZS5jbG91ZC5jbG91ZGNvbnRyb2xzcGFydG5lci52MWJldGFCD1Zpb2xhdGlvbnNQcm90b1ABWmBjbG91ZC5nb29nbGUuY29tL2dvL2Nsb3VkY29udHJvbHNwYXJ0bmVyL2FwaXYxYmV0YS9jbG91ZGNvbnRyb2xzcGFydG5lcnBiO2Nsb3VkY29udHJvbHNwYXJ0bmVycGKqAihHb29nbGUuQ2xvdWQuQ2xvdWRDb250cm9sc1BhcnRuZXIuVjFCZXRhygIoR29vZ2xlXENsb3VkXENsb3VkQ29udHJvbHNQYXJ0bmVyXFYxYmV0YeoCK0dvb2dsZTo6Q2xvdWQ6OkNsb3VkQ29udHJvbHNQYXJ0bmVyOjpWMWJldGFiBnByb3RvMw", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp, file_google_type_interval]);

/**
 * Details of resource Violation
 *
 * @generated from message google.cloud.cloudcontrolspartner.v1beta.Violation
 */
export type Violation = Message<"google.cloud.cloudcontrolspartner.v1beta.Violation"> & {
  /**
   * Identifier. Format:
   * `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/violations/{violation}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Description for the Violation.
   * e.g. OrgPolicy gcp.resourceLocations has non compliant value.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * Output only. Time of the event which triggered the Violation.
   *
   * @generated from field: google.protobuf.Timestamp begin_time = 3;
   */
  beginTime?: Timestamp;

  /**
   * Output only. The last time when the Violation record was updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 4;
   */
  updateTime?: Timestamp;

  /**
   * Output only. Time of the event which fixed the Violation.
   * If the violation is ACTIVE this will be empty.
   *
   * @generated from field: google.protobuf.Timestamp resolve_time = 5;
   */
  resolveTime?: Timestamp;

  /**
   * Output only. Category under which this violation is mapped.
   * e.g. Location, Service Usage, Access, Encryption, etc.
   *
   * @generated from field: string category = 6;
   */
  category: string;

  /**
   * Output only. State of the violation
   *
   * @generated from field: google.cloud.cloudcontrolspartner.v1beta.Violation.State state = 7;
   */
  state: Violation_State;

  /**
   * Output only. Immutable. Name of the OrgPolicy which was modified with
   * non-compliant change and resulted this violation. Format:
   *  `projects/{project_number}/policies/{constraint_name}`
   *  `folders/{folder_id}/policies/{constraint_name}`
   *  `organizations/{organization_id}/policies/{constraint_name}`
   *
   * @generated from field: string non_compliant_org_policy = 8;
   */
  nonCompliantOrgPolicy: string;

  /**
   * The folder_id of the violation
   *
   * @generated from field: int64 folder_id = 9;
   */
  folderId: bigint;

  /**
   * Output only. Compliance violation remediation
   *
   * @generated from field: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation remediation = 13;
   */
  remediation?: Violation_Remediation;
};

/**
 * Describes the message google.cloud.cloudcontrolspartner.v1beta.Violation.
 * Use `create(ViolationSchema)` to create a new message.
 */
export const ViolationSchema: GenMessage<Violation> = /*@__PURE__*/
  messageDesc(file_google_cloud_cloudcontrolspartner_v1beta_violations, 0);

/**
 * Represents remediation guidance to resolve compliance violation for
 * AssuredWorkload
 *
 * @generated from message google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation
 */
export type Violation_Remediation = Message<"google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation"> & {
  /**
   * Required. Remediation instructions to resolve violations
   *
   * @generated from field: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions instructions = 1;
   */
  instructions?: Violation_Remediation_Instructions;

  /**
   * Values that can resolve the violation
   * For example: for list org policy violations, this will either be the list
   * of allowed or denied values
   *
   * @generated from field: repeated string compliant_values = 2;
   */
  compliantValues: string[];

  /**
   * Output only. Remediation type based on the type of org policy values
   * violated
   *
   * @generated from field: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.RemediationType remediation_type = 3;
   */
  remediationType: Violation_Remediation_RemediationType;
};

/**
 * Describes the message google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.
 * Use `create(Violation_RemediationSchema)` to create a new message.
 */
export const Violation_RemediationSchema: GenMessage<Violation_Remediation> = /*@__PURE__*/
  messageDesc(file_google_cloud_cloudcontrolspartner_v1beta_violations, 0, 0);

/**
 * Instructions to remediate violation
 *
 * @generated from message google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions
 */
export type Violation_Remediation_Instructions = Message<"google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions"> & {
  /**
   * Remediation instructions to resolve violation via gcloud cli
   *
   * @generated from field: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Gcloud gcloud_instructions = 1;
   */
  gcloudInstructions?: Violation_Remediation_Instructions_Gcloud;

  /**
   * Remediation instructions to resolve violation via cloud console
   *
   * @generated from field: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Console console_instructions = 2;
   */
  consoleInstructions?: Violation_Remediation_Instructions_Console;
};

/**
 * Describes the message google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.
 * Use `create(Violation_Remediation_InstructionsSchema)` to create a new message.
 */
export const Violation_Remediation_InstructionsSchema: GenMessage<Violation_Remediation_Instructions> = /*@__PURE__*/
  messageDesc(file_google_cloud_cloudcontrolspartner_v1beta_violations, 0, 0, 0);

/**
 * Remediation instructions to resolve violation via gcloud cli
 *
 * @generated from message google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Gcloud
 */
export type Violation_Remediation_Instructions_Gcloud = Message<"google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Gcloud"> & {
  /**
   * Gcloud command to resolve violation
   *
   * @generated from field: repeated string gcloud_commands = 1;
   */
  gcloudCommands: string[];

  /**
   * Steps to resolve violation via gcloud cli
   *
   * @generated from field: repeated string steps = 2;
   */
  steps: string[];

  /**
   * Additional urls for more information about steps
   *
   * @generated from field: repeated string additional_links = 3;
   */
  additionalLinks: string[];
};

/**
 * Describes the message google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Gcloud.
 * Use `create(Violation_Remediation_Instructions_GcloudSchema)` to create a new message.
 */
export const Violation_Remediation_Instructions_GcloudSchema: GenMessage<Violation_Remediation_Instructions_Gcloud> = /*@__PURE__*/
  messageDesc(file_google_cloud_cloudcontrolspartner_v1beta_violations, 0, 0, 0, 0);

/**
 * Remediation instructions to resolve violation via cloud console
 *
 * @generated from message google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Console
 */
export type Violation_Remediation_Instructions_Console = Message<"google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Console"> & {
  /**
   * Link to console page where violations can be resolved
   *
   * @generated from field: repeated string console_uris = 1;
   */
  consoleUris: string[];

  /**
   * Steps to resolve violation via cloud console
   *
   * @generated from field: repeated string steps = 2;
   */
  steps: string[];

  /**
   * Additional urls for more information about steps
   *
   * @generated from field: repeated string additional_links = 3;
   */
  additionalLinks: string[];
};

/**
 * Describes the message google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Console.
 * Use `create(Violation_Remediation_Instructions_ConsoleSchema)` to create a new message.
 */
export const Violation_Remediation_Instructions_ConsoleSchema: GenMessage<Violation_Remediation_Instructions_Console> = /*@__PURE__*/
  messageDesc(file_google_cloud_cloudcontrolspartner_v1beta_violations, 0, 0, 0, 1);

/**
 * Classifying remediation into various types based on the kind of
 * violation. For example, violations caused due to changes in boolean org
 * policy requires different remediation instructions compared to violation
 * caused due to changes in allowed values of list org policy.
 *
 * @generated from enum google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.RemediationType
 */
export enum Violation_Remediation_RemediationType {
  /**
   * Unspecified remediation type
   *
   * @generated from enum value: REMEDIATION_TYPE_UNSPECIFIED = 0;
   */
  REMEDIATION_TYPE_UNSPECIFIED = 0,

  /**
   * Remediation type for boolean org policy
   *
   * @generated from enum value: REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION = 1;
   */
  REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION = 1,

  /**
   * Remediation type for list org policy which have allowed values in the
   * monitoring rule
   *
   * @generated from enum value: REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION = 2;
   */
  REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION = 2,

  /**
   * Remediation type for list org policy which have denied values in the
   * monitoring rule
   *
   * @generated from enum value: REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION = 3;
   */
  REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION = 3,

  /**
   * Remediation type for gcp.restrictCmekCryptoKeyProjects
   *
   * @generated from enum value: REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION = 4;
   */
  REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION = 4,

  /**
   * Remediation type for resource violation.
   *
   * @generated from enum value: REMEDIATION_RESOURCE_VIOLATION = 5;
   */
  REMEDIATION_RESOURCE_VIOLATION = 5,
}

/**
 * Describes the enum google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.RemediationType.
 */
export const Violation_Remediation_RemediationTypeSchema: GenEnum<Violation_Remediation_RemediationType> = /*@__PURE__*/
  enumDesc(file_google_cloud_cloudcontrolspartner_v1beta_violations, 0, 0, 0);

/**
 * Violation State Values
 *
 * @generated from enum google.cloud.cloudcontrolspartner.v1beta.Violation.State
 */
export enum Violation_State {
  /**
   * Unspecified state.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Violation is resolved.
   *
   * @generated from enum value: RESOLVED = 1;
   */
  RESOLVED = 1,

  /**
   * Violation is Unresolved
   *
   * @generated from enum value: UNRESOLVED = 2;
   */
  UNRESOLVED = 2,

  /**
   * Violation is Exception
   *
   * @generated from enum value: EXCEPTION = 3;
   */
  EXCEPTION = 3,
}

/**
 * Describes the enum google.cloud.cloudcontrolspartner.v1beta.Violation.State.
 */
export const Violation_StateSchema: GenEnum<Violation_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_cloudcontrolspartner_v1beta_violations, 0, 0);

/**
 * Message for requesting list of Violations
 *
 * @generated from message google.cloud.cloudcontrolspartner.v1beta.ListViolationsRequest
 */
export type ListViolationsRequest = Message<"google.cloud.cloudcontrolspartner.v1beta.ListViolationsRequest"> & {
  /**
   * Required. Parent resource
   * Format
   * `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. The maximum number of customers row to return. The service may
   * return fewer than this value. If unspecified, at most 10 customers will be
   * returned.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. A page token, received from a previous `ListViolations` call.
   * Provide this to retrieve the subsequent page.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * Optional. Filtering results
   *
   * @generated from field: string filter = 4;
   */
  filter: string;

  /**
   * Optional. Hint for how to order the results
   *
   * @generated from field: string order_by = 5;
   */
  orderBy: string;

  /**
   * Optional. Specifies the interval for retrieving violations.
   * if unspecified, all violations will be returned.
   *
   * @generated from field: google.type.Interval interval = 6;
   */
  interval?: Interval;
};

/**
 * Describes the message google.cloud.cloudcontrolspartner.v1beta.ListViolationsRequest.
 * Use `create(ListViolationsRequestSchema)` to create a new message.
 */
export const ListViolationsRequestSchema: GenMessage<ListViolationsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_cloudcontrolspartner_v1beta_violations, 1);

/**
 * Response message for list customer violation requests
 *
 * @generated from message google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse
 */
export type ListViolationsResponse = Message<"google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse"> & {
  /**
   * List of violation
   *
   * @generated from field: repeated google.cloud.cloudcontrolspartner.v1beta.Violation violations = 1;
   */
  violations: Violation[];

  /**
   * A token that can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * Workloads that could not be reached due to permission errors or any other
   * error. Ref: https://google.aip.dev/217
   *
   * @generated from field: repeated string unreachable = 3;
   */
  unreachable: string[];
};

/**
 * Describes the message google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse.
 * Use `create(ListViolationsResponseSchema)` to create a new message.
 */
export const ListViolationsResponseSchema: GenMessage<ListViolationsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_cloudcontrolspartner_v1beta_violations, 2);

/**
 * Message for getting a Violation
 *
 * @generated from message google.cloud.cloudcontrolspartner.v1beta.GetViolationRequest
 */
export type GetViolationRequest = Message<"google.cloud.cloudcontrolspartner.v1beta.GetViolationRequest"> & {
  /**
   * Required. Format:
   * `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/violations/{violation}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.cloudcontrolspartner.v1beta.GetViolationRequest.
 * Use `create(GetViolationRequestSchema)` to create a new message.
 */
export const GetViolationRequestSchema: GenMessage<GetViolationRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_cloudcontrolspartner_v1beta_violations, 3);
