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
// @generated from file google/cloud/oracledatabase/v1/vm_cluster.proto (package google.cloud.oracledatabase.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { TimeZone } from "../../../type/datetime_pb";
import { file_google_type_datetime } from "../../../type/datetime_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/oracledatabase/v1/vm_cluster.proto.
 */
export const file_google_cloud_oracledatabase_v1_vm_cluster: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvY2xvdWQvb3JhY2xlZGF0YWJhc2UvdjEvdm1fY2x1c3Rlci5wcm90bxIeZ29vZ2xlLmNsb3VkLm9yYWNsZWRhdGFiYXNlLnYxItYFCg5DbG91ZFZtQ2x1c3RlchIRCgRuYW1lGAEgASgJQgPgQQgSYAoWZXhhZGF0YV9pbmZyYXN0cnVjdHVyZRgCIAEoCUJA4EEC+kE6CjhvcmFjbGVkYXRhYmFzZS5nb29nbGVhcGlzLmNvbS9DbG91ZEV4YWRhdGFJbmZyYXN0cnVjdHVyZRIZCgxkaXNwbGF5X25hbWUYAyABKAlCA+BBARIcCg9nY3Bfb3JhY2xlX3pvbmUYDCABKAlCA+BBAxJRCgpwcm9wZXJ0aWVzGAYgASgLMjguZ29vZ2xlLmNsb3VkLm9yYWNsZWRhdGFiYXNlLnYxLkNsb3VkVm1DbHVzdGVyUHJvcGVydGllc0ID4EEBEk8KBmxhYmVscxgHIAMoCzI6Lmdvb2dsZS5jbG91ZC5vcmFjbGVkYXRhYmFzZS52MS5DbG91ZFZtQ2x1c3Rlci5MYWJlbHNFbnRyeUID4EEBEjQKC2NyZWF0ZV90aW1lGAggASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEhEKBGNpZHIYCSABKAlCA+BBAhIfChJiYWNrdXBfc3VibmV0X2NpZHIYCiABKAlCA+BBAhI3CgduZXR3b3JrGAsgASgJQibgQQL6QSAKHmNvbXB1dGUuZ29vZ2xlYXBpcy5jb20vTmV0d29yaxotCgtMYWJlbHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBOp8B6kGbAQosb3JhY2xlZGF0YWJhc2UuZ29vZ2xlYXBpcy5jb20vQ2xvdWRWbUNsdXN0ZXISSnByb2plY3RzL3twcm9qZWN0fS9sb2NhdGlvbnMve2xvY2F0aW9ufS9jbG91ZFZtQ2x1c3RlcnMve2Nsb3VkX3ZtX2NsdXN0ZXJ9Kg9jbG91ZFZtQ2x1c3RlcnMyDmNsb3VkVm1DbHVzdGVyIpwMChhDbG91ZFZtQ2x1c3RlclByb3BlcnRpZXMSEQoEb2NpZBgBIAEoCUID4EEDEl8KDGxpY2Vuc2VfdHlwZRgCIAEoDjJELmdvb2dsZS5jbG91ZC5vcmFjbGVkYXRhYmFzZS52MS5DbG91ZFZtQ2x1c3RlclByb3BlcnRpZXMuTGljZW5zZVR5cGVCA+BBAhIXCgpnaV92ZXJzaW9uGAMgASgJQgPgQQESLQoJdGltZV96b25lGAQgASgLMhUuZ29vZ2xlLnR5cGUuVGltZVpvbmVCA+BBARIcCg9zc2hfcHVibGljX2tleXMYBSADKAlCA+BBARIXCgpub2RlX2NvdW50GAYgASgFQgPgQQESEgoFc2hhcGUYByABKAlCA+BBAxIXCgpvY3B1X2NvdW50GAggASgCQgPgQQESGwoObWVtb3J5X3NpemVfZ2IYCSABKAVCA+BBARIkChdkYl9ub2RlX3N0b3JhZ2Vfc2l6ZV9nYhgKIAEoBUID4EEBEhwKD3N0b3JhZ2Vfc2l6ZV9nYhgLIAEoBUID4EEDEiEKFGRhdGFfc3RvcmFnZV9zaXplX3RiGAwgASgBQgPgQQESZQoPZGlza19yZWR1bmRhbmN5GA0gASgOMkcuZ29vZ2xlLmNsb3VkLm9yYWNsZWRhdGFiYXNlLnYxLkNsb3VkVm1DbHVzdGVyUHJvcGVydGllcy5EaXNrUmVkdW5kYW5jeUID4EEBEiUKGHNwYXJzZV9kaXNrZ3JvdXBfZW5hYmxlZBgOIAEoCEID4EEBEiEKFGxvY2FsX2JhY2t1cF9lbmFibGVkGA8gASgIQgPgQQESHAoPaG9zdG5hbWVfcHJlZml4GBAgASgJQgPgQQESZwojZGlhZ25vc3RpY3NfZGF0YV9jb2xsZWN0aW9uX29wdGlvbnMYEyABKAsyNS5nb29nbGUuY2xvdWQub3JhY2xlZGF0YWJhc2UudjEuRGF0YUNvbGxlY3Rpb25PcHRpb25zQgPgQQESUgoFc3RhdGUYFCABKA4yPi5nb29nbGUuY2xvdWQub3JhY2xlZGF0YWJhc2UudjEuQ2xvdWRWbUNsdXN0ZXJQcm9wZXJ0aWVzLlN0YXRlQgPgQQMSIwoWc2Nhbl9saXN0ZW5lcl9wb3J0X3RjcBgVIAEoBUID4EEDEicKGnNjYW5fbGlzdGVuZXJfcG9ydF90Y3Bfc3NsGBYgASgFQgPgQQMSEwoGZG9tYWluGBcgASgJQgPgQQMSFQoIc2Nhbl9kbnMYGCABKAlCA+BBAxIVCghob3N0bmFtZRgZIAEoCUID4EEDEhsKDmNwdV9jb3JlX2NvdW50GBogASgFQgPgQQISGwoOc3lzdGVtX3ZlcnNpb24YGyABKAlCA+BBAxIYCgtzY2FuX2lwX2lkcxgcIAMoCUID4EEDEh8KEnNjYW5fZG5zX3JlY29yZF9pZBgdIAEoCUID4EEDEhQKB29jaV91cmwYHiABKAlCA+BBAxIcCg9kYl9zZXJ2ZXJfb2NpZHMYHyADKAlCA+BBARIbCg5jb21wYXJ0bWVudF9pZBggIAEoCUID4EEDEhwKD2Ruc19saXN0ZW5lcl9pcBgjIAEoCUID4EEDEhkKDGNsdXN0ZXJfbmFtZRgkIAEoCUID4EEBIl0KC0xpY2Vuc2VUeXBlEhwKGExJQ0VOU0VfVFlQRV9VTlNQRUNJRklFRBAAEhQKEExJQ0VOU0VfSU5DTFVERUQQARIaChZCUklOR19ZT1VSX09XTl9MSUNFTlNFEAIiRwoORGlza1JlZHVuZGFuY3kSHwobRElTS19SRURVTkRBTkNZX1VOU1BFQ0lGSUVEEAASCAoESElHSBABEgoKBk5PUk1BTBACIpcBCgVTdGF0ZRIVChFTVEFURV9VTlNQRUNJRklFRBAAEhAKDFBST1ZJU0lPTklORxABEg0KCUFWQUlMQUJMRRACEgwKCFVQREFUSU5HEAMSDwoLVEVSTUlOQVRJTkcQBBIOCgpURVJNSU5BVEVEEAUSCgoGRkFJTEVEEAYSGwoXTUFJTlRFTkFOQ0VfSU5fUFJPR1JFU1MQByKMAQoVRGF0YUNvbGxlY3Rpb25PcHRpb25zEicKGmRpYWdub3N0aWNzX2V2ZW50c19lbmFibGVkGAEgASgIQgPgQQESJgoZaGVhbHRoX21vbml0b3JpbmdfZW5hYmxlZBgCIAEoCEID4EEBEiIKFWluY2lkZW50X2xvZ3NfZW5hYmxlZBgDIAEoCEID4EEBQu0BCiJjb20uZ29vZ2xlLmNsb3VkLm9yYWNsZWRhdGFiYXNlLnYxQhNDbG91ZFZtQ2x1c3RlclByb3RvUAFaSmNsb3VkLmdvb2dsZS5jb20vZ28vb3JhY2xlZGF0YWJhc2UvYXBpdjEvb3JhY2xlZGF0YWJhc2VwYjtvcmFjbGVkYXRhYmFzZXBiqgIeR29vZ2xlLkNsb3VkLk9yYWNsZURhdGFiYXNlLlYxygIeR29vZ2xlXENsb3VkXE9yYWNsZURhdGFiYXNlXFYx6gIhR29vZ2xlOjpDbG91ZDo6T3JhY2xlRGF0YWJhc2U6OlYxYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource, file_google_protobuf_timestamp, file_google_type_datetime]);

