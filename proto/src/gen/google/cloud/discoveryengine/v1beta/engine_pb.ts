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
// @generated from file google/cloud/discoveryengine/v1beta/engine.proto (package google.cloud.discoveryengine.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { IndustryVertical, SearchAddOn, SearchTier, SolutionType } from "./common_pb";
import { file_google_cloud_discoveryengine_v1beta_common } from "./common_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/discoveryengine/v1beta/engine.proto.
 */
export const file_google_cloud_discoveryengine_v1beta_engine: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvY2xvdWQvZGlzY292ZXJ5ZW5naW5lL3YxYmV0YS9lbmdpbmUucHJvdG8SI2dvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFiZXRhIocLCgZFbmdpbmUSWgoSY2hhdF9lbmdpbmVfY29uZmlnGAsgASgLMjwuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWJldGEuRW5naW5lLkNoYXRFbmdpbmVDb25maWdIABJeChRzZWFyY2hfZW5naW5lX2NvbmZpZxgNIAEoCzI+Lmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFiZXRhLkVuZ2luZS5TZWFyY2hFbmdpbmVDb25maWdIABJjChRjaGF0X2VuZ2luZV9tZXRhZGF0YRgMIAEoCzI+Lmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFiZXRhLkVuZ2luZS5DaGF0RW5naW5lTWV0YWRhdGFCA+BBA0gBEhEKBG5hbWUYASABKAlCA+BBBRIZCgxkaXNwbGF5X25hbWUYAiABKAlCA+BBAhI0CgtjcmVhdGVfdGltZRgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxI0Cgt1cGRhdGVfdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIWCg5kYXRhX3N0b3JlX2lkcxgFIAMoCRJNCg1zb2x1dGlvbl90eXBlGAYgASgOMjEuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWJldGEuU29sdXRpb25UeXBlQgPgQQISUAoRaW5kdXN0cnlfdmVydGljYWwYECABKA4yNS5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYmV0YS5JbmR1c3RyeVZlcnRpY2FsEk8KDWNvbW1vbl9jb25maWcYDyABKAsyOC5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYmV0YS5FbmdpbmUuQ29tbW9uQ29uZmlnGqQBChJTZWFyY2hFbmdpbmVDb25maWcSRAoLc2VhcmNoX3RpZXIYASABKA4yLy5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYmV0YS5TZWFyY2hUaWVyEkgKDnNlYXJjaF9hZGRfb25zGAIgAygOMjAuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWJldGEuU2VhcmNoQWRkT24alwIKEENoYXRFbmdpbmVDb25maWcSbwoVYWdlbnRfY3JlYXRpb25fY29uZmlnGAEgASgLMlAuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWJldGEuRW5naW5lLkNoYXRFbmdpbmVDb25maWcuQWdlbnRDcmVhdGlvbkNvbmZpZxIgChhkaWFsb2dmbG93X2FnZW50X3RvX2xpbmsYAiABKAkacAoTQWdlbnRDcmVhdGlvbkNvbmZpZxIQCghidXNpbmVzcxgBIAEoCRIdChVkZWZhdWx0X2xhbmd1YWdlX2NvZGUYAiABKAkSFgoJdGltZV96b25lGAMgASgJQgPgQQISEAoIbG9jYXRpb24YBCABKAkaJAoMQ29tbW9uQ29uZmlnEhQKDGNvbXBhbnlfbmFtZRgBIAEoCRouChJDaGF0RW5naW5lTWV0YWRhdGESGAoQZGlhbG9nZmxvd19hZ2VudBgBIAEoCTp96kF6CiVkaXNjb3ZlcnllbmdpbmUuZ29vZ2xlYXBpcy5jb20vRW5naW5lElFwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vY29sbGVjdGlvbnMve2NvbGxlY3Rpb259L2VuZ2luZXMve2VuZ2luZX1CDwoNZW5naW5lX2NvbmZpZ0IRCg9lbmdpbmVfbWV0YWRhdGFCkgIKJ2NvbS5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYmV0YUILRW5naW5lUHJvdG9QAVpRY2xvdWQuZ29vZ2xlLmNvbS9nby9kaXNjb3ZlcnllbmdpbmUvYXBpdjFiZXRhL2Rpc2NvdmVyeWVuZ2luZXBiO2Rpc2NvdmVyeWVuZ2luZXBiogIPRElTQ09WRVJZRU5HSU5FqgIjR29vZ2xlLkNsb3VkLkRpc2NvdmVyeUVuZ2luZS5WMUJldGHKAiNHb29nbGVcQ2xvdWRcRGlzY292ZXJ5RW5naW5lXFYxYmV0YeoCJkdvb2dsZTo6Q2xvdWQ6OkRpc2NvdmVyeUVuZ2luZTo6VjFiZXRhYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_discoveryengine_v1beta_common, file_google_protobuf_timestamp]);

