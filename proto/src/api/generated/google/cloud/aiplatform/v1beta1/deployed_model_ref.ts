// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/deployed_model_ref.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1beta1";

/** Points to a DeployedModel. */
export interface DeployedModelRef {
  /** Immutable. A resource name of an Endpoint. */
  endpoint: string;
  /** Immutable. An ID of a DeployedModel in the above Endpoint. */
  deployedModelId: string;
}

function createBaseDeployedModelRef(): DeployedModelRef {
  return { endpoint: "", deployedModelId: "" };
}

export const DeployedModelRef: MessageFns<DeployedModelRef> = {
  encode(message: DeployedModelRef, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.endpoint !== "") {
      writer.uint32(10).string(message.endpoint);
    }
    if (message.deployedModelId !== "") {
      writer.uint32(18).string(message.deployedModelId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeployedModelRef {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeployedModelRef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpoint = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deployedModelId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeployedModelRef {
    return {
      endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "",
      deployedModelId: isSet(object.deployedModelId) ? globalThis.String(object.deployedModelId) : "",
    };
  },

  toJSON(message: DeployedModelRef): unknown {
    const obj: any = {};
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    if (message.deployedModelId !== "") {
      obj.deployedModelId = message.deployedModelId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeployedModelRef>): DeployedModelRef {
    return DeployedModelRef.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeployedModelRef>): DeployedModelRef {
    const message = createBaseDeployedModelRef();
    message.endpoint = object.endpoint ?? "";
    message.deployedModelId = object.deployedModelId ?? "";
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