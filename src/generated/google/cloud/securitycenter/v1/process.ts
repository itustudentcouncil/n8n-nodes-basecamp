// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v1/process.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { File } from "./file.js";

export const protobufPackage = "google.cloud.securitycenter.v1";

/** Represents an operating system process. */
export interface Process {
  /**
   * The process name, as displayed in utilities like `top` and `ps`. This name
   * can be accessed through `/proc/[pid]/comm` and changed with
   * `prctl(PR_SET_NAME)`.
   */
  name: string;
  /** File information for the process executable. */
  binary:
    | File
    | undefined;
  /** File information for libraries loaded by the process. */
  libraries: File[];
  /**
   * When the process represents the invocation of a script, `binary` provides
   * information about the interpreter, while `script` provides information
   * about the script file provided to the interpreter.
   */
  script:
    | File
    | undefined;
  /** Process arguments as JSON encoded strings. */
  args: string[];
  /** True if `args` is incomplete. */
  argumentsTruncated: boolean;
  /** Process environment variables. */
  envVariables: EnvironmentVariable[];
  /** True if `env_variables` is incomplete. */
  envVariablesTruncated: boolean;
  /** The process ID. */
  pid: Long;
  /** The parent process ID. */
  parentPid: Long;
}

/**
 * A name-value pair representing an environment variable used in an operating
 * system process.
 */
export interface EnvironmentVariable {
  /** Environment variable name as a JSON encoded string. */
  name: string;
  /** Environment variable value as a JSON encoded string. */
  val: string;
}

function createBaseProcess(): Process {
  return {
    name: "",
    binary: undefined,
    libraries: [],
    script: undefined,
    args: [],
    argumentsTruncated: false,
    envVariables: [],
    envVariablesTruncated: false,
    pid: Long.ZERO,
    parentPid: Long.ZERO,
  };
}

export const Process: MessageFns<Process> = {
  encode(message: Process, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(98).string(message.name);
    }
    if (message.binary !== undefined) {
      File.encode(message.binary, writer.uint32(26).fork()).join();
    }
    for (const v of message.libraries) {
      File.encode(v!, writer.uint32(34).fork()).join();
    }
    if (message.script !== undefined) {
      File.encode(message.script, writer.uint32(42).fork()).join();
    }
    for (const v of message.args) {
      writer.uint32(50).string(v!);
    }
    if (message.argumentsTruncated !== false) {
      writer.uint32(56).bool(message.argumentsTruncated);
    }
    for (const v of message.envVariables) {
      EnvironmentVariable.encode(v!, writer.uint32(66).fork()).join();
    }
    if (message.envVariablesTruncated !== false) {
      writer.uint32(72).bool(message.envVariablesTruncated);
    }
    if (!message.pid.equals(Long.ZERO)) {
      writer.uint32(80).int64(message.pid.toString());
    }
    if (!message.parentPid.equals(Long.ZERO)) {
      writer.uint32(88).int64(message.parentPid.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Process {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 12:
          if (tag !== 98) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.binary = File.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.libraries.push(File.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.script = File.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.args.push(reader.string());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.argumentsTruncated = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.envVariables.push(EnvironmentVariable.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.envVariablesTruncated = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.pid = Long.fromString(reader.int64().toString());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.parentPid = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Process {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      binary: isSet(object.binary) ? File.fromJSON(object.binary) : undefined,
      libraries: globalThis.Array.isArray(object?.libraries) ? object.libraries.map((e: any) => File.fromJSON(e)) : [],
      script: isSet(object.script) ? File.fromJSON(object.script) : undefined,
      args: globalThis.Array.isArray(object?.args) ? object.args.map((e: any) => globalThis.String(e)) : [],
      argumentsTruncated: isSet(object.argumentsTruncated) ? globalThis.Boolean(object.argumentsTruncated) : false,
      envVariables: globalThis.Array.isArray(object?.envVariables)
        ? object.envVariables.map((e: any) => EnvironmentVariable.fromJSON(e))
        : [],
      envVariablesTruncated: isSet(object.envVariablesTruncated)
        ? globalThis.Boolean(object.envVariablesTruncated)
        : false,
      pid: isSet(object.pid) ? Long.fromValue(object.pid) : Long.ZERO,
      parentPid: isSet(object.parentPid) ? Long.fromValue(object.parentPid) : Long.ZERO,
    };
  },

  toJSON(message: Process): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.binary !== undefined) {
      obj.binary = File.toJSON(message.binary);
    }
    if (message.libraries?.length) {
      obj.libraries = message.libraries.map((e) => File.toJSON(e));
    }
    if (message.script !== undefined) {
      obj.script = File.toJSON(message.script);
    }
    if (message.args?.length) {
      obj.args = message.args;
    }
    if (message.argumentsTruncated !== false) {
      obj.argumentsTruncated = message.argumentsTruncated;
    }
    if (message.envVariables?.length) {
      obj.envVariables = message.envVariables.map((e) => EnvironmentVariable.toJSON(e));
    }
    if (message.envVariablesTruncated !== false) {
      obj.envVariablesTruncated = message.envVariablesTruncated;
    }
    if (!message.pid.equals(Long.ZERO)) {
      obj.pid = (message.pid || Long.ZERO).toString();
    }
    if (!message.parentPid.equals(Long.ZERO)) {
      obj.parentPid = (message.parentPid || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<Process>): Process {
    return Process.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Process>): Process {
    const message = createBaseProcess();
    message.name = object.name ?? "";
    message.binary = (object.binary !== undefined && object.binary !== null)
      ? File.fromPartial(object.binary)
      : undefined;
    message.libraries = object.libraries?.map((e) => File.fromPartial(e)) || [];
    message.script = (object.script !== undefined && object.script !== null)
      ? File.fromPartial(object.script)
      : undefined;
    message.args = object.args?.map((e) => e) || [];
    message.argumentsTruncated = object.argumentsTruncated ?? false;
    message.envVariables = object.envVariables?.map((e) => EnvironmentVariable.fromPartial(e)) || [];
    message.envVariablesTruncated = object.envVariablesTruncated ?? false;
    message.pid = (object.pid !== undefined && object.pid !== null) ? Long.fromValue(object.pid) : Long.ZERO;
    message.parentPid = (object.parentPid !== undefined && object.parentPid !== null)
      ? Long.fromValue(object.parentPid)
      : Long.ZERO;
    return message;
  },
};

function createBaseEnvironmentVariable(): EnvironmentVariable {
  return { name: "", val: "" };
}

export const EnvironmentVariable: MessageFns<EnvironmentVariable> = {
  encode(message: EnvironmentVariable, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.val !== "") {
      writer.uint32(18).string(message.val);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EnvironmentVariable {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvironmentVariable();
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

          message.val = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnvironmentVariable {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      val: isSet(object.val) ? globalThis.String(object.val) : "",
    };
  },

  toJSON(message: EnvironmentVariable): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.val !== "") {
      obj.val = message.val;
    }
    return obj;
  },

  create(base?: DeepPartial<EnvironmentVariable>): EnvironmentVariable {
    return EnvironmentVariable.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EnvironmentVariable>): EnvironmentVariable {
    const message = createBaseEnvironmentVariable();
    message.name = object.name ?? "";
    message.val = object.val ?? "";
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