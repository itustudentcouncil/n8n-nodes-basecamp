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
// @generated from file google/cloud/kms/logging/v1/logs.proto (package google.cloud.kms.logging.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Status } from "../../../../rpc/status_pb";
import { file_google_rpc_status } from "../../../../rpc/status_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/kms/logging/v1/logs.proto.
 */
export const file_google_cloud_kms_logging_v1_logs: GenFile = /*@__PURE__*/
  fileDesc("CiZnb29nbGUvY2xvdWQva21zL2xvZ2dpbmcvdjEvbG9ncy5wcm90bxIbZ29vZ2xlLmNsb3VkLmttcy5sb2dnaW5nLnYxIpgBCg5DcnlwdG9LZXlFdmVudBJRCg5yb3RhdGlvbl9ldmVudBgBIAEoCzI5Lmdvb2dsZS5jbG91ZC5rbXMubG9nZ2luZy52MS5DcnlwdG9LZXlFdmVudC5Sb3RhdGlvbkV2ZW50GjMKDVJvdGF0aW9uRXZlbnQSIgoGc3RhdHVzGAEgASgLMhIuZ29vZ2xlLnJwYy5TdGF0dXMi1AQKFUNyeXB0b0tleVZlcnNpb25FdmVudBJzChtzY2hlZHVsZWRfZGVzdHJ1Y3Rpb25fZXZlbnQYASABKAsyTC5nb29nbGUuY2xvdWQua21zLmxvZ2dpbmcudjEuQ3J5cHRvS2V5VmVyc2lvbkV2ZW50LlNjaGVkdWxlZERlc3RydWN0aW9uRXZlbnRIABJlChRrZXlfZ2VuZXJhdGlvbl9ldmVudBgCIAEoCzJFLmdvb2dsZS5jbG91ZC5rbXMubG9nZ2luZy52MS5DcnlwdG9LZXlWZXJzaW9uRXZlbnQuS2V5R2VuZXJhdGlvbkV2ZW50SAASVgoMaW1wb3J0X2V2ZW50GAMgASgLMj4uZ29vZ2xlLmNsb3VkLmttcy5sb2dnaW5nLnYxLkNyeXB0b0tleVZlcnNpb25FdmVudC5JbXBvcnRFdmVudEgAGmgKGVNjaGVkdWxlZERlc3RydWN0aW9uRXZlbnQSIgoGc3RhdHVzGAEgASgLMhIuZ29vZ2xlLnJwYy5TdGF0dXMSJwofa2V5X2FjY2Vzc19qdXN0aWZpY2F0aW9uX3JlYXNvbhgCIAEoCRphChJLZXlHZW5lcmF0aW9uRXZlbnQSIgoGc3RhdHVzGAEgASgLMhIuZ29vZ2xlLnJwYy5TdGF0dXMSJwofa2V5X2FjY2Vzc19qdXN0aWZpY2F0aW9uX3JlYXNvbhgCIAEoCRoxCgtJbXBvcnRFdmVudBIiCgZzdGF0dXMYASABKAsyEi5nb29nbGUucnBjLlN0YXR1c0IHCgVldmVudEJpCh9jb20uZ29vZ2xlLmNsb3VkLmttcy5sb2dnaW5nLnYxQglMb2dzUHJvdG9QAVo5Y2xvdWQuZ29vZ2xlLmNvbS9nby9rbXMvbG9nZ2luZy9hcGl2MS9sb2dnaW5ncGI7bG9nZ2luZ3BiYgZwcm90bzM", [file_google_rpc_status]);

/**
 * Log message used to send to Platform Logging for asynchronous
 * CryptoKey events.
 *
 * @generated from message google.cloud.kms.logging.v1.CryptoKeyEvent
 */
