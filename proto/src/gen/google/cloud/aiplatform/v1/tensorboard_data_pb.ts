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
// @generated from file google/cloud/aiplatform/v1/tensorboard_data.proto (package google.cloud.aiplatform.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { TensorboardTimeSeries_ValueType } from "./tensorboard_time_series_pb";
import { file_google_cloud_aiplatform_v1_tensorboard_time_series } from "./tensorboard_time_series_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/tensorboard_data.proto.
 */
export const file_google_cloud_aiplatform_v1_tensorboard_data: GenFile = /*@__PURE__*/
  fileDesc("CjFnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS90ZW5zb3Jib2FyZF9kYXRhLnByb3RvEhpnb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MSLYAQoOVGltZVNlcmllc0RhdGESJwoadGVuc29yYm9hcmRfdGltZV9zZXJpZXNfaWQYASABKAlCA+BBAhJXCgp2YWx1ZV90eXBlGAIgASgOMjsuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuVGVuc29yYm9hcmRUaW1lU2VyaWVzLlZhbHVlVHlwZUIG4EEC4EEFEkQKBnZhbHVlcxgDIAMoCzIvLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlRpbWVTZXJpZXNEYXRhUG9pbnRCA+BBAiKYAgoTVGltZVNlcmllc0RhdGFQb2ludBI0CgZzY2FsYXIYAyABKAsyIi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5TY2FsYXJIABI/CgZ0ZW5zb3IYBCABKAsyLS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5UZW5zb3Jib2FyZFRlbnNvckgAEkQKBWJsb2JzGAUgASgLMjMuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuVGVuc29yYm9hcmRCbG9iU2VxdWVuY2VIABItCgl3YWxsX3RpbWUYASABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEgwKBHN0ZXAYAiABKANCBwoFdmFsdWUiFwoGU2NhbGFyEg0KBXZhbHVlGAEgASgBIkQKEVRlbnNvcmJvYXJkVGVuc29yEhIKBXZhbHVlGAEgASgMQgPgQQISGwoOdmVyc2lvbl9udW1iZXIYAiABKAVCA+BBASJWChdUZW5zb3Jib2FyZEJsb2JTZXF1ZW5jZRI7CgZ2YWx1ZXMYASADKAsyKy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5UZW5zb3Jib2FyZEJsb2IiNQoPVGVuc29yYm9hcmRCbG9iEg8KAmlkGAEgASgJQgPgQQMSEQoEZGF0YRgCIAEoDEID4EEBQtIBCh5jb20uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFCFFRlbnNvcmJvYXJkRGF0YVByb3RvUAFaPmNsb3VkLmdvb2dsZS5jb20vZ28vYWlwbGF0Zm9ybS9hcGl2MS9haXBsYXRmb3JtcGI7YWlwbGF0Zm9ybXBiqgIaR29vZ2xlLkNsb3VkLkFJUGxhdGZvcm0uVjHKAhpHb29nbGVcQ2xvdWRcQUlQbGF0Zm9ybVxWMeoCHUdvb2dsZTo6Q2xvdWQ6OkFJUGxhdGZvcm06OlYxYgZwcm90bzM", [file_google_api_field_behavior, file_google_cloud_aiplatform_v1_tensorboard_time_series, file_google_protobuf_timestamp]);

/**
 * All the data stored in a TensorboardTimeSeries.
 *
 * @generated from message google.cloud.aiplatform.v1.TimeSeriesData
 */
export type TimeSeriesData = Message<"google.cloud.aiplatform.v1.TimeSeriesData"> & {
  /**
   * Required. The ID of the TensorboardTimeSeries, which will become the final
   * component of the TensorboardTimeSeries' resource name
   *
   * @generated from field: string tensorboard_time_series_id = 1;
   */
  tensorboardTimeSeriesId: string;

  /**
   * Required. Immutable. The value type of this time series. All the values in
   * this time series data must match this value type.
   *
   * @generated from field: google.cloud.aiplatform.v1.TensorboardTimeSeries.ValueType value_type = 2;
   */
  valueType: TensorboardTimeSeries_ValueType;

  /**
   * Required. Data points in this time series.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1.TimeSeriesDataPoint values = 3;
   */
  values: TimeSeriesDataPoint[];
};

/**
 * Describes the message google.cloud.aiplatform.v1.TimeSeriesData.
 * Use `create(TimeSeriesDataSchema)` to create a new message.
 */
export const TimeSeriesDataSchema: GenMessage<TimeSeriesData> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_tensorboard_data, 0);

/**
 * A TensorboardTimeSeries data point.
 *
 * @generated from message google.cloud.aiplatform.v1.TimeSeriesDataPoint
 */
