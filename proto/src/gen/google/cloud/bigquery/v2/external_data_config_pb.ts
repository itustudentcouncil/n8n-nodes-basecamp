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
// @generated from file google/cloud/bigquery/v2/external_data_config.proto (package google.cloud.bigquery.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { DecimalTargetType } from "./decimal_target_types_pb";
import { file_google_cloud_bigquery_v2_decimal_target_types } from "./decimal_target_types_pb";
import type { FileSetSpecType } from "./file_set_specification_type_pb";
import { file_google_cloud_bigquery_v2_file_set_specification_type } from "./file_set_specification_type_pb";
import type { HivePartitioningOptions } from "./hive_partitioning_pb";
import { file_google_cloud_bigquery_v2_hive_partitioning } from "./hive_partitioning_pb";
import type { JsonExtension } from "./json_extension_pb";
import { file_google_cloud_bigquery_v2_json_extension } from "./json_extension_pb";
import type { MapTargetType } from "./map_target_type_pb";
import { file_google_cloud_bigquery_v2_map_target_type } from "./map_target_type_pb";
import type { TableSchema } from "./table_schema_pb";
import { file_google_cloud_bigquery_v2_table_schema } from "./table_schema_pb";
import { file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/bigquery/v2/external_data_config.proto.
 */
export const file_google_cloud_bigquery_v2_external_data_config: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvY2xvdWQvYmlncXVlcnkvdjIvZXh0ZXJuYWxfZGF0YV9jb25maWcucHJvdG8SGGdvb2dsZS5jbG91ZC5iaWdxdWVyeS52MiJOCgtBdnJvT3B0aW9ucxI/ChZ1c2VfYXZyb19sb2dpY2FsX3R5cGVzGAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLkJvb2xWYWx1ZUID4EEBItABCg5QYXJxdWV0T3B0aW9ucxI3Cg5lbnVtX2FzX3N0cmluZxgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWVCA+BBARI+ChVlbmFibGVfbGlzdF9pbmZlcmVuY2UYAiABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlQgPgQQESRQoPbWFwX3RhcmdldF90eXBlGAMgASgOMicuZ29vZ2xlLmNsb3VkLmJpZ3F1ZXJ5LnYyLk1hcFRhcmdldFR5cGVCA+BBASKwAwoKQ3N2T3B0aW9ucxIcCg9maWVsZF9kZWxpbWl0ZXIYASABKAlCA+BBARI7ChFza2lwX2xlYWRpbmdfcm93cxgCIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQ2NFZhbHVlQgPgQQESMAoFcXVvdGUYAyABKAsyHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWVCA+BBARI+ChVhbGxvd19xdW90ZWRfbmV3bGluZXMYBCABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlQgPgQQESOgoRYWxsb3dfamFnZ2VkX3Jvd3MYBSABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlQgPgQQESFQoIZW5jb2RpbmcYBiABKAlCA+BBARJKCiFwcmVzZXJ2ZV9hc2NpaV9jb250cm9sX2NoYXJhY3RlcnMYByABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlQgPgQQESNgoLbnVsbF9tYXJrZXIYCCABKAsyHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWVCA+BBASIkCgtKc29uT3B0aW9ucxIVCghlbmNvZGluZxgBIAEoCUID4EEBIv4BCg5CaWd0YWJsZUNvbHVtbhI2ChFxdWFsaWZpZXJfZW5jb2RlZBgBIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5CeXRlc1ZhbHVlEjYKEHF1YWxpZmllcl9zdHJpbmcYAiABKAsyHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWUSFwoKZmllbGRfbmFtZRgDIAEoCUID4EEBEhEKBHR5cGUYBCABKAlCA+BBARIVCghlbmNvZGluZxgFIAEoCUID4EEBEjkKEG9ubHlfcmVhZF9sYXRlc3QYBiABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlQgPgQQEizgEKFEJpZ3RhYmxlQ29sdW1uRmFtaWx5EhEKCWZhbWlseV9pZBgBIAEoCRIRCgR0eXBlGAIgASgJQgPgQQESFQoIZW5jb2RpbmcYAyABKAlCA+BBARI+Cgdjb2x1bW5zGAQgAygLMiguZ29vZ2xlLmNsb3VkLmJpZ3F1ZXJ5LnYyLkJpZ3RhYmxlQ29sdW1uQgPgQQESOQoQb25seV9yZWFkX2xhdGVzdBgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWVCA+BBASK1AgoPQmlndGFibGVPcHRpb25zEkwKD2NvbHVtbl9mYW1pbGllcxgBIAMoCzIuLmdvb2dsZS5jbG91ZC5iaWdxdWVyeS52Mi5CaWd0YWJsZUNvbHVtbkZhbWlseUID4EEBEksKImlnbm9yZV91bnNwZWNpZmllZF9jb2x1bW5fZmFtaWxpZXMYAiABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlQgPgQQESPgoVcmVhZF9yb3drZXlfYXNfc3RyaW5nGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLkJvb2xWYWx1ZUID4EEBEkcKHm91dHB1dF9jb2x1bW5fZmFtaWxpZXNfYXNfanNvbhgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWVCA+BBASJmChNHb29nbGVTaGVldHNPcHRpb25zEjsKEXNraXBfbGVhZGluZ19yb3dzGAEgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkludDY0VmFsdWVCA+BBARISCgVyYW5nZRgCIAEoCUID4EEBIpIMChlFeHRlcm5hbERhdGFDb25maWd1cmF0aW9uEhMKC3NvdXJjZV91cmlzGAEgAygJEkoKEmZpbGVfc2V0X3NwZWNfdHlwZRgZIAEoDjIpLmdvb2dsZS5jbG91ZC5iaWdxdWVyeS52Mi5GaWxlU2V0U3BlY1R5cGVCA+BBARI6CgZzY2hlbWEYAiABKAsyJS5nb29nbGUuY2xvdWQuYmlncXVlcnkudjIuVGFibGVTY2hlbWFCA+BBARIVCg1zb3VyY2VfZm9ybWF0GAMgASgJEjkKD21heF9iYWRfcmVjb3JkcxgEIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlQgPgQQESLgoKYXV0b2RldGVjdBgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWUSPgoVaWdub3JlX3Vua25vd25fdmFsdWVzGAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLkJvb2xWYWx1ZUID4EEBEhgKC2NvbXByZXNzaW9uGAcgASgJQgPgQQESPgoLY3N2X29wdGlvbnMYCCABKAsyJC5nb29nbGUuY2xvdWQuYmlncXVlcnkudjIuQ3N2T3B0aW9uc0ID4EEBEkAKDGpzb25fb3B0aW9ucxgaIAEoCzIlLmdvb2dsZS5jbG91ZC5iaWdxdWVyeS52Mi5Kc29uT3B0aW9uc0ID4EEBEkgKEGJpZ3RhYmxlX29wdGlvbnMYCSABKAsyKS5nb29nbGUuY2xvdWQuYmlncXVlcnkudjIuQmlndGFibGVPcHRpb25zQgPgQQESUQoVZ29vZ2xlX3NoZWV0c19vcHRpb25zGAogASgLMi0uZ29vZ2xlLmNsb3VkLmJpZ3F1ZXJ5LnYyLkdvb2dsZVNoZWV0c09wdGlvbnNCA+BBARJZChloaXZlX3BhcnRpdGlvbmluZ19vcHRpb25zGA0gASgLMjEuZ29vZ2xlLmNsb3VkLmJpZ3F1ZXJ5LnYyLkhpdmVQYXJ0aXRpb25pbmdPcHRpb25zQgPgQQESGgoNY29ubmVjdGlvbl9pZBgOIAEoCUID4EEBEkkKFGRlY2ltYWxfdGFyZ2V0X3R5cGVzGBAgAygOMisuZ29vZ2xlLmNsb3VkLmJpZ3F1ZXJ5LnYyLkRlY2ltYWxUYXJnZXRUeXBlEkAKDGF2cm9fb3B0aW9ucxgRIAEoCzIlLmdvb2dsZS5jbG91ZC5iaWdxdWVyeS52Mi5BdnJvT3B0aW9uc0ID4EEBEkQKDmpzb25fZXh0ZW5zaW9uGBIgASgOMicuZ29vZ2xlLmNsb3VkLmJpZ3F1ZXJ5LnYyLkpzb25FeHRlbnNpb25CA+BBARJGCg9wYXJxdWV0X29wdGlvbnMYEyABKAsyKC5nb29nbGUuY2xvdWQuYmlncXVlcnkudjIuUGFycXVldE9wdGlvbnNCA+BBARJlCg9vYmplY3RfbWV0YWRhdGEYFiABKA4yQi5nb29nbGUuY2xvdWQuYmlncXVlcnkudjIuRXh0ZXJuYWxEYXRhQ29uZmlndXJhdGlvbi5PYmplY3RNZXRhZGF0YUID4EEBSACIAQESRAoZcmVmZXJlbmNlX2ZpbGVfc2NoZW1hX3VyaRgXIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZUID4EEBEmcKE21ldGFkYXRhX2NhY2hlX21vZGUYGCABKA4yRS5nb29nbGUuY2xvdWQuYmlncXVlcnkudjIuRXh0ZXJuYWxEYXRhQ29uZmlndXJhdGlvbi5NZXRhZGF0YUNhY2hlTW9kZUID4EEBIkwKDk9iamVjdE1ldGFkYXRhEh8KG09CSkVDVF9NRVRBREFUQV9VTlNQRUNJRklFRBAAEg0KCURJUkVDVE9SWRABEgoKBlNJTVBMRRACIlMKEU1ldGFkYXRhQ2FjaGVNb2RlEiMKH01FVEFEQVRBX0NBQ0hFX01PREVfVU5TUEVDSUZJRUQQABINCglBVVRPTUFUSUMQARIKCgZNQU5VQUwQAkISChBfb2JqZWN0X21ldGFkYXRhQnEKHGNvbS5nb29nbGUuY2xvdWQuYmlncXVlcnkudjJCF0V4dGVybmFsRGF0YUNvbmZpZ1Byb3RvWjhjbG91ZC5nb29nbGUuY29tL2dvL2JpZ3F1ZXJ5L2FwaXYyL2JpZ3F1ZXJ5cGI7YmlncXVlcnlwYmIGcHJvdG8z", [file_google_api_field_behavior, file_google_cloud_bigquery_v2_decimal_target_types, file_google_cloud_bigquery_v2_file_set_specification_type, file_google_cloud_bigquery_v2_hive_partitioning, file_google_cloud_bigquery_v2_json_extension, file_google_cloud_bigquery_v2_map_target_type, file_google_cloud_bigquery_v2_table_schema, file_google_protobuf_wrappers]);

/**
 * Options for external data sources.
 *
 * @generated from message google.cloud.bigquery.v2.AvroOptions
 */
export type AvroOptions = Message<"google.cloud.bigquery.v2.AvroOptions"> & {
  /**
   * Optional. If sourceFormat is set to "AVRO", indicates whether to interpret
   * logical types as the corresponding BigQuery data type (for example,
   * TIMESTAMP), instead of using the raw type (for example, INTEGER).
   *
   * @generated from field: google.protobuf.BoolValue use_avro_logical_types = 1;
   */
  useAvroLogicalTypes?: boolean;
};

/**
 * Describes the message google.cloud.bigquery.v2.AvroOptions.
 * Use `create(AvroOptionsSchema)` to create a new message.
 */
export const AvroOptionsSchema: GenMessage<AvroOptions> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_v2_external_data_config, 0);

