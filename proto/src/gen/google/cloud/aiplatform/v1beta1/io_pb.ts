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
// @generated from file google/cloud/aiplatform/v1beta1/io.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { ApiAuth_ApiKeyConfig } from "./api_auth_pb";
import { file_google_cloud_aiplatform_v1beta1_api_auth } from "./api_auth_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/io.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_io: GenFile = /*@__PURE__*/
  fileDesc("Cihnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL2lvLnByb3RvEh9nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExIlEKCkF2cm9Tb3VyY2USQwoKZ2NzX3NvdXJjZRgBIAEoCzIqLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuR2NzU291cmNlQgPgQQIiUAoJQ3N2U291cmNlEkMKCmdjc19zb3VyY2UYASABKAsyKi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkdjc1NvdXJjZUID4EECIh4KCUdjc1NvdXJjZRIRCgR1cmlzGAEgAygJQgPgQQIiMAoOR2NzRGVzdGluYXRpb24SHgoRb3V0cHV0X3VyaV9wcmVmaXgYASABKAlCA+BBAiIoCg5CaWdRdWVyeVNvdXJjZRIWCglpbnB1dF91cmkYASABKAlCA+BBAiIuChNCaWdRdWVyeURlc3RpbmF0aW9uEhcKCm91dHB1dF91cmkYASABKAlCA+BBAiJfCg5Dc3ZEZXN0aW5hdGlvbhJNCg9nY3NfZGVzdGluYXRpb24YASABKAsyLy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkdjc0Rlc3RpbmF0aW9uQgPgQQIiZAoTVEZSZWNvcmREZXN0aW5hdGlvbhJNCg9nY3NfZGVzdGluYXRpb24YASABKAsyLy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkdjc0Rlc3RpbmF0aW9uQgPgQQIiNwocQ29udGFpbmVyUmVnaXN0cnlEZXN0aW5hdGlvbhIXCgpvdXRwdXRfdXJpGAEgASgJQgPgQQIi3wIKEUdvb2dsZURyaXZlU291cmNlElgKDHJlc291cmNlX2lkcxgBIAMoCzI9Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuR29vZ2xlRHJpdmVTb3VyY2UuUmVzb3VyY2VJZEID4EECGu8BCgpSZXNvdXJjZUlkEmYKDXJlc291cmNlX3R5cGUYASABKA4ySi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkdvb2dsZURyaXZlU291cmNlLlJlc291cmNlSWQuUmVzb3VyY2VUeXBlQgPgQQISGAoLcmVzb3VyY2VfaWQYAiABKAlCA+BBAiJfCgxSZXNvdXJjZVR5cGUSHQoZUkVTT1VSQ0VfVFlQRV9VTlNQRUNJRklFRBAAEhYKElJFU09VUkNFX1RZUEVfRklMRRABEhgKFFJFU09VUkNFX1RZUEVfRk9MREVSEAIiFAoSRGlyZWN0VXBsb2FkU291cmNlIrgDCgtTbGFja1NvdXJjZRJRCghjaGFubmVscxgBIAMoCzI6Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuU2xhY2tTb3VyY2UuU2xhY2tDaGFubmVsc0ID4EECGtUCCg1TbGFja0NoYW5uZWxzEl4KCGNoYW5uZWxzGAEgAygLMkcuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5TbGFja1NvdXJjZS5TbGFja0NoYW5uZWxzLlNsYWNrQ2hhbm5lbEID4EECElIKDmFwaV9rZXlfY29uZmlnGAMgASgLMjUuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5BcGlBdXRoLkFwaUtleUNvbmZpZ0ID4EECGo8BCgxTbGFja0NoYW5uZWwSFwoKY2hhbm5lbF9pZBgBIAEoCUID4EECEjMKCnN0YXJ0X3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQESMQoIZW5kX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQEimwIKCkppcmFTb3VyY2USUgoMamlyYV9xdWVyaWVzGAEgAygLMjcuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5KaXJhU291cmNlLkppcmFRdWVyaWVzQgPgQQIauAEKC0ppcmFRdWVyaWVzEhAKCHByb2plY3RzGAMgAygJEhYKDmN1c3RvbV9xdWVyaWVzGAQgAygJEhIKBWVtYWlsGAUgASgJQgPgQQISFwoKc2VydmVyX3VyaRgGIAEoCUID4EECElIKDmFwaV9rZXlfY29uZmlnGAcgASgLMjUuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5BcGlBdXRoLkFwaUtleUNvbmZpZ0ID4EECIr8DChFTaGFyZVBvaW50U291cmNlcxJgChNzaGFyZV9wb2ludF9zb3VyY2VzGAEgAygLMkMuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5TaGFyZVBvaW50U291cmNlcy5TaGFyZVBvaW50U291cmNlGscCChBTaGFyZVBvaW50U291cmNlEiAKFnNoYXJlcG9pbnRfZm9sZGVyX3BhdGgYBSABKAlIABIeChRzaGFyZXBvaW50X2ZvbGRlcl9pZBgGIAEoCUgAEhQKCmRyaXZlX25hbWUYByABKAlIARISCghkcml2ZV9pZBgIIAEoCUgBEhEKCWNsaWVudF9pZBgBIAEoCRJMCg1jbGllbnRfc2VjcmV0GAIgASgLMjUuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5BcGlBdXRoLkFwaUtleUNvbmZpZxIRCgl0ZW5hbnRfaWQYAyABKAkSHAoUc2hhcmVwb2ludF9zaXRlX25hbWUYBCABKAkSFAoHZmlsZV9pZBgJIAEoCUID4EEDQg8KDWZvbGRlcl9zb3VyY2VCDgoMZHJpdmVfc291cmNlQt4BCiNjb20uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMUIHSW9Qcm90b1ABWkNjbG91ZC5nb29nbGUuY29tL2dvL2FpcGxhdGZvcm0vYXBpdjFiZXRhMS9haXBsYXRmb3JtcGI7YWlwbGF0Zm9ybXBiqgIfR29vZ2xlLkNsb3VkLkFJUGxhdGZvcm0uVjFCZXRhMcoCH0dvb2dsZVxDbG91ZFxBSVBsYXRmb3JtXFYxYmV0YTHqAiJHb29nbGU6OkNsb3VkOjpBSVBsYXRmb3JtOjpWMWJldGExYgZwcm90bzM", [file_google_api_field_behavior, file_google_cloud_aiplatform_v1beta1_api_auth, file_google_protobuf_timestamp]);

