// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v1/mute_config.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.securitycenter.v1";

/**
 * A mute config is a Cloud SCC resource that contains the configuration
 * to mute create/update events of findings.
 */
export interface MuteConfig {
  /**
   * This field will be ignored if provided on config creation. Format
   * `organizations/{organization}/muteConfigs/{mute_config}`
   * `folders/{folder}/muteConfigs/{mute_config}`
   * `projects/{project}/muteConfigs/{mute_config}`
   * `organizations/{organization}/locations/global/muteConfigs/{mute_config}`
   * `folders/{folder}/locations/global/muteConfigs/{mute_config}`
   * `projects/{project}/locations/global/muteConfigs/{mute_config}`
   */
  name: string;
  /**
   * The human readable name to be displayed for the mute config.
   *
   * @deprecated
   */
  displayName: string;
  /** A description of the mute config. */
  description: string;
  /**
   * Required. An expression that defines the filter to apply across
   * create/update events of findings. While creating a filter string, be
   * mindful of the scope in which the mute configuration is being created.
   * E.g., If a filter contains project = X but is created under the project = Y
   * scope, it might not match any findings.
   *
   * The following field and operator combinations are supported:
   *
   * * severity: `=`, `:`
   * * category: `=`, `:`
   * * resource.name: `=`, `:`
   * * resource.project_name: `=`, `:`
   * * resource.project_display_name: `=`, `:`
   * * resource.folders.resource_folder: `=`, `:`
   * * resource.parent_name: `=`, `:`
   * * resource.parent_display_name: `=`, `:`
   * * resource.type: `=`, `:`
   * * finding_class: `=`, `:`
   * * indicator.ip_addresses: `=`, `:`
   * * indicator.domains: `=`, `:`
   */
  filter: string;
  /**
   * Output only. The time at which the mute config was created.
   * This field is set by the server and will be ignored if provided on config
   * creation.
   */
  createTime:
    | Date
    | undefined;
  /**
   * Output only. The most recent time at which the mute config was updated.
   * This field is set by the server and will be ignored if provided on config
   * creation or update.
   */
  updateTime:
    | Date
    | undefined;
  /**
   * Output only. Email address of the user who last edited the mute config.
   * This field is set by the server and will be ignored if provided on config
   * creation or update.
   */
  mostRecentEditor: string;
  /**
   * Optional. The type of the mute config, which determines what type of mute
   * state the config affects. The static mute state takes precedence over the
   * dynamic mute state. Immutable after creation. STATIC by default if not set
   * during creation.
   */
  type: MuteConfig_MuteConfigType;
  /**
   * Optional. The expiry of the mute config. Only applicable for dynamic
   * configs. If the expiry is set, when the config expires, it is removed from
   * all findings.
   */
  expiryTime: Date | undefined;
}

/** The type of MuteConfig. */
export enum MuteConfig_MuteConfigType {
  /** MUTE_CONFIG_TYPE_UNSPECIFIED - Unused. */
  MUTE_CONFIG_TYPE_UNSPECIFIED = 0,
  /**
   * STATIC - A static mute config, which sets the static mute state of future matching
   * findings to muted. Once the static mute state has been set, finding or
   * config modifications will not affect the state.
   */
  STATIC = 1,
  /**
   * DYNAMIC - A dynamic mute config, which is applied to existing and future matching
   * findings, setting their dynamic mute state to "muted". If the config is
   * updated or deleted, or a matching finding is updated, such that the
   * finding doesn't match the config, the config will be removed from the
   * finding, and the finding's dynamic mute state may become "unmuted"
   * (unless other configs still match).
   */
  DYNAMIC = 2,
  UNRECOGNIZED = -1,
}

export function muteConfig_MuteConfigTypeFromJSON(object: any): MuteConfig_MuteConfigType {
  switch (object) {
    case 0:
    case "MUTE_CONFIG_TYPE_UNSPECIFIED":
      return MuteConfig_MuteConfigType.MUTE_CONFIG_TYPE_UNSPECIFIED;
    case 1:
    case "STATIC":
      return MuteConfig_MuteConfigType.STATIC;
    case 2:
    case "DYNAMIC":
      return MuteConfig_MuteConfigType.DYNAMIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MuteConfig_MuteConfigType.UNRECOGNIZED;
  }
}

export function muteConfig_MuteConfigTypeToJSON(object: MuteConfig_MuteConfigType): string {
  switch (object) {
    case MuteConfig_MuteConfigType.MUTE_CONFIG_TYPE_UNSPECIFIED:
      return "MUTE_CONFIG_TYPE_UNSPECIFIED";
    case MuteConfig_MuteConfigType.STATIC:
      return "STATIC";
    case MuteConfig_MuteConfigType.DYNAMIC:
      return "DYNAMIC";
    case MuteConfig_MuteConfigType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseMuteConfig(): MuteConfig {
  return {
    name: "",
    displayName: "",
    description: "",
    filter: "",
    createTime: undefined,
    updateTime: undefined,
    mostRecentEditor: "",
    type: 0,
    expiryTime: undefined,
  };
}

export const MuteConfig: MessageFns<MuteConfig> = {
  encode(message: MuteConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).join();
    }
    if (message.mostRecentEditor !== "") {
      writer.uint32(58).string(message.mostRecentEditor);
    }
    if (message.type !== 0) {
      writer.uint32(64).int32(message.type);
    }
    if (message.expiryTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(74).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MuteConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMuteConfig();
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

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = reader.string();
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

          message.mostRecentEditor = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MuteConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      mostRecentEditor: isSet(object.mostRecentEditor) ? globalThis.String(object.mostRecentEditor) : "",
      type: isSet(object.type) ? muteConfig_MuteConfigTypeFromJSON(object.type) : 0,
      expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : undefined,
    };
  },

  toJSON(message: MuteConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.mostRecentEditor !== "") {
      obj.mostRecentEditor = message.mostRecentEditor;
    }
    if (message.type !== 0) {
      obj.type = muteConfig_MuteConfigTypeToJSON(message.type);
    }
    if (message.expiryTime !== undefined) {
      obj.expiryTime = message.expiryTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<MuteConfig>): MuteConfig {
    return MuteConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MuteConfig>): MuteConfig {
    const message = createBaseMuteConfig();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.filter = object.filter ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.mostRecentEditor = object.mostRecentEditor ?? "";
    message.type = object.type ?? 0;
    message.expiryTime = object.expiryTime ?? undefined;
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
