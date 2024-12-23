// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/oracledatabase/v1/db_node.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.oracledatabase.v1";

/**
 * Details of the database node resource.
 * https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/DbNode/
 */
export interface DbNode {
  /**
   * Identifier. The name of the database node resource in the following format:
   * projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}/dbNodes/{db_node}
   */
  name: string;
  /** Optional. Various properties of the database node. */
  properties: DbNodeProperties | undefined;
}

/** Various properties and settings associated with Db node. */
export interface DbNodeProperties {
  /** Output only. OCID of database node. */
  ocid: string;
  /** Optional. OCPU count per database node. */
  ocpuCount: number;
  /** Memory allocated in GBs. */
  memorySizeGb: number;
  /** Optional. Local storage per database node. */
  dbNodeStorageSizeGb: number;
  /** Optional. Database server OCID. */
  dbServerOcid: string;
  /** Optional. DNS */
  hostname: string;
  /** Output only. State of the database node. */
  state: DbNodeProperties_State;
  /** Total CPU core count of the database node. */
  totalCpuCoreCount: number;
}

/** The various lifecycle states of the database node. */
export enum DbNodeProperties_State {
  /** STATE_UNSPECIFIED - Default unspecified value. */
  STATE_UNSPECIFIED = 0,
  /** PROVISIONING - Indicates that the resource is in provisioning state. */
  PROVISIONING = 1,
  /** AVAILABLE - Indicates that the resource is in available state. */
  AVAILABLE = 2,
  /** UPDATING - Indicates that the resource is in updating state. */
  UPDATING = 3,
  /** STOPPING - Indicates that the resource is in stopping state. */
  STOPPING = 4,
  /** STOPPED - Indicates that the resource is in stopped state. */
  STOPPED = 5,
  /** STARTING - Indicates that the resource is in starting state. */
  STARTING = 6,
  /** TERMINATING - Indicates that the resource is in terminating state. */
  TERMINATING = 7,
  /** TERMINATED - Indicates that the resource is in terminated state. */
  TERMINATED = 8,
  /** FAILED - Indicates that the resource is in failed state. */
  FAILED = 9,
  UNRECOGNIZED = -1,
}

export function dbNodeProperties_StateFromJSON(object: any): DbNodeProperties_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return DbNodeProperties_State.STATE_UNSPECIFIED;
    case 1:
    case "PROVISIONING":
      return DbNodeProperties_State.PROVISIONING;
    case 2:
    case "AVAILABLE":
      return DbNodeProperties_State.AVAILABLE;
    case 3:
    case "UPDATING":
      return DbNodeProperties_State.UPDATING;
    case 4:
    case "STOPPING":
      return DbNodeProperties_State.STOPPING;
    case 5:
    case "STOPPED":
      return DbNodeProperties_State.STOPPED;
    case 6:
    case "STARTING":
      return DbNodeProperties_State.STARTING;
    case 7:
    case "TERMINATING":
      return DbNodeProperties_State.TERMINATING;
    case 8:
    case "TERMINATED":
      return DbNodeProperties_State.TERMINATED;
    case 9:
    case "FAILED":
      return DbNodeProperties_State.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DbNodeProperties_State.UNRECOGNIZED;
  }
}