/**
 * The storage details for Avro input content.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.AvroSource
 */
export type AvroSource = Message<"google.cloud.aiplatform.v1beta1.AvroSource"> & {
  /**
   * Required. Google Cloud Storage location.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.GcsSource gcs_source = 1;
   */
  gcsSource?: GcsSource;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.AvroSource.
 * Use `create(AvroSourceSchema)` to create a new message.
 */
export const AvroSourceSchema: GenMessage<AvroSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 0);

/**
 * The storage details for CSV input content.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.CsvSource
 */
export type CsvSource = Message<"google.cloud.aiplatform.v1beta1.CsvSource"> & {
  /**
   * Required. Google Cloud Storage location.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.GcsSource gcs_source = 1;
   */
  gcsSource?: GcsSource;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.CsvSource.
 * Use `create(CsvSourceSchema)` to create a new message.
 */
export const CsvSourceSchema: GenMessage<CsvSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 1);

/**
 * The Google Cloud Storage location for the input content.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.GcsSource
 */
export type GcsSource = Message<"google.cloud.aiplatform.v1beta1.GcsSource"> & {
  /**
   * Required. Google Cloud Storage URI(-s) to the input file(s). May contain
   * wildcards. For more information on wildcards, see
   * https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames.
   *
   * @generated from field: repeated string uris = 1;
   */
  uris: string[];
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.GcsSource.
 * Use `create(GcsSourceSchema)` to create a new message.
 */
export const GcsSourceSchema: GenMessage<GcsSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 2);

/**
 * The Google Cloud Storage location where the output is to be written to.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.GcsDestination
 */
export type GcsDestination = Message<"google.cloud.aiplatform.v1beta1.GcsDestination"> & {
  /**
   * Required. Google Cloud Storage URI to output directory. If the uri doesn't
   * end with
   * '/', a '/' will be automatically appended. The directory is created if it
   * doesn't exist.
   *
   * @generated from field: string output_uri_prefix = 1;
   */
  outputUriPrefix: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.GcsDestination.
 * Use `create(GcsDestinationSchema)` to create a new message.
 */
export const GcsDestinationSchema: GenMessage<GcsDestination> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 3);

/**
 * The BigQuery location for the input content.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.BigQuerySource
 */
export type BigQuerySource = Message<"google.cloud.aiplatform.v1beta1.BigQuerySource"> & {
  /**
   * Required. BigQuery URI to a table, up to 2000 characters long.
   * Accepted forms:
   *
   * *  BigQuery path. For example: `bq://projectId.bqDatasetId.bqTableId`.
   *
   * @generated from field: string input_uri = 1;
   */
  inputUri: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.BigQuerySource.
 * Use `create(BigQuerySourceSchema)` to create a new message.
 */
export const BigQuerySourceSchema: GenMessage<BigQuerySource> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 4);

