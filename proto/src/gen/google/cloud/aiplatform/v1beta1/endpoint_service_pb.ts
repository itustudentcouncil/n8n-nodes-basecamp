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
// @generated from file google/cloud/aiplatform/v1beta1/endpoint_service.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { DeployedModel, Endpoint, EndpointSchema } from "./endpoint_pb";
import { file_google_cloud_aiplatform_v1beta1_endpoint } from "./endpoint_pb";
import type { GenericOperationMetadata } from "./operation_pb";
import { file_google_cloud_aiplatform_v1beta1_operation } from "./operation_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/endpoint_service.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_endpoint_service: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL2VuZHBvaW50X3NlcnZpY2UucHJvdG8SH2dvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEirgEKFUNyZWF0ZUVuZHBvaW50UmVxdWVzdBI5CgZwYXJlbnQYASABKAlCKeBBAvpBIwohbG9jYXRpb25zLmdvb2dsZWFwaXMuY29tL0xvY2F0aW9uEkAKCGVuZHBvaW50GAIgASgLMikuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5FbmRwb2ludEID4EECEhgKC2VuZHBvaW50X2lkGAQgASgJQgPgQQUidgofQ3JlYXRlRW5kcG9pbnRPcGVyYXRpb25NZXRhZGF0YRJTChBnZW5lcmljX21ldGFkYXRhGAEgASgLMjkuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5HZW5lcmljT3BlcmF0aW9uTWV0YWRhdGEiTgoSR2V0RW5kcG9pbnRSZXF1ZXN0EjgKBG5hbWUYASABKAlCKuBBAvpBJAoiYWlwbGF0Zm9ybS5nb29nbGVhcGlzLmNvbS9FbmRwb2ludCLLAQoUTGlzdEVuZHBvaW50c1JlcXVlc3QSOQoGcGFyZW50GAEgASgJQingQQL6QSMKIWxvY2F0aW9ucy5nb29nbGVhcGlzLmNvbS9Mb2NhdGlvbhITCgZmaWx0ZXIYAiABKAlCA+BBARIWCglwYWdlX3NpemUYAyABKAVCA+BBARIXCgpwYWdlX3Rva2VuGAQgASgJQgPgQQESMgoJcmVhZF9tYXNrGAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFza0ID4EEBIm4KFUxpc3RFbmRwb2ludHNSZXNwb25zZRI8CgllbmRwb2ludHMYASADKAsyKS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkVuZHBvaW50EhcKD25leHRfcGFnZV90b2tlbhgCIAEoCSKPAQoVVXBkYXRlRW5kcG9pbnRSZXF1ZXN0EkAKCGVuZHBvaW50GAEgASgLMikuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5FbmRwb2ludEID4EECEjQKC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFza0ID4EECIlEKFURlbGV0ZUVuZHBvaW50UmVxdWVzdBI4CgRuYW1lGAEgASgJQirgQQL6QSQKImFpcGxhdGZvcm0uZ29vZ2xlYXBpcy5jb20vRW5kcG9pbnQisgIKEkRlcGxveU1vZGVsUmVxdWVzdBI8CghlbmRwb2ludBgBIAEoCUIq4EEC+kEkCiJhaXBsYXRmb3JtLmdvb2dsZWFwaXMuY29tL0VuZHBvaW50EksKDmRlcGxveWVkX21vZGVsGAIgASgLMi4uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5EZXBsb3llZE1vZGVsQgPgQQISXAoNdHJhZmZpY19zcGxpdBgDIAMoCzJFLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuRGVwbG95TW9kZWxSZXF1ZXN0LlRyYWZmaWNTcGxpdEVudHJ5GjMKEVRyYWZmaWNTcGxpdEVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoBToCOAEiXQoTRGVwbG95TW9kZWxSZXNwb25zZRJGCg5kZXBsb3llZF9tb2RlbBgBIAEoCzIuLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuRGVwbG95ZWRNb2RlbCJzChxEZXBsb3lNb2RlbE9wZXJhdGlvbk1ldGFkYXRhElMKEGdlbmVyaWNfbWV0YWRhdGEYASABKAsyOS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkdlbmVyaWNPcGVyYXRpb25NZXRhZGF0YSKJAgoUVW5kZXBsb3lNb2RlbFJlcXVlc3QSPAoIZW5kcG9pbnQYASABKAlCKuBBAvpBJAoiYWlwbGF0Zm9ybS5nb29nbGVhcGlzLmNvbS9FbmRwb2ludBIeChFkZXBsb3llZF9tb2RlbF9pZBgCIAEoCUID4EECEl4KDXRyYWZmaWNfc3BsaXQYAyADKAsyRy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLlVuZGVwbG95TW9kZWxSZXF1ZXN0LlRyYWZmaWNTcGxpdEVudHJ5GjMKEVRyYWZmaWNTcGxpdEVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoBToCOAEiFwoVVW5kZXBsb3lNb2RlbFJlc3BvbnNlInUKHlVuZGVwbG95TW9kZWxPcGVyYXRpb25NZXRhZGF0YRJTChBnZW5lcmljX21ldGFkYXRhGAEgASgLMjkuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5HZW5lcmljT3BlcmF0aW9uTWV0YWRhdGEi3QEKGk11dGF0ZURlcGxveWVkTW9kZWxSZXF1ZXN0EjwKCGVuZHBvaW50GAEgASgJQirgQQL6QSQKImFpcGxhdGZvcm0uZ29vZ2xlYXBpcy5jb20vRW5kcG9pbnQSSwoOZGVwbG95ZWRfbW9kZWwYAiABKAsyLi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkRlcGxveWVkTW9kZWxCA+BBAhI0Cgt1cGRhdGVfbWFzaxgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2tCA+BBAiJlChtNdXRhdGVEZXBsb3llZE1vZGVsUmVzcG9uc2USRgoOZGVwbG95ZWRfbW9kZWwYASABKAsyLi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkRlcGxveWVkTW9kZWwiewokTXV0YXRlRGVwbG95ZWRNb2RlbE9wZXJhdGlvbk1ldGFkYXRhElMKEGdlbmVyaWNfbWV0YWRhdGEYASABKAsyOS5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkdlbmVyaWNPcGVyYXRpb25NZXRhZGF0YTKNEAoPRW5kcG9pbnRTZXJ2aWNlEowCCg5DcmVhdGVFbmRwb2ludBI2Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuQ3JlYXRlRW5kcG9pbnRSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiKiAcpBKwoIRW5kcG9pbnQSH0NyZWF0ZUVuZHBvaW50T3BlcmF0aW9uTWV0YWRhdGHaQQ9wYXJlbnQsZW5kcG9pbnTaQRtwYXJlbnQsZW5kcG9pbnQsZW5kcG9pbnRfaWSC0+STAj46CGVuZHBvaW50IjIvdjFiZXRhMS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9L2VuZHBvaW50cxKwAQoLR2V0RW5kcG9pbnQSMy5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkdldEVuZHBvaW50UmVxdWVzdBopLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuRW5kcG9pbnQiQdpBBG5hbWWC0+STAjQSMi92MWJldGExL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovZW5kcG9pbnRzLyp9EsMBCg1MaXN0RW5kcG9pbnRzEjUuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5MaXN0RW5kcG9pbnRzUmVxdWVzdBo2Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuTGlzdEVuZHBvaW50c1Jlc3BvbnNlIkPaQQZwYXJlbnSC0+STAjQSMi92MWJldGExL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKn0vZW5kcG9pbnRzEtkBCg5VcGRhdGVFbmRwb2ludBI2Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuVXBkYXRlRW5kcG9pbnRSZXF1ZXN0GikuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5FbmRwb2ludCJk2kEUZW5kcG9pbnQsdXBkYXRlX21hc2uC0+STAkc6CGVuZHBvaW50MjsvdjFiZXRhMS97ZW5kcG9pbnQubmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2VuZHBvaW50cy8qfRLdAQoORGVsZXRlRW5kcG9pbnQSNi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkRlbGV0ZUVuZHBvaW50UmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24idMpBMAoVZ29vZ2xlLnByb3RvYnVmLkVtcHR5EhdEZWxldGVPcGVyYXRpb25NZXRhZGF0YdpBBG5hbWWC0+STAjQqMi92MWJldGExL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovZW5kcG9pbnRzLyp9Eo8CCgtEZXBsb3lNb2RlbBIzLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuRGVwbG95TW9kZWxSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiKrAcpBMwoTRGVwbG95TW9kZWxSZXNwb25zZRIcRGVwbG95TW9kZWxPcGVyYXRpb25NZXRhZGF0YdpBJWVuZHBvaW50LGRlcGxveWVkX21vZGVsLHRyYWZmaWNfc3BsaXSC0+STAkc6ASoiQi92MWJldGExL3tlbmRwb2ludD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2VuZHBvaW50cy8qfTpkZXBsb3lNb2RlbBKcAgoNVW5kZXBsb3lNb2RlbBI1Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuVW5kZXBsb3lNb2RlbFJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIrQBykE3ChVVbmRlcGxveU1vZGVsUmVzcG9uc2USHlVuZGVwbG95TW9kZWxPcGVyYXRpb25NZXRhZGF0YdpBKGVuZHBvaW50LGRlcGxveWVkX21vZGVsX2lkLHRyYWZmaWNfc3BsaXSC0+STAkk6ASoiRC92MWJldGExL3tlbmRwb2ludD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2VuZHBvaW50cy8qfTp1bmRlcGxveU1vZGVsErUCChNNdXRhdGVEZXBsb3llZE1vZGVsEjsuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5NdXRhdGVEZXBsb3llZE1vZGVsUmVxdWVzdBodLmdvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb24iwQHKQUMKG011dGF0ZURlcGxveWVkTW9kZWxSZXNwb25zZRIkTXV0YXRlRGVwbG95ZWRNb2RlbE9wZXJhdGlvbk1ldGFkYXRh2kEjZW5kcG9pbnQsZGVwbG95ZWRfbW9kZWwsdXBkYXRlX21hc2uC0+STAk86ASoiSi92MWJldGExL3tlbmRwb2ludD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2VuZHBvaW50cy8qfTptdXRhdGVEZXBsb3llZE1vZGVsGk3KQRlhaXBsYXRmb3JtLmdvb2dsZWFwaXMuY29t0kEuaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybULrAQojY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTFCFEVuZHBvaW50U2VydmljZVByb3RvUAFaQ2Nsb3VkLmdvb2dsZS5jb20vZ28vYWlwbGF0Zm9ybS9hcGl2MWJldGExL2FpcGxhdGZvcm1wYjthaXBsYXRmb3JtcGKqAh9Hb29nbGUuQ2xvdWQuQUlQbGF0Zm9ybS5WMUJldGExygIfR29vZ2xlXENsb3VkXEFJUGxhdGZvcm1cVjFiZXRhMeoCIkdvb2dsZTo6Q2xvdWQ6OkFJUGxhdGZvcm06OlYxYmV0YTFiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_aiplatform_v1beta1_endpoint, file_google_cloud_aiplatform_v1beta1_operation, file_google_longrunning_operations, file_google_protobuf_empty, file_google_protobuf_field_mask]);

