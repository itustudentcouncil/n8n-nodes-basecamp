// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/certificatemanager/v1/trust_config.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FieldMask } from "../../../protobuf/field_mask.js";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.certificatemanager.v1";

/** Request for the `ListTrustConfigs` method. */
export interface ListTrustConfigsRequest {
  /**
   * Required. The project and location from which the TrustConfigs should be
   * listed, specified in the format `projects/* /locations/*`.
   */
  parent: string;
  /** Maximum number of TrustConfigs to return per call. */
  pageSize: number;
  /**
   * The value returned by the last `ListTrustConfigsResponse`. Indicates
   * that this is a continuation of a prior `ListTrustConfigs` call, and that
   * the system should return the next page of data.
   */
  pageToken: string;
  /** Filter expression to restrict the TrustConfigs returned. */
  filter: string;
  /**
   * A list of TrustConfig field names used to specify the order of the
   * returned results. The default sorting order is ascending. To specify
   * descending order for a field, add a suffix `" desc"`.
   */
  orderBy: string;
}

/** Response for the `ListTrustConfigs` method. */
export interface ListTrustConfigsResponse {
  /** A list of TrustConfigs for the parent resource. */
  trustConfigs: TrustConfig[];
  /**
   * If there might be more results than those appearing in this response, then
   * `next_page_token` is included. To get the next set of results, call this
   * method again using the value of `next_page_token` as `page_token`.
   */
  nextPageToken: string;
  /** Locations that could not be reached. */
  unreachable: string[];
}

/** Request for the `GetTrustConfig` method. */
export interface GetTrustConfigRequest {
  /**
   * Required. A name of the TrustConfig to describe. Must be in the format
   * `projects/* /locations/* /trustConfigs/*`.
   */
  name: string;
}

/** Request for the `CreateTrustConfig` method. */
export interface CreateTrustConfigRequest {
  /**
   * Required. The parent resource of the TrustConfig. Must be in the format
   * `projects/* /locations/*`.
   */
  parent: string;
  /**
   * Required. A user-provided name of the TrustConfig. Must match the regexp
   * `[a-z0-9-]{1,63}`.
   */
  trustConfigId: string;
  /** Required. A definition of the TrustConfig to create. */
  trustConfig: TrustConfig | undefined;
}

/** Request for the `UpdateTrustConfig` method. */
export interface UpdateTrustConfigRequest {
  /** Required. A definition of the TrustConfig to update. */
  trustConfig:
    | TrustConfig
    | undefined;
  /**
   * Required. The update mask applies to the resource. For the `FieldMask`
   * definition, see
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask.
   */
  updateMask: string[] | undefined;
}

/** Request for the `DeleteTrustConfig` method. */
export interface DeleteTrustConfigRequest {
  /**
   * Required. A name of the TrustConfig to delete. Must be in the format
   * `projects/* /locations/* /trustConfigs/*`.
   */
  name: string;
  /**
   * The current etag of the TrustConfig.
   * If an etag is provided and does not match the current etag of the resource,
   * deletion will be blocked and an ABORTED error will be returned.
   */
  etag: string;
}

/** Defines a trust config. */
export interface TrustConfig {
  /**
   * A user-defined name of the trust config. TrustConfig names must be
   * unique globally and match pattern
   * `projects/* /locations/* /trustConfigs/*`.
   */
  name: string;
  /** Output only. The creation timestamp of a TrustConfig. */
  createTime:
    | Date
    | undefined;
  /** Output only. The last update timestamp of a TrustConfig. */
  updateTime:
    | Date
    | undefined;
  /** Set of labels associated with a TrustConfig. */
  labels: { [key: string]: string };
  /** One or more paragraphs of text description of a TrustConfig. */
  description: string;
  /**
   * This checksum is computed by the server based on the value of other
   * fields, and may be sent on update and delete requests to ensure the
   * client has an up-to-date value before proceeding.
   */
  etag: string;
  /**
   * Set of trust stores to perform validation against.
   *
   * This field is supported when TrustConfig is configured with Load Balancers,
   * currently not supported for SPIFFE certificate validation.
   *
   * Only one TrustStore specified is currently allowed.
   */
  trustStores: TrustConfig_TrustStore[];
}

/** Defines a trust anchor. */
export interface TrustConfig_TrustAnchor {
  /**
   * PEM root certificate of the PKI used for validation.
   *
   * Each certificate provided in PEM format may occupy up to 5kB.
   */
  pemCertificate?: string | undefined;
}

