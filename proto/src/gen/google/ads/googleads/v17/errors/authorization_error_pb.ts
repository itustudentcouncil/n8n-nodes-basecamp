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
// @generated from file google/ads/googleads/v17/errors/authorization_error.proto (package google.ads.googleads.v17.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/errors/authorization_error.proto.
 */
export const file_google_ads_googleads_v17_errors_authorization_error: GenFile = /*@__PURE__*/
  fileDesc("Cjlnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzL2F1dGhvcml6YXRpb25fZXJyb3IucHJvdG8SH2dvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lcnJvcnMizgQKFkF1dGhvcml6YXRpb25FcnJvckVudW0iswQKEkF1dGhvcml6YXRpb25FcnJvchIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIaChZVU0VSX1BFUk1JU1NJT05fREVOSUVEEAISJAogREVWRUxPUEVSX1RPS0VOX05PVF9PTl9BTExPV0xJU1QQDRIeChpERVZFTE9QRVJfVE9LRU5fUFJPSElCSVRFRBAEEhQKEFBST0pFQ1RfRElTQUJMRUQQBRIXChNBVVRIT1JJWkFUSU9OX0VSUk9SEAYSGAoUQUNUSU9OX05PVF9QRVJNSVRURUQQBxIVChFJTkNPTVBMRVRFX1NJR05VUBAIEhgKFENVU1RPTUVSX05PVF9FTkFCTEVEEBgSDwoLTUlTU0lOR19UT1MQCRIgChxERVZFTE9QRVJfVE9LRU5fTk9UX0FQUFJPVkVEEAoSPQo5SU5WQUxJRF9MT0dJTl9DVVNUT01FUl9JRF9TRVJWSU5HX0NVU1RPTUVSX0lEX0NPTUJJTkFUSU9OEAsSGQoVU0VSVklDRV9BQ0NFU1NfREVOSUVEEAwSIgoeQUNDRVNTX0RFTklFRF9GT1JfQUNDT1VOVF9UWVBFEBkSGAoUTUVUUklDX0FDQ0VTU19ERU5JRUQQGhIoCiRDTE9VRF9QUk9KRUNUX05PVF9VTkRFUl9PUkdBTklaQVRJT04QGxIuCipBQ1RJT05fTk9UX1BFUk1JVFRFRF9GT1JfU1VTUEVOREVEX0FDQ09VTlQQHEL3AQojY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lcnJvcnNCF0F1dGhvcml6YXRpb25FcnJvclByb3RvUAFaRWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzO2Vycm9yc6ICA0dBQaoCH0dvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5FcnJvcnPKAh9Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTdcRXJyb3Jz6gIjR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE3OjpFcnJvcnNiBnByb3RvMw");

/**
 * Container for enum describing possible authorization errors.
 *
 * @generated from message google.ads.googleads.v17.errors.AuthorizationErrorEnum
 */
export type AuthorizationErrorEnum = Message<"google.ads.googleads.v17.errors.AuthorizationErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.errors.AuthorizationErrorEnum.
 * Use `create(AuthorizationErrorEnumSchema)` to create a new message.
 */
export const AuthorizationErrorEnumSchema: GenMessage<AuthorizationErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_errors_authorization_error, 0);

/**
 * Enum describing possible authorization errors.
 *
 * @generated from enum google.ads.googleads.v17.errors.AuthorizationErrorEnum.AuthorizationError
 */
export enum AuthorizationErrorEnum_AuthorizationError {
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
   * User doesn't have permission to access customer. Note: If you're
   * accessing a client customer, the manager's customer ID must be set in the
   * `login-customer-id` header. Learn more at
   * https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid
   *
   * @generated from enum value: USER_PERMISSION_DENIED = 2;
   */
  USER_PERMISSION_DENIED = 2,

  /**
   * The developer token is not on the allow-list.
   *
   * @generated from enum value: DEVELOPER_TOKEN_NOT_ON_ALLOWLIST = 13;
   */
  DEVELOPER_TOKEN_NOT_ON_ALLOWLIST = 13,

