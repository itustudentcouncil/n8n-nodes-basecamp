// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/automl/v1beta1/data_types.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.automl.v1beta1";

/**
 * `TypeCode` is used as a part of
 * [DataType][google.cloud.automl.v1beta1.DataType].
 */
export enum TypeCode {
  /** TYPE_CODE_UNSPECIFIED - Not specified. Should not be used. */
  TYPE_CODE_UNSPECIFIED = 0,
  /**
   * FLOAT64 - Encoded as `number`, or the strings `"NaN"`, `"Infinity"`, or
   * `"-Infinity"`.
   */
  FLOAT64 = 3,
  /**
   * TIMESTAMP - Must be between 0AD and 9999AD. Encoded as `string` according to
   * [time_format][google.cloud.automl.v1beta1.DataType.time_format], or, if
   * that format is not set, then in RFC 3339 `date-time` format, where
   * `time-offset` = `"Z"` (e.g. 1985-04-12T23:20:50.52Z).
   */
  TIMESTAMP = 4,
  /** STRING - Encoded as `string`. */
  STRING = 6,
  /**
   * ARRAY - Encoded as `list`, where the list elements are represented according to
   *
   * [list_element_type][google.cloud.automl.v1beta1.DataType.list_element_type].
   */
  ARRAY = 8,
  /**
   * STRUCT - Encoded as `struct`, where field values are represented according to
   * [struct_type][google.cloud.automl.v1beta1.DataType.struct_type].
   */
  STRUCT = 9,
  /**
   * CATEGORY - Values of this type are not further understood by AutoML,
   * e.g. AutoML is unable to tell the order of values (as it could with
   * FLOAT64), or is unable to say if one value contains another (as it
   * could with STRING).
   * Encoded as `string` (bytes should be base64-encoded, as described in RFC
   * 4648, section 4).
   */
  CATEGORY = 10,
  UNRECOGNIZED = -1,
}

export function typeCodeFromJSON(object: any): TypeCode {
  switch (object) {
    case 0:
    case "TYPE_CODE_UNSPECIFIED":
      return TypeCode.TYPE_CODE_UNSPECIFIED;
    case 3:
    case "FLOAT64":
      return TypeCode.FLOAT64;
    case 4:
    case "TIMESTAMP":
      return TypeCode.TIMESTAMP;
    case 6:
    case "STRING":
      return TypeCode.STRING;
    case 8:
    case "ARRAY":
      return TypeCode.ARRAY;
    case 9:
    case "STRUCT":
      return TypeCode.STRUCT;
    case 10:
    case "CATEGORY":
      return TypeCode.CATEGORY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TypeCode.UNRECOGNIZED;
  }
}

