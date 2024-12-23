// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/campaign_shared_set_service.proto

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
import { CampaignSharedSet } from "../resources/campaign_shared_set.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [CampaignSharedSetService.MutateCampaignSharedSets][google.ads.googleads.v17.services.CampaignSharedSetService.MutateCampaignSharedSets].
 */
export interface MutateCampaignSharedSetsRequest {
  /**
   * Required. The ID of the customer whose campaign shared sets are being
   * modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual campaign shared
   * sets.
   */
  operations: CampaignSharedSetOperation[];
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

/** A single operation (create, remove) on a campaign shared set. */
export interface CampaignSharedSetOperation {
  /**
   * Create operation: No resource name is expected for the new campaign
   * shared set.
   */
  create?:
    | CampaignSharedSet
    | undefined;
  /**
   * Remove operation: A resource name for the removed campaign shared set is
   * expected, in this format:
   *
   * `customers/{customer_id}/campaignSharedSets/{campaign_id}~{shared_set_id}`
   */
  remove?: string | undefined;
}

/** Response message for a campaign shared set mutate. */
export interface MutateCampaignSharedSetsResponse {
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
  results: MutateCampaignSharedSetResult[];
}

/** The result for the campaign shared set mutate. */
export interface MutateCampaignSharedSetResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated campaign shared set with only mutable fields after mutate. The
   * field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   */
  campaignSharedSet: CampaignSharedSet | undefined;
}

function createBaseMutateCampaignSharedSetsRequest(): MutateCampaignSharedSetsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateCampaignSharedSetsRequest: MessageFns<MutateCampaignSharedSetsRequest> = {
  encode(message: MutateCampaignSharedSetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CampaignSharedSetOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignSharedSetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignSharedSetsRequest();
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

          message.operations.push(CampaignSharedSetOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCampaignSharedSetsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CampaignSharedSetOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateCampaignSharedSetsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CampaignSharedSetOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateCampaignSharedSetsRequest>): MutateCampaignSharedSetsRequest {
    return MutateCampaignSharedSetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignSharedSetsRequest>): MutateCampaignSharedSetsRequest {
    const message = createBaseMutateCampaignSharedSetsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CampaignSharedSetOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseCampaignSharedSetOperation(): CampaignSharedSetOperation {
  return { create: undefined, remove: undefined };
}

export const CampaignSharedSetOperation: MessageFns<CampaignSharedSetOperation> = {
  encode(message: CampaignSharedSetOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.create !== undefined) {
      CampaignSharedSet.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignSharedSetOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignSharedSetOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.create = CampaignSharedSet.decode(reader, reader.uint32());
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

  fromJSON(object: any): CampaignSharedSetOperation {
    return {
      create: isSet(object.create) ? CampaignSharedSet.fromJSON(object.create) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: CampaignSharedSetOperation): unknown {
    const obj: any = {};
    if (message.create !== undefined) {
      obj.create = CampaignSharedSet.toJSON(message.create);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignSharedSetOperation>): CampaignSharedSetOperation {
    return CampaignSharedSetOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignSharedSetOperation>): CampaignSharedSetOperation {
    const message = createBaseCampaignSharedSetOperation();
    message.create = (object.create !== undefined && object.create !== null)
      ? CampaignSharedSet.fromPartial(object.create)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateCampaignSharedSetsResponse(): MutateCampaignSharedSetsResponse {
  return { partialFailureError: undefined, results: [] };
}

export const MutateCampaignSharedSetsResponse: MessageFns<MutateCampaignSharedSetsResponse> = {
  encode(message: MutateCampaignSharedSetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(26).fork()).join();
    }
    for (const v of message.results) {
      MutateCampaignSharedSetResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignSharedSetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignSharedSetsResponse();
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

          message.results.push(MutateCampaignSharedSetResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignSharedSetsResponse {
    return {
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCampaignSharedSetResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateCampaignSharedSetsResponse): unknown {
    const obj: any = {};
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCampaignSharedSetResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignSharedSetsResponse>): MutateCampaignSharedSetsResponse {
    return MutateCampaignSharedSetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignSharedSetsResponse>): MutateCampaignSharedSetsResponse {
    const message = createBaseMutateCampaignSharedSetsResponse();
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    message.results = object.results?.map((e) => MutateCampaignSharedSetResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateCampaignSharedSetResult(): MutateCampaignSharedSetResult {
  return { resourceName: "", campaignSharedSet: undefined };
}

export const MutateCampaignSharedSetResult: MessageFns<MutateCampaignSharedSetResult> = {
  encode(message: MutateCampaignSharedSetResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.campaignSharedSet !== undefined) {
      CampaignSharedSet.encode(message.campaignSharedSet, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignSharedSetResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignSharedSetResult();
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

          message.campaignSharedSet = CampaignSharedSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignSharedSetResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      campaignSharedSet: isSet(object.campaignSharedSet)
        ? CampaignSharedSet.fromJSON(object.campaignSharedSet)
        : undefined,
    };
  },

  toJSON(message: MutateCampaignSharedSetResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.campaignSharedSet !== undefined) {
      obj.campaignSharedSet = CampaignSharedSet.toJSON(message.campaignSharedSet);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignSharedSetResult>): MutateCampaignSharedSetResult {
    return MutateCampaignSharedSetResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignSharedSetResult>): MutateCampaignSharedSetResult {
    const message = createBaseMutateCampaignSharedSetResult();
    message.resourceName = object.resourceName ?? "";
    message.campaignSharedSet = (object.campaignSharedSet !== undefined && object.campaignSharedSet !== null)
      ? CampaignSharedSet.fromPartial(object.campaignSharedSet)
      : undefined;
    return message;
  },
};

/** Service to manage campaign shared sets. */
export type CampaignSharedSetServiceDefinition = typeof CampaignSharedSetServiceDefinition;
export const CampaignSharedSetServiceDefinition = {
  name: "CampaignSharedSetService",
  fullName: "google.ads.googleads.v17.services.CampaignSharedSetService",
  methods: {
    /**
     * Creates or removes campaign shared sets. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CampaignSharedSetError]()
     *   [ContextError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DistinctError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [IdError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotEmptyError]()
     *   [NullError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     */
    mutateCampaignSharedSets: {
      name: "MutateCampaignSharedSets",
      requestType: MutateCampaignSharedSetsRequest,
      requestStream: false,
      responseType: MutateCampaignSharedSetsResponse,
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
              99,
              97,
              109,
              112,
              97,
              105,
              103,
              110,
              83,
              104,
              97,
              114,
              101,
              100,
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

export interface CampaignSharedSetServiceImplementation<CallContextExt = {}> {
  /**
   * Creates or removes campaign shared sets. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CampaignSharedSetError]()
   *   [ContextError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   */
  mutateCampaignSharedSets(
    request: MutateCampaignSharedSetsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCampaignSharedSetsResponse>>;
}

export interface CampaignSharedSetServiceClient<CallOptionsExt = {}> {
  /**
   * Creates or removes campaign shared sets. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CampaignSharedSetError]()
   *   [ContextError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   */
  mutateCampaignSharedSets(
    request: DeepPartial<MutateCampaignSharedSetsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCampaignSharedSetsResponse>;
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
