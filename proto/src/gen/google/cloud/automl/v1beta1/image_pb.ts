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
// @generated from file google/cloud/automl/v1beta1/image.proto (package google.cloud.automl.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_cloud_automl_v1beta1_annotation_spec } from "./annotation_spec_pb";
import type { ClassificationType } from "./classification_pb";
import { file_google_cloud_automl_v1beta1_classification } from "./classification_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/automl/v1beta1/image.proto.
 */
export const file_google_cloud_automl_v1beta1_image: GenFile = /*@__PURE__*/
  fileDesc("Cidnb29nbGUvY2xvdWQvYXV0b21sL3YxYmV0YTEvaW1hZ2UucHJvdG8SG2dvb2dsZS5jbG91ZC5hdXRvbWwudjFiZXRhMSJyCiJJbWFnZUNsYXNzaWZpY2F0aW9uRGF0YXNldE1ldGFkYXRhEkwKE2NsYXNzaWZpY2F0aW9uX3R5cGUYASABKA4yLy5nb29nbGUuY2xvdWQuYXV0b21sLnYxYmV0YTEuQ2xhc3NpZmljYXRpb25UeXBlIiUKI0ltYWdlT2JqZWN0RGV0ZWN0aW9uRGF0YXNldE1ldGFkYXRhIrIBCiBJbWFnZUNsYXNzaWZpY2F0aW9uTW9kZWxNZXRhZGF0YRIVCg1iYXNlX21vZGVsX2lkGAEgASgJEhQKDHRyYWluX2J1ZGdldBgCIAEoAxISCgp0cmFpbl9jb3N0GAMgASgDEhMKC3N0b3BfcmVhc29uGAUgASgJEhIKCm1vZGVsX3R5cGUYByABKAkSEAoIbm9kZV9xcHMYDSABKAESEgoKbm9kZV9jb3VudBgOIAEoAyK+AQohSW1hZ2VPYmplY3REZXRlY3Rpb25Nb2RlbE1ldGFkYXRhEhIKCm1vZGVsX3R5cGUYASABKAkSEgoKbm9kZV9jb3VudBgDIAEoAxIQCghub2RlX3FwcxgEIAEoARITCgtzdG9wX3JlYXNvbhgFIAEoCRIlCh10cmFpbl9idWRnZXRfbWlsbGlfbm9kZV9ob3VycxgGIAEoAxIjCht0cmFpbl9jb3N0X21pbGxpX25vZGVfaG91cnMYByABKAMiQAoqSW1hZ2VDbGFzc2lmaWNhdGlvbk1vZGVsRGVwbG95bWVudE1ldGFkYXRhEhIKCm5vZGVfY291bnQYASABKAMiQQorSW1hZ2VPYmplY3REZXRlY3Rpb25Nb2RlbERlcGxveW1lbnRNZXRhZGF0YRISCgpub2RlX2NvdW50GAEgASgDQqcBCh9jb20uZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExQgpJbWFnZVByb3RvUAFaN2Nsb3VkLmdvb2dsZS5jb20vZ28vYXV0b21sL2FwaXYxYmV0YTEvYXV0b21scGI7YXV0b21scGLKAhtHb29nbGVcQ2xvdWRcQXV0b01sXFYxYmV0YTHqAh5Hb29nbGU6OkNsb3VkOjpBdXRvTUw6OlYxYmV0YTFiBnByb3RvMw", [file_google_cloud_automl_v1beta1_annotation_spec, file_google_cloud_automl_v1beta1_classification]);

/**
 * Dataset metadata that is specific to image classification.
 *
 * @generated from message google.cloud.automl.v1beta1.ImageClassificationDatasetMetadata
 */
export type ImageClassificationDatasetMetadata = Message<"google.cloud.automl.v1beta1.ImageClassificationDatasetMetadata"> & {
  /**
   * Required. Type of the classification problem.
   *
   * @generated from field: google.cloud.automl.v1beta1.ClassificationType classification_type = 1;
   */
  classificationType: ClassificationType;
};

