// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/api/label.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.api";

/** A description of a label. */
export interface LabelDescriptor {
  /** The label key. */
  key: string;
  /** The type of data that can be assigned to the label. */
  valueType: LabelDescriptor_ValueType;
  /** A human-readable description for the label. */
  description: string;
}

/** Value types that can be used as label values. */
export enum LabelDescriptor_ValueType {
  /** STRING - A variable-length string. This is the default. */
  STRING = 0,
  /** BOOL - Boolean; true or false. */
  BOOL = 1,
  /** INT64 - A 64-bit signed integer. */
  INT64 = 2,
  UNRECOGNIZED = -1,
}

export function labelDescriptor_ValueTypeFromJSON(object: any): LabelDescriptor_ValueType {
  switch (object) {
    case 0:
    case "STRING":
      return LabelDescriptor_ValueType.STRING;
    case 1:
    case "BOOL":
      return LabelDescriptor_ValueType.BOOL;
    case 2:
    case "INT64":
      return LabelDescriptor_ValueType.INT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LabelDescriptor_ValueType.UNRECOGNIZED;
  }
}

export function labelDescriptor_ValueTypeToJSON(object: LabelDescriptor_ValueType): string {
  switch (object) {
    case LabelDescriptor_ValueType.STRING:
      return "STRING";
    case LabelDescriptor_ValueType.BOOL:
      return "BOOL";
    case LabelDescriptor_ValueType.INT64:
      return "INT64";
    case LabelDescriptor_ValueType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseLabelDescriptor(): LabelDescriptor {
  return { key: "", valueType: 0, description: "" };
}

export const LabelDescriptor: MessageFns<LabelDescriptor> = {
  encode(message: LabelDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.valueType !== 0) {
      writer.uint32(16).int32(message.valueType);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LabelDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabelDescriptor();
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
          if (tag !== 16) {
            break;
          }

          message.valueType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LabelDescriptor {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      valueType: isSet(object.valueType) ? labelDescriptor_ValueTypeFromJSON(object.valueType) : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: LabelDescriptor): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.valueType !== 0) {
      obj.valueType = labelDescriptor_ValueTypeToJSON(message.valueType);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<LabelDescriptor>): LabelDescriptor {
    return LabelDescriptor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LabelDescriptor>): LabelDescriptor {
    const message = createBaseLabelDescriptor();
    message.key = object.key ?? "";
    message.valueType = object.valueType ?? 0;
    message.description = object.description ?? "";
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
