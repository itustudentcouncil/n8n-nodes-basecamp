// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/campaign_group_service.proto

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
import { CampaignGroup } from "../resources/campaign_group.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [CampaignGroupService.MutateCampaignGroups][google.ads.googleads.v17.services.CampaignGroupService.MutateCampaignGroups].
 */
export interface MutateCampaignGroupsRequest {
  /** Required. The ID of the customer whose campaign groups are being modified. */
  customerId: string;
  /** Required. The list of operations to perform on individual campaign groups. */
  operations: CampaignGroupOperation[];
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

/** A single operation (create, update, remove) on a campaign group. */
export interface CampaignGroupOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * Create operation: No resource name is expected for the new campaign
   * group.
   */
  create?:
    | CampaignGroup
    | undefined;
  /**
   * Update operation: The campaign group is expected to have a valid
   * resource name.
   */
  update?:
    | CampaignGroup
    | undefined;
  /**
   * Remove operation: A resource name for the removed campaign group is
   * expected, in this format:
   *
   * `customers/{customer_id}/campaignGroups/{campaign_group_id}`
   */
  remove?: string | undefined;
}

/** Response message for campaign group mutate. */
export interface MutateCampaignGroupsResponse {
  /** All results for the mutate. */
  results: MutateCampaignGroupResult[];
  /**
   * Errors that pertain to operation failures in the partial failure mode.
   * Returned only when partial_failure = true and all errors occur inside the
   * operations. If any errors occur outside the operations (for example, auth
   * errors), we return an RPC level error.
   */
  partialFailureError: Status | undefined;
}

/** The result for the campaign group mutate. */
export interface MutateCampaignGroupResult {
  /** Required. Returned for successful operations. */
  resourceName: string;
  /**
   * The mutated campaign group with only mutable fields after mutate. The field
   * will only be returned when response_content_type is set to
   * "MUTABLE_RESOURCE".
   */
  campaignGroup: CampaignGroup | undefined;
}

function createBaseMutateCampaignGroupsRequest(): MutateCampaignGroupsRequest {
  return { customerId: "", operations: [], partialFailure: false, validateOnly: false, responseContentType: 0 };
}

export const MutateCampaignGroupsRequest: MessageFns<MutateCampaignGroupsRequest> = {
  encode(message: MutateCampaignGroupsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CampaignGroupOperation.encode(v!, writer.uint32(18).fork()).join();
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

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignGroupsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignGroupsRequest();
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

          message.operations.push(CampaignGroupOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCampaignGroupsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CampaignGroupOperation.fromJSON(e))
        : [],
      partialFailure: isSet(object.partialFailure) ? globalThis.Boolean(object.partialFailure) : false,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      responseContentType: isSet(object.responseContentType)
        ? responseContentTypeEnum_ResponseContentTypeFromJSON(object.responseContentType)
        : 0,
    };
  },

  toJSON(message: MutateCampaignGroupsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CampaignGroupOperation.toJSON(e));
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

  create(base?: DeepPartial<MutateCampaignGroupsRequest>): MutateCampaignGroupsRequest {
    return MutateCampaignGroupsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignGroupsRequest>): MutateCampaignGroupsRequest {
    const message = createBaseMutateCampaignGroupsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CampaignGroupOperation.fromPartial(e)) || [];
    message.partialFailure = object.partialFailure ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.responseContentType = object.responseContentType ?? 0;
    return message;
  },
};

function createBaseCampaignGroupOperation(): CampaignGroupOperation {
  return { updateMask: undefined, create: undefined, update: undefined, remove: undefined };
}

export const CampaignGroupOperation: MessageFns<CampaignGroupOperation> = {
  encode(message: CampaignGroupOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(34).fork()).join();
    }
    if (message.create !== undefined) {
      CampaignGroup.encode(message.create, writer.uint32(10).fork()).join();
    }
    if (message.update !== undefined) {
      CampaignGroup.encode(message.update, writer.uint32(18).fork()).join();
    }
    if (message.remove !== undefined) {
      writer.uint32(26).string(message.remove);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignGroupOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignGroupOperation();
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

          message.create = CampaignGroup.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = CampaignGroup.decode(reader, reader.uint32());
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

  fromJSON(object: any): CampaignGroupOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      create: isSet(object.create) ? CampaignGroup.fromJSON(object.create) : undefined,
      update: isSet(object.update) ? CampaignGroup.fromJSON(object.update) : undefined,
      remove: isSet(object.remove) ? globalThis.String(object.remove) : undefined,
    };
  },

  toJSON(message: CampaignGroupOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.create !== undefined) {
      obj.create = CampaignGroup.toJSON(message.create);
    }
    if (message.update !== undefined) {
      obj.update = CampaignGroup.toJSON(message.update);
    }
    if (message.remove !== undefined) {
      obj.remove = message.remove;
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignGroupOperation>): CampaignGroupOperation {
    return CampaignGroupOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignGroupOperation>): CampaignGroupOperation {
    const message = createBaseCampaignGroupOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? CampaignGroup.fromPartial(object.create)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? CampaignGroup.fromPartial(object.update)
      : undefined;
    message.remove = object.remove ?? undefined;
    return message;
  },
};

