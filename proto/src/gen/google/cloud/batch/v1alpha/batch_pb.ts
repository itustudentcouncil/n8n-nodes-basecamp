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
// @generated from file google/cloud/batch/v1alpha/batch.proto (package google.cloud.batch.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_field_info } from "../../../api/field_info_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Job, JobSchema } from "./job_pb";
import { file_google_cloud_batch_v1alpha_job } from "./job_pb";
import type { ResourceAllowance, ResourceAllowanceSchema } from "./resource_allowance_pb";
import { file_google_cloud_batch_v1alpha_resource_allowance } from "./resource_allowance_pb";
import type { Task, TaskSchema } from "./task_pb";
import { file_google_cloud_batch_v1alpha_task } from "./task_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";
import type { FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/batch/v1alpha/batch.proto.
 */
export const file_google_cloud_batch_v1alpha_batch: GenFile = /*@__PURE__*/
  fileDesc("CiZnb29nbGUvY2xvdWQvYmF0Y2gvdjFhbHBoYS9iYXRjaC5wcm90bxIaZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEioAEKEENyZWF0ZUpvYlJlcXVlc3QSMAoGcGFyZW50GAEgASgJQiDgQQL6QRoSGGJhdGNoLmdvb2dsZWFwaXMuY29tL0pvYhIOCgZqb2JfaWQYAiABKAkSMQoDam9iGAMgASgLMh8uZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEuSm9iQgPgQQISFwoKcmVxdWVzdF9pZBgEIAEoCUID4EEBIj8KDUdldEpvYlJlcXVlc3QSLgoEbmFtZRgBIAEoCUIg4EEC+kEaChhiYXRjaC5nb29nbGVhcGlzLmNvbS9Kb2IiTgoQRGVsZXRlSm9iUmVxdWVzdBIMCgRuYW1lGAEgASgJEhMKBnJlYXNvbhgCIAEoCUID4EEBEhcKCnJlcXVlc3RfaWQYBCABKAlCA+BBASJjChBDYW5jZWxKb2JSZXF1ZXN0Ei4KBG5hbWUYASABKAlCIOBBAvpBGgoYYmF0Y2guZ29vZ2xlYXBpcy5jb20vSm9iEh8KCnJlcXVlc3RfaWQYBCABKAlCC+BBAeKMz9cIAggBIhMKEUNhbmNlbEpvYlJlc3BvbnNlIpwBChBVcGRhdGVKb2JSZXF1ZXN0EjEKA2pvYhgBIAEoCzIfLmdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLkpvYkID4EECEjQKC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFza0ID4EECEh8KCnJlcXVlc3RfaWQYAyABKAlCC+BBAeKMz9cIAggBIm8KD0xpc3RKb2JzUmVxdWVzdBIOCgZwYXJlbnQYASABKAkSDgoGZmlsdGVyGAQgASgJEhUKCG9yZGVyX2J5GAUgASgJQgPgQQESEQoJcGFnZV9zaXplGAIgASgFEhIKCnBhZ2VfdG9rZW4YAyABKAkibwoQTGlzdEpvYnNSZXNwb25zZRItCgRqb2JzGAEgAygLMh8uZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEuSm9iEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCRITCgt1bnJlYWNoYWJsZRgDIAMoCSKTAQoQTGlzdFRhc2tzUmVxdWVzdBI2CgZwYXJlbnQYASABKAlCJuBBAvpBIAoeYmF0Y2guZ29vZ2xlYXBpcy5jb20vVGFza0dyb3VwEg4KBmZpbHRlchgCIAEoCRIQCghvcmRlcl9ieRgFIAEoCRIRCglwYWdlX3NpemUYAyABKAUSEgoKcGFnZV90b2tlbhgEIAEoCSJyChFMaXN0VGFza3NSZXNwb25zZRIvCgV0YXNrcxgBIAMoCzIgLmdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLlRhc2sSFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJEhMKC3VucmVhY2hhYmxlGAMgAygJIkEKDkdldFRhc2tSZXF1ZXN0Ei8KBG5hbWUYASABKAlCIeBBAvpBGwoZYmF0Y2guZ29vZ2xlYXBpcy5jb20vVGFzayLwAQoeQ3JlYXRlUmVzb3VyY2VBbGxvd2FuY2VSZXF1ZXN0Ej4KBnBhcmVudBgBIAEoCUIu4EEC+kEoEiZiYXRjaC5nb29nbGVhcGlzLmNvbS9SZXNvdXJjZUFsbG93YW5jZRIdChVyZXNvdXJjZV9hbGxvd2FuY2VfaWQYAiABKAkSTgoScmVzb3VyY2VfYWxsb3dhbmNlGAMgASgLMi0uZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEuUmVzb3VyY2VBbGxvd2FuY2VCA+BBAhIfCgpyZXF1ZXN0X2lkGAQgASgJQgvgQQHijM/XCAIIASJbChtHZXRSZXNvdXJjZUFsbG93YW5jZVJlcXVlc3QSPAoEbmFtZRgBIAEoCUIu4EEC+kEoCiZiYXRjaC5nb29nbGVhcGlzLmNvbS9SZXNvdXJjZUFsbG93YW5jZSKUAQoeRGVsZXRlUmVzb3VyY2VBbGxvd2FuY2VSZXF1ZXN0EjwKBG5hbWUYASABKAlCLuBBAvpBKAomYmF0Y2guZ29vZ2xlYXBpcy5jb20vUmVzb3VyY2VBbGxvd2FuY2USEwoGcmVhc29uGAIgASgJQgPgQQESHwoKcmVxdWVzdF9pZBgEIAEoCUIL4EEB4ozP1wgCCAEikAEKHUxpc3RSZXNvdXJjZUFsbG93YW5jZXNSZXF1ZXN0Ej4KBnBhcmVudBgBIAEoCUIu4EEC+kEoEiZiYXRjaC5nb29nbGVhcGlzLmNvbS9SZXNvdXJjZUFsbG93YW5jZRIWCglwYWdlX3NpemUYAiABKAVCA+BBARIXCgpwYWdlX3Rva2VuGAMgASgJQgPgQQEimgEKHkxpc3RSZXNvdXJjZUFsbG93YW5jZXNSZXNwb25zZRJKChNyZXNvdXJjZV9hbGxvd2FuY2VzGAEgAygLMi0uZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEuUmVzb3VyY2VBbGxvd2FuY2USFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJEhMKC3VucmVhY2hhYmxlGAMgAygJIscBCh5VcGRhdGVSZXNvdXJjZUFsbG93YW5jZVJlcXVlc3QSTgoScmVzb3VyY2VfYWxsb3dhbmNlGAEgASgLMi0uZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEuUmVzb3VyY2VBbGxvd2FuY2VCA+BBAhI0Cgt1cGRhdGVfbWFzaxgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2tCA+BBAhIfCgpyZXF1ZXN0X2lkGAMgASgJQgvgQQHijM/XCAIIASKAAgoRT3BlcmF0aW9uTWV0YWRhdGESNAoLY3JlYXRlX3RpbWUYASABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSMQoIZW5kX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSEwoGdGFyZ2V0GAMgASgJQgPgQQMSEQoEdmVyYhgEIAEoCUID4EEDEhsKDnN0YXR1c19tZXNzYWdlGAUgASgJQgPgQQMSIwoWcmVxdWVzdGVkX2NhbmNlbGxhdGlvbhgGIAEoCEID4EEDEhgKC2FwaV92ZXJzaW9uGAcgASgJQgPgQQMyiRYKDEJhdGNoU2VydmljZRKqAQoJQ3JlYXRlSm9iEiwuZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEuQ3JlYXRlSm9iUmVxdWVzdBofLmdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLkpvYiJO2kERcGFyZW50LGpvYixqb2JfaWSC0+STAjQ6A2pvYiItL3YxYWxwaGEve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qfS9qb2JzEpIBCgZHZXRKb2ISKS5nb29nbGUuY2xvdWQuYmF0Y2gudjFhbHBoYS5HZXRKb2JSZXF1ZXN0Gh8uZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEuSm9iIjzaQQRuYW1lgtPkkwIvEi0vdjFhbHBoYS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2pvYnMvKn0S3wEKCURlbGV0ZUpvYhIsLmdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLkRlbGV0ZUpvYlJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIoQBykFFChVnb29nbGUucHJvdG9idWYuRW1wdHkSLGdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLk9wZXJhdGlvbk1ldGFkYXRh2kEEbmFtZYLT5JMCLyotL3YxYWxwaGEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9qb2JzLyp9EuUBCglDYW5jZWxKb2ISLC5nb29nbGUuY2xvdWQuYmF0Y2gudjFhbHBoYS5DYW5jZWxKb2JSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiKKAcpBQQoRQ2FuY2VsSm9iUmVzcG9uc2USLGdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLk9wZXJhdGlvbk1ldGFkYXRh2kEEbmFtZYLT5JMCOToBKiI0L3YxYWxwaGEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9qb2JzLyp9OmNhbmNlbBKsAQoJVXBkYXRlSm9iEiwuZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEuVXBkYXRlSm9iUmVxdWVzdBofLmdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLkpvYiJQ2kEPam9iLHVwZGF0ZV9tYXNrgtPkkwI4OgNqb2IyMS92MWFscGhhL3tqb2IubmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2pvYnMvKn0SpQEKCExpc3RKb2JzEisuZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEuTGlzdEpvYnNSZXF1ZXN0GiwuZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEuTGlzdEpvYnNSZXNwb25zZSI+2kEGcGFyZW50gtPkkwIvEi0vdjFhbHBoYS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9L2pvYnMSqgEKB0dldFRhc2sSKi5nb29nbGUuY2xvdWQuYmF0Y2gudjFhbHBoYS5HZXRUYXNrUmVxdWVzdBogLmdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLlRhc2siUdpBBG5hbWWC0+STAkQSQi92MWFscGhhL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovam9icy8qL3Rhc2tHcm91cHMvKi90YXNrcy8qfRK9AQoJTGlzdFRhc2tzEiwuZ29vZ2xlLmNsb3VkLmJhdGNoLnYxYWxwaGEuTGlzdFRhc2tzUmVxdWVzdBotLmdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLkxpc3RUYXNrc1Jlc3BvbnNlIlPaQQZwYXJlbnSC0+STAkQSQi92MWFscGhhL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9qb2JzLyovdGFza0dyb3Vwcy8qfS90YXNrcxKQAgoXQ3JlYXRlUmVzb3VyY2VBbGxvd2FuY2USOi5nb29nbGUuY2xvdWQuYmF0Y2gudjFhbHBoYS5DcmVhdGVSZXNvdXJjZUFsbG93YW5jZVJlcXVlc3QaLS5nb29nbGUuY2xvdWQuYmF0Y2gudjFhbHBoYS5SZXNvdXJjZUFsbG93YW5jZSKJAdpBL3BhcmVudCxyZXNvdXJjZV9hbGxvd2FuY2UscmVzb3VyY2VfYWxsb3dhbmNlX2lkgtPkkwJROhJyZXNvdXJjZV9hbGxvd2FuY2UiOy92MWFscGhhL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKn0vcmVzb3VyY2VBbGxvd2FuY2VzEsoBChRHZXRSZXNvdXJjZUFsbG93YW5jZRI3Lmdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLkdldFJlc291cmNlQWxsb3dhbmNlUmVxdWVzdBotLmdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLlJlc291cmNlQWxsb3dhbmNlIkraQQRuYW1lgtPkkwI9EjsvdjFhbHBoYS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL3Jlc291cmNlQWxsb3dhbmNlcy8qfRKJAgoXRGVsZXRlUmVzb3VyY2VBbGxvd2FuY2USOi5nb29nbGUuY2xvdWQuYmF0Y2gudjFhbHBoYS5EZWxldGVSZXNvdXJjZUFsbG93YW5jZVJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIpIBykFFChVnb29nbGUucHJvdG9idWYuRW1wdHkSLGdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLk9wZXJhdGlvbk1ldGFkYXRh2kEEbmFtZYLT5JMCPSo7L3YxYWxwaGEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9yZXNvdXJjZUFsbG93YW5jZXMvKn0S3QEKFkxpc3RSZXNvdXJjZUFsbG93YW5jZXMSOS5nb29nbGUuY2xvdWQuYmF0Y2gudjFhbHBoYS5MaXN0UmVzb3VyY2VBbGxvd2FuY2VzUmVxdWVzdBo6Lmdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhLkxpc3RSZXNvdXJjZUFsbG93YW5jZXNSZXNwb25zZSJM2kEGcGFyZW50gtPkkwI9EjsvdjFhbHBoYS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9L3Jlc291cmNlQWxsb3dhbmNlcxKSAgoXVXBkYXRlUmVzb3VyY2VBbGxvd2FuY2USOi5nb29nbGUuY2xvdWQuYmF0Y2gudjFhbHBoYS5VcGRhdGVSZXNvdXJjZUFsbG93YW5jZVJlcXVlc3QaLS5nb29nbGUuY2xvdWQuYmF0Y2gudjFhbHBoYS5SZXNvdXJjZUFsbG93YW5jZSKLAdpBHnJlc291cmNlX2FsbG93YW5jZSx1cGRhdGVfbWFza4LT5JMCZDoScmVzb3VyY2VfYWxsb3dhbmNlMk4vdjFhbHBoYS97cmVzb3VyY2VfYWxsb3dhbmNlLm5hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9yZXNvdXJjZUFsbG93YW5jZXMvKn0aSMpBFGJhdGNoLmdvb2dsZWFwaXMuY29t0kEuaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybULEAQoeY29tLmdvb2dsZS5jbG91ZC5iYXRjaC52MWFscGhhQgpCYXRjaFByb3RvUAFaNGNsb3VkLmdvb2dsZS5jb20vZ28vYmF0Y2gvYXBpdjFhbHBoYS9iYXRjaHBiO2JhdGNocGKiAgNHQ0KqAhpHb29nbGUuQ2xvdWQuQmF0Y2guVjFBbHBoYcoCGkdvb2dsZVxDbG91ZFxCYXRjaFxWMWFscGhh6gIdR29vZ2xlOjpDbG91ZDo6QmF0Y2g6OlYxYWxwaGFiBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_field_info, file_google_api_resource, file_google_cloud_batch_v1alpha_job, file_google_cloud_batch_v1alpha_resource_allowance, file_google_cloud_batch_v1alpha_task, file_google_longrunning_operations, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * CreateJob Request.
 *
 * @generated from message google.cloud.batch.v1alpha.CreateJobRequest
 */
export type CreateJobRequest = Message<"google.cloud.batch.v1alpha.CreateJobRequest"> & {
  /**
   * Required. The parent resource name where the Job will be created.
   * Pattern: "projects/{project}/locations/{location}"
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * ID used to uniquely identify the Job within its parent scope.
   * This field should contain at most 63 characters and must start with
   * lowercase characters.
   * Only lowercase characters, numbers and '-' are accepted.
   * The '-' character cannot be the first or the last one.
   * A system generated ID will be used if the field is not set.
   *
   * The job.name field in the request will be ignored and the created resource
   * name of the Job will be "{parent}/jobs/{job_id}".
   *
   * @generated from field: string job_id = 2;
   */
  jobId: string;

  /**
   * Required. The Job to create.
   *
   * @generated from field: google.cloud.batch.v1alpha.Job job = 3;
   */
  job?: Job;

  /**
   * Optional. An optional request ID to identify requests. Specify a unique
   * request ID so that if you must retry your request, the server will know to
   * ignore the request if it has already been completed. The server will
   * guarantee that for at least 60 minutes since the first request.
   *
   * For example, consider a situation where you make an initial request and
   * the request times out. If you make the request again with the same request
   * ID, the server can check if original operation with the same request ID
   * was received, and if so, will ignore the second request. This prevents
   * clients from accidentally creating duplicate commitments.
   *
   * The request ID must be a valid UUID with the exception that zero UUID is
   * not supported (00000000-0000-0000-0000-000000000000).
   *
   * @generated from field: string request_id = 4;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.CreateJobRequest.
 * Use `create(CreateJobRequestSchema)` to create a new message.
 */
export const CreateJobRequestSchema: GenMessage<CreateJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 0);

/**
 * GetJob Request.
 *
 * @generated from message google.cloud.batch.v1alpha.GetJobRequest
 */
export type GetJobRequest = Message<"google.cloud.batch.v1alpha.GetJobRequest"> & {
  /**
   * Required. Job name.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.GetJobRequest.
 * Use `create(GetJobRequestSchema)` to create a new message.
 */
export const GetJobRequestSchema: GenMessage<GetJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 1);

/**
 * DeleteJob Request.
 *
 * @generated from message google.cloud.batch.v1alpha.DeleteJobRequest
 */
export type DeleteJobRequest = Message<"google.cloud.batch.v1alpha.DeleteJobRequest"> & {
  /**
   * Job name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Reason for this deletion.
   *
   * @generated from field: string reason = 2;
   */
  reason: string;

  /**
   * Optional. An optional request ID to identify requests. Specify a unique
   * request ID so that if you must retry your request, the server will know to
   * ignore the request if it has already been completed. The server will
   * guarantee that for at least 60 minutes after the first request.
   *
   * For example, consider a situation where you make an initial request and
   * the request times out. If you make the request again with the same request
   * ID, the server can check if original operation with the same request ID
   * was received, and if so, will ignore the second request. This prevents
   * clients from accidentally creating duplicate commitments.
   *
   * The request ID must be a valid UUID with the exception that zero UUID is
   * not supported (00000000-0000-0000-0000-000000000000).
   *
   * @generated from field: string request_id = 4;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.DeleteJobRequest.
 * Use `create(DeleteJobRequestSchema)` to create a new message.
 */
export const DeleteJobRequestSchema: GenMessage<DeleteJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 2);

/**
 * CancelJob Request.
 *
 * @generated from message google.cloud.batch.v1alpha.CancelJobRequest
 */
export type CancelJobRequest = Message<"google.cloud.batch.v1alpha.CancelJobRequest"> & {
  /**
   * Required. Job name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. An optional request ID to identify requests. Specify a unique
   * request ID so that if you must retry your request, the server will know to
   * ignore the request if it has already been completed. The server will
   * guarantee that for at least 60 minutes after the first request.
   *
   * For example, consider a situation where you make an initial request and
   * the request times out. If you make the request again with the same request
   * ID, the server can check if original operation with the same request ID
   * was received, and if so, will ignore the second request. This prevents
   * clients from accidentally creating duplicate commitments.
   *
   * The request ID must be a valid UUID with the exception that zero UUID is
   * not supported (00000000-0000-0000-0000-000000000000).
   *
   * @generated from field: string request_id = 4;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.CancelJobRequest.
 * Use `create(CancelJobRequestSchema)` to create a new message.
 */
export const CancelJobRequestSchema: GenMessage<CancelJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 3);

/**
 * Response to the CancelJob request.
 *
 * @generated from message google.cloud.batch.v1alpha.CancelJobResponse
 */
export type CancelJobResponse = Message<"google.cloud.batch.v1alpha.CancelJobResponse"> & {
};

/**
 * Describes the message google.cloud.batch.v1alpha.CancelJobResponse.
 * Use `create(CancelJobResponseSchema)` to create a new message.
 */
export const CancelJobResponseSchema: GenMessage<CancelJobResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 4);

/**
 * UpdateJob Request.
 *
 * @generated from message google.cloud.batch.v1alpha.UpdateJobRequest
 */
export type UpdateJobRequest = Message<"google.cloud.batch.v1alpha.UpdateJobRequest"> & {
  /**
   * Required. The Job to update.
   * Only fields specified in `updateMask` are updated.
   *
   * @generated from field: google.cloud.batch.v1alpha.Job job = 1;
   */
  job?: Job;

  /**
   * Required. Mask of fields to update.
   *
   * The `jobs.patch` method can only be used while a job is in the `QUEUED`,
   * `SCHEDULED`, or `RUNNING` state and currently only supports increasing the
   * value of the first `taskCount` field in the job's `taskGroups` field.
   * Therefore, you must set the value of `updateMask` to `taskGroups`. Any
   * other job fields in the update request will be ignored.
   *
   * For example, to update a job's `taskCount` to `2`, set `updateMask` to
   * `taskGroups` and use the following request body:
   * ```
   * {
   *   "taskGroups":[{
   *     "taskCount": 2
   *   }]
   * }
   * ```
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  /**
   * Optional. An optional request ID to identify requests. Specify a unique
   * request ID so that if you must retry your request, the server will know to
   * ignore the request if it has already been completed. The server will
   * guarantee that for at least 60 minutes after the first request.
   *
   * For example, consider a situation where you make an initial request and
   * the request times out. If you make the request again with the same request
   * ID, the server can check if original operation with the same request ID
   * was received, and if so, will ignore the second request. This prevents
   * clients from accidentally creating duplicate commitments.
   *
   * The request ID must be a valid UUID with the exception that zero UUID is
   * not supported (00000000-0000-0000-0000-000000000000).
   *
   * @generated from field: string request_id = 3;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.UpdateJobRequest.
 * Use `create(UpdateJobRequestSchema)` to create a new message.
 */
export const UpdateJobRequestSchema: GenMessage<UpdateJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 5);

/**
 * ListJob Request.
 *
 * @generated from message google.cloud.batch.v1alpha.ListJobsRequest
 */
export type ListJobsRequest = Message<"google.cloud.batch.v1alpha.ListJobsRequest"> & {
  /**
   * Parent path.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * List filter.
   *
   * @generated from field: string filter = 4;
   */
  filter: string;

  /**
   * Optional. Sort results. Supported are "name", "name desc", "create_time",
   * and "create_time desc".
   *
   * @generated from field: string order_by = 5;
   */
  orderBy: string;

  /**
   * Page size.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.ListJobsRequest.
 * Use `create(ListJobsRequestSchema)` to create a new message.
 */
export const ListJobsRequestSchema: GenMessage<ListJobsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 6);

/**
 * ListJob Response.
 *
 * @generated from message google.cloud.batch.v1alpha.ListJobsResponse
 */
export type ListJobsResponse = Message<"google.cloud.batch.v1alpha.ListJobsResponse"> & {
  /**
   * Jobs.
   *
   * @generated from field: repeated google.cloud.batch.v1alpha.Job jobs = 1;
   */
  jobs: Job[];

  /**
   * Next page token.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * Locations that could not be reached.
   *
   * @generated from field: repeated string unreachable = 3;
   */
  unreachable: string[];
};

/**
 * Describes the message google.cloud.batch.v1alpha.ListJobsResponse.
 * Use `create(ListJobsResponseSchema)` to create a new message.
 */
export const ListJobsResponseSchema: GenMessage<ListJobsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 7);

