// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/monitoring/dashboard/v1/section_header.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.monitoring.dashboard.v1";

/**
 * A widget that defines a new section header. Sections populate a table of
 * contents and allow easier navigation of long-form content.
 */
export interface SectionHeader {
  /** The subtitle of the section */
  subtitle: string;
  /** Whether to insert a divider below the section in the table of contents */
  dividerBelow: boolean;
}

function createBaseSectionHeader(): SectionHeader {
  return { subtitle: "", dividerBelow: false };
}

export const SectionHeader: MessageFns<SectionHeader> = {
  encode(message: SectionHeader, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.subtitle !== "") {
      writer.uint32(10).string(message.subtitle);
    }
    if (message.dividerBelow !== false) {
      writer.uint32(16).bool(message.dividerBelow);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SectionHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSectionHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subtitle = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dividerBelow = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SectionHeader {
    return {
      subtitle: isSet(object.subtitle) ? globalThis.String(object.subtitle) : "",
      dividerBelow: isSet(object.dividerBelow) ? globalThis.Boolean(object.dividerBelow) : false,
    };
  },

  toJSON(message: SectionHeader): unknown {
    const obj: any = {};
    if (message.subtitle !== "") {
      obj.subtitle = message.subtitle;
    }
    if (message.dividerBelow !== false) {
      obj.dividerBelow = message.dividerBelow;
    }
    return obj;
  },

  create(base?: DeepPartial<SectionHeader>): SectionHeader {
    return SectionHeader.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SectionHeader>): SectionHeader {
    const message = createBaseSectionHeader();
    message.subtitle = object.subtitle ?? "";
    message.dividerBelow = object.dividerBelow ?? false;
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