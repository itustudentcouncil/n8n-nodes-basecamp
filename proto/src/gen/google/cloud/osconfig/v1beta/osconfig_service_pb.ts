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
// @generated from file google/cloud/osconfig/v1beta/osconfig_service.proto (package google.cloud.osconfig.v1beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import type { CreateGuestPolicyRequestSchema, DeleteGuestPolicyRequestSchema, EffectiveGuestPolicySchema, GetGuestPolicyRequestSchema, GuestPolicySchema, ListGuestPoliciesRequestSchema, ListGuestPoliciesResponseSchema, LookupEffectiveGuestPolicyRequestSchema, UpdateGuestPolicyRequestSchema } from "./guest_policies_pb";
import { file_google_cloud_osconfig_v1beta_guest_policies } from "./guest_policies_pb";
import type { CreatePatchDeploymentRequestSchema, DeletePatchDeploymentRequestSchema, GetPatchDeploymentRequestSchema, ListPatchDeploymentsRequestSchema, ListPatchDeploymentsResponseSchema, PatchDeploymentSchema, PausePatchDeploymentRequestSchema, ResumePatchDeploymentRequestSchema, UpdatePatchDeploymentRequestSchema } from "./patch_deployments_pb";
import { file_google_cloud_osconfig_v1beta_patch_deployments } from "./patch_deployments_pb";
import type { CancelPatchJobRequestSchema, ExecutePatchJobRequestSchema, GetPatchJobRequestSchema, ListPatchJobInstanceDetailsRequestSchema, ListPatchJobInstanceDetailsResponseSchema, ListPatchJobsRequestSchema, ListPatchJobsResponseSchema, PatchJobSchema } from "./patch_jobs_pb";
import { file_google_cloud_osconfig_v1beta_patch_jobs } from "./patch_jobs_pb";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/cloud/osconfig/v1beta/osconfig_service.proto.
 */
