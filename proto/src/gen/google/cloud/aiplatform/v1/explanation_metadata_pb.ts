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
// @generated from file google/cloud/aiplatform/v1/explanation_metadata.proto (package google.cloud.aiplatform.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { Value } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/explanation_metadata.proto.
 */
export const file_google_cloud_aiplatform_v1_explanation_metadata: GenFile = /*@__PURE__*/
  fileDesc("CjVnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS9leHBsYW5hdGlvbl9tZXRhZGF0YS5wcm90bxIaZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEizxIKE0V4cGxhbmF0aW9uTWV0YWRhdGESUAoGaW5wdXRzGAEgAygLMjsuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuRXhwbGFuYXRpb25NZXRhZGF0YS5JbnB1dHNFbnRyeUID4EECElIKB291dHB1dHMYAiADKAsyPC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5FeHBsYW5hdGlvbk1ldGFkYXRhLk91dHB1dHNFbnRyeUID4EECEicKH2ZlYXR1cmVfYXR0cmlidXRpb25zX3NjaGVtYV91cmkYAyABKAkSGwoTbGF0ZW50X3NwYWNlX3NvdXJjZRgFIAEoCRrEDQoNSW5wdXRNZXRhZGF0YRIvCg9pbnB1dF9iYXNlbGluZXMYASADKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWUSGQoRaW5wdXRfdGVuc29yX25hbWUYAiABKAkSWAoIZW5jb2RpbmcYAyABKA4yRi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5FeHBsYW5hdGlvbk1ldGFkYXRhLklucHV0TWV0YWRhdGEuRW5jb2RpbmcSEAoIbW9kYWxpdHkYBCABKAkSbgoUZmVhdHVyZV92YWx1ZV9kb21haW4YBSABKAsyUC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5FeHBsYW5hdGlvbk1ldGFkYXRhLklucHV0TWV0YWRhdGEuRmVhdHVyZVZhbHVlRG9tYWluEhsKE2luZGljZXNfdGVuc29yX25hbWUYBiABKAkSHwoXZGVuc2Vfc2hhcGVfdGVuc29yX25hbWUYByABKAkSHQoVaW5kZXhfZmVhdHVyZV9tYXBwaW5nGAggAygJEhsKE2VuY29kZWRfdGVuc29yX25hbWUYCSABKAkSMQoRZW5jb2RlZF9iYXNlbGluZXMYCiADKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWUSYgoNdmlzdWFsaXphdGlvbhgLIAEoCzJLLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLkV4cGxhbmF0aW9uTWV0YWRhdGEuSW5wdXRNZXRhZGF0YS5WaXN1YWxpemF0aW9uEhIKCmdyb3VwX25hbWUYDCABKAkaagoSRmVhdHVyZVZhbHVlRG9tYWluEhEKCW1pbl92YWx1ZRgBIAEoAhIRCgltYXhfdmFsdWUYAiABKAISFQoNb3JpZ2luYWxfbWVhbhgDIAEoAhIXCg9vcmlnaW5hbF9zdGRkZXYYBCABKAIa1gYKDVZpc3VhbGl6YXRpb24SXgoEdHlwZRgBIAEoDjJQLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLkV4cGxhbmF0aW9uTWV0YWRhdGEuSW5wdXRNZXRhZGF0YS5WaXN1YWxpemF0aW9uLlR5cGUSZgoIcG9sYXJpdHkYAiABKA4yVC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5FeHBsYW5hdGlvbk1ldGFkYXRhLklucHV0TWV0YWRhdGEuVmlzdWFsaXphdGlvbi5Qb2xhcml0eRJnCgljb2xvcl9tYXAYAyABKA4yVC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5FeHBsYW5hdGlvbk1ldGFkYXRhLklucHV0TWV0YWRhdGEuVmlzdWFsaXphdGlvbi5Db2xvck1hcBIfChdjbGlwX3BlcmNlbnRfdXBwZXJib3VuZBgEIAEoAhIfChdjbGlwX3BlcmNlbnRfbG93ZXJib3VuZBgFIAEoAhJtCgxvdmVybGF5X3R5cGUYBiABKA4yVy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5FeHBsYW5hdGlvbk1ldGFkYXRhLklucHV0TWV0YWRhdGEuVmlzdWFsaXphdGlvbi5PdmVybGF5VHlwZSI2CgRUeXBlEhQKEFRZUEVfVU5TUEVDSUZJRUQQABIKCgZQSVhFTFMQARIMCghPVVRMSU5FUxACIkoKCFBvbGFyaXR5EhgKFFBPTEFSSVRZX1VOU1BFQ0lGSUVEEAASDAoIUE9TSVRJVkUQARIMCghORUdBVElWRRACEggKBEJPVEgQAyJ7CghDb2xvck1hcBIZChVDT0xPUl9NQVBfVU5TUEVDSUZJRUQQABIOCgpQSU5LX0dSRUVOEAESCwoHVklSSURJUxACEgcKA1JFRBADEgkKBUdSRUVOEAQSDQoJUkVEX0dSRUVOEAYSFAoQUElOS19XSElURV9HUkVFThAFImIKC092ZXJsYXlUeXBlEhwKGE9WRVJMQVlfVFlQRV9VTlNQRUNJRklFRBAAEggKBE5PTkUQARIMCghPUklHSU5BTBACEg0KCUdSQVlTQ0FMRRADEg4KCk1BU0tfQkxBQ0sQBCKgAQoIRW5jb2RpbmcSGAoURU5DT0RJTkdfVU5TUEVDSUZJRUQQABIMCghJREVOVElUWRABEhMKD0JBR19PRl9GRUFUVVJFUxACEhoKFkJBR19PRl9GRUFUVVJFU19TUEFSU0UQAxINCglJTkRJQ0FUT1IQBBIWChJDT01CSU5FRF9FTUJFRERJTkcQBRIUChBDT05DQVRfRU1CRURESU5HEAYapgEKDk91dHB1dE1ldGFkYXRhEjwKGmluZGV4X2Rpc3BsYXlfbmFtZV9tYXBwaW5nGAEgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlSAASIgoYZGlzcGxheV9uYW1lX21hcHBpbmdfa2V5GAIgASgJSAASGgoSb3V0cHV0X3RlbnNvcl9uYW1lGAMgASgJQhYKFGRpc3BsYXlfbmFtZV9tYXBwaW5nGmwKC0lucHV0c0VudHJ5EgsKA2tleRgBIAEoCRJMCgV2YWx1ZRgCIAEoCzI9Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLkV4cGxhbmF0aW9uTWV0YWRhdGEuSW5wdXRNZXRhZGF0YToCOAEabgoMT3V0cHV0c0VudHJ5EgsKA2tleRgBIAEoCRJNCgV2YWx1ZRgCIAEoCzI+Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLkV4cGxhbmF0aW9uTWV0YWRhdGEuT3V0cHV0TWV0YWRhdGE6AjgBQtYBCh5jb20uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFCGEV4cGxhbmF0aW9uTWV0YWRhdGFQcm90b1ABWj5jbG91ZC5nb29nbGUuY29tL2dvL2FpcGxhdGZvcm0vYXBpdjEvYWlwbGF0Zm9ybXBiO2FpcGxhdGZvcm1wYqoCGkdvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxygIaR29vZ2xlXENsb3VkXEFJUGxhdGZvcm1cVjHqAh1Hb29nbGU6OkNsb3VkOjpBSVBsYXRmb3JtOjpWMWIGcHJvdG8z", [file_google_api_field_behavior, file_google_protobuf_struct]);

