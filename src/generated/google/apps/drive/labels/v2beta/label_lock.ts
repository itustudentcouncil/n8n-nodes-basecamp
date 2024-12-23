// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/apps/drive/labels/v2beta/label_lock.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../../protobuf/timestamp.js";
import { UserInfo } from "./common.js";

export const protobufPackage = "google.apps.drive.labels.v2beta";

/** A Lock that can be applied to a Label, Field, or Choice. */
export interface LabelLock {
  /** Output only. Resource name of this LabelLock. */
  name: string;
  /**
   * The ID of the Field that should be locked.  Empty if the whole
   * Label should be locked.
   */
  fieldId: string;
  /**
   * The ID of the Selection Field Choice that should be locked.  If present,
   * `field_id` must also be present.
   */
  choiceId: string;
  /** Output only. The time this LabelLock was created. */
  createTime:
    | Date
    | undefined;
  /**
   * Output only. The user whose credentials were used to create the LabelLock.
   * This will not be present if no user was responsible for creating the
   * LabelLock.
   */
  creator:
    | UserInfo
    | undefined;
  /**
   * Output only. A timestamp indicating when this LabelLock was scheduled for
   * deletion. This will be present only if this LabelLock is in the DELETING
   * state.
   */
  deleteTime:
    | Date
    | undefined;
  /** Output only. The user's capabilities on this LabelLock. */
  capabilities:
    | LabelLock_Capabilities
    | undefined;
  /** Output only. This LabelLock's state. */
  state: LabelLock_State;
}

/** A description of a LabelLock's state. */
export enum LabelLock_State {
  /** STATE_UNSPECIFIED - Unknown state. */
  STATE_UNSPECIFIED = 0,
  /** ACTIVE - The LabelLock is active and is being enforced by the server. */
  ACTIVE = 1,
  /**
   * DELETING - The LabelLock is being deleted.  The LabelLock will continue to be
   * enforced by the server until it has been fully removed.
   */
  DELETING = 2,
  UNRECOGNIZED = -1,
}

export function labelLock_StateFromJSON(object: any): LabelLock_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return LabelLock_State.STATE_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return LabelLock_State.ACTIVE;
    case 2:
    case "DELETING":
      return LabelLock_State.DELETING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LabelLock_State.UNRECOGNIZED;
  }
}

export function labelLock_StateToJSON(object: LabelLock_State): string {
  switch (object) {
    case LabelLock_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case LabelLock_State.ACTIVE:
      return "ACTIVE";
    case LabelLock_State.DELETING:
      return "DELETING";
    case LabelLock_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A description of a user's capabilities on a LabelLock. */
export interface LabelLock_Capabilities {
  /** True if the user is authorized to view the policy. */
  canViewPolicy: boolean;
}

function createBaseLabelLock(): LabelLock {
  return {
    name: "",
    fieldId: "",
    choiceId: "",
    createTime: undefined,
    creator: undefined,
    deleteTime: undefined,
    capabilities: undefined,
    state: 0,
  };
}

export const LabelLock: MessageFns<LabelLock> = {
  encode(message: LabelLock, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.fieldId !== "") {
      writer.uint32(18).string(message.fieldId);
    }
    if (message.choiceId !== "") {
      writer.uint32(26).string(message.choiceId);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(34).fork()).join();
    }
    if (message.creator !== undefined) {
      UserInfo.encode(message.creator, writer.uint32(42).fork()).join();
    }
    if (message.deleteTime !== undefined) {
      Timestamp.encode(toTimestamp(message.deleteTime), writer.uint32(50).fork()).join();
    }
    if (message.capabilities !== undefined) {
      LabelLock_Capabilities.encode(message.capabilities, writer.uint32(66).fork()).join();
    }
    if (message.state !== 0) {
      writer.uint32(72).int32(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LabelLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabelLock();
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

          message.fieldId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.choiceId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.creator = UserInfo.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.deleteTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.capabilities = LabelLock_Capabilities.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
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

  fromJSON(object: any): LabelLock {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      fieldId: isSet(object.fieldId) ? globalThis.String(object.fieldId) : "",
      choiceId: isSet(object.choiceId) ? globalThis.String(object.choiceId) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      creator: isSet(object.creator) ? UserInfo.fromJSON(object.creator) : undefined,
      deleteTime: isSet(object.deleteTime) ? fromJsonTimestamp(object.deleteTime) : undefined,
      capabilities: isSet(object.capabilities) ? LabelLock_Capabilities.fromJSON(object.capabilities) : undefined,
      state: isSet(object.state) ? labelLock_StateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: LabelLock): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.fieldId !== "") {
      obj.fieldId = message.fieldId;
    }
    if (message.choiceId !== "") {
      obj.choiceId = message.choiceId;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.creator !== undefined) {
      obj.creator = UserInfo.toJSON(message.creator);
    }
    if (message.deleteTime !== undefined) {
      obj.deleteTime = message.deleteTime.toISOString();
    }
    if (message.capabilities !== undefined) {
      obj.capabilities = LabelLock_Capabilities.toJSON(message.capabilities);
    }
    if (message.state !== 0) {
      obj.state = labelLock_StateToJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<LabelLock>): LabelLock {
    return LabelLock.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LabelLock>): LabelLock {
    const message = createBaseLabelLock();
    message.name = object.name ?? "";
    message.fieldId = object.fieldId ?? "";
    message.choiceId = object.choiceId ?? "";
    message.createTime = object.createTime ?? undefined;
    message.creator = (object.creator !== undefined && object.creator !== null)
      ? UserInfo.fromPartial(object.creator)
      : undefined;
    message.deleteTime = object.deleteTime ?? undefined;
    message.capabilities = (object.capabilities !== undefined && object.capabilities !== null)
      ? LabelLock_Capabilities.fromPartial(object.capabilities)
      : undefined;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseLabelLock_Capabilities(): LabelLock_Capabilities {
  return { canViewPolicy: false };
}

export const LabelLock_Capabilities: MessageFns<LabelLock_Capabilities> = {
  encode(message: LabelLock_Capabilities, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.canViewPolicy !== false) {
      writer.uint32(8).bool(message.canViewPolicy);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LabelLock_Capabilities {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabelLock_Capabilities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.canViewPolicy = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LabelLock_Capabilities {
    return { canViewPolicy: isSet(object.canViewPolicy) ? globalThis.Boolean(object.canViewPolicy) : false };
  },

  toJSON(message: LabelLock_Capabilities): unknown {
    const obj: any = {};
    if (message.canViewPolicy !== false) {
      obj.canViewPolicy = message.canViewPolicy;
    }
    return obj;
  },

  create(base?: DeepPartial<LabelLock_Capabilities>): LabelLock_Capabilities {
    return LabelLock_Capabilities.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LabelLock_Capabilities>): LabelLock_Capabilities {
    const message = createBaseLabelLock_Capabilities();
    message.canViewPolicy = object.canViewPolicy ?? false;
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
