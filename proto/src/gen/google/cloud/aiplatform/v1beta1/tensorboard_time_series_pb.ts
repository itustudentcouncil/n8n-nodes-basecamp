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
// @generated from file google/cloud/aiplatform/v1beta1/tensorboard_time_series.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/tensorboard_time_series.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_tensorboard_time_series: GenFile = /*@__PURE__*/
  fileDesc("Cj1nb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL3RlbnNvcmJvYXJkX3RpbWVfc2VyaWVzLnByb3RvEh9nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExIskGChVUZW5zb3Jib2FyZFRpbWVTZXJpZXMSEQoEbmFtZRgBIAEoCUID4EEDEhkKDGRpc3BsYXlfbmFtZRgCIAEoCUID4EECEhMKC2Rlc2NyaXB0aW9uGAMgASgJElwKCnZhbHVlX3R5cGUYBCABKA4yQC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLlRlbnNvcmJvYXJkVGltZVNlcmllcy5WYWx1ZVR5cGVCBuBBAuBBBRI0CgtjcmVhdGVfdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxI0Cgt1cGRhdGVfdGltZRgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIMCgRldGFnGAcgASgJEhgKC3BsdWdpbl9uYW1lGAggASgJQgPgQQUSEwoLcGx1Z2luX2RhdGEYCSABKAwSVgoIbWV0YWRhdGEYCiABKAsyPy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLlRlbnNvcmJvYXJkVGltZVNlcmllcy5NZXRhZGF0YUID4EEDGoABCghNZXRhZGF0YRIVCghtYXhfc3RlcBgBIAEoA0ID4EEDEjYKDW1heF93YWxsX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSJQoYbWF4X2Jsb2Jfc2VxdWVuY2VfbGVuZ3RoGAMgASgDQgPgQQMiUgoJVmFsdWVUeXBlEhoKFlZBTFVFX1RZUEVfVU5TUEVDSUZJRUQQABIKCgZTQ0FMQVIQARIKCgZURU5TT1IQAhIRCg1CTE9CX1NFUVVFTkNFEAM6tgHqQbIBCi9haXBsYXRmb3JtLmdvb2dsZWFwaXMuY29tL1RlbnNvcmJvYXJkVGltZVNlcmllcxJ/cHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L3RlbnNvcmJvYXJkcy97dGVuc29yYm9hcmR9L2V4cGVyaW1lbnRzL3tleHBlcmltZW50fS9ydW5zL3tydW59L3RpbWVTZXJpZXMve3RpbWVfc2VyaWVzfULxAQojY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTFCGlRlbnNvcmJvYXJkVGltZVNlcmllc1Byb3RvUAFaQ2Nsb3VkLmdvb2dsZS5jb20vZ28vYWlwbGF0Zm9ybS9hcGl2MWJldGExL2FpcGxhdGZvcm1wYjthaXBsYXRmb3JtcGKqAh9Hb29nbGUuQ2xvdWQuQUlQbGF0Zm9ybS5WMUJldGExygIfR29vZ2xlXENsb3VkXEFJUGxhdGZvcm1cVjFiZXRhMeoCIkdvb2dsZTo6Q2xvdWQ6OkFJUGxhdGZvcm06OlYxYmV0YTFiBnByb3RvMw", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp]);

/**
 * TensorboardTimeSeries maps to times series produced in training runs
 *
 * @generated from message google.cloud.aiplatform.v1beta1.TensorboardTimeSeries
 */
