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
// @generated from file google/genomics/v1/position.proto (package google.genomics.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../api/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/genomics/v1/position.proto.
 */
export const file_google_genomics_v1_position: GenFile = /*@__PURE__*/
  fileDesc("CiFnb29nbGUvZ2Vub21pY3MvdjEvcG9zaXRpb24ucHJvdG8SEmdvb2dsZS5nZW5vbWljcy52MSJMCghQb3NpdGlvbhIWCg5yZWZlcmVuY2VfbmFtZRgBIAEoCRIQCghwb3NpdGlvbhgCIAEoAxIWCg5yZXZlcnNlX3N0cmFuZBgDIAEoCEJoChZjb20uZ29vZ2xlLmdlbm9taWNzLnYxQg1Qb3NpdGlvblByb3RvUAFaOmdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvZ2Vub21pY3MvdjE7Z2Vub21pY3P4AQFiBnByb3RvMw", [file_google_api_annotations]);

/**
 * An abstraction for referring to a genomic position, in relation to some
 * already known reference. For now, represents a genomic position as a
 * reference name, a base number on that reference (0-based), and a
 * determination of forward or reverse strand.
 *
 * @generated from message google.genomics.v1.Position
 */
export type Position = Message<"google.genomics.v1.Position"> & {
  /**
   * The name of the reference in whatever reference set is being used.
   *
   * @generated from field: string reference_name = 1;
   */
  referenceName: string;

  /**
   * The 0-based offset from the start of the forward strand for that reference.
   *
   * @generated from field: int64 position = 2;
   */
  position: bigint;

  /**
   * Whether this position is on the reverse strand, as opposed to the forward
   * strand.
   *
   * @generated from field: bool reverse_strand = 3;
   */
  reverseStrand: boolean;
};

/**
 * Describes the message google.genomics.v1.Position.
 * Use `create(PositionSchema)` to create a new message.
 */
export const PositionSchema: GenMessage<Position> = /*@__PURE__*/
  messageDesc(file_google_genomics_v1_position, 0);
