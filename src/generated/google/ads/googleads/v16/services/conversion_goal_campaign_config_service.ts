// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/conversion_goal_campaign_config_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { FieldMask } from "../../../../protobuf/field_mask.js";
import {
  ResponseContentTypeEnum_ResponseContentType,
  responseContentTypeEnum_ResponseContentTypeFromJSON,
  responseContentTypeEnum_ResponseContentTypeToJSON,
} from "../enums/response_content_type.js";
import { ConversionGoalCampaignConfig } from "../resources/conversion_goal_campaign_config.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [ConversionGoalCampaignConfigService.MutateConversionGoalCampaignConfigs][google.ads.googleads.v16.services.ConversionGoalCampaignConfigService.MutateConversionGoalCampaignConfigs].
 */
export interface MutateConversionGoalCampaignConfigsRequest {
  /**
   * Required. The ID of the customer whose custom conversion goals are being
   * modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual conversion goal
   * campaign config.
   */
  operations: ConversionGoalCampaignConfigOperation[];
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

/** A single operation (update) on a conversion goal campaign config. */
export interface ConversionGoalCampaignConfigOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * Update operation: The conversion goal campaign config is expected to have
   * a valid resource name.
   */
  update?: ConversionGoalCampaignConfig | undefined;
}

/** Response message for a conversion goal campaign config mutate. */
export interface MutateConversionGoalCampaignConfigsResponse {
  /** All results for the mutate. */
  results: MutateConversionGoalCampaignConfigResult[];
}

/** The result for the conversion goal campaign config mutate. */
export interface MutateConversionGoalCampaignConfigResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated ConversionGoalCampaignConfig with only mutable fields after
   * mutate. The field will only be returned when response_content_type is set
   * to "MUTABLE_RESOURCE".
   */
  conversionGoalCampaignConfig: ConversionGoalCampaignConfig | undefined;
}

function createBaseMutateConversionGoalCampaignConfigsRequest(): MutateConversionGoalCampaignConfigsRequest {
  return { customerId: "", operations: [], validateOnly: false, responseContentType: 0 };
}

