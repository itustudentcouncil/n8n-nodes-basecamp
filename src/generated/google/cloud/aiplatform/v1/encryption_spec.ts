// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1/encryption_spec.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1";

/**
 * Represents a customer-managed encryption key spec that can be applied to
 * a top-level resource.
 */
export interface EncryptionSpec {
  /**
   * Required. The Cloud KMS resource identifier of the customer managed
   * encryption key used to protect a resource. Has the form:
   * `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`.
   * The key needs to be in the same region as where the compute resource is
   * created.
   */
  kmsKeyName: string;
}

function createBaseEncryptionSpec(): EncryptionSpec {
  return { kmsKeyName: "" };
}

export const EncryptionSpec: MessageFns<EncryptionSpec> = {
  encode(message: EncryptionSpec, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.kmsKeyName !== "") {
      writer.uint32(10).string(message.kmsKeyName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EncryptionSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptionSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kmsKeyName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EncryptionSpec {
    return { kmsKeyName: isSet(object.kmsKeyName) ? globalThis.String(object.kmsKeyName) : "" };
  },

  toJSON(message: EncryptionSpec): unknown {
    const obj: any = {};
    if (message.kmsKeyName !== "") {
      obj.kmsKeyName = message.kmsKeyName;
    }
    return obj;
  },

  create(base?: DeepPartial<EncryptionSpec>): EncryptionSpec {
    return EncryptionSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EncryptionSpec>): EncryptionSpec {
    const message = createBaseEncryptionSpec();
    message.kmsKeyName = object.kmsKeyName ?? "";
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
