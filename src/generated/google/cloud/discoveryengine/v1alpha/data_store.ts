// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/discoveryengine/v1alpha/data_store.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import {
  IdpConfig,
  IndustryVertical,
  industryVerticalFromJSON,
  industryVerticalToJSON,
  SolutionType,
  solutionTypeFromJSON,
  solutionTypeToJSON,
} from "./common.js";
import { DocumentProcessingConfig } from "./document_processing_config.js";
import { Schema } from "./schema.js";

export const protobufPackage = "google.cloud.discoveryengine.v1alpha";

/** DataStore captures global settings and configs at the DataStore level. */
export interface DataStore {
  /**
   * Immutable. The full resource name of the data store.
   * Format:
   * `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`.
   *
   * This field must be a UTF-8 encoded string with a length limit of 1024
   * characters.
   */
  name: string;
  /**
   * Required. The data store display name.
   *
   * This field must be a UTF-8 encoded string with a length limit of 128
   * characters. Otherwise, an INVALID_ARGUMENT error is returned.
   */
  displayName: string;
  /** Immutable. The industry vertical that the data store registers. */
  industryVertical: IndustryVertical;
  /**
   * The solutions that the data store enrolls. Available solutions for each
   * [industry_vertical][google.cloud.discoveryengine.v1alpha.DataStore.industry_vertical]:
   *
   * * `MEDIA`: `SOLUTION_TYPE_RECOMMENDATION` and `SOLUTION_TYPE_SEARCH`.
   * * `SITE_SEARCH`: `SOLUTION_TYPE_SEARCH` is automatically enrolled. Other
   *   solutions cannot be enrolled.
   */
  solutionTypes: SolutionType[];
  /**
   * Output only. The id of the default
   * [Schema][google.cloud.discoveryengine.v1alpha.Schema] asscociated to this
   * data store.
   */
  defaultSchemaId: string;
  /**
   * Immutable. The content config of the data store. If this field is unset,
   * the server behavior defaults to
   * [ContentConfig.NO_CONTENT][google.cloud.discoveryengine.v1alpha.DataStore.ContentConfig.NO_CONTENT].
   */
  contentConfig: DataStore_ContentConfig;
  /**
   * Output only. Timestamp the
   * [DataStore][google.cloud.discoveryengine.v1alpha.DataStore] was created at.
   */
  createTime:
    | Date
    | undefined;
  /** Language info for DataStore. */
  languageInfo:
    | LanguageInfo
    | undefined;
  /** Output only. Data store level identity provider config. */
  idpConfig:
    | IdpConfig
    | undefined;
  /**
   * Immutable. Whether data in the
   * [DataStore][google.cloud.discoveryengine.v1alpha.DataStore] has ACL
   * information. If set to `true`, the source data must have ACL. ACL will be
   * ingested when data is ingested by
   * [DocumentService.ImportDocuments][google.cloud.discoveryengine.v1alpha.DocumentService.ImportDocuments]
   * methods.
   *
   * When ACL is enabled for the
   * [DataStore][google.cloud.discoveryengine.v1alpha.DataStore],
   * [Document][google.cloud.discoveryengine.v1alpha.Document] can't be accessed
   * by calling
   * [DocumentService.GetDocument][google.cloud.discoveryengine.v1alpha.DocumentService.GetDocument]
   * or
   * [DocumentService.ListDocuments][google.cloud.discoveryengine.v1alpha.DocumentService.ListDocuments].
   *
   * Currently ACL is only supported in `GENERIC` industry vertical with
   * non-`PUBLIC_WEBSITE` content config.
   */
  aclEnabled: boolean;
  /**
   * Config to store data store type configuration for workspace data. This
   * must be set when
   * [DataStore.content_config][google.cloud.discoveryengine.v1alpha.DataStore.content_config]
   * is set as
   * [DataStore.ContentConfig.GOOGLE_WORKSPACE][google.cloud.discoveryengine.v1alpha.DataStore.ContentConfig.GOOGLE_WORKSPACE].
   */
  workspaceConfig:
    | WorkspaceConfig
    | undefined;
  /** Configuration for Document understanding and enrichment. */
  documentProcessingConfig:
    | DocumentProcessingConfig
    | undefined;
  /**
   * The start schema to use for this
   * [DataStore][google.cloud.discoveryengine.v1alpha.DataStore] when
   * provisioning it. If unset, a default vertical specialized schema will be
   * used.
   *
   * This field is only used by [CreateDataStore][] API, and will be ignored if
   * used in other APIs. This field will be omitted from all API responses
   * including [CreateDataStore][] API. To retrieve a schema of a
   * [DataStore][google.cloud.discoveryengine.v1alpha.DataStore], use
   * [SchemaService.GetSchema][google.cloud.discoveryengine.v1alpha.SchemaService.GetSchema]
   * API instead.
   *
   * The provided schema will be validated against certain rules on schema.
   * Learn more from [this
   * doc](https://cloud.google.com/generative-ai-app-builder/docs/provide-schema).
   */
  startingSchema: Schema | undefined;
}

