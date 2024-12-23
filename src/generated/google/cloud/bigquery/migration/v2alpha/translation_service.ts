// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/bigquery/migration/v2alpha/translation_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";

export const protobufPackage = "google.cloud.bigquery.migration.v2alpha";

/** The request of translating a SQL query to Standard SQL. */
export interface TranslateQueryRequest {
  /**
   * Required. The name of the project to which this translation request belongs.
   * Example: `projects/foo/locations/bar`
   */
  parent: string;
  /** Required. The source SQL dialect of `queries`. */
  sourceDialect: TranslateQueryRequest_SqlTranslationSourceDialect;
  /** Required. The query to be translated. */
  query: string;
}

/** Supported SQL translation source dialects. */
export enum TranslateQueryRequest_SqlTranslationSourceDialect {
  /** SQL_TRANSLATION_SOURCE_DIALECT_UNSPECIFIED - SqlTranslationSourceDialect not specified. */
  SQL_TRANSLATION_SOURCE_DIALECT_UNSPECIFIED = 0,
  /** TERADATA - Teradata SQL. */
  TERADATA = 1,
  UNRECOGNIZED = -1,
}

export function translateQueryRequest_SqlTranslationSourceDialectFromJSON(
  object: any,
): TranslateQueryRequest_SqlTranslationSourceDialect {
  switch (object) {
    case 0:
    case "SQL_TRANSLATION_SOURCE_DIALECT_UNSPECIFIED":
      return TranslateQueryRequest_SqlTranslationSourceDialect.SQL_TRANSLATION_SOURCE_DIALECT_UNSPECIFIED;
    case 1:
    case "TERADATA":
      return TranslateQueryRequest_SqlTranslationSourceDialect.TERADATA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TranslateQueryRequest_SqlTranslationSourceDialect.UNRECOGNIZED;
  }
}

