// Copyright 2023 Google LLC
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
// @generated from file google/ads/googleads/v16/resources/local_services_lead.proto (package google.ads.googleads.v16.resources, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { LocalServicesCreditStateEnum_CreditState } from "../enums/local_services_lead_credit_state_pb";
import { file_google_ads_googleads_v16_enums_local_services_lead_credit_state } from "../enums/local_services_lead_credit_state_pb";
import type { LocalServicesLeadStatusEnum_LeadStatus } from "../enums/local_services_lead_status_pb";
import { file_google_ads_googleads_v16_enums_local_services_lead_status } from "../enums/local_services_lead_status_pb";
import type { LocalServicesLeadTypeEnum_LeadType } from "../enums/local_services_lead_type_pb";
import { file_google_ads_googleads_v16_enums_local_services_lead_type } from "../enums/local_services_lead_type_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/resources/local_services_lead.proto.
 */
export const file_google_ads_googleads_v16_resources_local_services_lead: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvcmVzb3VyY2VzL2xvY2FsX3NlcnZpY2VzX2xlYWQucHJvdG8SImdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMirAYKEUxvY2FsU2VydmljZXNMZWFkEkkKDXJlc291cmNlX25hbWUYASABKAlCMuBBA/pBLAoqZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0xvY2FsU2VydmljZXNMZWFkEg8KAmlkGAIgASgDQgPgQQMSGAoLY2F0ZWdvcnlfaWQYAyABKAlCA+BBAxIXCgpzZXJ2aWNlX2lkGAQgASgJQgPgQQMSUAoPY29udGFjdF9kZXRhaWxzGAUgASgLMjIuZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlcy5Db250YWN0RGV0YWlsc0ID4EEDEloKCWxlYWRfdHlwZRgGIAEoDjJCLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtcy5Mb2NhbFNlcnZpY2VzTGVhZFR5cGVFbnVtLkxlYWRUeXBlQgPgQQMSYAoLbGVhZF9zdGF0dXMYByABKA4yRi5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuTG9jYWxTZXJ2aWNlc0xlYWRTdGF0dXNFbnVtLkxlYWRTdGF0dXNCA+BBAxIfChJjcmVhdGlvbl9kYXRlX3RpbWUYCCABKAlCA+BBAxITCgZsb2NhbGUYCSABKAlCA+BBAxJACgRub3RlGAogASgLMiguZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LnJlc291cmNlcy5Ob3RlQgPgQQNIAIgBARIZCgxsZWFkX2NoYXJnZWQYCyABKAhCA+BBAxJTCg5jcmVkaXRfZGV0YWlscxgMIAEoCzIxLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXMuQ3JlZGl0RGV0YWlsc0ID4EEDSAGIAQE6dOpBcQoqZ29vZ2xlYWRzLmdvb2dsZWFwaXMuY29tL0xvY2FsU2VydmljZXNMZWFkEkNjdXN0b21lcnMve2N1c3RvbWVyX2lkfS9sb2NhbFNlcnZpY2VzTGVhZHMve2xvY2FsX3NlcnZpY2VzX2xlYWRfaWR9QgcKBV9ub3RlQhEKD19jcmVkaXRfZGV0YWlscyJbCg5Db250YWN0RGV0YWlscxIZCgxwaG9uZV9udW1iZXIYASABKAlCA+BBAxISCgVlbWFpbBgCIAEoCUID4EEDEhoKDWNvbnN1bWVyX25hbWUYAyABKAlCA+BBAyI9CgROb3RlEhsKDmVkaXRfZGF0ZV90aW1lGAEgASgJQgPgQQMSGAoLZGVzY3JpcHRpb24YAiABKAlCA+BBAyKlAQoNQ3JlZGl0RGV0YWlscxJjCgxjcmVkaXRfc3RhdGUYASABKA4ySC5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMuTG9jYWxTZXJ2aWNlc0NyZWRpdFN0YXRlRW51bS5DcmVkaXRTdGF0ZUID4EEDEi8KImNyZWRpdF9zdGF0ZV9sYXN0X3VwZGF0ZV9kYXRlX3RpbWUYAiABKAlCA+BBA0KIAgomY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5yZXNvdXJjZXNCFkxvY2FsU2VydmljZXNMZWFkUHJvdG9QAVpLZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9yZXNvdXJjZXM7cmVzb3VyY2VzogIDR0FBqgIiR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LlJlc291cmNlc8oCIkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxSZXNvdXJjZXPqAiZHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OlJlc291cmNlc2IGcHJvdG8z", [file_google_ads_googleads_v16_enums_local_services_lead_credit_state, file_google_ads_googleads_v16_enums_local_services_lead_status, file_google_ads_googleads_v16_enums_local_services_lead_type, file_google_api_field_behavior, file_google_api_resource]);

/**
 * Data from Local Services Lead.
 * Contains details of Lead which is generated when user calls, messages or
 * books service from advertiser.
 * More info: https://ads.google.com/local-services-ads
 *
 * @generated from message google.ads.googleads.v16.resources.LocalServicesLead
 */
