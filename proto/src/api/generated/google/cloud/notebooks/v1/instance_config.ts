// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/notebooks/v1/instance_config.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.notebooks.v1";

/** Notebook instance configurations that can be updated. */
export interface InstanceConfig {
  /**
   * Cron expression in UTC timezone, used to schedule instance auto upgrade.
   * Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).
   */
  notebookUpgradeSchedule: string;
  /** Verifies core internal services are running. */
  enableHealthMonitoring: boolean;
}

function createBaseInstanceConfig(): InstanceConfig {
  return { notebookUpgradeSchedule: "", enableHealthMonitoring: false };
}

export const InstanceConfig: MessageFns<InstanceConfig> = {
  encode(message: InstanceConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.notebookUpgradeSchedule !== "") {
      writer.uint32(10).string(message.notebookUpgradeSchedule);
    }
    if (message.enableHealthMonitoring !== false) {
      writer.uint32(16).bool(message.enableHealthMonitoring);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InstanceConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstanceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notebookUpgradeSchedule = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.enableHealthMonitoring = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstanceConfig {
    return {
      notebookUpgradeSchedule: isSet(object.notebookUpgradeSchedule)
        ? globalThis.String(object.notebookUpgradeSchedule)
        : "",
      enableHealthMonitoring: isSet(object.enableHealthMonitoring)
        ? globalThis.Boolean(object.enableHealthMonitoring)
        : false,
    };
  },

  toJSON(message: InstanceConfig): unknown {
    const obj: any = {};
    if (message.notebookUpgradeSchedule !== "") {
      obj.notebookUpgradeSchedule = message.notebookUpgradeSchedule;
    }
    if (message.enableHealthMonitoring !== false) {
      obj.enableHealthMonitoring = message.enableHealthMonitoring;
    }
    return obj;
  },

  create(base?: DeepPartial<InstanceConfig>): InstanceConfig {
    return InstanceConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InstanceConfig>): InstanceConfig {
    const message = createBaseInstanceConfig();
    message.notebookUpgradeSchedule = object.notebookUpgradeSchedule ?? "";
    message.enableHealthMonitoring = object.enableHealthMonitoring ?? false;
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