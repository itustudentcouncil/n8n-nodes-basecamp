// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/contentwarehouse/v1/async_document_service_request.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.contentwarehouse.v1";

/** Metadata object for CreateDocument request (currently empty). */
export interface CreateDocumentMetadata {
}

/** Metadata object for UpdateDocument request (currently empty). */
export interface UpdateDocumentMetadata {
}

function createBaseCreateDocumentMetadata(): CreateDocumentMetadata {
  return {};
}

export const CreateDocumentMetadata: MessageFns<CreateDocumentMetadata> = {
  encode(_: CreateDocumentMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateDocumentMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDocumentMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CreateDocumentMetadata {
    return {};
  },

  toJSON(_: CreateDocumentMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CreateDocumentMetadata>): CreateDocumentMetadata {
    return CreateDocumentMetadata.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CreateDocumentMetadata>): CreateDocumentMetadata {
    const message = createBaseCreateDocumentMetadata();
    return message;
  },
};

function createBaseUpdateDocumentMetadata(): UpdateDocumentMetadata {
  return {};
}

export const UpdateDocumentMetadata: MessageFns<UpdateDocumentMetadata> = {
  encode(_: UpdateDocumentMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateDocumentMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDocumentMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UpdateDocumentMetadata {
    return {};
  },

  toJSON(_: UpdateDocumentMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<UpdateDocumentMetadata>): UpdateDocumentMetadata {
    return UpdateDocumentMetadata.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<UpdateDocumentMetadata>): UpdateDocumentMetadata {
    const message = createBaseUpdateDocumentMetadata();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}