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
// @generated from file google/cloud/securitycenter/v2/group_membership.proto (package google.cloud.securitycenter.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/securitycenter/v2/group_membership.proto.
 */
export const file_google_cloud_securitycenter_v2_group_membership: GenFile = /*@__PURE__*/
  fileDesc("CjVnb29nbGUvY2xvdWQvc2VjdXJpdHljZW50ZXIvdjIvZ3JvdXBfbWVtYmVyc2hpcC5wcm90bxIeZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyIr0BCg9Hcm91cE1lbWJlcnNoaXASTQoKZ3JvdXBfdHlwZRgBIAEoDjI5Lmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52Mi5Hcm91cE1lbWJlcnNoaXAuR3JvdXBUeXBlEhAKCGdyb3VwX2lkGAIgASgJIkkKCUdyb3VwVHlwZRIaChZHUk9VUF9UWVBFX1VOU1BFQ0lGSUVEEAASIAocR1JPVVBfVFlQRV9UT1hJQ19DT01CSU5BVElPThABQu4BCiJjb20uZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYyQhRHcm91cE1lbWJlcnNoaXBQcm90b1ABWkpjbG91ZC5nb29nbGUuY29tL2dvL3NlY3VyaXR5Y2VudGVyL2FwaXYyL3NlY3VyaXR5Y2VudGVycGI7c2VjdXJpdHljZW50ZXJwYqoCHkdvb2dsZS5DbG91ZC5TZWN1cml0eUNlbnRlci5WMsoCHkdvb2dsZVxDbG91ZFxTZWN1cml0eUNlbnRlclxWMuoCIUdvb2dsZTo6Q2xvdWQ6OlNlY3VyaXR5Q2VudGVyOjpWMmIGcHJvdG8z");

/**
 * Contains details about groups of which this finding is a member. A group is a
 * collection of findings that are related in some way.
 *
 * @generated from message google.cloud.securitycenter.v2.GroupMembership
 */
export type GroupMembership = Message<"google.cloud.securitycenter.v2.GroupMembership"> & {
  /**
   * Type of group.
   *
   * @generated from field: google.cloud.securitycenter.v2.GroupMembership.GroupType group_type = 1;
   */
  groupType: GroupMembership_GroupType;

  /**
   * ID of the group.
   *
   * @generated from field: string group_id = 2;
   */
  groupId: string;
};

/**
 * Describes the message google.cloud.securitycenter.v2.GroupMembership.
 * Use `create(GroupMembershipSchema)` to create a new message.
 */
export const GroupMembershipSchema: GenMessage<GroupMembership> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v2_group_membership, 0);

/**
 * Possible types of groups.
 *
 * @generated from enum google.cloud.securitycenter.v2.GroupMembership.GroupType
 */
export enum GroupMembership_GroupType {
  /**
   * Default value.
   *
   * @generated from enum value: GROUP_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Group represents a toxic combination.
   *
   * @generated from enum value: GROUP_TYPE_TOXIC_COMBINATION = 1;
   */
  TOXIC_COMBINATION = 1,
}

/**
 * Describes the enum google.cloud.securitycenter.v2.GroupMembership.GroupType.
 */
export const GroupMembership_GroupTypeSchema: GenEnum<GroupMembership_GroupType> = /*@__PURE__*/
  enumDesc(file_google_cloud_securitycenter_v2_group_membership, 0, 0);
