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
// @generated from file google/cloud/securitycenter/v2/finding.proto (package google.cloud.securitycenter.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Access } from "./access_pb";
import { file_google_cloud_securitycenter_v2_access } from "./access_pb";
import type { Application } from "./application_pb";
import { file_google_cloud_securitycenter_v2_application } from "./application_pb";
import type { AttackExposure } from "./attack_exposure_pb";
import { file_google_cloud_securitycenter_v2_attack_exposure } from "./attack_exposure_pb";
import type { BackupDisasterRecovery } from "./backup_disaster_recovery_pb";
import { file_google_cloud_securitycenter_v2_backup_disaster_recovery } from "./backup_disaster_recovery_pb";
import type { CloudArmor } from "./cloud_armor_pb";
import { file_google_cloud_securitycenter_v2_cloud_armor } from "./cloud_armor_pb";
import type { CloudDlpDataProfile } from "./cloud_dlp_data_profile_pb";
import { file_google_cloud_securitycenter_v2_cloud_dlp_data_profile } from "./cloud_dlp_data_profile_pb";
import type { CloudDlpInspection } from "./cloud_dlp_inspection_pb";
import { file_google_cloud_securitycenter_v2_cloud_dlp_inspection } from "./cloud_dlp_inspection_pb";
import type { Compliance } from "./compliance_pb";
import { file_google_cloud_securitycenter_v2_compliance } from "./compliance_pb";
import type { Connection } from "./connection_pb";
import { file_google_cloud_securitycenter_v2_connection } from "./connection_pb";
import type { ContactDetails } from "./contact_details_pb";
import { file_google_cloud_securitycenter_v2_contact_details } from "./contact_details_pb";
import type { Container } from "./container_pb";
import { file_google_cloud_securitycenter_v2_container } from "./container_pb";
import type { Database } from "./database_pb";
import { file_google_cloud_securitycenter_v2_database } from "./database_pb";
import type { Exfiltration } from "./exfiltration_pb";
import { file_google_cloud_securitycenter_v2_exfiltration } from "./exfiltration_pb";
import type { ExternalSystem } from "./external_system_pb";
import { file_google_cloud_securitycenter_v2_external_system } from "./external_system_pb";
import type { File } from "./file_pb";
import { file_google_cloud_securitycenter_v2_file } from "./file_pb";
import type { GroupMembership } from "./group_membership_pb";
import { file_google_cloud_securitycenter_v2_group_membership } from "./group_membership_pb";
import type { IamBinding } from "./iam_binding_pb";
import { file_google_cloud_securitycenter_v2_iam_binding } from "./iam_binding_pb";
import type { Indicator } from "./indicator_pb";
import { file_google_cloud_securitycenter_v2_indicator } from "./indicator_pb";
import type { KernelRootkit } from "./kernel_rootkit_pb";
import { file_google_cloud_securitycenter_v2_kernel_rootkit } from "./kernel_rootkit_pb";
import type { Kubernetes } from "./kubernetes_pb";
import { file_google_cloud_securitycenter_v2_kubernetes } from "./kubernetes_pb";
import type { LoadBalancer } from "./load_balancer_pb";
import { file_google_cloud_securitycenter_v2_load_balancer } from "./load_balancer_pb";
import type { LogEntry } from "./log_entry_pb";
import { file_google_cloud_securitycenter_v2_log_entry } from "./log_entry_pb";
import type { MitreAttack } from "./mitre_attack_pb";
import { file_google_cloud_securitycenter_v2_mitre_attack } from "./mitre_attack_pb";
import type { Notebook } from "./notebook_pb";
import { file_google_cloud_securitycenter_v2_notebook } from "./notebook_pb";
import type { OrgPolicy } from "./org_policy_pb";
import { file_google_cloud_securitycenter_v2_org_policy } from "./org_policy_pb";
import type { Process } from "./process_pb";
import { file_google_cloud_securitycenter_v2_process } from "./process_pb";
import type { SecurityMarks } from "./security_marks_pb";
import { file_google_cloud_securitycenter_v2_security_marks } from "./security_marks_pb";
import type { SecurityPosture } from "./security_posture_pb";
import { file_google_cloud_securitycenter_v2_security_posture } from "./security_posture_pb";
import type { ToxicCombination } from "./toxic_combination_pb";
import { file_google_cloud_securitycenter_v2_toxic_combination } from "./toxic_combination_pb";
import type { Vulnerability } from "./vulnerability_pb";
import { file_google_cloud_securitycenter_v2_vulnerability } from "./vulnerability_pb";
import type { Timestamp, Value } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_struct, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/securitycenter/v2/finding.proto.
 */
