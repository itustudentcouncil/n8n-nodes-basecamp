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
// @generated from file google/ads/googleads/v16/enums/experiment_metric_direction.proto (package google.ads.googleads.v16.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v16/enums/experiment_metric_direction.proto.
 */
export const file_google_ads_googleads_v16_enums_experiment_metric_direction: GenFile = /*@__PURE__*/
  fileDesc("CkBnb29nbGUvYWRzL2dvb2dsZWFkcy92MTYvZW51bXMvZXhwZXJpbWVudF9tZXRyaWNfZGlyZWN0aW9uLnByb3RvEh5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTYuZW51bXMivAEKHUV4cGVyaW1lbnRNZXRyaWNEaXJlY3Rpb25FbnVtIpoBChlFeHBlcmltZW50TWV0cmljRGlyZWN0aW9uEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEg0KCU5PX0NIQU5HRRACEgwKCElOQ1JFQVNFEAMSDAoIREVDUkVBU0UQBBIZChVOT19DSEFOR0VfT1JfSU5DUkVBU0UQBRIZChVOT19DSEFOR0VfT1JfREVDUkVBU0UQBkL4AQoiY29tLmdvb2dsZS5hZHMuZ29vZ2xlYWRzLnYxNi5lbnVtc0IeRXhwZXJpbWVudE1ldHJpY0RpcmVjdGlvblByb3RvUAFaQ2dvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYWRzL2dvb2dsZWFkcy92MTYvZW51bXM7ZW51bXOiAgNHQUGqAh5Hb29nbGUuQWRzLkdvb2dsZUFkcy5WMTYuRW51bXPKAh5Hb29nbGVcQWRzXEdvb2dsZUFkc1xWMTZcRW51bXPqAiJHb29nbGU6OkFkczo6R29vZ2xlQWRzOjpWMTY6OkVudW1zYgZwcm90bzM");

/**
 * Container for enum describing the type of experiment metric direction.
 *
 * @generated from message google.ads.googleads.v16.enums.ExperimentMetricDirectionEnum
 */
export type ExperimentMetricDirectionEnum = Message<"google.ads.googleads.v16.enums.ExperimentMetricDirectionEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v16.enums.ExperimentMetricDirectionEnum.
 * Use `create(ExperimentMetricDirectionEnumSchema)` to create a new message.
 */
export const ExperimentMetricDirectionEnumSchema: GenMessage<ExperimentMetricDirectionEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v16_enums_experiment_metric_direction, 0);

/**
 * The type of experiment metric direction.
 *
 * @generated from enum google.ads.googleads.v16.enums.ExperimentMetricDirectionEnum.ExperimentMetricDirection
 */
export enum ExperimentMetricDirectionEnum_ExperimentMetricDirection {
  /**
   * Not specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The value is unknown in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * The goal of the experiment is to not change the metric.
   *
   * @generated from enum value: NO_CHANGE = 2;
   */
  NO_CHANGE = 2,

  /**
   * The goal of the experiment is to increate the metric.
   *
   * @generated from enum value: INCREASE = 3;
   */
  INCREASE = 3,

  /**
   * The goal of the experiment is to decrease the metric.
   *
   * @generated from enum value: DECREASE = 4;
   */
  DECREASE = 4,

  /**
   * The goal of the experiment is to either not change or increase the
   * metric.
   *
   * @generated from enum value: NO_CHANGE_OR_INCREASE = 5;
   */
  NO_CHANGE_OR_INCREASE = 5,

  /**
   * The goal of the experiment is to either not change or decrease the
   * metric.
   *
   * @generated from enum value: NO_CHANGE_OR_DECREASE = 6;
   */
  NO_CHANGE_OR_DECREASE = 6,
}

/**
 * Describes the enum google.ads.googleads.v16.enums.ExperimentMetricDirectionEnum.ExperimentMetricDirection.
 */
export const ExperimentMetricDirectionEnum_ExperimentMetricDirectionSchema: GenEnum<ExperimentMetricDirectionEnum_ExperimentMetricDirection> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v16_enums_experiment_metric_direction, 0, 0);
