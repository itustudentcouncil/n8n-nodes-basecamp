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
// @generated from file google/ads/googleads/v16/enums/keyword_match_type.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/keyword_match_type.proto.
 */
export const file_google_ads_googleads_v16_enums_keyword_match_type: GenFile = /*@__PURE__*/
  fileDesc("Cjdnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMva2V5d29yZF9tYXRjaF90eXBlLnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMiagoUS2V5d29yZE1hdGNoVHlwZUVudW0iUgoQS2V5d29yZE1hdGNoVHlwZRIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIJCgVFWEFDVBACEgoKBlBIUkFTRRADEgkKBUJST0FEEARC7wEKImNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXNCFUtleXdvcmRNYXRjaFR5cGVQcm90b1ABWkNnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE2L2VudW1zO2VudW1zogIDR0FBqgIeR29vZ2xlLkFkcy5Hb29nbGVBZHMuVjE2LkVudW1zygIeR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE2XEVudW1z6gIiR29vZ2xlOjpBZHM6Okdvb2dsZUFkczo6VjE2OjpFbnVtc2IGcHJvdG8z");

/**
 * Message describing Keyword match types.
 *
 * @generated from message google.ads.googleads.v16.enums.KeywordMatchTypeEnum
 */
export type KeywordMatchTypeEnum = Message<"google.ads.googleads.v16.enums.KeywordMatchTypeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.KeywordMatchTypeEnum.
 * Use `create(KeywordMatchTypeEnumSchema)` to create a new message.
 */
export const KeywordMatchTypeEnumSchema: GenMessage<KeywordMatchTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_keyword_match_type, 0);

/**
 * Possible Keyword match types.
 *
 * @generated from enum google.ads.googleads.v16.enums.KeywordMatchTypeEnum.KeywordMatchType
 */
export enum KeywordMatchTypeEnum_KeywordMatchType {
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
   * Exact match.
   *
   * @generated from enum value: EXACT = 2;
   */
  EXACT = 2,

  /**
   * Phrase match.
   *
   * @generated from enum value: PHRASE = 3;
   */
  PHRASE = 3,

  /**
   * Broad match.
   *
   * @generated from enum value: BROAD = 4;
   */
  BROAD = 4,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.KeywordMatchTypeEnum.KeywordMatchType.
 */
export const KeywordMatchTypeEnum_KeywordMatchTypeSchema: GenEnum<KeywordMatchTypeEnum_KeywordMatchType> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_keyword_match_type, 0, 0);
