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
// @generated from file google/cloud/dialogflow/cx/v3beta1/playbook.proto (package google.cloud.dialogflow.cx.v3beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../../api/annotations_pb";
import { file_google_api_client } from "../../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../../api/resource_pb";
import type { Example } from "./example_pb";
import { file_google_cloud_dialogflow_cx_v3beta1_example } from "./example_pb";
import type { LlmModelSettings } from "./generative_settings_pb";
import { file_google_cloud_dialogflow_cx_v3beta1_generative_settings } from "./generative_settings_pb";
import type { ParameterDefinition } from "./parameter_definition_pb";
import { file_google_cloud_dialogflow_cx_v3beta1_parameter_definition } from "./parameter_definition_pb";
import type { EmptySchema, FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/dialogflow/cx/v3beta1/playbook.proto.
 */
export const file_google_cloud_dialogflow_cx_v3beta1_playbook: GenFile = /*@__PURE__*/
  fileDesc("CjFnb29nbGUvY2xvdWQvZGlhbG9nZmxvdy9jeC92M2JldGExL3BsYXlib29rLnByb3RvEiJnb29nbGUuY2xvdWQuZGlhbG9nZmxvdy5jeC52M2JldGExIpgBChVDcmVhdGVQbGF5Ym9va1JlcXVlc3QSOgoGcGFyZW50GAEgASgJQirgQQL6QSQSImRpYWxvZ2Zsb3cuZ29vZ2xlYXBpcy5jb20vUGxheWJvb2sSQwoIcGxheWJvb2sYAiABKAsyLC5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy5jeC52M2JldGExLlBsYXlib29rQgPgQQIiUQoVRGVsZXRlUGxheWJvb2tSZXF1ZXN0EjgKBG5hbWUYASABKAlCKuBBAvpBJAoiZGlhbG9nZmxvdy5nb29nbGVhcGlzLmNvbS9QbGF5Ym9vayJ5ChRMaXN0UGxheWJvb2tzUmVxdWVzdBI6CgZwYXJlbnQYASABKAlCKuBBAvpBJBIiZGlhbG9nZmxvdy5nb29nbGVhcGlzLmNvbS9QbGF5Ym9vaxIRCglwYWdlX3NpemUYAiABKAUSEgoKcGFnZV90b2tlbhgDIAEoCSJxChVMaXN0UGxheWJvb2tzUmVzcG9uc2USPwoJcGxheWJvb2tzGAEgAygLMiwuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5QbGF5Ym9vaxIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkiTgoSR2V0UGxheWJvb2tSZXF1ZXN0EjgKBG5hbWUYASABKAlCKuBBAvpBJAoiZGlhbG9nZmxvdy5nb29nbGVhcGlzLmNvbS9QbGF5Ym9vayKNAQoVVXBkYXRlUGxheWJvb2tSZXF1ZXN0EkMKCHBsYXlib29rGAEgASgLMiwuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5QbGF5Ym9va0ID4EECEi8KC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFzayK3CAoIUGxheWJvb2sSDAoEbmFtZRgBIAEoCRIZCgxkaXNwbGF5X25hbWUYAiABKAlCA+BBAhIRCgRnb2FsGAMgASgJQgPgQQISYQobaW5wdXRfcGFyYW1ldGVyX2RlZmluaXRpb25zGAUgAygLMjcuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5QYXJhbWV0ZXJEZWZpbml0aW9uQgPgQQESYgocb3V0cHV0X3BhcmFtZXRlcl9kZWZpbml0aW9ucxgGIAMoCzI3Lmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LmN4LnYzYmV0YTEuUGFyYW1ldGVyRGVmaW5pdGlvbkID4EEBEk0KC2luc3RydWN0aW9uGBEgASgLMjguZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5QbGF5Ym9vay5JbnN0cnVjdGlvbhIYCgt0b2tlbl9jb3VudBgIIAEoA0ID4EEDEjQKC2NyZWF0ZV90aW1lGAkgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjQKC3VwZGF0ZV90aW1lGAogASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEkgKFHJlZmVyZW5jZWRfcGxheWJvb2tzGAsgAygJQirgQQP6QSQKImRpYWxvZ2Zsb3cuZ29vZ2xlYXBpcy5jb20vUGxheWJvb2sSQAoQcmVmZXJlbmNlZF9mbG93cxgMIAMoCUIm4EED+kEgCh5kaWFsb2dmbG93Lmdvb2dsZWFwaXMuY29tL0Zsb3cSQAoQcmVmZXJlbmNlZF90b29scxgNIAMoCUIm4EEB+kEgCh5kaWFsb2dmbG93Lmdvb2dsZWFwaXMuY29tL1Rvb2wSVQoSbGxtX21vZGVsX3NldHRpbmdzGA4gASgLMjQuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5MbG1Nb2RlbFNldHRpbmdzQgPgQQEaZwoEU3RlcBIOCgR0ZXh0GAEgASgJSAASQAoFc3RlcHMYAiADKAsyMS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy5jeC52M2JldGExLlBsYXlib29rLlN0ZXBCDQoLaW5zdHJ1Y3Rpb24aTwoLSW5zdHJ1Y3Rpb24SQAoFc3RlcHMYAiADKAsyMS5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy5jeC52M2JldGExLlBsYXlib29rLlN0ZXA6dOpBcQoiZGlhbG9nZmxvdy5nb29nbGVhcGlzLmNvbS9QbGF5Ym9vaxJLcHJvamVjdHMve3Byb2plY3R9L2xvY2F0aW9ucy97bG9jYXRpb259L2FnZW50cy97YWdlbnR9L3BsYXlib29rcy97cGxheWJvb2t9IrUBChxDcmVhdGVQbGF5Ym9va1ZlcnNpb25SZXF1ZXN0EkEKBnBhcmVudBgBIAEoCUIx4EEC+kErEilkaWFsb2dmbG93Lmdvb2dsZWFwaXMuY29tL1BsYXlib29rVmVyc2lvbhJSChBwbGF5Ym9va192ZXJzaW9uGAIgASgLMjMuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5QbGF5Ym9va1ZlcnNpb25CA+BBAiKtAwoPUGxheWJvb2tWZXJzaW9uEgwKBG5hbWUYASABKAkSGAoLZGVzY3JpcHRpb24YAiABKAlCA+BBARJDCghwbGF5Ym9vaxgDIAEoCzIsLmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LmN4LnYzYmV0YTEuUGxheWJvb2tCA+BBAxJCCghleGFtcGxlcxgEIAMoCzIrLmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LmN4LnYzYmV0YTEuRXhhbXBsZUID4EEDEjQKC3VwZGF0ZV90aW1lGAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDOrIB6kGuAQopZGlhbG9nZmxvdy5nb29nbGVhcGlzLmNvbS9QbGF5Ym9va1ZlcnNpb24SXnByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9hZ2VudHMve2FnZW50fS9wbGF5Ym9va3Mve3BsYXlib29rfS92ZXJzaW9ucy97dmVyc2lvbn0qEHBsYXlib29rVmVyc2lvbnMyD3BsYXlib29rVmVyc2lvbiJcChlHZXRQbGF5Ym9va1ZlcnNpb25SZXF1ZXN0Ej8KBG5hbWUYASABKAlCMeBBAvpBKwopZGlhbG9nZmxvdy5nb29nbGVhcGlzLmNvbS9QbGF5Ym9va1ZlcnNpb24ikQEKG0xpc3RQbGF5Ym9va1ZlcnNpb25zUmVxdWVzdBJBCgZwYXJlbnQYASABKAlCMeBBAvpBKxIpZGlhbG9nZmxvdy5nb29nbGVhcGlzLmNvbS9QbGF5Ym9va1ZlcnNpb24SFgoJcGFnZV9zaXplGAIgASgFQgPgQQESFwoKcGFnZV90b2tlbhgDIAEoCUID4EEBIocBChxMaXN0UGxheWJvb2tWZXJzaW9uc1Jlc3BvbnNlEk4KEXBsYXlib29rX3ZlcnNpb25zGAEgAygLMjMuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5QbGF5Ym9va1ZlcnNpb24SFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJIl8KHERlbGV0ZVBsYXlib29rVmVyc2lvblJlcXVlc3QSPwoEbmFtZRgBIAEoCUIx4EEC+kErCilkaWFsb2dmbG93Lmdvb2dsZWFwaXMuY29tL1BsYXlib29rVmVyc2lvbjLFEAoJUGxheWJvb2tzEtoBCg5DcmVhdGVQbGF5Ym9vaxI5Lmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LmN4LnYzYmV0YTEuQ3JlYXRlUGxheWJvb2tSZXF1ZXN0GiwuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5QbGF5Ym9vayJf2kEPcGFyZW50LHBsYXlib29rgtPkkwJHOghwbGF5Ym9vayI7L3YzYmV0YTEve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2FnZW50cy8qfS9wbGF5Ym9va3MSrwEKDkRlbGV0ZVBsYXlib29rEjkuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5EZWxldGVQbGF5Ym9va1JlcXVlc3QaFi5nb29nbGUucHJvdG9idWYuRW1wdHkiStpBBG5hbWWC0+STAj0qOy92M2JldGExL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovYWdlbnRzLyovcGxheWJvb2tzLyp9EtIBCg1MaXN0UGxheWJvb2tzEjguZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5MaXN0UGxheWJvb2tzUmVxdWVzdBo5Lmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LmN4LnYzYmV0YTEuTGlzdFBsYXlib29rc1Jlc3BvbnNlIkzaQQZwYXJlbnSC0+STAj0SOy92M2JldGExL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9hZ2VudHMvKn0vcGxheWJvb2tzEr8BCgtHZXRQbGF5Ym9vaxI2Lmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LmN4LnYzYmV0YTEuR2V0UGxheWJvb2tSZXF1ZXN0GiwuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5QbGF5Ym9vayJK2kEEbmFtZYLT5JMCPRI7L3YzYmV0YTEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9hZ2VudHMvKi9wbGF5Ym9va3MvKn0S6AEKDlVwZGF0ZVBsYXlib29rEjkuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5VcGRhdGVQbGF5Ym9va1JlcXVlc3QaLC5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy5jeC52M2JldGExLlBsYXlib29rIm3aQRRwbGF5Ym9vayx1cGRhdGVfbWFza4LT5JMCUDoIcGxheWJvb2syRC92M2JldGExL3twbGF5Ym9vay5uYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovYWdlbnRzLyovcGxheWJvb2tzLyp9EooCChVDcmVhdGVQbGF5Ym9va1ZlcnNpb24SQC5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy5jeC52M2JldGExLkNyZWF0ZVBsYXlib29rVmVyc2lvblJlcXVlc3QaMy5nb29nbGUuY2xvdWQuZGlhbG9nZmxvdy5jeC52M2JldGExLlBsYXlib29rVmVyc2lvbiJ62kEXcGFyZW50LHBsYXlib29rX3ZlcnNpb26C0+STAlo6EHBsYXlib29rX3ZlcnNpb24iRi92M2JldGExL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9hZ2VudHMvKi9wbGF5Ym9va3MvKn0vdmVyc2lvbnMS3wEKEkdldFBsYXlib29rVmVyc2lvbhI9Lmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LmN4LnYzYmV0YTEuR2V0UGxheWJvb2tWZXJzaW9uUmVxdWVzdBozLmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LmN4LnYzYmV0YTEuUGxheWJvb2tWZXJzaW9uIlXaQQRuYW1lgtPkkwJIEkYvdjNiZXRhMS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2FnZW50cy8qL3BsYXlib29rcy8qL3ZlcnNpb25zLyp9EvIBChRMaXN0UGxheWJvb2tWZXJzaW9ucxI/Lmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LmN4LnYzYmV0YTEuTGlzdFBsYXlib29rVmVyc2lvbnNSZXF1ZXN0GkAuZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMS5MaXN0UGxheWJvb2tWZXJzaW9uc1Jlc3BvbnNlIlfaQQZwYXJlbnSC0+STAkgSRi92M2JldGExL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9hZ2VudHMvKi9wbGF5Ym9va3MvKn0vdmVyc2lvbnMSyAEKFURlbGV0ZVBsYXlib29rVmVyc2lvbhJALmdvb2dsZS5jbG91ZC5kaWFsb2dmbG93LmN4LnYzYmV0YTEuRGVsZXRlUGxheWJvb2tWZXJzaW9uUmVxdWVzdBoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSJV2kEEbmFtZYLT5JMCSCpGL3YzYmV0YTEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9hZ2VudHMvKi9wbGF5Ym9va3MvKi92ZXJzaW9ucy8qfRp4ykEZZGlhbG9nZmxvdy5nb29nbGVhcGlzLmNvbdJBWWh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm0saHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kaWFsb2dmbG93Qp4BCiZjb20uZ29vZ2xlLmNsb3VkLmRpYWxvZ2Zsb3cuY3gudjNiZXRhMUINUGxheWJvb2tQcm90b1ABWjZjbG91ZC5nb29nbGUuY29tL2dvL2RpYWxvZ2Zsb3cvY3gvYXBpdjNiZXRhMS9jeHBiO2N4cGL4AQGiAgJERqoCIkdvb2dsZS5DbG91ZC5EaWFsb2dmbG93LkN4LlYzQmV0YTFiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_dialogflow_cx_v3beta1_example, file_google_cloud_dialogflow_cx_v3beta1_generative_settings, file_google_cloud_dialogflow_cx_v3beta1_parameter_definition, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * The request message for
 * [Playbooks.CreatePlaybook][google.cloud.dialogflow.cx.v3beta1.Playbooks.CreatePlaybook].
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.CreatePlaybookRequest
 */
export type CreatePlaybookRequest = Message<"google.cloud.dialogflow.cx.v3beta1.CreatePlaybookRequest"> & {
  /**
   * Required. The agent to create a playbook for.
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The playbook to create.
   *
   * @generated from field: google.cloud.dialogflow.cx.v3beta1.Playbook playbook = 2;
   */
  playbook?: Playbook;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.CreatePlaybookRequest.
 * Use `create(CreatePlaybookRequestSchema)` to create a new message.
 */
export const CreatePlaybookRequestSchema: GenMessage<CreatePlaybookRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 0);

/**
 * The request message for
 * [Playbooks.DeletePlaybook][google.cloud.dialogflow.cx.v3beta1.Playbooks.DeletePlaybook].
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.DeletePlaybookRequest
 */
export type DeletePlaybookRequest = Message<"google.cloud.dialogflow.cx.v3beta1.DeletePlaybookRequest"> & {
  /**
   * Required. The name of the playbook to delete.
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   * ID>/playbooks/<Playbook ID>`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.DeletePlaybookRequest.
 * Use `create(DeletePlaybookRequestSchema)` to create a new message.
 */
export const DeletePlaybookRequestSchema: GenMessage<DeletePlaybookRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 1);

/**
 * The request message for
 * [Playbooks.ListPlaybooks][google.cloud.dialogflow.cx.v3beta1.Playbooks.ListPlaybooks].
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.ListPlaybooksRequest
 */
export type ListPlaybooksRequest = Message<"google.cloud.dialogflow.cx.v3beta1.ListPlaybooksRequest"> & {
  /**
   * Required. The agent to list playbooks from.
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The maximum number of items to return in a single page. By default 100 and
   * at most 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * The next_page_token value returned from a previous list request.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.ListPlaybooksRequest.
 * Use `create(ListPlaybooksRequestSchema)` to create a new message.
 */
export const ListPlaybooksRequestSchema: GenMessage<ListPlaybooksRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 2);

/**
 * The response message for
 * [Playbooks.ListPlaybooks][google.cloud.dialogflow.cx.v3beta1.Playbooks.ListPlaybooks].
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.ListPlaybooksResponse
 */
export type ListPlaybooksResponse = Message<"google.cloud.dialogflow.cx.v3beta1.ListPlaybooksResponse"> & {
  /**
   * The list of playbooks. There will be a maximum number of items returned
   * based on the page_size field in the request.
   *
   * @generated from field: repeated google.cloud.dialogflow.cx.v3beta1.Playbook playbooks = 1;
   */
  playbooks: Playbook[];

  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.ListPlaybooksResponse.
 * Use `create(ListPlaybooksResponseSchema)` to create a new message.
 */
export const ListPlaybooksResponseSchema: GenMessage<ListPlaybooksResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 3);

/**
 * The request message for
 * [Playbooks.GetPlaybook][google.cloud.dialogflow.cx.v3beta1.Playbooks.GetPlaybook].
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.GetPlaybookRequest
 */
export type GetPlaybookRequest = Message<"google.cloud.dialogflow.cx.v3beta1.GetPlaybookRequest"> & {
  /**
   * Required. The name of the playbook.
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   * ID>/playbooks/<Playbook ID>`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.GetPlaybookRequest.
 * Use `create(GetPlaybookRequestSchema)` to create a new message.
 */
export const GetPlaybookRequestSchema: GenMessage<GetPlaybookRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 4);

/**
 * The request message for
 * [Playbooks.UpdatePlaybook][google.cloud.dialogflow.cx.v3beta1.Playbooks.UpdatePlaybook].
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.UpdatePlaybookRequest
 */
export type UpdatePlaybookRequest = Message<"google.cloud.dialogflow.cx.v3beta1.UpdatePlaybookRequest"> & {
  /**
   * Required. The playbook to update.
   *
   * @generated from field: google.cloud.dialogflow.cx.v3beta1.Playbook playbook = 1;
   */
  playbook?: Playbook;

  /**
   * The mask to control which fields get updated. If the mask is not present,
   * all fields will be updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.UpdatePlaybookRequest.
 * Use `create(UpdatePlaybookRequestSchema)` to create a new message.
 */
export const UpdatePlaybookRequestSchema: GenMessage<UpdatePlaybookRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 5);

/**
 * Playbook is the basic building block to instruct the LLM how to execute a
 * certain task.
 *
 * A playbook consists of a goal to accomplish, an optional list of step by step
 * instructions (the step instruction may refers to name of the custom or
 * default plugin tools to use) to perform the task,
 * a list of contextual input data to be passed in at the beginning of the
 * invoked, and a list of output parameters to store the playbook result.
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.Playbook
 */
export type Playbook = Message<"google.cloud.dialogflow.cx.v3beta1.Playbook"> & {
  /**
   * The unique identifier of the playbook.
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   * ID>/playbooks/<Playbook ID>`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The human-readable name of the playbook, unique within an agent.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Required. High level description of the goal the playbook intend to
   * accomplish.
   *
   * @generated from field: string goal = 3;
   */
  goal: string;

  /**
   * Optional. Defined structured input parameters for this playbook.
   *
   * @generated from field: repeated google.cloud.dialogflow.cx.v3beta1.ParameterDefinition input_parameter_definitions = 5;
   */
  inputParameterDefinitions: ParameterDefinition[];

  /**
   * Optional. Defined structured output parameters for this playbook.
   *
   * @generated from field: repeated google.cloud.dialogflow.cx.v3beta1.ParameterDefinition output_parameter_definitions = 6;
   */
  outputParameterDefinitions: ParameterDefinition[];

  /**
   * Instruction to accomplish target goal.
   *
   * @generated from field: google.cloud.dialogflow.cx.v3beta1.Playbook.Instruction instruction = 17;
   */
  instruction?: Playbook_Instruction;

  /**
   * Output only. Estimated number of tokes current playbook takes when sent to
   * the LLM.
   *
   * @generated from field: int64 token_count = 8;
   */
  tokenCount: bigint;

  /**
   * Output only. The timestamp of initial playbook creation.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 9;
   */
  createTime?: Timestamp;

  /**
   * Output only. Last time the playbook version was updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 10;
   */
  updateTime?: Timestamp;

  /**
   * Output only. The resource name of other playbooks referenced by the current
   * playbook in the instructions.
   *
   * @generated from field: repeated string referenced_playbooks = 11;
   */
  referencedPlaybooks: string[];

  /**
   * Output only. The resource name of flows referenced by the current playbook
   * in the instructions.
   *
   * @generated from field: repeated string referenced_flows = 12;
   */
  referencedFlows: string[];

  /**
   * Optional. The resource name of tools referenced by the current playbook in
   * the instructions. If not provided explicitly, they are will
   * be implied using the tool being referenced in goal and steps.
   *
   * @generated from field: repeated string referenced_tools = 13;
   */
  referencedTools: string[];

  /**
   * Optional. Llm model settings for the playbook.
   *
   * @generated from field: google.cloud.dialogflow.cx.v3beta1.LlmModelSettings llm_model_settings = 14;
   */
  llmModelSettings?: LlmModelSettings;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.Playbook.
 * Use `create(PlaybookSchema)` to create a new message.
 */
export const PlaybookSchema: GenMessage<Playbook> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 6);

/**
 * Message of single step execution.
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.Playbook.Step
 */
export type Playbook_Step = Message<"google.cloud.dialogflow.cx.v3beta1.Playbook.Step"> & {
  /**
   * Instruction on how to execute current step.
   *
   * @generated from oneof google.cloud.dialogflow.cx.v3beta1.Playbook.Step.instruction
   */
  instruction: {
    /**
     * Step instruction in text format.
     *
     * @generated from field: string text = 1;
     */
    value: string;
    case: "text";
  } | { case: undefined; value?: undefined };

  /**
   * Sub-processing needed to execute the current step.
   *
   * @generated from field: repeated google.cloud.dialogflow.cx.v3beta1.Playbook.Step steps = 2;
   */
  steps: Playbook_Step[];
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.Playbook.Step.
 * Use `create(Playbook_StepSchema)` to create a new message.
 */
export const Playbook_StepSchema: GenMessage<Playbook_Step> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 6, 0);

/**
 * Message of the Instruction of the playbook.
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.Playbook.Instruction
 */
export type Playbook_Instruction = Message<"google.cloud.dialogflow.cx.v3beta1.Playbook.Instruction"> & {
  /**
   * Ordered list of step by step execution instructions to accomplish
   * target goal.
   *
   * @generated from field: repeated google.cloud.dialogflow.cx.v3beta1.Playbook.Step steps = 2;
   */
  steps: Playbook_Step[];
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.Playbook.Instruction.
 * Use `create(Playbook_InstructionSchema)` to create a new message.
 */
export const Playbook_InstructionSchema: GenMessage<Playbook_Instruction> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 6, 1);

/**
 * The request message for
 * [Playbooks.CreatePlaybookVersion][google.cloud.dialogflow.cx.v3beta1.Playbooks.CreatePlaybookVersion].
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.CreatePlaybookVersionRequest
 */
export type CreatePlaybookVersionRequest = Message<"google.cloud.dialogflow.cx.v3beta1.CreatePlaybookVersionRequest"> & {
  /**
   * Required. The playbook to create a version for.
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   * ID>/playbooks/<Playbook ID>`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The playbook version to create.
   *
   * @generated from field: google.cloud.dialogflow.cx.v3beta1.PlaybookVersion playbook_version = 2;
   */
  playbookVersion?: PlaybookVersion;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.CreatePlaybookVersionRequest.
 * Use `create(CreatePlaybookVersionRequestSchema)` to create a new message.
 */
export const CreatePlaybookVersionRequestSchema: GenMessage<CreatePlaybookVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 7);

/**
 * Playbook version is a snapshot of the playbook at certain timestamp.
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.PlaybookVersion
 */
export type PlaybookVersion = Message<"google.cloud.dialogflow.cx.v3beta1.PlaybookVersion"> & {
  /**
   * The unique identifier of the playbook version.
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   * ID>/playbooks/<Playbook ID>/versions/<Version ID>`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. The description of the playbook version.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * Output only. Snapshot of the playbook when the playbook version is created.
   *
   * @generated from field: google.cloud.dialogflow.cx.v3beta1.Playbook playbook = 3;
   */
  playbook?: Playbook;

  /**
   * Output only. Snapshot of the examples belonging to the playbook when the
   * playbook version is created.
   *
   * @generated from field: repeated google.cloud.dialogflow.cx.v3beta1.Example examples = 4;
   */
  examples: Example[];

  /**
   * Output only. Last time the playbook version was created or modified.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 5;
   */
  updateTime?: Timestamp;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.PlaybookVersion.
 * Use `create(PlaybookVersionSchema)` to create a new message.
 */
export const PlaybookVersionSchema: GenMessage<PlaybookVersion> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 8);

/**
 * The request message for
 * [Playbooks.GetPlaybookVersion][google.cloud.dialogflow.cx.v3beta1.Playbooks.GetPlaybookVersion].
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.GetPlaybookVersionRequest
 */
export type GetPlaybookVersionRequest = Message<"google.cloud.dialogflow.cx.v3beta1.GetPlaybookVersionRequest"> & {
  /**
   * Required. The name of the playbook version.
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   * ID>/playbooks/<Playbook ID>/versions/<Version ID>`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.GetPlaybookVersionRequest.
 * Use `create(GetPlaybookVersionRequestSchema)` to create a new message.
 */
export const GetPlaybookVersionRequestSchema: GenMessage<GetPlaybookVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 9);

/**
 * The request message for
 * [Playbooks.ListPlaybookVersions][google.cloud.dialogflow.cx.v3beta1.Playbooks.ListPlaybookVersions].
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.ListPlaybookVersionsRequest
 */
export type ListPlaybookVersionsRequest = Message<"google.cloud.dialogflow.cx.v3beta1.ListPlaybookVersionsRequest"> & {
  /**
   * Required. The playbook to list versions for.
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   * ID>/playbooks/<Playbook ID>`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. The maximum number of items to return in a single page. By
   * default 100 and at most 1000.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. The next_page_token value returned from a previous list request.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.ListPlaybookVersionsRequest.
 * Use `create(ListPlaybookVersionsRequestSchema)` to create a new message.
 */
export const ListPlaybookVersionsRequestSchema: GenMessage<ListPlaybookVersionsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 10);

/**
 * The response message for
 * [Playbooks.ListPlaybookVersions][google.cloud.dialogflow.cx.v3beta1.Playbooks.ListPlaybookVersions].
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.ListPlaybookVersionsResponse
 */
export type ListPlaybookVersionsResponse = Message<"google.cloud.dialogflow.cx.v3beta1.ListPlaybookVersionsResponse"> & {
  /**
   * The list of playbook version. There will be a maximum number of items
   * returned based on the page_size field in the request.
   *
   * @generated from field: repeated google.cloud.dialogflow.cx.v3beta1.PlaybookVersion playbook_versions = 1;
   */
  playbookVersions: PlaybookVersion[];

  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.ListPlaybookVersionsResponse.
 * Use `create(ListPlaybookVersionsResponseSchema)` to create a new message.
 */
export const ListPlaybookVersionsResponseSchema: GenMessage<ListPlaybookVersionsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 11);

/**
 * The request message for
 * [Playbooks.DeletePlaybookVersion][google.cloud.dialogflow.cx.v3beta1.Playbooks.DeletePlaybookVersion].
 *
 * @generated from message google.cloud.dialogflow.cx.v3beta1.DeletePlaybookVersionRequest
 */
export type DeletePlaybookVersionRequest = Message<"google.cloud.dialogflow.cx.v3beta1.DeletePlaybookVersionRequest"> & {
  /**
   * Required. The name of the playbook version to delete.
   * Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   * ID>/playbooks/<Playbook ID>/versions/<Version ID>`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.dialogflow.cx.v3beta1.DeletePlaybookVersionRequest.
 * Use `create(DeletePlaybookVersionRequestSchema)` to create a new message.
 */
export const DeletePlaybookVersionRequestSchema: GenMessage<DeletePlaybookVersionRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 12);

/**
 * Service for managing
 * [Playbooks][google.cloud.dialogflow.cx.v3beta1.Playbook].
 *
 * @generated from service google.cloud.dialogflow.cx.v3beta1.Playbooks
 */
export const Playbooks: GenService<{
  /**
   * Creates a playbook in a specified agent.
   *
   * @generated from rpc google.cloud.dialogflow.cx.v3beta1.Playbooks.CreatePlaybook
   */
  createPlaybook: {
    methodKind: "unary";
    input: typeof CreatePlaybookRequestSchema;
    output: typeof PlaybookSchema;
  },
  /**
   * Deletes a specified playbook.
   *
   * @generated from rpc google.cloud.dialogflow.cx.v3beta1.Playbooks.DeletePlaybook
   */
  deletePlaybook: {
    methodKind: "unary";
    input: typeof DeletePlaybookRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Returns a list of playbooks in the specified agent.
   *
   * @generated from rpc google.cloud.dialogflow.cx.v3beta1.Playbooks.ListPlaybooks
   */
  listPlaybooks: {
    methodKind: "unary";
    input: typeof ListPlaybooksRequestSchema;
    output: typeof ListPlaybooksResponseSchema;
  },
  /**
   * Retrieves the specified Playbook.
   *
   * @generated from rpc google.cloud.dialogflow.cx.v3beta1.Playbooks.GetPlaybook
   */
  getPlaybook: {
    methodKind: "unary";
    input: typeof GetPlaybookRequestSchema;
    output: typeof PlaybookSchema;
  },
  /**
   * Updates the specified Playbook.
   *
   * @generated from rpc google.cloud.dialogflow.cx.v3beta1.Playbooks.UpdatePlaybook
   */
  updatePlaybook: {
    methodKind: "unary";
    input: typeof UpdatePlaybookRequestSchema;
    output: typeof PlaybookSchema;
  },
  /**
   * Creates a version for the specified Playbook.
   *
   * @generated from rpc google.cloud.dialogflow.cx.v3beta1.Playbooks.CreatePlaybookVersion
   */
  createPlaybookVersion: {
    methodKind: "unary";
    input: typeof CreatePlaybookVersionRequestSchema;
    output: typeof PlaybookVersionSchema;
  },
  /**
   * Retrieves the specified version of the Playbook.
   *
   * @generated from rpc google.cloud.dialogflow.cx.v3beta1.Playbooks.GetPlaybookVersion
   */
  getPlaybookVersion: {
    methodKind: "unary";
    input: typeof GetPlaybookVersionRequestSchema;
    output: typeof PlaybookVersionSchema;
  },
  /**
   * Lists versions for the specified Playbook.
   *
   * @generated from rpc google.cloud.dialogflow.cx.v3beta1.Playbooks.ListPlaybookVersions
   */
  listPlaybookVersions: {
    methodKind: "unary";
    input: typeof ListPlaybookVersionsRequestSchema;
    output: typeof ListPlaybookVersionsResponseSchema;
  },
  /**
   * Deletes the specified version of the Playbook.
   *
   * @generated from rpc google.cloud.dialogflow.cx.v3beta1.Playbooks.DeletePlaybookVersion
   */
  deletePlaybookVersion: {
    methodKind: "unary";
    input: typeof DeletePlaybookVersionRequestSchema;
    output: typeof EmptySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_dialogflow_cx_v3beta1_playbook, 0);
