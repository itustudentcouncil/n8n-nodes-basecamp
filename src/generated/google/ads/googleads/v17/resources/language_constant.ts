// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/language_constant.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.resources";

/** A language. */
export interface LanguageConstant {
  /**
   * Output only. The resource name of the language constant.
   * Language constant resource names have the form:
   *
   * `languageConstants/{criterion_id}`
   */
  resourceName: string;
  /** Output only. The ID of the language constant. */
  id?:
    | Long
    | undefined;
  /**
   * Output only. The language code, for example, "en_US", "en_AU", "es", "fr",
   * etc.
   */
  code?:
    | string
    | undefined;
  /**
   * Output only. The full name of the language in English, for example,
   * "English (US)", "Spanish", etc.
   */
  name?:
    | string
    | undefined;
  /** Output only. Whether the language is targetable. */
  targetable?: boolean | undefined;
}

function createBaseLanguageConstant(): LanguageConstant {
  return { resourceName: "", id: undefined, code: undefined, name: undefined, targetable: undefined };
}

export const LanguageConstant: MessageFns<LanguageConstant> = {
  encode(message: LanguageConstant, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.id !== undefined) {
      writer.uint32(48).int64(message.id.toString());
    }
    if (message.code !== undefined) {
      writer.uint32(58).string(message.code);
    }
    if (message.name !== undefined) {
      writer.uint32(66).string(message.name);
    }
    if (message.targetable !== undefined) {
      writer.uint32(72).bool(message.targetable);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LanguageConstant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLanguageConstant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.code = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.name = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.targetable = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LanguageConstant {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
      code: isSet(object.code) ? globalThis.String(object.code) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      targetable: isSet(object.targetable) ? globalThis.Boolean(object.targetable) : undefined,
    };
  },

  toJSON(message: LanguageConstant): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.id !== undefined) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.code !== undefined) {
      obj.code = message.code;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.targetable !== undefined) {
      obj.targetable = message.targetable;
    }
    return obj;
  },

  create(base?: DeepPartial<LanguageConstant>): LanguageConstant {
    return LanguageConstant.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LanguageConstant>): LanguageConstant {
    const message = createBaseLanguageConstant();
    message.resourceName = object.resourceName ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : undefined;
    message.code = object.code ?? undefined;
    message.name = object.name ?? undefined;
    message.targetable = object.targetable ?? undefined;
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