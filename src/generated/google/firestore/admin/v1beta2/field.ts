// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/firestore/admin/v1beta2/field.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Index } from "./index.js";

export const protobufPackage = "google.firestore.admin.v1beta2";

/**
 * Represents a single field in the database.
 *
 * Fields are grouped by their "Collection Group", which represent all
 * collections in the database with the same id.
 */
export interface Field {
  /**
   * A field name of the form
   * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`
   *
   * A field path may be a simple field name, e.g. `address` or a path to fields
   * within map_value , e.g. `address.city`,
   * or a special field path. The only valid special field is `*`, which
   * represents any field.
   *
   * Field paths may be quoted using ` (backtick). The only character that needs
   * to be escaped within a quoted field path is the backtick character itself,
   * escaped using a backslash. Special characters in field paths that
   * must be quoted include: `*`, `.`,
   * ``` (backtick), `[`, `]`, as well as any ascii symbolic characters.
   *
   * Examples:
   * (Note: Comments here are written in markdown syntax, so there is an
   *  additional layer of backticks to represent a code block)
   * `\`address.city\`` represents a field named `address.city`, not the map key
   * `city` in the field `address`.
   * `\`*\`` represents a field named `*`, not any field.
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
  indexConfig: Field_IndexConfig | undefined;
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
   * Output only. Specifies the resource name of the `Field` from which this field's
   * index configuration is set (when `uses_ancestor_config` is true),
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

function createBaseField(): Field {
  return { name: "", indexConfig: undefined };
}

export const Field: MessageFns<Field> = {
  encode(message: Field, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.indexConfig !== undefined) {
      Field_IndexConfig.encode(message.indexConfig, writer.uint32(18).fork()).join();
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