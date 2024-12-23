// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/datacatalog/v1beta1/schema.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.datacatalog.v1beta1";

/** Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema). */
export interface Schema {
  /**
   * Required. Schema of columns. A maximum of 10,000 columns and sub-columns
   * can be specified.
   */
  columns: ColumnSchema[];
}

/**
 * Representation of a column within a schema. Columns could be nested inside
 * other columns.
 */
export interface ColumnSchema {
  /** Required. Name of the column. */
  column: string;
  /** Required. Type of the column. */
  type: string;
  /** Optional. Description of the column. Default value is an empty string. */
  description: string;
  /**
   * Optional. A column's mode indicates whether the values in this column are
   * required, nullable, etc. Only `NULLABLE`, `REQUIRED` and `REPEATED` are
   * supported. Default mode is `NULLABLE`.
   */
  mode: string;
  /**
   * Optional. Schema of sub-columns. A column can have zero or more
   * sub-columns.
   */
  subcolumns: ColumnSchema[];
}

function createBaseSchema(): Schema {
  return { columns: [] };
}

export const Schema: MessageFns<Schema> = {
  encode(message: Schema, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.columns) {
      ColumnSchema.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Schema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.columns.push(ColumnSchema.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Schema {
    return {
      columns: globalThis.Array.isArray(object?.columns)
        ? object.columns.map((e: any) => ColumnSchema.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Schema): unknown {
    const obj: any = {};
    if (message.columns?.length) {
      obj.columns = message.columns.map((e) => ColumnSchema.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Schema>): Schema {
    return Schema.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Schema>): Schema {
    const message = createBaseSchema();
    message.columns = object.columns?.map((e) => ColumnSchema.fromPartial(e)) || [];
    return message;
  },
};

function createBaseColumnSchema(): ColumnSchema {
  return { column: "", type: "", description: "", mode: "", subcolumns: [] };
}

export const ColumnSchema: MessageFns<ColumnSchema> = {
  encode(message: ColumnSchema, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.column !== "") {
      writer.uint32(50).string(message.column);
    }
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.mode !== "") {
      writer.uint32(26).string(message.mode);
    }
    for (const v of message.subcolumns) {
      ColumnSchema.encode(v!, writer.uint32(58).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ColumnSchema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColumnSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.column = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mode = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.subcolumns.push(ColumnSchema.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ColumnSchema {
    return {
      column: isSet(object.column) ? globalThis.String(object.column) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      mode: isSet(object.mode) ? globalThis.String(object.mode) : "",
      subcolumns: globalThis.Array.isArray(object?.subcolumns)
        ? object.subcolumns.map((e: any) => ColumnSchema.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ColumnSchema): unknown {
    const obj: any = {};
    if (message.column !== "") {
      obj.column = message.column;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.mode !== "") {
      obj.mode = message.mode;
    }
    if (message.subcolumns?.length) {
      obj.subcolumns = message.subcolumns.map((e) => ColumnSchema.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ColumnSchema>): ColumnSchema {
    return ColumnSchema.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ColumnSchema>): ColumnSchema {
    const message = createBaseColumnSchema();
    message.column = object.column ?? "";
    message.type = object.type ?? "";
    message.description = object.description ?? "";
    message.mode = object.mode ?? "";
    message.subcolumns = object.subcolumns?.map((e) => ColumnSchema.fromPartial(e)) || [];
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
