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
// @generated from file google/cloud/osconfig/agentendpoint/v1/config_common.proto (package google.cloud.osconfig.agentendpoint.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/osconfig/agentendpoint/v1/config_common.proto.
 */
export const file_google_cloud_osconfig_agentendpoint_v1_config_common: GenFile = /*@__PURE__*/
  fileDesc("Cjpnb29nbGUvY2xvdWQvb3Njb25maWcvYWdlbnRlbmRwb2ludC92MS9jb25maWdfY29tbW9uLnByb3RvEiZnb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MSK3AwoaT1NQb2xpY3lSZXNvdXJjZUNvbmZpZ1N0ZXASVQoEdHlwZRgBIAEoDjJHLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLk9TUG9saWN5UmVzb3VyY2VDb25maWdTdGVwLlR5cGUSWwoHb3V0Y29tZRgCIAEoDjJKLmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLk9TUG9saWN5UmVzb3VyY2VDb25maWdTdGVwLk91dGNvbWUSFQoNZXJyb3JfbWVzc2FnZRgDIAEoCSKOAQoEVHlwZRIUChBUWVBFX1VOU1BFQ0lGSUVEEAASDgoKVkFMSURBVElPThABEhcKE0RFU0lSRURfU1RBVEVfQ0hFQ0sQAhIdChlERVNJUkVEX1NUQVRFX0VORk9SQ0VNRU5UEAMSKAokREVTSVJFRF9TVEFURV9DSEVDS19QT1NUX0VORk9SQ0VNRU5UEAQiPQoHT3V0Y29tZRIXChNPVVRDT01FX1VOU1BFQ0lGSUVEEAASDQoJU1VDQ0VFREVEEAESCgoGRkFJTEVEEAIimAMKGk9TUG9saWN5UmVzb3VyY2VDb21wbGlhbmNlEh0KFW9zX3BvbGljeV9yZXNvdXJjZV9pZBgBIAEoCRJYCgxjb25maWdfc3RlcHMYAiADKAsyQi5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MS5PU1BvbGljeVJlc291cmNlQ29uZmlnU3RlcBJOCgVzdGF0ZRgDIAEoDjI/Lmdvb2dsZS5jbG91ZC5vc2NvbmZpZy5hZ2VudGVuZHBvaW50LnYxLk9TUG9saWN5Q29tcGxpYW5jZVN0YXRlEnUKFGV4ZWNfcmVzb3VyY2Vfb3V0cHV0GAQgASgLMlUuZ29vZ2xlLmNsb3VkLm9zY29uZmlnLmFnZW50ZW5kcG9pbnQudjEuT1NQb2xpY3lSZXNvdXJjZUNvbXBsaWFuY2UuRXhlY1Jlc291cmNlT3V0cHV0SAAaMAoSRXhlY1Jlc291cmNlT3V0cHV0EhoKEmVuZm9yY2VtZW50X291dHB1dBgCIAEoDEIICgZvdXRwdXQqkwEKF09TUG9saWN5Q29tcGxpYW5jZVN0YXRlEioKJk9TX1BPTElDWV9DT01QTElBTkNFX1NUQVRFX1VOU1BFQ0lGSUVEEAASDQoJQ09NUExJQU5UEAESEQoNTk9OX0NPTVBMSUFOVBACEgsKB1VOS05PV04QAxIdChlOT19PU19QT0xJQ0lFU19BUFBMSUNBQkxFEARCkwEKKmNvbS5nb29nbGUuY2xvdWQub3Njb25maWcuYWdlbnRlbmRwb2ludC52MUIRQ29uZmlnQ29tbW9uUHJvdG9QAVpQY2xvdWQuZ29vZ2xlLmNvbS9nby9vc2NvbmZpZy9hZ2VudGVuZHBvaW50L2FwaXYxL2FnZW50ZW5kcG9pbnRwYjthZ2VudGVuZHBvaW50cGJiBnByb3RvMw");

/**
 * Step performed by the OS Config agent for configuring an `OSPolicyResource`
 * to its desired state.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceConfigStep
 */
export type OSPolicyResourceConfigStep = Message<"google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceConfigStep"> & {
  /**
   * Configuration step type.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceConfigStep.Type type = 1;
   */
  type: OSPolicyResourceConfigStep_Type;

  /**
   * Outcome of the configuration step.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceConfigStep.Outcome outcome = 2;
   */
  outcome: OSPolicyResourceConfigStep_Outcome;

  /**
   * An error message recorded during the execution of this step.
   * Only populated when outcome is FAILED.
   *
   * @generated from field: string error_message = 3;
   */
  errorMessage: string;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceConfigStep.
 * Use `create(OSPolicyResourceConfigStepSchema)` to create a new message.
 */
export const OSPolicyResourceConfigStepSchema: GenMessage<OSPolicyResourceConfigStep> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_config_common, 0);

/**
 * Supported configuration step types
 *
 * @generated from enum google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceConfigStep.Type
 */
export enum OSPolicyResourceConfigStep_Type {
  /**
   * Default value. This value is unused.
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  TYPE_UNSPECIFIED = 0,

  /**
   * Validation to detect resource conflicts, schema errors, etc.
   *
   * @generated from enum value: VALIDATION = 1;
   */
  VALIDATION = 1,

  /**
   * Check the current desired state status of the resource.
   *
   * @generated from enum value: DESIRED_STATE_CHECK = 2;
   */
  DESIRED_STATE_CHECK = 2,

