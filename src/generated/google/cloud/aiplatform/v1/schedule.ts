// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1/schedule.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { CreateNotebookExecutionJobRequest } from "./notebook_service.js";
import { CreatePipelineJobRequest } from "./pipeline_service.js";

export const protobufPackage = "google.cloud.aiplatform.v1";

/**
 * An instance of a Schedule periodically schedules runs to make API calls based
 * on user specified time specification and API request type.
 */
export interface Schedule {
  /**
   * Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled
   * runs. To explicitly set a timezone to the cron tab, apply a prefix in the
   * cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".
   * The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone
   * database. For example, "CRON_TZ=America/New_York 1 * * * *", or
   * "TZ=America/New_York 1 * * * *".
   */
  cron?:
    | string
    | undefined;
  /**
   * Request for
   * [PipelineService.CreatePipelineJob][google.cloud.aiplatform.v1.PipelineService.CreatePipelineJob].
   * CreatePipelineJobRequest.parent field is required (format:
   * projects/{project}/locations/{location}).
   */
  createPipelineJobRequest?:
    | CreatePipelineJobRequest
    | undefined;
  /**
   * Request for
   * [NotebookService.CreateNotebookExecutionJob][google.cloud.aiplatform.v1.NotebookService.CreateNotebookExecutionJob].
   */
  createNotebookExecutionJobRequest?:
    | CreateNotebookExecutionJobRequest
    | undefined;
  /** Immutable. The resource name of the Schedule. */
  name: string;
  /**
   * Required. User provided name of the Schedule.
   * The name can be up to 128 characters long and can consist of any UTF-8
   * characters.
   */
  displayName: string;
  /**
   * Optional. Timestamp after which the first run can be scheduled.
   * Default to Schedule create time if not specified.
   */
  startTime:
    | Date
    | undefined;
  /**
   * Optional. Timestamp after which no new runs can be scheduled.
   * If specified, The schedule will be completed when either
   * end_time is reached or when scheduled_run_count >= max_run_count.
   * If not specified, new runs will keep getting scheduled until this Schedule
   * is paused or deleted. Already scheduled runs will be allowed to complete.
   * Unset if not specified.
   */
  endTime:
    | Date
    | undefined;
  /**
   * Optional. Maximum run count of the schedule.
   * If specified, The schedule will be completed when either
   * started_run_count >= max_run_count or when end_time is reached.
   * If not specified, new runs will keep getting scheduled until this Schedule
   * is paused or deleted. Already scheduled runs will be allowed to complete.
   * Unset if not specified.
   */
  maxRunCount: Long;
  /** Output only. The number of runs started by this schedule. */
  startedRunCount: Long;
  /** Output only. The state of this Schedule. */
  state: Schedule_State;
  /** Output only. Timestamp when this Schedule was created. */
  createTime:
    | Date
    | undefined;
  /** Output only. Timestamp when this Schedule was updated. */
  updateTime:
    | Date
    | undefined;
  /**
   * Output only. Timestamp when this Schedule should schedule the next run.
   * Having a next_run_time in the past means the runs are being started
   * behind schedule.
   */
  nextRunTime:
    | Date
    | undefined;
  /**
   * Output only. Timestamp when this Schedule was last paused.
   * Unset if never paused.
   */
  lastPauseTime:
    | Date
    | undefined;
  /**
   * Output only. Timestamp when this Schedule was last resumed.
   * Unset if never resumed from pause.
   */
  lastResumeTime:
    | Date
    | undefined;
  /**
   * Required. Maximum number of runs that can be started concurrently for this
   * Schedule. This is the limit for starting the scheduled requests and not the
   * execution of the operations/jobs created by the requests (if applicable).
   */
  maxConcurrentRunCount: Long;
  /**
   * Optional. Whether new scheduled runs can be queued when max_concurrent_runs
   * limit is reached. If set to true, new runs will be queued instead of
   * skipped. Default to false.
   */
  allowQueueing: boolean;
  /**
   * Output only. Whether to backfill missed runs when the schedule is resumed
   * from PAUSED state. If set to true, all missed runs will be scheduled. New
   * runs will be scheduled after the backfill is complete. Default to false.
   */
  catchUp: boolean;
  /**
   * Output only. Response of the last scheduled run.
   * This is the response for starting the scheduled requests and not the
   * execution of the operations/jobs created by the requests (if applicable).
   * Unset if no run has been scheduled yet.
   */
  lastScheduledRunResponse: Schedule_RunResponse | undefined;
}

