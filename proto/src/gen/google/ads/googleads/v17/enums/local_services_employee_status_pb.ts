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
// @generated from file google/ads/googleads/v17/enums/local_services_employee_status.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/local_services_employee_status.proto.
 */
export const file_google_ads_googleads_v17_enums_local_services_employee_status: GenFile = /*@__PURE__*/
  fileDesc("CkNnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvbG9jYWxfc2VydmljZXNfZW1wbG95ZWVfc3RhdHVzLnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXMieAofTG9jYWxTZXJ2aWNlc0VtcGxveWVlU3RhdHVzRW51bSJVChtMb2NhbFNlcnZpY2VzRW1wbG95ZWVTdGF0dXMSDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESCwoHRU5BQkxFRBACEgsKB1JFTU9WRUQQA0L6AQoiY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtc0IgTG9jYWxTZXJ2aWNlc0VtcGxveWVlU3RhdHVzUHJvdG9QAVpDZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNy9lbnVtcztlbnVtc6ICA0dBQaoCHkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5FbnVtc8oCHkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxN1xFbnVtc+oCIkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RW51bXNiBnByb3RvMw");

/**
 * Container for enum describing the status of local services employee.
 *
 * @generated from message google.ads.googleads.v17.enums.LocalServicesEmployeeStatusEnum
 */
export type LocalServicesEmployeeStatusEnum = Message<"google.ads.googleads.v17.enums.LocalServicesEmployeeStatusEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.LocalServicesEmployeeStatusEnum.
 * Use `create(LocalServicesEmployeeStatusEnumSchema)` to create a new message.
 */
export const LocalServicesEmployeeStatusEnumSchema: GenMessage<LocalServicesEmployeeStatusEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_local_services_employee_status, 0);

/**
 * Enums describing statuses of a local services employee.
 *
 * @generated from enum google.ads.googleads.v17.enums.LocalServicesEmployeeStatusEnum.LocalServicesEmployeeStatus
 */
export enum LocalServicesEmployeeStatusEnum_LocalServicesEmployeeStatus {
  /**
   * Not specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Used for return value only. Represents value unknown in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Employee is not removed, and employee status is active.
   *
   * @generated from enum value: ENABLED = 2;
   */
  ENABLED = 2,

  /**
   * Employee is removed. Used to delete an employee from the business.
   *
   * @generated from enum value: REMOVED = 3;
   */
  REMOVED = 3,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.LocalServicesEmployeeStatusEnum.LocalServicesEmployeeStatus.
 */
export const LocalServicesEmployeeStatusEnum_LocalServicesEmployeeStatusSchema: GenEnum<LocalServicesEmployeeStatusEnum_LocalServicesEmployeeStatus> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_local_services_employee_status, 0, 0);
