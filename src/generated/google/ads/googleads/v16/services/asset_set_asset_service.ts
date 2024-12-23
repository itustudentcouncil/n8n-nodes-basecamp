// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/asset_set_asset_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Status } from "../../../../rpc/status.js";
import {
  ResponseContentTypeEnum_ResponseContentType,
  responseContentTypeEnum_ResponseContentTypeFromJSON,
  responseContentTypeEnum_ResponseContentTypeToJSON,
} from "../enums/response_content_type.js";
import { AssetSetAsset } from "../resources/asset_set_asset.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [AssetSetAssetService.MutateAssetSetAssets][google.ads.googleads.v16.services.AssetSetAssetService.MutateAssetSetAssets].
 */
export interface MutateAssetSetAssetsRequest {
  /** Required. The ID of the customer whose asset set assets are being modified. */
  customerId: string;
  /** Required. The list of operations to perform on individual asset set assets. */
  operations: AssetSetAssetOperation[];
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

/** A single operation (create, remove) on an asset set asset. */
export interface AssetSetAssetOperation {
  /**
   * Create operation: No resource name is expected for the new asset set
   * asset
   */
  create?:
    | AssetSetAsset
    | undefined;
  /**
   * Remove operation: A resource name for the removed asset set asset is
   * expected, in this format:
   * `customers/{customer_id}/assetSetAssets/{asset_set_id}~{asset_id}`
   */
  remove?: string | undefined;
}

/** Response message for an asset set asset mutate. */
export interface MutateAssetSetAssetsResponse {
  /** All results for the mutate. */
  results: MutateAssetSetAssetResult[];
  /**
   * Errors that pertain to operation failures in the partial failure mode.
   * Returned only when partial_failure = true and all errors occur inside the
   * operations. If any errors occur outside the operations (for example, auth
   * errors), we return an RPC level error.
   */
  partialFailureError: Status | undefined;
}

/** The result for the asset set asset mutate. */
export interface MutateAssetSetAssetResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated asset set asset with only mutable fields after mutate. The
   * field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   */
  assetSetAsset: AssetSetAsset | undefined;
}

function createBaseMutateAssetSetAssetsRequest(): MutateAssetSetAssetsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateAssetSetAssetsRequest: MessageFns<MutateAssetSetAssetsRequest> = {
  encode(message: MutateAssetSetAssetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      AssetSetAssetOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAssetSetAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAssetSetAssetsRequest();
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

          message.operations.push(AssetSetAssetOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateAssetSetAssetsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => AssetSetAssetOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateAssetSetAssetsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => AssetSetAssetOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateAssetSetAssetsRequest>): MutateAssetSetAssetsRequest {
    return MutateAssetSetAssetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAssetSetAssetsRequest>): MutateAssetSetAssetsRequest {
    const message = createBaseMutateAssetSetAssetsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => AssetSetAssetOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseAssetSetAssetOperation(): AssetSetAssetOperation {
  return { create: undefined, remove: undefined };
}

export const AssetSetAssetOperation: MessageFns<AssetSetAssetOperation> = {
  encode(message: AssetSetAssetOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.create !== undefined) {
      AssetSetAsset.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(18).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AssetSetAssetOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSetAssetOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.create = AssetSetAsset.decode(reader, reader.uint32());
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

  fromJSON(object: any): AssetSetAssetOperation {
    return {
      create: isSet(object.create) ? AssetSetAsset.fromJSON(object.create) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: AssetSetAssetOperation): unknown {
    const obj: any = {};
    if (message.create !== undefined) {
      obj.create = AssetSetAsset.toJSON(message.create);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<AssetSetAssetOperation>): AssetSetAssetOperation {
    return AssetSetAssetOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AssetSetAssetOperation>): AssetSetAssetOperation {
    const message = createBaseAssetSetAssetOperation();
    message.create = (object.create !== undefined && object.create !== null)
      ? AssetSetAsset.fromPartial(object.create)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateAssetSetAssetsResponse(): MutateAssetSetAssetsResponse {
  return { results: [], partialFailureError: undefined };
}

export const MutateAssetSetAssetsResponse: MessageFns<MutateAssetSetAssetsResponse> = {
  encode(message: MutateAssetSetAssetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      MutateAssetSetAssetResult.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAssetSetAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAssetSetAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(MutateAssetSetAssetResult.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateAssetSetAssetsResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateAssetSetAssetResult.fromJSON(e))
        : [],
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
    };
  },

  toJSON(message: MutateAssetSetAssetsResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateAssetSetAssetResult.toJSON(e));
    }
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateAssetSetAssetsResponse>): MutateAssetSetAssetsResponse {
    return MutateAssetSetAssetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAssetSetAssetsResponse>): MutateAssetSetAssetsResponse {
    const message = createBaseMutateAssetSetAssetsResponse();
    message.results = object.results?.map((e) => MutateAssetSetAssetResult.fromPartial(e)) || [];
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    return message;
  },
};

function createBaseMutateAssetSetAssetResult(): MutateAssetSetAssetResult {
  return { resourceName: "", assetSetAsset: undefined };
}

export const MutateAssetSetAssetResult: MessageFns<MutateAssetSetAssetResult> = {
  encode(message: MutateAssetSetAssetResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.assetSetAsset !== undefined) {
      AssetSetAsset.encode(message.assetSetAsset, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAssetSetAssetResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAssetSetAssetResult();
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

          message.assetSetAsset = AssetSetAsset.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateAssetSetAssetResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      assetSetAsset: isSet(object.assetSetAsset) ? AssetSetAsset.fromJSON(object.assetSetAsset) : undefined,
    };
  },

  toJSON(message: MutateAssetSetAssetResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.assetSetAsset !== undefined) {
      obj.assetSetAsset = AssetSetAsset.toJSON(message.assetSetAsset);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateAssetSetAssetResult>): MutateAssetSetAssetResult {
    return MutateAssetSetAssetResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAssetSetAssetResult>): MutateAssetSetAssetResult {
    const message = createBaseMutateAssetSetAssetResult();
    message.resourceName = object.resourceName ?? "";
    message.assetSetAsset = (object.assetSetAsset !== undefined && object.assetSetAsset !== null)
      ? AssetSetAsset.fromPartial(object.assetSetAsset)
      : undefined;
    return message;
  },
};

/** Service to manage asset set asset. */
export type AssetSetAssetServiceDefinition = typeof AssetSetAssetServiceDefinition;
export const AssetSetAssetServiceDefinition = {
  name: "AssetSetAssetService",
  fullName: "google.ads.googleads.v16.services.AssetSetAssetService",
  methods: {
    /**
     * Creates, updates or removes asset set assets. Operation statuses are
     * returned.
     */
    mutateAssetSetAssets: {
      name: "MutateAssetSetAssets",
      requestType: MutateAssetSetAssetsRequest,
      requestStream: false,
      responseType: MutateAssetSetAssetsResponse,
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
              57,
              58,
              1,
              42,
              34,
              52,
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
              97,
              115,
              115,
              101,
              116,
              83,
              101,
              116,
              65,
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

export interface AssetSetAssetServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates or removes asset set assets. Operation statuses are
   * returned.
   */
  mutateAssetSetAssets(
    request: MutateAssetSetAssetsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateAssetSetAssetsResponse>>;
}

export interface AssetSetAssetServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates or removes asset set assets. Operation statuses are
   * returned.
   */
  mutateAssetSetAssets(
    request: DeepPartial<MutateAssetSetAssetsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateAssetSetAssetsResponse>;
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
