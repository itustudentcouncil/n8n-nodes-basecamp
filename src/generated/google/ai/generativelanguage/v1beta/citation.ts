// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ai/generativelanguage/v1beta/citation.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ai.generativelanguage.v1beta";

/** A collection of source attributions for a piece of content. */
export interface CitationMetadata {
  /** Citations to sources for a specific response. */
  citationSources: CitationSource[];
}

/** A citation to a source for a portion of a specific response. */
export interface CitationSource {
  /**
   * Optional. Start of segment of the response that is attributed to this
   * source.
   *
   * Index indicates the start of the segment, measured in bytes.
   */
  startIndex?:
    | number
    | undefined;
  /** Optional. End of the attributed segment, exclusive. */
  endIndex?:
    | number
    | undefined;
  /** Optional. URI that is attributed as a source for a portion of the text. */
  uri?:
    | string
    | undefined;
  /**
   * Optional. License for the GitHub project that is attributed as a source for
   * segment.
   *
   * License info is required for code citations.
   */
  license?: string | undefined;
}

function createBaseCitationMetadata(): CitationMetadata {
  return { citationSources: [] };
}

export const CitationMetadata: MessageFns<CitationMetadata> = {
  encode(message: CitationMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.citationSources) {
      CitationSource.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CitationMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCitationMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.citationSources.push(CitationSource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CitationMetadata {
    return {
      citationSources: globalThis.Array.isArray(object?.citationSources)
        ? object.citationSources.map((e: any) => CitationSource.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CitationMetadata): unknown {
    const obj: any = {};
    if (message.citationSources?.length) {
      obj.citationSources = message.citationSources.map((e) => CitationSource.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<CitationMetadata>): CitationMetadata {
    return CitationMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CitationMetadata>): CitationMetadata {
    const message = createBaseCitationMetadata();
    message.citationSources = object.citationSources?.map((e) => CitationSource.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCitationSource(): CitationSource {
  return { startIndex: undefined, endIndex: undefined, uri: undefined, license: undefined };
}

export const CitationSource: MessageFns<CitationSource> = {
  encode(message: CitationSource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.startIndex !== undefined) {
      writer.uint32(8).int32(message.startIndex);
    }
    if (message.endIndex !== undefined) {
      writer.uint32(16).int32(message.endIndex);
    }
    if (message.uri !== undefined) {
      writer.uint32(26).string(message.uri);
    }
    if (message.license !== undefined) {
      writer.uint32(34).string(message.license);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CitationSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCitationSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.startIndex = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.endIndex = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.license = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CitationSource {
    return {
      startIndex: isSet(object.startIndex) ? globalThis.Number(object.startIndex) : undefined,
      endIndex: isSet(object.endIndex) ? globalThis.Number(object.endIndex) : undefined,
      uri: isSet(object.uri) ? globalThis.String(object.uri) : undefined,
      license: isSet(object.license) ? globalThis.String(object.license) : undefined,
    };
  },

  toJSON(message: CitationSource): unknown {
    const obj: any = {};
    if (message.startIndex !== undefined) {
      obj.startIndex = Math.round(message.startIndex);
    }
    if (message.endIndex !== undefined) {
      obj.endIndex = Math.round(message.endIndex);
    }
    if (message.uri !== undefined) {
      obj.uri = message.uri;
    }
    if (message.license !== undefined) {
      obj.license = message.license;
    }
    return obj;
  },

  create(base?: DeepPartial<CitationSource>): CitationSource {
    return CitationSource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CitationSource>): CitationSource {
    const message = createBaseCitationSource();
    message.startIndex = object.startIndex ?? undefined;
    message.endIndex = object.endIndex ?? undefined;
    message.uri = object.uri ?? undefined;
    message.license = object.license ?? undefined;
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