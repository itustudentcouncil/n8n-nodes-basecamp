// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/extension_feed_item_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { FieldMask } from "../../../../protobuf/field_mask.js";
import { Status } from "../../../../rpc/status.js";
import {
  ResponseContentTypeEnum_ResponseContentType,
  responseContentTypeEnum_ResponseContentTypeFromJSON,
  responseContentTypeEnum_ResponseContentTypeToJSON,
} from "../enums/response_content_type.js";
import { ExtensionFeedItem } from "../resources/extension_feed_item.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [ExtensionFeedItemService.MutateExtensionFeedItems][google.ads.googleads.v16.services.ExtensionFeedItemService.MutateExtensionFeedItems].
 */
export interface MutateExtensionFeedItemsRequest {
  /**
   * Required. The ID of the customer whose extension feed items are being
   * modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual extension feed
   * items.
   */
  operations: ExtensionFeedItemOperation[];
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
  /**
   * The response content type setting. Determines whether the mutable resource
   * or just the resource name should be returned post mutation.
   */
  responseContentType: ResponseContentTypeEnum_ResponseContentType;
}

/** A single operation (create, update, remove) on an extension feed item. */
export interface ExtensionFeedItemOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * Create operation: No resource name is expected for the new extension
   * feed item.
   */
  create?:
    | ExtensionFeedItem
    | undefined;
  /**
   * Update operation: The extension feed item is expected to have a
   * valid resource name.
   */
  update?:
    | ExtensionFeedItem
    | undefined;
  /**
   * Remove operation: A resource name for the removed extension feed item
   * is expected, in this format:
   *
   * `customers/{customer_id}/extensionFeedItems/{feed_item_id}`
   */
  remove?: string | undefined;
}

/** Response message for an extension feed item mutate. */
export interface MutateExtensionFeedItemsResponse {
  /**
   * Errors that pertain to operation failures in the partial failure mode.
   * Returned only when partial_failure = true and all errors occur inside the
   * operations. If any errors occur outside the operations (for example, auth
   * errors), we return an RPC level error.
   */
  partialFailureError:
    | Status
    | undefined;
  /** All results for the mutate. */
  results: MutateExtensionFeedItemResult[];
}

/** The result for the extension feed item mutate. */
export interface MutateExtensionFeedItemResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated extension feed item with only mutable fields after mutate. The
   * field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   */
  extensionFeedItem: ExtensionFeedItem | undefined;
}

