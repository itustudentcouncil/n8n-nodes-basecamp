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
// @generated from file google/cloud/aiplatform/v1/featurestore_online_service.proto (package google.cloud.aiplatform.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { FeatureSelector } from "./feature_selector_pb";
import { file_google_cloud_aiplatform_v1_feature_selector } from "./feature_selector_pb";
import type { BoolArray, DoubleArray, Int64Array, StringArray } from "./types_pb";
import { file_google_cloud_aiplatform_v1_types } from "./types_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1/featurestore_online_service.proto.
 */
export const file_google_cloud_aiplatform_v1_featurestore_online_service: GenFile = /*@__PURE__*/
  fileDesc("Cjxnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MS9mZWF0dXJlc3RvcmVfb25saW5lX3NlcnZpY2UucHJvdG8SGmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxIqwBChlXcml0ZUZlYXR1cmVWYWx1ZXNSZXF1ZXN0EkEKC2VudGl0eV90eXBlGAEgASgJQizgQQL6QSYKJGFpcGxhdGZvcm0uZ29vZ2xlYXBpcy5jb20vRW50aXR5VHlwZRJMCghwYXlsb2FkcxgCIAMoCzI1Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLldyaXRlRmVhdHVyZVZhbHVlc1BheWxvYWRCA+BBAiL6AQoZV3JpdGVGZWF0dXJlVmFsdWVzUGF5bG9hZBIWCgllbnRpdHlfaWQYASABKAlCA+BBAhJlCg5mZWF0dXJlX3ZhbHVlcxgCIAMoCzJILmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLldyaXRlRmVhdHVyZVZhbHVlc1BheWxvYWQuRmVhdHVyZVZhbHVlc0VudHJ5QgPgQQIaXgoSRmVhdHVyZVZhbHVlc0VudHJ5EgsKA2tleRgBIAEoCRI3CgV2YWx1ZRgCIAEoCzIoLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLkZlYXR1cmVWYWx1ZToCOAEiHAoaV3JpdGVGZWF0dXJlVmFsdWVzUmVzcG9uc2UiwQEKGFJlYWRGZWF0dXJlVmFsdWVzUmVxdWVzdBJBCgtlbnRpdHlfdHlwZRgBIAEoCUIs4EEC+kEmCiRhaXBsYXRmb3JtLmdvb2dsZWFwaXMuY29tL0VudGl0eVR5cGUSFgoJZW50aXR5X2lkGAIgASgJQgPgQQISSgoQZmVhdHVyZV9zZWxlY3RvchgDIAEoCzIrLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLkZlYXR1cmVTZWxlY3RvckID4EECIpUFChlSZWFkRmVhdHVyZVZhbHVlc1Jlc3BvbnNlEkwKBmhlYWRlchgBIAEoCzI8Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlJlYWRGZWF0dXJlVmFsdWVzUmVzcG9uc2UuSGVhZGVyElUKC2VudGl0eV92aWV3GAIgASgLMkAuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuUmVhZEZlYXR1cmVWYWx1ZXNSZXNwb25zZS5FbnRpdHlWaWV3Gh8KEUZlYXR1cmVEZXNjcmlwdG9yEgoKAmlkGAEgASgJGq4BCgZIZWFkZXISPgoLZW50aXR5X3R5cGUYASABKAlCKfpBJgokYWlwbGF0Zm9ybS5nb29nbGVhcGlzLmNvbS9FbnRpdHlUeXBlEmQKE2ZlYXR1cmVfZGVzY3JpcHRvcnMYAiADKAsyRy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5SZWFkRmVhdHVyZVZhbHVlc1Jlc3BvbnNlLkZlYXR1cmVEZXNjcmlwdG9yGoACCgpFbnRpdHlWaWV3EhEKCWVudGl0eV9pZBgBIAEoCRJTCgRkYXRhGAIgAygLMkUuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuUmVhZEZlYXR1cmVWYWx1ZXNSZXNwb25zZS5FbnRpdHlWaWV3LkRhdGEaiQEKBERhdGESOQoFdmFsdWUYASABKAsyKC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5GZWF0dXJlVmFsdWVIABI+CgZ2YWx1ZXMYAiABKAsyLC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5GZWF0dXJlVmFsdWVMaXN0SABCBgoEZGF0YSLLAQohU3RyZWFtaW5nUmVhZEZlYXR1cmVWYWx1ZXNSZXF1ZXN0EkEKC2VudGl0eV90eXBlGAEgASgJQizgQQL6QSYKJGFpcGxhdGZvcm0uZ29vZ2xlYXBpcy5jb20vRW50aXR5VHlwZRIXCgplbnRpdHlfaWRzGAIgAygJQgPgQQISSgoQZmVhdHVyZV9zZWxlY3RvchgDIAEoCzIrLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLkZlYXR1cmVTZWxlY3RvckID4EECIuYECgxGZWF0dXJlVmFsdWUSFAoKYm9vbF92YWx1ZRgBIAEoCEgAEhYKDGRvdWJsZV92YWx1ZRgCIAEoAUgAEhUKC2ludDY0X3ZhbHVlGAUgASgDSAASFgoMc3RyaW5nX3ZhbHVlGAYgASgJSAASQQoQYm9vbF9hcnJheV92YWx1ZRgHIAEoCzIlLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLkJvb2xBcnJheUgAEkUKEmRvdWJsZV9hcnJheV92YWx1ZRgIIAEoCzInLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLkRvdWJsZUFycmF5SAASQwoRaW50NjRfYXJyYXlfdmFsdWUYCyABKAsyJi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5JbnQ2NEFycmF5SAASRQoSc3RyaW5nX2FycmF5X3ZhbHVlGAwgASgLMicuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuU3RyaW5nQXJyYXlIABIVCgtieXRlc192YWx1ZRgNIAEoDEgAEj8KDHN0cnVjdF92YWx1ZRgPIAEoCzInLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlN0cnVjdFZhbHVlSAASQwoIbWV0YWRhdGEYDiABKAsyMS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5GZWF0dXJlVmFsdWUuTWV0YWRhdGEaPQoITWV0YWRhdGESMQoNZ2VuZXJhdGVfdGltZRgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCBwoFdmFsdWUiSwoLU3RydWN0VmFsdWUSPAoGdmFsdWVzGAEgAygLMiwuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjEuU3RydWN0RmllbGRWYWx1ZSJZChBTdHJ1Y3RGaWVsZFZhbHVlEgwKBG5hbWUYASABKAkSNwoFdmFsdWUYAiABKAsyKC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5GZWF0dXJlVmFsdWUiTAoQRmVhdHVyZVZhbHVlTGlzdBI4CgZ2YWx1ZXMYASADKAsyKC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5GZWF0dXJlVmFsdWUy/QYKIEZlYXR1cmVzdG9yZU9ubGluZVNlcnZpbmdTZXJ2aWNlEvMBChFSZWFkRmVhdHVyZVZhbHVlcxI0Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlJlYWRGZWF0dXJlVmFsdWVzUmVxdWVzdBo1Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlJlYWRGZWF0dXJlVmFsdWVzUmVzcG9uc2UicdpBC2VudGl0eV90eXBlgtPkkwJdOgEqIlgvdjEve2VudGl0eV90eXBlPXByb2plY3RzLyovbG9jYXRpb25zLyovZmVhdHVyZXN0b3Jlcy8qL2VudGl0eVR5cGVzLyp9OnJlYWRGZWF0dXJlVmFsdWVzEpACChpTdHJlYW1pbmdSZWFkRmVhdHVyZVZhbHVlcxI9Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlN0cmVhbWluZ1JlYWRGZWF0dXJlVmFsdWVzUmVxdWVzdBo1Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLlJlYWRGZWF0dXJlVmFsdWVzUmVzcG9uc2UietpBC2VudGl0eV90eXBlgtPkkwJmOgEqImEvdjEve2VudGl0eV90eXBlPXByb2plY3RzLyovbG9jYXRpb25zLyovZmVhdHVyZXN0b3Jlcy8qL2VudGl0eVR5cGVzLyp9OnN0cmVhbWluZ1JlYWRGZWF0dXJlVmFsdWVzMAESgAIKEldyaXRlRmVhdHVyZVZhbHVlcxI1Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxLldyaXRlRmVhdHVyZVZhbHVlc1JlcXVlc3QaNi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MS5Xcml0ZUZlYXR1cmVWYWx1ZXNSZXNwb25zZSJ72kEUZW50aXR5X3R5cGUscGF5bG9hZHOC0+STAl46ASoiWS92MS97ZW50aXR5X3R5cGU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9mZWF0dXJlc3RvcmVzLyovZW50aXR5VHlwZXMvKn06d3JpdGVGZWF0dXJlVmFsdWVzGk3KQRlhaXBsYXRmb3JtLmdvb2dsZWFwaXMuY29t0kEuaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybULcAQoeY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxQh5GZWF0dXJlc3RvcmVPbmxpbmVTZXJ2aWNlUHJvdG9QAVo+Y2xvdWQuZ29vZ2xlLmNvbS9nby9haXBsYXRmb3JtL2FwaXYxL2FpcGxhdGZvcm1wYjthaXBsYXRmb3JtcGKqAhpHb29nbGUuQ2xvdWQuQUlQbGF0Zm9ybS5WMcoCGkdvb2dsZVxDbG91ZFxBSVBsYXRmb3JtXFYx6gIdR29vZ2xlOjpDbG91ZDo6QUlQbGF0Zm9ybTo6VjFiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_aiplatform_v1_feature_selector, file_google_cloud_aiplatform_v1_types, file_google_protobuf_timestamp]);

/**
 * Request message for
 * [FeaturestoreOnlineServingService.WriteFeatureValues][google.cloud.aiplatform.v1.FeaturestoreOnlineServingService.WriteFeatureValues].
 *
 * @generated from message google.cloud.aiplatform.v1.WriteFeatureValuesRequest
 */
export type WriteFeatureValuesRequest = Message<"google.cloud.aiplatform.v1.WriteFeatureValuesRequest"> & {
  /**
   * Required. The resource name of the EntityType for the entities being
   * written. Value format:
   * `projects/{project}/locations/{location}/featurestores/
   * {featurestore}/entityTypes/{entityType}`. For example,
   * for a machine learning model predicting user clicks on a website, an
   * EntityType ID could be `user`.
   *
   * @generated from field: string entity_type = 1;
   */
  entityType: string;

  /**
   * Required. The entities to be written. Up to 100,000 feature values can be
   * written across all `payloads`.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1.WriteFeatureValuesPayload payloads = 2;
   */
  payloads: WriteFeatureValuesPayload[];
};

/**
 * Describes the message google.cloud.aiplatform.v1.WriteFeatureValuesRequest.
 * Use `create(WriteFeatureValuesRequestSchema)` to create a new message.
 */
export const WriteFeatureValuesRequestSchema: GenMessage<WriteFeatureValuesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 0);

