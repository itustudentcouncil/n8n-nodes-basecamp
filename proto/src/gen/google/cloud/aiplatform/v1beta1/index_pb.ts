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
// @generated from file google/cloud/aiplatform/v1beta1/index.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { DeployedIndexRef } from "./deployed_index_ref_pb";
import { file_google_cloud_aiplatform_v1beta1_deployed_index_ref } from "./deployed_index_ref_pb";
import type { EncryptionSpec } from "./encryption_spec_pb";
import { file_google_cloud_aiplatform_v1beta1_encryption_spec } from "./encryption_spec_pb";
import type { Timestamp, Value } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/index.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_index: GenFile = /*@__PURE__*/
  fileDesc("Citnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL2luZGV4LnByb3RvEh9nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExIr0HCgVJbmRleBIRCgRuYW1lGAEgASgJQgPgQQMSGQoMZGlzcGxheV9uYW1lGAIgASgJQgPgQQISEwoLZGVzY3JpcHRpb24YAyABKAkSIAoTbWV0YWRhdGFfc2NoZW1hX3VyaRgEIAEoCUID4EEFEigKCG1ldGFkYXRhGAYgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlElAKEGRlcGxveWVkX2luZGV4ZXMYByADKAsyMS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkRlcGxveWVkSW5kZXhSZWZCA+BBAxIMCgRldGFnGAggASgJEkIKBmxhYmVscxgJIAMoCzIyLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuSW5kZXguTGFiZWxzRW50cnkSNAoLY3JlYXRlX3RpbWUYCiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSNAoLdXBkYXRlX3RpbWUYCyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSRQoLaW5kZXhfc3RhdHMYDiABKAsyKy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkluZGV4U3RhdHNCA+BBAxJaChNpbmRleF91cGRhdGVfbWV0aG9kGBAgASgOMjguZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5JbmRleC5JbmRleFVwZGF0ZU1ldGhvZEID4EEFEk0KD2VuY3J5cHRpb25fc3BlYxgRIAEoCzIvLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuRW5jcnlwdGlvblNwZWNCA+BBBRIaCg1zYXRpc2ZpZXNfcHpzGBIgASgIQgPgQQMSGgoNc2F0aXNmaWVzX3B6aRgTIAEoCEID4EEDGi0KC0xhYmVsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEiXQoRSW5kZXhVcGRhdGVNZXRob2QSIwofSU5ERVhfVVBEQVRFX01FVEhPRF9VTlNQRUNJRklFRBAAEhAKDEJBVENIX1VQREFURRABEhEKDVNUUkVBTV9VUERBVEUQAjpd6kFaCh9haXBsYXRmb3JtLmdvb2dsZWFwaXMuY29tL0luZGV4Ejdwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vaW5kZXhlcy97aW5kZXh9IrgHCg5JbmRleERhdGFwb2ludBIZCgxkYXRhcG9pbnRfaWQYASABKAlCA+BBAhIbCg5mZWF0dXJlX3ZlY3RvchgCIAMoAkID4EECEl4KEHNwYXJzZV9lbWJlZGRpbmcYByABKAsyPy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkluZGV4RGF0YXBvaW50LlNwYXJzZUVtYmVkZGluZ0ID4EEBElMKCXJlc3RyaWN0cxgEIAMoCzI7Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuSW5kZXhEYXRhcG9pbnQuUmVzdHJpY3Rpb25CA+BBARJiChFudW1lcmljX3Jlc3RyaWN0cxgGIAMoCzJCLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuSW5kZXhEYXRhcG9pbnQuTnVtZXJpY1Jlc3RyaWN0aW9uQgPgQQESVgoMY3Jvd2RpbmdfdGFnGAUgASgLMjsuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5JbmRleERhdGFwb2ludC5Dcm93ZGluZ1RhZ0ID4EEBGj8KD1NwYXJzZUVtYmVkZGluZxITCgZ2YWx1ZXMYASADKAJCA+BBAhIXCgpkaW1lbnNpb25zGAIgAygDQgPgQQIaRwoLUmVzdHJpY3Rpb24SEQoJbmFtZXNwYWNlGAEgASgJEhIKCmFsbG93X2xpc3QYAiADKAkSEQoJZGVueV9saXN0GAMgAygJGscCChJOdW1lcmljUmVzdHJpY3Rpb24SEwoJdmFsdWVfaW50GAIgASgDSAASFQoLdmFsdWVfZmxvYXQYAyABKAJIABIWCgx2YWx1ZV9kb3VibGUYBCABKAFIABIRCgluYW1lc3BhY2UYASABKAkSVwoCb3AYBSABKA4ySy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkluZGV4RGF0YXBvaW50Lk51bWVyaWNSZXN0cmljdGlvbi5PcGVyYXRvciJ4CghPcGVyYXRvchIYChRPUEVSQVRPUl9VTlNQRUNJRklFRBAAEggKBExFU1MQARIOCgpMRVNTX0VRVUFMEAISCQoFRVFVQUwQAxIRCg1HUkVBVEVSX0VRVUFMEAQSCwoHR1JFQVRFUhAFEg0KCU5PVF9FUVVBTBAGQgcKBVZhbHVlGikKC0Nyb3dkaW5nVGFnEhoKEmNyb3dkaW5nX2F0dHJpYnV0ZRgBIAEoCSJmCgpJbmRleFN0YXRzEhoKDXZlY3RvcnNfY291bnQYASABKANCA+BBAxIhChRzcGFyc2VfdmVjdG9yc19jb3VudBgDIAEoA0ID4EEDEhkKDHNoYXJkc19jb3VudBgCIAEoBUID4EEDQuEBCiNjb20uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMUIKSW5kZXhQcm90b1ABWkNjbG91ZC5nb29nbGUuY29tL2dvL2FpcGxhdGZvcm0vYXBpdjFiZXRhMS9haXBsYXRmb3JtcGI7YWlwbGF0Zm9ybXBiqgIfR29vZ2xlLkNsb3VkLkFJUGxhdGZvcm0uVjFCZXRhMcoCH0dvb2dsZVxDbG91ZFxBSVBsYXRmb3JtXFYxYmV0YTHqAiJHb29nbGU6OkNsb3VkOjpBSVBsYXRmb3JtOjpWMWJldGExYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_aiplatform_v1beta1_deployed_index_ref, file_google_cloud_aiplatform_v1beta1_encryption_spec, file_google_protobuf_struct, file_google_protobuf_timestamp]);

/**
 * A representation of a collection of database items organized in a way that
 * allows for approximate nearest neighbor (a.k.a ANN) algorithms search.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.Index
 */
export type Index = Message<"google.cloud.aiplatform.v1beta1.Index"> & {
  /**
   * Output only. The resource name of the Index.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The display name of the Index.
   * The name can be up to 128 characters long and can consist of any UTF-8
   * characters.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * The description of the Index.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Immutable. Points to a YAML file stored on Google Cloud Storage describing
   * additional information about the Index, that is specific to it. Unset if
   * the Index does not have any additional information. The schema is defined
   * as an OpenAPI 3.0.2 [Schema
   * Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).
   * Note: The URI given on output will be immutable and probably different,
   * including the URI scheme, than the one given on input. The output URI will
   * point to a location where the user only has a read access.
   *
   * @generated from field: string metadata_schema_uri = 4;
   */
  metadataSchemaUri: string;

  /**
   * An additional information about the Index; the schema of the metadata can
   * be found in
   * [metadata_schema][google.cloud.aiplatform.v1beta1.Index.metadata_schema_uri].
   *
   * @generated from field: google.protobuf.Value metadata = 6;
   */
  metadata?: Value;

  /**
   * Output only. The pointers to DeployedIndexes created from this Index.
   * An Index can be only deleted if all its DeployedIndexes had been undeployed
   * first.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.DeployedIndexRef deployed_indexes = 7;
   */
  deployedIndexes: DeployedIndexRef[];

  /**
   * Used to perform consistent read-modify-write updates. If not set, a blind
   * "overwrite" update happens.
   *
   * @generated from field: string etag = 8;
   */
  etag: string;

  /**
   * The labels with user-defined metadata to organize your Indexes.
   *
   * Label keys and values can be no longer than 64 characters
   * (Unicode codepoints), can only contain lowercase letters, numeric
   * characters, underscores and dashes. International characters are allowed.
   *
   * See https://goo.gl/xmQnxf for more information and examples of labels.
   *
   * @generated from field: map<string, string> labels = 9;
   */
  labels: { [key: string]: string };

  /**
   * Output only. Timestamp when this Index was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 10;
   */
  createTime?: Timestamp;

  /**
   * Output only. Timestamp when this Index was most recently updated.
   * This also includes any update to the contents of the Index.
   * Note that Operations working on this Index may have their
   * [Operations.metadata.generic_metadata.update_time]
   * [google.cloud.aiplatform.v1beta1.GenericOperationMetadata.update_time] a
   * little after the value of this timestamp, yet that does not mean their
   * results are not already reflected in the Index. Result of any successfully
   * completed Operation on the Index is reflected in it.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 11;
   */
  updateTime?: Timestamp;

  /**
   * Output only. Stats of the index resource.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.IndexStats index_stats = 14;
   */
  indexStats?: IndexStats;

  /**
   * Immutable. The update method to use with this Index. If not set,
   * BATCH_UPDATE will be used by default.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.Index.IndexUpdateMethod index_update_method = 16;
   */
  indexUpdateMethod: Index_IndexUpdateMethod;

  /**
   * Immutable. Customer-managed encryption key spec for an Index. If set, this
   * Index and all sub-resources of this Index will be secured by this key.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.EncryptionSpec encryption_spec = 17;
   */
  encryptionSpec?: EncryptionSpec;

  /**
   * Output only. Reserved for future use.
   *
   * @generated from field: bool satisfies_pzs = 18;
   */
  satisfiesPzs: boolean;

  /**
   * Output only. Reserved for future use.
   *
   * @generated from field: bool satisfies_pzi = 19;
   */
  satisfiesPzi: boolean;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.Index.
 * Use `create(IndexSchema)` to create a new message.
 */
export const IndexSchema: GenMessage<Index> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_index, 0);

/**
 * The update method of an Index.
 *
 * @generated from enum google.cloud.aiplatform.v1beta1.Index.IndexUpdateMethod
 */
export enum Index_IndexUpdateMethod {
  /**
   * Should not be used.
   *
   * @generated from enum value: INDEX_UPDATE_METHOD_UNSPECIFIED = 0;
   */
  INDEX_UPDATE_METHOD_UNSPECIFIED = 0,

  /**
   * BatchUpdate: user can call UpdateIndex with files on Cloud Storage of
   * Datapoints to update.
   *
   * @generated from enum value: BATCH_UPDATE = 1;
   */
  BATCH_UPDATE = 1,

  /**
   * StreamUpdate: user can call UpsertDatapoints/DeleteDatapoints to update
   * the Index and the updates will be applied in corresponding
   * DeployedIndexes in nearly real-time.
   *
   * @generated from enum value: STREAM_UPDATE = 2;
   */
  STREAM_UPDATE = 2,
}

/**
 * Describes the enum google.cloud.aiplatform.v1beta1.Index.IndexUpdateMethod.
 */
export const Index_IndexUpdateMethodSchema: GenEnum<Index_IndexUpdateMethod> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1beta1_index, 0, 0);

