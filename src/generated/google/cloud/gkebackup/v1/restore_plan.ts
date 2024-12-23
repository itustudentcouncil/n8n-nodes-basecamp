// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/gkebackup/v1/restore_plan.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { RestoreConfig } from "./restore.js";

export const protobufPackage = "google.cloud.gkebackup.v1";

/**
 * The configuration of a potential series of Restore operations to be performed
 * against Backups belong to a particular BackupPlan.
 */
export interface RestorePlan {
  /**
   * Output only. The full name of the RestorePlan resource.
   * Format: `projects/* /locations/* /restorePlans/*`.
   */
  name: string;
  /**
   * Output only. Server generated global unique identifier of
   * [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.
   */
  uid: string;
  /**
   * Output only. The timestamp when this RestorePlan resource was
   * created.
   */
  createTime:
    | Date
    | undefined;
  /**
   * Output only. The timestamp when this RestorePlan resource was last
   * updated.
   */
  updateTime:
    | Date
    | undefined;
  /** Optional. User specified descriptive string for this RestorePlan. */
  description: string;
  /**
   * Required. Immutable. A reference to the
   * [BackupPlan][google.cloud.gkebackup.v1.BackupPlan] from which Backups may
   * be used as the source for Restores created via this RestorePlan. Format:
   * `projects/* /locations/* /backupPlans/*`.
   */
  backupPlan: string;
  /**
   * Required. Immutable. The target cluster into which Restores created via
   * this RestorePlan will restore data. NOTE: the cluster's region must be the
   * same as the RestorePlan. Valid formats:
   *
   *   - `projects/* /locations/* /clusters/*`
   *   - `projects/* /zones/* /clusters/*`
   */
  cluster: string;
  /** Required. Configuration of Restores created via this RestorePlan. */
  restoreConfig:
    | RestoreConfig
    | undefined;
  /** Optional. A set of custom labels supplied by user. */
  labels: { [key: string]: string };
  /**
   * Output only. `etag` is used for optimistic concurrency control as a way to
   * help prevent simultaneous updates of a restore from overwriting each other.
   * It is strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform restore updates in order to avoid
   * race conditions: An `etag` is returned in the response to `GetRestorePlan`,
   * and systems are expected to put that etag in the request to
   * `UpdateRestorePlan` or `DeleteRestorePlan` to ensure that their change
   * will be applied to the same version of the resource.
   */
  etag: string;
  /**
   * Output only. State of the RestorePlan. This State field reflects the
   * various stages a RestorePlan can be in
   * during the Create operation.
   */
  state: RestorePlan_State;
  /**
   * Output only. Human-readable description of why RestorePlan is in the
   * current `state`
   */
  stateReason: string;
}

/** State */
export enum RestorePlan_State {
  /** STATE_UNSPECIFIED - Default first value for Enums. */
  STATE_UNSPECIFIED = 0,
  /** CLUSTER_PENDING - Waiting for cluster state to be RUNNING. */
  CLUSTER_PENDING = 1,
  /** READY - The RestorePlan has successfully been created and is ready for Restores. */
  READY = 2,
  /** FAILED - RestorePlan creation has failed. */
  FAILED = 3,
  /** DELETING - The RestorePlan is in the process of being deleted. */
  DELETING = 4,
  UNRECOGNIZED = -1,
}

export function restorePlan_StateFromJSON(object: any): RestorePlan_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return RestorePlan_State.STATE_UNSPECIFIED;
    case 1:
    case "CLUSTER_PENDING":
      return RestorePlan_State.CLUSTER_PENDING;
    case 2:
    case "READY":
      return RestorePlan_State.READY;
    case 3:
    case "FAILED":
      return RestorePlan_State.FAILED;
    case 4:
    case "DELETING":
      return RestorePlan_State.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RestorePlan_State.UNRECOGNIZED;
  }
}

