// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/retail/v2beta/export_config.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { Status } from "../../../rpc/status.js";

export const protobufPackage = "google.cloud.retail.v2beta";

/** The output configuration setting. */
export interface OutputConfig {
  /** The Google Cloud Storage location where the output is to be written to. */
  gcsDestination?:
    | OutputConfig_GcsDestination
    | undefined;
  /** The BigQuery location where the output is to be written to. */
  bigqueryDestination?: OutputConfig_BigQueryDestination | undefined;
}

/** The Google Cloud Storage output destination configuration. */
export interface OutputConfig_GcsDestination {
  /**
   * Required. The output uri prefix for saving output data to json files.
   * Some mapping examples are as follows:
   * output_uri_prefix         sample output(assuming the object is foo.json)
   * ========================  =============================================
   * gs://bucket/              gs://bucket/foo.json
   * gs://bucket/folder/       gs://bucket/folder/foo.json
   * gs://bucket/folder/item_  gs://bucket/folder/item_foo.json
   */
  outputUriPrefix: string;
}

/** The BigQuery output destination configuration. */
export interface OutputConfig_BigQueryDestination {
  /** Required. The ID of a BigQuery Dataset. */
  datasetId: string;
  /** Required. The prefix of exported BigQuery tables. */
  tableIdPrefix: string;
  /**
   * Required. Describes the table type. The following values are supported:
   *
   * * `table`: A BigQuery native table.
   * * `view`: A virtual table defined by a SQL query.
   */
  tableType: string;
}

/** Configuration of destination for Export related errors. */
export interface ExportErrorsConfig {
  /**
   * Google Cloud Storage path for import errors. This must be an empty,
   * existing Cloud Storage bucket. Export errors will be written to a file in
   * this bucket, one per line, as a JSON-encoded
   * `google.rpc.Status` message.
   */
  gcsPrefix?: string | undefined;
}

/** Request message for the `ExportAnalyticsMetrics` method. */
export interface ExportAnalyticsMetricsRequest {
  /**
   * Required. Full resource name of the parent catalog.
   * Expected format: `projects/* /locations/* /catalogs/*`
   */
  catalog: string;
  /** Required. The output location of the data. */
  outputConfig:
    | OutputConfig
    | undefined;
  /**
   * A filtering expression to specify restrictions on returned metrics.
   * The expression is a sequence of terms. Each term applies a restriction to
   * the returned metrics. Use this expression to restrict results to a
   * specific time range.
   *
   *   Currently we expect only one types of fields:
   *
   *    * `timestamp`: This can be specified twice, once with a
   *      less than operator and once with a greater than operator. The
   *      `timestamp` restriction should result in one, contiguous, valid,
   *      `timestamp` range.
   *
   *   Some examples of valid filters expressions:
   *
   *   * Example 1: `timestamp > "2012-04-23T18:25:43.511Z"
   *             timestamp < "2012-04-23T18:30:43.511Z"`
   *   * Example 2: `timestamp > "2012-04-23T18:25:43.511Z"`
   */
  filter: string;
}

/**
 * Metadata related to the progress of the Export operation. This is
 * returned by the google.longrunning.Operation.metadata field.
 */
export interface ExportMetadata {
  /** Operation create time. */
  createTime:
    | Date
    | undefined;
  /**
   * Operation last update time. If the operation is done, this is also the
   * finish time.
   */
  updateTime: Date | undefined;
}

/**
 * Response of the ExportProductsRequest. If the long running
 * operation is done, then this message is returned by the
 * google.longrunning.Operations.response field if the operation was successful.
 */
export interface ExportProductsResponse {
  /** A sample of errors encountered while processing the request. */
  errorSamples: Status[];
  /** This field is never set. */
  errorsConfig:
    | ExportErrorsConfig
    | undefined;
  /** Output result indicating where the data were exported to. */
  outputResult: OutputResult | undefined;
}

/**
 * Response of the ExportUserEventsRequest. If the long running
 * operation was successful, then this message is returned by the
 * google.longrunning.Operations.response field if the operation was successful.
 */
export interface ExportUserEventsResponse {
  /** A sample of errors encountered while processing the request. */
  errorSamples: Status[];
  /** This field is never set. */
  errorsConfig:
    | ExportErrorsConfig
    | undefined;
  /** Output result indicating where the data were exported to. */
  outputResult: OutputResult | undefined;
}

