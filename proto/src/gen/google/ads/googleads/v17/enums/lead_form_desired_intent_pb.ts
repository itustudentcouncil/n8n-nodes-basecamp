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
// @generated from file google/ads/googleads/v17/enums/lead_form_desired_intent.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/lead_form_desired_intent.proto.
 */
export const file_google_ads_googleads_v17_enums_lead_form_desired_intent: GenFile = /*@__PURE__*/
  fileDesc("Cj1nb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvbGVhZF9mb3JtX2Rlc2lyZWRfaW50ZW50LnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXMicwoZTGVhZEZvcm1EZXNpcmVkSW50ZW50RW51bSJWChVMZWFkRm9ybURlc2lyZWRJbnRlbnQSDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESDgoKTE9XX0lOVEVOVBACEg8KC0hJR0hfSU5URU5UEANC9AEKImNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXNCGkxlYWRGb3JtRGVzaXJlZEludGVudFByb3RvUAFaQ2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvZW51bXM7ZW51bXOiAgNHQUGqAh5Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuRW51bXPKAh5Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcRW51bXPqAiJHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTc6OkVudW1zYgZwcm90bzM");

/**
 * Describes the chosen level of intent of generated leads.
 *
 * @generated from message google.ads.googleads.v17.enums.LeadFormDesiredIntentEnum
 */
export type LeadFormDesiredIntentEnum = Message<"google.ads.googleads.v17.enums.LeadFormDesiredIntentEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.LeadFormDesiredIntentEnum.
 * Use `create(LeadFormDesiredIntentEnumSchema)` to create a new message.
 */
export const LeadFormDesiredIntentEnumSchema: GenMessage<LeadFormDesiredIntentEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_lead_form_desired_intent, 0);

/**
 * Enum describing the chosen level of intent of generated leads.
 *
 * @generated from enum google.ads.googleads.v17.enums.LeadFormDesiredIntentEnum.LeadFormDesiredIntent
 */
export enum LeadFormDesiredIntentEnum_LeadFormDesiredIntent {
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
   * Deliver more leads at a potentially lower quality.
   *
   * @generated from enum value: LOW_INTENT = 2;
   */
  LOW_INTENT = 2,

  /**
   * Deliver leads that are more qualified.
   *
   * @generated from enum value: HIGH_INTENT = 3;
   */
  HIGH_INTENT = 3,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.LeadFormDesiredIntentEnum.LeadFormDesiredIntent.
 */
export const LeadFormDesiredIntentEnum_LeadFormDesiredIntentSchema: GenEnum<LeadFormDesiredIntentEnum_LeadFormDesiredIntent> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_lead_form_desired_intent, 0, 0);