/**
 * Parquet Options for load and make external tables.
 *
 * @generated from message google.cloud.bigquery.v2.ParquetOptions
 */
export type ParquetOptions = Message<"google.cloud.bigquery.v2.ParquetOptions"> & {
  /**
   * Optional. Indicates whether to infer Parquet ENUM logical type as STRING
   * instead of BYTES by default.
   *
   * @generated from field: google.protobuf.BoolValue enum_as_string = 1;
   */
  enumAsString?: boolean;

  /**
   * Optional. Indicates whether to use schema inference specifically for
   * Parquet LIST logical type.
   *
   * @generated from field: google.protobuf.BoolValue enable_list_inference = 2;
   */
  enableListInference?: boolean;

  /**
   * Optional. Indicates how to represent a Parquet map if present.
   *
   * @generated from field: google.cloud.bigquery.v2.MapTargetType map_target_type = 3;
   */
  mapTargetType: MapTargetType;
};

/**
 * Describes the message google.cloud.bigquery.v2.ParquetOptions.
 * Use `create(ParquetOptionsSchema)` to create a new message.
 */
export const ParquetOptionsSchema: GenMessage<ParquetOptions> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_v2_external_data_config, 1);

/**
 * Information related to a CSV data source.
 *
 * @generated from message google.cloud.bigquery.v2.CsvOptions
 */
