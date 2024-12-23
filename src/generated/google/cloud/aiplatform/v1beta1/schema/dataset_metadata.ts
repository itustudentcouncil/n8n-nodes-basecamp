// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/schema/dataset_metadata.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1beta1.schema";

/** The metadata of Datasets that contain Image DataItems. */
export interface ImageDatasetMetadata {
  /**
   * Points to a YAML file stored on Google Cloud Storage describing payload of
   * the Image DataItems that belong to this Dataset.
   */
  dataItemSchemaUri: string;
  /**
   * Google Cloud Storage Bucket name that contains the blob data of this
   * Dataset.
   */
  gcsBucket: string;
}

/** The metadata of Datasets that contain Text DataItems. */
export interface TextDatasetMetadata {
  /**
   * Points to a YAML file stored on Google Cloud Storage describing payload of
   * the Text DataItems that belong to this Dataset.
   */
  dataItemSchemaUri: string;
  /**
   * Google Cloud Storage Bucket name that contains the blob data of this
   * Dataset.
   */
  gcsBucket: string;
}

/** The metadata of Datasets that contain Video DataItems. */
export interface VideoDatasetMetadata {
  /**
   * Points to a YAML file stored on Google Cloud Storage describing payload of
   * the Video DataItems that belong to this Dataset.
   */
  dataItemSchemaUri: string;
  /**
   * Google Cloud Storage Bucket name that contains the blob data of this
   * Dataset.
   */
  gcsBucket: string;
}

/** The metadata of Datasets that contain tables data. */
export interface TablesDatasetMetadata {
  inputConfig: TablesDatasetMetadata_InputConfig | undefined;
}

/**
 * The tables Dataset's data source. The Dataset doesn't store the data
 * directly, but only pointer(s) to its data.
 */
export interface TablesDatasetMetadata_InputConfig {
  gcsSource?: TablesDatasetMetadata_GcsSource | undefined;
  bigquerySource?: TablesDatasetMetadata_BigQuerySource | undefined;
}

export interface TablesDatasetMetadata_GcsSource {
  /**
   * Cloud Storage URI of one or more files. Only CSV files are supported.
   * The first line of the CSV file is used as the header.
   * If there are multiple files, the header is the first line of
   * the lexicographically first file, the other files must either
   * contain the exact same header or omit the header.
   */
  uri: string[];
}

export interface TablesDatasetMetadata_BigQuerySource {
  /**
   * The URI of a BigQuery table.
   * e.g. bq://projectId.bqDatasetId.bqTableId
   */
  uri: string;
}

/** The metadata of Datasets that contain time series data. */
export interface TimeSeriesDatasetMetadata {
  inputConfig:
    | TimeSeriesDatasetMetadata_InputConfig
    | undefined;
  /**
   * The column name of the time series identifier column that identifies the
   * time series.
   */
  timeSeriesIdentifierColumn: string;
  /**
   * The column name of the time column that identifies time order in the time
   * series.
   */
  timeColumn: string;
}

/**
 * The time series Dataset's data source. The Dataset doesn't store the data
 * directly, but only pointer(s) to its data.
 */
export interface TimeSeriesDatasetMetadata_InputConfig {
  gcsSource?: TimeSeriesDatasetMetadata_GcsSource | undefined;
  bigquerySource?: TimeSeriesDatasetMetadata_BigQuerySource | undefined;
}

export interface TimeSeriesDatasetMetadata_GcsSource {
  /**
   * Cloud Storage URI of one or more files. Only CSV files are supported.
   * The first line of the CSV file is used as the header.
   * If there are multiple files, the header is the first line of
   * the lexicographically first file, the other files must either
   * contain the exact same header or omit the header.
   */
  uri: string[];
}

export interface TimeSeriesDatasetMetadata_BigQuerySource {
  /** The URI of a BigQuery table. */
  uri: string;
}

function createBaseImageDatasetMetadata(): ImageDatasetMetadata {
  return { dataItemSchemaUri: "", gcsBucket: "" };
}