/**
 * The BigQuery location for the output content.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.BigQueryDestination
 */
export type BigQueryDestination = Message<"google.cloud.aiplatform.v1beta1.BigQueryDestination"> & {
  /**
   * Required. BigQuery URI to a project or table, up to 2000 characters long.
   *
   * When only the project is specified, the Dataset and Table is created.
   * When the full table reference is specified, the Dataset must exist and
   * table must not exist.
   *
   * Accepted forms:
   *
   * *  BigQuery path. For example:
   * `bq://projectId` or `bq://projectId.bqDatasetId` or
   * `bq://projectId.bqDatasetId.bqTableId`.
   *
   * @generated from field: string output_uri = 1;
   */
  outputUri: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.BigQueryDestination.
 * Use `create(BigQueryDestinationSchema)` to create a new message.
 */
export const BigQueryDestinationSchema: GenMessage<BigQueryDestination> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 5);

/**
 * The storage details for CSV output content.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.CsvDestination
 */
export type CsvDestination = Message<"google.cloud.aiplatform.v1beta1.CsvDestination"> & {
  /**
   * Required. Google Cloud Storage location.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.GcsDestination gcs_destination = 1;
   */
  gcsDestination?: GcsDestination;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.CsvDestination.
 * Use `create(CsvDestinationSchema)` to create a new message.
 */
export const CsvDestinationSchema: GenMessage<CsvDestination> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 6);

/**
 * The storage details for TFRecord output content.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.TFRecordDestination
 */
export type TFRecordDestination = Message<"google.cloud.aiplatform.v1beta1.TFRecordDestination"> & {
  /**
   * Required. Google Cloud Storage location.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.GcsDestination gcs_destination = 1;
   */
  gcsDestination?: GcsDestination;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.TFRecordDestination.
 * Use `create(TFRecordDestinationSchema)` to create a new message.
 */
export const TFRecordDestinationSchema: GenMessage<TFRecordDestination> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 7);

/**
 * The Container Registry location for the container image.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ContainerRegistryDestination
 */
export type ContainerRegistryDestination = Message<"google.cloud.aiplatform.v1beta1.ContainerRegistryDestination"> & {
  /**
   * Required. Container Registry URI of a container image.
   * Only Google Container Registry and Artifact Registry are supported now.
   * Accepted forms:
   *
   * *  Google Container Registry path. For example:
   *    `gcr.io/projectId/imageName:tag`.
   *
   * *  Artifact Registry path. For example:
   *    `us-central1-docker.pkg.dev/projectId/repoName/imageName:tag`.
   *
   * If a tag is not specified, "latest" will be used as the default tag.
   *
   * @generated from field: string output_uri = 1;
   */
  outputUri: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ContainerRegistryDestination.
 * Use `create(ContainerRegistryDestinationSchema)` to create a new message.
 */
export const ContainerRegistryDestinationSchema: GenMessage<ContainerRegistryDestination> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 8);

/**
 * The Google Drive location for the input content.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.GoogleDriveSource
 */
export type GoogleDriveSource = Message<"google.cloud.aiplatform.v1beta1.GoogleDriveSource"> & {
  /**
   * Required. Google Drive resource IDs.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.GoogleDriveSource.ResourceId resource_ids = 1;
   */
  resourceIds: GoogleDriveSource_ResourceId[];
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.GoogleDriveSource.
 * Use `create(GoogleDriveSourceSchema)` to create a new message.
 */
export const GoogleDriveSourceSchema: GenMessage<GoogleDriveSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 9);

/**
 * The type and ID of the Google Drive resource.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.GoogleDriveSource.ResourceId
 */
export type GoogleDriveSource_ResourceId = Message<"google.cloud.aiplatform.v1beta1.GoogleDriveSource.ResourceId"> & {
  /**
   * Required. The type of the Google Drive resource.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.GoogleDriveSource.ResourceId.ResourceType resource_type = 1;
   */
  resourceType: GoogleDriveSource_ResourceId_ResourceType;

  /**
   * Required. The ID of the Google Drive resource.
   *
   * @generated from field: string resource_id = 2;
   */
  resourceId: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.GoogleDriveSource.ResourceId.
 * Use `create(GoogleDriveSource_ResourceIdSchema)` to create a new message.
 */
export const GoogleDriveSource_ResourceIdSchema: GenMessage<GoogleDriveSource_ResourceId> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 9, 0);

