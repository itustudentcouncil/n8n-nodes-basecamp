// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/ad_group_asset_set_service.proto

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
import { AdGroupAssetSet } from "../resources/ad_group_asset_set.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [AdGroupAssetSetService.MutateAdGroupAssetSets][google.ads.googleads.v17.services.AdGroupAssetSetService.MutateAdGroupAssetSets].
 */
export interface MutateAdGroupAssetSetsRequest {
  /**
   * Required. The ID of the customer whose ad group asset sets are being
   * modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual ad group asset
   * sets.
   */
  operations: AdGroupAssetSetOperation[];
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

/** A single operation (create, remove) on an ad group asset set. */
export interface AdGroupAssetSetOperation {
  /**
   * Create operation: No resource name is expected for the new ad group asset
   * set.
   */
  create?:
    | AdGroupAssetSet
    | undefined;
  /**
   * Remove operation: A resource name for the removed ad group asset set is
   * expected, in this format:
   * `customers/{customer_id}/adGroupAssetSets/{ad_group_id}~{asset_set_id}`
   */
  remove?: string | undefined;
}

/** Response message for an ad group asset set mutate. */
export interface MutateAdGroupAssetSetsResponse {
  /** All results for the mutate. */
  results: MutateAdGroupAssetSetResult[];
  /**
   * Errors that pertain to operation failures in the partial failure mode.
   * Returned only when partial_failure = true and all errors occur inside the
   * operations. If any errors occur outside the operations (e.g. auth errors),
   * we return an RPC level error.
   */
  partialFailureError: Status | undefined;
}

/** The result for the ad group asset set mutate. */
export interface MutateAdGroupAssetSetResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated ad group asset set with only mutable fields after mutate. The
   * field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   */
  adGroupAssetSet: AdGroupAssetSet | undefined;
}

