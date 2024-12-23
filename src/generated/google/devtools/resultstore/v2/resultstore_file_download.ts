// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/devtools/resultstore/v2/resultstore_file_download.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";

export const protobufPackage = "google.devtools.resultstore.v2";

/** Request object for GetFile */
export interface GetFileRequest {
  /**
   * This corresponds to the uri field in the File message: for an obfuscated
   * File.uri like
   * CglidWlsZC5sb2cSJDI3YmI5ZWQxLTVjYzEtNGFlNi1iMWRkLTVlODY0YWEzYmE2ZQ, the
   * value here should be
   * files/CglidWlsZC5sb2cSJDI3YmI5ZWQxLTVjYzEtNGFlNi1iMWRkLTVlODY0YWEzYmE2ZQ
   */
  uri: string;
  /**
   * The offset for the first byte to return in the read, relative to the start
   * of the resource.
   *
   * A `read_offset` that is negative or greater than the size of the resource
   * will cause an `OUT_OF_RANGE` error.
   */
  readOffset: Long;
  /**
   * The maximum number of `data` bytes the server is allowed to return in the
   * sum of all `ReadResponse` messages. A `read_limit` of zero indicates that
   * there is no limit, and a negative `read_limit` will cause an error.
   *
   * If the stream returns fewer bytes than allowed by the `read_limit` and no
   * error occurred, the stream includes all data from the `read_offset` to the
   * end of the resource.
   */
  readLimit: Long;
  /**
   * Only applies if the referenced file is a known archive type (ar, jar, zip)
   * The above read_offset and read_limit fields are applied to this entry.
   * If this file is not an archive, INVALID_ARGUMENT is thrown.
   */
  archiveEntry: string;
}

/** Response object for GetFile */
export interface GetFileResponse {
  /** The file data. */
  data: Buffer;
}

/** Request object for GetFileTail */
export interface GetFileTailRequest {
  /**
   * This corresponds to the uri field in the File message: for an obfuscated
   * File.uri like
   * CglidWlsZC5sb2cSJDI3YmI5ZWQxLTVjYzEtNGFlNi1iMWRkLTVlODY0YWEzYmE2ZQ, the
   * value here should be
   * files/CglidWlsZC5sb2cSJDI3YmI5ZWQxLTVjYzEtNGFlNi1iMWRkLTVlODY0YWEzYmE2ZQ
   */
  uri: string;
  /**
   * The offset for the first byte to return in the read, relative to the end
   * of the resource.
   *
   * A `read_offset` that is negative or greater than the size of the resource
   * will cause an `OUT_OF_RANGE` error.
   */
  readOffset: Long;
  /**
   * The maximum number of `data` bytes the server is allowed to return. The
   * server will return bytes starting from the tail of the file.
   *
   * A `read_limit` of zero indicates that there is no limit, and a negative
   * `read_limit` will cause an error.
   */
  readLimit: Long;
  /**
   * Only applies if the referenced file is a known archive type (ar, jar, zip)
   * The above read_offset and read_limit fields are applied to this entry.
   * If this file is not an archive, INVALID_ARGUMENT is thrown.
   */
  archiveEntry: string;
}

/** Response object for GetFileTail */
export interface GetFileTailResponse {
  /** The file data, encoded with UTF-8. */
  data: Buffer;
}

function createBaseGetFileRequest(): GetFileRequest {
  return { uri: "", readOffset: Long.ZERO, readLimit: Long.ZERO, archiveEntry: "" };
}

export const GetFileRequest: MessageFns<GetFileRequest> = {
  encode(message: GetFileRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (!message.readOffset.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.readOffset.toString());
    }
    if (!message.readLimit.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.readLimit.toString());
    }
    if (message.archiveEntry !== "") {
      writer.uint32(34).string(message.archiveEntry);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetFileRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.readOffset = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.readLimit = Long.fromString(reader.int64().toString());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.archiveEntry = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFileRequest {
    return {
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      readOffset: isSet(object.readOffset) ? Long.fromValue(object.readOffset) : Long.ZERO,
      readLimit: isSet(object.readLimit) ? Long.fromValue(object.readLimit) : Long.ZERO,
      archiveEntry: isSet(object.archiveEntry) ? globalThis.String(object.archiveEntry) : "",
    };
  },

  toJSON(message: GetFileRequest): unknown {
    const obj: any = {};
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (!message.readOffset.equals(Long.ZERO)) {
      obj.readOffset = (message.readOffset || Long.ZERO).toString();
    }
    if (!message.readLimit.equals(Long.ZERO)) {
      obj.readLimit = (message.readLimit || Long.ZERO).toString();
    }
    if (message.archiveEntry !== "") {
      obj.archiveEntry = message.archiveEntry;
    }
    return obj;
  },

  create(base?: DeepPartial<GetFileRequest>): GetFileRequest {
    return GetFileRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetFileRequest>): GetFileRequest {
    const message = createBaseGetFileRequest();
    message.uri = object.uri ?? "";
    message.readOffset = (object.readOffset !== undefined && object.readOffset !== null)
      ? Long.fromValue(object.readOffset)
      : Long.ZERO;
    message.readLimit = (object.readLimit !== undefined && object.readLimit !== null)
      ? Long.fromValue(object.readLimit)
      : Long.ZERO;
    message.archiveEntry = object.archiveEntry ?? "";
    return message;
  },
};

function createBaseGetFileResponse(): GetFileResponse {
  return { data: Buffer.alloc(0) };
}