/** Defines an intermediate CA. */
export interface TrustConfig_IntermediateCA {
  /**
   * PEM intermediate certificate used for building up paths
   * for validation.
   *
   * Each certificate provided in PEM format may occupy up to 5kB.
   */
  pemCertificate?: string | undefined;
}

/** Defines a trust store. */
export interface TrustConfig_TrustStore {
  /**
   * List of Trust Anchors to be used while performing validation
   * against a given TrustStore.
   */
  trustAnchors: TrustConfig_TrustAnchor[];
  /**
   * Set of intermediate CA certificates used for the path building
   * phase of chain validation.
   *
   * The field is currently not supported if TrustConfig is used for the
   * workload certificate feature.
   */
  intermediateCas: TrustConfig_IntermediateCA[];
}

export interface TrustConfig_LabelsEntry {
  key: string;
  value: string;
}

function createBaseListTrustConfigsRequest(): ListTrustConfigsRequest {
  return { parent: "", pageSize: 0, pageToken: "", filter: "", orderBy: "" };
}

export const ListTrustConfigsRequest: MessageFns<ListTrustConfigsRequest> = {
  encode(message: ListTrustConfigsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListTrustConfigsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTrustConfigsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTrustConfigsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListTrustConfigsRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create(base?: DeepPartial<ListTrustConfigsRequest>): ListTrustConfigsRequest {
    return ListTrustConfigsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListTrustConfigsRequest>): ListTrustConfigsRequest {
    const message = createBaseListTrustConfigsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

function createBaseListTrustConfigsResponse(): ListTrustConfigsResponse {
  return { trustConfigs: [], nextPageToken: "", unreachable: [] };
}

export const ListTrustConfigsResponse: MessageFns<ListTrustConfigsResponse> = {
  encode(message: ListTrustConfigsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.trustConfigs) {
      TrustConfig.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    for (const v of message.unreachable) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListTrustConfigsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTrustConfigsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trustConfigs.push(TrustConfig.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.unreachable.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTrustConfigsResponse {
    return {
      trustConfigs: globalThis.Array.isArray(object?.trustConfigs)
        ? object.trustConfigs.map((e: any) => TrustConfig.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
      unreachable: globalThis.Array.isArray(object?.unreachable)
        ? object.unreachable.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ListTrustConfigsResponse): unknown {
    const obj: any = {};
    if (message.trustConfigs?.length) {
      obj.trustConfigs = message.trustConfigs.map((e) => TrustConfig.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    if (message.unreachable?.length) {
      obj.unreachable = message.unreachable;
    }
    return obj;
  },

  create(base?: DeepPartial<ListTrustConfigsResponse>): ListTrustConfigsResponse {
    return ListTrustConfigsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListTrustConfigsResponse>): ListTrustConfigsResponse {
    const message = createBaseListTrustConfigsResponse();
    message.trustConfigs = object.trustConfigs?.map((e) => TrustConfig.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    message.unreachable = object.unreachable?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetTrustConfigRequest(): GetTrustConfigRequest {
  return { name: "" };
}

export const GetTrustConfigRequest: MessageFns<GetTrustConfigRequest> = {
  encode(message: GetTrustConfigRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetTrustConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTrustConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTrustConfigRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetTrustConfigRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetTrustConfigRequest>): GetTrustConfigRequest {
    return GetTrustConfigRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetTrustConfigRequest>): GetTrustConfigRequest {
    const message = createBaseGetTrustConfigRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCreateTrustConfigRequest(): CreateTrustConfigRequest {
  return { parent: "", trustConfigId: "", trustConfig: undefined };
}

export const CreateTrustConfigRequest: MessageFns<CreateTrustConfigRequest> = {
  encode(message: CreateTrustConfigRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.trustConfigId !== "") {
      writer.uint32(18).string(message.trustConfigId);
    }
    if (message.trustConfig !== undefined) {
      TrustConfig.encode(message.trustConfig, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateTrustConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTrustConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.trustConfigId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.trustConfig = TrustConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTrustConfigRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      trustConfigId: isSet(object.trustConfigId) ? globalThis.String(object.trustConfigId) : "",
      trustConfig: isSet(object.trustConfig) ? TrustConfig.fromJSON(object.trustConfig) : undefined,
    };
  },

  toJSON(message: CreateTrustConfigRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.trustConfigId !== "") {
      obj.trustConfigId = message.trustConfigId;
    }
    if (message.trustConfig !== undefined) {
      obj.trustConfig = TrustConfig.toJSON(message.trustConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateTrustConfigRequest>): CreateTrustConfigRequest {
    return CreateTrustConfigRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateTrustConfigRequest>): CreateTrustConfigRequest {
    const message = createBaseCreateTrustConfigRequest();
    message.parent = object.parent ?? "";
    message.trustConfigId = object.trustConfigId ?? "";
    message.trustConfig = (object.trustConfig !== undefined && object.trustConfig !== null)
      ? TrustConfig.fromPartial(object.trustConfig)
      : undefined;
    return message;
  },
};

function createBaseUpdateTrustConfigRequest(): UpdateTrustConfigRequest {
  return { trustConfig: undefined, updateMask: undefined };
}

export const UpdateTrustConfigRequest: MessageFns<UpdateTrustConfigRequest> = {
  encode(message: UpdateTrustConfigRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.trustConfig !== undefined) {
      TrustConfig.encode(message.trustConfig, writer.uint32(10).fork()).join();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateTrustConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTrustConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trustConfig = TrustConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTrustConfigRequest {
    return {
      trustConfig: isSet(object.trustConfig) ? TrustConfig.fromJSON(object.trustConfig) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateTrustConfigRequest): unknown {
    const obj: any = {};
    if (message.trustConfig !== undefined) {
      obj.trustConfig = TrustConfig.toJSON(message.trustConfig);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateTrustConfigRequest>): UpdateTrustConfigRequest {
    return UpdateTrustConfigRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateTrustConfigRequest>): UpdateTrustConfigRequest {
    const message = createBaseUpdateTrustConfigRequest();
    message.trustConfig = (object.trustConfig !== undefined && object.trustConfig !== null)
      ? TrustConfig.fromPartial(object.trustConfig)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseDeleteTrustConfigRequest(): DeleteTrustConfigRequest {
  return { name: "", etag: "" };
}

export const DeleteTrustConfigRequest: MessageFns<DeleteTrustConfigRequest> = {
  encode(message: DeleteTrustConfigRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.etag !== "") {
      writer.uint32(18).string(message.etag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteTrustConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTrustConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.etag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTrustConfigRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
    };
  },

  toJSON(message: DeleteTrustConfigRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteTrustConfigRequest>): DeleteTrustConfigRequest {
    return DeleteTrustConfigRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteTrustConfigRequest>): DeleteTrustConfigRequest {
    const message = createBaseDeleteTrustConfigRequest();
    message.name = object.name ?? "";
    message.etag = object.etag ?? "";
    return message;
  },
};

function createBaseTrustConfig(): TrustConfig {
  return {
    name: "",
    createTime: undefined,
    updateTime: undefined,
    labels: {},
    description: "",
    etag: "",
    trustStores: [],
  };
}

export const TrustConfig: MessageFns<TrustConfig> = {
  encode(message: TrustConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(18).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(26).fork()).join();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      TrustConfig_LabelsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.etag !== "") {
      writer.uint32(50).string(message.etag);
    }
    for (const v of message.trustStores) {
      TrustConfig_TrustStore.encode(v!, writer.uint32(66).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrustConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrustConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = TrustConfig_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.etag = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.trustStores.push(TrustConfig_TrustStore.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TrustConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
      trustStores: globalThis.Array.isArray(object?.trustStores)
        ? object.trustStores.map((e: any) => TrustConfig_TrustStore.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TrustConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    if (message.trustStores?.length) {
      obj.trustStores = message.trustStores.map((e) => TrustConfig_TrustStore.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TrustConfig>): TrustConfig {
    return TrustConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TrustConfig>): TrustConfig {
    const message = createBaseTrustConfig();
    message.name = object.name ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.description = object.description ?? "";
    message.etag = object.etag ?? "";
    message.trustStores = object.trustStores?.map((e) => TrustConfig_TrustStore.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTrustConfig_TrustAnchor(): TrustConfig_TrustAnchor {
  return { pemCertificate: undefined };
}

export const TrustConfig_TrustAnchor: MessageFns<TrustConfig_TrustAnchor> = {
  encode(message: TrustConfig_TrustAnchor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pemCertificate !== undefined) {
      writer.uint32(10).string(message.pemCertificate);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrustConfig_TrustAnchor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrustConfig_TrustAnchor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pemCertificate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TrustConfig_TrustAnchor {
    return { pemCertificate: isSet(object.pemCertificate) ? globalThis.String(object.pemCertificate) : undefined };
  },

  toJSON(message: TrustConfig_TrustAnchor): unknown {
    const obj: any = {};
    if (message.pemCertificate !== undefined) {
      obj.pemCertificate = message.pemCertificate;
    }
    return obj;
  },

  create(base?: DeepPartial<TrustConfig_TrustAnchor>): TrustConfig_TrustAnchor {
    return TrustConfig_TrustAnchor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TrustConfig_TrustAnchor>): TrustConfig_TrustAnchor {
    const message = createBaseTrustConfig_TrustAnchor();
    message.pemCertificate = object.pemCertificate ?? undefined;
    return message;
  },
};

function createBaseTrustConfig_IntermediateCA(): TrustConfig_IntermediateCA {
  return { pemCertificate: undefined };
}

export const TrustConfig_IntermediateCA: MessageFns<TrustConfig_IntermediateCA> = {
  encode(message: TrustConfig_IntermediateCA, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pemCertificate !== undefined) {
      writer.uint32(10).string(message.pemCertificate);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrustConfig_IntermediateCA {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrustConfig_IntermediateCA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pemCertificate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TrustConfig_IntermediateCA {
    return { pemCertificate: isSet(object.pemCertificate) ? globalThis.String(object.pemCertificate) : undefined };
  },

  toJSON(message: TrustConfig_IntermediateCA): unknown {
    const obj: any = {};
    if (message.pemCertificate !== undefined) {
      obj.pemCertificate = message.pemCertificate;
    }
    return obj;
  },

  create(base?: DeepPartial<TrustConfig_IntermediateCA>): TrustConfig_IntermediateCA {
    return TrustConfig_IntermediateCA.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TrustConfig_IntermediateCA>): TrustConfig_IntermediateCA {
    const message = createBaseTrustConfig_IntermediateCA();
    message.pemCertificate = object.pemCertificate ?? undefined;
    return message;
  },
};

function createBaseTrustConfig_TrustStore(): TrustConfig_TrustStore {
  return { trustAnchors: [], intermediateCas: [] };
}

export const TrustConfig_TrustStore: MessageFns<TrustConfig_TrustStore> = {
  encode(message: TrustConfig_TrustStore, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.trustAnchors) {
      TrustConfig_TrustAnchor.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.intermediateCas) {
      TrustConfig_IntermediateCA.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrustConfig_TrustStore {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrustConfig_TrustStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trustAnchors.push(TrustConfig_TrustAnchor.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.intermediateCas.push(TrustConfig_IntermediateCA.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TrustConfig_TrustStore {
    return {
      trustAnchors: globalThis.Array.isArray(object?.trustAnchors)
        ? object.trustAnchors.map((e: any) => TrustConfig_TrustAnchor.fromJSON(e))
        : [],
      intermediateCas: globalThis.Array.isArray(object?.intermediateCas)
        ? object.intermediateCas.map((e: any) => TrustConfig_IntermediateCA.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TrustConfig_TrustStore): unknown {
    const obj: any = {};
    if (message.trustAnchors?.length) {
      obj.trustAnchors = message.trustAnchors.map((e) => TrustConfig_TrustAnchor.toJSON(e));
    }
    if (message.intermediateCas?.length) {
      obj.intermediateCas = message.intermediateCas.map((e) => TrustConfig_IntermediateCA.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TrustConfig_TrustStore>): TrustConfig_TrustStore {
    return TrustConfig_TrustStore.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TrustConfig_TrustStore>): TrustConfig_TrustStore {
    const message = createBaseTrustConfig_TrustStore();
    message.trustAnchors = object.trustAnchors?.map((e) => TrustConfig_TrustAnchor.fromPartial(e)) || [];
    message.intermediateCas = object.intermediateCas?.map((e) => TrustConfig_IntermediateCA.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTrustConfig_LabelsEntry(): TrustConfig_LabelsEntry {
  return { key: "", value: "" };
}

export const TrustConfig_LabelsEntry: MessageFns<TrustConfig_LabelsEntry> = {
  encode(message: TrustConfig_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrustConfig_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrustConfig_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TrustConfig_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: TrustConfig_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<TrustConfig_LabelsEntry>): TrustConfig_LabelsEntry {
    return TrustConfig_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TrustConfig_LabelsEntry>): TrustConfig_LabelsEntry {
    const message = createBaseTrustConfig_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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