export const file_google_cloud_securitycenter_v2_finding: GenFile = /*@__PURE__*/
  fileDesc("Cixnb29nbGUvY2xvdWQvc2VjdXJpdHljZW50ZXIvdjIvZmluZGluZy5wcm90bxIeZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyIpMjCgdGaW5kaW5nEgwKBG5hbWUYASABKAkSGwoOY2Fub25pY2FsX25hbWUYAiABKAlCA+BBAxIOCgZwYXJlbnQYAyABKAkSGgoNcmVzb3VyY2VfbmFtZRgEIAEoCUID4EEFEkEKBXN0YXRlGAYgASgOMi0uZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkZpbmRpbmcuU3RhdGVCA+BBAxIVCghjYXRlZ29yeRgHIAEoCUID4EEFEhQKDGV4dGVybmFsX3VyaRgIIAEoCRJYChFzb3VyY2VfcHJvcGVydGllcxgJIAMoCzI9Lmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5GaW5kaW5nLlNvdXJjZVByb3BlcnRpZXNFbnRyeRJKCg5zZWN1cml0eV9tYXJrcxgKIAEoCzItLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5TZWN1cml0eU1hcmtzQgPgQQMSLgoKZXZlbnRfdGltZRgLIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASNAoLY3JlYXRlX3RpbWUYDCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSQgoIc2V2ZXJpdHkYDiABKA4yMC5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuRmluZGluZy5TZXZlcml0eRI6CgRtdXRlGA8gASgOMiwuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkZpbmRpbmcuTXV0ZRJICgltdXRlX2luZm8YNSABKAsyMC5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuRmluZGluZy5NdXRlSW5mb0ID4EEDEksKDWZpbmRpbmdfY2xhc3MYECABKA4yNC5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuRmluZGluZy5GaW5kaW5nQ2xhc3MSPAoJaW5kaWNhdG9yGBEgASgLMikuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkluZGljYXRvchJECg12dWxuZXJhYmlsaXR5GBIgASgLMi0uZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLlZ1bG5lcmFiaWxpdHkSOQoQbXV0ZV91cGRhdGVfdGltZRgTIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxJbChBleHRlcm5hbF9zeXN0ZW1zGBQgAygLMjwuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkZpbmRpbmcuRXh0ZXJuYWxTeXN0ZW1zRW50cnlCA+BBAxJBCgxtaXRyZV9hdHRhY2sYFSABKAsyKy5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuTWl0cmVBdHRhY2sSNgoGYWNjZXNzGBYgASgLMiYuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkFjY2VzcxI/Cgtjb25uZWN0aW9ucxgXIAMoCzIqLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5Db25uZWN0aW9uEhYKDm11dGVfaW5pdGlhdG9yGBggASgJEjoKCXByb2Nlc3NlcxgZIAMoCzInLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5Qcm9jZXNzEkwKCGNvbnRhY3RzGBogAygLMjUuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkZpbmRpbmcuQ29udGFjdHNFbnRyeUID4EEDEj8KC2NvbXBsaWFuY2VzGBsgAygLMiouZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkNvbXBsaWFuY2USIAoTcGFyZW50X2Rpc3BsYXlfbmFtZRgdIAEoCUID4EEDEhMKC2Rlc2NyaXB0aW9uGB4gASgJEkIKDGV4ZmlsdHJhdGlvbhgfIAEoCzIsLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5FeGZpbHRyYXRpb24SQAoMaWFtX2JpbmRpbmdzGCAgAygLMiouZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLklhbUJpbmRpbmcSEgoKbmV4dF9zdGVwcxghIAEoCRITCgttb2R1bGVfbmFtZRgiIAEoCRI9Cgpjb250YWluZXJzGCMgAygLMikuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkNvbnRhaW5lchI+CgprdWJlcm5ldGVzGCQgASgLMiouZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkt1YmVybmV0ZXMSOgoIZGF0YWJhc2UYJSABKAsyKC5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuRGF0YWJhc2USRwoPYXR0YWNrX2V4cG9zdXJlGCYgASgLMi4uZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkF0dGFja0V4cG9zdXJlEjMKBWZpbGVzGCcgAygLMiQuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkZpbGUSUAoUY2xvdWRfZGxwX2luc3BlY3Rpb24YKCABKAsyMi5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuQ2xvdWREbHBJbnNwZWN0aW9uElMKFmNsb3VkX2RscF9kYXRhX3Byb2ZpbGUYKSABKAsyMy5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuQ2xvdWREbHBEYXRhUHJvZmlsZRJFCg5rZXJuZWxfcm9vdGtpdBgqIAEoCzItLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5LZXJuZWxSb290a2l0Ej8KDG9yZ19wb2xpY2llcxgrIAMoCzIpLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5PcmdQb2xpY3kSQAoLYXBwbGljYXRpb24YLSABKAsyKy5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuQXBwbGljYXRpb24SWAoYYmFja3VwX2Rpc2FzdGVyX3JlY292ZXJ5GC8gASgLMjYuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkJhY2t1cERpc2FzdGVyUmVjb3ZlcnkSSQoQc2VjdXJpdHlfcG9zdHVyZRgwIAEoCzIvLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5TZWN1cml0eVBvc3R1cmUSPQoLbG9nX2VudHJpZXMYMSADKAsyKC5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuTG9nRW50cnkSRAoObG9hZF9iYWxhbmNlcnMYMiADKAsyLC5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuTG9hZEJhbGFuY2VyEj8KC2Nsb3VkX2FybW9yGDMgASgLMiouZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkNsb3VkQXJtb3ISOgoIbm90ZWJvb2sYNyABKAsyKC5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuTm90ZWJvb2sSSwoRdG94aWNfY29tYmluYXRpb24YOCABKAsyMC5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuVG94aWNDb21iaW5hdGlvbhJKChFncm91cF9tZW1iZXJzaGlwcxg5IAMoCzIvLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5Hcm91cE1lbWJlcnNoaXAakwMKCE11dGVJbmZvElAKC3N0YXRpY19tdXRlGAEgASgLMjsuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLkZpbmRpbmcuTXV0ZUluZm8uU3RhdGljTXV0ZRJgChRkeW5hbWljX211dGVfcmVjb3JkcxgCIAMoCzJCLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5GaW5kaW5nLk11dGVJbmZvLkR5bmFtaWNNdXRlUmVjb3JkGnkKClN0YXRpY011dGUSOwoFc3RhdGUYASABKA4yLC5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuRmluZGluZy5NdXRlEi4KCmFwcGx5X3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wGlgKEUR5bmFtaWNNdXRlUmVjb3JkEhMKC211dGVfY29uZmlnGAEgASgJEi4KCm1hdGNoX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wGk8KFVNvdXJjZVByb3BlcnRpZXNFbnRyeRILCgNrZXkYASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWU6AjgBGmYKFEV4dGVybmFsU3lzdGVtc0VudHJ5EgsKA2tleRgBIAEoCRI9CgV2YWx1ZRgCIAEoCzIuLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5FeHRlcm5hbFN5c3RlbToCOAEaXwoNQ29udGFjdHNFbnRyeRILCgNrZXkYASABKAkSPQoFdmFsdWUYAiABKAsyLi5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIuQ29udGFjdERldGFpbHM6AjgBIjgKBVN0YXRlEhUKEVNUQVRFX1VOU1BFQ0lGSUVEEAASCgoGQUNUSVZFEAESDAoISU5BQ1RJVkUQAiJRCghTZXZlcml0eRIYChRTRVZFUklUWV9VTlNQRUNJRklFRBAAEgwKCENSSVRJQ0FMEAESCAoESElHSBACEgoKBk1FRElVTRADEgcKA0xPVxAEIkMKBE11dGUSFAoQTVVURV9VTlNQRUNJRklFRBAAEgkKBU1VVEVEEAESCwoHVU5NVVRFRBACEg0KCVVOREVGSU5FRBADIrABCgxGaW5kaW5nQ2xhc3MSHQoZRklORElOR19DTEFTU19VTlNQRUNJRklFRBAAEgoKBlRIUkVBVBABEhEKDVZVTE5FUkFCSUxJVFkQAhIUChBNSVNDT05GSUdVUkFUSU9OEAMSDwoLT0JTRVJWQVRJT04QBBINCglTQ0NfRVJST1IQBRIVChFQT1NUVVJFX1ZJT0xBVElPThAGEhUKEVRPWElDX0NPTUJJTkFUSU9OEAc63QPqQdkDCiVzZWN1cml0eWNlbnRlci5nb29nbGVhcGlzLmNvbS9GaW5kaW5nEkBvcmdhbml6YXRpb25zL3tvcmdhbml6YXRpb259L3NvdXJjZXMve3NvdXJjZX0vZmluZGluZ3Mve2ZpbmRpbmd9ElVvcmdhbml6YXRpb25zL3tvcmdhbml6YXRpb259L3NvdXJjZXMve3NvdXJjZX0vbG9jYXRpb25zL3tsb2NhdGlvbn0vZmluZGluZ3Mve2ZpbmRpbmd9EjRmb2xkZXJzL3tmb2xkZXJ9L3NvdXJjZXMve3NvdXJjZX0vZmluZGluZ3Mve2ZpbmRpbmd9Eklmb2xkZXJzL3tmb2xkZXJ9L3NvdXJjZXMve3NvdXJjZX0vbG9jYXRpb25zL3tsb2NhdGlvbn0vZmluZGluZ3Mve2ZpbmRpbmd9EjZwcm9qZWN0cy97cHJvamVjdH0vc291cmNlcy97c291cmNlfS9maW5kaW5ncy97ZmluZGluZ30SS3Byb2plY3RzL3twcm9qZWN0fS9zb3VyY2VzL3tzb3VyY2V9L2xvY2F0aW9ucy97bG9jYXRpb259L2ZpbmRpbmdzL3tmaW5kaW5nfSoIZmluZGluZ3MyB2ZpbmRpbmdC5gEKImNvbS5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjJCDEZpbmRpbmdQcm90b1ABWkpjbG91ZC5nb29nbGUuY29tL2dvL3NlY3VyaXR5Y2VudGVyL2FwaXYyL3NlY3VyaXR5Y2VudGVycGI7c2VjdXJpdHljZW50ZXJwYqoCHkdvb2dsZS5DbG91ZC5TZWN1cml0eUNlbnRlci5WMsoCHkdvb2dsZVxDbG91ZFxTZWN1cml0eUNlbnRlclxWMuoCIUdvb2dsZTo6Q2xvdWQ6OlNlY3VyaXR5Q2VudGVyOjpWMmIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_securitycenter_v2_access, file_google_cloud_securitycenter_v2_application, file_google_cloud_securitycenter_v2_attack_exposure, file_google_cloud_securitycenter_v2_backup_disaster_recovery, file_google_cloud_securitycenter_v2_cloud_armor, file_google_cloud_securitycenter_v2_cloud_dlp_data_profile, file_google_cloud_securitycenter_v2_cloud_dlp_inspection, file_google_cloud_securitycenter_v2_compliance, file_google_cloud_securitycenter_v2_connection, file_google_cloud_securitycenter_v2_contact_details, file_google_cloud_securitycenter_v2_container, file_google_cloud_securitycenter_v2_database, file_google_cloud_securitycenter_v2_exfiltration, file_google_cloud_securitycenter_v2_external_system, file_google_cloud_securitycenter_v2_file, file_google_cloud_securitycenter_v2_group_membership, file_google_cloud_securitycenter_v2_iam_binding, file_google_cloud_securitycenter_v2_indicator, file_google_cloud_securitycenter_v2_kernel_rootkit, file_google_cloud_securitycenter_v2_kubernetes, file_google_cloud_securitycenter_v2_load_balancer, file_google_cloud_securitycenter_v2_log_entry, file_google_cloud_securitycenter_v2_mitre_attack, file_google_cloud_securitycenter_v2_notebook, file_google_cloud_securitycenter_v2_org_policy, file_google_cloud_securitycenter_v2_process, file_google_cloud_securitycenter_v2_security_marks, file_google_cloud_securitycenter_v2_security_posture, file_google_cloud_securitycenter_v2_toxic_combination, file_google_cloud_securitycenter_v2_vulnerability, file_google_protobuf_struct, file_google_protobuf_timestamp]);

/**
 * Security Command Center finding.
 *
 * A finding is a record of assessment data like security, risk, health, or
 * privacy, that is ingested into Security Command Center for presentation,
 * notification, analysis, policy testing, and enforcement. For example, a
 * cross-site scripting (XSS) vulnerability in an App Engine application is a
 * finding.
 *
 * @generated from message google.cloud.securitycenter.v2.Finding
 */
export type Finding = Message<"google.cloud.securitycenter.v2.Finding"> & {
  /**
   * The [relative resource
   * name](https://cloud.google.com/apis/design/resource_names#relative_resource_name)
   * of the finding. The following list shows some examples:
   *
   * +
   * `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`
   * +
   * `organizations/{organization_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}`
   * + `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`
   * +
   * `folders/{folder_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}`
   * + `projects/{project_id}/sources/{source_id}/findings/{finding_id}`
   * +
   * `projects/{project_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Output only. The canonical name of the finding. The following list shows
   * some examples:
   *
   * +
   * `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`
   * +
   * `organizations/{organization_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}`
   * + `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`
   * +
   * `folders/{folder_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}`
   * + `projects/{project_id}/sources/{source_id}/findings/{finding_id}`
   * +
   * `projects/{project_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}`
   *
   * The prefix is the closest CRM ancestor of the resource associated with the
   * finding.
   *
   * @generated from field: string canonical_name = 2;
   */
  canonicalName: string;

  /**
   * The relative resource name of the source and location the finding belongs
   * to. See:
   * https://cloud.google.com/apis/design/resource_names#relative_resource_name
   * This field is immutable after creation time. The following list shows some
   * examples:
   *
   * + `organizations/{organization_id}/sources/{source_id}`
   * + `folders/{folders_id}/sources/{source_id}`
   * + `projects/{projects_id}/sources/{source_id}`
   * +
   * `organizations/{organization_id}/sources/{source_id}/locations/{location_id}`
   * + `folders/{folders_id}/sources/{source_id}/locations/{location_id}`
   * + `projects/{projects_id}/sources/{source_id}/locations/{location_id}`
   *
   * @generated from field: string parent = 3;
   */
  parent: string;

  /**
   * Immutable. For findings on Google Cloud resources, the full resource
   * name of the Google Cloud resource this finding is for. See:
   * https://cloud.google.com/apis/design/resource_names#full_resource_name
   * When the finding is for a non-Google Cloud resource, the resourceName can
   * be a customer or partner defined string.
   *
   * @generated from field: string resource_name = 4;
   */
  resourceName: string;

  /**
   * Output only. The state of the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.Finding.State state = 6;
   */
  state: Finding_State;

  /**
   * Immutable. The additional taxonomy group within findings from a given
   * source. Example: "XSS_FLASH_INJECTION"
   *
   * @generated from field: string category = 7;
   */
  category: string;

  /**
   * The URI that, if available, points to a web page outside of Security
   * Command Center where additional information about the finding can be found.
   * This field is guaranteed to be either empty or a well formed URL.
   *
   * @generated from field: string external_uri = 8;
   */
  externalUri: string;

  /**
   * Source specific properties. These properties are managed by the source
   * that writes the finding. The key names in the source_properties map must be
   * between 1 and 255 characters, and must start with a letter and contain
   * alphanumeric characters or underscores only.
   *
   * @generated from field: map<string, google.protobuf.Value> source_properties = 9;
   */
  sourceProperties: { [key: string]: Value };

  /**
   * Output only. User specified security marks. These marks are entirely
   * managed by the user and come from the SecurityMarks resource that belongs
   * to the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.SecurityMarks security_marks = 10;
   */
  securityMarks?: SecurityMarks;

  /**
   * The time the finding was first detected. If an existing finding is updated,
   * then this is the time the update occurred.
   * For example, if the finding represents an open firewall, this property
   * captures the time the detector believes the firewall became open. The
   * accuracy is determined by the detector. If the finding is later resolved,
   * then this time reflects when the finding was resolved. This must not
   * be set to a value greater than the current timestamp.
   *
   * @generated from field: google.protobuf.Timestamp event_time = 11;
   */
  eventTime?: Timestamp;

  /**
   * Output only. The time at which the finding was created in Security Command
   * Center.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 12;
   */
  createTime?: Timestamp;

  /**
   * The severity of the finding. This field is managed by the source that
   * writes the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.Finding.Severity severity = 14;
   */
  severity: Finding_Severity;

  /**
   * Indicates the mute state of a finding (either muted, unmuted
   * or undefined). Unlike other attributes of a finding, a finding provider
   * shouldn't set the value of mute.
   *
   * @generated from field: google.cloud.securitycenter.v2.Finding.Mute mute = 15;
   */
  mute: Finding_Mute;

  /**
   * Output only. The mute information regarding this finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.Finding.MuteInfo mute_info = 53;
   */
  muteInfo?: Finding_MuteInfo;

  /**
   * The class of the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.Finding.FindingClass finding_class = 16;
   */
  findingClass: Finding_FindingClass;

  /**
   * Represents what's commonly known as an *indicator of compromise* (IoC) in
   * computer forensics. This is an artifact observed on a network or in an
   * operating system that, with high confidence, indicates a computer
   * intrusion. For more information, see [Indicator of
   * compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
   *
   * @generated from field: google.cloud.securitycenter.v2.Indicator indicator = 17;
   */
  indicator?: Indicator;

  /**
   * Represents vulnerability-specific fields like CVE and CVSS scores.
   * CVE stands for Common Vulnerabilities and Exposures
   * (https://cve.mitre.org/about/)
   *
   * @generated from field: google.cloud.securitycenter.v2.Vulnerability vulnerability = 18;
   */
  vulnerability?: Vulnerability;

  /**
   * Output only. The most recent time this finding was muted or unmuted.
   *
   * @generated from field: google.protobuf.Timestamp mute_update_time = 19;
   */
  muteUpdateTime?: Timestamp;

  /**
   * Output only. Third party SIEM/SOAR fields within SCC, contains external
   * system information and external system finding fields.
   *
   * @generated from field: map<string, google.cloud.securitycenter.v2.ExternalSystem> external_systems = 20;
   */
  externalSystems: { [key: string]: ExternalSystem };

  /**
   * MITRE ATT&CK tactics and techniques related to this finding.
   * See: https://attack.mitre.org
   *
   * @generated from field: google.cloud.securitycenter.v2.MitreAttack mitre_attack = 21;
   */
  mitreAttack?: MitreAttack;

  /**
   * Access details associated with the finding, such as more information on the
   * caller, which method was accessed, and from where.
   *
   * @generated from field: google.cloud.securitycenter.v2.Access access = 22;
   */
  access?: Access;

  /**
   * Contains information about the IP connection associated with the finding.
   *
   * @generated from field: repeated google.cloud.securitycenter.v2.Connection connections = 23;
   */
  connections: Connection[];

  /**
   * Records additional information about the mute operation, for example, the
   * [mute
   * configuration](https://cloud.google.com/security-command-center/docs/how-to-mute-findings)
   * that muted the finding and the user who muted the finding.
   *
   * @generated from field: string mute_initiator = 24;
   */
  muteInitiator: string;

  /**
   * Represents operating system processes associated with the Finding.
   *
   * @generated from field: repeated google.cloud.securitycenter.v2.Process processes = 25;
   */
  processes: Process[];

  /**
   * Output only. Map containing the points of contact for the given finding.
   * The key represents the type of contact, while the value contains a list of
   * all the contacts that pertain. Please refer to:
   * https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories
   *
   *     {
   *       "security": {
   *         "contacts": [
   *           {
   *             "email": "person1@company.com"
   *           },
   *           {
   *             "email": "person2@company.com"
   *           }
   *         ]
   *       }
   *     }
   *
   * @generated from field: map<string, google.cloud.securitycenter.v2.ContactDetails> contacts = 26;
   */
  contacts: { [key: string]: ContactDetails };

  /**
   * Contains compliance information for security standards associated to the
   * finding.
   *
   * @generated from field: repeated google.cloud.securitycenter.v2.Compliance compliances = 27;
   */
  compliances: Compliance[];

  /**
   * Output only. The human readable display name of the finding source such as
   * "Event Threat Detection" or "Security Health Analytics".
   *
   * @generated from field: string parent_display_name = 29;
   */
  parentDisplayName: string;

  /**
   * Contains more details about the finding.
   *
   * @generated from field: string description = 30;
   */
  description: string;

  /**
   * Represents exfiltrations associated with the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.Exfiltration exfiltration = 31;
   */
  exfiltration?: Exfiltration;

  /**
   * Represents IAM bindings associated with the finding.
   *
   * @generated from field: repeated google.cloud.securitycenter.v2.IamBinding iam_bindings = 32;
   */
  iamBindings: IamBinding[];

  /**
   * Steps to address the finding.
   *
   * @generated from field: string next_steps = 33;
   */
  nextSteps: string;

  /**
   * Unique identifier of the module which generated the finding.
   * Example:
   * folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885
   *
   * @generated from field: string module_name = 34;
   */
  moduleName: string;

  /**
   * Containers associated with the finding. This field provides information for
   * both Kubernetes and non-Kubernetes containers.
   *
   * @generated from field: repeated google.cloud.securitycenter.v2.Container containers = 35;
   */
  containers: Container[];

  /**
   * Kubernetes resources associated with the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.Kubernetes kubernetes = 36;
   */
  kubernetes?: Kubernetes;

  /**
   * Database associated with the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.Database database = 37;
   */
  database?: Database;

  /**
   * The results of an attack path simulation relevant to this finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.AttackExposure attack_exposure = 38;
   */
  attackExposure?: AttackExposure;

  /**
   * File associated with the finding.
   *
   * @generated from field: repeated google.cloud.securitycenter.v2.File files = 39;
   */
  files: File[];

  /**
   * Cloud Data Loss Prevention (Cloud DLP) inspection results that are
   * associated with the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.CloudDlpInspection cloud_dlp_inspection = 40;
   */
  cloudDlpInspection?: CloudDlpInspection;

  /**
   * Cloud DLP data profile that is associated with the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.CloudDlpDataProfile cloud_dlp_data_profile = 41;
   */
  cloudDlpDataProfile?: CloudDlpDataProfile;

  /**
   * Signature of the kernel rootkit.
   *
   * @generated from field: google.cloud.securitycenter.v2.KernelRootkit kernel_rootkit = 42;
   */
  kernelRootkit?: KernelRootkit;

  /**
   * Contains information about the org policies associated with the finding.
   *
   * @generated from field: repeated google.cloud.securitycenter.v2.OrgPolicy org_policies = 43;
   */
  orgPolicies: OrgPolicy[];

  /**
   * Represents an application associated with the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.Application application = 45;
   */
  application?: Application;

  /**
   * Fields related to Backup and DR findings.
   *
   * @generated from field: google.cloud.securitycenter.v2.BackupDisasterRecovery backup_disaster_recovery = 47;
   */
  backupDisasterRecovery?: BackupDisasterRecovery;

  /**
   * The security posture associated with the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.SecurityPosture security_posture = 48;
   */
  securityPosture?: SecurityPosture;

  /**
   * Log entries that are relevant to the finding.
   *
   * @generated from field: repeated google.cloud.securitycenter.v2.LogEntry log_entries = 49;
   */
  logEntries: LogEntry[];

  /**
   * The load balancers associated with the finding.
   *
   * @generated from field: repeated google.cloud.securitycenter.v2.LoadBalancer load_balancers = 50;
   */
  loadBalancers: LoadBalancer[];

  /**
   * Fields related to Cloud Armor findings.
   *
   * @generated from field: google.cloud.securitycenter.v2.CloudArmor cloud_armor = 51;
   */
  cloudArmor?: CloudArmor;

  /**
   * Notebook associated with the finding.
   *
   * @generated from field: google.cloud.securitycenter.v2.Notebook notebook = 55;
   */
  notebook?: Notebook;

  /**
   * Contains details about a group of security issues that, when the issues
   * occur together, represent a greater risk than when the issues occur
   * independently. A group of such issues is referred to as a toxic
   * combination.
   * This field cannot be updated. Its value is ignored in all update requests.
   *
   * @generated from field: google.cloud.securitycenter.v2.ToxicCombination toxic_combination = 56;
   */
  toxicCombination?: ToxicCombination;

  /**
   * Contains details about groups of which this finding is a member. A group is
   * a collection of findings that are related in some way.
   * This field cannot be updated. Its value is ignored in all update requests.
   *
   * @generated from field: repeated google.cloud.securitycenter.v2.GroupMembership group_memberships = 57;
   */
  groupMemberships: GroupMembership[];
};

/**
 * Describes the message google.cloud.securitycenter.v2.Finding.
 * Use `create(FindingSchema)` to create a new message.
 */
export const FindingSchema: GenMessage<Finding> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v2_finding, 0);

