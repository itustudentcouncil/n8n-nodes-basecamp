// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/datapipelines/logging/v1/logging.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Status } from "../../../../rpc/status.js";

export const protobufPackage = "google.cloud.datapipelines.logging.v1";

/**
 * Cloud Logging structured payload for events generated from Data Pipelines API
 * requests.
 */
export interface RequestLogEntry {
  /** Type of the Data Pipelines API request. */
  requestType: RequestLogEntry_RequestType;
  /** The resulting status of the Data Pipelines API request. */
  status:
    | Status
    | undefined;
  /** Cause of the error status. */
  errorCause: RequestLogEntry_ErrorCause;
}

/** Type of a Data Pipelines API request. */
export enum RequestLogEntry_RequestType {
  /** REQUEST_TYPE_UNSPECIFIED - Default value. This value is not used. */
  REQUEST_TYPE_UNSPECIFIED = 0,
  /** CREATE_PIPELINE - A Data Pipelines Create Pipeline request. */
  CREATE_PIPELINE = 1,
  /** UPDATE_PIPELINE - A Data Pipelines Update Pipeline request. */
  UPDATE_PIPELINE = 2,
  /** DELETE_PIPELINE - A Data Pipelines Delete Pipeline request. */
  DELETE_PIPELINE = 3,
  /** LIST_PIPELINES - A Data Pipelines List Pipelines request. */
  LIST_PIPELINES = 4,
  /** GET_PIPELINE - A Data Pipelines Get Pipeline request. */
  GET_PIPELINE = 5,
  /** STOP_PIPELINE - A Data Pipelines Stop Pipeline request. */
  STOP_PIPELINE = 6,
  /** RUN_PIPELINE - A Data Pipelines Run Pipeline request. */
  RUN_PIPELINE = 7,
  /** LIST_JOBS - A Data Pipelines List Jobs request. */
  LIST_JOBS = 8,
  UNRECOGNIZED = -1,
}

export function requestLogEntry_RequestTypeFromJSON(object: any): RequestLogEntry_RequestType {
  switch (object) {
    case 0:
    case "REQUEST_TYPE_UNSPECIFIED":
      return RequestLogEntry_RequestType.REQUEST_TYPE_UNSPECIFIED;
    case 1:
    case "CREATE_PIPELINE":
      return RequestLogEntry_RequestType.CREATE_PIPELINE;
    case 2:
    case "UPDATE_PIPELINE":
      return RequestLogEntry_RequestType.UPDATE_PIPELINE;
    case 3:
    case "DELETE_PIPELINE":
      return RequestLogEntry_RequestType.DELETE_PIPELINE;
    case 4:
    case "LIST_PIPELINES":
      return RequestLogEntry_RequestType.LIST_PIPELINES;
    case 5:
    case "GET_PIPELINE":
      return RequestLogEntry_RequestType.GET_PIPELINE;
    case 6:
    case "STOP_PIPELINE":
      return RequestLogEntry_RequestType.STOP_PIPELINE;
    case 7:
    case "RUN_PIPELINE":
      return RequestLogEntry_RequestType.RUN_PIPELINE;
    case 8:
    case "LIST_JOBS":
      return RequestLogEntry_RequestType.LIST_JOBS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestLogEntry_RequestType.UNRECOGNIZED;
  }
}

