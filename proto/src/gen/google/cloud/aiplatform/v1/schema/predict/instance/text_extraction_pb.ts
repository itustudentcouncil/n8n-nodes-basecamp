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
// @generated from file google/cloud/aiplatform/v1/schema/predict/instance/text_extraction.proto (package google.cloud.aiplatform.v1.schema.predict.instance, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/schema/predict/instance/text_extraction.proto.
 */
export const file_google_cloud_aiplatform_v1_schema_predict_instance_text_extraction: GenFile = /*@__PURE__*/
  fileDesc("Ckhnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS9zY2hlbWEvcHJlZGljdC9pbnN0YW5jZS90ZXh0X2V4dHJhY3Rpb24ucHJvdG8SMmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLnNjaGVtYS5wcmVkaWN0Lmluc3RhbmNlIlMKIFRleHRFeHRyYWN0aW9uUHJlZGljdGlvbkluc3RhbmNlEg8KB2NvbnRlbnQYASABKAkSEQoJbWltZV90eXBlGAIgASgJEgsKA2tleRgDIAEoCULaAgo2Y29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLnNjaGVtYS5wcmVkaWN0Lmluc3RhbmNlQiVUZXh0RXh0cmFjdGlvblByZWRpY3Rpb25JbnN0YW5jZVByb3RvUAFaUmNsb3VkLmdvb2dsZS5jb20vZ28vYWlwbGF0Zm9ybS9hcGl2MS9zY2hlbWEvcHJlZGljdC9pbnN0YW5jZS9pbnN0YW5jZXBiO2luc3RhbmNlcGKqAjJHb29nbGUuQ2xvdWQuQUlQbGF0Zm9ybS5WMS5TY2hlbWEuUHJlZGljdC5JbnN0YW5jZcoCMkdvb2dsZVxDbG91ZFxBSVBsYXRmb3JtXFYxXFNjaGVtYVxQcmVkaWN0XEluc3RhbmNl6gI4R29vZ2xlOjpDbG91ZDo6QUlQbGF0Zm9ybTo6VjE6OlNjaGVtYTo6UHJlZGljdDo6SW5zdGFuY2ViBnByb3RvMw");

/**
 * Prediction input format for Text Extraction.
 *
 * @generated from message google.cloud.aiplatform.v1.schema.predict.instance.TextExtractionPredictionInstance
 */
export type TextExtractionPredictionInstance = Message<"google.cloud.aiplatform.v1.schema.predict.instance.TextExtractionPredictionInstance"> & {
  /**
   * The text snippet to make the predictions on.
   *
   * @generated from field: string content = 1;
   */
  content: string;

  /**
   * The MIME type of the text snippet. The supported MIME types are listed
   * below.
   * - text/plain
   *
   * @generated from field: string mime_type = 2;
   */
  mimeType: string;

  /**
   * This field is only used for batch prediction. If a key is provided, the
   * batch prediction result will by mapped to this key. If omitted, then the
   * batch prediction result will contain the entire input instance. Vertex AI
   * will not check if keys in the request are duplicates, so it is up to the
   * caller to ensure the keys are unique.
   *
   * @generated from field: string key = 3;
   */
  key: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1.schema.predict.instance.TextExtractionPredictionInstance.
 * Use `create(TextExtractionPredictionInstanceSchema)` to create a new message.
 */
export const TextExtractionPredictionInstanceSchema: GenMessage<TextExtractionPredictionInstance> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_schema_predict_instance_text_extraction, 0);
