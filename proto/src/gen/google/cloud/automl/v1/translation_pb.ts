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
// @generated from file google/cloud/automl/v1/translation.proto (package google.cloud.automl.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { TextSnippet } from "./data_items_pb";
import { file_google_cloud_automl_v1_data_items } from "./data_items_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/automl/v1/translation.proto.
 */
export const file_google_cloud_automl_v1_translation: GenFile = /*@__PURE__*/
  fileDesc("Cihnb29nbGUvY2xvdWQvYXV0b21sL3YxL3RyYW5zbGF0aW9uLnByb3RvEhZnb29nbGUuY2xvdWQuYXV0b21sLnYxImIKGlRyYW5zbGF0aW9uRGF0YXNldE1ldGFkYXRhEiEKFHNvdXJjZV9sYW5ndWFnZV9jb2RlGAEgASgJQgPgQQISIQoUdGFyZ2V0X2xhbmd1YWdlX2NvZGUYAiABKAlCA+BBAiJLChxUcmFuc2xhdGlvbkV2YWx1YXRpb25NZXRyaWNzEhIKCmJsZXVfc2NvcmUYASABKAESFwoPYmFzZV9ibGV1X3Njb3JlGAIgASgBImoKGFRyYW5zbGF0aW9uTW9kZWxNZXRhZGF0YRISCgpiYXNlX21vZGVsGAEgASgJEhwKFHNvdXJjZV9sYW5ndWFnZV9jb2RlGAIgASgJEhwKFHRhcmdldF9sYW5ndWFnZV9jb2RlGAMgASgJIlgKFVRyYW5zbGF0aW9uQW5ub3RhdGlvbhI/ChJ0cmFuc2xhdGVkX2NvbnRlbnQYASABKAsyIy5nb29nbGUuY2xvdWQuYXV0b21sLnYxLlRleHRTbmlwcGV0QrIBChpjb20uZ29vZ2xlLmNsb3VkLmF1dG9tbC52MUIQVHJhbnNsYXRpb25Qcm90b1ABWjJjbG91ZC5nb29nbGUuY29tL2dvL2F1dG9tbC9hcGl2MS9hdXRvbWxwYjthdXRvbWxwYqoCFkdvb2dsZS5DbG91ZC5BdXRvTUwuVjHKAhZHb29nbGVcQ2xvdWRcQXV0b01sXFYx6gIZR29vZ2xlOjpDbG91ZDo6QXV0b01MOjpWMWIGcHJvdG8z", [file_google_api_field_behavior, file_google_cloud_automl_v1_data_items]);

/**
 * Dataset metadata that is specific to translation.
 *
 * @generated from message google.cloud.automl.v1.TranslationDatasetMetadata
 */
export type TranslationDatasetMetadata = Message<"google.cloud.automl.v1.TranslationDatasetMetadata"> & {
  /**
   * Required. The BCP-47 language code of the source language.
   *
   * @generated from field: string source_language_code = 1;
   */
  sourceLanguageCode: string;

  /**
   * Required. The BCP-47 language code of the target language.
   *
   * @generated from field: string target_language_code = 2;
   */
  targetLanguageCode: string;
};

/**
 * Describes the message google.cloud.automl.v1.TranslationDatasetMetadata.
 * Use `create(TranslationDatasetMetadataSchema)` to create a new message.
 */
export const TranslationDatasetMetadataSchema: GenMessage<TranslationDatasetMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1_translation, 0);

/**
 * Evaluation metrics for the dataset.
 *
 * @generated from message google.cloud.automl.v1.TranslationEvaluationMetrics
 */
export type TranslationEvaluationMetrics = Message<"google.cloud.automl.v1.TranslationEvaluationMetrics"> & {
  /**
   * Output only. BLEU score.
   *
   * @generated from field: double bleu_score = 1;
   */
  bleuScore: number;

  /**
   * Output only. BLEU score for base model.
   *
   * @generated from field: double base_bleu_score = 2;
   */
  baseBleuScore: number;
};

/**
 * Describes the message google.cloud.automl.v1.TranslationEvaluationMetrics.
 * Use `create(TranslationEvaluationMetricsSchema)` to create a new message.
 */
export const TranslationEvaluationMetricsSchema: GenMessage<TranslationEvaluationMetrics> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1_translation, 1);

/**
 * Model metadata that is specific to translation.
 *
 * @generated from message google.cloud.automl.v1.TranslationModelMetadata
 */
export type TranslationModelMetadata = Message<"google.cloud.automl.v1.TranslationModelMetadata"> & {
  /**
   * The resource name of the model to use as a baseline to train the custom
   * model. If unset, we use the default base model provided by Google
   * Translate. Format:
   * `projects/{project_id}/locations/{location_id}/models/{model_id}`
   *
   * @generated from field: string base_model = 1;
   */
  baseModel: string;

  /**
   * Output only. Inferred from the dataset.
   * The source language (The BCP-47 language code) that is used for training.
   *
   * @generated from field: string source_language_code = 2;
   */
  sourceLanguageCode: string;

  /**
   * Output only. The target language (The BCP-47 language code) that is used
   * for training.
   *
   * @generated from field: string target_language_code = 3;
   */
  targetLanguageCode: string;
};

/**
 * Describes the message google.cloud.automl.v1.TranslationModelMetadata.
 * Use `create(TranslationModelMetadataSchema)` to create a new message.
 */
export const TranslationModelMetadataSchema: GenMessage<TranslationModelMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1_translation, 2);

/**
 * Annotation details specific to translation.
 *
 * @generated from message google.cloud.automl.v1.TranslationAnnotation
 */
export type TranslationAnnotation = Message<"google.cloud.automl.v1.TranslationAnnotation"> & {
  /**
   * Output only . The translated content.
   *
   * @generated from field: google.cloud.automl.v1.TextSnippet translated_content = 1;
   */
  translatedContent?: TextSnippet;
};

/**
 * Describes the message google.cloud.automl.v1.TranslationAnnotation.
 * Use `create(TranslationAnnotationSchema)` to create a new message.
 */
export const TranslationAnnotationSchema: GenMessage<TranslationAnnotation> = /*@__PURE__*/
  messageDesc(file_google_cloud_automl_v1_translation, 3);
