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
// @generated from file google/cloud/aiplatform/v1beta1/lineage_subgraph.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Artifact } from "./artifact_pb";
import { file_google_cloud_aiplatform_v1beta1_artifact } from "./artifact_pb";
import type { Event } from "./event_pb";
import { file_google_cloud_aiplatform_v1beta1_event } from "./event_pb";
import type { Execution } from "./execution_pb";
import { file_google_cloud_aiplatform_v1beta1_execution } from "./execution_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/lineage_subgraph.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_lineage_subgraph: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL2xpbmVhZ2Vfc3ViZ3JhcGgucHJvdG8SH2dvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEixwEKD0xpbmVhZ2VTdWJncmFwaBI8CglhcnRpZmFjdHMYASADKAsyKS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkFydGlmYWN0Ej4KCmV4ZWN1dGlvbnMYAiADKAsyKi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkV4ZWN1dGlvbhI2CgZldmVudHMYAyADKAsyJi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkV2ZW50QusBCiNjb20uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMUIUTGluZWFnZVN1YmdyYXBoUHJvdG9QAVpDY2xvdWQuZ29vZ2xlLmNvbS9nby9haXBsYXRmb3JtL2FwaXYxYmV0YTEvYWlwbGF0Zm9ybXBiO2FpcGxhdGZvcm1wYqoCH0dvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxQmV0YTHKAh9Hb29nbGVcQ2xvdWRcQUlQbGF0Zm9ybVxWMWJldGEx6gIiR29vZ2xlOjpDbG91ZDo6QUlQbGF0Zm9ybTo6VjFiZXRhMWIGcHJvdG8z", [file_google_cloud_aiplatform_v1beta1_artifact, file_google_cloud_aiplatform_v1beta1_event, file_google_cloud_aiplatform_v1beta1_execution]);

/**
 * A subgraph of the overall lineage graph. Event edges connect Artifact and
 * Execution nodes.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.LineageSubgraph
 */
export type LineageSubgraph = Message<"google.cloud.aiplatform.v1beta1.LineageSubgraph"> & {
  /**
   * The Artifact nodes in the subgraph.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.Artifact artifacts = 1;
   */
  artifacts: Artifact[];

  /**
   * The Execution nodes in the subgraph.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.Execution executions = 2;
   */
  executions: Execution[];

  /**
   * The Event edges between Artifacts and Executions in the subgraph.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.Event events = 3;
   */
  events: Event[];
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.LineageSubgraph.
 * Use `create(LineageSubgraphSchema)` to create a new message.
 */
export const LineageSubgraphSchema: GenMessage<LineageSubgraph> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_lineage_subgraph, 0);