/**
 * ListTasks Request.
 *
 * @generated from message google.cloud.batch.v1alpha.ListTasksRequest
 */
export type ListTasksRequest = Message<"google.cloud.batch.v1alpha.ListTasksRequest"> & {
  /**
   * Required. Name of a TaskGroup from which Tasks are being requested.
   * Pattern:
   * "projects/{project}/locations/{location}/jobs/{job}/taskGroups/{task_group}"
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Task filter, null filter matches all Tasks.
   * Filter string should be of the format State=TaskStatus.State e.g.
   * State=RUNNING
   *
   * @generated from field: string filter = 2;
   */
  filter: string;

  /**
   * Not implemented.
   *
   * @generated from field: string order_by = 5;
   */
  orderBy: string;

  /**
   * Page size.
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize: number;

  /**
   * Page token.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.ListTasksRequest.
 * Use `create(ListTasksRequestSchema)` to create a new message.
 */
export const ListTasksRequestSchema: GenMessage<ListTasksRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 8);

/**
 * ListTasks Response.
 *
 * @generated from message google.cloud.batch.v1alpha.ListTasksResponse
 */
export type ListTasksResponse = Message<"google.cloud.batch.v1alpha.ListTasksResponse"> & {
  /**
   * Tasks.
   *
   * @generated from field: repeated google.cloud.batch.v1alpha.Task tasks = 1;
   */
  tasks: Task[];

  /**
   * Next page token.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * Locations that could not be reached.
   *
   * @generated from field: repeated string unreachable = 3;
   */
  unreachable: string[];
};

