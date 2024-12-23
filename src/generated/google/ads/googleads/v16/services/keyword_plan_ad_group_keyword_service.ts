// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/keyword_plan_ad_group_keyword_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { FieldMask } from "../../../../protobuf/field_mask.js";
import { Status } from "../../../../rpc/status.js";
import { KeywordPlanAdGroupKeyword } from "../resources/keyword_plan_ad_group_keyword.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [KeywordPlanAdGroupKeywordService.MutateKeywordPlanAdGroupKeywords][google.ads.googleads.v16.services.KeywordPlanAdGroupKeywordService.MutateKeywordPlanAdGroupKeywords].
 */
export interface MutateKeywordPlanAdGroupKeywordsRequest {
  /**
   * Required. The ID of the customer whose Keyword Plan ad group keywords are
   * being modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual Keyword Plan ad
   * group keywords.
   */
  operations: KeywordPlanAdGroupKeywordOperation[];
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

/**
 * A single operation (create, update, remove) on a Keyword Plan ad group
 * keyword.
 */
export interface KeywordPlanAdGroupKeywordOperation {
  /**
   * The FieldMask that determines which resource fields are modified in an
   * update.
   */
  updateMask:
    | string[]
    | undefined;
  /**
   * Create operation: No resource name is expected for the new Keyword Plan
   * ad group keyword.
   */
  create?:
    | KeywordPlanAdGroupKeyword
    | undefined;
  /**
   * Update operation: The Keyword Plan ad group keyword is expected to have a
   * valid resource name.
   */
  update?:
    | KeywordPlanAdGroupKeyword
    | undefined;
  /**
   * Remove operation: A resource name for the removed Keyword Plan ad group
   * keyword is expected, in this format:
   *
   * `customers/{customer_id}/keywordPlanAdGroupKeywords/{kp_ad_group_keyword_id}`
   */
  remove?: string | undefined;
}

/** Response message for a Keyword Plan ad group keyword mutate. */
export interface MutateKeywordPlanAdGroupKeywordsResponse {
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
  results: MutateKeywordPlanAdGroupKeywordResult[];
}

/** The result for the Keyword Plan ad group keyword mutate. */
export interface MutateKeywordPlanAdGroupKeywordResult {
  /** Returned for successful operations. */
  resourceName: string;
}

function createBaseMutateKeywordPlanAdGroupKeywordsRequest(): MutateKeywordPlanAdGroupKeywordsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false };
}

