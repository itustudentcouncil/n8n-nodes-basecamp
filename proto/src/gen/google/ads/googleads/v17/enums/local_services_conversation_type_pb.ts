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
// @generated from file google/ads/googleads/v17/enums/local_services_conversation_type.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/local_services_conversation_type.proto.
 */
export const file_google_ads_googleads_v17_enums_local_services_conversation_type: GenFile = /*@__PURE__*/
  fileDesc("CkVnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvbG9jYWxfc2VydmljZXNfY29udmVyc2F0aW9uX3R5cGUucHJvdG8SHmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lbnVtcyKzAQolTG9jYWxTZXJ2aWNlc0xlYWRDb252ZXJzYXRpb25UeXBlRW51bSKJAQoQQ29udmVyc2F0aW9uVHlwZRIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIJCgVFTUFJTBACEgsKB01FU1NBR0UQAxIOCgpQSE9ORV9DQUxMEAQSBwoDU01TEAUSCwoHQk9PS0lORxAGEgwKCFdIQVRTQVBQEAcSCwoHQURTX0FQSRAIQvwBCiJjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmVudW1zQiJMb2NhbFNlcnZpY2VzQ29udmVyc2F0aW9uVHlwZVByb3RvUAFaQ2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvZW51bXM7ZW51bXOiAgNHQUGqAh5Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuRW51bXPKAh5Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcRW51bXPqAiJHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTc6OkVudW1zYgZwcm90bzM");

/**
 * Container for enum describing possible types of lead conversation.
 *
 * @generated from message google.ads.googleads.v17.enums.LocalServicesLeadConversationTypeEnum
 */
export type LocalServicesLeadConversationTypeEnum = Message<"google.ads.googleads.v17.enums.LocalServicesLeadConversationTypeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.LocalServicesLeadConversationTypeEnum.
 * Use `create(LocalServicesLeadConversationTypeEnumSchema)` to create a new message.
 */
export const LocalServicesLeadConversationTypeEnumSchema: GenMessage<LocalServicesLeadConversationTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_local_services_conversation_type, 0);

/**
 * Possible types of lead conversation.
 *
 * @generated from enum google.ads.googleads.v17.enums.LocalServicesLeadConversationTypeEnum.ConversationType
 */
export enum LocalServicesLeadConversationTypeEnum_ConversationType {
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
   * Email lead conversation.
   *
   * @generated from enum value: EMAIL = 2;
   */
  EMAIL = 2,

  /**
   * Message lead conversation.
   *
   * @generated from enum value: MESSAGE = 3;
   */
  MESSAGE = 3,

  /**
   * Phone call lead conversation.
   *
   * @generated from enum value: PHONE_CALL = 4;
   */
  PHONE_CALL = 4,

  /**
   * SMS lead conversation.
   *
   * @generated from enum value: SMS = 5;
   */
  SMS = 5,

  /**
   * Booking lead conversation.
   *
   * @generated from enum value: BOOKING = 6;
   */
  BOOKING = 6,

  /**
   * WhatsApp lead conversation.
   *
   * @generated from enum value: WHATSAPP = 7;
   */
  WHATSAPP = 7,

  /**
   * Lead conversation created through Google Ads API.
   *
   * @generated from enum value: ADS_API = 8;
   */
  ADS_API = 8,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.LocalServicesLeadConversationTypeEnum.ConversationType.
 */
export const LocalServicesLeadConversationTypeEnum_ConversationTypeSchema: GenEnum<LocalServicesLeadConversationTypeEnum_ConversationType> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_local_services_conversation_type, 0, 0);
