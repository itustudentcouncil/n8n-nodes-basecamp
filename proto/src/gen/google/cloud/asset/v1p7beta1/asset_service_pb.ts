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
// @generated from file google/cloud/asset/v1p7beta1/asset_service.proto (package google.cloud.asset.v1p7beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/asset/v1p7beta1/asset_service.proto.
 */
export const file_google_cloud_asset_v1p7beta1_asset_service: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvY2xvdWQvYXNzZXQvdjFwN2JldGExL2Fzc2V0X3NlcnZpY2UucHJvdG8SHGdvb2dsZS5jbG91ZC5hc3NldC52MXA3YmV0YTEitwIKE0V4cG9ydEFzc2V0c1JlcXVlc3QSNwoGcGFyZW50GAEgASgJQifgQQL6QSESH2Nsb3VkYXNzZXQuZ29vZ2xlYXBpcy5jb20vQXNzZXQSLQoJcmVhZF90aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBITCgthc3NldF90eXBlcxgDIAMoCRI/Cgxjb250ZW50X3R5cGUYBCABKA4yKS5nb29nbGUuY2xvdWQuYXNzZXQudjFwN2JldGExLkNvbnRlbnRUeXBlEkYKDW91dHB1dF9jb25maWcYBSABKAsyKi5nb29nbGUuY2xvdWQuYXNzZXQudjFwN2JldGExLk91dHB1dENvbmZpZ0ID4EECEhoKEnJlbGF0aW9uc2hpcF90eXBlcxgGIAMoCSLLAQoURXhwb3J0QXNzZXRzUmVzcG9uc2USLQoJcmVhZF90aW1lGAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBJBCg1vdXRwdXRfY29uZmlnGAIgASgLMiouZ29vZ2xlLmNsb3VkLmFzc2V0LnYxcDdiZXRhMS5PdXRwdXRDb25maWcSQQoNb3V0cHV0X3Jlc3VsdBgDIAEoCzIqLmdvb2dsZS5jbG91ZC5hc3NldC52MXA3YmV0YTEuT3V0cHV0UmVzdWx0IrkBCgxPdXRwdXRDb25maWcSRwoPZ2NzX2Rlc3RpbmF0aW9uGAEgASgLMiwuZ29vZ2xlLmNsb3VkLmFzc2V0LnYxcDdiZXRhMS5HY3NEZXN0aW5hdGlvbkgAElEKFGJpZ3F1ZXJ5X2Rlc3RpbmF0aW9uGAIgASgLMjEuZ29vZ2xlLmNsb3VkLmFzc2V0LnYxcDdiZXRhMS5CaWdRdWVyeURlc3RpbmF0aW9uSABCDQoLZGVzdGluYXRpb24iXQoMT3V0cHV0UmVzdWx0EkMKCmdjc19yZXN1bHQYASABKAsyLS5nb29nbGUuY2xvdWQuYXNzZXQudjFwN2JldGExLkdjc091dHB1dFJlc3VsdEgAQggKBnJlc3VsdCIfCg9HY3NPdXRwdXRSZXN1bHQSDAoEdXJpcxgBIAMoCSJDCg5HY3NEZXN0aW5hdGlvbhINCgN1cmkYASABKAlIABIUCgp1cmlfcHJlZml4GAIgASgJSABCDAoKb2JqZWN0X3VyaSK7AQoTQmlnUXVlcnlEZXN0aW5hdGlvbhIUCgdkYXRhc2V0GAEgASgJQgPgQQISEgoFdGFibGUYAiABKAlCA+BBAhINCgVmb3JjZRgDIAEoCBJDCg5wYXJ0aXRpb25fc3BlYxgEIAEoCzIrLmdvb2dsZS5jbG91ZC5hc3NldC52MXA3YmV0YTEuUGFydGl0aW9uU3BlYxImCh5zZXBhcmF0ZV90YWJsZXNfcGVyX2Fzc2V0X3R5cGUYBSABKAgisAEKDVBhcnRpdGlvblNwZWMSTwoNcGFydGl0aW9uX2tleRgBIAEoDjI4Lmdvb2dsZS5jbG91ZC5hc3NldC52MXA3YmV0YTEuUGFydGl0aW9uU3BlYy5QYXJ0aXRpb25LZXkiTgoMUGFydGl0aW9uS2V5Eh0KGVBBUlRJVElPTl9LRVlfVU5TUEVDSUZJRUQQABINCglSRUFEX1RJTUUQARIQCgxSRVFVRVNUX1RJTUUQAip+CgtDb250ZW50VHlwZRIcChhDT05URU5UX1RZUEVfVU5TUEVDSUZJRUQQABIMCghSRVNPVVJDRRABEg4KCklBTV9QT0xJQ1kQAhIOCgpPUkdfUE9MSUNZEAQSEQoNQUNDRVNTX1BPTElDWRAFEhAKDFJFTEFUSU9OU0hJUBAHMtoCCgxBc3NldFNlcnZpY2US+gEKDEV4cG9ydEFzc2V0cxIxLmdvb2dsZS5jbG91ZC5hc3NldC52MXA3YmV0YTEuRXhwb3J0QXNzZXRzUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24ilwHKQWUKMWdvb2dsZS5jbG91ZC5hc3NldC52MXA3YmV0YTEuRXhwb3J0QXNzZXRzUmVzcG9uc2USMGdvb2dsZS5jbG91ZC5hc3NldC52MXA3YmV0YTEuRXhwb3J0QXNzZXRzUmVxdWVzdILT5JMCKToBKiIkL3YxcDdiZXRhMS97cGFyZW50PSovKn06ZXhwb3J0QXNzZXRzGk3KQRljbG91ZGFzc2V0Lmdvb2dsZWFwaXMuY29t0kEuaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybUKtAQogY29tLmdvb2dsZS5jbG91ZC5hc3NldC52MXA3YmV0YTFCEUFzc2V0U2VydmljZVByb3RvUAFaNmNsb3VkLmdvb2dsZS5jb20vZ28vYXNzZXQvYXBpdjFwN2JldGExL2Fzc2V0cGI7YXNzZXRwYqoCHEdvb2dsZS5DbG91ZC5Bc3NldC5WMVA3QmV0YTHKAhxHb29nbGVcQ2xvdWRcQXNzZXRcVjFwN2JldGExYgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_longrunning_operations, file_google_protobuf_timestamp]);