/**
 * Request message for
 * [EndpointService.CreateEndpoint][google.cloud.aiplatform.v1beta1.EndpointService.CreateEndpoint].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.CreateEndpointRequest
 */
export type CreateEndpointRequest = Message<"google.cloud.aiplatform.v1beta1.CreateEndpointRequest"> & {
  /**
   * Required. The resource name of the Location to create the Endpoint in.
   * Format: `projects/{project}/locations/{location}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The Endpoint to create.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.Endpoint endpoint = 2;
   */
  endpoint?: Endpoint;

  /**
   * Immutable. The ID to use for endpoint, which will become the final
   * component of the endpoint resource name.
   * If not provided, Vertex AI will generate a value for this ID.
   *
   * If the first character is a letter, this value may be up to 63 characters,
   * and valid characters are `[a-z0-9-]`. The last character must be a letter
   * or number.
   *
   * If the first character is a number, this value may be up to 9 characters,
   * and valid characters are `[0-9]` with no leading zeros.
   *
   * When using HTTP/JSON, this field is populated
   * based on a query string argument, such as `?endpoint_id=12345`. This is the
   * fallback for fields that are not included in either the URI or the body.
   *
   * @generated from field: string endpoint_id = 4;
   */
  endpointId: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.CreateEndpointRequest.
 * Use `create(CreateEndpointRequestSchema)` to create a new message.
 */
export const CreateEndpointRequestSchema: GenMessage<CreateEndpointRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 0);

