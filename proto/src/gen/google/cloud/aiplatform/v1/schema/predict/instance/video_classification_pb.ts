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
// @generated from file google/cloud/aiplatform/v1/schema/predict/instance/video_classification.proto (package google.cloud.aiplatform.v1.schema.predict.instance, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/schema/predict/instance/video_classification.proto.
 */
export const file_google_cloud_aiplatform_v1_schema_predict_instance_video_classification: GenFile = /*@__PURE__*/
  fileDesc("Ck1nb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS9zY2hlbWEvcHJlZGljdC9pbnN0YW5jZS92aWRlb19jbGFzc2lmaWNhdGlvbi5wcm90bxIyZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuc2NoZW1hLnByZWRpY3QuaW5zdGFuY2UigQEKJVZpZGVvQ2xhc3NpZmljYXRpb25QcmVkaWN0aW9uSW5zdGFuY2USDwoHY29udGVudBgBIAEoCRIRCgltaW1lX3R5cGUYAiABKAkSGgoSdGltZV9zZWdtZW50X3N0YXJ0GAMgASgJEhgKEHRpbWVfc2VnbWVudF9lbmQYBCABKAlC3wIKNmNvbS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5zY2hlbWEucHJlZGljdC5pbnN0YW5jZUIqVmlkZW9DbGFzc2lmaWNhdGlvblByZWRpY3Rpb25JbnN0YW5jZVByb3RvUAFaUmNsb3VkLmdvb2dsZS5jb20vZ28vYWlwbGF0Zm9ybS9hcGl2MS9zY2hlbWEvcHJlZGljdC9pbnN0YW5jZS9pbnN0YW5jZXBiO2luc3RhbmNlcGKqAjJHb29nbGUuQ2xvdWQuQUlQbGF0Zm9ybS5WMS5TY2hlbWEuUHJlZGljdC5JbnN0YW5jZcoCMkdvb2dsZVxDbG91ZFxBSVBsYXRmb3JtXFYxXFNjaGVtYVxQcmVkaWN0XEluc3RhbmNl6gI4R29vZ2xlOjpDbG91ZDo6QUlQbGF0Zm9ybTo6VjE6OlNjaGVtYTo6UHJlZGljdDo6SW5zdGFuY2ViBnByb3RvMw");

/**
 * Prediction input format for Video Classification.
 *
 * @generated from message google.cloud.aiplatform.v1.schema.predict.instance.VideoClassificationPredictionInstance
 */
export type VideoClassificationPredictionInstance = Message<"google.cloud.aiplatform.v1.schema.predict.instance.VideoClassificationPredictionInstance"> & {
  /**
   * The Google Cloud Storage location of the video on which to perform the
   * prediction.
   *
   * @generated from field: string content = 1;
   */
  content: string;

  /**
   * The MIME type of the content of the video. Only the following are
   * supported: video/mp4 video/avi video/quicktime
   *
   * @generated from field: string mime_type = 2;
   */
  mimeType: string;

  /**
   * The beginning, inclusive, of the video's time segment on which to perform
   * the prediction. Expressed as a number of seconds as measured from the
   * start of the video, with "s" appended at the end. Fractions are allowed,
   * up to a microsecond precision.
   *
   * @generated from field: string time_segment_start = 3;
   */
  timeSegmentStart: string;

  /**
   * The end, exclusive, of the video's time segment on which to perform
   * the prediction. Expressed as a number of seconds as measured from the
   * start of the video, with "s" appended at the end. Fractions are allowed,
   * up to a microsecond precision, and "inf" or "Infinity" is allowed, which
   * means the end of the video.
   *
   * @generated from field: string time_segment_end = 4;
   */
  timeSegmentEnd: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1.schema.predict.instance.VideoClassificationPredictionInstance.
 * Use `create(VideoClassificationPredictionInstanceSchema)` to create a new message.
 */
export const VideoClassificationPredictionInstanceSchema: GenMessage<VideoClassificationPredictionInstance> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_schema_predict_instance_video_classification, 0);
