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
// @generated from file google/assistant/embedded/v1alpha1/embedded_assistant.proto (package google.assistant.embedded.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import type { Status } from "../../../rpc/status_pb";
import { file_google_rpc_status } from "../../../rpc/status_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/assistant/embedded/v1alpha1/embedded_assistant.proto.
 */
export const file_google_assistant_embedded_v1alpha1_embedded_assistant: GenFile = /*@__PURE__*/
  fileDesc("Cjtnb29nbGUvYXNzaXN0YW50L2VtYmVkZGVkL3YxYWxwaGExL2VtYmVkZGVkX2Fzc2lzdGFudC5wcm90bxIiZ29vZ2xlLmFzc2lzdGFudC5lbWJlZGRlZC52MWFscGhhMSL1AQoOQ29udmVyc2VDb25maWcSSgoPYXVkaW9faW5fY29uZmlnGAEgASgLMjEuZ29vZ2xlLmFzc2lzdGFudC5lbWJlZGRlZC52MWFscGhhMS5BdWRpb0luQ29uZmlnEkwKEGF1ZGlvX291dF9jb25maWcYAiABKAsyMi5nb29nbGUuYXNzaXN0YW50LmVtYmVkZGVkLnYxYWxwaGExLkF1ZGlvT3V0Q29uZmlnEkkKDmNvbnZlcnNlX3N0YXRlGAMgASgLMjEuZ29vZ2xlLmFzc2lzdGFudC5lbWJlZGRlZC52MWFscGhhMS5Db252ZXJzZVN0YXRlIrYBCg1BdWRpb0luQ29uZmlnEkwKCGVuY29kaW5nGAEgASgOMjouZ29vZ2xlLmFzc2lzdGFudC5lbWJlZGRlZC52MWFscGhhMS5BdWRpb0luQ29uZmlnLkVuY29kaW5nEhkKEXNhbXBsZV9yYXRlX2hlcnR6GAIgASgFIjwKCEVuY29kaW5nEhgKFEVOQ09ESU5HX1VOU1BFQ0lGSUVEEAASDAoITElORUFSMTYQARIICgRGTEFDEAIi4wEKDkF1ZGlvT3V0Q29uZmlnEk0KCGVuY29kaW5nGAEgASgOMjsuZ29vZ2xlLmFzc2lzdGFudC5lbWJlZGRlZC52MWFscGhhMS5BdWRpb091dENvbmZpZy5FbmNvZGluZxIZChFzYW1wbGVfcmF0ZV9oZXJ0ehgCIAEoBRIZChF2b2x1bWVfcGVyY2VudGFnZRgDIAEoBSJMCghFbmNvZGluZxIYChRFTkNPRElOR19VTlNQRUNJRklFRBAAEgwKCExJTkVBUjE2EAESBwoDTVAzEAISDwoLT1BVU19JTl9PR0cQAyIrCg1Db252ZXJzZVN0YXRlEhoKEmNvbnZlcnNhdGlvbl9zdGF0ZRgBIAEoDCIeCghBdWRpb091dBISCgphdWRpb19kYXRhGAEgASgMIr0CCg5Db252ZXJzZVJlc3VsdBIbChNzcG9rZW5fcmVxdWVzdF90ZXh0GAEgASgJEhwKFHNwb2tlbl9yZXNwb25zZV90ZXh0GAIgASgJEhoKEmNvbnZlcnNhdGlvbl9zdGF0ZRgDIAEoDBJaCg9taWNyb3Bob25lX21vZGUYBCABKA4yQS5nb29nbGUuYXNzaXN0YW50LmVtYmVkZGVkLnYxYWxwaGExLkNvbnZlcnNlUmVzdWx0Lk1pY3JvcGhvbmVNb2RlEhkKEXZvbHVtZV9wZXJjZW50YWdlGAUgASgFIl0KDk1pY3JvcGhvbmVNb2RlEh8KG01JQ1JPUEhPTkVfTU9ERV9VTlNQRUNJRklFRBAAEhQKEENMT1NFX01JQ1JPUEhPTkUQARIUChBESUFMT0dfRk9MTE9XX09OEAIifwoPQ29udmVyc2VSZXF1ZXN0EkQKBmNvbmZpZxgBIAEoCzIyLmdvb2dsZS5hc3Npc3RhbnQuZW1iZWRkZWQudjFhbHBoYTEuQ29udmVyc2VDb25maWdIABISCghhdWRpb19pbhgCIAEoDEgAQhIKEGNvbnZlcnNlX3JlcXVlc3Qi6gIKEENvbnZlcnNlUmVzcG9uc2USIwoFZXJyb3IYASABKAsyEi5nb29nbGUucnBjLlN0YXR1c0gAElQKCmV2ZW50X3R5cGUYAiABKA4yPi5nb29nbGUuYXNzaXN0YW50LmVtYmVkZGVkLnYxYWxwaGExLkNvbnZlcnNlUmVzcG9uc2UuRXZlbnRUeXBlSAASQQoJYXVkaW9fb3V0GAMgASgLMiwuZ29vZ2xlLmFzc2lzdGFudC5lbWJlZGRlZC52MWFscGhhMS5BdWRpb091dEgAEkQKBnJlc3VsdBgFIAEoCzIyLmdvb2dsZS5hc3Npc3RhbnQuZW1iZWRkZWQudjFhbHBoYTEuQ29udmVyc2VSZXN1bHRIACI9CglFdmVudFR5cGUSGgoWRVZFTlRfVFlQRV9VTlNQRUNJRklFRBAAEhQKEEVORF9PRl9VVFRFUkFOQ0UQAUITChFjb252ZXJzZV9yZXNwb25zZTKOAQoRRW1iZWRkZWRBc3Npc3RhbnQSeQoIQ29udmVyc2USMy5nb29nbGUuYXNzaXN0YW50LmVtYmVkZGVkLnYxYWxwaGExLkNvbnZlcnNlUmVxdWVzdBo0Lmdvb2dsZS5hc3Npc3RhbnQuZW1iZWRkZWQudjFhbHBoYTEuQ29udmVyc2VSZXNwb25zZSgBMAFChgEKJmNvbS5nb29nbGUuYXNzaXN0YW50LmVtYmVkZGVkLnYxYWxwaGExQg5Bc3Npc3RhbnRQcm90b1ABWkpnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fzc2lzdGFudC9lbWJlZGRlZC92MWFscGhhMTtlbWJlZGRlZGIGcHJvdG8z", [file_google_api_annotations, file_google_rpc_status]);

