// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/customer_extension_setting_service.proto

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
import { CustomerExtensionSetting } from "../resources/customer_extension_setting.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [CustomerExtensionSettingService.MutateCustomerExtensionSettings][google.ads.googleads.v17.services.CustomerExtensionSettingService.MutateCustomerExtensionSettings].
 */
export interface MutateCustomerExtensionSettingsRequest {
  /**
   * Required. The ID of the customer whose customer extension settings are
   * being modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual customer
   * extension settings.
   */
  operations: CustomerExtensionSettingOperation[];
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

/** A single operation (create, update, remove) on a customer extension setting. */
export interface CustomerExtensionSettingOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * Create operation: No resource name is expected for the new customer
   * extension setting.
   */
  create?:
    | CustomerExtensionSetting
    | undefined;
  /**
   * Update operation: The customer extension setting is expected to have a
   * valid resource name.
   */
  update?:
    | CustomerExtensionSetting
    | undefined;
  /**
   * Remove operation: A resource name for the removed customer extension
   * setting is expected, in this format:
   *
   * `customers/{customer_id}/customerExtensionSettings/{extension_type}`
   */
  remove?: string | undefined;
}

/** Response message for a customer extension setting mutate. */
export interface MutateCustomerExtensionSettingsResponse {
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
  results: MutateCustomerExtensionSettingResult[];
}

/** The result for the customer extension setting mutate. */
export interface MutateCustomerExtensionSettingResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated CustomerExtensionSetting with only mutable fields after mutate.
   * The field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   */
  customerExtensionSetting: CustomerExtensionSetting | undefined;
}

