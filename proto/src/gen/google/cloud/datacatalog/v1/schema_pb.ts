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
// @generated from file google/cloud/datacatalog/v1/schema.proto (package google.cloud.datacatalog.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/datacatalog/v1/schema.proto.
 */
export const file_google_cloud_datacatalog_v1_schema: GenFile = /*@__PURE__*/
  fileDesc("Cihnb29nbGUvY2xvdWQvZGF0YWNhdGFsb2cvdjEvc2NoZW1hLnByb3RvEhtnb29nbGUuY2xvdWQuZGF0YWNhdGFsb2cudjEiRAoGU2NoZW1hEjoKB2NvbHVtbnMYAiADKAsyKS5nb29nbGUuY2xvdWQuZGF0YWNhdGFsb2cudjEuQ29sdW1uU2NoZW1hItUHCgxDb2x1bW5TY2hlbWESEwoGY29sdW1uGAYgASgJQgPgQQISEQoEdHlwZRgBIAEoCUID4EECEhgKC2Rlc2NyaXB0aW9uGAIgASgJQgPgQQESEQoEbW9kZRgDIAEoCUID4EEBEhoKDWRlZmF1bHRfdmFsdWUYCCABKAlCA+BBARIdChBvcmRpbmFsX3Bvc2l0aW9uGAkgASgFQgPgQQESWgoVaGlnaGVzdF9pbmRleGluZ190eXBlGAogASgOMjYuZ29vZ2xlLmNsb3VkLmRhdGFjYXRhbG9nLnYxLkNvbHVtblNjaGVtYS5JbmRleGluZ1R5cGVCA+BBARJCCgpzdWJjb2x1bW5zGAcgAygLMikuZ29vZ2xlLmNsb3VkLmRhdGFjYXRhbG9nLnYxLkNvbHVtblNjaGVtYUID4EEBElgKEmxvb2tlcl9jb2x1bW5fc3BlYxgSIAEoCzI6Lmdvb2dsZS5jbG91ZC5kYXRhY2F0YWxvZy52MS5Db2x1bW5TY2hlbWEuTG9va2VyQ29sdW1uU3BlY0gAElsKEnJhbmdlX2VsZW1lbnRfdHlwZRgTIAEoCzI6Lmdvb2dsZS5jbG91ZC5kYXRhY2F0YWxvZy52MS5Db2x1bW5TY2hlbWEuRmllbGRFbGVtZW50VHlwZUID4EEBEhQKB2djX3J1bGUYCyABKAlCA+BBARryAQoQTG9va2VyQ29sdW1uU3BlYxJZCgR0eXBlGAEgASgOMksuZ29vZ2xlLmNsb3VkLmRhdGFjYXRhbG9nLnYxLkNvbHVtblNjaGVtYS5Mb29rZXJDb2x1bW5TcGVjLkxvb2tlckNvbHVtblR5cGUiggEKEExvb2tlckNvbHVtblR5cGUSIgoeTE9PS0VSX0NPTFVNTl9UWVBFX1VOU1BFQ0lGSUVEEAASDQoJRElNRU5TSU9OEAESEwoPRElNRU5TSU9OX0dST1VQEAISCgoGRklMVEVSEAMSCwoHTUVBU1VSRRAEEg0KCVBBUkFNRVRFUhAFGiUKEEZpZWxkRWxlbWVudFR5cGUSEQoEdHlwZRgBIAEoCUID4EECIpwBCgxJbmRleGluZ1R5cGUSHQoZSU5ERVhJTkdfVFlQRV9VTlNQRUNJRklFRBAAEhYKEklOREVYSU5HX1RZUEVfTk9ORRABEhwKGElOREVYSU5HX1RZUEVfTk9OX1VOSVFVRRACEhgKFElOREVYSU5HX1RZUEVfVU5JUVVFEAMSHQoZSU5ERVhJTkdfVFlQRV9QUklNQVJZX0tFWRAEQg0KC3N5c3RlbV9zcGVjQsYBCh9jb20uZ29vZ2xlLmNsb3VkLmRhdGFjYXRhbG9nLnYxUAFaQWNsb3VkLmdvb2dsZS5jb20vZ28vZGF0YWNhdGFsb2cvYXBpdjEvZGF0YWNhdGFsb2dwYjtkYXRhY2F0YWxvZ3Bi+AEBqgIbR29vZ2xlLkNsb3VkLkRhdGFDYXRhbG9nLlYxygIbR29vZ2xlXENsb3VkXERhdGFDYXRhbG9nXFYx6gIeR29vZ2xlOjpDbG91ZDo6RGF0YUNhdGFsb2c6OlYxYgZwcm90bzM", [file_google_api_field_behavior]);

