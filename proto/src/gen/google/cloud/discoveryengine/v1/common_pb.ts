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
// @generated from file google/cloud/discoveryengine/v1/common.proto (package google.cloud.discoveryengine.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/discoveryengine/v1/common.proto.
 */
export const file_google_cloud_discoveryengine_v1_common: GenFile = /*@__PURE__*/
  fileDesc("Cixnb29nbGUvY2xvdWQvZGlzY292ZXJ5ZW5naW5lL3YxL2NvbW1vbi5wcm90bxIfZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MSJ4CghJbnRlcnZhbBIRCgdtaW5pbXVtGAEgASgBSAASGwoRZXhjbHVzaXZlX21pbmltdW0YAiABKAFIABIRCgdtYXhpbXVtGAMgASgBSAESGwoRZXhjbHVzaXZlX21heGltdW0YBCABKAFIAUIFCgNtaW5CBQoDbWF4IjAKD0N1c3RvbUF0dHJpYnV0ZRIMCgR0ZXh0GAEgAygJEg8KB251bWJlcnMYAiADKAEiLwoIVXNlckluZm8SDwoHdXNlcl9pZBgBIAEoCRISCgp1c2VyX2FnZW50GAIgASgJKmIKEEluZHVzdHJ5VmVydGljYWwSIQodSU5EVVNUUllfVkVSVElDQUxfVU5TUEVDSUZJRUQQABILCgdHRU5FUklDEAESCQoFTUVESUEQAhITCg9IRUFMVEhDQVJFX0ZISVIQByqkAQoMU29sdXRpb25UeXBlEh0KGVNPTFVUSU9OX1RZUEVfVU5TUEVDSUZJRUQQABIgChxTT0xVVElPTl9UWVBFX1JFQ09NTUVOREFUSU9OEAESGAoUU09MVVRJT05fVFlQRV9TRUFSQ0gQAhIWChJTT0xVVElPTl9UWVBFX0NIQVQQAxIhCh1TT0xVVElPTl9UWVBFX0dFTkVSQVRJVkVfQ0hBVBAEKmgKDVNlYXJjaFVzZUNhc2USHwobU0VBUkNIX1VTRV9DQVNFX1VOU1BFQ0lGSUVEEAASGgoWU0VBUkNIX1VTRV9DQVNFX1NFQVJDSBABEhoKFlNFQVJDSF9VU0VfQ0FTRV9CUk9XU0UQAipfCgpTZWFyY2hUaWVyEhsKF1NFQVJDSF9USUVSX1VOU1BFQ0lGSUVEEAASGAoUU0VBUkNIX1RJRVJfU1RBTkRBUkQQARIaChZTRUFSQ0hfVElFUl9FTlRFUlBSSVNFEAIqQwoLU2VhcmNoQWRkT24SHQoZU0VBUkNIX0FERF9PTl9VTlNQRUNJRklFRBAAEhUKEVNFQVJDSF9BRERfT05fTExNEAFCowsKI2NvbS5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxQgtDb21tb25Qcm90b1ABWk1jbG91ZC5nb29nbGUuY29tL2dvL2Rpc2NvdmVyeWVuZ2luZS9hcGl2MS9kaXNjb3ZlcnllbmdpbmVwYjtkaXNjb3ZlcnllbmdpbmVwYqICD0RJU0NPVkVSWUVOR0lORaoCH0dvb2dsZS5DbG91ZC5EaXNjb3ZlcnlFbmdpbmUuVjHKAh9Hb29nbGVcQ2xvdWRcRGlzY292ZXJ5RW5naW5lXFYx6gIiR29vZ2xlOjpDbG91ZDo6RGlzY292ZXJ5RW5naW5lOjpWMepB5gEKJWRpc2NvdmVyeWVuZ2luZS5nb29nbGVhcGlzLmNvbS9CcmFuY2gSUXByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9kYXRhU3RvcmVzL3tkYXRhX3N0b3JlfS9icmFuY2hlcy97YnJhbmNofRJqcHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L2NvbGxlY3Rpb25zL3tjb2xsZWN0aW9ufS9kYXRhU3RvcmVzL3tkYXRhX3N0b3JlfS9icmFuY2hlcy97YnJhbmNofepBbQopZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29tL0NvbGxlY3Rpb24SQHByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9jb2xsZWN0aW9ucy97Y29sbGVjdGlvbn3qQVIKJ2Rpc2NvdmVyeWVuZ2luZS5nb29nbGVhcGlzLmNvbS9Mb2NhdGlvbhIncHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb2596kH8AgosZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29tL1NlcnZpbmdDb25maWcSX3Byb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9kYXRhU3RvcmVzL3tkYXRhX3N0b3JlfS9zZXJ2aW5nQ29uZmlncy97c2VydmluZ19jb25maWd9Enhwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vY29sbGVjdGlvbnMve2NvbGxlY3Rpb259L2RhdGFTdG9yZXMve2RhdGFfc3RvcmV9L3NlcnZpbmdDb25maWdzL3tzZXJ2aW5nX2NvbmZpZ30ScXByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9jb2xsZWN0aW9ucy97Y29sbGVjdGlvbn0vZW5naW5lcy97ZW5naW5lfS9zZXJ2aW5nQ29uZmlncy97c2VydmluZ19jb25maWd96kF9Ci5kaXNjb3ZlcnllbmdpbmUuZ29vZ2xlYXBpcy5jb20vR3JvdW5kaW5nQ29uZmlnEktwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vZ3JvdW5kaW5nQ29uZmlncy97Z3JvdW5kaW5nX2NvbmZpZ33qQXcKLGRpc2NvdmVyeWVuZ2luZS5nb29nbGVhcGlzLmNvbS9SYW5raW5nQ29uZmlnEkdwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vcmFua2luZ0NvbmZpZ3Mve3JhbmtpbmdfY29uZmlnfepBeQojaGVhbHRoY2FyZS5nb29nbGVhcGlzLmNvbS9GaGlyU3RvcmUSUnByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9kYXRhc2V0cy97ZGF0YXNldH0vZmhpclN0b3Jlcy97Zmhpcl9zdG9yZX1iBnByb3RvMw", [file_google_api_resource]);