/**
 * Describes the message google.cloud.batch.v1alpha.ListTasksResponse.
 * Use `create(ListTasksResponseSchema)` to create a new message.
 */
export const ListTasksResponseSchema: GenMessage<ListTasksResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 9);

/**
 * Request for a single Task by name.
 *
 * @generated from message google.cloud.batch.v1alpha.GetTaskRequest
 */
export type GetTaskRequest = Message<"google.cloud.batch.v1alpha.GetTaskRequest"> & {
  /**
   * Required. Task name.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.GetTaskRequest.
 * Use `create(GetTaskRequestSchema)` to create a new message.
 */
export const GetTaskRequestSchema: GenMessage<GetTaskRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 10);

/**
 * CreateResourceAllowance Request.
 *
 * @generated from message google.cloud.batch.v1alpha.CreateResourceAllowanceRequest
 */
export type CreateResourceAllowanceRequest = Message<"google.cloud.batch.v1alpha.CreateResourceAllowanceRequest"> & {
  /**
   * Required. The parent resource name where the ResourceAllowance will be
   * created. Pattern: "projects/{project}/locations/{location}"
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * ID used to uniquely identify the ResourceAllowance within its parent scope.
   * This field should contain at most 63 characters and must start with
   * lowercase characters.
   * Only lowercase characters, numbers and '-' are accepted.
   * The '-' character cannot be the first or the last one.
   * A system generated ID will be used if the field is not set.
   *
   * The resource_allowance.name field in the request will be ignored and the
   * created resource name of the ResourceAllowance will be
   * "{parent}/resourceAllowances/{resource_allowance_id}".
   *
   * @generated from field: string resource_allowance_id = 2;
   */
  resourceAllowanceId: string;

  /**
   * Required. The ResourceAllowance to create.
   *
   * @generated from field: google.cloud.batch.v1alpha.ResourceAllowance resource_allowance = 3;
   */
  resourceAllowance?: ResourceAllowance;

  /**
   * Optional. An optional request ID to identify requests. Specify a unique
   * request ID so that if you must retry your request, the server will know to
   * ignore the request if it has already been completed. The server will
   * guarantee that for at least 60 minutes since the first request.
   *
   * For example, consider a situation where you make an initial request and
   * the request times out. If you make the request again with the same request
   * ID, the server can check if original operation with the same request ID
   * was received, and if so, will ignore the second request. This prevents
   * clients from accidentally creating duplicate commitments.
   *
   * The request ID must be a valid UUID with the exception that zero UUID is
   * not supported (00000000-0000-0000-0000-000000000000).
   *
   * @generated from field: string request_id = 4;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.CreateResourceAllowanceRequest.
 * Use `create(CreateResourceAllowanceRequestSchema)` to create a new message.
 */
export const CreateResourceAllowanceRequestSchema: GenMessage<CreateResourceAllowanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 11);