export function translateQueryRequest_SqlTranslationSourceDialectToJSON(
  object: TranslateQueryRequest_SqlTranslationSourceDialect,
): string {
  switch (object) {
    case TranslateQueryRequest_SqlTranslationSourceDialect.SQL_TRANSLATION_SOURCE_DIALECT_UNSPECIFIED:
      return "SQL_TRANSLATION_SOURCE_DIALECT_UNSPECIFIED";
    case TranslateQueryRequest_SqlTranslationSourceDialect.TERADATA:
      return "TERADATA";
    case TranslateQueryRequest_SqlTranslationSourceDialect.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** The response of translating a SQL query to Standard SQL. */
export interface TranslateQueryResponse {
  /**
   * Output only. Immutable. The unique identifier for the SQL translation job.
   * Example: `projects/123/locations/us/translation/1234`
   */
  translationJob: string;
  /** The translated result. This will be empty if the translation fails. */
  translatedQuery: string;
  /** The list of errors encountered during the translation, if present. */
  errors: SqlTranslationError[];
  /**
   * The list of warnings encountered during the translation, if present,
   * indicates non-semantically correct translation.
   */
  warnings: SqlTranslationWarning[];
}

/**
 * Structured error object capturing the error message and the location in the
 * source text where the error occurs.
 */
export interface SqlTranslationErrorDetail {
  /** Specifies the row from the source text where the error occurred. */
  row: Long;
  /** Specifie the column from the source texts where the error occurred. */
  column: Long;
  /** A human-readable description of the error. */
  message: string;
}

/** The detailed error object if the SQL translation job fails. */
export interface SqlTranslationError {
  /** The type of SQL translation error. */
  errorType: SqlTranslationError_SqlTranslationErrorType;
  /**
   * Specifies the details of the error, including the error message and
   * location from the source text.
   */
  errorDetail: SqlTranslationErrorDetail | undefined;
}

/** The error type of the SQL translation job. */
export enum SqlTranslationError_SqlTranslationErrorType {
  /** SQL_TRANSLATION_ERROR_TYPE_UNSPECIFIED - SqlTranslationErrorType not specified. */
  SQL_TRANSLATION_ERROR_TYPE_UNSPECIFIED = 0,
  /** SQL_PARSE_ERROR - Failed to parse the input text as a SQL query. */
  SQL_PARSE_ERROR = 1,
  /**
   * UNSUPPORTED_SQL_FUNCTION - Found unsupported functions in the input SQL query that are not able to
   * translate.
   */
  UNSUPPORTED_SQL_FUNCTION = 2,
  UNRECOGNIZED = -1,
}

export function sqlTranslationError_SqlTranslationErrorTypeFromJSON(
  object: any,
): SqlTranslationError_SqlTranslationErrorType {
  switch (object) {
    case 0:
    case "SQL_TRANSLATION_ERROR_TYPE_UNSPECIFIED":
      return SqlTranslationError_SqlTranslationErrorType.SQL_TRANSLATION_ERROR_TYPE_UNSPECIFIED;
    case 1:
    case "SQL_PARSE_ERROR":
      return SqlTranslationError_SqlTranslationErrorType.SQL_PARSE_ERROR;
    case 2:
    case "UNSUPPORTED_SQL_FUNCTION":
      return SqlTranslationError_SqlTranslationErrorType.UNSUPPORTED_SQL_FUNCTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SqlTranslationError_SqlTranslationErrorType.UNRECOGNIZED;
  }
}

export function sqlTranslationError_SqlTranslationErrorTypeToJSON(
  object: SqlTranslationError_SqlTranslationErrorType,
): string {
  switch (object) {
    case SqlTranslationError_SqlTranslationErrorType.SQL_TRANSLATION_ERROR_TYPE_UNSPECIFIED:
      return "SQL_TRANSLATION_ERROR_TYPE_UNSPECIFIED";
    case SqlTranslationError_SqlTranslationErrorType.SQL_PARSE_ERROR:
      return "SQL_PARSE_ERROR";
    case SqlTranslationError_SqlTranslationErrorType.UNSUPPORTED_SQL_FUNCTION:
      return "UNSUPPORTED_SQL_FUNCTION";
    case SqlTranslationError_SqlTranslationErrorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * The detailed warning object if the SQL translation job is completed but not
 * semantically correct.
 */
export interface SqlTranslationWarning {
  /**
   * Specifies the details of the warning, including the warning message and
   * location from the source text.
   */
  warningDetail: SqlTranslationErrorDetail | undefined;
}

function createBaseTranslateQueryRequest(): TranslateQueryRequest {
  return { parent: "", sourceDialect: 0, query: "" };
}

export const TranslateQueryRequest: MessageFns<TranslateQueryRequest> = {
  encode(message: TranslateQueryRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.sourceDialect !== 0) {
      writer.uint32(16).int32(message.sourceDialect);
    }
    if (message.query !== "") {
      writer.uint32(26).string(message.query);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TranslateQueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslateQueryRequest();
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

          message.sourceDialect = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.query = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TranslateQueryRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      sourceDialect: isSet(object.sourceDialect)
        ? translateQueryRequest_SqlTranslationSourceDialectFromJSON(object.sourceDialect)
        : 0,
      query: isSet(object.query) ? globalThis.String(object.query) : "",
    };
  },

  toJSON(message: TranslateQueryRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.sourceDialect !== 0) {
      obj.sourceDialect = translateQueryRequest_SqlTranslationSourceDialectToJSON(message.sourceDialect);
    }
    if (message.query !== "") {
      obj.query = message.query;
    }
    return obj;
  },

  create(base?: DeepPartial<TranslateQueryRequest>): TranslateQueryRequest {
    return TranslateQueryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TranslateQueryRequest>): TranslateQueryRequest {
    const message = createBaseTranslateQueryRequest();
    message.parent = object.parent ?? "";
    message.sourceDialect = object.sourceDialect ?? 0;
    message.query = object.query ?? "";
    return message;
  },
};

function createBaseTranslateQueryResponse(): TranslateQueryResponse {
  return { translationJob: "", translatedQuery: "", errors: [], warnings: [] };
}

export const TranslateQueryResponse: MessageFns<TranslateQueryResponse> = {
  encode(message: TranslateQueryResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.translationJob !== "") {
      writer.uint32(34).string(message.translationJob);
    }
    if (message.translatedQuery !== "") {
      writer.uint32(10).string(message.translatedQuery);
    }
    for (const v of message.errors) {
      SqlTranslationError.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.warnings) {
      SqlTranslationWarning.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TranslateQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTranslateQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.translationJob = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.translatedQuery = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errors.push(SqlTranslationError.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.warnings.push(SqlTranslationWarning.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TranslateQueryResponse {
    return {
      translationJob: isSet(object.translationJob) ? globalThis.String(object.translationJob) : "",
      translatedQuery: isSet(object.translatedQuery) ? globalThis.String(object.translatedQuery) : "",
      errors: globalThis.Array.isArray(object?.errors)
        ? object.errors.map((e: any) => SqlTranslationError.fromJSON(e))
        : [],
      warnings: globalThis.Array.isArray(object?.warnings)
        ? object.warnings.map((e: any) => SqlTranslationWarning.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TranslateQueryResponse): unknown {
    const obj: any = {};
    if (message.translationJob !== "") {
      obj.translationJob = message.translationJob;
    }
    if (message.translatedQuery !== "") {
      obj.translatedQuery = message.translatedQuery;
    }
    if (message.errors?.length) {
      obj.errors = message.errors.map((e) => SqlTranslationError.toJSON(e));
    }
    if (message.warnings?.length) {
      obj.warnings = message.warnings.map((e) => SqlTranslationWarning.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TranslateQueryResponse>): TranslateQueryResponse {
    return TranslateQueryResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TranslateQueryResponse>): TranslateQueryResponse {
    const message = createBaseTranslateQueryResponse();
    message.translationJob = object.translationJob ?? "";
    message.translatedQuery = object.translatedQuery ?? "";
    message.errors = object.errors?.map((e) => SqlTranslationError.fromPartial(e)) || [];
    message.warnings = object.warnings?.map((e) => SqlTranslationWarning.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSqlTranslationErrorDetail(): SqlTranslationErrorDetail {
  return { row: Long.ZERO, column: Long.ZERO, message: "" };
}

export const SqlTranslationErrorDetail: MessageFns<SqlTranslationErrorDetail> = {
  encode(message: SqlTranslationErrorDetail, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.row.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.row.toString());
    }
    if (!message.column.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.column.toString());
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SqlTranslationErrorDetail {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSqlTranslationErrorDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.row = Long.fromString(reader.int64().toString());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.column = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SqlTranslationErrorDetail {
    return {
      row: isSet(object.row) ? Long.fromValue(object.row) : Long.ZERO,
      column: isSet(object.column) ? Long.fromValue(object.column) : Long.ZERO,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: SqlTranslationErrorDetail): unknown {
    const obj: any = {};
    if (!message.row.equals(Long.ZERO)) {
      obj.row = (message.row || Long.ZERO).toString();
    }
    if (!message.column.equals(Long.ZERO)) {
      obj.column = (message.column || Long.ZERO).toString();
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create(base?: DeepPartial<SqlTranslationErrorDetail>): SqlTranslationErrorDetail {
    return SqlTranslationErrorDetail.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SqlTranslationErrorDetail>): SqlTranslationErrorDetail {
    const message = createBaseSqlTranslationErrorDetail();
    message.row = (object.row !== undefined && object.row !== null) ? Long.fromValue(object.row) : Long.ZERO;
    message.column = (object.column !== undefined && object.column !== null)
      ? Long.fromValue(object.column)
      : Long.ZERO;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseSqlTranslationError(): SqlTranslationError {
  return { errorType: 0, errorDetail: undefined };
}

export const SqlTranslationError: MessageFns<SqlTranslationError> = {
  encode(message: SqlTranslationError, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.errorType !== 0) {
      writer.uint32(8).int32(message.errorType);
    }
    if (message.errorDetail !== undefined) {
      SqlTranslationErrorDetail.encode(message.errorDetail, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SqlTranslationError {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSqlTranslationError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.errorType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorDetail = SqlTranslationErrorDetail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SqlTranslationError {
    return {
      errorType: isSet(object.errorType) ? sqlTranslationError_SqlTranslationErrorTypeFromJSON(object.errorType) : 0,
      errorDetail: isSet(object.errorDetail) ? SqlTranslationErrorDetail.fromJSON(object.errorDetail) : undefined,
    };
  },

  toJSON(message: SqlTranslationError): unknown {
    const obj: any = {};
    if (message.errorType !== 0) {
      obj.errorType = sqlTranslationError_SqlTranslationErrorTypeToJSON(message.errorType);
    }
    if (message.errorDetail !== undefined) {
      obj.errorDetail = SqlTranslationErrorDetail.toJSON(message.errorDetail);
    }
    return obj;
  },

  create(base?: DeepPartial<SqlTranslationError>): SqlTranslationError {
    return SqlTranslationError.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SqlTranslationError>): SqlTranslationError {
    const message = createBaseSqlTranslationError();
    message.errorType = object.errorType ?? 0;
    message.errorDetail = (object.errorDetail !== undefined && object.errorDetail !== null)
      ? SqlTranslationErrorDetail.fromPartial(object.errorDetail)
      : undefined;
    return message;
  },
};

function createBaseSqlTranslationWarning(): SqlTranslationWarning {
  return { warningDetail: undefined };
}

export const SqlTranslationWarning: MessageFns<SqlTranslationWarning> = {
  encode(message: SqlTranslationWarning, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.warningDetail !== undefined) {
      SqlTranslationErrorDetail.encode(message.warningDetail, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SqlTranslationWarning {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSqlTranslationWarning();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.warningDetail = SqlTranslationErrorDetail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SqlTranslationWarning {
    return {
      warningDetail: isSet(object.warningDetail) ? SqlTranslationErrorDetail.fromJSON(object.warningDetail) : undefined,
    };
  },

  toJSON(message: SqlTranslationWarning): unknown {
    const obj: any = {};
    if (message.warningDetail !== undefined) {
      obj.warningDetail = SqlTranslationErrorDetail.toJSON(message.warningDetail);
    }
    return obj;
  },

  create(base?: DeepPartial<SqlTranslationWarning>): SqlTranslationWarning {
    return SqlTranslationWarning.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SqlTranslationWarning>): SqlTranslationWarning {
    const message = createBaseSqlTranslationWarning();
    message.warningDetail = (object.warningDetail !== undefined && object.warningDetail !== null)
      ? SqlTranslationErrorDetail.fromPartial(object.warningDetail)
      : undefined;
    return message;
  },
};

/** Provides other SQL dialects to GoogleSQL translation operations. */
export type SqlTranslationServiceDefinition = typeof SqlTranslationServiceDefinition;
export const SqlTranslationServiceDefinition = {
  name: "SqlTranslationService",
  fullName: "google.cloud.bigquery.migration.v2alpha.SqlTranslationService",
  methods: {
    /** Translates input queries from source dialects to GoogleSQL. */
    translateQuery: {
      name: "TranslateQuery",
      requestType: TranslateQueryRequest,
      requestStream: false,
      responseType: TranslateQueryResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              27,
              112,
              97,
              114,
              101,
              110,
              116,
              44,
              115,
              111,
              117,
              114,
              99,
              101,
              95,
              100,
              105,
              97,
              108,
              101,
              99,
              116,
              44,
              113,
              117,
              101,
              114,
              121,
            ]),
          ],
          578365826: [
            Buffer.from([
              60,
              58,
              1,
              42,
              34,
              55,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              58,
              116,
              114,
              97,
              110,
              115,
              108,
              97,
              116,
              101,
              81,
              117,
              101,
              114,
              121,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface SqlTranslationServiceImplementation<CallContextExt = {}> {
  /** Translates input queries from source dialects to GoogleSQL. */
  translateQuery(
    request: TranslateQueryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TranslateQueryResponse>>;
}

export interface SqlTranslationServiceClient<CallOptionsExt = {}> {
  /** Translates input queries from source dialects to GoogleSQL. */
  translateQuery(
    request: DeepPartial<TranslateQueryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TranslateQueryResponse>;
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
