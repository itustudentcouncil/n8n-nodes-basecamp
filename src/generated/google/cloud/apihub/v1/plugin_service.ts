// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/apihub/v1/plugin_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { AttributeValues } from "./common_fields.js";

export const protobufPackage = "google.cloud.apihub.v1";

/** A plugin resource in the API Hub. */
export interface Plugin {
  /**
   * Identifier. The name of the plugin.
   * Format: `projects/{project}/locations/{location}/plugins/{plugin}`
   */
  name: string;
  /**
   * Required. The display name of the plugin. Max length is 50 characters
   * (Unicode code points).
   */
  displayName: string;
  /**
   * Required. The type of the API.
   * This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-plugin-type`
   * attribute.
   * The number of allowed values for this attribute will be based on the
   * cardinality of the attribute. The same can be retrieved via GetAttribute
   * API. All values should be from the list of allowed values defined for the
   * attribute.
   */
  type:
    | AttributeValues
    | undefined;
  /**
   * Optional. The plugin description. Max length is 2000 characters (Unicode
   * code points).
   */
  description: string;
  /** Output only. Represents the state of the plugin. */
  state: Plugin_State;
}

/**
 * Possible states a plugin can have. Note that this enum may receive new
 * values in the future. Consumers are advised to always code against the
 * enum values expecting new states can be added later on.
 */
export enum Plugin_State {
  /** STATE_UNSPECIFIED - The default value. This value is used if the state is omitted. */
  STATE_UNSPECIFIED = 0,
  /** ENABLED - The plugin is enabled. */
  ENABLED = 1,
  /** DISABLED - The plugin is disabled. */
  DISABLED = 2,
  UNRECOGNIZED = -1,
}

export function plugin_StateFromJSON(object: any): Plugin_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Plugin_State.STATE_UNSPECIFIED;
    case 1:
    case "ENABLED":
      return Plugin_State.ENABLED;
    case 2:
    case "DISABLED":
      return Plugin_State.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Plugin_State.UNRECOGNIZED;
  }
}

