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
// @generated from file google/cloud/notebooks/v2/event.proto (package google.cloud.notebooks.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/notebooks/v2/event.proto.
 */
export const file_google_cloud_notebooks_v2_event: GenFile = /*@__PURE__*/
  fileDesc("CiVnb29nbGUvY2xvdWQvbm90ZWJvb2tzL3YyL2V2ZW50LnByb3RvEhlnb29nbGUuY2xvdWQubm90ZWJvb2tzLnYyIuUCCgVFdmVudBI0CgtyZXBvcnRfdGltZRgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBARI9CgR0eXBlGAIgASgOMiouZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5FdmVudC5FdmVudFR5cGVCA+BBARJDCgdkZXRhaWxzGAMgAygLMi0uZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52Mi5FdmVudC5EZXRhaWxzRW50cnlCA+BBARouCgxEZXRhaWxzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASJyCglFdmVudFR5cGUSGgoWRVZFTlRfVFlQRV9VTlNQRUNJRklFRBAAEggKBElETEUQARINCglIRUFSVEJFQVQQAhIKCgZIRUFMVEgQAxIPCgtNQUlOVEVOQU5DRRAEEhMKD01FVEFEQVRBX0NIQU5HRRAFQsEBCh1jb20uZ29vZ2xlLmNsb3VkLm5vdGVib29rcy52MkIKRXZlbnRQcm90b1ABWjtjbG91ZC5nb29nbGUuY29tL2dvL25vdGVib29rcy9hcGl2Mi9ub3RlYm9va3NwYjtub3RlYm9va3NwYqoCGUdvb2dsZS5DbG91ZC5Ob3RlYm9va3MuVjLKAhlHb29nbGVcQ2xvdWRcTm90ZWJvb2tzXFYy6gIcR29vZ2xlOjpDbG91ZDo6Tm90ZWJvb2tzOjpWMmIGcHJvdG8z", [file_google_api_field_behavior, file_google_protobuf_timestamp]);

/**
 * The definition of an Event for a managed / semi-managed notebook instance.
 *
 * @generated from message google.cloud.notebooks.v2.Event
 */
export type Event = Message<"google.cloud.notebooks.v2.Event"> & {
  /**
   * Optional. Event report time.
   *
   * @generated from field: google.protobuf.Timestamp report_time = 1;
   */
  reportTime?: Timestamp;

  /**
   * Optional. Event type.
   *
   * @generated from field: google.cloud.notebooks.v2.Event.EventType type = 2;
   */
  type: Event_EventType;

  /**
   * Optional. Event details. This field is used to pass event information.
   *
   * @generated from field: map<string, string> details = 3;
   */
  details: { [key: string]: string };
};

/**
 * Describes the message google.cloud.notebooks.v2.Event.
 * Use `create(EventSchema)` to create a new message.
 */
export const EventSchema: GenMessage<Event> = /*@__PURE__*/
  messageDesc(file_google_cloud_notebooks_v2_event, 0);

/**
 * The definition of the event types.
 *
 * @generated from enum google.cloud.notebooks.v2.Event.EventType
 */
export enum Event_EventType {
  /**
   * Event is not specified.
   *
   * @generated from enum value: EVENT_TYPE_UNSPECIFIED = 0;
   */
  EVENT_TYPE_UNSPECIFIED = 0,

  /**
   * The instance / runtime is idle
   *
   * @generated from enum value: IDLE = 1;
   */
  IDLE = 1,

  /**
   * The instance / runtime is available.
   * This event indicates that instance / runtime underlying compute is
   * operational.
   *
   * @generated from enum value: HEARTBEAT = 2;
   */
  HEARTBEAT = 2,

  /**
   * The instance / runtime health is available.
   * This event indicates that instance / runtime health information.
   *
   * @generated from enum value: HEALTH = 3;
   */
  HEALTH = 3,

  /**
   * The instance / runtime is available.
   * This event allows instance / runtime to send Host maintenance
   * information to Control Plane.
   * https://cloud.google.com/compute/docs/gpus/gpu-host-maintenance
   *
   * @generated from enum value: MAINTENANCE = 4;
   */
  MAINTENANCE = 4,

  /**
   * The instance / runtime is available.
   * This event indicates that the instance had metadata that needs to be
   * modified.
   *
   * @generated from enum value: METADATA_CHANGE = 5;
   */
  METADATA_CHANGE = 5,
}

/**
 * Describes the enum google.cloud.notebooks.v2.Event.EventType.
 */
export const Event_EventTypeSchema: GenEnum<Event_EventType> = /*@__PURE__*/
  enumDesc(file_google_cloud_notebooks_v2_event, 0, 0);