/**
 * Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema.
 *
 * @generated from message google.cloud.datacatalog.v1.Schema
 */
export type Schema = Message<"google.cloud.datacatalog.v1.Schema"> & {
  /**
   * The unified GoogleSQL-like schema of columns.
   *
   * The overall maximum number of columns and nested columns is 10,000.
   * The maximum nested depth is 15 levels.
   *
   * @generated from field: repeated google.cloud.datacatalog.v1.ColumnSchema columns = 2;
   */
  columns: ColumnSchema[];
};

/**
 * Describes the message google.cloud.datacatalog.v1.Schema.
 * Use `create(SchemaSchema)` to create a new message.
 */
export const SchemaSchema: GenMessage<Schema> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_schema, 0);

/**
 * A column within a schema. Columns can be nested inside
 * other columns.
 *
 * @generated from message google.cloud.datacatalog.v1.ColumnSchema
 */
export type ColumnSchema = Message<"google.cloud.datacatalog.v1.ColumnSchema"> & {
  /**
   * Required. Name of the column.
   *
   * Must be a UTF-8 string without dots (.).
   * The maximum size is 64 bytes.
   *
   * @generated from field: string column = 6;
   */
  column: string;

  /**
   * Required. Type of the column.
   *
   * Must be a UTF-8 string with the maximum size of 128 bytes.
   *
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * Optional. Description of the column. Default value is an empty string.
   *
   * The description must be a UTF-8 string with the maximum size of 2000
   * bytes.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * Optional. A column's mode indicates whether values in this column are
   * required, nullable, or repeated.
   *
   * Only `NULLABLE`, `REQUIRED`, and `REPEATED` values are supported.
   * Default mode is `NULLABLE`.
   *
   * @generated from field: string mode = 3;
   */
  mode: string;

  /**
   * Optional. Default value for the column.
   *
   * @generated from field: string default_value = 8;
   */
  defaultValue: string;

  /**
   * Optional. Ordinal position
   *
   * @generated from field: int32 ordinal_position = 9;
   */
  ordinalPosition: number;

  /**
   * Optional. Most important inclusion of this column.
   *
   * @generated from field: google.cloud.datacatalog.v1.ColumnSchema.IndexingType highest_indexing_type = 10;
   */
  highestIndexingType: ColumnSchema_IndexingType;

  /**
   * Optional. Schema of sub-columns. A column can have zero or more
   * sub-columns.
   *
   * @generated from field: repeated google.cloud.datacatalog.v1.ColumnSchema subcolumns = 7;
   */
  subcolumns: ColumnSchema[];

  /**
   * Information only applying for columns in Entries from a specific system.
   *
   * @generated from oneof google.cloud.datacatalog.v1.ColumnSchema.system_spec
   */
  systemSpec: {
    /**
     * Looker specific column info of this column.
     *
     * @generated from field: google.cloud.datacatalog.v1.ColumnSchema.LookerColumnSpec looker_column_spec = 18;
     */
    value: ColumnSchema_LookerColumnSpec;
    case: "lookerColumnSpec";
  } | { case: undefined; value?: undefined };

  /**
   * Optional. The subtype of the RANGE, if the type of this field is RANGE. If
   * the type is RANGE, this field is required. Possible values for the field
   * element type of a RANGE include:
   * * DATE
   * * DATETIME
   * * TIMESTAMP
   *
   * @generated from field: google.cloud.datacatalog.v1.ColumnSchema.FieldElementType range_element_type = 19;
   */
  rangeElementType?: ColumnSchema_FieldElementType;

  /**
   * Optional. Garbage collection policy for the column or column family.
   * Applies to systems like Cloud Bigtable.
   *
   * @generated from field: string gc_rule = 11;
   */
  gcRule: string;
};

/**
 * Describes the message google.cloud.datacatalog.v1.ColumnSchema.
 * Use `create(ColumnSchemaSchema)` to create a new message.
 */
export const ColumnSchemaSchema: GenMessage<ColumnSchema> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_schema, 1);

/**
 * Column info specific to Looker System.
 *
 * @generated from message google.cloud.datacatalog.v1.ColumnSchema.LookerColumnSpec
 */
