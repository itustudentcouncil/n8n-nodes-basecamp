// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/datacatalog/v1/gcs_fileset_spec.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SystemTimestamps } from "./timestamps.js";

export const protobufPackage = "google.cloud.datacatalog.v1";

/** Describes a Cloud Storage fileset entry. */
export interface GcsFilesetSpec {
  /**
   * Required. Patterns to identify a set of files in Google Cloud Storage.
   *
   * For more information, see [Wildcard Names]
   * (https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames).
   *
   * Note: Currently, bucket wildcards are not supported.
   *
   * Examples of valid `file_patterns`:
   *
   *  * `gs://bucket_name/dir/*`: matches all files in `bucket_name/dir`
   *                              directory
   *  * `gs://bucket_name/dir/**`: matches all files in `bucket_name/dir`
   *                               and all subdirectories
   *  * `gs://bucket_name/file*`: matches files prefixed by `file` in
   *                              `bucket_name`
   *  * `gs://bucket_name/??.txt`: matches files with two characters followed by
   *                               `.txt` in `bucket_name`
   *  * `gs://bucket_name/[aeiou].txt`: matches files that contain a single
   *                                    vowel character followed by `.txt` in
   *                                    `bucket_name`
   *  * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ...
   *                                  or `m` followed by `.txt` in `bucket_name`
   *  * `gs://bucket_name/a/* /b`: matches all files in `bucket_name` that match
   *                              the `a/* /b` pattern, such as `a/c/b`, `a/d/b`
   *  * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt`
   *
   * You can combine wildcards to match complex sets of files, for example:
   *
   * `gs://bucket_name/[a-m]??.j*g`
   */
  filePatterns: string[];
  /**
   * Output only. Sample files contained in this fileset, not all files
   * contained in this fileset are represented here.
   */
  sampleGcsFileSpecs: GcsFileSpec[];
}

/** Specification of a single file in Cloud Storage. */
export interface GcsFileSpec {
  /** Required. Full file path. Example: `gs://bucket_name/a/b.txt`. */
  filePath: string;
  /**
   * Output only. Creation, modification, and expiration timestamps of a Cloud
   * Storage file.
   */
  gcsTimestamps:
    | SystemTimestamps
    | undefined;
  /** Output only. File size in bytes. */
  sizeBytes: Long;
}

function createBaseGcsFilesetSpec(): GcsFilesetSpec {
  return { filePatterns: [], sampleGcsFileSpecs: [] };
}

export const GcsFilesetSpec: MessageFns<GcsFilesetSpec> = {
  encode(message: GcsFilesetSpec, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.filePatterns) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.sampleGcsFileSpecs) {
      GcsFileSpec.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GcsFilesetSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGcsFilesetSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePatterns.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sampleGcsFileSpecs.push(GcsFileSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GcsFilesetSpec {
    return {
      filePatterns: globalThis.Array.isArray(object?.filePatterns)
        ? object.filePatterns.map((e: any) => globalThis.String(e))
        : [],
      sampleGcsFileSpecs: globalThis.Array.isArray(object?.sampleGcsFileSpecs)
        ? object.sampleGcsFileSpecs.map((e: any) => GcsFileSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GcsFilesetSpec): unknown {
    const obj: any = {};
    if (message.filePatterns?.length) {
      obj.filePatterns = message.filePatterns;
    }
    if (message.sampleGcsFileSpecs?.length) {
      obj.sampleGcsFileSpecs = message.sampleGcsFileSpecs.map((e) => GcsFileSpec.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GcsFilesetSpec>): GcsFilesetSpec {
    return GcsFilesetSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GcsFilesetSpec>): GcsFilesetSpec {
    const message = createBaseGcsFilesetSpec();
    message.filePatterns = object.filePatterns?.map((e) => e) || [];
    message.sampleGcsFileSpecs = object.sampleGcsFileSpecs?.map((e) => GcsFileSpec.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGcsFileSpec(): GcsFileSpec {
  return { filePath: "", gcsTimestamps: undefined, sizeBytes: Long.ZERO };
}

export const GcsFileSpec: MessageFns<GcsFileSpec> = {
  encode(message: GcsFileSpec, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.gcsTimestamps !== undefined) {
      SystemTimestamps.encode(message.gcsTimestamps, writer.uint32(18).fork()).join();
    }
    if (!message.sizeBytes.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.sizeBytes.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GcsFileSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGcsFileSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gcsTimestamps = SystemTimestamps.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sizeBytes = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GcsFileSpec {
    return {
      filePath: isSet(object.filePath) ? globalThis.String(object.filePath) : "",
      gcsTimestamps: isSet(object.gcsTimestamps) ? SystemTimestamps.fromJSON(object.gcsTimestamps) : undefined,
      sizeBytes: isSet(object.sizeBytes) ? Long.fromValue(object.sizeBytes) : Long.ZERO,
    };
  },

  toJSON(message: GcsFileSpec): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.gcsTimestamps !== undefined) {
      obj.gcsTimestamps = SystemTimestamps.toJSON(message.gcsTimestamps);
    }
    if (!message.sizeBytes.equals(Long.ZERO)) {
      obj.sizeBytes = (message.sizeBytes || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<GcsFileSpec>): GcsFileSpec {
    return GcsFileSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GcsFileSpec>): GcsFileSpec {
    const message = createBaseGcsFileSpec();
    message.filePath = object.filePath ?? "";
    message.gcsTimestamps = (object.gcsTimestamps !== undefined && object.gcsTimestamps !== null)
      ? SystemTimestamps.fromPartial(object.gcsTimestamps)
      : undefined;
    message.sizeBytes = (object.sizeBytes !== undefined && object.sizeBytes !== null)
      ? Long.fromValue(object.sizeBytes)
      : Long.ZERO;
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