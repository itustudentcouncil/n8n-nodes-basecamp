// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/campaign_extension_setting_service.proto

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
import { CampaignExtensionSetting } from "../resources/campaign_extension_setting.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [CampaignExtensionSettingService.MutateCampaignExtensionSettings][google.ads.googleads.v17.services.CampaignExtensionSettingService.MutateCampaignExtensionSettings].
 */
export interface MutateCampaignExtensionSettingsRequest {
  /**
   * Required. The ID of the customer whose campaign extension settings are
   * being modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual campaign
   * extension settings.
   */
  operations: CampaignExtensionSettingOperation[];
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

/** A single operation (create, update, remove) on a campaign extension setting. */
export interface CampaignExtensionSettingOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * Create operation: No resource name is expected for the new campaign
   * extension setting.
   */
  create?:
    | CampaignExtensionSetting
    | undefined;
  /**
   * Update operation: The campaign extension setting is expected to have a
   * valid resource name.
   */
  update?:
    | CampaignExtensionSetting
    | undefined;
  /**
   * Remove operation: A resource name for the removed campaign extension
   * setting is expected, in this format:
   *
   * `customers/{customer_id}/campaignExtensionSettings/{campaign_id}~{extension_type}`
   */
  remove?: string | undefined;
}

/** Response message for a campaign extension setting mutate. */
export interface MutateCampaignExtensionSettingsResponse {
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
  results: MutateCampaignExtensionSettingResult[];
}

/** The result for the campaign extension setting mutate. */
export interface MutateCampaignExtensionSettingResult {
  /** Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated campaign extension setting with only mutable fields after
   * mutate. The field will only be returned when response_content_type is set
   * to "MUTABLE_RESOURCE".
   */
  campaignExtensionSetting: CampaignExtensionSetting | undefined;
}