/**
 * Details of the Cloud VM Cluster resource.
 * https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/CloudVmCluster/
 *
 * @generated from message google.cloud.oracledatabase.v1.CloudVmCluster
 */
export type CloudVmCluster = Message<"google.cloud.oracledatabase.v1.CloudVmCluster"> & {
  /**
   * Identifier. The name of the VM Cluster resource with the format:
   * projects/{project}/locations/{region}/cloudVmClusters/{cloud_vm_cluster}
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. The name of the Exadata Infrastructure resource on which VM
   * cluster resource is created, in the following format:
   * projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}
   *
   * @generated from field: string exadata_infrastructure = 2;
   */
  exadataInfrastructure: string;

  /**
   * Optional. User friendly name for this resource.
   *
   * @generated from field: string display_name = 3;
   */
  displayName: string;

  /**
   * Output only. Google Cloud Platform location where Oracle Exadata is hosted.
   * It is same as Google Cloud Platform Oracle zone of Exadata infrastructure.
   *
   * @generated from field: string gcp_oracle_zone = 12;
   */
  gcpOracleZone: string;

  /**
   * Optional. Various properties of the VM Cluster.
   *
   * @generated from field: google.cloud.oracledatabase.v1.CloudVmClusterProperties properties = 6;
   */
  properties?: CloudVmClusterProperties;

  /**
   * Optional. Labels or tags associated with the VM Cluster.
   *
   * @generated from field: map<string, string> labels = 7;
   */
  labels: { [key: string]: string };

  /**
   * Output only. The date and time that the VM cluster was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 8;
   */
  createTime?: Timestamp;

  /**
   * Required. Network settings. CIDR to use for cluster IP allocation.
   *
   * @generated from field: string cidr = 9;
   */
  cidr: string;

  /**
   * Required. CIDR range of the backup subnet.
   *
   * @generated from field: string backup_subnet_cidr = 10;
   */
  backupSubnetCidr: string;

  /**
   * Required. The name of the VPC network.
   * Format: projects/{project}/global/networks/{network}
   *
   * @generated from field: string network = 11;
   */
  network: string;
};

