// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/feed_item_set_link_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Status } from "../../../../rpc/status.js";
import { FeedItemSetLink } from "../resources/feed_item_set_link.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [FeedItemSetLinkService.MutateFeedItemSetLinks][google.ads.googleads.v17.services.FeedItemSetLinkService.MutateFeedItemSetLinks].
 */
export interface MutateFeedItemSetLinksRequest {
  /**
   * Required. The ID of the customer whose feed item set links are being
   * modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual feed item set
   * links.
   */
  operations: FeedItemSetLinkOperation[];
  /**
   * If true, successful operations will be carried out and invalid
   * operations will return errors. If false, all operations will be carried
   * out in one transaction if and only if they are all valid.
   * Default is false.
   */
  partialFailure: boolean;
  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   */
  validateOnly: boolean;
}

/** A single operation (create, update, remove) on a feed item set link. */
export interface FeedItemSetLinkOperation {
  /**
   * Create operation: No resource name is expected for the
   * new feed item set link.
   */
  create?:
    | FeedItemSetLink
    | undefined;
  /**
   * Remove operation: A resource name for the removed feed item set link is
   * expected, in this format:
   *
   * `customers/{customer_id}/feedItemSetLinks/{feed_id}_{feed_item_set_id}_{feed_item_id}`
   */
  remove?: string | undefined;
}

/** Response message for a feed item set link mutate. */
export interface MutateFeedItemSetLinksResponse {
  /** All results for the mutate. */
  results: MutateFeedItemSetLinkResult[];
  /**
   * Errors that pertain to operation failures in the partial failure mode.
   * Returned only when partial_failure = true and all errors occur inside the
   * operations. If any errors occur outside the operations (for example, auth
   * errors), we return an RPC level error.
   */
  partialFailureError: Status | undefined;
}

/** The result for the feed item set link mutate. */
export interface MutateFeedItemSetLinkResult {
  /** Returned for successful operations. */
  resourceName: string;
}

function createBaseMutateFeedItemSetLinksRequest(): MutateFeedItemSetLinksRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false };
}

export const MutateFeedItemSetLinksRequest: MessageFns<MutateFeedItemSetLinksRequest> = {
  encode(message: MutateFeedItemSetLinksRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      FeedItemSetLinkOperation.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.partialFailure !== false) {
      writer.uint32(24).bool(message.partialFailure);
    }
    if (message.validateOnly !== false) {
      writer.uint32(32).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateFeedItemSetLinksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateFeedItemSetLinksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operations.push(FeedItemSetLinkOperation.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.partialFailure = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.validateOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateFeedItemSetLinksRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => FeedItemSetLinkOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: MutateFeedItemSetLinksRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => FeedItemSetLinkOperation.toJSON(e));
    }
    if (message.partialFailure !== false) {
      obj.partialFailure = message.partialFailure;
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateFeedItemSetLinksRequest>): MutateFeedItemSetLinksRequest {
    return MutateFeedItemSetLinksRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateFeedItemSetLinksRequest>): MutateFeedItemSetLinksRequest {
    const message = createBaseMutateFeedItemSetLinksRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => FeedItemSetLinkOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseFeedItemSetLinkOperation(): FeedItemSetLinkOperation {
  return { create: undefined, remove: undefined };
}

export const FeedItemSetLinkOperation: MessageFns<FeedItemSetLinkOperation> = {
  encode(message: FeedItemSetLinkOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.create !== undefined) {
      FeedItemSetLink.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(18).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeedItemSetLinkOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedItemSetLinkOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.create = FeedItemSetLink.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remove = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeedItemSetLinkOperation {
    return {
      create: isSet(object.create) ? FeedItemSetLink.fromJSON(object.create) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: FeedItemSetLinkOperation): unknown {
    const obj: any = {};
    if (message.create !== undefined) {
      obj.create = FeedItemSetLink.toJSON(message.create);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<FeedItemSetLinkOperation>): FeedItemSetLinkOperation {
    return FeedItemSetLinkOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FeedItemSetLinkOperation>): FeedItemSetLinkOperation {
    const message = createBaseFeedItemSetLinkOperation();
    message.create = (object.create !== undefined && object.create !== null)
      ? FeedItemSetLink.fromPartial(object.create)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateFeedItemSetLinksResponse(): MutateFeedItemSetLinksResponse {
  return { results: [], partialFailureError: undefined };
}

export const MutateFeedItemSetLinksResponse: MessageFns<MutateFeedItemSetLinksResponse> = {
  encode(message: MutateFeedItemSetLinksResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      MutateFeedItemSetLinkResult.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateFeedItemSetLinksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateFeedItemSetLinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(MutateFeedItemSetLinkResult.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.partialFailureError = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateFeedItemSetLinksResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateFeedItemSetLinkResult.fromJSON(e))
        : [],
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
    };
  },

  toJSON(message: MutateFeedItemSetLinksResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateFeedItemSetLinkResult.toJSON(e));
    }
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateFeedItemSetLinksResponse>): MutateFeedItemSetLinksResponse {
    return MutateFeedItemSetLinksResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateFeedItemSetLinksResponse>): MutateFeedItemSetLinksResponse {
    const message = createBaseMutateFeedItemSetLinksResponse();
    message.results = object.results?.map((e) => MutateFeedItemSetLinkResult.fromPartial(e)) || [];
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    return message;
  },
};

function createBaseMutateFeedItemSetLinkResult(): MutateFeedItemSetLinkResult {
  return { resourceName: "" };
}

export const MutateFeedItemSetLinkResult: MessageFns<MutateFeedItemSetLinkResult> = {
  encode(message: MutateFeedItemSetLinkResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateFeedItemSetLinkResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateFeedItemSetLinkResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateFeedItemSetLinkResult {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: MutateFeedItemSetLinkResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateFeedItemSetLinkResult>): MutateFeedItemSetLinkResult {
    return MutateFeedItemSetLinkResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateFeedItemSetLinkResult>): MutateFeedItemSetLinkResult {
    const message = createBaseMutateFeedItemSetLinkResult();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

/** Service to manage feed item set links. */
export type FeedItemSetLinkServiceDefinition = typeof FeedItemSetLinkServiceDefinition;
export const FeedItemSetLinkServiceDefinition = {
  name: "FeedItemSetLinkService",
  fullName: "google.ads.googleads.v17.services.FeedItemSetLinkService",
  methods: {
    /**
     * Creates, updates, or removes feed item set links.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     */
    mutateFeedItemSetLinks: {
      name: "MutateFeedItemSetLinks",
      requestType: MutateFeedItemSetLinksRequest,
      requestStream: false,
      responseType: MutateFeedItemSetLinksResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              22,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              95,
              105,
              100,
              44,
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
            ]),
          ],
          578365826: [
            Buffer.from([
              59,
              58,
              1,
              42,
              34,
              54,
              47,
              118,
              49,
              55,
              47,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              115,
              47,
              123,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              95,
              105,
              100,
              61,
              42,
              125,
              47,
              102,
              101,
              101,
              100,
              73,
              116,
              101,
              109,
              83,
              101,
              116,
              76,
              105,
              110,
              107,
              115,
              58,
              109,
              117,
              116,
              97,
              116,
              101,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface FeedItemSetLinkServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates, or removes feed item set links.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  mutateFeedItemSetLinks(
    request: MutateFeedItemSetLinksRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateFeedItemSetLinksResponse>>;
}

export interface FeedItemSetLinkServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates, or removes feed item set links.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  mutateFeedItemSetLinks(
    request: DeepPartial<MutateFeedItemSetLinksRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateFeedItemSetLinksResponse>;
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