export type ColumnSchema_LookerColumnSpec = Message<"google.cloud.datacatalog.v1.ColumnSchema.LookerColumnSpec"> & {
  /**
   * Looker specific column type of this column.
   *
   * @generated from field: google.cloud.datacatalog.v1.ColumnSchema.LookerColumnSpec.LookerColumnType type = 1;
   */
  type: ColumnSchema_LookerColumnSpec_LookerColumnType;
};

/**
 * Describes the message google.cloud.datacatalog.v1.ColumnSchema.LookerColumnSpec.
 * Use `create(ColumnSchema_LookerColumnSpecSchema)` to create a new message.
 */
export const ColumnSchema_LookerColumnSpecSchema: GenMessage<ColumnSchema_LookerColumnSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_schema, 1, 0);

/**
 * Column type in Looker.
 *
 * @generated from enum google.cloud.datacatalog.v1.ColumnSchema.LookerColumnSpec.LookerColumnType
 */
export enum ColumnSchema_LookerColumnSpec_LookerColumnType {
  /**
   * Unspecified.
   *
   * @generated from enum value: LOOKER_COLUMN_TYPE_UNSPECIFIED = 0;
   */
  LOOKER_COLUMN_TYPE_UNSPECIFIED = 0,

  /**
   * Dimension.
   *
   * @generated from enum value: DIMENSION = 1;
   */
  DIMENSION = 1,

  /**
   * Dimension group - parent for Dimension.
   *
   * @generated from enum value: DIMENSION_GROUP = 2;
   */
  DIMENSION_GROUP = 2,

  /**
   * Filter.
   *
   * @generated from enum value: FILTER = 3;
   */
  FILTER = 3,

  /**
   * Measure.
   *
   * @generated from enum value: MEASURE = 4;
   */
  MEASURE = 4,

  /**
   * Parameter.
   *
   * @generated from enum value: PARAMETER = 5;
   */
  PARAMETER = 5,
}

/**
 * Describes the enum google.cloud.datacatalog.v1.ColumnSchema.LookerColumnSpec.LookerColumnType.
 */
export const ColumnSchema_LookerColumnSpec_LookerColumnTypeSchema: GenEnum<ColumnSchema_LookerColumnSpec_LookerColumnType> = /*@__PURE__*/
  enumDesc(file_google_cloud_datacatalog_v1_schema, 1, 0, 0);

/**
 * Represents the type of a field element.
 *
 * @generated from message google.cloud.datacatalog.v1.ColumnSchema.FieldElementType
 */
export type ColumnSchema_FieldElementType = Message<"google.cloud.datacatalog.v1.ColumnSchema.FieldElementType"> & {
  /**
   * Required. The type of a field element. See
   * [ColumnSchema.type][google.cloud.datacatalog.v1.ColumnSchema.type].
   *
   * @generated from field: string type = 1;
   */
  type: string;
};

/**
 * Describes the message google.cloud.datacatalog.v1.ColumnSchema.FieldElementType.
 * Use `create(ColumnSchema_FieldElementTypeSchema)` to create a new message.
 */
export const ColumnSchema_FieldElementTypeSchema: GenMessage<ColumnSchema_FieldElementType> = /*@__PURE__*/
  messageDesc(file_google_cloud_datacatalog_v1_schema, 1, 1);

/**
 * Specifies inclusion of the column in an index
 *
 * @generated from enum google.cloud.datacatalog.v1.ColumnSchema.IndexingType
 */
export enum ColumnSchema_IndexingType {
  /**
   * Unspecified.
   *
   * @generated from enum value: INDEXING_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Column not a part of an index.
   *
   * @generated from enum value: INDEXING_TYPE_NONE = 1;
   */
  NONE = 1,

  /**
   * Column Part of non unique index.
   *
   * @generated from enum value: INDEXING_TYPE_NON_UNIQUE = 2;
   */
  NON_UNIQUE = 2,

  /**
   * Column part of unique index.
   *
   * @generated from enum value: INDEXING_TYPE_UNIQUE = 3;
   */
  UNIQUE = 3,

  /**
   * Column part of the primary key.
   *
   * @generated from enum value: INDEXING_TYPE_PRIMARY_KEY = 4;
   */
  PRIMARY_KEY = 4,
}

/**
 * Describes the enum google.cloud.datacatalog.v1.ColumnSchema.IndexingType.
 */
export const ColumnSchema_IndexingTypeSchema: GenEnum<ColumnSchema_IndexingType> = /*@__PURE__*/
  enumDesc(file_google_cloud_datacatalog_v1_schema, 1, 0);
