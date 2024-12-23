// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ai/generativelanguage/v1beta/file.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../protobuf/duration.js";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { Status } from "../../../rpc/status.js";

export const protobufPackage = "google.ai.generativelanguage.v1beta";

/** A file uploaded to the API. */
export interface File {
  /** Output only. Metadata for a video. */
  videoMetadata?:
    | VideoMetadata
    | undefined;
  /**
   * Immutable. Identifier. The `File` resource name. The ID (name excluding the
   * "files/" prefix) can contain up to 40 characters that are lowercase
   * alphanumeric or dashes (-). The ID cannot start or end with a dash. If the
   * name is empty on create, a unique name will be generated. Example:
   * `files/123-456`
   */
  name: string;
  /**
   * Optional. The human-readable display name for the `File`. The display name
   * must be no more than 512 characters in length, including spaces. Example:
   * "Welcome Image"
   */
  displayName: string;
  /** Output only. MIME type of the file. */
  mimeType: string;
  /** Output only. Size of the file in bytes. */
  sizeBytes: Long;
  /** Output only. The timestamp of when the `File` was created. */
  createTime:
    | Date
    | undefined;
  /** Output only. The timestamp of when the `File` was last updated. */
  updateTime:
    | Date
    | undefined;
  /**
   * Output only. The timestamp of when the `File` will be deleted. Only set if
   * the `File` is scheduled to expire.
   */
  expirationTime:
    | Date
    | undefined;
  /** Output only. SHA-256 hash of the uploaded bytes. */
  sha256Hash: Buffer;
  /** Output only. The uri of the `File`. */
  uri: string;
  /** Output only. Processing state of the File. */
  state: File_State;
  /** Output only. Error status if File processing failed. */
  error: Status | undefined;
}

/** States for the lifecycle of a File. */
export enum File_State {
  /** STATE_UNSPECIFIED - The default value. This value is used if the state is omitted. */
  STATE_UNSPECIFIED = 0,
  /** PROCESSING - File is being processed and cannot be used for inference yet. */
  PROCESSING = 1,
  /** ACTIVE - File is processed and available for inference. */
  ACTIVE = 2,
  /** FAILED - File failed processing. */
  FAILED = 10,
  UNRECOGNIZED = -1,
}

export function file_StateFromJSON(object: any): File_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return File_State.STATE_UNSPECIFIED;
    case 1:
    case "PROCESSING":
      return File_State.PROCESSING;
    case 2:
    case "ACTIVE":
      return File_State.ACTIVE;
    case 10:
    case "FAILED":
      return File_State.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return File_State.UNRECOGNIZED;
  }
}

export function file_StateToJSON(object: File_State): string {
  switch (object) {
    case File_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case File_State.PROCESSING:
      return "PROCESSING";
    case File_State.ACTIVE:
      return "ACTIVE";
    case File_State.FAILED:
      return "FAILED";
    case File_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Metadata for a video `File`. */
export interface VideoMetadata {
  /** Duration of the video. */
  videoDuration: Duration | undefined;
}

function createBaseFile(): File {
  return {
    videoMetadata: undefined,
    name: "",
    displayName: "",
    mimeType: "",
    sizeBytes: Long.ZERO,
    createTime: undefined,
    updateTime: undefined,
    expirationTime: undefined,
    sha256Hash: Buffer.alloc(0),
    uri: "",
    state: 0,
    error: undefined,
  };
}

export const File: MessageFns<File> = {
  encode(message: File, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.videoMetadata !== undefined) {
      VideoMetadata.encode(message.videoMetadata, writer.uint32(98).fork()).join();
    }
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.mimeType !== "") {
      writer.uint32(26).string(message.mimeType);
    }
    if (!message.sizeBytes.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.sizeBytes.toString());
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).join();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(58).fork()).join();
    }
    if (message.sha256Hash.length !== 0) {
      writer.uint32(66).bytes(message.sha256Hash);
    }
    if (message.uri !== "") {
      writer.uint32(74).string(message.uri);
    }
    if (message.state !== 0) {
      writer.uint32(80).int32(message.state);
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(90).fork()).join();
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
        case 12:
          if (tag !== 98) {
            break;
          }

          message.videoMetadata = VideoMetadata.decode(reader, reader.uint32());
          continue;
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

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mimeType = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sizeBytes = Long.fromString(reader.int64().toString());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.expirationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sha256Hash = Buffer.from(reader.bytes());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
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
      videoMetadata: isSet(object.videoMetadata) ? VideoMetadata.fromJSON(object.videoMetadata) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      mimeType: isSet(object.mimeType) ? globalThis.String(object.mimeType) : "",
      sizeBytes: isSet(object.sizeBytes) ? Long.fromValue(object.sizeBytes) : Long.ZERO,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      sha256Hash: isSet(object.sha256Hash) ? Buffer.from(bytesFromBase64(object.sha256Hash)) : Buffer.alloc(0),
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      state: isSet(object.state) ? file_StateFromJSON(object.state) : 0,
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: File): unknown {
    const obj: any = {};
    if (message.videoMetadata !== undefined) {
      obj.videoMetadata = VideoMetadata.toJSON(message.videoMetadata);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.mimeType !== "") {
      obj.mimeType = message.mimeType;
    }
    if (!message.sizeBytes.equals(Long.ZERO)) {
      obj.sizeBytes = (message.sizeBytes || Long.ZERO).toString();
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.expirationTime !== undefined) {
      obj.expirationTime = message.expirationTime.toISOString();
    }
    if (message.sha256Hash.length !== 0) {
      obj.sha256Hash = base64FromBytes(message.sha256Hash);
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.state !== 0) {
      obj.state = file_StateToJSON(message.state);
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<File>): File {
    return File.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<File>): File {
    const message = createBaseFile();
    message.videoMetadata = (object.videoMetadata !== undefined && object.videoMetadata !== null)
      ? VideoMetadata.fromPartial(object.videoMetadata)
      : undefined;
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.mimeType = object.mimeType ?? "";
    message.sizeBytes = (object.sizeBytes !== undefined && object.sizeBytes !== null)
      ? Long.fromValue(object.sizeBytes)
      : Long.ZERO;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.expirationTime = object.expirationTime ?? undefined;
    message.sha256Hash = object.sha256Hash ?? Buffer.alloc(0);
    message.uri = object.uri ?? "";
    message.state = object.state ?? 0;
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseVideoMetadata(): VideoMetadata {
  return { videoDuration: undefined };
}

export const VideoMetadata: MessageFns<VideoMetadata> = {
  encode(message: VideoMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.videoDuration !== undefined) {
      Duration.encode(message.videoDuration, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VideoMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.videoDuration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VideoMetadata {
    return { videoDuration: isSet(object.videoDuration) ? Duration.fromJSON(object.videoDuration) : undefined };
  },

  toJSON(message: VideoMetadata): unknown {
    const obj: any = {};
    if (message.videoDuration !== undefined) {
      obj.videoDuration = Duration.toJSON(message.videoDuration);
    }
    return obj;
  },

  create(base?: DeepPartial<VideoMetadata>): VideoMetadata {
    return VideoMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VideoMetadata>): VideoMetadata {
    const message = createBaseVideoMetadata();
    message.videoDuration = (object.videoDuration !== undefined && object.videoDuration !== null)
      ? Duration.fromPartial(object.videoDuration)
      : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}

function base64FromBytes(arr: Uint8Array): string {
  return globalThis.Buffer.from(arr).toString("base64");
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
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