  /**
   * Enforce the desired state for a resource that is not in desired state.
   *
   * @generated from enum value: DESIRED_STATE_ENFORCEMENT = 3;
   */
  DESIRED_STATE_ENFORCEMENT = 3,

  /**
   * Re-check desired state status for a resource after enforcement of all
   * resources in the current configuration run.
   *
   * This step is used to determine the final desired state status for the
   * resource. It accounts for any resources that might have drifted from
   * their desired state due to side effects from configuring other resources
   * during the current configuration run.
   *
   * @generated from enum value: DESIRED_STATE_CHECK_POST_ENFORCEMENT = 4;
   */
  DESIRED_STATE_CHECK_POST_ENFORCEMENT = 4,
}

/**
 * Describes the enum google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceConfigStep.Type.
 */
export const OSPolicyResourceConfigStep_TypeSchema: GenEnum<OSPolicyResourceConfigStep_Type> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_agentendpoint_v1_config_common, 0, 0);

/**
 * Supported outcomes for a configuration step.
 *
 * @generated from enum google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceConfigStep.Outcome
 */
export enum OSPolicyResourceConfigStep_Outcome {
  /**
   * Default value. This value is unused.
   *
   * @generated from enum value: OUTCOME_UNSPECIFIED = 0;
   */
  OUTCOME_UNSPECIFIED = 0,

  /**
   * The step succeeded.
   *
   * @generated from enum value: SUCCEEDED = 1;
   */
  SUCCEEDED = 1,

  /**
   * The step failed.
   *
   * @generated from enum value: FAILED = 2;
   */
  FAILED = 2,
}

/**
 * Describes the enum google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceConfigStep.Outcome.
 */
export const OSPolicyResourceConfigStep_OutcomeSchema: GenEnum<OSPolicyResourceConfigStep_Outcome> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_agentendpoint_v1_config_common, 0, 1);

/**
 * Compliance data for an OS policy resource.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceCompliance
 */
export type OSPolicyResourceCompliance = Message<"google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceCompliance"> & {
  /**
   * The id of the OS policy resource.
   *
   * @generated from field: string os_policy_resource_id = 1;
   */
  osPolicyResourceId: string;

  /**
   * Ordered list of configuration steps taken by the agent for the OS policy
   * resource.
   *
   * @generated from field: repeated google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceConfigStep config_steps = 2;
   */
  configSteps: OSPolicyResourceConfigStep[];

  /**
   * Compliance state of the OS policy resource.
   *
   * @generated from field: google.cloud.osconfig.agentendpoint.v1.OSPolicyComplianceState state = 3;
   */
  state: OSPolicyComplianceState;

  /**
   * Resource specific output.
   *
   * @generated from oneof google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceCompliance.output
   */
  output: {
    /**
     * ExecResource specific output.
     *
     * @generated from field: google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceCompliance.ExecResourceOutput exec_resource_output = 4;
     */
    value: OSPolicyResourceCompliance_ExecResourceOutput;
    case: "execResourceOutput";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceCompliance.
 * Use `create(OSPolicyResourceComplianceSchema)` to create a new message.
 */
export const OSPolicyResourceComplianceSchema: GenMessage<OSPolicyResourceCompliance> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_config_common, 1);

/**
 * ExecResource specific output.
 *
 * @generated from message google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceCompliance.ExecResourceOutput
 */
export type OSPolicyResourceCompliance_ExecResourceOutput = Message<"google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceCompliance.ExecResourceOutput"> & {
  /**
   * Output from Enforcement phase output file (if run).
   * Output size is limited to 100K bytes.
   *
   * @generated from field: bytes enforcement_output = 2;
   */
  enforcementOutput: Uint8Array;
};

/**
 * Describes the message google.cloud.osconfig.agentendpoint.v1.OSPolicyResourceCompliance.ExecResourceOutput.
 * Use `create(OSPolicyResourceCompliance_ExecResourceOutputSchema)` to create a new message.
 */
export const OSPolicyResourceCompliance_ExecResourceOutputSchema: GenMessage<OSPolicyResourceCompliance_ExecResourceOutput> = /*@__PURE__*/
  messageDesc(file_google_cloud_osconfig_agentendpoint_v1_config_common, 1, 0);

/**
 * Supported OSPolicy compliance states.
 *
 * @generated from enum google.cloud.osconfig.agentendpoint.v1.OSPolicyComplianceState
 */
export enum OSPolicyComplianceState {
  /**
   * Default value. This value is unused.
   *
   * @generated from enum value: OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED = 0;
   */
  OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED = 0,

  /**
   * Compliant state.
   *
   * @generated from enum value: COMPLIANT = 1;
   */
  COMPLIANT = 1,

  /**
   * Non-compliant state
   *
   * @generated from enum value: NON_COMPLIANT = 2;
   */
  NON_COMPLIANT = 2,

  /**
   * Unknown compliance state.
   *
   * @generated from enum value: UNKNOWN = 3;
   */
  UNKNOWN = 3,

  /**
   * No applicable OS policies were found for the instance.
   * This state is only applicable to the instance.
   *
   * @generated from enum value: NO_OS_POLICIES_APPLICABLE = 4;
   */
  NO_OS_POLICIES_APPLICABLE = 4,
}

/**
 * Describes the enum google.cloud.osconfig.agentendpoint.v1.OSPolicyComplianceState.
 */
export const OSPolicyComplianceStateSchema: GenEnum<OSPolicyComplianceState> = /*@__PURE__*/
  enumDesc(file_google_cloud_osconfig_agentendpoint_v1_config_common, 0);
