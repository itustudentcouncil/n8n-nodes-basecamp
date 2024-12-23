// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/discoveryengine/v1alpha/acl_config.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { IdpConfig } from "./common.js";

export const protobufPackage = "google.cloud.discoveryengine.v1alpha";

/** Access Control Configuration. */
export interface AclConfig {
  /**
   * Immutable. The full resource name of the acl configuration.
   * Format:
   * `projects/{project}/locations/{location}/aclConfig`.
   *
   * This field must be a UTF-8 encoded string with a length limit of 1024
   * characters.
   */
  name: string;
  /** Identity provider config. */
  idpConfig: IdpConfig | undefined;
}

function createBaseAclConfig(): AclConfig {
  return { name: "", idpConfig: undefined };
}

export const AclConfig: MessageFns<AclConfig> = {
  encode(message: AclConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.idpConfig !== undefined) {
      IdpConfig.encode(message.idpConfig, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AclConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAclConfig();
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

          message.idpConfig = IdpConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AclConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      idpConfig: isSet(object.idpConfig) ? IdpConfig.fromJSON(object.idpConfig) : undefined,
    };
  },

  toJSON(message: AclConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.idpConfig !== undefined) {
      obj.idpConfig = IdpConfig.toJSON(message.idpConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<AclConfig>): AclConfig {
    return AclConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AclConfig>): AclConfig {
    const message = createBaseAclConfig();
    message.name = object.name ?? "";
    message.idpConfig = (object.idpConfig !== undefined && object.idpConfig !== null)
      ? IdpConfig.fromPartial(object.idpConfig)
      : undefined;
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