export function restorePlan_StateToJSON(object: RestorePlan_State): string {
  switch (object) {
    case RestorePlan_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case RestorePlan_State.CLUSTER_PENDING:
      return "CLUSTER_PENDING";
    case RestorePlan_State.READY:
      return "READY";
    case RestorePlan_State.FAILED:
      return "FAILED";
    case RestorePlan_State.DELETING:
      return "DELETING";
    case RestorePlan_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RestorePlan_LabelsEntry {
  key: string;
  value: string;
}

function createBaseRestorePlan(): RestorePlan {
  return {
    name: "",
    uid: "",
    createTime: undefined,
    updateTime: undefined,
    description: "",
    backupPlan: "",
    cluster: "",
    restoreConfig: undefined,
    labels: {},
    etag: "",
    state: 0,
    stateReason: "",
  };
}

export const RestorePlan: MessageFns<RestorePlan> = {
  encode(message: RestorePlan, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.uid !== "") {
      writer.uint32(18).string(message.uid);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(26).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(34).fork()).join();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.backupPlan !== "") {
      writer.uint32(50).string(message.backupPlan);
    }
    if (message.cluster !== "") {
      writer.uint32(58).string(message.cluster);
    }
    if (message.restoreConfig !== undefined) {
      RestoreConfig.encode(message.restoreConfig, writer.uint32(66).fork()).join();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      RestorePlan_LabelsEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).join();
    });
    if (message.etag !== "") {
      writer.uint32(82).string(message.etag);
    }
    if (message.state !== 0) {
      writer.uint32(88).int32(message.state);
    }
    if (message.stateReason !== "") {
      writer.uint32(98).string(message.stateReason);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RestorePlan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestorePlan();
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

          message.uid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.backupPlan = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.cluster = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.restoreConfig = RestoreConfig.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = RestorePlan_LabelsEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.labels[entry9.key] = entry9.value;
          }
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.etag = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.stateReason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestorePlan {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      backupPlan: isSet(object.backupPlan) ? globalThis.String(object.backupPlan) : "",
      cluster: isSet(object.cluster) ? globalThis.String(object.cluster) : "",
      restoreConfig: isSet(object.restoreConfig) ? RestoreConfig.fromJSON(object.restoreConfig) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
      state: isSet(object.state) ? restorePlan_StateFromJSON(object.state) : 0,
      stateReason: isSet(object.stateReason) ? globalThis.String(object.stateReason) : "",
    };
  },

  toJSON(message: RestorePlan): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.backupPlan !== "") {
      obj.backupPlan = message.backupPlan;
    }
    if (message.cluster !== "") {
      obj.cluster = message.cluster;
    }
    if (message.restoreConfig !== undefined) {
      obj.restoreConfig = RestoreConfig.toJSON(message.restoreConfig);
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
    if (message.state !== 0) {
      obj.state = restorePlan_StateToJSON(message.state);
    }
    if (message.stateReason !== "") {
      obj.stateReason = message.stateReason;
    }
    return obj;
  },

  create(base?: DeepPartial<RestorePlan>): RestorePlan {
    return RestorePlan.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestorePlan>): RestorePlan {
    const message = createBaseRestorePlan();
    message.name = object.name ?? "";
    message.uid = object.uid ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.description = object.description ?? "";
    message.backupPlan = object.backupPlan ?? "";
    message.cluster = object.cluster ?? "";
    message.restoreConfig = (object.restoreConfig !== undefined && object.restoreConfig !== null)
      ? RestoreConfig.fromPartial(object.restoreConfig)
      : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.etag = object.etag ?? "";
    message.state = object.state ?? 0;
    message.stateReason = object.stateReason ?? "";
    return message;
  },
};

function createBaseRestorePlan_LabelsEntry(): RestorePlan_LabelsEntry {
  return { key: "", value: "" };
}

export const RestorePlan_LabelsEntry: MessageFns<RestorePlan_LabelsEntry> = {
  encode(message: RestorePlan_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RestorePlan_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestorePlan_LabelsEntry();
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

  fromJSON(object: any): RestorePlan_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: RestorePlan_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<RestorePlan_LabelsEntry>): RestorePlan_LabelsEntry {
    return RestorePlan_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestorePlan_LabelsEntry>): RestorePlan_LabelsEntry {
    const message = createBaseRestorePlan_LabelsEntry();
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
