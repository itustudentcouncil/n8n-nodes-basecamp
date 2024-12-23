// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/mobile_app_category_constant.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.resources";

/** A mobile application category constant. */
export interface MobileAppCategoryConstant {
  /**
   * Output only. The resource name of the mobile app category constant.
   * Mobile app category constant resource names have the form:
   *
   * `mobileAppCategoryConstants/{mobile_app_category_id}`
   */
  resourceName: string;
  /** Output only. The ID of the mobile app category constant. */
  id?:
    | number
    | undefined;
  /** Output only. Mobile app category name. */
  name?: string | undefined;
}

function createBaseMobileAppCategoryConstant(): MobileAppCategoryConstant {
  return { resourceName: "", id: undefined, name: undefined };
}

export const MobileAppCategoryConstant: MessageFns<MobileAppCategoryConstant> = {
  encode(message: MobileAppCategoryConstant, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.id !== undefined) {
      writer.uint32(32).int32(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(42).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MobileAppCategoryConstant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMobileAppCategoryConstant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): MobileAppCategoryConstant {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? globalThis.Number(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
    };
  },

  toJSON(message: MobileAppCategoryConstant): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<MobileAppCategoryConstant>): MobileAppCategoryConstant {
    return MobileAppCategoryConstant.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MobileAppCategoryConstant>): MobileAppCategoryConstant {
    const message = createBaseMobileAppCategoryConstant();
    message.resourceName = object.resourceName ?? "";
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
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
