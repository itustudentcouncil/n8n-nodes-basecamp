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
// @generated from file google/cloud/securitycenter/v2/resource_value_config.proto (package google.cloud.securitycenter.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { CloudProvider } from "./resource_pb";
import { file_google_cloud_securitycenter_v2_resource } from "./resource_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/securitycenter/v2/resource_value_config.proto.
 */
export const file_google_cloud_securitycenter_v2_resource_value_config: GenFile = /*@__PURE__*/
  fileDesc("Cjpnb29nbGUvY2xvdWQvc2VjdXJpdHljZW50ZXIvdjIvcmVzb3VyY2VfdmFsdWVfY29uZmlnLnByb3RvEh5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjIi+QgKE1Jlc291cmNlVmFsdWVDb25maWcSEQoEbmFtZRgBIAEoCUID4EEIEkUKDnJlc291cmNlX3ZhbHVlGAIgASgOMi0uZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLlJlc291cmNlVmFsdWUSEgoKdGFnX3ZhbHVlcxgDIAMoCRIVCg1yZXNvdXJjZV90eXBlGAQgASgJEg0KBXNjb3BlGAUgASgJEnEKGHJlc291cmNlX2xhYmVsc19zZWxlY3RvchgGIAMoCzJPLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5SZXNvdXJjZVZhbHVlQ29uZmlnLlJlc291cmNlTGFiZWxzU2VsZWN0b3JFbnRyeRITCgtkZXNjcmlwdGlvbhgHIAEoCRI0CgtjcmVhdGVfdGltZRgIIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxI0Cgt1cGRhdGVfdGltZRgJIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxJFCg5jbG91ZF9wcm92aWRlchgKIAEoDjItLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5DbG91ZFByb3ZpZGVyEn0KIXNlbnNpdGl2ZV9kYXRhX3Byb3RlY3Rpb25fbWFwcGluZxgLIAEoCzJSLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5SZXNvdXJjZVZhbHVlQ29uZmlnLlNlbnNpdGl2ZURhdGFQcm90ZWN0aW9uTWFwcGluZxrEAQoeU2Vuc2l0aXZlRGF0YVByb3RlY3Rpb25NYXBwaW5nEk8KGGhpZ2hfc2Vuc2l0aXZpdHlfbWFwcGluZxgBIAEoDjItLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5SZXNvdXJjZVZhbHVlElEKGm1lZGl1bV9zZW5zaXRpdml0eV9tYXBwaW5nGAIgASgOMi0uZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyLlJlc291cmNlVmFsdWUaPQobUmVzb3VyY2VMYWJlbHNTZWxlY3RvckVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAE6jQLqQYkCCjFzZWN1cml0eWNlbnRlci5nb29nbGVhcGlzLmNvbS9SZXNvdXJjZVZhbHVlQ29uZmlnEklvcmdhbml6YXRpb25zL3tvcmdhbml6YXRpb259L3Jlc291cmNlVmFsdWVDb25maWdzL3tyZXNvdXJjZV92YWx1ZV9jb25maWd9El5vcmdhbml6YXRpb25zL3tvcmdhbml6YXRpb259L2xvY2F0aW9ucy97bG9jYXRpb259L3Jlc291cmNlVmFsdWVDb25maWdzL3tyZXNvdXJjZV92YWx1ZV9jb25maWd9KhRyZXNvdXJjZVZhbHVlQ29uZmlnczITcmVzb3VyY2VWYWx1ZUNvbmZpZypYCg1SZXNvdXJjZVZhbHVlEh4KGlJFU09VUkNFX1ZBTFVFX1VOU1BFQ0lGSUVEEAASCAoESElHSBABEgoKBk1FRElVTRACEgcKA0xPVxADEggKBE5PTkUQBELyAQoiY29tLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MkIYUmVzb3VyY2VWYWx1ZUNvbmZpZ1Byb3RvUAFaSmNsb3VkLmdvb2dsZS5jb20vZ28vc2VjdXJpdHljZW50ZXIvYXBpdjIvc2VjdXJpdHljZW50ZXJwYjtzZWN1cml0eWNlbnRlcnBiqgIeR29vZ2xlLkNsb3VkLlNlY3VyaXR5Q2VudGVyLlYyygIeR29vZ2xlXENsb3VkXFNlY3VyaXR5Q2VudGVyXFYy6gIhR29vZ2xlOjpDbG91ZDo6U2VjdXJpdHlDZW50ZXI6OlYyYgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource, file_google_cloud_securitycenter_v2_resource, file_google_protobuf_timestamp]);

/**
 * A resource value configuration (RVC) is a mapping configuration of user's
 * resources to resource values. Used in Attack path simulations.
 *
 * @generated from message google.cloud.securitycenter.v2.ResourceValueConfig
 */
export type ResourceValueConfig = Message<"google.cloud.securitycenter.v2.ResourceValueConfig"> & {
  /**
   * Identifier. Name for the resource value configuration
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Resource value level this expression represents
   * Only required when there is no Sensitive Data Protection mapping in the
   * request
   *
   * @generated from field: google.cloud.securitycenter.v2.ResourceValue resource_value = 2;
   */
  resourceValue: ResourceValue;

  /**
   * Tag values combined with `AND` to check against.
   * Values in the form "tagValues/123"
   * Example: `[ "tagValues/123", "tagValues/456", "tagValues/789" ]`
   * https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing
   *
   * @generated from field: repeated string tag_values = 3;
   */
  tagValues: string[];

  /**
   * Apply resource_value only to resources that match resource_type.
   * resource_type will be checked with `AND` of other resources.
   * For example, "storage.googleapis.com/Bucket" with resource_value "HIGH"
   * will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources.
   *
   * @generated from field: string resource_type = 4;
   */
  resourceType: string;

  /**
   * Project or folder to scope this configuration to.
   * For example, "project/456" would apply this configuration only to resources
   * in "project/456" scope and will be checked with `AND` of other resources.
   *
   * @generated from field: string scope = 5;
   */
  scope: string;

  /**
   * List of resource labels to search for, evaluated with `AND`.
   * For example, "resource_labels_selector": {"key": "value", "env": "prod"}
   * will match resources with labels "key": "value" `AND` "env":
   * "prod"
   * https://cloud.google.com/resource-manager/docs/creating-managing-labels
   *
   * @generated from field: map<string, string> resource_labels_selector = 6;
   */
  resourceLabelsSelector: { [key: string]: string };

  /**
   * Description of the resource value configuration.
   *
   * @generated from field: string description = 7;
   */
  description: string;

  /**
   * Output only. Timestamp this resource value configuration was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 8;
   */
  createTime?: Timestamp;

  /**
   * Output only. Timestamp this resource value configuration was last updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 9;
   */
  updateTime?: Timestamp;

  /**
   * Cloud provider this configuration applies to
   *
   * @generated from field: google.cloud.securitycenter.v2.CloudProvider cloud_provider = 10;
   */
  cloudProvider: CloudProvider;

  /**
   * A mapping of the sensitivity on Sensitive Data Protection finding to
   * resource values. This mapping can only be used in combination with a
   * resource_type that is related to BigQuery, e.g.
   * "bigquery.googleapis.com/Dataset".
   *
   * @generated from field: google.cloud.securitycenter.v2.ResourceValueConfig.SensitiveDataProtectionMapping sensitive_data_protection_mapping = 11;
   */
  sensitiveDataProtectionMapping?: ResourceValueConfig_SensitiveDataProtectionMapping;
};

/**
 * Describes the message google.cloud.securitycenter.v2.ResourceValueConfig.
 * Use `create(ResourceValueConfigSchema)` to create a new message.
 */
export const ResourceValueConfigSchema: GenMessage<ResourceValueConfig> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v2_resource_value_config, 0);

