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
// @generated from file google/devtools/testing/v1/adb_service.proto (package google.devtools.testing.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/devtools/testing/v1/adb_service.proto.
 */
export const file_google_devtools_testing_v1_adb_service: GenFile = /*@__PURE__*/
  fileDesc("Cixnb29nbGUvZGV2dG9vbHMvdGVzdGluZy92MS9hZGJfc2VydmljZS5wcm90bxIaZ29vZ2xlLmRldnRvb2xzLnRlc3RpbmcudjEi4AEKDURldmljZU1lc3NhZ2USQQoNc3RhdHVzX3VwZGF0ZRgBIAEoCzIoLmdvb2dsZS5kZXZ0b29scy50ZXN0aW5nLnYxLlN0YXR1c1VwZGF0ZUgAEkEKDXN0cmVhbV9zdGF0dXMYAiABKAsyKC5nb29nbGUuZGV2dG9vbHMudGVzdGluZy52MS5TdHJlYW1TdGF0dXNIABI9CgtzdHJlYW1fZGF0YRgDIAEoCzImLmdvb2dsZS5kZXZ0b29scy50ZXN0aW5nLnYxLlN0cmVhbURhdGFIAEIKCghjb250ZW50cyKJAQoKQWRiTWVzc2FnZRIwCgRvcGVuGAEgASgLMiAuZ29vZ2xlLmRldnRvb2xzLnRlc3RpbmcudjEuT3BlbkgAEj0KC3N0cmVhbV9kYXRhGAIgASgLMiYuZ29vZ2xlLmRldnRvb2xzLnRlc3RpbmcudjEuU3RyZWFtRGF0YUgAQgoKCGNvbnRlbnRzIpUDCgxTdGF0dXNVcGRhdGUSQwoFc3RhdGUYASABKA4yNC5nb29nbGUuZGV2dG9vbHMudGVzdGluZy52MS5TdGF0dXNVcGRhdGUuRGV2aWNlU3RhdGUSTAoKcHJvcGVydGllcxgCIAMoCzI4Lmdvb2dsZS5kZXZ0b29scy50ZXN0aW5nLnYxLlN0YXR1c1VwZGF0ZS5Qcm9wZXJ0aWVzRW50cnkSEAoIZmVhdHVyZXMYAyABKAkaMQoPUHJvcGVydGllc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEirAEKC0RldmljZVN0YXRlEhwKGERFVklDRV9TVEFURV9VTlNQRUNJRklFRBAAEgoKBkRFVklDRRABEgwKCFJFQ09WRVJZEAISCgoGUkVTQ1VFEAMSDAoIU0lERUxPQUQQBBILCgdNSVNTSU5HEAoSCwoHT0ZGTElORRALEhAKDFVOQVVUSE9SSVpFRBAMEg8KC0FVVEhPUklaSU5HEA0SDgoKQ09OTkVDVElORxAOIo8BCgxTdHJlYW1TdGF0dXMSEQoJc3RyZWFtX2lkGAEgASgFEjAKBG9rYXkYAiABKAsyIC5nb29nbGUuZGV2dG9vbHMudGVzdGluZy52MS5Pa2F5SAASMAoEZmFpbBgDIAEoCzIgLmdvb2dsZS5kZXZ0b29scy50ZXN0aW5nLnYxLkZhaWxIAEIICgZzdGF0dXMiKgoET3BlbhIRCglzdHJlYW1faWQYASABKAUSDwoHc2VydmljZRgCIAEoCSJvCgpTdHJlYW1EYXRhEhEKCXN0cmVhbV9pZBgBIAEoBRIOCgRkYXRhGAIgASgMSAASMgoFY2xvc2UYAyABKAsyIS5nb29nbGUuZGV2dG9vbHMudGVzdGluZy52MS5DbG9zZUgAQgoKCGNvbnRlbnRzIgYKBE9rYXkiFgoERmFpbBIOCgZyZWFzb24YASABKAkiBwoFQ2xvc2VCdgoeY29tLmdvb2dsZS5kZXZ0b29scy50ZXN0aW5nLnYxQg9BZGJTZXJ2aWNlUHJvdG9QAVpBZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9kZXZ0b29scy90ZXN0aW5nL3YxO3Rlc3RpbmdiBnByb3RvMw");

/**
 * A message returned from a device.
 *
 * @generated from message google.devtools.testing.v1.DeviceMessage
 */