export type TensorboardTimeSeries = Message<"google.cloud.aiplatform.v1beta1.TensorboardTimeSeries"> & {
  /**
   * Output only. Name of the TensorboardTimeSeries.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. User provided name of this TensorboardTimeSeries.
   * This value should be unique among all TensorboardTimeSeries resources
   * belonging to the same TensorboardRun resource (parent resource).
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Description of this TensorboardTimeSeries.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Required. Immutable. Type of TensorboardTimeSeries value.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.TensorboardTimeSeries.ValueType value_type = 4;
   */
  valueType: TensorboardTimeSeries_ValueType;

  /**
   * Output only. Timestamp when this TensorboardTimeSeries was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 5;
   */
  createTime?: Timestamp;

  /**
   * Output only. Timestamp when this TensorboardTimeSeries was last updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 6;
   */
  updateTime?: Timestamp;

  /**
   * Used to perform a consistent read-modify-write updates. If not set, a blind
   * "overwrite" update happens.
   *
   * @generated from field: string etag = 7;
   */
  etag: string;

  /**
   * Immutable. Name of the plugin this time series pertain to. Such as Scalar,
   * Tensor, Blob
   *
   * @generated from field: string plugin_name = 8;
   */
  pluginName: string;

  /**
   * Data of the current plugin, with the size limited to 65KB.
   *
   * @generated from field: bytes plugin_data = 9;
   */
  pluginData: Uint8Array;

  /**
   * Output only. Scalar, Tensor, or Blob metadata for this
   * TensorboardTimeSeries.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.TensorboardTimeSeries.Metadata metadata = 10;
   */
  metadata?: TensorboardTimeSeries_Metadata;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.TensorboardTimeSeries.
 * Use `create(TensorboardTimeSeriesSchema)` to create a new message.
 */
export const TensorboardTimeSeriesSchema: GenMessage<TensorboardTimeSeries> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_tensorboard_time_series, 0);

/**
 * Describes metadata for a TensorboardTimeSeries.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.TensorboardTimeSeries.Metadata
 */
export type TensorboardTimeSeries_Metadata = Message<"google.cloud.aiplatform.v1beta1.TensorboardTimeSeries.Metadata"> & {
  /**
   * Output only. Max step index of all data points within a
   * TensorboardTimeSeries.
   *
   * @generated from field: int64 max_step = 1;
   */
  maxStep: bigint;

  /**
   * Output only. Max wall clock timestamp of all data points within a
   * TensorboardTimeSeries.
   *
   * @generated from field: google.protobuf.Timestamp max_wall_time = 2;
   */
  maxWallTime?: Timestamp;

  /**
   * Output only. The largest blob sequence length (number of blobs) of all
   * data points in this time series, if its ValueType is BLOB_SEQUENCE.
   *
   * @generated from field: int64 max_blob_sequence_length = 3;
   */
  maxBlobSequenceLength: bigint;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.TensorboardTimeSeries.Metadata.
 * Use `create(TensorboardTimeSeries_MetadataSchema)` to create a new message.
 */
export const TensorboardTimeSeries_MetadataSchema: GenMessage<TensorboardTimeSeries_Metadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_tensorboard_time_series, 0, 0);

/**
 * An enum representing the value type of a TensorboardTimeSeries.
 *
 * @generated from enum google.cloud.aiplatform.v1beta1.TensorboardTimeSeries.ValueType
 */
export enum TensorboardTimeSeries_ValueType {
  /**
   * The value type is unspecified.
   *
   * @generated from enum value: VALUE_TYPE_UNSPECIFIED = 0;
   */
  VALUE_TYPE_UNSPECIFIED = 0,

  /**
   * Used for TensorboardTimeSeries that is a list of scalars.
   * E.g. accuracy of a model over epochs/time.
   *
   * @generated from enum value: SCALAR = 1;
   */
  SCALAR = 1,

  /**
   * Used for TensorboardTimeSeries that is a list of tensors.
   * E.g. histograms of weights of layer in a model over epoch/time.
   *
   * @generated from enum value: TENSOR = 2;
   */
  TENSOR = 2,

  /**
   * Used for TensorboardTimeSeries that is a list of blob sequences.
   * E.g. set of sample images with labels over epochs/time.
   *
   * @generated from enum value: BLOB_SEQUENCE = 3;
   */
  BLOB_SEQUENCE = 3,
}

/**
 * Describes the enum google.cloud.aiplatform.v1beta1.TensorboardTimeSeries.ValueType.
 */
export const TensorboardTimeSeries_ValueTypeSchema: GenEnum<TensorboardTimeSeries_ValueType> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1beta1_tensorboard_time_series, 0, 0);