export const GetFileResponse: MessageFns<GetFileResponse> = {
  encode(message: GetFileResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetFileResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFileResponse {
    return { data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0) };
  },

  toJSON(message: GetFileResponse): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<GetFileResponse>): GetFileResponse {
    return GetFileResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetFileResponse>): GetFileResponse {
    const message = createBaseGetFileResponse();
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseGetFileTailRequest(): GetFileTailRequest {
  return { uri: "", readOffset: Long.ZERO, readLimit: Long.ZERO, archiveEntry: "" };
}

export const GetFileTailRequest: MessageFns<GetFileTailRequest> = {
  encode(message: GetFileTailRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (!message.readOffset.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.readOffset.toString());
    }
    if (!message.readLimit.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.readLimit.toString());
    }
    if (message.archiveEntry !== "") {
      writer.uint32(34).string(message.archiveEntry);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetFileTailRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFileTailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.readOffset = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.readLimit = Long.fromString(reader.int64().toString());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.archiveEntry = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFileTailRequest {
    return {
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      readOffset: isSet(object.readOffset) ? Long.fromValue(object.readOffset) : Long.ZERO,
      readLimit: isSet(object.readLimit) ? Long.fromValue(object.readLimit) : Long.ZERO,
      archiveEntry: isSet(object.archiveEntry) ? globalThis.String(object.archiveEntry) : "",
    };
  },

  toJSON(message: GetFileTailRequest): unknown {
    const obj: any = {};
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (!message.readOffset.equals(Long.ZERO)) {
      obj.readOffset = (message.readOffset || Long.ZERO).toString();
    }
    if (!message.readLimit.equals(Long.ZERO)) {
      obj.readLimit = (message.readLimit || Long.ZERO).toString();
    }
    if (message.archiveEntry !== "") {
      obj.archiveEntry = message.archiveEntry;
    }
    return obj;
  },

  create(base?: DeepPartial<GetFileTailRequest>): GetFileTailRequest {
    return GetFileTailRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetFileTailRequest>): GetFileTailRequest {
    const message = createBaseGetFileTailRequest();
    message.uri = object.uri ?? "";
    message.readOffset = (object.readOffset !== undefined && object.readOffset !== null)
      ? Long.fromValue(object.readOffset)
      : Long.ZERO;
    message.readLimit = (object.readLimit !== undefined && object.readLimit !== null)
      ? Long.fromValue(object.readLimit)
      : Long.ZERO;
    message.archiveEntry = object.archiveEntry ?? "";
    return message;
  },
};

function createBaseGetFileTailResponse(): GetFileTailResponse {
  return { data: Buffer.alloc(0) };
}

export const GetFileTailResponse: MessageFns<GetFileTailResponse> = {
  encode(message: GetFileTailResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetFileTailResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFileTailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFileTailResponse {
    return { data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0) };
  },

  toJSON(message: GetFileTailResponse): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<GetFileTailResponse>): GetFileTailResponse {
    return GetFileTailResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetFileTailResponse>): GetFileTailResponse {
    const message = createBaseGetFileTailResponse();
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

/**
 * This API allows download of File messages referenced in
 * ResultStore resources.
 */
export type ResultStoreFileDownloadDefinition = typeof ResultStoreFileDownloadDefinition;
export const ResultStoreFileDownloadDefinition = {
  name: "ResultStoreFileDownload",
  fullName: "google.devtools.resultstore.v2.ResultStoreFileDownload",
  methods: {
    /**
     * Retrieves the File with the given uri.
     * returns a stream of bytes to be stitched together in order.
     *
     * An error will be reported in the following cases:
     * - If the File is not found.
     * - If the given File uri is badly formatted.
     */
    getFile: {
      name: "GetFile",
      requestType: GetFileRequest,
      requestStream: false,
      responseType: GetFileResponse,
      responseStream: true,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([18, 18, 16, 47, 118, 50, 47, 123, 117, 114, 105, 61, 102, 105, 108, 101, 47, 42, 125]),
          ],
        },
      },
    },
    /**
     * Retrieves the tail of a File with the given uri.
     *
     * An error will be reported in the following cases:
     * - If the File is not found.
     * - If the given File uri is badly formatted.
     */
    getFileTail: {
      name: "GetFileTail",
      requestType: GetFileTailRequest,
      requestStream: false,
      responseType: GetFileTailResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              23,
              18,
              21,
              47,
              118,
              50,
              47,
              123,
              117,
              114,
              105,
              61,
              102,
              105,
              108,
              101,
              47,
              116,
              97,
              105,
              108,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface ResultStoreFileDownloadServiceImplementation<CallContextExt = {}> {
  /**
   * Retrieves the File with the given uri.
   * returns a stream of bytes to be stitched together in order.
   *
   * An error will be reported in the following cases:
   * - If the File is not found.
   * - If the given File uri is badly formatted.
   */
  getFile(
    request: GetFileRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<GetFileResponse>>;
  /**
   * Retrieves the tail of a File with the given uri.
   *
   * An error will be reported in the following cases:
   * - If the File is not found.
   * - If the given File uri is badly formatted.
   */
  getFileTail(
    request: GetFileTailRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetFileTailResponse>>;
}

export interface ResultStoreFileDownloadClient<CallOptionsExt = {}> {
  /**
   * Retrieves the File with the given uri.
   * returns a stream of bytes to be stitched together in order.
   *
   * An error will be reported in the following cases:
   * - If the File is not found.
   * - If the given File uri is badly formatted.
   */
  getFile(request: DeepPartial<GetFileRequest>, options?: CallOptions & CallOptionsExt): AsyncIterable<GetFileResponse>;
  /**
   * Retrieves the tail of a File with the given uri.
   *
   * An error will be reported in the following cases:
   * - If the File is not found.
   * - If the given File uri is badly formatted.
   */
  getFileTail(
    request: DeepPartial<GetFileTailRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetFileTailResponse>;
}

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

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