export type CsvOptions = Message<"google.cloud.bigquery.v2.CsvOptions"> & {
  /**
   * Optional. The separator character for fields in a CSV file. The separator
   * is interpreted as a single byte. For files encoded in ISO-8859-1, any
   * single character can be used as a separator. For files encoded in UTF-8,
   * characters represented in decimal range 1-127 (U+0001-U+007F) can be used
   * without any modification. UTF-8 characters encoded with multiple bytes
   * (i.e. U+0080 and above) will have only the first byte used for separating
   * fields. The remaining bytes will be treated as a part of the field.
   * BigQuery also supports the escape sequence "\t" (U+0009) to specify a tab
   * separator. The default value is comma (",", U+002C).
   *
   * @generated from field: string field_delimiter = 1;
   */
  fieldDelimiter: string;

  /**
   * Optional. The number of rows at the top of a CSV file that BigQuery will
   * skip when reading the data. The default value is 0. This property is
   * useful if you have header rows in the file that should be skipped.
   * When autodetect is on, the behavior is the following:
   *
   * * skipLeadingRows unspecified - Autodetect tries to detect headers in the
   *   first row. If they are not detected, the row is read as data. Otherwise
   *   data is read starting from the second row.
   * * skipLeadingRows is 0 - Instructs autodetect that there are no headers and
   *   data should be read starting from the first row.
   * * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect
   *   headers in row N. If headers are not detected, row N is just skipped.
   *   Otherwise row N is used to extract column names for the detected schema.
   *
   * @generated from field: google.protobuf.Int64Value skip_leading_rows = 2;
   */
  skipLeadingRows?: bigint;

  /**
   * Optional. The value that is used to quote data sections in a CSV file.
   * BigQuery converts the string to ISO-8859-1 encoding, and then uses the
   * first byte of the encoded string to split the data in its raw, binary
   * state.
   * The default value is a double-quote (").
   * If your data does not contain quoted sections,
   * set the property value to an empty string.
   * If your data contains quoted newline characters, you must also set the
   * allowQuotedNewlines property to true.
   * To include the specific quote character within a quoted value, precede it
   * with an additional matching quote character. For example, if you want to
   * escape the default character  ' " ', use ' "" '.
   *
   * @generated from field: google.protobuf.StringValue quote = 3;
   */
  quote?: string;

  /**
   * Optional. Indicates if BigQuery should allow quoted data sections that
   * contain newline characters in a CSV file. The default value is false.
   *
   * @generated from field: google.protobuf.BoolValue allow_quoted_newlines = 4;
   */
  allowQuotedNewlines?: boolean;

  /**
   * Optional. Indicates if BigQuery should accept rows that are missing
   * trailing optional columns. If true, BigQuery treats missing trailing
   * columns as null values.
   * If false, records with missing trailing columns are treated as bad records,
   * and if there are too many bad records, an invalid error is returned in the
   * job result. The default value is false.
   *
   * @generated from field: google.protobuf.BoolValue allow_jagged_rows = 5;
   */
  allowJaggedRows?: boolean;

  /**
   * Optional. The character encoding of the data.
   * The supported values are UTF-8, ISO-8859-1, UTF-16BE, UTF-16LE, UTF-32BE,
   * and UTF-32LE.  The default value is UTF-8.
   * BigQuery decodes the data after the raw, binary data has been split using
   * the values of the quote and fieldDelimiter properties.
   *
   * @generated from field: string encoding = 6;
   */
  encoding: string;

  /**
   * Optional. Indicates if the embedded ASCII control characters (the first 32
   * characters in the ASCII-table, from '\x00' to '\x1F') are preserved.
   *
   * @generated from field: google.protobuf.BoolValue preserve_ascii_control_characters = 7;
   */
  preserveAsciiControlCharacters?: boolean;

  /**
   * Optional. Specifies a string that represents a null value in a CSV file.
   * For example, if you specify "\N", BigQuery interprets "\N" as a null value
   * when querying a CSV file.
   * The default value is the empty string. If you set this property to a custom
   * value, BigQuery throws an error if an empty string is present for all data
   * types except for STRING and BYTE. For STRING and BYTE columns, BigQuery
   * interprets the empty string as an empty value.
   *
   * @generated from field: google.protobuf.StringValue null_marker = 8;
   */
  nullMarker?: string;
};