function createBaseMutateAdGroupAssetSetsRequest(): MutateAdGroupAssetSetsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateAdGroupAssetSetsRequest: MessageFns<MutateAdGroupAssetSetsRequest> = {
  encode(message: MutateAdGroupAssetSetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      AdGroupAssetSetOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAdGroupAssetSetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAdGroupAssetSetsRequest();
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

          message.operations.push(AdGroupAssetSetOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateAdGroupAssetSetsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => AdGroupAssetSetOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateAdGroupAssetSetsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => AdGroupAssetSetOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateAdGroupAssetSetsRequest>): MutateAdGroupAssetSetsRequest {
    return MutateAdGroupAssetSetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAdGroupAssetSetsRequest>): MutateAdGroupAssetSetsRequest {
    const message = createBaseMutateAdGroupAssetSetsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => AdGroupAssetSetOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseAdGroupAssetSetOperation(): AdGroupAssetSetOperation {
  return { create: undefined, remove: undefined };
}

export const AdGroupAssetSetOperation: MessageFns<AdGroupAssetSetOperation> = {
  encode(message: AdGroupAssetSetOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.create !== undefined) {
      AdGroupAssetSet.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(18).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdGroupAssetSetOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdGroupAssetSetOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.create = AdGroupAssetSet.decode(reader, reader.uint32());
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

  fromJSON(object: any): AdGroupAssetSetOperation {
    return {
      create: isSet(object.create) ? AdGroupAssetSet.fromJSON(object.create) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: AdGroupAssetSetOperation): unknown {
    const obj: any = {};
    if (message.create !== undefined) {
      obj.create = AdGroupAssetSet.toJSON(message.create);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<AdGroupAssetSetOperation>): AdGroupAssetSetOperation {
    return AdGroupAssetSetOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AdGroupAssetSetOperation>): AdGroupAssetSetOperation {
    const message = createBaseAdGroupAssetSetOperation();
    message.create = (object.create !== undefined && object.create !== null)
      ? AdGroupAssetSet.fromPartial(object.create)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateAdGroupAssetSetsResponse(): MutateAdGroupAssetSetsResponse {
  return { results: [], partialFailureError: undefined };
}

export const MutateAdGroupAssetSetsResponse: MessageFns<MutateAdGroupAssetSetsResponse> = {
  encode(message: MutateAdGroupAssetSetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      MutateAdGroupAssetSetResult.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAdGroupAssetSetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAdGroupAssetSetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(MutateAdGroupAssetSetResult.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateAdGroupAssetSetsResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateAdGroupAssetSetResult.fromJSON(e))
        : [],
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
    };
  },

  toJSON(message: MutateAdGroupAssetSetsResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateAdGroupAssetSetResult.toJSON(e));
    }
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateAdGroupAssetSetsResponse>): MutateAdGroupAssetSetsResponse {
    return MutateAdGroupAssetSetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAdGroupAssetSetsResponse>): MutateAdGroupAssetSetsResponse {
    const message = createBaseMutateAdGroupAssetSetsResponse();
    message.results = object.results?.map((e) => MutateAdGroupAssetSetResult.fromPartial(e)) || [];
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    return message;
  },
};

function createBaseMutateAdGroupAssetSetResult(): MutateAdGroupAssetSetResult {
  return { resourceName: "", adGroupAssetSet: undefined };
}

export const MutateAdGroupAssetSetResult: MessageFns<MutateAdGroupAssetSetResult> = {
  encode(message: MutateAdGroupAssetSetResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.adGroupAssetSet !== undefined) {
      AdGroupAssetSet.encode(message.adGroupAssetSet, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAdGroupAssetSetResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAdGroupAssetSetResult();
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

          message.adGroupAssetSet = AdGroupAssetSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateAdGroupAssetSetResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      adGroupAssetSet: isSet(object.adGroupAssetSet) ? AdGroupAssetSet.fromJSON(object.adGroupAssetSet) : undefined,
    };
  },

  toJSON(message: MutateAdGroupAssetSetResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.adGroupAssetSet !== undefined) {
      obj.adGroupAssetSet = AdGroupAssetSet.toJSON(message.adGroupAssetSet);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateAdGroupAssetSetResult>): MutateAdGroupAssetSetResult {
    return MutateAdGroupAssetSetResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAdGroupAssetSetResult>): MutateAdGroupAssetSetResult {
    const message = createBaseMutateAdGroupAssetSetResult();
    message.resourceName = object.resourceName ?? "";
    message.adGroupAssetSet = (object.adGroupAssetSet !== undefined && object.adGroupAssetSet !== null)
      ? AdGroupAssetSet.fromPartial(object.adGroupAssetSet)
      : undefined;
    return message;
  },
};

/** Service to manage ad group asset set */
export type AdGroupAssetSetServiceDefinition = typeof AdGroupAssetSetServiceDefinition;
export const AdGroupAssetSetServiceDefinition = {
  name: "AdGroupAssetSetService",
  fullName: "google.ads.googleads.v17.services.AdGroupAssetSetService",
  methods: {
    /**
     * Creates, or removes ad group asset sets. Operation statuses are
     * returned.
     */
    mutateAdGroupAssetSets: {
      name: "MutateAdGroupAssetSets",
      requestType: MutateAdGroupAssetSetsRequest,
      requestStream: false,
      responseType: MutateAdGroupAssetSetsResponse,
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
              97,
              100,
              71,
              114,
              111,
              117,
              112,
              65,
              115,
              115,
              101,
              116,
              83,
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

export interface AdGroupAssetSetServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, or removes ad group asset sets. Operation statuses are
   * returned.
   */
  mutateAdGroupAssetSets(
    request: MutateAdGroupAssetSetsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateAdGroupAssetSetsResponse>>;
}

export interface AdGroupAssetSetServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, or removes ad group asset sets. Operation statuses are
   * returned.
   */
  mutateAdGroupAssetSets(
    request: DeepPartial<MutateAdGroupAssetSetsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateAdGroupAssetSetsResponse>;
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