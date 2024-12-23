// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/conversion_value_rule_set_service.proto

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
import { ConversionValueRuleSet } from "../resources/conversion_value_rule_set.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [ConversionValueRuleSetService.MutateConversionValueRuleSets][google.ads.googleads.v16.services.ConversionValueRuleSetService.MutateConversionValueRuleSets].
 */
export interface MutateConversionValueRuleSetsRequest {
  /**
   * Required. The ID of the customer whose conversion value rule sets are being
   * modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual conversion value
   * rule sets.
   */
  operations: ConversionValueRuleSetOperation[];
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

/** A single operation (create, update, remove) on a conversion value rule set. */
export interface ConversionValueRuleSetOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * Create operation: No resource name is expected for the new conversion
   * value rule set.
   */
  create?:
    | ConversionValueRuleSet
    | undefined;
  /**
   * Update operation: The conversion value rule set is expected to have a
   * valid resource name.
   */
  update?:
    | ConversionValueRuleSet
    | undefined;
  /**
   * Remove operation: A resource name for the removed conversion value rule
   * set is expected, in this format:
   *
   * `customers/{customer_id}/conversionValueRuleSets/{conversion_value_rule_set_id}`
   */
  remove?: string | undefined;
}

/**
 * Response message for
 * [ConversionValueRuleSetService.MutateConversionValueRuleSets][google.ads.googleads.v16.services.ConversionValueRuleSetService.MutateConversionValueRuleSets].
 */
export interface MutateConversionValueRuleSetsResponse {
  /** All results for the mutate. */
  results: MutateConversionValueRuleSetResult[];
  /**
   * Errors that pertain to operation failures in the partial failure mode.
   * Returned only when partial_failure = true and all errors occur inside the
   * operations. If any errors occur outside the operations (for example, auth
   * errors), we return an RPC level error.
   */
  partialFailureError: Status | undefined;
}

/** The result for the conversion value rule set mutate. */
export interface MutateConversionValueRuleSetResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated conversion value rule set with only mutable fields after
   * mutate. The field will only be returned when response_content_type is set
   * to "MUTABLE_RESOURCE".
   */
  conversionValueRuleSet: ConversionValueRuleSet | undefined;
}

