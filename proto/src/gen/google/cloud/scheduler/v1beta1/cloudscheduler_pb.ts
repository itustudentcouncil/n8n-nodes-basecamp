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
// @generated from file google/cloud/scheduler/v1beta1/cloudscheduler.proto (package google.cloud.scheduler.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Job, JobSchema } from "./job_pb";
import { file_google_cloud_scheduler_v1beta1_job } from "./job_pb";
import type { EmptySchema, FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/scheduler/v1beta1/cloudscheduler.proto.
 */
export const file_google_cloud_scheduler_v1beta1_cloudscheduler: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvY2xvdWQvc2NoZWR1bGVyL3YxYmV0YTEvY2xvdWRzY2hlZHVsZXIucHJvdG8SHmdvb2dsZS5jbG91ZC5zY2hlZHVsZXIudjFiZXRhMSKjAQoPTGlzdEpvYnNSZXF1ZXN0EjkKBnBhcmVudBgBIAEoCUIp4EEC+kEjEiFjbG91ZHNjaGVkdWxlci5nb29nbGVhcGlzLmNvbS9Kb2ISDgoGZmlsdGVyGAQgASgJEhEKCXBhZ2Vfc2l6ZRgFIAEoBRISCgpwYWdlX3Rva2VuGAYgASgJEh4KFmxlZ2FjeV9hcHBfZW5naW5lX2Nyb24YByABKAgiXgoQTGlzdEpvYnNSZXNwb25zZRIxCgRqb2JzGAEgAygLMiMuZ29vZ2xlLmNsb3VkLnNjaGVkdWxlci52MWJldGExLkpvYhIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkiSAoNR2V0Sm9iUmVxdWVzdBI3CgRuYW1lGAEgASgJQingQQL6QSMKIWNsb3Vkc2NoZWR1bGVyLmdvb2dsZWFwaXMuY29tL0pvYiKEAQoQQ3JlYXRlSm9iUmVxdWVzdBI5CgZwYXJlbnQYASABKAlCKeBBAvpBIxIhY2xvdWRzY2hlZHVsZXIuZ29vZ2xlYXBpcy5jb20vSm9iEjUKA2pvYhgCIAEoCzIjLmdvb2dsZS5jbG91ZC5zY2hlZHVsZXIudjFiZXRhMS5Kb2JCA+BBAiJ6ChBVcGRhdGVKb2JSZXF1ZXN0EjUKA2pvYhgBIAEoCzIjLmdvb2dsZS5jbG91ZC5zY2hlZHVsZXIudjFiZXRhMS5Kb2JCA+BBAhIvCgt1cGRhdGVfbWFzaxgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2siawoQRGVsZXRlSm9iUmVxdWVzdBI3CgRuYW1lGAEgASgJQingQQL6QSMKIWNsb3Vkc2NoZWR1bGVyLmdvb2dsZWFwaXMuY29tL0pvYhIeChZsZWdhY3lfYXBwX2VuZ2luZV9jcm9uGAIgASgIIkoKD1BhdXNlSm9iUmVxdWVzdBI3CgRuYW1lGAEgASgJQingQQL6QSMKIWNsb3Vkc2NoZWR1bGVyLmdvb2dsZWFwaXMuY29tL0pvYiJLChBSZXN1bWVKb2JSZXF1ZXN0EjcKBG5hbWUYASABKAlCKeBBAvpBIwohY2xvdWRzY2hlZHVsZXIuZ29vZ2xlYXBpcy5jb20vSm9iImgKDVJ1bkpvYlJlcXVlc3QSNwoEbmFtZRgBIAEoCUIp4EEC+kEjCiFjbG91ZHNjaGVkdWxlci5nb29nbGVhcGlzLmNvbS9Kb2ISHgoWbGVnYWN5X2FwcF9lbmdpbmVfY3JvbhgCIAEoCDKmCwoOQ2xvdWRTY2hlZHVsZXISrQEKCExpc3RKb2JzEi8uZ29vZ2xlLmNsb3VkLnNjaGVkdWxlci52MWJldGExLkxpc3RKb2JzUmVxdWVzdBowLmdvb2dsZS5jbG91ZC5zY2hlZHVsZXIudjFiZXRhMS5MaXN0Sm9ic1Jlc3BvbnNlIj7aQQZwYXJlbnSC0+STAi8SLS92MWJldGExL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKn0vam9icxKaAQoGR2V0Sm9iEi0uZ29vZ2xlLmNsb3VkLnNjaGVkdWxlci52MWJldGExLkdldEpvYlJlcXVlc3QaIy5nb29nbGUuY2xvdWQuc2NoZWR1bGVyLnYxYmV0YTEuSm9iIjzaQQRuYW1lgtPkkwIvEi0vdjFiZXRhMS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2pvYnMvKn0SqwEKCUNyZWF0ZUpvYhIwLmdvb2dsZS5jbG91ZC5zY2hlZHVsZXIudjFiZXRhMS5DcmVhdGVKb2JSZXF1ZXN0GiMuZ29vZ2xlLmNsb3VkLnNjaGVkdWxlci52MWJldGExLkpvYiJH2kEKcGFyZW50LGpvYoLT5JMCNDoDam9iIi0vdjFiZXRhMS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9L2pvYnMStAEKCVVwZGF0ZUpvYhIwLmdvb2dsZS5jbG91ZC5zY2hlZHVsZXIudjFiZXRhMS5VcGRhdGVKb2JSZXF1ZXN0GiMuZ29vZ2xlLmNsb3VkLnNjaGVkdWxlci52MWJldGExLkpvYiJQ2kEPam9iLHVwZGF0ZV9tYXNrgtPkkwI4OgNqb2IyMS92MWJldGExL3tqb2IubmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2pvYnMvKn0SkwEKCURlbGV0ZUpvYhIwLmdvb2dsZS5jbG91ZC5zY2hlZHVsZXIudjFiZXRhMS5EZWxldGVKb2JSZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5IjzaQQRuYW1lgtPkkwIvKi0vdjFiZXRhMS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2pvYnMvKn0SpwEKCFBhdXNlSm9iEi8uZ29vZ2xlLmNsb3VkLnNjaGVkdWxlci52MWJldGExLlBhdXNlSm9iUmVxdWVzdBojLmdvb2dsZS5jbG91ZC5zY2hlZHVsZXIudjFiZXRhMS5Kb2IiRdpBBG5hbWWC0+STAjg6ASoiMy92MWJldGExL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovam9icy8qfTpwYXVzZRKqAQoJUmVzdW1lSm9iEjAuZ29vZ2xlLmNsb3VkLnNjaGVkdWxlci52MWJldGExLlJlc3VtZUpvYlJlcXVlc3QaIy5nb29nbGUuY2xvdWQuc2NoZWR1bGVyLnYxYmV0YTEuSm9iIkbaQQRuYW1lgtPkkwI5OgEqIjQvdjFiZXRhMS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2pvYnMvKn06cmVzdW1lEqEBCgZSdW5Kb2ISLS5nb29nbGUuY2xvdWQuc2NoZWR1bGVyLnYxYmV0YTEuUnVuSm9iUmVxdWVzdBojLmdvb2dsZS5jbG91ZC5zY2hlZHVsZXIudjFiZXRhMS5Kb2IiQ9pBBG5hbWWC0+STAjY6ASoiMS92MWJldGExL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovam9icy8qfTpydW4aUcpBHWNsb3Vkc2NoZWR1bGVyLmdvb2dsZWFwaXMuY29t0kEuaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jbG91ZC1wbGF0Zm9ybUKEAQoiY29tLmdvb2dsZS5jbG91ZC5zY2hlZHVsZXIudjFiZXRhMUIOU2NoZWR1bGVyUHJvdG9QAVpAY2xvdWQuZ29vZ2xlLmNvbS9nby9zY2hlZHVsZXIvYXBpdjFiZXRhMS9zY2hlZHVsZXJwYjtzY2hlZHVsZXJwYqICCVNDSEVEVUxFUmIGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_cloud_scheduler_v1beta1_job, file_google_protobuf_empty, file_google_protobuf_field_mask]);