/** Content config of the data store. */
export enum DataStore_ContentConfig {
  /** CONTENT_CONFIG_UNSPECIFIED - Default value. */
  CONTENT_CONFIG_UNSPECIFIED = 0,
  /**
   * NO_CONTENT - Only contains documents without any
   * [Document.content][google.cloud.discoveryengine.v1alpha.Document.content].
   */
  NO_CONTENT = 1,
  /**
   * CONTENT_REQUIRED - Only contains documents with
   * [Document.content][google.cloud.discoveryengine.v1alpha.Document.content].
   */
  CONTENT_REQUIRED = 2,
  /** PUBLIC_WEBSITE - The data store is used for public website search. */
  PUBLIC_WEBSITE = 3,
  /**
   * GOOGLE_WORKSPACE - The data store is used for workspace search. Details of workspace
   * data store are specified in the
   * [WorkspaceConfig][google.cloud.discoveryengine.v1alpha.WorkspaceConfig].
   */
  GOOGLE_WORKSPACE = 4,
  UNRECOGNIZED = -1,
}

export function dataStore_ContentConfigFromJSON(object: any): DataStore_ContentConfig {
  switch (object) {
    case 0:
    case "CONTENT_CONFIG_UNSPECIFIED":
      return DataStore_ContentConfig.CONTENT_CONFIG_UNSPECIFIED;
    case 1:
    case "NO_CONTENT":
      return DataStore_ContentConfig.NO_CONTENT;
    case 2:
    case "CONTENT_REQUIRED":
      return DataStore_ContentConfig.CONTENT_REQUIRED;
    case 3:
    case "PUBLIC_WEBSITE":
      return DataStore_ContentConfig.PUBLIC_WEBSITE;
    case 4:
    case "GOOGLE_WORKSPACE":
      return DataStore_ContentConfig.GOOGLE_WORKSPACE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataStore_ContentConfig.UNRECOGNIZED;
  }
}