/**
 * Contains Feature values to be written for a specific entity.
 *
 * @generated from message google.cloud.aiplatform.v1.WriteFeatureValuesPayload
 */
export type WriteFeatureValuesPayload = Message<"google.cloud.aiplatform.v1.WriteFeatureValuesPayload"> & {
  /**
   * Required. The ID of the entity.
   *
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * Required. Feature values to be written, mapping from Feature ID to value.
   * Up to 100,000 `feature_values` entries may be written across all payloads.
   * The feature generation time, aligned by days, must be no older than five
   * years (1825 days) and no later than one year (366 days) in the future.
   *
   * @generated from field: map<string, google.cloud.aiplatform.v1.FeatureValue> feature_values = 2;
   */
  featureValues: { [key: string]: FeatureValue };
};

/**
 * Describes the message google.cloud.aiplatform.v1.WriteFeatureValuesPayload.
 * Use `create(WriteFeatureValuesPayloadSchema)` to create a new message.
 */
export const WriteFeatureValuesPayloadSchema: GenMessage<WriteFeatureValuesPayload> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 1);

/**
 * Response message for
 * [FeaturestoreOnlineServingService.WriteFeatureValues][google.cloud.aiplatform.v1.FeaturestoreOnlineServingService.WriteFeatureValues].
 *
 * @generated from message google.cloud.aiplatform.v1.WriteFeatureValuesResponse
 */