/**
 * Request message for listing jobs using
 * [ListJobs][google.cloud.scheduler.v1beta1.CloudScheduler.ListJobs].
 *
 * @generated from message google.cloud.scheduler.v1beta1.ListJobsRequest
 */
export type ListJobsRequest = Message<"google.cloud.scheduler.v1beta1.ListJobsRequest"> & {
  /**
   * Required. The location name. For example:
   * `projects/PROJECT_ID/locations/LOCATION_ID`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * `filter` can be used to specify a subset of jobs.
   *
   * If `filter` equals `target_config="HttpConfig"`, then the http
   * target jobs are retrieved. If `filter` equals
   * `target_config="PubSubConfig"`, then the Pub/Sub target jobs are
   * retrieved. If `filter` equals `labels.foo=value1
   * labels.foo=value2` then only jobs which are labeled with
   * foo=value1 AND foo=value2 will be returned.
   *
   * @generated from field: string filter = 4;
   */
  filter: string;

  /**
   * Requested page size.
   *
   * The maximum page size is 500. If unspecified, the page size will
   * be the maximum. Fewer jobs than requested might be returned,
   * even if more jobs exist; use next_page_token to determine if more
   * jobs exist.
   *
   * @generated from field: int32 page_size = 5;
   */
  pageSize: number;

  /**
   * A token identifying a page of results the server will return. To
   * request the first page results, page_token must be empty. To
   * request the next page of results, page_token must be the value of
   * [next_page_token][google.cloud.scheduler.v1beta1.ListJobsResponse.next_page_token]
   * returned from the previous call to
   * [ListJobs][google.cloud.scheduler.v1beta1.CloudScheduler.ListJobs]. It is
   * an error to switch the value of
   * [filter][google.cloud.scheduler.v1beta1.ListJobsRequest.filter] or
   * [order_by][google.cloud.scheduler.v1beta1.ListJobsRequest.order_by] while
   * iterating through pages.
   *
   * @generated from field: string page_token = 6;
   */
  pageToken: string;

  /**
   * This field is used to manage the legacy App Engine Cron jobs using the
   * Cloud Scheduler API. If the field is set to true, the jobs in the __cron
   * queue will be listed instead.
   *
   * @generated from field: bool legacy_app_engine_cron = 7;
   */
  legacyAppEngineCron: boolean;
};

