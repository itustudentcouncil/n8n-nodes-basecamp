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
// @generated from file google/ads/searchads360/v0/errors/authorization_error.proto (package google.ads.searchads360.v0.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/errors/authorization_error.proto.
 */
export const file_google_ads_searchads360_v0_errors_authorization_error: GenFile = /*@__PURE__*/
  fileDesc("Cjtnb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9lcnJvcnMvYXV0aG9yaXphdGlvbl9lcnJvci5wcm90bxIhZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZXJyb3JzIowDChZBdXRob3JpemF0aW9uRXJyb3JFbnVtIvECChJBdXRob3JpemF0aW9uRXJyb3ISDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESGgoWVVNFUl9QRVJNSVNTSU9OX0RFTklFRBACEhQKEFBST0pFQ1RfRElTQUJMRUQQBRIXChNBVVRIT1JJWkFUSU9OX0VSUk9SEAYSGAoUQUNUSU9OX05PVF9QRVJNSVRURUQQBxIVChFJTkNPTVBMRVRFX1NJR05VUBAIEhgKFENVU1RPTUVSX05PVF9FTkFCTEVEEBgSDwoLTUlTU0lOR19UT1MQCRI9CjlJTlZBTElEX0xPR0lOX0NVU1RPTUVSX0lEX1NFUlZJTkdfQ1VTVE9NRVJfSURfQ09NQklOQVRJT04QCxIZChVTRVJWSUNFX0FDQ0VTU19ERU5JRUQQDBIiCh5BQ0NFU1NfREVOSUVEX0ZPUl9BQ0NPVU5UX1RZUEUQGRIYChRNRVRSSUNfQUNDRVNTX0RFTklFRBAaQoUCCiVjb20uZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZXJyb3JzQhdBdXRob3JpemF0aW9uRXJyb3JQcm90b1ABWkdnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9zZWFyY2hhZHMzNjAvdjAvZXJyb3JzO2Vycm9yc6ICB0dBU0EzNjCqAiFHb29nbGUuQWRzLlNlYXJjaEFkczM2MC5WMC5FcnJvcnPKAiFHb29nbGVcQWRzXFNlYXJjaEFkczM2MFxWMFxFcnJvcnPqAiVHb29nbGU6OkFkczo6U2VhcmNoQWRzMzYwOjpWMDo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible authorization errors.
 *
 * @generated from message google.ads.searchads360.v0.errors.AuthorizationErrorEnum
 */
export type AuthorizationErrorEnum = Message<"google.ads.searchads360.v0.errors.AuthorizationErrorEnum"> & {
};

/**
 * Describes the message google.ads.searchads360.v0.errors.AuthorizationErrorEnum.
 * Use `create(AuthorizationErrorEnumSchema)` to create a new message.
 */
export const AuthorizationErrorEnumSchema: GenMessage<AuthorizationErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_errors_authorization_error, 0);

/**
 * Enum describing possible authorization errors.
 *
 * @generated from enum google.ads.searchads360.v0.errors.AuthorizationErrorEnum.AuthorizationError
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
   * https://developers.google.com/search-ads/reporting/concepts/call-structure#login_customer_id_header
   *
   * @generated from enum value: USER_PERMISSION_DENIED = 2;
   */
  USER_PERMISSION_DENIED = 2,

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
   * https://developers.google.com/terms
   *
   * @generated from enum value: MISSING_TOS = 9;
   */
  MISSING_TOS = 9,

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
   * The customer (or login customer) isn't allowed in Search Ads 360 API. It
   * belongs to another ads system.
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
}

/**
 * Describes the enum google.ads.searchads360.v0.errors.AuthorizationErrorEnum.AuthorizationError.
 */
export const AuthorizationErrorEnum_AuthorizationErrorSchema: GenEnum<AuthorizationErrorEnum_AuthorizationError> = /*@__PURE__*/
  enumDesc(file_google_ads_searchads360_v0_errors_authorization_error, 0, 0);