export const file_google_cloud_osconfig_v1beta_osconfig_service: GenFile = /*@__PURE__*/
  fileDesc("CjNnb29nbGUvY2xvdWQvb3Njb25maWcvdjFiZXRhL29zY29uZmlnX3NlcnZpY2UucHJvdG8SHGdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEykxwKD09zQ29uZmlnU2VydmljZRKpAQoPRXhlY3V0ZVBhdGNoSm9iEjQuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5FeGVjdXRlUGF0Y2hKb2JSZXF1ZXN0GiYuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5QYXRjaEpvYiI4gtPkkwIyOgEqIi0vdjFiZXRhL3twYXJlbnQ9cHJvamVjdHMvKn0vcGF0Y2hKb2JzOmV4ZWN1dGUSlgEKC0dldFBhdGNoSm9iEjAuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5HZXRQYXRjaEpvYlJlcXVlc3QaJi5nb29nbGUuY2xvdWQub3Njb25maWcudjFiZXRhLlBhdGNoSm9iIi2C0+STAicSJS92MWJldGEve25hbWU9cHJvamVjdHMvKi9wYXRjaEpvYnMvKn0SpgEKDkNhbmNlbFBhdGNoSm9iEjMuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5DYW5jZWxQYXRjaEpvYlJlcXVlc3QaJi5nb29nbGUuY2xvdWQub3Njb25maWcudjFiZXRhLlBhdGNoSm9iIjeC0+STAjE6ASoiLC92MWJldGEve25hbWU9cHJvamVjdHMvKi9wYXRjaEpvYnMvKn06Y2FuY2VsEqcBCg1MaXN0UGF0Y2hKb2JzEjIuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5MaXN0UGF0Y2hKb2JzUmVxdWVzdBozLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuTGlzdFBhdGNoSm9ic1Jlc3BvbnNlIi2C0+STAicSJS92MWJldGEve3BhcmVudD1wcm9qZWN0cy8qfS9wYXRjaEpvYnMS7AEKG0xpc3RQYXRjaEpvYkluc3RhbmNlRGV0YWlscxJALmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuTGlzdFBhdGNoSm9iSW5zdGFuY2VEZXRhaWxzUmVxdWVzdBpBLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuTGlzdFBhdGNoSm9iSW5zdGFuY2VEZXRhaWxzUmVzcG9uc2UiSNpBBnBhcmVudILT5JMCORI3L3YxYmV0YS97cGFyZW50PXByb2plY3RzLyovcGF0Y2hKb2JzLyp9L2luc3RhbmNlRGV0YWlscxLKAQoVQ3JlYXRlUGF0Y2hEZXBsb3ltZW50EjouZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5DcmVhdGVQYXRjaERlcGxveW1lbnRSZXF1ZXN0Gi0uZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5QYXRjaERlcGxveW1lbnQiRoLT5JMCQDoQcGF0Y2hfZGVwbG95bWVudCIsL3YxYmV0YS97cGFyZW50PXByb2plY3RzLyp9L3BhdGNoRGVwbG95bWVudHMSsgEKEkdldFBhdGNoRGVwbG95bWVudBI3Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuR2V0UGF0Y2hEZXBsb3ltZW50UmVxdWVzdBotLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuUGF0Y2hEZXBsb3ltZW50IjSC0+STAi4SLC92MWJldGEve25hbWU9cHJvamVjdHMvKi9wYXRjaERlcGxveW1lbnRzLyp9EsMBChRMaXN0UGF0Y2hEZXBsb3ltZW50cxI5Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuTGlzdFBhdGNoRGVwbG95bWVudHNSZXF1ZXN0GjouZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5MaXN0UGF0Y2hEZXBsb3ltZW50c1Jlc3BvbnNlIjSC0+STAi4SLC92MWJldGEve3BhcmVudD1wcm9qZWN0cy8qfS9wYXRjaERlcGxveW1lbnRzEqEBChVEZWxldGVQYXRjaERlcGxveW1lbnQSOi5nb29nbGUuY2xvdWQub3Njb25maWcudjFiZXRhLkRlbGV0ZVBhdGNoRGVwbG95bWVudFJlcXVlc3QaFi5nb29nbGUucHJvdG9idWYuRW1wdHkiNILT5JMCLiosL3YxYmV0YS97bmFtZT1wcm9qZWN0cy8qL3BhdGNoRGVwbG95bWVudHMvKn0S+gEKFVVwZGF0ZVBhdGNoRGVwbG95bWVudBI6Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuVXBkYXRlUGF0Y2hEZXBsb3ltZW50UmVxdWVzdBotLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuUGF0Y2hEZXBsb3ltZW50InbaQRxwYXRjaF9kZXBsb3ltZW50LHVwZGF0ZV9tYXNrgtPkkwJROhBwYXRjaF9kZXBsb3ltZW50Mj0vdjFiZXRhL3twYXRjaF9kZXBsb3ltZW50Lm5hbWU9cHJvamVjdHMvKi9wYXRjaERlcGxveW1lbnRzLyp9EsYBChRQYXVzZVBhdGNoRGVwbG95bWVudBI5Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuUGF1c2VQYXRjaERlcGxveW1lbnRSZXF1ZXN0Gi0uZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5QYXRjaERlcGxveW1lbnQiRNpBBG5hbWWC0+STAjc6ASoiMi92MWJldGEve25hbWU9cHJvamVjdHMvKi9wYXRjaERlcGxveW1lbnRzLyp9OnBhdXNlEskBChVSZXN1bWVQYXRjaERlcGxveW1lbnQSOi5nb29nbGUuY2xvdWQub3Njb25maWcudjFiZXRhLlJlc3VtZVBhdGNoRGVwbG95bWVudFJlcXVlc3QaLS5nb29nbGUuY2xvdWQub3Njb25maWcudjFiZXRhLlBhdGNoRGVwbG95bWVudCJF2kEEbmFtZYLT5JMCODoBKiIzL3YxYmV0YS97bmFtZT1wcm9qZWN0cy8qL3BhdGNoRGVwbG95bWVudHMvKn06cmVzdW1lEs4BChFDcmVhdGVHdWVzdFBvbGljeRI2Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuQ3JlYXRlR3Vlc3RQb2xpY3lSZXF1ZXN0GikuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5HdWVzdFBvbGljeSJW2kEUcGFyZW50LCBndWVzdF9wb2xpY3mC0+STAjk6DGd1ZXN0X3BvbGljeSIpL3YxYmV0YS97cGFyZW50PXByb2plY3RzLyp9L2d1ZXN0UG9saWNpZXMSqgEKDkdldEd1ZXN0UG9saWN5EjMuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5HZXRHdWVzdFBvbGljeVJlcXVlc3QaKS5nb29nbGUuY2xvdWQub3Njb25maWcudjFiZXRhLkd1ZXN0UG9saWN5IjjaQQRuYW1lgtPkkwIrEikvdjFiZXRhL3tuYW1lPXByb2plY3RzLyovZ3Vlc3RQb2xpY2llcy8qfRLAAQoRTGlzdEd1ZXN0UG9saWNpZXMSNi5nb29nbGUuY2xvdWQub3Njb25maWcudjFiZXRhLkxpc3RHdWVzdFBvbGljaWVzUmVxdWVzdBo3Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuTGlzdEd1ZXN0UG9saWNpZXNSZXNwb25zZSI62kEGcGFyZW50gtPkkwIrEikvdjFiZXRhL3twYXJlbnQ9cHJvamVjdHMvKn0vZ3Vlc3RQb2xpY2llcxLfAQoRVXBkYXRlR3Vlc3RQb2xpY3kSNi5nb29nbGUuY2xvdWQub3Njb25maWcudjFiZXRhLlVwZGF0ZUd1ZXN0UG9saWN5UmVxdWVzdBopLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuR3Vlc3RQb2xpY3kiZ9pBGGd1ZXN0X3BvbGljeSx1cGRhdGVfbWFza4LT5JMCRjoMZ3Vlc3RfcG9saWN5MjYvdjFiZXRhL3tndWVzdF9wb2xpY3kubmFtZT1wcm9qZWN0cy8qL2d1ZXN0UG9saWNpZXMvKn0SnQEKEURlbGV0ZUd1ZXN0UG9saWN5EjYuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5EZWxldGVHdWVzdFBvbGljeVJlcXVlc3QaFi5nb29nbGUucHJvdG9idWYuRW1wdHkiONpBBG5hbWWC0+STAisqKS92MWJldGEve25hbWU9cHJvamVjdHMvKi9ndWVzdFBvbGljaWVzLyp9EuoBChpMb29rdXBFZmZlY3RpdmVHdWVzdFBvbGljeRI/Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGEuTG9va3VwRWZmZWN0aXZlR3Vlc3RQb2xpY3lSZXF1ZXN0GjIuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYmV0YS5FZmZlY3RpdmVHdWVzdFBvbGljeSJXgtPkkwJROgEqIkwvdjFiZXRhL3tpbnN0YW5jZT1wcm9qZWN0cy8qL3pvbmVzLyovaW5zdGFuY2VzLyp9Omxvb2t1cEVmZmVjdGl2ZUd1ZXN0UG9saWN5GkvKQRdvc2NvbmZpZy5nb29nbGVhcGlzLmNvbdJBLmh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm1CbwogY29tLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWJldGFCDU9zQ29uZmlnUHJvdG9aPGNsb3VkLmdvb2dsZS5jb20vZ28vb3Njb25maWcvYXBpdjFiZXRhL29zY29uZmlncGI7b3Njb25maWdwYmIGcHJvdG8z", [file_google_api_annotations, file_google_api_client, file_google_cloud_osconfig_v1beta_guest_policies, file_google_cloud_osconfig_v1beta_patch_deployments, file_google_cloud_osconfig_v1beta_patch_jobs, file_google_protobuf_empty]);