export type WriteFeatureValuesResponse = Message<"google.cloud.aiplatform.v1.WriteFeatureValuesResponse"> & {
};

/**
 * Describes the message google.cloud.aiplatform.v1.WriteFeatureValuesResponse.
 * Use `create(WriteFeatureValuesResponseSchema)` to create a new message.
 */
export const WriteFeatureValuesResponseSchema: GenMessage<WriteFeatureValuesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 2);

/**
 * Request message for
 * [FeaturestoreOnlineServingService.ReadFeatureValues][google.cloud.aiplatform.v1.FeaturestoreOnlineServingService.ReadFeatureValues].
 *
 * @generated from message google.cloud.aiplatform.v1.ReadFeatureValuesRequest
 */
export type ReadFeatureValuesRequest = Message<"google.cloud.aiplatform.v1.ReadFeatureValuesRequest"> & {
  /**
   * Required. The resource name of the EntityType for the entity being read.
   * Value format:
   * `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}`.
   * For example, for a machine learning model predicting user clicks on a
   * website, an EntityType ID could be `user`.
   *
   * @generated from field: string entity_type = 1;
   */
  entityType: string;

  /**
   * Required. ID for a specific entity. For example,
   * for a machine learning model predicting user clicks on a website, an entity
   * ID could be `user_123`.
   *
   * @generated from field: string entity_id = 2;
   */
  entityId: string;

  /**
   * Required. Selector choosing Features of the target EntityType.
   *
   * @generated from field: google.cloud.aiplatform.v1.FeatureSelector feature_selector = 3;
   */
  featureSelector?: FeatureSelector;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ReadFeatureValuesRequest.
 * Use `create(ReadFeatureValuesRequestSchema)` to create a new message.
 */
export const ReadFeatureValuesRequestSchema: GenMessage<ReadFeatureValuesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 3);