/**
 * A floating point interval.
 *
 * @generated from message google.cloud.discoveryengine.v1.Interval
 */
export type Interval = Message<"google.cloud.discoveryengine.v1.Interval"> & {
  /**
   * The lower bound of the interval. If neither of the min fields are
   * set, then the lower bound is negative infinity.
   *
   * This field must be not larger than max.
   * Otherwise, an `INVALID_ARGUMENT` error is returned.
   *
   * @generated from oneof google.cloud.discoveryengine.v1.Interval.min
   */
  min: {
    /**
     * Inclusive lower bound.
     *
     * @generated from field: double minimum = 1;
     */
    value: number;
    case: "minimum";
  } | {
    /**
     * Exclusive lower bound.
     *
     * @generated from field: double exclusive_minimum = 2;
     */
    value: number;
    case: "exclusiveMinimum";
  } | { case: undefined; value?: undefined };

  /**
   * The upper bound of the interval. If neither of the max fields are
   * set, then the upper bound is positive infinity.
   *
   * This field must be not smaller than min.
   * Otherwise, an `INVALID_ARGUMENT` error is returned.
   *
   * @generated from oneof google.cloud.discoveryengine.v1.Interval.max
   */
  max: {
    /**
     * Inclusive upper bound.
     *
     * @generated from field: double maximum = 3;
     */
    value: number;
    case: "maximum";
  } | {
    /**
     * Exclusive upper bound.
     *
     * @generated from field: double exclusive_maximum = 4;
     */
    value: number;
    case: "exclusiveMaximum";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.discoveryengine.v1.Interval.
 * Use `create(IntervalSchema)` to create a new message.
 */
export const IntervalSchema: GenMessage<Interval> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_common, 0);

/**
 * A custom attribute that is not explicitly modeled in a resource, e.g.
 * [UserEvent][google.cloud.discoveryengine.v1.UserEvent].
 *
 * @generated from message google.cloud.discoveryengine.v1.CustomAttribute
 */
export type CustomAttribute = Message<"google.cloud.discoveryengine.v1.CustomAttribute"> & {
  /**
   * The textual values of this custom attribute. For example, `["yellow",
   * "green"]` when the key is "color".
   *
   * Empty string is not allowed. Otherwise, an `INVALID_ARGUMENT` error is
   * returned.
   *
   * Exactly one of
   * [CustomAttribute.text][google.cloud.discoveryengine.v1.CustomAttribute.text]
   * or
   * [CustomAttribute.numbers][google.cloud.discoveryengine.v1.CustomAttribute.numbers]
   * should be set. Otherwise, an `INVALID_ARGUMENT` error is returned.
   *
   * @generated from field: repeated string text = 1;
   */
  text: string[];

  /**
   * The numerical values of this custom attribute. For example, `[2.3, 15.4]`
   * when the key is "lengths_cm".
   *
   * Exactly one of
   * [CustomAttribute.text][google.cloud.discoveryengine.v1.CustomAttribute.text]
   * or
   * [CustomAttribute.numbers][google.cloud.discoveryengine.v1.CustomAttribute.numbers]
   * should be set. Otherwise, an `INVALID_ARGUMENT` error is returned.
   *
   * @generated from field: repeated double numbers = 2;
   */
  numbers: number[];
};

/**
 * Describes the message google.cloud.discoveryengine.v1.CustomAttribute.
 * Use `create(CustomAttributeSchema)` to create a new message.
 */
export const CustomAttributeSchema: GenMessage<CustomAttribute> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_common, 1);