/**
 * Specifies how to process the `ConverseRequest` messages.
 *
 * @generated from message google.assistant.embedded.v1alpha1.ConverseConfig
 */
export type ConverseConfig = Message<"google.assistant.embedded.v1alpha1.ConverseConfig"> & {
  /**
   * *Required* Specifies how to process the subsequent incoming audio.
   *
   * @generated from field: google.assistant.embedded.v1alpha1.AudioInConfig audio_in_config = 1;
   */
  audioInConfig?: AudioInConfig;

  /**
   * *Required* Specifies how to format the audio that will be returned.
   *
   * @generated from field: google.assistant.embedded.v1alpha1.AudioOutConfig audio_out_config = 2;
   */
  audioOutConfig?: AudioOutConfig;

  /**
   * *Required* Represents the current dialog state.
   *
   * @generated from field: google.assistant.embedded.v1alpha1.ConverseState converse_state = 3;
   */
  converseState?: ConverseState;
};

/**
 * Describes the message google.assistant.embedded.v1alpha1.ConverseConfig.
 * Use `create(ConverseConfigSchema)` to create a new message.
 */
export const ConverseConfigSchema: GenMessage<ConverseConfig> = /*@__PURE__*/
  messageDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 0);

/**
 * Specifies how to process the `audio_in` data that will be provided in
 * subsequent requests. For recommended settings, see the Google Assistant SDK
 * [best
 * practices](https://developers.google.com/assistant/sdk/develop/grpc/best-practices/audio).
 *
 * @generated from message google.assistant.embedded.v1alpha1.AudioInConfig
 */
export type AudioInConfig = Message<"google.assistant.embedded.v1alpha1.AudioInConfig"> & {
  /**
   * *Required* Encoding of audio data sent in all `audio_in` messages.
   *
   * @generated from field: google.assistant.embedded.v1alpha1.AudioInConfig.Encoding encoding = 1;
   */
  encoding: AudioInConfig_Encoding;

  /**
   * *Required* Sample rate (in Hertz) of the audio data sent in all `audio_in`
   * messages. Valid values are from 16000-24000, but 16000 is optimal.
   * For best results, set the sampling rate of the audio source to 16000 Hz.
   * If that's not possible, use the native sample rate of the audio source
   * (instead of re-sampling).
   *
   * @generated from field: int32 sample_rate_hertz = 2;
   */
  sampleRateHertz: number;
};