/**
 * Describes the message google.cloud.oracledatabase.v1.CloudVmCluster.
 * Use `create(CloudVmClusterSchema)` to create a new message.
 */
export const CloudVmClusterSchema: GenMessage<CloudVmCluster> = /*@__PURE__*/
  messageDesc(file_google_cloud_oracledatabase_v1_vm_cluster, 0);

/**
 * Various properties and settings associated with Exadata VM cluster.
 *
 * @generated from message google.cloud.oracledatabase.v1.CloudVmClusterProperties
 */
export type CloudVmClusterProperties = Message<"google.cloud.oracledatabase.v1.CloudVmClusterProperties"> & {
  /**
   * Output only. Oracle Cloud Infrastructure ID of VM Cluster.
   *
   * @generated from field: string ocid = 1;
   */
  ocid: string;

  /**
   * Required. License type of VM Cluster.
   *
   * @generated from field: google.cloud.oracledatabase.v1.CloudVmClusterProperties.LicenseType license_type = 2;
   */
  licenseType: CloudVmClusterProperties_LicenseType;

  /**
   * Optional. Grid Infrastructure Version.
   *
   * @generated from field: string gi_version = 3;
   */
  giVersion: string;

  /**
   * Optional. Time zone of VM Cluster to set. Defaults to UTC if not specified.
   *
   * @generated from field: google.type.TimeZone time_zone = 4;
   */
  timeZone?: TimeZone;

  /**
   * Optional. SSH public keys to be stored with cluster.
   *
   * @generated from field: repeated string ssh_public_keys = 5;
   */
  sshPublicKeys: string[];

  /**
   * Optional. Number of database servers.
   *
   * @generated from field: int32 node_count = 6;
   */
  nodeCount: number;

  /**
   * Output only. Shape of VM Cluster.
   *
   * @generated from field: string shape = 7;
   */
  shape: string;

  /**
   * Optional. OCPU count per VM. Minimum is 0.1.
   *
   * @generated from field: float ocpu_count = 8;
   */
  ocpuCount: number;

  /**
   * Optional. Memory allocated in GBs.
   *
   * @generated from field: int32 memory_size_gb = 9;
   */
  memorySizeGb: number;

  /**
   * Optional. Local storage per VM.
   *
   * @generated from field: int32 db_node_storage_size_gb = 10;
   */
  dbNodeStorageSizeGb: number;

  /**
   * Output only. The storage allocation for the disk group, in gigabytes (GB).
   *
   * @generated from field: int32 storage_size_gb = 11;
   */
  storageSizeGb: number;

  /**
   * Optional. The data disk group size to be allocated in TBs.
   *
   * @generated from field: double data_storage_size_tb = 12;
   */
  dataStorageSizeTb: number;

  /**
   * Optional. The type of redundancy.
   *
   * @generated from field: google.cloud.oracledatabase.v1.CloudVmClusterProperties.DiskRedundancy disk_redundancy = 13;
   */
  diskRedundancy: CloudVmClusterProperties_DiskRedundancy;

  /**
   * Optional. Use exadata sparse snapshots.
   *
   * @generated from field: bool sparse_diskgroup_enabled = 14;
   */
  sparseDiskgroupEnabled: boolean;

  /**
   * Optional. Use local backup.
   *
   * @generated from field: bool local_backup_enabled = 15;
   */
  localBackupEnabled: boolean;

  /**
   * Optional. Prefix for VM cluster host names.
   *
   * @generated from field: string hostname_prefix = 16;
   */
  hostnamePrefix: string;

  /**
   * Optional. Data collection options for diagnostics.
   *
   * @generated from field: google.cloud.oracledatabase.v1.DataCollectionOptions diagnostics_data_collection_options = 19;
   */
  diagnosticsDataCollectionOptions?: DataCollectionOptions;

  /**
   * Output only. State of the cluster.
   *
   * @generated from field: google.cloud.oracledatabase.v1.CloudVmClusterProperties.State state = 20;
   */
  state: CloudVmClusterProperties_State;

  /**
   * Output only. SCAN listener port - TCP
   *
   * @generated from field: int32 scan_listener_port_tcp = 21;
   */
  scanListenerPortTcp: number;

  /**
   * Output only. SCAN listener port - TLS
   *
   * @generated from field: int32 scan_listener_port_tcp_ssl = 22;
   */
  scanListenerPortTcpSsl: number;

  /**
   * Output only. Parent DNS domain where SCAN DNS and hosts names are
   * qualified. ex: ocispdelegated.ocisp10jvnet.oraclevcn.com
   *
   * @generated from field: string domain = 23;
   */
  domain: string;

  /**
   * Output only. SCAN DNS name.
   * ex: sp2-yi0xq-scan.ocispdelegated.ocisp10jvnet.oraclevcn.com
   *
   * @generated from field: string scan_dns = 24;
   */
  scanDns: string;

  /**
   * Output only. host name without domain.
   * format: "<hostname_prefix>-" with some suffix.
   * ex: sp2-yi0xq where "sp2" is the hostname_prefix.
   *
   * @generated from field: string hostname = 25;
   */
  hostname: string;

  /**
   * Required. Number of enabled CPU cores.
   *
   * @generated from field: int32 cpu_core_count = 26;
   */
  cpuCoreCount: number;

  /**
   * Output only. Operating system version of the image.
   *
   * @generated from field: string system_version = 27;
   */
  systemVersion: string;

  /**
   * Output only. OCIDs of scan IPs.
   *
   * @generated from field: repeated string scan_ip_ids = 28;
   */
  scanIpIds: string[];

  /**
   * Output only. OCID of scan DNS record.
   *
   * @generated from field: string scan_dns_record_id = 29;
   */
  scanDnsRecordId: string;

  /**
   * Output only. Deep link to the OCI console to view this resource.
   *
   * @generated from field: string oci_url = 30;
   */
  ociUrl: string;

  /**
   * Optional. OCID of database servers.
   *
   * @generated from field: repeated string db_server_ocids = 31;
   */
  dbServerOcids: string[];

  /**
   * Output only. Compartment ID of cluster.
   *
   * @generated from field: string compartment_id = 32;
   */
  compartmentId: string;

  /**
   * Output only. DNS listener IP.
   *
   * @generated from field: string dns_listener_ip = 35;
   */
  dnsListenerIp: string;

  /**
   * Optional. OCI Cluster name.
   *
   * @generated from field: string cluster_name = 36;
   */
  clusterName: string;
};