function createBaseMutateCustomerExtensionSettingsRequest(): MutateCustomerExtensionSettingsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateCustomerExtensionSettingsRequest: MessageFns<MutateCustomerExtensionSettingsRequest> = {
  encode(message: MutateCustomerExtensionSettingsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CustomerExtensionSettingOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomerExtensionSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomerExtensionSettingsRequest();
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

          message.operations.push(CustomerExtensionSettingOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCustomerExtensionSettingsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CustomerExtensionSettingOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateCustomerExtensionSettingsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CustomerExtensionSettingOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateCustomerExtensionSettingsRequest>): MutateCustomerExtensionSettingsRequest {
    return MutateCustomerExtensionSettingsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomerExtensionSettingsRequest>): MutateCustomerExtensionSettingsRequest {
    const message = createBaseMutateCustomerExtensionSettingsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CustomerExtensionSettingOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseCustomerExtensionSettingOperation(): CustomerExtensionSettingOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const CustomerExtensionSettingOperation: MessageFns<CustomerExtensionSettingOperation> = {
  encode(message: CustomerExtensionSettingOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      CustomerExtensionSetting.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      CustomerExtensionSetting.encode(message.update, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomerExtensionSettingOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerExtensionSettingOperation();
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

          message.create = CustomerExtensionSetting.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = CustomerExtensionSetting.decode(reader, reader.uint32());
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

  fromJSON(object: any): CustomerExtensionSettingOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? CustomerExtensionSetting.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? CustomerExtensionSetting.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: CustomerExtensionSettingOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = CustomerExtensionSetting.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = CustomerExtensionSetting.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<CustomerExtensionSettingOperation>): CustomerExtensionSettingOperation {
    return CustomerExtensionSettingOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomerExtensionSettingOperation>): CustomerExtensionSettingOperation {
    const message = createBaseCustomerExtensionSettingOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? CustomerExtensionSetting.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? CustomerExtensionSetting.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateCustomerExtensionSettingsResponse(): MutateCustomerExtensionSettingsResponse {
  return { partialFailureError: undefined, results: [] };
}

export const MutateCustomerExtensionSettingsResponse: MessageFns<MutateCustomerExtensionSettingsResponse> = {
  encode(message: MutateCustomerExtensionSettingsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(26).fork()).join();
    }
    for (const v of message.results) {
      MutateCustomerExtensionSettingResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomerExtensionSettingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomerExtensionSettingsResponse();
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

          message.results.push(MutateCustomerExtensionSettingResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCustomerExtensionSettingsResponse {
    return {
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCustomerExtensionSettingResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateCustomerExtensionSettingsResponse): unknown {
    const obj: any = {};
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCustomerExtensionSettingResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCustomerExtensionSettingsResponse>): MutateCustomerExtensionSettingsResponse {
    return MutateCustomerExtensionSettingsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomerExtensionSettingsResponse>): MutateCustomerExtensionSettingsResponse {
    const message = createBaseMutateCustomerExtensionSettingsResponse();
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    message.results = object.results?.map((e) => MutateCustomerExtensionSettingResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateCustomerExtensionSettingResult(): MutateCustomerExtensionSettingResult {
  return { resourceName: "", customerExtensionSetting: undefined };
}

export const MutateCustomerExtensionSettingResult: MessageFns<MutateCustomerExtensionSettingResult> = {
  encode(message: MutateCustomerExtensionSettingResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.customerExtensionSetting !== undefined) {
      CustomerExtensionSetting.encode(message.customerExtensionSetting, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomerExtensionSettingResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomerExtensionSettingResult();
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

          message.customerExtensionSetting = CustomerExtensionSetting.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCustomerExtensionSettingResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      customerExtensionSetting: isSet(object.customerExtensionSetting)
        ? CustomerExtensionSetting.fromJSON(object.customerExtensionSetting)
        : undefined,
    };
  },

  toJSON(message: MutateCustomerExtensionSettingResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.customerExtensionSetting !== undefined) {
      obj.customerExtensionSetting = CustomerExtensionSetting.toJSON(message.customerExtensionSetting);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCustomerExtensionSettingResult>): MutateCustomerExtensionSettingResult {
    return MutateCustomerExtensionSettingResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomerExtensionSettingResult>): MutateCustomerExtensionSettingResult {
    const message = createBaseMutateCustomerExtensionSettingResult();
    message.resourceName = object.resourceName ?? "";
    message.customerExtensionSetting =
      (object.customerExtensionSetting !== undefined && object.customerExtensionSetting !== null)
        ? CustomerExtensionSetting.fromPartial(object.customerExtensionSetting)
        : undefined;
    return message;
  },
};

/** Service to manage customer extension settings. */
export type CustomerExtensionSettingServiceDefinition = typeof CustomerExtensionSettingServiceDefinition;
export const CustomerExtensionSettingServiceDefinition = {
  name: "CustomerExtensionSettingService",
  fullName: "google.ads.googleads.v17.services.CustomerExtensionSettingService",
  methods: {
    /**
     * Creates, updates, or removes customer extension settings. Operation
     * statuses are returned.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [CollectionSizeError]()
     *   [CriterionError]()
     *   [DatabaseError]()
     *   [DateError]()
     *   [DistinctError]()
     *   [ExtensionSettingError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [IdError]()
     *   [InternalError]()
     *   [ListOperationError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotEmptyError]()
     *   [NullError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *   [UrlFieldError]()
     */
    mutateCustomerExtensionSettings: {
      name: "MutateCustomerExtensionSettings",
      requestType: MutateCustomerExtensionSettingsRequest,
      requestStream: false,
      responseType: MutateCustomerExtensionSettingsResponse,
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
              68,
              58,
              1,
              42,
              34,
              63,
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
              69,
              120,
              116,
              101,
              110,
              115,
              105,
              111,
              110,
              83,
              101,
              116,
              116,
              105,
              110,
              103,
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

export interface CustomerExtensionSettingServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates, or removes customer extension settings. Operation
   * statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CollectionSizeError]()
   *   [CriterionError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DistinctError]()
   *   [ExtensionSettingError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [ListOperationError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   */
  mutateCustomerExtensionSettings(
    request: MutateCustomerExtensionSettingsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCustomerExtensionSettingsResponse>>;
}

export interface CustomerExtensionSettingServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates, or removes customer extension settings. Operation
   * statuses are returned.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [CollectionSizeError]()
   *   [CriterionError]()
   *   [DatabaseError]()
   *   [DateError]()
   *   [DistinctError]()
   *   [ExtensionSettingError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [ListOperationError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   */
  mutateCustomerExtensionSettings(
    request: DeepPartial<MutateCustomerExtensionSettingsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCustomerExtensionSettingsResponse>;
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