export type LocalServicesLead = Message<"google.ads.googleads.v16.resources.LocalServicesLead"> & {
  /**
   * Output only. The resource name of the local services lead data.
   * Local Services Lead resource name have the form
   *
   * `customers/{customer_id}/localServicesLead/{local_services_lead_id}`
   *
   * @generated from field: string resource_name = 1;
   */
  resourceName: string;

  /**
   * Output only. ID of this Lead.
   *
   * @generated from field: int64 id = 2;
   */
  id: bigint;

  /**
   * Output only. Service category of the lead. For example:
   * `xcat:service_area_business_hvac`,
   * `xcat:service_area_business_real_estate_agent`, etc.
   * For more details see:
   * https://developers.google.com/google-ads/api/data/codes-formats#local_services_ids
   *
   * @generated from field: string category_id = 3;
   */
  categoryId: string;

  /**
   * Output only. Service for the  category. For example: `buyer_agent`,
   * `seller_agent` for the category of
   * `xcat:service_area_business_real_estate_agent`.
   *
   * @generated from field: string service_id = 4;
   */
  serviceId: string;

  /**
   * Output only. Lead's contact details.
   *
   * @generated from field: google.ads.googleads.v16.resources.ContactDetails contact_details = 5;
   */
  contactDetails?: ContactDetails;

  /**
   * Output only. Type of Local Services lead: phone, message, booking, etc.
   *
   * @generated from field: google.ads.googleads.v16.enums.LocalServicesLeadTypeEnum.LeadType lead_type = 6;
   */
  leadType: LocalServicesLeadTypeEnum_LeadType;

  /**
   * Output only. Current status of lead.
   *
   * @generated from field: google.ads.googleads.v16.enums.LocalServicesLeadStatusEnum.LeadStatus lead_status = 7;
   */
  leadStatus: LocalServicesLeadStatusEnum_LeadStatus;

  /**
   * Output only. The date time at which lead was created by Local Services Ads.
   * The format is "YYYY-MM-DD HH:MM:SS" in the Google Ads account's timezone.
   * Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"
   *
   * @generated from field: string creation_date_time = 8;
   */
  creationDateTime: string;

  /**
   * Output only. Language used by the Local Services provider linked to lead.
   * See https://developers.google.com/google-ads/api/data/codes-formats#locales
   *
   * @generated from field: string locale = 9;
   */
  locale: string;

  /**
   * Output only. Note added by advertiser for the lead.
   *
   * @generated from field: optional google.ads.googleads.v16.resources.Note note = 10;
   */
  note?: Note;

  /**
   * Output only. True if the advertiser was charged for the lead.
   *
   * @generated from field: bool lead_charged = 11;
   */
  leadCharged: boolean;

  /**
   * Output only. Credit details of the lead.
   *
   * @generated from field: optional google.ads.googleads.v16.resources.CreditDetails credit_details = 12;
   */
  creditDetails?: CreditDetails;
};

/**
 * Describes the message google.ads.googleads.v16.resources.LocalServicesLead.
 * Use `create(LocalServicesLeadSchema)` to create a new message.
 */
export const LocalServicesLeadSchema: GenMessage<LocalServicesLead> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_local_services_lead, 0);

/**
 * Fields containing consumer contact details.
 *
 * @generated from message google.ads.googleads.v16.resources.ContactDetails
 */
export type ContactDetails = Message<"google.ads.googleads.v16.resources.ContactDetails"> & {
  /**
   * Output only. Consumer phone number in E164 format.
   *
   * @generated from field: string phone_number = 1;
   */
  phoneNumber: string;

  /**
   * Output only. Consumer email address.
   *
   * @generated from field: string email = 2;
   */
  email: string;

  /**
   * Output only. Consumer name if consumer provided name from Message or
   * Booking form on google.com
   *
   * @generated from field: string consumer_name = 3;
   */
  consumerName: string;
};

/**
 * Describes the message google.ads.googleads.v16.resources.ContactDetails.
 * Use `create(ContactDetailsSchema)` to create a new message.
 */
export const ContactDetailsSchema: GenMessage<ContactDetails> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_local_services_lead, 1);

/**
 * Represents a note added to a lead by the advertiser. Advertisers can edit
 * notes, which will reset edit time and change description.
 *
 * @generated from message google.ads.googleads.v16.resources.Note
 */
export type Note = Message<"google.ads.googleads.v16.resources.Note"> & {
  /**
   * Output only. The date time when lead note was edited. The format is
   * "YYYY-MM-DD HH:MM:SS" in the Google Ads account's timezone. Examples:
   * "2018-03-05 09:15:00" or "2018-02-01 14:34:30"
   *
   * @generated from field: string edit_date_time = 1;
   */
  editDateTime: string;

  /**
   * Output only. Content of lead note.
   *
   * @generated from field: string description = 2;
   */
  description: string;
};

/**
 * Describes the message google.ads.googleads.v16.resources.Note.
 * Use `create(NoteSchema)` to create a new message.
 */
export const NoteSchema: GenMessage<Note> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_local_services_lead, 2);

/**
 * Represents the credit details of a lead.
 *
 * @generated from message google.ads.googleads.v16.resources.CreditDetails
 */
export type CreditDetails = Message<"google.ads.googleads.v16.resources.CreditDetails"> & {
  /**
   * Output only. Credit state of the lead.
   *
   * @generated from field: google.ads.googleads.v16.enums.LocalServicesCreditStateEnum.CreditState credit_state = 1;
   */
  creditState: LocalServicesCreditStateEnum_CreditState;

  /**
   * Output only. The date time when the credit state of the lead was last
   * updated. The format is "YYYY-MM-DD HH:MM:SS" in the Google Ads account's
   * timezone. Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"
   *
   * @generated from field: string credit_state_last_update_date_time = 2;
   */
  creditStateLastUpdateDateTime: string;
};

/**
 * Describes the message google.ads.googleads.v16.resources.CreditDetails.
 * Use `create(CreditDetailsSchema)` to create a new message.
 */
export const CreditDetailsSchema: GenMessage<CreditDetails> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_resources_local_services_lead, 3);