/**
 * Describes the message google.cloud.oracledatabase.v1.CloudVmClusterProperties.
 * Use `create(CloudVmClusterPropertiesSchema)` to create a new message.
 */
export const CloudVmClusterPropertiesSchema: GenMessage<CloudVmClusterProperties> = /*@__PURE__*/
  messageDesc(file_google_cloud_oracledatabase_v1_vm_cluster, 1);

/**
 * Different licenses supported.
 *
 * @generated from enum google.cloud.oracledatabase.v1.CloudVmClusterProperties.LicenseType
 */
export enum CloudVmClusterProperties_LicenseType {
  /**
   * Unspecified
   *
   * @generated from enum value: LICENSE_TYPE_UNSPECIFIED = 0;
   */
  LICENSE_TYPE_UNSPECIFIED = 0,

  /**
   * License included part of offer
   *
   * @generated from enum value: LICENSE_INCLUDED = 1;
   */
  LICENSE_INCLUDED = 1,

  /**
   * Bring your own license
   *
   * @generated from enum value: BRING_YOUR_OWN_LICENSE = 2;
   */
  BRING_YOUR_OWN_LICENSE = 2,
}

/**
 * Describes the enum google.cloud.oracledatabase.v1.CloudVmClusterProperties.LicenseType.
 */