export function typeCodeToJSON(object: TypeCode): string {
  switch (object) {
    case TypeCode.TYPE_CODE_UNSPECIFIED:
      return "TYPE_CODE_UNSPECIFIED";
    case TypeCode.FLOAT64:
      return "FLOAT64";
    case TypeCode.TIMESTAMP:
      return "TIMESTAMP";
    case TypeCode.STRING:
      return "STRING";
    case TypeCode.ARRAY:
      return "ARRAY";
    case TypeCode.STRUCT:
      return "STRUCT";
    case TypeCode.CATEGORY:
      return "CATEGORY";
    case TypeCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Indicated the type of data that can be stored in a structured data entity
 * (e.g. a table).
 */
export interface DataType {
  /**
   * If [type_code][google.cloud.automl.v1beta1.DataType.type_code] == [ARRAY][google.cloud.automl.v1beta1.TypeCode.ARRAY],
   * then `list_element_type` is the type of the elements.
   */
  listElementType?:
    | DataType
    | undefined;
  /**
   * If [type_code][google.cloud.automl.v1beta1.DataType.type_code] == [STRUCT][google.cloud.automl.v1beta1.TypeCode.STRUCT], then `struct_type`
   * provides type information for the struct's fields.
   */
  structType?:
    | StructType
    | undefined;
  /**
   * If [type_code][google.cloud.automl.v1beta1.DataType.type_code] == [TIMESTAMP][google.cloud.automl.v1beta1.TypeCode.TIMESTAMP]
   * then `time_format` provides the format in which that time field is
   * expressed. The time_format must either be one of:
   * * `UNIX_SECONDS`
   * * `UNIX_MILLISECONDS`
   * * `UNIX_MICROSECONDS`
   * * `UNIX_NANOSECONDS`
   * (for respectively number of seconds, milliseconds, microseconds and
   * nanoseconds since start of the Unix epoch);
   * or be written in `strftime` syntax. If time_format is not set, then the
   * default format as described on the type_code is used.
   */
  timeFormat?:
    | string
    | undefined;
  /** Required. The [TypeCode][google.cloud.automl.v1beta1.TypeCode] for this type. */
  typeCode: TypeCode;
  /**
   * If true, this DataType can also be `NULL`. In .CSV files `NULL` value is
   * expressed as an empty string.
   */
  nullable: boolean;
}

/** `StructType` defines the DataType-s of a [STRUCT][google.cloud.automl.v1beta1.TypeCode.STRUCT] type. */
export interface StructType {
  /**
   * Unordered map of struct field names to their data types.
   * Fields cannot be added or removed via Update. Their names and
   * data types are still mutable.
   */
  fields: { [key: string]: DataType };
}

export interface StructType_FieldsEntry {
  key: string;
  value: DataType | undefined;
}

function createBaseDataType(): DataType {
  return { listElementType: undefined, structType: undefined, timeFormat: undefined, typeCode: 0, nullable: false };
}

export const DataType: MessageFns<DataType> = {
  encode(message: DataType, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.listElementType !== undefined) {
      DataType.encode(message.listElementType, writer.uint32(18).fork()).join();
    }
    if (message.structType !== undefined) {
      StructType.encode(message.structType, writer.uint32(26).fork()).join();
    }
    if (message.timeFormat !== undefined) {
      writer.uint32(42).string(message.timeFormat);
    }
    if (message.typeCode !== 0) {
      writer.uint32(8).int32(message.typeCode);
    }
    if (message.nullable !== false) {
      writer.uint32(32).bool(message.nullable);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DataType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.listElementType = DataType.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.structType = StructType.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.timeFormat = reader.string();
          continue;
        case 1:
          if (tag !== 8) {
            break;
          }

          message.typeCode = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nullable = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataType {
    return {
      listElementType: isSet(object.listElementType) ? DataType.fromJSON(object.listElementType) : undefined,
      structType: isSet(object.structType) ? StructType.fromJSON(object.structType) : undefined,
      timeFormat: isSet(object.timeFormat) ? globalThis.String(object.timeFormat) : undefined,
      typeCode: isSet(object.typeCode) ? typeCodeFromJSON(object.typeCode) : 0,
      nullable: isSet(object.nullable) ? globalThis.Boolean(object.nullable) : false,
    };
  },

  toJSON(message: DataType): unknown {
    const obj: any = {};
    if (message.listElementType !== undefined) {
      obj.listElementType = DataType.toJSON(message.listElementType);
    }
    if (message.structType !== undefined) {
      obj.structType = StructType.toJSON(message.structType);
    }
    if (message.timeFormat !== undefined) {
      obj.timeFormat = message.timeFormat;
    }
    if (message.typeCode !== 0) {
      obj.typeCode = typeCodeToJSON(message.typeCode);
    }
    if (message.nullable !== false) {
      obj.nullable = message.nullable;
    }
    return obj;
  },

  create(base?: DeepPartial<DataType>): DataType {
    return DataType.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataType>): DataType {
    const message = createBaseDataType();
    message.listElementType = (object.listElementType !== undefined && object.listElementType !== null)
      ? DataType.fromPartial(object.listElementType)
      : undefined;
    message.structType = (object.structType !== undefined && object.structType !== null)
      ? StructType.fromPartial(object.structType)
      : undefined;
    message.timeFormat = object.timeFormat ?? undefined;
    message.typeCode = object.typeCode ?? 0;
    message.nullable = object.nullable ?? false;
    return message;
  },
};

function createBaseStructType(): StructType {
  return { fields: {} };
}

export const StructType: MessageFns<StructType> = {
  encode(message: StructType, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.fields).forEach(([key, value]) => {
      StructType_FieldsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StructType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStructType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = StructType_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StructType {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{ [key: string]: DataType }>((acc, [key, value]) => {
          acc[key] = DataType.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: StructType): unknown {
    const obj: any = {};
    if (message.fields) {
      const entries = Object.entries(message.fields);
      if (entries.length > 0) {
        obj.fields = {};
        entries.forEach(([k, v]) => {
          obj.fields[k] = DataType.toJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<StructType>): StructType {
    return StructType.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StructType>): StructType {
    const message = createBaseStructType();
    message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: DataType }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = DataType.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseStructType_FieldsEntry(): StructType_FieldsEntry {
  return { key: "", value: undefined };
}

export const StructType_FieldsEntry: MessageFns<StructType_FieldsEntry> = {
  encode(message: StructType_FieldsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      DataType.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StructType_FieldsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStructType_FieldsEntry();
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
          if (tag !== 18) {
            break;
          }

          message.value = DataType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StructType_FieldsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? DataType.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: StructType_FieldsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = DataType.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<StructType_FieldsEntry>): StructType_FieldsEntry {
    return StructType_FieldsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StructType_FieldsEntry>): StructType_FieldsEntry {
    const message = createBaseStructType_FieldsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? DataType.fromPartial(object.value)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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