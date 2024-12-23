// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/devtools/resultstore/v2/upload_metadata.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.devtools.resultstore.v2";

/** The upload metadata for an invocation */
export interface UploadMetadata {
  /**
   * The name of the upload metadata.  Its format will be:
   * invocations/${INVOCATION_ID}/uploadMetadata
   */
  name: string;
  /**
   * The resume token of the last batch that was committed in the most recent
   * batch upload.
   * More information with resume_token could be found in
   * resultstore_upload.proto
   */
  resumeToken: string;
  /**
   * Client-specific data used to resume batch upload if an error occurs and
   * retry action is needed.
   */
  uploaderState: Buffer;
}

function createBaseUploadMetadata(): UploadMetadata {
  return { name: "", resumeToken: "", uploaderState: Buffer.alloc(0) };
}

export const UploadMetadata: MessageFns<UploadMetadata> = {
  encode(message: UploadMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resumeToken !== "") {
      writer.uint32(18).string(message.resumeToken);
    }
    if (message.uploaderState.length !== 0) {
      writer.uint32(26).bytes(message.uploaderState);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UploadMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resumeToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.uploaderState = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UploadMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      resumeToken: isSet(object.resumeToken) ? globalThis.String(object.resumeToken) : "",
      uploaderState: isSet(object.uploaderState) ? Buffer.from(bytesFromBase64(object.uploaderState)) : Buffer.alloc(0),
    };
  },

  toJSON(message: UploadMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.resumeToken !== "") {
      obj.resumeToken = message.resumeToken;
    }
    if (message.uploaderState.length !== 0) {
      obj.uploaderState = base64FromBytes(message.uploaderState);
    }
    return obj;
  },

  create(base?: DeepPartial<UploadMetadata>): UploadMetadata {
    return UploadMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UploadMetadata>): UploadMetadata {
    const message = createBaseUploadMetadata();
    message.name = object.name ?? "";
    message.resumeToken = object.resumeToken ?? "";
    message.uploaderState = object.uploaderState ?? Buffer.alloc(0);
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