export type DeviceMessage = Message<"google.devtools.testing.v1.DeviceMessage"> & {
  /**
   * @generated from oneof google.devtools.testing.v1.DeviceMessage.contents
   */
  contents: {
    /**
     * Information about the device's state.
     *
     * @generated from field: google.devtools.testing.v1.StatusUpdate status_update = 1;
     */
    value: StatusUpdate;
    case: "statusUpdate";
  } | {
    /**
     * The result of a device stream from ADB.
     *
     * @generated from field: google.devtools.testing.v1.StreamStatus stream_status = 2;
     */
    value: StreamStatus;
    case: "streamStatus";
  } | {
    /**
     * Data from an open stream.
     *
     * @generated from field: google.devtools.testing.v1.StreamData stream_data = 3;
     */
    value: StreamData;
    case: "streamData";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.devtools.testing.v1.DeviceMessage.
 * Use `create(DeviceMessageSchema)` to create a new message.
 */
export const DeviceMessageSchema: GenMessage<DeviceMessage> = /*@__PURE__*/
  messageDesc(file_google_devtools_testing_v1_adb_service, 0);

/**
 * A message to an ADB server.
 *
 * @generated from message google.devtools.testing.v1.AdbMessage
 */
export type AdbMessage = Message<"google.devtools.testing.v1.AdbMessage"> & {
  /**
   * @generated from oneof google.devtools.testing.v1.AdbMessage.contents
   */
  contents: {
    /**
     * Open a new stream.
     *
     * @generated from field: google.devtools.testing.v1.Open open = 1;
     */
    value: Open;
    case: "open";
  } | {
    /**
     * Send data to a stream.
     *
     * @generated from field: google.devtools.testing.v1.StreamData stream_data = 2;
     */
    value: StreamData;
    case: "streamData";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.devtools.testing.v1.AdbMessage.
 * Use `create(AdbMessageSchema)` to create a new message.
 */
export const AdbMessageSchema: GenMessage<AdbMessage> = /*@__PURE__*/
  messageDesc(file_google_devtools_testing_v1_adb_service, 1);

/**
 * A StatusUpdate message given over the ADB protocol for the device state.
 *
 * @generated from message google.devtools.testing.v1.StatusUpdate
 */
export type StatusUpdate = Message<"google.devtools.testing.v1.StatusUpdate"> & {
  /**
   * The device's state
   *
   * @generated from field: google.devtools.testing.v1.StatusUpdate.DeviceState state = 1;
   */
  state: StatusUpdate_DeviceState;

  /**
   * A map of properties with information about this device.
   *
   * @generated from field: map<string, string> properties = 2;
   */
  properties: { [key: string]: string };

  /**
   * A comma-separated list of "features" that this device supports.
   *
   * @generated from field: string features = 3;
   */
  features: string;
};

/**
 * Describes the message google.devtools.testing.v1.StatusUpdate.
 * Use `create(StatusUpdateSchema)` to create a new message.
 */
export const StatusUpdateSchema: GenMessage<StatusUpdate> = /*@__PURE__*/
  messageDesc(file_google_devtools_testing_v1_adb_service, 2);

/**
 * The state displayed with the ADB Device when running "adb devices"
 *
 * @generated from enum google.devtools.testing.v1.StatusUpdate.DeviceState
 */
export enum StatusUpdate_DeviceState {
  /**
   * The device state is unknown.
   *
   * @generated from enum value: DEVICE_STATE_UNSPECIFIED = 0;
   */
  DEVICE_STATE_UNSPECIFIED = 0,

  /**
   * The ADB device is in the "device" status.
   *
   * @generated from enum value: DEVICE = 1;
   */
  DEVICE = 1,

  /**
   * The ADB device is in the "recovery" status.
   *
   * @generated from enum value: RECOVERY = 2;
   */
  RECOVERY = 2,

  /**
   * The ADB device is in the "rescue" status.
   *
   * @generated from enum value: RESCUE = 3;
   */
  RESCUE = 3,

  /**
   * The ADB device is in the "sideload" status.
   *
   * @generated from enum value: SIDELOAD = 4;
   */
  SIDELOAD = 4,

  /**
   * The ADB device is in the "missing" status.
   *
   * @generated from enum value: MISSING = 10;
   */
  MISSING = 10,

  /**
   * The ADB device is in the "offline" status.
   *
   * @generated from enum value: OFFLINE = 11;
   */
  OFFLINE = 11,

  /**
   * The ADB device is in the "unauthorized" status.
   *
   * @generated from enum value: UNAUTHORIZED = 12;
   */
  UNAUTHORIZED = 12,

  /**
   * The ADB device is in the "authorizing" status.
   *
   * @generated from enum value: AUTHORIZING = 13;
   */
  AUTHORIZING = 13,

  /**
   * The ADB device is in the "connecting" status.
   *
   * @generated from enum value: CONNECTING = 14;
   */
  CONNECTING = 14,
}

/**
 * Describes the enum google.devtools.testing.v1.StatusUpdate.DeviceState.
 */
export const StatusUpdate_DeviceStateSchema: GenEnum<StatusUpdate_DeviceState> = /*@__PURE__*/
  enumDesc(file_google_devtools_testing_v1_adb_service, 2, 0);

/**
 * The result of a stream.
 *
 * @generated from message google.devtools.testing.v1.StreamStatus
 */
export type StreamStatus = Message<"google.devtools.testing.v1.StreamStatus"> & {
  /**
   * The unique ID of this stream, assigned by the client.
   *
   * @generated from field: int32 stream_id = 1;
   */
  streamId: number;

  /**
   * The result of the stream. Either "Okay" for success or "Fail" for failure.
   *
   * @generated from oneof google.devtools.testing.v1.StreamStatus.status
   */
  status: {
    /**
     * Okay for success.
     *
     * @generated from field: google.devtools.testing.v1.Okay okay = 2;
     */
    value: Okay;
    case: "okay";
  } | {
    /**
     * Fail for failure.
     *
     * @generated from field: google.devtools.testing.v1.Fail fail = 3;
     */
    value: Fail;
    case: "fail";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.devtools.testing.v1.StreamStatus.
 * Use `create(StreamStatusSchema)` to create a new message.
 */
export const StreamStatusSchema: GenMessage<StreamStatus> = /*@__PURE__*/
  messageDesc(file_google_devtools_testing_v1_adb_service, 3);

/**
 * Message for opening a new stream.
 *
 * @generated from message google.devtools.testing.v1.Open
 */
export type Open = Message<"google.devtools.testing.v1.Open"> & {
  /**
   * The unique ID that will be used to talk to this stream. This should
   * probably just be a number that increments for each new Open request.
   *
   * @generated from field: int32 stream_id = 1;
   */
  streamId: number;

  /**
   * An ADB service to use in the new stream.
   *
   * @generated from field: string service = 2;
   */
  service: string;
};

/**
 * Describes the message google.devtools.testing.v1.Open.
 * Use `create(OpenSchema)` to create a new message.
 */
export const OpenSchema: GenMessage<Open> = /*@__PURE__*/
  messageDesc(file_google_devtools_testing_v1_adb_service, 4);

/**
 * Data for a stream.
 *
 * @generated from message google.devtools.testing.v1.StreamData
 */
export type StreamData = Message<"google.devtools.testing.v1.StreamData"> & {
  /**
   * The unique ID of this stream, assigned by the client.
   *
   * @generated from field: int32 stream_id = 1;
   */
  streamId: number;

  /**
   * The data of the stream, either bytes or "Close", indicating that the stream
   * is done.
   *
   * @generated from oneof google.devtools.testing.v1.StreamData.contents
   */
  contents: {
    /**
     * Data in the stream.
     *
     * @generated from field: bytes data = 2;
     */
    value: Uint8Array;
    case: "data";
  } | {
    /**
     * The stream is closing. EOF.
     *
     * @generated from field: google.devtools.testing.v1.Close close = 3;
     */
    value: Close;
    case: "close";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.devtools.testing.v1.StreamData.
 * Use `create(StreamDataSchema)` to create a new message.
 */
export const StreamDataSchema: GenMessage<StreamData> = /*@__PURE__*/
  messageDesc(file_google_devtools_testing_v1_adb_service, 5);

/**
 * Message signifying that the stream is open
 *
 * @generated from message google.devtools.testing.v1.Okay
 */
export type Okay = Message<"google.devtools.testing.v1.Okay"> & {
};

/**
 * Describes the message google.devtools.testing.v1.Okay.
 * Use `create(OkaySchema)` to create a new message.
 */
export const OkaySchema: GenMessage<Okay> = /*@__PURE__*/
  messageDesc(file_google_devtools_testing_v1_adb_service, 6);

/**
 * Message signifying that the stream failed to open
 *
 * @generated from message google.devtools.testing.v1.Fail
 */
export type Fail = Message<"google.devtools.testing.v1.Fail"> & {
  /**
   * A user-displayable failure reason.
   *
   * @generated from field: string reason = 1;
   */
  reason: string;
};

/**
 * Describes the message google.devtools.testing.v1.Fail.
 * Use `create(FailSchema)` to create a new message.
 */
export const FailSchema: GenMessage<Fail> = /*@__PURE__*/
  messageDesc(file_google_devtools_testing_v1_adb_service, 7);

/**
 * Message signifying that the stream closed.
 *
 * @generated from message google.devtools.testing.v1.Close
 */
export type Close = Message<"google.devtools.testing.v1.Close"> & {
};

/**
 * Describes the message google.devtools.testing.v1.Close.
 * Use `create(CloseSchema)` to create a new message.
 */
export const CloseSchema: GenMessage<Close> = /*@__PURE__*/
  messageDesc(file_google_devtools_testing_v1_adb_service, 8);
