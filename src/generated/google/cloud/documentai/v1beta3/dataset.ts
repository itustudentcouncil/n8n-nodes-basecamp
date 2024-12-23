// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/documentai/v1beta3/dataset.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { RevisionRef } from "./document.js";
import { GcsPrefix } from "./document_io.js";
import { DocumentSchema } from "./document_schema.js";

export const protobufPackage = "google.cloud.documentai.v1beta3";

/**
 * A singleton resource under a
 * [Processor][google.cloud.documentai.v1beta3.Processor] which configures a
 * collection of documents.
 */
export interface Dataset {
  /**
   * Optional. User-managed Cloud Storage dataset configuration. Use this
   * configuration if the dataset documents are stored under a user-managed
   * Cloud Storage location.
   */
  gcsManagedConfig?:
    | Dataset_GCSManagedConfig
    | undefined;
  /**
   * Optional. Deprecated. Warehouse-based dataset configuration is not
   * supported.
   *
   * @deprecated
   */
  documentWarehouseConfig?:
    | Dataset_DocumentWarehouseConfig
    | undefined;
  /**
   * Optional. Unmanaged dataset configuration. Use this configuration if the
   * dataset documents are managed by the document service internally (not
   * user-managed).
   */
  unmanagedDatasetConfig?:
    | Dataset_UnmanagedDatasetConfig
    | undefined;
  /**
   * Optional. A lightweight indexing source with low latency and high
   * reliability, but lacking advanced features like CMEK and content-based
   * search.
   */
  spannerIndexingConfig?:
    | Dataset_SpannerIndexingConfig
    | undefined;
  /**
   * Dataset resource name.
   * Format:
   * `projects/{project}/locations/{location}/processors/{processor}/dataset`
   */
  name: string;
  /** Required. State of the dataset. Ignored when updating dataset. */
  state: Dataset_State;
  /** Output only. Reserved for future use. */
  satisfiesPzs: boolean;
  /** Output only. Reserved for future use. */
  satisfiesPzi: boolean;
}

/** Different states of a dataset. */
export enum Dataset_State {
  /** STATE_UNSPECIFIED - Default unspecified enum, should not be used. */
  STATE_UNSPECIFIED = 0,
  /** UNINITIALIZED - Dataset has not been initialized. */
  UNINITIALIZED = 1,
  /** INITIALIZING - Dataset is being initialized. */
  INITIALIZING = 2,
  /** INITIALIZED - Dataset has been initialized. */
  INITIALIZED = 3,
  UNRECOGNIZED = -1,
}

export function dataset_StateFromJSON(object: any): Dataset_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Dataset_State.STATE_UNSPECIFIED;
    case 1:
    case "UNINITIALIZED":
      return Dataset_State.UNINITIALIZED;
    case 2:
    case "INITIALIZING":
      return Dataset_State.INITIALIZING;
    case 3:
    case "INITIALIZED":
      return Dataset_State.INITIALIZED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Dataset_State.UNRECOGNIZED;
  }
}