export const CloudVmClusterProperties_LicenseTypeSchema: GenEnum<CloudVmClusterProperties_LicenseType> = /*@__PURE__*/
  enumDesc(file_google_cloud_oracledatabase_v1_vm_cluster, 1, 0);

/**
 * Types of disk redundancy provided by Oracle.
 *
 * @generated from enum google.cloud.oracledatabase.v1.CloudVmClusterProperties.DiskRedundancy
 */
export enum CloudVmClusterProperties_DiskRedundancy {
  /**
   * Unspecified.
   *
   * @generated from enum value: DISK_REDUNDANCY_UNSPECIFIED = 0;
   */
  DISK_REDUNDANCY_UNSPECIFIED = 0,

  /**
   * High -  3 way mirror.
   *
   * @generated from enum value: HIGH = 1;
   */
  HIGH = 1,

  /**
   * Normal - 2 way mirror.
   *
   * @generated from enum value: NORMAL = 2;
   */
  NORMAL = 2,
}

/**
 * Describes the enum google.cloud.oracledatabase.v1.CloudVmClusterProperties.DiskRedundancy.
 */
export const CloudVmClusterProperties_DiskRedundancySchema: GenEnum<CloudVmClusterProperties_DiskRedundancy> = /*@__PURE__*/
  enumDesc(file_google_cloud_oracledatabase_v1_vm_cluster, 1, 1);