/** Possible state of the schedule. */
export enum Schedule_State {
  /** STATE_UNSPECIFIED - Unspecified. */
  STATE_UNSPECIFIED = 0,
  /**
   * ACTIVE - The Schedule is active. Runs are being scheduled on the user-specified
   * timespec.
   */
  ACTIVE = 1,
  /**
   * PAUSED - The schedule is paused. No new runs will be created until the schedule
   * is resumed. Already started runs will be allowed to complete.
   */
  PAUSED = 2,
  /**
   * COMPLETED - The Schedule is completed. No new runs will be scheduled. Already started
   * runs will be allowed to complete. Schedules in completed state cannot be
   * paused or resumed.
   */
  COMPLETED = 3,
  UNRECOGNIZED = -1,
}

export function schedule_StateFromJSON(object: any): Schedule_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Schedule_State.STATE_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return Schedule_State.ACTIVE;
    case 2:
    case "PAUSED":
      return Schedule_State.PAUSED;
    case 3:
    case "COMPLETED":
      return Schedule_State.COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Schedule_State.UNRECOGNIZED;
  }
}

export function schedule_StateToJSON(object: Schedule_State): string {
  switch (object) {
    case Schedule_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Schedule_State.ACTIVE:
      return "ACTIVE";
    case Schedule_State.PAUSED:
      return "PAUSED";
    case Schedule_State.COMPLETED:
      return "COMPLETED";
    case Schedule_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Status of a scheduled run. */
export interface Schedule_RunResponse {
  /** The scheduled run time based on the user-specified schedule. */
  scheduledRunTime:
    | Date
    | undefined;
  /** The response of the scheduled run. */
  runResponse: string;
}

function createBaseSchedule(): Schedule {
  return {
    cron: undefined,
    createPipelineJobRequest: undefined,
    createNotebookExecutionJobRequest: undefined,
    name: "",
    displayName: "",
    startTime: undefined,
    endTime: undefined,
    maxRunCount: Long.ZERO,
    startedRunCount: Long.ZERO,
    state: 0,
    createTime: undefined,
    updateTime: undefined,
    nextRunTime: undefined,
    lastPauseTime: undefined,
    lastResumeTime: undefined,
    maxConcurrentRunCount: Long.ZERO,
    allowQueueing: false,
    catchUp: false,
    lastScheduledRunResponse: undefined,
  };
}

export const Schedule: MessageFns<Schedule> = {
  encode(message: Schedule, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.cron !== undefined) {
      writer.uint32(82).string(message.cron);
    }
    if (message.createPipelineJobRequest !== undefined) {
      CreatePipelineJobRequest.encode(message.createPipelineJobRequest, writer.uint32(114).fork()).join();
    }
    if (message.createNotebookExecutionJobRequest !== undefined) {
      CreateNotebookExecutionJobRequest.encode(message.createNotebookExecutionJobRequest, writer.uint32(162).fork())
        .join();
    }
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).join();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).join();
    }
    if (!message.maxRunCount.equals(Long.ZERO)) {
      writer.uint32(128).int64(message.maxRunCount.toString());
    }
    if (!message.startedRunCount.equals(Long.ZERO)) {
      writer.uint32(136).int64(message.startedRunCount.toString());
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(50).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(154).fork()).join();
    }
    if (message.nextRunTime !== undefined) {
      Timestamp.encode(toTimestamp(message.nextRunTime), writer.uint32(58).fork()).join();
    }
    if (message.lastPauseTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastPauseTime), writer.uint32(66).fork()).join();
    }
    if (message.lastResumeTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastResumeTime), writer.uint32(74).fork()).join();
    }
    if (!message.maxConcurrentRunCount.equals(Long.ZERO)) {
      writer.uint32(88).int64(message.maxConcurrentRunCount.toString());
    }
    if (message.allowQueueing !== false) {
      writer.uint32(96).bool(message.allowQueueing);
    }
    if (message.catchUp !== false) {
      writer.uint32(104).bool(message.catchUp);
    }
    if (message.lastScheduledRunResponse !== undefined) {
      Schedule_RunResponse.encode(message.lastScheduledRunResponse, writer.uint32(146).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Schedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          if (tag !== 82) {
            break;
          }

          message.cron = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.createPipelineJobRequest = CreatePipelineJobRequest.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.createNotebookExecutionJobRequest = CreateNotebookExecutionJobRequest.decode(reader, reader.uint32());
          continue;
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

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.maxRunCount = Long.fromString(reader.int64().toString());
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.startedRunCount = Long.fromString(reader.int64().toString());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.nextRunTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.lastPauseTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.lastResumeTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.maxConcurrentRunCount = Long.fromString(reader.int64().toString());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.allowQueueing = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.catchUp = reader.bool();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.lastScheduledRunResponse = Schedule_RunResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Schedule {
    return {
      cron: isSet(object.cron) ? globalThis.String(object.cron) : undefined,
      createPipelineJobRequest: isSet(object.createPipelineJobRequest)
        ? CreatePipelineJobRequest.fromJSON(object.createPipelineJobRequest)
        : undefined,
      createNotebookExecutionJobRequest: isSet(object.createNotebookExecutionJobRequest)
        ? CreateNotebookExecutionJobRequest.fromJSON(object.createNotebookExecutionJobRequest)
        : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      maxRunCount: isSet(object.maxRunCount) ? Long.fromValue(object.maxRunCount) : Long.ZERO,
      startedRunCount: isSet(object.startedRunCount) ? Long.fromValue(object.startedRunCount) : Long.ZERO,
      state: isSet(object.state) ? schedule_StateFromJSON(object.state) : 0,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      nextRunTime: isSet(object.nextRunTime) ? fromJsonTimestamp(object.nextRunTime) : undefined,
      lastPauseTime: isSet(object.lastPauseTime) ? fromJsonTimestamp(object.lastPauseTime) : undefined,
      lastResumeTime: isSet(object.lastResumeTime) ? fromJsonTimestamp(object.lastResumeTime) : undefined,
      maxConcurrentRunCount: isSet(object.maxConcurrentRunCount)
        ? Long.fromValue(object.maxConcurrentRunCount)
        : Long.ZERO,
      allowQueueing: isSet(object.allowQueueing) ? globalThis.Boolean(object.allowQueueing) : false,
      catchUp: isSet(object.catchUp) ? globalThis.Boolean(object.catchUp) : false,
      lastScheduledRunResponse: isSet(object.lastScheduledRunResponse)
        ? Schedule_RunResponse.fromJSON(object.lastScheduledRunResponse)
        : undefined,
    };
  },

  toJSON(message: Schedule): unknown {
    const obj: any = {};
    if (message.cron !== undefined) {
      obj.cron = message.cron;
    }
    if (message.createPipelineJobRequest !== undefined) {
      obj.createPipelineJobRequest = CreatePipelineJobRequest.toJSON(message.createPipelineJobRequest);
    }
    if (message.createNotebookExecutionJobRequest !== undefined) {
      obj.createNotebookExecutionJobRequest = CreateNotebookExecutionJobRequest.toJSON(
        message.createNotebookExecutionJobRequest,
      );
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    if (message.endTime !== undefined) {
      obj.endTime = message.endTime.toISOString();
    }
    if (!message.maxRunCount.equals(Long.ZERO)) {
      obj.maxRunCount = (message.maxRunCount || Long.ZERO).toString();
    }
    if (!message.startedRunCount.equals(Long.ZERO)) {
      obj.startedRunCount = (message.startedRunCount || Long.ZERO).toString();
    }
    if (message.state !== 0) {
      obj.state = schedule_StateToJSON(message.state);
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.nextRunTime !== undefined) {
      obj.nextRunTime = message.nextRunTime.toISOString();
    }
    if (message.lastPauseTime !== undefined) {
      obj.lastPauseTime = message.lastPauseTime.toISOString();
    }
    if (message.lastResumeTime !== undefined) {
      obj.lastResumeTime = message.lastResumeTime.toISOString();
    }
    if (!message.maxConcurrentRunCount.equals(Long.ZERO)) {
      obj.maxConcurrentRunCount = (message.maxConcurrentRunCount || Long.ZERO).toString();
    }
    if (message.allowQueueing !== false) {
      obj.allowQueueing = message.allowQueueing;
    }
    if (message.catchUp !== false) {
      obj.catchUp = message.catchUp;
    }
    if (message.lastScheduledRunResponse !== undefined) {
      obj.lastScheduledRunResponse = Schedule_RunResponse.toJSON(message.lastScheduledRunResponse);
    }
    return obj;
  },

  create(base?: DeepPartial<Schedule>): Schedule {
    return Schedule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Schedule>): Schedule {
    const message = createBaseSchedule();
    message.cron = object.cron ?? undefined;
    message.createPipelineJobRequest =
      (object.createPipelineJobRequest !== undefined && object.createPipelineJobRequest !== null)
        ? CreatePipelineJobRequest.fromPartial(object.createPipelineJobRequest)
        : undefined;
    message.createNotebookExecutionJobRequest =
      (object.createNotebookExecutionJobRequest !== undefined && object.createNotebookExecutionJobRequest !== null)
        ? CreateNotebookExecutionJobRequest.fromPartial(object.createNotebookExecutionJobRequest)
        : undefined;
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.maxRunCount = (object.maxRunCount !== undefined && object.maxRunCount !== null)
      ? Long.fromValue(object.maxRunCount)
      : Long.ZERO;
    message.startedRunCount = (object.startedRunCount !== undefined && object.startedRunCount !== null)
      ? Long.fromValue(object.startedRunCount)
      : Long.ZERO;
    message.state = object.state ?? 0;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.nextRunTime = object.nextRunTime ?? undefined;
    message.lastPauseTime = object.lastPauseTime ?? undefined;
    message.lastResumeTime = object.lastResumeTime ?? undefined;
    message.maxConcurrentRunCount =
      (object.maxConcurrentRunCount !== undefined && object.maxConcurrentRunCount !== null)
        ? Long.fromValue(object.maxConcurrentRunCount)
        : Long.ZERO;
    message.allowQueueing = object.allowQueueing ?? false;
    message.catchUp = object.catchUp ?? false;
    message.lastScheduledRunResponse =
      (object.lastScheduledRunResponse !== undefined && object.lastScheduledRunResponse !== null)
        ? Schedule_RunResponse.fromPartial(object.lastScheduledRunResponse)
        : undefined;
    return message;
  },
};

function createBaseSchedule_RunResponse(): Schedule_RunResponse {
  return { scheduledRunTime: undefined, runResponse: "" };
}

export const Schedule_RunResponse: MessageFns<Schedule_RunResponse> = {
  encode(message: Schedule_RunResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.scheduledRunTime !== undefined) {
      Timestamp.encode(toTimestamp(message.scheduledRunTime), writer.uint32(10).fork()).join();
    }
    if (message.runResponse !== "") {
      writer.uint32(18).string(message.runResponse);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Schedule_RunResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedule_RunResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scheduledRunTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.runResponse = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Schedule_RunResponse {
    return {
      scheduledRunTime: isSet(object.scheduledRunTime) ? fromJsonTimestamp(object.scheduledRunTime) : undefined,
      runResponse: isSet(object.runResponse) ? globalThis.String(object.runResponse) : "",
    };
  },

  toJSON(message: Schedule_RunResponse): unknown {
    const obj: any = {};
    if (message.scheduledRunTime !== undefined) {
      obj.scheduledRunTime = message.scheduledRunTime.toISOString();
    }
    if (message.runResponse !== "") {
      obj.runResponse = message.runResponse;
    }
    return obj;
  },

  create(base?: DeepPartial<Schedule_RunResponse>): Schedule_RunResponse {
    return Schedule_RunResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Schedule_RunResponse>): Schedule_RunResponse {
    const message = createBaseSchedule_RunResponse();
    message.scheduledRunTime = object.scheduledRunTime ?? undefined;
    message.runResponse = object.runResponse ?? "";
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
