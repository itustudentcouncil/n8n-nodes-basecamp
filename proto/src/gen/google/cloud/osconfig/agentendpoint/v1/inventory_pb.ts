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
// @generated from file google/cloud/osconfig/agentendpoint/v1/inventory.proto (package google.cloud.osconfig.agentendpoint.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../../api/field_behavior_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Date } from "../../../../type/date_pb";
import { file_google_type_date } from "../../../../type/date_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/osconfig/agentendpoint/v1/inventory.proto.
 */
export const file_google_cloud_osconfig_agentendpoint_v1_inventory: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvY2xvdWQvb3Njb25maWcvYWdlbnRlbmRwb2ludC92MS9pbnZlbnRvcnkucHJvdG8SJmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxIroSCglJbnZlbnRvcnkSSQoHb3NfaW5mbxgBIAEoCzI4Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkludmVudG9yeS5Pc0luZm8SXQoSaW5zdGFsbGVkX3BhY2thZ2VzGAIgAygLMkEuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuSW52ZW50b3J5LlNvZnR3YXJlUGFja2FnZRJdChJhdmFpbGFibGVfcGFja2FnZXMYAyADKAsyQS5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5JbnZlbnRvcnkuU29mdHdhcmVQYWNrYWdlGrgBCgZPc0luZm8SEAoIaG9zdG5hbWUYASABKAkSEQoJbG9uZ19uYW1lGAIgASgJEhIKCnNob3J0X25hbWUYAyABKAkSDwoHdmVyc2lvbhgEIAEoCRIUCgxhcmNoaXRlY3R1cmUYBSABKAkSFgoOa2VybmVsX3ZlcnNpb24YBiABKAkSFgoOa2VybmVsX3JlbGVhc2UYByABKAkSHgoWb3Njb25maWdfYWdlbnRfdmVyc2lvbhgIIAEoCRrwBgoPU29mdHdhcmVQYWNrYWdlElkKC3l1bV9wYWNrYWdlGAEgASgLMkIuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuSW52ZW50b3J5LlZlcnNpb25lZFBhY2thZ2VIABJZCgthcHRfcGFja2FnZRgCIAEoCzJCLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkludmVudG9yeS5WZXJzaW9uZWRQYWNrYWdlSAASXAoOenlwcGVyX3BhY2thZ2UYAyABKAsyQi5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5JbnZlbnRvcnkuVmVyc2lvbmVkUGFja2FnZUgAElwKDmdvb2dldF9wYWNrYWdlGAQgASgLMkIuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuSW52ZW50b3J5LlZlcnNpb25lZFBhY2thZ2VIABJVCgx6eXBwZXJfcGF0Y2gYBSABKAsyPS5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5JbnZlbnRvcnkuWnlwcGVyUGF0Y2hIABJdCgt3dWFfcGFja2FnZRgGIAEoCzJGLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkludmVudG9yeS5XaW5kb3dzVXBkYXRlUGFja2FnZUgAEmoKC3FmZV9wYWNrYWdlGAcgASgLMlMuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuSW52ZW50b3J5LldpbmRvd3NRdWlja0ZpeEVuZ2luZWVyaW5nUGFja2FnZUgAElkKC2Nvc19wYWNrYWdlGAggASgLMkIuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuSW52ZW50b3J5LlZlcnNpb25lZFBhY2thZ2VIABJjChN3aW5kb3dzX2FwcGxpY2F0aW9uGAkgASgLMkQuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuSW52ZW50b3J5LldpbmRvd3NBcHBsaWNhdGlvbkgAQgkKB2RldGFpbHMa4gEKEFZlcnNpb25lZFBhY2thZ2USFAoMcGFja2FnZV9uYW1lGAEgASgJEhQKDGFyY2hpdGVjdHVyZRgCIAEoCRIPCgd2ZXJzaW9uGAMgASgJEl4KBnNvdXJjZRgEIAEoCzJJLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkludmVudG9yeS5WZXJzaW9uZWRQYWNrYWdlLlNvdXJjZUID4EEBGjEKBlNvdXJjZRIRCgRuYW1lGAEgASgJQgPgQQISFAoHdmVyc2lvbhgCIAEoCUID4EEBGlYKC1p5cHBlclBhdGNoEhIKCnBhdGNoX25hbWUYASABKAkSEAoIY2F0ZWdvcnkYAiABKAkSEAoIc2V2ZXJpdHkYAyABKAkSDwoHc3VtbWFyeRgEIAEoCRqRAwoUV2luZG93c1VwZGF0ZVBhY2thZ2USDQoFdGl0bGUYASABKAkSEwoLZGVzY3JpcHRpb24YAiABKAkScAoKY2F0ZWdvcmllcxgDIAMoCzJcLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLkludmVudG9yeS5XaW5kb3dzVXBkYXRlUGFja2FnZS5XaW5kb3dzVXBkYXRlQ2F0ZWdvcnkSFgoOa2JfYXJ0aWNsZV9pZHMYBCADKAkSEwoLc3VwcG9ydF91cmwYBSABKAkSFgoObW9yZV9pbmZvX3VybHMYBiADKAkSEQoJdXBkYXRlX2lkGAcgASgJEhcKD3JldmlzaW9uX251bWJlchgIIAEoBRI/ChtsYXN0X2RlcGxveW1lbnRfY2hhbmdlX3RpbWUYCSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wGjEKFVdpbmRvd3NVcGRhdGVDYXRlZ29yeRIKCgJpZBgBIAEoCRIMCgRuYW1lGAIgASgJGo8BCiFXaW5kb3dzUXVpY2tGaXhFbmdpbmVlcmluZ1BhY2thZ2USDwoHY2FwdGlvbhgBIAEoCRITCgtkZXNjcmlwdGlvbhgCIAEoCRISCgpob3RfZml4X2lkGAMgASgJEjAKDGluc3RhbGxfdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAakgEKEldpbmRvd3NBcHBsaWNhdGlvbhIUCgxkaXNwbGF5X25hbWUYASABKAkSFwoPZGlzcGxheV92ZXJzaW9uGAIgASgJEhEKCXB1Ymxpc2hlchgDIAEoCRInCgxpbnN0YWxsX2RhdGUYBCABKAsyES5nb29nbGUudHlwZS5EYXRlEhEKCWhlbHBfbGluaxgFIAEoCUKQAQoqY29tLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxQg5JbnZlbnRvcnlQcm90b1ABWlBjbG91ZC5nb29nbGUuY29tL2dvL29zY29uZmlnL2FnZW50ZW5kcG9pbnQvYXBpdjEvYWdlbnRlbmRwb2ludHBiO2FnZW50ZW5kcG9pbnRwYmIGcHJvdG8z", [file_google_api_field_behavior, file_google_protobuf_timestamp, file_google_type_date]);

