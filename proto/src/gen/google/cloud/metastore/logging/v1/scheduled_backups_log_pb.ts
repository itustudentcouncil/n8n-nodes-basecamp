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
// @generated from file google/cloud/metastore/logging/v1/scheduled_backups_log.proto (package google.cloud.metastore.logging.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/metastore/logging/v1/scheduled_backups_log.proto.
 */
export const file_google_cloud_metastore_logging_v1_scheduled_backups_log: GenFile = /*@__PURE__*/
  fileDesc("Cj1nb29nbGUvY2xvdWQvbWV0YXN0b3JlL2xvZ2dpbmcvdjEvc2NoZWR1bGVkX2JhY2t1cHNfbG9nLnByb3RvEiFnb29nbGUuY2xvdWQubWV0YXN0b3JlLmxvZ2dpbmcudjEiggMKF1NjaGVkdWxlZEJhY2t1cExvZ0VudHJ5EhEKCWJhY2t1cF9pZBgBIAEoCRIPCgdzZXJ2aWNlGAIgASgJEi4KCnN0YXJ0X3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEiwKCGVuZF90aW1lGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBJUCgVzdGF0ZRgFIAEoDjJALmdvb2dsZS5jbG91ZC5tZXRhc3RvcmUubG9nZ2luZy52MS5TY2hlZHVsZWRCYWNrdXBMb2dFbnRyeS5TdGF0ZUID4EEDEhkKEWJhY2t1cF9zaXplX2J5dGVzGAYgASgDEhcKD2JhY2t1cF9sb2NhdGlvbhgHIAEoCRIPCgdtZXNzYWdlGAggASgJIkoKBVN0YXRlEhUKEVNUQVRFX1VOU1BFQ0lGSUVEEAASDwoLSU5fUFJPR1JFU1MQARINCglTVUNDRUVERUQQAhIKCgZGQUlMRUQQA0KAAQohZ29vZ2xlLmNsb3VkLm1ldGFzdG9yZS5sb2dnaW5nLnYxQhhTY2hlZHVsZWRCYWNrdXBzTG9nUHJvdG9QAVo/Y2xvdWQuZ29vZ2xlLmNvbS9nby9tZXRhc3RvcmUvbG9nZ2luZy9hcGl2MS9sb2dnaW5ncGI7bG9nZ2luZ3BiYgZwcm90bzM", [file_google_api_field_behavior, file_google_protobuf_timestamp]);

/**
 * Cloud Logging log schema for scheduled backup events.
 *
 * @generated from message google.cloud.metastore.logging.v1.ScheduledBackupLogEntry
 */
export type ScheduledBackupLogEntry = Message<"google.cloud.metastore.logging.v1.ScheduledBackupLogEntry"> & {
  /**
   * The ID of the backup.
   *
   * @generated from field: string backup_id = 1;
   */
  backupId: string;

  /**
   * The relative resource name of a Metastore service in the form of
   * `projects/{project_id}/locations/{location_id}/services/{service_id}`
   *
   * @generated from field: string service = 2;
   */
  service: string;

  /**
   * Timestamp when the backup was started.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 3;
   */
  startTime?: Timestamp;

  /**
   * Timestamp when the backup was completed.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 4;
   */
  endTime?: Timestamp;

  /**
   * Output only. The current state of the backup.
   *
   * @generated from field: google.cloud.metastore.logging.v1.ScheduledBackupLogEntry.State state = 5;
   */
  state: ScheduledBackupLogEntry_State;

  /**
   * Size of the backup data in bytes.
   *
   * @generated from field: int64 backup_size_bytes = 6;
   */
  backupSizeBytes: bigint;

  /**
   * A Cloud Storage URI of a folder, in the format
   * `gs://<bucket_name>/<path_inside_bucket>`.
   *
   * @generated from field: string backup_location = 7;
   */
  backupLocation: string;

  /**
   * Message that provides (optional) details about the backup.
   *
   * @generated from field: string message = 8;
   */
  message: string;
};

/**
 * Describes the message google.cloud.metastore.logging.v1.ScheduledBackupLogEntry.
 * Use `create(ScheduledBackupLogEntrySchema)` to create a new message.
 */
export const ScheduledBackupLogEntrySchema: GenMessage<ScheduledBackupLogEntry> = /*@__PURE__*/
  messageDesc(file_google_cloud_metastore_logging_v1_scheduled_backups_log, 0);

/**
 * The current state of the backup.
 *
 * @generated from enum google.cloud.metastore.logging.v1.ScheduledBackupLogEntry.State
 */
export enum ScheduledBackupLogEntry_State {
  /**
   * The state of the backup is unknown.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * The backup is in progress.
   *
   * @generated from enum value: IN_PROGRESS = 1;
   */
  IN_PROGRESS = 1,

  /**
   * The backup completed.
   *
   * @generated from enum value: SUCCEEDED = 2;
   */
  SUCCEEDED = 2,

  /**
   * The backup failed.
   *
   * @generated from enum value: FAILED = 3;
   */
  FAILED = 3,
}

/**
 * Describes the enum google.cloud.metastore.logging.v1.ScheduledBackupLogEntry.State.
 */
export const ScheduledBackupLogEntry_StateSchema: GenEnum<ScheduledBackupLogEntry_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_metastore_logging_v1_scheduled_backups_log, 0, 0);