/**
 * Mute information about the finding, including whether the finding has a
 * static mute or any matching dynamic mute rules.
 *
 * @generated from message google.cloud.securitycenter.v2.Finding.MuteInfo
 */
export type Finding_MuteInfo = Message<"google.cloud.securitycenter.v2.Finding.MuteInfo"> & {
  /**
   * If set, the static mute applied to this finding. Static mutes override
   * dynamic mutes. If unset, there is no static mute.
   *
   * @generated from field: google.cloud.securitycenter.v2.Finding.MuteInfo.StaticMute static_mute = 1;
   */
  staticMute?: Finding_MuteInfo_StaticMute;

  /**
   * The list of dynamic mute rules that currently match the finding.
   *
   * @generated from field: repeated google.cloud.securitycenter.v2.Finding.MuteInfo.DynamicMuteRecord dynamic_mute_records = 2;
   */
  dynamicMuteRecords: Finding_MuteInfo_DynamicMuteRecord[];
};

/**
 * Describes the message google.cloud.securitycenter.v2.Finding.MuteInfo.
 * Use `create(Finding_MuteInfoSchema)` to create a new message.
 */
export const Finding_MuteInfoSchema: GenMessage<Finding_MuteInfo> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v2_finding, 0, 0);

/**
 * Information about the static mute state. A static mute state overrides
 * any dynamic mute rules that apply to this finding. The static mute state
 * can be set by a static mute rule or by muting the finding directly.
 *
 * @generated from message google.cloud.securitycenter.v2.Finding.MuteInfo.StaticMute
 */
