// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/asset_service.proto

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
import { Asset } from "../resources/asset.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [AssetService.MutateAssets][google.ads.googleads.v17.services.AssetService.MutateAssets]
 */
export interface MutateAssetsRequest {
  /** Required. The ID of the customer whose assets are being modified. */
  customerId: string;
  /** Required. The list of operations to perform on individual assets. */
  operations: AssetOperation[];
  /**
   * If true, successful operations will be carried out and invalid
   * operations will return errors. If false, all operations will be carried
   * out in one transaction if and only if they are all valid.
   * Default is false.
   */
  partialFailure: boolean;
  /**
   * The response content type setting. Determines whether the mutable resource
   * or just the resource name should be returned post mutation.
   */
  responseContentType: ResponseContentTypeEnum_ResponseContentType;
  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   */
  validateOnly: boolean;
}

/**
 * A single operation to create an asset. Supported asset types are
 * YoutubeVideoAsset, MediaBundleAsset, ImageAsset, LeadFormAsset,
 * LocationAsset, and ImageAsset. TextAsset can be created with an Ad inline,
 * but it can also be created apart from an Ad like other assets.
 */
export interface AssetOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /** Create operation: No resource name is expected for the new asset. */
  create?:
    | Asset
    | undefined;
  /**
   * Update operation: The asset is expected to have a valid resource name in
   * this format:
   *
   * `customers/{customer_id}/assets/{asset_id}`
   */
  update?: Asset | undefined;
}

/** Response message for an asset mutate. */
export interface MutateAssetsResponse {
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
  results: MutateAssetResult[];
}

/** The result for the asset mutate. */
export interface MutateAssetResult {
  /** The resource name returned for successful operations. */
  resourceName: string;
  /**
   * The mutated asset with only mutable fields after mutate. The field will
   * only be returned when response_content_type is set to "MUTABLE_RESOURCE".
   */
  asset: Asset | undefined;
}

function createBaseMutateAssetsRequest(): MutateAssetsRequest {
  return { customerId: "", operations: [], partialFailure: false, responseContentType: 0, validateOnly: false };
}

export const MutateAssetsRequest: MessageFns<MutateAssetsRequest> = {
  encode(message: MutateAssetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      AssetOperation.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.partialFailure !== false) {
      writer.uint32(40).bool(message.partialFailure);
    }
    if (message.responseContentType !== 0) {
      writer.uint32(24).int32(message.responseContentType);
    }
    if (message.validateOnly !== false) {
      writer.uint32(32).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAssetsRequest();
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

          message.operations.push(AssetOperation.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.partialFailure = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.responseContentType = reader.int32() as any;
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

  fromJSON(object: any): MutateAssetsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => AssetOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: MutateAssetsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => AssetOperation.toJSON(e));
    }
    if (message.partialFailure !== false) {
      obj.partialFailure = message.partialFailure;
    }
    if (message.responseContentType !== 0) {
      obj.responseContentType = responseContentTypeEnum_ResponseContentTypeToJSON(message.responseContentType);
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateAssetsRequest>): MutateAssetsRequest {
    return MutateAssetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAssetsRequest>): MutateAssetsRequest {
    const message = createBaseMutateAssetsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => AssetOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseAssetOperation(): AssetOperation {
  return { updateMask: undefined, create: undefined, update: undefined };
}

export const AssetOperation: MessageFns<AssetOperation> = {
  encode(message: AssetOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).join();
    }
    if (message.create !== undefined) {
      Asset.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      Asset.encode(message.update, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AssetOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.create = Asset.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = Asset.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? Asset.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? Asset.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: AssetOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = Asset.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = Asset.toJSON(message.update);
    }
    return obj;
  },

  create(base?: DeepPartial<AssetOperation>): AssetOperation {
    return AssetOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AssetOperation>): AssetOperation {
    const message = createBaseAssetOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? Asset.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? Asset.fromPartial(object.update)
      : undefined;
    return message;
  },
};

function createBaseMutateAssetsResponse(): MutateAssetsResponse {
  return { partialFailureError: undefined, results: [] };
}

export const MutateAssetsResponse: MessageFns<MutateAssetsResponse> = {
  encode(message: MutateAssetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(26).fork()).join();
    }
    for (const v of message.results) {
      MutateAssetResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAssetsResponse();
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

          message.results.push(MutateAssetResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateAssetsResponse {
    return {
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateAssetResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateAssetsResponse): unknown {
    const obj: any = {};
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateAssetResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateAssetsResponse>): MutateAssetsResponse {
    return MutateAssetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAssetsResponse>): MutateAssetsResponse {
    const message = createBaseMutateAssetsResponse();
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    message.results = object.results?.map((e) => MutateAssetResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateAssetResult(): MutateAssetResult {
  return { resourceName: "", asset: undefined };
}

export const MutateAssetResult: MessageFns<MutateAssetResult> = {
  encode(message: MutateAssetResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAssetResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAssetResult();
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

          message.asset = Asset.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateAssetResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: MutateAssetResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.asset !== undefined) {
      obj.asset = Asset.toJSON(message.asset);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateAssetResult>): MutateAssetResult {
    return MutateAssetResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAssetResult>): MutateAssetResult {
    const message = createBaseMutateAssetResult();
    message.resourceName = object.resourceName ?? "";
    message.asset = (object.asset !== undefined && object.asset !== null) ? Asset.fromPartial(object.asset) : undefined;
    return message;
  },
};

/**
 * Service to manage assets. Asset types can be created with AssetService are
 * YoutubeVideoAsset, MediaBundleAsset and ImageAsset. TextAsset should be
 * created with Ad inline.
 */
export type AssetServiceDefinition = typeof AssetServiceDefinition;
export const AssetServiceDefinition = {
  name: "AssetService",
  fullName: "google.ads.googleads.v17.services.AssetService",
  methods: {
    /**
     * Creates assets. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AssetError]()
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [CurrencyCodeError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DistinctError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [IdError]()
     *   [InternalError]()
     *   [ListOperationError]()
     *   [MediaUploadError]()
     *   [MutateError]()
     *   [NotAllowlistedError]()
     *   [NotEmptyError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *   [UrlFieldError]()
     *   [YoutubeVideoRegistrationError]()
     */
    mutateAssets: {
      name: "MutateAssets",
      requestType: MutateAssetsRequest,
      requestStream: false,
      responseType: MutateAssetsResponse,
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
              49,
              58,
              1,
              42,
              34,
              44,
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
              97,
              115,
              115,
              101,
              116,
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

export interface AssetServiceImplementation<CallContextExt = {}> {
  /**
   * Creates assets. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AssetError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CollectionSizeError]()
   *   [CurrencyCodeError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [ListOperationError]()
   *   [MediaUploadError]()
   *   [MutateError]()
   *   [NotAllowlistedError]()
   *   [NotEmptyError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   *   [YoutubeVideoRegistrationError]()
   */
  mutateAssets(
    request: MutateAssetsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateAssetsResponse>>;
}

export interface AssetServiceClient<CallOptionsExt = {}> {
  /**
   * Creates assets. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AssetError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CollectionSizeError]()
   *   [CurrencyCodeError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [ListOperationError]()
   *   [MediaUploadError]()
   *   [MutateError]()
   *   [NotAllowlistedError]()
   *   [NotEmptyError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   *   [YoutubeVideoRegistrationError]()
   */
  mutateAssets(
    request: DeepPartial<MutateAssetsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateAssetsResponse>;
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
