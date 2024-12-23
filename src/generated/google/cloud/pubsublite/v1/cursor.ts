// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/pubsublite/v1/cursor.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Cursor } from "./common.js";

export const protobufPackage = "google.cloud.pubsublite.v1";

/**
 * The first streaming request that must be sent on a newly-opened stream. The
 * client must wait for the response before sending subsequent requests on the
 * stream.
 */
export interface InitialCommitCursorRequest {
  /** The subscription for which to manage committed cursors. */
  subscription: string;
  /**
   * The partition for which to manage committed cursors. Partitions are zero
   * indexed, so `partition` must be in the range [0, topic.num_partitions).
   */
  partition: Long;
}

/** Response to an InitialCommitCursorRequest. */
export interface InitialCommitCursorResponse {
}

/**
 * Streaming request to update the committed cursor. Subsequent
 * SequencedCommitCursorRequests override outstanding ones.
 */
export interface SequencedCommitCursorRequest {
  /** The new value for the committed cursor. */
  cursor: Cursor | undefined;
}

/** Response to a SequencedCommitCursorRequest. */
export interface SequencedCommitCursorResponse {
  /**
   * The number of outstanding SequencedCommitCursorRequests acknowledged by
   * this response. Note that SequencedCommitCursorRequests are acknowledged in
   * the order that they are received.
   */
  acknowledgedCommits: Long;
}

/** A request sent from the client to the server on a stream. */
export interface StreamingCommitCursorRequest {
  /** Initial request on the stream. */
  initial?:
    | InitialCommitCursorRequest
    | undefined;
  /** Request to commit a new cursor value. */
  commit?: SequencedCommitCursorRequest | undefined;
}

/** Response to a StreamingCommitCursorRequest. */
export interface StreamingCommitCursorResponse {
  /** Initial response on the stream. */
  initial?:
    | InitialCommitCursorResponse
    | undefined;
  /** Response to committing a new cursor value. */
  commit?: SequencedCommitCursorResponse | undefined;
}

/** Request for CommitCursor. */
export interface CommitCursorRequest {
  /** The subscription for which to update the cursor. */
  subscription: string;
  /**
   * The partition for which to update the cursor. Partitions are zero indexed,
   * so `partition` must be in the range [0, topic.num_partitions).
   */
  partition: Long;
  /** The new value for the committed cursor. */
  cursor: Cursor | undefined;
}

/** Response for CommitCursor. */
export interface CommitCursorResponse {
}

/** Request for ListPartitionCursors. */
export interface ListPartitionCursorsRequest {
  /**
   * Required. The subscription for which to retrieve cursors.
   * Structured like
   * `projects/{project_number}/locations/{location}/subscriptions/{subscription_id}`.
   */
  parent: string;
  /**
   * The maximum number of cursors to return. The service may return fewer than
   * this value.
   * If unset or zero, all cursors for the parent will be returned.
   */
  pageSize: number;
  /**
   * A page token, received from a previous `ListPartitionCursors` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListPartitionCursors`
   * must match the call that provided the page token.
   */
  pageToken: string;
}

/** A pair of a Cursor and the partition it is for. */
export interface PartitionCursor {
  /** The partition this is for. */
  partition: Long;
  /** The value of the cursor. */
  cursor: Cursor | undefined;
}

