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
// @generated from file google/genomics/v1/range.proto (package google.genomics.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../api/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/genomics/v1/range.proto.
 */
export const file_google_genomics_v1_range: GenFile = /*@__PURE__*/
  fileDesc("Ch5nb29nbGUvZ2Vub21pY3MvdjEvcmFuZ2UucHJvdG8SEmdvb2dsZS5nZW5vbWljcy52MSI7CgVSYW5nZRIWCg5yZWZlcmVuY2VfbmFtZRgBIAEoCRINCgVzdGFydBgCIAEoAxILCgNlbmQYAyABKANCZQoWY29tLmdvb2dsZS5nZW5vbWljcy52MUIKUmFuZ2VQcm90b1ABWjpnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2dlbm9taWNzL3YxO2dlbm9taWNz+AEBYgZwcm90bzM", [file_google_api_annotations]);

/**
 * A 0-based half-open genomic coordinate range for search requests.
 *
 * @generated from message google.genomics.v1.Range
 */
export type Range = Message<"google.genomics.v1.Range"> & {
  /**
   * The reference sequence name, for example `chr1`,
   * `1`, or `chrX`.
   *
   * @generated from field: string reference_name = 1;
   */
  referenceName: string;

  /**
   * The start position of the range on the reference, 0-based inclusive.
   *
   * @generated from field: int64 start = 2;
   */
  start: bigint;

  /**
   * The end position of the range on the reference, 0-based exclusive.
   *
   * @generated from field: int64 end = 3;
   */
  end: bigint;
};

/**
 * Describes the message google.genomics.v1.Range.
 * Use `create(RangeSchema)` to create a new message.
 */
export const RangeSchema: GenMessage<Range> = /*@__PURE__*/
  messageDesc(file_google_genomics_v1_range, 0);
