// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/datacatalog/v1/dump_content.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Entry } from "./datacatalog.js";
import { Tag } from "./tags.js";

export const protobufPackage = "google.cloud.datacatalog.v1";

/**
 * Wrapper containing Entry and information about Tags
 * that should and should not be attached to it.
 */
export interface TaggedEntry {
  /** Non-encrypted Data Catalog v1 Entry. */
  v1Entry?:
    | Entry
    | undefined;
  /**
   * Optional. Tags that should be ingested into the Data Catalog.
   * Caller should populate template name, column and fields.
   */
  presentTags: Tag[];
  /**
   * Optional. Tags that should be deleted from the Data Catalog.
   * Caller should populate template name and column only.
   */
  absentTags: Tag[];
}

/** Wrapper for any item that can be contained in the dump. */
export interface DumpItem {
  /** Entry and its tags. */
  taggedEntry?: TaggedEntry | undefined;
}

function createBaseTaggedEntry(): TaggedEntry {
  return { v1Entry: undefined, presentTags: [], absentTags: [] };
}

export const TaggedEntry: MessageFns<TaggedEntry> = {
  encode(message: TaggedEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.v1Entry !== undefined) {
      Entry.encode(message.v1Entry, writer.uint32(10).fork()).join();
    }
    for (const v of message.presentTags) {
      Tag.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.absentTags) {
      Tag.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TaggedEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaggedEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.v1Entry = Entry.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.presentTags.push(Tag.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.absentTags.push(Tag.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaggedEntry {
    return {
      v1Entry: isSet(object.v1Entry) ? Entry.fromJSON(object.v1Entry) : undefined,
      presentTags: globalThis.Array.isArray(object?.presentTags)
        ? object.presentTags.map((e: any) => Tag.fromJSON(e))
        : [],
      absentTags: globalThis.Array.isArray(object?.absentTags)
        ? object.absentTags.map((e: any) => Tag.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TaggedEntry): unknown {
    const obj: any = {};
    if (message.v1Entry !== undefined) {
      obj.v1Entry = Entry.toJSON(message.v1Entry);
    }
    if (message.presentTags?.length) {
      obj.presentTags = message.presentTags.map((e) => Tag.toJSON(e));
    }
    if (message.absentTags?.length) {
      obj.absentTags = message.absentTags.map((e) => Tag.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TaggedEntry>): TaggedEntry {
    return TaggedEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TaggedEntry>): TaggedEntry {
    const message = createBaseTaggedEntry();
    message.v1Entry = (object.v1Entry !== undefined && object.v1Entry !== null)
      ? Entry.fromPartial(object.v1Entry)
      : undefined;
    message.presentTags = object.presentTags?.map((e) => Tag.fromPartial(e)) || [];
    message.absentTags = object.absentTags?.map((e) => Tag.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDumpItem(): DumpItem {
  return { taggedEntry: undefined };
}

export const DumpItem: MessageFns<DumpItem> = {
  encode(message: DumpItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.taggedEntry !== undefined) {
      TaggedEntry.encode(message.taggedEntry, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DumpItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDumpItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.taggedEntry = TaggedEntry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DumpItem {
    return { taggedEntry: isSet(object.taggedEntry) ? TaggedEntry.fromJSON(object.taggedEntry) : undefined };
  },

  toJSON(message: DumpItem): unknown {
    const obj: any = {};
    if (message.taggedEntry !== undefined) {
      obj.taggedEntry = TaggedEntry.toJSON(message.taggedEntry);
    }
    return obj;
  },

  create(base?: DeepPartial<DumpItem>): DumpItem {
    return DumpItem.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DumpItem>): DumpItem {
    const message = createBaseDumpItem();
    message.taggedEntry = (object.taggedEntry !== undefined && object.taggedEntry !== null)
      ? TaggedEntry.fromPartial(object.taggedEntry)
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