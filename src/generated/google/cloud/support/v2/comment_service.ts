// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/support/v2/comment_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Comment } from "./comment.js";

export const protobufPackage = "google.cloud.support.v2";

/** The request message for the ListComments endpoint. */
export interface ListCommentsRequest {
  /**
   * Required. The resource name of Case object for which comments should be
   * listed.
   */
  parent: string;
  /** The maximum number of comments fetched with each request. Defaults to 10. */
  pageSize: number;
  /**
   * A token identifying the page of results to return. If unspecified, the
   * first page is retrieved.
   */
  pageToken: string;
}

/** The response message for the ListComments endpoint. */
export interface ListCommentsResponse {
  /** The list of Comments associated with the given Case. */
  comments: Comment[];
  /**
   * A token to retrieve the next page of results. This should be set in the
   * `page_token` field of subsequent `ListCommentsRequest` message that is
   * issued. If unspecified, there are no more results to retrieve.
   */
  nextPageToken: string;
}

/** The request message for CreateComment endpoint. */
export interface CreateCommentRequest {
  /** Required. The resource name of Case to which this comment should be added. */
  parent: string;
  /** Required. The Comment object to be added to this Case. */
  comment: Comment | undefined;
}

function createBaseListCommentsRequest(): ListCommentsRequest {
  return { parent: "", pageSize: 0, pageToken: "" };
}

export const ListCommentsRequest: MessageFns<ListCommentsRequest> = {
  encode(message: ListCommentsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListCommentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCommentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): ListCommentsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListCommentsRequest): unknown {
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

  create(base?: DeepPartial<ListCommentsRequest>): ListCommentsRequest {
    return ListCommentsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListCommentsRequest>): ListCommentsRequest {
    const message = createBaseListCommentsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListCommentsResponse(): ListCommentsResponse {
  return { comments: [], nextPageToken: "" };
}

export const ListCommentsResponse: MessageFns<ListCommentsResponse> = {
  encode(message: ListCommentsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.comments) {
      Comment.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListCommentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCommentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.comments.push(Comment.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListCommentsResponse {
    return {
      comments: globalThis.Array.isArray(object?.comments) ? object.comments.map((e: any) => Comment.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListCommentsResponse): unknown {
    const obj: any = {};
    if (message.comments?.length) {
      obj.comments = message.comments.map((e) => Comment.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListCommentsResponse>): ListCommentsResponse {
    return ListCommentsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListCommentsResponse>): ListCommentsResponse {
    const message = createBaseListCommentsResponse();
    message.comments = object.comments?.map((e) => Comment.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseCreateCommentRequest(): CreateCommentRequest {
  return { parent: "", comment: undefined };
}

export const CreateCommentRequest: MessageFns<CreateCommentRequest> = {
  encode(message: CreateCommentRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.comment !== undefined) {
      Comment.encode(message.comment, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateCommentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCommentRequest();
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
          if (tag !== 18) {
            break;
          }

          message.comment = Comment.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateCommentRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      comment: isSet(object.comment) ? Comment.fromJSON(object.comment) : undefined,
    };
  },

  toJSON(message: CreateCommentRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.comment !== undefined) {
      obj.comment = Comment.toJSON(message.comment);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateCommentRequest>): CreateCommentRequest {
    return CreateCommentRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateCommentRequest>): CreateCommentRequest {
    const message = createBaseCreateCommentRequest();
    message.parent = object.parent ?? "";
    message.comment = (object.comment !== undefined && object.comment !== null)
      ? Comment.fromPartial(object.comment)
      : undefined;
    return message;
  },
};

/** A service to manage comments on cases. */
export type CommentServiceDefinition = typeof CommentServiceDefinition;
export const CommentServiceDefinition = {
  name: "CommentService",
  fullName: "google.cloud.support.v2.CommentService",
  methods: {
    /** Retrieve all Comments associated with the Case object. */
    listComments: {
      name: "ListComments",
      requestType: ListCommentsRequest,
      requestStream: false,
      responseType: ListCommentsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              91,
              90,
              47,
              18,
              45,
              47,
              118,
              50,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              111,
              114,
              103,
              97,
              110,
              105,
              122,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              99,
              97,
              115,
              101,
              115,
              47,
              42,
              125,
              47,
              99,
              111,
              109,
              109,
              101,
              110,
              116,
              115,
              18,
              40,
              47,
              118,
              50,
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
              99,
              97,
              115,
              101,
              115,
              47,
              42,
              125,
              47,
              99,
              111,
              109,
              109,
              101,
              110,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /**
     * Add a new comment to the specified Case.
     * The comment object must have the following fields set: body.
     */
    createComment: {
      name: "CreateComment",
      requestType: CreateCommentRequest,
      requestStream: false,
      responseType: Comment,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([14, 112, 97, 114, 101, 110, 116, 44, 99, 111, 109, 109, 101, 110, 116])],
          578365826: [
            Buffer.from([
              109,
              58,
              7,
              99,
              111,
              109,
              109,
              101,
              110,
              116,
              90,
              56,
              58,
              7,
              99,
              111,
              109,
              109,
              101,
              110,
              116,
              34,
              45,
              47,
              118,
              50,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              111,
              114,
              103,
              97,
              110,
              105,
              122,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              99,
              97,
              115,
              101,
              115,
              47,
              42,
              125,
              47,
              99,
              111,
              109,
              109,
              101,
              110,
              116,
              115,
              34,
              40,
              47,
              118,
              50,
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
              99,
              97,
              115,
              101,
              115,
              47,
              42,
              125,
              47,
              99,
              111,
              109,
              109,
              101,
              110,
              116,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface CommentServiceImplementation<CallContextExt = {}> {
  /** Retrieve all Comments associated with the Case object. */
  listComments(
    request: ListCommentsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListCommentsResponse>>;
  /**
   * Add a new comment to the specified Case.
   * The comment object must have the following fields set: body.
   */
  createComment(request: CreateCommentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Comment>>;
}

export interface CommentServiceClient<CallOptionsExt = {}> {
  /** Retrieve all Comments associated with the Case object. */
  listComments(
    request: DeepPartial<ListCommentsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListCommentsResponse>;
  /**
   * Add a new comment to the specified Case.
   * The comment object must have the following fields set: body.
   */
  createComment(request: DeepPartial<CreateCommentRequest>, options?: CallOptions & CallOptionsExt): Promise<Comment>;
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