/**
 * Metadata describing the Model's input and output for explanation.
 *
 * @generated from message google.cloud.aiplatform.v1.ExplanationMetadata
 */
export type ExplanationMetadata = Message<"google.cloud.aiplatform.v1.ExplanationMetadata"> & {
  /**
   * Required. Map from feature names to feature input metadata. Keys are the
   * name of the features. Values are the specification of the feature.
   *
   * An empty InputMetadata is valid. It describes a text feature which has the
   * name specified as the key in
   * [ExplanationMetadata.inputs][google.cloud.aiplatform.v1.ExplanationMetadata.inputs].
   * The baseline of the empty feature is chosen by Vertex AI.
   *
   * For Vertex AI-provided Tensorflow images, the key can be any friendly
   * name of the feature. Once specified,
   * [featureAttributions][google.cloud.aiplatform.v1.Attribution.feature_attributions]
   * are keyed by this key (if not grouped with another feature).
   *
   * For custom images, the key must match with the key in
   * [instance][google.cloud.aiplatform.v1.ExplainRequest.instances].
   *
   * @generated from field: map<string, google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata> inputs = 1;
   */
  inputs: { [key: string]: ExplanationMetadata_InputMetadata };

  /**
   * Required. Map from output names to output metadata.
   *
   * For Vertex AI-provided Tensorflow images, keys can be any user defined
   * string that consists of any UTF-8 characters.
   *
   * For custom images, keys are the name of the output field in the prediction
   * to be explained.
   *
   * Currently only one key is allowed.
   *
   * @generated from field: map<string, google.cloud.aiplatform.v1.ExplanationMetadata.OutputMetadata> outputs = 2;
   */
  outputs: { [key: string]: ExplanationMetadata_OutputMetadata };

  /**
   * Points to a YAML file stored on Google Cloud Storage describing the format
   * of the [feature
   * attributions][google.cloud.aiplatform.v1.Attribution.feature_attributions].
   * The schema is defined as an OpenAPI 3.0.2 [Schema
   * Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject).
   * AutoML tabular Models always have this field populated by Vertex AI.
   * Note: The URI given on output may be different, including the URI scheme,
   * than the one given on input. The output URI will point to a location where
   * the user only has a read access.
   *
   * @generated from field: string feature_attributions_schema_uri = 3;
   */
  featureAttributionsSchemaUri: string;

  /**
   * Name of the source to generate embeddings for example based explanations.
   *
   * @generated from field: string latent_space_source = 5;
   */
  latentSpaceSource: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ExplanationMetadata.
 * Use `create(ExplanationMetadataSchema)` to create a new message.
 */
export const ExplanationMetadataSchema: GenMessage<ExplanationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_explanation_metadata, 0);