/**
 * A datapoint of Index.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.IndexDatapoint
 */
export type IndexDatapoint = Message<"google.cloud.aiplatform.v1beta1.IndexDatapoint"> & {
  /**
   * Required. Unique identifier of the datapoint.
   *
   * @generated from field: string datapoint_id = 1;
   */
  datapointId: string;

  /**
   * Required. Feature embedding vector for dense index. An array of numbers
   * with the length of [NearestNeighborSearchConfig.dimensions].
   *
   * @generated from field: repeated float feature_vector = 2;
   */
  featureVector: number[];

  /**
   * Optional. Feature embedding vector for sparse index.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.IndexDatapoint.SparseEmbedding sparse_embedding = 7;
   */
  sparseEmbedding?: IndexDatapoint_SparseEmbedding;

  /**
   * Optional. List of Restrict of the datapoint, used to perform "restricted
   * searches" where boolean rule are used to filter the subset of the database
   * eligible for matching. This uses categorical tokens. See:
   * https://cloud.google.com/vertex-ai/docs/matching-engine/filtering
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.IndexDatapoint.Restriction restricts = 4;
   */
  restricts: IndexDatapoint_Restriction[];

  /**
   * Optional. List of Restrict of the datapoint, used to perform "restricted
   * searches" where boolean rule are used to filter the subset of the database
   * eligible for matching. This uses numeric comparisons.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.IndexDatapoint.NumericRestriction numeric_restricts = 6;
   */
  numericRestricts: IndexDatapoint_NumericRestriction[];

  /**
   * Optional. CrowdingTag of the datapoint, the number of neighbors to return
   * in each crowding can be configured during query.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.IndexDatapoint.CrowdingTag crowding_tag = 5;
   */
  crowdingTag?: IndexDatapoint_CrowdingTag;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.IndexDatapoint.
 * Use `create(IndexDatapointSchema)` to create a new message.
 */
export const IndexDatapointSchema: GenMessage<IndexDatapoint> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_index, 1);

