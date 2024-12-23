// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/addressvalidation/v1/metadata.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.maps.addressvalidation.v1";

/**
 * The metadata for the address. `metadata` is not guaranteed to be fully
 * populated for every address sent to the Address Validation API.
 */
export interface AddressMetadata {
  /**
   * Indicates that this is the address of a business.
   * If unset, indicates that the value is unknown.
   */
  business?:
    | boolean
    | undefined;
  /**
   * Indicates that the address of a PO box.
   * If unset, indicates that the value is unknown.
   */
  poBox?:
    | boolean
    | undefined;
  /**
   * Indicates that this is the address of a residence.
   * If unset, indicates that the value is unknown.
   */
  residential?: boolean | undefined;
}

function createBaseAddressMetadata(): AddressMetadata {
  return { business: undefined, poBox: undefined, residential: undefined };
}

export const AddressMetadata: MessageFns<AddressMetadata> = {
  encode(message: AddressMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.business !== undefined) {
      writer.uint32(16).bool(message.business);
    }
    if (message.poBox !== undefined) {
      writer.uint32(24).bool(message.poBox);
    }
    if (message.residential !== undefined) {
      writer.uint32(48).bool(message.residential);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AddressMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.business = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.poBox = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.residential = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressMetadata {
    return {
      business: isSet(object.business) ? globalThis.Boolean(object.business) : undefined,
      poBox: isSet(object.poBox) ? globalThis.Boolean(object.poBox) : undefined,
      residential: isSet(object.residential) ? globalThis.Boolean(object.residential) : undefined,
    };
  },

  toJSON(message: AddressMetadata): unknown {
    const obj: any = {};
    if (message.business !== undefined) {
      obj.business = message.business;
    }
    if (message.poBox !== undefined) {
      obj.poBox = message.poBox;
    }
    if (message.residential !== undefined) {
      obj.residential = message.residential;
    }
    return obj;
  },

  create(base?: DeepPartial<AddressMetadata>): AddressMetadata {
    return AddressMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddressMetadata>): AddressMetadata {
    const message = createBaseAddressMetadata();
    message.business = object.business ?? undefined;
    message.poBox = object.poBox ?? undefined;
    message.residential = object.residential ?? undefined;
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