export type Finding_MuteInfo_StaticMute = Message<"google.cloud.securitycenter.v2.Finding.MuteInfo.StaticMute"> & {
  /**
   * The static mute state. If the value is `MUTED` or `UNMUTED`, then the
   * finding's overall mute state will have the same value.
   *
   * @generated from field: google.cloud.securitycenter.v2.Finding.Mute state = 1;
   */
  state: Finding_Mute;

  /**
   * When the static mute was applied.
   *
   * @generated from field: google.protobuf.Timestamp apply_time = 2;
   */
  applyTime?: Timestamp;
};

/**
 * Describes the message google.cloud.securitycenter.v2.Finding.MuteInfo.StaticMute.
 * Use `create(Finding_MuteInfo_StaticMuteSchema)` to create a new message.
 */
export const Finding_MuteInfo_StaticMuteSchema: GenMessage<Finding_MuteInfo_StaticMute> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v2_finding, 0, 0, 0);

/**
 * The record of a dynamic mute rule that matches the finding.
 *
 * @generated from message google.cloud.securitycenter.v2.Finding.MuteInfo.DynamicMuteRecord
 */
export type Finding_MuteInfo_DynamicMuteRecord = Message<"google.cloud.securitycenter.v2.Finding.MuteInfo.DynamicMuteRecord"> & {
  /**
   * The relative resource name of the mute rule, represented by a mute
   * config, that created this record, for example
   * `organizations/123/muteConfigs/mymuteconfig` or
   * `organizations/123/locations/global/muteConfigs/mymuteconfig`.
   *
   * @generated from field: string mute_config = 1;
   */
  muteConfig: string;

  /**
   * When the dynamic mute rule first matched the finding.
   *
   * @generated from field: google.protobuf.Timestamp match_time = 2;
   */
  matchTime?: Timestamp;
};

