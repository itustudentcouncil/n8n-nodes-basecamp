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
// @generated from file google/ads/googleads/v17/errors/product_link_invitation_error.proto (package google.ads.googleads.v17.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/errors/product_link_invitation_error.proto.
 */
export const file_google_ads_googleads_v17_errors_product_link_invitation_error: GenFile = /*@__PURE__*/
  fileDesc("CkNnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzL3Byb2R1Y3RfbGlua19pbnZpdGF0aW9uX2Vycm9yLnByb3RvEh9nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZXJyb3JzItUBCh5Qcm9kdWN0TGlua0ludml0YXRpb25FcnJvckVudW0isgEKGlByb2R1Y3RMaW5rSW52aXRhdGlvbkVycm9yEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhIKDklOVkFMSURfU1RBVFVTEAISFQoRUEVSTUlTU0lPTl9ERU5JRUQQAxIaChZOT19JTlZJVEFUSU9OX1JFUVVJUkVEEAQSLworQ1VTVE9NRVJfTk9UX1BFUk1JVFRFRF9UT19DUkVBVEVfSU5WSVRBVElPThAFQv8BCiNjb20uZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmVycm9yc0IfUHJvZHVjdExpbmtJbnZpdGF0aW9uRXJyb3JQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L2Vycm9ycztlcnJvcnOiAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuRXJyb3JzygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XEVycm9yc+oCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible product link invitation errors.
 *
 * @generated from message google.ads.googleads.v17.errors.ProductLinkInvitationErrorEnum
 */
export type ProductLinkInvitationErrorEnum = Message<"google.ads.googleads.v17.errors.ProductLinkInvitationErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.errors.ProductLinkInvitationErrorEnum.
 * Use `create(ProductLinkInvitationErrorEnumSchema)` to create a new message.
 */
export const ProductLinkInvitationErrorEnumSchema: GenMessage<ProductLinkInvitationErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_errors_product_link_invitation_error, 0);

/**
 * Enum describing possible product link invitation errors.
 *
 * @generated from enum google.ads.googleads.v17.errors.ProductLinkInvitationErrorEnum.ProductLinkInvitationError
 */
export enum ProductLinkInvitationErrorEnum_ProductLinkInvitationError {
  /**
   * Enum unspecified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The received error code is not known in the version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * The invitation status is invalid.
   *
   * @generated from enum value: INVALID_STATUS = 2;
   */
  INVALID_STATUS = 2,

  /**
   * The customer doesn't have the permission to perform this action
   *
   * @generated from enum value: PERMISSION_DENIED = 3;
   */
  PERMISSION_DENIED = 3,

  /**
   * An invitation could not be created, since the user already has admin
   * access to the invited account. Use the ProductLinkService to directly
   * create an active link.
   *
   * @generated from enum value: NO_INVITATION_REQUIRED = 4;
   */
  NO_INVITATION_REQUIRED = 4,

  /**
   * The customer is not permitted to create the invitation.
   *
   * @generated from enum value: CUSTOMER_NOT_PERMITTED_TO_CREATE_INVITATION = 5;
   */
  CUSTOMER_NOT_PERMITTED_TO_CREATE_INVITATION = 5,
}

/**
 * Describes the enum google.ads.googleads.v17.errors.ProductLinkInvitationErrorEnum.ProductLinkInvitationError.
 */
export const ProductLinkInvitationErrorEnum_ProductLinkInvitationErrorSchema: GenEnum<ProductLinkInvitationErrorEnum_ProductLinkInvitationError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_errors_product_link_invitation_error, 0, 0);