  /**
   * The developer token is not allowed with the project sent in the request.
   *
   * @generated from enum value: DEVELOPER_TOKEN_PROHIBITED = 4;
   */
  DEVELOPER_TOKEN_PROHIBITED = 4,

  /**
   * The Google Cloud project sent in the request does not have permission to
   * access the api.
   *
   * @generated from enum value: PROJECT_DISABLED = 5;
   */
  PROJECT_DISABLED = 5,

  /**
   * Authorization of the client failed.
   *
   * @generated from enum value: AUTHORIZATION_ERROR = 6;
   */
  AUTHORIZATION_ERROR = 6,

  /**
   * The user does not have permission to perform this action
   * (for example, ADD, UPDATE, REMOVE) on the resource or call a method.
   *
   * @generated from enum value: ACTION_NOT_PERMITTED = 7;
   */
  ACTION_NOT_PERMITTED = 7,

  /**
   * Signup not complete.
   *
   * @generated from enum value: INCOMPLETE_SIGNUP = 8;
   */
  INCOMPLETE_SIGNUP = 8,

  /**
   * The customer account can't be accessed because it is not yet enabled or
   * has been deactivated.
   *
   * @generated from enum value: CUSTOMER_NOT_ENABLED = 24;
   */
  CUSTOMER_NOT_ENABLED = 24,

  /**
   * The developer must sign the terms of service. They can be found here:
   * ads.google.com/aw/apicenter
   *
   * @generated from enum value: MISSING_TOS = 9;
   */
  MISSING_TOS = 9,

  /**
   * The developer token is only approved for use with test accounts. To
   * access non-test accounts, apply for Basic or Standard access.
   *
   * @generated from enum value: DEVELOPER_TOKEN_NOT_APPROVED = 10;
   */
  DEVELOPER_TOKEN_NOT_APPROVED = 10,

  /**
   * The login customer specified does not have access to the account
   * specified, so the request is invalid.
   *
   * @generated from enum value: INVALID_LOGIN_CUSTOMER_ID_SERVING_CUSTOMER_ID_COMBINATION = 11;
   */
  INVALID_LOGIN_CUSTOMER_ID_SERVING_CUSTOMER_ID_COMBINATION = 11,

  /**
   * The developer specified does not have access to the service.
   *
   * @generated from enum value: SERVICE_ACCESS_DENIED = 12;
   */
  SERVICE_ACCESS_DENIED = 12,

  /**
   * The customer (or login customer) isn't in Google Ads. It belongs to
   * another ads system.
   *
   * @generated from enum value: ACCESS_DENIED_FOR_ACCOUNT_TYPE = 25;
   */
  ACCESS_DENIED_FOR_ACCOUNT_TYPE = 25,

  /**
   * The developer does not have access to the metrics queried.
   *
   * @generated from enum value: METRIC_ACCESS_DENIED = 26;
   */
  METRIC_ACCESS_DENIED = 26,

  /**
   * The Google Cloud project is not under the required organization.
   *
   * @generated from enum value: CLOUD_PROJECT_NOT_UNDER_ORGANIZATION = 27;
   */
  CLOUD_PROJECT_NOT_UNDER_ORGANIZATION = 27,

  /**
   * The user does not have permission to perform this action on the resource
   * or method because the Google Ads account is suspended.
   *
   * @generated from enum value: ACTION_NOT_PERMITTED_FOR_SUSPENDED_ACCOUNT = 28;
   */
  ACTION_NOT_PERMITTED_FOR_SUSPENDED_ACCOUNT = 28,
}

/**
 * Describes the enum google.ads.googleads.v17.errors.AuthorizationErrorEnum.AuthorizationError.
 */
export const AuthorizationErrorEnum_AuthorizationErrorSchema: GenEnum<AuthorizationErrorEnum_AuthorizationError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_errors_authorization_error, 0, 0);