/**
 * GetResourceAllowance Request.
 *
 * @generated from message google.cloud.batch.v1alpha.GetResourceAllowanceRequest
 */
export type GetResourceAllowanceRequest = Message<"google.cloud.batch.v1alpha.GetResourceAllowanceRequest"> & {
  /**
   * Required. ResourceAllowance name.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.GetResourceAllowanceRequest.
 * Use `create(GetResourceAllowanceRequestSchema)` to create a new message.
 */
export const GetResourceAllowanceRequestSchema: GenMessage<GetResourceAllowanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 12);

/**
 * DeleteResourceAllowance Request.
 *
 * @generated from message google.cloud.batch.v1alpha.DeleteResourceAllowanceRequest
 */
export type DeleteResourceAllowanceRequest = Message<"google.cloud.batch.v1alpha.DeleteResourceAllowanceRequest"> & {
  /**
   * Required. ResourceAllowance name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. Reason for this deletion.
   *
   * @generated from field: string reason = 2;
   */
  reason: string;

  /**
   * Optional. An optional request ID to identify requests. Specify a unique
   * request ID so that if you must retry your request, the server will know to
   * ignore the request if it has already been completed. The server will
   * guarantee that for at least 60 minutes after the first request.
   *
   * For example, consider a situation where you make an initial request and
   * the request times out. If you make the request again with the same request
   * ID, the server can check if original operation with the same request ID
   * was received, and if so, will ignore the second request. This prevents
   * clients from accidentally creating duplicate commitments.
   *
   * The request ID must be a valid UUID with the exception that zero UUID is
   * not supported (00000000-0000-0000-0000-000000000000).
   *
   * @generated from field: string request_id = 4;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.DeleteResourceAllowanceRequest.
 * Use `create(DeleteResourceAllowanceRequestSchema)` to create a new message.
 */
export const DeleteResourceAllowanceRequestSchema: GenMessage<DeleteResourceAllowanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 13);