/**
 * Metadata of the input of a feature.
 *
 * Fields other than
 * [InputMetadata.input_baselines][google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.input_baselines]
 * are applicable only for Models that are using Vertex AI-provided images for
 * Tensorflow.
 *
 * @generated from message google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata
 */
export type ExplanationMetadata_InputMetadata = Message<"google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata"> & {
  /**
   * Baseline inputs for this feature.
   *
   * If no baseline is specified, Vertex AI chooses the baseline for this
   * feature. If multiple baselines are specified, Vertex AI returns the
   * average attributions across them in
   * [Attribution.feature_attributions][google.cloud.aiplatform.v1.Attribution.feature_attributions].
   *
   * For Vertex AI-provided Tensorflow images (both 1.x and 2.x), the shape
   * of each baseline must match the shape of the input tensor. If a scalar is
   * provided, we broadcast to the same shape as the input tensor.
   *
   * For custom images, the element of the baselines must be in the same
   * format as the feature's input in the
   * [instance][google.cloud.aiplatform.v1.ExplainRequest.instances][]. The
   * schema of any single instance may be specified via Endpoint's
   * DeployedModels' [Model's][google.cloud.aiplatform.v1.DeployedModel.model]
   * [PredictSchemata's][google.cloud.aiplatform.v1.Model.predict_schemata]
   * [instance_schema_uri][google.cloud.aiplatform.v1.PredictSchemata.instance_schema_uri].
   *
   * @generated from field: repeated google.protobuf.Value input_baselines = 1;
   */
  inputBaselines: Value[];

  /**
   * Name of the input tensor for this feature. Required and is only
   * applicable to Vertex AI-provided images for Tensorflow.
   *
   * @generated from field: string input_tensor_name = 2;
   */
  inputTensorName: string;

  /**
   * Defines how the feature is encoded into the input tensor. Defaults to
   * IDENTITY.
   *
   * @generated from field: google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Encoding encoding = 3;
   */
  encoding: ExplanationMetadata_InputMetadata_Encoding;

  /**
   * Modality of the feature. Valid values are: numeric, image. Defaults to
   * numeric.
   *
   * @generated from field: string modality = 4;
   */
  modality: string;

  /**
   * The domain details of the input feature value. Like min/max, original
   * mean or standard deviation if normalized.
   *
   * @generated from field: google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.FeatureValueDomain feature_value_domain = 5;
   */
  featureValueDomain?: ExplanationMetadata_InputMetadata_FeatureValueDomain;

  /**
   * Specifies the index of the values of the input tensor.
   * Required when the input tensor is a sparse representation. Refer to
   * Tensorflow documentation for more details:
   * https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor.
   *
   * @generated from field: string indices_tensor_name = 6;
   */
  indicesTensorName: string;

  /**
   * Specifies the shape of the values of the input if the input is a sparse
   * representation. Refer to Tensorflow documentation for more details:
   * https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor.
   *
   * @generated from field: string dense_shape_tensor_name = 7;
   */
  denseShapeTensorName: string;

  /**
   * A list of feature names for each index in the input tensor.
   * Required when the input
   * [InputMetadata.encoding][google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.encoding]
   * is BAG_OF_FEATURES, BAG_OF_FEATURES_SPARSE, INDICATOR.
   *
   * @generated from field: repeated string index_feature_mapping = 8;
   */
  indexFeatureMapping: string[];

  /**
   * Encoded tensor is a transformation of the input tensor. Must be provided
   * if choosing
   * [Integrated Gradients
   * attribution][google.cloud.aiplatform.v1.ExplanationParameters.integrated_gradients_attribution]
   * or [XRAI
   * attribution][google.cloud.aiplatform.v1.ExplanationParameters.xrai_attribution]
   * and the input tensor is not differentiable.
   *
   * An encoded tensor is generated if the input tensor is encoded by a lookup
   * table.
   *
   * @generated from field: string encoded_tensor_name = 9;
   */
  encodedTensorName: string;

  /**
   * A list of baselines for the encoded tensor.
   *
   * The shape of each baseline should match the shape of the encoded tensor.
   * If a scalar is provided, Vertex AI broadcasts to the same shape as the
   * encoded tensor.
   *
   * @generated from field: repeated google.protobuf.Value encoded_baselines = 10;
   */
  encodedBaselines: Value[];

  /**
   * Visualization configurations for image explanation.
   *
   * @generated from field: google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization visualization = 11;
   */
  visualization?: ExplanationMetadata_InputMetadata_Visualization;

  /**
   * Name of the group that the input belongs to. Features with the same group
   * name will be treated as one feature when computing attributions. Features
   * grouped together can have different shapes in value. If provided, there
   * will be one single attribution generated in
   * [Attribution.feature_attributions][google.cloud.aiplatform.v1.Attribution.feature_attributions],
   * keyed by the group name.
   *
   * @generated from field: string group_name = 12;
   */
  groupName: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.
 * Use `create(ExplanationMetadata_InputMetadataSchema)` to create a new message.
 */
export const ExplanationMetadata_InputMetadataSchema: GenMessage<ExplanationMetadata_InputMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_explanation_metadata, 0, 0);