/**
 * Export asset request.
 *
 * @generated from message google.cloud.asset.v1p7beta1.ExportAssetsRequest
 */
export type ExportAssetsRequest = Message<"google.cloud.asset.v1p7beta1.ExportAssetsRequest"> & {
  /**
   * Required. The relative name of the root asset. This can only be an
   * organization number (such as "organizations/123"), a project ID (such as
   * "projects/my-project-id"), or a project number (such as "projects/12345"),
   * or a folder number (such as "folders/123").
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Timestamp to take an asset snapshot. This can only be set to a timestamp
   * between the current time and the current time minus 35 days (inclusive).
   * If not specified, the current time will be used. Due to delays in resource
   * data collection and indexing, there is a volatile window during which
   * running the same query may get different results.
   *
   * @generated from field: google.protobuf.Timestamp read_time = 2;
   */
  readTime?: Timestamp;

  /**
   * A list of asset types to take a snapshot for. For example:
   * "compute.googleapis.com/Disk".
   *
   * Regular expressions are also supported. For example:
   *
   * * "compute.googleapis.com.*" snapshots resources whose asset type starts
   * with "compute.googleapis.com".
   * * ".*Instance" snapshots resources whose asset type ends with "Instance".
   * * ".*Instance.*" snapshots resources whose asset type contains "Instance".
   *
   * See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported
   * regular expression syntax. If the regular expression does not match any
   * supported asset type, an INVALID_ARGUMENT error will be returned.
   *
   * If specified, only matching assets will be returned, otherwise, it will
   * snapshot all asset types. See [Introduction to Cloud Asset
   * Inventory](https://cloud.google.com/asset-inventory/docs/overview)
   * for all supported asset types.
   *
   * @generated from field: repeated string asset_types = 3;
   */
  assetTypes: string[];

  /**
   * Asset content type. If not specified, no content but the asset name will be
   * returned.
   *
   * @generated from field: google.cloud.asset.v1p7beta1.ContentType content_type = 4;
   */
  contentType: ContentType;

  /**
   * Required. Output configuration indicating where the results will be output
   * to.
   *
   * @generated from field: google.cloud.asset.v1p7beta1.OutputConfig output_config = 5;
   */
  outputConfig?: OutputConfig;

  /**
   * A list of relationship types to export, for example:
   * `INSTANCE_TO_INSTANCEGROUP`. This field should only be specified if
   * content_type=RELATIONSHIP. If specified, it will snapshot [asset_types]'
   * specified relationships, or give errors if any relationship_types'
   * supported types are not in [asset_types]. If not specified, it will
   * snapshot all [asset_types]' supported relationships. An unspecified
   * [asset_types] field means all supported asset_types. See [Introduction to
   * Cloud Asset
   * Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all
   * supported asset types and relationship types.
   *
   * @generated from field: repeated string relationship_types = 6;
   */
  relationshipTypes: string[];
};