/**
 * Runtime operation information for
 * [EndpointService.CreateEndpoint][google.cloud.aiplatform.v1beta1.EndpointService.CreateEndpoint].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.CreateEndpointOperationMetadata
 */
export type CreateEndpointOperationMetadata = Message<"google.cloud.aiplatform.v1beta1.CreateEndpointOperationMetadata"> & {
  /**
   * The operation generic information.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.GenericOperationMetadata generic_metadata = 1;
   */
  genericMetadata?: GenericOperationMetadata;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.CreateEndpointOperationMetadata.
 * Use `create(CreateEndpointOperationMetadataSchema)` to create a new message.
 */
export const CreateEndpointOperationMetadataSchema: GenMessage<CreateEndpointOperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 1);

/**
 * Request message for
 * [EndpointService.GetEndpoint][google.cloud.aiplatform.v1beta1.EndpointService.GetEndpoint]
 *
 * @generated from message google.cloud.aiplatform.v1beta1.GetEndpointRequest
 */
export type GetEndpointRequest = Message<"google.cloud.aiplatform.v1beta1.GetEndpointRequest"> & {
  /**
   * Required. The name of the Endpoint resource.
   * Format:
   * `projects/{project}/locations/{location}/endpoints/{endpoint}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.GetEndpointRequest.
 * Use `create(GetEndpointRequestSchema)` to create a new message.
 */
export const GetEndpointRequestSchema: GenMessage<GetEndpointRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 2);

