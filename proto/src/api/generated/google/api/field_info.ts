// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/api/field_info.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.api";

/** Rich semantic information of an API field beyond basic typing. */
export interface FieldInfo {
  /**
   * The standard format of a field value. This does not explicitly configure
   * any API consumer, just documents the API's format for the field it is
   * applied to.
   */
  format: FieldInfo_Format;
  /**
   * The type(s) that the annotated, generic field may represent.
   *
   * Currently, this must only be used on fields of type `google.protobuf.Any`.
   * Supporting other generic types may be considered in the future.
   */
  referencedTypes: TypeReference[];
}

/**
 * The standard format of a field value. The supported formats are all backed
 * by either an RFC defined by the IETF or a Google-defined AIP.
 */
export enum FieldInfo_Format {
  /** FORMAT_UNSPECIFIED - Default, unspecified value. */
  FORMAT_UNSPECIFIED = 0,
  /**
   * UUID4 - Universally Unique Identifier, version 4, value as defined by
   * https://datatracker.ietf.org/doc/html/rfc4122. The value may be
   * normalized to entirely lowercase letters. For example, the value
   * `F47AC10B-58CC-0372-8567-0E02B2C3D479` would be normalized to
   * `f47ac10b-58cc-0372-8567-0e02b2c3d479`.
   */
  UUID4 = 1,
  /**
   * IPV4 - Internet Protocol v4 value as defined by [RFC
   * 791](https://datatracker.ietf.org/doc/html/rfc791). The value may be
   * condensed, with leading zeros in each octet stripped. For example,
   * `001.022.233.040` would be condensed to `1.22.233.40`.
   */
  IPV4 = 2,
  /**
   * IPV6 - Internet Protocol v6 value as defined by [RFC
   * 2460](https://datatracker.ietf.org/doc/html/rfc2460). The value may be
   * normalized to entirely lowercase letters with zeros compressed, following
   * [RFC 5952](https://datatracker.ietf.org/doc/html/rfc5952). For example,
   * the value `2001:0DB8:0::0` would be normalized to `2001:db8::`.
   */
  IPV6 = 3,
  /**
   * IPV4_OR_IPV6 - An IP address in either v4 or v6 format as described by the individual
   * values defined herein. See the comments on the IPV4 and IPV6 types for
   * allowed normalizations of each.
   */
  IPV4_OR_IPV6 = 4,
  UNRECOGNIZED = -1,
}

export function fieldInfo_FormatFromJSON(object: any): FieldInfo_Format {
  switch (object) {
    case 0:
    case "FORMAT_UNSPECIFIED":
      return FieldInfo_Format.FORMAT_UNSPECIFIED;
    case 1:
    case "UUID4":
      return FieldInfo_Format.UUID4;
    case 2:
    case "IPV4":
      return FieldInfo_Format.IPV4;
    case 3:
    case "IPV6":
      return FieldInfo_Format.IPV6;
    case 4:
    case "IPV4_OR_IPV6":
      return FieldInfo_Format.IPV4_OR_IPV6;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldInfo_Format.UNRECOGNIZED;
  }
}

export function fieldInfo_FormatToJSON(object: FieldInfo_Format): string {
  switch (object) {
    case FieldInfo_Format.FORMAT_UNSPECIFIED:
      return "FORMAT_UNSPECIFIED";
    case FieldInfo_Format.UUID4:
      return "UUID4";
    case FieldInfo_Format.IPV4:
      return "IPV4";
    case FieldInfo_Format.IPV6:
      return "IPV6";
    case FieldInfo_Format.IPV4_OR_IPV6:
      return "IPV4_OR_IPV6";
    case FieldInfo_Format.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A reference to a message type, for use in [FieldInfo][google.api.FieldInfo]. */
export interface TypeReference {
  /**
   * The name of the type that the annotated, generic field may represent.
   * If the type is in the same protobuf package, the value can be the simple
   * message name e.g., `"MyMessage"`. Otherwise, the value must be the
   * fully-qualified message name e.g., `"google.library.v1.Book"`.
   *
   * If the type(s) are unknown to the service (e.g. the field accepts generic
   * user input), use the wildcard `"*"` to denote this behavior.
   *
   * See [AIP-202](https://google.aip.dev/202#type-references) for more details.
   */
  typeName: string;
}

function createBaseFieldInfo(): FieldInfo {
  return { format: 0, referencedTypes: [] };
}

export const FieldInfo: MessageFns<FieldInfo> = {
  encode(message: FieldInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.format !== 0) {
      writer.uint32(8).int32(message.format);
    }
    for (const v of message.referencedTypes) {
      TypeReference.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FieldInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.referencedTypes.push(TypeReference.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldInfo {
    return {
      format: isSet(object.format) ? fieldInfo_FormatFromJSON(object.format) : 0,
      referencedTypes: globalThis.Array.isArray(object?.referencedTypes)
        ? object.referencedTypes.map((e: any) => TypeReference.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FieldInfo): unknown {
    const obj: any = {};
    if (message.format !== 0) {
      obj.format = fieldInfo_FormatToJSON(message.format);
    }
    if (message.referencedTypes?.length) {
      obj.referencedTypes = message.referencedTypes.map((e) => TypeReference.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<FieldInfo>): FieldInfo {
    return FieldInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FieldInfo>): FieldInfo {
    const message = createBaseFieldInfo();
    message.format = object.format ?? 0;
    message.referencedTypes = object.referencedTypes?.map((e) => TypeReference.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTypeReference(): TypeReference {
  return { typeName: "" };
}

export const TypeReference: MessageFns<TypeReference> = {
  encode(message: TypeReference, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.typeName !== "") {
      writer.uint32(10).string(message.typeName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TypeReference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.typeName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TypeReference {
    return { typeName: isSet(object.typeName) ? globalThis.String(object.typeName) : "" };
  },

  toJSON(message: TypeReference): unknown {
    const obj: any = {};
    if (message.typeName !== "") {
      obj.typeName = message.typeName;
    }
    return obj;
  },

  create(base?: DeepPartial<TypeReference>): TypeReference {
    return TypeReference.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TypeReference>): TypeReference {
    const message = createBaseTypeReference();
    message.typeName = object.typeName ?? "";
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