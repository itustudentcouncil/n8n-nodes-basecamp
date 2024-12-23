// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/campaign_conversion_goal_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { FieldMask } from "../../../../protobuf/field_mask.js";
import { CampaignConversionGoal } from "../resources/campaign_conversion_goal.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [CampaignConversionGoalService.MutateCampaignConversionGoals][google.ads.googleads.v16.services.CampaignConversionGoalService.MutateCampaignConversionGoals].
 */
export interface MutateCampaignConversionGoalsRequest {
  /**
   * Required. The ID of the customer whose campaign conversion goals are being
   * modified.
   */
  customerId: string;
  /**
   * Required. The list of operations to perform on individual campaign
   * conversion goal.
   */
  operations: CampaignConversionGoalOperation[];
  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   */
  validateOnly: boolean;
}

/** A single operation (update) on a campaign conversion goal. */
export interface CampaignConversionGoalOperation {
  /** FieldMask that determines which resource fields are modified in an update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * Update operation: The customer conversion goal is expected to have a
   * valid resource name.
   */
  update?: CampaignConversionGoal | undefined;
}

/** Response message for a campaign conversion goal mutate. */
export interface MutateCampaignConversionGoalsResponse {
  /** All results for the mutate. */
  results: MutateCampaignConversionGoalResult[];
}

/** The result for the campaign conversion goal mutate. */
export interface MutateCampaignConversionGoalResult {
  /** Returned for successful operations. */
  resourceName: string;
}

function createBaseMutateCampaignConversionGoalsRequest(): MutateCampaignConversionGoalsRequest {
  return { customerId: "", operations: [], validateOnly: false };
}

export const MutateCampaignConversionGoalsRequest: MessageFns<MutateCampaignConversionGoalsRequest> = {
  encode(message: MutateCampaignConversionGoalsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    for (const v of message.operations) {
      CampaignConversionGoalOperation.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.validateOnly !== false) {
      writer.uint32(24).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignConversionGoalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignConversionGoalsRequest();
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

          message.operations.push(CampaignConversionGoalOperation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MutateCampaignConversionGoalsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CampaignConversionGoalOperation.fromJSON(e))
        : [],
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: MutateCampaignConversionGoalsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => CampaignConversionGoalOperation.toJSON(e));
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignConversionGoalsRequest>): MutateCampaignConversionGoalsRequest {
    return MutateCampaignConversionGoalsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignConversionGoalsRequest>): MutateCampaignConversionGoalsRequest {
    const message = createBaseMutateCampaignConversionGoalsRequest();
    message.customerId = object.customerId ?? "";
    message.operations = object.operations?.map((e) => CampaignConversionGoalOperation.fromPartial(e)) || [];
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseCampaignConversionGoalOperation(): CampaignConversionGoalOperation {
  return { updateMask: undefined, update: undefined };
}

export const CampaignConversionGoalOperation: MessageFns<CampaignConversionGoalOperation> = {
  encode(message: CampaignConversionGoalOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).join();
    }
    if (message.update !== undefined) {
      CampaignConversionGoal.encode(message.update, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CampaignConversionGoalOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignConversionGoalOperation();
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

          message.update = CampaignConversionGoal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CampaignConversionGoalOperation {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      update: isSet(object.update) ? CampaignConversionGoal.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: CampaignConversionGoalOperation): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.update !== undefined) {
      obj.update = CampaignConversionGoal.toJSON(message.update);
    }
    return obj;
  },

  create(base?: DeepPartial<CampaignConversionGoalOperation>): CampaignConversionGoalOperation {
    return CampaignConversionGoalOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CampaignConversionGoalOperation>): CampaignConversionGoalOperation {
    const message = createBaseCampaignConversionGoalOperation();
    message.updateMask = object.updateMask ?? undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? CampaignConversionGoal.fromPartial(object.update)
      : undefined;
    return message;
  },
};

function createBaseMutateCampaignConversionGoalsResponse(): MutateCampaignConversionGoalsResponse {
  return { results: [] };
}

export const MutateCampaignConversionGoalsResponse: MessageFns<MutateCampaignConversionGoalsResponse> = {
  encode(message: MutateCampaignConversionGoalsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      MutateCampaignConversionGoalResult.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignConversionGoalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignConversionGoalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(MutateCampaignConversionGoalResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MutateCampaignConversionGoalsResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => MutateCampaignConversionGoalResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MutateCampaignConversionGoalsResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => MutateCampaignConversionGoalResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignConversionGoalsResponse>): MutateCampaignConversionGoalsResponse {
    return MutateCampaignConversionGoalsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignConversionGoalsResponse>): MutateCampaignConversionGoalsResponse {
    const message = createBaseMutateCampaignConversionGoalsResponse();
    message.results = object.results?.map((e) => MutateCampaignConversionGoalResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMutateCampaignConversionGoalResult(): MutateCampaignConversionGoalResult {
  return { resourceName: "" };
}

export const MutateCampaignConversionGoalResult: MessageFns<MutateCampaignConversionGoalResult> = {
  encode(message: MutateCampaignConversionGoalResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MutateCampaignConversionGoalResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutateCampaignConversionGoalResult();
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

  fromJSON(object: any): MutateCampaignConversionGoalResult {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: MutateCampaignConversionGoalResult): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<MutateCampaignConversionGoalResult>): MutateCampaignConversionGoalResult {
    return MutateCampaignConversionGoalResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MutateCampaignConversionGoalResult>): MutateCampaignConversionGoalResult {
    const message = createBaseMutateCampaignConversionGoalResult();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

/** Service to manage campaign conversion goal. */
export type CampaignConversionGoalServiceDefinition = typeof CampaignConversionGoalServiceDefinition;
export const CampaignConversionGoalServiceDefinition = {
  name: "CampaignConversionGoalService",
  fullName: "google.ads.googleads.v16.services.CampaignConversionGoalService",
  methods: {
    /**
     * Creates, updates or removes campaign conversion goals. Operation statuses
     * are returned.
     */
    mutateCampaignConversionGoals: {
      name: "MutateCampaignConversionGoals",
      requestType: MutateCampaignConversionGoalsRequest,
      requestStream: false,
      responseType: MutateCampaignConversionGoalsResponse,
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
              66,
              58,
              1,
              42,
              34,
              61,
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

export interface CampaignConversionGoalServiceImplementation<CallContextExt = {}> {
  /**
   * Creates, updates or removes campaign conversion goals. Operation statuses
   * are returned.
   */
  mutateCampaignConversionGoals(
    request: MutateCampaignConversionGoalsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MutateCampaignConversionGoalsResponse>>;
}

export interface CampaignConversionGoalServiceClient<CallOptionsExt = {}> {
  /**
   * Creates, updates or removes campaign conversion goals. Operation statuses
   * are returned.
   */
  mutateCampaignConversionGoals(
    request: DeepPartial<MutateCampaignConversionGoalsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MutateCampaignConversionGoalsResponse>;
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
