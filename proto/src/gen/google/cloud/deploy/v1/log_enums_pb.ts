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
// @generated from file google/cloud/deploy/v1/log_enums.proto (package google.cloud.deploy.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file google/cloud/deploy/v1/log_enums.proto.
 */
export const file_google_cloud_deploy_v1_log_enums: GenFile = /*@__PURE__*/
  fileDesc("CiZnb29nbGUvY2xvdWQvZGVwbG95L3YxL2xvZ19lbnVtcy5wcm90bxIWZ29vZ2xlLmNsb3VkLmRlcGxveS52MSqWAgoEVHlwZRIUChBUWVBFX1VOU1BFQ0lGSUVEEAASJAogVFlQRV9QVUJTVUJfTk9USUZJQ0FUSU9OX0ZBSUxVUkUQARIeChpUWVBFX1JFU09VUkNFX1NUQVRFX0NIQU5HRRADEhgKFFRZUEVfUFJPQ0VTU19BQk9SVEVEEAQSHQoZVFlQRV9SRVNUUklDVElPTl9WSU9MQVRFRBAFEhkKFVRZUEVfUkVTT1VSQ0VfREVMRVRFRBAGEhcKE1RZUEVfUk9MTE9VVF9VUERBVEUQBxIhCh1UWVBFX0RFUExPWV9QT0xJQ1lfRVZBTFVBVElPThAIEiIKGlRZUEVfUkVOREVSX1NUQVRVRVNfQ0hBTkdFEAIaAggBQmEKGmNvbS5nb29nbGUuY2xvdWQuZGVwbG95LnYxQg1Mb2dFbnVtc1Byb3RvUAFaMmNsb3VkLmdvb2dsZS5jb20vZ28vZGVwbG95L2FwaXYxL2RlcGxveXBiO2RlcGxveXBiYgZwcm90bzM");

/**
 * Type indicates the type of the log entry and can be used as a filter.
 *
 * @generated from enum google.cloud.deploy.v1.Type
 */
export enum Type {
  /**
   * Type is unspecified.
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * A Pub/Sub notification failed to be sent.
   *
   * @generated from enum value: TYPE_PUBSUB_NOTIFICATION_FAILURE = 1;
   */
  PUBSUB_NOTIFICATION_FAILURE = 1,

  /**
   * Resource state changed.
   *
   * @generated from enum value: TYPE_RESOURCE_STATE_CHANGE = 3;
   */
  RESOURCE_STATE_CHANGE = 3,

  /**
   * A process aborted.
   *
   * @generated from enum value: TYPE_PROCESS_ABORTED = 4;
   */
  PROCESS_ABORTED = 4,

  /**
   * Restriction check failed.
   *
   * @generated from enum value: TYPE_RESTRICTION_VIOLATED = 5;
   */
  RESTRICTION_VIOLATED = 5,

  /**
   * Resource deleted.
   *
   * @generated from enum value: TYPE_RESOURCE_DELETED = 6;
   */
  RESOURCE_DELETED = 6,

  /**
   * Rollout updated.
   *
   * @generated from enum value: TYPE_ROLLOUT_UPDATE = 7;
   */
  ROLLOUT_UPDATE = 7,

  /**
   * Deploy Policy evaluation.
   *
   * @generated from enum value: TYPE_DEPLOY_POLICY_EVALUATION = 8;
   */
  DEPLOY_POLICY_EVALUATION = 8,

  /**
   * Deprecated: This field is never used. Use release_render log type instead.
   *
   * @generated from enum value: TYPE_RENDER_STATUES_CHANGE = 2 [deprecated = true];
   * @deprecated
   */
  RENDER_STATUES_CHANGE = 2,
}

/**
 * Describes the enum google.cloud.deploy.v1.Type.
 */
export const TypeSchema: GenEnum<Type> = /*@__PURE__*/
  enumDesc(file_google_cloud_deploy_v1_log_enums, 0);