/**
 * Describes the message google.cloud.securitycenter.v2.Finding.MuteInfo.DynamicMuteRecord.
 * Use `create(Finding_MuteInfo_DynamicMuteRecordSchema)` to create a new message.
 */
export const Finding_MuteInfo_DynamicMuteRecordSchema: GenMessage<Finding_MuteInfo_DynamicMuteRecord> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v2_finding, 0, 0, 1);

/**
 * The state of the finding.
 *
 * @generated from enum google.cloud.securitycenter.v2.Finding.State
 */
export enum Finding_State {
  /**
   * Unspecified state.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * The finding requires attention and has not been addressed yet.
   *
   * @generated from enum value: ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * The finding has been fixed, triaged as a non-issue or otherwise addressed
   * and is no longer active.
   *
   * @generated from enum value: INACTIVE = 2;
   */
  INACTIVE = 2,
}

/**
 * Describes the enum google.cloud.securitycenter.v2.Finding.State.
 */
export const Finding_StateSchema: GenEnum<Finding_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_securitycenter_v2_finding, 0, 0);

/**
 * The severity of the finding.
 *
 * @generated from enum google.cloud.securitycenter.v2.Finding.Severity
 */
export enum Finding_Severity {
  /**
   * This value is used for findings when a source doesn't write a severity
   * value.
   *
   * @generated from enum value: SEVERITY_UNSPECIFIED = 0;
   */
  SEVERITY_UNSPECIFIED = 0,