/** Response for ListPartitionCursors */
export interface ListPartitionCursorsResponse {
  /** The partition cursors from this request. */
  partitionCursors: PartitionCursor[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

function createBaseInitialCommitCursorRequest(): InitialCommitCursorRequest {
  return { subscription: "", partition: Long.ZERO };
}

export const InitialCommitCursorRequest: MessageFns<InitialCommitCursorRequest> = {
  encode(message: InitialCommitCursorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.subscription !== "") {
      writer.uint32(10).string(message.subscription);
    }
    if (!message.partition.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.partition.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InitialCommitCursorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitialCommitCursorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscription = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.partition = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitialCommitCursorRequest {
    return {
      subscription: isSet(object.subscription) ? globalThis.String(object.subscription) : "",
      partition: isSet(object.partition) ? Long.fromValue(object.partition) : Long.ZERO,
    };
  },

  toJSON(message: InitialCommitCursorRequest): unknown {
    const obj: any = {};
    if (message.subscription !== "") {
      obj.subscription = message.subscription;
    }
    if (!message.partition.equals(Long.ZERO)) {
      obj.partition = (message.partition || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<InitialCommitCursorRequest>): InitialCommitCursorRequest {
    return InitialCommitCursorRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InitialCommitCursorRequest>): InitialCommitCursorRequest {
    const message = createBaseInitialCommitCursorRequest();
    message.subscription = object.subscription ?? "";
    message.partition = (object.partition !== undefined && object.partition !== null)
      ? Long.fromValue(object.partition)
      : Long.ZERO;
    return message;
  },
};

function createBaseInitialCommitCursorResponse(): InitialCommitCursorResponse {
  return {};
}

export const InitialCommitCursorResponse: MessageFns<InitialCommitCursorResponse> = {
  encode(_: InitialCommitCursorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InitialCommitCursorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitialCommitCursorResponse();
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

  fromJSON(_: any): InitialCommitCursorResponse {
    return {};
  },

  toJSON(_: InitialCommitCursorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<InitialCommitCursorResponse>): InitialCommitCursorResponse {
    return InitialCommitCursorResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<InitialCommitCursorResponse>): InitialCommitCursorResponse {
    const message = createBaseInitialCommitCursorResponse();
    return message;
  },
};

function createBaseSequencedCommitCursorRequest(): SequencedCommitCursorRequest {
  return { cursor: undefined };
}

export const SequencedCommitCursorRequest: MessageFns<SequencedCommitCursorRequest> = {
  encode(message: SequencedCommitCursorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.cursor !== undefined) {
      Cursor.encode(message.cursor, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SequencedCommitCursorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequencedCommitCursorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cursor = Cursor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SequencedCommitCursorRequest {
    return { cursor: isSet(object.cursor) ? Cursor.fromJSON(object.cursor) : undefined };
  },

  toJSON(message: SequencedCommitCursorRequest): unknown {
    const obj: any = {};
    if (message.cursor !== undefined) {
      obj.cursor = Cursor.toJSON(message.cursor);
    }
    return obj;
  },

  create(base?: DeepPartial<SequencedCommitCursorRequest>): SequencedCommitCursorRequest {
    return SequencedCommitCursorRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SequencedCommitCursorRequest>): SequencedCommitCursorRequest {
    const message = createBaseSequencedCommitCursorRequest();
    message.cursor = (object.cursor !== undefined && object.cursor !== null)
      ? Cursor.fromPartial(object.cursor)
      : undefined;
    return message;
  },
};

function createBaseSequencedCommitCursorResponse(): SequencedCommitCursorResponse {
  return { acknowledgedCommits: Long.ZERO };
}

export const SequencedCommitCursorResponse: MessageFns<SequencedCommitCursorResponse> = {
  encode(message: SequencedCommitCursorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.acknowledgedCommits.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.acknowledgedCommits.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SequencedCommitCursorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequencedCommitCursorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.acknowledgedCommits = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SequencedCommitCursorResponse {
    return {
      acknowledgedCommits: isSet(object.acknowledgedCommits) ? Long.fromValue(object.acknowledgedCommits) : Long.ZERO,
    };
  },

  toJSON(message: SequencedCommitCursorResponse): unknown {
    const obj: any = {};
    if (!message.acknowledgedCommits.equals(Long.ZERO)) {
      obj.acknowledgedCommits = (message.acknowledgedCommits || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<SequencedCommitCursorResponse>): SequencedCommitCursorResponse {
    return SequencedCommitCursorResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SequencedCommitCursorResponse>): SequencedCommitCursorResponse {
    const message = createBaseSequencedCommitCursorResponse();
    message.acknowledgedCommits = (object.acknowledgedCommits !== undefined && object.acknowledgedCommits !== null)
      ? Long.fromValue(object.acknowledgedCommits)
      : Long.ZERO;
    return message;
  },
};

function createBaseStreamingCommitCursorRequest(): StreamingCommitCursorRequest {
  return { initial: undefined, commit: undefined };
}

export const StreamingCommitCursorRequest: MessageFns<StreamingCommitCursorRequest> = {
  encode(message: StreamingCommitCursorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.initial !== undefined) {
      InitialCommitCursorRequest.encode(message.initial, writer.uint32(10).fork()).join();
    }
    if (message.commit !== undefined) {
      SequencedCommitCursorRequest.encode(message.commit, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StreamingCommitCursorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingCommitCursorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.initial = InitialCommitCursorRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commit = SequencedCommitCursorRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingCommitCursorRequest {
    return {
      initial: isSet(object.initial) ? InitialCommitCursorRequest.fromJSON(object.initial) : undefined,
      commit: isSet(object.commit) ? SequencedCommitCursorRequest.fromJSON(object.commit) : undefined,
    };
  },

  toJSON(message: StreamingCommitCursorRequest): unknown {
    const obj: any = {};
    if (message.initial !== undefined) {
      obj.initial = InitialCommitCursorRequest.toJSON(message.initial);
    }
    if (message.commit !== undefined) {
      obj.commit = SequencedCommitCursorRequest.toJSON(message.commit);
    }
    return obj;
  },

  create(base?: DeepPartial<StreamingCommitCursorRequest>): StreamingCommitCursorRequest {
    return StreamingCommitCursorRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StreamingCommitCursorRequest>): StreamingCommitCursorRequest {
    const message = createBaseStreamingCommitCursorRequest();
    message.initial = (object.initial !== undefined && object.initial !== null)
      ? InitialCommitCursorRequest.fromPartial(object.initial)
      : undefined;
    message.commit = (object.commit !== undefined && object.commit !== null)
      ? SequencedCommitCursorRequest.fromPartial(object.commit)
      : undefined;
    return message;
  },
};

function createBaseStreamingCommitCursorResponse(): StreamingCommitCursorResponse {
  return { initial: undefined, commit: undefined };
}

export const StreamingCommitCursorResponse: MessageFns<StreamingCommitCursorResponse> = {
  encode(message: StreamingCommitCursorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.initial !== undefined) {
      InitialCommitCursorResponse.encode(message.initial, writer.uint32(10).fork()).join();
    }
    if (message.commit !== undefined) {
      SequencedCommitCursorResponse.encode(message.commit, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StreamingCommitCursorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamingCommitCursorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.initial = InitialCommitCursorResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commit = SequencedCommitCursorResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamingCommitCursorResponse {
    return {
      initial: isSet(object.initial) ? InitialCommitCursorResponse.fromJSON(object.initial) : undefined,
      commit: isSet(object.commit) ? SequencedCommitCursorResponse.fromJSON(object.commit) : undefined,
    };
  },

  toJSON(message: StreamingCommitCursorResponse): unknown {
    const obj: any = {};
    if (message.initial !== undefined) {
      obj.initial = InitialCommitCursorResponse.toJSON(message.initial);
    }
    if (message.commit !== undefined) {
      obj.commit = SequencedCommitCursorResponse.toJSON(message.commit);
    }
    return obj;
  },

  create(base?: DeepPartial<StreamingCommitCursorResponse>): StreamingCommitCursorResponse {
    return StreamingCommitCursorResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StreamingCommitCursorResponse>): StreamingCommitCursorResponse {
    const message = createBaseStreamingCommitCursorResponse();
    message.initial = (object.initial !== undefined && object.initial !== null)
      ? InitialCommitCursorResponse.fromPartial(object.initial)
      : undefined;
    message.commit = (object.commit !== undefined && object.commit !== null)
      ? SequencedCommitCursorResponse.fromPartial(object.commit)
      : undefined;
    return message;
  },
};

function createBaseCommitCursorRequest(): CommitCursorRequest {
  return { subscription: "", partition: Long.ZERO, cursor: undefined };
}

export const CommitCursorRequest: MessageFns<CommitCursorRequest> = {
  encode(message: CommitCursorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.subscription !== "") {
      writer.uint32(10).string(message.subscription);
    }
    if (!message.partition.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.partition.toString());
    }
    if (message.cursor !== undefined) {
      Cursor.encode(message.cursor, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CommitCursorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitCursorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscription = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.partition = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cursor = Cursor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitCursorRequest {
    return {
      subscription: isSet(object.subscription) ? globalThis.String(object.subscription) : "",
      partition: isSet(object.partition) ? Long.fromValue(object.partition) : Long.ZERO,
      cursor: isSet(object.cursor) ? Cursor.fromJSON(object.cursor) : undefined,
    };
  },

  toJSON(message: CommitCursorRequest): unknown {
    const obj: any = {};
    if (message.subscription !== "") {
      obj.subscription = message.subscription;
    }
    if (!message.partition.equals(Long.ZERO)) {
      obj.partition = (message.partition || Long.ZERO).toString();
    }
    if (message.cursor !== undefined) {
      obj.cursor = Cursor.toJSON(message.cursor);
    }
    return obj;
  },

  create(base?: DeepPartial<CommitCursorRequest>): CommitCursorRequest {
    return CommitCursorRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CommitCursorRequest>): CommitCursorRequest {
    const message = createBaseCommitCursorRequest();
    message.subscription = object.subscription ?? "";
    message.partition = (object.partition !== undefined && object.partition !== null)
      ? Long.fromValue(object.partition)
      : Long.ZERO;
    message.cursor = (object.cursor !== undefined && object.cursor !== null)
      ? Cursor.fromPartial(object.cursor)
      : undefined;
    return message;
  },
};

function createBaseCommitCursorResponse(): CommitCursorResponse {
  return {};
}

export const CommitCursorResponse: MessageFns<CommitCursorResponse> = {
  encode(_: CommitCursorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CommitCursorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitCursorResponse();
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

  fromJSON(_: any): CommitCursorResponse {
    return {};
  },

  toJSON(_: CommitCursorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CommitCursorResponse>): CommitCursorResponse {
    return CommitCursorResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CommitCursorResponse>): CommitCursorResponse {
    const message = createBaseCommitCursorResponse();
    return message;
  },
};

function createBaseListPartitionCursorsRequest(): ListPartitionCursorsRequest {
  return { parent: "", pageSize: 0, pageToken: "" };
}

export const ListPartitionCursorsRequest: MessageFns<ListPartitionCursorsRequest> = {
  encode(message: ListPartitionCursorsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListPartitionCursorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPartitionCursorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListPartitionCursorsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListPartitionCursorsRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListPartitionCursorsRequest>): ListPartitionCursorsRequest {
    return ListPartitionCursorsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPartitionCursorsRequest>): ListPartitionCursorsRequest {
    const message = createBaseListPartitionCursorsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBasePartitionCursor(): PartitionCursor {
  return { partition: Long.ZERO, cursor: undefined };
}

export const PartitionCursor: MessageFns<PartitionCursor> = {
  encode(message: PartitionCursor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.partition.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.partition.toString());
    }
    if (message.cursor !== undefined) {
      Cursor.encode(message.cursor, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PartitionCursor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartitionCursor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.partition = Long.fromString(reader.int64().toString());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cursor = Cursor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PartitionCursor {
    return {
      partition: isSet(object.partition) ? Long.fromValue(object.partition) : Long.ZERO,
      cursor: isSet(object.cursor) ? Cursor.fromJSON(object.cursor) : undefined,
    };
  },

  toJSON(message: PartitionCursor): unknown {
    const obj: any = {};
    if (!message.partition.equals(Long.ZERO)) {
      obj.partition = (message.partition || Long.ZERO).toString();
    }
    if (message.cursor !== undefined) {
      obj.cursor = Cursor.toJSON(message.cursor);
    }
    return obj;
  },

  create(base?: DeepPartial<PartitionCursor>): PartitionCursor {
    return PartitionCursor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PartitionCursor>): PartitionCursor {
    const message = createBasePartitionCursor();
    message.partition = (object.partition !== undefined && object.partition !== null)
      ? Long.fromValue(object.partition)
      : Long.ZERO;
    message.cursor = (object.cursor !== undefined && object.cursor !== null)
      ? Cursor.fromPartial(object.cursor)
      : undefined;
    return message;
  },
};

function createBaseListPartitionCursorsResponse(): ListPartitionCursorsResponse {
  return { partitionCursors: [], nextPageToken: "" };
}

export const ListPartitionCursorsResponse: MessageFns<ListPartitionCursorsResponse> = {
  encode(message: ListPartitionCursorsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.partitionCursors) {
      PartitionCursor.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListPartitionCursorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPartitionCursorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.partitionCursors.push(PartitionCursor.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListPartitionCursorsResponse {
    return {
      partitionCursors: globalThis.Array.isArray(object?.partitionCursors)
        ? object.partitionCursors.map((e: any) => PartitionCursor.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListPartitionCursorsResponse): unknown {
    const obj: any = {};
    if (message.partitionCursors?.length) {
      obj.partitionCursors = message.partitionCursors.map((e) => PartitionCursor.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListPartitionCursorsResponse>): ListPartitionCursorsResponse {
    return ListPartitionCursorsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPartitionCursorsResponse>): ListPartitionCursorsResponse {
    const message = createBaseListPartitionCursorsResponse();
    message.partitionCursors = object.partitionCursors?.map((e) => PartitionCursor.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

/**
 * The service that a subscriber client application uses to manage committed
 * cursors while receiving messsages. A cursor represents a subscriber's
 * progress within a topic partition for a given subscription.
 */
export type CursorServiceDefinition = typeof CursorServiceDefinition;
export const CursorServiceDefinition = {
  name: "CursorService",
  fullName: "google.cloud.pubsublite.v1.CursorService",
  methods: {
    /** Establishes a stream with the server for managing committed cursors. */
    streamingCommitCursor: {
      name: "StreamingCommitCursor",
      requestType: StreamingCommitCursorRequest,
      requestStream: true,
      responseType: StreamingCommitCursorResponse,
      responseStream: true,
      options: {},
    },
    /** Updates the committed cursor. */
    commitCursor: {
      name: "CommitCursor",
      requestType: CommitCursorRequest,
      requestStream: false,
      responseType: CommitCursorResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              82,
              58,
              1,
              42,
              34,
              77,
              47,
              118,
              49,
              47,
              99,
              117,
              114,
              115,
              111,
              114,
              47,
              123,
              115,
              117,
              98,
              115,
              99,
              114,
              105,
              112,
              116,
              105,
              111,
              110,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              115,
              117,
              98,
              115,
              99,
              114,
              105,
              112,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              58,
              99,
              111,
              109,
              109,
              105,
              116,
              67,
              117,
              114,
              115,
              111,
              114,
            ]),
          ],
        },
      },
    },
    /** Returns all committed cursor information for a subscription. */
    listPartitionCursors: {
      name: "ListPartitionCursors",
      requestType: ListPartitionCursorsRequest,
      requestStream: false,
      responseType: ListPartitionCursorsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              68,
              18,
              66,
              47,
              118,
              49,
              47,
              99,
              117,
              114,
              115,
              111,
              114,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              115,
              117,
              98,
              115,
              99,
              114,
              105,
              112,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              47,
              99,
              117,
              114,
              115,
              111,
              114,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface CursorServiceImplementation<CallContextExt = {}> {
  /** Establishes a stream with the server for managing committed cursors. */
  streamingCommitCursor(
    request: AsyncIterable<StreamingCommitCursorRequest>,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<StreamingCommitCursorResponse>>;
  /** Updates the committed cursor. */
  commitCursor(
    request: CommitCursorRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CommitCursorResponse>>;
  /** Returns all committed cursor information for a subscription. */
  listPartitionCursors(
    request: ListPartitionCursorsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListPartitionCursorsResponse>>;
}

export interface CursorServiceClient<CallOptionsExt = {}> {
  /** Establishes a stream with the server for managing committed cursors. */
  streamingCommitCursor(
    request: AsyncIterable<DeepPartial<StreamingCommitCursorRequest>>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<StreamingCommitCursorResponse>;
  /** Updates the committed cursor. */
  commitCursor(
    request: DeepPartial<CommitCursorRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CommitCursorResponse>;
  /** Returns all committed cursor information for a subscription. */
  listPartitionCursors(
    request: DeepPartial<ListPartitionCursorsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListPartitionCursorsResponse>;
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
