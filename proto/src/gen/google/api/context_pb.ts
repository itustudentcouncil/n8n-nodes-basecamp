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
// @generated from file google/api/context.proto (package google.api, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/api/context.proto.
 */
export const file_google_api_context: GenFile = /*@__PURE__*/
  fileDesc("Chhnb29nbGUvYXBpL2NvbnRleHQucHJvdG8SCmdvb2dsZS5hcGkiMQoHQ29udGV4dBImCgVydWxlcxgBIAMoCzIXLmdvb2dsZS5hcGkuQ29udGV4dFJ1bGUijQEKC0NvbnRleHRSdWxlEhAKCHNlbGVjdG9yGAEgASgJEhEKCXJlcXVlc3RlZBgCIAMoCRIQCghwcm92aWRlZBgDIAMoCRIiChphbGxvd2VkX3JlcXVlc3RfZXh0ZW5zaW9ucxgEIAMoCRIjChthbGxvd2VkX3Jlc3BvbnNlX2V4dGVuc2lvbnMYBSADKAlCbgoOY29tLmdvb2dsZS5hcGlCDENvbnRleHRQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FwaS9zZXJ2aWNlY29uZmlnO3NlcnZpY2Vjb25maWeiAgRHQVBJYgZwcm90bzM");

/**
 * `Context` defines which contexts an API requests.
 *
 * Example:
 *
 *     context:
 *       rules:
 *       - selector: "*"
 *         requested:
 *         - google.rpc.context.ProjectContext
 *         - google.rpc.context.OriginContext
 *
 * The above specifies that all methods in the API request
 * `google.rpc.context.ProjectContext` and
 * `google.rpc.context.OriginContext`.
 *
 * Available context types are defined in package
 * `google.rpc.context`.
 *
 * This also provides mechanism to allowlist any protobuf message extension that
 * can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
 * “x-goog-ext-<extension_id>-jspb” format. For example, list any service
 * specific protobuf types that can appear in grpc metadata as follows in your
 * yaml file:
 *
 * Example:
 *
 *     context:
 *       rules:
 *        - selector: "google.example.library.v1.LibraryService.CreateBook"
 *          allowed_request_extensions:
 *          - google.foo.v1.NewExtension
 *          allowed_response_extensions:
 *          - google.foo.v1.NewExtension
 *
 * You can also specify extension ID instead of fully qualified extension name
 * here.
 *
 * @generated from message google.api.Context
 */
export type Context = Message<"google.api.Context"> & {
  /**
   * A list of RPC context rules that apply to individual API methods.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   *
   * @generated from field: repeated google.api.ContextRule rules = 1;
   */
  rules: ContextRule[];
};

/**
 * Describes the message google.api.Context.
 * Use `create(ContextSchema)` to create a new message.
 */
export const ContextSchema: GenMessage<Context> = /*@__PURE__*/
  messageDesc(file_google_api_context, 0);

/**
 * A context rule provides information about the context for an individual API
 * element.
 *
 * @generated from message google.api.ContextRule
 */
export type ContextRule = Message<"google.api.ContextRule"> & {
  /**
   * Selects the methods to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   *
   * @generated from field: string selector = 1;
   */
  selector: string;

  /**
   * A list of full type names of requested contexts, only the requested context
   * will be made available to the backend.
   *
   * @generated from field: repeated string requested = 2;
   */
  requested: string[];

  /**
   * A list of full type names of provided contexts. It is used to support
   * propagating HTTP headers and ETags from the response extension.
   *
   * @generated from field: repeated string provided = 3;
   */
  provided: string[];

  /**
   * A list of full type names or extension IDs of extensions allowed in grpc
   * side channel from client to backend.
   *
   * @generated from field: repeated string allowed_request_extensions = 4;
   */
  allowedRequestExtensions: string[];

  /**
   * A list of full type names or extension IDs of extensions allowed in grpc
   * side channel from backend to client.
   *
   * @generated from field: repeated string allowed_response_extensions = 5;
   */
  allowedResponseExtensions: string[];
};

/**
 * Describes the message google.api.ContextRule.
 * Use `create(ContextRuleSchema)` to create a new message.
 */
export const ContextRuleSchema: GenMessage<ContextRule> = /*@__PURE__*/
  messageDesc(file_google_api_context, 1);
