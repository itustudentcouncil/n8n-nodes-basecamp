// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/customer_sk_ad_network_conversion_value_schema_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Status } from "../../../../rpc/status.js";
import { CustomerSkAdNetworkConversionValueSchema } from "../resources/customer_sk_ad_network_conversion_value_schema.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/** A single update operation for a CustomerSkAdNetworkConversionValueSchema. */
export interface CustomerSkAdNetworkConversionValueSchemaOperation {
  /** Update operation: The schema is expected to have a valid resource name. */
  update: CustomerSkAdNetworkConversionValueSchema | undefined;
}

/**
 * Request message for
 * [CustomerSkAdNetworkConversionValueSchemaService.MutateCustomerSkAdNetworkConversionValueSchema][google.ads.googleads.v17.services.CustomerSkAdNetworkConversionValueSchemaService.MutateCustomerSkAdNetworkConversionValueSchema].
 */
export interface MutateCustomerSkAdNetworkConversionValueSchemaRequest {
  /** The ID of the customer whose shared sets are being modified. */
  customerId: string;
  /** The operation to perform. */
  operation:
    | CustomerSkAdNetworkConversionValueSchemaOperation
    | undefined;
  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   */
  validateOnly: boolean;
  /**
   * Optional. If true, enables returning warnings. Warnings return error
   * messages and error codes without blocking the execution of the mutate
   * operation.
   */
  enableWarnings: boolean;
}

/** The result for the CustomerSkAdNetworkConversionValueSchema mutate. */
export interface MutateCustomerSkAdNetworkConversionValueSchemaResult {
  /** Resource name of the customer that was modified. */
  resourceName: string;
  /** App ID of the SkanConversionValue modified. */
  appId: string;
}

/** Response message for MutateCustomerSkAdNetworkConversionValueSchema. */
export interface MutateCustomerSkAdNetworkConversionValueSchemaResponse {
  /** All results for the mutate. */
  result:
    | MutateCustomerSkAdNetworkConversionValueSchemaResult
    | undefined;
  /**
   * Non blocking errors that provides schema validation failure details.
   * Returned only when enable_warnings = true.
   */
  warning: Status | undefined;
}

function createBaseCustomerSkAdNetworkConversionValueSchemaOperation(): CustomerSkAdNetworkConversionValueSchemaOperation {
  return { update: undefined };
}

export const CustomerSkAdNetworkConversionValueSchemaOperation: MessageFns<
  CustomerSkAdNetworkConversionValueSchemaOperation
