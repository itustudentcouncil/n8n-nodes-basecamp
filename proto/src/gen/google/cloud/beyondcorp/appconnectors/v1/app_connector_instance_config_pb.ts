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
// @generated from file google/cloud/beyondcorp/appconnectors/v1/app_connector_instance_config.proto (package google.cloud.beyondcorp.appconnectors.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/beyondcorp/appconnectors/v1/app_connector_instance_config.proto.
 */
export const file_google_cloud_beyondcorp_appconnectors_v1_app_connector_instance_config: GenFile = /*@__PURE__*/
  fileDesc("Ckxnb29nbGUvY2xvdWQvYmV5b25kY29ycC9hcHBjb25uZWN0b3JzL3YxL2FwcF9jb25uZWN0b3JfaW5zdGFuY2VfY29uZmlnLnByb3RvEihnb29nbGUuY2xvdWQuYmV5b25kY29ycC5hcHBjb25uZWN0b3JzLnYxIpECChpBcHBDb25uZWN0b3JJbnN0YW5jZUNvbmZpZxIcCg9zZXF1ZW5jZV9udW1iZXIYASABKANCA+BBAhItCg9pbnN0YW5jZV9jb25maWcYAiABKAsyFC5nb29nbGUucHJvdG9idWYuQW55ElkKE25vdGlmaWNhdGlvbl9jb25maWcYAyABKAsyPC5nb29nbGUuY2xvdWQuYmV5b25kY29ycC5hcHBjb25uZWN0b3JzLnYxLk5vdGlmaWNhdGlvbkNvbmZpZxJLCgxpbWFnZV9jb25maWcYBCABKAsyNS5nb29nbGUuY2xvdWQuYmV5b25kY29ycC5hcHBjb25uZWN0b3JzLnYxLkltYWdlQ29uZmlnItcBChJOb3RpZmljYXRpb25Db25maWcSeQoTcHVic3ViX25vdGlmaWNhdGlvbhgBIAEoCzJaLmdvb2dsZS5jbG91ZC5iZXlvbmRjb3JwLmFwcGNvbm5lY3RvcnMudjEuTm90aWZpY2F0aW9uQ29uZmlnLkNsb3VkUHViU3ViTm90aWZpY2F0aW9uQ29uZmlnSAAaPAodQ2xvdWRQdWJTdWJOb3RpZmljYXRpb25Db25maWcSGwoTcHVic3ViX3N1YnNjcmlwdGlvbhgBIAEoCUIICgZjb25maWciOQoLSW1hZ2VDb25maWcSFAoMdGFyZ2V0X2ltYWdlGAEgASgJEhQKDHN0YWJsZV9pbWFnZRgCIAEoCUKqAgosY29tLmdvb2dsZS5jbG91ZC5iZXlvbmRjb3JwLmFwcGNvbm5lY3RvcnMudjFCH0FwcENvbm5lY3Rvckluc3RhbmNlQ29uZmlnUHJvdG9QAVpSY2xvdWQuZ29vZ2xlLmNvbS9nby9iZXlvbmRjb3JwL2FwcGNvbm5lY3RvcnMvYXBpdjEvYXBwY29ubmVjdG9yc3BiO2FwcGNvbm5lY3RvcnNwYqoCKEdvb2dsZS5DbG91ZC5CZXlvbmRDb3JwLkFwcENvbm5lY3RvcnMuVjHKAihHb29nbGVcQ2xvdWRcQmV5b25kQ29ycFxBcHBDb25uZWN0b3JzXFYx6gIsR29vZ2xlOjpDbG91ZDo6QmV5b25kQ29ycDo6QXBwQ29ubmVjdG9yczo6VjFiBnByb3RvMw", [file_google_api_field_behavior, file_google_protobuf_any]);

/**
 * AppConnectorInstanceConfig defines the instance config of a AppConnector.
 *
 * @generated from message google.cloud.beyondcorp.appconnectors.v1.AppConnectorInstanceConfig
 */