  /**
   * Vulnerability:
   * A critical vulnerability is easily discoverable by an external actor,
   * exploitable, and results in the direct ability to execute arbitrary code,
   * exfiltrate data, and otherwise gain additional access and privileges to
   * cloud resources and workloads. Examples include publicly accessible
   * unprotected user data and public SSH access with weak or no
   * passwords.
   *
   * Threat:
   * Indicates a threat that is able to access, modify, or delete data or
   * execute unauthorized code within existing resources.
   *
   * @generated from enum value: CRITICAL = 1;
   */
  CRITICAL = 1,

  /**
   * Vulnerability:
   * A high risk vulnerability can be easily discovered and exploited in
   * combination with other vulnerabilities in order to gain direct access and
   * the ability to execute arbitrary code, exfiltrate data, and otherwise
   * gain additional access and privileges to cloud resources and workloads.
   * An example is a database with weak or no passwords that is only
   * accessible internally. This database could easily be compromised by an
   * actor that had access to the internal network.
   *
   * Threat:
   * Indicates a threat that is able to create new computational resources in
   * an environment but not able to access data or execute code in existing
   * resources.
   *
   * @generated from enum value: HIGH = 2;
   */
  HIGH = 2,

  /**
   * Vulnerability:
   * A medium risk vulnerability could be used by an actor to gain access to
   * resources or privileges that enable them to eventually (through multiple
   * steps or a complex exploit) gain access and the ability to execute
   * arbitrary code or exfiltrate data. An example is a service account with
   * access to more projects than it should have. If an actor gains access to
   * the service account, they could potentially use that access to manipulate
   * a project the service account was not intended to.
   *
   * Threat:
   * Indicates a threat that is able to cause operational impact but may not
   * access data or execute unauthorized code.
   *
   * @generated from enum value: MEDIUM = 3;
   */
  MEDIUM = 3,

