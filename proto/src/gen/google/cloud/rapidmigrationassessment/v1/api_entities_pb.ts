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
// @generated from file google/cloud/rapidmigrationassessment/v1/api_entities.proto (package google.cloud.rapidmigrationassessment.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/rapidmigrationassessment/v1/api_entities.proto.
 */
export const file_google_cloud_rapidmigrationassessment_v1_api_entities: GenFile = /*@__PURE__*/
  fileDesc("Cjtnb29nbGUvY2xvdWQvcmFwaWRtaWdyYXRpb25hc3Nlc3NtZW50L3YxL2FwaV9lbnRpdGllcy5wcm90bxIoZ29vZ2xlLmNsb3VkLnJhcGlkbWlncmF0aW9uYXNzZXNzbWVudC52MSIiCgtHdWVzdE9zU2NhbhITCgtjb3JlX3NvdXJjZRgBIAEoCSIiCgtWU3BoZXJlU2NhbhITCgtjb3JlX3NvdXJjZRgBIAEoCSL6BwoJQ29sbGVjdG9yEgwKBG5hbWUYASABKAkSNAoLY3JlYXRlX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSNAoLdXBkYXRlX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSTwoGbGFiZWxzGAQgAygLMj8uZ29vZ2xlLmNsb3VkLnJhcGlkbWlncmF0aW9uYXNzZXNzbWVudC52MS5Db2xsZWN0b3IuTGFiZWxzRW50cnkSFAoMZGlzcGxheV9uYW1lGAUgASgJEhMKC2Rlc2NyaXB0aW9uGAYgASgJEhcKD3NlcnZpY2VfYWNjb3VudBgHIAEoCRITCgZidWNrZXQYCCABKAlCA+BBAxIcChRleHBlY3RlZF9hc3NldF9jb3VudBgJIAEoAxJNCgVzdGF0ZRgKIAEoDjI5Lmdvb2dsZS5jbG91ZC5yYXBpZG1pZ3JhdGlvbmFzc2Vzc21lbnQudjEuQ29sbGVjdG9yLlN0YXRlQgPgQQMSGwoOY2xpZW50X3ZlcnNpb24YCyABKAlCA+BBAxJRCg1ndWVzdF9vc19zY2FuGAwgASgLMjUuZ29vZ2xlLmNsb3VkLnJhcGlkbWlncmF0aW9uYXNzZXNzbWVudC52MS5HdWVzdE9zU2NhbkID4EEDElAKDHZzcGhlcmVfc2NhbhgNIAEoCzI1Lmdvb2dsZS5jbG91ZC5yYXBpZG1pZ3JhdGlvbmFzc2Vzc21lbnQudjEuVlNwaGVyZVNjYW5CA+BBAxIXCg9jb2xsZWN0aW9uX2RheXMYDiABKAUSEAoIZXVsYV91cmkYDyABKAkaLQoLTGFiZWxzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASLHAQoFU3RhdGUSFQoRU1RBVEVfVU5TUEVDSUZJRUQQABIWChJTVEFURV9JTklUSUFMSVpJTkcQARIWChJTVEFURV9SRUFEWV9UT19VU0UQAhIUChBTVEFURV9SRUdJU1RFUkVEEAMSEAoMU1RBVEVfQUNUSVZFEAQSEAoMU1RBVEVfUEFVU0VEEAUSEgoOU1RBVEVfREVMRVRJTkcQBhIYChRTVEFURV9ERUNPTU1JU1NJT05FRBAHEg8KC1NUQVRFX0VSUk9SEAg6dupBcwoxcmFwaWRtaWdyYXRpb25hc3Nlc3NtZW50Lmdvb2dsZWFwaXMuY29tL0NvbGxlY3RvchI+cHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L2NvbGxlY3RvcnMve2NvbGxlY3Rvcn0imwQKCkFubm90YXRpb24SDAoEbmFtZRgBIAEoCRI0CgtjcmVhdGVfdGltZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxI0Cgt1cGRhdGVfdGltZRgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxJQCgZsYWJlbHMYBCADKAsyQC5nb29nbGUuY2xvdWQucmFwaWRtaWdyYXRpb25hc3Nlc3NtZW50LnYxLkFubm90YXRpb24uTGFiZWxzRW50cnkSRwoEdHlwZRgFIAEoDjI5Lmdvb2dsZS5jbG91ZC5yYXBpZG1pZ3JhdGlvbmFzc2Vzc21lbnQudjEuQW5ub3RhdGlvbi5UeXBlGi0KC0xhYmVsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEiTgoEVHlwZRIUChBUWVBFX1VOU1BFQ0lGSUVEEAASHgoaVFlQRV9MRUdBQ1lfRVhQT1JUX0NPTlNFTlQQARIQCgxUWVBFX1FXSUtMQUIQAjp56kF2CjJyYXBpZG1pZ3JhdGlvbmFzc2Vzc21lbnQuZ29vZ2xlYXBpcy5jb20vQW5ub3RhdGlvbhJAcHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L2Fubm90YXRpb25zL3thbm5vdGF0aW9ufUKwAgosY29tLmdvb2dsZS5jbG91ZC5yYXBpZG1pZ3JhdGlvbmFzc2Vzc21lbnQudjFCEEFwaUVudGl0aWVzUHJvdG9QAVpoY2xvdWQuZ29vZ2xlLmNvbS9nby9yYXBpZG1pZ3JhdGlvbmFzc2Vzc21lbnQvYXBpdjEvcmFwaWRtaWdyYXRpb25hc3Nlc3NtZW50cGI7cmFwaWRtaWdyYXRpb25hc3Nlc3NtZW50cGKqAihHb29nbGUuQ2xvdWQuUmFwaWRNaWdyYXRpb25Bc3Nlc3NtZW50LlYxygIoR29vZ2xlXENsb3VkXFJhcGlkTWlncmF0aW9uQXNzZXNzbWVudFxWMeoCK0dvb2dsZTo6Q2xvdWQ6OlJhcGlkTWlncmF0aW9uQXNzZXNzbWVudDo6VjFiBnByb3RvMw", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * Message describing a MC Source of type Guest OS Scan.
 *
 * @generated from message google.cloud.rapidmigrationassessment.v1.GuestOsScan
 */
export type GuestOsScan = Message<"google.cloud.rapidmigrationassessment.v1.GuestOsScan"> & {
  /**
   * reference to the corresponding Guest OS Scan in MC Source.
   *
   * @generated from field: string core_source = 1;
   */
  coreSource: string;
};

/**
 * Describes the message google.cloud.rapidmigrationassessment.v1.GuestOsScan.
 * Use `create(GuestOsScanSchema)` to create a new message.
 */
export const GuestOsScanSchema: GenMessage<GuestOsScan> = /*@__PURE__*/
  messageDesc(file_google_cloud_rapidmigrationassessment_v1_api_entities, 0);

/**
 * Message describing a MC Source of type VSphere Scan.
 *
 * @generated from message google.cloud.rapidmigrationassessment.v1.VSphereScan
 */
export type VSphereScan = Message<"google.cloud.rapidmigrationassessment.v1.VSphereScan"> & {
  /**
   * reference to the corresponding VSphere Scan in MC Source.
   *
   * @generated from field: string core_source = 1;
   */
  coreSource: string;
};

/**
 * Describes the message google.cloud.rapidmigrationassessment.v1.VSphereScan.
 * Use `create(VSphereScanSchema)` to create a new message.
 */
export const VSphereScanSchema: GenMessage<VSphereScan> = /*@__PURE__*/
  messageDesc(file_google_cloud_rapidmigrationassessment_v1_api_entities, 1);

/**
 * Message describing Collector object.
 *
 * @generated from message google.cloud.rapidmigrationassessment.v1.Collector
 */
export type Collector = Message<"google.cloud.rapidmigrationassessment.v1.Collector"> & {
  /**
   * name of resource.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Create time stamp.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * Output only. Update time stamp.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;

  /**
   * Labels as key value pairs.
   *
   * @generated from field: map<string, string> labels = 4;
   */
  labels: { [key: string]: string };

  /**
   * User specified name of the Collector.
   *
   * @generated from field: string display_name = 5;
   */
  displayName: string;

  /**
   * User specified description of the Collector.
   *
   * @generated from field: string description = 6;
   */
  description: string;

  /**
   * Service Account email used to ingest data to this Collector.
   *
   * @generated from field: string service_account = 7;
   */
  serviceAccount: string;

  /**
   * Output only. Store cloud storage bucket name (which is a guid) created with
   * this Collector.
   *
   * @generated from field: string bucket = 8;
   */
  bucket: string;

  /**
   * User specified expected asset count.
   *
   * @generated from field: int64 expected_asset_count = 9;
   */
  expectedAssetCount: bigint;

  /**
   * Output only. State of the Collector.
   *
   * @generated from field: google.cloud.rapidmigrationassessment.v1.Collector.State state = 10;
   */
  state: Collector_State;

  /**
   * Output only. Client version.
   *
   * @generated from field: string client_version = 11;
   */
  clientVersion: string;

  /**
   * Output only. Reference to MC Source Guest Os Scan.
   *
   * @generated from field: google.cloud.rapidmigrationassessment.v1.GuestOsScan guest_os_scan = 12;
   */
  guestOsScan?: GuestOsScan;

  /**
   * Output only. Reference to MC Source vsphere_scan.
   *
   * @generated from field: google.cloud.rapidmigrationassessment.v1.VSphereScan vsphere_scan = 13;
   */
  vsphereScan?: VSphereScan;

  /**
   * How many days to collect data.
   *
   * @generated from field: int32 collection_days = 14;
   */
  collectionDays: number;

  /**
   * Uri for EULA (End User License Agreement) from customer.
   *
   * @generated from field: string eula_uri = 15;
   */
  eulaUri: string;
};

/**
 * Describes the message google.cloud.rapidmigrationassessment.v1.Collector.
 * Use `create(CollectorSchema)` to create a new message.
 */
export const CollectorSchema: GenMessage<Collector> = /*@__PURE__*/
  messageDesc(file_google_cloud_rapidmigrationassessment_v1_api_entities, 2);

/**
 * -- Using suggestion from API Linter Analyzer for nesting enum --
 * -- https://linter.aip.dev/216/nesting --
 * State of a Collector (server_side).
 * States are used for internal purposes and named to keep
 * convention of legacy product:
 * https://cloud.google.com/migrate/stratozone/docs/about-stratoprobe.
 *
 * @generated from enum google.cloud.rapidmigrationassessment.v1.Collector.State
 */
export enum Collector_State {
  /**
   * Collector state is not recognized.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Collector started to create, but hasn't been completed MC source creation
   * and db object creation.
   *
   * @generated from enum value: STATE_INITIALIZING = 1;
   */
  INITIALIZING = 1,

  /**
   * Collector has been created, MC source creation and db object creation
   * completed.
   *
   * @generated from enum value: STATE_READY_TO_USE = 2;
   */
  READY_TO_USE = 2,

  /**
   * Collector client has been registered with client.
   *
   * @generated from enum value: STATE_REGISTERED = 3;
   */
  REGISTERED = 3,

  /**
   * Collector client is actively scanning.
   *
   * @generated from enum value: STATE_ACTIVE = 4;
   */
  ACTIVE = 4,

  /**
   * Collector is not actively scanning.
   *
   * @generated from enum value: STATE_PAUSED = 5;
   */
  PAUSED = 5,

  /**
   * Collector is starting background job for deletion.
   *
   * @generated from enum value: STATE_DELETING = 6;
   */
  DELETING = 6,

  /**
   * Collector completed all tasks for deletion.
   *
   * @generated from enum value: STATE_DECOMMISSIONED = 7;
   */
  DECOMMISSIONED = 7,

  /**
   * Collector is in error state.
   *
   * @generated from enum value: STATE_ERROR = 8;
   */
  ERROR = 8,
}

/**
 * Describes the enum google.cloud.rapidmigrationassessment.v1.Collector.State.
 */
export const Collector_StateSchema: GenEnum<Collector_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_rapidmigrationassessment_v1_api_entities, 2, 0);