/**
 * Response of the ExportAnalyticsMetricsRequest. If the long running
 * operation was successful, then this message is returned by the
 * google.longrunning.Operations.response field if the operation was successful.
 */
export interface ExportAnalyticsMetricsResponse {
  /** A sample of errors encountered while processing the request. */
  errorSamples: Status[];
  /** This field is never set. */
  errorsConfig:
    | ExportErrorsConfig
    | undefined;
  /** Output result indicating where the data were exported to. */
  outputResult: OutputResult | undefined;
}

/**
 * Output result that stores the information about where the exported data is
 * stored.
 */
export interface OutputResult {
  /** The BigQuery location where the result is stored. */
  bigqueryResult: BigQueryOutputResult[];
  /** The Google Cloud Storage location where the result is stored. */
  gcsResult: GcsOutputResult[];
}

/** A BigQuery output result. */
export interface BigQueryOutputResult {
  /** The ID of a BigQuery Dataset. */
  datasetId: string;
  /** The ID of a BigQuery Table. */
  tableId: string;
}

/** A Gcs output result. */
export interface GcsOutputResult {
  /** The uri of Gcs output */
  outputUri: string;
}

function createBaseOutputConfig(): OutputConfig {
  return { gcsDestination: undefined, bigqueryDestination: undefined };
}

