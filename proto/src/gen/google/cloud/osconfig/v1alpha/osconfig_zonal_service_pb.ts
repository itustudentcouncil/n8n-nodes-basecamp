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
// @generated from file google/cloud/osconfig/v1alpha/osconfig_zonal_service.proto (package google.cloud.osconfig.v1alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../api/annotations_pb";
import { file_google_api_client } from "../../../api/client_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { GetInstanceOSPoliciesComplianceRequestSchema, InstanceOSPoliciesComplianceSchema, ListInstanceOSPoliciesCompliancesRequestSchema, ListInstanceOSPoliciesCompliancesResponseSchema } from "./instance_os_policies_compliance_pb";
import { file_google_cloud_osconfig_v1alpha_instance_os_policies_compliance } from "./instance_os_policies_compliance_pb";
import type { GetInventoryRequestSchema, InventorySchema, ListInventoriesRequestSchema, ListInventoriesResponseSchema } from "./inventory_pb";
import { file_google_cloud_osconfig_v1alpha_inventory } from "./inventory_pb";
import type { GetOSPolicyAssignmentReportRequestSchema, ListOSPolicyAssignmentReportsRequestSchema, ListOSPolicyAssignmentReportsResponseSchema, OSPolicyAssignmentReportSchema } from "./os_policy_assignment_reports_pb";
import { file_google_cloud_osconfig_v1alpha_os_policy_assignment_reports } from "./os_policy_assignment_reports_pb";
import type { CreateOSPolicyAssignmentRequestSchema, DeleteOSPolicyAssignmentRequestSchema, GetOSPolicyAssignmentRequestSchema, ListOSPolicyAssignmentRevisionsRequestSchema, ListOSPolicyAssignmentRevisionsResponseSchema, ListOSPolicyAssignmentsRequestSchema, ListOSPolicyAssignmentsResponseSchema, OSPolicyAssignmentSchema, UpdateOSPolicyAssignmentRequestSchema } from "./os_policy_assignments_pb";
import { file_google_cloud_osconfig_v1alpha_os_policy_assignments } from "./os_policy_assignments_pb";
import type { GetVulnerabilityReportRequestSchema, ListVulnerabilityReportsRequestSchema, ListVulnerabilityReportsResponseSchema, VulnerabilityReportSchema } from "./vulnerability_pb";
import { file_google_cloud_osconfig_v1alpha_vulnerability } from "./vulnerability_pb";
import type { OperationSchema } from "../../../longrunning/operations_pb";
import { file_google_longrunning_operations } from "../../../longrunning/operations_pb";

/**
 * Describes the file google/cloud/osconfig/v1alpha/osconfig_zonal_service.proto.
 */
