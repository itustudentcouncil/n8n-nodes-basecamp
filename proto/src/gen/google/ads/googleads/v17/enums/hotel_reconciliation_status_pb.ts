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
// @generated from file google/ads/googleads/v17/enums/hotel_reconciliation_status.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/hotel_reconciliation_status.proto.
 */
export const file_google_ads_googleads_v17_enums_hotel_reconciliation_status: GenFile = /*@__PURE__*/
  fileDesc("CkBnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvaG90ZWxfcmVjb25jaWxpYXRpb25fc3RhdHVzLnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXMirQEKHUhvdGVsUmVjb25jaWxpYXRpb25TdGF0dXNFbnVtIosBChlIb3RlbFJlY29uY2lsaWF0aW9uU3RhdHVzEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhcKE1JFU0VSVkFUSU9OX0VOQUJMRUQQAhIZChVSRUNPTkNJTElBVElPTl9ORUVERUQQAxIOCgpSRUNPTkNJTEVEEAQSDAoIQ0FOQ0VMRUQQBUL4AQoiY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtc0IeSG90ZWxSZWNvbmNpbGlhdGlvblN0YXR1c1Byb3RvUAFaQ2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvZW51bXM7ZW51bXOiAgNHQUGqAh5Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuRW51bXPKAh5Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcRW51bXPqAiJHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTc6OkVudW1zYgZwcm90bzM");

/**
 * Container for HotelReconciliationStatus.
 *
 * @generated from message google.ads.googleads.v17.enums.HotelReconciliationStatusEnum
 */
export type HotelReconciliationStatusEnum = Message<"google.ads.googleads.v17.enums.HotelReconciliationStatusEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.HotelReconciliationStatusEnum.
 * Use `create(HotelReconciliationStatusEnumSchema)` to create a new message.
 */
export const HotelReconciliationStatusEnumSchema: GenMessage<HotelReconciliationStatusEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_hotel_reconciliation_status, 0);

/**
 * Status of the hotel booking reconciliation.
 *
 * @generated from enum google.ads.googleads.v17.enums.HotelReconciliationStatusEnum.HotelReconciliationStatus
 */
export enum HotelReconciliationStatusEnum_HotelReconciliationStatus {
  /**
   * Not specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The value is unknown in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Bookings are for a future date, or a stay is underway but the check-out
   * date hasn't passed. An active reservation can't be reconciled.
   *
   * @generated from enum value: RESERVATION_ENABLED = 2;
   */
  RESERVATION_ENABLED = 2,

  /**
   * Check-out has already taken place, or the booked dates have passed
   * without cancellation. Bookings that are not reconciled within 45 days of
   * the check-out date are billed based on the original booking price.
   *
   * @generated from enum value: RECONCILIATION_NEEDED = 3;
   */
  RECONCILIATION_NEEDED = 3,

  /**
   * These bookings have been reconciled. Reconciled bookings are billed 45
   * days after the check-out date.
   *
   * @generated from enum value: RECONCILED = 4;
   */
  RECONCILED = 4,

  /**
   * This booking was marked as canceled. Canceled stays with a value greater
   * than zero (due to minimum stay rules or cancellation fees) are billed 45
   * days after the check-out date.
   *
   * @generated from enum value: CANCELED = 5;
   */
  CANCELED = 5,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.HotelReconciliationStatusEnum.HotelReconciliationStatus.
 */
export const HotelReconciliationStatusEnum_HotelReconciliationStatusSchema: GenEnum<HotelReconciliationStatusEnum_HotelReconciliationStatus> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_hotel_reconciliation_status, 0, 0);
