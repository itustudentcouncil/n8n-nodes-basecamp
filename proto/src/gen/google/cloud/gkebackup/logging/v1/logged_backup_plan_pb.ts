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
// @generated from file google/cloud/gkebackup/logging/v1/logged_backup_plan.proto (package google.cloud.gkebackup.logging.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { EncryptionKey, NamespacedNames, Namespaces } from "./logged_common_pb";
import { file_google_cloud_gkebackup_logging_v1_logged_common } from "./logged_common_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/gkebackup/logging/v1/logged_backup_plan.proto.
 */
export const file_google_cloud_gkebackup_logging_v1_logged_backup_plan: GenFile = /*@__PURE__*/
  fileDesc("Cjpnb29nbGUvY2xvdWQvZ2tlYmFja3VwL2xvZ2dpbmcvdjEvbG9nZ2VkX2JhY2t1cF9wbGFuLnByb3RvEiFnb29nbGUuY2xvdWQuZ2tlYmFja3VwLmxvZ2dpbmcudjEizQcKEExvZ2dlZEJhY2t1cFBsYW4SEwoLZGVzY3JpcHRpb24YASABKAkSDwoHY2x1c3RlchgCIAEoCRJdChByZXRlbnRpb25fcG9saWN5GAMgASgLMkMuZ29vZ2xlLmNsb3VkLmdrZWJhY2t1cC5sb2dnaW5nLnYxLkxvZ2dlZEJhY2t1cFBsYW4uUmV0ZW50aW9uUG9saWN5Ek8KBmxhYmVscxgEIAMoCzI/Lmdvb2dsZS5jbG91ZC5na2ViYWNrdXAubG9nZ2luZy52MS5Mb2dnZWRCYWNrdXBQbGFuLkxhYmVsc0VudHJ5ElUKD2JhY2t1cF9zY2hlZHVsZRgFIAEoCzI8Lmdvb2dsZS5jbG91ZC5na2ViYWNrdXAubG9nZ2luZy52MS5Mb2dnZWRCYWNrdXBQbGFuLlNjaGVkdWxlEhMKC2RlYWN0aXZhdGVkGAYgASgIElcKDWJhY2t1cF9jb25maWcYByABKAsyQC5nb29nbGUuY2xvdWQuZ2tlYmFja3VwLmxvZ2dpbmcudjEuTG9nZ2VkQmFja3VwUGxhbi5CYWNrdXBDb25maWcaXgoPUmV0ZW50aW9uUG9saWN5Eh8KF2JhY2t1cF9kZWxldGVfbG9ja19kYXlzGAEgASgFEhoKEmJhY2t1cF9yZXRhaW5fZGF5cxgCIAEoBRIOCgZsb2NrZWQYAyABKAgaMQoIU2NoZWR1bGUSFQoNY3Jvbl9zY2hlZHVsZRgBIAEoCRIOCgZwYXVzZWQYAiABKAga2wIKDEJhY2t1cENvbmZpZxIYCg5hbGxfbmFtZXNwYWNlcxgBIAEoCEgAEkwKE3NlbGVjdGVkX25hbWVzcGFjZXMYAiABKAsyLS5nb29nbGUuY2xvdWQuZ2tlYmFja3VwLmxvZ2dpbmcudjEuTmFtZXNwYWNlc0gAElMKFXNlbGVjdGVkX2FwcGxpY2F0aW9ucxgDIAEoCzIyLmdvb2dsZS5jbG91ZC5na2ViYWNrdXAubG9nZ2luZy52MS5OYW1lc3BhY2VkTmFtZXNIABIbChNpbmNsdWRlX3ZvbHVtZV9kYXRhGAQgASgIEhcKD2luY2x1ZGVfc2VjcmV0cxgFIAEoCBJICg5lbmNyeXB0aW9uX2tleRgGIAEoCzIwLmdvb2dsZS5jbG91ZC5na2ViYWNrdXAubG9nZ2luZy52MS5FbmNyeXB0aW9uS2V5Qg4KDGJhY2t1cF9zY29wZRotCgtMYWJlbHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBQu0BCiFnb29nbGUuY2xvdWQuZ2tlYmFja3VwLmxvZ2dpbmcudjFCFUxvZ2dlZEJhY2t1cFBsYW5Qcm90b1ABWj9jbG91ZC5nb29nbGUuY29tL2dvL2drZWJhY2t1cC9sb2dnaW5nL2FwaXYxL2xvZ2dpbmdwYjtsb2dnaW5ncGKqAiFHb29nbGUuQ2xvdWQuR2tlQmFja3VwLkxvZ2dpbmcuVjHKAiFHb29nbGVcQ2xvdWRcR2tlQmFja3VwXExvZ2dpbmdcVjHqAiVHb29nbGU6OkNsb3VkOjpHa2VCYWNrdXA6OkxvZ2dpbmc6OlYxYgZwcm90bzM", [file_google_cloud_gkebackup_logging_v1_logged_common]);

