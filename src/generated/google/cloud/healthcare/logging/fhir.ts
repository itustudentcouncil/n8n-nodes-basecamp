// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/healthcare/logging/fhir.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Status } from "../../../rpc/status.js";

export const protobufPackage = "google.cloud.healthcare.logging";

/** A log entry for a FHIR import long-running operation. */
export interface ImportFhirLogEntry {
  /**
   * The source in Cloud Storage (for example,
   * `gs://{bucket_id}/{path/to/file}`) or BigQuery (for example,
   * `bq://{projectId}.{bqDatasetId}`).
   */
  source: string;
  /** The ID in the source file of the FHIR resource being imported. */
  resourceId: string;
  /** The error code and message. */
  error: Status | undefined;
}

/** A log entry for a FHIR export long-running operation. */
export interface ExportFhirLogEntry {
  /**
   * The destination in Cloud Storage (for example,
   * `gs://{bucket_id}/{path/to/file}`) or BigQuery (for example,
   * `bq://{projectId}.{bqDatasetId}`).
   */
  destination: string;
  /**
   * The resource being exported (e.g.
   * `projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}/fhir/Patient/{patientId}`).
   */
  resourceName: string;
  /** The error code and message. */
  error: Status | undefined;
}

/** A log entry for a FHIR configure search long-running operation */
export interface FhirConfigureSearchLogEntry {
  /** The ID of the resource being reindexed. */
  resourceId: string;
  /** The error code and message. */
  error: Status | undefined;
}

/** A log entry for a FHIR store Pub/Sub notification. */
export interface FhirNotificationLogEntry {
  /**
   * The resource being changed (for example,
   * `projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}/fhir/Patient/{patientId}`).
   */
  resourceName: string;
  /** The Pub/Sub topic that the notification is published on. */
  pubsubTopic: string;
  /** The error code and message. */
  error: Status | undefined;
}

/** A log entry for a FHIR streaming export notification. */
export interface FhirStreamLogEntry {
  /**
   * The resource being changed (for example,
   * `projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}/fhir/Patient/{patientId}`).
   */
  resourceName: string;
  /**
   * The destination in BigQuery (for example,
   * `bq://{projectId}.{bqDatasetId}.{bqTableId}`).
   */
  destination: string;
  /** The error code and message. */
  error: Status | undefined;
}

/** A log entry for a FHIR streaming deidentification notification. */
export interface FhirDeidentifyStreamToStoreLogEntry {
  /**
   * The resource that changed (for example,
   * `projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}/fhir/Patient/{patientId}`).
   */
  resourceName: string;
  /**
   * The destination FHIR store name. (for example,
   * `projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}`).
   */
  destination: string;
  /** The error code and message. */
  error: Status | undefined;
}

function createBaseImportFhirLogEntry(): ImportFhirLogEntry {
  return { source: "", resourceId: "", error: undefined };
}