export function requestLogEntry_RequestTypeToJSON(object: RequestLogEntry_RequestType): string {
  switch (object) {
    case RequestLogEntry_RequestType.REQUEST_TYPE_UNSPECIFIED:
      return "REQUEST_TYPE_UNSPECIFIED";
    case RequestLogEntry_RequestType.CREATE_PIPELINE:
      return "CREATE_PIPELINE";
    case RequestLogEntry_RequestType.UPDATE_PIPELINE:
      return "UPDATE_PIPELINE";
    case RequestLogEntry_RequestType.DELETE_PIPELINE:
      return "DELETE_PIPELINE";
    case RequestLogEntry_RequestType.LIST_PIPELINES:
      return "LIST_PIPELINES";
    case RequestLogEntry_RequestType.GET_PIPELINE:
      return "GET_PIPELINE";
    case RequestLogEntry_RequestType.STOP_PIPELINE:
      return "STOP_PIPELINE";
    case RequestLogEntry_RequestType.RUN_PIPELINE:
      return "RUN_PIPELINE";
    case RequestLogEntry_RequestType.LIST_JOBS:
      return "LIST_JOBS";
    case RequestLogEntry_RequestType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Cause code for a Data Pipelines API request error. */
export enum RequestLogEntry_ErrorCause {
  /** ERROR_CAUSE_UNSPECIFIED - Default value. This value is not used. */
  ERROR_CAUSE_UNSPECIFIED = 0,
  /** INVALID_REQUEST - The request is invalid. */
  INVALID_REQUEST = 1,
  /** PROJECT_NUMBER_NOT_FOUND - Failed to fetch project number for the provided project id. */
  PROJECT_NUMBER_NOT_FOUND = 2,
  /** PIPELINE_ID_ALREADY_EXISTS - The given pipeline already exists. */
  PIPELINE_ID_ALREADY_EXISTS = 3,
  /** PIPELINE_QUOTA_ALLOCATION_FAILED - Failed to allocate a token for the per project pipeline count quota. */
  PIPELINE_QUOTA_ALLOCATION_FAILED = 4,
  /** PIPELINE_NOT_FOUND - The given pipeline is not found. */
  PIPELINE_NOT_FOUND = 5,
  /** INVALID_PIPELINE_WORKLOAD - The pipeline's workload is invalid. */
  INVALID_PIPELINE_WORKLOAD = 6,
  /** DATAFLOW_WORKER_SERVICE_ACCOUNT_PERMISSION_DENIED - The user cannot act as the Dataflow worker service account. */
  DATAFLOW_WORKER_SERVICE_ACCOUNT_PERMISSION_DENIED = 7,
  /** CLOUD_SCHEDULER_SERVICE_ACCOUNT_PERMISSION_DENIED - The user cannot act as the Cloud Scheduler service account. */
  CLOUD_SCHEDULER_SERVICE_ACCOUNT_PERMISSION_DENIED = 8,
  /** INTERNAL_DATA_PIPELINES_SERVICE_ACCOUNT_ISSUE - Issues related to the per service per project service account. */
  INTERNAL_DATA_PIPELINES_SERVICE_ACCOUNT_ISSUE = 9,
  /** CLOUD_SCHEDULER_INVALID_ARGUMENT - Invalid argument in Cloud Scheduler service call. */
  CLOUD_SCHEDULER_INVALID_ARGUMENT = 10,
  /** CLOUD_SCHEDULER_RESOURCE_EXHAUSTED - Exceeds Cloud Scheduler service quota limit. */
  CLOUD_SCHEDULER_RESOURCE_EXHAUSTED = 11,
  /** CLOUD_SCHEDULER_JOB_NOT_FOUND - Cloud Scheduler job not found. */
  CLOUD_SCHEDULER_JOB_NOT_FOUND = 12,
  /** OTHER_CLOUD_SCHEDULER_ISSUE - Other Cloud Scheduler related issues. */
  OTHER_CLOUD_SCHEDULER_ISSUE = 13,
  /** DATAFLOW_JOB_ALREADY_EXISTS - Dataflow job with the same name already exists. */
  DATAFLOW_JOB_ALREADY_EXISTS = 14,
  /** DATAFLOW_INVALID_ARGUMENT - Invalid argument in Dataflow service call. */
  DATAFLOW_INVALID_ARGUMENT = 15,
  /** DATAFLOW_RESOURCE_EXHAUSTED - Exceeds Dataflow service quota limit. */
  DATAFLOW_RESOURCE_EXHAUSTED = 16,
  /** DATAFLOW_JOB_NOT_FOUND - Dataflow job not found. */
  DATAFLOW_JOB_NOT_FOUND = 17,
  /** OTHER_DATAFLOW_ISSUE - Other Dataflow related issues. */
  OTHER_DATAFLOW_ISSUE = 18,
  /** DATABASE_ERROR - Database related issues. */
  DATABASE_ERROR = 19,
  /**
   * WRONG_PIPELINE_TYPE - Request with the wrong pipeline type. For example, RunPipeline cannot be
   * used with a streaming pipeline.
   */
  WRONG_PIPELINE_TYPE = 20,
  /** INTERNAL_ERROR - Issues related to other Google internal services/systems. */
  INTERNAL_ERROR = 21,
  /** PIPELINE_OR_PROJECT_NOT_FOUND - Cannot find the given pipeline or project. */
  PIPELINE_OR_PROJECT_NOT_FOUND = 22,
  UNRECOGNIZED = -1,
}

export function requestLogEntry_ErrorCauseFromJSON(object: any): RequestLogEntry_ErrorCause {
  switch (object) {
    case 0:
    case "ERROR_CAUSE_UNSPECIFIED":
      return RequestLogEntry_ErrorCause.ERROR_CAUSE_UNSPECIFIED;
    case 1:
    case "INVALID_REQUEST":
      return RequestLogEntry_ErrorCause.INVALID_REQUEST;
    case 2:
    case "PROJECT_NUMBER_NOT_FOUND":
      return RequestLogEntry_ErrorCause.PROJECT_NUMBER_NOT_FOUND;
    case 3:
    case "PIPELINE_ID_ALREADY_EXISTS":
      return RequestLogEntry_ErrorCause.PIPELINE_ID_ALREADY_EXISTS;
    case 4:
    case "PIPELINE_QUOTA_ALLOCATION_FAILED":
      return RequestLogEntry_ErrorCause.PIPELINE_QUOTA_ALLOCATION_FAILED;
    case 5:
    case "PIPELINE_NOT_FOUND":
      return RequestLogEntry_ErrorCause.PIPELINE_NOT_FOUND;
    case 6:
    case "INVALID_PIPELINE_WORKLOAD":
      return RequestLogEntry_ErrorCause.INVALID_PIPELINE_WORKLOAD;
    case 7:
    case "DATAFLOW_WORKER_SERVICE_ACCOUNT_PERMISSION_DENIED":
      return RequestLogEntry_ErrorCause.DATAFLOW_WORKER_SERVICE_ACCOUNT_PERMISSION_DENIED;
    case 8:
    case "CLOUD_SCHEDULER_SERVICE_ACCOUNT_PERMISSION_DENIED":
      return RequestLogEntry_ErrorCause.CLOUD_SCHEDULER_SERVICE_ACCOUNT_PERMISSION_DENIED;
    case 9:
    case "INTERNAL_DATA_PIPELINES_SERVICE_ACCOUNT_ISSUE":
      return RequestLogEntry_ErrorCause.INTERNAL_DATA_PIPELINES_SERVICE_ACCOUNT_ISSUE;
    case 10:
    case "CLOUD_SCHEDULER_INVALID_ARGUMENT":
      return RequestLogEntry_ErrorCause.CLOUD_SCHEDULER_INVALID_ARGUMENT;
    case 11:
    case "CLOUD_SCHEDULER_RESOURCE_EXHAUSTED":
      return RequestLogEntry_ErrorCause.CLOUD_SCHEDULER_RESOURCE_EXHAUSTED;
    case 12:
    case "CLOUD_SCHEDULER_JOB_NOT_FOUND":
      return RequestLogEntry_ErrorCause.CLOUD_SCHEDULER_JOB_NOT_FOUND;
    case 13:
    case "OTHER_CLOUD_SCHEDULER_ISSUE":
      return RequestLogEntry_ErrorCause.OTHER_CLOUD_SCHEDULER_ISSUE;
    case 14:
    case "DATAFLOW_JOB_ALREADY_EXISTS":
      return RequestLogEntry_ErrorCause.DATAFLOW_JOB_ALREADY_EXISTS;
    case 15:
    case "DATAFLOW_INVALID_ARGUMENT":
      return RequestLogEntry_ErrorCause.DATAFLOW_INVALID_ARGUMENT;
    case 16:
    case "DATAFLOW_RESOURCE_EXHAUSTED":
      return RequestLogEntry_ErrorCause.DATAFLOW_RESOURCE_EXHAUSTED;
    case 17:
    case "DATAFLOW_JOB_NOT_FOUND":
      return RequestLogEntry_ErrorCause.DATAFLOW_JOB_NOT_FOUND;
    case 18:
    case "OTHER_DATAFLOW_ISSUE":
      return RequestLogEntry_ErrorCause.OTHER_DATAFLOW_ISSUE;
    case 19:
    case "DATABASE_ERROR":
      return RequestLogEntry_ErrorCause.DATABASE_ERROR;
    case 20:
    case "WRONG_PIPELINE_TYPE":
      return RequestLogEntry_ErrorCause.WRONG_PIPELINE_TYPE;
    case 21:
    case "INTERNAL_ERROR":
      return RequestLogEntry_ErrorCause.INTERNAL_ERROR;
    case 22:
    case "PIPELINE_OR_PROJECT_NOT_FOUND":
      return RequestLogEntry_ErrorCause.PIPELINE_OR_PROJECT_NOT_FOUND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestLogEntry_ErrorCause.UNRECOGNIZED;
  }
}

export function requestLogEntry_ErrorCauseToJSON(object: RequestLogEntry_ErrorCause): string {
  switch (object) {
    case RequestLogEntry_ErrorCause.ERROR_CAUSE_UNSPECIFIED:
      return "ERROR_CAUSE_UNSPECIFIED";
    case RequestLogEntry_ErrorCause.INVALID_REQUEST:
      return "INVALID_REQUEST";
    case RequestLogEntry_ErrorCause.PROJECT_NUMBER_NOT_FOUND:
      return "PROJECT_NUMBER_NOT_FOUND";
    case RequestLogEntry_ErrorCause.PIPELINE_ID_ALREADY_EXISTS:
      return "PIPELINE_ID_ALREADY_EXISTS";
    case RequestLogEntry_ErrorCause.PIPELINE_QUOTA_ALLOCATION_FAILED:
      return "PIPELINE_QUOTA_ALLOCATION_FAILED";
    case RequestLogEntry_ErrorCause.PIPELINE_NOT_FOUND:
      return "PIPELINE_NOT_FOUND";
    case RequestLogEntry_ErrorCause.INVALID_PIPELINE_WORKLOAD:
      return "INVALID_PIPELINE_WORKLOAD";
    case RequestLogEntry_ErrorCause.DATAFLOW_WORKER_SERVICE_ACCOUNT_PERMISSION_DENIED:
      return "DATAFLOW_WORKER_SERVICE_ACCOUNT_PERMISSION_DENIED";
    case RequestLogEntry_ErrorCause.CLOUD_SCHEDULER_SERVICE_ACCOUNT_PERMISSION_DENIED:
      return "CLOUD_SCHEDULER_SERVICE_ACCOUNT_PERMISSION_DENIED";
    case RequestLogEntry_ErrorCause.INTERNAL_DATA_PIPELINES_SERVICE_ACCOUNT_ISSUE:
      return "INTERNAL_DATA_PIPELINES_SERVICE_ACCOUNT_ISSUE";
    case RequestLogEntry_ErrorCause.CLOUD_SCHEDULER_INVALID_ARGUMENT:
      return "CLOUD_SCHEDULER_INVALID_ARGUMENT";
    case RequestLogEntry_ErrorCause.CLOUD_SCHEDULER_RESOURCE_EXHAUSTED:
      return "CLOUD_SCHEDULER_RESOURCE_EXHAUSTED";
    case RequestLogEntry_ErrorCause.CLOUD_SCHEDULER_JOB_NOT_FOUND:
      return "CLOUD_SCHEDULER_JOB_NOT_FOUND";
    case RequestLogEntry_ErrorCause.OTHER_CLOUD_SCHEDULER_ISSUE:
      return "OTHER_CLOUD_SCHEDULER_ISSUE";
    case RequestLogEntry_ErrorCause.DATAFLOW_JOB_ALREADY_EXISTS:
      return "DATAFLOW_JOB_ALREADY_EXISTS";
    case RequestLogEntry_ErrorCause.DATAFLOW_INVALID_ARGUMENT:
      return "DATAFLOW_INVALID_ARGUMENT";
    case RequestLogEntry_ErrorCause.DATAFLOW_RESOURCE_EXHAUSTED:
      return "DATAFLOW_RESOURCE_EXHAUSTED";
    case RequestLogEntry_ErrorCause.DATAFLOW_JOB_NOT_FOUND:
      return "DATAFLOW_JOB_NOT_FOUND";
    case RequestLogEntry_ErrorCause.OTHER_DATAFLOW_ISSUE:
      return "OTHER_DATAFLOW_ISSUE";
    case RequestLogEntry_ErrorCause.DATABASE_ERROR:
      return "DATABASE_ERROR";
    case RequestLogEntry_ErrorCause.WRONG_PIPELINE_TYPE:
      return "WRONG_PIPELINE_TYPE";
    case RequestLogEntry_ErrorCause.INTERNAL_ERROR:
      return "INTERNAL_ERROR";
    case RequestLogEntry_ErrorCause.PIPELINE_OR_PROJECT_NOT_FOUND:
      return "PIPELINE_OR_PROJECT_NOT_FOUND";
    case RequestLogEntry_ErrorCause.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseRequestLogEntry(): RequestLogEntry {
  return { requestType: 0, status: undefined, errorCause: 0 };
}

export const RequestLogEntry: MessageFns<RequestLogEntry> = {
  encode(message: RequestLogEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.requestType !== 0) {
      writer.uint32(8).int32(message.requestType);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).join();
    }
    if (message.errorCause !== 0) {
      writer.uint32(24).int32(message.errorCause);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RequestLogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.requestType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.errorCause = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestLogEntry {
    return {
      requestType: isSet(object.requestType) ? requestLogEntry_RequestTypeFromJSON(object.requestType) : 0,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      errorCause: isSet(object.errorCause) ? requestLogEntry_ErrorCauseFromJSON(object.errorCause) : 0,
    };
  },

  toJSON(message: RequestLogEntry): unknown {
    const obj: any = {};
    if (message.requestType !== 0) {
      obj.requestType = requestLogEntry_RequestTypeToJSON(message.requestType);
    }
    if (message.status !== undefined) {
      obj.status = Status.toJSON(message.status);
    }
    if (message.errorCause !== 0) {
      obj.errorCause = requestLogEntry_ErrorCauseToJSON(message.errorCause);
    }
    return obj;
  },

  create(base?: DeepPartial<RequestLogEntry>): RequestLogEntry {
    return RequestLogEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RequestLogEntry>): RequestLogEntry {
    const message = createBaseRequestLogEntry();
    message.requestType = object.requestType ?? 0;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    message.errorCause = object.errorCause ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}