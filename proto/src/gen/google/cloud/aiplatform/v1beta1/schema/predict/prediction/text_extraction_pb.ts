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
// @generated from file google/cloud/aiplatform/v1beta1/schema/predict/prediction/text_extraction.proto (package google.cloud.aiplatform.v1beta1.schema.predict.prediction, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/schema/predict/prediction/text_extraction.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_schema_predict_prediction_text_extraction: GenFile = /*@__PURE__*/
  fileDesc("Ck9nb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL3NjaGVtYS9wcmVkaWN0L3ByZWRpY3Rpb24vdGV4dF9leHRyYWN0aW9uLnByb3RvEjlnb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLnNjaGVtYS5wcmVkaWN0LnByZWRpY3Rpb24inwEKHlRleHRFeHRyYWN0aW9uUHJlZGljdGlvblJlc3VsdBILCgNpZHMYASADKAMSFQoNZGlzcGxheV9uYW1lcxgCIAMoCRIiChp0ZXh0X3NlZ21lbnRfc3RhcnRfb2Zmc2V0cxgDIAMoAxIgChh0ZXh0X3NlZ21lbnRfZW5kX29mZnNldHMYBCADKAMSEwoLY29uZmlkZW5jZXMYBSADKAJC/wIKPWNvbS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLnNjaGVtYS5wcmVkaWN0LnByZWRpY3Rpb25CI1RleHRFeHRyYWN0aW9uUHJlZGljdGlvblJlc3VsdFByb3RvUAFaXWNsb3VkLmdvb2dsZS5jb20vZ28vYWlwbGF0Zm9ybS9hcGl2MWJldGExL3NjaGVtYS9wcmVkaWN0L3ByZWRpY3Rpb24vcHJlZGljdGlvbnBiO3ByZWRpY3Rpb25wYqoCOUdvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxQmV0YTEuU2NoZW1hLlByZWRpY3QuUHJlZGljdGlvbsoCOUdvb2dsZVxDbG91ZFxBSVBsYXRmb3JtXFYxYmV0YTFcU2NoZW1hXFByZWRpY3RcUHJlZGljdGlvbuoCP0dvb2dsZTo6Q2xvdWQ6OkFJUGxhdGZvcm06OlYxYmV0YTE6OlNjaGVtYTo6UHJlZGljdDo6UHJlZGljdGlvbmIGcHJvdG8z");

/**
 * Prediction output format for Text Extraction.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.schema.predict.prediction.TextExtractionPredictionResult
 */
export type TextExtractionPredictionResult = Message<"google.cloud.aiplatform.v1beta1.schema.predict.prediction.TextExtractionPredictionResult"> & {
  /**
   * The resource IDs of the AnnotationSpecs that had been identified,
   * ordered by the confidence score descendingly.
   *
   * @generated from field: repeated int64 ids = 1;
   */
  ids: bigint[];

  /**
   * The display names of the AnnotationSpecs that had been identified,
   * order matches the IDs.
   *
   * @generated from field: repeated string display_names = 2;
   */
  displayNames: string[];

  /**
   * The start offsets, inclusive, of the text segment in which the
   * AnnotationSpec has been identified. Expressed as a zero-based number
   * of characters as measured from the start of the text snippet.
   *
   * @generated from field: repeated int64 text_segment_start_offsets = 3;
   */
  textSegmentStartOffsets: bigint[];

  /**
   * The end offsets, inclusive, of the text segment in which the
   * AnnotationSpec has been identified. Expressed as a zero-based number
   * of characters as measured from the start of the text snippet.
   *
   * @generated from field: repeated int64 text_segment_end_offsets = 4;
   */
  textSegmentEndOffsets: bigint[];

  /**
   * The Model's confidences in correctness of the predicted IDs, higher
   * value means higher confidence. Order matches the Ids.
   *
   * @generated from field: repeated float confidences = 5;
   */
  confidences: number[];
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.schema.predict.prediction.TextExtractionPredictionResult.
 * Use `create(TextExtractionPredictionResultSchema)` to create a new message.
 */
export const TextExtractionPredictionResultSchema: GenMessage<TextExtractionPredictionResult> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_schema_predict_prediction_text_extraction, 0);
