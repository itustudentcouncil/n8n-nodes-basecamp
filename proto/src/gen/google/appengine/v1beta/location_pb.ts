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
// @generated from file google/appengine/v1beta/location.proto (package google.appengine.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../api/field_behavior_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/appengine/v1beta/location.proto.
 */
export const file_google_appengine_v1beta_location: GenFile = /*@__PURE__*/
  fileDesc("CiZnb29nbGUvYXBwZW5naW5lL3YxYmV0YS9sb2NhdGlvbi5wcm90bxIXZ29vZ2xlLmFwcGVuZ2luZS52MWJldGEihQEKEExvY2F0aW9uTWV0YWRhdGESJgoec3RhbmRhcmRfZW52aXJvbm1lbnRfYXZhaWxhYmxlGAIgASgIEiYKHmZsZXhpYmxlX2Vudmlyb25tZW50X2F2YWlsYWJsZRgEIAEoCBIhChRzZWFyY2hfYXBpX2F2YWlsYWJsZRgGIAEoCEID4EEDQtMBChtjb20uZ29vZ2xlLmFwcGVuZ2luZS52MWJldGFCDUxvY2F0aW9uUHJvdG9QAVpAZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcHBlbmdpbmUvdjFiZXRhO2FwcGVuZ2luZaoCHUdvb2dsZS5DbG91ZC5BcHBFbmdpbmUuVjFCZXRhygIdR29vZ2xlXENsb3VkXEFwcEVuZ2luZVxWMWJldGHqAiBHb29nbGU6OkNsb3VkOjpBcHBFbmdpbmU6OlYxYmV0YWIGcHJvdG8z", [file_google_api_field_behavior]);

/**
 * Metadata for the given [google.cloud.location.Location][google.cloud.location.Location].
 *
 * @generated from message google.appengine.v1beta.LocationMetadata
 */
export type LocationMetadata = Message<"google.appengine.v1beta.LocationMetadata"> & {
  /**
   * App Engine standard environment is available in the given location.
   *
   * @OutputOnly
   *
   * @generated from field: bool standard_environment_available = 2;
   */
  standardEnvironmentAvailable: boolean;

  /**
   * App Engine flexible environment is available in the given location.
   *
   * @OutputOnly
   *
   * @generated from field: bool flexible_environment_available = 4;
   */
  flexibleEnvironmentAvailable: boolean;

  /**
   * Output only. [Search API](https://cloud.google.com/appengine/docs/standard/python/search)
   * is available in the given location.
   *
   * @generated from field: bool search_api_available = 6;
   */
  searchApiAvailable: boolean;
};

/**
 * Describes the message google.appengine.v1beta.LocationMetadata.
 * Use `create(LocationMetadataSchema)` to create a new message.
 */
export const LocationMetadataSchema: GenMessage<LocationMetadata> = /*@__PURE__*/
  messageDesc(file_google_appengine_v1beta_location, 0);