export function dataset_StateToJSON(object: Dataset_State): string {
  switch (object) {
    case Dataset_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Dataset_State.UNINITIALIZED:
      return "UNINITIALIZED";
    case Dataset_State.INITIALIZING:
      return "INITIALIZING";
    case Dataset_State.INITIALIZED:
      return "INITIALIZED";
    case Dataset_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Configuration specific to the Cloud Storage-based implementation. */
export interface Dataset_GCSManagedConfig {
  /**
   * Required. The Cloud Storage URI (a directory) where the documents
   * belonging to the dataset must be stored.
   */
  gcsPrefix: GcsPrefix | undefined;
}

/** Configuration specific to the Document AI Warehouse-based implementation. */
export interface Dataset_DocumentWarehouseConfig {
  /**
   * Output only. The collection in Document AI Warehouse associated with the
   * dataset.
   */
  collection: string;
  /**
   * Output only. The schema in Document AI Warehouse associated with the
   * dataset.
   */
  schema: string;
}

/** Configuration specific to an unmanaged dataset. */
export interface Dataset_UnmanagedDatasetConfig {
}

/** Configuration specific to spanner-based indexing. */
export interface Dataset_SpannerIndexingConfig {
}

/** Document Identifier. */
export interface DocumentId {
  /** A document id within user-managed Cloud Storage. */
  gcsManagedDocId?:
    | DocumentId_GCSManagedDocumentId
    | undefined;
  /** A document id within unmanaged dataset. */
  unmanagedDocId?:
    | DocumentId_UnmanagedDocumentId
    | undefined;
  /** Points to a specific revision of the document if set. */
  revisionRef: RevisionRef | undefined;
}

/**
 * Identifies a document uniquely within the scope of a dataset in the
 * user-managed Cloud Storage option.
 */
export interface DocumentId_GCSManagedDocumentId {
  /** Required. The Cloud Storage URI where the actual document is stored. */
  gcsUri: string;
  /**
   * Id of the document (indexed) managed by Content Warehouse.
   *
   * @deprecated
   */
  cwDocId: string;
}

/**
 * Identifies a document uniquely within the scope of a dataset in unmanaged
 * option.
 */
export interface DocumentId_UnmanagedDocumentId {
  /** Required. The id of the document. */
  docId: string;
}

/** Dataset Schema. */
export interface DatasetSchema {
  /**
   * Dataset schema resource name.
   * Format:
   * `projects/{project}/locations/{location}/processors/{processor}/dataset/datasetSchema`
   */
  name: string;
  /** Optional. Schema of the dataset. */
  documentSchema: DocumentSchema | undefined;
}

/** Dataset documents that the batch operation will be applied to. */
export interface BatchDatasetDocuments {
  /** Document identifiers. */
  individualDocumentIds?:
    | BatchDatasetDocuments_IndividualDocumentIds
    | undefined;
  /**
   * A filter matching the documents.
   * Follows the same format and restriction as
   * [google.cloud.documentai.master.ListDocumentsRequest.filter].
   */
  filter?: string | undefined;
}

/** List of individual DocumentIds. */
export interface BatchDatasetDocuments_IndividualDocumentIds {
  /**
   * Required. List of Document IDs indicating where the actual documents are
   * stored.
   */
  documentIds: DocumentId[];
}

function createBaseDataset(): Dataset {
  return {
    gcsManagedConfig: undefined,
    documentWarehouseConfig: undefined,
    unmanagedDatasetConfig: undefined,
    spannerIndexingConfig: undefined,
    name: "",
    state: 0,
    satisfiesPzs: false,
    satisfiesPzi: false,
  };
}

export const Dataset: MessageFns<Dataset> = {
  encode(message: Dataset, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gcsManagedConfig !== undefined) {
      Dataset_GCSManagedConfig.encode(message.gcsManagedConfig, writer.uint32(26).fork()).join();
    }
    if (message.documentWarehouseConfig !== undefined) {
      Dataset_DocumentWarehouseConfig.encode(message.documentWarehouseConfig, writer.uint32(42).fork()).join();
    }
    if (message.unmanagedDatasetConfig !== undefined) {
      Dataset_UnmanagedDatasetConfig.encode(message.unmanagedDatasetConfig, writer.uint32(50).fork()).join();
    }
    if (message.spannerIndexingConfig !== undefined) {
      Dataset_SpannerIndexingConfig.encode(message.spannerIndexingConfig, writer.uint32(34).fork()).join();
    }
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.satisfiesPzs !== false) {
      writer.uint32(64).bool(message.satisfiesPzs);
    }
    if (message.satisfiesPzi !== false) {
      writer.uint32(72).bool(message.satisfiesPzi);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Dataset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gcsManagedConfig = Dataset_GCSManagedConfig.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.documentWarehouseConfig = Dataset_DocumentWarehouseConfig.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.unmanagedDatasetConfig = Dataset_UnmanagedDatasetConfig.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.spannerIndexingConfig = Dataset_SpannerIndexingConfig.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.satisfiesPzs = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.satisfiesPzi = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dataset {
    return {
      gcsManagedConfig: isSet(object.gcsManagedConfig)
        ? Dataset_GCSManagedConfig.fromJSON(object.gcsManagedConfig)
        : undefined,
      documentWarehouseConfig: isSet(object.documentWarehouseConfig)
        ? Dataset_DocumentWarehouseConfig.fromJSON(object.documentWarehouseConfig)
        : undefined,
      unmanagedDatasetConfig: isSet(object.unmanagedDatasetConfig)
        ? Dataset_UnmanagedDatasetConfig.fromJSON(object.unmanagedDatasetConfig)
        : undefined,
      spannerIndexingConfig: isSet(object.spannerIndexingConfig)
        ? Dataset_SpannerIndexingConfig.fromJSON(object.spannerIndexingConfig)
        : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      state: isSet(object.state) ? dataset_StateFromJSON(object.state) : 0,
      satisfiesPzs: isSet(object.satisfiesPzs) ? globalThis.Boolean(object.satisfiesPzs) : false,
      satisfiesPzi: isSet(object.satisfiesPzi) ? globalThis.Boolean(object.satisfiesPzi) : false,
    };
  },

  toJSON(message: Dataset): unknown {
    const obj: any = {};
    if (message.gcsManagedConfig !== undefined) {
      obj.gcsManagedConfig = Dataset_GCSManagedConfig.toJSON(message.gcsManagedConfig);
    }
    if (message.documentWarehouseConfig !== undefined) {
      obj.documentWarehouseConfig = Dataset_DocumentWarehouseConfig.toJSON(message.documentWarehouseConfig);
    }
    if (message.unmanagedDatasetConfig !== undefined) {
      obj.unmanagedDatasetConfig = Dataset_UnmanagedDatasetConfig.toJSON(message.unmanagedDatasetConfig);
    }
    if (message.spannerIndexingConfig !== undefined) {
      obj.spannerIndexingConfig = Dataset_SpannerIndexingConfig.toJSON(message.spannerIndexingConfig);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.state !== 0) {
      obj.state = dataset_StateToJSON(message.state);
    }
    if (message.satisfiesPzs !== false) {
      obj.satisfiesPzs = message.satisfiesPzs;
    }
    if (message.satisfiesPzi !== false) {
      obj.satisfiesPzi = message.satisfiesPzi;
    }
    return obj;
  },

  create(base?: DeepPartial<Dataset>): Dataset {
    return Dataset.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Dataset>): Dataset {
    const message = createBaseDataset();
    message.gcsManagedConfig = (object.gcsManagedConfig !== undefined && object.gcsManagedConfig !== null)
      ? Dataset_GCSManagedConfig.fromPartial(object.gcsManagedConfig)
      : undefined;
    message.documentWarehouseConfig =
      (object.documentWarehouseConfig !== undefined && object.documentWarehouseConfig !== null)
        ? Dataset_DocumentWarehouseConfig.fromPartial(object.documentWarehouseConfig)
        : undefined;
    message.unmanagedDatasetConfig =
      (object.unmanagedDatasetConfig !== undefined && object.unmanagedDatasetConfig !== null)
        ? Dataset_UnmanagedDatasetConfig.fromPartial(object.unmanagedDatasetConfig)
        : undefined;
    message.spannerIndexingConfig =
      (object.spannerIndexingConfig !== undefined && object.spannerIndexingConfig !== null)
        ? Dataset_SpannerIndexingConfig.fromPartial(object.spannerIndexingConfig)
        : undefined;
    message.name = object.name ?? "";
    message.state = object.state ?? 0;
    message.satisfiesPzs = object.satisfiesPzs ?? false;
    message.satisfiesPzi = object.satisfiesPzi ?? false;
    return message;
  },
};

function createBaseDataset_GCSManagedConfig(): Dataset_GCSManagedConfig {
  return { gcsPrefix: undefined };
}

export const Dataset_GCSManagedConfig: MessageFns<Dataset_GCSManagedConfig> = {
  encode(message: Dataset_GCSManagedConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gcsPrefix !== undefined) {
      GcsPrefix.encode(message.gcsPrefix, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Dataset_GCSManagedConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataset_GCSManagedConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gcsPrefix = GcsPrefix.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dataset_GCSManagedConfig {
    return { gcsPrefix: isSet(object.gcsPrefix) ? GcsPrefix.fromJSON(object.gcsPrefix) : undefined };
  },

  toJSON(message: Dataset_GCSManagedConfig): unknown {
    const obj: any = {};
    if (message.gcsPrefix !== undefined) {
      obj.gcsPrefix = GcsPrefix.toJSON(message.gcsPrefix);
    }
    return obj;
  },

  create(base?: DeepPartial<Dataset_GCSManagedConfig>): Dataset_GCSManagedConfig {
    return Dataset_GCSManagedConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Dataset_GCSManagedConfig>): Dataset_GCSManagedConfig {
    const message = createBaseDataset_GCSManagedConfig();
    message.gcsPrefix = (object.gcsPrefix !== undefined && object.gcsPrefix !== null)
      ? GcsPrefix.fromPartial(object.gcsPrefix)
      : undefined;
    return message;
  },
};

function createBaseDataset_DocumentWarehouseConfig(): Dataset_DocumentWarehouseConfig {
  return { collection: "", schema: "" };
}

export const Dataset_DocumentWarehouseConfig: MessageFns<Dataset_DocumentWarehouseConfig> = {
  encode(message: Dataset_DocumentWarehouseConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.collection !== "") {
      writer.uint32(10).string(message.collection);
    }
    if (message.schema !== "") {
      writer.uint32(18).string(message.schema);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Dataset_DocumentWarehouseConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataset_DocumentWarehouseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.collection = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schema = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dataset_DocumentWarehouseConfig {
    return {
      collection: isSet(object.collection) ? globalThis.String(object.collection) : "",
      schema: isSet(object.schema) ? globalThis.String(object.schema) : "",
    };
  },

  toJSON(message: Dataset_DocumentWarehouseConfig): unknown {
    const obj: any = {};
    if (message.collection !== "") {
      obj.collection = message.collection;
    }
    if (message.schema !== "") {
      obj.schema = message.schema;
    }
    return obj;
  },

  create(base?: DeepPartial<Dataset_DocumentWarehouseConfig>): Dataset_DocumentWarehouseConfig {
    return Dataset_DocumentWarehouseConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Dataset_DocumentWarehouseConfig>): Dataset_DocumentWarehouseConfig {
    const message = createBaseDataset_DocumentWarehouseConfig();
    message.collection = object.collection ?? "";
    message.schema = object.schema ?? "";
    return message;
  },
};

function createBaseDataset_UnmanagedDatasetConfig(): Dataset_UnmanagedDatasetConfig {
  return {};
}

export const Dataset_UnmanagedDatasetConfig: MessageFns<Dataset_UnmanagedDatasetConfig> = {
  encode(_: Dataset_UnmanagedDatasetConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Dataset_UnmanagedDatasetConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataset_UnmanagedDatasetConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Dataset_UnmanagedDatasetConfig {
    return {};
  },

  toJSON(_: Dataset_UnmanagedDatasetConfig): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Dataset_UnmanagedDatasetConfig>): Dataset_UnmanagedDatasetConfig {
    return Dataset_UnmanagedDatasetConfig.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<Dataset_UnmanagedDatasetConfig>): Dataset_UnmanagedDatasetConfig {
    const message = createBaseDataset_UnmanagedDatasetConfig();
    return message;
  },
};

function createBaseDataset_SpannerIndexingConfig(): Dataset_SpannerIndexingConfig {
  return {};
}

export const Dataset_SpannerIndexingConfig: MessageFns<Dataset_SpannerIndexingConfig> = {
  encode(_: Dataset_SpannerIndexingConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Dataset_SpannerIndexingConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataset_SpannerIndexingConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Dataset_SpannerIndexingConfig {
    return {};
  },

  toJSON(_: Dataset_SpannerIndexingConfig): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Dataset_SpannerIndexingConfig>): Dataset_SpannerIndexingConfig {
    return Dataset_SpannerIndexingConfig.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<Dataset_SpannerIndexingConfig>): Dataset_SpannerIndexingConfig {
    const message = createBaseDataset_SpannerIndexingConfig();
    return message;
  },
};

function createBaseDocumentId(): DocumentId {
  return { gcsManagedDocId: undefined, unmanagedDocId: undefined, revisionRef: undefined };
}

export const DocumentId: MessageFns<DocumentId> = {
  encode(message: DocumentId, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gcsManagedDocId !== undefined) {
      DocumentId_GCSManagedDocumentId.encode(message.gcsManagedDocId, writer.uint32(10).fork()).join();
    }
    if (message.unmanagedDocId !== undefined) {
      DocumentId_UnmanagedDocumentId.encode(message.unmanagedDocId, writer.uint32(34).fork()).join();
    }
    if (message.revisionRef !== undefined) {
      RevisionRef.encode(message.revisionRef, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DocumentId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocumentId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gcsManagedDocId = DocumentId_GCSManagedDocumentId.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.unmanagedDocId = DocumentId_UnmanagedDocumentId.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.revisionRef = RevisionRef.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DocumentId {
    return {
      gcsManagedDocId: isSet(object.gcsManagedDocId)
        ? DocumentId_GCSManagedDocumentId.fromJSON(object.gcsManagedDocId)
        : undefined,
      unmanagedDocId: isSet(object.unmanagedDocId)
        ? DocumentId_UnmanagedDocumentId.fromJSON(object.unmanagedDocId)
        : undefined,
      revisionRef: isSet(object.revisionRef) ? RevisionRef.fromJSON(object.revisionRef) : undefined,
    };
  },

  toJSON(message: DocumentId): unknown {
    const obj: any = {};
    if (message.gcsManagedDocId !== undefined) {
      obj.gcsManagedDocId = DocumentId_GCSManagedDocumentId.toJSON(message.gcsManagedDocId);
    }
    if (message.unmanagedDocId !== undefined) {
      obj.unmanagedDocId = DocumentId_UnmanagedDocumentId.toJSON(message.unmanagedDocId);
    }
    if (message.revisionRef !== undefined) {
      obj.revisionRef = RevisionRef.toJSON(message.revisionRef);
    }
    return obj;
  },

  create(base?: DeepPartial<DocumentId>): DocumentId {
    return DocumentId.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DocumentId>): DocumentId {
    const message = createBaseDocumentId();
    message.gcsManagedDocId = (object.gcsManagedDocId !== undefined && object.gcsManagedDocId !== null)
      ? DocumentId_GCSManagedDocumentId.fromPartial(object.gcsManagedDocId)
      : undefined;
    message.unmanagedDocId = (object.unmanagedDocId !== undefined && object.unmanagedDocId !== null)
      ? DocumentId_UnmanagedDocumentId.fromPartial(object.unmanagedDocId)
      : undefined;
    message.revisionRef = (object.revisionRef !== undefined && object.revisionRef !== null)
      ? RevisionRef.fromPartial(object.revisionRef)
      : undefined;
    return message;
  },
};

function createBaseDocumentId_GCSManagedDocumentId(): DocumentId_GCSManagedDocumentId {
  return { gcsUri: "", cwDocId: "" };
}

export const DocumentId_GCSManagedDocumentId: MessageFns<DocumentId_GCSManagedDocumentId> = {
  encode(message: DocumentId_GCSManagedDocumentId, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gcsUri !== "") {
      writer.uint32(10).string(message.gcsUri);
    }
    if (message.cwDocId !== "") {
      writer.uint32(18).string(message.cwDocId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DocumentId_GCSManagedDocumentId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocumentId_GCSManagedDocumentId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gcsUri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cwDocId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DocumentId_GCSManagedDocumentId {
    return {
      gcsUri: isSet(object.gcsUri) ? globalThis.String(object.gcsUri) : "",
      cwDocId: isSet(object.cwDocId) ? globalThis.String(object.cwDocId) : "",
    };
  },

  toJSON(message: DocumentId_GCSManagedDocumentId): unknown {
    const obj: any = {};
    if (message.gcsUri !== "") {
      obj.gcsUri = message.gcsUri;
    }
    if (message.cwDocId !== "") {
      obj.cwDocId = message.cwDocId;
    }
    return obj;
  },

  create(base?: DeepPartial<DocumentId_GCSManagedDocumentId>): DocumentId_GCSManagedDocumentId {
    return DocumentId_GCSManagedDocumentId.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DocumentId_GCSManagedDocumentId>): DocumentId_GCSManagedDocumentId {
    const message = createBaseDocumentId_GCSManagedDocumentId();
    message.gcsUri = object.gcsUri ?? "";
    message.cwDocId = object.cwDocId ?? "";
    return message;
  },
};

function createBaseDocumentId_UnmanagedDocumentId(): DocumentId_UnmanagedDocumentId {
  return { docId: "" };
}

export const DocumentId_UnmanagedDocumentId: MessageFns<DocumentId_UnmanagedDocumentId> = {
  encode(message: DocumentId_UnmanagedDocumentId, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.docId !== "") {
      writer.uint32(10).string(message.docId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DocumentId_UnmanagedDocumentId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocumentId_UnmanagedDocumentId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.docId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DocumentId_UnmanagedDocumentId {
    return { docId: isSet(object.docId) ? globalThis.String(object.docId) : "" };
  },

  toJSON(message: DocumentId_UnmanagedDocumentId): unknown {
    const obj: any = {};
    if (message.docId !== "") {
      obj.docId = message.docId;
    }
    return obj;
  },

  create(base?: DeepPartial<DocumentId_UnmanagedDocumentId>): DocumentId_UnmanagedDocumentId {
    return DocumentId_UnmanagedDocumentId.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DocumentId_UnmanagedDocumentId>): DocumentId_UnmanagedDocumentId {
    const message = createBaseDocumentId_UnmanagedDocumentId();
    message.docId = object.docId ?? "";
    return message;
  },
};

function createBaseDatasetSchema(): DatasetSchema {
  return { name: "", documentSchema: undefined };
}

export const DatasetSchema: MessageFns<DatasetSchema> = {
  encode(message: DatasetSchema, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.documentSchema !== undefined) {
      DocumentSchema.encode(message.documentSchema, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DatasetSchema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatasetSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.documentSchema = DocumentSchema.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DatasetSchema {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      documentSchema: isSet(object.documentSchema) ? DocumentSchema.fromJSON(object.documentSchema) : undefined,
    };
  },

  toJSON(message: DatasetSchema): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.documentSchema !== undefined) {
      obj.documentSchema = DocumentSchema.toJSON(message.documentSchema);
    }
    return obj;
  },

  create(base?: DeepPartial<DatasetSchema>): DatasetSchema {
    return DatasetSchema.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DatasetSchema>): DatasetSchema {
    const message = createBaseDatasetSchema();
    message.name = object.name ?? "";
    message.documentSchema = (object.documentSchema !== undefined && object.documentSchema !== null)
      ? DocumentSchema.fromPartial(object.documentSchema)
      : undefined;
    return message;
  },
};

function createBaseBatchDatasetDocuments(): BatchDatasetDocuments {
  return { individualDocumentIds: undefined, filter: undefined };
}

export const BatchDatasetDocuments: MessageFns<BatchDatasetDocuments> = {
  encode(message: BatchDatasetDocuments, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.individualDocumentIds !== undefined) {
      BatchDatasetDocuments_IndividualDocumentIds.encode(message.individualDocumentIds, writer.uint32(10).fork())
        .join();
    }
    if (message.filter !== undefined) {
      writer.uint32(18).string(message.filter);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BatchDatasetDocuments {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchDatasetDocuments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.individualDocumentIds = BatchDatasetDocuments_IndividualDocumentIds.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchDatasetDocuments {
    return {
      individualDocumentIds: isSet(object.individualDocumentIds)
        ? BatchDatasetDocuments_IndividualDocumentIds.fromJSON(object.individualDocumentIds)
        : undefined,
      filter: isSet(object.filter) ? globalThis.String(object.filter) : undefined,
    };
  },

  toJSON(message: BatchDatasetDocuments): unknown {
    const obj: any = {};
    if (message.individualDocumentIds !== undefined) {
      obj.individualDocumentIds = BatchDatasetDocuments_IndividualDocumentIds.toJSON(message.individualDocumentIds);
    }
    if (message.filter !== undefined) {
      obj.filter = message.filter;
    }
    return obj;
  },

  create(base?: DeepPartial<BatchDatasetDocuments>): BatchDatasetDocuments {
    return BatchDatasetDocuments.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BatchDatasetDocuments>): BatchDatasetDocuments {
    const message = createBaseBatchDatasetDocuments();
    message.individualDocumentIds =
      (object.individualDocumentIds !== undefined && object.individualDocumentIds !== null)
        ? BatchDatasetDocuments_IndividualDocumentIds.fromPartial(object.individualDocumentIds)
        : undefined;
    message.filter = object.filter ?? undefined;
    return message;
  },
};

function createBaseBatchDatasetDocuments_IndividualDocumentIds(): BatchDatasetDocuments_IndividualDocumentIds {
  return { documentIds: [] };
}

export const BatchDatasetDocuments_IndividualDocumentIds: MessageFns<BatchDatasetDocuments_IndividualDocumentIds> = {
  encode(
    message: BatchDatasetDocuments_IndividualDocumentIds,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    for (const v of message.documentIds) {
      DocumentId.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BatchDatasetDocuments_IndividualDocumentIds {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchDatasetDocuments_IndividualDocumentIds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.documentIds.push(DocumentId.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchDatasetDocuments_IndividualDocumentIds {
    return {
      documentIds: globalThis.Array.isArray(object?.documentIds)
        ? object.documentIds.map((e: any) => DocumentId.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchDatasetDocuments_IndividualDocumentIds): unknown {
    const obj: any = {};
    if (message.documentIds?.length) {
      obj.documentIds = message.documentIds.map((e) => DocumentId.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<BatchDatasetDocuments_IndividualDocumentIds>): BatchDatasetDocuments_IndividualDocumentIds {
    return BatchDatasetDocuments_IndividualDocumentIds.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<BatchDatasetDocuments_IndividualDocumentIds>,
  ): BatchDatasetDocuments_IndividualDocumentIds {
    const message = createBaseBatchDatasetDocuments_IndividualDocumentIds();
    message.documentIds = object.documentIds?.map((e) => DocumentId.fromPartial(e)) || [];
    return message;
  },
};

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
