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
// @generated from file google/home/enterprise/sdm/v1/site.proto (package google.home.enterprise.sdm.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import { file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/home/enterprise/sdm/v1/site.proto.
 */
export const file_google_home_enterprise_sdm_v1_site: GenFile = /*@__PURE__*/
  fileDesc("Cihnb29nbGUvaG9tZS9lbnRlcnByaXNlL3NkbS92MS9zaXRlLnByb3RvEh1nb29nbGUuaG9tZS5lbnRlcnByaXNlLnNkbS52MSKtAQoJU3RydWN0dXJlEhEKBG5hbWUYASABKAlCA+BBAxInCgZ0cmFpdHMYAiABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0OmTqQWEKLnNtYXJ0ZGV2aWNlbWFuYWdlbWVudC5nb29nbGVhcGlzLmNvbS9TdHJ1Y3R1cmUSL2VudGVycHJpc2VzL3tlbnRlcnByaXNlfS9zdHJ1Y3R1cmVzL3tzdHJ1Y3R1cmV9IrABCgRSb29tEhEKBG5hbWUYASABKAlCA+BBAxInCgZ0cmFpdHMYAiABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0OmzqQWkKKXNtYXJ0ZGV2aWNlbWFuYWdlbWVudC5nb29nbGVhcGlzLmNvbS9Sb29tEjxlbnRlcnByaXNlcy97ZW50ZXJwcmlzZX0vc3RydWN0dXJlcy97c3RydWN0dXJlfS9yb29tcy97cm9vbX1CsgEKIWNvbS5nb29nbGUuaG9tZS5lbnRlcnByaXNlLnNkbS52MVABWkBnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2hvbWUvZW50ZXJwcmlzZS9zZG0vdjE7c2RtogIIR0hFTlRTRE2qAh1Hb29nbGUuSG9tZS5FbnRlcnByaXNlLlNkbS5WMcoCHUdvb2dsZVxIb21lXEVudGVycHJpc2VcU2RtXFYxYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_struct]);

/**
 * Structure resource represents an instance of enterprise managed home or hotel
 * room.
 *
 * @generated from message google.home.enterprise.sdm.v1.Structure
 */
export type Structure = Message<"google.home.enterprise.sdm.v1.Structure"> & {
  /**
   * Output only. The resource name of the structure. For example:
   * "enterprises/XYZ/structures/ABC".
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Structure traits.
   *
   * @generated from field: google.protobuf.Struct traits = 2;
   */
  traits?: JsonObject;
};

/**
 * Describes the message google.home.enterprise.sdm.v1.Structure.
 * Use `create(StructureSchema)` to create a new message.
 */
export const StructureSchema: GenMessage<Structure> = /*@__PURE__*/
  messageDesc(file_google_home_enterprise_sdm_v1_site, 0);

/**
 * Room resource represents an instance of sub-space within a structure such as
 * rooms in a hotel suite or rental apartment.
 *
 * @generated from message google.home.enterprise.sdm.v1.Room
 */
export type Room = Message<"google.home.enterprise.sdm.v1.Room"> & {
  /**
   * Output only. The resource name of the room. For example:
   * "enterprises/XYZ/structures/ABC/rooms/123".
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Room traits.
   *
   * @generated from field: google.protobuf.Struct traits = 2;
   */
  traits?: JsonObject;
};

/**
 * Describes the message google.home.enterprise.sdm.v1.Room.
 * Use `create(RoomSchema)` to create a new message.
 */
export const RoomSchema: GenMessage<Room> = /*@__PURE__*/
  messageDesc(file_google_home_enterprise_sdm_v1_site, 1);
