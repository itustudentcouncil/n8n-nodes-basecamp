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
// @generated from file google/cloud/healthcare/logging/dicom.proto (package google.cloud.healthcare.logging, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Status } from "../../../rpc/status_pb";
import { file_google_rpc_status } from "../../../rpc/status_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/healthcare/logging/dicom.proto.
 */
export const file_google_cloud_healthcare_logging_dicom: GenFile = /*@__PURE__*/
  fileDesc("Citnb29nbGUvY2xvdWQvaGVhbHRoY2FyZS9sb2dnaW5nL2RpY29tLnByb3RvEh9nb29nbGUuY2xvdWQuaGVhbHRoY2FyZS5sb2dnaW5nIkgKE0ltcG9ydERpY29tTG9nRW50cnkSDgoGc291cmNlGAEgASgJEiEKBWVycm9yGAIgASgLMhIuZ29vZ2xlLnJwYy5TdGF0dXMiTwoTRXhwb3J0RGljb21Mb2dFbnRyeRIVCg1yZXNvdXJjZV9uYW1lGAEgASgJEiEKBWVycm9yGAIgASgLMhIuZ29vZ2xlLnJwYy5TdGF0dXMiawoZRGljb21Ob3RpZmljYXRpb25Mb2dFbnRyeRIVCg1yZXNvdXJjZV9uYW1lGAEgASgJEhQKDHB1YnN1Yl90b3BpYxgCIAEoCRIhCgVlcnJvchgDIAEoCzISLmdvb2dsZS5ycGMuU3RhdHVzImQKE0RpY29tU3RyZWFtTG9nRW50cnkSFQoNcmVzb3VyY2VfbmFtZRgBIAEoCRITCgtkZXN0aW5hdGlvbhgCIAEoCRIhCgVlcnJvchgDIAEoCzISLmdvb2dsZS5ycGMuU3RhdHVzQmEKI2NvbS5nb29nbGUuY2xvdWQuaGVhbHRoY2FyZS5sb2dnaW5nWjpjbG91ZC5nb29nbGUuY29tL2dvL2hlYWx0aGNhcmUvbG9nZ2luZy9sb2dnaW5ncGI7bG9nZ2luZ3BiYgZwcm90bzM", [file_google_rpc_status]);

/**
 * A log entry for a DICOM import long-running operation.
 *
 * @generated from message google.cloud.healthcare.logging.ImportDicomLogEntry
 */
export type ImportDicomLogEntry = Message<"google.cloud.healthcare.logging.ImportDicomLogEntry"> & {
  /**
   * The source file, in the format `gs://{bucket-id}/{path/to/file}`.
   *
   * @generated from field: string source = 1;
   */
  source: string;

  /**
   * The error code and message.
   *
   * @generated from field: google.rpc.Status error = 2;
   */
  error?: Status;
};

/**
 * Describes the message google.cloud.healthcare.logging.ImportDicomLogEntry.
 * Use `create(ImportDicomLogEntrySchema)` to create a new message.
 */
export const ImportDicomLogEntrySchema: GenMessage<ImportDicomLogEntry> = /*@__PURE__*/
  messageDesc(file_google_cloud_healthcare_logging_dicom, 0);

/**
 * A log entry for a DICOM export long-running operation.
 *
 * @generated from message google.cloud.healthcare.logging.ExportDicomLogEntry
 */
export type ExportDicomLogEntry = Message<"google.cloud.healthcare.logging.ExportDicomLogEntry"> & {
  /**
   * The DICOM resource being exported.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The error code and message.
   *
   * @generated from field: google.rpc.Status error = 2;
   */
  error?: Status;
};

/**
 * Describes the message google.cloud.healthcare.logging.ExportDicomLogEntry.
 * Use `create(ExportDicomLogEntrySchema)` to create a new message.
 */
export const ExportDicomLogEntrySchema: GenMessage<ExportDicomLogEntry> = /*@__PURE__*/
  messageDesc(file_google_cloud_healthcare_logging_dicom, 1);

/**
 * A log entry for a DICOM store Pub/Sub notification.
 *
 * @generated from message google.cloud.healthcare.logging.DicomNotificationLogEntry
 */
export type DicomNotificationLogEntry = Message<"google.cloud.healthcare.logging.DicomNotificationLogEntry"> & {
  /**
   * The DICOM resource being created.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The Pub/Sub topic that the notification is published on.
   *
   * @generated from field: string pubsub_topic = 2;
   */
  pubsubTopic: string;

  /**
   * The error code and message.
   *
   * @generated from field: google.rpc.Status error = 3;
   */
  error?: Status;
};

/**
 * Describes the message google.cloud.healthcare.logging.DicomNotificationLogEntry.
 * Use `create(DicomNotificationLogEntrySchema)` to create a new message.
 */
export const DicomNotificationLogEntrySchema: GenMessage<DicomNotificationLogEntry> = /*@__PURE__*/
  messageDesc(file_google_cloud_healthcare_logging_dicom, 2);

/**
 * A log entry for a DICOM streaming export notification.
 *
 * @generated from message google.cloud.healthcare.logging.DicomStreamLogEntry
 */
export type DicomStreamLogEntry = Message<"google.cloud.healthcare.logging.DicomStreamLogEntry"> & {
  /**
   * The DICOM resource being exported.
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * The destination in BigQuery, in the format
   * `bq://{projectId}.{bqDatasetId}.{bqTableId}`.
   *
   * @generated from field: string destination = 2;
   */
  destination: string;

  /**
   * The error code and message.
   *
   * @generated from field: google.rpc.Status error = 3;
   */
  error?: Status;
};

/**
 * Describes the message google.cloud.healthcare.logging.DicomStreamLogEntry.
 * Use `create(DicomStreamLogEntrySchema)` to create a new message.
 */
export const DicomStreamLogEntrySchema: GenMessage<DicomStreamLogEntry> = /*@__PURE__*/
  messageDesc(file_google_cloud_healthcare_logging_dicom, 3);
