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
// @generated from file google/cloud/aiplatform/v1beta1/schedule.proto (package google.cloud.aiplatform.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { CreateModelMonitoringJobRequest } from "./model_monitoring_service_pb";
import { file_google_cloud_aiplatform_v1beta1_model_monitoring_service } from "./model_monitoring_service_pb";
import type { CreateNotebookExecutionJobRequest } from "./notebook_service_pb";
import { file_google_cloud_aiplatform_v1beta1_notebook_service } from "./notebook_service_pb";
import type { CreatePipelineJobRequest } from "./pipeline_service_pb";
import { file_google_cloud_aiplatform_v1beta1_pipeline_service } from "./pipeline_service_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/aiplatform/v1beta1/schedule.proto.
 */
export const file_google_cloud_aiplatform_v1beta1_schedule: GenFile = /*@__PURE__*/
  fileDesc("Ci5nb29nbGUvY2xvdWQvYWlwbGF0Zm9ybS92MWJldGExL3NjaGVkdWxlLnByb3RvEh9nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExIvoKCghTY2hlZHVsZRIOCgRjcm9uGAogASgJSAASYAobY3JlYXRlX3BpcGVsaW5lX2pvYl9yZXF1ZXN0GA4gASgLMjkuZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5DcmVhdGVQaXBlbGluZUpvYlJlcXVlc3RIARJvCiNjcmVhdGVfbW9kZWxfbW9uaXRvcmluZ19qb2JfcmVxdWVzdBgPIAEoCzJALmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuQ3JlYXRlTW9kZWxNb25pdG9yaW5nSm9iUmVxdWVzdEgBEnMKJWNyZWF0ZV9ub3RlYm9va19leGVjdXRpb25fam9iX3JlcXVlc3QYFCABKAsyQi5nb29nbGUuY2xvdWQuYWlwbGF0Zm9ybS52MWJldGExLkNyZWF0ZU5vdGVib29rRXhlY3V0aW9uSm9iUmVxdWVzdEgBEhEKBG5hbWUYASABKAlCA+BBBRIZCgxkaXNwbGF5X25hbWUYAiABKAlCA+BBAhIzCgpzdGFydF90aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEBEjEKCGVuZF90aW1lGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEBEhoKDW1heF9ydW5fY291bnQYECABKANCA+BBARIeChFzdGFydGVkX3J1bl9jb3VudBgRIAEoA0ID4EEDEkMKBXN0YXRlGAUgASgOMi8uZ29vZ2xlLmNsb3VkLmFpcGxhdGZvcm0udjFiZXRhMS5TY2hlZHVsZS5TdGF0ZUID4EEDEjQKC2NyZWF0ZV90aW1lGAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjQKC3VwZGF0ZV90aW1lGBMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjYKDW5leHRfcnVuX3RpbWUYByABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSOAoPbGFzdF9wYXVzZV90aW1lGAggASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjkKEGxhc3RfcmVzdW1lX3RpbWUYCSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSJQoYbWF4X2NvbmN1cnJlbnRfcnVuX2NvdW50GAsgASgDQgPgQQISGwoOYWxsb3dfcXVldWVpbmcYDCABKAhCA+BBARIVCghjYXRjaF91cBgNIAEoCEID4EEDEl8KG2xhc3Rfc2NoZWR1bGVkX3J1bl9yZXNwb25zZRgSIAEoCzI1Lmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTEuU2NoZWR1bGUuUnVuUmVzcG9uc2VCA+BBAxpbCgtSdW5SZXNwb25zZRI2ChJzY2hlZHVsZWRfcnVuX3RpbWUYASABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhQKDHJ1bl9yZXNwb25zZRgCIAEoCSJFCgVTdGF0ZRIVChFTVEFURV9VTlNQRUNJRklFRBAAEgoKBkFDVElWRRABEgoKBlBBVVNFRBACEg0KCUNPTVBMRVRFRBADOmXqQWIKImFpcGxhdGZvcm0uZ29vZ2xlYXBpcy5jb20vU2NoZWR1bGUSPHByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9zY2hlZHVsZXMve3NjaGVkdWxlfUIUChJ0aW1lX3NwZWNpZmljYXRpb25CCQoHcmVxdWVzdELkAQojY29tLmdvb2dsZS5jbG91ZC5haXBsYXRmb3JtLnYxYmV0YTFCDVNjaGVkdWxlUHJvdG9QAVpDY2xvdWQuZ29vZ2xlLmNvbS9nby9haXBsYXRmb3JtL2FwaXYxYmV0YTEvYWlwbGF0Zm9ybXBiO2FpcGxhdGZvcm1wYqoCH0dvb2dsZS5DbG91ZC5BSVBsYXRmb3JtLlYxQmV0YTHKAh9Hb29nbGVcQ2xvdWRcQUlQbGF0Zm9ybVxWMWJldGEx6gIiR29vZ2xlOjpDbG91ZDo6QUlQbGF0Zm9ybTo6VjFiZXRhMWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_aiplatform_v1beta1_model_monitoring_service, file_google_cloud_aiplatform_v1beta1_notebook_service, file_google_cloud_aiplatform_v1beta1_pipeline_service, file_google_protobuf_timestamp]);

/**
 * An instance of a Schedule periodically schedules runs to make API calls based
 * on user specified time specification and API request type.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.Schedule
 */
export type Schedule = Message<"google.cloud.aiplatform.v1beta1.Schedule"> & {
  /**
   * Required.
   * The time specification to launch scheduled runs.
   *
   * @generated from oneof google.cloud.aiplatform.v1beta1.Schedule.time_specification
   */
  timeSpecification: {
    /**
     * Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled
     * runs. To explicitly set a timezone to the cron tab, apply a prefix in the
     * cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".
     * The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone
     * database. For example, "CRON_TZ=America/New_York 1 * * * *", or
     * "TZ=America/New_York 1 * * * *".
     *
     * @generated from field: string cron = 10;
     */
    value: string;
    case: "cron";
  } | { case: undefined; value?: undefined };

  /**
   * Required.
   * The API request template to launch the scheduled runs.
   * User-specified ID is not supported in the request template.
   *
   * @generated from oneof google.cloud.aiplatform.v1beta1.Schedule.request
   */
  request: {
    /**
     * Request for
     * [PipelineService.CreatePipelineJob][google.cloud.aiplatform.v1beta1.PipelineService.CreatePipelineJob].
     * CreatePipelineJobRequest.parent field is required (format:
     * projects/{project}/locations/{location}).
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.CreatePipelineJobRequest create_pipeline_job_request = 14;
     */
    value: CreatePipelineJobRequest;
    case: "createPipelineJobRequest";
  } | {
    /**
     * Request for
     * [ModelMonitoringService.CreateModelMonitoringJob][google.cloud.aiplatform.v1beta1.ModelMonitoringService.CreateModelMonitoringJob].
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.CreateModelMonitoringJobRequest create_model_monitoring_job_request = 15;
     */
    value: CreateModelMonitoringJobRequest;
    case: "createModelMonitoringJobRequest";
  } | {
    /**
     * Request for
     * [NotebookService.CreateNotebookExecutionJob][google.cloud.aiplatform.v1beta1.NotebookService.CreateNotebookExecutionJob].
     *
     * @generated from field: google.cloud.aiplatform.v1beta1.CreateNotebookExecutionJobRequest create_notebook_execution_job_request = 20;
     */
    value: CreateNotebookExecutionJobRequest;
    case: "createNotebookExecutionJobRequest";
  } | { case: undefined; value?: undefined };

  /**
   * Immutable. The resource name of the Schedule.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. User provided name of the Schedule.
   * The name can be up to 128 characters long and can consist of any UTF-8
   * characters.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Optional. Timestamp after which the first run can be scheduled.
   * Default to Schedule create time if not specified.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 3;
   */
  startTime?: Timestamp;

  /**
   * Optional. Timestamp after which no new runs can be scheduled.
   * If specified, The schedule will be completed when either
   * end_time is reached or when scheduled_run_count >= max_run_count.
   * If not specified, new runs will keep getting scheduled until this Schedule
   * is paused or deleted. Already scheduled runs will be allowed to complete.
   * Unset if not specified.
   *
   * @generated from field: google.protobuf.Timestamp end_time = 4;
   */
  endTime?: Timestamp;

  /**
   * Optional. Maximum run count of the schedule.
   * If specified, The schedule will be completed when either
   * started_run_count >= max_run_count or when end_time is reached.
   * If not specified, new runs will keep getting scheduled until this Schedule
   * is paused or deleted. Already scheduled runs will be allowed to complete.
   * Unset if not specified.
   *
   * @generated from field: int64 max_run_count = 16;
   */
  maxRunCount: bigint;

  /**
   * Output only. The number of runs started by this schedule.
   *
   * @generated from field: int64 started_run_count = 17;
   */
  startedRunCount: bigint;

  /**
   * Output only. The state of this Schedule.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.Schedule.State state = 5;
   */
  state: Schedule_State;

  /**
   * Output only. Timestamp when this Schedule was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 6;
   */
  createTime?: Timestamp;

  /**
   * Output only. Timestamp when this Schedule was updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 19;
   */
  updateTime?: Timestamp;

  /**
   * Output only. Timestamp when this Schedule should schedule the next run.
   * Having a next_run_time in the past means the runs are being started
   * behind schedule.
   *
   * @generated from field: google.protobuf.Timestamp next_run_time = 7;
   */
  nextRunTime?: Timestamp;

  /**
   * Output only. Timestamp when this Schedule was last paused.
   * Unset if never paused.
   *
   * @generated from field: google.protobuf.Timestamp last_pause_time = 8;
   */
  lastPauseTime?: Timestamp;

  /**
   * Output only. Timestamp when this Schedule was last resumed.
   * Unset if never resumed from pause.
   *
   * @generated from field: google.protobuf.Timestamp last_resume_time = 9;
   */
  lastResumeTime?: Timestamp;

  /**
   * Required. Maximum number of runs that can be started concurrently for this
   * Schedule. This is the limit for starting the scheduled requests and not the
   * execution of the operations/jobs created by the requests (if applicable).
   *
   * @generated from field: int64 max_concurrent_run_count = 11;
   */
  maxConcurrentRunCount: bigint;

  /**
   * Optional. Whether new scheduled runs can be queued when max_concurrent_runs
   * limit is reached. If set to true, new runs will be queued instead of
   * skipped. Default to false.
   *
   * @generated from field: bool allow_queueing = 12;
   */
  allowQueueing: boolean;

  /**
   * Output only. Whether to backfill missed runs when the schedule is resumed
   * from PAUSED state. If set to true, all missed runs will be scheduled. New
   * runs will be scheduled after the backfill is complete. Default to false.
   *
   * @generated from field: bool catch_up = 13;
   */
  catchUp: boolean;

  /**
   * Output only. Response of the last scheduled run.
   * This is the response for starting the scheduled requests and not the
   * execution of the operations/jobs created by the requests (if applicable).
   * Unset if no run has been scheduled yet.
   *
   * @generated from field: google.cloud.aiplatform.v1beta1.Schedule.RunResponse last_scheduled_run_response = 18;
   */
  lastScheduledRunResponse?: Schedule_RunResponse;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.Schedule.
 * Use `create(ScheduleSchema)` to create a new message.
 */
export const ScheduleSchema: GenMessage<Schedule> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_schedule, 0);

/**
 * Status of a scheduled run.
 *
 * @generated from message google.cloud.aiplatform.v1beta1.Schedule.RunResponse
 */
export type Schedule_RunResponse = Message<"google.cloud.aiplatform.v1beta1.Schedule.RunResponse"> & {
  /**
   * The scheduled run time based on the user-specified schedule.
   *
   * @generated from field: google.protobuf.Timestamp scheduled_run_time = 1;
   */
  scheduledRunTime?: Timestamp;

  /**
   * The response of the scheduled run.
   *
   * @generated from field: string run_response = 2;
   */
  runResponse: string;
};

/**
 * Describes the message google.cloud.aiplatform.v1beta1.Schedule.RunResponse.
 * Use `create(Schedule_RunResponseSchema)` to create a new message.
 */
export const Schedule_RunResponseSchema: GenMessage<Schedule_RunResponse> = /*@__PURE__*/
  messageDesc(file_google_cloud_aiplatform_v1beta1_schedule, 0, 0);

/**
 * Possible state of the schedule.
 *
 * @generated from enum google.cloud.aiplatform.v1beta1.Schedule.State
 */
export enum Schedule_State {
  /**
   * Unspecified.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * The Schedule is active. Runs are being scheduled on the user-specified
   * timespec.
   *
   * @generated from enum value: ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * The schedule is paused. No new runs will be created until the schedule
   * is resumed. Already started runs will be allowed to complete.
   *
   * @generated from enum value: PAUSED = 2;
   */
  PAUSED = 2,

  /**
   * The Schedule is completed. No new runs will be scheduled. Already started
   * runs will be allowed to complete. Schedules in completed state cannot be
   * paused or resumed.
   *
   * @generated from enum value: COMPLETED = 3;
   */
  COMPLETED = 3,
}

/**
 * Describes the enum google.cloud.aiplatform.v1beta1.Schedule.State.
 */
export const Schedule_StateSchema: GenEnum<Schedule_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_aiplatform_v1beta1_schedule, 0, 0);
