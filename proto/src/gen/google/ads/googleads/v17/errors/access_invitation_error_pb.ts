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
// @generated from file google/ads/googleads/v17/errors/access_invitation_error.proto (package google.ads.googleads.v17.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/errors/access_invitation_error.proto.
 */
export const file_google_ads_googleads_v17_errors_access_invitation_error: GenFile = /*@__PURE__*/
  fileDesc("Cj1nb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzL2FjY2Vzc19pbnZpdGF0aW9uX2Vycm9yLnByb3RvEh9nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZXJyb3JzIvMCChlBY2Nlc3NJbnZpdGF0aW9uRXJyb3JFbnVtItUCChVBY2Nlc3NJbnZpdGF0aW9uRXJyb3ISDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESGQoVSU5WQUxJRF9FTUFJTF9BRERSRVNTEAISJAogRU1BSUxfQUREUkVTU19BTFJFQURZX0hBU19BQ0NFU1MQAxIdChlJTlZBTElEX0lOVklUQVRJT05fU1RBVFVTEAQSJwojR09PR0xFX0NPTlNVTUVSX0FDQ09VTlRfTk9UX0FMTE9XRUQQBRIZChVJTlZBTElEX0lOVklUQVRJT05fSUQQBhIwCixFTUFJTF9BRERSRVNTX0FMUkVBRFlfSEFTX1BFTkRJTkdfSU5WSVRBVElPThAHEiYKIlBFTkRJTkdfSU5WSVRBVElPTlNfTElNSVRfRVhDRUVERUQQCBIgChxFTUFJTF9ET01BSU5fUE9MSUNZX1ZJT0xBVEVEEAlC+gEKI2NvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZXJyb3JzQhpBY2Nlc3NJbnZpdGF0aW9uRXJyb3JQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L2Vycm9ycztlcnJvcnOiAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuRXJyb3JzygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XEVycm9yc+oCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible AccessInvitation errors.
 *
 * @generated from message google.ads.googleads.v17.errors.AccessInvitationErrorEnum
 */
export type AccessInvitationErrorEnum = Message<"google.ads.googleads.v17.errors.AccessInvitationErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.errors.AccessInvitationErrorEnum.
 * Use `create(AccessInvitationErrorEnumSchema)` to create a new message.
 */
export const AccessInvitationErrorEnumSchema: GenMessage<AccessInvitationErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_errors_access_invitation_error, 0);

/**
 * Enum describing possible AccessInvitation errors.
 *
 * @generated from enum google.ads.googleads.v17.errors.AccessInvitationErrorEnum.AccessInvitationError
 */
export enum AccessInvitationErrorEnum_AccessInvitationError {
  /**
   * Enum unspecified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The received error code is not known in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * The email address is invalid for sending an invitation.
   *
   * @generated from enum value: INVALID_EMAIL_ADDRESS = 2;
   */
  INVALID_EMAIL_ADDRESS = 2,

  /**
   * Email address already has access to this customer.
   *
   * @generated from enum value: EMAIL_ADDRESS_ALREADY_HAS_ACCESS = 3;
   */
  EMAIL_ADDRESS_ALREADY_HAS_ACCESS = 3,

  /**
   * Invalid invitation status for the operation.
   *
   * @generated from enum value: INVALID_INVITATION_STATUS = 4;
   */
  INVALID_INVITATION_STATUS = 4,

  /**
   * Email address cannot be like abc+foo@google.com.
   *
   * @generated from enum value: GOOGLE_CONSUMER_ACCOUNT_NOT_ALLOWED = 5;
   */
  GOOGLE_CONSUMER_ACCOUNT_NOT_ALLOWED = 5,

  /**
   * Invalid invitation ID.
   *
   * @generated from enum value: INVALID_INVITATION_ID = 6;
   */
  INVALID_INVITATION_ID = 6,

  /**
   * Email address already has a pending invitation.
   *
   * @generated from enum value: EMAIL_ADDRESS_ALREADY_HAS_PENDING_INVITATION = 7;
   */
  EMAIL_ADDRESS_ALREADY_HAS_PENDING_INVITATION = 7,

  /**
   * Pending invitation limit exceeded for the customer.
   *
   * @generated from enum value: PENDING_INVITATIONS_LIMIT_EXCEEDED = 8;
   */
  PENDING_INVITATIONS_LIMIT_EXCEEDED = 8,

  /**
   * Email address doesn't conform to the email domain policy. See
   * https://support.google.com/google-ads/answer/2375456
   *
   * @generated from enum value: EMAIL_DOMAIN_POLICY_VIOLATED = 9;
   */
  EMAIL_DOMAIN_POLICY_VIOLATED = 9,
}

/**
 * Describes the enum google.ads.googleads.v17.errors.AccessInvitationErrorEnum.AccessInvitationError.
 */
export const AccessInvitationErrorEnum_AccessInvitationErrorSchema: GenEnum<AccessInvitationErrorEnum_AccessInvitationError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_errors_access_invitation_error, 0, 0);