/**
 * BackupPlan as stored in Platform log. It's used to log the details of
 * a createBackupPlan/updateBackupPlan request, so only fields that can be taken
 * from user input are included here.
 *
 * @generated from message google.cloud.gkebackup.logging.v1.LoggedBackupPlan
 */
export type LoggedBackupPlan = Message<"google.cloud.gkebackup.logging.v1.LoggedBackupPlan"> & {
  /**
   * User specified descriptive string for this BackupPlan.
   *
   * @generated from field: string description = 1;
   */
  description: string;

  /**
   * GCP resource name of the source cluster for this BackupPlan.
   *
   * @generated from field: string cluster = 2;
   */
  cluster: string;

  /**
   * RetentionPolicy governs lifecycle of Backups created under this plan.
   *
   * @generated from field: google.cloud.gkebackup.logging.v1.LoggedBackupPlan.RetentionPolicy retention_policy = 3;
   */
  retentionPolicy?: LoggedBackupPlan_RetentionPolicy;

  /**
   * A set of custom labels supplied by user.
   *
   * @generated from field: map<string, string> labels = 4;
   */
  labels: { [key: string]: string };

  /**
   * Defines scheduled Backup creation under this BackupPlan.
   *
   * @generated from field: google.cloud.gkebackup.logging.v1.LoggedBackupPlan.Schedule backup_schedule = 5;
   */
  backupSchedule?: LoggedBackupPlan_Schedule;

  /**
   * A flag indicates whether the plan has been deactivated.
   *
   * @generated from field: bool deactivated = 6;
   */
  deactivated: boolean;

  /**
   * Defines backup configuration of this BackupPlan.
   *
   * @generated from field: google.cloud.gkebackup.logging.v1.LoggedBackupPlan.BackupConfig backup_config = 7;
   */
  backupConfig?: LoggedBackupPlan_BackupConfig;
};

/**
 * Describes the message google.cloud.gkebackup.logging.v1.LoggedBackupPlan.
 * Use `create(LoggedBackupPlanSchema)` to create a new message.
 */
export const LoggedBackupPlanSchema: GenMessage<LoggedBackupPlan> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkebackup_logging_v1_logged_backup_plan, 0);

/**
 * RentionPolicy is an inner message type to define:
 * 1. When to automatically delete Backups created under this BackupPlan
 * 2. A plan level minimum Backup retain days which blocks deletion
 * 3. Lock to disallow any policy updates
 *
 * @generated from message google.cloud.gkebackup.logging.v1.LoggedBackupPlan.RetentionPolicy
 */
export type LoggedBackupPlan_RetentionPolicy = Message<"google.cloud.gkebackup.logging.v1.LoggedBackupPlan.RetentionPolicy"> & {
  /**
   * Number of days during which deletion of a Backup created under this
   * BackupPlan will be blocked.
   *
   * @generated from field: int32 backup_delete_lock_days = 1;
   */
  backupDeleteLockDays: number;

  /**
   * Number of days after which the service will delete a Backup.
   * If specified, a Backup created under this BackupPlan will be
   * automatically deleted after its age reaches create_time +
   * backup_retain_days.
   *
   * @generated from field: int32 backup_retain_days = 2;
   */
  backupRetainDays: number;

  /**
   * A flag denotes that the retention policy of this BackupPlan is locked.
   * If set to True, no further update is allowed on this policy, including
   * the 'locked' field itself.
   * Default to False.
   *
   * @generated from field: bool locked = 3;
   */
  locked: boolean;
};