/**
 * Describes the message google.cloud.bigquery.v2.CsvOptions.
 * Use `create(CsvOptionsSchema)` to create a new message.
 */
export const CsvOptionsSchema: GenMessage<CsvOptions> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_v2_external_data_config, 2);

/**
 * Json Options for load and make external tables.
 *
 * @generated from message google.cloud.bigquery.v2.JsonOptions
 */
export type JsonOptions = Message<"google.cloud.bigquery.v2.JsonOptions"> & {
  /**
   * Optional. The character encoding of the data.
   * The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE,
   * and UTF-32LE.  The default value is UTF-8.
   *
   * @generated from field: string encoding = 1;
   */
  encoding: string;
};

/**
 * Describes the message google.cloud.bigquery.v2.JsonOptions.
 * Use `create(JsonOptionsSchema)` to create a new message.
 */
export const JsonOptionsSchema: GenMessage<JsonOptions> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_v2_external_data_config, 3);

/**
 * Information related to a Bigtable column.
 *
 * @generated from message google.cloud.bigquery.v2.BigtableColumn
 */
export type BigtableColumn = Message<"google.cloud.bigquery.v2.BigtableColumn"> & {
  /**
   * [Required] Qualifier of the column.
   * Columns in the parent column family that has this exact qualifier are
   * exposed as `<family field name>.<column field name>` field.
   * If the qualifier is valid UTF-8 string, it can be specified in the
   * qualifier_string field.  Otherwise, a base-64 encoded value must be set to
   * qualifier_encoded.
   * The column field name is the same as the column qualifier. However, if the
   * qualifier is not a valid BigQuery field identifier i.e. does not match
   * [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as field_name.
   *
   * @generated from field: google.protobuf.BytesValue qualifier_encoded = 1;
   */
  qualifierEncoded?: Uint8Array;

  /**
   * Qualifier string.
   *
   * @generated from field: google.protobuf.StringValue qualifier_string = 2;
   */
  qualifierString?: string;

  /**
   * Optional. If the qualifier is not a valid BigQuery field identifier i.e.
   * does not match [a-zA-Z][a-zA-Z0-9_]*,  a valid identifier must be provided
   * as the column field name and is used as field name in queries.
   *
   * @generated from field: string field_name = 3;
   */
  fieldName: string;

  /**
   * Optional. The type to convert the value in cells of this column.
   * The values are expected to be encoded using HBase Bytes.toBytes function
   * when using the BINARY encoding value.
   * Following BigQuery types are allowed (case-sensitive):
   *
   * * BYTES
   * * STRING
   * * INTEGER
   * * FLOAT
   * * BOOLEAN
   * * JSON
   *
   * Default type is BYTES.
   * 'type' can also be set at the column family level. However, the setting at
   * this level takes precedence if 'type' is set at both levels.
   *
   * @generated from field: string type = 4;
   */
  type: string;

  /**
   * Optional. The encoding of the values when the type is not STRING.
   * Acceptable encoding values are:
   *   TEXT - indicates values are alphanumeric text strings.
   *   BINARY - indicates values are encoded using HBase Bytes.toBytes family of
   *            functions.
   * 'encoding' can also be set at the column family level. However, the setting
   * at this level takes precedence if 'encoding' is set at both levels.
   *
   * @generated from field: string encoding = 5;
   */
  encoding: string;

  /**
   * Optional. If this is set, only the latest version of value in this column
   *             are exposed.
   * 'onlyReadLatest' can also be set at the column family level. However, the
   * setting at this level takes precedence if 'onlyReadLatest' is set at both
   * levels.
   *
   * @generated from field: google.protobuf.BoolValue only_read_latest = 6;
   */
  onlyReadLatest?: boolean;
};

