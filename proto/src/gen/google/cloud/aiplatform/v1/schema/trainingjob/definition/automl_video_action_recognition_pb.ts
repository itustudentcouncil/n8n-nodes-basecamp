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
// @generated from file google/cloud/aiplatform/v1/schema/trainingjob/definition/automl_video_action_recognition.proto (package google.cloud.aiplatform.v1.schema.trainingjob.definition, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/schema/trainingjob/definition/automl_video_action_recognition.proto.
 */
export const file_google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_video_action_recognition: GenFile = /*@__PURE__*/
  fileDesc("Cl5nb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS9zY2hlbWEvdHJhaW5pbmdqb2IvZGVmaW5pdGlvbi9hdXRvbWxfdmlkZW9fYWN0aW9uX3JlY29nbml0aW9uLnByb3RvEjhnb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5zY2hlbWEudHJhaW5pbmdqb2IuZGVmaW5pdGlvbiKMAQocQXV0b01sVmlkZW9BY3Rpb25SZWNvZ25pdGlvbhJsCgZpbnB1dHMYASABKAsyXC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5zY2hlbWEudHJhaW5pbmdqb2IuZGVmaW5pdGlvbi5BdXRvTWxWaWRlb0FjdGlvblJlY29nbml0aW9uSW5wdXRzIqoCCiJBdXRvTWxWaWRlb0FjdGlvblJlY29nbml0aW9uSW5wdXRzEnoKCm1vZGVsX3R5cGUYASABKA4yZi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5zY2hlbWEudHJhaW5pbmdqb2IuZGVmaW5pdGlvbi5BdXRvTWxWaWRlb0FjdGlvblJlY29nbml0aW9uSW5wdXRzLk1vZGVsVHlwZSKHAQoJTW9kZWxUeXBlEhoKFk1PREVMX1RZUEVfVU5TUEVDSUZJRUQQABIJCgVDTE9VRBABEhYKEk1PQklMRV9WRVJTQVRJTEVfMRACEh0KGU1PQklMRV9KRVRTT05fVkVSU0FUSUxFXzEQAxIcChhNT0JJTEVfQ09SQUxfVkVSU0FUSUxFXzEQBEL4Ago8Y29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLnNjaGVtYS50cmFpbmluZ2pvYi5kZWZpbml0aW9uQiFBdXRvTUxWaWRlb0FjdGlvblJlY29nbml0aW9uUHJvdG9QAVpcY2xvdWQuZ29vZ2xlLmNvbS9nby9haXBsYXRmb3JtL2FwaXYxL3NjaGVtYS90cmFpbmluZ2pvYi9kZWZpbml0aW9uL2RlZmluaXRpb25wYjtkZWZpbml0aW9ucGKqAjhHb29nbGUuQ2xvdWQuQUlQbGF0Zm9ybS5WMS5TY2hlbWEuVHJhaW5pbmdKb2IuRGVmaW5pdGlvbsoCOEdvb2dsZVxDbG91ZFxBSVBsYXRmb3JtXFYxXFNjaGVtYVxUcmFpbmluZ0pvYlxEZWZpbml0aW9u6gI+R29vZ2xlOjpDbG91ZDo6QUlQbGF0Zm9ybTo6VjE6OlNjaGVtYTo6VHJhaW5pbmdKb2I6OkRlZmluaXRpb25iBnByb3RvMw");

/**
 * A TrainingJob that trains and uploads an AutoML Video Action Recognition
 * Model.
 *
 * @generated from message google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlVideoActionRecognition
 */
export type AutoMlVideoActionRecognition = Message<"google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlVideoActionRecognition"> & {
  /**
   * The input parameters of this TrainingJob.
   *
   * @generated from field: google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlVideoActionRecognitionInputs inputs = 1;
   */
  inputs?: AutoMlVideoActionRecognitionInputs;
};

/**
 * Describes the message google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlVideoActionRecognition.
 * Use `create(AutoMlVideoActionRecognitionSchema)` to create a new message.
 */
export const AutoMlVideoActionRecognitionSchema: GenMessage<AutoMlVideoActionRecognition> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_video_action_recognition, 0);

/**
 * @generated from message google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlVideoActionRecognitionInputs
 */
export type AutoMlVideoActionRecognitionInputs = Message<"google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlVideoActionRecognitionInputs"> & {
  /**
   * @generated from field: google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlVideoActionRecognitionInputs.ModelType model_type = 1;
   */
  modelType: AutoMlVideoActionRecognitionInputs_ModelType;
};

/**
 * Describes the message google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlVideoActionRecognitionInputs.
 * Use `create(AutoMlVideoActionRecognitionInputsSchema)` to create a new message.
 */
export const AutoMlVideoActionRecognitionInputsSchema: GenMessage<AutoMlVideoActionRecognitionInputs> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_video_action_recognition, 1);

/**
 * @generated from enum google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlVideoActionRecognitionInputs.ModelType
 */
export enum AutoMlVideoActionRecognitionInputs_ModelType {
  /**
   * Should not be set.
   *
   * @generated from enum value: MODEL_TYPE_UNSPECIFIED = 0;
   */
  MODEL_TYPE_UNSPECIFIED = 0,

  /**
   * A model best tailored to be used within Google Cloud, and which c annot
   * be exported. Default.
   *
   * @generated from enum value: CLOUD = 1;
   */
  CLOUD = 1,

  /**
   * A model that, in addition to being available within Google Cloud, can
   * also be exported (see ModelService.ExportModel) as a TensorFlow or
   * TensorFlow Lite model and used on a mobile or edge device afterwards.
   *
   * @generated from enum value: MOBILE_VERSATILE_1 = 2;
   */
  MOBILE_VERSATILE_1 = 2,

  /**
   * A model that, in addition to being available within Google Cloud, can
   * also be exported (see ModelService.ExportModel) to a Jetson device
   * afterwards.
   *
   * @generated from enum value: MOBILE_JETSON_VERSATILE_1 = 3;
   */
  MOBILE_JETSON_VERSATILE_1 = 3,

  /**
   * A model that, in addition to being available within Google Cloud, can
   * also be exported (see ModelService.ExportModel) as a TensorFlow or
   * TensorFlow Lite model and used on a Coral device afterwards.
   *
   * @generated from enum value: MOBILE_CORAL_VERSATILE_1 = 4;
   */
  MOBILE_CORAL_VERSATILE_1 = 4,
}

/**
 * Describes the enum google.cloud.aiplatform.v1.schema.trainingjob.definition.AutoMlVideoActionRecognitionInputs.ModelType.
 */
export const AutoMlVideoActionRecognitionInputs_ModelTypeSchema: GenEnum<AutoMlVideoActionRecognitionInputs_ModelType> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1_schema_trainingjob_definition_automl_video_action_recognition, 1, 0);
