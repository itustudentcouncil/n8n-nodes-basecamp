// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/compute/logging/gdnsusage/v1/gdns_vm_usage.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.compute.logging.gdnsusage.v1";

/** Used for structured payload for reporting Platform Logs */
export interface GdnsVmUsagePlatformLog {
  /** source vm's information */
  sourceVm?:
    | VmInfo
    | undefined;
  /** destination vm's information */
  destinationVm?:
    | VmInfo
    | undefined;
  /**
   * message that informs users on how to fix the global DNS query that is
   * blocking the zonal DNS migration
   */
  debugMessage?:
    | string
    | undefined;
  /**
   * number of zDNS migration blocking queries sent from source_vm to
   * destination_vm
   */
  queryCount?: number | undefined;
}

/** VM details */
export interface VmInfo {
  /** project id of the vm */
  projectId?:
    | string
    | undefined;
  /** name of the vm */
  vm?:
    | string
    | undefined;
  /** zone of the vm */
  zone?: string | undefined;
}

function createBaseGdnsVmUsagePlatformLog(): GdnsVmUsagePlatformLog {
  return { sourceVm: undefined, destinationVm: undefined, debugMessage: undefined, queryCount: undefined };
}

export const GdnsVmUsagePlatformLog: MessageFns<GdnsVmUsagePlatformLog> = {
  encode(message: GdnsVmUsagePlatformLog, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sourceVm !== undefined) {
      VmInfo.encode(message.sourceVm, writer.uint32(10).fork()).join();
    }
    if (message.destinationVm !== undefined) {
      VmInfo.encode(message.destinationVm, writer.uint32(18).fork()).join();
    }
    if (message.debugMessage !== undefined) {
      writer.uint32(26).string(message.debugMessage);
    }
    if (message.queryCount !== undefined) {
      writer.uint32(40).int32(message.queryCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GdnsVmUsagePlatformLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGdnsVmUsagePlatformLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceVm = VmInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.destinationVm = VmInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.debugMessage = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.queryCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GdnsVmUsagePlatformLog {
    return {
      sourceVm: isSet(object.sourceVm) ? VmInfo.fromJSON(object.sourceVm) : undefined,
      destinationVm: isSet(object.destinationVm) ? VmInfo.fromJSON(object.destinationVm) : undefined,
      debugMessage: isSet(object.debugMessage) ? globalThis.String(object.debugMessage) : undefined,
      queryCount: isSet(object.queryCount) ? globalThis.Number(object.queryCount) : undefined,
    };
  },

  toJSON(message: GdnsVmUsagePlatformLog): unknown {
    const obj: any = {};
    if (message.sourceVm !== undefined) {
      obj.sourceVm = VmInfo.toJSON(message.sourceVm);
    }
    if (message.destinationVm !== undefined) {
      obj.destinationVm = VmInfo.toJSON(message.destinationVm);
    }
    if (message.debugMessage !== undefined) {
      obj.debugMessage = message.debugMessage;
    }
    if (message.queryCount !== undefined) {
      obj.queryCount = Math.round(message.queryCount);
    }
    return obj;
  },

  create(base?: DeepPartial<GdnsVmUsagePlatformLog>): GdnsVmUsagePlatformLog {
    return GdnsVmUsagePlatformLog.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GdnsVmUsagePlatformLog>): GdnsVmUsagePlatformLog {
    const message = createBaseGdnsVmUsagePlatformLog();
    message.sourceVm = (object.sourceVm !== undefined && object.sourceVm !== null)
      ? VmInfo.fromPartial(object.sourceVm)
      : undefined;
    message.destinationVm = (object.destinationVm !== undefined && object.destinationVm !== null)
      ? VmInfo.fromPartial(object.destinationVm)
      : undefined;
    message.debugMessage = object.debugMessage ?? undefined;
    message.queryCount = object.queryCount ?? undefined;
    return message;
  },
};

function createBaseVmInfo(): VmInfo {
  return { projectId: undefined, vm: undefined, zone: undefined };
}

export const VmInfo: MessageFns<VmInfo> = {
  encode(message: VmInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.projectId !== undefined) {
      writer.uint32(10).string(message.projectId);
    }
    if (message.vm !== undefined) {
      writer.uint32(18).string(message.vm);
    }
    if (message.zone !== undefined) {
      writer.uint32(26).string(message.zone);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VmInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVmInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.vm = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.zone = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VmInfo {
    return {
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : undefined,
      vm: isSet(object.vm) ? globalThis.String(object.vm) : undefined,
      zone: isSet(object.zone) ? globalThis.String(object.zone) : undefined,
    };
  },

  toJSON(message: VmInfo): unknown {
    const obj: any = {};
    if (message.projectId !== undefined) {
      obj.projectId = message.projectId;
    }
    if (message.vm !== undefined) {
      obj.vm = message.vm;
    }
    if (message.zone !== undefined) {
      obj.zone = message.zone;
    }
    return obj;
  },

  create(base?: DeepPartial<VmInfo>): VmInfo {
    return VmInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VmInfo>): VmInfo {
    const message = createBaseVmInfo();
    message.projectId = object.projectId ?? undefined;
    message.vm = object.vm ?? undefined;
    message.zone = object.zone ?? undefined;
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
