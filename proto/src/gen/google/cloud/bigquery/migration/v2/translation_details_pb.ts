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
// @generated from file google/cloud/bigquery/migration/v2/translation_details.proto (package google.cloud.bigquery.migration.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/bigquery/migration/v2/translation_details.proto.
 */
export const file_google_cloud_bigquery_migration_v2_translation_details: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvY2xvdWQvYmlncXVlcnkvbWlncmF0aW9uL3YyL3RyYW5zbGF0aW9uX2RldGFpbHMucHJvdG8SImdvb2dsZS5jbG91ZC5iaWdxdWVyeS5taWdyYXRpb24udjIijgIKElRyYW5zbGF0aW9uRGV0YWlscxJWChVzb3VyY2VfdGFyZ2V0X21hcHBpbmcYASADKAsyNy5nb29nbGUuY2xvdWQuYmlncXVlcnkubWlncmF0aW9uLnYyLlNvdXJjZVRhcmdldE1hcHBpbmcSFwoPdGFyZ2V0X2Jhc2VfdXJpGAIgASgJElEKEnNvdXJjZV9lbnZpcm9ubWVudBgDIAEoCzI1Lmdvb2dsZS5jbG91ZC5iaWdxdWVyeS5taWdyYXRpb24udjIuU291cmNlRW52aXJvbm1lbnQSHgoWdGFyZ2V0X3JldHVybl9saXRlcmFscxgEIAMoCRIUCgx0YXJnZXRfdHlwZXMYBSADKAkinwEKE1NvdXJjZVRhcmdldE1hcHBpbmcSQwoLc291cmNlX3NwZWMYASABKAsyLi5nb29nbGUuY2xvdWQuYmlncXVlcnkubWlncmF0aW9uLnYyLlNvdXJjZVNwZWMSQwoLdGFyZ2V0X3NwZWMYAiABKAsyLi5nb29nbGUuY2xvdWQuYmlncXVlcnkubWlncmF0aW9uLnYyLlRhcmdldFNwZWMigQEKClNvdXJjZVNwZWMSEgoIYmFzZV91cmkYASABKAlIABI+CgdsaXRlcmFsGAIgASgLMisuZ29vZ2xlLmNsb3VkLmJpZ3F1ZXJ5Lm1pZ3JhdGlvbi52Mi5MaXRlcmFsSAASFQoIZW5jb2RpbmcYAyABKAlCA+BBAUIICgZzb3VyY2UiIwoKVGFyZ2V0U3BlYxIVCg1yZWxhdGl2ZV9wYXRoGAEgASgJImgKB0xpdGVyYWwSGAoObGl0ZXJhbF9zdHJpbmcYAiABKAlIABIXCg1saXRlcmFsX2J5dGVzGAMgASgMSAASGgoNcmVsYXRpdmVfcGF0aBgBIAEoCUID4EECQg4KDGxpdGVyYWxfZGF0YSJuChFTb3VyY2VFbnZpcm9ubWVudBIYChBkZWZhdWx0X2RhdGFiYXNlGAEgASgJEhoKEnNjaGVtYV9zZWFyY2hfcGF0aBgCIAMoCRIjChZtZXRhZGF0YV9zdG9yZV9kYXRhc2V0GAMgASgJQgPgQQFC0wEKJmNvbS5nb29nbGUuY2xvdWQuYmlncXVlcnkubWlncmF0aW9uLnYyQhdUcmFuc2xhdGlvbkRldGFpbHNQcm90b1ABWkRjbG91ZC5nb29nbGUuY29tL2dvL2JpZ3F1ZXJ5L21pZ3JhdGlvbi9hcGl2Mi9taWdyYXRpb25wYjttaWdyYXRpb25wYqoCIkdvb2dsZS5DbG91ZC5CaWdRdWVyeS5NaWdyYXRpb24uVjLKAiJHb29nbGVcQ2xvdWRcQmlnUXVlcnlcTWlncmF0aW9uXFYyYgZwcm90bzM", [file_google_api_field_behavior]);

/**
 * The translation details to capture the necessary settings for a translation
 * job.
 *
 * @generated from message google.cloud.bigquery.migration.v2.TranslationDetails
 */
export type TranslationDetails = Message<"google.cloud.bigquery.migration.v2.TranslationDetails"> & {
  /**
   * The mapping from source to target SQL.
   *
   * @generated from field: repeated google.cloud.bigquery.migration.v2.SourceTargetMapping source_target_mapping = 1;
   */
  sourceTargetMapping: SourceTargetMapping[];

  /**
   * The base URI for all writes to persistent storage.
   *
   * @generated from field: string target_base_uri = 2;
   */
  targetBaseUri: string;

  /**
   * The default source environment values for the translation.
   *
   * @generated from field: google.cloud.bigquery.migration.v2.SourceEnvironment source_environment = 3;
   */
  sourceEnvironment?: SourceEnvironment;

  /**
   * The list of literal targets that will be directly returned to the response.
   * Each entry consists of the constructed path, EXCLUDING the base path. Not
   * providing a target_base_uri will prevent writing to persistent storage.
   *
   * @generated from field: repeated string target_return_literals = 4;
   */
  targetReturnLiterals: string[];

  /**
   * The types of output to generate, e.g. sql, metadata,
   * lineage_from_sql_scripts, etc. If not specified, a default set of
   * targets will be generated. Some additional target types may be slower to
   * generate. See the documentation for the set of available target types.
   *
   * @generated from field: repeated string target_types = 5;
   */
  targetTypes: string[];
};

/**
 * Describes the message google.cloud.bigquery.migration.v2.TranslationDetails.
 * Use `create(TranslationDetailsSchema)` to create a new message.
 */