/**
 * Describes the message google.cloud.automl.v1beta1.ImageClassificationDatasetMetadata.
 * Use `create(ImageClassificationDatasetMetadataSchema)` to create a new message.
 */
export const ImageClassificationDatasetMetadataSchema: GenMessage<ImageClassificationDatasetMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_image, 0);

/**
 * Dataset metadata specific to image object detection.
 *
 * @generated from message google.cloud.automl.v1beta1.ImageObjectDetectionDatasetMetadata
 */
export type ImageObjectDetectionDatasetMetadata = Message<"google.cloud.automl.v1beta1.ImageObjectDetectionDatasetMetadata"> & {
};

/**
 * Describes the message google.cloud.automl.v1beta1.ImageObjectDetectionDatasetMetadata.
 * Use `create(ImageObjectDetectionDatasetMetadataSchema)` to create a new message.
 */
export const ImageObjectDetectionDatasetMetadataSchema: GenMessage<ImageObjectDetectionDatasetMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_image, 1);

/**
 * Model metadata for image classification.
 *
 * @generated from message google.cloud.automl.v1beta1.ImageClassificationModelMetadata
 */
export type ImageClassificationModelMetadata = Message<"google.cloud.automl.v1beta1.ImageClassificationModelMetadata"> & {
  /**
   * Optional. The ID of the `base` model. If it is specified, the new model
   * will be created based on the `base` model. Otherwise, the new model will be
   * created from scratch. The `base` model must be in the same
   * `project` and `location` as the new model to create, and have the same
   * `model_type`.
   *
   * @generated from field: string base_model_id = 1;
   */
  baseModelId: string;

  /**
   * Required. The train budget of creating this model, expressed in hours. The
   * actual `train_cost` will be equal or less than this value.
   *
   * @generated from field: int64 train_budget = 2;
   */
  trainBudget: bigint;

  /**
   * Output only. The actual train cost of creating this model, expressed in
   * hours. If this model is created from a `base` model, the train cost used
   * to create the `base` model are not included.
   *
   * @generated from field: int64 train_cost = 3;
   */
  trainCost: bigint;

  /**
   * Output only. The reason that this create model operation stopped,
   * e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`.
   *
   * @generated from field: string stop_reason = 5;
   */
  stopReason: string;

  /**
   * Optional. Type of the model. The available values are:
   * *   `cloud` - Model to be used via prediction calls to AutoML API.
   *               This is the default value.
   * *   `mobile-low-latency-1` - A model that, in addition to providing
   *               prediction via AutoML API, can also be exported (see
   *               [AutoMl.ExportModel][google.cloud.automl.v1beta1.AutoMl.ExportModel]) and used on a mobile or edge device
   *               with TensorFlow afterwards. Expected to have low latency, but
   *               may have lower prediction quality than other models.
   * *   `mobile-versatile-1` - A model that, in addition to providing
   *               prediction via AutoML API, can also be exported (see
   *               [AutoMl.ExportModel][google.cloud.automl.v1beta1.AutoMl.ExportModel]) and used on a mobile or edge device
   *               with TensorFlow afterwards.
   * *   `mobile-high-accuracy-1` - A model that, in addition to providing
   *               prediction via AutoML API, can also be exported (see
   *               [AutoMl.ExportModel][google.cloud.automl.v1beta1.AutoMl.ExportModel]) and used on a mobile or edge device
   *               with TensorFlow afterwards.  Expected to have a higher
   *               latency, but should also have a higher prediction quality
   *               than other models.
   * *   `mobile-core-ml-low-latency-1` - A model that, in addition to providing
   *               prediction via AutoML API, can also be exported (see
   *               [AutoMl.ExportModel][google.cloud.automl.v1beta1.AutoMl.ExportModel]) and used on a mobile device with Core
   *               ML afterwards. Expected to have low latency, but may have
   *               lower prediction quality than other models.
   * *   `mobile-core-ml-versatile-1` - A model that, in addition to providing
   *               prediction via AutoML API, can also be exported (see
   *               [AutoMl.ExportModel][google.cloud.automl.v1beta1.AutoMl.ExportModel]) and used on a mobile device with Core
   *               ML afterwards.
   * *   `mobile-core-ml-high-accuracy-1` - A model that, in addition to
   *               providing prediction via AutoML API, can also be exported
   *               (see [AutoMl.ExportModel][google.cloud.automl.v1beta1.AutoMl.ExportModel]) and used on a mobile device with
   *               Core ML afterwards.  Expected to have a higher latency, but
   *               should also have a higher prediction quality than other
   *               models.
   *
   * @generated from field: string model_type = 7;
   */
  modelType: string;

  /**
   * Output only. An approximate number of online prediction QPS that can
   * be supported by this model per each node on which it is deployed.
   *
   * @generated from field: double node_qps = 13;
   */
  nodeQps: number;

  /**
   * Output only. The number of nodes this model is deployed on. A node is an
   * abstraction of a machine resource, which can handle online prediction QPS
   * as given in the node_qps field.
   *
   * @generated from field: int64 node_count = 14;
   */
  nodeCount: bigint;
};

