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
// @generated from file google/cloud/bigquery/v2/error.proto (package google.cloud.bigquery.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/bigquery/v2/error.proto.
 */
export const file_google_cloud_bigquery_v2_error: GenFile = /*@__PURE__*/
  fileDesc("CiRnb29nbGUvY2xvdWQvYmlncXVlcnkvdjIvZXJyb3IucHJvdG8SGGdvb2dsZS5jbG91ZC5iaWdxdWVyeS52MiJTCgpFcnJvclByb3RvEg4KBnJlYXNvbhgBIAEoCRIQCghsb2NhdGlvbhgCIAEoCRISCgpkZWJ1Z19pbmZvGAMgASgJEg8KB21lc3NhZ2UYBCABKAlCWAocY29tLmdvb2dsZS5jbG91ZC5iaWdxdWVyeS52Mlo4Y2xvdWQuZ29vZ2xlLmNvbS9nby9iaWdxdWVyeS9hcGl2Mi9iaWdxdWVyeXBiO2JpZ3F1ZXJ5cGJiBnByb3RvMw");

/**
 * Error details.
 *
 * @generated from message google.cloud.bigquery.v2.ErrorProto
 */
export type ErrorProto = Message<"google.cloud.bigquery.v2.ErrorProto"> & {
  /**
   * A short error code that summarizes the error.
   *
   * @generated from field: string reason = 1;
   */
  reason: string;

  /**
   * Specifies where the error occurred, if present.
   *
   * @generated from field: string location = 2;
   */
  location: string;

  /**
   * Debugging information. This property is internal to Google and should not
   * be used.
   *
   * @generated from field: string debug_info = 3;
   */
  debugInfo: string;

  /**
   * A human-readable description of the error.
   *
   * @generated from field: string message = 4;
   */
  message: string;
};

/**
 * Describes the message google.cloud.bigquery.v2.ErrorProto.
 * Use `create(ErrorProtoSchema)` to create a new message.
 */
export const ErrorProtoSchema: GenMessage<ErrorProto> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_v2_error, 0);
