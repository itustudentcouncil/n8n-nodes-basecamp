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
// @generated from file google/cloud/discoveryengine/v1alpha/common.proto (package google.cloud.discoveryengine.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/discoveryengine/v1alpha/common.proto.
 */
export const file_google_cloud_discoveryengine_v1alpha_common: GenFile = /*@__PURE__*/
  fileDesc("CjFnb29nbGUvY2xvdWQvZGlzY292ZXJ5ZW5naW5lL3YxYWxwaGEvY29tbW9uLnByb3RvEiRnb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEieAoISW50ZXJ2YWwSEQoHbWluaW11bRgBIAEoAUgAEhsKEWV4Y2x1c2l2ZV9taW5pbXVtGAIgASgBSAASEQoHbWF4aW11bRgDIAEoAUgBEhsKEWV4Y2x1c2l2ZV9tYXhpbXVtGAQgASgBSAFCBQoDbWluQgUKA21heCIwCg9DdXN0b21BdHRyaWJ1dGUSDAoEdGV4dBgBIAMoCRIPCgdudW1iZXJzGAIgAygBIi8KCFVzZXJJbmZvEg8KB3VzZXJfaWQYASABKAkSEgoKdXNlcl9hZ2VudBgCIAEoCSIlCg9FbWJlZGRpbmdDb25maWcSEgoKZmllbGRfcGF0aBgBIAEoCSIcCgpEb3VibGVMaXN0Eg4KBnZhbHVlcxgBIAMoASJ5ChBHdWlkZWRTZWFyY2hTcGVjEiQKHGVuYWJsZV9yZWZpbmVtZW50X2F0dHJpYnV0ZXMYASABKAgSIAoYZW5hYmxlX3JlbGF0ZWRfcXVlc3Rpb25zGAIgASgIEh0KFW1heF9yZWxhdGVkX3F1ZXN0aW9ucxgDIAEoBSI1ChRDdXN0b21GaW5lVHVuaW5nU3BlYxIdChVlbmFibGVfc2VhcmNoX2FkYXB0b3IYASABKAgiqgIKCUlkcENvbmZpZxJJCghpZHBfdHlwZRgBIAEoDjI3Lmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5JZHBDb25maWcuSWRwVHlwZRJeChNleHRlcm5hbF9pZHBfY29uZmlnGAIgASgLMkEuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLklkcENvbmZpZy5FeHRlcm5hbElkcENvbmZpZxowChFFeHRlcm5hbElkcENvbmZpZxIbChN3b3JrZm9yY2VfcG9vbF9uYW1lGAEgASgJIkAKB0lkcFR5cGUSGAoUSURQX1RZUEVfVU5TUEVDSUZJRUQQABIKCgZHU1VJVEUQARIPCgtUSElSRF9QQVJUWRACIj8KCVByaW5jaXBhbBIRCgd1c2VyX2lkGAEgASgJSAASEgoIZ3JvdXBfaWQYAiABKAlIAEILCglwcmluY2lwYWwqYgoQSW5kdXN0cnlWZXJ0aWNhbBIhCh1JTkRVU1RSWV9WRVJUSUNBTF9VTlNQRUNJRklFRBAAEgsKB0dFTkVSSUMQARIJCgVNRURJQRACEhMKD0hFQUxUSENBUkVfRkhJUhAHKqQBCgxTb2x1dGlvblR5cGUSHQoZU09MVVRJT05fVFlQRV9VTlNQRUNJRklFRBAAEiAKHFNPTFVUSU9OX1RZUEVfUkVDT01NRU5EQVRJT04QARIYChRTT0xVVElPTl9UWVBFX1NFQVJDSBACEhYKElNPTFVUSU9OX1RZUEVfQ0hBVBADEiEKHVNPTFVUSU9OX1RZUEVfR0VORVJBVElWRV9DSEFUEAQqaAoNU2VhcmNoVXNlQ2FzZRIfChtTRUFSQ0hfVVNFX0NBU0VfVU5TUEVDSUZJRUQQABIaChZTRUFSQ0hfVVNFX0NBU0VfU0VBUkNIEAESGgoWU0VBUkNIX1VTRV9DQVNFX0JST1dTRRACKl8KClNlYXJjaFRpZXISGwoXU0VBUkNIX1RJRVJfVU5TUEVDSUZJRUQQABIYChRTRUFSQ0hfVElFUl9TVEFOREFSRBABEhoKFlNFQVJDSF9USUVSX0VOVEVSUFJJU0UQAipDCgtTZWFyY2hBZGRPbhIdChlTRUFSQ0hfQUREX09OX1VOU1BFQ0lGSUVEEAASFQoRU0VBUkNIX0FERF9PTl9MTE0QAUK8CAooY29tLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYUILQ29tbW9uUHJvdG9QAVpSY2xvdWQuZ29vZ2xlLmNvbS9nby9kaXNjb3ZlcnllbmdpbmUvYXBpdjFhbHBoYS9kaXNjb3ZlcnllbmdpbmVwYjtkaXNjb3ZlcnllbmdpbmVwYqICD0RJU0NPVkVSWUVOR0lORaoCJEdvb2dsZS5DbG91ZC5EaXNjb3ZlcnlFbmdpbmUuVjFBbHBoYcoCJEdvb2dsZVxDbG91ZFxEaXNjb3ZlcnlFbmdpbmVcVjFhbHBoYeoCJ0dvb2dsZTo6Q2xvdWQ6OkRpc2NvdmVyeUVuZ2luZTo6VjFhbHBoYepB5gEKJWRpc2NvdmVyeWVuZ2luZS5nb29nbGVhcGlzLmNvbS9CcmFuY2gSUXByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9kYXRhU3RvcmVzL3tkYXRhX3N0b3JlfS9icmFuY2hlcy97YnJhbmNofRJqcHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L2NvbGxlY3Rpb25zL3tjb2xsZWN0aW9ufS9kYXRhU3RvcmVzL3tkYXRhX3N0b3JlfS9icmFuY2hlcy97YnJhbmNofepBbQopZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29tL0NvbGxlY3Rpb24SQHByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9jb2xsZWN0aW9ucy97Y29sbGVjdGlvbn3qQVIKJ2Rpc2NvdmVyeWVuZ2luZS5nb29nbGVhcGlzLmNvbS9Mb2NhdGlvbhIncHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb2596kF9Ci5kaXNjb3ZlcnllbmdpbmUuZ29vZ2xlYXBpcy5jb20vR3JvdW5kaW5nQ29uZmlnEktwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vZ3JvdW5kaW5nQ29uZmlncy97Z3JvdW5kaW5nX2NvbmZpZ33qQXcKLGRpc2NvdmVyeWVuZ2luZS5nb29nbGVhcGlzLmNvbS9SYW5raW5nQ29uZmlnEkdwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vcmFua2luZ0NvbmZpZ3Mve3JhbmtpbmdfY29uZmlnfepBeQojaGVhbHRoY2FyZS5nb29nbGVhcGlzLmNvbS9GaGlyU3RvcmUSUnByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9kYXRhc2V0cy97ZGF0YXNldH0vZmhpclN0b3Jlcy97Zmhpcl9zdG9yZX1iBnByb3RvMw", [file_google_api_resource]);

