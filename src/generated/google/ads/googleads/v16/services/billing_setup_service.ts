// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/billing_setup_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { BillingSetup } from "../resources/billing_setup.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/** Request message for billing setup mutate operations. */
export interface MutateBillingSetupRequest {
  /**
   * Required. Id of the customer to apply the billing setup mutate operation
   * to.
   */
  customerId: string;
  /** Required. The operation to perform. */
  operation: BillingSetupOperation | undefined;
}

/**
 * A single operation on a billing setup, which describes the cancellation of an
 * existing billing setup.
 */
export interface BillingSetupOperation {
  /**
   * Creates a billing setup. No resource name is expected for the new billing
   * setup.
   */
  create?:
    | BillingSetup
    | undefined;
  /**
   * Resource name of the billing setup to remove. A setup cannot be
   * removed unless it is in a pending state or its scheduled start time is in
   * the future. The resource name looks like
   * `customers/{customer_id}/billingSetups/{billing_id}`.
   */
  remove?: string | undefined;
}

/** Response message for a billing setup operation. */
export interface MutateBillingSetupResponse {
  /** A result that identifies the resource affected by the mutate request. */
  result: MutateBillingSetupResult | undefined;
}

/** Result for a single billing setup mutate. */
export interface MutateBillingSetupResult {
  /** Returned for successful operations. */
  resourceName: string;
}

function createBaseMutateBillingSetupRequest(): MutateBillingSetupRequest {
  return { customerId: "", operation: undefined };
}

export const MutateBillingSetupRequest: MessageFns<MutateBillingSetupRequest> = {
  encode(message: MutateBillingSetupRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    if (message.operation !== undefined) {
      BillingSetupOperation.encode(message.operation, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateBillingSetupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateBillingSetupRequest();
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

          message.operation = BillingSetupOperation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateBillingSetupRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operation: isSet(object.operation) ? BillingSetupOperation.fromJSON(object.operation) : undefined,
    };
  },

  toJSON(message: MutateBillingSetupRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operation !== undefined) {
      obj.operation = BillingSetupOperation.toJSON(message.operation);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateBillingSetupRequest>): MutateBillingSetupRequest {
    return MutateBillingSetupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateBillingSetupRequest>): MutateBillingSetupRequest {
    const message = createBaseMutateBillingSetupRequest();
    message.customerId = object.customerId ?? "";
    message.operation = (object.operation !== undefined && object.operation !== null)
      ? BillingSetupOperation.fromPartial(object.operation)
      : undefined;
    return message;
  },
};

function createBaseBillingSetupOperation(): BillingSetupOperation {
  return { create: undefined, remove: undefined };
}

export const BillingSetupOperation: MessageFns<BillingSetupOperation> = {
  encode(message: BillingSetupOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.create !== undefined) {
      BillingSetup.encode(message.create, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(10).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BillingSetupOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBillingSetupOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.create = BillingSetup.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): BillingSetupOperation {
    return {
      create: isSet(object.create) ? BillingSetup.fromJSON(object.create) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: BillingSetupOperation): unknown {
    const obj: any = {};
    if (message.create !== undefined) {
      obj.create = BillingSetup.toJSON(message.create);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<BillingSetupOperation>): BillingSetupOperation {
    return BillingSetupOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BillingSetupOperation>): BillingSetupOperation {
    const message = createBaseBillingSetupOperation();
    message.create = (object.create !== undefined && object.create !== null)
      ? BillingSetup.fromPartial(object.create)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateBillingSetupResponse(): MutateBillingSetupResponse {
  return { result: undefined };
}

export const MutateBillingSetupResponse: MessageFns<MutateBillingSetupResponse> = {
  encode(message: MutateBillingSetupResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.result !== undefined) {
      MutateBillingSetupResult.encode(message.result, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateBillingSetupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateBillingSetupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = MutateBillingSetupResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateBillingSetupResponse {
    return { result: isSet(object.result) ? MutateBillingSetupResult.fromJSON(object.result) : undefined };
  },

  toJSON(message: MutateBillingSetupResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = MutateBillingSetupResult.toJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateBillingSetupResponse>): MutateBillingSetupResponse {
    return MutateBillingSetupResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateBillingSetupResponse>): MutateBillingSetupResponse {
    const message = createBaseMutateBillingSetupResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? MutateBillingSetupResult.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseMutateBillingSetupResult(): MutateBillingSetupResult {
  return { resourceName: "" };
}

export const MutateBillingSetupResult: MessageFns<MutateBillingSetupResult> = {
  encode(message: MutateBillingSetupResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateBillingSetupResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateBillingSetupResult();
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

  fromJSON(object: any): MutateBillingSetupResult {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: MutateBillingSetupResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateBillingSetupResult>): MutateBillingSetupResult {
    return MutateBillingSetupResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateBillingSetupResult>): MutateBillingSetupResult {
    const message = createBaseMutateBillingSetupResult();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

/**
 * A service for designating the business entity responsible for accrued costs.
 *
 * A billing setup is associated with a payments account.  Billing-related
 * activity for all billing setups associated with a particular payments account
 * will appear on a single invoice generated monthly.
 *
 * Mutates:
 * The REMOVE operation cancels a pending billing setup.
 * The CREATE operation creates a new billing setup.
 */
export type BillingSetupServiceDefinition = typeof BillingSetupServiceDefinition;
export const BillingSetupServiceDefinition = {
  name: "BillingSetupService",
  fullName: "google.ads.googleads.v16.services.BillingSetupService",
  methods: {
    /**
     * Creates a billing setup, or cancels an existing billing setup.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [BillingSetupError]()
     *   [DateError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [QuotaError]()
     *   [RequestError]()
     */
    mutateBillingSetup: {
      name: "MutateBillingSetup",
      requestType: MutateBillingSetupRequest,
      requestStream: false,
      responseType: MutateBillingSetupResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              21,
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
            ]),
          ],
          578365826: [
            Buffer.from([
              56,
              58,
              1,
              42,
              34,
              51,
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
              98,
              105,
              108,
              108,
              105,
              110,
              103,
              83,
              101,
              116,
              117,
              112,
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

export interface BillingSetupServiceImplementation<CallContextExt = {}> {
  /**
   * Creates a billing setup, or cancels an existing billing setup.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [BillingSetupError]()
   *   [DateError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  mutateBillingSetup(
    request: MutateBillingSetupRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateBillingSetupResponse>>;
}

export interface BillingSetupServiceClient<CallOptionsExt = {}> {
  /**
   * Creates a billing setup, or cancels an existing billing setup.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [BillingSetupError]()
   *   [DateError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  mutateBillingSetup(
    request: DeepPartial<MutateBillingSetupRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateBillingSetupResponse>;
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
