// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/enterpriseknowledgegraph/v1/job_state.proto

/* eslint-disable */

export const protobufPackage = "google.cloud.enterpriseknowledgegraph.v1";

/** Describes the state of a job. */
export enum JobState {
  /** JOB_STATE_UNSPECIFIED - The job state is unspecified. */
  JOB_STATE_UNSPECIFIED = 0,
  /** JOB_STATE_PENDING - The service is preparing to run the job. */
  JOB_STATE_PENDING = 9,
  /** JOB_STATE_RUNNING - The job is in progress. */
  JOB_STATE_RUNNING = 1,
  /** JOB_STATE_SUCCEEDED - The job completed successfully. */
  JOB_STATE_SUCCEEDED = 2,
  /** JOB_STATE_FAILED - The job failed. */
  JOB_STATE_FAILED = 3,
  /** JOB_STATE_CANCELLED - The job has been cancelled. */
  JOB_STATE_CANCELLED = 4,
  /** JOB_STATE_KNOWLEDGE_EXTRACTION - Entity Recon API: The knowledge extraction job is running. */
  JOB_STATE_KNOWLEDGE_EXTRACTION = 5,
  /** JOB_STATE_RECON_PREPROCESSING - Entity Recon API: The preprocessing job is running. */
  JOB_STATE_RECON_PREPROCESSING = 6,
  /** JOB_STATE_CLUSTERING - Entity Recon API: The clustering job is running. */
  JOB_STATE_CLUSTERING = 7,
  /** JOB_STATE_EXPORTING_CLUSTERS - Entity Recon API: The exporting clusters job is running. */
  JOB_STATE_EXPORTING_CLUSTERS = 8,
  UNRECOGNIZED = -1,
}

export function jobStateFromJSON(object: any): JobState {
  switch (object) {
    case 0:
    case "JOB_STATE_UNSPECIFIED":
      return JobState.JOB_STATE_UNSPECIFIED;
    case 9:
    case "JOB_STATE_PENDING":
      return JobState.JOB_STATE_PENDING;
    case 1:
    case "JOB_STATE_RUNNING":
      return JobState.JOB_STATE_RUNNING;
    case 2:
    case "JOB_STATE_SUCCEEDED":
      return JobState.JOB_STATE_SUCCEEDED;
    case 3:
    case "JOB_STATE_FAILED":
      return JobState.JOB_STATE_FAILED;
    case 4:
    case "JOB_STATE_CANCELLED":
      return JobState.JOB_STATE_CANCELLED;
    case 5:
    case "JOB_STATE_KNOWLEDGE_EXTRACTION":
      return JobState.JOB_STATE_KNOWLEDGE_EXTRACTION;
    case 6:
    case "JOB_STATE_RECON_PREPROCESSING":
      return JobState.JOB_STATE_RECON_PREPROCESSING;
    case 7:
    case "JOB_STATE_CLUSTERING":
      return JobState.JOB_STATE_CLUSTERING;
    case 8:
    case "JOB_STATE_EXPORTING_CLUSTERS":
      return JobState.JOB_STATE_EXPORTING_CLUSTERS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JobState.UNRECOGNIZED;
  }
}

export function jobStateToJSON(object: JobState): string {
  switch (object) {
    case JobState.JOB_STATE_UNSPECIFIED:
      return "JOB_STATE_UNSPECIFIED";
    case JobState.JOB_STATE_PENDING:
      return "JOB_STATE_PENDING";
    case JobState.JOB_STATE_RUNNING:
      return "JOB_STATE_RUNNING";
    case JobState.JOB_STATE_SUCCEEDED:
      return "JOB_STATE_SUCCEEDED";
    case JobState.JOB_STATE_FAILED:
      return "JOB_STATE_FAILED";
    case JobState.JOB_STATE_CANCELLED:
      return "JOB_STATE_CANCELLED";
    case JobState.JOB_STATE_KNOWLEDGE_EXTRACTION:
      return "JOB_STATE_KNOWLEDGE_EXTRACTION";
    case JobState.JOB_STATE_RECON_PREPROCESSING:
      return "JOB_STATE_RECON_PREPROCESSING";
    case JobState.JOB_STATE_CLUSTERING:
      return "JOB_STATE_CLUSTERING";
    case JobState.JOB_STATE_EXPORTING_CLUSTERS:
      return "JOB_STATE_EXPORTING_CLUSTERS";
    case JobState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