export function dataStore_ContentConfigToJSON(object: DataStore_ContentConfig): string {
  switch (object) {
    case DataStore_ContentConfig.CONTENT_CONFIG_UNSPECIFIED:
      return "CONTENT_CONFIG_UNSPECIFIED";
    case DataStore_ContentConfig.NO_CONTENT:
      return "NO_CONTENT";
    case DataStore_ContentConfig.CONTENT_REQUIRED:
      return "CONTENT_REQUIRED";
    case DataStore_ContentConfig.PUBLIC_WEBSITE:
      return "PUBLIC_WEBSITE";
    case DataStore_ContentConfig.GOOGLE_WORKSPACE:
      return "GOOGLE_WORKSPACE";
    case DataStore_ContentConfig.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Language info for DataStore. */
export interface LanguageInfo {
  /** The language code for the DataStore. */
  languageCode: string;
  /**
   * Output only. This is the normalized form of language_code.
   * E.g.: language_code of `en-GB`, `en_GB`, `en-UK` or `en-gb`
   * will have normalized_language_code of `en-GB`.
   */
  normalizedLanguageCode: string;
  /**
   * Output only. Language part of normalized_language_code.
   * E.g.: `en-US` -> `en`, `zh-Hans-HK` -> `zh`, `en` -> `en`.
   */
  language: string;
  /**
   * Output only. Region part of normalized_language_code, if present.
   * E.g.: `en-US` -> `US`, `zh-Hans-HK` -> `HK`, `en` -> ``.
   */
  region: string;
}

/** Config to store data store type configuration for workspace data */
export interface WorkspaceConfig {
  /** The Google Workspace data source. */
  type: WorkspaceConfig_Type;
  /** Obfuscated Dasher customer ID. */
  dasherCustomerId: string;
}

/** Specifies the type of Workspace App supported by this DataStore */
export enum WorkspaceConfig_Type {
  /** TYPE_UNSPECIFIED - Defaults to an unspecified Workspace type. */
  TYPE_UNSPECIFIED = 0,
  /** GOOGLE_DRIVE - Workspace Data Store contains Drive data */
  GOOGLE_DRIVE = 1,
  /** GOOGLE_MAIL - Workspace Data Store contains Mail data */
  GOOGLE_MAIL = 2,
  /** GOOGLE_SITES - Workspace Data Store contains Sites data */
  GOOGLE_SITES = 3,
  /** GOOGLE_CALENDAR - Workspace Data Store contains Calendar data */
  GOOGLE_CALENDAR = 4,
  /** GOOGLE_CHAT - Workspace Data Store contains Chat data */
  GOOGLE_CHAT = 5,
  /** GOOGLE_GROUPS - Workspace Data Store contains Groups data */
  GOOGLE_GROUPS = 6,
  /** GOOGLE_KEEP - Workspace Data Store contains Keep data */
  GOOGLE_KEEP = 7,
  UNRECOGNIZED = -1,
}

export function workspaceConfig_TypeFromJSON(object: any): WorkspaceConfig_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return WorkspaceConfig_Type.TYPE_UNSPECIFIED;
    case 1:
    case "GOOGLE_DRIVE":
      return WorkspaceConfig_Type.GOOGLE_DRIVE;
    case 2:
    case "GOOGLE_MAIL":
      return WorkspaceConfig_Type.GOOGLE_MAIL;
    case 3:
    case "GOOGLE_SITES":
      return WorkspaceConfig_Type.GOOGLE_SITES;
    case 4:
    case "GOOGLE_CALENDAR":
      return WorkspaceConfig_Type.GOOGLE_CALENDAR;
    case 5:
    case "GOOGLE_CHAT":
      return WorkspaceConfig_Type.GOOGLE_CHAT;
    case 6:
    case "GOOGLE_GROUPS":
      return WorkspaceConfig_Type.GOOGLE_GROUPS;
    case 7:
    case "GOOGLE_KEEP":
      return WorkspaceConfig_Type.GOOGLE_KEEP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WorkspaceConfig_Type.UNRECOGNIZED;
  }
}

