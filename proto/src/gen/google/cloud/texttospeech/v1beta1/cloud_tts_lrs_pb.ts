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
// @generated from file google/cloud/texttospeech/v1beta1/cloud_tts_lrs.proto (package google.cloud.texttospeech.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { AudioConfig, SynthesisInput, VoiceSelectionParams } from "./cloud_tts_pb";
import { file_google_cloud_texttospeech_v1beta1_cloud_tts } from "./cloud_tts_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/texttospeech/v1beta1/cloud_tts_lrs.proto.
 */
export const file_google_cloud_texttospeech_v1beta1_cloud_tts_lrs: GenFile = /*@__PURE__*/
  fileDesc("CjVnb29nbGUvY2xvdWQvdGV4dHRvc3BlZWNoL3YxYmV0YTEvY2xvdWRfdHRzX2xycy5wcm90bxIhZ29vZ2xlLmNsb3VkLnRleHR0b3NwZWVjaC52MWJldGExIqgCChpTeW50aGVzaXplTG9uZ0F1ZGlvUmVxdWVzdBIOCgZwYXJlbnQYASABKAkSRQoFaW5wdXQYAiABKAsyMS5nb29nbGUuY2xvdWQudGV4dHRvc3BlZWNoLnYxYmV0YTEuU3ludGhlc2lzSW5wdXRCA+BBAhJJCgxhdWRpb19jb25maWcYAyABKAsyLi5nb29nbGUuY2xvdWQudGV4dHRvc3BlZWNoLnYxYmV0YTEuQXVkaW9Db25maWdCA+BBAhIbCg5vdXRwdXRfZ2NzX3VyaRgEIAEoCUID4EECEksKBXZvaWNlGAUgASgLMjcuZ29vZ2xlLmNsb3VkLnRleHR0b3NwZWVjaC52MWJldGExLlZvaWNlU2VsZWN0aW9uUGFyYW1zQgPgQQIiHQobU3ludGhlc2l6ZUxvbmdBdWRpb1Jlc3BvbnNlIqQBChtTeW50aGVzaXplTG9uZ0F1ZGlvTWV0YWRhdGESLgoKc3RhcnRfdGltZRgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASOAoQbGFzdF91cGRhdGVfdGltZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCAhgBEhsKE3Byb2dyZXNzX3BlcmNlbnRhZ2UYAyABKAEyswMKH1RleHRUb1NwZWVjaExvbmdBdWRpb1N5bnRoZXNpemUSvgIKE1N5bnRoZXNpemVMb25nQXVkaW8SPS5nb29nbGUuY2xvdWQudGV4dHRvc3BlZWNoLnYxYmV0YTEuU3ludGhlc2l6ZUxvbmdBdWRpb1JlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIsgBykF+Cj1nb29nbGUuY2xvdWQudGV4dHRvc3BlZWNoLnYxYmV0YTEuU3ludGhlc2l6ZUxvbmdBdWRpb1Jlc3BvbnNlEj1nb29nbGUuY2xvdWQudGV4dHRvc3BlZWNoLnYxYmV0YTEuU3ludGhlc2l6ZUxvbmdBdWRpb01ldGFkYXRhgtPkkwJBOgEqIjwvdjFiZXRhMS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9OnN5bnRoZXNpemVMb25nQXVkaW8aT8pBG3RleHR0b3NwZWVjaC5nb29nbGVhcGlzLmNvbdJBLmh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm1CiwIKJWNvbS5nb29nbGUuY2xvdWQudGV4dHRvc3BlZWNoLnYxYmV0YTFCI1RleHRUb1NwZWVjaExvbmdBdWRpb1N5bnRoZXNpc1Byb3RvUAFaSWNsb3VkLmdvb2dsZS5jb20vZ28vdGV4dHRvc3BlZWNoL2FwaXYxYmV0YTEvdGV4dHRvc3BlZWNocGI7dGV4dHRvc3BlZWNocGL4AQGqAiFHb29nbGUuQ2xvdWQuVGV4dFRvU3BlZWNoLlYxQmV0YTHKAiFHb29nbGVcQ2xvdWRcVGV4dFRvU3BlZWNoXFYxYmV0YTHqAiRHb29nbGU6OkNsb3VkOjpUZXh0VG9TcGVlY2g6OlYxYmV0YTFiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_cloud_texttospeech_v1beta1_cloud_tts, file_google_longrunning_operations, file_google_protobuf_timestamp]);

/**
 * The top-level message sent by the client for the
 * `SynthesizeLongAudio` method.
 *
 * @generated from message google.cloud.texttospeech.v1beta1.SynthesizeLongAudioRequest
 */
export type SynthesizeLongAudioRequest = Message<"google.cloud.texttospeech.v1beta1.SynthesizeLongAudioRequest"> & {
  /**
   * The resource states of the request in the form of
   * `projects/*\/locations/*`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The Synthesizer requires either plain text or SSML as input.
   *
   * @generated from field: google.cloud.texttospeech.v1beta1.SynthesisInput input = 2;
   */
  input?: SynthesisInput;

  /**
   * Required. The configuration of the synthesized audio.
   *
   * @generated from field: google.cloud.texttospeech.v1beta1.AudioConfig audio_config = 3;
   */
  audioConfig?: AudioConfig;

  /**
   * Required. Specifies a Cloud Storage URI for the synthesis results. Must be
   * specified in the format: `gs://bucket_name/object_name`, and the bucket
   * must already exist.
   *
   * @generated from field: string output_gcs_uri = 4;
   */
  outputGcsUri: string;

  /**
   * Required. The desired voice of the synthesized audio.
   *
   * @generated from field: google.cloud.texttospeech.v1beta1.VoiceSelectionParams voice = 5;
   */
  voice?: VoiceSelectionParams;
};

/**
 * Describes the message google.cloud.texttospeech.v1beta1.SynthesizeLongAudioRequest.
 * Use `create(SynthesizeLongAudioRequestSchema)` to create a new message.
 */
export const SynthesizeLongAudioRequestSchema: GenMessage<SynthesizeLongAudioRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_texttospeech_v1beta1_cloud_tts_lrs, 0);