/**
 * Domain details of the input feature value. Provides numeric information
 * about the feature, such as its range (min, max). If the feature has been
 * pre-processed, for example with z-scoring, then it provides information
 * about how to recover the original feature. For example, if the input
 * feature is an image and it has been pre-processed to obtain 0-mean and
 * stddev = 1 values, then original_mean, and original_stddev refer to the
 * mean and stddev of the original feature (e.g. image tensor) from which
 * input feature (with mean = 0 and stddev = 1) was obtained.
 *
 * @generated from message google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.FeatureValueDomain
 */
export type ExplanationMetadata_InputMetadata_FeatureValueDomain = Message<"google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.FeatureValueDomain"> & {
  /**
   * The minimum permissible value for this feature.
   *
   * @generated from field: float min_value = 1;
   */
  minValue: number;

  /**
   * The maximum permissible value for this feature.
   *
   * @generated from field: float max_value = 2;
   */
  maxValue: number;

  /**
   * If this input feature has been normalized to a mean value of 0,
   * the original_mean specifies the mean value of the domain prior to
   * normalization.
   *
   * @generated from field: float original_mean = 3;
   */
  originalMean: number;

  /**
   * If this input feature has been normalized to a standard deviation of
   * 1.0, the original_stddev specifies the standard deviation of the domain
   * prior to normalization.
   *
   * @generated from field: float original_stddev = 4;
   */
  originalStddev: number;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.FeatureValueDomain.
 * Use `create(ExplanationMetadata_InputMetadata_FeatureValueDomainSchema)` to create a new message.
 */
export const ExplanationMetadata_InputMetadata_FeatureValueDomainSchema: GenMessage<ExplanationMetadata_InputMetadata_FeatureValueDomain> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_explanation_metadata, 0, 0, 0);

