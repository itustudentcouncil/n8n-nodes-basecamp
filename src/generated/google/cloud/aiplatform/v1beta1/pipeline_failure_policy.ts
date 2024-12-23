// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/pipeline_failure_policy.proto

/* eslint-disable */

export const protobufPackage = "google.cloud.aiplatform.v1beta1";

/**
 * Represents the failure policy of a pipeline. Currently, the default of a
 * pipeline is that the pipeline will continue to run until no more tasks can be
 * executed, also known as PIPELINE_FAILURE_POLICY_FAIL_SLOW. However, if a
 * pipeline is set to PIPELINE_FAILURE_POLICY_FAIL_FAST, it will stop scheduling
 * any new tasks when a task has failed. Any scheduled tasks will continue to
 * completion.
 */
export enum PipelineFailurePolicy {
  /** PIPELINE_FAILURE_POLICY_UNSPECIFIED - Default value, and follows fail slow behavior. */
  PIPELINE_FAILURE_POLICY_UNSPECIFIED = 0,
  /**
   * PIPELINE_FAILURE_POLICY_FAIL_SLOW - Indicates that the pipeline should continue to run until all possible
   * tasks have been scheduled and completed.
   */
  PIPELINE_FAILURE_POLICY_FAIL_SLOW = 1,
  /**
   * PIPELINE_FAILURE_POLICY_FAIL_FAST - Indicates that the pipeline should stop scheduling new tasks after a task
   * has failed.
   */
  PIPELINE_FAILURE_POLICY_FAIL_FAST = 2,
  UNRECOGNIZED = -1,
}

export function pipelineFailurePolicyFromJSON(object: any): PipelineFailurePolicy {
  switch (object) {
    case 0:
    case "PIPELINE_FAILURE_POLICY_UNSPECIFIED":
      return PipelineFailurePolicy.PIPELINE_FAILURE_POLICY_UNSPECIFIED;
    case 1:
    case "PIPELINE_FAILURE_POLICY_FAIL_SLOW":
      return PipelineFailurePolicy.PIPELINE_FAILURE_POLICY_FAIL_SLOW;
    case 2:
    case "PIPELINE_FAILURE_POLICY_FAIL_FAST":
      return PipelineFailurePolicy.PIPELINE_FAILURE_POLICY_FAIL_FAST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PipelineFailurePolicy.UNRECOGNIZED;
  }
}

export function pipelineFailurePolicyToJSON(object: PipelineFailurePolicy): string {
  switch (object) {
    case PipelineFailurePolicy.PIPELINE_FAILURE_POLICY_UNSPECIFIED:
      return "PIPELINE_FAILURE_POLICY_UNSPECIFIED";
    case PipelineFailurePolicy.PIPELINE_FAILURE_POLICY_FAIL_SLOW:
      return "PIPELINE_FAILURE_POLICY_FAIL_SLOW";
    case PipelineFailurePolicy.PIPELINE_FAILURE_POLICY_FAIL_FAST:
      return "PIPELINE_FAILURE_POLICY_FAIL_FAST";
    case PipelineFailurePolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