/**
 * Feature embedding vector for sparse index. An array of numbers whose values
 * are located in the specified dimensions.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.IndexDatapoint.SparseEmbedding
 */
export type IndexDatapoint_SparseEmbedding = Message<"google.cloud.aiplatform.v1beta1.IndexDatapoint.SparseEmbedding"> & {
  /**
   * Required. The list of embedding values of the sparse vector.
   *
   * @generated from field: repeated float values = 1;
   */
  values: number[];

  /**
   * Required. The list of indexes for the embedding values of the sparse
   * vector.
   *
   * @generated from field: repeated int64 dimensions = 2;
   */
  dimensions: bigint[];
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.IndexDatapoint.SparseEmbedding.
 * Use `create(IndexDatapoint_SparseEmbeddingSchema)` to create a new message.
 */
export const IndexDatapoint_SparseEmbeddingSchema: GenMessage<IndexDatapoint_SparseEmbedding> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_index, 1, 0);

/**
 * Restriction of a datapoint which describe its attributes(tokens) from each
 * of several attribute categories(namespaces).
 *
 * @generated from message google.cloud.aiplatform.v1beta1.IndexDatapoint.Restriction
 */
export type IndexDatapoint_Restriction = Message<"google.cloud.aiplatform.v1beta1.IndexDatapoint.Restriction"> & {
  /**
   * The namespace of this restriction. e.g.: color.
   *
   * @generated from field: string namespace = 1;
   */
  namespace: string;

  /**
   * The attributes to allow in this namespace. e.g.: 'red'
   *
   * @generated from field: repeated string allow_list = 2;
   */
  allowList: string[];

  /**
   * The attributes to deny in this namespace. e.g.: 'blue'
   *
   * @generated from field: repeated string deny_list = 3;
   */
  denyList: string[];
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.IndexDatapoint.Restriction.
 * Use `create(IndexDatapoint_RestrictionSchema)` to create a new message.
 */
export const IndexDatapoint_RestrictionSchema: GenMessage<IndexDatapoint_Restriction> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_index, 1, 1);

