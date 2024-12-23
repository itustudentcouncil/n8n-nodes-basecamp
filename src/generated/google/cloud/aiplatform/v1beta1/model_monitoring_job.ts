// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/model_monitoring_job.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { Status } from "../../../rpc/status.js";
import { Interval } from "../../../type/interval.js";
import { JobState, jobStateFromJSON, jobStateToJSON } from "./job_state.js";
import { ModelMonitoringSpec } from "./model_monitoring_spec.js";

export const protobufPackage = "google.cloud.aiplatform.v1beta1";

/**
 * Represents a model monitoring job that analyze dataset using different
 * monitoring algorithm.
 */
export interface ModelMonitoringJob {
  /**
   * Output only. Resource name of a ModelMonitoringJob. Format:
   * `projects/{project_id}/locations/{location_id}/modelMonitors/{model_monitor_id}/modelMonitoringJobs/{model_monitoring_job_id}`
   */
  name: string;
  /**
   * The display name of the ModelMonitoringJob.
   * The name can be up to 128 characters long and can consist of any UTF-8.
   */
  displayName: string;
  /**
   * Monitoring monitoring job spec. It outlines the specifications for
   * monitoring objectives, notifications, and result exports. If left blank,
   * the default monitoring specifications from the top-level resource
   * 'ModelMonitor' will be applied. If provided, we will use the specification
   * defined here rather than the default one.
   */
  modelMonitoringSpec:
    | ModelMonitoringSpec
    | undefined;
  /** Output only. Timestamp when this ModelMonitoringJob was created. */
  createTime:
    | Date
    | undefined;
  /**
   * Output only. Timestamp when this ModelMonitoringJob was updated most
   * recently.
   */
  updateTime:
    | Date
    | undefined;
  /**
   * Output only. The state of the monitoring job.
   *  * When the job is still creating, the state will be 'JOB_STATE_PENDING'.
   *  * Once the job is successfully created, the state will be
   *    'JOB_STATE_RUNNING'.
   *  * Once the job is finished, the state will be one of
   *    'JOB_STATE_FAILED', 'JOB_STATE_SUCCEEDED',
   *    'JOB_STATE_PARTIALLY_SUCCEEDED'.
   */
  state: JobState;
  /**
   * Output only. Schedule resource name. It will only appear when this job is
   * triggered by a schedule.
   */
  schedule: string;
  /** Output only. Execution results for all the monitoring objectives. */
  jobExecutionDetail:
    | ModelMonitoringJobExecutionDetail
    | undefined;
  /**
   * Output only. Timestamp when this ModelMonitoringJob was scheduled. It will
   * only appear when this job is triggered by a schedule.
   */
  scheduleTime: Date | undefined;
}

/** Represent the execution details of the job. */
export interface ModelMonitoringJobExecutionDetail {
  /** Processed baseline datasets. */
  baselineDatasets: ModelMonitoringJobExecutionDetail_ProcessedDataset[];
  /** Processed target datasets. */
  targetDatasets: ModelMonitoringJobExecutionDetail_ProcessedDataset[];
  /**
   * Status of data processing for each monitoring objective.
   * Key is the objective.
   */
  objectiveStatus: { [key: string]: Status };
  /** Additional job error status. */
  error: Status | undefined;
}

/** Processed dataset information. */
export interface ModelMonitoringJobExecutionDetail_ProcessedDataset {
  /** Actual data location of the processed dataset. */
  location: string;
  /** Dataset time range information if any. */
  timeRange: Interval | undefined;
}

export interface ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry {
  key: string;
  value: Status | undefined;
}

function createBaseModelMonitoringJob(): ModelMonitoringJob {
  return {
    name: "",
    displayName: "",
    modelMonitoringSpec: undefined,
    createTime: undefined,
    updateTime: undefined,
    state: 0,
    schedule: "",
    jobExecutionDetail: undefined,
    scheduleTime: undefined,
  };
}