/**
 * The type of the Google Drive resource.
 *
 * @generated from enum google.cloud.aiplatform.v1beta1.GoogleDriveSource.ResourceId.ResourceType
 */
export enum GoogleDriveSource_ResourceId_ResourceType {
  /**
   * Unspecified resource type.
   *
   * @generated from enum value: RESOURCE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * File resource type.
   *
   * @generated from enum value: RESOURCE_TYPE_FILE = 1;
   */
  FILE = 1,

  /**
   * Folder resource type.
   *
   * @generated from enum value: RESOURCE_TYPE_FOLDER = 2;
   */
  FOLDER = 2,
}

/**
 * Describes the enum google.cloud.aiplatform.v1beta1.GoogleDriveSource.ResourceId.ResourceType.
 */
export const GoogleDriveSource_ResourceId_ResourceTypeSchema: GenEnum<GoogleDriveSource_ResourceId_ResourceType> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1beta1_io, 9, 0, 0);

/**
 * The input content is encapsulated and uploaded in the request.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.DirectUploadSource
 */
export type DirectUploadSource = Message<"google.cloud.aiplatform.v1beta1.DirectUploadSource"> & {
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.DirectUploadSource.
 * Use `create(DirectUploadSourceSchema)` to create a new message.
 */
export const DirectUploadSourceSchema: GenMessage<DirectUploadSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 10);

/**
 * The Slack source for the ImportRagFilesRequest.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.SlackSource
 */
export type SlackSource = Message<"google.cloud.aiplatform.v1beta1.SlackSource"> & {
  /**
   * Required. The Slack channels.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.SlackSource.SlackChannels channels = 1;
   */
  channels: SlackSource_SlackChannels[];
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.SlackSource.
 * Use `create(SlackSourceSchema)` to create a new message.
 */
export const SlackSourceSchema: GenMessage<SlackSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 11);

/**
 * SlackChannels contains the Slack channels and corresponding access token.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.SlackSource.SlackChannels
 */
export type SlackSource_SlackChannels = Message<"google.cloud.aiplatform.v1beta1.SlackSource.SlackChannels"> & {
  /**
   * Required. The Slack channel IDs.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.SlackSource.SlackChannels.SlackChannel channels = 1;
   */
  channels: SlackSource_SlackChannels_SlackChannel[];

  /**
   * Required. The SecretManager secret version resource name (e.g.
   * projects/{project}/secrets/{secret}/versions/{version}) storing the
   * Slack channel access token that has access to the slack channel IDs.
   * See: https://api.slack.com/tutorials/tracks/getting-a-token.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ApiAuth.ApiKeyConfig api_key_config = 3;
   */
  apiKeyConfig?: ApiAuth_ApiKeyConfig;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.SlackSource.SlackChannels.
 * Use `create(SlackSource_SlackChannelsSchema)` to create a new message.
 */
export const SlackSource_SlackChannelsSchema: GenMessage<SlackSource_SlackChannels> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 11, 0);

/**
 * SlackChannel contains the Slack channel ID and the time range to import.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.SlackSource.SlackChannels.SlackChannel
 */
export type SlackSource_SlackChannels_SlackChannel = Message<"google.cloud.aiplatform.v1beta1.SlackSource.SlackChannels.SlackChannel"> & {
  /**
   * Required. The Slack channel ID.
   *
   * @generated from field: string channel_id = 1;
   */
  channelId: string;

  /**
   * Optional. The starting timestamp for messages to import.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 2;
   */
  startTime?: Timestamp;

  /**
   * Optional. The ending timestamp for messages to import.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 3;
   */
  endTime?: Timestamp;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.SlackSource.SlackChannels.SlackChannel.
 * Use `create(SlackSource_SlackChannels_SlackChannelSchema)` to create a new message.
 */
export const SlackSource_SlackChannels_SlackChannelSchema: GenMessage<SlackSource_SlackChannels_SlackChannel> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 11, 0, 0);

/**
 * The Jira source for the ImportRagFilesRequest.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.JiraSource
 */
export type JiraSource = Message<"google.cloud.aiplatform.v1beta1.JiraSource"> & {
  /**
   * Required. The Jira queries.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.JiraSource.JiraQueries jira_queries = 1;
   */
  jiraQueries: JiraSource_JiraQueries[];
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.JiraSource.
 * Use `create(JiraSourceSchema)` to create a new message.
 */
export const JiraSourceSchema: GenMessage<JiraSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 12);

/**
 * JiraQueries contains the Jira queries and corresponding authentication.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.JiraSource.JiraQueries
 */
