// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/customizer_attribute_service.proto

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
import { CustomizerAttribute } from "../resources/customizer_attribute.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [CustomizerAttributeService.MutateCustomizerAttributes][google.ads.googleads.v17.services.CustomizerAttributeService.MutateCustomizerAttributes].
 */
export interface MutateCustomizerAttributesRequest {
  /**
   * Required. The ID of the customer whose customizer attributes are being
   * modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual customizer
   * attributes.
   */
  operations: CustomizerAttributeOperation[];
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
export interface CustomizerAttributeOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * Create operation: No resource name is expected for the new customizer
   * attribute
   */
  create?:
    | CustomizerAttribute
    | undefined;
  /**
   * Remove operation: A resource name for the removed customizer attribute is
   * expected, in this format:
   * `customers/{customer_id}/customizerAttributes/{customizer_attribute_id}`
   */
  remove?: string | undefined;
}

/** Response message for a customizer attribute mutate. */
export interface MutateCustomizerAttributesResponse {
  /** All results for the mutate. */
  results: MutateCustomizerAttributeResult[];
  /**
   * Errors that pertain to operation failures in the partial failure mode.
   * Returned only when partial_failure = true and all errors occur inside the
   * operations. If any errors occur outside the operations (for example, auth
   * errors), we return an RPC level error.
   */
  partialFailureError: Status | undefined;
}

/** The result for the customizer attribute mutate. */
export interface MutateCustomizerAttributeResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated CustomizerAttribute with only mutable fields after mutate.
   * The field will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   */
  customizerAttribute: CustomizerAttribute | undefined;
}

function createBaseMutateCustomizerAttributesRequest(): MutateCustomizerAttributesRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateCustomizerAttributesRequest: MessageFns<MutateCustomizerAttributesRequest> = {
  encode(message: MutateCustomizerAttributesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CustomizerAttributeOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomizerAttributesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomizerAttributesRequest();
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

          message.operations.push(CustomizerAttributeOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCustomizerAttributesRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CustomizerAttributeOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateCustomizerAttributesRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CustomizerAttributeOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateCustomizerAttributesRequest>): MutateCustomizerAttributesRequest {
    return MutateCustomizerAttributesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomizerAttributesRequest>): MutateCustomizerAttributesRequest {
    const message = createBaseMutateCustomizerAttributesRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CustomizerAttributeOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseCustomizerAttributeOperation(): CustomizerAttributeOperation {
  return { updateMask: undefined, create: undefined, remove: undefined };
}

export const CustomizerAttributeOperation: MessageFns<CustomizerAttributeOperation> = {
  encode(message: CustomizerAttributeOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      CustomizerAttribute.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(18).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomizerAttributeOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomizerAttributeOperation();
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

          message.create = CustomizerAttribute.decode(reader, reader.uint32());
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

  fromJSON(object: any): CustomizerAttributeOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? CustomizerAttribute.fromJSON(object.create) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: CustomizerAttributeOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = CustomizerAttribute.toJSON(message.create);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<CustomizerAttributeOperation>): CustomizerAttributeOperation {
    return CustomizerAttributeOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomizerAttributeOperation>): CustomizerAttributeOperation {
    const message = createBaseCustomizerAttributeOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? CustomizerAttribute.fromPartial(object.create)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateCustomizerAttributesResponse(): MutateCustomizerAttributesResponse {
  return { results: [], partialFailureError: undefined };
}

export const MutateCustomizerAttributesResponse: MessageFns<MutateCustomizerAttributesResponse> = {
  encode(message: MutateCustomizerAttributesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      MutateCustomizerAttributeResult.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomizerAttributesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomizerAttributesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(MutateCustomizerAttributeResult.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCustomizerAttributesResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCustomizerAttributeResult.fromJSON(e))
        : [],
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
    };
  },

  toJSON(message: MutateCustomizerAttributesResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCustomizerAttributeResult.toJSON(e));
    }
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCustomizerAttributesResponse>): MutateCustomizerAttributesResponse {
    return MutateCustomizerAttributesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomizerAttributesResponse>): MutateCustomizerAttributesResponse {
    const message = createBaseMutateCustomizerAttributesResponse();
    message.results = object.results?.map((e) => MutateCustomizerAttributeResult.fromPartial(e)) || [];
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    return message;
  },
};

function createBaseMutateCustomizerAttributeResult(): MutateCustomizerAttributeResult {
  return { resourceName: "", customizerAttribute: undefined };
}

export const MutateCustomizerAttributeResult: MessageFns<MutateCustomizerAttributeResult> = {
  encode(message: MutateCustomizerAttributeResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.customizerAttribute !== undefined) {
      CustomizerAttribute.encode(message.customizerAttribute, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCustomizerAttributeResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCustomizerAttributeResult();
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

          message.customizerAttribute = CustomizerAttribute.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCustomizerAttributeResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      customizerAttribute: isSet(object.customizerAttribute)
        ? CustomizerAttribute.fromJSON(object.customizerAttribute)
        : undefined,
    };
  },

  toJSON(message: MutateCustomizerAttributeResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.customizerAttribute !== undefined) {
      obj.customizerAttribute = CustomizerAttribute.toJSON(message.customizerAttribute);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCustomizerAttributeResult>): MutateCustomizerAttributeResult {
    return MutateCustomizerAttributeResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCustomizerAttributeResult>): MutateCustomizerAttributeResult {
    const message = createBaseMutateCustomizerAttributeResult();
    message.resourceName = object.resourceName ?? "";
    message.customizerAttribute = (object.customizerAttribute !== undefined && object.customizerAttribute !== null)
      ? CustomizerAttribute.fromPartial(object.customizerAttribute)
      : undefined;
    return message;
  },
};

/** Service to manage customizer attribute */
export type CustomizerAttributeServiceDefinition = typeof CustomizerAttributeServiceDefinition;
export const CustomizerAttributeServiceDefinition = {
  name: "CustomizerAttributeService",
  fullName: "google.ads.googleads.v17.services.CustomizerAttributeService",
  methods: {
    /**
     * Creates, updates or removes customizer attributes. Operation statuses are
     * returned.
     */
    mutateCustomizerAttributes: {
      name: "MutateCustomizerAttributes",
      requestType: MutateCustomizerAttributesRequest,
      requestStream: false,
      responseType: MutateCustomizerAttributesResponse,
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
              63,
              58,
              1,
              42,
              34,
              58,
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
              105,
              122,
              101,
              114,
              65,
              116,
              116,
              114,
              105,
              98,
              117,
              116,
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

export interface CustomizerAttributeServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates or removes customizer attributes. Operation statuses are
   * returned.
   */
  mutateCustomizerAttributes(
    request: MutateCustomizerAttributesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCustomizerAttributesResponse>>;
}

export interface CustomizerAttributeServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates or removes customizer attributes. Operation statuses are
   * returned.
   */
  mutateCustomizerAttributes(
    request: DeepPartial<MutateCustomizerAttributesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCustomizerAttributesResponse>;
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
