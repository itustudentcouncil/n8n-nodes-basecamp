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
// @generated from file google/cloud/aiplatform/v1beta1/genai_tuning_service.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { GcsDestination } from "./io_pb";
import { file_google_cloud_aiplatform_v1beta1_io } from "./io_pb";
import type { GenericOperationMetadata } from "./operation_pb";
import { file_google_cloud_aiplatform_v1beta1_operation } from "./operation_pb";
import type { TunedModelRef, TuningJob, TuningJobSchema } from "./tuning_job_pb";
import { file_google_cloud_aiplatform_v1beta1_tuning_job } from "./tuning_job_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/genai_tuning_service.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_genai_tuning_service: GenFile = /*@__PURE__*/
  fileDesc("Cjpnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL2dlbmFpX3R1bmluZ19zZXJ2aWNlLnByb3RvEh9nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExIpgBChZDcmVhdGVUdW5pbmdKb2JSZXF1ZXN0EjkKBnBhcmVudBgBIAEoCUIp4EEC+kEjCiFsb2NhdGlvbnMuZ29vZ2xlYXBpcy5jb20vTG9jYXRpb24SQwoKdHVuaW5nX2pvYhgCIAEoCzIqLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuVHVuaW5nSm9iQgPgQQIiUAoTR2V0VHVuaW5nSm9iUmVxdWVzdBI5CgRuYW1lGAEgASgJQivgQQL6QSUKI2FpcGxhdGZvcm0uZ29vZ2xlYXBpcy5jb20vVHVuaW5nSm9iIpgBChVMaXN0VHVuaW5nSm9ic1JlcXVlc3QSOQoGcGFyZW50GAEgASgJQingQQL6QSMKIWxvY2F0aW9ucy5nb29nbGVhcGlzLmNvbS9Mb2NhdGlvbhITCgZmaWx0ZXIYAiABKAlCA+BBARIWCglwYWdlX3NpemUYAyABKAVCA+BBARIXCgpwYWdlX3Rva2VuGAQgASgJQgPgQQEicgoWTGlzdFR1bmluZ0pvYnNSZXNwb25zZRI/Cgt0dW5pbmdfam9icxgBIAMoCzIqLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuVHVuaW5nSm9iEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCSJTChZDYW5jZWxUdW5pbmdKb2JSZXF1ZXN0EjkKBG5hbWUYASABKAlCK+BBAvpBJQojYWlwbGF0Zm9ybS5nb29nbGVhcGlzLmNvbS9UdW5pbmdKb2Ii4QIKF1JlYmFzZVR1bmVkTW9kZWxSZXF1ZXN0EjkKBnBhcmVudBgBIAEoCUIp4EEC+kEjCiFsb2NhdGlvbnMuZ29vZ2xlYXBpcy5jb20vTG9jYXRpb24STAoPdHVuZWRfbW9kZWxfcmVmGAIgASgLMi4uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5UdW5lZE1vZGVsUmVmQgPgQQISQwoKdHVuaW5nX2pvYhgDIAEoCzIqLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuVHVuaW5nSm9iQgPgQQESUgoUYXJ0aWZhY3RfZGVzdGluYXRpb24YBCABKAsyLy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkdjc0Rlc3RpbmF0aW9uQgPgQQESJAoXZGVwbG95X3RvX3NhbWVfZW5kcG9pbnQYBSABKAhCA+BBASJ4CiFSZWJhc2VUdW5lZE1vZGVsT3BlcmF0aW9uTWV0YWRhdGESUwoQZ2VuZXJpY19tZXRhZGF0YRgBIAEoCzI5Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuR2VuZXJpY09wZXJhdGlvbk1ldGFkYXRhMvcIChJHZW5BaVR1bmluZ1NlcnZpY2US0wEKD0NyZWF0ZVR1bmluZ0pvYhI3Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuQ3JlYXRlVHVuaW5nSm9iUmVxdWVzdBoqLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuVHVuaW5nSm9iIlvaQRFwYXJlbnQsdHVuaW5nX2pvYoLT5JMCQToKdHVuaW5nX2pvYiIzL3YxYmV0YTEve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qfS90dW5pbmdKb2JzErQBCgxHZXRUdW5pbmdKb2ISNC5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkdldFR1bmluZ0pvYlJlcXVlc3QaKi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLlR1bmluZ0pvYiJC2kEEbmFtZYLT5JMCNRIzL3YxYmV0YTEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi90dW5pbmdKb2JzLyp9EscBCg5MaXN0VHVuaW5nSm9icxI2Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuTGlzdFR1bmluZ0pvYnNSZXF1ZXN0GjcuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5MaXN0VHVuaW5nSm9ic1Jlc3BvbnNlIkTaQQZwYXJlbnSC0+STAjUSMy92MWJldGExL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKn0vdHVuaW5nSm9icxKwAQoPQ2FuY2VsVHVuaW5nSm9iEjcuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5DYW5jZWxUdW5pbmdKb2JSZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5IkzaQQRuYW1lgtPkkwI/OgEqIjovdjFiZXRhMS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL3R1bmluZ0pvYnMvKn06Y2FuY2VsEocCChBSZWJhc2VUdW5lZE1vZGVsEjguZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5SZWJhc2VUdW5lZE1vZGVsUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24imQHKQS4KCVR1bmluZ0pvYhIhUmViYXNlVHVuZWRNb2RlbE9wZXJhdGlvbk1ldGFkYXRh2kEWcGFyZW50LHR1bmVkX21vZGVsX3JlZoLT5JMCSToBKiJEL3YxYmV0YTEve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qfS90dW5pbmdKb2JzOnJlYmFzZVR1bmVkTW9kZWwaTcpBGWFpcGxhdGZvcm0uZ29vZ2xlYXBpcy5jb23SQS5odHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2Nsb3VkLXBsYXRmb3JtQu4BCiNjb20uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMUIXR2VuQWlUdW5pbmdTZXJ2aWNlUHJvdG9QAVpDY2xvdWQuZ29vZ2xlLmNvbS9nby9haXBsYXRmb3JtL2FwaXYxYmV0YTEvYWlwbGF0Zm9ybXBiO2FpcGxhdGZvcm1wYqoCH0dvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxQmV0YTHKAh9Hb29nbGVcQ2xvdWRcQUlQbGF0Zm9ybVxWMWJldGEx6gIiR29vZ2xlOjpDbG91ZDo6QUlQbGF0Zm9ybTo6VjFiZXRhMWIGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_aiplatform_v1beta1_io, file_google_cloud_aiplatform_v1beta1_operation, file_google_cloud_aiplatform_v1beta1_tuning_job, file_google_longrunning_operations, file_google_protobuf_empty]);

/**
 * Request message for
 * [GenAiTuningService.CreateTuningJob][google.cloud.aiplatform.v1beta1.GenAiTuningService.CreateTuningJob].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.CreateTuningJobRequest
 */
export type CreateTuningJobRequest = Message<"google.cloud.aiplatform.v1beta1.CreateTuningJobRequest"> & {
  /**
   * Required. The resource name of the Location to create the TuningJob in.
   * Format: `projects/{project}/locations/{location}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The TuningJob to create.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.TuningJob tuning_job = 2;
   */
  tuningJob?: TuningJob;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.CreateTuningJobRequest.
 * Use `create(CreateTuningJobRequestSchema)` to create a new message.
 */
export const CreateTuningJobRequestSchema: GenMessage<CreateTuningJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_genai_tuning_service, 0);

/**
 * Request message for
 * [GenAiTuningService.GetTuningJob][google.cloud.aiplatform.v1beta1.GenAiTuningService.GetTuningJob].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.GetTuningJobRequest
 */
export type GetTuningJobRequest = Message<"google.cloud.aiplatform.v1beta1.GetTuningJobRequest"> & {
  /**
   * Required. The name of the TuningJob resource. Format:
   * `projects/{project}/locations/{location}/tuningJobs/{tuning_job}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.GetTuningJobRequest.
 * Use `create(GetTuningJobRequestSchema)` to create a new message.
 */
export const GetTuningJobRequestSchema: GenMessage<GetTuningJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_genai_tuning_service, 1);

/**
 * Request message for
 * [GenAiTuningService.ListTuningJobs][google.cloud.aiplatform.v1beta1.GenAiTuningService.ListTuningJobs].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ListTuningJobsRequest
 */
export type ListTuningJobsRequest = Message<"google.cloud.aiplatform.v1beta1.ListTuningJobsRequest"> & {
  /**
   * Required. The resource name of the Location to list the TuningJobs from.
   * Format: `projects/{project}/locations/{location}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. The standard list filter.
   *
   * @generated from field: string filter = 2;
   */
  filter: string;

  /**
   * Optional. The standard list page size.
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize: number;

  /**
   * Optional. The standard list page token.
   * Typically obtained via [ListTuningJob.next_page_token][] of the
   * previous GenAiTuningService.ListTuningJob][] call.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ListTuningJobsRequest.
 * Use `create(ListTuningJobsRequestSchema)` to create a new message.
 */
export const ListTuningJobsRequestSchema: GenMessage<ListTuningJobsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_genai_tuning_service, 2);

/**
 * Response message for
 * [GenAiTuningService.ListTuningJobs][google.cloud.aiplatform.v1beta1.GenAiTuningService.ListTuningJobs]
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ListTuningJobsResponse
 */
export type ListTuningJobsResponse = Message<"google.cloud.aiplatform.v1beta1.ListTuningJobsResponse"> & {
  /**
   * List of TuningJobs in the requested page.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.TuningJob tuning_jobs = 1;
   */
  tuningJobs: TuningJob[];

  /**
   * A token to retrieve the next page of results.
   * Pass to
   * [ListTuningJobsRequest.page_token][google.cloud.aiplatform.v1beta1.ListTuningJobsRequest.page_token]
   * to obtain that page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ListTuningJobsResponse.
 * Use `create(ListTuningJobsResponseSchema)` to create a new message.
 */
export const ListTuningJobsResponseSchema: GenMessage<ListTuningJobsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_genai_tuning_service, 3);

/**
 * Request message for
 * [GenAiTuningService.CancelTuningJob][google.cloud.aiplatform.v1beta1.GenAiTuningService.CancelTuningJob].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.CancelTuningJobRequest
 */
export type CancelTuningJobRequest = Message<"google.cloud.aiplatform.v1beta1.CancelTuningJobRequest"> & {
  /**
   * Required. The name of the TuningJob to cancel. Format:
   * `projects/{project}/locations/{location}/tuningJobs/{tuning_job}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.CancelTuningJobRequest.
 * Use `create(CancelTuningJobRequestSchema)` to create a new message.
 */
export const CancelTuningJobRequestSchema: GenMessage<CancelTuningJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_genai_tuning_service, 4);

/**
 * Request message for
 * [GenAiTuningService.RebaseTunedModel][google.cloud.aiplatform.v1beta1.GenAiTuningService.RebaseTunedModel].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.RebaseTunedModelRequest
 */
export type RebaseTunedModelRequest = Message<"google.cloud.aiplatform.v1beta1.RebaseTunedModelRequest"> & {
  /**
   * Required. The resource name of the Location into which to rebase the Model.
   * Format: `projects/{project}/locations/{location}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. TunedModel reference to retrieve the legacy model information.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.TunedModelRef tuned_model_ref = 2;
   */
  tunedModelRef?: TunedModelRef;

  /**
   * Optional. The TuningJob to be updated. Users can use this TuningJob field
   * to overwrite tuning configs.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.TuningJob tuning_job = 3;
   */
  tuningJob?: TuningJob;

  /**
   * Optional. The Google Cloud Storage location to write the artifacts.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.GcsDestination artifact_destination = 4;
   */
  artifactDestination?: GcsDestination;

  /**
   * Optional. By default, bison to gemini migration will always create new
   * model/endpoint, but for gemini-1.0 to gemini-1.5 migration, we default
   * deploy to the same endpoint. See details in this Section.
   *
   * @generated from field: bool deploy_to_same_endpoint = 5;
   */
  deployToSameEndpoint: boolean;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.RebaseTunedModelRequest.
 * Use `create(RebaseTunedModelRequestSchema)` to create a new message.
 */
export const RebaseTunedModelRequestSchema: GenMessage<RebaseTunedModelRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_genai_tuning_service, 5);

/**
 * Runtime operation information for
 * [GenAiTuningService.RebaseTunedModel][google.cloud.aiplatform.v1beta1.GenAiTuningService.RebaseTunedModel].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.RebaseTunedModelOperationMetadata
 */
export type RebaseTunedModelOperationMetadata = Message<"google.cloud.aiplatform.v1beta1.RebaseTunedModelOperationMetadata"> & {
  /**
   * The common part of the operation generic information.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.GenericOperationMetadata generic_metadata = 1;
   */
  genericMetadata?: GenericOperationMetadata;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.RebaseTunedModelOperationMetadata.
 * Use `create(RebaseTunedModelOperationMetadataSchema)` to create a new message.
 */
export const RebaseTunedModelOperationMetadataSchema: GenMessage<RebaseTunedModelOperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_genai_tuning_service, 6);

/**
 * A service for creating and managing GenAI Tuning Jobs.
 *
 * @generated from service google.cloud.aiplatform.v1beta1.GenAiTuningService
 */
export const GenAiTuningService: GenService<{
  /**
   * Creates a TuningJob. A created TuningJob right away will be attempted to
   * be run.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.GenAiTuningService.CreateTuningJob
   */
  createTuningJob: {
    methodKind: "unary";
    input: typeof CreateTuningJobRequestSchema;
    output: typeof TuningJobSchema;
  },
  /**
   * Gets a TuningJob.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.GenAiTuningService.GetTuningJob
   */
  getTuningJob: {
    methodKind: "unary";
    input: typeof GetTuningJobRequestSchema;
    output: typeof TuningJobSchema;
  },
  /**
   * Lists TuningJobs in a Location.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.GenAiTuningService.ListTuningJobs
   */
  listTuningJobs: {
    methodKind: "unary";
    input: typeof ListTuningJobsRequestSchema;
    output: typeof ListTuningJobsResponseSchema;
  },
  /**
   * Cancels a TuningJob.
   * Starts asynchronous cancellation on the TuningJob. The server makes a best
   * effort to cancel the job, but success is not guaranteed. Clients can use
   * [GenAiTuningService.GetTuningJob][google.cloud.aiplatform.v1beta1.GenAiTuningService.GetTuningJob]
   * or other methods to check whether the cancellation succeeded or whether the
   * job completed despite cancellation. On successful cancellation, the
   * TuningJob is not deleted; instead it becomes a job with a
   * [TuningJob.error][google.cloud.aiplatform.v1beta1.TuningJob.error] value
   * with a [google.rpc.Status.code][google.rpc.Status.code] of 1, corresponding
   * to `Code.CANCELLED`, and
   * [TuningJob.state][google.cloud.aiplatform.v1beta1.TuningJob.state] is set
   * to `CANCELLED`.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.GenAiTuningService.CancelTuningJob
   */
  cancelTuningJob: {
    methodKind: "unary";
    input: typeof CancelTuningJobRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Rebase a TunedModel.
   * Creates a LongRunningOperation that takes a legacy Tuned GenAI model
   * Reference and creates a TuningJob based on newly available model.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.GenAiTuningService.RebaseTunedModel
   */
  rebaseTunedModel: {
    methodKind: "unary";
    input: typeof RebaseTunedModelRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_aiplatform_v1beta1_genai_tuning_service, 0);
