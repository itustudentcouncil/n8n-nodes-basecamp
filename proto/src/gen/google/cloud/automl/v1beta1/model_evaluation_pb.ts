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
// @generated from file google/cloud/automl/v1beta1/model_evaluation.proto (package google.cloud.automl.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { ClassificationEvaluationMetrics } from "./classification_pb";
import { file_google_cloud_automl_v1beta1_classification } from "./classification_pb";
import type { ImageObjectDetectionEvaluationMetrics, VideoObjectTrackingEvaluationMetrics } from "./detection_pb";
import { file_google_cloud_automl_v1beta1_detection } from "./detection_pb";
import type { RegressionEvaluationMetrics } from "./regression_pb";
import { file_google_cloud_automl_v1beta1_regression } from "./regression_pb";
import { file_google_cloud_automl_v1beta1_tables } from "./tables_pb";
import type { TextExtractionEvaluationMetrics } from "./text_extraction_pb";
import { file_google_cloud_automl_v1beta1_text_extraction } from "./text_extraction_pb";
import type { TextSentimentEvaluationMetrics } from "./text_sentiment_pb";
import { file_google_cloud_automl_v1beta1_text_sentiment } from "./text_sentiment_pb";
import type { TranslationEvaluationMetrics } from "./translation_pb";
import { file_google_cloud_automl_v1beta1_translation } from "./translation_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/automl/v1beta1/model_evaluation.proto.
 */
export const file_google_cloud_automl_v1beta1_model_evaluation: GenFile = /*@__PURE__*/
  fileDesc("CjJnb29nbGUvY2xvdWQvYXV0b21sL3YxYmV0YTEvbW9kZWxfZXZhbHVhdGlvbi5wcm90bxIbZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExIrEICg9Nb2RlbEV2YWx1YXRpb24SaQohY2xhc3NpZmljYXRpb25fZXZhbHVhdGlvbl9tZXRyaWNzGAggASgLMjwuZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExLkNsYXNzaWZpY2F0aW9uRXZhbHVhdGlvbk1ldHJpY3NIABJhCh1yZWdyZXNzaW9uX2V2YWx1YXRpb25fbWV0cmljcxgYIAEoCzI4Lmdvb2dsZS5jbG91ZC5hdXRvbWwudjFiZXRhMS5SZWdyZXNzaW9uRXZhbHVhdGlvbk1ldHJpY3NIABJjCh50cmFuc2xhdGlvbl9ldmFsdWF0aW9uX21ldHJpY3MYCSABKAsyOS5nb29nbGUuY2xvdWQuYXV0b21sLnYxYmV0YTEuVHJhbnNsYXRpb25FdmFsdWF0aW9uTWV0cmljc0gAEncKKWltYWdlX29iamVjdF9kZXRlY3Rpb25fZXZhbHVhdGlvbl9tZXRyaWNzGAwgASgLMkIuZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExLkltYWdlT2JqZWN0RGV0ZWN0aW9uRXZhbHVhdGlvbk1ldHJpY3NIABJ1Cih2aWRlb19vYmplY3RfdHJhY2tpbmdfZXZhbHVhdGlvbl9tZXRyaWNzGA4gASgLMkEuZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExLlZpZGVvT2JqZWN0VHJhY2tpbmdFdmFsdWF0aW9uTWV0cmljc0gAEmgKIXRleHRfc2VudGltZW50X2V2YWx1YXRpb25fbWV0cmljcxgLIAEoCzI7Lmdvb2dsZS5jbG91ZC5hdXRvbWwudjFiZXRhMS5UZXh0U2VudGltZW50RXZhbHVhdGlvbk1ldHJpY3NIABJqCiJ0ZXh0X2V4dHJhY3Rpb25fZXZhbHVhdGlvbl9tZXRyaWNzGA0gASgLMjwuZ29vZ2xlLmNsb3VkLmF1dG9tbC52MWJldGExLlRleHRFeHRyYWN0aW9uRXZhbHVhdGlvbk1ldHJpY3NIABIMCgRuYW1lGAEgASgJEhoKEmFubm90YXRpb25fc3BlY19pZBgCIAEoCRIUCgxkaXNwbGF5X25hbWUYDyABKAkSLwoLY3JlYXRlX3RpbWUYBSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEh8KF2V2YWx1YXRlZF9leGFtcGxlX2NvdW50GAYgASgFOocB6kGDAQolYXV0b21sLmdvb2dsZWFwaXMuY29tL01vZGVsRXZhbHVhdGlvbhJacHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L21vZGVscy97bW9kZWx9L21vZGVsRXZhbHVhdGlvbnMve21vZGVsX2V2YWx1YXRpb259QgkKB21ldHJpY3NCmwEKH2NvbS5nb29nbGUuY2xvdWQuYXV0b21sLnYxYmV0YTFQAVo3Y2xvdWQuZ29vZ2xlLmNvbS9nby9hdXRvbWwvYXBpdjFiZXRhMS9hdXRvbWxwYjthdXRvbWxwYsoCG0dvb2dsZVxDbG91ZFxBdXRvTWxcVjFiZXRhMeoCHkdvb2dsZTo6Q2xvdWQ6OkF1dG9NTDo6VjFiZXRhMWIGcHJvdG8z", [file_google_api_resource, file_google_cloud_automl_v1beta1_classification, file_google_cloud_automl_v1beta1_detection, file_google_cloud_automl_v1beta1_regression, file_google_cloud_automl_v1beta1_tables, file_google_cloud_automl_v1beta1_text_extraction, file_google_cloud_automl_v1beta1_text_sentiment, file_google_cloud_automl_v1beta1_translation, file_google_protobuf_timestamp]);