/**
 * Describes the message google.cloud.scheduler.v1beta1.ListJobsRequest.
 * Use `create(ListJobsRequestSchema)` to create a new message.
 */
export const ListJobsRequestSchema: GenMessage<ListJobsRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_scheduler_v1beta1_cloudscheduler, 0);

/**
 * Response message for listing jobs using
 * [ListJobs][google.cloud.scheduler.v1beta1.CloudScheduler.ListJobs].
 *
 * @generated from message google.cloud.scheduler.v1beta1.ListJobsResponse
 */
export type ListJobsResponse = Message<"google.cloud.scheduler.v1beta1.ListJobsResponse"> & {
  /**
   * The list of jobs.
   *
   * @generated from field: repeated google.cloud.scheduler.v1beta1.Job jobs = 1;
   */
  jobs: Job[];

  /**
   * A token to retrieve next page of results. Pass this value in the
   * [page_token][google.cloud.scheduler.v1beta1.ListJobsRequest.page_token]
   * field in the subsequent call to
   * [ListJobs][google.cloud.scheduler.v1beta1.CloudScheduler.ListJobs] to
   * retrieve the next page of results. If this is empty it indicates that there
   * are no more results through which to paginate.
   *
   * The page token is valid for only 2 hours.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message google.cloud.scheduler.v1beta1.ListJobsResponse.
 * Use `create(ListJobsResponseSchema)` to create a new message.
 */
export const ListJobsResponseSchema: GenMessage<ListJobsResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_scheduler_v1beta1_cloudscheduler, 1);

/**
 * Request message for
 * [GetJob][google.cloud.scheduler.v1beta1.CloudScheduler.GetJob].
 *
 * @generated from message google.cloud.scheduler.v1beta1.GetJobRequest
 */
export type GetJobRequest = Message<"google.cloud.scheduler.v1beta1.GetJobRequest"> & {
  /**
   * Required. The job name. For example:
   * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.scheduler.v1beta1.GetJobRequest.
 * Use `create(GetJobRequestSchema)` to create a new message.
 */
export const GetJobRequestSchema: GenMessage<GetJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_scheduler_v1beta1_cloudscheduler, 2);

/**
 * Request message for
 * [CreateJob][google.cloud.scheduler.v1beta1.CloudScheduler.CreateJob].
 *
 * @generated from message google.cloud.scheduler.v1beta1.CreateJobRequest
 */
export type CreateJobRequest = Message<"google.cloud.scheduler.v1beta1.CreateJobRequest"> & {
  /**
   * Required. The location name. For example:
   * `projects/PROJECT_ID/locations/LOCATION_ID`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The job to add. The user can optionally specify a name for the
   * job in [name][google.cloud.scheduler.v1beta1.Job.name].
   * [name][google.cloud.scheduler.v1beta1.Job.name] cannot be the same as an
   * existing job. If a name is not specified then the system will
   * generate a random unique name that will be returned
   * ([name][google.cloud.scheduler.v1beta1.Job.name]) in the response.
   *
   * @generated from field: google.cloud.scheduler.v1beta1.Job job = 2;
   */
  job?: Job;
};