/**
 * Describes the message google.cloud.asset.v1p7beta1.ExportAssetsRequest.
 * Use `create(ExportAssetsRequestSchema)` to create a new message.
 */
export const ExportAssetsRequestSchema: GenMessage<ExportAssetsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_asset_v1p7beta1_asset_service, 0);

/**
 * The export asset response. This message is returned by the
 * [google.longrunning.Operations.GetOperation][google.longrunning.Operations.GetOperation]
 * method in the returned
 * [google.longrunning.Operation.response][google.longrunning.Operation.response]
 * field.
 *
 * @generated from message google.cloud.asset.v1p7beta1.ExportAssetsResponse
 */
export type ExportAssetsResponse = Message<"google.cloud.asset.v1p7beta1.ExportAssetsResponse"> & {
  /**
   * Time the snapshot was taken.
   *
   * @generated from field: google.protobuf.Timestamp read_time = 1;
   */
  readTime?: Timestamp;

  /**
   * Output configuration indicating where the results were output to.
   *
   * @generated from field: google.cloud.asset.v1p7beta1.OutputConfig output_config = 2;
   */
  outputConfig?: OutputConfig;

  /**
   * Output result indicating where the assets were exported to. For example, a
   * set of actual Cloud Storage object URIs where the assets are
   * exported to. The URIs can be different from what [output_config] has
   * specified, as the service will split the output object into multiple ones
   * once it exceeds a single Cloud Storage object limit.
   *
   * @generated from field: google.cloud.asset.v1p7beta1.OutputResult output_result = 3;
   */
  outputResult?: OutputResult;
};

/**
 * Describes the message google.cloud.asset.v1p7beta1.ExportAssetsResponse.
 * Use `create(ExportAssetsResponseSchema)` to create a new message.
 */
export const ExportAssetsResponseSchema: GenMessage<ExportAssetsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_asset_v1p7beta1_asset_service, 1);

/**
 * Output configuration for export assets destination.
 *
 * @generated from message google.cloud.asset.v1p7beta1.OutputConfig
 */
