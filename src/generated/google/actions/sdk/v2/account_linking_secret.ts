// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/actions/sdk/v2/account_linking_secret.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.actions.sdk.v2";

/**
 * Information about the encrypted OAuth client secret used in account linking
 * flows (for AUTH_CODE grant type).
 */
export interface AccountLinkingSecret {
  /** Encrypted account linking client secret ciphertext. */
  encryptedClientSecret: Buffer;
  /**
   * The version of the crypto key used to encrypt the account linking client
   * secret.
   * Note that this field is ignored in push, preview, and version creation
   * flows.
   */
  encryptionKeyVersion: string;
}

function createBaseAccountLinkingSecret(): AccountLinkingSecret {
  return { encryptedClientSecret: Buffer.alloc(0), encryptionKeyVersion: "" };
}

export const AccountLinkingSecret: MessageFns<AccountLinkingSecret> = {
  encode(message: AccountLinkingSecret, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.encryptedClientSecret.length !== 0) {
      writer.uint32(10).bytes(message.encryptedClientSecret);
    }
    if (message.encryptionKeyVersion !== "") {
      writer.uint32(18).string(message.encryptionKeyVersion);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AccountLinkingSecret {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLinkingSecret();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.encryptedClientSecret = Buffer.from(reader.bytes());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.encryptionKeyVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountLinkingSecret {
    return {
      encryptedClientSecret: isSet(object.encryptedClientSecret)
        ? Buffer.from(bytesFromBase64(object.encryptedClientSecret))
        : Buffer.alloc(0),
      encryptionKeyVersion: isSet(object.encryptionKeyVersion) ? globalThis.String(object.encryptionKeyVersion) : "",
    };
  },

  toJSON(message: AccountLinkingSecret): unknown {
    const obj: any = {};
    if (message.encryptedClientSecret.length !== 0) {
      obj.encryptedClientSecret = base64FromBytes(message.encryptedClientSecret);
    }
    if (message.encryptionKeyVersion !== "") {
      obj.encryptionKeyVersion = message.encryptionKeyVersion;
    }
    return obj;
  },

  create(base?: DeepPartial<AccountLinkingSecret>): AccountLinkingSecret {
    return AccountLinkingSecret.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccountLinkingSecret>): AccountLinkingSecret {
    const message = createBaseAccountLinkingSecret();
    message.encryptedClientSecret = object.encryptedClientSecret ?? Buffer.alloc(0);
    message.encryptionKeyVersion = object.encryptionKeyVersion ?? "";
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