function createBaseMutateExtensionFeedItemsRequest(): MutateExtensionFeedItemsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateExtensionFeedItemsRequest: MessageFns<MutateExtensionFeedItemsRequest> = {
  encode(message: MutateExtensionFeedItemsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      ExtensionFeedItemOperation.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.partialFailure !== false) {
      writer.uint32(24).bool(message.partialFailure);
    }
    if (message.validateOnly !== false) {
      writer.uint32(32).bool(message.validateOnly);
    }
    if (message.responseContentType !== 0) {
      writer.uint32(40).int32(message.responseContentType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateExtensionFeedItemsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateExtensionFeedItemsRequest();
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

          message.operations.push(ExtensionFeedItemOperation.decode(reader, reader.uint32()));
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
        case 5:
          if (tag !== 40) {
            break;
          }

          message.responseContentType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateExtensionFeedItemsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => ExtensionFeedItemOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateExtensionFeedItemsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => ExtensionFeedItemOperation.toJSON(e));
    }
    if (message.partialFailure !== false) {
      obj.partialFailure = message.partialFailure;
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    if (message.responseContentType !== 0) {
      obj.responseContentType = responseContentTypeEnum_ResponseContentTypeToJSON(message.responseContentType);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateExtensionFeedItemsRequest>): MutateExtensionFeedItemsRequest {
    return MutateExtensionFeedItemsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateExtensionFeedItemsRequest>): MutateExtensionFeedItemsRequest {
    const message = createBaseMutateExtensionFeedItemsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => ExtensionFeedItemOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseExtensionFeedItemOperation(): ExtensionFeedItemOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const ExtensionFeedItemOperation: MessageFns<ExtensionFeedItemOperation> = {
  encode(message: ExtensionFeedItemOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      ExtensionFeedItem.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      ExtensionFeedItem.encode(message.update, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExtensionFeedItemOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionFeedItemOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.create = ExtensionFeedItem.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = ExtensionFeedItem.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): ExtensionFeedItemOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? ExtensionFeedItem.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? ExtensionFeedItem.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: ExtensionFeedItemOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = ExtensionFeedItem.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = ExtensionFeedItem.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<ExtensionFeedItemOperation>): ExtensionFeedItemOperation {
    return ExtensionFeedItemOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExtensionFeedItemOperation>): ExtensionFeedItemOperation {
    const message = createBaseExtensionFeedItemOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? ExtensionFeedItem.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? ExtensionFeedItem.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateExtensionFeedItemsResponse(): MutateExtensionFeedItemsResponse {
  return { partialFailureError: undefined, results: [] };
}

export const MutateExtensionFeedItemsResponse: MessageFns<MutateExtensionFeedItemsResponse> = {
  encode(message: MutateExtensionFeedItemsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(26).fork()).join();
    }
    for (const v of message.results) {
      MutateExtensionFeedItemResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateExtensionFeedItemsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateExtensionFeedItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.partialFailureError = Status.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(MutateExtensionFeedItemResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateExtensionFeedItemsResponse {
    return {
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateExtensionFeedItemResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateExtensionFeedItemsResponse): unknown {
    const obj: any = {};
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateExtensionFeedItemResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateExtensionFeedItemsResponse>): MutateExtensionFeedItemsResponse {
    return MutateExtensionFeedItemsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateExtensionFeedItemsResponse>): MutateExtensionFeedItemsResponse {
    const message = createBaseMutateExtensionFeedItemsResponse();
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    message.results = object.results?.map((e) => MutateExtensionFeedItemResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateExtensionFeedItemResult(): MutateExtensionFeedItemResult {
  return { resourceName: "", extensionFeedItem: undefined };
}

export const MutateExtensionFeedItemResult: MessageFns<MutateExtensionFeedItemResult> = {
  encode(message: MutateExtensionFeedItemResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.extensionFeedItem !== undefined) {
      ExtensionFeedItem.encode(message.extensionFeedItem, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateExtensionFeedItemResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateExtensionFeedItemResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extensionFeedItem = ExtensionFeedItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateExtensionFeedItemResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      extensionFeedItem: isSet(object.extensionFeedItem)
        ? ExtensionFeedItem.fromJSON(object.extensionFeedItem)
        : undefined,
    };
  },

  toJSON(message: MutateExtensionFeedItemResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.extensionFeedItem !== undefined) {
      obj.extensionFeedItem = ExtensionFeedItem.toJSON(message.extensionFeedItem);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateExtensionFeedItemResult>): MutateExtensionFeedItemResult {
    return MutateExtensionFeedItemResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateExtensionFeedItemResult>): MutateExtensionFeedItemResult {
    const message = createBaseMutateExtensionFeedItemResult();
    message.resourceName = object.resourceName ?? "";
    message.extensionFeedItem = (object.extensionFeedItem !== undefined && object.extensionFeedItem !== null)
      ? ExtensionFeedItem.fromPartial(object.extensionFeedItem)
      : undefined;
    return message;
  },
};

/** Service to manage extension feed items. */
export type ExtensionFeedItemServiceDefinition = typeof ExtensionFeedItemServiceDefinition;
export const ExtensionFeedItemServiceDefinition = {
  name: "ExtensionFeedItemService",
  fullName: "google.ads.googleads.v16.services.ExtensionFeedItemService",
  methods: {
    /**
     * Creates, updates, or removes extension feed items. Operation
     * statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [CountryCodeError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DistinctError]()
     *   [ExtensionFeedItemError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [ImageError]()
     *   [InternalError]()
     *   [LanguageCodeError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [OperationAccessDeniedError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [SizeLimitError]()
     *   [StringLengthError]()
     *   [UrlFieldError]()
     */
    mutateExtensionFeedItems: {
      name: "MutateExtensionFeedItems",
      requestType: MutateExtensionFeedItemsRequest,
      requestStream: false,
      responseType: MutateExtensionFeedItemsResponse,
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
              61,
              58,
              1,
              42,
              34,
              56,
              47,
              118,
              49,
              54,
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
              101,
              120,
              116,
              101,
              110,
              115,
              105,
              111,
              110,
              70,
              101,
              101,
              100,
              73,
              116,
              101,
              109,
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

export interface ExtensionFeedItemServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates, or removes extension feed items. Operation
   * statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CollectionSizeError]()
   *   [CountryCodeError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DistinctError]()
   *   [ExtensionFeedItemError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [ImageError]()
   *   [InternalError]()
   *   [LanguageCodeError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [OperationAccessDeniedError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   */
  mutateExtensionFeedItems(
    request: MutateExtensionFeedItemsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateExtensionFeedItemsResponse>>;
}

export interface ExtensionFeedItemServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates, or removes extension feed items. Operation
   * statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CollectionSizeError]()
   *   [CountryCodeError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DistinctError]()
   *   [ExtensionFeedItemError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [ImageError]()
   *   [InternalError]()
   *   [LanguageCodeError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [OperationAccessDeniedError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   */
  mutateExtensionFeedItems(
    request: DeepPartial<MutateExtensionFeedItemsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateExtensionFeedItemsResponse>;
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