export type CryptoKeyEvent = Message<"google.cloud.kms.logging.v1.CryptoKeyEvent"> & {
  /**
   * An event for rotating the primary CryptoKeyVersion of a CryptoKey.
   *
   * @generated from field: google.cloud.kms.logging.v1.CryptoKeyEvent.RotationEvent rotation_event = 1;
   */
  rotationEvent?: CryptoKeyEvent_RotationEvent;
};

/**
 * Describes the message google.cloud.kms.logging.v1.CryptoKeyEvent.
 * Use `create(CryptoKeyEventSchema)` to create a new message.
 */
export const CryptoKeyEventSchema: GenMessage<CryptoKeyEvent> = /*@__PURE__*/
  messageDesc(file_google_cloud_kms_logging_v1_logs, 0);

/**
 * The event emitted by KMS when performing a scheduled automatic CryptoKey
 * rotation. See https://cloud.google.com/kms/docs/rotating-keys#automatic
 *
 * @generated from message google.cloud.kms.logging.v1.CryptoKeyEvent.RotationEvent
 */
export type CryptoKeyEvent_RotationEvent = Message<"google.cloud.kms.logging.v1.CryptoKeyEvent.RotationEvent"> & {
  /**
   * The result of the scheduled key rotation. The 'details' field of the
   * status may contain a google.rpc.PreconditionFailure.
   *
   * @generated from field: google.rpc.Status status = 1;
   */
  status?: Status;
};

/**
 * Describes the message google.cloud.kms.logging.v1.CryptoKeyEvent.RotationEvent.
 * Use `create(CryptoKeyEvent_RotationEventSchema)` to create a new message.
 */
export const CryptoKeyEvent_RotationEventSchema: GenMessage<CryptoKeyEvent_RotationEvent> = /*@__PURE__*/
  messageDesc(file_google_cloud_kms_logging_v1_logs, 0, 0);

/**
 * Log message used to send to Platform Logging for asynchronous
 * CryptoKeyVersion events.
 *
 * @generated from message google.cloud.kms.logging.v1.CryptoKeyVersionEvent
 */
