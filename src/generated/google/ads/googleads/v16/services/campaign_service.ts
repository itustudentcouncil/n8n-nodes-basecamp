// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/campaign_service.proto

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
import { Campaign } from "../resources/campaign.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [CampaignService.MutateCampaigns][google.ads.googleads.v16.services.CampaignService.MutateCampaigns].
 */
export interface MutateCampaignsRequest {
  /** Required. The ID of the customer whose campaigns are being modified. */
  customerId: string;
  /** Required. The list of operations to perform on individual campaigns. */
  operations: CampaignOperation[];
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

/** A single operation (create, update, remove) on a campaign. */
export interface CampaignOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /** Create operation: No resource name is expected for the new campaign. */
  create?:
    | Campaign
    | undefined;
  /**
   * Update operation: The campaign is expected to have a valid
   * resource name.
   */
  update?:
    | Campaign
    | undefined;
  /**
   * Remove operation: A resource name for the removed campaign is
   * expected, in this format:
   *
   * `customers/{customer_id}/campaigns/{campaign_id}`
   */
  remove?: string | undefined;
}

/** Response message for campaign mutate. */
export interface MutateCampaignsResponse {
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
  results: MutateCampaignResult[];
}

/** The result for the campaign mutate. */
export interface MutateCampaignResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated campaign with only mutable fields after mutate. The field will
   * only be returned when response_content_type is set to "MUTABLE_RESOURCE".
   */
  campaign: Campaign | undefined;
}

function createBaseMutateCampaignsRequest(): MutateCampaignsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateCampaignsRequest: MessageFns<MutateCampaignsRequest> = {
  encode(message: MutateCampaignsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CampaignOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignsRequest();
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

          message.operations.push(CampaignOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCampaignsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CampaignOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateCampaignsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CampaignOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateCampaignsRequest>): MutateCampaignsRequest {
    return MutateCampaignsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignsRequest>): MutateCampaignsRequest {
    const message = createBaseMutateCampaignsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CampaignOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseCampaignOperation(): CampaignOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const CampaignOperation: MessageFns<CampaignOperation> = {
  encode(message: CampaignOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      Campaign.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      Campaign.encode(message.update, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignOperation();
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

          message.create = Campaign.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = Campaign.decode(reader, reader.uint32());
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

  fromJSON(object: any): CampaignOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? Campaign.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? Campaign.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: CampaignOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = Campaign.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = Campaign.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignOperation>): CampaignOperation {
    return CampaignOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignOperation>): CampaignOperation {
    const message = createBaseCampaignOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? Campaign.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? Campaign.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateCampaignsResponse(): MutateCampaignsResponse {
  return { partialFailureError: undefined, results: [] };
}

export const MutateCampaignsResponse: MessageFns<MutateCampaignsResponse> = {
  encode(message: MutateCampaignsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(26).fork()).join();
    }
    for (const v of message.results) {
      MutateCampaignResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignsResponse();
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

          message.results.push(MutateCampaignResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignsResponse {
    return {
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCampaignResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateCampaignsResponse): unknown {
    const obj: any = {};
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCampaignResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignsResponse>): MutateCampaignsResponse {
    return MutateCampaignsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignsResponse>): MutateCampaignsResponse {
    const message = createBaseMutateCampaignsResponse();
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    message.results = object.results?.map((e) => MutateCampaignResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateCampaignResult(): MutateCampaignResult {
  return { resourceName: "", campaign: undefined };
}

export const MutateCampaignResult: MessageFns<MutateCampaignResult> = {
  encode(message: MutateCampaignResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.campaign !== undefined) {
      Campaign.encode(message.campaign, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignResult();
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

          message.campaign = Campaign.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      campaign: isSet(object.campaign) ? Campaign.fromJSON(object.campaign) : undefined,
    };
  },

  toJSON(message: MutateCampaignResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.campaign !== undefined) {
      obj.campaign = Campaign.toJSON(message.campaign);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignResult>): MutateCampaignResult {
    return MutateCampaignResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignResult>): MutateCampaignResult {
    const message = createBaseMutateCampaignResult();
    message.resourceName = object.resourceName ?? "";
    message.campaign = (object.campaign !== undefined && object.campaign !== null)
      ? Campaign.fromPartial(object.campaign)
      : undefined;
    return message;
  },
};

/** Service to manage campaigns. */
export type CampaignServiceDefinition = typeof CampaignServiceDefinition;
export const CampaignServiceDefinition = {
  name: "CampaignService",
  fullName: "google.ads.googleads.v16.services.CampaignService",
  methods: {
    /**
     * Creates, updates, or removes campaigns. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AdxError]()
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [BiddingError]()
     *   [BiddingStrategyError]()
     *   [CampaignBudgetError]()
     *   [CampaignError]()
     *   [ContextError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DateRangeError]()
     *   [DistinctError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [IdError]()
     *   [InternalError]()
     *   [ListOperationError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotAllowlistedError]()
     *   [NotEmptyError]()
     *   [NullError]()
     *   [OperationAccessDeniedError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RegionCodeError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     *   [SettingError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *   [UrlFieldError]()
     */
    mutateCampaigns: {
      name: "MutateCampaigns",
      requestType: MutateCampaignsRequest,
      requestStream: false,
      responseType: MutateCampaignsResponse,
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
              52,
              58,
              1,
              42,
              34,
              47,
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

export interface CampaignServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates, or removes campaigns. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AdxError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [BiddingError]()
   *   [BiddingStrategyError]()
   *   [CampaignBudgetError]()
   *   [CampaignError]()
   *   [ContextError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DateRangeError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [ListOperationError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotAllowlistedError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperationAccessDeniedError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RegionCodeError]()
   *   [RequestError]()
   *   [ResourceCountLimitExceededError]()
   *   [SettingError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   */
  mutateCampaigns(
    request: MutateCampaignsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCampaignsResponse>>;
}

export interface CampaignServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates, or removes campaigns. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AdxError]()
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [BiddingError]()
   *   [BiddingStrategyError]()
   *   [CampaignBudgetError]()
   *   [CampaignError]()
   *   [ContextError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DateRangeError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [ListOperationError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotAllowlistedError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperationAccessDeniedError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RegionCodeError]()
   *   [RequestError]()
   *   [ResourceCountLimitExceededError]()
   *   [SettingError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   */
  mutateCampaigns(
    request: DeepPartial<MutateCampaignsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCampaignsResponse>;
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