/**
 * Visualization configurations for image explanation.
 *
 * @generated from message google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization
 */
export type ExplanationMetadata_InputMetadata_Visualization = Message<"google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization"> & {
  /**
   * Type of the image visualization. Only applicable to
   * [Integrated Gradients
   * attribution][google.cloud.aiplatform.v1.ExplanationParameters.integrated_gradients_attribution].
   * OUTLINES shows regions of attribution, while PIXELS shows per-pixel
   * attribution. Defaults to OUTLINES.
   *
   * @generated from field: google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.Type type = 1;
   */
  type: ExplanationMetadata_InputMetadata_Visualization_Type;

  /**
   * Whether to only highlight pixels with positive contributions, negative
   * or both. Defaults to POSITIVE.
   *
   * @generated from field: google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.Polarity polarity = 2;
   */
  polarity: ExplanationMetadata_InputMetadata_Visualization_Polarity;

  /**
   * The color scheme used for the highlighted areas.
   *
   * Defaults to PINK_GREEN for
   * [Integrated Gradients
   * attribution][google.cloud.aiplatform.v1.ExplanationParameters.integrated_gradients_attribution],
   * which shows positive attributions in green and negative in pink.
   *
   * Defaults to VIRIDIS for
   * [XRAI
   * attribution][google.cloud.aiplatform.v1.ExplanationParameters.xrai_attribution],
   * which highlights the most influential regions in yellow and the least
   * influential in blue.
   *
   * @generated from field: google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.ColorMap color_map = 3;
   */
  colorMap: ExplanationMetadata_InputMetadata_Visualization_ColorMap;

  /**
   * Excludes attributions above the specified percentile from the
   * highlighted areas. Using the clip_percent_upperbound and
   * clip_percent_lowerbound together can be useful for filtering out noise
   * and making it easier to see areas of strong attribution. Defaults to
   * 99.9.
   *
   * @generated from field: float clip_percent_upperbound = 4;
   */
  clipPercentUpperbound: number;

  /**
   * Excludes attributions below the specified percentile, from the
   * highlighted areas. Defaults to 62.
   *
   * @generated from field: float clip_percent_lowerbound = 5;
   */
  clipPercentLowerbound: number;

  /**
   * How the original image is displayed in the visualization.
   * Adjusting the overlay can help increase visual clarity if the original
   * image makes it difficult to view the visualization. Defaults to NONE.
   *
   * @generated from field: google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.OverlayType overlay_type = 6;
   */
  overlayType: ExplanationMetadata_InputMetadata_Visualization_OverlayType;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.
 * Use `create(ExplanationMetadata_InputMetadata_VisualizationSchema)` to create a new message.
 */
export const ExplanationMetadata_InputMetadata_VisualizationSchema: GenMessage<ExplanationMetadata_InputMetadata_Visualization> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_explanation_metadata, 0, 0, 1);

