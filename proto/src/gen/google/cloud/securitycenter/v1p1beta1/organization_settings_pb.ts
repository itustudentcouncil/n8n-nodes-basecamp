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
// @generated from file google/cloud/securitycenter/v1p1beta1/organization_settings.proto (package google.cloud.securitycenter.v1p1beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/securitycenter/v1p1beta1/organization_settings.proto.
 */
export const file_google_cloud_securitycenter_v1p1beta1_organization_settings: GenFile = /*@__PURE__*/
  fileDesc("CkFnb29nbGUvY2xvdWQvc2VjdXJpdHljZW50ZXIvdjFwMWJldGExL29yZ2FuaXphdGlvbl9zZXR0aW5ncy5wcm90bxIlZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYxcDFiZXRhMSKsBAoUT3JnYW5pemF0aW9uU2V0dGluZ3MSDAoEbmFtZRgBIAEoCRIeChZlbmFibGVfYXNzZXRfZGlzY292ZXJ5GAIgASgIEnAKFmFzc2V0X2Rpc2NvdmVyeV9jb25maWcYAyABKAsyUC5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjFwMWJldGExLk9yZ2FuaXphdGlvblNldHRpbmdzLkFzc2V0RGlzY292ZXJ5Q29uZmlnGocCChRBc3NldERpc2NvdmVyeUNvbmZpZxITCgtwcm9qZWN0X2lkcxgBIAMoCRJ2Cg5pbmNsdXNpb25fbW9kZRgCIAEoDjJeLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MXAxYmV0YTEuT3JnYW5pemF0aW9uU2V0dGluZ3MuQXNzZXREaXNjb3ZlcnlDb25maWcuSW5jbHVzaW9uTW9kZRISCgpmb2xkZXJfaWRzGAMgAygJIk4KDUluY2x1c2lvbk1vZGUSHgoaSU5DTFVTSU9OX01PREVfVU5TUEVDSUZJRUQQABIQCgxJTkNMVURFX09OTFkQARILCgdFWENMVURFEAI6aupBZwoyc2VjdXJpdHljZW50ZXIuZ29vZ2xlYXBpcy5jb20vT3JnYW5pemF0aW9uU2V0dGluZ3MSMW9yZ2FuaXphdGlvbnMve29yZ2FuaXphdGlvbn0vb3JnYW5pemF0aW9uU2V0dGluZ3NC+wEKKWNvbS5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjFwMWJldGExUAFaUWNsb3VkLmdvb2dsZS5jb20vZ28vc2VjdXJpdHljZW50ZXIvYXBpdjFwMWJldGExL3NlY3VyaXR5Y2VudGVycGI7c2VjdXJpdHljZW50ZXJwYqoCJUdvb2dsZS5DbG91ZC5TZWN1cml0eUNlbnRlci5WMVAxQmV0YTHKAiVHb29nbGVcQ2xvdWRcU2VjdXJpdHlDZW50ZXJcVjFwMWJldGEx6gIoR29vZ2xlOjpDbG91ZDo6U2VjdXJpdHlDZW50ZXI6OlYxcDFiZXRhMWIGcHJvdG8z", [file_google_api_resource]);

/**
 * User specified settings that are attached to the Security Command
 * Center organization.
 *
 * @generated from message google.cloud.securitycenter.v1p1beta1.OrganizationSettings
 */
export type OrganizationSettings = Message<"google.cloud.securitycenter.v1p1beta1.OrganizationSettings"> & {
  /**
   * The relative resource name of the settings. See:
   * https://cloud.google.com/apis/design/resource_names#relative_resource_name
   * Example:
   * "organizations/{organization_id}/organizationSettings".
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * A flag that indicates if Asset Discovery should be enabled. If the flag is
   * set to `true`, then discovery of assets will occur. If it is set to `false,
   * all historical assets will remain, but discovery of future assets will not
   * occur.
   *
   * @generated from field: bool enable_asset_discovery = 2;
   */
  enableAssetDiscovery: boolean;

  /**
   * The configuration used for Asset Discovery runs.
   *
   * @generated from field: google.cloud.securitycenter.v1p1beta1.OrganizationSettings.AssetDiscoveryConfig asset_discovery_config = 3;
   */
  assetDiscoveryConfig?: OrganizationSettings_AssetDiscoveryConfig;
};