/**
 * Message describing an Annotation
 *
 * @generated from message google.cloud.rapidmigrationassessment.v1.Annotation
 */
export type Annotation = Message<"google.cloud.rapidmigrationassessment.v1.Annotation"> & {
  /**
   * name of resource.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Create time stamp.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * Output only. Update time stamp.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;

  /**
   * Labels as key value pairs.
   *
   * @generated from field: map<string, string> labels = 4;
   */
  labels: { [key: string]: string };

  /**
   * Type of an annotation.
   *
   * @generated from field: google.cloud.rapidmigrationassessment.v1.Annotation.Type type = 5;
   */
  type: Annotation_Type;
};

/**
 * Describes the message google.cloud.rapidmigrationassessment.v1.Annotation.
 * Use `create(AnnotationSchema)` to create a new message.
 */
export const AnnotationSchema: GenMessage<Annotation> = /*@__PURE__*/
  messageDesc(file_google_cloud_rapidmigrationassessment_v1_api_entities, 3);

/**
 * Types for project level setting.
 *
 * @generated from enum google.cloud.rapidmigrationassessment.v1.Annotation.Type
 */
export enum Annotation_Type {
  /**
   * Unknown type
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Indicates that this project has opted into StratoZone export.
   *
   * @generated from enum value: TYPE_LEGACY_EXPORT_CONSENT = 1;
   */
  LEGACY_EXPORT_CONSENT = 1,

  /**
   * Indicates that this project is created by Qwiklab.
   *
   * @generated from enum value: TYPE_QWIKLAB = 2;
   */
  QWIKLAB = 2,
}

/**
 * Describes the enum google.cloud.rapidmigrationassessment.v1.Annotation.Type.
 */
export const Annotation_TypeSchema: GenEnum<Annotation_Type> = /*@__PURE__*/
  enumDesc(file_google_cloud_rapidmigrationassessment_v1_api_entities, 3, 0);