export const ModelMonitoringJob: MessageFns<ModelMonitoringJob> = {
  encode(message: ModelMonitoringJob, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.modelMonitoringSpec !== undefined) {
      ModelMonitoringSpec.encode(message.modelMonitoringSpec, writer.uint32(26).fork()).join();
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(34).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(42).fork()).join();
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    if (message.schedule !== "") {
      writer.uint32(58).string(message.schedule);
    }
    if (message.jobExecutionDetail !== undefined) {
      ModelMonitoringJobExecutionDetail.encode(message.jobExecutionDetail, writer.uint32(66).fork()).join();
    }
    if (message.scheduleTime !== undefined) {
      Timestamp.encode(toTimestamp(message.scheduleTime), writer.uint32(74).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ModelMonitoringJob {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModelMonitoringJob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modelMonitoringSpec = ModelMonitoringSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.schedule = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.jobExecutionDetail = ModelMonitoringJobExecutionDetail.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.scheduleTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModelMonitoringJob {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      modelMonitoringSpec: isSet(object.modelMonitoringSpec)
        ? ModelMonitoringSpec.fromJSON(object.modelMonitoringSpec)
        : undefined,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      state: isSet(object.state) ? jobStateFromJSON(object.state) : 0,
      schedule: isSet(object.schedule) ? globalThis.String(object.schedule) : "",
      jobExecutionDetail: isSet(object.jobExecutionDetail)
        ? ModelMonitoringJobExecutionDetail.fromJSON(object.jobExecutionDetail)
        : undefined,
      scheduleTime: isSet(object.scheduleTime) ? fromJsonTimestamp(object.scheduleTime) : undefined,
    };
  },

  toJSON(message: ModelMonitoringJob): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.modelMonitoringSpec !== undefined) {
      obj.modelMonitoringSpec = ModelMonitoringSpec.toJSON(message.modelMonitoringSpec);
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.state !== 0) {
      obj.state = jobStateToJSON(message.state);
    }
    if (message.schedule !== "") {
      obj.schedule = message.schedule;
    }
    if (message.jobExecutionDetail !== undefined) {
      obj.jobExecutionDetail = ModelMonitoringJobExecutionDetail.toJSON(message.jobExecutionDetail);
    }
    if (message.scheduleTime !== undefined) {
      obj.scheduleTime = message.scheduleTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<ModelMonitoringJob>): ModelMonitoringJob {
    return ModelMonitoringJob.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ModelMonitoringJob>): ModelMonitoringJob {
    const message = createBaseModelMonitoringJob();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.modelMonitoringSpec = (object.modelMonitoringSpec !== undefined && object.modelMonitoringSpec !== null)
      ? ModelMonitoringSpec.fromPartial(object.modelMonitoringSpec)
      : undefined;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.state = object.state ?? 0;
    message.schedule = object.schedule ?? "";
    message.jobExecutionDetail = (object.jobExecutionDetail !== undefined && object.jobExecutionDetail !== null)
      ? ModelMonitoringJobExecutionDetail.fromPartial(object.jobExecutionDetail)
      : undefined;
    message.scheduleTime = object.scheduleTime ?? undefined;
    return message;
  },
};

function createBaseModelMonitoringJobExecutionDetail(): ModelMonitoringJobExecutionDetail {
  return { baselineDatasets: [], targetDatasets: [], objectiveStatus: {}, error: undefined };
}

export const ModelMonitoringJobExecutionDetail: MessageFns<ModelMonitoringJobExecutionDetail> = {
  encode(message: ModelMonitoringJobExecutionDetail, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.baselineDatasets) {
      ModelMonitoringJobExecutionDetail_ProcessedDataset.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.targetDatasets) {
      ModelMonitoringJobExecutionDetail_ProcessedDataset.encode(v!, writer.uint32(18).fork()).join();
    }
    Object.entries(message.objectiveStatus).forEach(([key, value]) => {
      ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork(),
      ).join();
    });
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ModelMonitoringJobExecutionDetail {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModelMonitoringJobExecutionDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baselineDatasets.push(
            ModelMonitoringJobExecutionDetail_ProcessedDataset.decode(reader, reader.uint32()),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetDatasets.push(
            ModelMonitoringJobExecutionDetail_ProcessedDataset.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.objectiveStatus[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModelMonitoringJobExecutionDetail {
    return {
      baselineDatasets: globalThis.Array.isArray(object?.baselineDatasets)
        ? object.baselineDatasets.map((e: any) => ModelMonitoringJobExecutionDetail_ProcessedDataset.fromJSON(e))
        : [],
      targetDatasets: globalThis.Array.isArray(object?.targetDatasets)
        ? object.targetDatasets.map((e: any) => ModelMonitoringJobExecutionDetail_ProcessedDataset.fromJSON(e))
        : [],
      objectiveStatus: isObject(object.objectiveStatus)
        ? Object.entries(object.objectiveStatus).reduce<{ [key: string]: Status }>((acc, [key, value]) => {
          acc[key] = Status.fromJSON(value);
          return acc;
        }, {})
        : {},
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ModelMonitoringJobExecutionDetail): unknown {
    const obj: any = {};
    if (message.baselineDatasets?.length) {
      obj.baselineDatasets = message.baselineDatasets.map((e) =>
        ModelMonitoringJobExecutionDetail_ProcessedDataset.toJSON(e)
      );
    }
    if (message.targetDatasets?.length) {
      obj.targetDatasets = message.targetDatasets.map((e) =>
        ModelMonitoringJobExecutionDetail_ProcessedDataset.toJSON(e)
      );
    }
    if (message.objectiveStatus) {
      const entries = Object.entries(message.objectiveStatus);
      if (entries.length > 0) {
        obj.objectiveStatus = {};
        entries.forEach(([k, v]) => {
          obj.objectiveStatus[k] = Status.toJSON(v);
        });
      }
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<ModelMonitoringJobExecutionDetail>): ModelMonitoringJobExecutionDetail {
    return ModelMonitoringJobExecutionDetail.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ModelMonitoringJobExecutionDetail>): ModelMonitoringJobExecutionDetail {
    const message = createBaseModelMonitoringJobExecutionDetail();
    message.baselineDatasets =
      object.baselineDatasets?.map((e) => ModelMonitoringJobExecutionDetail_ProcessedDataset.fromPartial(e)) || [];
    message.targetDatasets =
      object.targetDatasets?.map((e) => ModelMonitoringJobExecutionDetail_ProcessedDataset.fromPartial(e)) || [];
    message.objectiveStatus = Object.entries(object.objectiveStatus ?? {}).reduce<{ [key: string]: Status }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Status.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseModelMonitoringJobExecutionDetail_ProcessedDataset(): ModelMonitoringJobExecutionDetail_ProcessedDataset {
  return { location: "", timeRange: undefined };
}

export const ModelMonitoringJobExecutionDetail_ProcessedDataset: MessageFns<
  ModelMonitoringJobExecutionDetail_ProcessedDataset
> = {
  encode(
    message: ModelMonitoringJobExecutionDetail_ProcessedDataset,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }
    if (message.timeRange !== undefined) {
      Interval.encode(message.timeRange, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ModelMonitoringJobExecutionDetail_ProcessedDataset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModelMonitoringJobExecutionDetail_ProcessedDataset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.location = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timeRange = Interval.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModelMonitoringJobExecutionDetail_ProcessedDataset {
    return {
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      timeRange: isSet(object.timeRange) ? Interval.fromJSON(object.timeRange) : undefined,
    };
  },

  toJSON(message: ModelMonitoringJobExecutionDetail_ProcessedDataset): unknown {
    const obj: any = {};
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.timeRange !== undefined) {
      obj.timeRange = Interval.toJSON(message.timeRange);
    }
    return obj;
  },

  create(
    base?: DeepPartial<ModelMonitoringJobExecutionDetail_ProcessedDataset>,
  ): ModelMonitoringJobExecutionDetail_ProcessedDataset {
    return ModelMonitoringJobExecutionDetail_ProcessedDataset.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ModelMonitoringJobExecutionDetail_ProcessedDataset>,
  ): ModelMonitoringJobExecutionDetail_ProcessedDataset {
    const message = createBaseModelMonitoringJobExecutionDetail_ProcessedDataset();
    message.location = object.location ?? "";
    message.timeRange = (object.timeRange !== undefined && object.timeRange !== null)
      ? Interval.fromPartial(object.timeRange)
      : undefined;
    return message;
  },
};

function createBaseModelMonitoringJobExecutionDetail_ObjectiveStatusEntry(): ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry {
  return { key: "", value: undefined };
}

export const ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry: MessageFns<
  ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry
> = {
  encode(
    message: ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Status.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModelMonitoringJobExecutionDetail_ObjectiveStatusEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Status.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Status.toJSON(message.value);
    }
    return obj;
  },

  create(
    base?: DeepPartial<ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry>,
  ): ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry {
    return ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry>,
  ): ModelMonitoringJobExecutionDetail_ObjectiveStatusEntry {
    const message = createBaseModelMonitoringJobExecutionDetail_ObjectiveStatusEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Status.fromPartial(object.value)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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