/**
 * Describes the message google.cloud.bigquery.v2.BigtableColumn.
 * Use `create(BigtableColumnSchema)` to create a new message.
 */
export const BigtableColumnSchema: GenMessage<BigtableColumn> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_v2_external_data_config, 4);

/**
 * Information related to a Bigtable column family.
 *
 * @generated from message google.cloud.bigquery.v2.BigtableColumnFamily
 */
export type BigtableColumnFamily = Message<"google.cloud.bigquery.v2.BigtableColumnFamily"> & {
  /**
   * Identifier of the column family.
   *
   * @generated from field: string family_id = 1;
   */
  familyId: string;

  /**
   * Optional. The type to convert the value in cells of this column family.
   * The values are expected to be encoded using HBase Bytes.toBytes function
   * when using the BINARY encoding value.
   * Following BigQuery types are allowed (case-sensitive):
   *
   * * BYTES
   * * STRING
   * * INTEGER
   * * FLOAT
   * * BOOLEAN
   * * JSON
   *
   * Default type is BYTES.
   * This can be overridden for a specific column by listing that column in
   * 'columns' and specifying a type for it.
   *
   * @generated from field: string type = 2;
   */
  type: string;

  /**
   * Optional. The encoding of the values when the type is not STRING.
   * Acceptable encoding values are:
   *   TEXT - indicates values are alphanumeric text strings.
   *   BINARY - indicates values are encoded using HBase Bytes.toBytes family of
   *            functions.
   * This can be overridden for a specific column by listing that column in
   * 'columns' and specifying an encoding for it.
   *
   * @generated from field: string encoding = 3;
   */
  encoding: string;

  /**
   * Optional. Lists of columns that should be exposed as individual fields as
   * opposed to a list of (column name, value) pairs.
   * All columns whose qualifier matches a qualifier in this list can be
   * accessed as `<family field name>.<column field name>`.
   * Other columns can be accessed as a list through
   * the `<family field name>.Column` field.
   *
   * @generated from field: repeated google.cloud.bigquery.v2.BigtableColumn columns = 4;
   */
  columns: BigtableColumn[];

  /**
   * Optional. If this is set only the latest version of value are exposed for
   * all columns in this column family.
   * This can be overridden for a specific column by listing that column in
   * 'columns' and specifying a different setting
   * for that column.
   *
   * @generated from field: google.protobuf.BoolValue only_read_latest = 5;
   */
  onlyReadLatest?: boolean;
};

/**
 * Describes the message google.cloud.bigquery.v2.BigtableColumnFamily.
 * Use `create(BigtableColumnFamilySchema)` to create a new message.
 */
export const BigtableColumnFamilySchema: GenMessage<BigtableColumnFamily> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_v2_external_data_config, 5);

/**
 * Options specific to Google Cloud Bigtable data sources.
 *
 * @generated from message google.cloud.bigquery.v2.BigtableOptions
 */
export type BigtableOptions = Message<"google.cloud.bigquery.v2.BigtableOptions"> & {
  /**
   * Optional. List of column families to expose in the table schema along with
   * their types.
   * This list restricts the column families that can be referenced in queries
   * and specifies their value types.
   * You can use this list to do type conversions - see the 'type' field for
   * more details.
   * If you leave this list empty, all column families are present in the table
   * schema and their values are read as BYTES.
   * During a query only the column families referenced in that query are read
   * from Bigtable.
   *
   * @generated from field: repeated google.cloud.bigquery.v2.BigtableColumnFamily column_families = 1;
   */
  columnFamilies: BigtableColumnFamily[];

  /**
   * Optional. If field is true, then the column families that are not
   * specified in columnFamilies list are not exposed in the table schema.
   * Otherwise, they are read with BYTES type values.
   * The default value is false.
   *
   * @generated from field: google.protobuf.BoolValue ignore_unspecified_column_families = 2;
   */
  ignoreUnspecifiedColumnFamilies?: boolean;

  /**
   * Optional. If field is true, then the rowkey column families will be read
   * and converted to string. Otherwise they are read with BYTES type values and
   * users need to manually cast them with CAST if necessary.
   * The default value is false.
   *
   * @generated from field: google.protobuf.BoolValue read_rowkey_as_string = 3;
   */
  readRowkeyAsString?: boolean;

  /**
   * Optional. If field is true, then each column family will be read as a
   * single JSON column. Otherwise they are read as a repeated cell structure
   * containing timestamp/value tuples. The default value is false.
   *
   * @generated from field: google.protobuf.BoolValue output_column_families_as_json = 4;
   */
  outputColumnFamiliesAsJson?: boolean;
};

