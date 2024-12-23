// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/ad_group_customizer_service.proto

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
import { AdGroupCustomizer } from "../resources/ad_group_customizer.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [AdGroupCustomizerService.MutateAdGroupCustomizers][google.ads.googleads.v16.services.AdGroupCustomizerService.MutateAdGroupCustomizers].
 */
export interface MutateAdGroupCustomizersRequest {
  /**
   * Required. The ID of the customer whose ad group customizers are being
   * modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual ad group
   * customizers.
   */
  operations: AdGroupCustomizerOperation[];
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

/** A single operation (create, remove) on a customizer attribute. */
export interface AdGroupCustomizerOperation {
  /**
   * Create operation: No resource name is expected for the new ad group
   * customizer
   */
  create?:
    | AdGroupCustomizer
    | undefined;
  /**
   * Remove operation: A resource name for the removed ad group customizer is
   * expected, in this format:
   * `customers/{customer_id}/adGroupCustomizers/{ad_group_id}~{customizer_attribute_id}`
   */
  remove?: string | undefined;
}

/** Response message for an ad group customizer mutate. */
export interface MutateAdGroupCustomizersResponse {
  /** All results for the mutate. */
  results: MutateAdGroupCustomizerResult[];
  /**
   * Errors that pertain to operation failures in the partial failure mode.
   * Returned only when partial_failure = true and all errors occur inside the
   * operations. If any errors occur outside the operations (for example, auth
   * errors), we return an RPC level error.
   */
  partialFailureError: Status | undefined;
}

/** The result for the ad group customizer mutate. */
export interface MutateAdGroupCustomizerResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated AdGroupCustomizer with only mutable fields after mutate.
   * The field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   */
  adGroupCustomizer: AdGroupCustomizer | undefined;
}