/**
 * Describes the message google.assistant.embedded.v1alpha1.AudioInConfig.
 * Use `create(AudioInConfigSchema)` to create a new message.
 */
export const AudioInConfigSchema: GenMessage<AudioInConfig> = /*@__PURE__*/
  messageDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 1);

/**
 * Audio encoding of the data sent in the audio message.
 * Audio must be one-channel (mono). The only language supported is "en-US".
 *
 * @generated from enum google.assistant.embedded.v1alpha1.AudioInConfig.Encoding
 */
export enum AudioInConfig_Encoding {
  /**
   * Not specified. Will return result [google.rpc.Code.INVALID_ARGUMENT][].
   *
   * @generated from enum value: ENCODING_UNSPECIFIED = 0;
   */
  ENCODING_UNSPECIFIED = 0,

  /**
   * Uncompressed 16-bit signed little-endian samples (Linear PCM).
   * This encoding includes no header, only the raw audio bytes.
   *
   * @generated from enum value: LINEAR16 = 1;
   */
  LINEAR16 = 1,

  /**
   * [`FLAC`](https://xiph.org/flac/documentation.html) (Free Lossless Audio
   * Codec) is the recommended encoding because it is
   * lossless--therefore recognition is not compromised--and
   * requires only about half the bandwidth of `LINEAR16`. This encoding
   * includes the `FLAC` stream header followed by audio data. It supports
   * 16-bit and 24-bit samples, however, not all fields in `STREAMINFO` are
   * supported.
   *
   * @generated from enum value: FLAC = 2;
   */
  FLAC = 2,
}

/**
 * Describes the enum google.assistant.embedded.v1alpha1.AudioInConfig.Encoding.
 */
export const AudioInConfig_EncodingSchema: GenEnum<AudioInConfig_Encoding> = /*@__PURE__*/
  enumDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 1, 0);

/**
 * Specifies the desired format for the server to use when it returns
 * `audio_out` messages.
 *
 * @generated from message google.assistant.embedded.v1alpha1.AudioOutConfig
 */
export type AudioOutConfig = Message<"google.assistant.embedded.v1alpha1.AudioOutConfig"> & {
  /**
   * *Required* The encoding of audio data to be returned in all `audio_out`
   * messages.
   *
   * @generated from field: google.assistant.embedded.v1alpha1.AudioOutConfig.Encoding encoding = 1;
   */
  encoding: AudioOutConfig_Encoding;

  /**
   * *Required* The sample rate in Hertz of the audio data returned in
   * `audio_out` messages. Valid values are: 16000-24000.
   *
   * @generated from field: int32 sample_rate_hertz = 2;
   */
  sampleRateHertz: number;

  /**
   * *Required* Current volume setting of the device's audio output.
   * Valid values are 1 to 100 (corresponding to 1% to 100%).
   *
   * @generated from field: int32 volume_percentage = 3;
   */
  volumePercentage: number;
};

/**
 * Describes the message google.assistant.embedded.v1alpha1.AudioOutConfig.
 * Use `create(AudioOutConfigSchema)` to create a new message.
 */
export const AudioOutConfigSchema: GenMessage<AudioOutConfig> = /*@__PURE__*/
  messageDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 2);

/**
 * Audio encoding of the data returned in the audio message. All encodings are
 * raw audio bytes with no header, except as indicated below.
 *
 * @generated from enum google.assistant.embedded.v1alpha1.AudioOutConfig.Encoding
 */
export enum AudioOutConfig_Encoding {
  /**
   * Not specified. Will return result [google.rpc.Code.INVALID_ARGUMENT][].
   *
   * @generated from enum value: ENCODING_UNSPECIFIED = 0;
   */
  ENCODING_UNSPECIFIED = 0,

  /**
   * Uncompressed 16-bit signed little-endian samples (Linear PCM).
   *
   * @generated from enum value: LINEAR16 = 1;
   */
  LINEAR16 = 1,

  /**
   * MP3 audio encoding. The sample rate is encoded in the payload.
   *
   * @generated from enum value: MP3 = 2;
   */
  MP3 = 2,

