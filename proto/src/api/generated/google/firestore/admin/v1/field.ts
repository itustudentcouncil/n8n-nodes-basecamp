// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/firestore/admin/v1/field.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Index } from "./index.js";

export const protobufPackage = "google.firestore.admin.v1";

/**
 * Represents a single field in the database.
 *
 * Fields are grouped by their "Collection Group", which represent all
 * collections in the database with the same ID.
 */
export interface Field {
  /**
   * Required. A field name of the form:
   * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`
   *
   * A field path can be a simple field name, e.g. `address` or a path to fields
   * within `map_value` , e.g. `address.city`,
   * or a special field path. The only valid special field is `*`, which
   * represents any field.
   *
   * Field paths can be quoted using `` ` `` (backtick). The only character that
   * must be escaped within a quoted field path is the backtick character
   * itself, escaped using a backslash. Special characters in field paths that
   * must be quoted include: `*`, `.`,
   * `` ` `` (backtick), `[`, `]`, as well as any ascii symbolic characters.
   *
   * Examples:
   * `` `address.city` `` represents a field named `address.city`, not the map
   * key `city` in the field `address`. `` `*` `` represents a field named `*`,
   * not any field.
   *
   * A special `Field` contains the default indexing settings for all fields.
   * This field's resource name is:
   * `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`
   * Indexes defined on this `Field` will be applied to all fields which do not
   * have their own `Field` index configuration.
   */
  name: string;
  /**
   * The index configuration for this field. If unset, field indexing will
   * revert to the configuration defined by the `ancestor_field`. To
   * explicitly remove all indexes for this field, specify an index config
   * with an empty list of indexes.
   */
  indexConfig:
    | Field_IndexConfig
    | undefined;
  /**
   * The TTL configuration for this `Field`.
   * Setting or unsetting this will enable or disable the TTL for
   * documents that have this `Field`.
   */
  ttlConfig: Field_TtlConfig | undefined;
}

/** The index configuration for this field. */
export interface Field_IndexConfig {
  /** The indexes supported for this field. */
  indexes: Index[];
  /**
   * Output only. When true, the `Field`'s index configuration is set from the
   * configuration specified by the `ancestor_field`.
   * When false, the `Field`'s index configuration is defined explicitly.
   */
  usesAncestorConfig: boolean;
  /**
   * Output only. Specifies the resource name of the `Field` from which this
   * field's index configuration is set (when `uses_ancestor_config` is true),
   * or from which it *would* be set if this field had no index configuration
   * (when `uses_ancestor_config` is false).
   */
  ancestorField: string;
  /**
   * Output only
   * When true, the `Field`'s index configuration is in the process of being
   * reverted. Once complete, the index config will transition to the same
   * state as the field specified by `ancestor_field`, at which point
   * `uses_ancestor_config` will be `true` and `reverting` will be `false`.
   */
  reverting: boolean;
}

/**
 * The TTL (time-to-live) configuration for documents that have this `Field`
 * set.
 *
 * Storing a timestamp value into a TTL-enabled field will be treated as
 * the document's absolute expiration time. Timestamp values in the past
 * indicate that the document is eligible for immediate expiration. Using any
 * other data type or leaving the field absent will disable expiration for the
 * individual document.
 */
export interface Field_TtlConfig {
  /** Output only. The state of the TTL configuration. */
  state: Field_TtlConfig_State;
}

/** The state of applying the TTL configuration to all documents. */
export enum Field_TtlConfig_State {
  /** STATE_UNSPECIFIED - The state is unspecified or unknown. */
  STATE_UNSPECIFIED = 0,
  /**
   * CREATING - The TTL is being applied. There is an active long-running operation to
   * track the change. Newly written documents will have TTLs applied as
   * requested. Requested TTLs on existing documents are still being
   * processed. When TTLs on all existing documents have been processed, the
   * state will move to 'ACTIVE'.
   */
  CREATING = 1,
  /** ACTIVE - The TTL is active for all documents. */
  ACTIVE = 2,
  /**
   * NEEDS_REPAIR - The TTL configuration could not be enabled for all existing documents.
   * Newly written documents will continue to have their TTL applied.
   * The LRO returned when last attempting to enable TTL for this `Field`
   * has failed, and may have more details.
   */
  NEEDS_REPAIR = 3,
  UNRECOGNIZED = -1,
}

export function field_TtlConfig_StateFromJSON(object: any): Field_TtlConfig_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Field_TtlConfig_State.STATE_UNSPECIFIED;
    case 1:
    case "CREATING":
      return Field_TtlConfig_State.CREATING;
    case 2:
    case "ACTIVE":
      return Field_TtlConfig_State.ACTIVE;
    case 3:
    case "NEEDS_REPAIR":
      return Field_TtlConfig_State.NEEDS_REPAIR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Field_TtlConfig_State.UNRECOGNIZED;
  }
}