  /**
   * Vulnerability:
   * A low risk vulnerability hampers a security organization's ability to
   * detect vulnerabilities or active threats in their deployment, or prevents
   * the root cause investigation of security issues. An example is monitoring
   * and logs being disabled for resource configurations and access.
   *
   * Threat:
   * Indicates a threat that has obtained minimal access to an environment but
   * is not able to access data, execute code, or create resources.
   *
   * @generated from enum value: LOW = 4;
   */
  LOW = 4,
}

/**
 * Describes the enum google.cloud.securitycenter.v2.Finding.Severity.
 */
export const Finding_SeveritySchema: GenEnum<Finding_Severity> = /*@__PURE__*/
  enumDesc(file_google_cloud_securitycenter_v2_finding, 0, 1);

/**
 * Mute state a finding can be in.
 *
 * @generated from enum google.cloud.securitycenter.v2.Finding.Mute
 */
export enum Finding_Mute {
  /**
   * Unspecified.
   *
   * @generated from enum value: MUTE_UNSPECIFIED = 0;
   */
  MUTE_UNSPECIFIED = 0,

  /**
   * Finding has been muted.
   *
   * @generated from enum value: MUTED = 1;
   */
  MUTED = 1,

  /**
   * Finding has been unmuted.
   *
   * @generated from enum value: UNMUTED = 2;
   */
  UNMUTED = 2,

