// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/devtools/resultstore/v2/file.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Int64Value } from "../../../protobuf/wrappers.js";

export const protobufPackage = "google.devtools.resultstore.v2";

/** The metadata for a file or an archive file entry. */
export interface File {
  /**
   * The identifier of the file or archive entry.
   * User-provided, must be unique for the repeated field it is in. When an
   * Append RPC is called with a Files field populated, if a File already exists
   * with this ID, that File will be overwritten with the new File proto.
   */
  uid: string;
  /**
   * The URI of a file.
   * This could also be the URI of an entire archive.
   * Most log data doesn't need to be stored forever, so a ttl is suggested.
   * Note that if you ever move or delete the file at this URI, the link from
   * the server will be broken.
   */
  uri: string;
  /**
   * The length of the file in bytes.  Allows the filesize to be shown in the
   * UI.  Omit if file is still being written or length is not known.  This
   * could also be the length of an entire archive.
   */
  length:
    | Long
    | undefined;
  /**
   * The content-type (aka MIME-type) of the file.  This is sent to the web
   * browser so it knows how to handle the file. (e.g. text/plain, image/jpeg,
   * text/html, etc). For zip archives, use "application/zip".
   */
  contentType: string;
  /**
   * If the above path, length, and content_type are referring to an archive,
   * and you wish to refer to a particular entry within that archive, put the
   * particular archive entry data here.
   */
  archiveEntry:
    | ArchiveEntry
    | undefined;
  /** A url to a content display app/site for this file or archive entry. */
  contentViewer: string;
  /**
   * Whether to hide this file or archive entry in the UI.  Defaults to false.
   * A checkbox lets users see hidden files, but they're hidden by default.
   */
  hidden: boolean;
  /**
   * A short description of what this file or archive entry contains. This
   * description should help someone viewing the list of these files to
   * understand the purpose of this file and what they would want to view it
   * for.
   */
  description: string;
  /** The digest of this file in hexadecimal-like string if known. */
  digest: string;
  /** The algorithm corresponding to the digest if known. */
  hashType: File_HashType;
}

/** If known, the hash function used to compute this digest. */
export enum File_HashType {
  /** HASH_TYPE_UNSPECIFIED - Unknown */
  HASH_TYPE_UNSPECIFIED = 0,
  /** MD5 - MD5 */
  MD5 = 1,
  /** SHA1 - SHA-1 */
  SHA1 = 2,
  /** SHA256 - SHA-256 */
  SHA256 = 3,
  UNRECOGNIZED = -1,
}

export function file_HashTypeFromJSON(object: any): File_HashType {
  switch (object) {
    case 0:
    case "HASH_TYPE_UNSPECIFIED":
      return File_HashType.HASH_TYPE_UNSPECIFIED;
    case 1:
    case "MD5":
      return File_HashType.MD5;
    case 2:
    case "SHA1":
      return File_HashType.SHA1;
    case 3:
    case "SHA256":
      return File_HashType.SHA256;
    case -1:
    case "UNRECOGNIZED":
    default:
      return File_HashType.UNRECOGNIZED;
  }
}