/**
 * Information of an end user.
 *
 * @generated from message google.cloud.discoveryengine.v1.UserInfo
 */
export type UserInfo = Message<"google.cloud.discoveryengine.v1.UserInfo"> & {
  /**
   * Highly recommended for logged-in users. Unique identifier for logged-in
   * user, such as a user name. Don't set for anonymous users.
   *
   * Always use a hashed value for this ID.
   *
   * Don't set the field to the same fixed ID for different users. This mixes
   * the event history of those users together, which results in degraded
   * model quality.
   *
   * The field must be a UTF-8 encoded string with a length limit of 128
   * characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * User agent as included in the HTTP header.
   *
   * The field must be a UTF-8 encoded string with a length limit of 1,000
   * characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
   *
   * This should not be set when using the client side event reporting with
   * GTM or JavaScript tag in
   * [UserEventService.CollectUserEvent][google.cloud.discoveryengine.v1.UserEventService.CollectUserEvent]
   * or if
   * [UserEvent.direct_user_request][google.cloud.discoveryengine.v1.UserEvent.direct_user_request]
   * is set.
   *
   * @generated from field: string user_agent = 2;
   */
  userAgent: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1.UserInfo.
 * Use `create(UserInfoSchema)` to create a new message.
 */
export const UserInfoSchema: GenMessage<UserInfo> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_common, 2);

/**
 * The industry vertical associated with the
 * [DataStore][google.cloud.discoveryengine.v1.DataStore].
 *
 * @generated from enum google.cloud.discoveryengine.v1.IndustryVertical
 */
export enum IndustryVertical {
  /**
   * Value used when unset.
   *
   * @generated from enum value: INDUSTRY_VERTICAL_UNSPECIFIED = 0;
   */
  INDUSTRY_VERTICAL_UNSPECIFIED = 0,

  /**
   * The generic vertical for documents that are not specific to any industry
   * vertical.
   *
   * @generated from enum value: GENERIC = 1;
   */
  GENERIC = 1,

  /**
   * The media industry vertical.
   *
   * @generated from enum value: MEDIA = 2;
   */
  MEDIA = 2,

  /**
   * The healthcare FHIR vertical.
   *
   * @generated from enum value: HEALTHCARE_FHIR = 7;
   */
  HEALTHCARE_FHIR = 7,
}

/**
 * Describes the enum google.cloud.discoveryengine.v1.IndustryVertical.
 */
