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
// @generated from file google/cloud/bigquery/v2/time_partitioning.proto (package google.cloud.bigquery.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/bigquery/v2/time_partitioning.proto.
 */
export const file_google_cloud_bigquery_v2_time_partitioning: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvY2xvdWQvYmlncXVlcnkvdjIvdGltZV9wYXJ0aXRpb25pbmcucHJvdG8SGGdvb2dsZS5jbG91ZC5iaWdxdWVyeS52MiKQAQoQVGltZVBhcnRpdGlvbmluZxIRCgR0eXBlGAEgASgJQgPgQQISNwoNZXhwaXJhdGlvbl9tcxgCIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQ2NFZhbHVlQgPgQQESMAoFZmllbGQYAyABKAsyHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWVCA+BBAUJvChxjb20uZ29vZ2xlLmNsb3VkLmJpZ3F1ZXJ5LnYyQhVUaW1lUGFydGl0aW9uaW5nUHJvdG9aOGNsb3VkLmdvb2dsZS5jb20vZ28vYmlncXVlcnkvYXBpdjIvYmlncXVlcnlwYjtiaWdxdWVyeXBiYgZwcm90bzM", [file_google_api_field_behavior, file_google_protobuf_wrappers]);

/**
 * @generated from message google.cloud.bigquery.v2.TimePartitioning
 */
export type TimePartitioning = Message<"google.cloud.bigquery.v2.TimePartitioning"> & {
  /**
   * Required. The supported types are DAY, HOUR, MONTH, and YEAR, which will
   * generate one partition per day, hour, month, and year, respectively.
   *
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * Optional. Number of milliseconds for which to keep the storage for a
   * partition.
   * A wrapper is used here because 0 is an invalid value.
   *
   * @generated from field: google.protobuf.Int64Value expiration_ms = 2;
   */
  expirationMs?: bigint;

  /**
   * Optional. If not set, the table is partitioned by pseudo
   * column '_PARTITIONTIME'; if set, the table is partitioned by this field.
   * The field must be a top-level TIMESTAMP or DATE field. Its mode must be
   * NULLABLE or REQUIRED.
   * A wrapper is used here because an empty string is an invalid value.
   *
   * @generated from field: google.protobuf.StringValue field = 3;
   */
  field?: string;
};

/**
 * Describes the message google.cloud.bigquery.v2.TimePartitioning.
 * Use `create(TimePartitioningSchema)` to create a new message.
 */
export const TimePartitioningSchema: GenMessage<TimePartitioning> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_v2_time_partitioning, 0);