export function file_HashTypeToJSON(object: File_HashType): string {
  switch (object) {
    case File_HashType.HASH_TYPE_UNSPECIFIED:
      return "HASH_TYPE_UNSPECIFIED";
    case File_HashType.MD5:
      return "MD5";
    case File_HashType.SHA1:
      return "SHA1";
    case File_HashType.SHA256:
      return "SHA256";
    case File_HashType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Information specific to an entry in an archive. */
export interface ArchiveEntry {
  /** The relative path of the entry within the archive. */
  path: string;
  /**
   * The uncompressed length of the archive entry in bytes.  Allows the entry
   * size to be shown in the UI.  Omit if the length is not known.
   */
  length:
    | Long
    | undefined;
  /**
   * The content-type (aka MIME-type) of the archive entry. (e.g. text/plain,
   * image/jpeg, text/html, etc). This is sent to the web browser so it knows
   * how to handle the entry.
   */
  contentType: string;
}

function createBaseFile(): File {
  return {
    uid: "",
    uri: "",
    length: undefined,
    contentType: "",
    archiveEntry: undefined,
    contentViewer: "",
    hidden: false,
    description: "",
    digest: "",
    hashType: 0,
  };
}

export const File: MessageFns<File> = {
  encode(message: File, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    if (message.length !== undefined) {
      Int64Value.encode({ value: message.length! }, writer.uint32(26).fork()).join();
    }
    if (message.contentType !== "") {
      writer.uint32(34).string(message.contentType);
    }
    if (message.archiveEntry !== undefined) {
      ArchiveEntry.encode(message.archiveEntry, writer.uint32(42).fork()).join();
    }
    if (message.contentViewer !== "") {
      writer.uint32(50).string(message.contentViewer);
    }
    if (message.hidden !== false) {
      writer.uint32(56).bool(message.hidden);
    }
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.digest !== "") {
      writer.uint32(74).string(message.digest);
    }
    if (message.hashType !== 0) {
      writer.uint32(80).int32(message.hashType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): File {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.length = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contentType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.archiveEntry = ArchiveEntry.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.contentViewer = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.hidden = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.description = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.digest = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.hashType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): File {
    return {
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      length: isSet(object.length) ? Long.fromValue(object.length) : undefined,
      contentType: isSet(object.contentType) ? globalThis.String(object.contentType) : "",
      archiveEntry: isSet(object.archiveEntry) ? ArchiveEntry.fromJSON(object.archiveEntry) : undefined,
      contentViewer: isSet(object.contentViewer) ? globalThis.String(object.contentViewer) : "",
      hidden: isSet(object.hidden) ? globalThis.Boolean(object.hidden) : false,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      digest: isSet(object.digest) ? globalThis.String(object.digest) : "",
      hashType: isSet(object.hashType) ? file_HashTypeFromJSON(object.hashType) : 0,
    };
  },

  toJSON(message: File): unknown {
    const obj: any = {};
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.length !== undefined) {
      obj.length = message.length;
    }
    if (message.contentType !== "") {
      obj.contentType = message.contentType;
    }
    if (message.archiveEntry !== undefined) {
      obj.archiveEntry = ArchiveEntry.toJSON(message.archiveEntry);
    }
    if (message.contentViewer !== "") {
      obj.contentViewer = message.contentViewer;
    }
    if (message.hidden !== false) {
      obj.hidden = message.hidden;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.digest !== "") {
      obj.digest = message.digest;
    }
    if (message.hashType !== 0) {
      obj.hashType = file_HashTypeToJSON(message.hashType);
    }
    return obj;
  },

  create(base?: DeepPartial<File>): File {
    return File.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<File>): File {
    const message = createBaseFile();
    message.uid = object.uid ?? "";
    message.uri = object.uri ?? "";
    message.length = (object.length !== undefined && object.length !== null)
      ? Long.fromValue(object.length)
      : undefined;
    message.contentType = object.contentType ?? "";
    message.archiveEntry = (object.archiveEntry !== undefined && object.archiveEntry !== null)
      ? ArchiveEntry.fromPartial(object.archiveEntry)
      : undefined;
    message.contentViewer = object.contentViewer ?? "";
    message.hidden = object.hidden ?? false;
    message.description = object.description ?? "";
    message.digest = object.digest ?? "";
    message.hashType = object.hashType ?? 0;
    return message;
  },
};

function createBaseArchiveEntry(): ArchiveEntry {
  return { path: "", length: undefined, contentType: "" };
}

export const ArchiveEntry: MessageFns<ArchiveEntry> = {
  encode(message: ArchiveEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.length !== undefined) {
      Int64Value.encode({ value: message.length! }, writer.uint32(18).fork()).join();
    }
    if (message.contentType !== "") {
      writer.uint32(26).string(message.contentType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ArchiveEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArchiveEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.length = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contentType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ArchiveEntry {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      length: isSet(object.length) ? Long.fromValue(object.length) : undefined,
      contentType: isSet(object.contentType) ? globalThis.String(object.contentType) : "",
    };
  },

  toJSON(message: ArchiveEntry): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.length !== undefined) {
      obj.length = message.length;
    }
    if (message.contentType !== "") {
      obj.contentType = message.contentType;
    }
    return obj;
  },

  create(base?: DeepPartial<ArchiveEntry>): ArchiveEntry {
    return ArchiveEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ArchiveEntry>): ArchiveEntry {
    const message = createBaseArchiveEntry();
    message.path = object.path ?? "";
    message.length = (object.length !== undefined && object.length !== null)
      ? Long.fromValue(object.length)
      : undefined;
    message.contentType = object.contentType ?? "";
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