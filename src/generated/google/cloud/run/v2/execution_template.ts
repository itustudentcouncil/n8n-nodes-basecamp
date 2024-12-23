// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/run/v2/execution_template.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TaskTemplate } from "./task_template.js";

export const protobufPackage = "google.cloud.run.v2";

/**
 * ExecutionTemplate describes the data an execution should have when created
 * from a template.
 */
export interface ExecutionTemplate {
  /**
   * Unstructured key value map that can be used to organize and categorize
   * objects.
   * User-provided labels are shared with Google's billing system, so they can
   * be used to filter, or break down billing charges by team, component,
   * environment, state, etc. For more information, visit
   * https://cloud.google.com/resource-manager/docs/creating-managing-labels or
   * https://cloud.google.com/run/docs/configuring/labels.
   *
   * <p>Cloud Run API v2 does not support labels with `run.googleapis.com`,
   * `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev`
   * namespaces, and they will be rejected. All system labels in v1 now have a
   * corresponding field in v2 ExecutionTemplate.
   */
  labels: { [key: string]: string };
  /**
   * Unstructured key value map that may be set by external tools to store and
   * arbitrary metadata. They are not queryable and should be preserved
   * when modifying objects.
   *
   * <p>Cloud Run API v2 does not support annotations with `run.googleapis.com`,
   * `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev`
   * namespaces, and they will be rejected. All system annotations in v1 now
   * have a corresponding field in v2 ExecutionTemplate.
   *
   * <p>This field follows Kubernetes annotations' namespacing, limits, and
   * rules.
   */
  annotations: { [key: string]: string };
  /**
   * Specifies the maximum desired number of tasks the execution should run at
   * given time. Must be <= task_count.
   * When the job is run, if this field is 0 or unset, the maximum possible
   * value will be used for that execution.
   * The actual number of tasks running in steady state will be less than this
   * number when there are fewer tasks waiting to be completed remaining,
   * i.e. when the work left to do is less than max parallelism.
   */
  parallelism: number;
  /**
   * Specifies the desired number of tasks the execution should run.
   * Setting to 1 means that parallelism is limited to 1 and the success of
   * that task signals the success of the execution. Defaults to 1.
   */
  taskCount: number;
  /**
   * Required. Describes the task(s) that will be created when executing an
   * execution.
   */
  template: TaskTemplate | undefined;
}

export interface ExecutionTemplate_LabelsEntry {
  key: string;
  value: string;
}

export interface ExecutionTemplate_AnnotationsEntry {
  key: string;
  value: string;
}

function createBaseExecutionTemplate(): ExecutionTemplate {
  return { labels: {}, annotations: {}, parallelism: 0, taskCount: 0, template: undefined };
}

export const ExecutionTemplate: MessageFns<ExecutionTemplate> = {
  encode(message: ExecutionTemplate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.labels).forEach(([key, value]) => {
      ExecutionTemplate_LabelsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.annotations).forEach(([key, value]) => {
      ExecutionTemplate_AnnotationsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.parallelism !== 0) {
      writer.uint32(24).int32(message.parallelism);
    }
    if (message.taskCount !== 0) {
      writer.uint32(32).int32(message.taskCount);
    }
    if (message.template !== undefined) {
      TaskTemplate.encode(message.template, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExecutionTemplate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutionTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = ExecutionTemplate_LabelsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.labels[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = ExecutionTemplate_AnnotationsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.annotations[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.parallelism = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.taskCount = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.template = TaskTemplate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutionTemplate {
    return {
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      annotations: isObject(object.annotations)
        ? Object.entries(object.annotations).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      parallelism: isSet(object.parallelism) ? globalThis.Number(object.parallelism) : 0,
      taskCount: isSet(object.taskCount) ? globalThis.Number(object.taskCount) : 0,
      template: isSet(object.template) ? TaskTemplate.fromJSON(object.template) : undefined,
    };
  },

  toJSON(message: ExecutionTemplate): unknown {
    const obj: any = {};
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.annotations) {
      const entries = Object.entries(message.annotations);
      if (entries.length > 0) {
        obj.annotations = {};
        entries.forEach(([k, v]) => {
          obj.annotations[k] = v;
        });
      }
    }
    if (message.parallelism !== 0) {
      obj.parallelism = Math.round(message.parallelism);
    }
    if (message.taskCount !== 0) {
      obj.taskCount = Math.round(message.taskCount);
    }
    if (message.template !== undefined) {
      obj.template = TaskTemplate.toJSON(message.template);
    }
    return obj;
  },

  create(base?: DeepPartial<ExecutionTemplate>): ExecutionTemplate {
    return ExecutionTemplate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExecutionTemplate>): ExecutionTemplate {
    const message = createBaseExecutionTemplate();
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.annotations = Object.entries(object.annotations ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.parallelism = object.parallelism ?? 0;
    message.taskCount = object.taskCount ?? 0;
    message.template = (object.template !== undefined && object.template !== null)
      ? TaskTemplate.fromPartial(object.template)
      : undefined;
    return message;
  },
};

function createBaseExecutionTemplate_LabelsEntry(): ExecutionTemplate_LabelsEntry {
  return { key: "", value: "" };
}

export const ExecutionTemplate_LabelsEntry: MessageFns<ExecutionTemplate_LabelsEntry> = {
  encode(message: ExecutionTemplate_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExecutionTemplate_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutionTemplate_LabelsEntry();
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

  fromJSON(object: any): ExecutionTemplate_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ExecutionTemplate_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<ExecutionTemplate_LabelsEntry>): ExecutionTemplate_LabelsEntry {
    return ExecutionTemplate_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExecutionTemplate_LabelsEntry>): ExecutionTemplate_LabelsEntry {
    const message = createBaseExecutionTemplate_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseExecutionTemplate_AnnotationsEntry(): ExecutionTemplate_AnnotationsEntry {
  return { key: "", value: "" };
}

export const ExecutionTemplate_AnnotationsEntry: MessageFns<ExecutionTemplate_AnnotationsEntry> = {
  encode(message: ExecutionTemplate_AnnotationsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExecutionTemplate_AnnotationsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutionTemplate_AnnotationsEntry();
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

  fromJSON(object: any): ExecutionTemplate_AnnotationsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ExecutionTemplate_AnnotationsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<ExecutionTemplate_AnnotationsEntry>): ExecutionTemplate_AnnotationsEntry {
    return ExecutionTemplate_AnnotationsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExecutionTemplate_AnnotationsEntry>): ExecutionTemplate_AnnotationsEntry {
    const message = createBaseExecutionTemplate_AnnotationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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