/**
 * Describes the message google.cloud.automl.v1beta1.ImageClassificationModelMetadata.
 * Use `create(ImageClassificationModelMetadataSchema)` to create a new message.
 */
export const ImageClassificationModelMetadataSchema: GenMessage<ImageClassificationModelMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_image, 2);

/**
 * Model metadata specific to image object detection.
 *
 * @generated from message google.cloud.automl.v1beta1.ImageObjectDetectionModelMetadata
 */
export type ImageObjectDetectionModelMetadata = Message<"google.cloud.automl.v1beta1.ImageObjectDetectionModelMetadata"> & {
  /**
   * Optional. Type of the model. The available values are:
   * *   `cloud-high-accuracy-1` - (default) A model to be used via prediction
   *               calls to AutoML API. Expected to have a higher latency, but
   *               should also have a higher prediction quality than other
   *               models.
   * *   `cloud-low-latency-1` -  A model to be used via prediction
   *               calls to AutoML API. Expected to have low latency, but may
   *               have lower prediction quality than other models.
   * *   `mobile-low-latency-1` - A model that, in addition to providing
   *               prediction via AutoML API, can also be exported (see
   *               [AutoMl.ExportModel][google.cloud.automl.v1beta1.AutoMl.ExportModel]) and used on a mobile or edge device
   *               with TensorFlow afterwards. Expected to have low latency, but
   *               may have lower prediction quality than other models.
   * *   `mobile-versatile-1` - A model that, in addition to providing
   *               prediction via AutoML API, can also be exported (see
   *               [AutoMl.ExportModel][google.cloud.automl.v1beta1.AutoMl.ExportModel]) and used on a mobile or edge device
   *               with TensorFlow afterwards.
   * *   `mobile-high-accuracy-1` - A model that, in addition to providing
   *               prediction via AutoML API, can also be exported (see
   *               [AutoMl.ExportModel][google.cloud.automl.v1beta1.AutoMl.ExportModel]) and used on a mobile or edge device
   *               with TensorFlow afterwards.  Expected to have a higher
   *               latency, but should also have a higher prediction quality
   *               than other models.
   *
   * @generated from field: string model_type = 1;
   */
  modelType: string;

  /**
   * Output only. The number of nodes this model is deployed on. A node is an
   * abstraction of a machine resource, which can handle online prediction QPS
   * as given in the qps_per_node field.
   *
   * @generated from field: int64 node_count = 3;
   */
  nodeCount: bigint;

  /**
   * Output only. An approximate number of online prediction QPS that can
   * be supported by this model per each node on which it is deployed.
   *
   * @generated from field: double node_qps = 4;
   */
  nodeQps: number;

  /**
   * Output only. The reason that this create model operation stopped,
   * e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`.
   *
   * @generated from field: string stop_reason = 5;
   */
  stopReason: string;

  /**
   * The train budget of creating this model, expressed in milli node
   * hours i.e. 1,000 value in this field means 1 node hour. The actual
   * `train_cost` will be equal or less than this value. If further model
   * training ceases to provide any improvements, it will stop without using
   * full budget and the stop_reason will be `MODEL_CONVERGED`.
   * Note, node_hour  = actual_hour * number_of_nodes_invovled.
   * For model type `cloud-high-accuracy-1`(default) and `cloud-low-latency-1`,
   * the train budget must be between 20,000 and 900,000 milli node hours,
   * inclusive. The default value is 216, 000 which represents one day in
   * wall time.
   * For model type `mobile-low-latency-1`, `mobile-versatile-1`,
   * `mobile-high-accuracy-1`, `mobile-core-ml-low-latency-1`,
   * `mobile-core-ml-versatile-1`, `mobile-core-ml-high-accuracy-1`, the train
   * budget must be between 1,000 and 100,000 milli node hours, inclusive.
   * The default value is 24, 000 which represents one day in wall time.
   *
   * @generated from field: int64 train_budget_milli_node_hours = 6;
   */
  trainBudgetMilliNodeHours: bigint;

  /**
   * Output only. The actual train cost of creating this model, expressed in
   * milli node hours, i.e. 1,000 value in this field means 1 node hour.
   * Guaranteed to not exceed the train budget.
   *
   * @generated from field: int64 train_cost_milli_node_hours = 7;
   */
  trainCostMilliNodeHours: bigint;
};