/**
 * Request message for
 * [EndpointService.ListEndpoints][google.cloud.aiplatform.v1beta1.EndpointService.ListEndpoints].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ListEndpointsRequest
 */
export type ListEndpointsRequest = Message<"google.cloud.aiplatform.v1beta1.ListEndpointsRequest"> & {
  /**
   * Required. The resource name of the Location from which to list the
   * Endpoints. Format: `projects/{project}/locations/{location}`
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. An expression for filtering the results of the request. For field
   * names both snake_case and camelCase are supported.
   *
   *   * `endpoint` supports `=` and `!=`. `endpoint` represents the Endpoint
   *     ID, i.e. the last segment of the Endpoint's
   *     [resource name][google.cloud.aiplatform.v1beta1.Endpoint.name].
   *   * `display_name` supports `=` and `!=`.
   *   * `labels` supports general map functions that is:
   *     * `labels.key=value` - key:value equality
   *     * `labels.key:*` or `labels:key` - key existence
   *     * A key including a space must be quoted. `labels."a key"`.
   *   * `base_model_name` only supports `=`.
   *
   * Some examples:
   *
   *   * `endpoint=1`
   *   * `displayName="myDisplayName"`
   *   * `labels.myKey="myValue"`
   *   * `baseModelName="text-bison"`
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
   * Typically obtained via
   * [ListEndpointsResponse.next_page_token][google.cloud.aiplatform.v1beta1.ListEndpointsResponse.next_page_token]
   * of the previous
   * [EndpointService.ListEndpoints][google.cloud.aiplatform.v1beta1.EndpointService.ListEndpoints]
   * call.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken: string;

  /**
   * Optional. Mask specifying which fields to read.
   *
   * @generated from field: google.protobuf.FieldMask read_mask = 5;
   */
  readMask?: FieldMask;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ListEndpointsRequest.
 * Use `create(ListEndpointsRequestSchema)` to create a new message.
 */
export const ListEndpointsRequestSchema: GenMessage<ListEndpointsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 3);

/**
 * Response message for
 * [EndpointService.ListEndpoints][google.cloud.aiplatform.v1beta1.EndpointService.ListEndpoints].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.ListEndpointsResponse
 */
export type ListEndpointsResponse = Message<"google.cloud.aiplatform.v1beta1.ListEndpointsResponse"> & {
  /**
   * List of Endpoints in the requested page.
   *
   * @generated from field: repeated google.cloud.aiplatform.v1beta1.Endpoint endpoints = 1;
   */
  endpoints: Endpoint[];

  /**
   * A token to retrieve the next page of results.
   * Pass to
   * [ListEndpointsRequest.page_token][google.cloud.aiplatform.v1beta1.ListEndpointsRequest.page_token]
   * to obtain that page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.ListEndpointsResponse.
 * Use `create(ListEndpointsResponseSchema)` to create a new message.
 */
export const ListEndpointsResponseSchema: GenMessage<ListEndpointsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 4);

/**
 * Request message for
 * [EndpointService.UpdateEndpoint][google.cloud.aiplatform.v1beta1.EndpointService.UpdateEndpoint].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.UpdateEndpointRequest
 */
