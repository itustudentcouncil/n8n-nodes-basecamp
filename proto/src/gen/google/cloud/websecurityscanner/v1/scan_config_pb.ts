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
// @generated from file google/cloud/websecurityscanner/v1/scan_config.proto (package google.cloud.websecurityscanner.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/websecurityscanner/v1/scan_config.proto.
 */
export const file_google_cloud_websecurityscanner_v1_scan_config: GenFile = /*@__PURE__*/
  fileDesc("CjRnb29nbGUvY2xvdWQvd2Vic2VjdXJpdHlzY2FubmVyL3YxL3NjYW5fY29uZmlnLnByb3RvEiJnb29nbGUuY2xvdWQud2Vic2VjdXJpdHlzY2FubmVyLnYxIsQNCgpTY2FuQ29uZmlnEgwKBG5hbWUYASABKAkSFAoMZGlzcGxheV9uYW1lGAIgASgJEg8KB21heF9xcHMYAyABKAUSFQoNc3RhcnRpbmdfdXJscxgEIAMoCRJVCg5hdXRoZW50aWNhdGlvbhgFIAEoCzI9Lmdvb2dsZS5jbG91ZC53ZWJzZWN1cml0eXNjYW5uZXIudjEuU2NhbkNvbmZpZy5BdXRoZW50aWNhdGlvbhJMCgp1c2VyX2FnZW50GAYgASgOMjguZ29vZ2xlLmNsb3VkLndlYnNlY3VyaXR5c2Nhbm5lci52MS5TY2FuQ29uZmlnLlVzZXJBZ2VudBIaChJibGFja2xpc3RfcGF0dGVybnMYByADKAkSSQoIc2NoZWR1bGUYCCABKAsyNy5nb29nbGUuY2xvdWQud2Vic2VjdXJpdHlzY2FubmVyLnYxLlNjYW5Db25maWcuU2NoZWR1bGUSdwohZXhwb3J0X3RvX3NlY3VyaXR5X2NvbW1hbmRfY2VudGVyGAogASgOMkwuZ29vZ2xlLmNsb3VkLndlYnNlY3VyaXR5c2Nhbm5lci52MS5TY2FuQ29uZmlnLkV4cG9ydFRvU2VjdXJpdHlDb21tYW5kQ2VudGVyEkwKCnJpc2tfbGV2ZWwYDCABKA4yOC5nb29nbGUuY2xvdWQud2Vic2VjdXJpdHlzY2FubmVyLnYxLlNjYW5Db25maWcuUmlza0xldmVsEhQKDG1hbmFnZWRfc2NhbhgNIAEoCBIWCg5zdGF0aWNfaXBfc2NhbhgOIAEoCBIhChlpZ25vcmVfaHR0cF9zdGF0dXNfZXJyb3JzGA8gASgIGtcFCg5BdXRoZW50aWNhdGlvbhJpCg5nb29nbGVfYWNjb3VudBgBIAEoCzJLLmdvb2dsZS5jbG91ZC53ZWJzZWN1cml0eXNjYW5uZXIudjEuU2NhbkNvbmZpZy5BdXRoZW50aWNhdGlvbi5Hb29nbGVBY2NvdW50QgIYAUgAEmUKDmN1c3RvbV9hY2NvdW50GAIgASgLMksuZ29vZ2xlLmNsb3VkLndlYnNlY3VyaXR5c2Nhbm5lci52MS5TY2FuQ29uZmlnLkF1dGhlbnRpY2F0aW9uLkN1c3RvbUFjY291bnRIABJlCg5pYXBfY3JlZGVudGlhbBgEIAEoCzJLLmdvb2dsZS5jbG91ZC53ZWJzZWN1cml0eXNjYW5uZXIudjEuU2NhbkNvbmZpZy5BdXRoZW50aWNhdGlvbi5JYXBDcmVkZW50aWFsSAAaNwoNR29vZ2xlQWNjb3VudBIQCgh1c2VybmFtZRgBIAEoCRIQCghwYXNzd29yZBgCIAEoCToCGAEaRgoNQ3VzdG9tQWNjb3VudBIQCgh1c2VybmFtZRgBIAEoCRIQCghwYXNzd29yZBgCIAEoCRIRCglsb2dpbl91cmwYAyABKAka+AEKDUlhcENyZWRlbnRpYWwSjgEKHWlhcF90ZXN0X3NlcnZpY2VfYWNjb3VudF9pbmZvGAEgASgLMmUuZ29vZ2xlLmNsb3VkLndlYnNlY3VyaXR5c2Nhbm5lci52MS5TY2FuQ29uZmlnLkF1dGhlbnRpY2F0aW9uLklhcENyZWRlbnRpYWwuSWFwVGVzdFNlcnZpY2VBY2NvdW50SW5mb0gAGkMKGUlhcFRlc3RTZXJ2aWNlQWNjb3VudEluZm8SJgoZdGFyZ2V0X2F1ZGllbmNlX2NsaWVudF9pZBgBIAEoCUID4EECQhEKD2lhcF9jcmVkZW50aWFsc0IQCg5hdXRoZW50aWNhdGlvbhpdCghTY2hlZHVsZRIxCg1zY2hlZHVsZV90aW1lGAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIeChZpbnRlcnZhbF9kdXJhdGlvbl9kYXlzGAIgASgFImAKCVVzZXJBZ2VudBIaChZVU0VSX0FHRU5UX1VOU1BFQ0lGSUVEEAASEAoMQ0hST01FX0xJTlVYEAESEgoOQ0hST01FX0FORFJPSUQQAhIRCg1TQUZBUklfSVBIT05FEAMiPAoJUmlza0xldmVsEhoKFlJJU0tfTEVWRUxfVU5TUEVDSUZJRUQQABIKCgZOT1JNQUwQARIHCgNMT1cQAiJtCh1FeHBvcnRUb1NlY3VyaXR5Q29tbWFuZENlbnRlchIxCi1FWFBPUlRfVE9fU0VDVVJJVFlfQ09NTUFORF9DRU5URVJfVU5TUEVDSUZJRUQQABILCgdFTkFCTEVEEAESDAoIRElTQUJMRUQQAkKFAgomY29tLmdvb2dsZS5jbG91ZC53ZWJzZWN1cml0eXNjYW5uZXIudjFCD1NjYW5Db25maWdQcm90b1ABWlZjbG91ZC5nb29nbGUuY29tL2dvL3dlYnNlY3VyaXR5c2Nhbm5lci9hcGl2MS93ZWJzZWN1cml0eXNjYW5uZXJwYjt3ZWJzZWN1cml0eXNjYW5uZXJwYqoCIkdvb2dsZS5DbG91ZC5XZWJTZWN1cml0eVNjYW5uZXIuVjHKAiJHb29nbGVcQ2xvdWRcV2ViU2VjdXJpdHlTY2FubmVyXFYx6gIlR29vZ2xlOjpDbG91ZDo6V2ViU2VjdXJpdHlTY2FubmVyOjpWMWIGcHJvdG8z", [file_google_api_field_behavior, file_google_protobuf_timestamp]);

