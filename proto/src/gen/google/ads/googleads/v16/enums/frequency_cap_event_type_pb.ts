// Copyright 2023 Google LLC
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
// @generated from file google/ads/googleads/v16/enums/frequency_cap_event_type.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/frequency_cap_event_type.proto.
 */
export const file_google_ads_googleads_v16_enums_frequency_cap_event_type: GenFile = /*@__PURE__*/
  fileDesc("Cj1nb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvZnJlcXVlbmN5X2NhcF9ldmVudF90eXBlLnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMicgoZRnJlcXVlbmN5Q2FwRXZlbnRUeXBlRW51bSJVChVGcmVxdWVuY3lDYXBFdmVudFR5cGUSDwoLVU5TUEVDSUZJRUQQABILCgdVTktOT1dOEAESDgoKSU1QUkVTU0lPThACEg4KClZJREVPX1ZJRVcQA0L0AQoiY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtc0IaRnJlcXVlbmN5Q2FwRXZlbnRUeXBlUHJvdG9QAVpDZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNi9lbnVtcztlbnVtc6ICA0dBQaoCHkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNi5FbnVtc8oCHkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxNlxFbnVtc+oCIkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNjo6RW51bXNiBnByb3RvMw");

/**
 * Container for enum describing the type of event that the cap applies to.
 *
 * @generated from message google.ads.googleads.v16.enums.FrequencyCapEventTypeEnum
 */
export type FrequencyCapEventTypeEnum = Message<"google.ads.googleads.v16.enums.FrequencyCapEventTypeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.FrequencyCapEventTypeEnum.
 * Use `create(FrequencyCapEventTypeEnumSchema)` to create a new message.
 */
export const FrequencyCapEventTypeEnumSchema: GenMessage<FrequencyCapEventTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_frequency_cap_event_type, 0);

/**
 * The type of event that the cap applies to (for example, impression).
 *
 * @generated from enum google.ads.googleads.v16.enums.FrequencyCapEventTypeEnum.FrequencyCapEventType
 */
export enum FrequencyCapEventTypeEnum_FrequencyCapEventType {
  /**
   * Not specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Used for return value only. Represents value unknown in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * The cap applies on ad impressions.
   *
   * @generated from enum value: IMPRESSION = 2;
   */
  IMPRESSION = 2,

  /**
   * The cap applies on video ad views.
   *
   * @generated from enum value: VIDEO_VIEW = 3;
   */
  VIDEO_VIEW = 3,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.FrequencyCapEventTypeEnum.FrequencyCapEventType.
 */
export const FrequencyCapEventTypeEnum_FrequencyCapEventTypeSchema: GenEnum<FrequencyCapEventTypeEnum_FrequencyCapEventType> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_frequency_cap_event_type, 0, 0);