/**
 * A floating point interval.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.Interval
 */
export type Interval = Message<"google.cloud.discoveryengine.v1alpha.Interval"> & {
  /**
   * The lower bound of the interval. If neither of the min fields are
   * set, then the lower bound is negative infinity.
   *
   * This field must be not larger than max.
   * Otherwise, an `INVALID_ARGUMENT` error is returned.
   *
   * @generated from oneof google.cloud.discoveryengine.v1alpha.Interval.min
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
   * @generated from oneof google.cloud.discoveryengine.v1alpha.Interval.max
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
 * Describes the message google.cloud.discoveryengine.v1alpha.Interval.
 * Use `create(IntervalSchema)` to create a new message.
 */
export const IntervalSchema: GenMessage<Interval> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_common, 0);

/**
 * A custom attribute that is not explicitly modeled in a resource, e.g.
 * [UserEvent][google.cloud.discoveryengine.v1alpha.UserEvent].
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.CustomAttribute
 */
export type CustomAttribute = Message<"google.cloud.discoveryengine.v1alpha.CustomAttribute"> & {
  /**
   * The textual values of this custom attribute. For example, `["yellow",
   * "green"]` when the key is "color".
   *
   * Empty string is not allowed. Otherwise, an `INVALID_ARGUMENT` error is
   * returned.
   *
   * Exactly one of
   * [CustomAttribute.text][google.cloud.discoveryengine.v1alpha.CustomAttribute.text]
   * or
   * [CustomAttribute.numbers][google.cloud.discoveryengine.v1alpha.CustomAttribute.numbers]
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
   * [CustomAttribute.text][google.cloud.discoveryengine.v1alpha.CustomAttribute.text]
   * or
   * [CustomAttribute.numbers][google.cloud.discoveryengine.v1alpha.CustomAttribute.numbers]
   * should be set. Otherwise, an `INVALID_ARGUMENT` error is returned.
   *
   * @generated from field: repeated double numbers = 2;
   */
  numbers: number[];
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.CustomAttribute.
 * Use `create(CustomAttributeSchema)` to create a new message.
 */
export const CustomAttributeSchema: GenMessage<CustomAttribute> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_common, 1);