/**
 * OS Config API
 *
 * The OS Config service is a server-side component that you can use to
 * manage package installations and patch jobs for virtual machine instances.
 *
 * @generated from service google.cloud.osconfig.v1beta.OsConfigService
 */
export const OsConfigService: GenService<{
  /**
   * Patch VM instances by creating and running a patch job.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.ExecutePatchJob
   */
  executePatchJob: {
    methodKind: "unary";
    input: typeof ExecutePatchJobRequestSchema;
    output: typeof PatchJobSchema;
  },
  /**
   * Get the patch job. This can be used to track the progress of an
   * ongoing patch job or review the details of completed jobs.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.GetPatchJob
   */
  getPatchJob: {
    methodKind: "unary";
    input: typeof GetPatchJobRequestSchema;
    output: typeof PatchJobSchema;
  },
  /**
   * Cancel a patch job. The patch job must be active. Canceled patch jobs
   * cannot be restarted.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.CancelPatchJob
   */
  cancelPatchJob: {
    methodKind: "unary";
    input: typeof CancelPatchJobRequestSchema;
    output: typeof PatchJobSchema;
  },
  /**
   * Get a list of patch jobs.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.ListPatchJobs
   */
  listPatchJobs: {
    methodKind: "unary";
    input: typeof ListPatchJobsRequestSchema;
    output: typeof ListPatchJobsResponseSchema;
  },
  /**
   * Get a list of instance details for a given patch job.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.ListPatchJobInstanceDetails
   */
  listPatchJobInstanceDetails: {
    methodKind: "unary";
    input: typeof ListPatchJobInstanceDetailsRequestSchema;
    output: typeof ListPatchJobInstanceDetailsResponseSchema;
  },
  /**
   * Create an OS Config patch deployment.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.CreatePatchDeployment
   */
  createPatchDeployment: {
    methodKind: "unary";
    input: typeof CreatePatchDeploymentRequestSchema;
    output: typeof PatchDeploymentSchema;
  },
  /**
   * Get an OS Config patch deployment.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.GetPatchDeployment
   */
  getPatchDeployment: {
    methodKind: "unary";
    input: typeof GetPatchDeploymentRequestSchema;
    output: typeof PatchDeploymentSchema;
  },
  /**
   * Get a page of OS Config patch deployments.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.ListPatchDeployments
   */
  listPatchDeployments: {
    methodKind: "unary";
    input: typeof ListPatchDeploymentsRequestSchema;
    output: typeof ListPatchDeploymentsResponseSchema;
  },
  /**
   * Delete an OS Config patch deployment.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.DeletePatchDeployment
   */
  deletePatchDeployment: {
    methodKind: "unary";
    input: typeof DeletePatchDeploymentRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Update an OS Config patch deployment.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.UpdatePatchDeployment
   */
  updatePatchDeployment: {
    methodKind: "unary";
    input: typeof UpdatePatchDeploymentRequestSchema;
    output: typeof PatchDeploymentSchema;
  },
  /**
   * Change state of patch deployment to "PAUSED".
   * Patch deployment in paused state doesn't generate patch jobs.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.PausePatchDeployment
   */
  pausePatchDeployment: {
    methodKind: "unary";
    input: typeof PausePatchDeploymentRequestSchema;
    output: typeof PatchDeploymentSchema;
  },
  /**
   * Change state of patch deployment back to "ACTIVE".
   * Patch deployment in active state continues to generate patch jobs.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.ResumePatchDeployment
   */
  resumePatchDeployment: {
    methodKind: "unary";
    input: typeof ResumePatchDeploymentRequestSchema;
    output: typeof PatchDeploymentSchema;
  },
  /**
   * Create an OS Config guest policy.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.CreateGuestPolicy
   */
  createGuestPolicy: {
    methodKind: "unary";
    input: typeof CreateGuestPolicyRequestSchema;
    output: typeof GuestPolicySchema;
  },
  /**
   * Get an OS Config guest policy.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.GetGuestPolicy
   */
  getGuestPolicy: {
    methodKind: "unary";
    input: typeof GetGuestPolicyRequestSchema;
    output: typeof GuestPolicySchema;
  },
  /**
   * Get a page of OS Config guest policies.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.ListGuestPolicies
   */
  listGuestPolicies: {
    methodKind: "unary";
    input: typeof ListGuestPoliciesRequestSchema;
    output: typeof ListGuestPoliciesResponseSchema;
  },
  /**
   * Update an OS Config guest policy.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.UpdateGuestPolicy
   */
  updateGuestPolicy: {
    methodKind: "unary";
    input: typeof UpdateGuestPolicyRequestSchema;
    output: typeof GuestPolicySchema;
  },
  /**
   * Delete an OS Config guest policy.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.DeleteGuestPolicy
   */
  deleteGuestPolicy: {
    methodKind: "unary";
    input: typeof DeleteGuestPolicyRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Lookup the effective guest policy that applies to a VM instance. This
   * lookup merges all policies that are assigned to the instance ancestry.
   *
   * @generated from rpc google.cloud.osconfig.v1beta.OsConfigService.LookupEffectiveGuestPolicy
   */
  lookupEffectiveGuestPolicy: {
    methodKind: "unary";
    input: typeof LookupEffectiveGuestPolicyRequestSchema;
    output: typeof EffectiveGuestPolicySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_osconfig_v1beta_osconfig_service, 0);