export type UpdateEndpointRequest = Message<"google.cloud.aiplatform.v1beta1.UpdateEndpointRequest"> & {
  /**
   * Required. The Endpoint which replaces the resource on the server.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.Endpoint endpoint = 1;
   */
  endpoint?: Endpoint;

  /**
   * Required. The update mask applies to the resource. See
   * [google.protobuf.FieldMask][google.protobuf.FieldMask].
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.UpdateEndpointRequest.
 * Use `create(UpdateEndpointRequestSchema)` to create a new message.
 */
export const UpdateEndpointRequestSchema: GenMessage<UpdateEndpointRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 5);

/**
 * Request message for
 * [EndpointService.DeleteEndpoint][google.cloud.aiplatform.v1beta1.EndpointService.DeleteEndpoint].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.DeleteEndpointRequest
 */
export type DeleteEndpointRequest = Message<"google.cloud.aiplatform.v1beta1.DeleteEndpointRequest"> & {
  /**
   * Required. The name of the Endpoint resource to be deleted.
   * Format:
   * `projects/{project}/locations/{location}/endpoints/{endpoint}`
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.DeleteEndpointRequest.
 * Use `create(DeleteEndpointRequestSchema)` to create a new message.
 */
export const DeleteEndpointRequestSchema: GenMessage<DeleteEndpointRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 6);

/**
 * Request message for
 * [EndpointService.DeployModel][google.cloud.aiplatform.v1beta1.EndpointService.DeployModel].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.DeployModelRequest
 */
export type DeployModelRequest = Message<"google.cloud.aiplatform.v1beta1.DeployModelRequest"> & {
  /**
   * Required. The name of the Endpoint resource into which to deploy a Model.
   * Format:
   * `projects/{project}/locations/{location}/endpoints/{endpoint}`
   *
   * @generated from field: string endpoint = 1;
   */
  endpoint: string;

  /**
   * Required. The DeployedModel to be created within the Endpoint. Note that
   * [Endpoint.traffic_split][google.cloud.aiplatform.v1beta1.Endpoint.traffic_split]
   * must be updated for the DeployedModel to start receiving traffic, either as
   * part of this call, or via
   * [EndpointService.UpdateEndpoint][google.cloud.aiplatform.v1beta1.EndpointService.UpdateEndpoint].
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.DeployedModel deployed_model = 2;
   */
  deployedModel?: DeployedModel;

  /**
   * A map from a DeployedModel's ID to the percentage of this Endpoint's
   * traffic that should be forwarded to that DeployedModel.
   *
   * If this field is non-empty, then the Endpoint's
   * [traffic_split][google.cloud.aiplatform.v1beta1.Endpoint.traffic_split]
   * will be overwritten with it. To refer to the ID of the just being deployed
   * Model, a "0" should be used, and the actual ID of the new DeployedModel
   * will be filled in its place by this method. The traffic percentage values
   * must add up to 100.
   *
   * If this field is empty, then the Endpoint's
   * [traffic_split][google.cloud.aiplatform.v1beta1.Endpoint.traffic_split] is
   * not updated.
   *
   * @generated from field: map<string, int32> traffic_split = 3;
   */
  trafficSplit: { [key: string]: number };
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.DeployModelRequest.
 * Use `create(DeployModelRequestSchema)` to create a new message.
 */
export const DeployModelRequestSchema: GenMessage<DeployModelRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 7);

/**
 * Response message for
 * [EndpointService.DeployModel][google.cloud.aiplatform.v1beta1.EndpointService.DeployModel].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.DeployModelResponse
 */
export type DeployModelResponse = Message<"google.cloud.aiplatform.v1beta1.DeployModelResponse"> & {
  /**
   * The DeployedModel that had been deployed in the Endpoint.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.DeployedModel deployed_model = 1;
   */
  deployedModel?: DeployedModel;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.DeployModelResponse.
 * Use `create(DeployModelResponseSchema)` to create a new message.
 */
export const DeployModelResponseSchema: GenMessage<DeployModelResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 8);

/**
 * Runtime operation information for
 * [EndpointService.DeployModel][google.cloud.aiplatform.v1beta1.EndpointService.DeployModel].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.DeployModelOperationMetadata
 */
