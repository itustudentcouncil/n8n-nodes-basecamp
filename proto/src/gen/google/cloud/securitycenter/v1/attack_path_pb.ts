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
// @generated from file google/cloud/securitycenter/v1/attack_path.proto (package google.cloud.securitycenter.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_resource } from "../../../api/resource_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/securitycenter/v1/attack_path.proto.
 */
export const file_google_cloud_securitycenter_v1_attack_path: GenFile = /*@__PURE__*/
  fileDesc("CjBnb29nbGUvY2xvdWQvc2VjdXJpdHljZW50ZXIvdjEvYXR0YWNrX3BhdGgucHJvdG8SHmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MSLnCQoKQXR0YWNrUGF0aBIMCgRuYW1lGAEgASgJEk0KCnBhdGhfbm9kZXMYAiADKAsyOS5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjEuQXR0YWNrUGF0aC5BdHRhY2tQYXRoTm9kZRJICgVlZGdlcxgDIAMoCzI5Lmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MS5BdHRhY2tQYXRoLkF0dGFja1BhdGhFZGdlGr0GCg5BdHRhY2tQYXRoTm9kZRIQCghyZXNvdXJjZRgBIAEoCRIVCg1yZXNvdXJjZV90eXBlGAIgASgJEhQKDGRpc3BsYXlfbmFtZRgDIAEoCRJwChNhc3NvY2lhdGVkX2ZpbmRpbmdzGAQgAygLMlMuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYxLkF0dGFja1BhdGguQXR0YWNrUGF0aE5vZGUuUGF0aE5vZGVBc3NvY2lhdGVkRmluZGluZxIMCgR1dWlkGAUgASgJEl4KDGF0dGFja19zdGVwcxgGIAMoCzJILmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MS5BdHRhY2tQYXRoLkF0dGFja1BhdGhOb2RlLkF0dGFja1N0ZXBOb2RlGl4KGVBhdGhOb2RlQXNzb2NpYXRlZEZpbmRpbmcSGQoRY2Fub25pY2FsX2ZpbmRpbmcYASABKAkSGAoQZmluZGluZ19jYXRlZ29yeRgCIAEoCRIMCgRuYW1lGAMgASgJGrACCg5BdHRhY2tTdGVwTm9kZRIMCgR1dWlkGAEgASgJElAKBHR5cGUYAiABKA4yQi5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjEuQXR0YWNrUGF0aC5BdHRhY2tQYXRoTm9kZS5Ob2RlVHlwZRIUCgxkaXNwbGF5X25hbWUYAyABKAkSZAoGbGFiZWxzGAQgAygLMlQuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYxLkF0dGFja1BhdGguQXR0YWNrUGF0aE5vZGUuQXR0YWNrU3RlcE5vZGUuTGFiZWxzRW50cnkSEwoLZGVzY3JpcHRpb24YBSABKAkaLQoLTGFiZWxzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASJ5CghOb2RlVHlwZRIZChVOT0RFX1RZUEVfVU5TUEVDSUZJRUQQABIRCg1OT0RFX1RZUEVfQU5EEAESEAoMTk9ERV9UWVBFX09SEAISFQoRTk9ERV9UWVBFX0RFRkVOU0UQAxIWChJOT0RFX1RZUEVfQVRUQUNLRVIQBBo1Cg5BdHRhY2tQYXRoRWRnZRIOCgZzb3VyY2UYASABKAkSEwoLZGVzdGluYXRpb24YAiABKAk6ugHqQbYBCihzZWN1cml0eWNlbnRlci5nb29nbGVhcGlzLmNvbS9BdHRhY2tQYXRoEnFvcmdhbml6YXRpb25zL3tvcmdhbml6YXRpb259L3NpbXVsYXRpb25zL3tzaW11bGF0aW9ufS92YWx1ZWRSZXNvdXJjZXMve3ZhbHVlZF9yZXNvdXJjZX0vYXR0YWNrUGF0aHMve2F0dGFja19wYXRofSoLYXR0YWNrUGF0aHMyCmF0dGFja1BhdGhC6QEKImNvbS5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjFCD0F0dGFja1BhdGhQcm90b1ABWkpjbG91ZC5nb29nbGUuY29tL2dvL3NlY3VyaXR5Y2VudGVyL2FwaXYxL3NlY3VyaXR5Y2VudGVycGI7c2VjdXJpdHljZW50ZXJwYqoCHkdvb2dsZS5DbG91ZC5TZWN1cml0eUNlbnRlci5WMcoCHkdvb2dsZVxDbG91ZFxTZWN1cml0eUNlbnRlclxWMeoCIUdvb2dsZTo6Q2xvdWQ6OlNlY3VyaXR5Q2VudGVyOjpWMWIGcHJvdG8z", [file_google_api_resource]);

