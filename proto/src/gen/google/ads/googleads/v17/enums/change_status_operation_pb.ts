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
// @generated from file google/ads/googleads/v17/enums/change_status_operation.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/change_status_operation.proto.
 */
export const file_google_ads_googleads_v17_enums_change_status_operation: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvY2hhbmdlX3N0YXR1c19vcGVyYXRpb24ucHJvdG8SHmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtcyJ3ChlDaGFuZ2VTdGF0dXNPcGVyYXRpb25FbnVtIloKFUNoYW5nZVN0YXR1c09wZXJhdGlvbhIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIJCgVBRERFRBACEgsKB0NIQU5HRUQQAxILCgdSRU1PVkVEEARC9AEKImNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXNCGkNoYW5nZVN0YXR1c09wZXJhdGlvblByb3RvUAFaQ2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvZW51bXM7ZW51bXOiAgNHQUGqAh5Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuRW51bXPKAh5Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcRW51bXPqAiJHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTc6OkVudW1zYgZwcm90bzM");

/**
 * Container for enum describing operations for the ChangeStatus resource.
 *
 * @generated from message google.ads.googleads.v17.enums.ChangeStatusOperationEnum
 */
export type ChangeStatusOperationEnum = Message<"google.ads.googleads.v17.enums.ChangeStatusOperationEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.ChangeStatusOperationEnum.
 * Use `create(ChangeStatusOperationEnumSchema)` to create a new message.
 */
export const ChangeStatusOperationEnumSchema: GenMessage<ChangeStatusOperationEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_change_status_operation, 0);

/**
 * Status of the changed resource
 *
 * @generated from enum google.ads.googleads.v17.enums.ChangeStatusOperationEnum.ChangeStatusOperation
 */
export enum ChangeStatusOperationEnum_ChangeStatusOperation {
  /**
   * No value has been specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Used for return value only. Represents an unclassified resource unknown
   * in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * The resource was created.
   *
   * @generated from enum value: ADDED = 2;
   */
  ADDED = 2,

  /**
   * The resource was modified.
   *
   * @generated from enum value: CHANGED = 3;
   */
  CHANGED = 3,

  /**
   * The resource was removed.
   *
   * @generated from enum value: REMOVED = 4;
   */
  REMOVED = 4,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.ChangeStatusOperationEnum.ChangeStatusOperation.
 */
export const ChangeStatusOperationEnum_ChangeStatusOperationSchema: GenEnum<ChangeStatusOperationEnum_ChangeStatusOperation> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_change_status_operation, 0, 0);