/**
 * A ScanConfig resource contains the configurations to launch a scan.
 *
 * @generated from message google.cloud.websecurityscanner.v1.ScanConfig
 */
export type ScanConfig = Message<"google.cloud.websecurityscanner.v1.ScanConfig"> & {
  /**
   * The resource name of the ScanConfig. The name follows the format of
   * 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are
   * generated by the system.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The user provided display name of the ScanConfig.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * The maximum QPS during scanning. A valid value ranges from 5 to 20
   * inclusively. If the field is unspecified or its value is set 0, server will
   * default to 15. Other values outside of [5, 20] range will be rejected with
   * INVALID_ARGUMENT error.
   *
   * @generated from field: int32 max_qps = 3;
   */
  maxQps: number;

  /**
   * Required. The starting URLs from which the scanner finds site pages.
   *
   * @generated from field: repeated string starting_urls = 4;
   */
  startingUrls: string[];

  /**
   * The authentication configuration. If specified, service will use the
   * authentication configuration during scanning.
   *
   * @generated from field: google.cloud.websecurityscanner.v1.ScanConfig.Authentication authentication = 5;
   */
  authentication?: ScanConfig_Authentication;

  /**
   * The user agent used during scanning.
   *
   * @generated from field: google.cloud.websecurityscanner.v1.ScanConfig.UserAgent user_agent = 6;
   */
  userAgent: ScanConfig_UserAgent;

  /**
   * The excluded URL patterns as described in
   * https://cloud.google.com/security-command-center/docs/how-to-use-web-security-scanner#excluding_urls
   *
   * @generated from field: repeated string blacklist_patterns = 7;
   */
  blacklistPatterns: string[];

  /**
   * The schedule of the ScanConfig.
   *
   * @generated from field: google.cloud.websecurityscanner.v1.ScanConfig.Schedule schedule = 8;
   */
  schedule?: ScanConfig_Schedule;

  /**
   * Controls export of scan configurations and results to Security
   * Command Center.
   *
   * @generated from field: google.cloud.websecurityscanner.v1.ScanConfig.ExportToSecurityCommandCenter export_to_security_command_center = 10;
   */
  exportToSecurityCommandCenter: ScanConfig_ExportToSecurityCommandCenter;

  /**
   * The risk level selected for the scan
   *
   * @generated from field: google.cloud.websecurityscanner.v1.ScanConfig.RiskLevel risk_level = 12;
   */
  riskLevel: ScanConfig_RiskLevel;

  /**
   * Whether the scan config is managed by Web Security Scanner, output
   * only.
   *
   * @generated from field: bool managed_scan = 13;
   */
  managedScan: boolean;

  /**
   * Whether the scan configuration has enabled static IP address scan feature.
   * If enabled, the scanner will access applications from static IP addresses.
   *
   * @generated from field: bool static_ip_scan = 14;
   */
  staticIpScan: boolean;

  /**
   * Whether to keep scanning even if most requests return HTTP error codes.
   *
   * @generated from field: bool ignore_http_status_errors = 15;
   */
  ignoreHttpStatusErrors: boolean;
};