/**
 * The various lifecycle states of the VM cluster.
 *
 * @generated from enum google.cloud.oracledatabase.v1.CloudVmClusterProperties.State
 */
export enum CloudVmClusterProperties_State {
  /**
   * Default unspecified value.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Indicates that the resource is in provisioning state.
   *
   * @generated from enum value: PROVISIONING = 1;
   */
  PROVISIONING = 1,

  /**
   * Indicates that the resource is in available state.
   *
   * @generated from enum value: AVAILABLE = 2;
   */
  AVAILABLE = 2,

  /**
   * Indicates that the resource is in updating state.
   *
   * @generated from enum value: UPDATING = 3;
   */
  UPDATING = 3,

  /**
   * Indicates that the resource is in terminating state.
   *
   * @generated from enum value: TERMINATING = 4;
   */
  TERMINATING = 4,

  /**
   * Indicates that the resource is in terminated state.
   *
   * @generated from enum value: TERMINATED = 5;
   */
  TERMINATED = 5,

  /**
   * Indicates that the resource is in failed state.
   *
   * @generated from enum value: FAILED = 6;
   */
  FAILED = 6,

  /**
   * Indicates that the resource is in maintenance in progress state.
   *
   * @generated from enum value: MAINTENANCE_IN_PROGRESS = 7;
   */
  MAINTENANCE_IN_PROGRESS = 7,
}

/**
 * Describes the enum google.cloud.oracledatabase.v1.CloudVmClusterProperties.State.
 */
export const CloudVmClusterProperties_StateSchema: GenEnum<CloudVmClusterProperties_State> = /*@__PURE__*/
  enumDesc(file_google_cloud_oracledatabase_v1_vm_cluster, 1, 2);

/**
 * Data collection options for diagnostics.
 *
 * @generated from message google.cloud.oracledatabase.v1.DataCollectionOptions
 */
export type DataCollectionOptions = Message<"google.cloud.oracledatabase.v1.DataCollectionOptions"> & {
  /**
   * Optional. Indicates whether diagnostic collection is enabled for the VM
   * cluster
   *
   * @generated from field: bool diagnostics_events_enabled = 1;
   */
  diagnosticsEventsEnabled: boolean;

  /**
   * Optional. Indicates whether health monitoring is enabled for the VM cluster
   *
   * @generated from field: bool health_monitoring_enabled = 2;
   */
  healthMonitoringEnabled: boolean;

  /**
   * Optional. Indicates whether incident logs and trace collection are enabled
   * for the VM cluster
   *
   * @generated from field: bool incident_logs_enabled = 3;
   */
  incidentLogsEnabled: boolean;
};

/**
 * Describes the message google.cloud.oracledatabase.v1.DataCollectionOptions.
 * Use `create(DataCollectionOptionsSchema)` to create a new message.
 */
export const DataCollectionOptionsSchema: GenMessage<DataCollectionOptions> = /*@__PURE__*/
  messageDesc(file_google_cloud_oracledatabase_v1_vm_cluster, 2);
