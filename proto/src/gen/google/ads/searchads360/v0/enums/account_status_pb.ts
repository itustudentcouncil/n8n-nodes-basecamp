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
// @generated from file google/ads/searchads360/v0/enums/account_status.proto (package google.ads.searchads360.v0.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/enums/account_status.proto.
 */
export const file_google_ads_searchads360_v0_enums_account_status: GenFile = /*@__PURE__*/
  fileDesc("CjVnb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9lbnVtcy9hY2NvdW50X3N0YXR1cy5wcm90bxIgZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZW51bXMiggEKEUFjY291bnRTdGF0dXNFbnVtIm0KDUFjY291bnRTdGF0dXMSDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESCwoHRU5BQkxFRBACEgoKBlBBVVNFRBADEg0KCVNVU1BFTkRFRBAEEgsKB1JFTU9WRUQQBRIJCgVEUkFGVBAGQvoBCiRjb20uZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZW51bXNCEkFjY291bnRTdGF0dXNQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9zZWFyY2hhZHMzNjAvdjAvZW51bXM7ZW51bXOiAgdHQVNBMzYwqgIgR29vZ2xlLkFkcy5TZWFyY2hBZHMzNjAuVjAuRW51bXPKAiBHb29nbGVcQWRzXFNlYXJjaEFkczM2MFxWMFxFbnVtc+oCJEdvb2dsZTo6QWRzOjpTZWFyY2hBZHMzNjA6OlYwOjpFbnVtc2IGcHJvdG8z");

/**
 * Container for enum describing possible statuses of an account.
 *
 * @generated from message google.ads.searchads360.v0.enums.AccountStatusEnum
 */
export type AccountStatusEnum = Message<"google.ads.searchads360.v0.enums.AccountStatusEnum"> & {
};

/**
 * Describes the message google.ads.searchads360.v0.enums.AccountStatusEnum.
 * Use `create(AccountStatusEnumSchema)` to create a new message.
 */
export const AccountStatusEnumSchema: GenMessage<AccountStatusEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_enums_account_status, 0);

/**
 * Possible statuses of an account.
 *
 * @generated from enum google.ads.searchads360.v0.enums.AccountStatusEnum.AccountStatus
 */
export enum AccountStatusEnum_AccountStatus {
  /**
   * Default value.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Unknown value.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Account is able to serve ads.
   *
   * @generated from enum value: ENABLED = 2;
   */
  ENABLED = 2,

  /**
   * Account is deactivated by the user.
   *
   * @generated from enum value: PAUSED = 3;
   */
  PAUSED = 3,

  /**
   * Account is deactivated by an internal process.
   *
   * @generated from enum value: SUSPENDED = 4;
   */
  SUSPENDED = 4,

  /**
   * Account is irrevocably deactivated.
   *
   * @generated from enum value: REMOVED = 5;
   */
  REMOVED = 5,

  /**
   * Account is still in the process of setup, not ENABLED yet.
   *
   * @generated from enum value: DRAFT = 6;
   */
  DRAFT = 6,
}

/**
 * Describes the enum google.ads.searchads360.v0.enums.AccountStatusEnum.AccountStatus.
 */
export const AccountStatusEnum_AccountStatusSchema: GenEnum<AccountStatusEnum_AccountStatus> = /*@__PURE__*/
  enumDesc(file_google_ads_searchads360_v0_enums_account_status, 0, 0);
