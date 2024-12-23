// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1/service_networking.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1";

/** Represents configuration for private service connect. */
export interface PrivateServiceConnectConfig {
  /** Required. If true, expose the IndexEndpoint via private service connect. */
  enablePrivateServiceConnect: boolean;
  /**
   * A list of Projects from which the forwarding rule will target the service
   * attachment.
   */
  projectAllowlist: string[];
  /**
   * Output only. The name of the generated service attachment resource.
   * This is only populated if the endpoint is deployed with
   * PrivateServiceConnect.
   */
  serviceAttachment: string;
}

/**
 * PscAutomatedEndpoints defines the output of the forwarding rule
 * automatically created by each PscAutomationConfig.
 */
export interface PscAutomatedEndpoints {
  /** Corresponding project_id in pscAutomationConfigs */
  projectId: string;
  /** Corresponding network in pscAutomationConfigs. */
  network: string;
  /** Ip Address created by the automated forwarding rule. */
  matchAddress: string;
}

function createBasePrivateServiceConnectConfig(): PrivateServiceConnectConfig {
  return { enablePrivateServiceConnect: false, projectAllowlist: [], serviceAttachment: "" };
}

export const PrivateServiceConnectConfig: MessageFns<PrivateServiceConnectConfig> = {
  encode(message: PrivateServiceConnectConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.enablePrivateServiceConnect !== false) {
      writer.uint32(8).bool(message.enablePrivateServiceConnect);
    }
    for (const v of message.projectAllowlist) {
      writer.uint32(18).string(v!);
    }
    if (message.serviceAttachment !== "") {
      writer.uint32(42).string(message.serviceAttachment);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PrivateServiceConnectConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateServiceConnectConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enablePrivateServiceConnect = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectAllowlist.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.serviceAttachment = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PrivateServiceConnectConfig {
    return {
      enablePrivateServiceConnect: isSet(object.enablePrivateServiceConnect)
        ? globalThis.Boolean(object.enablePrivateServiceConnect)
        : false,
      projectAllowlist: globalThis.Array.isArray(object?.projectAllowlist)
        ? object.projectAllowlist.map((e: any) => globalThis.String(e))
        : [],
      serviceAttachment: isSet(object.serviceAttachment) ? globalThis.String(object.serviceAttachment) : "",
    };
  },

  toJSON(message: PrivateServiceConnectConfig): unknown {
    const obj: any = {};
    if (message.enablePrivateServiceConnect !== false) {
      obj.enablePrivateServiceConnect = message.enablePrivateServiceConnect;
    }
    if (message.projectAllowlist?.length) {
      obj.projectAllowlist = message.projectAllowlist;
    }
    if (message.serviceAttachment !== "") {
      obj.serviceAttachment = message.serviceAttachment;
    }
    return obj;
  },

  create(base?: DeepPartial<PrivateServiceConnectConfig>): PrivateServiceConnectConfig {
    return PrivateServiceConnectConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PrivateServiceConnectConfig>): PrivateServiceConnectConfig {
    const message = createBasePrivateServiceConnectConfig();
    message.enablePrivateServiceConnect = object.enablePrivateServiceConnect ?? false;
    message.projectAllowlist = object.projectAllowlist?.map((e) => e) || [];
    message.serviceAttachment = object.serviceAttachment ?? "";
    return message;
  },
};

function createBasePscAutomatedEndpoints(): PscAutomatedEndpoints {
  return { projectId: "", network: "", matchAddress: "" };
}

export const PscAutomatedEndpoints: MessageFns<PscAutomatedEndpoints> = {
  encode(message: PscAutomatedEndpoints, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    if (message.matchAddress !== "") {
      writer.uint32(26).string(message.matchAddress);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PscAutomatedEndpoints {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePscAutomatedEndpoints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.network = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.matchAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PscAutomatedEndpoints {
    return {
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      network: isSet(object.network) ? globalThis.String(object.network) : "",
      matchAddress: isSet(object.matchAddress) ? globalThis.String(object.matchAddress) : "",
    };
  },

  toJSON(message: PscAutomatedEndpoints): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.network !== "") {
      obj.network = message.network;
    }
    if (message.matchAddress !== "") {
      obj.matchAddress = message.matchAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<PscAutomatedEndpoints>): PscAutomatedEndpoints {
    return PscAutomatedEndpoints.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PscAutomatedEndpoints>): PscAutomatedEndpoints {
    const message = createBasePscAutomatedEndpoints();
    message.projectId = object.projectId ?? "";
    message.network = object.network ?? "";
    message.matchAddress = object.matchAddress ?? "";
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