  /**
   * Opus-encoded audio wrapped in an ogg container. The result will be a
   * file which can be played natively on Android and in some browsers (such
   * as Chrome). The quality of the encoding is considerably higher than MP3
   * while using the same bitrate. The sample rate is encoded in the payload.
   *
   * @generated from enum value: OPUS_IN_OGG = 3;
   */
  OPUS_IN_OGG = 3,
}

/**
 * Describes the enum google.assistant.embedded.v1alpha1.AudioOutConfig.Encoding.
 */
export const AudioOutConfig_EncodingSchema: GenEnum<AudioOutConfig_Encoding> = /*@__PURE__*/
  enumDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 2, 0);

/**
 * Provides information about the current dialog state.
 *
 * @generated from message google.assistant.embedded.v1alpha1.ConverseState
 */
export type ConverseState = Message<"google.assistant.embedded.v1alpha1.ConverseState"> & {
  /**
   * *Required* The `conversation_state` value returned in the prior
   * `ConverseResponse`. Omit (do not set the field) if there was no prior
   * `ConverseResponse`. If there was a prior `ConverseResponse`, do not omit
   * this field; doing so will end that conversation (and this new request will
   * start a new conversation).
   *
   * @generated from field: bytes conversation_state = 1;
   */
  conversationState: Uint8Array;
};

/**
 * Describes the message google.assistant.embedded.v1alpha1.ConverseState.
 * Use `create(ConverseStateSchema)` to create a new message.
 */
export const ConverseStateSchema: GenMessage<ConverseState> = /*@__PURE__*/
  messageDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 3);

/**
 * The audio containing the assistant's response to the query. Sequential chunks
 * of audio data are received in sequential `ConverseResponse` messages.
 *
 * @generated from message google.assistant.embedded.v1alpha1.AudioOut
 */
export type AudioOut = Message<"google.assistant.embedded.v1alpha1.AudioOut"> & {
  /**
   * *Output-only* The audio data containing the assistant's response to the
   * query. Sequential chunks of audio data are received in sequential
   * `ConverseResponse` messages.
   *
   * @generated from field: bytes audio_data = 1;
   */
  audioData: Uint8Array;
};

/**
 * Describes the message google.assistant.embedded.v1alpha1.AudioOut.
 * Use `create(AudioOutSchema)` to create a new message.
 */
export const AudioOutSchema: GenMessage<AudioOut> = /*@__PURE__*/
  messageDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 4);

/**
 * The semantic result for the user's spoken query.
 *
 * @generated from message google.assistant.embedded.v1alpha1.ConverseResult
 */
export type ConverseResult = Message<"google.assistant.embedded.v1alpha1.ConverseResult"> & {
  /**
   * *Output-only* The recognized transcript of what the user said.
   *
   * @generated from field: string spoken_request_text = 1;
   */
  spokenRequestText: string;

  /**
   * *Output-only* The text of the assistant's spoken response. This is only
   * returned for an IFTTT action.
   *
   * @generated from field: string spoken_response_text = 2;
   */
  spokenResponseText: string;

  /**
   * *Output-only* State information for subsequent `ConverseRequest`. This
   * value should be saved in the client and returned in the
   * `conversation_state` with the next `ConverseRequest`. (The client does not
   * need to interpret or otherwise use this value.) There is no need to save
   * this information across device restarts.
   *
   * @generated from field: bytes conversation_state = 3;
   */
  conversationState: Uint8Array;

  /**
   * *Output-only* Specifies the mode of the microphone after this `Converse`
   * RPC is processed.
   *
   * @generated from field: google.assistant.embedded.v1alpha1.ConverseResult.MicrophoneMode microphone_mode = 4;
   */
  microphoneMode: ConverseResult_MicrophoneMode;

  /**
   * *Output-only* Updated volume level. The value will be 0 or omitted
   * (indicating no change) unless a voice command such as "Increase the volume"
   * or "Set volume level 4" was recognized, in which case the value will be
   * between 1 and 100 (corresponding to the new volume level of 1% to 100%).
   * Typically, a client should use this volume level when playing the
   * `audio_out` data, and retain this value as the current volume level and
   * supply it in the `AudioOutConfig` of the next `ConverseRequest`. (Some
   * clients may also implement other ways to allow the current volume level to
   * be changed, for example, by providing a knob that the user can turn.)
   *
   * @generated from field: int32 volume_percentage = 5;
   */
  volumePercentage: number;
};

