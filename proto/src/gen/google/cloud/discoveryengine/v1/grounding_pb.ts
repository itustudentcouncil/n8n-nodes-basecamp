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
// @generated from file google/cloud/discoveryengine/v1/grounding.proto (package google.cloud.discoveryengine.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/discoveryengine/v1/grounding.proto.
 */
export const file_google_cloud_discoveryengine_v1_grounding: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvY2xvdWQvZGlzY292ZXJ5ZW5naW5lL3YxL2dyb3VuZGluZy5wcm90bxIfZ29vZ2xlLmNsb3VkLmRpc2NvdmVyeWVuZ2luZS52MSKpAQoNR3JvdW5kaW5nRmFjdBIRCglmYWN0X3RleHQYASABKAkSUgoKYXR0cmlidXRlcxgCIAMoCzI+Lmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjEuR3JvdW5kaW5nRmFjdC5BdHRyaWJ1dGVzRW50cnkaMQoPQXR0cmlidXRlc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEizgEKCUZhY3RDaHVuaxISCgpjaHVua190ZXh0GAEgASgJEg4KBnNvdXJjZRgCIAEoCRINCgVpbmRleBgEIAEoBRJXCg9zb3VyY2VfbWV0YWRhdGEYAyADKAsyPi5nb29nbGUuY2xvdWQuZGlzY292ZXJ5ZW5naW5lLnYxLkZhY3RDaHVuay5Tb3VyY2VNZXRhZGF0YUVudHJ5GjUKE1NvdXJjZU1ldGFkYXRhRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4AUKBAgojY29tLmdvb2dsZS5jbG91ZC5kaXNjb3ZlcnllbmdpbmUudjFCDkdyb3VuZGluZ1Byb3RvUAFaTWNsb3VkLmdvb2dsZS5jb20vZ28vZGlzY292ZXJ5ZW5naW5lL2FwaXYxL2Rpc2NvdmVyeWVuZ2luZXBiO2Rpc2NvdmVyeWVuZ2luZXBiogIPRElTQ09WRVJZRU5HSU5FqgIfR29vZ2xlLkNsb3VkLkRpc2NvdmVyeUVuZ2luZS5WMcoCH0dvb2dsZVxDbG91ZFxEaXNjb3ZlcnlFbmdpbmVcVjHqAiJHb29nbGU6OkNsb3VkOjpEaXNjb3ZlcnlFbmdpbmU6OlYxYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource]);

/**
 * Grounding Fact.
 *
 * @generated from message google.cloud.discoveryengine.v1.GroundingFact
 */
export type GroundingFact = Message<"google.cloud.discoveryengine.v1.GroundingFact"> & {
  /**
   * Text content of the fact. Can be at most 10K characters long.
   *
   * @generated from field: string fact_text = 1;
   */
  factText: string;

  /**
   * Attributes associated with the fact.
   * Common attributes include `source` (indicating where the fact was sourced
   * from), `author` (indicating the author of the fact), and so on.
   *
   * @generated from field: map<string, string> attributes = 2;
   */
  attributes: { [key: string]: string };
};

/**
 * Describes the message google.cloud.discoveryengine.v1.GroundingFact.
 * Use `create(GroundingFactSchema)` to create a new message.
 */
export const GroundingFactSchema: GenMessage<GroundingFact> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_grounding, 0);

/**
 * Fact Chunk.
 *
 * @generated from message google.cloud.discoveryengine.v1.FactChunk
 */
export type FactChunk = Message<"google.cloud.discoveryengine.v1.FactChunk"> & {
  /**
   * Text content of the fact chunk. Can be at most 10K characters long.
   *
   * @generated from field: string chunk_text = 1;
   */
  chunkText: string;

  /**
   * Source from which this fact chunk was retrieved. If it was retrieved
   * from the GroundingFacts provided in the request then this field will
   * contain the index of the specific fact from which this chunk was
   * retrieved.
   *
   * @generated from field: string source = 2;
   */
  source: string;

  /**
   * The index of this chunk. Currently, only used for the streaming mode.
   *
   * @generated from field: int32 index = 4;
   */
  index: number;

  /**
   * More fine-grained information for the source reference.
   *
   * @generated from field: map<string, string> source_metadata = 3;
   */
  sourceMetadata: { [key: string]: string };
};

/**
 * Describes the message google.cloud.discoveryengine.v1.FactChunk.
 * Use `create(FactChunkSchema)` to create a new message.
 */
export const FactChunkSchema: GenMessage<FactChunk> = /*@__PURE__*/
  messageDesc(file_google_cloud_discoveryengine_v1_grounding, 1);