export const OutputConfig: MessageFns<OutputConfig> = {
  encode(message: OutputConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gcsDestination !== undefined) {
      OutputConfig_GcsDestination.encode(message.gcsDestination, writer.uint32(10).fork()).join();
    }
    if (message.bigqueryDestination !== undefined) {
      OutputConfig_BigQueryDestination.encode(message.bigqueryDestination, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OutputConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutputConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gcsDestination = OutputConfig_GcsDestination.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bigqueryDestination = OutputConfig_BigQueryDestination.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutputConfig {
    return {
      gcsDestination: isSet(object.gcsDestination)
        ? OutputConfig_GcsDestination.fromJSON(object.gcsDestination)
        : undefined,
      bigqueryDestination: isSet(object.bigqueryDestination)
        ? OutputConfig_BigQueryDestination.fromJSON(object.bigqueryDestination)
        : undefined,
    };
  },

  toJSON(message: OutputConfig): unknown {
    const obj: any = {};
    if (message.gcsDestination !== undefined) {
      obj.gcsDestination = OutputConfig_GcsDestination.toJSON(message.gcsDestination);
    }
    if (message.bigqueryDestination !== undefined) {
      obj.bigqueryDestination = OutputConfig_BigQueryDestination.toJSON(message.bigqueryDestination);
    }
    return obj;
  },

  create(base?: DeepPartial<OutputConfig>): OutputConfig {
    return OutputConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OutputConfig>): OutputConfig {
    const message = createBaseOutputConfig();
    message.gcsDestination = (object.gcsDestination !== undefined && object.gcsDestination !== null)
      ? OutputConfig_GcsDestination.fromPartial(object.gcsDestination)
      : undefined;
    message.bigqueryDestination = (object.bigqueryDestination !== undefined && object.bigqueryDestination !== null)
      ? OutputConfig_BigQueryDestination.fromPartial(object.bigqueryDestination)
      : undefined;
    return message;
  },
};

function createBaseOutputConfig_GcsDestination(): OutputConfig_GcsDestination {
  return { outputUriPrefix: "" };
}

export const OutputConfig_GcsDestination: MessageFns<OutputConfig_GcsDestination> = {
  encode(message: OutputConfig_GcsDestination, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.outputUriPrefix !== "") {
      writer.uint32(10).string(message.outputUriPrefix);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OutputConfig_GcsDestination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutputConfig_GcsDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outputUriPrefix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutputConfig_GcsDestination {
    return { outputUriPrefix: isSet(object.outputUriPrefix) ? globalThis.String(object.outputUriPrefix) : "" };
  },

  toJSON(message: OutputConfig_GcsDestination): unknown {
    const obj: any = {};
    if (message.outputUriPrefix !== "") {
      obj.outputUriPrefix = message.outputUriPrefix;
    }
    return obj;
  },

  create(base?: DeepPartial<OutputConfig_GcsDestination>): OutputConfig_GcsDestination {
    return OutputConfig_GcsDestination.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OutputConfig_GcsDestination>): OutputConfig_GcsDestination {
    const message = createBaseOutputConfig_GcsDestination();
    message.outputUriPrefix = object.outputUriPrefix ?? "";
    return message;
  },
};

function createBaseOutputConfig_BigQueryDestination(): OutputConfig_BigQueryDestination {
  return { datasetId: "", tableIdPrefix: "", tableType: "" };
}

export const OutputConfig_BigQueryDestination: MessageFns<OutputConfig_BigQueryDestination> = {
  encode(message: OutputConfig_BigQueryDestination, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.datasetId !== "") {
      writer.uint32(10).string(message.datasetId);
    }
    if (message.tableIdPrefix !== "") {
      writer.uint32(18).string(message.tableIdPrefix);
    }
    if (message.tableType !== "") {
      writer.uint32(26).string(message.tableType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OutputConfig_BigQueryDestination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutputConfig_BigQueryDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.datasetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tableIdPrefix = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tableType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutputConfig_BigQueryDestination {
    return {
      datasetId: isSet(object.datasetId) ? globalThis.String(object.datasetId) : "",
      tableIdPrefix: isSet(object.tableIdPrefix) ? globalThis.String(object.tableIdPrefix) : "",
      tableType: isSet(object.tableType) ? globalThis.String(object.tableType) : "",
    };
  },

  toJSON(message: OutputConfig_BigQueryDestination): unknown {
    const obj: any = {};
    if (message.datasetId !== "") {
      obj.datasetId = message.datasetId;
    }
    if (message.tableIdPrefix !== "") {
      obj.tableIdPrefix = message.tableIdPrefix;
    }
    if (message.tableType !== "") {
      obj.tableType = message.tableType;
    }
    return obj;
  },

  create(base?: DeepPartial<OutputConfig_BigQueryDestination>): OutputConfig_BigQueryDestination {
    return OutputConfig_BigQueryDestination.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OutputConfig_BigQueryDestination>): OutputConfig_BigQueryDestination {
    const message = createBaseOutputConfig_BigQueryDestination();
    message.datasetId = object.datasetId ?? "";
    message.tableIdPrefix = object.tableIdPrefix ?? "";
    message.tableType = object.tableType ?? "";
    return message;
  },
};

function createBaseExportErrorsConfig(): ExportErrorsConfig {
  return { gcsPrefix: undefined };
}

export const ExportErrorsConfig: MessageFns<ExportErrorsConfig> = {
  encode(message: ExportErrorsConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gcsPrefix !== undefined) {
      writer.uint32(10).string(message.gcsPrefix);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExportErrorsConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportErrorsConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gcsPrefix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportErrorsConfig {
    return { gcsPrefix: isSet(object.gcsPrefix) ? globalThis.String(object.gcsPrefix) : undefined };
  },

  toJSON(message: ExportErrorsConfig): unknown {
    const obj: any = {};
    if (message.gcsPrefix !== undefined) {
      obj.gcsPrefix = message.gcsPrefix;
    }
    return obj;
  },

  create(base?: DeepPartial<ExportErrorsConfig>): ExportErrorsConfig {
    return ExportErrorsConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExportErrorsConfig>): ExportErrorsConfig {
    const message = createBaseExportErrorsConfig();
    message.gcsPrefix = object.gcsPrefix ?? undefined;
    return message;
  },
};

function createBaseExportAnalyticsMetricsRequest(): ExportAnalyticsMetricsRequest {
  return { catalog: "", outputConfig: undefined, filter: "" };
}

export const ExportAnalyticsMetricsRequest: MessageFns<ExportAnalyticsMetricsRequest> = {
  encode(message: ExportAnalyticsMetricsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.catalog !== "") {
      writer.uint32(10).string(message.catalog);
    }
    if (message.outputConfig !== undefined) {
      OutputConfig.encode(message.outputConfig, writer.uint32(18).fork()).join();
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExportAnalyticsMetricsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportAnalyticsMetricsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.catalog = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.outputConfig = OutputConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): ExportAnalyticsMetricsRequest {
    return {
      catalog: isSet(object.catalog) ? globalThis.String(object.catalog) : "",
      outputConfig: isSet(object.outputConfig) ? OutputConfig.fromJSON(object.outputConfig) : undefined,
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
    };
  },

  toJSON(message: ExportAnalyticsMetricsRequest): unknown {
    const obj: any = {};
    if (message.catalog !== "") {
      obj.catalog = message.catalog;
    }
    if (message.outputConfig !== undefined) {
      obj.outputConfig = OutputConfig.toJSON(message.outputConfig);
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    return obj;
  },

  create(base?: DeepPartial<ExportAnalyticsMetricsRequest>): ExportAnalyticsMetricsRequest {
    return ExportAnalyticsMetricsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExportAnalyticsMetricsRequest>): ExportAnalyticsMetricsRequest {
    const message = createBaseExportAnalyticsMetricsRequest();
    message.catalog = object.catalog ?? "";
    message.outputConfig = (object.outputConfig !== undefined && object.outputConfig !== null)
      ? OutputConfig.fromPartial(object.outputConfig)
      : undefined;
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseExportMetadata(): ExportMetadata {
  return { createTime: undefined, updateTime: undefined };
}

export const ExportMetadata: MessageFns<ExportMetadata> = {
  encode(message: ExportMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(10).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExportMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportMetadata {
    return {
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: ExportMetadata): unknown {
    const obj: any = {};
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<ExportMetadata>): ExportMetadata {
    return ExportMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExportMetadata>): ExportMetadata {
    const message = createBaseExportMetadata();
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseExportProductsResponse(): ExportProductsResponse {
  return { errorSamples: [], errorsConfig: undefined, outputResult: undefined };
}

export const ExportProductsResponse: MessageFns<ExportProductsResponse> = {
  encode(message: ExportProductsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.errorSamples) {
      Status.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.errorsConfig !== undefined) {
      ExportErrorsConfig.encode(message.errorsConfig, writer.uint32(18).fork()).join();
    }
    if (message.outputResult !== undefined) {
      OutputResult.encode(message.outputResult, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExportProductsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportProductsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.errorSamples.push(Status.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorsConfig = ExportErrorsConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.outputResult = OutputResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportProductsResponse {
    return {
      errorSamples: globalThis.Array.isArray(object?.errorSamples)
        ? object.errorSamples.map((e: any) => Status.fromJSON(e))
        : [],
      errorsConfig: isSet(object.errorsConfig) ? ExportErrorsConfig.fromJSON(object.errorsConfig) : undefined,
      outputResult: isSet(object.outputResult) ? OutputResult.fromJSON(object.outputResult) : undefined,
    };
  },

  toJSON(message: ExportProductsResponse): unknown {
    const obj: any = {};
    if (message.errorSamples?.length) {
      obj.errorSamples = message.errorSamples.map((e) => Status.toJSON(e));
    }
    if (message.errorsConfig !== undefined) {
      obj.errorsConfig = ExportErrorsConfig.toJSON(message.errorsConfig);
    }
    if (message.outputResult !== undefined) {
      obj.outputResult = OutputResult.toJSON(message.outputResult);
    }
    return obj;
  },

  create(base?: DeepPartial<ExportProductsResponse>): ExportProductsResponse {
    return ExportProductsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExportProductsResponse>): ExportProductsResponse {
    const message = createBaseExportProductsResponse();
    message.errorSamples = object.errorSamples?.map((e) => Status.fromPartial(e)) || [];
    message.errorsConfig = (object.errorsConfig !== undefined && object.errorsConfig !== null)
      ? ExportErrorsConfig.fromPartial(object.errorsConfig)
      : undefined;
    message.outputResult = (object.outputResult !== undefined && object.outputResult !== null)
      ? OutputResult.fromPartial(object.outputResult)
      : undefined;
    return message;
  },
};

function createBaseExportUserEventsResponse(): ExportUserEventsResponse {
  return { errorSamples: [], errorsConfig: undefined, outputResult: undefined };
}

export const ExportUserEventsResponse: MessageFns<ExportUserEventsResponse> = {
  encode(message: ExportUserEventsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.errorSamples) {
      Status.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.errorsConfig !== undefined) {
      ExportErrorsConfig.encode(message.errorsConfig, writer.uint32(18).fork()).join();
    }
    if (message.outputResult !== undefined) {
      OutputResult.encode(message.outputResult, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExportUserEventsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportUserEventsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.errorSamples.push(Status.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorsConfig = ExportErrorsConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.outputResult = OutputResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportUserEventsResponse {
    return {
      errorSamples: globalThis.Array.isArray(object?.errorSamples)
        ? object.errorSamples.map((e: any) => Status.fromJSON(e))
        : [],
      errorsConfig: isSet(object.errorsConfig) ? ExportErrorsConfig.fromJSON(object.errorsConfig) : undefined,
      outputResult: isSet(object.outputResult) ? OutputResult.fromJSON(object.outputResult) : undefined,
    };
  },

  toJSON(message: ExportUserEventsResponse): unknown {
    const obj: any = {};
    if (message.errorSamples?.length) {
      obj.errorSamples = message.errorSamples.map((e) => Status.toJSON(e));
    }
    if (message.errorsConfig !== undefined) {
      obj.errorsConfig = ExportErrorsConfig.toJSON(message.errorsConfig);
    }
    if (message.outputResult !== undefined) {
      obj.outputResult = OutputResult.toJSON(message.outputResult);
    }
    return obj;
  },

  create(base?: DeepPartial<ExportUserEventsResponse>): ExportUserEventsResponse {
    return ExportUserEventsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExportUserEventsResponse>): ExportUserEventsResponse {
    const message = createBaseExportUserEventsResponse();
    message.errorSamples = object.errorSamples?.map((e) => Status.fromPartial(e)) || [];
    message.errorsConfig = (object.errorsConfig !== undefined && object.errorsConfig !== null)
      ? ExportErrorsConfig.fromPartial(object.errorsConfig)
      : undefined;
    message.outputResult = (object.outputResult !== undefined && object.outputResult !== null)
      ? OutputResult.fromPartial(object.outputResult)
      : undefined;
    return message;
  },
};

function createBaseExportAnalyticsMetricsResponse(): ExportAnalyticsMetricsResponse {
  return { errorSamples: [], errorsConfig: undefined, outputResult: undefined };
}

export const ExportAnalyticsMetricsResponse: MessageFns<ExportAnalyticsMetricsResponse> = {
  encode(message: ExportAnalyticsMetricsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.errorSamples) {
      Status.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.errorsConfig !== undefined) {
      ExportErrorsConfig.encode(message.errorsConfig, writer.uint32(18).fork()).join();
    }
    if (message.outputResult !== undefined) {
      OutputResult.encode(message.outputResult, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExportAnalyticsMetricsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportAnalyticsMetricsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.errorSamples.push(Status.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorsConfig = ExportErrorsConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.outputResult = OutputResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportAnalyticsMetricsResponse {
    return {
      errorSamples: globalThis.Array.isArray(object?.errorSamples)
        ? object.errorSamples.map((e: any) => Status.fromJSON(e))
        : [],
      errorsConfig: isSet(object.errorsConfig) ? ExportErrorsConfig.fromJSON(object.errorsConfig) : undefined,
      outputResult: isSet(object.outputResult) ? OutputResult.fromJSON(object.outputResult) : undefined,
    };
  },

  toJSON(message: ExportAnalyticsMetricsResponse): unknown {
    const obj: any = {};
    if (message.errorSamples?.length) {
      obj.errorSamples = message.errorSamples.map((e) => Status.toJSON(e));
    }
    if (message.errorsConfig !== undefined) {
      obj.errorsConfig = ExportErrorsConfig.toJSON(message.errorsConfig);
    }
    if (message.outputResult !== undefined) {
      obj.outputResult = OutputResult.toJSON(message.outputResult);
    }
    return obj;
  },

  create(base?: DeepPartial<ExportAnalyticsMetricsResponse>): ExportAnalyticsMetricsResponse {
    return ExportAnalyticsMetricsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExportAnalyticsMetricsResponse>): ExportAnalyticsMetricsResponse {
    const message = createBaseExportAnalyticsMetricsResponse();
    message.errorSamples = object.errorSamples?.map((e) => Status.fromPartial(e)) || [];
    message.errorsConfig = (object.errorsConfig !== undefined && object.errorsConfig !== null)
      ? ExportErrorsConfig.fromPartial(object.errorsConfig)
      : undefined;
    message.outputResult = (object.outputResult !== undefined && object.outputResult !== null)
      ? OutputResult.fromPartial(object.outputResult)
      : undefined;
    return message;
  },
};

function createBaseOutputResult(): OutputResult {
  return { bigqueryResult: [], gcsResult: [] };
}

export const OutputResult: MessageFns<OutputResult> = {
  encode(message: OutputResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.bigqueryResult) {
      BigQueryOutputResult.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.gcsResult) {
      GcsOutputResult.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OutputResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutputResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bigqueryResult.push(BigQueryOutputResult.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gcsResult.push(GcsOutputResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutputResult {
    return {
      bigqueryResult: globalThis.Array.isArray(object?.bigqueryResult)
        ? object.bigqueryResult.map((e: any) => BigQueryOutputResult.fromJSON(e))
        : [],
      gcsResult: globalThis.Array.isArray(object?.gcsResult)
        ? object.gcsResult.map((e: any) => GcsOutputResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OutputResult): unknown {
    const obj: any = {};
    if (message.bigqueryResult?.length) {
      obj.bigqueryResult = message.bigqueryResult.map((e) => BigQueryOutputResult.toJSON(e));
    }
    if (message.gcsResult?.length) {
      obj.gcsResult = message.gcsResult.map((e) => GcsOutputResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<OutputResult>): OutputResult {
    return OutputResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OutputResult>): OutputResult {
    const message = createBaseOutputResult();
    message.bigqueryResult = object.bigqueryResult?.map((e) => BigQueryOutputResult.fromPartial(e)) || [];
    message.gcsResult = object.gcsResult?.map((e) => GcsOutputResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBigQueryOutputResult(): BigQueryOutputResult {
  return { datasetId: "", tableId: "" };
}

export const BigQueryOutputResult: MessageFns<BigQueryOutputResult> = {
  encode(message: BigQueryOutputResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.datasetId !== "") {
      writer.uint32(10).string(message.datasetId);
    }
    if (message.tableId !== "") {
      writer.uint32(18).string(message.tableId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BigQueryOutputResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBigQueryOutputResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.datasetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tableId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BigQueryOutputResult {
    return {
      datasetId: isSet(object.datasetId) ? globalThis.String(object.datasetId) : "",
      tableId: isSet(object.tableId) ? globalThis.String(object.tableId) : "",
    };
  },

  toJSON(message: BigQueryOutputResult): unknown {
    const obj: any = {};
    if (message.datasetId !== "") {
      obj.datasetId = message.datasetId;
    }
    if (message.tableId !== "") {
      obj.tableId = message.tableId;
    }
    return obj;
  },

  create(base?: DeepPartial<BigQueryOutputResult>): BigQueryOutputResult {
    return BigQueryOutputResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BigQueryOutputResult>): BigQueryOutputResult {
    const message = createBaseBigQueryOutputResult();
    message.datasetId = object.datasetId ?? "";
    message.tableId = object.tableId ?? "";
    return message;
  },
};

function createBaseGcsOutputResult(): GcsOutputResult {
  return { outputUri: "" };
}

export const GcsOutputResult: MessageFns<GcsOutputResult> = {
  encode(message: GcsOutputResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.outputUri !== "") {
      writer.uint32(10).string(message.outputUri);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GcsOutputResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGcsOutputResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outputUri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GcsOutputResult {
    return { outputUri: isSet(object.outputUri) ? globalThis.String(object.outputUri) : "" };
  },

  toJSON(message: GcsOutputResult): unknown {
    const obj: any = {};
    if (message.outputUri !== "") {
      obj.outputUri = message.outputUri;
    }
    return obj;
  },

  create(base?: DeepPartial<GcsOutputResult>): GcsOutputResult {
    return GcsOutputResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GcsOutputResult>): GcsOutputResult {
    const message = createBaseGcsOutputResult();
    message.outputUri = object.outputUri ?? "";
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