/**
 * Metadata that describes the training and serving parameters of an
 * [Engine][google.cloud.discoveryengine.v1beta.Engine].
 *
 * @generated from message google.cloud.discoveryengine.v1beta.Engine
 */
export type Engine = Message<"google.cloud.discoveryengine.v1beta.Engine"> & {
  /**
   * Additional config specs that defines the behavior of the engine.
   *
   * @generated from oneof google.cloud.discoveryengine.v1beta.Engine.engine_config
   */
  engineConfig: {
    /**
     * Configurations for the Chat Engine. Only applicable if
     * [solution_type][google.cloud.discoveryengine.v1beta.Engine.solution_type]
     * is
     * [SOLUTION_TYPE_CHAT][google.cloud.discoveryengine.v1beta.SolutionType.SOLUTION_TYPE_CHAT].
     *
     * @generated from field: google.cloud.discoveryengine.v1beta.Engine.ChatEngineConfig chat_engine_config = 11;
     */
    value: Engine_ChatEngineConfig;
    case: "chatEngineConfig";
  } | {
    /**
     * Configurations for the Search Engine. Only applicable if
     * [solution_type][google.cloud.discoveryengine.v1beta.Engine.solution_type]
     * is
     * [SOLUTION_TYPE_SEARCH][google.cloud.discoveryengine.v1beta.SolutionType.SOLUTION_TYPE_SEARCH].
     *
     * @generated from field: google.cloud.discoveryengine.v1beta.Engine.SearchEngineConfig search_engine_config = 13;
     */
    value: Engine_SearchEngineConfig;
    case: "searchEngineConfig";
  } | { case: undefined; value?: undefined };

  /**
   * Engine metadata to monitor the status of the engine.
   *
   * @generated from oneof google.cloud.discoveryengine.v1beta.Engine.engine_metadata
   */
  engineMetadata: {
    /**
     * Output only. Additional information of the Chat Engine. Only applicable
     * if
     * [solution_type][google.cloud.discoveryengine.v1beta.Engine.solution_type]
     * is
     * [SOLUTION_TYPE_CHAT][google.cloud.discoveryengine.v1beta.SolutionType.SOLUTION_TYPE_CHAT].
     *
     * @generated from field: google.cloud.discoveryengine.v1beta.Engine.ChatEngineMetadata chat_engine_metadata = 12;
     */
    value: Engine_ChatEngineMetadata;
    case: "chatEngineMetadata";
  } | { case: undefined; value?: undefined };

  /**
   * Immutable. The fully qualified resource name of the engine.
   *
   * This field must be a UTF-8 encoded string with a length limit of 1024
   * characters.
   *
   * Format:
   * `projects/{project_number}/locations/{location}/collections/{collection}/engines/{engine}`
   * engine should be 1-63 characters, and valid characters are
   * /[a-z0-9][a-z0-9-_]*\/. Otherwise, an INVALID_ARGUMENT error is returned.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The display name of the engine. Should be human readable. UTF-8
   * encoded string with limit of 1024 characters.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Output only. Timestamp the Recommendation Engine was created at.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * Output only. Timestamp the Recommendation Engine was last updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 4;
   */
  updateTime?: Timestamp;

  /**
   * The data stores associated with this engine.
   *
   * For
   * [SOLUTION_TYPE_SEARCH][google.cloud.discoveryengine.v1beta.SolutionType.SOLUTION_TYPE_SEARCH]
   * and
   * [SOLUTION_TYPE_RECOMMENDATION][google.cloud.discoveryengine.v1beta.SolutionType.SOLUTION_TYPE_RECOMMENDATION]
   * type of engines, they can only associate with at most one data store.
   *
   * If
   * [solution_type][google.cloud.discoveryengine.v1beta.Engine.solution_type]
   * is
   * [SOLUTION_TYPE_CHAT][google.cloud.discoveryengine.v1beta.SolutionType.SOLUTION_TYPE_CHAT],
   * multiple [DataStore][google.cloud.discoveryengine.v1beta.DataStore]s in the
   * same [Collection][google.cloud.discoveryengine.v1beta.Collection] can be
   * associated here.
   *
   * Note that when used in
   * [CreateEngineRequest][google.cloud.discoveryengine.v1beta.CreateEngineRequest],
   * one DataStore id must be provided as the system will use it for necessary
   * initializations.
   *
   * @generated from field: repeated string data_store_ids = 5;
   */
  dataStoreIds: string[];

  /**
   * Required. The solutions of the engine.
   *
   * @generated from field: google.cloud.discoveryengine.v1beta.SolutionType solution_type = 6;
   */
  solutionType: SolutionType;

  /**
   * The industry vertical that the engine registers.
   * The restriction of the Engine industry vertical is based on
   * [DataStore][google.cloud.discoveryengine.v1beta.DataStore]: If unspecified,
   * default to `GENERIC`. Vertical on Engine has to match vertical of the
   * DataStore linked to the engine.
   *
   * @generated from field: google.cloud.discoveryengine.v1beta.IndustryVertical industry_vertical = 16;
   */
  industryVertical: IndustryVertical;

  /**
   * Common config spec that specifies the metadata of the engine.
   *
   * @generated from field: google.cloud.discoveryengine.v1beta.Engine.CommonConfig common_config = 15;
   */
  commonConfig?: Engine_CommonConfig;
};