/**
 * This field allows restricts to be based on numeric comparisons rather
 * than categorical tokens.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.IndexDatapoint.NumericRestriction
 */
export type IndexDatapoint_NumericRestriction = Message<"google.cloud.aiplatform.v1beta1.IndexDatapoint.NumericRestriction"> & {
  /**
   * The type of Value must be consistent for all datapoints with a given
   * namespace name. This is verified at runtime.
   *
   * @generated from oneof google.cloud.aiplatform.v1beta1.IndexDatapoint.NumericRestriction.Value
   */
  Value: {
    /**
     * Represents 64 bit integer.
     *
     * @generated from field: int64 value_int = 2;
     */
    value: bigint;
    case: "valueInt";
  } | {
    /**
     * Represents 32 bit float.
     *
     * @generated from field: float value_float = 3;
     */
    value: number;
    case: "valueFloat";
  } | {
    /**
     * Represents 64 bit float.
     *
     * @generated from field: double value_double = 4;
     */
    value: number;
    case: "valueDouble";
  } | { case: undefined; value?: undefined };

  /**
   * The namespace of this restriction. e.g.: cost.
   *
   * @generated from field: string namespace = 1;
   */
  namespace: string;

  /**
   * This MUST be specified for queries and must NOT be specified for
   * datapoints.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.IndexDatapoint.NumericRestriction.Operator op = 5;
   */
  op: IndexDatapoint_NumericRestriction_Operator;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.IndexDatapoint.NumericRestriction.
 * Use `create(IndexDatapoint_NumericRestrictionSchema)` to create a new message.
 */
export const IndexDatapoint_NumericRestrictionSchema: GenMessage<IndexDatapoint_NumericRestriction> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_index, 1, 2);