export type TimeSeriesDataPoint = Message<"google.cloud.aiplatform.v1.TimeSeriesDataPoint"> & {
  /**
   * Value of this time series data point.
   *
   * @generated from oneof google.cloud.aiplatform.v1.TimeSeriesDataPoint.value
   */
  value: {
    /**
     * A scalar value.
     *
     * @generated from field: google.cloud.aiplatform.v1.Scalar scalar = 3;
     */
    value: Scalar;
    case: "scalar";
  } | {
    /**
     * A tensor value.
     *
     * @generated from field: google.cloud.aiplatform.v1.TensorboardTensor tensor = 4;
     */
    value: TensorboardTensor;
    case: "tensor";
  } | {
    /**
     * A blob sequence value.
     *
     * @generated from field: google.cloud.aiplatform.v1.TensorboardBlobSequence blobs = 5;
     */
    value: TensorboardBlobSequence;
    case: "blobs";
  } | { case: undefined; value?: undefined };

  /**
   * Wall clock timestamp when this data point is generated by the end user.
   *
   * @generated from field: google.protobuf.Timestamp wall_time = 1;
   */
  wallTime?: Timestamp;

  /**
   * Step index of this data point within the run.
   *
   * @generated from field: int64 step = 2;
   */
  step: bigint;
};

/**
 * Describes the message google.cloud.aiplatform.v1.TimeSeriesDataPoint.
 * Use `create(TimeSeriesDataPointSchema)` to create a new message.
 */
export const TimeSeriesDataPointSchema: GenMessage<TimeSeriesDataPoint> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_tensorboard_data, 1);

/**
 * One point viewable on a scalar metric plot.
 *
 * @generated from message google.cloud.aiplatform.v1.Scalar
 */
export type Scalar = Message<"google.cloud.aiplatform.v1.Scalar"> & {
  /**
   * Value of the point at this step / timestamp.
   *
   * @generated from field: double value = 1;
   */
  value: number;
};

/**
 * Describes the message google.cloud.aiplatform.v1.Scalar.
 * Use `create(ScalarSchema)` to create a new message.
 */
export const ScalarSchema: GenMessage<Scalar> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_tensorboard_data, 2);

/**
 * One point viewable on a tensor metric plot.
 *
 * @generated from message google.cloud.aiplatform.v1.TensorboardTensor
 */
export type TensorboardTensor = Message<"google.cloud.aiplatform.v1.TensorboardTensor"> & {
  /**
   * Required. Serialized form of
   * https://github.com/tensorflow/tensorflow/blob/master/tensorflow/core/framework/tensor.proto
   *
   * @generated from field: bytes value = 1;
   */
  value: Uint8Array;

  /**
   * Optional. Version number of TensorProto used to serialize
   * [value][google.cloud.aiplatform.v1.TensorboardTensor.value].
   *
   * @generated from field: int32 version_number = 2;
   */
  versionNumber: number;
};

/**
 * Describes the message google.cloud.aiplatform.v1.TensorboardTensor.
 * Use `create(TensorboardTensorSchema)` to create a new message.
 */
export const TensorboardTensorSchema: GenMessage<TensorboardTensor> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_tensorboard_data, 3);

/**
 * One point viewable on a blob metric plot, but mostly just a wrapper message
 * to work around repeated fields can't be used directly within `oneof` fields.
 *
 * @generated from message google.cloud.aiplatform.v1.TensorboardBlobSequence
 */
export type TensorboardBlobSequence = Message<"google.cloud.aiplatform.v1.TensorboardBlobSequence"> & {
  /**
   * List of blobs contained within the sequence.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1.TensorboardBlob values = 1;
   */
  values: TensorboardBlob[];
};

/**
 * Describes the message google.cloud.aiplatform.v1.TensorboardBlobSequence.
 * Use `create(TensorboardBlobSequenceSchema)` to create a new message.
 */
export const TensorboardBlobSequenceSchema: GenMessage<TensorboardBlobSequence> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_tensorboard_data, 4);

/**
 * One blob (e.g, image, graph) viewable on a blob metric plot.
 *
 * @generated from message google.cloud.aiplatform.v1.TensorboardBlob
 */
export type TensorboardBlob = Message<"google.cloud.aiplatform.v1.TensorboardBlob"> & {
  /**
   * Output only. A URI safe key uniquely identifying a blob. Can be used to
   * locate the blob stored in the Cloud Storage bucket of the consumer project.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Optional. The bytes of the blob is not present unless it's returned by the
   * ReadTensorboardBlobData endpoint.
   *
   * @generated from field: bytes data = 2;
   */
  data: Uint8Array;
};

/**
 * Describes the message google.cloud.aiplatform.v1.TensorboardBlob.
 * Use `create(TensorboardBlobSchema)` to create a new message.
 */
export const TensorboardBlobSchema: GenMessage<TensorboardBlob> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_tensorboard_data, 5);
