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
// @generated from file google/chat/v1/group.proto (package google.chat.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/chat/v1/group.proto.
 */
export const file_google_chat_v1_group: GenFile = /*@__PURE__*/
  fileDesc("Chpnb29nbGUvY2hhdC92MS9ncm91cC5wcm90bxIOZ29vZ2xlLmNoYXQudjEiFQoFR3JvdXASDAoEbmFtZRgBIAEoCUKjAQoSY29tLmdvb2dsZS5jaGF0LnYxQgpHcm91cFByb3RvUAFaLGNsb3VkLmdvb2dsZS5jb20vZ28vY2hhdC9hcGl2MS9jaGF0cGI7Y2hhdHBiogILRFlOQVBJUHJvdG+qAhNHb29nbGUuQXBwcy5DaGF0LlYxygITR29vZ2xlXEFwcHNcQ2hhdFxWMeoCFkdvb2dsZTo6QXBwczo6Q2hhdDo6VjFiBnByb3RvMw");

/**
 * A Google Group in Google Chat.
 *
 * @generated from message google.chat.v1.Group
 */
export type Group = Message<"google.chat.v1.Group"> & {
  /**
   * Resource name for a Google Group.
   *
   * Represents a
   * [group](https://cloud.google.com/identity/docs/reference/rest/v1/groups) in
   * Cloud Identity Groups API.
   *
   * Format: groups/{group}
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.chat.v1.Group.
 * Use `create(GroupSchema)` to create a new message.
 */
export const GroupSchema: GenMessage<Group> = /*@__PURE__*/
  messageDesc(file_google_chat_v1_group, 0);
