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
// @generated from file google/ads/googleads/v17/errors/feed_item_target_error.proto (package google.ads.googleads.v17.errors, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/errors/feed_item_target_error.proto.
 */
export const file_google_ads_googleads_v17_errors_feed_item_target_error: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZXJyb3JzL2ZlZWRfaXRlbV90YXJnZXRfZXJyb3IucHJvdG8SH2dvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lcnJvcnMi/AIKF0ZlZWRJdGVtVGFyZ2V0RXJyb3JFbnVtIuACChNGZWVkSXRlbVRhcmdldEVycm9yEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEiMKH01VU1RfU0VUX1RBUkdFVF9PTkVPRl9PTl9DUkVBVEUQAhIjCh9GRUVEX0lURU1fVEFSR0VUX0FMUkVBRFlfRVhJU1RTEAMSJgoiRkVFRF9JVEVNX1NDSEVEVUxFU19DQU5OT1RfT1ZFUkxBUBAEEigKJFRBUkdFVF9MSU1JVF9FWENFRURFRF9GT1JfR0lWRU5fVFlQRRAFEh4KGlRPT19NQU5ZX1NDSEVEVUxFU19QRVJfREFZEAYSPQo5Q0FOTk9UX0hBVkVfRU5BQkxFRF9DQU1QQUlHTl9BTkRfRU5BQkxFRF9BRF9HUk9VUF9UQVJHRVRTEAcSGQoVRFVQTElDQVRFX0FEX1NDSEVEVUxFEAgSFQoRRFVQTElDQVRFX0tFWVdPUkQQCUL4AQojY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNy5lcnJvcnNCGEZlZWRJdGVtVGFyZ2V0RXJyb3JQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2Fkcy9nb29nbGVhZHMvdjE3L2Vycm9ycztlcnJvcnOiAgNHQUGqAh9Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTcuRXJyb3JzygIfR29vZ2xlXEFkc1xHb29nbGVBZHNcVjE3XEVycm9yc+oCI0dvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RXJyb3JzYgZwcm90bzM");

/**
 * Container for enum describing possible feed item target errors.
 *
 * @generated from message google.ads.googleads.v17.errors.FeedItemTargetErrorEnum
 */
export type FeedItemTargetErrorEnum = Message<"google.ads.googleads.v17.errors.FeedItemTargetErrorEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.errors.FeedItemTargetErrorEnum.
 * Use `create(FeedItemTargetErrorEnumSchema)` to create a new message.
 */
export const FeedItemTargetErrorEnumSchema: GenMessage<FeedItemTargetErrorEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_errors_feed_item_target_error, 0);

/**
 * Enum describing possible feed item target errors.
 *
 * @generated from enum google.ads.googleads.v17.errors.FeedItemTargetErrorEnum.FeedItemTargetError
 */
export enum FeedItemTargetErrorEnum_FeedItemTargetError {
  /**
   * Enum unspecified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The received error code is not known in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * On CREATE, the FeedItemTarget must have a populated field in the oneof
   * target.
   *
   * @generated from enum value: MUST_SET_TARGET_ONEOF_ON_CREATE = 2;
   */
  MUST_SET_TARGET_ONEOF_ON_CREATE = 2,

  /**
   * The specified feed item target already exists, so it cannot be added.
   *
   * @generated from enum value: FEED_ITEM_TARGET_ALREADY_EXISTS = 3;
   */
  FEED_ITEM_TARGET_ALREADY_EXISTS = 3,

  /**
   * The schedules for a given feed item cannot overlap.
   *
   * @generated from enum value: FEED_ITEM_SCHEDULES_CANNOT_OVERLAP = 4;
   */
  FEED_ITEM_SCHEDULES_CANNOT_OVERLAP = 4,

  /**
   * Too many targets of a given type were added for a single feed item.
   *
   * @generated from enum value: TARGET_LIMIT_EXCEEDED_FOR_GIVEN_TYPE = 5;
   */
  TARGET_LIMIT_EXCEEDED_FOR_GIVEN_TYPE = 5,

  /**
   * Too many AdSchedules are enabled for the feed item for the given day.
   *
   * @generated from enum value: TOO_MANY_SCHEDULES_PER_DAY = 6;
   */
  TOO_MANY_SCHEDULES_PER_DAY = 6,

  /**
   * A feed item may either have an enabled campaign target or an enabled ad
   * group target.
   *
   * @generated from enum value: CANNOT_HAVE_ENABLED_CAMPAIGN_AND_ENABLED_AD_GROUP_TARGETS = 7;
   */
  CANNOT_HAVE_ENABLED_CAMPAIGN_AND_ENABLED_AD_GROUP_TARGETS = 7,

  /**
   * Duplicate ad schedules aren't allowed.
   *
   * @generated from enum value: DUPLICATE_AD_SCHEDULE = 8;
   */
  DUPLICATE_AD_SCHEDULE = 8,

  /**
   * Duplicate keywords aren't allowed.
   *
   * @generated from enum value: DUPLICATE_KEYWORD = 9;
   */
  DUPLICATE_KEYWORD = 9,
}

/**
 * Describes the enum google.ads.googleads.v17.errors.FeedItemTargetErrorEnum.FeedItemTargetError.
 */
export const FeedItemTargetErrorEnum_FeedItemTargetErrorSchema: GenEnum<FeedItemTargetErrorEnum_FeedItemTargetError> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_errors_feed_item_target_error, 0, 0);