export const ImageDatasetMetadata: MessageFns<ImageDatasetMetadata> = {
  encode(message: ImageDatasetMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.dataItemSchemaUri !== "") {
      writer.uint32(10).string(message.dataItemSchemaUri);
    }
    if (message.gcsBucket !== "") {
      writer.uint32(18).string(message.gcsBucket);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ImageDatasetMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImageDatasetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataItemSchemaUri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gcsBucket = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImageDatasetMetadata {
    return {
      dataItemSchemaUri: isSet(object.dataItemSchemaUri) ? globalThis.String(object.dataItemSchemaUri) : "",
      gcsBucket: isSet(object.gcsBucket) ? globalThis.String(object.gcsBucket) : "",
    };
  },

  toJSON(message: ImageDatasetMetadata): unknown {
    const obj: any = {};
    if (message.dataItemSchemaUri !== "") {
      obj.dataItemSchemaUri = message.dataItemSchemaUri;
    }
    if (message.gcsBucket !== "") {
      obj.gcsBucket = message.gcsBucket;
    }
    return obj;
  },

  create(base?: DeepPartial<ImageDatasetMetadata>): ImageDatasetMetadata {
    return ImageDatasetMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ImageDatasetMetadata>): ImageDatasetMetadata {
    const message = createBaseImageDatasetMetadata();
    message.dataItemSchemaUri = object.dataItemSchemaUri ?? "";
    message.gcsBucket = object.gcsBucket ?? "";
    return message;
  },
};

function createBaseTextDatasetMetadata(): TextDatasetMetadata {
  return { dataItemSchemaUri: "", gcsBucket: "" };
}

export const TextDatasetMetadata: MessageFns<TextDatasetMetadata> = {
  encode(message: TextDatasetMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.dataItemSchemaUri !== "") {
      writer.uint32(10).string(message.dataItemSchemaUri);
    }
    if (message.gcsBucket !== "") {
      writer.uint32(18).string(message.gcsBucket);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextDatasetMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextDatasetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataItemSchemaUri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gcsBucket = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextDatasetMetadata {
    return {
      dataItemSchemaUri: isSet(object.dataItemSchemaUri) ? globalThis.String(object.dataItemSchemaUri) : "",
      gcsBucket: isSet(object.gcsBucket) ? globalThis.String(object.gcsBucket) : "",
    };
  },

  toJSON(message: TextDatasetMetadata): unknown {
    const obj: any = {};
    if (message.dataItemSchemaUri !== "") {
      obj.dataItemSchemaUri = message.dataItemSchemaUri;
    }
    if (message.gcsBucket !== "") {
      obj.gcsBucket = message.gcsBucket;
    }
    return obj;
  },

  create(base?: DeepPartial<TextDatasetMetadata>): TextDatasetMetadata {
    return TextDatasetMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TextDatasetMetadata>): TextDatasetMetadata {
    const message = createBaseTextDatasetMetadata();
    message.dataItemSchemaUri = object.dataItemSchemaUri ?? "";
    message.gcsBucket = object.gcsBucket ?? "";
    return message;
  },
};

function createBaseVideoDatasetMetadata(): VideoDatasetMetadata {
  return { dataItemSchemaUri: "", gcsBucket: "" };
}

export const VideoDatasetMetadata: MessageFns<VideoDatasetMetadata> = {
  encode(message: VideoDatasetMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.dataItemSchemaUri !== "") {
      writer.uint32(10).string(message.dataItemSchemaUri);
    }
    if (message.gcsBucket !== "") {
      writer.uint32(18).string(message.gcsBucket);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VideoDatasetMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoDatasetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataItemSchemaUri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gcsBucket = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VideoDatasetMetadata {
    return {
      dataItemSchemaUri: isSet(object.dataItemSchemaUri) ? globalThis.String(object.dataItemSchemaUri) : "",
      gcsBucket: isSet(object.gcsBucket) ? globalThis.String(object.gcsBucket) : "",
    };
  },

  toJSON(message: VideoDatasetMetadata): unknown {
    const obj: any = {};
    if (message.dataItemSchemaUri !== "") {
      obj.dataItemSchemaUri = message.dataItemSchemaUri;
    }
    if (message.gcsBucket !== "") {
      obj.gcsBucket = message.gcsBucket;
    }
    return obj;
  },

  create(base?: DeepPartial<VideoDatasetMetadata>): VideoDatasetMetadata {
    return VideoDatasetMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VideoDatasetMetadata>): VideoDatasetMetadata {
    const message = createBaseVideoDatasetMetadata();
    message.dataItemSchemaUri = object.dataItemSchemaUri ?? "";
    message.gcsBucket = object.gcsBucket ?? "";
    return message;
  },
};

function createBaseTablesDatasetMetadata(): TablesDatasetMetadata {
  return { inputConfig: undefined };
}

export const TablesDatasetMetadata: MessageFns<TablesDatasetMetadata> = {
  encode(message: TablesDatasetMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.inputConfig !== undefined) {
      TablesDatasetMetadata_InputConfig.encode(message.inputConfig, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TablesDatasetMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTablesDatasetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputConfig = TablesDatasetMetadata_InputConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TablesDatasetMetadata {
    return {
      inputConfig: isSet(object.inputConfig)
        ? TablesDatasetMetadata_InputConfig.fromJSON(object.inputConfig)
        : undefined,
    };
  },

  toJSON(message: TablesDatasetMetadata): unknown {
    const obj: any = {};
    if (message.inputConfig !== undefined) {
      obj.inputConfig = TablesDatasetMetadata_InputConfig.toJSON(message.inputConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<TablesDatasetMetadata>): TablesDatasetMetadata {
    return TablesDatasetMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TablesDatasetMetadata>): TablesDatasetMetadata {
    const message = createBaseTablesDatasetMetadata();
    message.inputConfig = (object.inputConfig !== undefined && object.inputConfig !== null)
      ? TablesDatasetMetadata_InputConfig.fromPartial(object.inputConfig)
      : undefined;
    return message;
  },
};

function createBaseTablesDatasetMetadata_InputConfig(): TablesDatasetMetadata_InputConfig {
  return { gcsSource: undefined, bigquerySource: undefined };
}

export const TablesDatasetMetadata_InputConfig: MessageFns<TablesDatasetMetadata_InputConfig> = {
  encode(message: TablesDatasetMetadata_InputConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gcsSource !== undefined) {
      TablesDatasetMetadata_GcsSource.encode(message.gcsSource, writer.uint32(10).fork()).join();
    }
    if (message.bigquerySource !== undefined) {
      TablesDatasetMetadata_BigQuerySource.encode(message.bigquerySource, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TablesDatasetMetadata_InputConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTablesDatasetMetadata_InputConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gcsSource = TablesDatasetMetadata_GcsSource.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bigquerySource = TablesDatasetMetadata_BigQuerySource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TablesDatasetMetadata_InputConfig {
    return {
      gcsSource: isSet(object.gcsSource) ? TablesDatasetMetadata_GcsSource.fromJSON(object.gcsSource) : undefined,
      bigquerySource: isSet(object.bigquerySource)
        ? TablesDatasetMetadata_BigQuerySource.fromJSON(object.bigquerySource)
        : undefined,
    };
  },

  toJSON(message: TablesDatasetMetadata_InputConfig): unknown {
    const obj: any = {};
    if (message.gcsSource !== undefined) {
      obj.gcsSource = TablesDatasetMetadata_GcsSource.toJSON(message.gcsSource);
    }
    if (message.bigquerySource !== undefined) {
      obj.bigquerySource = TablesDatasetMetadata_BigQuerySource.toJSON(message.bigquerySource);
    }
    return obj;
  },

  create(base?: DeepPartial<TablesDatasetMetadata_InputConfig>): TablesDatasetMetadata_InputConfig {
    return TablesDatasetMetadata_InputConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TablesDatasetMetadata_InputConfig>): TablesDatasetMetadata_InputConfig {
    const message = createBaseTablesDatasetMetadata_InputConfig();
    message.gcsSource = (object.gcsSource !== undefined && object.gcsSource !== null)
      ? TablesDatasetMetadata_GcsSource.fromPartial(object.gcsSource)
      : undefined;
    message.bigquerySource = (object.bigquerySource !== undefined && object.bigquerySource !== null)
      ? TablesDatasetMetadata_BigQuerySource.fromPartial(object.bigquerySource)
      : undefined;
    return message;
  },
};

function createBaseTablesDatasetMetadata_GcsSource(): TablesDatasetMetadata_GcsSource {
  return { uri: [] };
}

export const TablesDatasetMetadata_GcsSource: MessageFns<TablesDatasetMetadata_GcsSource> = {
  encode(message: TablesDatasetMetadata_GcsSource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.uri) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TablesDatasetMetadata_GcsSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTablesDatasetMetadata_GcsSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TablesDatasetMetadata_GcsSource {
    return { uri: globalThis.Array.isArray(object?.uri) ? object.uri.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: TablesDatasetMetadata_GcsSource): unknown {
    const obj: any = {};
    if (message.uri?.length) {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<TablesDatasetMetadata_GcsSource>): TablesDatasetMetadata_GcsSource {
    return TablesDatasetMetadata_GcsSource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TablesDatasetMetadata_GcsSource>): TablesDatasetMetadata_GcsSource {
    const message = createBaseTablesDatasetMetadata_GcsSource();
    message.uri = object.uri?.map((e) => e) || [];
    return message;
  },
};

function createBaseTablesDatasetMetadata_BigQuerySource(): TablesDatasetMetadata_BigQuerySource {
  return { uri: "" };
}

export const TablesDatasetMetadata_BigQuerySource: MessageFns<TablesDatasetMetadata_BigQuerySource> = {
  encode(message: TablesDatasetMetadata_BigQuerySource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TablesDatasetMetadata_BigQuerySource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTablesDatasetMetadata_BigQuerySource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TablesDatasetMetadata_BigQuerySource {
    return { uri: isSet(object.uri) ? globalThis.String(object.uri) : "" };
  },

  toJSON(message: TablesDatasetMetadata_BigQuerySource): unknown {
    const obj: any = {};
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<TablesDatasetMetadata_BigQuerySource>): TablesDatasetMetadata_BigQuerySource {
    return TablesDatasetMetadata_BigQuerySource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TablesDatasetMetadata_BigQuerySource>): TablesDatasetMetadata_BigQuerySource {
    const message = createBaseTablesDatasetMetadata_BigQuerySource();
    message.uri = object.uri ?? "";
    return message;
  },
};

function createBaseTimeSeriesDatasetMetadata(): TimeSeriesDatasetMetadata {
  return { inputConfig: undefined, timeSeriesIdentifierColumn: "", timeColumn: "" };
}

export const TimeSeriesDatasetMetadata: MessageFns<TimeSeriesDatasetMetadata> = {
  encode(message: TimeSeriesDatasetMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.inputConfig !== undefined) {
      TimeSeriesDatasetMetadata_InputConfig.encode(message.inputConfig, writer.uint32(10).fork()).join();
    }
    if (message.timeSeriesIdentifierColumn !== "") {
      writer.uint32(18).string(message.timeSeriesIdentifierColumn);
    }
    if (message.timeColumn !== "") {
      writer.uint32(26).string(message.timeColumn);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimeSeriesDatasetMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeSeriesDatasetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputConfig = TimeSeriesDatasetMetadata_InputConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timeSeriesIdentifierColumn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timeColumn = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeSeriesDatasetMetadata {
    return {
      inputConfig: isSet(object.inputConfig)
        ? TimeSeriesDatasetMetadata_InputConfig.fromJSON(object.inputConfig)
        : undefined,
      timeSeriesIdentifierColumn: isSet(object.timeSeriesIdentifierColumn)
        ? globalThis.String(object.timeSeriesIdentifierColumn)
        : "",
      timeColumn: isSet(object.timeColumn) ? globalThis.String(object.timeColumn) : "",
    };
  },

  toJSON(message: TimeSeriesDatasetMetadata): unknown {
    const obj: any = {};
    if (message.inputConfig !== undefined) {
      obj.inputConfig = TimeSeriesDatasetMetadata_InputConfig.toJSON(message.inputConfig);
    }
    if (message.timeSeriesIdentifierColumn !== "") {
      obj.timeSeriesIdentifierColumn = message.timeSeriesIdentifierColumn;
    }
    if (message.timeColumn !== "") {
      obj.timeColumn = message.timeColumn;
    }
    return obj;
  },

  create(base?: DeepPartial<TimeSeriesDatasetMetadata>): TimeSeriesDatasetMetadata {
    return TimeSeriesDatasetMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimeSeriesDatasetMetadata>): TimeSeriesDatasetMetadata {
    const message = createBaseTimeSeriesDatasetMetadata();
    message.inputConfig = (object.inputConfig !== undefined && object.inputConfig !== null)
      ? TimeSeriesDatasetMetadata_InputConfig.fromPartial(object.inputConfig)
      : undefined;
    message.timeSeriesIdentifierColumn = object.timeSeriesIdentifierColumn ?? "";
    message.timeColumn = object.timeColumn ?? "";
    return message;
  },
};

function createBaseTimeSeriesDatasetMetadata_InputConfig(): TimeSeriesDatasetMetadata_InputConfig {
  return { gcsSource: undefined, bigquerySource: undefined };
}

export const TimeSeriesDatasetMetadata_InputConfig: MessageFns<TimeSeriesDatasetMetadata_InputConfig> = {
  encode(message: TimeSeriesDatasetMetadata_InputConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gcsSource !== undefined) {
      TimeSeriesDatasetMetadata_GcsSource.encode(message.gcsSource, writer.uint32(10).fork()).join();
    }
    if (message.bigquerySource !== undefined) {
      TimeSeriesDatasetMetadata_BigQuerySource.encode(message.bigquerySource, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimeSeriesDatasetMetadata_InputConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeSeriesDatasetMetadata_InputConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gcsSource = TimeSeriesDatasetMetadata_GcsSource.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bigquerySource = TimeSeriesDatasetMetadata_BigQuerySource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeSeriesDatasetMetadata_InputConfig {
    return {
      gcsSource: isSet(object.gcsSource) ? TimeSeriesDatasetMetadata_GcsSource.fromJSON(object.gcsSource) : undefined,
      bigquerySource: isSet(object.bigquerySource)
        ? TimeSeriesDatasetMetadata_BigQuerySource.fromJSON(object.bigquerySource)
        : undefined,
    };
  },

  toJSON(message: TimeSeriesDatasetMetadata_InputConfig): unknown {
    const obj: any = {};
    if (message.gcsSource !== undefined) {
      obj.gcsSource = TimeSeriesDatasetMetadata_GcsSource.toJSON(message.gcsSource);
    }
    if (message.bigquerySource !== undefined) {
      obj.bigquerySource = TimeSeriesDatasetMetadata_BigQuerySource.toJSON(message.bigquerySource);
    }
    return obj;
  },

  create(base?: DeepPartial<TimeSeriesDatasetMetadata_InputConfig>): TimeSeriesDatasetMetadata_InputConfig {
    return TimeSeriesDatasetMetadata_InputConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimeSeriesDatasetMetadata_InputConfig>): TimeSeriesDatasetMetadata_InputConfig {
    const message = createBaseTimeSeriesDatasetMetadata_InputConfig();
    message.gcsSource = (object.gcsSource !== undefined && object.gcsSource !== null)
      ? TimeSeriesDatasetMetadata_GcsSource.fromPartial(object.gcsSource)
      : undefined;
    message.bigquerySource = (object.bigquerySource !== undefined && object.bigquerySource !== null)
      ? TimeSeriesDatasetMetadata_BigQuerySource.fromPartial(object.bigquerySource)
      : undefined;
    return message;
  },
};

function createBaseTimeSeriesDatasetMetadata_GcsSource(): TimeSeriesDatasetMetadata_GcsSource {
  return { uri: [] };
}

export const TimeSeriesDatasetMetadata_GcsSource: MessageFns<TimeSeriesDatasetMetadata_GcsSource> = {
  encode(message: TimeSeriesDatasetMetadata_GcsSource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.uri) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimeSeriesDatasetMetadata_GcsSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeSeriesDatasetMetadata_GcsSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeSeriesDatasetMetadata_GcsSource {
    return { uri: globalThis.Array.isArray(object?.uri) ? object.uri.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: TimeSeriesDatasetMetadata_GcsSource): unknown {
    const obj: any = {};
    if (message.uri?.length) {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<TimeSeriesDatasetMetadata_GcsSource>): TimeSeriesDatasetMetadata_GcsSource {
    return TimeSeriesDatasetMetadata_GcsSource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimeSeriesDatasetMetadata_GcsSource>): TimeSeriesDatasetMetadata_GcsSource {
    const message = createBaseTimeSeriesDatasetMetadata_GcsSource();
    message.uri = object.uri?.map((e) => e) || [];
    return message;
  },
};

function createBaseTimeSeriesDatasetMetadata_BigQuerySource(): TimeSeriesDatasetMetadata_BigQuerySource {
  return { uri: "" };
}

export const TimeSeriesDatasetMetadata_BigQuerySource: MessageFns<TimeSeriesDatasetMetadata_BigQuerySource> = {
  encode(message: TimeSeriesDatasetMetadata_BigQuerySource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimeSeriesDatasetMetadata_BigQuerySource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeSeriesDatasetMetadata_BigQuerySource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeSeriesDatasetMetadata_BigQuerySource {
    return { uri: isSet(object.uri) ? globalThis.String(object.uri) : "" };
  },

  toJSON(message: TimeSeriesDatasetMetadata_BigQuerySource): unknown {
    const obj: any = {};
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<TimeSeriesDatasetMetadata_BigQuerySource>): TimeSeriesDatasetMetadata_BigQuerySource {
    return TimeSeriesDatasetMetadata_BigQuerySource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimeSeriesDatasetMetadata_BigQuerySource>): TimeSeriesDatasetMetadata_BigQuerySource {
    const message = createBaseTimeSeriesDatasetMetadata_BigQuerySource();
    message.uri = object.uri ?? "";
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
