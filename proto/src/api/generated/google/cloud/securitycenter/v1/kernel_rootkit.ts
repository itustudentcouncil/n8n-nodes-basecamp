// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v1/kernel_rootkit.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.securitycenter.v1";

/** Kernel mode rootkit signatures. */
export interface KernelRootkit {
  /** Rootkit name, when available. */
  name: string;
  /** True if unexpected modifications of kernel code memory are present. */
  unexpectedCodeModification: boolean;
  /**
   * True if unexpected modifications of kernel read-only data memory are
   * present.
   */
  unexpectedReadOnlyDataModification: boolean;
  /**
   * True if `ftrace` points are present with callbacks pointing to regions
   * that are not in the expected kernel or module code range.
   */
  unexpectedFtraceHandler: boolean;
  /**
   * True if `kprobe` points are present with callbacks pointing to regions
   * that are not in the expected kernel or module code range.
   */
  unexpectedKprobeHandler: boolean;
  /**
   * True if kernel code pages that are not in the expected kernel or module
   * code regions are present.
   */
  unexpectedKernelCodePages: boolean;
  /**
   * True if system call handlers that are are not in the expected kernel or
   * module code regions are present.
   */
  unexpectedSystemCallHandler: boolean;
  /**
   * True if interrupt handlers that are are not in the expected kernel or
   * module code regions are present.
   */
  unexpectedInterruptHandler: boolean;
  /**
   * True if unexpected processes in the scheduler run queue are present. Such
   * processes are in the run queue, but not in the process task list.
   */
  unexpectedProcessesInRunqueue: boolean;
}

function createBaseKernelRootkit(): KernelRootkit {
  return {
    name: "",
    unexpectedCodeModification: false,
    unexpectedReadOnlyDataModification: false,
    unexpectedFtraceHandler: false,
    unexpectedKprobeHandler: false,
    unexpectedKernelCodePages: false,
    unexpectedSystemCallHandler: false,
    unexpectedInterruptHandler: false,
    unexpectedProcessesInRunqueue: false,
  };
}

export const KernelRootkit: MessageFns<KernelRootkit> = {
  encode(message: KernelRootkit, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.unexpectedCodeModification !== false) {
      writer.uint32(16).bool(message.unexpectedCodeModification);
    }
    if (message.unexpectedReadOnlyDataModification !== false) {
      writer.uint32(24).bool(message.unexpectedReadOnlyDataModification);
    }
    if (message.unexpectedFtraceHandler !== false) {
      writer.uint32(32).bool(message.unexpectedFtraceHandler);
    }
    if (message.unexpectedKprobeHandler !== false) {
      writer.uint32(40).bool(message.unexpectedKprobeHandler);
    }
    if (message.unexpectedKernelCodePages !== false) {
      writer.uint32(48).bool(message.unexpectedKernelCodePages);
    }
    if (message.unexpectedSystemCallHandler !== false) {
      writer.uint32(56).bool(message.unexpectedSystemCallHandler);
    }
    if (message.unexpectedInterruptHandler !== false) {
      writer.uint32(64).bool(message.unexpectedInterruptHandler);
    }
    if (message.unexpectedProcessesInRunqueue !== false) {
      writer.uint32(72).bool(message.unexpectedProcessesInRunqueue);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): KernelRootkit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKernelRootkit();
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
          if (tag !== 16) {
            break;
          }

          message.unexpectedCodeModification = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.unexpectedReadOnlyDataModification = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.unexpectedFtraceHandler = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.unexpectedKprobeHandler = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.unexpectedKernelCodePages = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.unexpectedSystemCallHandler = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.unexpectedInterruptHandler = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.unexpectedProcessesInRunqueue = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KernelRootkit {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      unexpectedCodeModification: isSet(object.unexpectedCodeModification)
        ? globalThis.Boolean(object.unexpectedCodeModification)
        : false,
      unexpectedReadOnlyDataModification: isSet(object.unexpectedReadOnlyDataModification)
        ? globalThis.Boolean(object.unexpectedReadOnlyDataModification)
        : false,
      unexpectedFtraceHandler: isSet(object.unexpectedFtraceHandler)
        ? globalThis.Boolean(object.unexpectedFtraceHandler)
        : false,
      unexpectedKprobeHandler: isSet(object.unexpectedKprobeHandler)
        ? globalThis.Boolean(object.unexpectedKprobeHandler)
        : false,
      unexpectedKernelCodePages: isSet(object.unexpectedKernelCodePages)
        ? globalThis.Boolean(object.unexpectedKernelCodePages)
        : false,
      unexpectedSystemCallHandler: isSet(object.unexpectedSystemCallHandler)
        ? globalThis.Boolean(object.unexpectedSystemCallHandler)
        : false,
      unexpectedInterruptHandler: isSet(object.unexpectedInterruptHandler)
        ? globalThis.Boolean(object.unexpectedInterruptHandler)
        : false,
      unexpectedProcessesInRunqueue: isSet(object.unexpectedProcessesInRunqueue)
        ? globalThis.Boolean(object.unexpectedProcessesInRunqueue)
        : false,
    };
  },

  toJSON(message: KernelRootkit): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.unexpectedCodeModification !== false) {
      obj.unexpectedCodeModification = message.unexpectedCodeModification;
    }
    if (message.unexpectedReadOnlyDataModification !== false) {
      obj.unexpectedReadOnlyDataModification = message.unexpectedReadOnlyDataModification;
    }
    if (message.unexpectedFtraceHandler !== false) {
      obj.unexpectedFtraceHandler = message.unexpectedFtraceHandler;
    }
    if (message.unexpectedKprobeHandler !== false) {
      obj.unexpectedKprobeHandler = message.unexpectedKprobeHandler;
    }
    if (message.unexpectedKernelCodePages !== false) {
      obj.unexpectedKernelCodePages = message.unexpectedKernelCodePages;
    }
    if (message.unexpectedSystemCallHandler !== false) {
      obj.unexpectedSystemCallHandler = message.unexpectedSystemCallHandler;
    }
    if (message.unexpectedInterruptHandler !== false) {
      obj.unexpectedInterruptHandler = message.unexpectedInterruptHandler;
    }
    if (message.unexpectedProcessesInRunqueue !== false) {
      obj.unexpectedProcessesInRunqueue = message.unexpectedProcessesInRunqueue;
    }
    return obj;
  },

  create(base?: DeepPartial<KernelRootkit>): KernelRootkit {
    return KernelRootkit.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<KernelRootkit>): KernelRootkit {
    const message = createBaseKernelRootkit();
    message.name = object.name ?? "";
    message.unexpectedCodeModification = object.unexpectedCodeModification ?? false;
    message.unexpectedReadOnlyDataModification = object.unexpectedReadOnlyDataModification ?? false;
    message.unexpectedFtraceHandler = object.unexpectedFtraceHandler ?? false;
    message.unexpectedKprobeHandler = object.unexpectedKprobeHandler ?? false;
    message.unexpectedKernelCodePages = object.unexpectedKernelCodePages ?? false;
    message.unexpectedSystemCallHandler = object.unexpectedSystemCallHandler ?? false;
    message.unexpectedInterruptHandler = object.unexpectedInterruptHandler ?? false;
    message.unexpectedProcessesInRunqueue = object.unexpectedProcessesInRunqueue ?? false;
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