/**
 * Describes the message google.cloud.automl.v1beta1.ImageObjectDetectionModelMetadata.
 * Use `create(ImageObjectDetectionModelMetadataSchema)` to create a new message.
 */
export const ImageObjectDetectionModelMetadataSchema: GenMessage<ImageObjectDetectionModelMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_image, 3);

/**
 * Model deployment metadata specific to Image Classification.
 *
 * @generated from message google.cloud.automl.v1beta1.ImageClassificationModelDeploymentMetadata
 */
export type ImageClassificationModelDeploymentMetadata = Message<"google.cloud.automl.v1beta1.ImageClassificationModelDeploymentMetadata"> & {
  /**
   * Input only. The number of nodes to deploy the model on. A node is an
   * abstraction of a machine resource, which can handle online prediction QPS
   * as given in the model's
   *
   * [node_qps][google.cloud.automl.v1beta1.ImageClassificationModelMetadata.node_qps].
   * Must be between 1 and 100, inclusive on both ends.
   *
   * @generated from field: int64 node_count = 1;
   */
  nodeCount: bigint;
};

/**
 * Describes the message google.cloud.automl.v1beta1.ImageClassificationModelDeploymentMetadata.
 * Use `create(ImageClassificationModelDeploymentMetadataSchema)` to create a new message.
 */
export const ImageClassificationModelDeploymentMetadataSchema: GenMessage<ImageClassificationModelDeploymentMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_image, 4);

/**
 * Model deployment metadata specific to Image Object Detection.
 *
 * @generated from message google.cloud.automl.v1beta1.ImageObjectDetectionModelDeploymentMetadata
 */
export type ImageObjectDetectionModelDeploymentMetadata = Message<"google.cloud.automl.v1beta1.ImageObjectDetectionModelDeploymentMetadata"> & {
  /**
   * Input only. The number of nodes to deploy the model on. A node is an
   * abstraction of a machine resource, which can handle online prediction QPS
   * as given in the model's
   *
   * [qps_per_node][google.cloud.automl.v1beta1.ImageObjectDetectionModelMetadata.qps_per_node].
   * Must be between 1 and 100, inclusive on both ends.
   *
   * @generated from field: int64 node_count = 1;
   */
  nodeCount: bigint;
};

/**
 * Describes the message google.cloud.automl.v1beta1.ImageObjectDetectionModelDeploymentMetadata.
 * Use `create(ImageObjectDetectionModelDeploymentMetadataSchema)` to create a new message.
 */
export const ImageObjectDetectionModelDeploymentMetadataSchema: GenMessage<ImageObjectDetectionModelDeploymentMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_image, 5);