/**
 * The inventory details of a VM.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.Inventory
 */
export type Inventory = Message<"google.cloud.osconfig.agentendpoint.v1.Inventory"> & {
  /**
   * Base level operating system information for the VM.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory.OsInfo os_info = 1;
   */
  osInfo?: Inventory_OsInfo;

  /**
   * A list of installed packages currently on the VM.
   *
   * @generated from field: repeated google.cloud.osconfig.agentendpoint.v1.Inventory.SoftwarePackage installed_packages = 2;
   */
  installedPackages: Inventory_SoftwarePackage[];

  /**
   * A list of software updates available for the VM as reported by the update
   * managers.
   *
   * @generated from field: repeated google.cloud.osconfig.agentendpoint.v1.Inventory.SoftwarePackage available_packages = 3;
   */
  availablePackages: Inventory_SoftwarePackage[];
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.Inventory.
 * Use `create(InventorySchema)` to create a new message.
 */
export const InventorySchema: GenMessage<Inventory> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_inventory, 0);

/**
 * Operating system information for the VM.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.Inventory.OsInfo
 */
export type Inventory_OsInfo = Message<"google.cloud.osconfig.agentendpoint.v1.Inventory.OsInfo"> & {
  /**
   * The VM hostname.
   *
   * @generated from field: string hostname = 1;
   */
  hostname: string;

  /**
   * The operating system long name.
   * For example 'Debian GNU/Linux 9' or 'Microsoft Window Server 2019
   * Datacenter'.
   *
   * @generated from field: string long_name = 2;
   */
  longName: string;

  /**
   * The operating system short name.
   * For example, 'windows' or 'debian'.
   *
   * @generated from field: string short_name = 3;
   */
  shortName: string;

  /**
   * The version of the operating system.
   *
   * @generated from field: string version = 4;
   */
  version: string;

  /**
   * The system architecture of the operating system.
   *
   * @generated from field: string architecture = 5;
   */
  architecture: string;

  /**
   * The kernel version of the operating system.
   *
   * @generated from field: string kernel_version = 6;
   */
  kernelVersion: string;

  /**
   * The kernel release of the operating system.
   *
   * @generated from field: string kernel_release = 7;
   */
  kernelRelease: string;

  /**
   * The current version of the OS Config agent running on the VM.
   *
   * @generated from field: string osconfig_agent_version = 8;
   */
  osconfigAgentVersion: string;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.Inventory.OsInfo.
 * Use `create(Inventory_OsInfoSchema)` to create a new message.
 */
export const Inventory_OsInfoSchema: GenMessage<Inventory_OsInfo> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_inventory, 0, 0);