/**
 * Describes the message google.cloud.scheduler.v1beta1.CreateJobRequest.
 * Use `create(CreateJobRequestSchema)` to create a new message.
 */
export const CreateJobRequestSchema: GenMessage<CreateJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_scheduler_v1beta1_cloudscheduler, 3);

/**
 * Request message for
 * [UpdateJob][google.cloud.scheduler.v1beta1.CloudScheduler.UpdateJob].
 *
 * @generated from message google.cloud.scheduler.v1beta1.UpdateJobRequest
 */
export type UpdateJobRequest = Message<"google.cloud.scheduler.v1beta1.UpdateJobRequest"> & {
  /**
   * Required. The new job properties.
   * [name][google.cloud.scheduler.v1beta1.Job.name] must be specified.
   *
   * Output only fields cannot be modified using UpdateJob.
   * Any value specified for an output only field will be ignored.
   *
   * @generated from field: google.cloud.scheduler.v1beta1.Job job = 1;
   */
  job?: Job;

  /**
   * A  mask used to specify which fields of the job are being updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message google.cloud.scheduler.v1beta1.UpdateJobRequest.
 * Use `create(UpdateJobRequestSchema)` to create a new message.
 */
export const UpdateJobRequestSchema: GenMessage<UpdateJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_scheduler_v1beta1_cloudscheduler, 4);

/**
 * Request message for deleting a job using
 * [DeleteJob][google.cloud.scheduler.v1beta1.CloudScheduler.DeleteJob].
 *
 * @generated from message google.cloud.scheduler.v1beta1.DeleteJobRequest
 */
export type DeleteJobRequest = Message<"google.cloud.scheduler.v1beta1.DeleteJobRequest"> & {
  /**
   * Required. The job name. For example:
   * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * This field is used to manage the legacy App Engine Cron jobs using the
   * Cloud Scheduler API. If the field is set to true, the job in the __cron
   * queue with the corresponding name will be deleted instead.
   *
   * @generated from field: bool legacy_app_engine_cron = 2;
   */
  legacyAppEngineCron: boolean;
};

/**
 * Describes the message google.cloud.scheduler.v1beta1.DeleteJobRequest.
 * Use `create(DeleteJobRequestSchema)` to create a new message.
 */
export const DeleteJobRequestSchema: GenMessage<DeleteJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_scheduler_v1beta1_cloudscheduler, 5);

/**
 * Request message for
 * [PauseJob][google.cloud.scheduler.v1beta1.CloudScheduler.PauseJob].
 *
 * @generated from message google.cloud.scheduler.v1beta1.PauseJobRequest
 */
export type PauseJobRequest = Message<"google.cloud.scheduler.v1beta1.PauseJobRequest"> & {
  /**
   * Required. The job name. For example:
   * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.scheduler.v1beta1.PauseJobRequest.
 * Use `create(PauseJobRequestSchema)` to create a new message.
 */
export const PauseJobRequestSchema: GenMessage<PauseJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_scheduler_v1beta1_cloudscheduler, 6);

/**
 * Request message for
 * [ResumeJob][google.cloud.scheduler.v1beta1.CloudScheduler.ResumeJob].
 *
 * @generated from message google.cloud.scheduler.v1beta1.ResumeJobRequest
 */
export type ResumeJobRequest = Message<"google.cloud.scheduler.v1beta1.ResumeJobRequest"> & {
  /**
   * Required. The job name. For example:
   * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.cloud.scheduler.v1beta1.ResumeJobRequest.
 * Use `create(ResumeJobRequestSchema)` to create a new message.
 */
export const ResumeJobRequestSchema: GenMessage<ResumeJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_scheduler_v1beta1_cloudscheduler, 7);

/**
 * Request message for forcing a job to run now using
 * [RunJob][google.cloud.scheduler.v1beta1.CloudScheduler.RunJob].
 *
 * @generated from message google.cloud.scheduler.v1beta1.RunJobRequest
 */
export type RunJobRequest = Message<"google.cloud.scheduler.v1beta1.RunJobRequest"> & {
  /**
   * Required. The job name. For example:
   * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * This field is used to manage the legacy App Engine Cron jobs using the
   * Cloud Scheduler API. If the field is set to true, the job in the __cron
   * queue with the corresponding name will be forced to run instead.
   *
   * @generated from field: bool legacy_app_engine_cron = 2;
   */
  legacyAppEngineCron: boolean;
};