export const file_google_cloud_osconfig_v1alpha_osconfig_zonal_service: GenFile = /*@__PURE__*/
  fileDesc("Cjpnb29nbGUvY2xvdWQvb3Njb25maWcvdjFhbHBoYS9vc2NvbmZpZ196b25hbF9zZXJ2aWNlLnByb3RvEh1nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYTLoHAoUT3NDb25maWdab25hbFNlcnZpY2USyAIKGENyZWF0ZU9TUG9saWN5QXNzaWdubWVudBI+Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLkNyZWF0ZU9TUG9saWN5QXNzaWdubWVudFJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIswBykE5ChJPU1BvbGljeUFzc2lnbm1lbnQSI09TUG9saWN5QXNzaWdubWVudE9wZXJhdGlvbk1ldGFkYXRh2kEzcGFyZW50LG9zX3BvbGljeV9hc3NpZ25tZW50LG9zX3BvbGljeV9hc3NpZ25tZW50X2lkgtPkkwJUOhRvc19wb2xpY3lfYXNzaWdubWVudCI8L3YxYWxwaGEve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qfS9vc1BvbGljeUFzc2lnbm1lbnRzEsoCChhVcGRhdGVPU1BvbGljeUFzc2lnbm1lbnQSPi5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5VcGRhdGVPU1BvbGljeUFzc2lnbm1lbnRSZXF1ZXN0Gh0uZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbiLOAcpBOQoST1NQb2xpY3lBc3NpZ25tZW50EiNPU1BvbGljeUFzc2lnbm1lbnRPcGVyYXRpb25NZXRhZGF0YdpBIG9zX3BvbGljeV9hc3NpZ25tZW50LHVwZGF0ZV9tYXNrgtPkkwJpOhRvc19wb2xpY3lfYXNzaWdubWVudDJRL3YxYWxwaGEve29zX3BvbGljeV9hc3NpZ25tZW50Lm5hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9vc1BvbGljeUFzc2lnbm1lbnRzLyp9EtQBChVHZXRPU1BvbGljeUFzc2lnbm1lbnQSOy5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5HZXRPU1BvbGljeUFzc2lnbm1lbnRSZXF1ZXN0GjEuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuT1NQb2xpY3lBc3NpZ25tZW50IkvaQQRuYW1lgtPkkwI+EjwvdjFhbHBoYS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL29zUG9saWN5QXNzaWdubWVudHMvKn0S5wEKF0xpc3RPU1BvbGljeUFzc2lnbm1lbnRzEj0uZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuTGlzdE9TUG9saWN5QXNzaWdubWVudHNSZXF1ZXN0Gj4uZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuTGlzdE9TUG9saWN5QXNzaWdubWVudHNSZXNwb25zZSJN2kEGcGFyZW50gtPkkwI+EjwvdjFhbHBoYS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyp9L29zUG9saWN5QXNzaWdubWVudHMSiwIKH0xpc3RPU1BvbGljeUFzc2lnbm1lbnRSZXZpc2lvbnMSRS5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5MaXN0T1NQb2xpY3lBc3NpZ25tZW50UmV2aXNpb25zUmVxdWVzdBpGLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLkxpc3RPU1BvbGljeUFzc2lnbm1lbnRSZXZpc2lvbnNSZXNwb25zZSJZ2kEEbmFtZYLT5JMCTBJKL3YxYWxwaGEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9vc1BvbGljeUFzc2lnbm1lbnRzLyp9Omxpc3RSZXZpc2lvbnMShgIKGERlbGV0ZU9TUG9saWN5QXNzaWdubWVudBI+Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLkRlbGV0ZU9TUG9saWN5QXNzaWdubWVudFJlcXVlc3QaHS5nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9uIooBykE8ChVnb29nbGUucHJvdG9idWYuRW1wdHkSI09TUG9saWN5QXNzaWdubWVudE9wZXJhdGlvbk1ldGFkYXRh2kEEbmFtZYLT5JMCPio8L3YxYWxwaGEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9vc1BvbGljeUFzc2lnbm1lbnRzLyp9Ev8BCh9HZXRJbnN0YW5jZU9TUG9saWNpZXNDb21wbGlhbmNlEkUuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuR2V0SW5zdGFuY2VPU1BvbGljaWVzQ29tcGxpYW5jZVJlcXVlc3QaOy5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5JbnN0YW5jZU9TUG9saWNpZXNDb21wbGlhbmNlIliIAgHaQQRuYW1lgtPkkwJIEkYvdjFhbHBoYS97bmFtZT1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qL2luc3RhbmNlT1NQb2xpY2llc0NvbXBsaWFuY2VzLyp9EpICCiFMaXN0SW5zdGFuY2VPU1BvbGljaWVzQ29tcGxpYW5jZXMSRy5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5MaXN0SW5zdGFuY2VPU1BvbGljaWVzQ29tcGxpYW5jZXNSZXF1ZXN0GkguZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuTGlzdEluc3RhbmNlT1NQb2xpY2llc0NvbXBsaWFuY2VzUmVzcG9uc2UiWogCAdpBBnBhcmVudILT5JMCSBJGL3YxYWxwaGEve3BhcmVudD1wcm9qZWN0cy8qL2xvY2F0aW9ucy8qfS9pbnN0YW5jZU9TUG9saWNpZXNDb21wbGlhbmNlcxL5AQobR2V0T1NQb2xpY3lBc3NpZ25tZW50UmVwb3J0EkEuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuR2V0T1NQb2xpY3lBc3NpZ25tZW50UmVwb3J0UmVxdWVzdBo3Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLk9TUG9saWN5QXNzaWdubWVudFJlcG9ydCJe2kEEbmFtZYLT5JMCURJPL3YxYWxwaGEve25hbWU9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9pbnN0YW5jZXMvKi9vc1BvbGljeUFzc2lnbm1lbnRzLyovcmVwb3J0fRKPAgodTGlzdE9TUG9saWN5QXNzaWdubWVudFJlcG9ydHMSQy5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5MaXN0T1NQb2xpY3lBc3NpZ25tZW50UmVwb3J0c1JlcXVlc3QaRC5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5MaXN0T1NQb2xpY3lBc3NpZ25tZW50UmVwb3J0c1Jlc3BvbnNlImPaQQZwYXJlbnSC0+STAlQSUi92MWFscGhhL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9pbnN0YW5jZXMvKi9vc1BvbGljeUFzc2lnbm1lbnRzLyp9L3JlcG9ydHMSuQEKDEdldEludmVudG9yeRIyLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLkdldEludmVudG9yeVJlcXVlc3QaKC5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5JbnZlbnRvcnkiS9pBBG5hbWWC0+STAj4SPC92MWFscGhhL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovaW5zdGFuY2VzLyovaW52ZW50b3J5fRLTAQoPTGlzdEludmVudG9yaWVzEjUuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLnYxYWxwaGEuTGlzdEludmVudG9yaWVzUmVxdWVzdBo2Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLkxpc3RJbnZlbnRvcmllc1Jlc3BvbnNlIlHaQQZwYXJlbnSC0+STAkISQC92MWFscGhhL3twYXJlbnQ9cHJvamVjdHMvKi9sb2NhdGlvbnMvKi9pbnN0YW5jZXMvKn0vaW52ZW50b3JpZXMS4QEKFkdldFZ1bG5lcmFiaWxpdHlSZXBvcnQSPC5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5HZXRWdWxuZXJhYmlsaXR5UmVwb3J0UmVxdWVzdBoyLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLlZ1bG5lcmFiaWxpdHlSZXBvcnQiVdpBBG5hbWWC0+STAkgSRi92MWFscGhhL3tuYW1lPXByb2plY3RzLyovbG9jYXRpb25zLyovaW5zdGFuY2VzLyovdnVsbmVyYWJpbGl0eVJlcG9ydH0S9wEKGExpc3RWdWxuZXJhYmlsaXR5UmVwb3J0cxI+Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy52MWFscGhhLkxpc3RWdWxuZXJhYmlsaXR5UmVwb3J0c1JlcXVlc3QaPy5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYS5MaXN0VnVsbmVyYWJpbGl0eVJlcG9ydHNSZXNwb25zZSJa2kEGcGFyZW50gtPkkwJLEkkvdjFhbHBoYS97cGFyZW50PXByb2plY3RzLyovbG9jYXRpb25zLyovaW5zdGFuY2VzLyp9L3Z1bG5lcmFiaWxpdHlSZXBvcnRzGkvKQRdvc2NvbmZpZy5nb29nbGVhcGlzLmNvbdJBLmh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xvdWQtcGxhdGZvcm1CxAIKIWNvbS5nb29nbGUuY2xvdWQub3Njb25maWcudjFhbHBoYUIZT3NDb25maWdab25hbFNlcnZpY2VQcm90b1ABWj1jbG91ZC5nb29nbGUuY29tL2dvL29zY29uZmlnL2FwaXYxYWxwaGEvb3Njb25maWdwYjtvc2NvbmZpZ3BiqgIdR29vZ2xlLkNsb3VkLk9zQ29uZmlnLlYxQWxwaGHKAh1Hb29nbGVcQ2xvdWRcT3NDb25maWdcVjFhbHBoYeoCIEdvb2dsZTo6Q2xvdWQ6Ok9zQ29uZmlnOjpWMWFscGhh6kFfCh9jb21wdXRlLmdvb2dsZWFwaXMuY29tL0luc3RhbmNlEjxwcm9qZWN0cy97cHJvamVjdH0vbG9jYXRpb25zL3tsb2NhdGlvbn0vaW5zdGFuY2VzL3tpbnN0YW5jZX1iBnByb3RvMw", [file_google_api_annotations, file_google_api_client, file_google_api_resource, file_google_cloud_osconfig_v1alpha_instance_os_policies_compliance, file_google_cloud_osconfig_v1alpha_inventory, file_google_cloud_osconfig_v1alpha_os_policy_assignment_reports, file_google_cloud_osconfig_v1alpha_os_policy_assignments, file_google_cloud_osconfig_v1alpha_vulnerability, file_google_longrunning_operations]);

