// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/osconfig/agentendpoint/v1beta/tasks.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ExecStep, PatchConfig } from "./patch_jobs.js";

export const protobufPackage = "google.cloud.osconfig.agentendpoint.v1beta";

/** Specifies the current agent behavior. */
export enum TaskDirective {
  /** TASK_DIRECTIVE_UNSPECIFIED - Unspecified is invalid. */
  TASK_DIRECTIVE_UNSPECIFIED = 0,
  /** CONTINUE - The task should continue to progress. */
  CONTINUE = 1,
  /**
   * STOP - Task should not be started, or if already in progress, should stop
   * at first safe stopping point.  Task should be considered done and will
   * never repeat.
   */
  STOP = 2,
  UNRECOGNIZED = -1,
}

export function taskDirectiveFromJSON(object: any): TaskDirective {
  switch (object) {
    case 0:
    case "TASK_DIRECTIVE_UNSPECIFIED":
      return TaskDirective.TASK_DIRECTIVE_UNSPECIFIED;
    case 1:
    case "CONTINUE":
      return TaskDirective.CONTINUE;
    case 2:
    case "STOP":
      return TaskDirective.STOP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskDirective.UNRECOGNIZED;
  }
}

export function taskDirectiveToJSON(object: TaskDirective): string {
  switch (object) {
    case TaskDirective.TASK_DIRECTIVE_UNSPECIFIED:
      return "TASK_DIRECTIVE_UNSPECIFIED";
    case TaskDirective.CONTINUE:
      return "CONTINUE";
    case TaskDirective.STOP:
      return "STOP";
    case TaskDirective.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Specifies the type of task to perform. */
export enum TaskType {
  /** TASK_TYPE_UNSPECIFIED - Unspecified is invalid. */
  TASK_TYPE_UNSPECIFIED = 0,
  /** APPLY_PATCHES - The apply patches task. */
  APPLY_PATCHES = 1,
  /** EXEC_STEP_TASK - The exec step task. */
  EXEC_STEP_TASK = 2,
  UNRECOGNIZED = -1,
}

export function taskTypeFromJSON(object: any): TaskType {
  switch (object) {
    case 0:
    case "TASK_TYPE_UNSPECIFIED":
      return TaskType.TASK_TYPE_UNSPECIFIED;
    case 1:
    case "APPLY_PATCHES":
      return TaskType.APPLY_PATCHES;
    case 2:
    case "EXEC_STEP_TASK":
      return TaskType.EXEC_STEP_TASK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskType.UNRECOGNIZED;
  }
}

export function taskTypeToJSON(object: TaskType): string {
  switch (object) {
    case TaskType.TASK_TYPE_UNSPECIFIED:
      return "TASK_TYPE_UNSPECIFIED";
    case TaskType.APPLY_PATCHES:
      return "APPLY_PATCHES";
    case TaskType.EXEC_STEP_TASK:
      return "EXEC_STEP_TASK";
    case TaskType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A unit of work to be performed by the agent. */
export interface Task {
  /** Unique task id. */
  taskId: string;
  /**
   * The type of task to perform.
   *
   * Task details must include the appropriate message based on this enum as
   * specified below:
   * APPLY_PATCHES = ApplyPatchesTask
   * EXEC_STEP = ExecStepTask;
   */
  taskType: TaskType;
  /** Current directive to the agent. */
  taskDirective: TaskDirective;
  /** Details about the apply patches task to perform. */
  applyPatchesTask?:
    | ApplyPatchesTask
    | undefined;
  /** Details about the exec step task to perform. */
  execStepTask?:
    | ExecStepTask
    | undefined;
  /** Labels describing the task.  Used for logging by the agent. */
  serviceLabels: { [key: string]: string };
}

export interface Task_ServiceLabelsEntry {
  key: string;
  value: string;
}

/** Message which instructs agent to apply patches. */
export interface ApplyPatchesTask {
  /** Specific information about how patches should be applied. */
  patchConfig:
    | PatchConfig
    | undefined;
  /**
   * If true, the agent will report its status as it goes through the motions
   * but won't actually run any updates or perform any reboots.
   */
  dryRun: boolean;
}

/** Information reported from the agent about applying patches execution. */
export interface ApplyPatchesTaskProgress {
  /** Required. The current state of this patch execution. */
  state: ApplyPatchesTaskProgress_State;
}

/** The intermediate states of applying patches. */
export enum ApplyPatchesTaskProgress_State {
  /** STATE_UNSPECIFIED - Unspecified is invalid. */
  STATE_UNSPECIFIED = 0,
  /** STARTED - The agent has started the patch task. */
  STARTED = 4,
  /** DOWNLOADING_PATCHES - The agent is currently downloading patches. */
  DOWNLOADING_PATCHES = 1,
  /** APPLYING_PATCHES - The agent is currently applying patches. */
  APPLYING_PATCHES = 2,
  /** REBOOTING - The agent is currently rebooting the VM instance. */
  REBOOTING = 3,
  UNRECOGNIZED = -1,
}

export function applyPatchesTaskProgress_StateFromJSON(object: any): ApplyPatchesTaskProgress_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return ApplyPatchesTaskProgress_State.STATE_UNSPECIFIED;
    case 4:
    case "STARTED":
      return ApplyPatchesTaskProgress_State.STARTED;
    case 1:
    case "DOWNLOADING_PATCHES":
      return ApplyPatchesTaskProgress_State.DOWNLOADING_PATCHES;
    case 2:
    case "APPLYING_PATCHES":
      return ApplyPatchesTaskProgress_State.APPLYING_PATCHES;
    case 3:
    case "REBOOTING":
      return ApplyPatchesTaskProgress_State.REBOOTING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApplyPatchesTaskProgress_State.UNRECOGNIZED;
  }
}

export function applyPatchesTaskProgress_StateToJSON(object: ApplyPatchesTaskProgress_State): string {
  switch (object) {
    case ApplyPatchesTaskProgress_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case ApplyPatchesTaskProgress_State.STARTED:
      return "STARTED";
    case ApplyPatchesTaskProgress_State.DOWNLOADING_PATCHES:
      return "DOWNLOADING_PATCHES";
    case ApplyPatchesTaskProgress_State.APPLYING_PATCHES:
      return "APPLYING_PATCHES";
    case ApplyPatchesTaskProgress_State.REBOOTING:
      return "REBOOTING";
    case ApplyPatchesTaskProgress_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Information reported from the agent about applying patches execution. */
export interface ApplyPatchesTaskOutput {
  /** Required. The final state of this task. */
  state: ApplyPatchesTaskOutput_State;
}

/** The final states of applying patches. */
export enum ApplyPatchesTaskOutput_State {
  /** STATE_UNSPECIFIED - Unspecified is invalid. */
  STATE_UNSPECIFIED = 0,
  /** SUCCEEDED - Applying patches completed successfully. */
  SUCCEEDED = 1,
  /** SUCCEEDED_REBOOT_REQUIRED - Applying patches completed successfully, but a reboot is required. */
  SUCCEEDED_REBOOT_REQUIRED = 2,
  /** FAILED - Applying patches failed. */
  FAILED = 3,
  UNRECOGNIZED = -1,
}

export function applyPatchesTaskOutput_StateFromJSON(object: any): ApplyPatchesTaskOutput_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return ApplyPatchesTaskOutput_State.STATE_UNSPECIFIED;
    case 1:
    case "SUCCEEDED":
      return ApplyPatchesTaskOutput_State.SUCCEEDED;
    case 2:
    case "SUCCEEDED_REBOOT_REQUIRED":
      return ApplyPatchesTaskOutput_State.SUCCEEDED_REBOOT_REQUIRED;
    case 3:
    case "FAILED":
      return ApplyPatchesTaskOutput_State.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApplyPatchesTaskOutput_State.UNRECOGNIZED;
  }
}

export function applyPatchesTaskOutput_StateToJSON(object: ApplyPatchesTaskOutput_State): string {
  switch (object) {
    case ApplyPatchesTaskOutput_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case ApplyPatchesTaskOutput_State.SUCCEEDED:
      return "SUCCEEDED";
    case ApplyPatchesTaskOutput_State.SUCCEEDED_REBOOT_REQUIRED:
      return "SUCCEEDED_REBOOT_REQUIRED";
    case ApplyPatchesTaskOutput_State.FAILED:
      return "FAILED";
    case ApplyPatchesTaskOutput_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Message which instructs agent to execute the following command. */
export interface ExecStepTask {
  /** Details of the exec step to run. */
  execStep: ExecStep | undefined;
}

/** Information reported from the agent about the exec step execution. */
export interface ExecStepTaskProgress {
  /** Required. The current state of this exec step. */
  state: ExecStepTaskProgress_State;
}

/** The intermediate states of exec steps. */
export enum ExecStepTaskProgress_State {
  /** STATE_UNSPECIFIED - Unspecified is invalid. */
  STATE_UNSPECIFIED = 0,
  /** STARTED - The agent has started the exec step task. */
  STARTED = 1,
  UNRECOGNIZED = -1,
}

export function execStepTaskProgress_StateFromJSON(object: any): ExecStepTaskProgress_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return ExecStepTaskProgress_State.STATE_UNSPECIFIED;
    case 1:
    case "STARTED":
      return ExecStepTaskProgress_State.STARTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExecStepTaskProgress_State.UNRECOGNIZED;
  }
}

export function execStepTaskProgress_StateToJSON(object: ExecStepTaskProgress_State): string {
  switch (object) {
    case ExecStepTaskProgress_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case ExecStepTaskProgress_State.STARTED:
      return "STARTED";
    case ExecStepTaskProgress_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Information reported from the agent about the exec step execution. */
export interface ExecStepTaskOutput {
  /** Required. The final state of the exec step. */
  state: ExecStepTaskOutput_State;
  /** Required. The exit code received from the script which ran as part of the exec step. */
  exitCode: number;
}

/** The final states of exec steps. */
export enum ExecStepTaskOutput_State {
  /** STATE_UNSPECIFIED - Unspecified is invalid. */
  STATE_UNSPECIFIED = 0,
  /** COMPLETED - The exec step completed normally. */
  COMPLETED = 1,
  /** TIMED_OUT - The exec step was terminated because it took too long. */
  TIMED_OUT = 2,
  /** CANCELLED - The exec step task was cancelled before it started. */
  CANCELLED = 3,
  UNRECOGNIZED = -1,
}

export function execStepTaskOutput_StateFromJSON(object: any): ExecStepTaskOutput_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return ExecStepTaskOutput_State.STATE_UNSPECIFIED;
    case 1:
    case "COMPLETED":
      return ExecStepTaskOutput_State.COMPLETED;
    case 2:
    case "TIMED_OUT":
      return ExecStepTaskOutput_State.TIMED_OUT;
    case 3:
    case "CANCELLED":
      return ExecStepTaskOutput_State.CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExecStepTaskOutput_State.UNRECOGNIZED;
  }
}

export function execStepTaskOutput_StateToJSON(object: ExecStepTaskOutput_State): string {
  switch (object) {
    case ExecStepTaskOutput_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case ExecStepTaskOutput_State.COMPLETED:
      return "COMPLETED";
    case ExecStepTaskOutput_State.TIMED_OUT:
      return "TIMED_OUT";
    case ExecStepTaskOutput_State.CANCELLED:
      return "CANCELLED";
    case ExecStepTaskOutput_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTask(): Task {
  return {
    taskId: "",
    taskType: 0,
    taskDirective: 0,
    applyPatchesTask: undefined,
    execStepTask: undefined,
    serviceLabels: {},
  };
}

export const Task: MessageFns<Task> = {
  encode(message: Task, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    if (message.taskType !== 0) {
      writer.uint32(16).int32(message.taskType);
    }
    if (message.taskDirective !== 0) {
      writer.uint32(24).int32(message.taskDirective);
    }
    if (message.applyPatchesTask !== undefined) {
      ApplyPatchesTask.encode(message.applyPatchesTask, writer.uint32(34).fork()).join();
    }
    if (message.execStepTask !== undefined) {
      ExecStepTask.encode(message.execStepTask, writer.uint32(42).fork()).join();
    }
    Object.entries(message.serviceLabels).forEach(([key, value]) => {
      Task_ServiceLabelsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Task {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.taskId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.taskType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.taskDirective = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.applyPatchesTask = ApplyPatchesTask.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.execStepTask = ExecStepTask.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = Task_ServiceLabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.serviceLabels[entry6.key] = entry6.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Task {
    return {
      taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "",
      taskType: isSet(object.taskType) ? taskTypeFromJSON(object.taskType) : 0,
      taskDirective: isSet(object.taskDirective) ? taskDirectiveFromJSON(object.taskDirective) : 0,
      applyPatchesTask: isSet(object.applyPatchesTask) ? ApplyPatchesTask.fromJSON(object.applyPatchesTask) : undefined,
      execStepTask: isSet(object.execStepTask) ? ExecStepTask.fromJSON(object.execStepTask) : undefined,
      serviceLabels: isObject(object.serviceLabels)
        ? Object.entries(object.serviceLabels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Task): unknown {
    const obj: any = {};
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    if (message.taskType !== 0) {
      obj.taskType = taskTypeToJSON(message.taskType);
    }
    if (message.taskDirective !== 0) {
      obj.taskDirective = taskDirectiveToJSON(message.taskDirective);
    }
    if (message.applyPatchesTask !== undefined) {
      obj.applyPatchesTask = ApplyPatchesTask.toJSON(message.applyPatchesTask);
    }
    if (message.execStepTask !== undefined) {
      obj.execStepTask = ExecStepTask.toJSON(message.execStepTask);
    }
    if (message.serviceLabels) {
      const entries = Object.entries(message.serviceLabels);
      if (entries.length > 0) {
        obj.serviceLabels = {};
        entries.forEach(([k, v]) => {
          obj.serviceLabels[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<Task>): Task {
    return Task.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Task>): Task {
    const message = createBaseTask();
    message.taskId = object.taskId ?? "";
    message.taskType = object.taskType ?? 0;
    message.taskDirective = object.taskDirective ?? 0;
    message.applyPatchesTask = (object.applyPatchesTask !== undefined && object.applyPatchesTask !== null)
      ? ApplyPatchesTask.fromPartial(object.applyPatchesTask)
      : undefined;
    message.execStepTask = (object.execStepTask !== undefined && object.execStepTask !== null)
      ? ExecStepTask.fromPartial(object.execStepTask)
      : undefined;
    message.serviceLabels = Object.entries(object.serviceLabels ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseTask_ServiceLabelsEntry(): Task_ServiceLabelsEntry {
  return { key: "", value: "" };
}

export const Task_ServiceLabelsEntry: MessageFns<Task_ServiceLabelsEntry> = {
  encode(message: Task_ServiceLabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Task_ServiceLabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTask_ServiceLabelsEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Task_ServiceLabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Task_ServiceLabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<Task_ServiceLabelsEntry>): Task_ServiceLabelsEntry {
    return Task_ServiceLabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Task_ServiceLabelsEntry>): Task_ServiceLabelsEntry {
    const message = createBaseTask_ServiceLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseApplyPatchesTask(): ApplyPatchesTask {
  return { patchConfig: undefined, dryRun: false };
}

export const ApplyPatchesTask: MessageFns<ApplyPatchesTask> = {
  encode(message: ApplyPatchesTask, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.patchConfig !== undefined) {
      PatchConfig.encode(message.patchConfig, writer.uint32(10).fork()).join();
    }
    if (message.dryRun !== false) {
      writer.uint32(24).bool(message.dryRun);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ApplyPatchesTask {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplyPatchesTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.patchConfig = PatchConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.dryRun = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplyPatchesTask {
    return {
      patchConfig: isSet(object.patchConfig) ? PatchConfig.fromJSON(object.patchConfig) : undefined,
      dryRun: isSet(object.dryRun) ? globalThis.Boolean(object.dryRun) : false,
    };
  },

  toJSON(message: ApplyPatchesTask): unknown {
    const obj: any = {};
    if (message.patchConfig !== undefined) {
      obj.patchConfig = PatchConfig.toJSON(message.patchConfig);
    }
    if (message.dryRun !== false) {
      obj.dryRun = message.dryRun;
    }
    return obj;
  },

  create(base?: DeepPartial<ApplyPatchesTask>): ApplyPatchesTask {
    return ApplyPatchesTask.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ApplyPatchesTask>): ApplyPatchesTask {
    const message = createBaseApplyPatchesTask();
    message.patchConfig = (object.patchConfig !== undefined && object.patchConfig !== null)
      ? PatchConfig.fromPartial(object.patchConfig)
      : undefined;
    message.dryRun = object.dryRun ?? false;
    return message;
  },
};

function createBaseApplyPatchesTaskProgress(): ApplyPatchesTaskProgress {
  return { state: 0 };
}

export const ApplyPatchesTaskProgress: MessageFns<ApplyPatchesTaskProgress> = {
  encode(message: ApplyPatchesTaskProgress, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ApplyPatchesTaskProgress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplyPatchesTaskProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplyPatchesTaskProgress {
    return { state: isSet(object.state) ? applyPatchesTaskProgress_StateFromJSON(object.state) : 0 };
  },

  toJSON(message: ApplyPatchesTaskProgress): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = applyPatchesTaskProgress_StateToJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<ApplyPatchesTaskProgress>): ApplyPatchesTaskProgress {
    return ApplyPatchesTaskProgress.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ApplyPatchesTaskProgress>): ApplyPatchesTaskProgress {
    const message = createBaseApplyPatchesTaskProgress();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseApplyPatchesTaskOutput(): ApplyPatchesTaskOutput {
  return { state: 0 };
}

export const ApplyPatchesTaskOutput: MessageFns<ApplyPatchesTaskOutput> = {
  encode(message: ApplyPatchesTaskOutput, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ApplyPatchesTaskOutput {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplyPatchesTaskOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplyPatchesTaskOutput {
    return { state: isSet(object.state) ? applyPatchesTaskOutput_StateFromJSON(object.state) : 0 };
  },

  toJSON(message: ApplyPatchesTaskOutput): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = applyPatchesTaskOutput_StateToJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<ApplyPatchesTaskOutput>): ApplyPatchesTaskOutput {
    return ApplyPatchesTaskOutput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ApplyPatchesTaskOutput>): ApplyPatchesTaskOutput {
    const message = createBaseApplyPatchesTaskOutput();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseExecStepTask(): ExecStepTask {
  return { execStep: undefined };
}

export const ExecStepTask: MessageFns<ExecStepTask> = {
  encode(message: ExecStepTask, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.execStep !== undefined) {
      ExecStep.encode(message.execStep, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExecStepTask {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecStepTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.execStep = ExecStep.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecStepTask {
    return { execStep: isSet(object.execStep) ? ExecStep.fromJSON(object.execStep) : undefined };
  },

  toJSON(message: ExecStepTask): unknown {
    const obj: any = {};
    if (message.execStep !== undefined) {
      obj.execStep = ExecStep.toJSON(message.execStep);
    }
    return obj;
  },

  create(base?: DeepPartial<ExecStepTask>): ExecStepTask {
    return ExecStepTask.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExecStepTask>): ExecStepTask {
    const message = createBaseExecStepTask();
    message.execStep = (object.execStep !== undefined && object.execStep !== null)
      ? ExecStep.fromPartial(object.execStep)
      : undefined;
    return message;
  },
};

function createBaseExecStepTaskProgress(): ExecStepTaskProgress {
  return { state: 0 };
}

export const ExecStepTaskProgress: MessageFns<ExecStepTaskProgress> = {
  encode(message: ExecStepTaskProgress, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExecStepTaskProgress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecStepTaskProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecStepTaskProgress {
    return { state: isSet(object.state) ? execStepTaskProgress_StateFromJSON(object.state) : 0 };
  },

  toJSON(message: ExecStepTaskProgress): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = execStepTaskProgress_StateToJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<ExecStepTaskProgress>): ExecStepTaskProgress {
    return ExecStepTaskProgress.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExecStepTaskProgress>): ExecStepTaskProgress {
    const message = createBaseExecStepTaskProgress();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseExecStepTaskOutput(): ExecStepTaskOutput {
  return { state: 0, exitCode: 0 };
}

export const ExecStepTaskOutput: MessageFns<ExecStepTaskOutput> = {
  encode(message: ExecStepTaskOutput, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.exitCode !== 0) {
      writer.uint32(16).int32(message.exitCode);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExecStepTaskOutput {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecStepTaskOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.exitCode = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecStepTaskOutput {
    return {
      state: isSet(object.state) ? execStepTaskOutput_StateFromJSON(object.state) : 0,
      exitCode: isSet(object.exitCode) ? globalThis.Number(object.exitCode) : 0,
    };
  },

  toJSON(message: ExecStepTaskOutput): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = execStepTaskOutput_StateToJSON(message.state);
    }
    if (message.exitCode !== 0) {
      obj.exitCode = Math.round(message.exitCode);
    }
    return obj;
  },

  create(base?: DeepPartial<ExecStepTaskOutput>): ExecStepTaskOutput {
    return ExecStepTaskOutput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExecStepTaskOutput>): ExecStepTaskOutput {
    const message = createBaseExecStepTaskOutput();
    message.state = object.state ?? 0;
    message.exitCode = object.exitCode ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

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