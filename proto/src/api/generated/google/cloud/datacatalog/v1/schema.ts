// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/datacatalog/v1/schema.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.datacatalog.v1";

/** Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema. */
export interface Schema {
  /**
   * The unified GoogleSQL-like schema of columns.
   *
   * The overall maximum number of columns and nested columns is 10,000.
   * The maximum nested depth is 15 levels.
   */
  columns: ColumnSchema[];
}

/**
 * A column within a schema. Columns can be nested inside
 * other columns.
 */
export interface ColumnSchema {
  /**
   * Required. Name of the column.
   *
   * Must be a UTF-8 string without dots (.).
   * The maximum size is 64 bytes.
   */
  column: string;
  /**
   * Required. Type of the column.
   *
   * Must be a UTF-8 string with the maximum size of 128 bytes.
   */
  type: string;
  /**
   * Optional. Description of the column. Default value is an empty string.
   *
   * The description must be a UTF-8 string with the maximum size of 2000
   * bytes.
   */
  description: string;
  /**
   * Optional. A column's mode indicates whether values in this column are
   * required, nullable, or repeated.
   *
   * Only `NULLABLE`, `REQUIRED`, and `REPEATED` values are supported.
   * Default mode is `NULLABLE`.
   */
  mode: string;
  /** Optional. Default value for the column. */
  defaultValue: string;
  /** Optional. Ordinal position */
  ordinalPosition: number;
  /** Optional. Most important inclusion of this column. */
  highestIndexingType: ColumnSchema_IndexingType;
  /**
   * Optional. Schema of sub-columns. A column can have zero or more
   * sub-columns.
   */
  subcolumns: ColumnSchema[];
  /** Looker specific column info of this column. */
  lookerColumnSpec?:
    | ColumnSchema_LookerColumnSpec
    | undefined;
  /**
   * Optional. The subtype of the RANGE, if the type of this field is RANGE. If
   * the type is RANGE, this field is required. Possible values for the field
   * element type of a RANGE include:
   * * DATE
   * * DATETIME
   * * TIMESTAMP
   */
  rangeElementType:
    | ColumnSchema_FieldElementType
    | undefined;
  /**
   * Optional. Garbage collection policy for the column or column family.
   * Applies to systems like Cloud Bigtable.
   */
  gcRule: string;
}

/** Specifies inclusion of the column in an index */
export enum ColumnSchema_IndexingType {
  /** INDEXING_TYPE_UNSPECIFIED - Unspecified. */
  INDEXING_TYPE_UNSPECIFIED = 0,
  /** INDEXING_TYPE_NONE - Column not a part of an index. */
  INDEXING_TYPE_NONE = 1,
  /** INDEXING_TYPE_NON_UNIQUE - Column Part of non unique index. */
  INDEXING_TYPE_NON_UNIQUE = 2,
  /** INDEXING_TYPE_UNIQUE - Column part of unique index. */
  INDEXING_TYPE_UNIQUE = 3,
  /** INDEXING_TYPE_PRIMARY_KEY - Column part of the primary key. */
  INDEXING_TYPE_PRIMARY_KEY = 4,
  UNRECOGNIZED = -1,
}

export function columnSchema_IndexingTypeFromJSON(object: any): ColumnSchema_IndexingType {
  switch (object) {
    case 0:
    case "INDEXING_TYPE_UNSPECIFIED":
      return ColumnSchema_IndexingType.INDEXING_TYPE_UNSPECIFIED;
    case 1:
    case "INDEXING_TYPE_NONE":
      return ColumnSchema_IndexingType.INDEXING_TYPE_NONE;
    case 2:
    case "INDEXING_TYPE_NON_UNIQUE":
      return ColumnSchema_IndexingType.INDEXING_TYPE_NON_UNIQUE;
    case 3:
    case "INDEXING_TYPE_UNIQUE":
      return ColumnSchema_IndexingType.INDEXING_TYPE_UNIQUE;
    case 4:
    case "INDEXING_TYPE_PRIMARY_KEY":
      return ColumnSchema_IndexingType.INDEXING_TYPE_PRIMARY_KEY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ColumnSchema_IndexingType.UNRECOGNIZED;
  }
}

