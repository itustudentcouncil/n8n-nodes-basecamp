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
// @generated from file google/actions/sdk/v2/interactionmodel/type/regular_expression_type.proto (package google.actions.sdk.v2.interactionmodel.type, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { EntityDisplay } from "./entity_display_pb";
import { file_google_actions_sdk_v2_interactionmodel_type_entity_display } from "./entity_display_pb";
import { file_google_api_field_behavior } from "../../../../../api/field_behavior_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/actions/sdk/v2/interactionmodel/type/regular_expression_type.proto.
 */
export const file_google_actions_sdk_v2_interactionmodel_type_regular_expression_type: GenFile = /*@__PURE__*/
  fileDesc("Cklnb29nbGUvYWN0aW9ucy9zZGsvdjIvaW50ZXJhY3Rpb25tb2RlbC90eXBlL3JlZ3VsYXJfZXhwcmVzc2lvbl90eXBlLnByb3RvEitnb29nbGUuYWN0aW9ucy5zZGsudjIuaW50ZXJhY3Rpb25tb2RlbC50eXBlIvoCChVSZWd1bGFyRXhwcmVzc2lvblR5cGUSZwoIZW50aXRpZXMYASADKAsyUC5nb29nbGUuYWN0aW9ucy5zZGsudjIuaW50ZXJhY3Rpb25tb2RlbC50eXBlLlJlZ3VsYXJFeHByZXNzaW9uVHlwZS5FbnRpdGllc0VudHJ5QgPgQQIafAoGRW50aXR5ElAKB2Rpc3BsYXkYASABKAsyOi5nb29nbGUuYWN0aW9ucy5zZGsudjIuaW50ZXJhY3Rpb25tb2RlbC50eXBlLkVudGl0eURpc3BsYXlCA+BBARIgChNyZWd1bGFyX2V4cHJlc3Npb25zGAIgAygJQgPgQQIaegoNRW50aXRpZXNFbnRyeRILCgNrZXkYASABKAkSWAoFdmFsdWUYAiABKAsySS5nb29nbGUuYWN0aW9ucy5zZGsudjIuaW50ZXJhY3Rpb25tb2RlbC50eXBlLlJlZ3VsYXJFeHByZXNzaW9uVHlwZS5FbnRpdHk6AjgBQpsBCi9jb20uZ29vZ2xlLmFjdGlvbnMuc2RrLnYyLmludGVyYWN0aW9ubW9kZWwudHlwZUIaUmVndWxhckV4cHJlc3Npb25UeXBlUHJvdG9QAVpKZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hY3Rpb25zL3Nkay92Mi9pbnRlcmFjdGlvbm1vZGVsL3R5cGViBnByb3RvMw", [file_google_actions_sdk_v2_interactionmodel_type_entity_display, file_google_api_field_behavior]);

/**
 * Type that matches text by regular expressions.
 * **This message is localizable.**
 *
 * @generated from message google.actions.sdk.v2.interactionmodel.type.RegularExpressionType
 */
export type RegularExpressionType = Message<"google.actions.sdk.v2.interactionmodel.type.RegularExpressionType"> & {
  /**
   * Required. Named map of entities which each contain Regex strings.
   *
   * @generated from field: map<string, google.actions.sdk.v2.interactionmodel.type.RegularExpressionType.Entity> entities = 1;
   */
  entities: { [key: string]: RegularExpressionType_Entity };
};

/**
 * Describes the message google.actions.sdk.v2.interactionmodel.type.RegularExpressionType.
 * Use `create(RegularExpressionTypeSchema)` to create a new message.
 */
export const RegularExpressionTypeSchema: GenMessage<RegularExpressionType> = /*@__PURE__*/
  messageDesc(file_google_actions_sdk_v2_interactionmodel_type_regular_expression_type, 0);

/**
 * Represents an entity object that contains the regular expression that is
 * used for comparison.
 *
 * @generated from message google.actions.sdk.v2.interactionmodel.type.RegularExpressionType.Entity
 */
export type RegularExpressionType_Entity = Message<"google.actions.sdk.v2.interactionmodel.type.RegularExpressionType.Entity"> & {
  /**
   * Optional. Elements that will be displayed on the canvas once an entity is
   * extracted from a query. Only relevant for canvas enabled apps.
   *
   * @generated from field: google.actions.sdk.v2.interactionmodel.type.EntityDisplay display = 1;
   */
  display?: EntityDisplay;

  /**
   * Required. Uses RE2 regex syntax (See
   * https://github.com/google/re2/wiki/Syntax for more details)
   *
   * @generated from field: repeated string regular_expressions = 2;
   */
  regularExpressions: string[];
};

/**
 * Describes the message google.actions.sdk.v2.interactionmodel.type.RegularExpressionType.Entity.
 * Use `create(RegularExpressionType_EntitySchema)` to create a new message.
 */
export const RegularExpressionType_EntitySchema: GenMessage<RegularExpressionType_Entity> = /*@__PURE__*/
  messageDesc(file_google_actions_sdk_v2_interactionmodel_type_regular_expression_type, 0, 0);
