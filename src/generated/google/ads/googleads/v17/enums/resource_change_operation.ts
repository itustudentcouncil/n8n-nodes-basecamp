// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/resource_change_operation.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/**
 * Container for enum describing resource change operations
 * in the ChangeEvent resource.
 */
export interface ResourceChangeOperationEnum {
}

/** The operation on the changed resource in change_event resource. */
export enum ResourceChangeOperationEnum_ResourceChangeOperation {
  /** UNSPECIFIED - No value has been specified. */
  UNSPECIFIED = 0,
  /**
   * UNKNOWN - Used for return value only. Represents an unclassified operation unknown
   * in this version.
   */
  UNKNOWN = 1,
  /** CREATE - The resource was created. */
  CREATE = 2,
  /** UPDATE - The resource was modified. */
  UPDATE = 3,
  /** REMOVE - The resource was removed. */
  REMOVE = 4,
  UNRECOGNIZED = -1,
}

export function resourceChangeOperationEnum_ResourceChangeOperationFromJSON(
  object: any,
): ResourceChangeOperationEnum_ResourceChangeOperation {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ResourceChangeOperationEnum_ResourceChangeOperation.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ResourceChangeOperationEnum_ResourceChangeOperation.UNKNOWN;
    case 2:
    case "CREATE":
      return ResourceChangeOperationEnum_ResourceChangeOperation.CREATE;
    case 3:
    case "UPDATE":
      return ResourceChangeOperationEnum_ResourceChangeOperation.UPDATE;
    case 4:
    case "REMOVE":
      return ResourceChangeOperationEnum_ResourceChangeOperation.REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceChangeOperationEnum_ResourceChangeOperation.UNRECOGNIZED;
  }
}

export function resourceChangeOperationEnum_ResourceChangeOperationToJSON(
  object: ResourceChangeOperationEnum_ResourceChangeOperation,
): string {
  switch (object) {
    case ResourceChangeOperationEnum_ResourceChangeOperation.UNSPECIFIED:
      return "UNSPECIFIED";
    case ResourceChangeOperationEnum_ResourceChangeOperation.UNKNOWN:
      return "UNKNOWN";
    case ResourceChangeOperationEnum_ResourceChangeOperation.CREATE:
      return "CREATE";
    case ResourceChangeOperationEnum_ResourceChangeOperation.UPDATE:
      return "UPDATE";
    case ResourceChangeOperationEnum_ResourceChangeOperation.REMOVE:
      return "REMOVE";
    case ResourceChangeOperationEnum_ResourceChangeOperation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseResourceChangeOperationEnum(): ResourceChangeOperationEnum {
  return {};
}

export const ResourceChangeOperationEnum: MessageFns<ResourceChangeOperationEnum> = {
  encode(_: ResourceChangeOperationEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ResourceChangeOperationEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceChangeOperationEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ResourceChangeOperationEnum {
    return {};
  },

  toJSON(_: ResourceChangeOperationEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ResourceChangeOperationEnum>): ResourceChangeOperationEnum {
    return ResourceChangeOperationEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ResourceChangeOperationEnum>): ResourceChangeOperationEnum {
    const message = createBaseResourceChangeOperationEnum();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}