> = {
  encode(
    message: CustomerSkAdNetworkConversionValueSchemaOperation,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.update !== undefined) {
      CustomerSkAdNetworkConversionValueSchema.encode(message.update, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomerSkAdNetworkConversionValueSchemaOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerSkAdNetworkConversionValueSchemaOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.update = CustomerSkAdNetworkConversionValueSchema.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomerSkAdNetworkConversionValueSchemaOperation {
    return {
      update: isSet(object.update) ? CustomerSkAdNetworkConversionValueSchema.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: CustomerSkAdNetworkConversionValueSchemaOperation): unknown {
    const obj: any = {};
    if (message.update !== undefined) {
      obj.update = CustomerSkAdNetworkConversionValueSchema.toJSON(message.update);
    }
    return obj;
  },

  create(
    base?: DeepPartial<CustomerSkAdNetworkConversionValueSchemaOperation>,
  ): CustomerSkAdNetworkConversionValueSchemaOperation {
    return CustomerSkAdNetworkConversionValueSchemaOperation.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<CustomerSkAdNetworkConversionValueSchemaOperation>,
  ): CustomerSkAdNetworkConversionValueSchemaOperation {
    const message = createBaseCustomerSkAdNetworkConversionValueSchemaOperation();
    message.update = (object.update !== undefined && object.update !== null)
      ? CustomerSkAdNetworkConversionValueSchema.fromPartial(object.update)
      : undefined;
    return message;
  },
};

function createBaseMutateCustomerSkAdNetworkConversionValueSchemaRequest(): MutateCustomerSkAdNetworkConversionValueSchemaRequest {
  return { customerId: "", operation: undefined, validateOnly: false, enableWarnings: false };
}

export const MutateCustomerSkAdNetworkConversionValueSchemaRequest: MessageFns<
  MutateCustomerSkAdNetworkConversionValueSchemaRequest
> = {
  encode(
    message: MutateCustomerSkAdNetworkConversionValueSchemaRequest,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    if (message.operation !== undefined) {
      CustomerSkAdNetworkConversionValueSchemaOperation.encode(message.operation, writer.uint32(18).fork()).join();
    }
    if (message.validateOnly !== false) {
      writer.uint32(24).bool(message.validateOnly);
    }
    if (message.enableWarnings !== false) {
      writer.uint32(32).bool(message.enableWarnings);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomerSkAdNetworkConversionValueSchemaRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomerSkAdNetworkConversionValueSchemaRequest();
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

          message.operation = CustomerSkAdNetworkConversionValueSchemaOperation.decode(reader, reader.uint32());
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

          message.enableWarnings = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCustomerSkAdNetworkConversionValueSchemaRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operation: isSet(object.operation)
        ? CustomerSkAdNetworkConversionValueSchemaOperation.fromJSON(object.operation)
        : undefined,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      enableWarnings: isSet(object.enableWarnings) ? globalThis.Boolean(object.enableWarnings) : false,
    };
  },

  toJSON(message: MutateCustomerSkAdNetworkConversionValueSchemaRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operation !== undefined) {
      obj.operation = CustomerSkAdNetworkConversionValueSchemaOperation.toJSON(message.operation);
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    if (message.enableWarnings !== false) {
      obj.enableWarnings = message.enableWarnings;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MutateCustomerSkAdNetworkConversionValueSchemaRequest>,
  ): MutateCustomerSkAdNetworkConversionValueSchemaRequest {
    return MutateCustomerSkAdNetworkConversionValueSchemaRequest.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MutateCustomerSkAdNetworkConversionValueSchemaRequest>,
  ): MutateCustomerSkAdNetworkConversionValueSchemaRequest {
    const message = createBaseMutateCustomerSkAdNetworkConversionValueSchemaRequest();
    message.customerId = object.customerId ?? "";
    message.operation = (object.operation !== undefined && object.operation !== null)
      ? CustomerSkAdNetworkConversionValueSchemaOperation.fromPartial(object.operation)
      : undefined;
    message.validateOnly = object.validateOnly ?? false;
    message.enableWarnings = object.enableWarnings ?? false;
    return message;
  },
};

function createBaseMutateCustomerSkAdNetworkConversionValueSchemaResult(): MutateCustomerSkAdNetworkConversionValueSchemaResult {
  return { resourceName: "", appId: "" };
}

export const MutateCustomerSkAdNetworkConversionValueSchemaResult: MessageFns<
  MutateCustomerSkAdNetworkConversionValueSchemaResult
> = {
  encode(
    message: MutateCustomerSkAdNetworkConversionValueSchemaResult,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.appId !== "") {
      writer.uint32(18).string(message.appId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomerSkAdNetworkConversionValueSchemaResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomerSkAdNetworkConversionValueSchemaResult();
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

          message.appId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCustomerSkAdNetworkConversionValueSchemaResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      appId: isSet(object.appId) ? globalThis.String(object.appId) : "",
    };
  },

  toJSON(message: MutateCustomerSkAdNetworkConversionValueSchemaResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.appId !== "") {
      obj.appId = message.appId;
    }
    return obj;
  },

  create(
    base?: DeepPartial<MutateCustomerSkAdNetworkConversionValueSchemaResult>,
  ): MutateCustomerSkAdNetworkConversionValueSchemaResult {
    return MutateCustomerSkAdNetworkConversionValueSchemaResult.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MutateCustomerSkAdNetworkConversionValueSchemaResult>,
  ): MutateCustomerSkAdNetworkConversionValueSchemaResult {
    const message = createBaseMutateCustomerSkAdNetworkConversionValueSchemaResult();
    message.resourceName = object.resourceName ?? "";
    message.appId = object.appId ?? "";
    return message;
  },
};

function createBaseMutateCustomerSkAdNetworkConversionValueSchemaResponse(): MutateCustomerSkAdNetworkConversionValueSchemaResponse {
  return { result: undefined, warning: undefined };
}

export const MutateCustomerSkAdNetworkConversionValueSchemaResponse: MessageFns<
  MutateCustomerSkAdNetworkConversionValueSchemaResponse
> = {
  encode(
    message: MutateCustomerSkAdNetworkConversionValueSchemaResponse,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.result !== undefined) {
      MutateCustomerSkAdNetworkConversionValueSchemaResult.encode(message.result, writer.uint32(10).fork()).join();
    }
    if (message.warning !== undefined) {
      Status.encode(message.warning, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomerSkAdNetworkConversionValueSchemaResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomerSkAdNetworkConversionValueSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = MutateCustomerSkAdNetworkConversionValueSchemaResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.warning = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCustomerSkAdNetworkConversionValueSchemaResponse {
    return {
      result: isSet(object.result)
        ? MutateCustomerSkAdNetworkConversionValueSchemaResult.fromJSON(object.result)
        : undefined,
      warning: isSet(object.warning) ? Status.fromJSON(object.warning) : undefined,
    };
  },

  toJSON(message: MutateCustomerSkAdNetworkConversionValueSchemaResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = MutateCustomerSkAdNetworkConversionValueSchemaResult.toJSON(message.result);
    }
    if (message.warning !== undefined) {
      obj.warning = Status.toJSON(message.warning);
    }
    return obj;
  },

  create(
    base?: DeepPartial<MutateCustomerSkAdNetworkConversionValueSchemaResponse>,
  ): MutateCustomerSkAdNetworkConversionValueSchemaResponse {
    return MutateCustomerSkAdNetworkConversionValueSchemaResponse.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MutateCustomerSkAdNetworkConversionValueSchemaResponse>,
  ): MutateCustomerSkAdNetworkConversionValueSchemaResponse {
    const message = createBaseMutateCustomerSkAdNetworkConversionValueSchemaResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? MutateCustomerSkAdNetworkConversionValueSchemaResult.fromPartial(object.result)
      : undefined;
    message.warning = (object.warning !== undefined && object.warning !== null)
      ? Status.fromPartial(object.warning)
      : undefined;
    return message;
  },
};

/** Service to manage CustomerSkAdNetworkConversionValueSchema. */
export type CustomerSkAdNetworkConversionValueSchemaServiceDefinition =
  typeof CustomerSkAdNetworkConversionValueSchemaServiceDefinition;
export const CustomerSkAdNetworkConversionValueSchemaServiceDefinition = {
  name: "CustomerSkAdNetworkConversionValueSchemaService",
  fullName: "google.ads.googleads.v17.services.CustomerSkAdNetworkConversionValueSchemaService",
  methods: {
    /**
     * Creates or updates the CustomerSkAdNetworkConversionValueSchema.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [FieldError]()
     *   [InternalError]()
     *   [MutateError]()
     */
    mutateCustomerSkAdNetworkConversionValueSchema: {
      name: "MutateCustomerSkAdNetworkConversionValueSchema",
      requestType: MutateCustomerSkAdNetworkConversionValueSchemaRequest,
      requestStream: false,
      responseType: MutateCustomerSkAdNetworkConversionValueSchemaResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              84,
              58,
              1,
              42,
              34,
              79,
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
              101,
              114,
              83,
              107,
              65,
              100,
              78,
              101,
              116,
              119,
              111,
              114,
              107,
              67,
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
              83,
              99,
              104,
              101,
              109,
              97,
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

export interface CustomerSkAdNetworkConversionValueSchemaServiceImplementation<CallContextExt = {}> {
  /**
   * Creates or updates the CustomerSkAdNetworkConversionValueSchema.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [FieldError]()
   *   [InternalError]()
   *   [MutateError]()
   */
  mutateCustomerSkAdNetworkConversionValueSchema(
    request: MutateCustomerSkAdNetworkConversionValueSchemaRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCustomerSkAdNetworkConversionValueSchemaResponse>>;
}

export interface CustomerSkAdNetworkConversionValueSchemaServiceClient<CallOptionsExt = {}> {
  /**
   * Creates or updates the CustomerSkAdNetworkConversionValueSchema.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [FieldError]()
   *   [InternalError]()
   *   [MutateError]()
   */
  mutateCustomerSkAdNetworkConversionValueSchema(
    request: DeepPartial<MutateCustomerSkAdNetworkConversionValueSchemaRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCustomerSkAdNetworkConversionValueSchemaResponse>;
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