export type AppConnectorInstanceConfig = Message<"google.cloud.beyondcorp.appconnectors.v1.AppConnectorInstanceConfig"> & {
  /**
   * Required. A monotonically increasing number generated and maintained
   * by the API provider. Every time a config changes in the backend, the
   * sequenceNumber should be bumped up to reflect the change.
   *
   * @generated from field: int64 sequence_number = 1;
   */
  sequenceNumber: bigint;

  /**
   * The SLM instance agent configuration.
   *
   * @generated from field: google.protobuf.Any instance_config = 2;
   */
  instanceConfig?: Any;

  /**
   * NotificationConfig defines the notification mechanism that the remote
   * instance should subscribe to in order to receive notification.
   *
   * @generated from field: google.cloud.beyondcorp.appconnectors.v1.NotificationConfig notification_config = 3;
   */
  notificationConfig?: NotificationConfig;

  /**
   * ImageConfig defines the GCR images to run for the remote agent's control
   * plane.
   *
   * @generated from field: google.cloud.beyondcorp.appconnectors.v1.ImageConfig image_config = 4;
   */
  imageConfig?: ImageConfig;
};

/**
 * Describes the message google.cloud.beyondcorp.appconnectors.v1.AppConnectorInstanceConfig.
 * Use `create(AppConnectorInstanceConfigSchema)` to create a new message.
 */
export const AppConnectorInstanceConfigSchema: GenMessage<AppConnectorInstanceConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_beyondcorp_appconnectors_v1_app_connector_instance_config, 0);

/**
 * NotificationConfig defines the mechanisms to notify instance agent.
 *
 * @generated from message google.cloud.beyondcorp.appconnectors.v1.NotificationConfig
 */
export type NotificationConfig = Message<"google.cloud.beyondcorp.appconnectors.v1.NotificationConfig"> & {
  /**
   * @generated from oneof google.cloud.beyondcorp.appconnectors.v1.NotificationConfig.config
   */
  config: {
    /**
     * Cloud Pub/Sub Configuration to receive notifications.
     *
     * @generated from field: google.cloud.beyondcorp.appconnectors.v1.NotificationConfig.CloudPubSubNotificationConfig pubsub_notification = 1;
     */
    value: NotificationConfig_CloudPubSubNotificationConfig;
    case: "pubsubNotification";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.beyondcorp.appconnectors.v1.NotificationConfig.
 * Use `create(NotificationConfigSchema)` to create a new message.
 */
export const NotificationConfigSchema: GenMessage<NotificationConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_beyondcorp_appconnectors_v1_app_connector_instance_config, 1);

/**
 * The configuration for Pub/Sub messaging for the AppConnector.
 *
 * @generated from message google.cloud.beyondcorp.appconnectors.v1.NotificationConfig.CloudPubSubNotificationConfig
 */
export type NotificationConfig_CloudPubSubNotificationConfig = Message<"google.cloud.beyondcorp.appconnectors.v1.NotificationConfig.CloudPubSubNotificationConfig"> & {
  /**
   * The Pub/Sub subscription the AppConnector uses to receive notifications.
   *
   * @generated from field: string pubsub_subscription = 1;
   */
  pubsubSubscription: string;
};

/**
 * Describes the message google.cloud.beyondcorp.appconnectors.v1.NotificationConfig.CloudPubSubNotificationConfig.
 * Use `create(NotificationConfig_CloudPubSubNotificationConfigSchema)` to create a new message.
 */
export const NotificationConfig_CloudPubSubNotificationConfigSchema: GenMessage<NotificationConfig_CloudPubSubNotificationConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_beyondcorp_appconnectors_v1_app_connector_instance_config, 1, 0);

/**
 * ImageConfig defines the control plane images to run.
 *
 * @generated from message google.cloud.beyondcorp.appconnectors.v1.ImageConfig
 */
export type ImageConfig = Message<"google.cloud.beyondcorp.appconnectors.v1.ImageConfig"> & {
  /**
   * The initial image the remote agent will attempt to run for the control
   * plane.
   *
   * @generated from field: string target_image = 1;
   */
  targetImage: string;

  /**
   * The stable image that the remote agent will fallback to if the target image
   * fails.
   *
   * @generated from field: string stable_image = 2;
   */
  stableImage: string;
};

/**
 * Describes the message google.cloud.beyondcorp.appconnectors.v1.ImageConfig.
 * Use `create(ImageConfigSchema)` to create a new message.
 */
export const ImageConfigSchema: GenMessage<ImageConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_beyondcorp_appconnectors_v1_app_connector_instance_config, 2);