export const MutateConversionGoalCampaignConfigsRequest: MessageFns<MutateConversionGoalCampaignConfigsRequest> = {
  encode(message: MutateConversionGoalCampaignConfigsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      ConversionGoalCampaignConfigOperation.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.validateOnly !== false) {
      writer.uint32(24).bool(message.validateOnly);
    }
    if (message.responseContentType !== 0) {
      writer.uint32(32).int32(message.responseContentType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateConversionGoalCampaignConfigsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateConversionGoalCampaignConfigsRequest();
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

          message.operations.push(ConversionGoalCampaignConfigOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateConversionGoalCampaignConfigsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => ConversionGoalCampaignConfigOperation.fromJSON(e))
        : [],
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateConversionGoalCampaignConfigsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => ConversionGoalCampaignConfigOperation.toJSON(e));
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    if (message.responseContentType !== 0) {
      obj.responseContentType = responseContentTypeEnum_ResponseContentTypeToJSON(message.responseContentType);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateConversionGoalCampaignConfigsRequest>): MutateConversionGoalCampaignConfigsRequest {
    return MutateConversionGoalCampaignConfigsRequest.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MutateConversionGoalCampaignConfigsRequest>,
  ): MutateConversionGoalCampaignConfigsRequest {
    const message = createBaseMutateConversionGoalCampaignConfigsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => ConversionGoalCampaignConfigOperation.fromPartial(e)) || [];
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseConversionGoalCampaignConfigOperation(): ConversionGoalCampaignConfigOperation {
  return { updateMask: undefined, update: undefined };
}

export const ConversionGoalCampaignConfigOperation: MessageFns<ConversionGoalCampaignConfigOperation> = {
  encode(message: ConversionGoalCampaignConfigOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).join();
    }
    if (message.update !== undefined) {
      ConversionGoalCampaignConfig.encode(message.update, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversionGoalCampaignConfigOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionGoalCampaignConfigOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.update = ConversionGoalCampaignConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversionGoalCampaignConfigOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      update: isSet(object.update) ? ConversionGoalCampaignConfig.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: ConversionGoalCampaignConfigOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.update !== undefined) {
      obj.update = ConversionGoalCampaignConfig.toJSON(message.update);
    }
    return obj;
  },

  create(base?: DeepPartial<ConversionGoalCampaignConfigOperation>): ConversionGoalCampaignConfigOperation {
    return ConversionGoalCampaignConfigOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConversionGoalCampaignConfigOperation>): ConversionGoalCampaignConfigOperation {
    const message = createBaseConversionGoalCampaignConfigOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? ConversionGoalCampaignConfig.fromPartial(object.update)
      : undefined;
    return message;
  },
};

function createBaseMutateConversionGoalCampaignConfigsResponse(): MutateConversionGoalCampaignConfigsResponse {
  return { results: [] };
}

export const MutateConversionGoalCampaignConfigsResponse: MessageFns<MutateConversionGoalCampaignConfigsResponse> = {
  encode(
    message: MutateConversionGoalCampaignConfigsResponse,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    for (const v of message.results) {
      MutateConversionGoalCampaignConfigResult.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateConversionGoalCampaignConfigsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateConversionGoalCampaignConfigsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(MutateConversionGoalCampaignConfigResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateConversionGoalCampaignConfigsResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateConversionGoalCampaignConfigResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateConversionGoalCampaignConfigsResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateConversionGoalCampaignConfigResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateConversionGoalCampaignConfigsResponse>): MutateConversionGoalCampaignConfigsResponse {
    return MutateConversionGoalCampaignConfigsResponse.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<MutateConversionGoalCampaignConfigsResponse>,
  ): MutateConversionGoalCampaignConfigsResponse {
    const message = createBaseMutateConversionGoalCampaignConfigsResponse();
    message.results = object.results?.map((e) => MutateConversionGoalCampaignConfigResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateConversionGoalCampaignConfigResult(): MutateConversionGoalCampaignConfigResult {
  return { resourceName: "", conversionGoalCampaignConfig: undefined };
}

export const MutateConversionGoalCampaignConfigResult: MessageFns<MutateConversionGoalCampaignConfigResult> = {
  encode(message: MutateConversionGoalCampaignConfigResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.conversionGoalCampaignConfig !== undefined) {
      ConversionGoalCampaignConfig.encode(message.conversionGoalCampaignConfig, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateConversionGoalCampaignConfigResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateConversionGoalCampaignConfigResult();
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

          message.conversionGoalCampaignConfig = ConversionGoalCampaignConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateConversionGoalCampaignConfigResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      conversionGoalCampaignConfig: isSet(object.conversionGoalCampaignConfig)
        ? ConversionGoalCampaignConfig.fromJSON(object.conversionGoalCampaignConfig)
        : undefined,
    };
  },

  toJSON(message: MutateConversionGoalCampaignConfigResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.conversionGoalCampaignConfig !== undefined) {
      obj.conversionGoalCampaignConfig = ConversionGoalCampaignConfig.toJSON(message.conversionGoalCampaignConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateConversionGoalCampaignConfigResult>): MutateConversionGoalCampaignConfigResult {
    return MutateConversionGoalCampaignConfigResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateConversionGoalCampaignConfigResult>): MutateConversionGoalCampaignConfigResult {
    const message = createBaseMutateConversionGoalCampaignConfigResult();
    message.resourceName = object.resourceName ?? "";
    message.conversionGoalCampaignConfig =
      (object.conversionGoalCampaignConfig !== undefined && object.conversionGoalCampaignConfig !== null)
        ? ConversionGoalCampaignConfig.fromPartial(object.conversionGoalCampaignConfig)
        : undefined;
    return message;
  },
};

/** Service to manage conversion goal campaign config. */
export type ConversionGoalCampaignConfigServiceDefinition = typeof ConversionGoalCampaignConfigServiceDefinition;
export const ConversionGoalCampaignConfigServiceDefinition = {
  name: "ConversionGoalCampaignConfigService",
  fullName: "google.ads.googleads.v16.services.ConversionGoalCampaignConfigService",
  methods: {
    /**
     * Creates, updates or removes conversion goal campaign config. Operation
     * statuses are returned.
     */
    mutateConversionGoalCampaignConfigs: {
      name: "MutateConversionGoalCampaignConfigs",
      requestType: MutateConversionGoalCampaignConfigsRequest,
      requestStream: false,
      responseType: MutateConversionGoalCampaignConfigsResponse,
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
              72,
              58,
              1,
              42,
              34,
              67,
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
              71,
              111,
              97,
              108,
              67,
              97,
              109,
              112,
              97,
              105,
              103,
              110,
              67,
              111,
              110,
              102,
              105,
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

export interface ConversionGoalCampaignConfigServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates or removes conversion goal campaign config. Operation
   * statuses are returned.
   */
  mutateConversionGoalCampaignConfigs(
    request: MutateConversionGoalCampaignConfigsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateConversionGoalCampaignConfigsResponse>>;
}

export interface ConversionGoalCampaignConfigServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates or removes conversion goal campaign config. Operation
   * statuses are returned.
   */
  mutateConversionGoalCampaignConfigs(
    request: DeepPartial<MutateConversionGoalCampaignConfigsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateConversionGoalCampaignConfigsResponse>;
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