/**
 * The message returned to the client by the `SynthesizeLongAudio` method.
 *
 * @generated from message google.cloud.texttospeech.v1beta1.SynthesizeLongAudioResponse
 */
export type SynthesizeLongAudioResponse = Message<"google.cloud.texttospeech.v1beta1.SynthesizeLongAudioResponse"> & {
};

/**
 * Describes the message google.cloud.texttospeech.v1beta1.SynthesizeLongAudioResponse.
 * Use `create(SynthesizeLongAudioResponseSchema)` to create a new message.
 */
export const SynthesizeLongAudioResponseSchema: GenMessage<SynthesizeLongAudioResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_texttospeech_v1beta1_cloud_tts_lrs, 1);

/**
 * Metadata for response returned by the `SynthesizeLongAudio` method.
 *
 * @generated from message google.cloud.texttospeech.v1beta1.SynthesizeLongAudioMetadata
 */
export type SynthesizeLongAudioMetadata = Message<"google.cloud.texttospeech.v1beta1.SynthesizeLongAudioMetadata"> & {
  /**
   * Time when the request was received.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 1;
   */
  startTime?: Timestamp;

  /**
   * Deprecated. Do not use.
   *
   * @generated from field: google.protobuf.Timestamp last_update_time = 2 [deprecated = true];
   * @deprecated
   */
  lastUpdateTime?: Timestamp;

  /**
   * The progress of the most recent processing update in percentage, ie. 70.0%.
   *
   * @generated from field: double progress_percentage = 3;
   */
  progressPercentage: number;
};

/**
 * Describes the message google.cloud.texttospeech.v1beta1.SynthesizeLongAudioMetadata.
 * Use `create(SynthesizeLongAudioMetadataSchema)` to create a new message.
 */
export const SynthesizeLongAudioMetadataSchema: GenMessage<SynthesizeLongAudioMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_texttospeech_v1beta1_cloud_tts_lrs, 2);

/**
 * Service that implements Google Cloud Text-to-Speech API.
 *
 * @generated from service google.cloud.texttospeech.v1beta1.TextToSpeechLongAudioSynthesize
 */
export const TextToSpeechLongAudioSynthesize: GenService<{
  /**
   * Synthesizes long form text asynchronously.
   *
   * @generated from rpc google.cloud.texttospeech.v1beta1.TextToSpeechLongAudioSynthesize.SynthesizeLongAudio
   */
  synthesizeLongAudio: {
    methodKind: "unary";
    input: typeof SynthesizeLongAudioRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_texttospeech_v1beta1_cloud_tts_lrs, 0);