/**
 * Describes the message google.cloud.bigquery.v2.BigtableOptions.
 * Use `create(BigtableOptionsSchema)` to create a new message.
 */
export const BigtableOptionsSchema: GenMessage<BigtableOptions> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_v2_external_data_config, 6);

/**
 * Options specific to Google Sheets data sources.
 *
 * @generated from message google.cloud.bigquery.v2.GoogleSheetsOptions
 */
export type GoogleSheetsOptions = Message<"google.cloud.bigquery.v2.GoogleSheetsOptions"> & {
  /**
   * Optional. The number of rows at the top of a sheet that BigQuery will skip
   * when reading the data. The default value is 0. This property is useful if
   * you have header rows that should be skipped. When autodetect is on,
   * the behavior is the following:
   * * skipLeadingRows unspecified - Autodetect tries to detect headers in the
   *   first row. If they are not detected, the row is read as data. Otherwise
   *   data is read starting from the second row.
   * * skipLeadingRows is 0 - Instructs autodetect that there are no headers and
   *   data should be read starting from the first row.
   * * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect
   *   headers in row N. If headers are not detected, row N is just skipped.
   *   Otherwise row N is used to extract column names for the detected schema.
   *
   * @generated from field: google.protobuf.Int64Value skip_leading_rows = 1;
   */
  skipLeadingRows?: bigint;

  /**
   * Optional. Range of a sheet to query from. Only used when non-empty.
   * Typical format: sheet_name!top_left_cell_id:bottom_right_cell_id
   * For example: sheet1!A1:B20
   *
   * @generated from field: string range = 2;
   */
  range: string;
};

/**
 * Describes the message google.cloud.bigquery.v2.GoogleSheetsOptions.
 * Use `create(GoogleSheetsOptionsSchema)` to create a new message.
 */
export const GoogleSheetsOptionsSchema: GenMessage<GoogleSheetsOptions> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_v2_external_data_config, 7);

/**
 * @generated from message google.cloud.bigquery.v2.ExternalDataConfiguration
 */
