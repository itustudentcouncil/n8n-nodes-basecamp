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
// @generated from file google/cloud/aiplatform/v1beta1/model_monitor.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { ExplanationSpec } from "./explanation_pb";
import { file_google_cloud_aiplatform_v1beta1_explanation } from "./explanation_pb";
import type { ModelMonitoringInput, ModelMonitoringNotificationSpec, ModelMonitoringObjectiveSpec_TabularObjective, ModelMonitoringOutputSpec } from "./model_monitoring_spec_pb";
import { file_google_cloud_aiplatform_v1beta1_model_monitoring_spec } from "./model_monitoring_spec_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/model_monitor.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_model_monitor: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL21vZGVsX21vbml0b3IucHJvdG8SH2dvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEi0gkKDE1vZGVsTW9uaXRvchJrChF0YWJ1bGFyX29iamVjdGl2ZRgLIAEoCzJOLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuTW9kZWxNb25pdG9yaW5nT2JqZWN0aXZlU3BlYy5UYWJ1bGFyT2JqZWN0aXZlSAASEQoEbmFtZRgBIAEoCUID4EEFEhQKDGRpc3BsYXlfbmFtZRgCIAEoCRJkChdtb2RlbF9tb25pdG9yaW5nX3RhcmdldBgDIAEoCzJDLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuTW9kZWxNb25pdG9yLk1vZGVsTW9uaXRvcmluZ1RhcmdldBJPChB0cmFpbmluZ19kYXRhc2V0GAogASgLMjUuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5Nb2RlbE1vbml0b3JpbmdJbnB1dBJbChFub3RpZmljYXRpb25fc3BlYxgMIAEoCzJALmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuTW9kZWxNb25pdG9yaW5nTm90aWZpY2F0aW9uU3BlYxJPCgtvdXRwdXRfc3BlYxgNIAEoCzI6Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuTW9kZWxNb25pdG9yaW5nT3V0cHV0U3BlYxJKChBleHBsYW5hdGlvbl9zcGVjGBAgASgLMjAuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5FeHBsYW5hdGlvblNwZWMSVwoXbW9kZWxfbW9uaXRvcmluZ19zY2hlbWEYCSABKAsyNi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLk1vZGVsTW9uaXRvcmluZ1NjaGVtYRI0CgtjcmVhdGVfdGltZRgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxI0Cgt1cGRhdGVfdGltZRgHIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIaCg1zYXRpc2ZpZXNfcHpzGBEgASgIQgPgQQMSGgoNc2F0aXNmaWVzX3B6aRgSIAEoCEID4EEDGvQBChVNb2RlbE1vbml0b3JpbmdUYXJnZXQSbQoMdmVydGV4X21vZGVsGAEgASgLMlUuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5Nb2RlbE1vbml0b3IuTW9kZWxNb25pdG9yaW5nVGFyZ2V0LlZlcnRleE1vZGVsU291cmNlSAAaYgoRVmVydGV4TW9kZWxTb3VyY2USMwoFbW9kZWwYASABKAlCJPpBIQofYWlwbGF0Zm9ybS5nb29nbGVhcGlzLmNvbS9Nb2RlbBIYChBtb2RlbF92ZXJzaW9uX2lkGAIgASgJQggKBnNvdXJjZTpy6kFvCiZhaXBsYXRmb3JtLmdvb2dsZWFwaXMuY29tL01vZGVsTW9uaXRvchJFcHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L21vZGVsTW9uaXRvcnMve21vZGVsX21vbml0b3J9QhMKEWRlZmF1bHRfb2JqZWN0aXZlIvUCChVNb2RlbE1vbml0b3JpbmdTY2hlbWESWgoOZmVhdHVyZV9maWVsZHMYASADKAsyQi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLk1vZGVsTW9uaXRvcmluZ1NjaGVtYS5GaWVsZFNjaGVtYRJdChFwcmVkaWN0aW9uX2ZpZWxkcxgCIAMoCzJCLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuTW9kZWxNb25pdG9yaW5nU2NoZW1hLkZpZWxkU2NoZW1hEl8KE2dyb3VuZF90cnV0aF9maWVsZHMYAyADKAsyQi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLk1vZGVsTW9uaXRvcmluZ1NjaGVtYS5GaWVsZFNjaGVtYRpACgtGaWVsZFNjaGVtYRIMCgRuYW1lGAEgASgJEhEKCWRhdGFfdHlwZRgCIAEoCRIQCghyZXBlYXRlZBgDIAEoCELoAQojY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTFCEU1vZGVsTW9uaXRvclByb3RvUAFaQ2Nsb3VkLmdvb2dsZS5jb20vZ28vYWlwbGF0Zm9ybS9hcGl2MWJldGExL2FpcGxhdGZvcm1wYjthaXBsYXRmb3JtcGKqAh9Hb29nbGUuQ2xvdWQuQUlQbGF0Zm9ybS5WMUJldGExygIfR29vZ2xlXENsb3VkXEFJUGxhdGZvcm1cVjFiZXRhMeoCIkdvb2dsZTo6Q2xvdWQ6OkFJUGxhdGZvcm06OlYxYmV0YTFiBnByb3RvMw", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_aiplatform_v1beta1_explanation, file_google_cloud_aiplatform_v1beta1_model_monitoring_spec, file_google_protobuf_timestamp]);