/**
 * Describes the message google.cloud.gkebackup.logging.v1.LoggedBackupPlan.RetentionPolicy.
 * Use `create(LoggedBackupPlan_RetentionPolicySchema)` to create a new message.
 */
export const LoggedBackupPlan_RetentionPolicySchema: GenMessage<LoggedBackupPlan_RetentionPolicy> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkebackup_logging_v1_logged_backup_plan, 0, 0);

/**
 * Schedule, an inner message type defines a cron schedule.
 *
 * @generated from message google.cloud.gkebackup.logging.v1.LoggedBackupPlan.Schedule
 */
export type LoggedBackupPlan_Schedule = Message<"google.cloud.gkebackup.logging.v1.LoggedBackupPlan.Schedule"> & {
  /**
   * A cron style string schedule on which an operation will be executed.
   *
   * @generated from field: string cron_schedule = 1;
   */
  cronSchedule: string;

  /**
   * A flag to toggle scheduled operation.
   *
   * @generated from field: bool paused = 2;
   */
  paused: boolean;
};

/**
 * Describes the message google.cloud.gkebackup.logging.v1.LoggedBackupPlan.Schedule.
 * Use `create(LoggedBackupPlan_ScheduleSchema)` to create a new message.
 */
export const LoggedBackupPlan_ScheduleSchema: GenMessage<LoggedBackupPlan_Schedule> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkebackup_logging_v1_logged_backup_plan, 0, 1);

/**
 * BackupConfig, an inner message type defines the configuration of creating
 * a backup from this BackupPlan
 *
 * @generated from message google.cloud.gkebackup.logging.v1.LoggedBackupPlan.BackupConfig
 */
export type LoggedBackupPlan_BackupConfig = Message<"google.cloud.gkebackup.logging.v1.LoggedBackupPlan.BackupConfig"> & {
  /**
   * @generated from oneof google.cloud.gkebackup.logging.v1.LoggedBackupPlan.BackupConfig.backup_scope
   */
  backupScope: {
    /**
     * If set to true, backup whole cluster
     *
     * @generated from field: bool all_namespaces = 1;
     */
    value: boolean;
    case: "allNamespaces";
  } | {
    /**
     * If set, backup the list of namespaces
     *
     * @generated from field: google.cloud.gkebackup.logging.v1.Namespaces selected_namespaces = 2;
     */
    value: Namespaces;
    case: "selectedNamespaces";
  } | {
    /**
     * If set, backup the list of applications
     *
     * @generated from field: google.cloud.gkebackup.logging.v1.NamespacedNames selected_applications = 3;
     */
    value: NamespacedNames;
    case: "selectedApplications";
  } | { case: undefined; value?: undefined };

  /**
   * A boolean flag specifies whether volume data should be backed up
   *
   * @generated from field: bool include_volume_data = 4;
   */
  includeVolumeData: boolean;

  /**
   * A boolean flag specifies whether secrets should be backed up
   *
   * @generated from field: bool include_secrets = 5;
   */
  includeSecrets: boolean;

  /**
   * Custom encryption key. For preview, support GCP KMS only.
   * This only contains the key metadata, and no key material.
   *
   * @generated from field: google.cloud.gkebackup.logging.v1.EncryptionKey encryption_key = 6;
   */
  encryptionKey?: EncryptionKey;
};

/**
 * Describes the message google.cloud.gkebackup.logging.v1.LoggedBackupPlan.BackupConfig.
 * Use `create(LoggedBackupPlan_BackupConfigSchema)` to create a new message.
 */
export const LoggedBackupPlan_BackupConfigSchema: GenMessage<LoggedBackupPlan_BackupConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_gkebackup_logging_v1_logged_backup_plan, 0, 2);