/**
 * Response message for
 * [FeaturestoreOnlineServingService.ReadFeatureValues][google.cloud.aiplatform.v1.FeaturestoreOnlineServingService.ReadFeatureValues].
 *
 * @generated from message google.cloud.aiplatform.v1.ReadFeatureValuesResponse
 */
export type ReadFeatureValuesResponse = Message<"google.cloud.aiplatform.v1.ReadFeatureValuesResponse"> & {
  /**
   * Response header.
   *
   * @generated from field: google.cloud.aiplatform.v1.ReadFeatureValuesResponse.Header header = 1;
   */
  header?: ReadFeatureValuesResponse_Header;

  /**
   * Entity view with Feature values. This may be the entity in the
   * Featurestore if values for all Features were requested, or a projection
   * of the entity in the Featurestore if values for only some Features were
   * requested.
   *
   * @generated from field: google.cloud.aiplatform.v1.ReadFeatureValuesResponse.EntityView entity_view = 2;
   */
  entityView?: ReadFeatureValuesResponse_EntityView;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ReadFeatureValuesResponse.
 * Use `create(ReadFeatureValuesResponseSchema)` to create a new message.
 */
export const ReadFeatureValuesResponseSchema: GenMessage<ReadFeatureValuesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 4);

/**
 * Metadata for requested Features.
 *
 * @generated from message google.cloud.aiplatform.v1.ReadFeatureValuesResponse.FeatureDescriptor
 */
export type ReadFeatureValuesResponse_FeatureDescriptor = Message<"google.cloud.aiplatform.v1.ReadFeatureValuesResponse.FeatureDescriptor"> & {
  /**
   * Feature ID.
   *
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1.ReadFeatureValuesResponse.FeatureDescriptor.
 * Use `create(ReadFeatureValuesResponse_FeatureDescriptorSchema)` to create a new message.
 */
export const ReadFeatureValuesResponse_FeatureDescriptorSchema: GenMessage<ReadFeatureValuesResponse_FeatureDescriptor> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 4, 0);

/**
 * Response header with metadata for the requested
 * [ReadFeatureValuesRequest.entity_type][google.cloud.aiplatform.v1.ReadFeatureValuesRequest.entity_type]
 * and Features.
 *
 * @generated from message google.cloud.aiplatform.v1.ReadFeatureValuesResponse.Header
 */