/**
 * ListResourceAllowances Request.
 *
 * @generated from message google.cloud.batch.v1alpha.ListResourceAllowancesRequest
 */
export type ListResourceAllowancesRequest = Message<"google.cloud.batch.v1alpha.ListResourceAllowancesRequest"> & {
  /**
   * Required. Parent path.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. Page size.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. Page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.ListResourceAllowancesRequest.
 * Use `create(ListResourceAllowancesRequestSchema)` to create a new message.
 */
export const ListResourceAllowancesRequestSchema: GenMessage<ListResourceAllowancesRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 14);

/**
 * ListResourceAllowances Response.
 *
 * @generated from message google.cloud.batch.v1alpha.ListResourceAllowancesResponse
 */
export type ListResourceAllowancesResponse = Message<"google.cloud.batch.v1alpha.ListResourceAllowancesResponse"> & {
  /**
   * ResourceAllowances.
   *
   * @generated from field: repeated google.cloud.batch.v1alpha.ResourceAllowance resource_allowances = 1;
   */
  resourceAllowances: ResourceAllowance[];

  /**
   * Next page token.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * Locations that could not be reached.
   *
   * @generated from field: repeated string unreachable = 3;
   */
  unreachable: string[];
};

/**
 * Describes the message google.cloud.batch.v1alpha.ListResourceAllowancesResponse.
 * Use `create(ListResourceAllowancesResponseSchema)` to create a new message.
 */
