// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/connectors/v1/provider.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { LaunchStage, launchStageFromJSON, launchStageToJSON } from "./common.js";

export const protobufPackage = "google.cloud.connectors.v1";

/** Provider indicates the owner who provides the connectors. */
export interface Provider {
  /**
   * Output only. Resource name of the Provider.
   * Format: projects/{project}/locations/{location}/providers/{provider}
   * Only global location is supported for Provider resource.
   */
  name: string;
  /** Output only. Created time. */
  createTime:
    | Date
    | undefined;
  /** Output only. Updated time. */
  updateTime:
    | Date
    | undefined;
  /**
   * Output only. Resource labels to represent user-provided metadata.
   * Refer to cloud documentation on labels for more details.
   * https://cloud.google.com/compute/docs/labeling-resources
   */
  labels: { [key: string]: string };
  /** Output only. Link to documentation page. */
  documentationUri: string;
  /** Output only. Link to external page. */
  externalUri: string;
  /** Output only. Description of the resource. */
  description: string;
  /** Output only. Cloud storage location of icons etc consumed by UI. */
  webAssetsLocation: string;
  /** Output only. Display name. */
  displayName: string;
  /** Output only. Flag to mark the version indicating the launch stage. */
  launchStage: LaunchStage;
}

export interface Provider_LabelsEntry {
  key: string;
  value: string;
}

/** Request message for Connectors.GetProvider. */
export interface GetProviderRequest {
  /**
   * Required. Resource name of the form:
   * `projects/* /locations/* /providers/*`
   * Only global location is supported for Provider resource.
   */
  name: string;
}

/** Request message for Connectors.ListProviders. */
export interface ListProvidersRequest {
  /**
   * Required. Parent resource of the API, of the form:
   * `projects/* /locations/*`
   * Only global location is supported for Provider resource.
   */
  parent: string;
  /** Page size. */
  pageSize: number;
  /** Page token. */
  pageToken: string;
}

/** Response message for Connectors.ListProviders. */
export interface ListProvidersResponse {
  /** A list of providers. */
  providers: Provider[];
  /** Next page token. */
  nextPageToken: string;
  /** Locations that could not be reached. */
  unreachable: string[];
}

function createBaseProvider(): Provider {
  return {
    name: "",
    createTime: undefined,
    updateTime: undefined,
    labels: {},
    documentationUri: "",
    externalUri: "",
    description: "",
    webAssetsLocation: "",
    displayName: "",
    launchStage: 0,
  };
}

export const Provider: MessageFns<Provider> = {
  encode(message: Provider, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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
      Provider_LabelsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    if (message.documentationUri !== "") {
      writer.uint32(50).string(message.documentationUri);
    }
    if (message.externalUri !== "") {
      writer.uint32(58).string(message.externalUri);
    }
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.webAssetsLocation !== "") {
      writer.uint32(74).string(message.webAssetsLocation);
    }
    if (message.displayName !== "") {
      writer.uint32(82).string(message.displayName);
    }
    if (message.launchStage !== 0) {
      writer.uint32(88).int32(message.launchStage);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Provider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
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

          const entry4 = Provider_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.documentationUri = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.externalUri = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.description = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.webAssetsLocation = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.launchStage = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Provider {
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
      documentationUri: isSet(object.documentationUri) ? globalThis.String(object.documentationUri) : "",
      externalUri: isSet(object.externalUri) ? globalThis.String(object.externalUri) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      webAssetsLocation: isSet(object.webAssetsLocation) ? globalThis.String(object.webAssetsLocation) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      launchStage: isSet(object.launchStage) ? launchStageFromJSON(object.launchStage) : 0,
    };
  },

  toJSON(message: Provider): unknown {
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
    if (message.documentationUri !== "") {
      obj.documentationUri = message.documentationUri;
    }
    if (message.externalUri !== "") {
      obj.externalUri = message.externalUri;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.webAssetsLocation !== "") {
      obj.webAssetsLocation = message.webAssetsLocation;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.launchStage !== 0) {
      obj.launchStage = launchStageToJSON(message.launchStage);
    }
    return obj;
  },

  create(base?: DeepPartial<Provider>): Provider {
    return Provider.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Provider>): Provider {
    const message = createBaseProvider();
    message.name = object.name ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.documentationUri = object.documentationUri ?? "";
    message.externalUri = object.externalUri ?? "";
    message.description = object.description ?? "";
    message.webAssetsLocation = object.webAssetsLocation ?? "";
    message.displayName = object.displayName ?? "";
    message.launchStage = object.launchStage ?? 0;
    return message;
  },
};

function createBaseProvider_LabelsEntry(): Provider_LabelsEntry {
  return { key: "", value: "" };
}

export const Provider_LabelsEntry: MessageFns<Provider_LabelsEntry> = {
  encode(message: Provider_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Provider_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider_LabelsEntry();
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

  fromJSON(object: any): Provider_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Provider_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<Provider_LabelsEntry>): Provider_LabelsEntry {
    return Provider_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Provider_LabelsEntry>): Provider_LabelsEntry {
    const message = createBaseProvider_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGetProviderRequest(): GetProviderRequest {
  return { name: "" };
}

export const GetProviderRequest: MessageFns<GetProviderRequest> = {
  encode(message: GetProviderRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetProviderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProviderRequest();
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

  fromJSON(object: any): GetProviderRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetProviderRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetProviderRequest>): GetProviderRequest {
    return GetProviderRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetProviderRequest>): GetProviderRequest {
    const message = createBaseGetProviderRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListProvidersRequest(): ListProvidersRequest {
  return { parent: "", pageSize: 0, pageToken: "" };
}

export const ListProvidersRequest: MessageFns<ListProvidersRequest> = {
  encode(message: ListProvidersRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListProvidersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProvidersRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListProvidersRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListProvidersRequest): unknown {
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
    return obj;
  },

  create(base?: DeepPartial<ListProvidersRequest>): ListProvidersRequest {
    return ListProvidersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListProvidersRequest>): ListProvidersRequest {
    const message = createBaseListProvidersRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListProvidersResponse(): ListProvidersResponse {
  return { providers: [], nextPageToken: "", unreachable: [] };
}

export const ListProvidersResponse: MessageFns<ListProvidersResponse> = {
  encode(message: ListProvidersResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    for (const v of message.unreachable) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListProvidersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providers.push(Provider.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListProvidersResponse {
    return {
      providers: globalThis.Array.isArray(object?.providers)
        ? object.providers.map((e: any) => Provider.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
      unreachable: globalThis.Array.isArray(object?.unreachable)
        ? object.unreachable.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ListProvidersResponse): unknown {
    const obj: any = {};
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => Provider.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    if (message.unreachable?.length) {
      obj.unreachable = message.unreachable;
    }
    return obj;
  },

  create(base?: DeepPartial<ListProvidersResponse>): ListProvidersResponse {
    return ListProvidersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListProvidersResponse>): ListProvidersResponse {
    const message = createBaseListProvidersResponse();
    message.providers = object.providers?.map((e) => Provider.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    message.unreachable = object.unreachable?.map((e) => e) || [];
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