/**
 * Information of an end user.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.UserInfo
 */
export type UserInfo = Message<"google.cloud.discoveryengine.v1alpha.UserInfo"> & {
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
   * [UserEventService.CollectUserEvent][google.cloud.discoveryengine.v1alpha.UserEventService.CollectUserEvent]
   * or if
   * [UserEvent.direct_user_request][google.cloud.discoveryengine.v1alpha.UserEvent.direct_user_request]
   * is set.
   *
   * @generated from field: string user_agent = 2;
   */
  userAgent: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.UserInfo.
 * Use `create(UserInfoSchema)` to create a new message.
 */
export const UserInfoSchema: GenMessage<UserInfo> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_common, 2);

/**
 * Defines embedding config, used for bring your own embeddings feature.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.EmbeddingConfig
 */
export type EmbeddingConfig = Message<"google.cloud.discoveryengine.v1alpha.EmbeddingConfig"> & {
  /**
   * Full field path in the schema mapped as embedding field.
   *
   * @generated from field: string field_path = 1;
   */
  fieldPath: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.EmbeddingConfig.
 * Use `create(EmbeddingConfigSchema)` to create a new message.
 */
export const EmbeddingConfigSchema: GenMessage<EmbeddingConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_common, 3);

/**
 * Double list.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.DoubleList
 */
export type DoubleList = Message<"google.cloud.discoveryengine.v1alpha.DoubleList"> & {
  /**
   * Double values.
   *
   * @generated from field: repeated double values = 1;
   */
  values: number[];
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.DoubleList.
 * Use `create(DoubleListSchema)` to create a new message.
 */
export const DoubleListSchema: GenMessage<DoubleList> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_common, 4);

/**
 * Defines guided search spec.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.GuidedSearchSpec
 */
export type GuidedSearchSpec = Message<"google.cloud.discoveryengine.v1alpha.GuidedSearchSpec"> & {
  /**
   * Whether or not to enable and include refinement attributes in gudied search
   * result.
   *
   * @generated from field: bool enable_refinement_attributes = 1;
   */
  enableRefinementAttributes: boolean;

  /**
   * Whether or not to enable and include related questions in search response.
   *
   * @generated from field: bool enable_related_questions = 2;
   */
  enableRelatedQuestions: boolean;

  /**
   * Max number of related questions to be returned. The valid range is [1, 5].
   * If enable_related_questions is true, the default value is 3.
   *
   * @generated from field: int32 max_related_questions = 3;
   */
  maxRelatedQuestions: number;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.GuidedSearchSpec.
 * Use `create(GuidedSearchSpecSchema)` to create a new message.
 */
export const GuidedSearchSpecSchema: GenMessage<GuidedSearchSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_common, 5);

/**
 * Defines custom fine tuning spec.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.CustomFineTuningSpec
 */
export type CustomFineTuningSpec = Message<"google.cloud.discoveryengine.v1alpha.CustomFineTuningSpec"> & {
  /**
   * Whether or not to enable and include custom fine tuned search adaptor
   * model.
   *
   * @generated from field: bool enable_search_adaptor = 1;
   */
  enableSearchAdaptor: boolean;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.CustomFineTuningSpec.
 * Use `create(CustomFineTuningSpecSchema)` to create a new message.
 */
export const CustomFineTuningSpecSchema: GenMessage<CustomFineTuningSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_common, 6);

/**
 * Identity Provider Config.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.IdpConfig
 */
export type IdpConfig = Message<"google.cloud.discoveryengine.v1alpha.IdpConfig"> & {
  /**
   * Identity provider type configured.
   *
   * @generated from field: google.cloud.discoveryengine.v1alpha.IdpConfig.IdpType idp_type = 1;
   */
  idpType: IdpConfig_IdpType;

  /**
   * External Identity provider config.
   *
   * @generated from field: google.cloud.discoveryengine.v1alpha.IdpConfig.ExternalIdpConfig external_idp_config = 2;
   */
  externalIdpConfig?: IdpConfig_ExternalIdpConfig;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.IdpConfig.
 * Use `create(IdpConfigSchema)` to create a new message.
 */
export const IdpConfigSchema: GenMessage<IdpConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_common, 7);

/**
 * Third party IDP Config.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.IdpConfig.ExternalIdpConfig
 */
export type IdpConfig_ExternalIdpConfig = Message<"google.cloud.discoveryengine.v1alpha.IdpConfig.ExternalIdpConfig"> & {
  /**
   * Workforce pool name.
   * Example: "locations/global/workforcePools/pool_id"
   *
   * @generated from field: string workforce_pool_name = 1;
   */
  workforcePoolName: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.IdpConfig.ExternalIdpConfig.
 * Use `create(IdpConfig_ExternalIdpConfigSchema)` to create a new message.
 */
export const IdpConfig_ExternalIdpConfigSchema: GenMessage<IdpConfig_ExternalIdpConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_common, 7, 0);