function createBaseMutateAdGroupCustomizersRequest(): MutateAdGroupCustomizersRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateAdGroupCustomizersRequest: MessageFns<MutateAdGroupCustomizersRequest> = {
  encode(message: MutateAdGroupCustomizersRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      AdGroupCustomizerOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAdGroupCustomizersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAdGroupCustomizersRequest();
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

          message.operations.push(AdGroupCustomizerOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateAdGroupCustomizersRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => AdGroupCustomizerOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateAdGroupCustomizersRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => AdGroupCustomizerOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateAdGroupCustomizersRequest>): MutateAdGroupCustomizersRequest {
    return MutateAdGroupCustomizersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAdGroupCustomizersRequest>): MutateAdGroupCustomizersRequest {
    const message = createBaseMutateAdGroupCustomizersRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => AdGroupCustomizerOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseAdGroupCustomizerOperation(): AdGroupCustomizerOperation {
  return { create: undefined, remove: undefined };
}

export const AdGroupCustomizerOperation: MessageFns<AdGroupCustomizerOperation> = {
  encode(message: AdGroupCustomizerOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.create !== undefined) {
      AdGroupCustomizer.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(18).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdGroupCustomizerOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdGroupCustomizerOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.create = AdGroupCustomizer.decode(reader, reader.uint32());
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

  fromJSON(object: any): AdGroupCustomizerOperation {
    return {
      create: isSet(object.create) ? AdGroupCustomizer.fromJSON(object.create) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: AdGroupCustomizerOperation): unknown {
    const obj: any = {};
    if (message.create !== undefined) {
      obj.create = AdGroupCustomizer.toJSON(message.create);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<AdGroupCustomizerOperation>): AdGroupCustomizerOperation {
    return AdGroupCustomizerOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AdGroupCustomizerOperation>): AdGroupCustomizerOperation {
    const message = createBaseAdGroupCustomizerOperation();
    message.create = (object.create !== undefined && object.create !== null)
      ? AdGroupCustomizer.fromPartial(object.create)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateAdGroupCustomizersResponse(): MutateAdGroupCustomizersResponse {
  return { results: [], partialFailureError: undefined };
}

export const MutateAdGroupCustomizersResponse: MessageFns<MutateAdGroupCustomizersResponse> = {
  encode(message: MutateAdGroupCustomizersResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      MutateAdGroupCustomizerResult.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAdGroupCustomizersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAdGroupCustomizersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(MutateAdGroupCustomizerResult.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateAdGroupCustomizersResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateAdGroupCustomizerResult.fromJSON(e))
        : [],
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
    };
  },

  toJSON(message: MutateAdGroupCustomizersResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateAdGroupCustomizerResult.toJSON(e));
    }
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateAdGroupCustomizersResponse>): MutateAdGroupCustomizersResponse {
    return MutateAdGroupCustomizersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAdGroupCustomizersResponse>): MutateAdGroupCustomizersResponse {
    const message = createBaseMutateAdGroupCustomizersResponse();
    message.results = object.results?.map((e) => MutateAdGroupCustomizerResult.fromPartial(e)) || [];
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    return message;
  },
};

function createBaseMutateAdGroupCustomizerResult(): MutateAdGroupCustomizerResult {
  return { resourceName: "", adGroupCustomizer: undefined };
}

export const MutateAdGroupCustomizerResult: MessageFns<MutateAdGroupCustomizerResult> = {
  encode(message: MutateAdGroupCustomizerResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.adGroupCustomizer !== undefined) {
      AdGroupCustomizer.encode(message.adGroupCustomizer, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateAdGroupCustomizerResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateAdGroupCustomizerResult();
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

          message.adGroupCustomizer = AdGroupCustomizer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateAdGroupCustomizerResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      adGroupCustomizer: isSet(object.adGroupCustomizer)
        ? AdGroupCustomizer.fromJSON(object.adGroupCustomizer)
        : undefined,
    };
  },

  toJSON(message: MutateAdGroupCustomizerResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.adGroupCustomizer !== undefined) {
      obj.adGroupCustomizer = AdGroupCustomizer.toJSON(message.adGroupCustomizer);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateAdGroupCustomizerResult>): MutateAdGroupCustomizerResult {
    return MutateAdGroupCustomizerResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateAdGroupCustomizerResult>): MutateAdGroupCustomizerResult {
    const message = createBaseMutateAdGroupCustomizerResult();
    message.resourceName = object.resourceName ?? "";
    message.adGroupCustomizer = (object.adGroupCustomizer !== undefined && object.adGroupCustomizer !== null)
      ? AdGroupCustomizer.fromPartial(object.adGroupCustomizer)
      : undefined;
    return message;
  },
};

/** Service to manage ad group customizer */
export type AdGroupCustomizerServiceDefinition = typeof AdGroupCustomizerServiceDefinition;
export const AdGroupCustomizerServiceDefinition = {
  name: "AdGroupCustomizerService",
  fullName: "google.ads.googleads.v16.services.AdGroupCustomizerService",
  methods: {
    /**
     * Creates, updates or removes ad group customizers. Operation statuses are
     * returned.
     */
    mutateAdGroupCustomizers: {
      name: "MutateAdGroupCustomizers",
      requestType: MutateAdGroupCustomizersRequest,
      requestStream: false,
      responseType: MutateAdGroupCustomizersResponse,
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
              100,
              71,
              114,
              111,
              117,
              112,
              67,
              117,
              115,
              116,
              111,
              109,
              105,
              122,
              101,
              114,
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

export interface AdGroupCustomizerServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates or removes ad group customizers. Operation statuses are
   * returned.
   */
  mutateAdGroupCustomizers(
    request: MutateAdGroupCustomizersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateAdGroupCustomizersResponse>>;
}

export interface AdGroupCustomizerServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates or removes ad group customizers. Operation statuses are
   * returned.
   */
  mutateAdGroupCustomizers(
    request: DeepPartial<MutateAdGroupCustomizersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateAdGroupCustomizersResponse>;
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
