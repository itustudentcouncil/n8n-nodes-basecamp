// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/actions/sdk/v2/version.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.actions.sdk.v2";

/** Definition of version resource. */
export interface Version {
  /**
   * The unique identifier of the version in the following format.
   * `projects/{project}/versions/{version}`.
   */
  name: string;
  /** The current state of the version. */
  versionState:
    | Version_VersionState
    | undefined;
  /** Email of the user who created this version. */
  creator: string;
  /** Timestamp of the last change to this version. */
  updateTime: Date | undefined;
}

/** Represents the current state of the version. */
export interface Version_VersionState {
  /** The current state of the version. */
  state: Version_VersionState_State;
  /** User-friendly message for the current state of the version. */
  message: string;
}

/**
 * Enum indicating the states that a Version can take. This enum is not yet
 * frozen and values maybe added later.
 */
export enum Version_VersionState_State {
  /** STATE_UNSPECIFIED - Default value of State. */
  STATE_UNSPECIFIED = 0,
  /** CREATION_IN_PROGRESS - The version creation is in progress. */
  CREATION_IN_PROGRESS = 1,
  /** CREATION_FAILED - The version creation failed. */
  CREATION_FAILED = 2,
  /** CREATED - The version has been successfully created. */
  CREATED = 3,
  /** REVIEW_IN_PROGRESS - The version is under policy review (aka Approval). */
  REVIEW_IN_PROGRESS = 4,
  /** APPROVED - The version has been approved for policy review and can be deployed. */
  APPROVED = 5,
  /**
   * CONDITIONALLY_APPROVED - The version has been conditionally approved but is pending final
   * review. It may be rolled back if final review is denied.
   */
  CONDITIONALLY_APPROVED = 6,
  /** DENIED - The version has been denied for policy review. */
  DENIED = 7,
  /**
   * UNDER_TAKEDOWN - The version is taken down as entire agent and all versions are taken
   * down.
   */
  UNDER_TAKEDOWN = 8,
  /** DELETED - The version has been deleted. */
  DELETED = 9,
  UNRECOGNIZED = -1,
}

export function version_VersionState_StateFromJSON(object: any): Version_VersionState_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Version_VersionState_State.STATE_UNSPECIFIED;
    case 1:
    case "CREATION_IN_PROGRESS":
      return Version_VersionState_State.CREATION_IN_PROGRESS;
    case 2:
    case "CREATION_FAILED":
      return Version_VersionState_State.CREATION_FAILED;
    case 3:
    case "CREATED":
      return Version_VersionState_State.CREATED;
    case 4:
    case "REVIEW_IN_PROGRESS":
      return Version_VersionState_State.REVIEW_IN_PROGRESS;
    case 5:
    case "APPROVED":
      return Version_VersionState_State.APPROVED;
    case 6:
    case "CONDITIONALLY_APPROVED":
      return Version_VersionState_State.CONDITIONALLY_APPROVED;
    case 7:
    case "DENIED":
      return Version_VersionState_State.DENIED;
    case 8:
    case "UNDER_TAKEDOWN":
      return Version_VersionState_State.UNDER_TAKEDOWN;
    case 9:
    case "DELETED":
      return Version_VersionState_State.DELETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Version_VersionState_State.UNRECOGNIZED;
  }
}

export function version_VersionState_StateToJSON(object: Version_VersionState_State): string {
  switch (object) {
    case Version_VersionState_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Version_VersionState_State.CREATION_IN_PROGRESS:
      return "CREATION_IN_PROGRESS";
    case Version_VersionState_State.CREATION_FAILED:
      return "CREATION_FAILED";
    case Version_VersionState_State.CREATED:
      return "CREATED";
    case Version_VersionState_State.REVIEW_IN_PROGRESS:
      return "REVIEW_IN_PROGRESS";
    case Version_VersionState_State.APPROVED:
      return "APPROVED";
    case Version_VersionState_State.CONDITIONALLY_APPROVED:
      return "CONDITIONALLY_APPROVED";
    case Version_VersionState_State.DENIED:
      return "DENIED";
    case Version_VersionState_State.UNDER_TAKEDOWN:
      return "UNDER_TAKEDOWN";
    case Version_VersionState_State.DELETED:
      return "DELETED";
    case Version_VersionState_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseVersion(): Version {
  return { name: "", versionState: undefined, creator: "", updateTime: undefined };
}

export const Version: MessageFns<Version> = {
  encode(message: Version, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.versionState !== undefined) {
      Version_VersionState.encode(message.versionState, writer.uint32(18).fork()).join();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Version {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
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

          message.versionState = Version_VersionState.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      versionState: isSet(object.versionState) ? Version_VersionState.fromJSON(object.versionState) : undefined,
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.versionState !== undefined) {
      obj.versionState = Version_VersionState.toJSON(message.versionState);
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Version>): Version {
    return Version.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Version>): Version {
    const message = createBaseVersion();
    message.name = object.name ?? "";
    message.versionState = (object.versionState !== undefined && object.versionState !== null)
      ? Version_VersionState.fromPartial(object.versionState)
      : undefined;
    message.creator = object.creator ?? "";
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseVersion_VersionState(): Version_VersionState {
  return { state: 0, message: "" };
}

export const Version_VersionState: MessageFns<Version_VersionState> = {
  encode(message: Version_VersionState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Version_VersionState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion_VersionState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version_VersionState {
    return {
      state: isSet(object.state) ? version_VersionState_StateFromJSON(object.state) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: Version_VersionState): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = version_VersionState_StateToJSON(message.state);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create(base?: DeepPartial<Version_VersionState>): Version_VersionState {
    return Version_VersionState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Version_VersionState>): Version_VersionState {
    const message = createBaseVersion_VersionState();
    message.state = object.state ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

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