/**
 * Describes the message google.cloud.scheduler.v1beta1.RunJobRequest.
 * Use `create(RunJobRequestSchema)` to create a new message.
 */
export const RunJobRequestSchema: GenMessage<RunJobRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_scheduler_v1beta1_cloudscheduler, 8);

/**
 * The Cloud Scheduler API allows external entities to reliably
 * schedule asynchronous jobs.
 *
 * @generated from service google.cloud.scheduler.v1beta1.CloudScheduler
 */
export const CloudScheduler: GenService<{
  /**
   * Lists jobs.
   *
   * @generated from rpc google.cloud.scheduler.v1beta1.CloudScheduler.ListJobs
   */
  listJobs: {
    methodKind: "unary";
    input: typeof ListJobsRequestSchema;
    output: typeof ListJobsResponseSchema;
  },
  /**
   * Gets a job.
   *
   * @generated from rpc google.cloud.scheduler.v1beta1.CloudScheduler.GetJob
   */
  getJob: {
    methodKind: "unary";
    input: typeof GetJobRequestSchema;
    output: typeof JobSchema;
  },
  /**
   * Creates a job.
   *
   * @generated from rpc google.cloud.scheduler.v1beta1.CloudScheduler.CreateJob
   */
  createJob: {
    methodKind: "unary";
    input: typeof CreateJobRequestSchema;
    output: typeof JobSchema;
  },
  /**
   * Updates a job.
   *
   * If successful, the updated [Job][google.cloud.scheduler.v1beta1.Job] is
   * returned. If the job does not exist, `NOT_FOUND` is returned.
   *
   * If UpdateJob does not successfully return, it is possible for the
   * job to be in an
   * [Job.State.UPDATE_FAILED][google.cloud.scheduler.v1beta1.Job.State.UPDATE_FAILED]
   * state. A job in this state may not be executed. If this happens, retry the
   * UpdateJob request until a successful response is received.
   *
   * @generated from rpc google.cloud.scheduler.v1beta1.CloudScheduler.UpdateJob
   */
  updateJob: {
    methodKind: "unary";
    input: typeof UpdateJobRequestSchema;
    output: typeof JobSchema;
  },
  /**
   * Deletes a job.
   *
   * @generated from rpc google.cloud.scheduler.v1beta1.CloudScheduler.DeleteJob
   */
  deleteJob: {
    methodKind: "unary";
    input: typeof DeleteJobRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Pauses a job.
   *
   * If a job is paused then the system will stop executing the job
   * until it is re-enabled via
   * [ResumeJob][google.cloud.scheduler.v1beta1.CloudScheduler.ResumeJob]. The
   * state of the job is stored in
   * [state][google.cloud.scheduler.v1beta1.Job.state]; if paused it will be set
   * to [Job.State.PAUSED][google.cloud.scheduler.v1beta1.Job.State.PAUSED]. A
   * job must be in
   * [Job.State.ENABLED][google.cloud.scheduler.v1beta1.Job.State.ENABLED] to be
   * paused.
   *
   * @generated from rpc google.cloud.scheduler.v1beta1.CloudScheduler.PauseJob
   */
  pauseJob: {
    methodKind: "unary";
    input: typeof PauseJobRequestSchema;
    output: typeof JobSchema;
  },
  /**
   * Resume a job.
   *
   * This method reenables a job after it has been
   * [Job.State.PAUSED][google.cloud.scheduler.v1beta1.Job.State.PAUSED]. The
   * state of a job is stored in
   * [Job.state][google.cloud.scheduler.v1beta1.Job.state]; after calling this
   * method it will be set to
   * [Job.State.ENABLED][google.cloud.scheduler.v1beta1.Job.State.ENABLED]. A
   * job must be in
   * [Job.State.PAUSED][google.cloud.scheduler.v1beta1.Job.State.PAUSED] to be
   * resumed.
   *
   * @generated from rpc google.cloud.scheduler.v1beta1.CloudScheduler.ResumeJob
   */
  resumeJob: {
    methodKind: "unary";
    input: typeof ResumeJobRequestSchema;
    output: typeof JobSchema;
  },
  /**
   * Forces a job to run now.
   *
   * When this method is called, Cloud Scheduler will dispatch the job, even
   * if the job is already running.
   *
   * @generated from rpc google.cloud.scheduler.v1beta1.CloudScheduler.RunJob
   */
  runJob: {
    methodKind: "unary";
    input: typeof RunJobRequestSchema;
    output: typeof JobSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_scheduler_v1beta1_cloudscheduler, 0);