/**
 * Describes the message google.assistant.embedded.v1alpha1.ConverseResult.
 * Use `create(ConverseResultSchema)` to create a new message.
 */
export const ConverseResultSchema: GenMessage<ConverseResult> = /*@__PURE__*/
  messageDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 5);

/**
 * Possible states of the microphone after a `Converse` RPC completes.
 *
 * @generated from enum google.assistant.embedded.v1alpha1.ConverseResult.MicrophoneMode
 */
export enum ConverseResult_MicrophoneMode {
  /**
   * No mode specified.
   *
   * @generated from enum value: MICROPHONE_MODE_UNSPECIFIED = 0;
   */
  MICROPHONE_MODE_UNSPECIFIED = 0,

  /**
   * The service is not expecting a follow-on question from the user.
   * The microphone should remain off until the user re-activates it.
   *
   * @generated from enum value: CLOSE_MICROPHONE = 1;
   */
  CLOSE_MICROPHONE = 1,

  /**
   * The service is expecting a follow-on question from the user. The
   * microphone should be re-opened when the `AudioOut` playback completes
   * (by starting a new `Converse` RPC call to send the new audio).
   *
   * @generated from enum value: DIALOG_FOLLOW_ON = 2;
   */
  DIALOG_FOLLOW_ON = 2,
}

/**
 * Describes the enum google.assistant.embedded.v1alpha1.ConverseResult.MicrophoneMode.
 */
export const ConverseResult_MicrophoneModeSchema: GenEnum<ConverseResult_MicrophoneMode> = /*@__PURE__*/
  enumDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 5, 0);

/**
 * The top-level message sent by the client. Clients must send at least two, and
 * typically numerous `ConverseRequest` messages. The first message must
 * contain a `config` message and must not contain `audio_in` data. All
 * subsequent messages must contain `audio_in` data and must not contain a
 * `config` message.
 *
 * @generated from message google.assistant.embedded.v1alpha1.ConverseRequest
 */