/**
 * Zonal OS Config API
 *
 * The OS Config service is the server-side component that allows users to
 * manage package installations and patch jobs for Compute Engine VM instances.
 *
 * @generated from service google.cloud.osconfig.v1alpha.OsConfigZonalService
 */
export const OsConfigZonalService: GenService<{
  /**
   * Create an OS policy assignment.
   *
   * This method also creates the first revision of the OS policy assignment.
   *
   * This method returns a long running operation (LRO) that contains the
   * rollout details. The rollout can be cancelled by cancelling the LRO.
   *
   * For more information, see [Method:
   * projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.CreateOSPolicyAssignment
   */
  createOSPolicyAssignment: {
    methodKind: "unary";
    input: typeof CreateOSPolicyAssignmentRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Update an existing OS policy assignment.
   *
   * This method creates a new revision of the OS policy assignment.
   *
   * This method returns a long running operation (LRO) that contains the
   * rollout details. The rollout can be cancelled by cancelling the LRO.
   *
   * For more information, see [Method:
   * projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.UpdateOSPolicyAssignment
   */
  updateOSPolicyAssignment: {
    methodKind: "unary";
    input: typeof UpdateOSPolicyAssignmentRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Retrieve an existing OS policy assignment.
   *
   * This method always returns the latest revision. In order to retrieve a
   * previous revision of the assignment, also provide the revision ID in the
   * `name` parameter.
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.GetOSPolicyAssignment
   */
  getOSPolicyAssignment: {
    methodKind: "unary";
    input: typeof GetOSPolicyAssignmentRequestSchema;
    output: typeof OSPolicyAssignmentSchema;
  },
  /**
   * List the OS policy assignments under the parent resource.
   *
   * For each OS policy assignment, the latest revision is returned.
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.ListOSPolicyAssignments
   */
  listOSPolicyAssignments: {
    methodKind: "unary";
    input: typeof ListOSPolicyAssignmentsRequestSchema;
    output: typeof ListOSPolicyAssignmentsResponseSchema;
  },
  /**
   * List the OS policy assignment revisions for a given OS policy assignment.
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.ListOSPolicyAssignmentRevisions
   */
  listOSPolicyAssignmentRevisions: {
    methodKind: "unary";
    input: typeof ListOSPolicyAssignmentRevisionsRequestSchema;
    output: typeof ListOSPolicyAssignmentRevisionsResponseSchema;
  },
  /**
   * Delete the OS policy assignment.
   *
   * This method creates a new revision of the OS policy assignment.
   *
   * This method returns a long running operation (LRO) that contains the
   * rollout details. The rollout can be cancelled by cancelling the LRO.
   *
   * If the LRO completes and is not cancelled, all revisions associated with
   * the OS policy assignment are deleted.
   *
   * For more information, see [Method:
   * projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.DeleteOSPolicyAssignment
   */
  deleteOSPolicyAssignment: {
    methodKind: "unary";
    input: typeof DeleteOSPolicyAssignmentRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Get OS policies compliance data for the specified Compute Engine VM
   * instance.
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.GetInstanceOSPoliciesCompliance
   * @deprecated
   */
  getInstanceOSPoliciesCompliance: {
    methodKind: "unary";
    input: typeof GetInstanceOSPoliciesComplianceRequestSchema;
    output: typeof InstanceOSPoliciesComplianceSchema;
  },
  /**
   * List OS policies compliance data for all Compute Engine VM instances in the
   * specified zone.
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.ListInstanceOSPoliciesCompliances
   * @deprecated
   */
  listInstanceOSPoliciesCompliances: {
    methodKind: "unary";
    input: typeof ListInstanceOSPoliciesCompliancesRequestSchema;
    output: typeof ListInstanceOSPoliciesCompliancesResponseSchema;
  },
  /**
   * Get the OS policy asssignment report for the specified Compute Engine VM
   * instance.
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.GetOSPolicyAssignmentReport
   */
  getOSPolicyAssignmentReport: {
    methodKind: "unary";
    input: typeof GetOSPolicyAssignmentReportRequestSchema;
    output: typeof OSPolicyAssignmentReportSchema;
  },
  /**
   * List OS policy asssignment reports for all Compute Engine VM instances in
   * the specified zone.
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.ListOSPolicyAssignmentReports
   */
  listOSPolicyAssignmentReports: {
    methodKind: "unary";
    input: typeof ListOSPolicyAssignmentReportsRequestSchema;
    output: typeof ListOSPolicyAssignmentReportsResponseSchema;
  },
  /**
   * Get inventory data for the specified VM instance. If the VM has no
   * associated inventory, the message `NOT_FOUND` is returned.
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.GetInventory
   */
  getInventory: {
    methodKind: "unary";
    input: typeof GetInventoryRequestSchema;
    output: typeof InventorySchema;
  },
  /**
   * List inventory data for all VM instances in the specified zone.
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.ListInventories
   */
  listInventories: {
    methodKind: "unary";
    input: typeof ListInventoriesRequestSchema;
    output: typeof ListInventoriesResponseSchema;
  },
  /**
   * Gets the vulnerability report for the specified VM instance. Only VMs with
   * inventory data have vulnerability reports associated with them.
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.GetVulnerabilityReport
   */
  getVulnerabilityReport: {
    methodKind: "unary";
    input: typeof GetVulnerabilityReportRequestSchema;
    output: typeof VulnerabilityReportSchema;
  },
  /**
   * List vulnerability reports for all VM instances in the specified zone.
   *
   * @generated from rpc google.cloud.osconfig.v1alpha.OsConfigZonalService.ListVulnerabilityReports
   */
  listVulnerabilityReports: {
    methodKind: "unary";
    input: typeof ListVulnerabilityReportsRequestSchema;
    output: typeof ListVulnerabilityReportsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_google_cloud_osconfig_v1alpha_osconfig_zonal_service, 0);