export const MutateKeywordPlanAdGroupKeywordsRequest: MessageFns<MutateKeywordPlanAdGroupKeywordsRequest> = {
  encode(message: MutateKeywordPlanAdGroupKeywordsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      KeywordPlanAdGroupKeywordOperation.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.partialFailure !== false) {
      writer.uint32(24).bool(message.partialFailure);
    }
    if (message.validateOnly !== false) {
      writer.uint32(32).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateKeywordPlanAdGroupKeywordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateKeywordPlanAdGroupKeywordsRequest();
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

          message.operations.push(KeywordPlanAdGroupKeywordOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateKeywordPlanAdGroupKeywordsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => KeywordPlanAdGroupKeywordOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: MutateKeywordPlanAdGroupKeywordsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => KeywordPlanAdGroupKeywordOperation.toJSON(e));
    }
    if (message.partialFailure !== false) {
      obj.partialFailure = message.partialFailure;
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateKeywordPlanAdGroupKeywordsRequest>): MutateKeywordPlanAdGroupKeywordsRequest {
    return MutateKeywordPlanAdGroupKeywordsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateKeywordPlanAdGroupKeywordsRequest>): MutateKeywordPlanAdGroupKeywordsRequest {
    const message = createBaseMutateKeywordPlanAdGroupKeywordsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => KeywordPlanAdGroupKeywordOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseKeywordPlanAdGroupKeywordOperation(): KeywordPlanAdGroupKeywordOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const KeywordPlanAdGroupKeywordOperation: MessageFns<KeywordPlanAdGroupKeywordOperation> = {
  encode(message: KeywordPlanAdGroupKeywordOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      KeywordPlanAdGroupKeyword.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      KeywordPlanAdGroupKeyword.encode(message.update, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): KeywordPlanAdGroupKeywordOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeywordPlanAdGroupKeywordOperation();
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

          message.create = KeywordPlanAdGroupKeyword.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = KeywordPlanAdGroupKeyword.decode(reader, reader.uint32());
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

  fromJSON(object: any): KeywordPlanAdGroupKeywordOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? KeywordPlanAdGroupKeyword.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? KeywordPlanAdGroupKeyword.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: KeywordPlanAdGroupKeywordOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = KeywordPlanAdGroupKeyword.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = KeywordPlanAdGroupKeyword.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<KeywordPlanAdGroupKeywordOperation>): KeywordPlanAdGroupKeywordOperation {
    return KeywordPlanAdGroupKeywordOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<KeywordPlanAdGroupKeywordOperation>): KeywordPlanAdGroupKeywordOperation {
    const message = createBaseKeywordPlanAdGroupKeywordOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? KeywordPlanAdGroupKeyword.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? KeywordPlanAdGroupKeyword.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateKeywordPlanAdGroupKeywordsResponse(): MutateKeywordPlanAdGroupKeywordsResponse {
  return { partialFailureError: undefined, results: [] };
}

export const MutateKeywordPlanAdGroupKeywordsResponse: MessageFns<MutateKeywordPlanAdGroupKeywordsResponse> = {
  encode(message: MutateKeywordPlanAdGroupKeywordsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(26).fork()).join();
    }
    for (const v of message.results) {
      MutateKeywordPlanAdGroupKeywordResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateKeywordPlanAdGroupKeywordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateKeywordPlanAdGroupKeywordsResponse();
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

          message.results.push(MutateKeywordPlanAdGroupKeywordResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateKeywordPlanAdGroupKeywordsResponse {
    return {
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateKeywordPlanAdGroupKeywordResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateKeywordPlanAdGroupKeywordsResponse): unknown {
    const obj: any = {};
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateKeywordPlanAdGroupKeywordResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateKeywordPlanAdGroupKeywordsResponse>): MutateKeywordPlanAdGroupKeywordsResponse {
    return MutateKeywordPlanAdGroupKeywordsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateKeywordPlanAdGroupKeywordsResponse>): MutateKeywordPlanAdGroupKeywordsResponse {
    const message = createBaseMutateKeywordPlanAdGroupKeywordsResponse();
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    message.results = object.results?.map((e) => MutateKeywordPlanAdGroupKeywordResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateKeywordPlanAdGroupKeywordResult(): MutateKeywordPlanAdGroupKeywordResult {
  return { resourceName: "" };
}

export const MutateKeywordPlanAdGroupKeywordResult: MessageFns<MutateKeywordPlanAdGroupKeywordResult> = {
  encode(message: MutateKeywordPlanAdGroupKeywordResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateKeywordPlanAdGroupKeywordResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateKeywordPlanAdGroupKeywordResult();
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

  fromJSON(object: any): MutateKeywordPlanAdGroupKeywordResult {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: MutateKeywordPlanAdGroupKeywordResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateKeywordPlanAdGroupKeywordResult>): MutateKeywordPlanAdGroupKeywordResult {
    return MutateKeywordPlanAdGroupKeywordResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateKeywordPlanAdGroupKeywordResult>): MutateKeywordPlanAdGroupKeywordResult {
    const message = createBaseMutateKeywordPlanAdGroupKeywordResult();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

/**
 * Service to manage Keyword Plan ad group keywords. KeywordPlanAdGroup is
 * required to add ad group keywords. Positive and negative keywords are
 * supported. A maximum of 10,000 positive keywords are allowed per keyword
 * plan. A maximum of 1,000 negative keywords are allower per keyword plan. This
 * includes campaign negative keywords and ad group negative keywords.
 */
export type KeywordPlanAdGroupKeywordServiceDefinition = typeof KeywordPlanAdGroupKeywordServiceDefinition;
export const KeywordPlanAdGroupKeywordServiceDefinition = {
  name: "KeywordPlanAdGroupKeywordService",
  fullName: "google.ads.googleads.v16.services.KeywordPlanAdGroupKeywordService",
  methods: {
    /**
     * Creates, updates, or removes Keyword Plan ad group keywords. Operation
     * statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [KeywordPlanAdGroupKeywordError]()
     *   [KeywordPlanError]()
     *   [MutateError]()
     *   [QuotaError]()
     *   [RequestError]()
     *   [ResourceCountLimitExceededError]()
     */
    mutateKeywordPlanAdGroupKeywords: {
      name: "MutateKeywordPlanAdGroupKeywords",
      requestType: MutateKeywordPlanAdGroupKeywordsRequest,
      requestStream: false,
      responseType: MutateKeywordPlanAdGroupKeywordsResponse,
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
              69,
              58,
              1,
              42,
              34,
              64,
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
              107,
              101,
              121,
              119,
              111,
              114,
              100,
              80,
              108,
              97,
              110,
              65,
              100,
              71,
              114,
              111,
              117,
              112,
              75,
              101,
              121,
              119,
              111,
              114,
              100,
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

export interface KeywordPlanAdGroupKeywordServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates, or removes Keyword Plan ad group keywords. Operation
   * statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [DatabaseError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [KeywordPlanAdGroupKeywordError]()
   *   [KeywordPlanError]()
   *   [MutateError]()
   *   [QuotaError]()
   *   [RequestError]()
   *   [ResourceCountLimitExceededError]()
   */
  mutateKeywordPlanAdGroupKeywords(
    request: MutateKeywordPlanAdGroupKeywordsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateKeywordPlanAdGroupKeywordsResponse>>;
}

export interface KeywordPlanAdGroupKeywordServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates, or removes Keyword Plan ad group keywords. Operation
   * statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [DatabaseError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [KeywordPlanAdGroupKeywordError]()
   *   [KeywordPlanError]()
   *   [MutateError]()
   *   [QuotaError]()
   *   [RequestError]()
   *   [ResourceCountLimitExceededError]()
   */
  mutateKeywordPlanAdGroupKeywords(
    request: DeepPartial<MutateKeywordPlanAdGroupKeywordsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateKeywordPlanAdGroupKeywordsResponse>;
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