/**
 * Describes the message google.cloud.securitycenter.v1p1beta1.OrganizationSettings.
 * Use `create(OrganizationSettingsSchema)` to create a new message.
 */
export const OrganizationSettingsSchema: GenMessage<OrganizationSettings> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1p1beta1_organization_settings, 0);

/**
 * The configuration used for Asset Discovery runs.
 *
 * @generated from message google.cloud.securitycenter.v1p1beta1.OrganizationSettings.AssetDiscoveryConfig
 */
export type OrganizationSettings_AssetDiscoveryConfig = Message<"google.cloud.securitycenter.v1p1beta1.OrganizationSettings.AssetDiscoveryConfig"> & {
  /**
   * The project ids to use for filtering asset discovery.
   *
   * @generated from field: repeated string project_ids = 1;
   */
  projectIds: string[];

  /**
   * The mode to use for filtering asset discovery.
   *
   * @generated from field: google.cloud.securitycenter.v1p1beta1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode inclusion_mode = 2;
   */
  inclusionMode: OrganizationSettings_AssetDiscoveryConfig_InclusionMode;

  /**
   * The folder ids to use for filtering asset discovery.
   * It consists of only digits, e.g., 756619654966.
   *
   * @generated from field: repeated string folder_ids = 3;
   */
  folderIds: string[];
};

/**
 * Describes the message google.cloud.securitycenter.v1p1beta1.OrganizationSettings.AssetDiscoveryConfig.
 * Use `create(OrganizationSettings_AssetDiscoveryConfigSchema)` to create a new message.
 */
export const OrganizationSettings_AssetDiscoveryConfigSchema: GenMessage<OrganizationSettings_AssetDiscoveryConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1p1beta1_organization_settings, 0, 0);

/**
 * The mode of inclusion when running Asset Discovery.
 * Asset discovery can be limited by explicitly identifying projects to be
 * included or excluded. If INCLUDE_ONLY is set, then only those projects
 * within the organization and their children are discovered during asset
 * discovery. If EXCLUDE is set, then projects that don't match those
 * projects are discovered during asset discovery. If neither are set, then
 * all projects within the organization are discovered during asset
 * discovery.
 *
 * @generated from enum google.cloud.securitycenter.v1p1beta1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode
 */
export enum OrganizationSettings_AssetDiscoveryConfig_InclusionMode {
  /**
   * Unspecified. Setting the mode with this value will disable
   * inclusion/exclusion filtering for Asset Discovery.
   *
   * @generated from enum value: INCLUSION_MODE_UNSPECIFIED = 0;
   */
  INCLUSION_MODE_UNSPECIFIED = 0,

  /**
   * Asset Discovery will capture only the resources within the projects
   * specified. All other resources will be ignored.
   *
   * @generated from enum value: INCLUDE_ONLY = 1;
   */
  INCLUDE_ONLY = 1,

  /**
   * Asset Discovery will ignore all resources under the projects specified.
   * All other resources will be retrieved.
   *
   * @generated from enum value: EXCLUDE = 2;
   */
  EXCLUDE = 2,
}

/**
 * Describes the enum google.cloud.securitycenter.v1p1beta1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode.
 */
export const OrganizationSettings_AssetDiscoveryConfig_InclusionModeSchema: GenEnum<OrganizationSettings_AssetDiscoveryConfig_InclusionMode> = /*@__PURE__*/
  enumDesc(file_google_cloud_securitycenter_v1p1beta1_organization_settings, 0, 0, 0);