export function workspaceConfig_TypeToJSON(object: WorkspaceConfig_Type): string {
  switch (object) {
    case WorkspaceConfig_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case WorkspaceConfig_Type.GOOGLE_DRIVE:
      return "GOOGLE_DRIVE";
    case WorkspaceConfig_Type.GOOGLE_MAIL:
      return "GOOGLE_MAIL";
    case WorkspaceConfig_Type.GOOGLE_SITES:
      return "GOOGLE_SITES";
    case WorkspaceConfig_Type.GOOGLE_CALENDAR:
      return "GOOGLE_CALENDAR";
    case WorkspaceConfig_Type.GOOGLE_CHAT:
      return "GOOGLE_CHAT";
    case WorkspaceConfig_Type.GOOGLE_GROUPS:
      return "GOOGLE_GROUPS";
    case WorkspaceConfig_Type.GOOGLE_KEEP:
      return "GOOGLE_KEEP";
    case WorkspaceConfig_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseDataStore(): DataStore {
  return {
    name: "",
    displayName: "",
    industryVertical: 0,
    solutionTypes: [],
    defaultSchemaId: "",
    contentConfig: 0,
    createTime: undefined,
    languageInfo: undefined,
    idpConfig: undefined,
    aclEnabled: false,
    workspaceConfig: undefined,
    documentProcessingConfig: undefined,
    startingSchema: undefined,
  };
}

export const DataStore: MessageFns<DataStore> = {
  encode(message: DataStore, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.industryVertical !== 0) {
      writer.uint32(24).int32(message.industryVertical);
    }
    writer.uint32(42).fork();
    for (const v of message.solutionTypes) {
      writer.int32(v);
    }
    writer.join();
    if (message.defaultSchemaId !== "") {
      writer.uint32(58).string(message.defaultSchemaId);
    }
    if (message.contentConfig !== 0) {
      writer.uint32(48).int32(message.contentConfig);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(34).fork()).join();
    }
    if (message.languageInfo !== undefined) {
      LanguageInfo.encode(message.languageInfo, writer.uint32(114).fork()).join();
    }
    if (message.idpConfig !== undefined) {
      IdpConfig.encode(message.idpConfig, writer.uint32(170).fork()).join();
    }
    if (message.aclEnabled !== false) {
      writer.uint32(192).bool(message.aclEnabled);
    }
    if (message.workspaceConfig !== undefined) {
      WorkspaceConfig.encode(message.workspaceConfig, writer.uint32(202).fork()).join();
    }
    if (message.documentProcessingConfig !== undefined) {
      DocumentProcessingConfig.encode(message.documentProcessingConfig, writer.uint32(218).fork()).join();
    }
    if (message.startingSchema !== undefined) {
      Schema.encode(message.startingSchema, writer.uint32(226).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DataStore {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataStore();
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

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.industryVertical = reader.int32() as any;
          continue;
        case 5:
          if (tag === 40) {
            message.solutionTypes.push(reader.int32() as any);

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.solutionTypes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.defaultSchemaId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.contentConfig = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.languageInfo = LanguageInfo.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.idpConfig = IdpConfig.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.aclEnabled = reader.bool();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.workspaceConfig = WorkspaceConfig.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.documentProcessingConfig = DocumentProcessingConfig.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.startingSchema = Schema.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataStore {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      industryVertical: isSet(object.industryVertical) ? industryVerticalFromJSON(object.industryVertical) : 0,
      solutionTypes: globalThis.Array.isArray(object?.solutionTypes)
        ? object.solutionTypes.map((e: any) => solutionTypeFromJSON(e))
        : [],
      defaultSchemaId: isSet(object.defaultSchemaId) ? globalThis.String(object.defaultSchemaId) : "",
      contentConfig: isSet(object.contentConfig) ? dataStore_ContentConfigFromJSON(object.contentConfig) : 0,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      languageInfo: isSet(object.languageInfo) ? LanguageInfo.fromJSON(object.languageInfo) : undefined,
      idpConfig: isSet(object.idpConfig) ? IdpConfig.fromJSON(object.idpConfig) : undefined,
      aclEnabled: isSet(object.aclEnabled) ? globalThis.Boolean(object.aclEnabled) : false,
      workspaceConfig: isSet(object.workspaceConfig) ? WorkspaceConfig.fromJSON(object.workspaceConfig) : undefined,
      documentProcessingConfig: isSet(object.documentProcessingConfig)
        ? DocumentProcessingConfig.fromJSON(object.documentProcessingConfig)
        : undefined,
      startingSchema: isSet(object.startingSchema) ? Schema.fromJSON(object.startingSchema) : undefined,
    };
  },

  toJSON(message: DataStore): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.industryVertical !== 0) {
      obj.industryVertical = industryVerticalToJSON(message.industryVertical);
    }
    if (message.solutionTypes?.length) {
      obj.solutionTypes = message.solutionTypes.map((e) => solutionTypeToJSON(e));
    }
    if (message.defaultSchemaId !== "") {
      obj.defaultSchemaId = message.defaultSchemaId;
    }
    if (message.contentConfig !== 0) {
      obj.contentConfig = dataStore_ContentConfigToJSON(message.contentConfig);
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.languageInfo !== undefined) {
      obj.languageInfo = LanguageInfo.toJSON(message.languageInfo);
    }
    if (message.idpConfig !== undefined) {
      obj.idpConfig = IdpConfig.toJSON(message.idpConfig);
    }
    if (message.aclEnabled !== false) {
      obj.aclEnabled = message.aclEnabled;
    }
    if (message.workspaceConfig !== undefined) {
      obj.workspaceConfig = WorkspaceConfig.toJSON(message.workspaceConfig);
    }
    if (message.documentProcessingConfig !== undefined) {
      obj.documentProcessingConfig = DocumentProcessingConfig.toJSON(message.documentProcessingConfig);
    }
    if (message.startingSchema !== undefined) {
      obj.startingSchema = Schema.toJSON(message.startingSchema);
    }
    return obj;
  },

  create(base?: DeepPartial<DataStore>): DataStore {
    return DataStore.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataStore>): DataStore {
    const message = createBaseDataStore();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.industryVertical = object.industryVertical ?? 0;
    message.solutionTypes = object.solutionTypes?.map((e) => e) || [];
    message.defaultSchemaId = object.defaultSchemaId ?? "";
    message.contentConfig = object.contentConfig ?? 0;
    message.createTime = object.createTime ?? undefined;
    message.languageInfo = (object.languageInfo !== undefined && object.languageInfo !== null)
      ? LanguageInfo.fromPartial(object.languageInfo)
      : undefined;
    message.idpConfig = (object.idpConfig !== undefined && object.idpConfig !== null)
      ? IdpConfig.fromPartial(object.idpConfig)
      : undefined;
    message.aclEnabled = object.aclEnabled ?? false;
    message.workspaceConfig = (object.workspaceConfig !== undefined && object.workspaceConfig !== null)
      ? WorkspaceConfig.fromPartial(object.workspaceConfig)
      : undefined;
    message.documentProcessingConfig =
      (object.documentProcessingConfig !== undefined && object.documentProcessingConfig !== null)
        ? DocumentProcessingConfig.fromPartial(object.documentProcessingConfig)
        : undefined;
    message.startingSchema = (object.startingSchema !== undefined && object.startingSchema !== null)
      ? Schema.fromPartial(object.startingSchema)
      : undefined;
    return message;
  },
};

function createBaseLanguageInfo(): LanguageInfo {
  return { languageCode: "", normalizedLanguageCode: "", language: "", region: "" };
}

export const LanguageInfo: MessageFns<LanguageInfo> = {
  encode(message: LanguageInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.languageCode !== "") {
      writer.uint32(10).string(message.languageCode);
    }
    if (message.normalizedLanguageCode !== "") {
      writer.uint32(18).string(message.normalizedLanguageCode);
    }
    if (message.language !== "") {
      writer.uint32(26).string(message.language);
    }
    if (message.region !== "") {
      writer.uint32(34).string(message.region);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LanguageInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLanguageInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.languageCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.normalizedLanguageCode = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.language = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.region = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LanguageInfo {
    return {
      languageCode: isSet(object.languageCode) ? globalThis.String(object.languageCode) : "",
      normalizedLanguageCode: isSet(object.normalizedLanguageCode)
        ? globalThis.String(object.normalizedLanguageCode)
        : "",
      language: isSet(object.language) ? globalThis.String(object.language) : "",
      region: isSet(object.region) ? globalThis.String(object.region) : "",
    };
  },

  toJSON(message: LanguageInfo): unknown {
    const obj: any = {};
    if (message.languageCode !== "") {
      obj.languageCode = message.languageCode;
    }
    if (message.normalizedLanguageCode !== "") {
      obj.normalizedLanguageCode = message.normalizedLanguageCode;
    }
    if (message.language !== "") {
      obj.language = message.language;
    }
    if (message.region !== "") {
      obj.region = message.region;
    }
    return obj;
  },

  create(base?: DeepPartial<LanguageInfo>): LanguageInfo {
    return LanguageInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LanguageInfo>): LanguageInfo {
    const message = createBaseLanguageInfo();
    message.languageCode = object.languageCode ?? "";
    message.normalizedLanguageCode = object.normalizedLanguageCode ?? "";
    message.language = object.language ?? "";
    message.region = object.region ?? "";
    return message;
  },
};

function createBaseWorkspaceConfig(): WorkspaceConfig {
  return { type: 0, dasherCustomerId: "" };
}

export const WorkspaceConfig: MessageFns<WorkspaceConfig> = {
  encode(message: WorkspaceConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.dasherCustomerId !== "") {
      writer.uint32(18).string(message.dasherCustomerId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WorkspaceConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkspaceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dasherCustomerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WorkspaceConfig {
    return {
      type: isSet(object.type) ? workspaceConfig_TypeFromJSON(object.type) : 0,
      dasherCustomerId: isSet(object.dasherCustomerId) ? globalThis.String(object.dasherCustomerId) : "",
    };
  },

  toJSON(message: WorkspaceConfig): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = workspaceConfig_TypeToJSON(message.type);
    }
    if (message.dasherCustomerId !== "") {
      obj.dasherCustomerId = message.dasherCustomerId;
    }
    return obj;
  },

  create(base?: DeepPartial<WorkspaceConfig>): WorkspaceConfig {
    return WorkspaceConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WorkspaceConfig>): WorkspaceConfig {
    const message = createBaseWorkspaceConfig();
    message.type = object.type ?? 0;
    message.dasherCustomerId = object.dasherCustomerId ?? "";
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