export function dbNodeProperties_StateToJSON(object: DbNodeProperties_State): string {
  switch (object) {
    case DbNodeProperties_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case DbNodeProperties_State.PROVISIONING:
      return "PROVISIONING";
    case DbNodeProperties_State.AVAILABLE:
      return "AVAILABLE";
    case DbNodeProperties_State.UPDATING:
      return "UPDATING";
    case DbNodeProperties_State.STOPPING:
      return "STOPPING";
    case DbNodeProperties_State.STOPPED:
      return "STOPPED";
    case DbNodeProperties_State.STARTING:
      return "STARTING";
    case DbNodeProperties_State.TERMINATING:
      return "TERMINATING";
    case DbNodeProperties_State.TERMINATED:
      return "TERMINATED";
    case DbNodeProperties_State.FAILED:
      return "FAILED";
    case DbNodeProperties_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseDbNode(): DbNode {
  return { name: "", properties: undefined };
}

export const DbNode: MessageFns<DbNode> = {
  encode(message: DbNode, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.properties !== undefined) {
      DbNodeProperties.encode(message.properties, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DbNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDbNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.properties = DbNodeProperties.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DbNode {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      properties: isSet(object.properties) ? DbNodeProperties.fromJSON(object.properties) : undefined,
    };
  },

  toJSON(message: DbNode): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.properties !== undefined) {
      obj.properties = DbNodeProperties.toJSON(message.properties);
    }
    return obj;
  },

  create(base?: DeepPartial<DbNode>): DbNode {
    return DbNode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DbNode>): DbNode {
    const message = createBaseDbNode();
    message.name = object.name ?? "";
    message.properties = (object.properties !== undefined && object.properties !== null)
      ? DbNodeProperties.fromPartial(object.properties)
      : undefined;
    return message;
  },
};

function createBaseDbNodeProperties(): DbNodeProperties {
  return {
    ocid: "",
    ocpuCount: 0,
    memorySizeGb: 0,
    dbNodeStorageSizeGb: 0,
    dbServerOcid: "",
    hostname: "",
    state: 0,
    totalCpuCoreCount: 0,
  };
}

export const DbNodeProperties: MessageFns<DbNodeProperties> = {
  encode(message: DbNodeProperties, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.ocid !== "") {
      writer.uint32(10).string(message.ocid);
    }
    if (message.ocpuCount !== 0) {
      writer.uint32(16).int32(message.ocpuCount);
    }
    if (message.memorySizeGb !== 0) {
      writer.uint32(24).int32(message.memorySizeGb);
    }
    if (message.dbNodeStorageSizeGb !== 0) {
      writer.uint32(32).int32(message.dbNodeStorageSizeGb);
    }
    if (message.dbServerOcid !== "") {
      writer.uint32(42).string(message.dbServerOcid);
    }
    if (message.hostname !== "") {
      writer.uint32(66).string(message.hostname);
    }
    if (message.state !== 0) {
      writer.uint32(72).int32(message.state);
    }
    if (message.totalCpuCoreCount !== 0) {
      writer.uint32(80).int32(message.totalCpuCoreCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DbNodeProperties {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDbNodeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ocid = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ocpuCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.memorySizeGb = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.dbNodeStorageSizeGb = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.dbServerOcid = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.hostname = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.totalCpuCoreCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DbNodeProperties {
    return {
      ocid: isSet(object.ocid) ? globalThis.String(object.ocid) : "",
      ocpuCount: isSet(object.ocpuCount) ? globalThis.Number(object.ocpuCount) : 0,
      memorySizeGb: isSet(object.memorySizeGb) ? globalThis.Number(object.memorySizeGb) : 0,
      dbNodeStorageSizeGb: isSet(object.dbNodeStorageSizeGb) ? globalThis.Number(object.dbNodeStorageSizeGb) : 0,
      dbServerOcid: isSet(object.dbServerOcid) ? globalThis.String(object.dbServerOcid) : "",
      hostname: isSet(object.hostname) ? globalThis.String(object.hostname) : "",
      state: isSet(object.state) ? dbNodeProperties_StateFromJSON(object.state) : 0,
      totalCpuCoreCount: isSet(object.totalCpuCoreCount) ? globalThis.Number(object.totalCpuCoreCount) : 0,
    };
  },

  toJSON(message: DbNodeProperties): unknown {
    const obj: any = {};
    if (message.ocid !== "") {
      obj.ocid = message.ocid;
    }
    if (message.ocpuCount !== 0) {
      obj.ocpuCount = Math.round(message.ocpuCount);
    }
    if (message.memorySizeGb !== 0) {
      obj.memorySizeGb = Math.round(message.memorySizeGb);
    }
    if (message.dbNodeStorageSizeGb !== 0) {
      obj.dbNodeStorageSizeGb = Math.round(message.dbNodeStorageSizeGb);
    }
    if (message.dbServerOcid !== "") {
      obj.dbServerOcid = message.dbServerOcid;
    }
    if (message.hostname !== "") {
      obj.hostname = message.hostname;
    }
    if (message.state !== 0) {
      obj.state = dbNodeProperties_StateToJSON(message.state);
    }
    if (message.totalCpuCoreCount !== 0) {
      obj.totalCpuCoreCount = Math.round(message.totalCpuCoreCount);
    }
    return obj;
  },

  create(base?: DeepPartial<DbNodeProperties>): DbNodeProperties {
    return DbNodeProperties.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DbNodeProperties>): DbNodeProperties {
    const message = createBaseDbNodeProperties();
    message.ocid = object.ocid ?? "";
    message.ocpuCount = object.ocpuCount ?? 0;
    message.memorySizeGb = object.memorySizeGb ?? 0;
    message.dbNodeStorageSizeGb = object.dbNodeStorageSizeGb ?? 0;
    message.dbServerOcid = object.dbServerOcid ?? "";
    message.hostname = object.hostname ?? "";
    message.state = object.state ?? 0;
    message.totalCpuCoreCount = object.totalCpuCoreCount ?? 0;
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
