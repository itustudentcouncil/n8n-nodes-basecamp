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
// @generated from file google/actions/sdk/v2/interactionmodel/type/synonym_type.proto (package google.actions.sdk.v2.interactionmodel.type, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { EntityDisplay } from "./entity_display_pb";
import { file_google_actions_sdk_v2_interactionmodel_type_entity_display } from "./entity_display_pb";
import { file_google_api_field_behavior } from "../../../../../api/field_behavior_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/actions/sdk/v2/interactionmodel/type/synonym_type.proto.
 */
export const file_google_actions_sdk_v2_interactionmodel_type_synonym_type: GenFile = /*@__PURE__*/
  fileDesc("Cj5nb29nbGUvYWN0aW9ucy9zZGsvdjIvaW50ZXJhY3Rpb25tb2RlbC90eXBlL3N5bm9ueW1fdHlwZS5wcm90bxIrZ29vZ2xlLmFjdGlvbnMuc2RrLnYyLmludGVyYWN0aW9ubW9kZWwudHlwZSKSBAoLU3lub255bVR5cGUSWwoKbWF0Y2hfdHlwZRgBIAEoDjJCLmdvb2dsZS5hY3Rpb25zLnNkay52Mi5pbnRlcmFjdGlvbm1vZGVsLnR5cGUuU3lub255bVR5cGUuTWF0Y2hUeXBlQgPgQQESIgoVYWNjZXB0X3Vua25vd25fdmFsdWVzGAMgASgIQgPgQQESXQoIZW50aXRpZXMYAiADKAsyRi5nb29nbGUuYWN0aW9ucy5zZGsudjIuaW50ZXJhY3Rpb25tb2RlbC50eXBlLlN5bm9ueW1UeXBlLkVudGl0aWVzRW50cnlCA+BBAhpxCgZFbnRpdHkSUAoHZGlzcGxheRgBIAEoCzI6Lmdvb2dsZS5hY3Rpb25zLnNkay52Mi5pbnRlcmFjdGlvbm1vZGVsLnR5cGUuRW50aXR5RGlzcGxheUID4EEBEhUKCHN5bm9ueW1zGAIgAygJQgPgQQEacAoNRW50aXRpZXNFbnRyeRILCgNrZXkYASABKAkSTgoFdmFsdWUYAiABKAsyPy5nb29nbGUuYWN0aW9ucy5zZGsudjIuaW50ZXJhY3Rpb25tb2RlbC50eXBlLlN5bm9ueW1UeXBlLkVudGl0eToCOAEiPgoJTWF0Y2hUeXBlEg8KC1VOU1BFQ0lGSUVEEAASDwoLRVhBQ1RfTUFUQ0gQARIPCgtGVVpaWV9NQVRDSBACQpEBCi9jb20uZ29vZ2xlLmFjdGlvbnMuc2RrLnYyLmludGVyYWN0aW9ubW9kZWwudHlwZUIQU3lub255bVR5cGVQcm90b1ABWkpnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FjdGlvbnMvc2RrL3YyL2ludGVyYWN0aW9ubW9kZWwvdHlwZWIGcHJvdG8z", [file_google_actions_sdk_v2_interactionmodel_type_entity_display, file_google_api_field_behavior]);

/**
 * Type that matches text by set of synonyms.
 *
 * @generated from message google.actions.sdk.v2.interactionmodel.type.SynonymType
 */
export type SynonymType = Message<"google.actions.sdk.v2.interactionmodel.type.SynonymType"> & {
  /**
   * Optional. The match type for the synonym.
   *
   * @generated from field: google.actions.sdk.v2.interactionmodel.type.SynonymType.MatchType match_type = 1;
   */
  matchType: SynonymType_MatchType;

  /**
   * Optional. When set to true this will match unknown words or phrases based on
   * surrounding input and intent training data, such as items that might be
   * added to a grocery list.
   *
   * @generated from field: bool accept_unknown_values = 3;
   */
  acceptUnknownValues: boolean;

  /**
   * Required. Named map of synonym entities.
   *
   * @generated from field: map<string, google.actions.sdk.v2.interactionmodel.type.SynonymType.Entity> entities = 2;
   */
  entities: { [key: string]: SynonymType_Entity };
};

/**
 * Describes the message google.actions.sdk.v2.interactionmodel.type.SynonymType.
 * Use `create(SynonymTypeSchema)` to create a new message.
 */
export const SynonymTypeSchema: GenMessage<SynonymType> = /*@__PURE__*/
  messageDesc(file_google_actions_sdk_v2_interactionmodel_type_synonym_type, 0);

/**
 * Represents a synonym entity field that contains the details of a single
 * entry inside the type.
 *
 * @generated from message google.actions.sdk.v2.interactionmodel.type.SynonymType.Entity
 */
export type SynonymType_Entity = Message<"google.actions.sdk.v2.interactionmodel.type.SynonymType.Entity"> & {
  /**
   * Optional. The entity display details.
   *
   * @generated from field: google.actions.sdk.v2.interactionmodel.type.EntityDisplay display = 1;
   */
  display?: EntityDisplay;

  /**
   * Optional. The list of synonyms for the entity.
   * **This field is localizable.**
   *
   * @generated from field: repeated string synonyms = 2;
   */
  synonyms: string[];
};

/**
 * Describes the message google.actions.sdk.v2.interactionmodel.type.SynonymType.Entity.
 * Use `create(SynonymType_EntitySchema)` to create a new message.
 */
export const SynonymType_EntitySchema: GenMessage<SynonymType_Entity> = /*@__PURE__*/
  messageDesc(file_google_actions_sdk_v2_interactionmodel_type_synonym_type, 0, 0);

/**
 * The type of matching that entries in this type will use. This will ensure
 * all of the types use the same matching method and allow variation of
 * matching for synonym matching (i.e. fuzzy versus exact). If the value is
 * `UNSPECIFIED` it will be defaulted to `EXACT_MATCH`.
 *
 * @generated from enum google.actions.sdk.v2.interactionmodel.type.SynonymType.MatchType
 */
export enum SynonymType_MatchType {
  /**
   * Defaults to `EXACT_MATCH`.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Looks for an exact match of the synonym or name.
   *
   * @generated from enum value: EXACT_MATCH = 1;
   */
  EXACT_MATCH = 1,

  /**
   * Looser than `EXACT_MATCH`. Looks for similar matches as well as exact
   * matches.
   *
   * @generated from enum value: FUZZY_MATCH = 2;
   */
  FUZZY_MATCH = 2,
}

/**
 * Describes the enum google.actions.sdk.v2.interactionmodel.type.SynonymType.MatchType.
 */
export const SynonymType_MatchTypeSchema: GenEnum<SynonymType_MatchType> = /*@__PURE__*/
  enumDesc(file_google_actions_sdk_v2_interactionmodel_type_synonym_type, 0, 0);