export type ExternalDataConfiguration = Message<"google.cloud.bigquery.v2.ExternalDataConfiguration"> & {
  /**
   * [Required] The fully-qualified URIs that point to your data in Google
   * Cloud. For Google Cloud Storage URIs:
   *   Each URI can contain one '*' wildcard character and it must come after
   *   the 'bucket' name.
   *   Size limits related to load jobs apply to external data sources.
   * For Google Cloud Bigtable URIs:
   *   Exactly one URI can be specified and it has be a fully specified and
   *   valid HTTPS URL for a Google Cloud Bigtable table.
   * For Google Cloud Datastore backups, exactly one URI can be specified. Also,
   * the '*' wildcard character is not allowed.
   *
   * @generated from field: repeated string source_uris = 1;
   */
  sourceUris: string[];

  /**
   * Optional. Specifies how source URIs are interpreted for constructing the
   * file set to load.  By default source URIs are expanded against the
   * underlying storage.  Other options include specifying manifest files. Only
   * applicable to object storage systems.
   *
   * @generated from field: google.cloud.bigquery.v2.FileSetSpecType file_set_spec_type = 25;
   */
  fileSetSpecType: FileSetSpecType;

  /**
   * Optional. The schema for the data.
   * Schema is required for CSV and JSON formats if autodetect is not on.
   * Schema is disallowed for Google Cloud Bigtable, Cloud Datastore backups,
   * Avro, ORC and Parquet formats.
   *
   * @generated from field: google.cloud.bigquery.v2.TableSchema schema = 2;
   */
  schema?: TableSchema;

  /**
   * [Required] The data format.
   * For CSV files, specify "CSV".
   * For Google sheets, specify "GOOGLE_SHEETS".
   * For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON".
   * For Avro files, specify "AVRO".
   * For Google Cloud Datastore backups, specify "DATASTORE_BACKUP".
   * For Apache Iceberg tables, specify "ICEBERG".
   * For ORC files, specify "ORC".
   * For Parquet files, specify "PARQUET".
   * [Beta] For Google Cloud Bigtable, specify "BIGTABLE".
   *
   * @generated from field: string source_format = 3;
   */
  sourceFormat: string;

  /**
   * Optional. The maximum number of bad records that BigQuery can ignore when
   * reading data. If the number of bad records exceeds this value, an invalid
   * error is returned in the job result. The default value is 0, which requires
   * that all records are valid. This setting is ignored for Google Cloud
   * Bigtable, Google Cloud Datastore backups, Avro, ORC and Parquet formats.
   *
   * @generated from field: google.protobuf.Int32Value max_bad_records = 4;
   */
  maxBadRecords?: number;

  /**
   * Try to detect schema and format options automatically.
   * Any option specified explicitly will be honored.
   *
   * @generated from field: google.protobuf.BoolValue autodetect = 5;
   */
  autodetect?: boolean;

  /**
   * Optional. Indicates if BigQuery should allow extra values that are not
   * represented in the table schema.
   * If true, the extra values are ignored.
   * If false, records with extra columns are treated as bad records, and if
   * there are too many bad records, an invalid error is returned in the job
   * result.
   * The default value is false.
   * The sourceFormat property determines what BigQuery treats as an extra
   * value:
   *   CSV: Trailing columns
   *   JSON: Named values that don't match any column names
   *   Google Cloud Bigtable: This setting is ignored.
   *   Google Cloud Datastore backups: This setting is ignored.
   *   Avro: This setting is ignored.
   *   ORC: This setting is ignored.
   *   Parquet: This setting is ignored.
   *
   * @generated from field: google.protobuf.BoolValue ignore_unknown_values = 6;
   */
  ignoreUnknownValues?: boolean;

  /**
   * Optional. The compression type of the data source.
   * Possible values include GZIP and NONE. The default value is NONE.
   * This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore
   * backups, Avro, ORC and Parquet
   * formats. An empty string is an invalid value.
   *
   * @generated from field: string compression = 7;
   */
  compression: string;

  /**
   * Optional. Additional properties to set if sourceFormat is set to CSV.
   *
   * @generated from field: google.cloud.bigquery.v2.CsvOptions csv_options = 8;
   */
  csvOptions?: CsvOptions;

  /**
   * Optional. Additional properties to set if sourceFormat is set to JSON.
   *
   * @generated from field: google.cloud.bigquery.v2.JsonOptions json_options = 26;
   */
  jsonOptions?: JsonOptions;

  /**
   * Optional. Additional options if sourceFormat is set to BIGTABLE.
   *
   * @generated from field: google.cloud.bigquery.v2.BigtableOptions bigtable_options = 9;
   */
  bigtableOptions?: BigtableOptions;

  /**
   * Optional. Additional options if sourceFormat is set to GOOGLE_SHEETS.
   *
   * @generated from field: google.cloud.bigquery.v2.GoogleSheetsOptions google_sheets_options = 10;
   */
  googleSheetsOptions?: GoogleSheetsOptions;

  /**
   * Optional. When set, configures hive partitioning support. Not all storage
   * formats support hive partitioning -- requesting hive partitioning on an
   * unsupported format will lead to an error, as will providing an invalid
   * specification.
   *
   * @generated from field: google.cloud.bigquery.v2.HivePartitioningOptions hive_partitioning_options = 13;
   */
  hivePartitioningOptions?: HivePartitioningOptions;

  /**
   * Optional. The connection specifying the credentials to be used to read
   * external storage, such as Azure Blob, Cloud Storage, or S3. The
   * connection_id can have the form
   * `{project_id}.{location_id};{connection_id}` or
   * `projects/{project_id}/locations/{location_id}/connections/{connection_id}`.
   *
   * @generated from field: string connection_id = 14;
   */
  connectionId: string;

  /**
   * Defines the list of possible SQL data types to which the source decimal
   * values are converted. This list and the precision and the scale parameters
   * of the decimal field determine the target type. In the order of NUMERIC,
   * BIGNUMERIC, and STRING, a
   * type is picked if it is in the specified list and if it supports the
   * precision and the scale. STRING supports all precision and scale values.
   * If none of the listed types supports the precision and the scale, the type
   * supporting the widest range in the specified list is picked, and if a value
   * exceeds the supported range when reading the data, an error will be thrown.
   *
   * Example: Suppose the value of this field is ["NUMERIC", "BIGNUMERIC"].
   * If (precision,scale) is:
   *
   * * (38,9) -> NUMERIC;
   * * (39,9) -> BIGNUMERIC (NUMERIC cannot hold 30 integer digits);
   * * (38,10) -> BIGNUMERIC (NUMERIC cannot hold 10 fractional digits);
   * * (76,38) -> BIGNUMERIC;
   * * (77,38) -> BIGNUMERIC (error if value exeeds supported range).
   *
   * This field cannot contain duplicate types. The order of the types in this
   * field is ignored. For example, ["BIGNUMERIC", "NUMERIC"] is the same as
   * ["NUMERIC", "BIGNUMERIC"] and NUMERIC always takes precedence over
   * BIGNUMERIC.
   *
   * Defaults to ["NUMERIC", "STRING"] for ORC and ["NUMERIC"] for the other
   * file formats.
   *
   * @generated from field: repeated google.cloud.bigquery.v2.DecimalTargetType decimal_target_types = 16;
   */
  decimalTargetTypes: DecimalTargetType[];

  /**
   * Optional. Additional properties to set if sourceFormat is set to AVRO.
   *
   * @generated from field: google.cloud.bigquery.v2.AvroOptions avro_options = 17;
   */
  avroOptions?: AvroOptions;

  /**
   * Optional. Load option to be used together with source_format
   * newline-delimited JSON to indicate that a variant of JSON is being loaded.
   * To load newline-delimited GeoJSON, specify GEOJSON (and source_format must
   * be set to NEWLINE_DELIMITED_JSON).
   *
   * @generated from field: google.cloud.bigquery.v2.JsonExtension json_extension = 18;
   */
  jsonExtension: JsonExtension;

  /**
   * Optional. Additional properties to set if sourceFormat is set to PARQUET.
   *
   * @generated from field: google.cloud.bigquery.v2.ParquetOptions parquet_options = 19;
   */
  parquetOptions?: ParquetOptions;

  /**
   * Optional. ObjectMetadata is used to create Object Tables. Object Tables
   * contain a listing of objects (with their metadata) found at the
   * source_uris. If ObjectMetadata is set, source_format should be omitted.
   *
   * Currently SIMPLE is the only supported Object Metadata type.
   *
   * @generated from field: optional google.cloud.bigquery.v2.ExternalDataConfiguration.ObjectMetadata object_metadata = 22;
   */
  objectMetadata?: ExternalDataConfiguration_ObjectMetadata;

  /**
   * Optional. When creating an external table, the user can provide a reference
   * file with the table schema. This is enabled for the following formats:
   * AVRO, PARQUET, ORC.
   *
   * @generated from field: google.protobuf.StringValue reference_file_schema_uri = 23;
   */
  referenceFileSchemaUri?: string;

  /**
   * Optional. Metadata Cache Mode for the table. Set this to enable caching of
   * metadata from external data source.
   *
   * @generated from field: google.cloud.bigquery.v2.ExternalDataConfiguration.MetadataCacheMode metadata_cache_mode = 24;
   */
  metadataCacheMode: ExternalDataConfiguration_MetadataCacheMode;
};