export function field_TtlConfig_StateToJSON(object: Field_TtlConfig_State): string {
  switch (object) {
    case Field_TtlConfig_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Field_TtlConfig_State.CREATING:
      return "CREATING";
    case Field_TtlConfig_State.ACTIVE:
      return "ACTIVE";
    case Field_TtlConfig_State.NEEDS_REPAIR:
      return "NEEDS_REPAIR";
    case Field_TtlConfig_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseField(): Field {
  return { name: "", indexConfig: undefined, ttlConfig: undefined };
}

export const Field: MessageFns<Field> = {
  encode(message: Field, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.indexConfig !== undefined) {
      Field_IndexConfig.encode(message.indexConfig, writer.uint32(18).fork()).join();
    }
    if (message.ttlConfig !== undefined) {
      Field_TtlConfig.encode(message.ttlConfig, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Field {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseField();
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

          message.indexConfig = Field_IndexConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ttlConfig = Field_TtlConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Field {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      indexConfig: isSet(object.indexConfig) ? Field_IndexConfig.fromJSON(object.indexConfig) : undefined,
      ttlConfig: isSet(object.ttlConfig) ? Field_TtlConfig.fromJSON(object.ttlConfig) : undefined,
    };
  },

  toJSON(message: Field): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.indexConfig !== undefined) {
      obj.indexConfig = Field_IndexConfig.toJSON(message.indexConfig);
    }
    if (message.ttlConfig !== undefined) {
      obj.ttlConfig = Field_TtlConfig.toJSON(message.ttlConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<Field>): Field {
    return Field.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Field>): Field {
    const message = createBaseField();
    message.name = object.name ?? "";
    message.indexConfig = (object.indexConfig !== undefined && object.indexConfig !== null)
      ? Field_IndexConfig.fromPartial(object.indexConfig)
      : undefined;
    message.ttlConfig = (object.ttlConfig !== undefined && object.ttlConfig !== null)
      ? Field_TtlConfig.fromPartial(object.ttlConfig)
      : undefined;
    return message;
  },
};

function createBaseField_IndexConfig(): Field_IndexConfig {
  return { indexes: [], usesAncestorConfig: false, ancestorField: "", reverting: false };
}

export const Field_IndexConfig: MessageFns<Field_IndexConfig> = {
  encode(message: Field_IndexConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.indexes) {
      Index.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.usesAncestorConfig !== false) {
      writer.uint32(16).bool(message.usesAncestorConfig);
    }
    if (message.ancestorField !== "") {
      writer.uint32(26).string(message.ancestorField);
    }
    if (message.reverting !== false) {
      writer.uint32(32).bool(message.reverting);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Field_IndexConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseField_IndexConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.indexes.push(Index.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.usesAncestorConfig = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ancestorField = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.reverting = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Field_IndexConfig {
    return {
      indexes: globalThis.Array.isArray(object?.indexes) ? object.indexes.map((e: any) => Index.fromJSON(e)) : [],
      usesAncestorConfig: isSet(object.usesAncestorConfig) ? globalThis.Boolean(object.usesAncestorConfig) : false,
      ancestorField: isSet(object.ancestorField) ? globalThis.String(object.ancestorField) : "",
      reverting: isSet(object.reverting) ? globalThis.Boolean(object.reverting) : false,
    };
  },

  toJSON(message: Field_IndexConfig): unknown {
    const obj: any = {};
    if (message.indexes?.length) {
      obj.indexes = message.indexes.map((e) => Index.toJSON(e));
    }
    if (message.usesAncestorConfig !== false) {
      obj.usesAncestorConfig = message.usesAncestorConfig;
    }
    if (message.ancestorField !== "") {
      obj.ancestorField = message.ancestorField;
    }
    if (message.reverting !== false) {
      obj.reverting = message.reverting;
    }
    return obj;
  },

  create(base?: DeepPartial<Field_IndexConfig>): Field_IndexConfig {
    return Field_IndexConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Field_IndexConfig>): Field_IndexConfig {
    const message = createBaseField_IndexConfig();
    message.indexes = object.indexes?.map((e) => Index.fromPartial(e)) || [];
    message.usesAncestorConfig = object.usesAncestorConfig ?? false;
    message.ancestorField = object.ancestorField ?? "";
    message.reverting = object.reverting ?? false;
    return message;
  },
};

function createBaseField_TtlConfig(): Field_TtlConfig {
  return { state: 0 };
}

export const Field_TtlConfig: MessageFns<Field_TtlConfig> = {
  encode(message: Field_TtlConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Field_TtlConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseField_TtlConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): Field_TtlConfig {
    return { state: isSet(object.state) ? field_TtlConfig_StateFromJSON(object.state) : 0 };
  },

  toJSON(message: Field_TtlConfig): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = field_TtlConfig_StateToJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<Field_TtlConfig>): Field_TtlConfig {
    return Field_TtlConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Field_TtlConfig>): Field_TtlConfig {
    const message = createBaseField_TtlConfig();
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