export function columnSchema_IndexingTypeToJSON(object: ColumnSchema_IndexingType): string {
  switch (object) {
    case ColumnSchema_IndexingType.INDEXING_TYPE_UNSPECIFIED:
      return "INDEXING_TYPE_UNSPECIFIED";
    case ColumnSchema_IndexingType.INDEXING_TYPE_NONE:
      return "INDEXING_TYPE_NONE";
    case ColumnSchema_IndexingType.INDEXING_TYPE_NON_UNIQUE:
      return "INDEXING_TYPE_NON_UNIQUE";
    case ColumnSchema_IndexingType.INDEXING_TYPE_UNIQUE:
      return "INDEXING_TYPE_UNIQUE";
    case ColumnSchema_IndexingType.INDEXING_TYPE_PRIMARY_KEY:
      return "INDEXING_TYPE_PRIMARY_KEY";
    case ColumnSchema_IndexingType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Column info specific to Looker System. */
export interface ColumnSchema_LookerColumnSpec {
  /** Looker specific column type of this column. */
  type: ColumnSchema_LookerColumnSpec_LookerColumnType;
}

/** Column type in Looker. */
export enum ColumnSchema_LookerColumnSpec_LookerColumnType {
  /** LOOKER_COLUMN_TYPE_UNSPECIFIED - Unspecified. */
  LOOKER_COLUMN_TYPE_UNSPECIFIED = 0,
  /** DIMENSION - Dimension. */
  DIMENSION = 1,
  /** DIMENSION_GROUP - Dimension group - parent for Dimension. */
  DIMENSION_GROUP = 2,
  /** FILTER - Filter. */
  FILTER = 3,
  /** MEASURE - Measure. */
  MEASURE = 4,
  /** PARAMETER - Parameter. */
  PARAMETER = 5,
  UNRECOGNIZED = -1,
}

export function columnSchema_LookerColumnSpec_LookerColumnTypeFromJSON(
  object: any,
): ColumnSchema_LookerColumnSpec_LookerColumnType {
  switch (object) {
    case 0:
    case "LOOKER_COLUMN_TYPE_UNSPECIFIED":
      return ColumnSchema_LookerColumnSpec_LookerColumnType.LOOKER_COLUMN_TYPE_UNSPECIFIED;
    case 1:
    case "DIMENSION":
      return ColumnSchema_LookerColumnSpec_LookerColumnType.DIMENSION;
    case 2:
    case "DIMENSION_GROUP":
      return ColumnSchema_LookerColumnSpec_LookerColumnType.DIMENSION_GROUP;
    case 3:
    case "FILTER":
      return ColumnSchema_LookerColumnSpec_LookerColumnType.FILTER;
    case 4:
    case "MEASURE":
      return ColumnSchema_LookerColumnSpec_LookerColumnType.MEASURE;
    case 5:
    case "PARAMETER":
      return ColumnSchema_LookerColumnSpec_LookerColumnType.PARAMETER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ColumnSchema_LookerColumnSpec_LookerColumnType.UNRECOGNIZED;
  }
}

export function columnSchema_LookerColumnSpec_LookerColumnTypeToJSON(
  object: ColumnSchema_LookerColumnSpec_LookerColumnType,
): string {
  switch (object) {
    case ColumnSchema_LookerColumnSpec_LookerColumnType.LOOKER_COLUMN_TYPE_UNSPECIFIED:
      return "LOOKER_COLUMN_TYPE_UNSPECIFIED";
    case ColumnSchema_LookerColumnSpec_LookerColumnType.DIMENSION:
      return "DIMENSION";
    case ColumnSchema_LookerColumnSpec_LookerColumnType.DIMENSION_GROUP:
      return "DIMENSION_GROUP";
    case ColumnSchema_LookerColumnSpec_LookerColumnType.FILTER:
      return "FILTER";
    case ColumnSchema_LookerColumnSpec_LookerColumnType.MEASURE:
      return "MEASURE";
    case ColumnSchema_LookerColumnSpec_LookerColumnType.PARAMETER:
      return "PARAMETER";
    case ColumnSchema_LookerColumnSpec_LookerColumnType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Represents the type of a field element. */
export interface ColumnSchema_FieldElementType {
  /**
   * Required. The type of a field element. See
   * [ColumnSchema.type][google.cloud.datacatalog.v1.ColumnSchema.type].
   */
  type: string;
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
  return {
    column: "",
    type: "",
    description: "",
    mode: "",
    defaultValue: "",
    ordinalPosition: 0,
    highestIndexingType: 0,
    subcolumns: [],
    lookerColumnSpec: undefined,
    rangeElementType: undefined,
    gcRule: "",
  };
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
    if (message.defaultValue !== "") {
      writer.uint32(66).string(message.defaultValue);
    }
    if (message.ordinalPosition !== 0) {
      writer.uint32(72).int32(message.ordinalPosition);
    }
    if (message.highestIndexingType !== 0) {
      writer.uint32(80).int32(message.highestIndexingType);
    }
    for (const v of message.subcolumns) {
      ColumnSchema.encode(v!, writer.uint32(58).fork()).join();
    }
    if (message.lookerColumnSpec !== undefined) {
      ColumnSchema_LookerColumnSpec.encode(message.lookerColumnSpec, writer.uint32(146).fork()).join();
    }
    if (message.rangeElementType !== undefined) {
      ColumnSchema_FieldElementType.encode(message.rangeElementType, writer.uint32(154).fork()).join();
    }
    if (message.gcRule !== "") {
      writer.uint32(90).string(message.gcRule);
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
        case 8:
          if (tag !== 66) {
            break;
          }

          message.defaultValue = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.ordinalPosition = reader.int32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.highestIndexingType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.subcolumns.push(ColumnSchema.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.lookerColumnSpec = ColumnSchema_LookerColumnSpec.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.rangeElementType = ColumnSchema_FieldElementType.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.gcRule = reader.string();
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
      defaultValue: isSet(object.defaultValue) ? globalThis.String(object.defaultValue) : "",
      ordinalPosition: isSet(object.ordinalPosition) ? globalThis.Number(object.ordinalPosition) : 0,
      highestIndexingType: isSet(object.highestIndexingType)
        ? columnSchema_IndexingTypeFromJSON(object.highestIndexingType)
        : 0,
      subcolumns: globalThis.Array.isArray(object?.subcolumns)
        ? object.subcolumns.map((e: any) => ColumnSchema.fromJSON(e))
        : [],
      lookerColumnSpec: isSet(object.lookerColumnSpec)
        ? ColumnSchema_LookerColumnSpec.fromJSON(object.lookerColumnSpec)
        : undefined,
      rangeElementType: isSet(object.rangeElementType)
        ? ColumnSchema_FieldElementType.fromJSON(object.rangeElementType)
        : undefined,
      gcRule: isSet(object.gcRule) ? globalThis.String(object.gcRule) : "",
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
    if (message.defaultValue !== "") {
      obj.defaultValue = message.defaultValue;
    }
    if (message.ordinalPosition !== 0) {
      obj.ordinalPosition = Math.round(message.ordinalPosition);
    }
    if (message.highestIndexingType !== 0) {
      obj.highestIndexingType = columnSchema_IndexingTypeToJSON(message.highestIndexingType);
    }
    if (message.subcolumns?.length) {
      obj.subcolumns = message.subcolumns.map((e) => ColumnSchema.toJSON(e));
    }
    if (message.lookerColumnSpec !== undefined) {
      obj.lookerColumnSpec = ColumnSchema_LookerColumnSpec.toJSON(message.lookerColumnSpec);
    }
    if (message.rangeElementType !== undefined) {
      obj.rangeElementType = ColumnSchema_FieldElementType.toJSON(message.rangeElementType);
    }
    if (message.gcRule !== "") {
      obj.gcRule = message.gcRule;
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
    message.defaultValue = object.defaultValue ?? "";
    message.ordinalPosition = object.ordinalPosition ?? 0;
    message.highestIndexingType = object.highestIndexingType ?? 0;
    message.subcolumns = object.subcolumns?.map((e) => ColumnSchema.fromPartial(e)) || [];
    message.lookerColumnSpec = (object.lookerColumnSpec !== undefined && object.lookerColumnSpec !== null)
      ? ColumnSchema_LookerColumnSpec.fromPartial(object.lookerColumnSpec)
      : undefined;
    message.rangeElementType = (object.rangeElementType !== undefined && object.rangeElementType !== null)
      ? ColumnSchema_FieldElementType.fromPartial(object.rangeElementType)
      : undefined;
    message.gcRule = object.gcRule ?? "";
    return message;
  },
};

function createBaseColumnSchema_LookerColumnSpec(): ColumnSchema_LookerColumnSpec {
  return { type: 0 };
}

export const ColumnSchema_LookerColumnSpec: MessageFns<ColumnSchema_LookerColumnSpec> = {
  encode(message: ColumnSchema_LookerColumnSpec, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ColumnSchema_LookerColumnSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColumnSchema_LookerColumnSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ColumnSchema_LookerColumnSpec {
    return { type: isSet(object.type) ? columnSchema_LookerColumnSpec_LookerColumnTypeFromJSON(object.type) : 0 };
  },

  toJSON(message: ColumnSchema_LookerColumnSpec): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = columnSchema_LookerColumnSpec_LookerColumnTypeToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<ColumnSchema_LookerColumnSpec>): ColumnSchema_LookerColumnSpec {
    return ColumnSchema_LookerColumnSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ColumnSchema_LookerColumnSpec>): ColumnSchema_LookerColumnSpec {
    const message = createBaseColumnSchema_LookerColumnSpec();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseColumnSchema_FieldElementType(): ColumnSchema_FieldElementType {
  return { type: "" };
}

export const ColumnSchema_FieldElementType: MessageFns<ColumnSchema_FieldElementType> = {
  encode(message: ColumnSchema_FieldElementType, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ColumnSchema_FieldElementType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColumnSchema_FieldElementType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ColumnSchema_FieldElementType {
    return { type: isSet(object.type) ? globalThis.String(object.type) : "" };
  },

  toJSON(message: ColumnSchema_FieldElementType): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    return obj;
  },

  create(base?: DeepPartial<ColumnSchema_FieldElementType>): ColumnSchema_FieldElementType {
    return ColumnSchema_FieldElementType.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ColumnSchema_FieldElementType>): ColumnSchema_FieldElementType {
    const message = createBaseColumnSchema_FieldElementType();
    message.type = object.type ?? "";
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