function createBaseMutateCampaignGroupsResponse(): MutateCampaignGroupsResponse {
  return { results: [], partialFailureError: undefined };
}

export const MutateCampaignGroupsResponse: MessageFns<MutateCampaignGroupsResponse> = {
  encode(message: MutateCampaignGroupsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      MutateCampaignGroupResult.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.partialFailureError !== undefined) {
      Status.encode(message.partialFailureError, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignGroupsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(MutateCampaignGroupResult.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MutateCampaignGroupsResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCampaignGroupResult.fromJSON(e))
        : [],
      partialFailureError: isSet(object.partialFailureError) ? Status.fromJSON(object.partialFailureError) : undefined,
    };
  },

  toJSON(message: MutateCampaignGroupsResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCampaignGroupResult.toJSON(e));
    }
    if (message.partialFailureError !== undefined) {
      obj.partialFailureError = Status.toJSON(message.partialFailureError);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignGroupsResponse>): MutateCampaignGroupsResponse {
    return MutateCampaignGroupsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignGroupsResponse>): MutateCampaignGroupsResponse {
    const message = createBaseMutateCampaignGroupsResponse();
    message.results = object.results?.map((e) => MutateCampaignGroupResult.fromPartial(e)) || [];
    message.partialFailureError = (object.partialFailureError !== undefined && object.partialFailureError !== null)
      ? Status.fromPartial(object.partialFailureError)
      : undefined;
    return message;
  },
};

function createBaseMutateCampaignGroupResult(): MutateCampaignGroupResult {
  return { resourceName: "", campaignGroup: undefined };
}

export const MutateCampaignGroupResult: MessageFns<MutateCampaignGroupResult> = {
  encode(message: MutateCampaignGroupResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.campaignGroup !== undefined) {
      CampaignGroup.encode(message.campaignGroup, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignGroupResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignGroupResult();
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

          message.campaignGroup = CampaignGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignGroupResult {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      campaignGroup: isSet(object.campaignGroup) ? CampaignGroup.fromJSON(object.campaignGroup) : undefined,
    };
  },

  toJSON(message: MutateCampaignGroupResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.campaignGroup !== undefined) {
      obj.campaignGroup = CampaignGroup.toJSON(message.campaignGroup);
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignGroupResult>): MutateCampaignGroupResult {
    return MutateCampaignGroupResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignGroupResult>): MutateCampaignGroupResult {
    const message = createBaseMutateCampaignGroupResult();
    message.resourceName = object.resourceName ?? "";
    message.campaignGroup = (object.campaignGroup !== undefined && object.campaignGroup !== null)
      ? CampaignGroup.fromPartial(object.campaignGroup)
      : undefined;
    return message;
  },
};

/** Service to manage campaign groups. */
export type CampaignGroupServiceDefinition = typeof CampaignGroupServiceDefinition;
export const CampaignGroupServiceDefinition = {
  name: "CampaignGroupService",
  fullName: "google.ads.googleads.v17.services.CampaignGroupService",
  methods: {
    /**
     * Creates, updates, or removes campaign groups. Operation statuses are
     * returned.
     */
    mutateCampaignGroups: {
      name: "MutateCampaignGroups",
      requestType: MutateCampaignGroupsRequest,
      requestStream: false,
      responseType: MutateCampaignGroupsResponse,
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
              57,
              58,
              1,
              42,
              34,
              52,
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
              71,
              114,
              111,
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

export interface CampaignGroupServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates, or removes campaign groups. Operation statuses are
   * returned.
   */
  mutateCampaignGroups(
    request: MutateCampaignGroupsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCampaignGroupsResponse>>;
}

export interface CampaignGroupServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates, or removes campaign groups. Operation statuses are
   * returned.
   */
  mutateCampaignGroups(
    request: DeepPartial<MutateCampaignGroupsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCampaignGroupsResponse>;
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