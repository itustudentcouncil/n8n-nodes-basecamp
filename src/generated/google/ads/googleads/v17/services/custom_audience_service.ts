// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/custom_audience_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { FieldMask } from "../../../../protobuf/field_mask.js";
import { CustomAudience } from "../resources/custom_audience.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [CustomAudienceService.MutateCustomAudiences][google.ads.googleads.v17.services.CustomAudienceService.MutateCustomAudiences].
 */
export interface MutateCustomAudiencesRequest {
  /** Required. The ID of the customer whose custom audiences are being modified. */
  customerId: string;
  /** Required. The list of operations to perform on individual custom audiences. */
  operations: CustomAudienceOperation[];
  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   */
  validateOnly: boolean;
}

/** A single operation (create, update) on a custom audience. */
export interface CustomAudienceOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * Create operation: No resource name is expected for the new custom
   * audience.
   */
  create?:
    | CustomAudience
    | undefined;
  /**
   * Update operation: The custom audience is expected to have a valid
   * resource name.
   */
  update?:
    | CustomAudience
    | undefined;
  /**
   * Remove operation: A resource name for the removed custom audience is
   * expected, in this format:
   *
   * `customers/{customer_id}/customAudiences/{custom_audience_id}`
   */
  remove?: string | undefined;
}

/** Response message for custom audience mutate. */
export interface MutateCustomAudiencesResponse {
  /** All results for the mutate. */
  results: MutateCustomAudienceResult[];
}

/** The result for the custom audience mutate. */
export interface MutateCustomAudienceResult {
  /** Returned for successful operations. */
  resourceName: string;
}

function createBaseMutateCustomAudiencesRequest(): MutateCustomAudiencesRequest {
  return { customerId: "", operations: [], validateOnly: false };
}

export const MutateCustomAudiencesRequest: MessageFns<MutateCustomAudiencesRequest> = {
  encode(message: MutateCustomAudiencesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CustomAudienceOperation.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.validateOnly !== false) {
      writer.uint32(24).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomAudiencesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomAudiencesRequest();
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

          message.operations.push(CustomAudienceOperation.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): MutateCustomAudiencesRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CustomAudienceOperation.fromJSON(e))
        : [],
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: MutateCustomAudiencesRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CustomAudienceOperation.toJSON(e));
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCustomAudiencesRequest>): MutateCustomAudiencesRequest {
    return MutateCustomAudiencesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomAudiencesRequest>): MutateCustomAudiencesRequest {
    const message = createBaseMutateCustomAudiencesRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CustomAudienceOperation.fromPartial(e)) || [];
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseCustomAudienceOperation(): CustomAudienceOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const CustomAudienceOperation: MessageFns<CustomAudienceOperation> = {
  encode(message: CustomAudienceOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      CustomAudience.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      CustomAudience.encode(message.update, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomAudienceOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomAudienceOperation();
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

          message.create = CustomAudience.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = CustomAudience.decode(reader, reader.uint32());
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

  fromJSON(object: any): CustomAudienceOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? CustomAudience.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? CustomAudience.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: CustomAudienceOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = CustomAudience.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = CustomAudience.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<CustomAudienceOperation>): CustomAudienceOperation {
    return CustomAudienceOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomAudienceOperation>): CustomAudienceOperation {
    const message = createBaseCustomAudienceOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? CustomAudience.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? CustomAudience.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateCustomAudiencesResponse(): MutateCustomAudiencesResponse {
  return { results: [] };
}

export const MutateCustomAudiencesResponse: MessageFns<MutateCustomAudiencesResponse> = {
  encode(message: MutateCustomAudiencesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      MutateCustomAudienceResult.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomAudiencesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomAudiencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(MutateCustomAudienceResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCustomAudiencesResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCustomAudienceResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateCustomAudiencesResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCustomAudienceResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCustomAudiencesResponse>): MutateCustomAudiencesResponse {
    return MutateCustomAudiencesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomAudiencesResponse>): MutateCustomAudiencesResponse {
    const message = createBaseMutateCustomAudiencesResponse();
    message.results = object.results?.map((e) => MutateCustomAudienceResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateCustomAudienceResult(): MutateCustomAudienceResult {
  return { resourceName: "" };
}

export const MutateCustomAudienceResult: MessageFns<MutateCustomAudienceResult> = {
  encode(message: MutateCustomAudienceResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomAudienceResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomAudienceResult();
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

  fromJSON(object: any): MutateCustomAudienceResult {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: MutateCustomAudienceResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCustomAudienceResult>): MutateCustomAudienceResult {
    return MutateCustomAudienceResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomAudienceResult>): MutateCustomAudienceResult {
    const message = createBaseMutateCustomAudienceResult();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

/** Service to manage custom audiences. */
export type CustomAudienceServiceDefinition = typeof CustomAudienceServiceDefinition;
export const CustomAudienceServiceDefinition = {
  name: "CustomAudienceService",
  fullName: "google.ads.googleads.v17.services.CustomAudienceService",
  methods: {
    /**
     * Creates or updates custom audiences. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CustomAudienceError]()
     *   [CustomInterestError]()
     *   [FieldError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [OperationAccessDeniedError]()
     *   [PolicyViolationError]()
     *   [QuotaError]()
     *   [RequestError]()
     */
    mutateCustomAudiences: {
      name: "MutateCustomAudiences",
      requestType: MutateCustomAudiencesRequest,
      requestStream: false,
      responseType: MutateCustomAudiencesResponse,
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
              117,
              115,
              116,
              111,
              109,
              65,
              117,
              100,
              105,
              101,
              110,
              99,
              101,
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

export interface CustomAudienceServiceImplementation<CallContextExt = {}> {
  /**
   * Creates or updates custom audiences. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CustomAudienceError]()
   *   [CustomInterestError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [OperationAccessDeniedError]()
   *   [PolicyViolationError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  mutateCustomAudiences(
    request: MutateCustomAudiencesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCustomAudiencesResponse>>;
}

export interface CustomAudienceServiceClient<CallOptionsExt = {}> {
  /**
   * Creates or updates custom audiences. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CustomAudienceError]()
   *   [CustomInterestError]()
   *   [FieldError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [OperationAccessDeniedError]()
   *   [PolicyViolationError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  mutateCustomAudiences(
    request: DeepPartial<MutateCustomAudiencesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCustomAudiencesResponse>;
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