/**
 * Describes the message google.cloud.websecurityscanner.v1.ScanConfig.
 * Use `create(ScanConfigSchema)` to create a new message.
 */
export const ScanConfigSchema: GenMessage<ScanConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1_scan_config, 0);

/**
 * Scan authentication configuration.
 *
 * @generated from message google.cloud.websecurityscanner.v1.ScanConfig.Authentication
 */
export type ScanConfig_Authentication = Message<"google.cloud.websecurityscanner.v1.ScanConfig.Authentication"> & {
  /**
   * Required.
   * Authentication configuration
   *
   * @generated from oneof google.cloud.websecurityscanner.v1.ScanConfig.Authentication.authentication
   */
  authentication: {
    /**
     * Authentication using a Google account.
     *
     * @generated from field: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.GoogleAccount google_account = 1 [deprecated = true];
     * @deprecated
     */
    value: ScanConfig_Authentication_GoogleAccount;
    case: "googleAccount";
  } | {
    /**
     * Authentication using a custom account.
     *
     * @generated from field: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.CustomAccount custom_account = 2;
     */
    value: ScanConfig_Authentication_CustomAccount;
    case: "customAccount";
  } | {
    /**
     * Authentication using Identity-Aware-Proxy (IAP).
     *
     * @generated from field: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential iap_credential = 4;
     */
    value: ScanConfig_Authentication_IapCredential;
    case: "iapCredential";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.websecurityscanner.v1.ScanConfig.Authentication.
 * Use `create(ScanConfig_AuthenticationSchema)` to create a new message.
 */
export const ScanConfig_AuthenticationSchema: GenMessage<ScanConfig_Authentication> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1_scan_config, 0, 0);

/**
 * Describes authentication configuration that uses a Google account.
 *
 * @generated from message google.cloud.websecurityscanner.v1.ScanConfig.Authentication.GoogleAccount
 * @deprecated
 */
export type ScanConfig_Authentication_GoogleAccount = Message<"google.cloud.websecurityscanner.v1.ScanConfig.Authentication.GoogleAccount"> & {
  /**
   * Required. The user name of the Google account.
   *
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * Required. Input only. The password of the Google account. The credential is stored encrypted
   * and not returned in any response nor included in audit logs.
   *
   * @generated from field: string password = 2;
   */
  password: string;
};

/**
 * Describes the message google.cloud.websecurityscanner.v1.ScanConfig.Authentication.GoogleAccount.
 * Use `create(ScanConfig_Authentication_GoogleAccountSchema)` to create a new message.
 * @deprecated
 */
export const ScanConfig_Authentication_GoogleAccountSchema: GenMessage<ScanConfig_Authentication_GoogleAccount> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1_scan_config, 0, 0, 0);