export type ReadFeatureValuesResponse_Header = Message<"google.cloud.aiplatform.v1.ReadFeatureValuesResponse.Header"> & {
  /**
   * The resource name of the EntityType from the
   * [ReadFeatureValuesRequest][google.cloud.aiplatform.v1.ReadFeatureValuesRequest].
   * Value format:
   * `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}`.
   *
   * @generated from field: string entity_type = 1;
   */
  entityType: string;

  /**
   * List of Feature metadata corresponding to each piece of
   * [ReadFeatureValuesResponse.EntityView.data][google.cloud.aiplatform.v1.ReadFeatureValuesResponse.EntityView.data].
   *
   * @generated from field: repeated google.cloud.aiplatform.v1.ReadFeatureValuesResponse.FeatureDescriptor feature_descriptors = 2;
   */
  featureDescriptors: ReadFeatureValuesResponse_FeatureDescriptor[];
};

/**
 * Describes the message google.cloud.aiplatform.v1.ReadFeatureValuesResponse.Header.
 * Use `create(ReadFeatureValuesResponse_HeaderSchema)` to create a new message.
 */
export const ReadFeatureValuesResponse_HeaderSchema: GenMessage<ReadFeatureValuesResponse_Header> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 4, 1);

/**
 * Entity view with Feature values.
 *
 * @generated from message google.cloud.aiplatform.v1.ReadFeatureValuesResponse.EntityView
 */
export type ReadFeatureValuesResponse_EntityView = Message<"google.cloud.aiplatform.v1.ReadFeatureValuesResponse.EntityView"> & {
  /**
   * ID of the requested entity.
   *
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * Each piece of data holds the k
   * requested values for one requested Feature. If no values
   * for the requested Feature exist, the corresponding cell will be empty.
   * This has the same size and is in the same order as the features from the
   * header
   * [ReadFeatureValuesResponse.header][google.cloud.aiplatform.v1.ReadFeatureValuesResponse.header].
   *
   * @generated from field: repeated google.cloud.aiplatform.v1.ReadFeatureValuesResponse.EntityView.Data data = 2;
   */
  data: ReadFeatureValuesResponse_EntityView_Data[];
};

/**
 * Describes the message google.cloud.aiplatform.v1.ReadFeatureValuesResponse.EntityView.
 * Use `create(ReadFeatureValuesResponse_EntityViewSchema)` to create a new message.
 */
export const ReadFeatureValuesResponse_EntityViewSchema: GenMessage<ReadFeatureValuesResponse_EntityView> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 4, 2);

/**
 * Container to hold value(s), successive in time, for one Feature from the
 * request.
 *
 * @generated from message google.cloud.aiplatform.v1.ReadFeatureValuesResponse.EntityView.Data
 */
export type ReadFeatureValuesResponse_EntityView_Data = Message<"google.cloud.aiplatform.v1.ReadFeatureValuesResponse.EntityView.Data"> & {
  /**
   * @generated from oneof google.cloud.aiplatform.v1.ReadFeatureValuesResponse.EntityView.Data.data
   */
  data: {
    /**
     * Feature value if a single value is requested.
     *
     * @generated from field: google.cloud.aiplatform.v1.FeatureValue value = 1;
     */
    value: FeatureValue;
    case: "value";
  } | {
    /**
     * Feature values list if values, successive in time, are requested.
     * If the requested number of values is greater than the number of
     * existing Feature values, nonexistent values are omitted instead of
     * being returned as empty.
     *
     * @generated from field: google.cloud.aiplatform.v1.FeatureValueList values = 2;
     */
    value: FeatureValueList;
    case: "values";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.aiplatform.v1.ReadFeatureValuesResponse.EntityView.Data.
 * Use `create(ReadFeatureValuesResponse_EntityView_DataSchema)` to create a new message.
 */
export const ReadFeatureValuesResponse_EntityView_DataSchema: GenMessage<ReadFeatureValuesResponse_EntityView_Data> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 4, 2, 0);

/**
 * Request message for
 * [FeaturestoreOnlineServingService.StreamingFeatureValuesRead][].
 *
 * @generated from message google.cloud.aiplatform.v1.StreamingReadFeatureValuesRequest
 */
export type StreamingReadFeatureValuesRequest = Message<"google.cloud.aiplatform.v1.StreamingReadFeatureValuesRequest"> & {
  /**
   * Required. The resource name of the entities' type.
   * Value format:
   * `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}`.
   * For example,
   * for a machine learning model predicting user clicks on a website, an
   * EntityType ID could be `user`.
   *
   * @generated from field: string entity_type = 1;
   */
  entityType: string;

  /**
   * Required. IDs of entities to read Feature values of. The maximum number of
   * IDs is 100. For example, for a machine learning model predicting user
   * clicks on a website, an entity ID could be `user_123`.
   *
   * @generated from field: repeated string entity_ids = 2;
   */
  entityIds: string[];

  /**
   * Required. Selector choosing Features of the target EntityType. Feature IDs
   * will be deduplicated.
   *
   * @generated from field: google.cloud.aiplatform.v1.FeatureSelector feature_selector = 3;
   */
  featureSelector?: FeatureSelector;
};

/**
 * Describes the message google.cloud.aiplatform.v1.StreamingReadFeatureValuesRequest.
 * Use `create(StreamingReadFeatureValuesRequestSchema)` to create a new message.
 */
export const StreamingReadFeatureValuesRequestSchema: GenMessage<StreamingReadFeatureValuesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 5);