/**
 * Type of the image visualization. Only applicable to
 * [Integrated Gradients
 * attribution][google.cloud.aiplatform.v1.ExplanationParameters.integrated_gradients_attribution].
 *
 * @generated from enum google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.Type
 */
export enum ExplanationMetadata_InputMetadata_Visualization_Type {
  /**
   * Should not be used.
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  TYPE_UNSPECIFIED = 0,

  /**
   * Shows which pixel contributed to the image prediction.
   *
   * @generated from enum value: PIXELS = 1;
   */
  PIXELS = 1,

  /**
   * Shows which region contributed to the image prediction by outlining
   * the region.
   *
   * @generated from enum value: OUTLINES = 2;
   */
  OUTLINES = 2,
}

/**
 * Describes the enum google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.Type.
 */
export const ExplanationMetadata_InputMetadata_Visualization_TypeSchema: GenEnum<ExplanationMetadata_InputMetadata_Visualization_Type> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1_explanation_metadata, 0, 0, 1, 0);

/**
 * Whether to only highlight pixels with positive contributions, negative
 * or both. Defaults to POSITIVE.
 *
 * @generated from enum google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.Polarity
 */
export enum ExplanationMetadata_InputMetadata_Visualization_Polarity {
  /**
   * Default value. This is the same as POSITIVE.
   *
   * @generated from enum value: POLARITY_UNSPECIFIED = 0;
   */
  POLARITY_UNSPECIFIED = 0,

  /**
   * Highlights the pixels/outlines that were most influential to the
   * model's prediction.
   *
   * @generated from enum value: POSITIVE = 1;
   */
  POSITIVE = 1,

  /**
   * Setting polarity to negative highlights areas that does not lead to
   * the models's current prediction.
   *
   * @generated from enum value: NEGATIVE = 2;
   */
  NEGATIVE = 2,

  /**
   * Shows both positive and negative attributions.
   *
   * @generated from enum value: BOTH = 3;
   */
  BOTH = 3,
}

/**
 * Describes the enum google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.Polarity.
 */
export const ExplanationMetadata_InputMetadata_Visualization_PolaritySchema: GenEnum<ExplanationMetadata_InputMetadata_Visualization_Polarity> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1_explanation_metadata, 0, 0, 1, 1);

/**
 * The color scheme used for highlighting areas.
 *
 * @generated from enum google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.ColorMap
 */
export enum ExplanationMetadata_InputMetadata_Visualization_ColorMap {
  /**
   * Should not be used.
   *
   * @generated from enum value: COLOR_MAP_UNSPECIFIED = 0;
   */
  COLOR_MAP_UNSPECIFIED = 0,

  /**
   * Positive: green. Negative: pink.
   *
   * @generated from enum value: PINK_GREEN = 1;
   */
  PINK_GREEN = 1,

  /**
   * Viridis color map: A perceptually uniform color mapping which is
   * easier to see by those with colorblindness and progresses from yellow
   * to green to blue. Positive: yellow. Negative: blue.
   *
   * @generated from enum value: VIRIDIS = 2;
   */
  VIRIDIS = 2,

  /**
   * Positive: red. Negative: red.
   *
   * @generated from enum value: RED = 3;
   */
  RED = 3,

  /**
   * Positive: green. Negative: green.
   *
   * @generated from enum value: GREEN = 4;
   */
  GREEN = 4,

  /**
   * Positive: green. Negative: red.
   *
   * @generated from enum value: RED_GREEN = 6;
   */
  RED_GREEN = 6,

  /**
   * PiYG palette.
   *
   * @generated from enum value: PINK_WHITE_GREEN = 5;
   */
  PINK_WHITE_GREEN = 5,
}

/**
 * Describes the enum google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.ColorMap.
 */
export const ExplanationMetadata_InputMetadata_Visualization_ColorMapSchema: GenEnum<ExplanationMetadata_InputMetadata_Visualization_ColorMap> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1_explanation_metadata, 0, 0, 1, 2);