/**
 * A path that an attacker could take to reach an exposed resource.
 *
 * @generated from message google.cloud.securitycenter.v1.AttackPath
 */
export type AttackPath = Message<"google.cloud.securitycenter.v1.AttackPath"> & {
  /**
   * The attack path name, for example,
   *  `organizations/12/simulation/34/valuedResources/56/attackPaths/78`
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * A list of nodes that exist in this attack path.
   *
   * @generated from field: repeated google.cloud.securitycenter.v1.AttackPath.AttackPathNode path_nodes = 2;
   */
  pathNodes: AttackPath_AttackPathNode[];

  /**
   * A list of the edges between nodes in this attack path.
   *
   * @generated from field: repeated google.cloud.securitycenter.v1.AttackPath.AttackPathEdge edges = 3;
   */
  edges: AttackPath_AttackPathEdge[];
};

/**
 * Describes the message google.cloud.securitycenter.v1.AttackPath.
 * Use `create(AttackPathSchema)` to create a new message.
 */
export const AttackPathSchema: GenMessage<AttackPath> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_attack_path, 0);

/**
 * Represents one point that an attacker passes through in this attack path.
 *
 * @generated from message google.cloud.securitycenter.v1.AttackPath.AttackPathNode
 */
export type AttackPath_AttackPathNode = Message<"google.cloud.securitycenter.v1.AttackPath.AttackPathNode"> & {
  /**
   * The name of the resource at this point in the attack path.
   * The format of the name follows the Cloud Asset Inventory [resource
   * name
   * format](https://cloud.google.com/asset-inventory/docs/resource-name-format)
   *
   * @generated from field: string resource = 1;
   */
  resource: string;

  /**
   * The [supported resource
   * type](https://cloud.google.com/asset-inventory/docs/supported-asset-types)
   *
   * @generated from field: string resource_type = 2;
   */
  resourceType: string;

  /**
   * Human-readable name of this resource.
   *
   * @generated from field: string display_name = 3;
   */
  displayName: string;

  /**
   * The findings associated with this node in the attack path.
   *
   * @generated from field: repeated google.cloud.securitycenter.v1.AttackPath.AttackPathNode.PathNodeAssociatedFinding associated_findings = 4;
   */
  associatedFindings: AttackPath_AttackPathNode_PathNodeAssociatedFinding[];

  /**
   * Unique id of the attack path node.
   *
   * @generated from field: string uuid = 5;
   */
  uuid: string;

  /**
   * A list of attack step nodes that exist in this attack path node.
   *
   * @generated from field: repeated google.cloud.securitycenter.v1.AttackPath.AttackPathNode.AttackStepNode attack_steps = 6;
   */
  attackSteps: AttackPath_AttackPathNode_AttackStepNode[];
};

/**
 * Describes the message google.cloud.securitycenter.v1.AttackPath.AttackPathNode.
 * Use `create(AttackPath_AttackPathNodeSchema)` to create a new message.
 */
export const AttackPath_AttackPathNodeSchema: GenMessage<AttackPath_AttackPathNode> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_attack_path, 0, 0);

/**
 * A finding that is associated with this node in the attack path.
 *
 * @generated from message google.cloud.securitycenter.v1.AttackPath.AttackPathNode.PathNodeAssociatedFinding
 */
export type AttackPath_AttackPathNode_PathNodeAssociatedFinding = Message<"google.cloud.securitycenter.v1.AttackPath.AttackPathNode.PathNodeAssociatedFinding"> & {
  /**
   * Canonical name of the associated findings. Example:
   * `organizations/123/sources/456/findings/789`
   *
   * @generated from field: string canonical_finding = 1;
   */
  canonicalFinding: string;

  /**
   * The additional taxonomy group within findings from a given source.
   *
   * @generated from field: string finding_category = 2;
   */
  findingCategory: string;

  /**
   * Full resource name of the finding.
   *
   * @generated from field: string name = 3;
   */
  name: string;
};

