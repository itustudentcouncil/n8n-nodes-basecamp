// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/custom_interest_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { FieldMask } from "../../../../protobuf/field_mask.js";
import { CustomInterest } from "../resources/custom_interest.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [CustomInterestService.MutateCustomInterests][google.ads.googleads.v17.services.CustomInterestService.MutateCustomInterests].
 */
export interface MutateCustomInterestsRequest {
  /** Required. The ID of the customer whose custom interests are being modified. */
  customerId: string;
  /** Required. The list of operations to perform on individual custom interests. */
  operations: CustomInterestOperation[];
  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   */
  validateOnly: boolean;
}

/** A single operation (create, update) on a custom interest. */
export interface CustomInterestOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * Create operation: No resource name is expected for the new custom
   * interest.
   */
  create?:
    | CustomInterest
    | undefined;
  /**
   * Update operation: The custom interest is expected to have a valid
   * resource name.
   */
  update?: CustomInterest | undefined;
}

/** Response message for custom interest mutate. */
export interface MutateCustomInterestsResponse {
  /** All results for the mutate. */
  results: MutateCustomInterestResult[];
}

/** The result for the custom interest mutate. */
export interface MutateCustomInterestResult {
  /** Returned for successful operations. */
  resourceName: string;
}

function createBaseMutateCustomInterestsRequest(): MutateCustomInterestsRequest {
  return { customerId: "", operations: [], validateOnly: false };
}

export const MutateCustomInterestsRequest: MessageFns<MutateCustomInterestsRequest> = {
  encode(message: MutateCustomInterestsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CustomInterestOperation.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.validateOnly !== false) {
      writer.uint32(32).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomInterestsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomInterestsRequest();
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

          message.operations.push(CustomInterestOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCustomInterestsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CustomInterestOperation.fromJSON(e))
        : [],
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: MutateCustomInterestsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CustomInterestOperation.toJSON(e));
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCustomInterestsRequest>): MutateCustomInterestsRequest {
    return MutateCustomInterestsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomInterestsRequest>): MutateCustomInterestsRequest {
    const message = createBaseMutateCustomInterestsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CustomInterestOperation.fromPartial(e)) || [];
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseCustomInterestOperation(): CustomInterestOperation {
  return { updateMask: undefined, create: undefined, update: undefined };
}

export const CustomInterestOperation: MessageFns<CustomInterestOperation> = {
  encode(message: CustomInterestOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      CustomInterest.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      CustomInterest.encode(message.update, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomInterestOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomInterestOperation();
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

          message.create = CustomInterest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = CustomInterest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomInterestOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? CustomInterest.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? CustomInterest.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: CustomInterestOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = CustomInterest.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = CustomInterest.toJSON(message.update);
    }
    return obj;
  },

  create(base?: DeepPartial<CustomInterestOperation>): CustomInterestOperation {
    return CustomInterestOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomInterestOperation>): CustomInterestOperation {
    const message = createBaseCustomInterestOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? CustomInterest.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? CustomInterest.fromPartial(object.update)
      : undefined;
    return message;
  },
};

function createBaseMutateCustomInterestsResponse(): MutateCustomInterestsResponse {
  return { results: [] };
}

export const MutateCustomInterestsResponse: MessageFns<MutateCustomInterestsResponse> = {
  encode(message: MutateCustomInterestsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      MutateCustomInterestResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomInterestsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomInterestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(MutateCustomInterestResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCustomInterestsResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCustomInterestResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateCustomInterestsResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCustomInterestResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCustomInterestsResponse>): MutateCustomInterestsResponse {
    return MutateCustomInterestsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomInterestsResponse>): MutateCustomInterestsResponse {
    const message = createBaseMutateCustomInterestsResponse();
    message.results = object.results?.map((e) => MutateCustomInterestResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateCustomInterestResult(): MutateCustomInterestResult {
  return { resourceName: "" };
}

export const MutateCustomInterestResult: MessageFns<MutateCustomInterestResult> = {
  encode(message: MutateCustomInterestResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomInterestResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomInterestResult();
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

  fromJSON(object: any): MutateCustomInterestResult {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: MutateCustomInterestResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCustomInterestResult>): MutateCustomInterestResult {
    return MutateCustomInterestResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomInterestResult>): MutateCustomInterestResult {
    const message = createBaseMutateCustomInterestResult();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

/** Service to manage custom interests. */
export type CustomInterestServiceDefinition = typeof CustomInterestServiceDefinition;
export const CustomInterestServiceDefinition = {
  name: "CustomInterestService",
  fullName: "google.ads.googleads.v17.services.CustomInterestService",
  methods: {
    /**
     * Creates or updates custom interests. Operation statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CriterionError]()
     *   [CustomInterestError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [PolicyViolationError]()
     *   [QuotaError]()
     *   [RequestError]()
     *   [StringLengthError]()
     */
    mutateCustomInterests: {
      name: "MutateCustomInterests",
      requestType: MutateCustomInterestsRequest,
      requestStream: false,
      responseType: MutateCustomInterestsResponse,
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
              73,
              110,
              116,
              101,
              114,
              101,
              115,
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

export interface CustomInterestServiceImplementation<CallContextExt = {}> {
  /**
   * Creates or updates custom interests. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CriterionError]()
   *   [CustomInterestError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [PolicyViolationError]()
   *   [QuotaError]()
   *   [RequestError]()
   *   [StringLengthError]()
   */
  mutateCustomInterests(
    request: MutateCustomInterestsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCustomInterestsResponse>>;
}

export interface CustomInterestServiceClient<CallOptionsExt = {}> {
  /**
   * Creates or updates custom interests. Operation statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CriterionError]()
   *   [CustomInterestError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [PolicyViolationError]()
   *   [QuotaError]()
   *   [RequestError]()
   *   [StringLengthError]()
   */
  mutateCustomInterests(
    request: DeepPartial<MutateCustomInterestsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCustomInterestsResponse>;
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