/**
 * How the original image is displayed in the visualization.
 *
 * @generated from enum google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.OverlayType
 */
export enum ExplanationMetadata_InputMetadata_Visualization_OverlayType {
  /**
   * Default value. This is the same as NONE.
   *
   * @generated from enum value: OVERLAY_TYPE_UNSPECIFIED = 0;
   */
  OVERLAY_TYPE_UNSPECIFIED = 0,

  /**
   * No overlay.
   *
   * @generated from enum value: NONE = 1;
   */
  NONE = 1,

  /**
   * The attributions are shown on top of the original image.
   *
   * @generated from enum value: ORIGINAL = 2;
   */
  ORIGINAL = 2,

  /**
   * The attributions are shown on top of grayscaled version of the
   * original image.
   *
   * @generated from enum value: GRAYSCALE = 3;
   */
  GRAYSCALE = 3,

  /**
   * The attributions are used as a mask to reveal predictive parts of
   * the image and hide the un-predictive parts.
   *
   * @generated from enum value: MASK_BLACK = 4;
   */
  MASK_BLACK = 4,
}

/**
 * Describes the enum google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Visualization.OverlayType.
 */
export const ExplanationMetadata_InputMetadata_Visualization_OverlayTypeSchema: GenEnum<ExplanationMetadata_InputMetadata_Visualization_OverlayType> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1_explanation_metadata, 0, 0, 1, 3);

/**
 * Defines how a feature is encoded. Defaults to IDENTITY.
 *
 * @generated from enum google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Encoding
 */
export enum ExplanationMetadata_InputMetadata_Encoding {
  /**
   * Default value. This is the same as IDENTITY.
   *
   * @generated from enum value: ENCODING_UNSPECIFIED = 0;
   */
  ENCODING_UNSPECIFIED = 0,

  /**
   * The tensor represents one feature.
   *
   * @generated from enum value: IDENTITY = 1;
   */
  IDENTITY = 1,

  /**
   * The tensor represents a bag of features where each index maps to
   * a feature.
   * [InputMetadata.index_feature_mapping][google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.index_feature_mapping]
   * must be provided for this encoding. For example:
   * ```
   * input = [27, 6.0, 150]
   * index_feature_mapping = ["age", "height", "weight"]
   * ```
   *
   * @generated from enum value: BAG_OF_FEATURES = 2;
   */
  BAG_OF_FEATURES = 2,

  /**
   * The tensor represents a bag of features where each index maps to a
   * feature. Zero values in the tensor indicates feature being
   * non-existent.
   * [InputMetadata.index_feature_mapping][google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.index_feature_mapping]
   * must be provided for this encoding. For example:
   * ```
   * input = [2, 0, 5, 0, 1]
   * index_feature_mapping = ["a", "b", "c", "d", "e"]
   * ```
   *
   * @generated from enum value: BAG_OF_FEATURES_SPARSE = 3;
   */
  BAG_OF_FEATURES_SPARSE = 3,

  /**
   * The tensor is a list of binaries representing whether a feature exists
   * or not (1 indicates existence).
   * [InputMetadata.index_feature_mapping][google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.index_feature_mapping]
   * must be provided for this encoding. For example:
   * ```
   * input = [1, 0, 1, 0, 1]
   * index_feature_mapping = ["a", "b", "c", "d", "e"]
   * ```
   *
   * @generated from enum value: INDICATOR = 4;
   */
  INDICATOR = 4,

  /**
   * The tensor is encoded into a 1-dimensional array represented by an
   * encoded tensor.
   * [InputMetadata.encoded_tensor_name][google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.encoded_tensor_name]
   * must be provided for this encoding. For example:
   * ```
   * input = ["This", "is", "a", "test", "."]
   * encoded = [0.1, 0.2, 0.3, 0.4, 0.5]
   * ```
   *
   * @generated from enum value: COMBINED_EMBEDDING = 5;
   */
  COMBINED_EMBEDDING = 5,