/**
 * Describes authentication configuration that uses a custom account.
 *
 * @generated from message google.cloud.websecurityscanner.v1.ScanConfig.Authentication.CustomAccount
 */
export type ScanConfig_Authentication_CustomAccount = Message<"google.cloud.websecurityscanner.v1.ScanConfig.Authentication.CustomAccount"> & {
  /**
   * Required. The user name of the custom account.
   *
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * Required. Input only. The password of the custom account. The credential is stored encrypted
   * and not returned in any response nor included in audit logs.
   *
   * @generated from field: string password = 2;
   */
  password: string;

  /**
   * Required. The login form URL of the website.
   *
   * @generated from field: string login_url = 3;
   */
  loginUrl: string;
};

/**
 * Describes the message google.cloud.websecurityscanner.v1.ScanConfig.Authentication.CustomAccount.
 * Use `create(ScanConfig_Authentication_CustomAccountSchema)` to create a new message.
 */
export const ScanConfig_Authentication_CustomAccountSchema: GenMessage<ScanConfig_Authentication_CustomAccount> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1_scan_config, 0, 0, 1);

/**
 * Describes authentication configuration for Identity-Aware-Proxy (IAP).
 *
 * @generated from message google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential
 */
export type ScanConfig_Authentication_IapCredential = Message<"google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential"> & {
  /**
   * Identity-Aware-Proxy (IAP) Authentication Configuration
   *
   * @generated from oneof google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.iap_credentials
   */
  iapCredentials: {
    /**
     * Authentication configuration when Web-Security-Scanner service
     * account is added in Identity-Aware-Proxy (IAP) access policies.
     *
     * @generated from field: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IapTestServiceAccountInfo iap_test_service_account_info = 1;
     */
    value: ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo;
    case: "iapTestServiceAccountInfo";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.
 * Use `create(ScanConfig_Authentication_IapCredentialSchema)` to create a new message.
 */
export const ScanConfig_Authentication_IapCredentialSchema: GenMessage<ScanConfig_Authentication_IapCredential> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1_scan_config, 0, 0, 2);

/**
 * Describes authentication configuration when Web-Security-Scanner
 * service account is added in Identity-Aware-Proxy (IAP) access policies.
 *
 * @generated from message google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IapTestServiceAccountInfo
 */
export type ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo = Message<"google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IapTestServiceAccountInfo"> & {
  /**
   * Required. Describes OAuth2 client id of resources protected by
   * Identity-Aware-Proxy (IAP).
   *
   * @generated from field: string target_audience_client_id = 1;
   */
  targetAudienceClientId: string;
};

/**
 * Describes the message google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IapTestServiceAccountInfo.
 * Use `create(ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfoSchema)` to create a new message.
 */
export const ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfoSchema: GenMessage<ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1_scan_config, 0, 0, 2, 0);

/**
 * Scan schedule configuration.
 *
 * @generated from message google.cloud.websecurityscanner.v1.ScanConfig.Schedule
 */
export type ScanConfig_Schedule = Message<"google.cloud.websecurityscanner.v1.ScanConfig.Schedule"> & {
  /**
   * A timestamp indicates when the next run will be scheduled. The value is
   * refreshed by the server after each run. If unspecified, it will default
   * to current server time, which means the scan will be scheduled to start
   * immediately.
   *
   * @generated from field: google.protobuf.Timestamp schedule_time = 1;
   */
  scheduleTime?: Timestamp;

  /**
   * Required. The duration of time between executions in days.
   *
   * @generated from field: int32 interval_duration_days = 2;
   */
  intervalDurationDays: number;
};