/**
 * Resource value mapping for Sensitive Data Protection findings
 * If any of these mappings have a resource value that is not unspecified,
 * the resource_value field will be ignored when reading this configuration.
 *
 * @generated from message google.cloud.securitycenter.v2.ResourceValueConfig.SensitiveDataProtectionMapping
 */
export type ResourceValueConfig_SensitiveDataProtectionMapping = Message<"google.cloud.securitycenter.v2.ResourceValueConfig.SensitiveDataProtectionMapping"> & {
  /**
   * Resource value mapping for high-sensitivity Sensitive Data Protection
   * findings
   *
   * @generated from field: google.cloud.securitycenter.v2.ResourceValue high_sensitivity_mapping = 1;
   */
  highSensitivityMapping: ResourceValue;

  /**
   * Resource value mapping for medium-sensitivity Sensitive Data Protection
   * findings
   *
   * @generated from field: google.cloud.securitycenter.v2.ResourceValue medium_sensitivity_mapping = 2;
   */
  mediumSensitivityMapping: ResourceValue;
};

/**
 * Describes the message google.cloud.securitycenter.v2.ResourceValueConfig.SensitiveDataProtectionMapping.
 * Use `create(ResourceValueConfig_SensitiveDataProtectionMappingSchema)` to create a new message.
 */
export const ResourceValueConfig_SensitiveDataProtectionMappingSchema: GenMessage<ResourceValueConfig_SensitiveDataProtectionMapping> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v2_resource_value_config, 0, 0);

/**
 * Value enum to map to a resource
 *
 * @generated from enum google.cloud.securitycenter.v2.ResourceValue
 */
export enum ResourceValue {
  /**
   * Unspecific value
   *
   * @generated from enum value: RESOURCE_VALUE_UNSPECIFIED = 0;
   */
  RESOURCE_VALUE_UNSPECIFIED = 0,

  /**
   * High resource value
   *
   * @generated from enum value: HIGH = 1;
   */
  HIGH = 1,

  /**
   * Medium resource value
   *
   * @generated from enum value: MEDIUM = 2;
   */
  MEDIUM = 2,

  /**
   * Low resource value
   *
   * @generated from enum value: LOW = 3;
   */
  LOW = 3,

  /**
   * No resource value, e.g. ignore these resources
   *
   * @generated from enum value: NONE = 4;
   */
  NONE = 4,
}

/**
 * Describes the enum google.cloud.securitycenter.v2.ResourceValue.
 */
export const ResourceValueSchema: GenEnum<ResourceValue> = /*@__PURE__*/
  enumDesc(file_google_cloud_securitycenter_v2_resource_value_config, 0);