/**
 * Describes the message google.cloud.discoveryengine.v1beta.Engine.
 * Use `create(EngineSchema)` to create a new message.
 */
export const EngineSchema: GenMessage<Engine> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1beta_engine, 0);

/**
 * Configurations for a Search Engine.
 *
 * @generated from message google.cloud.discoveryengine.v1beta.Engine.SearchEngineConfig
 */
export type Engine_SearchEngineConfig = Message<"google.cloud.discoveryengine.v1beta.Engine.SearchEngineConfig"> & {
  /**
   * The search feature tier of this engine.
   *
   * Different tiers might have different
   * pricing. To learn more, check the pricing documentation.
   *
   * Defaults to
   * [SearchTier.SEARCH_TIER_STANDARD][google.cloud.discoveryengine.v1beta.SearchTier.SEARCH_TIER_STANDARD]
   * if not specified.
   *
   * @generated from field: google.cloud.discoveryengine.v1beta.SearchTier search_tier = 1;
   */
  searchTier: SearchTier;

  /**
   * The add-on that this search engine enables.
   *
   * @generated from field: repeated google.cloud.discoveryengine.v1beta.SearchAddOn search_add_ons = 2;
   */
  searchAddOns: SearchAddOn[];
};

/**
 * Describes the message google.cloud.discoveryengine.v1beta.Engine.SearchEngineConfig.
 * Use `create(Engine_SearchEngineConfigSchema)` to create a new message.
 */
export const Engine_SearchEngineConfigSchema: GenMessage<Engine_SearchEngineConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1beta_engine, 0, 0);

/**
 * Configurations for a Chat Engine.
 *
 * @generated from message google.cloud.discoveryengine.v1beta.Engine.ChatEngineConfig
 */
export type Engine_ChatEngineConfig = Message<"google.cloud.discoveryengine.v1beta.Engine.ChatEngineConfig"> & {
  /**
   * The configurationt generate the Dialogflow agent that is associated to
   * this Engine.
   *
   * Note that these configurations are one-time consumed by
   * and passed to Dialogflow service. It means they cannot be retrieved using
   * [EngineService.GetEngine][google.cloud.discoveryengine.v1beta.EngineService.GetEngine]
   * or
   * [EngineService.ListEngines][google.cloud.discoveryengine.v1beta.EngineService.ListEngines]
   * API after engine creation.
   *
   * @generated from field: google.cloud.discoveryengine.v1beta.Engine.ChatEngineConfig.AgentCreationConfig agent_creation_config = 1;
   */
  agentCreationConfig?: Engine_ChatEngineConfig_AgentCreationConfig;

  /**
   * The resource name of an exist Dialogflow agent to link to this Chat
   * Engine. Customers can either provide `agent_creation_config` to create
   * agent or provide an agent name that links the agent with the Chat engine.
   *
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   * ID>`.
   *
   * Note that the `dialogflow_agent_to_link` are one-time consumed by and
   * passed to Dialogflow service. It means they cannot be retrieved using
   * [EngineService.GetEngine][google.cloud.discoveryengine.v1beta.EngineService.GetEngine]
   * or
   * [EngineService.ListEngines][google.cloud.discoveryengine.v1beta.EngineService.ListEngines]
   * API after engine creation. Use
   * [ChatEngineMetadata.dialogflow_agent][google.cloud.discoveryengine.v1beta.Engine.ChatEngineMetadata.dialogflow_agent]
   * for actual agent association after Engine is created.
   *
   * @generated from field: string dialogflow_agent_to_link = 2;
   */
  dialogflowAgentToLink: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1beta.Engine.ChatEngineConfig.
 * Use `create(Engine_ChatEngineConfigSchema)` to create a new message.
 */
export const Engine_ChatEngineConfigSchema: GenMessage<Engine_ChatEngineConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1beta_engine, 0, 1);

