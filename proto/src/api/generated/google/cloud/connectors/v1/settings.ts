// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/connectors/v1/settings.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.connectors.v1";

/** Request for [GetGlobalSettingsRequest]. */
export interface GetGlobalSettingsRequest {
  /** Required. The resource name of the Settings. */
  name: string;
}

/** Global Settings details. */
export interface Settings {
  /**
   * Output only. Resource name of the Connection.
   * Format: projects/{project}/locations/global/settings}
   */
  name: string;
  /** Optional. Flag indicates whether vpc-sc is enabled. */
  vpcsc: boolean;
  /** Output only. Flag indicates if user is in PayG model */
  payg: boolean;
}

function createBaseGetGlobalSettingsRequest(): GetGlobalSettingsRequest {
  return { name: "" };
}

export const GetGlobalSettingsRequest: MessageFns<GetGlobalSettingsRequest> = {
  encode(message: GetGlobalSettingsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetGlobalSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGlobalSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGlobalSettingsRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetGlobalSettingsRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetGlobalSettingsRequest>): GetGlobalSettingsRequest {
    return GetGlobalSettingsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetGlobalSettingsRequest>): GetGlobalSettingsRequest {
    const message = createBaseGetGlobalSettingsRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSettings(): Settings {
  return { name: "", vpcsc: false, payg: false };
}

export const Settings: MessageFns<Settings> = {
  encode(message: Settings, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.vpcsc !== false) {
      writer.uint32(16).bool(message.vpcsc);
    }
    if (message.payg !== false) {
      writer.uint32(24).bool(message.payg);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Settings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettings();
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
          if (tag !== 16) {
            break;
          }

          message.vpcsc = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.payg = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Settings {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      vpcsc: isSet(object.vpcsc) ? globalThis.Boolean(object.vpcsc) : false,
      payg: isSet(object.payg) ? globalThis.Boolean(object.payg) : false,
    };
  },

  toJSON(message: Settings): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.vpcsc !== false) {
      obj.vpcsc = message.vpcsc;
    }
    if (message.payg !== false) {
      obj.payg = message.payg;
    }
    return obj;
  },

  create(base?: DeepPartial<Settings>): Settings {
    return Settings.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Settings>): Settings {
    const message = createBaseSettings();
    message.name = object.name ?? "";
    message.vpcsc = object.vpcsc ?? false;
    message.payg = object.payg ?? false;
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