  /**
   * Finding has never been muted/unmuted.
   *
   * @generated from enum value: UNDEFINED = 3;
   */
  UNDEFINED = 3,
}

/**
 * Describes the enum google.cloud.securitycenter.v2.Finding.Mute.
 */
export const Finding_MuteSchema: GenEnum<Finding_Mute> = /*@__PURE__*/
  enumDesc(file_google_cloud_securitycenter_v2_finding, 0, 2);

/**
 * Represents what kind of Finding it is.
 *
 * @generated from enum google.cloud.securitycenter.v2.Finding.FindingClass
 */
export enum Finding_FindingClass {
  /**
   * Unspecified finding class.
   *
   * @generated from enum value: FINDING_CLASS_UNSPECIFIED = 0;
   */
  FINDING_CLASS_UNSPECIFIED = 0,

  /**
   * Describes unwanted or malicious activity.
   *
   * @generated from enum value: THREAT = 1;
   */
  THREAT = 1,

  /**
   * Describes a potential weakness in software that increases risk to
   * Confidentiality & Integrity & Availability.
   *
   * @generated from enum value: VULNERABILITY = 2;
   */
  VULNERABILITY = 2,

  /**
   * Describes a potential weakness in cloud resource/asset configuration that
   * increases risk.
   *
   * @generated from enum value: MISCONFIGURATION = 3;
   */
  MISCONFIGURATION = 3,

  /**
   * Describes a security observation that is for informational purposes.
   *
   * @generated from enum value: OBSERVATION = 4;
   */
  OBSERVATION = 4,

  /**
   * Describes an error that prevents some SCC functionality.
   *
   * @generated from enum value: SCC_ERROR = 5;
   */
  SCC_ERROR = 5,

  /**
   * Describes a potential security risk due to a change in the security
   * posture.
   *
   * @generated from enum value: POSTURE_VIOLATION = 6;
   */
  POSTURE_VIOLATION = 6,

  /**
   * Describes a combination of security issues that represent a more severe
   * security problem when taken together.
   *
   * @generated from enum value: TOXIC_COMBINATION = 7;
   */
  TOXIC_COMBINATION = 7,
}

/**
 * Describes the enum google.cloud.securitycenter.v2.Finding.FindingClass.
 */
export const Finding_FindingClassSchema: GenEnum<Finding_FindingClass> = /*@__PURE__*/
  enumDesc(file_google_cloud_securitycenter_v2_finding, 0, 3);