/**
 * Configurations for generating a Dialogflow agent.
 *
 * Note that these configurations are one-time consumed by
 * and passed to Dialogflow service. It means they cannot be retrieved using
 * [EngineService.GetEngine][google.cloud.discoveryengine.v1beta.EngineService.GetEngine]
 * or
 * [EngineService.ListEngines][google.cloud.discoveryengine.v1beta.EngineService.ListEngines]
 * API after engine creation.
 *
 * @generated from message google.cloud.discoveryengine.v1beta.Engine.ChatEngineConfig.AgentCreationConfig
 */
export type Engine_ChatEngineConfig_AgentCreationConfig = Message<"google.cloud.discoveryengine.v1beta.Engine.ChatEngineConfig.AgentCreationConfig"> & {
  /**
   * Name of the company, organization or other entity that the agent
   * represents. Used for knowledge connector LLM prompt and for knowledge
   * search.
   *
   * @generated from field: string business = 1;
   */
  business: string;

  /**
   * Required. The default language of the agent as a language tag.
   * See [Language
   * Support](https://cloud.google.com/dialogflow/docs/reference/language)
   * for a list of the currently supported language codes.
   *
   * @generated from field: string default_language_code = 2;
   */
  defaultLanguageCode: string;

  /**
   * Required. The time zone of the agent from the [time zone
   * database](https://www.iana.org/time-zones), e.g., America/New_York,
   * Europe/Paris.
   *
   * @generated from field: string time_zone = 3;
   */
  timeZone: string;

  /**
   * Agent location for Agent creation, supported values: global/us/eu.
   * If not provided, us Engine will create Agent using us-central-1 by
   * default; eu Engine will create Agent using eu-west-1 by default.
   *
   * @generated from field: string location = 4;
   */
  location: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1beta.Engine.ChatEngineConfig.AgentCreationConfig.
 * Use `create(Engine_ChatEngineConfig_AgentCreationConfigSchema)` to create a new message.
 */
export const Engine_ChatEngineConfig_AgentCreationConfigSchema: GenMessage<Engine_ChatEngineConfig_AgentCreationConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1beta_engine, 0, 1, 0);

/**
 * Common configurations for an Engine.
 *
 * @generated from message google.cloud.discoveryengine.v1beta.Engine.CommonConfig
 */
export type Engine_CommonConfig = Message<"google.cloud.discoveryengine.v1beta.Engine.CommonConfig"> & {
  /**
   * The name of the company, business or entity that is associated with the
   * engine. Setting this may help improve LLM related features.
   *
   * @generated from field: string company_name = 1;
   */
  companyName: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1beta.Engine.CommonConfig.
 * Use `create(Engine_CommonConfigSchema)` to create a new message.
 */
export const Engine_CommonConfigSchema: GenMessage<Engine_CommonConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1beta_engine, 0, 2);

/**
 * Additional information of a Chat Engine.
 * Fields in this message are output only.
 *
 * @generated from message google.cloud.discoveryengine.v1beta.Engine.ChatEngineMetadata
 */
export type Engine_ChatEngineMetadata = Message<"google.cloud.discoveryengine.v1beta.Engine.ChatEngineMetadata"> & {
  /**
   * The resource name of a Dialogflow agent, that this Chat Engine refers
   * to.
   *
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   * ID>`.
   *
   * @generated from field: string dialogflow_agent = 1;
   */
  dialogflowAgent: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1beta.Engine.ChatEngineMetadata.
 * Use `create(Engine_ChatEngineMetadataSchema)` to create a new message.
 */
export const Engine_ChatEngineMetadataSchema: GenMessage<Engine_ChatEngineMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1beta_engine, 0, 3);
