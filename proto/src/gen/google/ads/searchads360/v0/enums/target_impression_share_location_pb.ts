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
// @generated from file google/ads/searchads360/v0/enums/target_impression_share_location.proto (package google.ads.searchads360.v0.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/searchads360/v0/enums/target_impression_share_location.proto.
 */
export const file_google_ads_searchads360_v0_enums_target_impression_share_location: GenFile = /*@__PURE__*/
  fileDesc("Ckdnb29nbGUvYWRzL3NlYXJjaGFkczM2MC92MC9lbnVtcy90YXJnZXRfaW1wcmVzc2lvbl9zaGFyZV9sb2NhdGlvbi5wcm90bxIgZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZW51bXMiowEKIVRhcmdldEltcHJlc3Npb25TaGFyZUxvY2F0aW9uRW51bSJ+Ch1UYXJnZXRJbXByZXNzaW9uU2hhcmVMb2NhdGlvbhIPCgtVTlNQRUNJRklFRBAAEgsKB1VOS05PV04QARIUChBBTllXSEVSRV9PTl9QQUdFEAISDwoLVE9QX09GX1BBR0UQAxIYChRBQlNPTFVURV9UT1BfT0ZfUEFHRRAEQooCCiRjb20uZ29vZ2xlLmFkcy5zZWFyY2hhZHMzNjAudjAuZW51bXNCIlRhcmdldEltcHJlc3Npb25TaGFyZUxvY2F0aW9uUHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvc2VhcmNoYWRzMzYwL3YwL2VudW1zO2VudW1zogIHR0FTQTM2MKoCIEdvb2dsZS5BZHMuU2VhcmNoQWRzMzYwLlYwLkVudW1zygIgR29vZ2xlXEFkc1xTZWFyY2hBZHMzNjBcVjBcRW51bXPqAiRHb29nbGU6OkFkczo6U2VhcmNoQWRzMzYwOjpWMDo6RW51bXNiBnByb3RvMw");

/**
 * Container for enum describing where on the first search results page the
 * automated bidding system should target impressions for the
 * TargetImpressionShare bidding strategy.
 *
 * @generated from message google.ads.searchads360.v0.enums.TargetImpressionShareLocationEnum
 */
export type TargetImpressionShareLocationEnum = Message<"google.ads.searchads360.v0.enums.TargetImpressionShareLocationEnum"> & {
};

/**
 * Describes the message google.ads.searchads360.v0.enums.TargetImpressionShareLocationEnum.
 * Use `create(TargetImpressionShareLocationEnumSchema)` to create a new message.
 */
export const TargetImpressionShareLocationEnumSchema: GenMessage<TargetImpressionShareLocationEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_searchads360_v0_enums_target_impression_share_location, 0);

/**
 * Enum describing possible goals.
 *
 * @generated from enum google.ads.searchads360.v0.enums.TargetImpressionShareLocationEnum.TargetImpressionShareLocation
 */
export enum TargetImpressionShareLocationEnum_TargetImpressionShareLocation {
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
   * Any location on the web page.
   *
   * @generated from enum value: ANYWHERE_ON_PAGE = 2;
   */
  ANYWHERE_ON_PAGE = 2,

  /**
   * Top box of ads.
   *
   * @generated from enum value: TOP_OF_PAGE = 3;
   */
  TOP_OF_PAGE = 3,

  /**
   * Top slot in the top box of ads.
   *
   * @generated from enum value: ABSOLUTE_TOP_OF_PAGE = 4;
   */
  ABSOLUTE_TOP_OF_PAGE = 4,
}

/**
 * Describes the enum google.ads.searchads360.v0.enums.TargetImpressionShareLocationEnum.TargetImpressionShareLocation.
 */
export const TargetImpressionShareLocationEnum_TargetImpressionShareLocationSchema: GenEnum<TargetImpressionShareLocationEnum_TargetImpressionShareLocation> = /*@__PURE__*/
  enumDesc(file_google_ads_searchads360_v0_enums_target_impression_share_location, 0, 0);