/**
 * Evaluation results of a model.
 *
 * @generated from message google.cloud.automl.v1beta1.ModelEvaluation
 */
export type ModelEvaluation = Message<"google.cloud.automl.v1beta1.ModelEvaluation"> & {
  /**
   * Output only. Problem type specific evaluation metrics.
   *
   * @generated from oneof google.cloud.automl.v1beta1.ModelEvaluation.metrics
   */
  metrics: {
    /**
     * Model evaluation metrics for image, text, video and tables
     * classification.
     * Tables problem is considered a classification when the target column
     * is CATEGORY DataType.
     *
     * @generated from field: google.cloud.automl.v1beta1.ClassificationEvaluationMetrics classification_evaluation_metrics = 8;
     */
    value: ClassificationEvaluationMetrics;
    case: "classificationEvaluationMetrics";
  } | {
    /**
     * Model evaluation metrics for Tables regression.
     * Tables problem is considered a regression when the target column
     * has FLOAT64 DataType.
     *
     * @generated from field: google.cloud.automl.v1beta1.RegressionEvaluationMetrics regression_evaluation_metrics = 24;
     */
    value: RegressionEvaluationMetrics;
    case: "regressionEvaluationMetrics";
  } | {
    /**
     * Model evaluation metrics for translation.
     *
     * @generated from field: google.cloud.automl.v1beta1.TranslationEvaluationMetrics translation_evaluation_metrics = 9;
     */
    value: TranslationEvaluationMetrics;
    case: "translationEvaluationMetrics";
  } | {
    /**
     * Model evaluation metrics for image object detection.
     *
     * @generated from field: google.cloud.automl.v1beta1.ImageObjectDetectionEvaluationMetrics image_object_detection_evaluation_metrics = 12;
     */
    value: ImageObjectDetectionEvaluationMetrics;
    case: "imageObjectDetectionEvaluationMetrics";
  } | {
    /**
     * Model evaluation metrics for video object tracking.
     *
     * @generated from field: google.cloud.automl.v1beta1.VideoObjectTrackingEvaluationMetrics video_object_tracking_evaluation_metrics = 14;
     */
    value: VideoObjectTrackingEvaluationMetrics;
    case: "videoObjectTrackingEvaluationMetrics";
  } | {
    /**
     * Evaluation metrics for text sentiment models.
     *
     * @generated from field: google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics text_sentiment_evaluation_metrics = 11;
     */
    value: TextSentimentEvaluationMetrics;
    case: "textSentimentEvaluationMetrics";
  } | {
    /**
     * Evaluation metrics for text extraction models.
     *
     * @generated from field: google.cloud.automl.v1beta1.TextExtractionEvaluationMetrics text_extraction_evaluation_metrics = 13;
     */
    value: TextExtractionEvaluationMetrics;
    case: "textExtractionEvaluationMetrics";
  } | { case: undefined; value?: undefined };

  /**
   * Output only. Resource name of the model evaluation.
   * Format:
   *
   * `projects/{project_id}/locations/{location_id}/models/{model_id}/modelEvaluations/{model_evaluation_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. The ID of the annotation spec that the model evaluation applies to. The
   * The ID is empty for the overall model evaluation.
   * For Tables annotation specs in the dataset do not exist and this ID is
   * always not set, but for CLASSIFICATION
   *
   * [prediction_type-s][google.cloud.automl.v1beta1.TablesModelMetadata.prediction_type]
   * the
   * [display_name][google.cloud.automl.v1beta1.ModelEvaluation.display_name]
   * field is used.
   *
   * @generated from field: string annotation_spec_id = 2;
   */
  annotationSpecId: string;

  /**
   * Output only. The value of
   * [display_name][google.cloud.automl.v1beta1.AnnotationSpec.display_name] at
   * the moment when the model was trained. Because this field returns a value
   * at model training time, for different models trained from the same dataset,
   * the values may differ, since display names could had been changed between
   * the two model's trainings.
   * For Tables CLASSIFICATION
   *
   * [prediction_type-s][google.cloud.automl.v1beta1.TablesModelMetadata.prediction_type]
   * distinct values of the target column at the moment of the model evaluation
   * are populated here.
   * The display_name is empty for the overall model evaluation.
   *
   * @generated from field: string display_name = 15;
   */
  displayName: string;

  /**
   * Output only. Timestamp when this model evaluation was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 5;
   */
  createTime?: Timestamp;

  /**
   * Output only. The number of examples used for model evaluation, i.e. for
   * which ground truth from time of model creation is compared against the
   * predicted annotations created by the model.
   * For overall ModelEvaluation (i.e. with annotation_spec_id not set) this is
   * the total number of all examples used for evaluation.
   * Otherwise, this is the count of examples that according to the ground
   * truth were annotated by the
   *
   * [annotation_spec_id][google.cloud.automl.v1beta1.ModelEvaluation.annotation_spec_id].
   *
   * @generated from field: int32 evaluated_example_count = 6;
   */
  evaluatedExampleCount: number;
};

/**
 * Describes the message google.cloud.automl.v1beta1.ModelEvaluation.
 * Use `create(ModelEvaluationSchema)` to create a new message.
 */
export const ModelEvaluationSchema: GenMessage<ModelEvaluation> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1beta1_model_evaluation, 0);
