// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/dialogflow/cx/v3/gcs.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.dialogflow.cx.v3";

/**
 * Google Cloud Storage location for a Dialogflow operation that writes or
 * exports objects (e.g. exported agent or transcripts) outside of Dialogflow.
 */
export interface GcsDestination {
  /**
   * Required. The Google Cloud Storage URI for the exported objects. A URI is
   * of the form: `gs://bucket/object-name-or-prefix` Whether a full object
   * name, or just a prefix, its usage depends on the Dialogflow operation.
   */
  uri: string;
}

function createBaseGcsDestination(): GcsDestination {
  return { uri: "" };
}

export const GcsDestination: MessageFns<GcsDestination> = {
  encode(message: GcsDestination, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GcsDestination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGcsDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GcsDestination {
    return { uri: isSet(object.uri) ? globalThis.String(object.uri) : "" };
  },

  toJSON(message: GcsDestination): unknown {
    const obj: any = {};
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<GcsDestination>): GcsDestination {
    return GcsDestination.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GcsDestination>): GcsDestination {
    const message = createBaseGcsDestination();
    message.uri = object.uri ?? "";
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
