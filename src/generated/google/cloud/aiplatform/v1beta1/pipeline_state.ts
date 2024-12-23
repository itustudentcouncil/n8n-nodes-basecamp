// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/pipeline_state.proto

/* eslint-disable */

export const protobufPackage = "google.cloud.aiplatform.v1beta1";

/** Describes the state of a pipeline. */
export enum PipelineState {
  /** PIPELINE_STATE_UNSPECIFIED - The pipeline state is unspecified. */
  PIPELINE_STATE_UNSPECIFIED = 0,
  /**
   * PIPELINE_STATE_QUEUED - The pipeline has been created or resumed, and processing has not yet
   * begun.
   */
  PIPELINE_STATE_QUEUED = 1,
  /** PIPELINE_STATE_PENDING - The service is preparing to run the pipeline. */
  PIPELINE_STATE_PENDING = 2,
  /** PIPELINE_STATE_RUNNING - The pipeline is in progress. */
  PIPELINE_STATE_RUNNING = 3,
  /** PIPELINE_STATE_SUCCEEDED - The pipeline completed successfully. */
  PIPELINE_STATE_SUCCEEDED = 4,
  /** PIPELINE_STATE_FAILED - The pipeline failed. */
  PIPELINE_STATE_FAILED = 5,
  /**
   * PIPELINE_STATE_CANCELLING - The pipeline is being cancelled. From this state, the pipeline may only go
   * to either PIPELINE_STATE_SUCCEEDED, PIPELINE_STATE_FAILED or
   * PIPELINE_STATE_CANCELLED.
   */
  PIPELINE_STATE_CANCELLING = 6,
  /** PIPELINE_STATE_CANCELLED - The pipeline has been cancelled. */
  PIPELINE_STATE_CANCELLED = 7,
  /** PIPELINE_STATE_PAUSED - The pipeline has been stopped, and can be resumed. */
  PIPELINE_STATE_PAUSED = 8,
  UNRECOGNIZED = -1,
}

export function pipelineStateFromJSON(object: any): PipelineState {
  switch (object) {
    case 0:
    case "PIPELINE_STATE_UNSPECIFIED":
      return PipelineState.PIPELINE_STATE_UNSPECIFIED;
    case 1:
    case "PIPELINE_STATE_QUEUED":
      return PipelineState.PIPELINE_STATE_QUEUED;
    case 2:
    case "PIPELINE_STATE_PENDING":
      return PipelineState.PIPELINE_STATE_PENDING;
    case 3:
    case "PIPELINE_STATE_RUNNING":
      return PipelineState.PIPELINE_STATE_RUNNING;
    case 4:
    case "PIPELINE_STATE_SUCCEEDED":
      return PipelineState.PIPELINE_STATE_SUCCEEDED;
    case 5:
    case "PIPELINE_STATE_FAILED":
      return PipelineState.PIPELINE_STATE_FAILED;
    case 6:
    case "PIPELINE_STATE_CANCELLING":
      return PipelineState.PIPELINE_STATE_CANCELLING;
    case 7:
    case "PIPELINE_STATE_CANCELLED":
      return PipelineState.PIPELINE_STATE_CANCELLED;
    case 8:
    case "PIPELINE_STATE_PAUSED":
      return PipelineState.PIPELINE_STATE_PAUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PipelineState.UNRECOGNIZED;
  }
}

export function pipelineStateToJSON(object: PipelineState): string {
  switch (object) {
    case PipelineState.PIPELINE_STATE_UNSPECIFIED:
      return "PIPELINE_STATE_UNSPECIFIED";
    case PipelineState.PIPELINE_STATE_QUEUED:
      return "PIPELINE_STATE_QUEUED";
    case PipelineState.PIPELINE_STATE_PENDING:
      return "PIPELINE_STATE_PENDING";
    case PipelineState.PIPELINE_STATE_RUNNING:
      return "PIPELINE_STATE_RUNNING";
    case PipelineState.PIPELINE_STATE_SUCCEEDED:
      return "PIPELINE_STATE_SUCCEEDED";
    case PipelineState.PIPELINE_STATE_FAILED:
      return "PIPELINE_STATE_FAILED";
    case PipelineState.PIPELINE_STATE_CANCELLING:
      return "PIPELINE_STATE_CANCELLING";
    case PipelineState.PIPELINE_STATE_CANCELLED:
      return "PIPELINE_STATE_CANCELLED";
    case PipelineState.PIPELINE_STATE_PAUSED:
      return "PIPELINE_STATE_PAUSED";
    case PipelineState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