export type CryptoKeyVersionEvent = Message<"google.cloud.kms.logging.v1.CryptoKeyVersionEvent"> & {
  /**
   * @generated from oneof google.cloud.kms.logging.v1.CryptoKeyVersionEvent.event
   */
  event: {
    /**
     * An event for the scheduled destruction of a CryptoKeyVersion.
     *
     * @generated from field: google.cloud.kms.logging.v1.CryptoKeyVersionEvent.ScheduledDestructionEvent scheduled_destruction_event = 1;
     */
    value: CryptoKeyVersionEvent_ScheduledDestructionEvent;
    case: "scheduledDestructionEvent";
  } | {
    /**
     * An event for the generation of a CryptoKeyVersion.
     *
     * @generated from field: google.cloud.kms.logging.v1.CryptoKeyVersionEvent.KeyGenerationEvent key_generation_event = 2;
     */
    value: CryptoKeyVersionEvent_KeyGenerationEvent;
    case: "keyGenerationEvent";
  } | {
    /**
     * An event for the import of key material for a CryptoKeyVersion.
     *
     * @generated from field: google.cloud.kms.logging.v1.CryptoKeyVersionEvent.ImportEvent import_event = 3;
     */
    value: CryptoKeyVersionEvent_ImportEvent;
    case: "importEvent";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.kms.logging.v1.CryptoKeyVersionEvent.
 * Use `create(CryptoKeyVersionEventSchema)` to create a new message.
 */
export const CryptoKeyVersionEventSchema: GenMessage<CryptoKeyVersionEvent> = /*@__PURE__*/
  messageDesc(file_google_cloud_kms_logging_v1_logs, 1);

/**
 * The event emitted by KMS when destroying a CryptoKeyVersion scheduled for
 * destruction. See https://cloud.google.com/kms/docs/destroy-restore#destroy
 *
 * @generated from message google.cloud.kms.logging.v1.CryptoKeyVersionEvent.ScheduledDestructionEvent
 */
export type CryptoKeyVersionEvent_ScheduledDestructionEvent = Message<"google.cloud.kms.logging.v1.CryptoKeyVersionEvent.ScheduledDestructionEvent"> & {
  /**
   * The result of the scheduled key version destruction. The 'details' field
   * of the status may contain a google.rpc.PreconditionFailure. For EKM keys,
   * the 'violations' field of a PreconditionFailure will also include EKM
   * errors.
   *
   * @generated from field: google.rpc.Status status = 1;
   */
  status?: Status;

  /**
   * The Key Access Justification (KAJ) reason associated with the request.
   * This field is only populated for KAJ enrolled customers for EKM keys.
   *
   * @generated from field: string key_access_justification_reason = 2;
   */
  keyAccessJustificationReason: string;
};

/**
 * Describes the message google.cloud.kms.logging.v1.CryptoKeyVersionEvent.ScheduledDestructionEvent.
 * Use `create(CryptoKeyVersionEvent_ScheduledDestructionEventSchema)` to create a new message.
 */
export const CryptoKeyVersionEvent_ScheduledDestructionEventSchema: GenMessage<CryptoKeyVersionEvent_ScheduledDestructionEvent> = /*@__PURE__*/
  messageDesc(file_google_cloud_kms_logging_v1_logs, 1, 0);

/**
 * The event emitted by KMS when generating a CryptoKeyVersion. See
 * https://cloud.google.com/kms/docs/key-states
 *
 * @generated from message google.cloud.kms.logging.v1.CryptoKeyVersionEvent.KeyGenerationEvent
 */
export type CryptoKeyVersionEvent_KeyGenerationEvent = Message<"google.cloud.kms.logging.v1.CryptoKeyVersionEvent.KeyGenerationEvent"> & {
  /**
   * The result of the key version generation. The 'details' field of the
   * status may contain a google.rpc.PreconditionFailure. For EKM keys, the
   * 'violations' field of a PreconditionFailure will also include EKM errors.
   *
   * @generated from field: google.rpc.Status status = 1;
   */
  status?: Status;

  /**
   * The Key Access Justification (KAJ) reason associated with the request.
   * This field is only populated for KAJ enrolled customers for EKM keys.
   *
   * @generated from field: string key_access_justification_reason = 2;
   */
  keyAccessJustificationReason: string;
};

/**
 * Describes the message google.cloud.kms.logging.v1.CryptoKeyVersionEvent.KeyGenerationEvent.
 * Use `create(CryptoKeyVersionEvent_KeyGenerationEventSchema)` to create a new message.
 */
export const CryptoKeyVersionEvent_KeyGenerationEventSchema: GenMessage<CryptoKeyVersionEvent_KeyGenerationEvent> = /*@__PURE__*/
  messageDesc(file_google_cloud_kms_logging_v1_logs, 1, 1);

/**
 * The event emitted by KMS when importing a CryptoKeyVersion. See
 * https://cloud.google.com/kms/docs/importing-a-key
 *
 * @generated from message google.cloud.kms.logging.v1.CryptoKeyVersionEvent.ImportEvent
 */
export type CryptoKeyVersionEvent_ImportEvent = Message<"google.cloud.kms.logging.v1.CryptoKeyVersionEvent.ImportEvent"> & {
  /**
   * The result of the key version import. The 'details' field of the status
   * may contain a google.rpc.PreconditionFailure.
   *
   * @generated from field: google.rpc.Status status = 1;
   */
  status?: Status;
};

/**
 * Describes the message google.cloud.kms.logging.v1.CryptoKeyVersionEvent.ImportEvent.
 * Use `create(CryptoKeyVersionEvent_ImportEventSchema)` to create a new message.
 */
export const CryptoKeyVersionEvent_ImportEventSchema: GenMessage<CryptoKeyVersionEvent_ImportEvent> = /*@__PURE__*/
  messageDesc(file_google_cloud_kms_logging_v1_logs, 1, 2);