export const ListResourceAllowancesResponseSchema: GenMessage<ListResourceAllowancesResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 15);

/**
 * UpdateResourceAllowance Request.
 *
 * @generated from message google.cloud.batch.v1alpha.UpdateResourceAllowanceRequest
 */
export type UpdateResourceAllowanceRequest = Message<"google.cloud.batch.v1alpha.UpdateResourceAllowanceRequest"> & {
  /**
   * Required. The ResourceAllowance to update.
   * Update description.
   * Only fields specified in `update_mask` are updated.
   *
   * @generated from field: google.cloud.batch.v1alpha.ResourceAllowance resource_allowance = 1;
   */
  resourceAllowance?: ResourceAllowance;

  /**
   * Required. Mask of fields to update.
   *
   * Field mask is used to specify the fields to be overwritten in the
   * ResourceAllowance resource by the update.
   * The fields specified in the update_mask are relative to the resource, not
   * the full request. A field will be overwritten if it is in the mask. If the
   * user does not provide a mask then all fields will be overwritten.
   *
   * UpdateResourceAllowance request now only supports update on `limit` field.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  /**
   * Optional. An optional request ID to identify requests. Specify a unique
   * request ID so that if you must retry your request, the server will know to
   * ignore the request if it has already been completed. The server will
   * guarantee that for at least 60 minutes since the first request.
   *
   * For example, consider a situation where you make an initial request and
   * the request times out. If you make the request again with the same request
   * ID, the server can check if original operation with the same request ID
   * was received, and if so, will ignore the second request. This prevents
   * clients from accidentally creating duplicate commitments.
   *
   * The request ID must be a valid UUID with the exception that zero UUID is
   * not supported (00000000-0000-0000-0000-000000000000).
   *
   * @generated from field: string request_id = 3;
   */
  requestId: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.UpdateResourceAllowanceRequest.
 * Use `create(UpdateResourceAllowanceRequestSchema)` to create a new message.
 */
export const UpdateResourceAllowanceRequestSchema: GenMessage<UpdateResourceAllowanceRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 16);