function createBaseMutateConversionValueRuleSetsRequest(): MutateConversionValueRuleSetsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateConversionValueRuleSetsRequest: MessageFns<MutateConversionValueRuleSetsRequest> = {
  encode(message: MutateConversionValueRuleSetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      ConversionValueRuleSetOperation.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.partialFailure !== false) {
      writer.uint32(40).bool(message.partialFailure);
    }
    if (message.validateOnly !== false) {
      writer.uint32(24).bool(message.validateOnly);
    }
    if (message.responseContentType !== 0) {
      writer.uint32(32).int32(message.responseContentType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateConversionValueRuleSetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateConversionValueRuleSetsRequest();
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

          message.operations.push(ConversionValueRuleSetOperation.decode(reader, reader.uint32()));
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

          message.validateOnly = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): MutateConversionValueRuleSetsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => ConversionValueRuleSetOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateConversionValueRuleSetsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => ConversionValueRuleSetOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateConversionValueRuleSetsRequest>): MutateConversionValueRuleSetsRequest {
    return MutateConversionValueRuleSetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateConversionValueRuleSetsRequest>): MutateConversionValueRuleSetsRequest {
    const message = createBaseMutateConversionValueRuleSetsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => ConversionValueRuleSetOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseConversionValueRuleSetOperation(): ConversionValueRuleSetOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const ConversionValueRuleSetOperation: MessageFns<ConversionValueRuleSetOperation> = {
  encode(message: ConversionValueRuleSetOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      ConversionValueRuleSet.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      ConversionValueRuleSet.encode(message.update, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversionValueRuleSetOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionValueRuleSetOperation();
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

          message.create = ConversionValueRuleSet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = ConversionValueRuleSet.decode(reader, reader.uint32());
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

  fromJSON(object: any): ConversionValueRuleSetOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? ConversionValueRuleSet.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? ConversionValueRuleSet.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: ConversionValueRuleSetOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = ConversionValueRuleSet.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = ConversionValueRuleSet.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<ConversionValueRuleSetOperation>): ConversionValueRuleSetOperation {
    return ConversionValueRuleSetOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConversionValueRuleSetOperation>): ConversionValueRuleSetOperation {
    const message = createBaseConversionValueRuleSetOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? ConversionValueRuleSet.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? ConversionValueRuleSet.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateConversionValueRuleSetsResponse(): MutateConversionValueRuleSetsResponse {
  return { results: [], partialFailureError: undefined };
}

export const MutateConversionValueRuleSetsResponse: MessageFns<MutateConversionValueRuleSetsResponse> = {
  encode(message: MutateConversionValueRuleSetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      MutateConversionValueRuleSetResult.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateConversionValueRuleSetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateConversionValueRuleSetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(MutateConversionValueRuleSetResult.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateConversionValueRuleSetsResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateConversionValueRuleSetResult.fromJSON(e))
        : [],
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
    };
  },

  toJSON(message: MutateConversionValueRuleSetsResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateConversionValueRuleSetResult.toJSON(e));
    }
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateConversionValueRuleSetsResponse>): MutateConversionValueRuleSetsResponse {
    return MutateConversionValueRuleSetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateConversionValueRuleSetsResponse>): MutateConversionValueRuleSetsResponse {
    const message = createBaseMutateConversionValueRuleSetsResponse();
    message.results = object.results?.map((e) => MutateConversionValueRuleSetResult.fromPartial(e)) || [];
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    return message;
  },
};

function createBaseMutateConversionValueRuleSetResult(): MutateConversionValueRuleSetResult {
  return { resourceName: "", conversionValueRuleSet: undefined };
}

export const MutateConversionValueRuleSetResult: MessageFns<MutateConversionValueRuleSetResult> = {
  encode(message: MutateConversionValueRuleSetResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.conversionValueRuleSet !== undefined) {
      ConversionValueRuleSet.encode(message.conversionValueRuleSet, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateConversionValueRuleSetResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateConversionValueRuleSetResult();
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

          message.conversionValueRuleSet = ConversionValueRuleSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateConversionValueRuleSetResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      conversionValueRuleSet: isSet(object.conversionValueRuleSet)
        ? ConversionValueRuleSet.fromJSON(object.conversionValueRuleSet)
        : undefined,
    };
  },

  toJSON(message: MutateConversionValueRuleSetResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.conversionValueRuleSet !== undefined) {
      obj.conversionValueRuleSet = ConversionValueRuleSet.toJSON(message.conversionValueRuleSet);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateConversionValueRuleSetResult>): MutateConversionValueRuleSetResult {
    return MutateConversionValueRuleSetResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateConversionValueRuleSetResult>): MutateConversionValueRuleSetResult {
    const message = createBaseMutateConversionValueRuleSetResult();
    message.resourceName = object.resourceName ?? "";
    message.conversionValueRuleSet =
      (object.conversionValueRuleSet !== undefined && object.conversionValueRuleSet !== null)
        ? ConversionValueRuleSet.fromPartial(object.conversionValueRuleSet)
        : undefined;
    return message;
  },
};

/** Service to manage conversion value rule sets. */
export type ConversionValueRuleSetServiceDefinition = typeof ConversionValueRuleSetServiceDefinition;
export const ConversionValueRuleSetServiceDefinition = {
  name: "ConversionValueRuleSetService",
  fullName: "google.ads.googleads.v16.services.ConversionValueRuleSetService",
  methods: {
    /**
     * Creates, updates or removes conversion value rule sets. Operation statuses
     * are returned.
     */
    mutateConversionValueRuleSets: {
      name: "MutateConversionValueRuleSets",
      requestType: MutateConversionValueRuleSetsRequest,
      requestStream: false,
      responseType: MutateConversionValueRuleSetsResponse,
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
              66,
              58,
              1,
              42,
              34,
              61,
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
              111,
              110,
              118,
              101,
              114,
              115,
              105,
              111,
              110,
              86,
              97,
              108,
              117,
              101,
              82,
              117,
              108,
              101,
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

export interface ConversionValueRuleSetServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates or removes conversion value rule sets. Operation statuses
   * are returned.
   */
  mutateConversionValueRuleSets(
    request: MutateConversionValueRuleSetsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateConversionValueRuleSetsResponse>>;
}

export interface ConversionValueRuleSetServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates or removes conversion value rule sets. Operation statuses
   * are returned.
   */
  mutateConversionValueRuleSets(
    request: DeepPartial<MutateConversionValueRuleSetsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateConversionValueRuleSetsResponse>;
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