function createBaseMutateCampaignExtensionSettingsRequest(): MutateCampaignExtensionSettingsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateCampaignExtensionSettingsRequest: MessageFns<MutateCampaignExtensionSettingsRequest> = {
  encode(message: MutateCampaignExtensionSettingsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CampaignExtensionSettingOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignExtensionSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignExtensionSettingsRequest();
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

          message.operations.push(CampaignExtensionSettingOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCampaignExtensionSettingsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CampaignExtensionSettingOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateCampaignExtensionSettingsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CampaignExtensionSettingOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateCampaignExtensionSettingsRequest>): MutateCampaignExtensionSettingsRequest {
    return MutateCampaignExtensionSettingsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignExtensionSettingsRequest>): MutateCampaignExtensionSettingsRequest {
    const message = createBaseMutateCampaignExtensionSettingsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CampaignExtensionSettingOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseCampaignExtensionSettingOperation(): CampaignExtensionSettingOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const CampaignExtensionSettingOperation: MessageFns<CampaignExtensionSettingOperation> = {
  encode(message: CampaignExtensionSettingOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      CampaignExtensionSetting.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      CampaignExtensionSetting.encode(message.update, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignExtensionSettingOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignExtensionSettingOperation();
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

          message.create = CampaignExtensionSetting.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = CampaignExtensionSetting.decode(reader, reader.uint32());
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

  fromJSON(object: any): CampaignExtensionSettingOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? CampaignExtensionSetting.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? CampaignExtensionSetting.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: CampaignExtensionSettingOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = CampaignExtensionSetting.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = CampaignExtensionSetting.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignExtensionSettingOperation>): CampaignExtensionSettingOperation {
    return CampaignExtensionSettingOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignExtensionSettingOperation>): CampaignExtensionSettingOperation {
    const message = createBaseCampaignExtensionSettingOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? CampaignExtensionSetting.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? CampaignExtensionSetting.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateCampaignExtensionSettingsResponse(): MutateCampaignExtensionSettingsResponse {
  return { partialFailureError: undefined, results: [] };
}

export const MutateCampaignExtensionSettingsResponse: MessageFns<MutateCampaignExtensionSettingsResponse> = {
  encode(message: MutateCampaignExtensionSettingsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(26).fork()).join();
    }
    for (const v of message.results) {
      MutateCampaignExtensionSettingResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignExtensionSettingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignExtensionSettingsResponse();
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

          message.results.push(MutateCampaignExtensionSettingResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignExtensionSettingsResponse {
    return {
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCampaignExtensionSettingResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateCampaignExtensionSettingsResponse): unknown {
    const obj: any = {};
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCampaignExtensionSettingResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignExtensionSettingsResponse>): MutateCampaignExtensionSettingsResponse {
    return MutateCampaignExtensionSettingsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignExtensionSettingsResponse>): MutateCampaignExtensionSettingsResponse {
    const message = createBaseMutateCampaignExtensionSettingsResponse();
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    message.results = object.results?.map((e) => MutateCampaignExtensionSettingResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateCampaignExtensionSettingResult(): MutateCampaignExtensionSettingResult {
  return { resourceName: "", campaignExtensionSetting: undefined };
}

export const MutateCampaignExtensionSettingResult: MessageFns<MutateCampaignExtensionSettingResult> = {
  encode(message: MutateCampaignExtensionSettingResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.campaignExtensionSetting !== undefined) {
      CampaignExtensionSetting.encode(message.campaignExtensionSetting, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignExtensionSettingResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignExtensionSettingResult();
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

          message.campaignExtensionSetting = CampaignExtensionSetting.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignExtensionSettingResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      campaignExtensionSetting: isSet(object.campaignExtensionSetting)
        ? CampaignExtensionSetting.fromJSON(object.campaignExtensionSetting)
        : undefined,
    };
  },

  toJSON(message: MutateCampaignExtensionSettingResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.campaignExtensionSetting !== undefined) {
      obj.campaignExtensionSetting = CampaignExtensionSetting.toJSON(message.campaignExtensionSetting);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignExtensionSettingResult>): MutateCampaignExtensionSettingResult {
    return MutateCampaignExtensionSettingResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignExtensionSettingResult>): MutateCampaignExtensionSettingResult {
    const message = createBaseMutateCampaignExtensionSettingResult();
    message.resourceName = object.resourceName ?? "";
    message.campaignExtensionSetting =
      (object.campaignExtensionSetting !== undefined && object.campaignExtensionSetting !== null)
        ? CampaignExtensionSetting.fromPartial(object.campaignExtensionSetting)
        : undefined;
    return message;
  },
};

/** Service to manage campaign extension settings. */
export type CampaignExtensionSettingServiceDefinition = typeof CampaignExtensionSettingServiceDefinition;
export const CampaignExtensionSettingServiceDefinition = {
  name: "CampaignExtensionSettingService",
  fullName: "google.ads.googleads.v17.services.CampaignExtensionSettingService",
  methods: {
    /**
     * Creates, updates, or removes campaign extension settings. Operation
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
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [IdError]()
     *   [InternalError]()
     *   [ListOperationError]()
     *   [MutateError]()
     *   [NewResourceCreationError]()
     *   [NotEmptyError]()
     *   [NullError]()
     *   [OperationAccessDeniedError]()
     *   [OperatorError]()
     *   [QuotaError]()
     *   [RangeError]()
     *   [RequestError]()
     *   [SizeLimitError]()
     *   [StringFormatError]()
     *   [StringLengthError]()
     *   [UrlFieldError]()
     */
    mutateCampaignExtensionSettings: {
      name: "MutateCampaignExtensionSettings",
      requestType: MutateCampaignExtensionSettingsRequest,
      requestStream: false,
      responseType: MutateCampaignExtensionSettingsResponse,
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
              97,
              109,
              112,
              97,
              105,
              103,
              110,
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

export interface CampaignExtensionSettingServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates, or removes campaign extension settings. Operation
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
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [ListOperationError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperationAccessDeniedError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   */
  mutateCampaignExtensionSettings(
    request: MutateCampaignExtensionSettingsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCampaignExtensionSettingsResponse>>;
}

export interface CampaignExtensionSettingServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates, or removes campaign extension settings. Operation
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
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [IdError]()
   *   [InternalError]()
   *   [ListOperationError]()
   *   [MutateError]()
   *   [NewResourceCreationError]()
   *   [NotEmptyError]()
   *   [NullError]()
   *   [OperationAccessDeniedError]()
   *   [OperatorError]()
   *   [QuotaError]()
   *   [RangeError]()
   *   [RequestError]()
   *   [SizeLimitError]()
   *   [StringFormatError]()
   *   [StringLengthError]()
   *   [UrlFieldError]()
   */
  mutateCampaignExtensionSettings(
    request: DeepPartial<MutateCampaignExtensionSettingsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCampaignExtensionSettingsResponse>;
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