/**
 * Value for a feature.
 *
 * @generated from message google.cloud.aiplatform.v1.FeatureValue
 */
export type FeatureValue = Message<"google.cloud.aiplatform.v1.FeatureValue"> & {
  /**
   * Value for the feature.
   *
   * @generated from oneof google.cloud.aiplatform.v1.FeatureValue.value
   */
  value: {
    /**
     * Bool type feature value.
     *
     * @generated from field: bool bool_value = 1;
     */
    value: boolean;
    case: "boolValue";
  } | {
    /**
     * Double type feature value.
     *
     * @generated from field: double double_value = 2;
     */
    value: number;
    case: "doubleValue";
  } | {
    /**
     * Int64 feature value.
     *
     * @generated from field: int64 int64_value = 5;
     */
    value: bigint;
    case: "int64Value";
  } | {
    /**
     * String feature value.
     *
     * @generated from field: string string_value = 6;
     */
    value: string;
    case: "stringValue";
  } | {
    /**
     * A list of bool type feature value.
     *
     * @generated from field: google.cloud.aiplatform.v1.BoolArray bool_array_value = 7;
     */
    value: BoolArray;
    case: "boolArrayValue";
  } | {
    /**
     * A list of double type feature value.
     *
     * @generated from field: google.cloud.aiplatform.v1.DoubleArray double_array_value = 8;
     */
    value: DoubleArray;
    case: "doubleArrayValue";
  } | {
    /**
     * A list of int64 type feature value.
     *
     * @generated from field: google.cloud.aiplatform.v1.Int64Array int64_array_value = 11;
     */
    value: Int64Array;
    case: "int64ArrayValue";
  } | {
    /**
     * A list of string type feature value.
     *
     * @generated from field: google.cloud.aiplatform.v1.StringArray string_array_value = 12;
     */
    value: StringArray;
    case: "stringArrayValue";
  } | {
    /**
     * Bytes feature value.
     *
     * @generated from field: bytes bytes_value = 13;
     */
    value: Uint8Array;
    case: "bytesValue";
  } | {
    /**
     * A struct type feature value.
     *
     * @generated from field: google.cloud.aiplatform.v1.StructValue struct_value = 15;
     */
    value: StructValue;
    case: "structValue";
  } | { case: undefined; value?: undefined };

  /**
   * Metadata of feature value.
   *
   * @generated from field: google.cloud.aiplatform.v1.FeatureValue.Metadata metadata = 14;
   */
  metadata?: FeatureValue_Metadata;
};

/**
 * Describes the message google.cloud.aiplatform.v1.FeatureValue.
 * Use `create(FeatureValueSchema)` to create a new message.
 */
export const FeatureValueSchema: GenMessage<FeatureValue> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 6);

/**
 * Metadata of feature value.
 *
 * @generated from message google.cloud.aiplatform.v1.FeatureValue.Metadata
 */