/**
 * Describes the message google.cloud.websecurityscanner.v1.ScanConfig.Schedule.
 * Use `create(ScanConfig_ScheduleSchema)` to create a new message.
 */
export const ScanConfig_ScheduleSchema: GenMessage<ScanConfig_Schedule> = /*@__PURE__*/
  messageDesc(file_google_cloud_websecurityscanner_v1_scan_config, 0, 1);

/**
 * Type of user agents used for scanning.
 *
 * @generated from enum google.cloud.websecurityscanner.v1.ScanConfig.UserAgent
 */
export enum ScanConfig_UserAgent {
  /**
   * The user agent is unknown. Service will default to CHROME_LINUX.
   *
   * @generated from enum value: USER_AGENT_UNSPECIFIED = 0;
   */
  USER_AGENT_UNSPECIFIED = 0,

  /**
   * Chrome on Linux. This is the service default if unspecified.
   *
   * @generated from enum value: CHROME_LINUX = 1;
   */
  CHROME_LINUX = 1,

  /**
   * Chrome on Android.
   *
   * @generated from enum value: CHROME_ANDROID = 2;
   */
  CHROME_ANDROID = 2,

  /**
   * Safari on IPhone.
   *
   * @generated from enum value: SAFARI_IPHONE = 3;
   */
  SAFARI_IPHONE = 3,
}

/**
 * Describes the enum google.cloud.websecurityscanner.v1.ScanConfig.UserAgent.
 */
export const ScanConfig_UserAgentSchema: GenEnum<ScanConfig_UserAgent> = /*@__PURE__*/
  enumDesc(file_google_cloud_websecurityscanner_v1_scan_config, 0, 0);

/**
 * Scan risk levels supported by Web Security Scanner. LOW impact
 * scanning will minimize requests with the potential to modify data. To
 * achieve the maximum scan coverage, NORMAL risk level is recommended.
 *
 * @generated from enum google.cloud.websecurityscanner.v1.ScanConfig.RiskLevel
 */
export enum ScanConfig_RiskLevel {
  /**
   * Use default, which is NORMAL.
   *
   * @generated from enum value: RISK_LEVEL_UNSPECIFIED = 0;
   */
  RISK_LEVEL_UNSPECIFIED = 0,

  /**
   * Normal scanning (Recommended)
   *
   * @generated from enum value: NORMAL = 1;
   */
  NORMAL = 1,

  /**
   * Lower impact scanning
   *
   * @generated from enum value: LOW = 2;
   */
  LOW = 2,
}

/**
 * Describes the enum google.cloud.websecurityscanner.v1.ScanConfig.RiskLevel.
 */
export const ScanConfig_RiskLevelSchema: GenEnum<ScanConfig_RiskLevel> = /*@__PURE__*/
  enumDesc(file_google_cloud_websecurityscanner_v1_scan_config, 0, 1);

/**
 * Controls export of scan configurations and results to Security
 * Command Center.
 *
 * @generated from enum google.cloud.websecurityscanner.v1.ScanConfig.ExportToSecurityCommandCenter
 */
export enum ScanConfig_ExportToSecurityCommandCenter {
  /**
   * Use default, which is ENABLED.
   *
   * @generated from enum value: EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED = 0;
   */
  EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED = 0,

  /**
   * Export results of this scan to Security Command Center.
   *
   * @generated from enum value: ENABLED = 1;
   */
  ENABLED = 1,

  /**
   * Do not export results of this scan to Security Command Center.
   *
   * @generated from enum value: DISABLED = 2;
   */
  DISABLED = 2,
}

/**
 * Describes the enum google.cloud.websecurityscanner.v1.ScanConfig.ExportToSecurityCommandCenter.
 */
export const ScanConfig_ExportToSecurityCommandCenterSchema: GenEnum<ScanConfig_ExportToSecurityCommandCenter> = /*@__PURE__*/
  enumDesc(file_google_cloud_websecurityscanner_v1_scan_config, 0, 2);