/**
 * Describes the message google.cloud.securitycenter.v1.AttackPath.AttackPathNode.PathNodeAssociatedFinding.
 * Use `create(AttackPath_AttackPathNode_PathNodeAssociatedFindingSchema)` to create a new message.
 */
export const AttackPath_AttackPathNode_PathNodeAssociatedFindingSchema: GenMessage<AttackPath_AttackPathNode_PathNodeAssociatedFinding> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_attack_path, 0, 0, 0);

/**
 * Detailed steps the attack can take between path nodes.
 *
 * @generated from message google.cloud.securitycenter.v1.AttackPath.AttackPathNode.AttackStepNode
 */
export type AttackPath_AttackPathNode_AttackStepNode = Message<"google.cloud.securitycenter.v1.AttackPath.AttackPathNode.AttackStepNode"> & {
  /**
   * Unique ID for one Node
   *
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * Attack step type. Can be either AND, OR or DEFENSE
   *
   * @generated from field: google.cloud.securitycenter.v1.AttackPath.AttackPathNode.NodeType type = 2;
   */
  type: AttackPath_AttackPathNode_NodeType;

  /**
   * User friendly name of the attack step
   *
   * @generated from field: string display_name = 3;
   */
  displayName: string;

  /**
   * Attack step labels for metadata
   *
   * @generated from field: map<string, string> labels = 4;
   */
  labels: { [key: string]: string };

  /**
   * Attack step description
   *
   * @generated from field: string description = 5;
   */
  description: string;
};

/**
 * Describes the message google.cloud.securitycenter.v1.AttackPath.AttackPathNode.AttackStepNode.
 * Use `create(AttackPath_AttackPathNode_AttackStepNodeSchema)` to create a new message.
 */
export const AttackPath_AttackPathNode_AttackStepNodeSchema: GenMessage<AttackPath_AttackPathNode_AttackStepNode> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_attack_path, 0, 0, 1);

/**
 * The type of the incoming attack step node.
 *
 * @generated from enum google.cloud.securitycenter.v1.AttackPath.AttackPathNode.NodeType
 */
export enum AttackPath_AttackPathNode_NodeType {
  /**
   * Type not specified
   *
   * @generated from enum value: NODE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Incoming edge joined with AND
   *
   * @generated from enum value: NODE_TYPE_AND = 1;
   */
  AND = 1,

  /**
   * Incoming edge joined with OR
   *
   * @generated from enum value: NODE_TYPE_OR = 2;
   */
  OR = 2,

  /**
   * Incoming edge is defense
   *
   * @generated from enum value: NODE_TYPE_DEFENSE = 3;
   */
  DEFENSE = 3,

  /**
   * Incoming edge is attacker
   *
   * @generated from enum value: NODE_TYPE_ATTACKER = 4;
   */
  ATTACKER = 4,
}

/**
 * Describes the enum google.cloud.securitycenter.v1.AttackPath.AttackPathNode.NodeType.
 */
export const AttackPath_AttackPathNode_NodeTypeSchema: GenEnum<AttackPath_AttackPathNode_NodeType> = /*@__PURE__*/
  enumDesc(file_google_cloud_securitycenter_v1_attack_path, 0, 0, 0);

/**
 * Represents a connection between a source node and a destination node in
 * this attack path.
 *
 * @generated from message google.cloud.securitycenter.v1.AttackPath.AttackPathEdge
 */
export type AttackPath_AttackPathEdge = Message<"google.cloud.securitycenter.v1.AttackPath.AttackPathEdge"> & {
  /**
   * The attack node uuid of the source node.
   *
   * @generated from field: string source = 1;
   */
  source: string;

  /**
   * The attack node uuid of the destination node.
   *
   * @generated from field: string destination = 2;
   */
  destination: string;
};

/**
 * Describes the message google.cloud.securitycenter.v1.AttackPath.AttackPathEdge.
 * Use `create(AttackPath_AttackPathEdgeSchema)` to create a new message.
 */
export const AttackPath_AttackPathEdgeSchema: GenMessage<AttackPath_AttackPathEdge> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_attack_path, 0, 1);