export type ConverseRequest = Message<"google.assistant.embedded.v1alpha1.ConverseRequest"> & {
  /**
   * Exactly one of these fields must be specified in each `ConverseRequest`.
   *
   * @generated from oneof google.assistant.embedded.v1alpha1.ConverseRequest.converse_request
   */
  converseRequest: {
    /**
     * The `config` message provides information to the recognizer that
     * specifies how to process the request.
     * The first `ConverseRequest` message must contain a `config` message.
     *
     * @generated from field: google.assistant.embedded.v1alpha1.ConverseConfig config = 1;
     */
    value: ConverseConfig;
    case: "config";
  } | {
    /**
     * The audio data to be recognized. Sequential chunks of audio data are sent
     * in sequential `ConverseRequest` messages. The first `ConverseRequest`
     * message must not contain `audio_in` data and all subsequent
     * `ConverseRequest` messages must contain `audio_in` data. The audio bytes
     * must be encoded as specified in `AudioInConfig`.
     * Audio must be sent at approximately real-time (16000 samples per second).
     * An error will be returned if audio is sent significantly faster or
     * slower.
     *
     * @generated from field: bytes audio_in = 2;
     */
    value: Uint8Array;
    case: "audioIn";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.assistant.embedded.v1alpha1.ConverseRequest.
 * Use `create(ConverseRequestSchema)` to create a new message.
 */
export const ConverseRequestSchema: GenMessage<ConverseRequest> = /*@__PURE__*/
  messageDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 6);

/**
 * The top-level message received by the client. A series of one or more
 * `ConverseResponse` messages are streamed back to the client.
 *
 * @generated from message google.assistant.embedded.v1alpha1.ConverseResponse
 */
export type ConverseResponse = Message<"google.assistant.embedded.v1alpha1.ConverseResponse"> & {
  /**
   * Exactly one of these fields will be populated in each `ConverseResponse`.
   *
   * @generated from oneof google.assistant.embedded.v1alpha1.ConverseResponse.converse_response
   */
  converseResponse: {
    /**
     * *Output-only* If set, returns a [google.rpc.Status][google.rpc.Status]
     * message that specifies the error for the operation. If an error occurs
     * during processing, this message will be set and there will be no further
     * messages sent.
     *
     * @generated from field: google.rpc.Status error = 1;
     */
    value: Status;
    case: "error";
  } | {
    /**
     * *Output-only* Indicates the type of event.
     *
     * @generated from field: google.assistant.embedded.v1alpha1.ConverseResponse.EventType event_type = 2;
     */
    value: ConverseResponse_EventType;
    case: "eventType";
  } | {
    /**
     * *Output-only* The audio containing the assistant's response to the query.
     *
     * @generated from field: google.assistant.embedded.v1alpha1.AudioOut audio_out = 3;
     */
    value: AudioOut;
    case: "audioOut";
  } | {
    /**
     * *Output-only* The semantic result for the user's spoken query.
     *
     * @generated from field: google.assistant.embedded.v1alpha1.ConverseResult result = 5;
     */
    value: ConverseResult;
    case: "result";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.assistant.embedded.v1alpha1.ConverseResponse.
 * Use `create(ConverseResponseSchema)` to create a new message.
 */
export const ConverseResponseSchema: GenMessage<ConverseResponse> = /*@__PURE__*/
  messageDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 7);

/**
 * Indicates the type of event.
 *
 * @generated from enum google.assistant.embedded.v1alpha1.ConverseResponse.EventType
 */
export enum ConverseResponse_EventType {
  /**
   * No event specified.
   *
   * @generated from enum value: EVENT_TYPE_UNSPECIFIED = 0;
   */
  EVENT_TYPE_UNSPECIFIED = 0,

  /**
   * This event indicates that the server has detected the end of the user's
   * speech utterance and expects no additional speech. Therefore, the server
   * will not process additional audio (although it may subsequently return
   * additional results). The client should stop sending additional audio
   * data, half-close the gRPC connection, and wait for any additional results
   * until the server closes the gRPC connection.
   *
   * @generated from enum value: END_OF_UTTERANCE = 1;
   */
  END_OF_UTTERANCE = 1,
}

/**
 * Describes the enum google.assistant.embedded.v1alpha1.ConverseResponse.EventType.
 */
export const ConverseResponse_EventTypeSchema: GenEnum<ConverseResponse_EventType> = /*@__PURE__*/
  enumDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 7, 0);

/**
 * Service that implements Google Assistant API.
 *
 * @generated from service google.assistant.embedded.v1alpha1.EmbeddedAssistant
 */
export const EmbeddedAssistant: GenService<{
  /**
   * Initiates or continues a conversation with the embedded assistant service.
   * Each call performs one round-trip, sending an audio request to the service
   * and receiving the audio response. Uses bidirectional streaming to receive
   * results, such as the `END_OF_UTTERANCE` event, while sending audio.
   *
   * A conversation is one or more gRPC connections, each consisting of several
   * streamed requests and responses.
   * For example, the user says *Add to my shopping list* and the assistant
   * responds *What do you want to add?*. The sequence of streamed requests and
   * responses in the first gRPC message could be:
   *
   * *   ConverseRequest.config
   * *   ConverseRequest.audio_in
   * *   ConverseRequest.audio_in
   * *   ConverseRequest.audio_in
   * *   ConverseRequest.audio_in
   * *   ConverseResponse.event_type.END_OF_UTTERANCE
   * *   ConverseResponse.result.microphone_mode.DIALOG_FOLLOW_ON
   * *   ConverseResponse.audio_out
   * *   ConverseResponse.audio_out
   * *   ConverseResponse.audio_out
   *
   * The user then says *bagels* and the assistant responds
   * *OK, I've added bagels to your shopping list*. This is sent as another gRPC
   * connection call to the `Converse` method, again with streamed requests and
   * responses, such as:
   *
   * *   ConverseRequest.config
   * *   ConverseRequest.audio_in
   * *   ConverseRequest.audio_in
   * *   ConverseRequest.audio_in
   * *   ConverseResponse.event_type.END_OF_UTTERANCE
   * *   ConverseResponse.result.microphone_mode.CLOSE_MICROPHONE
   * *   ConverseResponse.audio_out
   * *   ConverseResponse.audio_out
   * *   ConverseResponse.audio_out
   * *   ConverseResponse.audio_out
   *
   * Although the precise order of responses is not guaranteed, sequential
   * ConverseResponse.audio_out messages will always contain sequential portions
   * of audio.
   *
   * @generated from rpc google.assistant.embedded.v1alpha1.EmbeddedAssistant.Converse
   */
  converse: {
    methodKind: "bidi_streaming";
    input: typeof ConverseRequestSchema;
    output: typeof ConverseResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_assistant_embedded_v1alpha1_embedded_assistant, 0);