/**
 * Vertex AI Model Monitoring Service serves as a central hub for the analysis
 * and visualization of data quality and performance related to models.
 * ModelMonitor stands as a top level resource for overseeing your model
 * monitoring tasks.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ModelMonitor
 */
export type ModelMonitor = Message<"google.cloud.aiplatform.v1beta1.ModelMonitor"> & {
  /**
   * Optional default monitoring objective, it can be overridden in the
   * ModelMonitoringJob objective spec.
   *
   * @generated from oneof google.cloud.aiplatform.v1beta1.ModelMonitor.default_objective
   */
  defaultObjective: {
    /**
     * Optional default tabular model monitoring objective.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.ModelMonitoringObjectiveSpec.TabularObjective tabular_objective = 11;
     */
    value: ModelMonitoringObjectiveSpec_TabularObjective;
    case: "tabularObjective";
  } | { case: undefined; value?: undefined };

  /**
   * Immutable. Resource name of the ModelMonitor. Format:
   * `projects/{project}/locations/{location}/modelMonitors/{model_monitor}`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The display name of the ModelMonitor.
   * The name can be up to 128 characters long and can consist of any UTF-8.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * The entity that is subject to analysis.
   * Currently only models in Vertex AI Model Registry are supported. If you
   * want to analyze the model which is outside the Vertex AI, you could
   * register a model in Vertex AI Model Registry using just a display name.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ModelMonitor.ModelMonitoringTarget model_monitoring_target = 3;
   */
  modelMonitoringTarget?: ModelMonitor_ModelMonitoringTarget;

  /**
   * Optional training dataset used to train the model.
   * It can serve as a reference dataset to identify changes in production.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ModelMonitoringInput training_dataset = 10;
   */
  trainingDataset?: ModelMonitoringInput;

  /**
   * Optional default notification spec, it can be overridden in the
   * ModelMonitoringJob notification spec.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ModelMonitoringNotificationSpec notification_spec = 12;
   */
  notificationSpec?: ModelMonitoringNotificationSpec;

  /**
   * Optional default monitoring metrics/logs export spec, it can be overridden
   * in the ModelMonitoringJob output spec.
   * If not specified, a default Google Cloud Storage bucket will be created
   * under your project.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ModelMonitoringOutputSpec output_spec = 13;
   */
  outputSpec?: ModelMonitoringOutputSpec;

  /**
   * Optional model explanation spec. It is used for feature attribution
   * monitoring.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ExplanationSpec explanation_spec = 16;
   */
  explanationSpec?: ExplanationSpec;

  /**
   * Monitoring Schema is to specify the model's features, prediction outputs
   * and ground truth properties. It is used to extract pertinent data from the
   * dataset and to process features based on their properties.
   * Make sure that the schema aligns with your dataset, if it does not, we will
   * be unable to extract data from the dataset.
   * It is required for most models, but optional for Vertex AI AutoML Tables
   * unless the schem information is not available.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ModelMonitoringSchema model_monitoring_schema = 9;
   */
  modelMonitoringSchema?: ModelMonitoringSchema;

  /**
   * Output only. Timestamp when this ModelMonitor was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 6;
   */
  createTime?: Timestamp;

  /**
   * Output only. Timestamp when this ModelMonitor was updated most recently.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 7;
   */
  updateTime?: Timestamp;

  /**
   * Output only. Reserved for future use.
   *
   * @generated from field: bool satisfies_pzs = 17;
   */
  satisfiesPzs: boolean;

  /**
   * Output only. Reserved for future use.
   *
   * @generated from field: bool satisfies_pzi = 18;
   */
  satisfiesPzi: boolean;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ModelMonitor.
 * Use `create(ModelMonitorSchema)` to create a new message.
 */
export const ModelMonitorSchema: GenMessage<ModelMonitor> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitor, 0);

/**
 * The monitoring target refers to the entity that is subject to analysis.
 * e.g. Vertex AI Model version.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ModelMonitor.ModelMonitoringTarget
 */
