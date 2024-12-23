// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/campaign_criterion_service.proto

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
import { CampaignCriterion } from "../resources/campaign_criterion.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [CampaignCriterionService.MutateCampaignCriteria][google.ads.googleads.v16.services.CampaignCriterionService.MutateCampaignCriteria].
 */
export interface MutateCampaignCriteriaRequest {
  /** Required. The ID of the customer whose criteria are being modified. */
  customerId: string;
  /** Required. The list of operations to perform on individual criteria. */
  operations: CampaignCriterionOperation[];
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

/** A single operation (create, update, remove) on a campaign criterion. */
export interface CampaignCriterionOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /** Create operation: No resource name is expected for the new criterion. */
  create?:
    | CampaignCriterion
    | undefined;
  /**
   * Update operation: The criterion is expected to have a valid resource
   * name.
   */
  update?:
    | CampaignCriterion
    | undefined;
  /**
   * Remove operation: A resource name for the removed criterion is expected,
   * in this format:
   *
   * `customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}`
   */
  remove?: string | undefined;
}

/** Response message for campaign criterion mutate. */
export interface MutateCampaignCriteriaResponse {
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
  results: MutateCampaignCriterionResult[];
}

/** The result for the criterion mutate. */
export interface MutateCampaignCriterionResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated campaign criterion with only mutable fields after mutate. The
   * field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   */
  campaignCriterion: CampaignCriterion | undefined;
}

function createBaseMutateCampaignCriteriaRequest(): MutateCampaignCriteriaRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateCampaignCriteriaRequest: MessageFns<MutateCampaignCriteriaRequest> = {
  encode(message: MutateCampaignCriteriaRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CampaignCriterionOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignCriteriaRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignCriteriaRequest();
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

          message.operations.push(CampaignCriterionOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCampaignCriteriaRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CampaignCriterionOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateCampaignCriteriaRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CampaignCriterionOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateCampaignCriteriaRequest>): MutateCampaignCriteriaRequest {
    return MutateCampaignCriteriaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignCriteriaRequest>): MutateCampaignCriteriaRequest {
    const message = createBaseMutateCampaignCriteriaRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CampaignCriterionOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseCampaignCriterionOperation(): CampaignCriterionOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const CampaignCriterionOperation: MessageFns<CampaignCriterionOperation> = {
  encode(message: CampaignCriterionOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      CampaignCriterion.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      CampaignCriterion.encode(message.update, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignCriterionOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignCriterionOperation();
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

          message.create = CampaignCriterion.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = CampaignCriterion.decode(reader, reader.uint32());
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

  fromJSON(object: any): CampaignCriterionOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? CampaignCriterion.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? CampaignCriterion.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: CampaignCriterionOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = CampaignCriterion.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = CampaignCriterion.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignCriterionOperation>): CampaignCriterionOperation {
    return CampaignCriterionOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignCriterionOperation>): CampaignCriterionOperation {
    const message = createBaseCampaignCriterionOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? CampaignCriterion.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? CampaignCriterion.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateCampaignCriteriaResponse(): MutateCampaignCriteriaResponse {
  return { partialFailureError: undefined, results: [] };
}

export const MutateCampaignCriteriaResponse: MessageFns<MutateCampaignCriteriaResponse> = {
  encode(message: MutateCampaignCriteriaResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(26).fork()).join();
    }
    for (const v of message.results) {
      MutateCampaignCriterionResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignCriteriaResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignCriteriaResponse();
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

          message.results.push(MutateCampaignCriterionResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignCriteriaResponse {
    return {
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCampaignCriterionResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateCampaignCriteriaResponse): unknown {
    const obj: any = {};
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCampaignCriterionResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignCriteriaResponse>): MutateCampaignCriteriaResponse {
    return MutateCampaignCriteriaResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignCriteriaResponse>): MutateCampaignCriteriaResponse {
    const message = createBaseMutateCampaignCriteriaResponse();
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    message.results = object.results?.map((e) => MutateCampaignCriterionResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateCampaignCriterionResult(): MutateCampaignCriterionResult {
  return { resourceName: "", campaignCriterion: undefined };
}

export const MutateCampaignCriterionResult: MessageFns<MutateCampaignCriterionResult> = {
  encode(message: MutateCampaignCriterionResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.campaignCriterion !== undefined) {
      CampaignCriterion.encode(message.campaignCriterion, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignCriterionResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignCriterionResult();
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

          message.campaignCriterion = CampaignCriterion.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignCriterionResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      campaignCriterion: isSet(object.campaignCriterion)
        ? CampaignCriterion.fromJSON(object.campaignCriterion)
        : undefined,
    };
  },

  toJSON(message: MutateCampaignCriterionResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.campaignCriterion !== undefined) {
      obj.campaignCriterion = CampaignCriterion.toJSON(message.campaignCriterion);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignCriterionResult>): MutateCampaignCriterionResult {
    return MutateCampaignCriterionResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignCriterionResult>): MutateCampaignCriterionResult {
    const message = createBaseMutateCampaignCriterionResult();
    message.resourceName = object.resourceName ?? "";
    message.campaignCriterion = (object.campaignCriterion !== undefined && object.campaignCriterion !== null)
      ? CampaignCriterion.fromPartial(object.campaignCriterion)
      : undefined;
    return message;
  },
};

/** Service to manage campaign criteria. */
export type CampaignCriterionServiceDefinition = typeof CampaignCriterionServiceDefinition;
export const CampaignCriterionServiceDefinition = {
  name: "CampaignCriterionService",
  fullName: "google.ads.googleads.v16.services.CampaignCriterionService",
  methods: {
    /**
     * Creates, updates, or removes criteria. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AdxError]()
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CampaignCriterionError]()
     *   [CollectionSizeError]()
     *   [ContextError]()
     *   [CriterionError]()
     *   [DatabaseError]()
     *   [DistinctError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [FunctionError]()
     *   [HeaderError]()
     *   [IdError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotEmptyError]()
     *   [NullError]()
     *   [OperationAccessDeniedError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RegionCodeError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     */
    mutateCampaignCriteria: {
      name: "MutateCampaignCriteria",
      requestType: MutateCampaignCriteriaRequest,
      requestStream: false,
      responseType: MutateCampaignCriteriaResponse,
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
              67,
              114,
              105,
              116,
              101,
              114,
              105,
              97,
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

export interface CampaignCriterionServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates, or removes criteria. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AdxError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CampaignCriterionError]()
   *   [CollectionSizeError]()
   *   [ContextError]()
   *   [CriterionError]()
   *   [DatabaseError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [FunctionError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperationAccessDeniedError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RegionCodeError]()
   *   [RequestError]()
   *   [ResourceCountLimitExceededError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   */
  mutateCampaignCriteria(
    request: MutateCampaignCriteriaRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCampaignCriteriaResponse>>;
}

export interface CampaignCriterionServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates, or removes criteria. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AdxError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CampaignCriterionError]()
   *   [CollectionSizeError]()
   *   [ContextError]()
   *   [CriterionError]()
   *   [DatabaseError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [FunctionError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperationAccessDeniedError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RegionCodeError]()
   *   [RequestError]()
   *   [ResourceCountLimitExceededError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   */
  mutateCampaignCriteria(
    request: DeepPartial<MutateCampaignCriteriaRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCampaignCriteriaResponse>;
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
