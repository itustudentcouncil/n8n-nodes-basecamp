// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/tensorboard_run.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.aiplatform.v1beta1";

/**
 * TensorboardRun maps to a specific execution of a training job with a given
 * set of hyperparameter values, model definition, dataset, etc
 */
export interface TensorboardRun {
  /**
   * Output only. Name of the TensorboardRun.
   * Format:
   * `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`
   */
  name: string;
  /**
   * Required. User provided name of this TensorboardRun.
   * This value must be unique among all TensorboardRuns
   * belonging to the same parent TensorboardExperiment.
   */
  displayName: string;
  /** Description of this TensorboardRun. */
  description: string;
  /** Output only. Timestamp when this TensorboardRun was created. */
  createTime:
    | Date
    | undefined;
  /** Output only. Timestamp when this TensorboardRun was last updated. */
  updateTime:
    | Date
    | undefined;
  /**
   * The labels with user-defined metadata to organize your TensorboardRuns.
   *
   * This field will be used to filter and visualize Runs in the Tensorboard UI.
   * For example, a Vertex AI training job can set a label
   * aiplatform.googleapis.com/training_job_id=xxxxx to all the runs created
   * within that job. An end user can set a label experiment_id=xxxxx for all
   * the runs produced in a Jupyter notebook. These runs can be grouped by a
   * label value and visualized together in the Tensorboard UI.
   *
   * Label keys and values can be no longer than 64 characters
   * (Unicode codepoints), can only contain lowercase letters, numeric
   * characters, underscores and dashes. International characters are allowed.
   * No more than 64 user labels can be associated with one TensorboardRun
   * (System labels are excluded).
   *
   * See https://goo.gl/xmQnxf for more information and examples of labels.
   * System reserved label keys are prefixed with "aiplatform.googleapis.com/"
   * and are immutable.
   */
  labels: { [key: string]: string };
  /**
   * Used to perform a consistent read-modify-write updates. If not set, a blind
   * "overwrite" update happens.
   */
  etag: string;
}

export interface TensorboardRun_LabelsEntry {
  key: string;
  value: string;
}

function createBaseTensorboardRun(): TensorboardRun {
  return {
    name: "",
    displayName: "",
    description: "",
    createTime: undefined,
    updateTime: undefined,
    labels: {},
    etag: "",
  };
}

export const TensorboardRun: MessageFns<TensorboardRun> = {
  encode(message: TensorboardRun, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(50).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(58).fork()).join();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      TensorboardRun_LabelsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).join();
    });
    if (message.etag !== "") {
      writer.uint32(74).string(message.etag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TensorboardRun {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTensorboardRun();
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

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = TensorboardRun_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.labels[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.etag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TensorboardRun {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
    };
  },

  toJSON(message: TensorboardRun): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    return obj;
  },

  create(base?: DeepPartial<TensorboardRun>): TensorboardRun {
    return TensorboardRun.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TensorboardRun>): TensorboardRun {
    const message = createBaseTensorboardRun();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.etag = object.etag ?? "";
    return message;
  },
};

function createBaseTensorboardRun_LabelsEntry(): TensorboardRun_LabelsEntry {
  return { key: "", value: "" };
}

export const TensorboardRun_LabelsEntry: MessageFns<TensorboardRun_LabelsEntry> = {
  encode(message: TensorboardRun_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TensorboardRun_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTensorboardRun_LabelsEntry();
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

  fromJSON(object: any): TensorboardRun_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: TensorboardRun_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<TensorboardRun_LabelsEntry>): TensorboardRun_LabelsEntry {
    return TensorboardRun_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TensorboardRun_LabelsEntry>): TensorboardRun_LabelsEntry {
    const message = createBaseTensorboardRun_LabelsEntry();
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