export type FeatureValue_Metadata = Message<"google.cloud.aiplatform.v1.FeatureValue.Metadata"> & {
  /**
   * Feature generation timestamp. Typically, it is provided by user at
   * feature ingestion time. If not, feature store
   * will use the system timestamp when the data is ingested into feature
   * store. For streaming ingestion, the time, aligned by days, must be no
   * older than five years (1825 days) and no later than one year (366 days)
   * in the future.
   *
   * @generated from field: google.protobuf.Timestamp generate_time = 1;
   */
  generateTime?: Timestamp;
};

/**
 * Describes the message google.cloud.aiplatform.v1.FeatureValue.Metadata.
 * Use `create(FeatureValue_MetadataSchema)` to create a new message.
 */
export const FeatureValue_MetadataSchema: GenMessage<FeatureValue_Metadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 6, 0);

/**
 * Struct (or object) type feature value.
 *
 * @generated from message google.cloud.aiplatform.v1.StructValue
 */
export type StructValue = Message<"google.cloud.aiplatform.v1.StructValue"> & {
  /**
   * A list of field values.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1.StructFieldValue values = 1;
   */
  values: StructFieldValue[];
};

/**
 * Describes the message google.cloud.aiplatform.v1.StructValue.
 * Use `create(StructValueSchema)` to create a new message.
 */
export const StructValueSchema: GenMessage<StructValue> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 7);

/**
 * One field of a Struct (or object) type feature value.
 *
 * @generated from message google.cloud.aiplatform.v1.StructFieldValue
 */
export type StructFieldValue = Message<"google.cloud.aiplatform.v1.StructFieldValue"> & {
  /**
   * Name of the field in the struct feature.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The value for this field.
   *
   * @generated from field: google.cloud.aiplatform.v1.FeatureValue value = 2;
   */
  value?: FeatureValue;
};

/**
 * Describes the message google.cloud.aiplatform.v1.StructFieldValue.
 * Use `create(StructFieldValueSchema)` to create a new message.
 */
export const StructFieldValueSchema: GenMessage<StructFieldValue> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 8);

/**
 * Container for list of values.
 *
 * @generated from message google.cloud.aiplatform.v1.FeatureValueList
 */
export type FeatureValueList = Message<"google.cloud.aiplatform.v1.FeatureValueList"> & {
  /**
   * A list of feature values. All of them should be the same data type.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1.FeatureValue values = 1;
   */
  values: FeatureValue[];
};

/**
 * Describes the message google.cloud.aiplatform.v1.FeatureValueList.
 * Use `create(FeatureValueListSchema)` to create a new message.
 */
export const FeatureValueListSchema: GenMessage<FeatureValueList> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 9);

/**
 * A service for serving online feature values.
 *
 * @generated from service google.cloud.aiplatform.v1.FeaturestoreOnlineServingService
 */
export const FeaturestoreOnlineServingService: GenService<{
  /**
   * Reads Feature values of a specific entity of an EntityType. For reading
   * feature values of multiple entities of an EntityType, please use
   * StreamingReadFeatureValues.
   *
   * @generated from rpc google.cloud.aiplatform.v1.FeaturestoreOnlineServingService.ReadFeatureValues
   */
  readFeatureValues: {
    methodKind: "unary";
    input: typeof ReadFeatureValuesRequestSchema;
    output: typeof ReadFeatureValuesResponseSchema;
  },
  /**
   * Reads Feature values for multiple entities. Depending on their size, data
   * for different entities may be broken
   * up across multiple responses.
   *
   * @generated from rpc google.cloud.aiplatform.v1.FeaturestoreOnlineServingService.StreamingReadFeatureValues
   */
  streamingReadFeatureValues: {
    methodKind: "server_streaming";
    input: typeof StreamingReadFeatureValuesRequestSchema;
    output: typeof ReadFeatureValuesResponseSchema;
  },
  /**
   * Writes Feature values of one or more entities of an EntityType.
   *
   * The Feature values are merged into existing entities if any. The Feature
   * values to be written must have timestamp within the online storage
   * retention.
   *
   * @generated from rpc google.cloud.aiplatform.v1.FeaturestoreOnlineServingService.WriteFeatureValues
   */
  writeFeatureValues: {
    methodKind: "unary";
    input: typeof WriteFeatureValuesRequestSchema;
    output: typeof WriteFeatureValuesResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_aiplatform_v1_featurestore_online_service, 0);