export type ModelMonitor_ModelMonitoringTarget = Message<"google.cloud.aiplatform.v1beta1.ModelMonitor.ModelMonitoringTarget"> & {
  /**
   * @generated from oneof google.cloud.aiplatform.v1beta1.ModelMonitor.ModelMonitoringTarget.source
   */
  source: {
    /**
     * Model in Vertex AI Model Registry.
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.ModelMonitor.ModelMonitoringTarget.VertexModelSource vertex_model = 1;
     */
    value: ModelMonitor_ModelMonitoringTarget_VertexModelSource;
    case: "vertexModel";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ModelMonitor.ModelMonitoringTarget.
 * Use `create(ModelMonitor_ModelMonitoringTargetSchema)` to create a new message.
 */
export const ModelMonitor_ModelMonitoringTargetSchema: GenMessage<ModelMonitor_ModelMonitoringTarget> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitor, 0, 0);

/**
 * Model in Vertex AI Model Registry.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ModelMonitor.ModelMonitoringTarget.VertexModelSource
 */
export type ModelMonitor_ModelMonitoringTarget_VertexModelSource = Message<"google.cloud.aiplatform.v1beta1.ModelMonitor.ModelMonitoringTarget.VertexModelSource"> & {
  /**
   * Model resource name. Format:
   * projects/{project}/locations/{location}/models/{model}.
   *
   * @generated from field: string model = 1;
   */
  model: string;

  /**
   * Model version id.
   *
   * @generated from field: string model_version_id = 2;
   */
  modelVersionId: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ModelMonitor.ModelMonitoringTarget.VertexModelSource.
 * Use `create(ModelMonitor_ModelMonitoringTarget_VertexModelSourceSchema)` to create a new message.
 */
export const ModelMonitor_ModelMonitoringTarget_VertexModelSourceSchema: GenMessage<ModelMonitor_ModelMonitoringTarget_VertexModelSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitor, 0, 0, 0);

/**
 * The Model Monitoring Schema definition.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ModelMonitoringSchema
 */
export type ModelMonitoringSchema = Message<"google.cloud.aiplatform.v1beta1.ModelMonitoringSchema"> & {
  /**
   * Feature names of the model. Vertex AI will try to match the features from
   * your dataset as follows:
   *  * For 'csv' files, the header names are required, and we will extract the
   *    corresponding feature values when the header names align with the
   *    feature names.
   *  * For 'jsonl' files, we will extract the corresponding feature values if
   *    the key names match the feature names.
   *    Note: Nested features are not supported, so please ensure your features
   *    are flattened. Ensure the feature values are scalar or an array of
   *    scalars.
   *  * For 'bigquery' dataset, we will extract the corresponding feature values
   *    if the column names match the feature names.
   *    Note: The column type can be a scalar or an array of scalars. STRUCT or
   *    JSON types are not supported. You may use SQL queries to select or
   *    aggregate the relevant features from your original table. However,
   *    ensure that the 'schema' of the query results meets our requirements.
   *  * For the Vertex AI Endpoint Request Response Logging table or Vertex AI
   *    Batch Prediction Job results. If the
   *    [instance_type][google.cloud.aiplatform.v1beta1.ModelMonitoringSchema.instance_type]
   *    is an array, ensure that the sequence in
   *    [feature_fields][google.cloud.aiplatform.v1beta1.ModelMonitoringSchema.feature_fields]
   *    matches the order of features in the prediction instance. We will match
   *    the feature with the array in the order specified in [feature_fields].
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.ModelMonitoringSchema.FieldSchema feature_fields = 1;
   */
  featureFields: ModelMonitoringSchema_FieldSchema[];

  /**
   * Prediction output names of the model. The requirements are the same as the
   * [feature_fields][google.cloud.aiplatform.v1beta1.ModelMonitoringSchema.feature_fields].
   * For AutoML Tables, the prediction output name presented in schema will be:
   * `predicted_{target_column}`, the `target_column` is the one you specified
   * when you train the model.
   * For Prediction output drift analysis:
   *  * AutoML Classification, the distribution of the argmax label will be
   *    analyzed.
   *  * AutoML Regression, the distribution of the value will be analyzed.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.ModelMonitoringSchema.FieldSchema prediction_fields = 2;
   */
  predictionFields: ModelMonitoringSchema_FieldSchema[];

  /**
   * Target /ground truth names of the model.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.ModelMonitoringSchema.FieldSchema ground_truth_fields = 3;
   */
  groundTruthFields: ModelMonitoringSchema_FieldSchema[];
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ModelMonitoringSchema.
 * Use `create(ModelMonitoringSchemaSchema)` to create a new message.
 */
export const ModelMonitoringSchemaSchema: GenMessage<ModelMonitoringSchema> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitor, 1);

/**
 * Schema field definition.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ModelMonitoringSchema.FieldSchema
 */
export type ModelMonitoringSchema_FieldSchema = Message<"google.cloud.aiplatform.v1beta1.ModelMonitoringSchema.FieldSchema"> & {
  /**
   * Field name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Supported data types are:
   * `float`
   * `integer`
   * `boolean`
   * `string`
   * `categorical`
   *
   * @generated from field: string data_type = 2;
   */
  dataType: string;

  /**
   * Describes if the schema field is an array of given data type.
   *
   * @generated from field: bool repeated = 3;
   */
  repeated: boolean;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ModelMonitoringSchema.FieldSchema.
 * Use `create(ModelMonitoringSchema_FieldSchemaSchema)` to create a new message.
 */
export const ModelMonitoringSchema_FieldSchemaSchema: GenMessage<ModelMonitoringSchema_FieldSchema> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_model_monitor, 1, 0);
