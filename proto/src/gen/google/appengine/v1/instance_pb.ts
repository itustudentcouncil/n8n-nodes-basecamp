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
// @generated from file google/appengine/v1/instance.proto (package google.appengine.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../api/field_behavior_pb";
import { file_google_api_resource } from "../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/appengine/v1/instance.proto.
 */
export const file_google_appengine_v1_instance: GenFile = /*@__PURE__*/
  fileDesc("CiJnb29nbGUvYXBwZW5naW5lL3YxL2luc3RhbmNlLnByb3RvEhNnb29nbGUuYXBwZW5naW5lLnYxIs4GCghJbnN0YW5jZRIRCgRuYW1lGAEgASgJQgPgQQMSDwoCaWQYAiABKAlCA+BBAxIfChJhcHBfZW5naW5lX3JlbGVhc2UYAyABKAlCA+BBAxJFCgxhdmFpbGFiaWxpdHkYBCABKA4yKi5nb29nbGUuYXBwZW5naW5lLnYxLkluc3RhbmNlLkF2YWlsYWJpbGl0eUID4EEDEhQKB3ZtX25hbWUYBSABKAlCA+BBAxIZCgx2bV96b25lX25hbWUYBiABKAlCA+BBAxISCgV2bV9pZBgHIAEoCUID4EEDEjMKCnN0YXJ0X3RpbWUYCCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSFQoIcmVxdWVzdHMYCSABKAVCA+BBAxITCgZlcnJvcnMYCiABKAVCA+BBAxIQCgNxcHMYCyABKAJCA+BBAxIcCg9hdmVyYWdlX2xhdGVuY3kYDCABKAVCA+BBAxIZCgxtZW1vcnlfdXNhZ2UYDSABKANCA+BBAxIWCgl2bV9zdGF0dXMYDiABKAlCA+BBAxIdChB2bV9kZWJ1Z19lbmFibGVkGA8gASgIQgPgQQMSEgoFdm1faXAYECABKAlCA+BBAxJOCgt2bV9saXZlbmVzcxgRIAEoDjI0Lmdvb2dsZS5hcHBlbmdpbmUudjEuSW5zdGFuY2UuTGl2ZW5lc3MuTGl2ZW5lc3NTdGF0ZUID4EEDGn8KCExpdmVuZXNzInMKDUxpdmVuZXNzU3RhdGUSHgoaTElWRU5FU1NfU1RBVEVfVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESCwoHSEVBTFRIWRACEg0KCVVOSEVBTFRIWRADEgwKCERSQUlOSU5HEAQSCwoHVElNRU9VVBAFIjoKDEF2YWlsYWJpbGl0eRIPCgtVTlNQRUNJRklFRBAAEgwKCFJFU0lERU5UEAESCwoHRFlOQU1JQxACOm3qQWoKIWFwcGVuZ2luZS5nb29nbGVhcGlzLmNvbS9JbnN0YW5jZRJFYXBwcy97YXBwfS9zZXJ2aWNlcy97c2VydmljZX0vdmVyc2lvbnMve3ZlcnNpb259L2luc3RhbmNlcy97aW5zdGFuY2V9Qr4BChdjb20uZ29vZ2xlLmFwcGVuZ2luZS52MUINSW5zdGFuY2VQcm90b1ABWjtjbG91ZC5nb29nbGUuY29tL2dvL2FwcGVuZ2luZS9hcGl2MS9hcHBlbmdpbmVwYjthcHBlbmdpbmVwYqoCGUdvb2dsZS5DbG91ZC5BcHBFbmdpbmUuVjHKAhlHb29nbGVcQ2xvdWRcQXBwRW5naW5lXFYx6gIcR29vZ2xlOjpDbG91ZDo6QXBwRW5naW5lOjpWMWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * An Instance resource is the computing unit that App Engine uses to
 * automatically scale an application.
 *
 * @generated from message google.appengine.v1.Instance
 */
export type Instance = Message<"google.appengine.v1.Instance"> & {
  /**
   * Output only. Full path to the Instance resource in the API.
   * Example: `apps/myapp/services/default/versions/v1/instances/instance-1`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. Relative name of the instance within the version.
   * Example: `instance-1`.
   *
   * @generated from field: string id = 2;
   */
  id: string;

  /**
   * Output only. App Engine release this instance is running on.
   *
   * @generated from field: string app_engine_release = 3;
   */
  appEngineRelease: string;

  /**
   * Output only. Availability of the instance.
   *
   * @generated from field: google.appengine.v1.Instance.Availability availability = 4;
   */
  availability: Instance_Availability;

  /**
   * Output only. Name of the virtual machine where this instance lives. Only applicable
   * for instances in App Engine flexible environment.
   *
   * @generated from field: string vm_name = 5;
   */
  vmName: string;

  /**
   * Output only. Zone where the virtual machine is located. Only applicable for instances
   * in App Engine flexible environment.
   *
   * @generated from field: string vm_zone_name = 6;
   */
  vmZoneName: string;

  /**
   * Output only. Virtual machine ID of this instance. Only applicable for instances in
   * App Engine flexible environment.
   *
   * @generated from field: string vm_id = 7;
   */
  vmId: string;

  /**
   * Output only. Time that this instance was started.
   *
   * @OutputOnly
   *
   * @generated from field: google.protobuf.Timestamp start_time = 8;
   */
  startTime?: Timestamp;

  /**
   * Output only. Number of requests since this instance was started.
   *
   * @generated from field: int32 requests = 9;
   */
  requests: number;

  /**
   * Output only. Number of errors since this instance was started.
   *
   * @generated from field: int32 errors = 10;
   */
  errors: number;

  /**
   * Output only. Average queries per second (QPS) over the last minute.
   *
   * @generated from field: float qps = 11;
   */
  qps: number;

  /**
   * Output only. Average latency (ms) over the last minute.
   *
   * @generated from field: int32 average_latency = 12;
   */
  averageLatency: number;

  /**
   * Output only. Total memory in use (bytes).
   *
   * @generated from field: int64 memory_usage = 13;
   */
  memoryUsage: bigint;

  /**
   * Output only. Status of the virtual machine where this instance lives. Only applicable
   * for instances in App Engine flexible environment.
   *
   * @generated from field: string vm_status = 14;
   */
  vmStatus: string;

  /**
   * Output only. Whether this instance is in debug mode. Only applicable for instances in
   * App Engine flexible environment.
   *
   * @generated from field: bool vm_debug_enabled = 15;
   */
  vmDebugEnabled: boolean;

  /**
   * Output only. The IP address of this instance. Only applicable for instances in App
   * Engine flexible environment.
   *
   * @generated from field: string vm_ip = 16;
   */
  vmIp: string;

  /**
   * Output only. The liveness health check of this instance. Only applicable for instances
   * in App Engine flexible environment.
   *
   * @generated from field: google.appengine.v1.Instance.Liveness.LivenessState vm_liveness = 17;
   */
  vmLiveness: Instance_Liveness_LivenessState;
};

/**
 * Describes the message google.appengine.v1.Instance.
 * Use `create(InstanceSchema)` to create a new message.
 */
export const InstanceSchema: GenMessage<Instance> = /*@__PURE__*/
  messageDesc(file_google_appengine_v1_instance, 0);

/**
 * Wrapper for LivenessState enum.
 *
 * @generated from message google.appengine.v1.Instance.Liveness
 */
export type Instance_Liveness = Message<"google.appengine.v1.Instance.Liveness"> & {
};

/**
 * Describes the message google.appengine.v1.Instance.Liveness.
 * Use `create(Instance_LivenessSchema)` to create a new message.
 */
export const Instance_LivenessSchema: GenMessage<Instance_Liveness> = /*@__PURE__*/
  messageDesc(file_google_appengine_v1_instance, 0, 0);

/**
 * Liveness health check status for Flex instances.
 *
 * @generated from enum google.appengine.v1.Instance.Liveness.LivenessState
 */
export enum Instance_Liveness_LivenessState {
  /**
   * There is no liveness health check for the instance. Only applicable for
   * instances in App Engine standard environment.
   *
   * @generated from enum value: LIVENESS_STATE_UNSPECIFIED = 0;
   */
  LIVENESS_STATE_UNSPECIFIED = 0,

  /**
   * The health checking system is aware of the instance but its health is
   * not known at the moment.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * The instance is reachable i.e. a connection to the application health
   * checking endpoint can be established, and conforms to the requirements
   * defined by the health check.
   *
   * @generated from enum value: HEALTHY = 2;
   */
  HEALTHY = 2,

  /**
   * The instance is reachable, but does not conform to the requirements
   * defined by the health check.
   *
   * @generated from enum value: UNHEALTHY = 3;
   */
  UNHEALTHY = 3,

  /**
   * The instance is being drained. The existing connections to the instance
   * have time to complete, but the new ones are being refused.
   *
   * @generated from enum value: DRAINING = 4;
   */
  DRAINING = 4,

  /**
   * The instance is unreachable i.e. a connection to the application health
   * checking endpoint cannot be established, or the server does not respond
   * within the specified timeout.
   *
   * @generated from enum value: TIMEOUT = 5;
   */
  TIMEOUT = 5,
}

/**
 * Describes the enum google.appengine.v1.Instance.Liveness.LivenessState.
 */
export const Instance_Liveness_LivenessStateSchema: GenEnum<Instance_Liveness_LivenessState> = /*@__PURE__*/
  enumDesc(file_google_appengine_v1_instance, 0, 0, 0);

/**
 * Availability of the instance.
 *
 * @generated from enum google.appengine.v1.Instance.Availability
 */
export enum Instance_Availability {
  /**
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: RESIDENT = 1;
   */
  RESIDENT = 1,

  /**
   * @generated from enum value: DYNAMIC = 2;
   */
  DYNAMIC = 2,
}

/**
 * Describes the enum google.appengine.v1.Instance.Availability.
 */
export const Instance_AvailabilitySchema: GenEnum<Instance_Availability> = /*@__PURE__*/
  enumDesc(file_google_appengine_v1_instance, 0, 0);