/**
 * Identity Provider Type.
 *
 * @generated from enum google.cloud.discoveryengine.v1alpha.IdpConfig.IdpType
 */
export enum IdpConfig_IdpType {
  /**
   * Default value. ACL search not enabled.
   *
   * @generated from enum value: IDP_TYPE_UNSPECIFIED = 0;
   */
  IDP_TYPE_UNSPECIFIED = 0,

  /**
   * Google 1P provider.
   *
   * @generated from enum value: GSUITE = 1;
   */
  GSUITE = 1,

  /**
   * Third party provider.
   *
   * @generated from enum value: THIRD_PARTY = 2;
   */
  THIRD_PARTY = 2,
}

/**
 * Describes the enum google.cloud.discoveryengine.v1alpha.IdpConfig.IdpType.
 */
export const IdpConfig_IdpTypeSchema: GenEnum<IdpConfig_IdpType> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1alpha_common, 7, 0);

/**
 * Principal identifier of a user or a group.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.Principal
 */
export type Principal = Message<"google.cloud.discoveryengine.v1alpha.Principal"> & {
  /**
   * Union field principal. Principal can be a user or a group.
   *
   * @generated from oneof google.cloud.discoveryengine.v1alpha.Principal.principal
   */
  principal: {
    /**
     * User identifier.
     * For Google Workspace user account, user_id should be the google workspace
     * user email.
     * For non-google identity provider user account, user_id is the mapped user
     * identifier configured during the workforcepool config.
     *
     * @generated from field: string user_id = 1;
     */
    value: string;
    case: "userId";
  } | {
    /**
     * Group identifier.
     * For Google Workspace user account, group_id should be the google
     * workspace group email.
     * For non-google identity provider user account, group_id is the mapped
     * group identifier configured during the workforcepool config.
     *
     * @generated from field: string group_id = 2;
     */
    value: string;
    case: "groupId";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.Principal.
 * Use `create(PrincipalSchema)` to create a new message.
 */
export const PrincipalSchema: GenMessage<Principal> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_common, 8);

/**
 * The industry vertical associated with the
 * [DataStore][google.cloud.discoveryengine.v1alpha.DataStore].
 *
 * @generated from enum google.cloud.discoveryengine.v1alpha.IndustryVertical
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
 * Describes the enum google.cloud.discoveryengine.v1alpha.IndustryVertical.
 */
export const IndustryVerticalSchema: GenEnum<IndustryVertical> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1alpha_common, 0);

/**
 * The type of solution.
 *
 * @generated from enum google.cloud.discoveryengine.v1alpha.SolutionType
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
 * Describes the enum google.cloud.discoveryengine.v1alpha.SolutionType.
 */
export const SolutionTypeSchema: GenEnum<SolutionType> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1alpha_common, 1);

/**
 * Defines a further subdivision of `SolutionType`.
 * Specifically applies to
 * [SOLUTION_TYPE_SEARCH][google.cloud.discoveryengine.v1alpha.SolutionType.SOLUTION_TYPE_SEARCH].
 *
 * @generated from enum google.cloud.discoveryengine.v1alpha.SearchUseCase
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
   * [query][google.cloud.discoveryengine.v1alpha.SearchRequest.query].
   *
   * @generated from enum value: SEARCH_USE_CASE_SEARCH = 1;
   */
  SEARCH = 1,

  /**
   * Browse use case. Expects the traffic has an empty
   * [query][google.cloud.discoveryengine.v1alpha.SearchRequest.query].
   *
   * @generated from enum value: SEARCH_USE_CASE_BROWSE = 2;
   */
  BROWSE = 2,
}

/**
 * Describes the enum google.cloud.discoveryengine.v1alpha.SearchUseCase.
 */
export const SearchUseCaseSchema: GenEnum<SearchUseCase> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1alpha_common, 2);

/**
 * Tiers of search features. Different tiers might have different
 * pricing. To learn more, check the pricing documentation.
 *
 * @generated from enum google.cloud.discoveryengine.v1alpha.SearchTier
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
 * Describes the enum google.cloud.discoveryengine.v1alpha.SearchTier.
 */
export const SearchTierSchema: GenEnum<SearchTier> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1alpha_common, 3);

/**
 * Add-on that provides additional functionality for search.
 *
 * @generated from enum google.cloud.discoveryengine.v1alpha.SearchAddOn
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
 * Describes the enum google.cloud.discoveryengine.v1alpha.SearchAddOn.
 */
export const SearchAddOnSchema: GenEnum<SearchAddOn> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1alpha_common, 4);
