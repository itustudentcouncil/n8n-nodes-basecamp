// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/campaign_budget_service.proto

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
import { CampaignBudget } from "../resources/campaign_budget.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [CampaignBudgetService.MutateCampaignBudgets][google.ads.googleads.v17.services.CampaignBudgetService.MutateCampaignBudgets].
 */
export interface MutateCampaignBudgetsRequest {
  /** Required. The ID of the customer whose campaign budgets are being modified. */
  customerId: string;
  /** Required. The list of operations to perform on individual campaign budgets. */
  operations: CampaignBudgetOperation[];
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

/** A single operation (create, update, remove) on a campaign budget. */
export interface CampaignBudgetOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /** Create operation: No resource name is expected for the new budget. */
  create?:
    | CampaignBudget
    | undefined;
  /**
   * Update operation: The campaign budget is expected to have a valid
   * resource name.
   */
  update?:
    | CampaignBudget
    | undefined;
  /**
   * Remove operation: A resource name for the removed budget is expected, in
   * this format:
   *
   * `customers/{customer_id}/campaignBudgets/{budget_id}`
   */
  remove?: string | undefined;
}

/** Response message for campaign budget mutate. */
export interface MutateCampaignBudgetsResponse {
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
  results: MutateCampaignBudgetResult[];
}

/** The result for the campaign budget mutate. */
export interface MutateCampaignBudgetResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated campaign budget with only mutable fields after mutate. The
   * field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   */
  campaignBudget: CampaignBudget | undefined;
}

function createBaseMutateCampaignBudgetsRequest(): MutateCampaignBudgetsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateCampaignBudgetsRequest: MessageFns<MutateCampaignBudgetsRequest> = {
  encode(message: MutateCampaignBudgetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CampaignBudgetOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignBudgetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignBudgetsRequest();
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

          message.operations.push(CampaignBudgetOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCampaignBudgetsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CampaignBudgetOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateCampaignBudgetsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CampaignBudgetOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateCampaignBudgetsRequest>): MutateCampaignBudgetsRequest {
    return MutateCampaignBudgetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignBudgetsRequest>): MutateCampaignBudgetsRequest {
    const message = createBaseMutateCampaignBudgetsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CampaignBudgetOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseCampaignBudgetOperation(): CampaignBudgetOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const CampaignBudgetOperation: MessageFns<CampaignBudgetOperation> = {
  encode(message: CampaignBudgetOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      CampaignBudget.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      CampaignBudget.encode(message.update, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignBudgetOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignBudgetOperation();
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

          message.create = CampaignBudget.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = CampaignBudget.decode(reader, reader.uint32());
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

  fromJSON(object: any): CampaignBudgetOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? CampaignBudget.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? CampaignBudget.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: CampaignBudgetOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = CampaignBudget.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = CampaignBudget.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignBudgetOperation>): CampaignBudgetOperation {
    return CampaignBudgetOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignBudgetOperation>): CampaignBudgetOperation {
    const message = createBaseCampaignBudgetOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? CampaignBudget.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? CampaignBudget.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateCampaignBudgetsResponse(): MutateCampaignBudgetsResponse {
  return { partialFailureError: undefined, results: [] };
}

export const MutateCampaignBudgetsResponse: MessageFns<MutateCampaignBudgetsResponse> = {
  encode(message: MutateCampaignBudgetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(26).fork()).join();
    }
    for (const v of message.results) {
      MutateCampaignBudgetResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignBudgetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignBudgetsResponse();
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

          message.results.push(MutateCampaignBudgetResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignBudgetsResponse {
    return {
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCampaignBudgetResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateCampaignBudgetsResponse): unknown {
    const obj: any = {};
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCampaignBudgetResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignBudgetsResponse>): MutateCampaignBudgetsResponse {
    return MutateCampaignBudgetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignBudgetsResponse>): MutateCampaignBudgetsResponse {
    const message = createBaseMutateCampaignBudgetsResponse();
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    message.results = object.results?.map((e) => MutateCampaignBudgetResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateCampaignBudgetResult(): MutateCampaignBudgetResult {
  return { resourceName: "", campaignBudget: undefined };
}

export const MutateCampaignBudgetResult: MessageFns<MutateCampaignBudgetResult> = {
  encode(message: MutateCampaignBudgetResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.campaignBudget !== undefined) {
      CampaignBudget.encode(message.campaignBudget, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignBudgetResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignBudgetResult();
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

          message.campaignBudget = CampaignBudget.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignBudgetResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      campaignBudget: isSet(object.campaignBudget) ? CampaignBudget.fromJSON(object.campaignBudget) : undefined,
    };
  },

  toJSON(message: MutateCampaignBudgetResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.campaignBudget !== undefined) {
      obj.campaignBudget = CampaignBudget.toJSON(message.campaignBudget);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignBudgetResult>): MutateCampaignBudgetResult {
    return MutateCampaignBudgetResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignBudgetResult>): MutateCampaignBudgetResult {
    const message = createBaseMutateCampaignBudgetResult();
    message.resourceName = object.resourceName ?? "";
    message.campaignBudget = (object.campaignBudget !== undefined && object.campaignBudget !== null)
      ? CampaignBudget.fromPartial(object.campaignBudget)
      : undefined;
    return message;
  },
};

/** Service to manage campaign budgets. */
export type CampaignBudgetServiceDefinition = typeof CampaignBudgetServiceDefinition;
export const CampaignBudgetServiceDefinition = {
  name: "CampaignBudgetService",
  fullName: "google.ads.googleads.v17.services.CampaignBudgetService",
  methods: {
    /**
     * Creates, updates, or removes campaign budgets. Operation statuses are
     * returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CampaignBudgetError]()
     *   [DatabaseError]()
     *   [DistinctError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [OperationAccessDeniedError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     *   [StringLengthError]()
     */
    mutateCampaignBudgets: {
      name: "MutateCampaignBudgets",
      requestType: MutateCampaignBudgetsRequest,
      requestStream: false,
      responseType: MutateCampaignBudgetsResponse,
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
              58,
              58,
              1,
              42,
              34,
              53,
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
              66,
              117,
              100,
              103,
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

export interface CampaignBudgetServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates, or removes campaign budgets. Operation statuses are
   * returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CampaignBudgetError]()
   *   [DatabaseError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [OperationAccessDeniedError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [ResourceCountLimitExceededError]()
   *   [StringLengthError]()
   */
  mutateCampaignBudgets(
    request: MutateCampaignBudgetsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCampaignBudgetsResponse>>;
}

export interface CampaignBudgetServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates, or removes campaign budgets. Operation statuses are
   * returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CampaignBudgetError]()
   *   [DatabaseError]()
   *   [DistinctError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [OperationAccessDeniedError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [ResourceCountLimitExceededError]()
   *   [StringLengthError]()
   */
  mutateCampaignBudgets(
    request: DeepPartial<MutateCampaignBudgetsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCampaignBudgetsResponse>;
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