export const ImportFhirLogEntry: MessageFns<ImportFhirLogEntry> = {
  encode(message: ImportFhirLogEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ImportFhirLogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportFhirLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.source = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImportFhirLogEntry {
    return {
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ImportFhirLogEntry): unknown {
    const obj: any = {};
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<ImportFhirLogEntry>): ImportFhirLogEntry {
    return ImportFhirLogEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ImportFhirLogEntry>): ImportFhirLogEntry {
    const message = createBaseImportFhirLogEntry();
    message.source = object.source ?? "";
    message.resourceId = object.resourceId ?? "";
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseExportFhirLogEntry(): ExportFhirLogEntry {
  return { destination: "", resourceName: "", error: undefined };
}

export const ExportFhirLogEntry: MessageFns<ExportFhirLogEntry> = {
  encode(message: ExportFhirLogEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.destination !== "") {
      writer.uint32(10).string(message.destination);
    }
    if (message.resourceName !== "") {
      writer.uint32(26).string(message.resourceName);
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExportFhirLogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportFhirLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.destination = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportFhirLogEntry {
    return {
      destination: isSet(object.destination) ? globalThis.String(object.destination) : "",
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ExportFhirLogEntry): unknown {
    const obj: any = {};
    if (message.destination !== "") {
      obj.destination = message.destination;
    }
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<ExportFhirLogEntry>): ExportFhirLogEntry {
    return ExportFhirLogEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExportFhirLogEntry>): ExportFhirLogEntry {
    const message = createBaseExportFhirLogEntry();
    message.destination = object.destination ?? "";
    message.resourceName = object.resourceName ?? "";
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseFhirConfigureSearchLogEntry(): FhirConfigureSearchLogEntry {
  return { resourceId: "", error: undefined };
}

export const FhirConfigureSearchLogEntry: MessageFns<FhirConfigureSearchLogEntry> = {
  encode(message: FhirConfigureSearchLogEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FhirConfigureSearchLogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFhirConfigureSearchLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FhirConfigureSearchLogEntry {
    return {
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: FhirConfigureSearchLogEntry): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<FhirConfigureSearchLogEntry>): FhirConfigureSearchLogEntry {
    return FhirConfigureSearchLogEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FhirConfigureSearchLogEntry>): FhirConfigureSearchLogEntry {
    const message = createBaseFhirConfigureSearchLogEntry();
    message.resourceId = object.resourceId ?? "";
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseFhirNotificationLogEntry(): FhirNotificationLogEntry {
  return { resourceName: "", pubsubTopic: "", error: undefined };
}

export const FhirNotificationLogEntry: MessageFns<FhirNotificationLogEntry> = {
  encode(message: FhirNotificationLogEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.pubsubTopic !== "") {
      writer.uint32(18).string(message.pubsubTopic);
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FhirNotificationLogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFhirNotificationLogEntry();
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

          message.pubsubTopic = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FhirNotificationLogEntry {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      pubsubTopic: isSet(object.pubsubTopic) ? globalThis.String(object.pubsubTopic) : "",
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: FhirNotificationLogEntry): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.pubsubTopic !== "") {
      obj.pubsubTopic = message.pubsubTopic;
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<FhirNotificationLogEntry>): FhirNotificationLogEntry {
    return FhirNotificationLogEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FhirNotificationLogEntry>): FhirNotificationLogEntry {
    const message = createBaseFhirNotificationLogEntry();
    message.resourceName = object.resourceName ?? "";
    message.pubsubTopic = object.pubsubTopic ?? "";
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseFhirStreamLogEntry(): FhirStreamLogEntry {
  return { resourceName: "", destination: "", error: undefined };
}

export const FhirStreamLogEntry: MessageFns<FhirStreamLogEntry> = {
  encode(message: FhirStreamLogEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FhirStreamLogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFhirStreamLogEntry();
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

          message.destination = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FhirStreamLogEntry {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      destination: isSet(object.destination) ? globalThis.String(object.destination) : "",
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: FhirStreamLogEntry): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.destination !== "") {
      obj.destination = message.destination;
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<FhirStreamLogEntry>): FhirStreamLogEntry {
    return FhirStreamLogEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FhirStreamLogEntry>): FhirStreamLogEntry {
    const message = createBaseFhirStreamLogEntry();
    message.resourceName = object.resourceName ?? "";
    message.destination = object.destination ?? "";
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseFhirDeidentifyStreamToStoreLogEntry(): FhirDeidentifyStreamToStoreLogEntry {
  return { resourceName: "", destination: "", error: undefined };
}

export const FhirDeidentifyStreamToStoreLogEntry: MessageFns<FhirDeidentifyStreamToStoreLogEntry> = {
  encode(message: FhirDeidentifyStreamToStoreLogEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FhirDeidentifyStreamToStoreLogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFhirDeidentifyStreamToStoreLogEntry();
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

          message.destination = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FhirDeidentifyStreamToStoreLogEntry {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      destination: isSet(object.destination) ? globalThis.String(object.destination) : "",
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: FhirDeidentifyStreamToStoreLogEntry): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.destination !== "") {
      obj.destination = message.destination;
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<FhirDeidentifyStreamToStoreLogEntry>): FhirDeidentifyStreamToStoreLogEntry {
    return FhirDeidentifyStreamToStoreLogEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FhirDeidentifyStreamToStoreLogEntry>): FhirDeidentifyStreamToStoreLogEntry {
    const message = createBaseFhirDeidentifyStreamToStoreLogEntry();
    message.resourceName = object.resourceName ?? "";
    message.destination = object.destination ?? "";
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
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