  /**
   * Select this encoding when the input tensor is encoded into a
   * 2-dimensional array represented by an encoded tensor.
   * [InputMetadata.encoded_tensor_name][google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.encoded_tensor_name]
   * must be provided for this encoding. The first dimension of the encoded
   * tensor's shape is the same as the input tensor's shape. For example:
   * ```
   * input = ["This", "is", "a", "test", "."]
   * encoded = [[0.1, 0.2, 0.3, 0.4, 0.5],
   *            [0.2, 0.1, 0.4, 0.3, 0.5],
   *            [0.5, 0.1, 0.3, 0.5, 0.4],
   *            [0.5, 0.3, 0.1, 0.2, 0.4],
   *            [0.4, 0.3, 0.2, 0.5, 0.1]]
   * ```
   *
   * @generated from enum value: CONCAT_EMBEDDING = 6;
   */
  CONCAT_EMBEDDING = 6,
}

/**
 * Describes the enum google.cloud.aiplatform.v1.ExplanationMetadata.InputMetadata.Encoding.
 */
export const ExplanationMetadata_InputMetadata_EncodingSchema: GenEnum<ExplanationMetadata_InputMetadata_Encoding> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1_explanation_metadata, 0, 0, 0);

/**
 * Metadata of the prediction output to be explained.
 *
 * @generated from message google.cloud.aiplatform.v1.ExplanationMetadata.OutputMetadata
 */
export type ExplanationMetadata_OutputMetadata = Message<"google.cloud.aiplatform.v1.ExplanationMetadata.OutputMetadata"> & {
  /**
   * Defines how to map
   * [Attribution.output_index][google.cloud.aiplatform.v1.Attribution.output_index]
   * to
   * [Attribution.output_display_name][google.cloud.aiplatform.v1.Attribution.output_display_name].
   *
   * If neither of the fields are specified,
   * [Attribution.output_display_name][google.cloud.aiplatform.v1.Attribution.output_display_name]
   * will not be populated.
   *
   * @generated from oneof google.cloud.aiplatform.v1.ExplanationMetadata.OutputMetadata.display_name_mapping
   */
  displayNameMapping: {
    /**
     * Static mapping between the index and display name.
     *
     * Use this if the outputs are a deterministic n-dimensional array, e.g. a
     * list of scores of all the classes in a pre-defined order for a
     * multi-classification Model. It's not feasible if the outputs are
     * non-deterministic, e.g. the Model produces top-k classes or sort the
     * outputs by their values.
     *
     * The shape of the value must be an n-dimensional array of strings. The
     * number of dimensions must match that of the outputs to be explained.
     * The
     * [Attribution.output_display_name][google.cloud.aiplatform.v1.Attribution.output_display_name]
     * is populated by locating in the mapping with
     * [Attribution.output_index][google.cloud.aiplatform.v1.Attribution.output_index].
     *
     * @generated from field: google.protobuf.Value index_display_name_mapping = 1;
     */
    value: Value;
    case: "indexDisplayNameMapping";
  } | {
    /**
     * Specify a field name in the prediction to look for the display name.
     *
     * Use this if the prediction contains the display names for the outputs.
     *
     * The display names in the prediction must have the same shape of the
     * outputs, so that it can be located by
     * [Attribution.output_index][google.cloud.aiplatform.v1.Attribution.output_index]
     * for a specific output.
     *
     * @generated from field: string display_name_mapping_key = 2;
     */
    value: string;
    case: "displayNameMappingKey";
  } | { case: undefined; value?: undefined };

  /**
   * Name of the output tensor. Required and is only applicable to Vertex
   * AI provided images for Tensorflow.
   *
   * @generated from field: string output_tensor_name = 3;
   */
  outputTensorName: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ExplanationMetadata.OutputMetadata.
 * Use `create(ExplanationMetadata_OutputMetadataSchema)` to create a new message.
 */
export const ExplanationMetadata_OutputMetadataSchema: GenMessage<ExplanationMetadata_OutputMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_explanation_metadata, 0, 1);
