// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/devtools/resultstore/v2/file_set.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { File } from "./file.js";

export const protobufPackage = "google.devtools.resultstore.v2";

/**
 * This resource represents a set of Files and other (nested) FileSets.
 * A FileSet is a node in the graph, and the file_sets field represents the
 * outgoing edges. A resource may reference various nodes in the graph to
 * represent the transitive closure of all files from those nodes.
 * The FileSets must form a directed acyclic graph. The Upload API is unable to
 * enforce that the graph is acyclic at write time, and if cycles are written,
 * it may cause issues at read time.
 *
 * A FileSet may be referenced by other resources in conjunction with Files.
 *
 * Clients should prefer using Files directly under resources. Clients should
 * not use FileSets unless their usecase requires a directed acyclic graph of
 * Files.
 */
export interface FileSet {
  /**
   * The format of this FileSet resource name must be:
   * invocations/${INVOCATION_ID}/fileSets/${url_encode(FILE_SET_ID)}
   */
  name: string;
  /**
   * The resource ID components that identify the file set. They must match the
   * resource name after proper encoding.
   */
  id:
    | FileSet_Id
    | undefined;
  /**
   * List of names of other file sets that are referenced from this one.
   * Each name must point to a file set under the same invocation. The name
   * format must be: invocations/${INVOCATION_ID}/fileSets/${FILE_SET_ID}
   */
  fileSets: string[];
  /**
   * Files that are contained within this file set.
   * The uid field in the file should be unique for the Invocation.
   */
  files: File[];
}

/** The resource ID components that identify the FileSet. */
export interface FileSet_Id {
  /** The Invocation ID. */
  invocationId: string;
  /** The FileSet ID. */
  fileSetId: string;
}

function createBaseFileSet(): FileSet {
  return { name: "", id: undefined, fileSets: [], files: [] };
}

export const FileSet: MessageFns<FileSet> = {
  encode(message: FileSet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== undefined) {
      FileSet_Id.encode(message.id, writer.uint32(18).fork()).join();
    }
    for (const v of message.fileSets) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.files) {
      File.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FileSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileSet();
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

          message.id = FileSet_Id.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileSets.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.files.push(File.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileSet {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      id: isSet(object.id) ? FileSet_Id.fromJSON(object.id) : undefined,
      fileSets: globalThis.Array.isArray(object?.fileSets) ? object.fileSets.map((e: any) => globalThis.String(e)) : [],
      files: globalThis.Array.isArray(object?.files) ? object.files.map((e: any) => File.fromJSON(e)) : [],
    };
  },

  toJSON(message: FileSet): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.id !== undefined) {
      obj.id = FileSet_Id.toJSON(message.id);
    }
    if (message.fileSets?.length) {
      obj.fileSets = message.fileSets;
    }
    if (message.files?.length) {
      obj.files = message.files.map((e) => File.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<FileSet>): FileSet {
    return FileSet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FileSet>): FileSet {
    const message = createBaseFileSet();
    message.name = object.name ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? FileSet_Id.fromPartial(object.id) : undefined;
    message.fileSets = object.fileSets?.map((e) => e) || [];
    message.files = object.files?.map((e) => File.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFileSet_Id(): FileSet_Id {
  return { invocationId: "", fileSetId: "" };
}

export const FileSet_Id: MessageFns<FileSet_Id> = {
  encode(message: FileSet_Id, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.invocationId !== "") {
      writer.uint32(10).string(message.invocationId);
    }
    if (message.fileSetId !== "") {
      writer.uint32(18).string(message.fileSetId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FileSet_Id {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileSet_Id();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.invocationId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fileSetId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileSet_Id {
    return {
      invocationId: isSet(object.invocationId) ? globalThis.String(object.invocationId) : "",
      fileSetId: isSet(object.fileSetId) ? globalThis.String(object.fileSetId) : "",
    };
  },

  toJSON(message: FileSet_Id): unknown {
    const obj: any = {};
    if (message.invocationId !== "") {
      obj.invocationId = message.invocationId;
    }
    if (message.fileSetId !== "") {
      obj.fileSetId = message.fileSetId;
    }
    return obj;
  },

  create(base?: DeepPartial<FileSet_Id>): FileSet_Id {
    return FileSet_Id.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FileSet_Id>): FileSet_Id {
    const message = createBaseFileSet_Id();
    message.invocationId = object.invocationId ?? "";
    message.fileSetId = object.fileSetId ?? "";
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