export type DeployModelOperationMetadata = Message<"google.cloud.aiplatform.v1beta1.DeployModelOperationMetadata"> & {
  /**
   * The operation generic information.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.GenericOperationMetadata generic_metadata = 1;
   */
  genericMetadata?: GenericOperationMetadata;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.DeployModelOperationMetadata.
 * Use `create(DeployModelOperationMetadataSchema)` to create a new message.
 */
export const DeployModelOperationMetadataSchema: GenMessage<DeployModelOperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 9);

/**
 * Request message for
 * [EndpointService.UndeployModel][google.cloud.aiplatform.v1beta1.EndpointService.UndeployModel].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.UndeployModelRequest
 */
export type UndeployModelRequest = Message<"google.cloud.aiplatform.v1beta1.UndeployModelRequest"> & {
  /**
   * Required. The name of the Endpoint resource from which to undeploy a Model.
   * Format:
   * `projects/{project}/locations/{location}/endpoints/{endpoint}`
   *
   * @generated from field: string endpoint = 1;
   */
  endpoint: string;

  /**
   * Required. The ID of the DeployedModel to be undeployed from the Endpoint.
   *
   * @generated from field: string deployed_model_id = 2;
   */
  deployedModelId: string;

  /**
   * If this field is provided, then the Endpoint's
   * [traffic_split][google.cloud.aiplatform.v1beta1.Endpoint.traffic_split]
   * will be overwritten with it. If last DeployedModel is being undeployed from
   * the Endpoint, the [Endpoint.traffic_split] will always end up empty when
   * this call returns. A DeployedModel will be successfully undeployed only if
   * it doesn't have any traffic assigned to it when this method executes, or if
   * this field unassigns any traffic to it.
   *
   * @generated from field: map<string, int32> traffic_split = 3;
   */
  trafficSplit: { [key: string]: number };
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.UndeployModelRequest.
 * Use `create(UndeployModelRequestSchema)` to create a new message.
 */
export const UndeployModelRequestSchema: GenMessage<UndeployModelRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 10);

/**
 * Response message for
 * [EndpointService.UndeployModel][google.cloud.aiplatform.v1beta1.EndpointService.UndeployModel].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.UndeployModelResponse
 */
export type UndeployModelResponse = Message<"google.cloud.aiplatform.v1beta1.UndeployModelResponse"> & {
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.UndeployModelResponse.
 * Use `create(UndeployModelResponseSchema)` to create a new message.
 */
export const UndeployModelResponseSchema: GenMessage<UndeployModelResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 11);

/**
 * Runtime operation information for
 * [EndpointService.UndeployModel][google.cloud.aiplatform.v1beta1.EndpointService.UndeployModel].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.UndeployModelOperationMetadata
 */
export type UndeployModelOperationMetadata = Message<"google.cloud.aiplatform.v1beta1.UndeployModelOperationMetadata"> & {
  /**
   * The operation generic information.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.GenericOperationMetadata generic_metadata = 1;
   */
  genericMetadata?: GenericOperationMetadata;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.UndeployModelOperationMetadata.
 * Use `create(UndeployModelOperationMetadataSchema)` to create a new message.
 */
export const UndeployModelOperationMetadataSchema: GenMessage<UndeployModelOperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 12);

/**
 * Request message for
 * [EndpointService.MutateDeployedModel][google.cloud.aiplatform.v1beta1.EndpointService.MutateDeployedModel].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.MutateDeployedModelRequest
 */
export type MutateDeployedModelRequest = Message<"google.cloud.aiplatform.v1beta1.MutateDeployedModelRequest"> & {
  /**
   * Required. The name of the Endpoint resource into which to mutate a
   * DeployedModel. Format:
   * `projects/{project}/locations/{location}/endpoints/{endpoint}`
   *
   * @generated from field: string endpoint = 1;
   */
  endpoint: string;

  /**
   * Required. The DeployedModel to be mutated within the Endpoint. Only the
   * following fields can be mutated:
   *
   * * `min_replica_count` in either
   * [DedicatedResources][google.cloud.aiplatform.v1beta1.DedicatedResources] or
   * [AutomaticResources][google.cloud.aiplatform.v1beta1.AutomaticResources]
   * * `max_replica_count` in either
   * [DedicatedResources][google.cloud.aiplatform.v1beta1.DedicatedResources] or
   * [AutomaticResources][google.cloud.aiplatform.v1beta1.AutomaticResources]
   * * [autoscaling_metric_specs][google.cloud.aiplatform.v1beta1.DedicatedResources.autoscaling_metric_specs]
   * * `disable_container_logging` (v1 only)
   * * `enable_container_logging` (v1beta1 only)
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.DeployedModel deployed_model = 2;
   */
  deployedModel?: DeployedModel;

  /**
   * Required. The update mask applies to the resource. See
   * [google.protobuf.FieldMask][google.protobuf.FieldMask].
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 4;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.MutateDeployedModelRequest.
 * Use `create(MutateDeployedModelRequestSchema)` to create a new message.
 */
export const MutateDeployedModelRequestSchema: GenMessage<MutateDeployedModelRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 13);

