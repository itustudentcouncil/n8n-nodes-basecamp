// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/firestore/admin/v1beta1/index.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.firestore.admin.v1beta1";

/** A field of an index. */
export interface IndexField {
  /**
   * The path of the field. Must match the field path specification described
   * by [google.firestore.v1beta1.Document.fields][fields].
   * Special field path `__name__` may be used by itself or at the end of a
   * path. `__type__` may be used only at the end of path.
   */
  fieldPath: string;
  /** The field's mode. */
  mode: IndexField_Mode;
}

/** The mode determines how a field is indexed. */
export enum IndexField_Mode {
  /** MODE_UNSPECIFIED - The mode is unspecified. */
  MODE_UNSPECIFIED = 0,
  /**
   * ASCENDING - The field's values are indexed so as to support sequencing in
   * ascending order and also query by <, >, <=, >=, and =.
   */
  ASCENDING = 2,
  /**
   * DESCENDING - The field's values are indexed so as to support sequencing in
   * descending order and also query by <, >, <=, >=, and =.
   */
  DESCENDING = 3,
  /**
   * ARRAY_CONTAINS - The field's array values are indexed so as to support membership using
   * ARRAY_CONTAINS queries.
   */
  ARRAY_CONTAINS = 4,
  UNRECOGNIZED = -1,
}

export function indexField_ModeFromJSON(object: any): IndexField_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return IndexField_Mode.MODE_UNSPECIFIED;
    case 2:
    case "ASCENDING":
      return IndexField_Mode.ASCENDING;
    case 3:
    case "DESCENDING":
      return IndexField_Mode.DESCENDING;
    case 4:
    case "ARRAY_CONTAINS":
      return IndexField_Mode.ARRAY_CONTAINS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IndexField_Mode.UNRECOGNIZED;
  }
}

export function indexField_ModeToJSON(object: IndexField_Mode): string {
  switch (object) {
    case IndexField_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case IndexField_Mode.ASCENDING:
      return "ASCENDING";
    case IndexField_Mode.DESCENDING:
      return "DESCENDING";
    case IndexField_Mode.ARRAY_CONTAINS:
      return "ARRAY_CONTAINS";
    case IndexField_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** An index definition. */
export interface Index {
  /**
   * The resource name of the index.
   * Output only.
   */
  name: string;
  /** The collection ID to which this index applies. Required. */
  collectionId: string;
  /** The fields to index. */
  fields: IndexField[];
  /**
   * The state of the index.
   * Output only.
   */
  state: Index_State;
}

/**
 * The state of an index. During index creation, an index will be in the
 * `CREATING` state. If the index is created successfully, it will transition
 * to the `READY` state. If the index is not able to be created, it will
 * transition to the `ERROR` state.
 */
export enum Index_State {
  /** STATE_UNSPECIFIED - The state is unspecified. */
  STATE_UNSPECIFIED = 0,
  /**
   * CREATING - The index is being created.
   * There is an active long-running operation for the index.
   * The index is updated when writing a document.
   * Some index data may exist.
   */
  CREATING = 3,
  /**
   * READY - The index is ready to be used.
   * The index is updated when writing a document.
   * The index is fully populated from all stored documents it applies to.
   */
  READY = 2,
  /**
   * ERROR - The index was being created, but something went wrong.
   * There is no active long-running operation for the index,
   * and the most recently finished long-running operation failed.
   * The index is not updated when writing a document.
   * Some index data may exist.
   */
  ERROR = 5,
  UNRECOGNIZED = -1,
}

export function index_StateFromJSON(object: any): Index_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Index_State.STATE_UNSPECIFIED;
    case 3:
    case "CREATING":
      return Index_State.CREATING;
    case 2:
    case "READY":
      return Index_State.READY;
    case 5:
    case "ERROR":
      return Index_State.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Index_State.UNRECOGNIZED;
  }
}

export function index_StateToJSON(object: Index_State): string {
  switch (object) {
    case Index_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Index_State.CREATING:
      return "CREATING";
    case Index_State.READY:
      return "READY";
    case Index_State.ERROR:
      return "ERROR";
    case Index_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseIndexField(): IndexField {
  return { fieldPath: "", mode: 0 };
}

export const IndexField: MessageFns<IndexField> = {
  encode(message: IndexField, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fieldPath !== "") {
      writer.uint32(10).string(message.fieldPath);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): IndexField {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fieldPath = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexField {
    return {
      fieldPath: isSet(object.fieldPath) ? globalThis.String(object.fieldPath) : "",
      mode: isSet(object.mode) ? indexField_ModeFromJSON(object.mode) : 0,
    };
  },

  toJSON(message: IndexField): unknown {
    const obj: any = {};
    if (message.fieldPath !== "") {
      obj.fieldPath = message.fieldPath;
    }
    if (message.mode !== 0) {
      obj.mode = indexField_ModeToJSON(message.mode);
    }
    return obj;
  },

  create(base?: DeepPartial<IndexField>): IndexField {
    return IndexField.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IndexField>): IndexField {
    const message = createBaseIndexField();
    message.fieldPath = object.fieldPath ?? "";
    message.mode = object.mode ?? 0;
    return message;
  },
};

function createBaseIndex(): Index {
  return { name: "", collectionId: "", fields: [], state: 0 };
}

export const Index: MessageFns<Index> = {
  encode(message: Index, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    for (const v of message.fields) {
      IndexField.encode(v!, writer.uint32(26).fork()).join();
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Index {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndex();
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

          message.collectionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fields.push(IndexField.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Index {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      collectionId: isSet(object.collectionId) ? globalThis.String(object.collectionId) : "",
      fields: globalThis.Array.isArray(object?.fields) ? object.fields.map((e: any) => IndexField.fromJSON(e)) : [],
      state: isSet(object.state) ? index_StateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: Index): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.collectionId !== "") {
      obj.collectionId = message.collectionId;
    }
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => IndexField.toJSON(e));
    }
    if (message.state !== 0) {
      obj.state = index_StateToJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<Index>): Index {
    return Index.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Index>): Index {
    const message = createBaseIndex();
    message.name = object.name ?? "";
    message.collectionId = object.collectionId ?? "";
    message.fields = object.fields?.map((e) => IndexField.fromPartial(e)) || [];
    message.state = object.state ?? 0;
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