/**
 * Software package information of the operating system.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.Inventory.SoftwarePackage
 */
export type Inventory_SoftwarePackage = Message<"google.cloud.osconfig.agentendpoint.v1.Inventory.SoftwarePackage"> & {
  /**
   * Information about the different types of software packages.
   *
   * @generated from oneof google.cloud.osconfig.agentendpoint.v1.Inventory.SoftwarePackage.details
   */
  details: {
    /**
     * Yum package info.
     * For details about the yum package manager, see
     * https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/ch-yum.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage yum_package = 1;
     */
    value: Inventory_VersionedPackage;
    case: "yumPackage";
  } | {
    /**
     * Details of an APT package.
     * For details about the apt package manager, see
     * https://wiki.debian.org/Apt.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage apt_package = 2;
     */
    value: Inventory_VersionedPackage;
    case: "aptPackage";
  } | {
    /**
     * Details of a Zypper package.
     * For details about the Zypper package manager, see
     * https://en.opensuse.org/SDB:Zypper_manual.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage zypper_package = 3;
     */
    value: Inventory_VersionedPackage;
    case: "zypperPackage";
  } | {
    /**
     * Details of a Googet package.
     *  For details about the googet package manager, see
     *  https://github.com/google/googet.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage googet_package = 4;
     */
    value: Inventory_VersionedPackage;
    case: "googetPackage";
  } | {
    /**
     * Details of a Zypper patch.
     * For details about the Zypper package manager, see
     * https://en.opensuse.org/SDB:Zypper_manual.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory.ZypperPatch zypper_patch = 5;
     */
    value: Inventory_ZypperPatch;
    case: "zypperPatch";
  } | {
    /**
     * Details of a Windows Update package.
     * See https://docs.microsoft.com/en-us/windows/win32/api/_wua/ for
     * information about Windows Update.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsUpdatePackage wua_package = 6;
     */
    value: Inventory_WindowsUpdatePackage;
    case: "wuaPackage";
  } | {
    /**
     * Details of a Windows Quick Fix engineering package.
     * See
     * https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
     * for info in Windows Quick Fix Engineering.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsQuickFixEngineeringPackage qfe_package = 7;
     */
    value: Inventory_WindowsQuickFixEngineeringPackage;
    case: "qfePackage";
  } | {
    /**
     * Details of a COS package.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage cos_package = 8;
     */
    value: Inventory_VersionedPackage;
    case: "cosPackage";
  } | {
    /**
     * Details of Windows Application.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsApplication windows_application = 9;
     */
    value: Inventory_WindowsApplication;
    case: "windowsApplication";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.Inventory.SoftwarePackage.
 * Use `create(Inventory_SoftwarePackageSchema)` to create a new message.
 */
export const Inventory_SoftwarePackageSchema: GenMessage<Inventory_SoftwarePackage> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_inventory, 0, 1);

/**
 * Information related to the a standard versioned package.  This includes
 * package info for APT, Yum, Zypper, and Googet package managers.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage
 */
export type Inventory_VersionedPackage = Message<"google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage"> & {
  /**
   * The name of the package.
   *
   * @generated from field: string package_name = 1;
   */
  packageName: string;

  /**
   * The system architecture this package is intended for.
   *
   * @generated from field: string architecture = 2;
   */
  architecture: string;

  /**
   * The version of the package.
   *
   * @generated from field: string version = 3;
   */
  version: string;

  /**
   * Optional. The source of the package.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage.Source source = 4;
   */
  source?: Inventory_VersionedPackage_Source;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage.
 * Use `create(Inventory_VersionedPackageSchema)` to create a new message.
 */
export const Inventory_VersionedPackageSchema: GenMessage<Inventory_VersionedPackage> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_inventory, 0, 2);

/**
 * Information related to the actuall source of the versioned package. This
 * includes source package name and version if available.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage.Source
 */
export type Inventory_VersionedPackage_Source = Message<"google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage.Source"> & {
  /**
   * Required. The name of the source package.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional. The version of the source package.
   *
   * @generated from field: string version = 2;
   */
  version: string;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.Inventory.VersionedPackage.Source.
 * Use `create(Inventory_VersionedPackage_SourceSchema)` to create a new message.
 */
export const Inventory_VersionedPackage_SourceSchema: GenMessage<Inventory_VersionedPackage_Source> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_inventory, 0, 2, 0);

/**
 * Details related to a Zypper Patch.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.Inventory.ZypperPatch
 */
export type Inventory_ZypperPatch = Message<"google.cloud.osconfig.agentendpoint.v1.Inventory.ZypperPatch"> & {
  /**
   * The name of the patch.
   *
   * @generated from field: string patch_name = 1;
   */
  patchName: string;

  /**
   * The category of the patch.
   *
   * @generated from field: string category = 2;
   */
  category: string;

  /**
   * The severity specified for this patch
   *
   * @generated from field: string severity = 3;
   */
  severity: string;

  /**
   * Any summary information provided about this patch.
   *
   * @generated from field: string summary = 4;
   */
  summary: string;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.Inventory.ZypperPatch.
 * Use `create(Inventory_ZypperPatchSchema)` to create a new message.
 */
export const Inventory_ZypperPatchSchema: GenMessage<Inventory_ZypperPatch> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_inventory, 0, 3);

/**
 * Details related to a Windows Update package.
 * Field data and names are taken from Windows Update API IUpdate Interface:
 * https://docs.microsoft.com/en-us/windows/win32/api/_wua/
 * Descriptive fields like title, and description are localized based on
 * the locale of the VM being updated.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsUpdatePackage
 */
export type Inventory_WindowsUpdatePackage = Message<"google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsUpdatePackage"> & {
  /**
   * The localized title of the update package.
   *
   * @generated from field: string title = 1;
   */
  title: string;

  /**
   * The localized description of the update package.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * The categories that are associated with this update package.
   *
   * @generated from field: repeated google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsUpdatePackage.WindowsUpdateCategory categories = 3;
   */
  categories: Inventory_WindowsUpdatePackage_WindowsUpdateCategory[];

  /**
   * A collection of Microsoft Knowledge Base article IDs that are associated
   * with the update package.
   *
   * @generated from field: repeated string kb_article_ids = 4;
   */
  kbArticleIds: string[];

  /**
   * A hyperlink to the language-specific support information for the update.
   *
   * @generated from field: string support_url = 5;
   */
  supportUrl: string;

  /**
   * A collection of URLs that provide more information about the update
   * package.
   *
   * @generated from field: repeated string more_info_urls = 6;
   */
  moreInfoUrls: string[];

  /**
   * Gets the identifier of an update package.  Stays the same across
   * revisions.
   *
   * @generated from field: string update_id = 7;
   */
  updateId: string;

  /**
   * The revision number of this update package.
   *
   * @generated from field: int32 revision_number = 8;
   */
  revisionNumber: number;

  /**
   * The last published date of the update, in (UTC) date and time.
   *
   * @generated from field: google.protobuf.Timestamp last_deployment_change_time = 9;
   */
  lastDeploymentChangeTime?: Timestamp;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsUpdatePackage.
 * Use `create(Inventory_WindowsUpdatePackageSchema)` to create a new message.
 */
export const Inventory_WindowsUpdatePackageSchema: GenMessage<Inventory_WindowsUpdatePackage> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_inventory, 0, 4);

/**
 * Categories specified by the Windows Update.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsUpdatePackage.WindowsUpdateCategory
 */
export type Inventory_WindowsUpdatePackage_WindowsUpdateCategory = Message<"google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsUpdatePackage.WindowsUpdateCategory"> & {
  /**
   * The identifier of the windows update category.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The name of the windows update category.
   *
   * @generated from field: string name = 2;
   */
  name: string;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsUpdatePackage.WindowsUpdateCategory.
 * Use `create(Inventory_WindowsUpdatePackage_WindowsUpdateCategorySchema)` to create a new message.
 */
export const Inventory_WindowsUpdatePackage_WindowsUpdateCategorySchema: GenMessage<Inventory_WindowsUpdatePackage_WindowsUpdateCategory> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_inventory, 0, 4, 0);

/**
 * Information related to a Quick Fix Engineering package.
 * Fields are taken from Windows QuickFixEngineering Interface and match
 * the source names:
 * https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsQuickFixEngineeringPackage
 */
export type Inventory_WindowsQuickFixEngineeringPackage = Message<"google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsQuickFixEngineeringPackage"> & {
  /**
   * A short textual description of the QFE update.
   *
   * @generated from field: string caption = 1;
   */
  caption: string;

  /**
   * A textual description of the QFE update.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * Unique identifier associated with a particular QFE update.
   *
   * @generated from field: string hot_fix_id = 3;
   */
  hotFixId: string;

  /**
   * Date that the QFE update was installed.  Mapped from installed_on field.
   *
   * @generated from field: google.protobuf.Timestamp install_time = 4;
   */
  installTime?: Timestamp;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsQuickFixEngineeringPackage.
 * Use `create(Inventory_WindowsQuickFixEngineeringPackageSchema)` to create a new message.
 */
export const Inventory_WindowsQuickFixEngineeringPackageSchema: GenMessage<Inventory_WindowsQuickFixEngineeringPackage> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_inventory, 0, 5);

/**
 * Details about Windows Application - based on Windows Registry.
 * All fields in this message are taken from:
 * https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsApplication
 */
export type Inventory_WindowsApplication = Message<"google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsApplication"> & {
  /**
   * DisplayName field from Windows Registry.
   *
   * @generated from field: string display_name = 1;
   */
  displayName: string;

  /**
   * DisplayVersion field from Windows Registry.
   *
   * @generated from field: string display_version = 2;
   */
  displayVersion: string;

  /**
   * Publisher field from Windows Registry.
   *
   * @generated from field: string publisher = 3;
   */
  publisher: string;

  /**
   * Installation date field from Windows Registry.
   *
   * @generated from field: google.type.Date install_date = 4;
   */
  installDate?: Date;

  /**
   * HelpLink field from Windows Registry.
   *
   * @generated from field: string help_link = 5;
   */
  helpLink: string;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.Inventory.WindowsApplication.
 * Use `create(Inventory_WindowsApplicationSchema)` to create a new message.
 */
export const Inventory_WindowsApplicationSchema: GenMessage<Inventory_WindowsApplication> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_inventory, 0, 6);