/**
 * Describes the message google.cloud.bigquery.v2.ExternalDataConfiguration.
 * Use `create(ExternalDataConfigurationSchema)` to create a new message.
 */
export const ExternalDataConfigurationSchema: GenMessage<ExternalDataConfiguration> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_v2_external_data_config, 8);

/**
 * Supported Object Metadata Types.
 *
 * @generated from enum google.cloud.bigquery.v2.ExternalDataConfiguration.ObjectMetadata
 */
export enum ExternalDataConfiguration_ObjectMetadata {
  /**
   * Unspecified by default.
   *
   * @generated from enum value: OBJECT_METADATA_UNSPECIFIED = 0;
   */
  OBJECT_METADATA_UNSPECIFIED = 0,

  /**
   * A synonym for `SIMPLE`.
   *
   * @generated from enum value: DIRECTORY = 1;
   */
  DIRECTORY = 1,

  /**
   * Directory listing of objects.
   *
   * @generated from enum value: SIMPLE = 2;
   */
  SIMPLE = 2,
}

/**
 * Describes the enum google.cloud.bigquery.v2.ExternalDataConfiguration.ObjectMetadata.
 */
export const ExternalDataConfiguration_ObjectMetadataSchema: GenEnum<ExternalDataConfiguration_ObjectMetadata> = /*@__PURE__*/
  enumDesc(file_google_cloud_bigquery_v2_external_data_config, 8, 0);

/**
 * MetadataCacheMode identifies if the table should use metadata caching for
 * files from external source (eg Google Cloud Storage).
 *
 * @generated from enum google.cloud.bigquery.v2.ExternalDataConfiguration.MetadataCacheMode
 */
export enum ExternalDataConfiguration_MetadataCacheMode {
  /**
   * Unspecified metadata cache mode.
   *
   * @generated from enum value: METADATA_CACHE_MODE_UNSPECIFIED = 0;
   */
  METADATA_CACHE_MODE_UNSPECIFIED = 0,

  /**
   * Set this mode to trigger automatic background refresh of metadata cache
   * from the external source. Queries will use the latest available cache
   * version within the table's maxStaleness interval.
   *
   * @generated from enum value: AUTOMATIC = 1;
   */
  AUTOMATIC = 1,

  /**
   * Set this mode to enable triggering manual refresh of the metadata cache
   * from external source. Queries will use the latest manually triggered
   * cache version within the table's maxStaleness interval.
   *
   * @generated from enum value: MANUAL = 2;
   */
  MANUAL = 2,
}

/**
 * Describes the enum google.cloud.bigquery.v2.ExternalDataConfiguration.MetadataCacheMode.
 */
export const ExternalDataConfiguration_MetadataCacheModeSchema: GenEnum<ExternalDataConfiguration_MetadataCacheMode> = /*@__PURE__*/
  enumDesc(file_google_cloud_bigquery_v2_external_data_config, 8, 1);
