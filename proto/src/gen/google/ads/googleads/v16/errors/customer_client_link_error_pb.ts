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
// @generated from file google/ads/googleads/v16/errors/customer_client_link_error.proto (package google.ads.googleads.v16.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/errors/customer_client_link_error.proto.
 */
export const file_google_ads_googleads_v16_errors_customer_client_link_error: GenFile = /*@__PURE__*/
  fileDesc("CkBnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZXJyb3JzL2N1c3RvbWVyX2NsaWVudF9saW5rX2Vycm9yLnByb3RvEh9nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZXJyb3JzIo8DChtDdXN0b21lckNsaWVudExpbmtFcnJvckVudW0i7wIKF0N1c3RvbWVyQ2xpZW50TGlua0Vycm9yEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEioKJkNMSUVOVF9BTFJFQURZX0lOVklURURfQllfVEhJU19NQU5BR0VSEAISJwojQ0xJRU5UX0FMUkVBRFlfTUFOQUdFRF9JTl9ISUVSQVJDSFkQAxIbChdDWUNMSUNfTElOS19OT1RfQUxMT1dFRBAEEiIKHkNVU1RPTUVSX0hBU19UT09fTUFOWV9BQ0NPVU5UUxAFEiMKH0NMSUVOVF9IQVNfVE9PX01BTllfSU5WSVRBVElPTlMQBhIqCiZDQU5OT1RfSElERV9PUl9VTkhJREVfTUFOQUdFUl9BQ0NPVU5UUxAHEi0KKUNVU1RPTUVSX0hBU19UT09fTUFOWV9BQ0NPVU5UU19BVF9NQU5BR0VSEAgSIAocQ0xJRU5UX0hBU19UT09fTUFOWV9NQU5BR0VSUxAJQvwBCiNjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE2LmVycm9yc0IcQ3VzdG9tZXJDbGllbnRMaW5rRXJyb3JQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2Vycm9ycztlcnJvcnOiAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuRXJyb3JzygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XEVycm9yc+oCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible CustomeClientLink errors.
 *
 * @generated from message google.ads.googleads.v16.errors.CustomerClientLinkErrorEnum
 */
export type CustomerClientLinkErrorEnum = Message<"google.ads.googleads.v16.errors.CustomerClientLinkErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.errors.CustomerClientLinkErrorEnum.
 * Use `create(CustomerClientLinkErrorEnumSchema)` to create a new message.
 */
export const CustomerClientLinkErrorEnumSchema: GenMessage<CustomerClientLinkErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_errors_customer_client_link_error, 0);

/**
 * Enum describing possible CustomerClientLink errors.
 *
 * @generated from enum google.ads.googleads.v16.errors.CustomerClientLinkErrorEnum.CustomerClientLinkError
 */
export enum CustomerClientLinkErrorEnum_CustomerClientLinkError {
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
   * Trying to manage a client that already in being managed by customer.
   *
   * @generated from enum value: CLIENT_ALREADY_INVITED_BY_THIS_MANAGER = 2;
   */
  CLIENT_ALREADY_INVITED_BY_THIS_MANAGER = 2,

  /**
   * Already managed by some other manager in the hierarchy.
   *
   * @generated from enum value: CLIENT_ALREADY_MANAGED_IN_HIERARCHY = 3;
   */
  CLIENT_ALREADY_MANAGED_IN_HIERARCHY = 3,

  /**
   * Attempt to create a cycle in the hierarchy.
   *
   * @generated from enum value: CYCLIC_LINK_NOT_ALLOWED = 4;
   */
  CYCLIC_LINK_NOT_ALLOWED = 4,

  /**
   * Managed accounts has the maximum number of linked accounts.
   *
   * @generated from enum value: CUSTOMER_HAS_TOO_MANY_ACCOUNTS = 5;
   */
  CUSTOMER_HAS_TOO_MANY_ACCOUNTS = 5,

  /**
   * Invitor has the maximum pending invitations.
   *
   * @generated from enum value: CLIENT_HAS_TOO_MANY_INVITATIONS = 6;
   */
  CLIENT_HAS_TOO_MANY_INVITATIONS = 6,

  /**
   * Attempt to change hidden status of a link that is not active.
   *
   * @generated from enum value: CANNOT_HIDE_OR_UNHIDE_MANAGER_ACCOUNTS = 7;
   */
  CANNOT_HIDE_OR_UNHIDE_MANAGER_ACCOUNTS = 7,

  /**
   * Parent manager account has the maximum number of linked accounts.
   *
   * @generated from enum value: CUSTOMER_HAS_TOO_MANY_ACCOUNTS_AT_MANAGER = 8;
   */
  CUSTOMER_HAS_TOO_MANY_ACCOUNTS_AT_MANAGER = 8,

  /**
   * Client has too many managers.
   *
   * @generated from enum value: CLIENT_HAS_TOO_MANY_MANAGERS = 9;
   */
  CLIENT_HAS_TOO_MANY_MANAGERS = 9,
}

/**
 * Describes the enum google.ads.googleads.v16.errors.CustomerClientLinkErrorEnum.CustomerClientLinkError.
 */
export const CustomerClientLinkErrorEnum_CustomerClientLinkErrorSchema: GenEnum<CustomerClientLinkErrorEnum_CustomerClientLinkError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_errors_customer_client_link_error, 0, 0);