/**
 * Represents the metadata of the long-running operation.
 *
 * @generated from message google.cloud.batch.v1alpha.OperationMetadata
 */
export type OperationMetadata = Message<"google.cloud.batch.v1alpha.OperationMetadata"> & {
  /**
   * Output only. The time the operation was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 1;
   */
  createTime?: Timestamp;

  /**
   * Output only. The time the operation finished running.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 2;
   */
  endTime?: Timestamp;

  /**
   * Output only. Server-defined resource path for the target of the operation.
   *
   * @generated from field: string target = 3;
   */
  target: string;

  /**
   * Output only. Name of the verb executed by the operation.
   *
   * @generated from field: string verb = 4;
   */
  verb: string;

  /**
   * Output only. Human-readable status of the operation, if any.
   *
   * @generated from field: string status_message = 5;
   */
  statusMessage: string;

  /**
   * Output only. Identifies whether the user has requested cancellation
   * of the operation. Operations that have successfully been cancelled
   * have [Operation.error][] value with a
   * [google.rpc.Status.code][google.rpc.Status.code] of 1, corresponding to
   * `Code.CANCELLED`.
   *
   * @generated from field: bool requested_cancellation = 6;
   */
  requestedCancellation: boolean;

  /**
   * Output only. API version used to start the operation.
   *
   * @generated from field: string api_version = 7;
   */
  apiVersion: string;
};