export function plugin_StateToJSON(object: Plugin_State): string {
  switch (object) {
    case Plugin_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Plugin_State.ENABLED:
      return "ENABLED";
    case Plugin_State.DISABLED:
      return "DISABLED";
    case Plugin_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * The [GetPlugin][google.cloud.apihub.v1.ApiHubPlugin.GetPlugin] method's
 * request.
 */
export interface GetPluginRequest {
  /**
   * Required. The name of the plugin to retrieve.
   * Format: `projects/{project}/locations/{location}/plugins/{plugin}`.
   */
  name: string;
}

/**
 * The [EnablePlugin][google.cloud.apihub.v1.ApiHubPlugin.EnablePlugin] method's
 * request.
 */
export interface EnablePluginRequest {
  /**
   * Required. The name of the plugin to enable.
   * Format: `projects/{project}/locations/{location}/plugins/{plugin}`.
   */
  name: string;
}

/**
 * The [DisablePlugin][google.cloud.apihub.v1.ApiHubPlugin.DisablePlugin]
 * method's request.
 */
export interface DisablePluginRequest {
  /**
   * Required. The name of the plugin to disable.
   * Format: `projects/{project}/locations/{location}/plugins/{plugin}`.
   */
  name: string;
}

function createBasePlugin(): Plugin {
  return { name: "", displayName: "", type: undefined, description: "", state: 0 };
}

export const Plugin: MessageFns<Plugin> = {
  encode(message: Plugin, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.type !== undefined) {
      AttributeValues.encode(message.type, writer.uint32(26).fork()).join();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Plugin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlugin();
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

          message.type = AttributeValues.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): Plugin {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      type: isSet(object.type) ? AttributeValues.fromJSON(object.type) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      state: isSet(object.state) ? plugin_StateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: Plugin): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.type !== undefined) {
      obj.type = AttributeValues.toJSON(message.type);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.state !== 0) {
      obj.state = plugin_StateToJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<Plugin>): Plugin {
    return Plugin.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Plugin>): Plugin {
    const message = createBasePlugin();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.type = (object.type !== undefined && object.type !== null)
      ? AttributeValues.fromPartial(object.type)
      : undefined;
    message.description = object.description ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetPluginRequest(): GetPluginRequest {
  return { name: "" };
}

export const GetPluginRequest: MessageFns<GetPluginRequest> = {
  encode(message: GetPluginRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetPluginRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPluginRequest();
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

  fromJSON(object: any): GetPluginRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetPluginRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetPluginRequest>): GetPluginRequest {
    return GetPluginRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetPluginRequest>): GetPluginRequest {
    const message = createBaseGetPluginRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseEnablePluginRequest(): EnablePluginRequest {
  return { name: "" };
}

export const EnablePluginRequest: MessageFns<EnablePluginRequest> = {
  encode(message: EnablePluginRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EnablePluginRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnablePluginRequest();
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

  fromJSON(object: any): EnablePluginRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: EnablePluginRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<EnablePluginRequest>): EnablePluginRequest {
    return EnablePluginRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EnablePluginRequest>): EnablePluginRequest {
    const message = createBaseEnablePluginRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseDisablePluginRequest(): DisablePluginRequest {
  return { name: "" };
}

export const DisablePluginRequest: MessageFns<DisablePluginRequest> = {
  encode(message: DisablePluginRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DisablePluginRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisablePluginRequest();
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

  fromJSON(object: any): DisablePluginRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DisablePluginRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DisablePluginRequest>): DisablePluginRequest {
    return DisablePluginRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DisablePluginRequest>): DisablePluginRequest {
    const message = createBaseDisablePluginRequest();
    message.name = object.name ?? "";
    return message;
  },
};

/** This service is used for managing plugins inside the API Hub. */
export type ApiHubPluginDefinition = typeof ApiHubPluginDefinition;
export const ApiHubPluginDefinition = {
  name: "ApiHubPlugin",
  fullName: "google.cloud.apihub.v1.ApiHubPlugin",
  methods: {
    /** Get details about an API Hub plugin. */
    getPlugin: {
      name: "GetPlugin",
      requestType: GetPluginRequest,
      requestStream: false,
      responseType: Plugin,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              45,
              18,
              43,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              112,
              108,
              117,
              103,
              105,
              110,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Enables a plugin.
     * The `state` of the plugin after enabling is `ENABLED`
     */
    enablePlugin: {
      name: "EnablePlugin",
      requestType: EnablePluginRequest,
      requestStream: false,
      responseType: Plugin,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              55,
              58,
              1,
              42,
              34,
              50,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              112,
              108,
              117,
              103,
              105,
              110,
              115,
              47,
              42,
              125,
              58,
              101,
              110,
              97,
              98,
              108,
              101,
            ]),
          ],
        },
      },
    },
    /**
     * Disables a plugin.
     * The `state` of the plugin after disabling is `DISABLED`
     */
    disablePlugin: {
      name: "DisablePlugin",
      requestType: DisablePluginRequest,
      requestStream: false,
      responseType: Plugin,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              56,
              58,
              1,
              42,
              34,
              51,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              112,
              108,
              117,
              103,
              105,
              110,
              115,
              47,
              42,
              125,
              58,
              100,
              105,
              115,
              97,
              98,
              108,
              101,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface ApiHubPluginServiceImplementation<CallContextExt = {}> {
  /** Get details about an API Hub plugin. */
  getPlugin(request: GetPluginRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Plugin>>;
  /**
   * Enables a plugin.
   * The `state` of the plugin after enabling is `ENABLED`
   */
  enablePlugin(request: EnablePluginRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Plugin>>;
  /**
   * Disables a plugin.
   * The `state` of the plugin after disabling is `DISABLED`
   */
  disablePlugin(request: DisablePluginRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Plugin>>;
}

export interface ApiHubPluginClient<CallOptionsExt = {}> {
  /** Get details about an API Hub plugin. */
  getPlugin(request: DeepPartial<GetPluginRequest>, options?: CallOptions & CallOptionsExt): Promise<Plugin>;
  /**
   * Enables a plugin.
   * The `state` of the plugin after enabling is `ENABLED`
   */
  enablePlugin(request: DeepPartial<EnablePluginRequest>, options?: CallOptions & CallOptionsExt): Promise<Plugin>;
  /**
   * Disables a plugin.
   * The `state` of the plugin after disabling is `DISABLED`
   */
  disablePlugin(request: DeepPartial<DisablePluginRequest>, options?: CallOptions & CallOptionsExt): Promise<Plugin>;
}

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