export const TranslationDetailsSchema: GenMessage<TranslationDetails> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_migration_v2_translation_details, 0);

/**
 * Represents one mapping from a source SQL to a target SQL.
 *
 * @generated from message google.cloud.bigquery.migration.v2.SourceTargetMapping
 */
export type SourceTargetMapping = Message<"google.cloud.bigquery.migration.v2.SourceTargetMapping"> & {
  /**
   * The source SQL or the path to it.
   *
   * @generated from field: google.cloud.bigquery.migration.v2.SourceSpec source_spec = 1;
   */
  sourceSpec?: SourceSpec;

  /**
   * The target SQL or the path for it.
   *
   * @generated from field: google.cloud.bigquery.migration.v2.TargetSpec target_spec = 2;
   */
  targetSpec?: TargetSpec;
};

/**
 * Describes the message google.cloud.bigquery.migration.v2.SourceTargetMapping.
 * Use `create(SourceTargetMappingSchema)` to create a new message.
 */
export const SourceTargetMappingSchema: GenMessage<SourceTargetMapping> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_migration_v2_translation_details, 1);

/**
 * Represents one path to the location that holds source data.
 *
 * @generated from message google.cloud.bigquery.migration.v2.SourceSpec
 */
export type SourceSpec = Message<"google.cloud.bigquery.migration.v2.SourceSpec"> & {
  /**
   * The specific source SQL.
   *
   * @generated from oneof google.cloud.bigquery.migration.v2.SourceSpec.source
   */
  source: {
    /**
     * The base URI for all files to be read in as sources for translation.
     *
     * @generated from field: string base_uri = 1;
     */
    value: string;
    case: "baseUri";
  } | {
    /**
     * Source literal.
     *
     * @generated from field: google.cloud.bigquery.migration.v2.Literal literal = 2;
     */
    value: Literal;
    case: "literal";
  } | { case: undefined; value?: undefined };

  /**
   * Optional. The optional field to specify the encoding of the sql bytes.
   *
   * @generated from field: string encoding = 3;
   */
  encoding: string;
};

/**
 * Describes the message google.cloud.bigquery.migration.v2.SourceSpec.
 * Use `create(SourceSpecSchema)` to create a new message.
 */
export const SourceSpecSchema: GenMessage<SourceSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_migration_v2_translation_details, 2);

/**
 * Represents one path to the location that holds target data.
 *
 * @generated from message google.cloud.bigquery.migration.v2.TargetSpec
 */
export type TargetSpec = Message<"google.cloud.bigquery.migration.v2.TargetSpec"> & {
  /**
   * The relative path for the target data. Given source file
   * `base_uri/input/sql`, the output would be
   * `target_base_uri/sql/relative_path/input.sql`.
   *
   * @generated from field: string relative_path = 1;
   */
  relativePath: string;
};

/**
 * Describes the message google.cloud.bigquery.migration.v2.TargetSpec.
 * Use `create(TargetSpecSchema)` to create a new message.
 */
export const TargetSpecSchema: GenMessage<TargetSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_migration_v2_translation_details, 3);

/**
 * Literal data.
 *
 * @generated from message google.cloud.bigquery.migration.v2.Literal
 */
export type Literal = Message<"google.cloud.bigquery.migration.v2.Literal"> & {
  /**
   * The literal SQL contents.
   *
   * @generated from oneof google.cloud.bigquery.migration.v2.Literal.literal_data
   */
  literalData: {
    /**
     * Literal string data.
     *
     * @generated from field: string literal_string = 2;
     */
    value: string;
    case: "literalString";
  } | {
    /**
     * Literal byte data.
     *
     * @generated from field: bytes literal_bytes = 3;
     */
    value: Uint8Array;
    case: "literalBytes";
  } | { case: undefined; value?: undefined };

  /**
   * Required. The identifier of the literal entry.
   *
   * @generated from field: string relative_path = 1;
   */
  relativePath: string;
};

/**
 * Describes the message google.cloud.bigquery.migration.v2.Literal.
 * Use `create(LiteralSchema)` to create a new message.
 */
export const LiteralSchema: GenMessage<Literal> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_migration_v2_translation_details, 4);

/**
 * Represents the default source environment values for the translation.
 *
 * @generated from message google.cloud.bigquery.migration.v2.SourceEnvironment
 */
export type SourceEnvironment = Message<"google.cloud.bigquery.migration.v2.SourceEnvironment"> & {
  /**
   * The default database name to fully qualify SQL objects when their database
   * name is missing.
   *
   * @generated from field: string default_database = 1;
   */
  defaultDatabase: string;

  /**
   * The schema search path. When SQL objects are missing schema name,
   * translation engine will search through this list to find the value.
   *
   * @generated from field: repeated string schema_search_path = 2;
   */
  schemaSearchPath: string[];

  /**
   * Optional. Expects a validQ BigQuery dataset ID that exists, e.g.,
   * project-123.metadata_store_123.  If specified, translation will search and
   * read the required schema information from a metadata store in this dataset.
   * If metadata store doesn't exist, translation will parse the metadata file
   * and upload the schema info to a temp table in the dataset to speed up
   * future translation jobs.
   *
   * @generated from field: string metadata_store_dataset = 3;
   */
  metadataStoreDataset: string;
};

/**
 * Describes the message google.cloud.bigquery.migration.v2.SourceEnvironment.
 * Use `create(SourceEnvironmentSchema)` to create a new message.
 */
export const SourceEnvironmentSchema: GenMessage<SourceEnvironment> = /*@__PURE__*/
  messageDesc(file_google_cloud_bigquery_migration_v2_translation_details, 5);