/**
 * Describes the message google.cloud.batch.v1alpha.OperationMetadata.
 * Use `create(OperationMetadataSchema)` to create a new message.
 */
export const OperationMetadataSchema: GenMessage<OperationMetadata> = /*@__PURE__*/
  messageDesc(file_google_cloud_batch_v1alpha_batch, 17);

/**
 * Google Batch Service.
 * The service manages user submitted batch jobs and allocates Google Compute
 * Engine VM instances to run the jobs.
 *
 * @generated from service google.cloud.batch.v1alpha.BatchService
 */
export const BatchService: GenService<{
  /**
   * Create a Job.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.CreateJob
   */
  createJob: {
    methodKind: "unary";
    input: typeof CreateJobRequestSchema;
    output: typeof JobSchema;
  },
  /**
   * Get a Job specified by its resource name.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.GetJob
   */
  getJob: {
    methodKind: "unary";
    input: typeof GetJobRequestSchema;
    output: typeof JobSchema;
  },
  /**
   * Delete a Job.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.DeleteJob
   */
  deleteJob: {
    methodKind: "unary";
    input: typeof DeleteJobRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Cancel a Job.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.CancelJob
   */
  cancelJob: {
    methodKind: "unary";
    input: typeof CancelJobRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Update a Job.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.UpdateJob
   */
  updateJob: {
    methodKind: "unary";
    input: typeof UpdateJobRequestSchema;
    output: typeof JobSchema;
  },
  /**
   * List all Jobs for a project within a region.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.ListJobs
   */
  listJobs: {
    methodKind: "unary";
    input: typeof ListJobsRequestSchema;
    output: typeof ListJobsResponseSchema;
  },
  /**
   * Return a single Task.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.GetTask
   */
  getTask: {
    methodKind: "unary";
    input: typeof GetTaskRequestSchema;
    output: typeof TaskSchema;
  },
  /**
   * List Tasks associated with a job.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.ListTasks
   */
  listTasks: {
    methodKind: "unary";
    input: typeof ListTasksRequestSchema;
    output: typeof ListTasksResponseSchema;
  },
  /**
   * Create a Resource Allowance.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.CreateResourceAllowance
   */
  createResourceAllowance: {
    methodKind: "unary";
    input: typeof CreateResourceAllowanceRequestSchema;
    output: typeof ResourceAllowanceSchema;
  },
  /**
   * Get a ResourceAllowance specified by its resource name.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.GetResourceAllowance
   */
  getResourceAllowance: {
    methodKind: "unary";
    input: typeof GetResourceAllowanceRequestSchema;
    output: typeof ResourceAllowanceSchema;
  },
  /**
   * Delete a ResourceAllowance.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.DeleteResourceAllowance
   */
  deleteResourceAllowance: {
    methodKind: "unary";
    input: typeof DeleteResourceAllowanceRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * List all ResourceAllowances for a project within a region.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.ListResourceAllowances
   */
  listResourceAllowances: {
    methodKind: "unary";
    input: typeof ListResourceAllowancesRequestSchema;
    output: typeof ListResourceAllowancesResponseSchema;
  },
  /**
   * Update a Resource Allowance.
   *
   * @generated from rpc google.cloud.batch.v1alpha.BatchService.UpdateResourceAllowance
   */
  updateResourceAllowance: {
    methodKind: "unary";
    input: typeof UpdateResourceAllowanceRequestSchema;
    output: typeof ResourceAllowanceSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_batch_v1alpha_batch, 0);
