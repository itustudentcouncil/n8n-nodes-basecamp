// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/bigquery/storage/v1beta2/table.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.bigquery.storage.v1beta2";

/** Schema of a table */
export interface TableSchema {
  /** Describes the fields in a table. */
  fields: TableFieldSchema[];
}

/** A field in TableSchema */
export interface TableFieldSchema {
  /**
   * Required. The field name. The name must contain only letters (a-z, A-Z),
   * numbers (0-9), or underscores (_), and must start with a letter or
   * underscore. The maximum length is 128 characters.
   */
  name: string;
  /** Required. The field data type. */
  type: TableFieldSchema_Type;
  /** Optional. The field mode. The default value is NULLABLE. */
  mode: TableFieldSchema_Mode;
  /** Optional. Describes the nested schema fields if the type property is set to STRUCT. */
  fields: TableFieldSchema[];
  /** Optional. The field description. The maximum length is 1,024 characters. */
  description: string;
}

export enum TableFieldSchema_Type {
  /** TYPE_UNSPECIFIED - Illegal value */
  TYPE_UNSPECIFIED = 0,
  /** STRING - 64K, UTF8 */
  STRING = 1,
  /** INT64 - 64-bit signed */
  INT64 = 2,
  /** DOUBLE - 64-bit IEEE floating point */
  DOUBLE = 3,
  /** STRUCT - Aggregate type */
  STRUCT = 4,
  /** BYTES - 64K, Binary */
  BYTES = 5,
  /** BOOL - 2-valued */
  BOOL = 6,
  /** TIMESTAMP - 64-bit signed usec since UTC epoch */
  TIMESTAMP = 7,
  /** DATE - Civil date - Year, Month, Day */
  DATE = 8,
  /** TIME - Civil time - Hour, Minute, Second, Microseconds */
  TIME = 9,
  /** DATETIME - Combination of civil date and civil time */
  DATETIME = 10,
  /** GEOGRAPHY - Geography object */
  GEOGRAPHY = 11,
  /** NUMERIC - Numeric value */
  NUMERIC = 12,
  /** BIGNUMERIC - BigNumeric value */
  BIGNUMERIC = 13,
  /** INTERVAL - Interval */
  INTERVAL = 14,
  /** JSON - JSON, String */
  JSON = 15,
  UNRECOGNIZED = -1,
}

export function tableFieldSchema_TypeFromJSON(object: any): TableFieldSchema_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return TableFieldSchema_Type.TYPE_UNSPECIFIED;
    case 1:
    case "STRING":
      return TableFieldSchema_Type.STRING;
    case 2:
    case "INT64":
      return TableFieldSchema_Type.INT64;
    case 3:
    case "DOUBLE":
      return TableFieldSchema_Type.DOUBLE;
    case 4:
    case "STRUCT":
      return TableFieldSchema_Type.STRUCT;
    case 5:
    case "BYTES":
      return TableFieldSchema_Type.BYTES;
    case 6:
    case "BOOL":
      return TableFieldSchema_Type.BOOL;
    case 7:
    case "TIMESTAMP":
      return TableFieldSchema_Type.TIMESTAMP;
    case 8:
    case "DATE":
      return TableFieldSchema_Type.DATE;
    case 9:
    case "TIME":
      return TableFieldSchema_Type.TIME;
    case 10:
    case "DATETIME":
      return TableFieldSchema_Type.DATETIME;
    case 11:
    case "GEOGRAPHY":
      return TableFieldSchema_Type.GEOGRAPHY;
    case 12:
    case "NUMERIC":
      return TableFieldSchema_Type.NUMERIC;
    case 13:
    case "BIGNUMERIC":
      return TableFieldSchema_Type.BIGNUMERIC;
    case 14:
    case "INTERVAL":
      return TableFieldSchema_Type.INTERVAL;
    case 15:
    case "JSON":
      return TableFieldSchema_Type.JSON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TableFieldSchema_Type.UNRECOGNIZED;
  }
}

