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
// @generated from file google/cloud/discoveryengine/v1alpha/session.proto (package google.cloud.discoveryengine.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/discoveryengine/v1alpha/session.proto.
 */
export const file_google_cloud_discoveryengine_v1alpha_session: GenFile = /*@__PURE__*/
  fileDesc("CjJnb29nbGUvY2xvdWQvZGlzY292ZXJ5ZW5naW5lL3YxYWxwaGEvc2Vzc2lvbi5wcm90bxIkZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhIqoGCgdTZXNzaW9uEhEKBG5hbWUYASABKAlCA+BBBRJCCgVzdGF0ZRgCIAEoDjIzLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFhbHBoYS5TZXNzaW9uLlN0YXRlEhYKDnVzZXJfcHNldWRvX2lkGAMgASgJEkEKBXR1cm5zGAQgAygLMjIuZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhLlNlc3Npb24uVHVybhIzCgpzdGFydF90aW1lGAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjEKCGVuZF90aW1lGAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDGn4KBFR1cm4SOgoFcXVlcnkYASABKAsyKy5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxYWxwaGEuUXVlcnkSOgoGYW5zd2VyGAIgASgJQir6QScKJWRpc2NvdmVyeWVuZ2luZS5nb29nbGVhcGlzLmNvbS9BbnN3ZXIiLwoFU3RhdGUSFQoRU1RBVEVfVU5TUEVDSUZJRUQQABIPCgtJTl9QUk9HUkVTUxABOtMC6kHPAgomZGlzY292ZXJ5ZW5naW5lLmdvb2dsZWFwaXMuY29tL1Nlc3Npb24SUnByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9kYXRhU3RvcmVzL3tkYXRhX3N0b3JlfS9zZXNzaW9ucy97c2Vzc2lvbn0Sa3Byb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9jb2xsZWN0aW9ucy97Y29sbGVjdGlvbn0vZGF0YVN0b3Jlcy97ZGF0YV9zdG9yZX0vc2Vzc2lvbnMve3Nlc3Npb259EmRwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vY29sbGVjdGlvbnMve2NvbGxlY3Rpb259L2VuZ2luZXMve2VuZ2luZX0vc2Vzc2lvbnMve3Nlc3Npb259IjQKBVF1ZXJ5Eg4KBHRleHQYAiABKAlIABIQCghxdWVyeV9pZBgBIAEoCUIJCgdjb250ZW50QpgCCihjb20uZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MWFscGhhQgxTZXNzaW9uUHJvdG9QAVpSY2xvdWQuZ29vZ2xlLmNvbS9nby9kaXNjb3ZlcnllbmdpbmUvYXBpdjFhbHBoYS9kaXNjb3ZlcnllbmdpbmVwYjtkaXNjb3ZlcnllbmdpbmVwYqICD0RJU0NPVkVSWUVOR0lORaoCJEdvb2dsZS5DbG91ZC5EaXNjb3ZlcnlFbmdpbmUuVjFBbHBoYcoCJEdvb2dsZVxDbG91ZFxEaXNjb3ZlcnlFbmdpbmVcVjFhbHBoYeoCJ0dvb2dsZTo6Q2xvdWQ6OkRpc2NvdmVyeUVuZ2luZTo6VjFhbHBoYWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * External session proto definition.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.Session
 */
export type Session = Message<"google.cloud.discoveryengine.v1alpha.Session"> & {
  /**
   * Immutable. Fully qualified name
   * `projects/{project}/locations/global/collections/{collection}/engines/{engine}/sessions/*`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The state of the session.
   *
   * @generated from field: google.cloud.discoveryengine.v1alpha.Session.State state = 2;
   */
  state: Session_State;

  /**
   * A unique identifier for tracking users.
   *
   * @generated from field: string user_pseudo_id = 3;
   */
  userPseudoId: string;

  /**
   * Turns.
   *
   * @generated from field: repeated google.cloud.discoveryengine.v1alpha.Session.Turn turns = 4;
   */
  turns: Session_Turn[];

  /**
   * Output only. The time the session started.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 5;
   */
  startTime?: Timestamp;

  /**
   * Output only. The time the session finished.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 6;
   */
  endTime?: Timestamp;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.Session.
 * Use `create(SessionSchema)` to create a new message.
 */
export const SessionSchema: GenMessage<Session> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_session, 0);

/**
 * Represents a turn, including a query from the user and a
 * answer from service.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.Session.Turn
 */
export type Session_Turn = Message<"google.cloud.discoveryengine.v1alpha.Session.Turn"> & {
  /**
   * The user query.
   *
   * @generated from field: google.cloud.discoveryengine.v1alpha.Query query = 1;
   */
  query?: Query;

  /**
   * The resource name of the answer to the user query.
   *
   * Only set if the answer generation (/answer API call) happened in this
   * turn.
   *
   * @generated from field: string answer = 2;
   */
  answer: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.Session.Turn.
 * Use `create(Session_TurnSchema)` to create a new message.
 */
export const Session_TurnSchema: GenMessage<Session_Turn> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_session, 0, 0);

/**
 * Enumeration of the state of the session.
 *
 * @generated from enum google.cloud.discoveryengine.v1alpha.Session.State
 */
export enum Session_State {
  /**
   * State is unspecified.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * The session is currently open.
   *
   * @generated from enum value: IN_PROGRESS = 1;
   */
  IN_PROGRESS = 1,
}

/**
 * Describes the enum google.cloud.discoveryengine.v1alpha.Session.State.
 */
export const Session_StateSchema: GenEnum<Session_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_discoveryengine_v1alpha_session, 0, 0);

/**
 * Defines a user inputed query.
 *
 * @generated from message google.cloud.discoveryengine.v1alpha.Query
 */
export type Query = Message<"google.cloud.discoveryengine.v1alpha.Query"> & {
  /**
   * Query content.
   *
   * @generated from oneof google.cloud.discoveryengine.v1alpha.Query.content
   */
  content: {
    /**
     * Plain text.
     *
     * @generated from field: string text = 2;
     */
    value: string;
    case: "text";
  } | { case: undefined; value?: undefined };

  /**
   * Unique Id for the query.
   *
   * @generated from field: string query_id = 1;
   */
  queryId: string;
};

/**
 * Describes the message google.cloud.discoveryengine.v1alpha.Query.
 * Use `create(QuerySchema)` to create a new message.
 */
export const QuerySchema: GenMessage<Query> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1alpha_session, 1);