export type OutputConfig = Message<"google.cloud.asset.v1p7beta1.OutputConfig"> & {
  /**
   * Asset export destination.
   *
   * @generated from oneof google.cloud.asset.v1p7beta1.OutputConfig.destination
   */
  destination: {
    /**
     * Destination on Cloud Storage.
     *
     * @generated from field: google.cloud.asset.v1p7beta1.GcsDestination gcs_destination = 1;
     */
    value: GcsDestination;
    case: "gcsDestination";
  } | {
    /**
     * Destination on BigQuery. The output table stores the fields in asset
     * proto as columns in BigQuery.
     *
     * @generated from field: google.cloud.asset.v1p7beta1.BigQueryDestination bigquery_destination = 2;
     */
    value: BigQueryDestination;
    case: "bigqueryDestination";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.asset.v1p7beta1.OutputConfig.
 * Use `create(OutputConfigSchema)` to create a new message.
 */
export const OutputConfigSchema: GenMessage<OutputConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_asset_v1p7beta1_asset_service, 2);

/**
 * Output result of export assets.
 *
 * @generated from message google.cloud.asset.v1p7beta1.OutputResult
 */
export type OutputResult = Message<"google.cloud.asset.v1p7beta1.OutputResult"> & {
  /**
   * Asset export result.
   *
   * @generated from oneof google.cloud.asset.v1p7beta1.OutputResult.result
   */
  result: {
    /**
     * Export result on Cloud Storage.
     *
     * @generated from field: google.cloud.asset.v1p7beta1.GcsOutputResult gcs_result = 1;
     */
    value: GcsOutputResult;
    case: "gcsResult";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.asset.v1p7beta1.OutputResult.
 * Use `create(OutputResultSchema)` to create a new message.
 */
export const OutputResultSchema: GenMessage<OutputResult> = /*@__PURE__*/
  messageDesc(file_google_cloud_asset_v1p7beta1_asset_service, 3);

/**
 * A Cloud Storage output result.
 *
 * @generated from message google.cloud.asset.v1p7beta1.GcsOutputResult
 */
export type GcsOutputResult = Message<"google.cloud.asset.v1p7beta1.GcsOutputResult"> & {
  /**
   * List of URIs of the Cloud Storage objects. Example:
   * "gs://bucket_name/object_name".
   *
   * @generated from field: repeated string uris = 1;
   */
  uris: string[];
};

/**
 * Describes the message google.cloud.asset.v1p7beta1.GcsOutputResult.
 * Use `create(GcsOutputResultSchema)` to create a new message.
 */
export const GcsOutputResultSchema: GenMessage<GcsOutputResult> = /*@__PURE__*/
  messageDesc(file_google_cloud_asset_v1p7beta1_asset_service, 4);

/**
 * A Cloud Storage location.
 *
 * @generated from message google.cloud.asset.v1p7beta1.GcsDestination
 */
export type GcsDestination = Message<"google.cloud.asset.v1p7beta1.GcsDestination"> & {
  /**
   * Required.
   *
   * @generated from oneof google.cloud.asset.v1p7beta1.GcsDestination.object_uri
   */
  objectUri: {
    /**
     * The URI of the Cloud Storage object. It's the same URI that is used by
     * gsutil. Example: "gs://bucket_name/object_name". See [Viewing and
     * Editing Object
     * Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata)
     * for more information.
     *
     * @generated from field: string uri = 1;
     */
    value: string;
    case: "uri";
  } | {
    /**
     * The URI prefix of all generated Cloud Storage objects. Example:
     * "gs://bucket_name/object_name_prefix". Each object URI is in format:
     * "gs://bucket_name/object_name_prefix/{ASSET_TYPE}/{SHARD_NUMBER} and only
     * contains assets for that type. <shard number> starts from 0. Example:
     * "gs://bucket_name/object_name_prefix/compute.googleapis.com/Disk/0" is
     * the first shard of output objects containing all
     * compute.googleapis.com/Disk assets. An INVALID_ARGUMENT error will be
     * returned if file with the same name "gs://bucket_name/object_name_prefix"
     * already exists.
     *
     * @generated from field: string uri_prefix = 2;
     */
    value: string;
    case: "uriPrefix";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.asset.v1p7beta1.GcsDestination.
 * Use `create(GcsDestinationSchema)` to create a new message.
 */
export const GcsDestinationSchema: GenMessage<GcsDestination> = /*@__PURE__*/
  messageDesc(file_google_cloud_asset_v1p7beta1_asset_service, 5);

/**
 * A BigQuery destination for exporting assets to.
 *
 * @generated from message google.cloud.asset.v1p7beta1.BigQueryDestination
 */
export type BigQueryDestination = Message<"google.cloud.asset.v1p7beta1.BigQueryDestination"> & {
  /**
   * Required. The BigQuery dataset in format
   * "projects/projectId/datasets/datasetId", to which the snapshot result
   * should be exported. If this dataset does not exist, the export call returns
   * an INVALID_ARGUMENT error.
   *
   * @generated from field: string dataset = 1;
   */
  dataset: string;

  /**
   * Required. The BigQuery table to which the snapshot result should be
   * written. If this table does not exist, a new table with the given name
   * will be created.
   *
   * @generated from field: string table = 2;
   */
  table: string;

  /**
   * If the destination table already exists and this flag is `TRUE`, the
   * table will be overwritten by the contents of assets snapshot. If the flag
   * is `FALSE` or unset and the destination table already exists, the export
   * call returns an INVALID_ARGUMEMT error.
   *
   * @generated from field: bool force = 3;
   */
  force: boolean;

  /**
   * [partition_spec] determines whether to export to partitioned table(s) and
   * how to partition the data.
   *
   * If [partition_spec] is unset or [partition_spec.partition_key] is unset or
   * `PARTITION_KEY_UNSPECIFIED`, the snapshot results will be exported to
   * non-partitioned table(s). [force] will decide whether to overwrite existing
   * table(s).
   *
   * If [partition_spec] is specified. First, the snapshot results will be
   * written to partitioned table(s) with two additional timestamp columns,
   * readTime and requestTime, one of which will be the partition key. Secondly,
   * in the case when any destination table already exists, it will first try to
   * update existing table's schema as necessary by appending additional
   * columns. Then, if [force] is `TRUE`, the corresponding partition will be
   * overwritten by the snapshot results (data in different partitions will
   * remain intact); if [force] is unset or `FALSE`, it will append the data. An
   * error will be returned if the schema update or data appension fails.
   *
   * @generated from field: google.cloud.asset.v1p7beta1.PartitionSpec partition_spec = 4;
   */
  partitionSpec?: PartitionSpec;

  /**
   * If this flag is `TRUE`, the snapshot results will be written to one or
   * multiple tables, each of which contains results of one asset type. The
   * [force] and [partition_spec] fields will apply to each of them.
   *
   * Field [table] will be concatenated with "_" and the asset type names (see
   * https://cloud.google.com/asset-inventory/docs/supported-asset-types for
   * supported asset types) to construct per-asset-type table names, in which
   * all non-alphanumeric characters like "." and "/" will be substituted by
   * "_". Example: if field [table] is "mytable" and snapshot results
   * contain "storage.googleapis.com/Bucket" assets, the corresponding table
   * name will be "mytable_storage_googleapis_com_Bucket". If any of these
   * tables does not exist, a new table with the concatenated name will be
   * created.
   *
   * When [content_type] in the ExportAssetsRequest is `RESOURCE`, the schema of
   * each table will include RECORD-type columns mapped to the nested fields in
   * the Asset.resource.data field of that asset type (up to the 15 nested level
   * BigQuery supports
   * (https://cloud.google.com/bigquery/docs/nested-repeated#limitations)). The
   * fields in >15 nested levels will be stored in JSON format string as a child
   * column of its parent RECORD column.
   *
   * If error occurs when exporting to any table, the whole export call will
   * return an error but the export results that already succeed will persist.
   * Example: if exporting to table_type_A succeeds when exporting to
   * table_type_B fails during one export call, the results in table_type_A will
   * persist and there will not be partial results persisting in a table.
   *
   * @generated from field: bool separate_tables_per_asset_type = 5;
   */
  separateTablesPerAssetType: boolean;
};

/**
 * Describes the message google.cloud.asset.v1p7beta1.BigQueryDestination.
 * Use `create(BigQueryDestinationSchema)` to create a new message.
 */
export const BigQueryDestinationSchema: GenMessage<BigQueryDestination> = /*@__PURE__*/
  messageDesc(file_google_cloud_asset_v1p7beta1_asset_service, 6);

/**
 * Specifications of BigQuery partitioned table as export destination.
 *
 * @generated from message google.cloud.asset.v1p7beta1.PartitionSpec
 */
export type PartitionSpec = Message<"google.cloud.asset.v1p7beta1.PartitionSpec"> & {
  /**
   * The partition key for BigQuery partitioned table.
   *
   * @generated from field: google.cloud.asset.v1p7beta1.PartitionSpec.PartitionKey partition_key = 1;
   */
  partitionKey: PartitionSpec_PartitionKey;
};

/**
 * Describes the message google.cloud.asset.v1p7beta1.PartitionSpec.
 * Use `create(PartitionSpecSchema)` to create a new message.
 */
export const PartitionSpecSchema: GenMessage<PartitionSpec> = /*@__PURE__*/
  messageDesc(file_google_cloud_asset_v1p7beta1_asset_service, 7);

/**
 * This enum is used to determine the partition key column when exporting
 * assets to BigQuery partitioned table(s). Note that, if the partition key is
 * a timestamp column, the actual partition is based on its date value
 * (expressed in UTC. see details in
 * https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables).
 *
 * @generated from enum google.cloud.asset.v1p7beta1.PartitionSpec.PartitionKey
 */
export enum PartitionSpec_PartitionKey {
  /**
   * Unspecified partition key. If used, it means using non-partitioned table.
   *
   * @generated from enum value: PARTITION_KEY_UNSPECIFIED = 0;
   */
  PARTITION_KEY_UNSPECIFIED = 0,

  /**
   * The time when the snapshot is taken. If specified as partition key, the
   * result table(s) is partitoned by the additional timestamp column,
   * readTime. If [read_time] in ExportAssetsRequest is specified, the
   * readTime column's value will be the same as it. Otherwise, its value will
   * be the current time that is used to take the snapshot.
   *
   * @generated from enum value: READ_TIME = 1;
   */
  READ_TIME = 1,

  /**
   * The time when the request is received and started to be processed. If
   * specified as partition key, the result table(s) is partitoned by the
   * requestTime column, an additional timestamp column representing when the
   * request was received.
   *
   * @generated from enum value: REQUEST_TIME = 2;
   */
  REQUEST_TIME = 2,
}

/**
 * Describes the enum google.cloud.asset.v1p7beta1.PartitionSpec.PartitionKey.
 */
export const PartitionSpec_PartitionKeySchema: GenEnum<PartitionSpec_PartitionKey> = /*@__PURE__*/
  enumDesc(file_google_cloud_asset_v1p7beta1_asset_service, 7, 0);

/**
 * Asset content type.
 *
 * @generated from enum google.cloud.asset.v1p7beta1.ContentType
 */
export enum ContentType {
  /**
   * Unspecified content type.
   *
   * @generated from enum value: CONTENT_TYPE_UNSPECIFIED = 0;
   */
  CONTENT_TYPE_UNSPECIFIED = 0,

  /**
   * Resource metadata.
   *
   * @generated from enum value: RESOURCE = 1;
   */
  RESOURCE = 1,

  /**
   * The actual IAM policy set on a resource.
   *
   * @generated from enum value: IAM_POLICY = 2;
   */
  IAM_POLICY = 2,

  /**
   * The organization policy set on an asset.
   *
   * @generated from enum value: ORG_POLICY = 4;
   */
  ORG_POLICY = 4,

  /**
   * The Access Context Manager policy set on an asset.
   *
   * @generated from enum value: ACCESS_POLICY = 5;
   */
  ACCESS_POLICY = 5,

  /**
   * The related resources.
   *
   * @generated from enum value: RELATIONSHIP = 7;
   */
  RELATIONSHIP = 7,
}

/**
 * Describes the enum google.cloud.asset.v1p7beta1.ContentType.
 */
export const ContentTypeSchema: GenEnum<ContentType> = /*@__PURE__*/
  enumDesc(file_google_cloud_asset_v1p7beta1_asset_service, 0);

/**
 * Asset service definition.
 *
 * @generated from service google.cloud.asset.v1p7beta1.AssetService
 */
export const AssetService: GenService<{
  /**
   * Exports assets with time and resource types to a given Cloud Storage
   * location/BigQuery table. For Cloud Storage location destinations, the
   * output format is newline-delimited JSON. Each line represents a
   * [google.cloud.asset.v1p7beta1.Asset][google.cloud.asset.v1p7beta1.Asset] in
   * the JSON format; for BigQuery table destinations, the output table stores
   * the fields in asset proto as columns. This API implements the
   * [google.longrunning.Operation][google.longrunning.Operation] API , which
   * allows you to keep track of the export. We recommend intervals of at least
   * 2 seconds with exponential retry to poll the export operation result. For
   * regular-size resource parent, the export operation usually finishes within
   * 5 minutes.
   *
   * @generated from rpc google.cloud.asset.v1p7beta1.AssetService.ExportAssets
   */
  exportAssets: {
    methodKind: "unary";
    input: typeof ExportAssetsRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_asset_v1p7beta1_asset_service, 0);