/**
 * Response message for
 * [EndpointService.MutateDeployedModel][google.cloud.aiplatform.v1beta1.EndpointService.MutateDeployedModel].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.MutateDeployedModelResponse
 */
export type MutateDeployedModelResponse = Message<"google.cloud.aiplatform.v1beta1.MutateDeployedModelResponse"> & {
  /**
   * The DeployedModel that's being mutated.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.DeployedModel deployed_model = 1;
   */
  deployedModel?: DeployedModel;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.MutateDeployedModelResponse.
 * Use `create(MutateDeployedModelResponseSchema)` to create a new message.
 */
export const MutateDeployedModelResponseSchema: GenMessage<MutateDeployedModelResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 14);

/**
 * Runtime operation information for
 * [EndpointService.MutateDeployedModel][google.cloud.aiplatform.v1beta1.EndpointService.MutateDeployedModel].
 *
 * @generated from message google.cloud.aiplatform.v1beta1.MutateDeployedModelOperationMetadata
 */
export type MutateDeployedModelOperationMetadata = Message<"google.cloud.aiplatform.v1beta1.MutateDeployedModelOperationMetadata"> & {
  /**
   * The operation generic information.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.GenericOperationMetadata generic_metadata = 1;
   */
  genericMetadata?: GenericOperationMetadata;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.MutateDeployedModelOperationMetadata.
 * Use `create(MutateDeployedModelOperationMetadataSchema)` to create a new message.
 */
export const MutateDeployedModelOperationMetadataSchema: GenMessage<MutateDeployedModelOperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 15);

/**
 * A service for managing Vertex AI's Endpoints.
 *
 * @generated from service google.cloud.aiplatform.v1beta1.EndpointService
 */
export const EndpointService: GenService<{
  /**
   * Creates an Endpoint.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.EndpointService.CreateEndpoint
   */
  createEndpoint: {
    methodKind: "unary";
    input: typeof CreateEndpointRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Gets an Endpoint.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.EndpointService.GetEndpoint
   */
  getEndpoint: {
    methodKind: "unary";
    input: typeof GetEndpointRequestSchema;
    output: typeof EndpointSchema;
  },
  /**
   * Lists Endpoints in a Location.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.EndpointService.ListEndpoints
   */
  listEndpoints: {
    methodKind: "unary";
    input: typeof ListEndpointsRequestSchema;
    output: typeof ListEndpointsResponseSchema;
  },
  /**
   * Updates an Endpoint.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.EndpointService.UpdateEndpoint
   */
  updateEndpoint: {
    methodKind: "unary";
    input: typeof UpdateEndpointRequestSchema;
    output: typeof EndpointSchema;
  },
  /**
   * Deletes an Endpoint.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.EndpointService.DeleteEndpoint
   */
  deleteEndpoint: {
    methodKind: "unary";
    input: typeof DeleteEndpointRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Deploys a Model into this Endpoint, creating a DeployedModel within it.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.EndpointService.DeployModel
   */
  deployModel: {
    methodKind: "unary";
    input: typeof DeployModelRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Undeploys a Model from an Endpoint, removing a DeployedModel from it, and
   * freeing all resources it's using.
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.EndpointService.UndeployModel
   */
  undeployModel: {
    methodKind: "unary";
    input: typeof UndeployModelRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Updates an existing deployed model. Updatable fields include
   * `min_replica_count`, `max_replica_count`, `autoscaling_metric_specs`,
   * `disable_container_logging` (v1 only), and `enable_container_logging`
   * (v1beta1 only).
   *
   * @generated from rpc google.cloud.aiplatform.v1beta1.EndpointService.MutateDeployedModel
   */
  mutateDeployedModel: {
    methodKind: "unary";
    input: typeof MutateDeployedModelRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_aiplatform_v1beta1_endpoint_service, 0);
