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
// @generated from file google/cloud/aiplatform/v1beta1/schema/predict/instance/video_object_tracking.proto (package google.cloud.aiplatform.v1beta1.schema.predict.instance, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/schema/predict/instance/video_object_tracking.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_schema_predict_instance_video_object_tracking: GenFile = /*@__PURE__*/
  fileDesc("ClNnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL3NjaGVtYS9wcmVkaWN0L2luc3RhbmNlL3ZpZGVvX29iamVjdF90cmFja2luZy5wcm90bxI3Z29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5zY2hlbWEucHJlZGljdC5pbnN0YW5jZSKBAQolVmlkZW9PYmplY3RUcmFja2luZ1ByZWRpY3Rpb25JbnN0YW5jZRIPCgdjb250ZW50GAEgASgJEhEKCW1pbWVfdHlwZRgCIAEoCRIaChJ0aW1lX3NlZ21lbnRfc3RhcnQYAyABKAkSGAoQdGltZV9zZWdtZW50X2VuZBgEIAEoCUL4Ago7Y29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuc2NoZW1hLnByZWRpY3QuaW5zdGFuY2VCKlZpZGVvT2JqZWN0VHJhY2tpbmdQcmVkaWN0aW9uSW5zdGFuY2VQcm90b1ABWldjbG91ZC5nb29nbGUuY29tL2dvL2FpcGxhdGZvcm0vYXBpdjFiZXRhMS9zY2hlbWEvcHJlZGljdC9pbnN0YW5jZS9pbnN0YW5jZXBiO2luc3RhbmNlcGKqAjdHb29nbGUuQ2xvdWQuQUlQbGF0Zm9ybS5WMUJldGExLlNjaGVtYS5QcmVkaWN0Lkluc3RhbmNlygI3R29vZ2xlXENsb3VkXEFJUGxhdGZvcm1cVjFiZXRhMVxTY2hlbWFcUHJlZGljdFxJbnN0YW5jZeoCPUdvb2dsZTo6Q2xvdWQ6OkFJUGxhdGZvcm06OlYxYmV0YTE6OlNjaGVtYTo6UHJlZGljdDo6SW5zdGFuY2ViBnByb3RvMw");

/**
 * Prediction input format for Video Object Tracking.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.schema.predict.instance.VideoObjectTrackingPredictionInstance
 */
export type VideoObjectTrackingPredictionInstance = Message<"google.cloud.aiplatform.v1beta1.schema.predict.instance.VideoObjectTrackingPredictionInstance"> & {
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
 * Describes the message google.cloud.aiplatform.v1beta1.schema.predict.instance.VideoObjectTrackingPredictionInstance.
 * Use `create(VideoObjectTrackingPredictionInstanceSchema)` to create a new message.
 */
export const VideoObjectTrackingPredictionInstanceSchema: GenMessage<VideoObjectTrackingPredictionInstance> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_schema_predict_instance_video_object_tracking, 0);
