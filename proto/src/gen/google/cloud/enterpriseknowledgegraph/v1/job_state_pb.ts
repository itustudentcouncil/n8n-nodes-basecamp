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
// @generated from file google/cloud/enterpriseknowledgegraph/v1/job_state.proto (package google.cloud.enterpriseknowledgegraph.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file google/cloud/enterpriseknowledgegraph/v1/job_state.proto.
 */
export const file_google_cloud_enterpriseknowledgegraph_v1_job_state: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvY2xvdWQvZW50ZXJwcmlzZWtub3dsZWRnZWdyYXBoL3YxL2pvYl9zdGF0ZS5wcm90bxIoZ29vZ2xlLmNsb3VkLmVudGVycHJpc2Vrbm93bGVkZ2VncmFwaC52MSqeAgoISm9iU3RhdGUSGQoVSk9CX1NUQVRFX1VOU1BFQ0lGSUVEEAASFQoRSk9CX1NUQVRFX1BFTkRJTkcQCRIVChFKT0JfU1RBVEVfUlVOTklORxABEhcKE0pPQl9TVEFURV9TVUNDRUVERUQQAhIUChBKT0JfU1RBVEVfRkFJTEVEEAMSFwoTSk9CX1NUQVRFX0NBTkNFTExFRBAEEiIKHkpPQl9TVEFURV9LTk9XTEVER0VfRVhUUkFDVElPThAFEiEKHUpPQl9TVEFURV9SRUNPTl9QUkVQUk9DRVNTSU5HEAYSGAoUSk9CX1NUQVRFX0NMVVNURVJJTkcQBxIgChxKT0JfU1RBVEVfRVhQT1JUSU5HX0NMVVNURVJTEAhCrQIKLGNvbS5nb29nbGUuY2xvdWQuZW50ZXJwcmlzZWtub3dsZWRnZWdyYXBoLnYxQg1Kb2JTdGF0ZVByb3RvUAFaaGNsb3VkLmdvb2dsZS5jb20vZ28vZW50ZXJwcmlzZWtub3dsZWRnZWdyYXBoL2FwaXYxL2VudGVycHJpc2Vrbm93bGVkZ2VncmFwaHBiO2VudGVycHJpc2Vrbm93bGVkZ2VncmFwaHBiqgIoR29vZ2xlLkNsb3VkLkVudGVycHJpc2VLbm93bGVkZ2VHcmFwaC5WMcoCKEdvb2dsZVxDbG91ZFxFbnRlcnByaXNlS25vd2xlZGdlR3JhcGhcVjHqAitHb29nbGU6OkNsb3VkOjpFbnRlcnByaXNlS25vd2xlZGdlR3JhcGg6OlYxYgZwcm90bzM");

/**
 * Describes the state of a job.
 *
 * @generated from enum google.cloud.enterpriseknowledgegraph.v1.JobState
 */
export enum JobState {
  /**
   * The job state is unspecified.
   *
   * @generated from enum value: JOB_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The service is preparing to run the job.
   *
   * @generated from enum value: JOB_STATE_PENDING = 9;
   */
  PENDING = 9,

  /**
   * The job is in progress.
   *
   * @generated from enum value: JOB_STATE_RUNNING = 1;
   */
  RUNNING = 1,

  /**
   * The job completed successfully.
   *
   * @generated from enum value: JOB_STATE_SUCCEEDED = 2;
   */
  SUCCEEDED = 2,

  /**
   * The job failed.
   *
   * @generated from enum value: JOB_STATE_FAILED = 3;
   */
  FAILED = 3,

  /**
   * The job has been cancelled.
   *
   * @generated from enum value: JOB_STATE_CANCELLED = 4;
   */
  CANCELLED = 4,

  /**
   * Entity Recon API: The knowledge extraction job is running.
   *
   * @generated from enum value: JOB_STATE_KNOWLEDGE_EXTRACTION = 5;
   */
  KNOWLEDGE_EXTRACTION = 5,

  /**
   * Entity Recon API: The preprocessing job is running.
   *
   * @generated from enum value: JOB_STATE_RECON_PREPROCESSING = 6;
   */
  RECON_PREPROCESSING = 6,

  /**
   * Entity Recon API: The clustering job is running.
   *
   * @generated from enum value: JOB_STATE_CLUSTERING = 7;
   */
  CLUSTERING = 7,

  /**
   * Entity Recon API: The exporting clusters job is running.
   *
   * @generated from enum value: JOB_STATE_EXPORTING_CLUSTERS = 8;
   */
  EXPORTING_CLUSTERS = 8,
}

/**
 * Describes the enum google.cloud.enterpriseknowledgegraph.v1.JobState.
 */
export const JobStateSchema: GenEnum<JobState> = /*@__PURE__*/
  enumDesc(file_google_cloud_enterpriseknowledgegraph_v1_job_state, 0);