/**
 * Which comparison operator to use.  Should be specified for queries only;
 * specifying this for a datapoint is an error.
 *
 * Datapoints for which Operator is true relative to the query's Value
 * field will be allowlisted.
 *
 * @generated from enum google.cloud.aiplatform.v1beta1.IndexDatapoint.NumericRestriction.Operator
 */
export enum IndexDatapoint_NumericRestriction_Operator {
  /**
   * Default value of the enum.
   *
   * @generated from enum value: OPERATOR_UNSPECIFIED = 0;
   */
  OPERATOR_UNSPECIFIED = 0,

  /**
   * Datapoints are eligible iff their value is < the query's.
   *
   * @generated from enum value: LESS = 1;
   */
  LESS = 1,

  /**
   * Datapoints are eligible iff their value is <= the query's.
   *
   * @generated from enum value: LESS_EQUAL = 2;
   */
  LESS_EQUAL = 2,

  /**
   * Datapoints are eligible iff their value is == the query's.
   *
   * @generated from enum value: EQUAL = 3;
   */
  EQUAL = 3,

  /**
   * Datapoints are eligible iff their value is >= the query's.
   *
   * @generated from enum value: GREATER_EQUAL = 4;
   */
  GREATER_EQUAL = 4,

  /**
   * Datapoints are eligible iff their value is > the query's.
   *
   * @generated from enum value: GREATER = 5;
   */
  GREATER = 5,

  /**
   * Datapoints are eligible iff their value is != the query's.
   *
   * @generated from enum value: NOT_EQUAL = 6;
   */
  NOT_EQUAL = 6,
}

/**
 * Describes the enum google.cloud.aiplatform.v1beta1.IndexDatapoint.NumericRestriction.Operator.
 */
export const IndexDatapoint_NumericRestriction_OperatorSchema: GenEnum<IndexDatapoint_NumericRestriction_Operator> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1beta1_index, 1, 2, 0);

/**
 * Crowding tag is a constraint on a neighbor list produced by nearest
 * neighbor search requiring that no more than some value k' of the k
 * neighbors returned have the same value of crowding_attribute.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.IndexDatapoint.CrowdingTag
 */
export type IndexDatapoint_CrowdingTag = Message<"google.cloud.aiplatform.v1beta1.IndexDatapoint.CrowdingTag"> & {
  /**
   * The attribute value used for crowding.  The maximum number of neighbors
   * to return per crowding attribute value
   * (per_crowding_attribute_num_neighbors) is configured per-query. This
   * field is ignored if per_crowding_attribute_num_neighbors is larger than
   * the total number of neighbors to return for a given query.
   *
   * @generated from field: string crowding_attribute = 1;
   */
  crowdingAttribute: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.IndexDatapoint.CrowdingTag.
 * Use `create(IndexDatapoint_CrowdingTagSchema)` to create a new message.
 */
export const IndexDatapoint_CrowdingTagSchema: GenMessage<IndexDatapoint_CrowdingTag> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_index, 1, 3);

/**
 * Stats of the Index.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.IndexStats
 */
export type IndexStats = Message<"google.cloud.aiplatform.v1beta1.IndexStats"> & {
  /**
   * Output only. The number of dense vectors in the Index.
   *
   * @generated from field: int64 vectors_count = 1;
   */
  vectorsCount: bigint;

  /**
   * Output only. The number of sparse vectors in the Index.
   *
   * @generated from field: int64 sparse_vectors_count = 3;
   */
  sparseVectorsCount: bigint;

  /**
   * Output only. The number of shards in the Index.
   *
   * @generated from field: int32 shards_count = 2;
   */
  shardsCount: number;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.IndexStats.
 * Use `create(IndexStatsSchema)` to create a new message.
 */
export const IndexStatsSchema: GenMessage<IndexStats> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_index, 2);