export function tableFieldSchema_TypeToJSON(object: TableFieldSchema_Type): string {
  switch (object) {
    case TableFieldSchema_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case TableFieldSchema_Type.STRING:
      return "STRING";
    case TableFieldSchema_Type.INT64:
      return "INT64";
    case TableFieldSchema_Type.DOUBLE:
      return "DOUBLE";
    case TableFieldSchema_Type.STRUCT:
      return "STRUCT";
    case TableFieldSchema_Type.BYTES:
      return "BYTES";
    case TableFieldSchema_Type.BOOL:
      return "BOOL";
    case TableFieldSchema_Type.TIMESTAMP:
      return "TIMESTAMP";
    case TableFieldSchema_Type.DATE:
      return "DATE";
    case TableFieldSchema_Type.TIME:
      return "TIME";
    case TableFieldSchema_Type.DATETIME:
      return "DATETIME";
    case TableFieldSchema_Type.GEOGRAPHY:
      return "GEOGRAPHY";
    case TableFieldSchema_Type.NUMERIC:
      return "NUMERIC";
    case TableFieldSchema_Type.BIGNUMERIC:
      return "BIGNUMERIC";
    case TableFieldSchema_Type.INTERVAL:
      return "INTERVAL";
    case TableFieldSchema_Type.JSON:
      return "JSON";
    case TableFieldSchema_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TableFieldSchema_Mode {
  /** MODE_UNSPECIFIED - Illegal value */
  MODE_UNSPECIFIED = 0,
  NULLABLE = 1,
  REQUIRED = 2,
  REPEATED = 3,
  UNRECOGNIZED = -1,
}

export function tableFieldSchema_ModeFromJSON(object: any): TableFieldSchema_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return TableFieldSchema_Mode.MODE_UNSPECIFIED;
    case 1:
    case "NULLABLE":
      return TableFieldSchema_Mode.NULLABLE;
    case 2:
    case "REQUIRED":
      return TableFieldSchema_Mode.REQUIRED;
    case 3:
    case "REPEATED":
      return TableFieldSchema_Mode.REPEATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TableFieldSchema_Mode.UNRECOGNIZED;
  }
}

export function tableFieldSchema_ModeToJSON(object: TableFieldSchema_Mode): string {
  switch (object) {
    case TableFieldSchema_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case TableFieldSchema_Mode.NULLABLE:
      return "NULLABLE";
    case TableFieldSchema_Mode.REQUIRED:
      return "REQUIRED";
    case TableFieldSchema_Mode.REPEATED:
      return "REPEATED";
    case TableFieldSchema_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTableSchema(): TableSchema {
  return { fields: [] };
}

export const TableSchema: MessageFns<TableSchema> = {
  encode(message: TableSchema, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.fields) {
      TableFieldSchema.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TableSchema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fields.push(TableFieldSchema.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TableSchema {
    return {
      fields: globalThis.Array.isArray(object?.fields)
        ? object.fields.map((e: any) => TableFieldSchema.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TableSchema): unknown {
    const obj: any = {};
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => TableFieldSchema.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TableSchema>): TableSchema {
    return TableSchema.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TableSchema>): TableSchema {
    const message = createBaseTableSchema();
    message.fields = object.fields?.map((e) => TableFieldSchema.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTableFieldSchema(): TableFieldSchema {
  return { name: "", type: 0, mode: 0, fields: [], description: "" };
}

export const TableFieldSchema: MessageFns<TableFieldSchema> = {
  encode(message: TableFieldSchema, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.mode !== 0) {
      writer.uint32(24).int32(message.mode);
    }
    for (const v of message.fields) {
      TableFieldSchema.encode(v!, writer.uint32(34).fork()).join();
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TableFieldSchema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableFieldSchema();
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

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fields.push(TableFieldSchema.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): TableFieldSchema {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? tableFieldSchema_TypeFromJSON(object.type) : 0,
      mode: isSet(object.mode) ? tableFieldSchema_ModeFromJSON(object.mode) : 0,
      fields: globalThis.Array.isArray(object?.fields)
        ? object.fields.map((e: any) => TableFieldSchema.fromJSON(e))
        : [],
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: TableFieldSchema): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = tableFieldSchema_TypeToJSON(message.type);
    }
    if (message.mode !== 0) {
      obj.mode = tableFieldSchema_ModeToJSON(message.mode);
    }
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => TableFieldSchema.toJSON(e));
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<TableFieldSchema>): TableFieldSchema {
    return TableFieldSchema.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TableFieldSchema>): TableFieldSchema {
    const message = createBaseTableFieldSchema();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.mode = object.mode ?? 0;
    message.fields = object.fields?.map((e) => TableFieldSchema.fromPartial(e)) || [];
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