export const IndustryVerticalSchema: GenEnum<IndustryVertical> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1_common, 0);

/**
 * The type of solution.
 *
 * @generated from enum google.cloud.discoveryengine.v1.SolutionType
 */
export enum SolutionType {
  /**
   * Default value.
   *
   * @generated from enum value: SOLUTION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Used for Recommendations AI.
   *
   * @generated from enum value: SOLUTION_TYPE_RECOMMENDATION = 1;
   */
  RECOMMENDATION = 1,

  /**
   * Used for Discovery Search.
   *
   * @generated from enum value: SOLUTION_TYPE_SEARCH = 2;
   */
  SEARCH = 2,

  /**
   * Used for use cases related to the Generative AI agent.
   *
   * @generated from enum value: SOLUTION_TYPE_CHAT = 3;
   */
  CHAT = 3,

  /**
   * Used for use cases related to the Generative Chat agent.
   * It's used for Generative chat engine only, the associated data stores
   * must enrolled with `SOLUTION_TYPE_CHAT` solution.
   *
   * @generated from enum value: SOLUTION_TYPE_GENERATIVE_CHAT = 4;
   */
  GENERATIVE_CHAT = 4,
}

/**
 * Describes the enum google.cloud.discoveryengine.v1.SolutionType.
 */
export const SolutionTypeSchema: GenEnum<SolutionType> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1_common, 1);

/**
 * Defines a further subdivision of `SolutionType`.
 * Specifically applies to
 * [SOLUTION_TYPE_SEARCH][google.cloud.discoveryengine.v1.SolutionType.SOLUTION_TYPE_SEARCH].
 *
 * @generated from enum google.cloud.discoveryengine.v1.SearchUseCase
 */
export enum SearchUseCase {
  /**
   * Value used when unset. Will not occur in CSS.
   *
   * @generated from enum value: SEARCH_USE_CASE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Search use case. Expects the traffic has a non-empty
   * [query][google.cloud.discoveryengine.v1.SearchRequest.query].
   *
   * @generated from enum value: SEARCH_USE_CASE_SEARCH = 1;
   */
  SEARCH = 1,

  /**
   * Browse use case. Expects the traffic has an empty
   * [query][google.cloud.discoveryengine.v1.SearchRequest.query].
   *
   * @generated from enum value: SEARCH_USE_CASE_BROWSE = 2;
   */
  BROWSE = 2,
}

/**
 * Describes the enum google.cloud.discoveryengine.v1.SearchUseCase.
 */
export const SearchUseCaseSchema: GenEnum<SearchUseCase> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1_common, 2);

/**
 * Tiers of search features. Different tiers might have different
 * pricing. To learn more, check the pricing documentation.
 *
 * @generated from enum google.cloud.discoveryengine.v1.SearchTier
 */
export enum SearchTier {
  /**
   * Default value when the enum is unspecified. This is invalid to use.
   *
   * @generated from enum value: SEARCH_TIER_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Standard tier.
   *
   * @generated from enum value: SEARCH_TIER_STANDARD = 1;
   */
  STANDARD = 1,

  /**
   * Enterprise tier.
   *
   * @generated from enum value: SEARCH_TIER_ENTERPRISE = 2;
   */
  ENTERPRISE = 2,
}

/**
 * Describes the enum google.cloud.discoveryengine.v1.SearchTier.
 */
export const SearchTierSchema: GenEnum<SearchTier> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1_common, 3);

/**
 * Add-on that provides additional functionality for search.
 *
 * @generated from enum google.cloud.discoveryengine.v1.SearchAddOn
 */
export enum SearchAddOn {
  /**
   * Default value when the enum is unspecified. This is invalid to use.
   *
   * @generated from enum value: SEARCH_ADD_ON_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Large language model add-on.
   *
   * @generated from enum value: SEARCH_ADD_ON_LLM = 1;
   */
  LLM = 1,
}

/**
 * Describes the enum google.cloud.discoveryengine.v1.SearchAddOn.
 */
export const SearchAddOnSchema: GenEnum<SearchAddOn> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1_common, 4);