export type JiraSource_JiraQueries = Message<"google.cloud.aiplatform.v1beta1.JiraSource.JiraQueries"> & {
  /**
   * A list of Jira projects to import in their entirety.
   *
   * @generated from field: repeated string projects = 3;
   */
  projects: string[];

  /**
   * A list of custom Jira queries to import. For information about JQL (Jira
   * Query Language), see
   * https://support.atlassian.com/jira-service-management-cloud/docs/use-advanced-search-with-jira-query-language-jql/
   *
   * @generated from field: repeated string custom_queries = 4;
   */
  customQueries: string[];

  /**
   * Required. The Jira email address.
   *
   * @generated from field: string email = 5;
   */
  email: string;

  /**
   * Required. The Jira server URI.
   *
   * @generated from field: string server_uri = 6;
   */
  serverUri: string;

  /**
   * Required. The SecretManager secret version resource name (e.g.
   * projects/{project}/secrets/{secret}/versions/{version}) storing the
   * Jira API key
   * (https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ApiAuth.ApiKeyConfig api_key_config = 7;
   */
  apiKeyConfig?: ApiAuth_ApiKeyConfig;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.JiraSource.JiraQueries.
 * Use `create(JiraSource_JiraQueriesSchema)` to create a new message.
 */
export const JiraSource_JiraQueriesSchema: GenMessage<JiraSource_JiraQueries> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 12, 0);

/**
 * The SharePointSources to pass to ImportRagFiles.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.SharePointSources
 */
export type SharePointSources = Message<"google.cloud.aiplatform.v1beta1.SharePointSources"> & {
  /**
   * The SharePoint sources.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.SharePointSources.SharePointSource share_point_sources = 1;
   */
  sharePointSources: SharePointSources_SharePointSource[];
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.SharePointSources.
 * Use `create(SharePointSourcesSchema)` to create a new message.
 */
export const SharePointSourcesSchema: GenMessage<SharePointSources> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 13);

/**
 * An individual SharePointSource.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.SharePointSources.SharePointSource
 */
export type SharePointSources_SharePointSource = Message<"google.cloud.aiplatform.v1beta1.SharePointSources.SharePointSource"> & {
  /**
   * The SharePoint folder source. If not provided, uses "root".
   *
   * @generated from oneof google.cloud.aiplatform.v1beta1.SharePointSources.SharePointSource.folder_source
   */
  folderSource: {
    /**
     * The path of the SharePoint folder to download from.
     *
     * @generated from field: string sharepoint_folder_path = 5;
     */
    value: string;
    case: "sharepointFolderPath";
  } | {
    /**
     * The ID of the SharePoint folder to download from.
     *
     * @generated from field: string sharepoint_folder_id = 6;
     */
    value: string;
    case: "sharepointFolderId";
  } | { case: undefined; value?: undefined };

  /**
   * The SharePoint drive source.
   *
   * @generated from oneof google.cloud.aiplatform.v1beta1.SharePointSources.SharePointSource.drive_source
   */
  driveSource: {
    /**
     * The name of the drive to download from.
     *
     * @generated from field: string drive_name = 7;
     */
    value: string;
    case: "driveName";
  } | {
    /**
     * The ID of the drive to download from.
     *
     * @generated from field: string drive_id = 8;
     */
    value: string;
    case: "driveId";
  } | { case: undefined; value?: undefined };

  /**
   * The Application ID for the app registered in Microsoft Azure Portal.
   * The application must also be configured with MS Graph permissions
   * "Files.ReadAll", "Sites.ReadAll" and BrowserSiteLists.Read.All.
   *
   * @generated from field: string client_id = 1;
   */
  clientId: string;

  /**
   * The application secret for the app registered in Azure.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.ApiAuth.ApiKeyConfig client_secret = 2;
   */
  clientSecret?: ApiAuth_ApiKeyConfig;

  /**
   * Unique identifier of the Azure Active Directory Instance.
   *
   * @generated from field: string tenant_id = 3;
   */
  tenantId: string;

  /**
   * The name of the SharePoint site to download from. This can be the site
   * name or the site id.
   *
   * @generated from field: string sharepoint_site_name = 4;
   */
  sharepointSiteName: string;

  /**
   * Output only. The SharePoint file id. Output only.
   *
   * @generated from field: string file_id = 9;
   */
  fileId: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.SharePointSources.SharePointSource.
 * Use `create(SharePointSources_SharePointSourceSchema)` to create a new message.
 */
export const SharePointSources_SharePointSourceSchema: GenMessage<SharePointSources_SharePointSource> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_io, 13, 0);
