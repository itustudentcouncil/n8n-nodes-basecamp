// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/campaign_asset_service.proto

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
import { CampaignAsset } from "../resources/campaign_asset.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [CampaignAssetService.MutateCampaignAssets][google.ads.googleads.v16.services.CampaignAssetService.MutateCampaignAssets].
 */
export interface MutateCampaignAssetsRequest {
  /** Required. The ID of the customer whose campaign assets are being modified. */
  customerId: string;
  /** Required. The list of operations to perform on individual campaign assets. */
  operations: CampaignAssetOperation[];
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

/** A single operation (create, update, remove) on a campaign asset. */
export interface CampaignAssetOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * Create operation: No resource name is expected for the new campaign
   * asset.
   */
  create?:
    | CampaignAsset
    | undefined;
  /**
   * Update operation: The campaign asset is expected to have a valid resource
   * name.
   */
  update?:
    | CampaignAsset
    | undefined;
  /**
   * Remove operation: A resource name for the removed campaign asset is
   * expected, in this format:
   *
   * `customers/{customer_id}/campaignAssets/{campaign_id}~{asset_id}~{field_type}`
   */
  remove?: string | undefined;
}

/** Response message for a campaign asset mutate. */
export interface MutateCampaignAssetsResponse {
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
  results: MutateCampaignAssetResult[];
}

/** The result for the campaign asset mutate. */
export interface MutateCampaignAssetResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated campaign asset with only mutable fields after
   * mutate. The field will only be returned when response_content_type is set
   * to "MUTABLE_RESOURCE".
   */
  campaignAsset: CampaignAsset | undefined;
}

function createBaseMutateCampaignAssetsRequest(): MutateCampaignAssetsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateCampaignAssetsRequest: MessageFns<MutateCampaignAssetsRequest> = {
  encode(message: MutateCampaignAssetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CampaignAssetOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignAssetsRequest();
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

          message.operations.push(CampaignAssetOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCampaignAssetsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CampaignAssetOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateCampaignAssetsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CampaignAssetOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateCampaignAssetsRequest>): MutateCampaignAssetsRequest {
    return MutateCampaignAssetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignAssetsRequest>): MutateCampaignAssetsRequest {
    const message = createBaseMutateCampaignAssetsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CampaignAssetOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseCampaignAssetOperation(): CampaignAssetOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const CampaignAssetOperation: MessageFns<CampaignAssetOperation> = {
  encode(message: CampaignAssetOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      CampaignAsset.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      CampaignAsset.encode(message.update, writer.uint32(26).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(18).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignAssetOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignAssetOperation();
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

          message.create = CampaignAsset.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.update = CampaignAsset.decode(reader, reader.uint32());
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

  fromJSON(object: any): CampaignAssetOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? CampaignAsset.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? CampaignAsset.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: CampaignAssetOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = CampaignAsset.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = CampaignAsset.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignAssetOperation>): CampaignAssetOperation {
    return CampaignAssetOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignAssetOperation>): CampaignAssetOperation {
    const message = createBaseCampaignAssetOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? CampaignAsset.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? CampaignAsset.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateCampaignAssetsResponse(): MutateCampaignAssetsResponse {
  return { partialFailureError: undefined, results: [] };
}

export const MutateCampaignAssetsResponse: MessageFns<MutateCampaignAssetsResponse> = {
  encode(message: MutateCampaignAssetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(10).fork()).join();
    }
    for (const v of message.results) {
      MutateCampaignAssetResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.partialFailureError = Status.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(MutateCampaignAssetResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignAssetsResponse {
    return {
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCampaignAssetResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateCampaignAssetsResponse): unknown {
    const obj: any = {};
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCampaignAssetResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignAssetsResponse>): MutateCampaignAssetsResponse {
    return MutateCampaignAssetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignAssetsResponse>): MutateCampaignAssetsResponse {
    const message = createBaseMutateCampaignAssetsResponse();
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    message.results = object.results?.map((e) => MutateCampaignAssetResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateCampaignAssetResult(): MutateCampaignAssetResult {
  return { resourceName: "", campaignAsset: undefined };
}

export const MutateCampaignAssetResult: MessageFns<MutateCampaignAssetResult> = {
  encode(message: MutateCampaignAssetResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.campaignAsset !== undefined) {
      CampaignAsset.encode(message.campaignAsset, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignAssetResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignAssetResult();
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

          message.campaignAsset = CampaignAsset.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignAssetResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      campaignAsset: isSet(object.campaignAsset) ? CampaignAsset.fromJSON(object.campaignAsset) : undefined,
    };
  },

  toJSON(message: MutateCampaignAssetResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.campaignAsset !== undefined) {
      obj.campaignAsset = CampaignAsset.toJSON(message.campaignAsset);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignAssetResult>): MutateCampaignAssetResult {
    return MutateCampaignAssetResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignAssetResult>): MutateCampaignAssetResult {
    const message = createBaseMutateCampaignAssetResult();
    message.resourceName = object.resourceName ?? "";
    message.campaignAsset = (object.campaignAsset !== undefined && object.campaignAsset !== null)
      ? CampaignAsset.fromPartial(object.campaignAsset)
      : undefined;
    return message;
  },
};

/** Service to manage campaign assets. */
export type CampaignAssetServiceDefinition = typeof CampaignAssetServiceDefinition;
export const CampaignAssetServiceDefinition = {
  name: "CampaignAssetService",
  fullName: "google.ads.googleads.v16.services.CampaignAssetService",
  methods: {
    /**
     * Creates, updates, or removes campaign assets. Operation statuses are
     * returned.
     *
     * List of thrown errors:
     *   [AssetLinkError]()
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [ContextError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [NotAllowlistedError]()
     *   [QuotaError]()
     *   [RequestError]()
     */
    mutateCampaignAssets: {
      name: "MutateCampaignAssets",
      requestType: MutateCampaignAssetsRequest,
      requestStream: false,
      responseType: MutateCampaignAssetsResponse,
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
              99,
              97,
              109,
              112,
              97,
              105,
              103,
              110,
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

export interface CampaignAssetServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates, or removes campaign assets. Operation statuses are
   * returned.
   *
   * List of thrown errors:
   *   [AssetLinkError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [ContextError]()
   *   [DatabaseError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NotAllowlistedError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  mutateCampaignAssets(
    request: MutateCampaignAssetsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCampaignAssetsResponse>>;
}

export interface CampaignAssetServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates, or removes campaign assets. Operation statuses are
   * returned.
   *
   * List of thrown errors:
   *   [AssetLinkError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [ContextError]()
   *   [DatabaseError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NotAllowlistedError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  mutateCampaignAssets(
    request: DeepPartial<MutateCampaignAssetsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCampaignAssetsResponse>;
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