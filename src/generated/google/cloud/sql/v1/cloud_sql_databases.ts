// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/sql/v1/cloud_sql_databases.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Database, Operation } from "./cloud_sql_resources.js";

export const protobufPackage = "google.cloud.sql.v1";

/** Database delete request. */
export interface SqlDatabasesDeleteRequest {
  /** Name of the database to be deleted in the instance. */
  database: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Project ID of the project that contains the instance. */
  project: string;
}

/** Database get request. */
export interface SqlDatabasesGetRequest {
  /** Name of the database in the instance. */
  database: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Project ID of the project that contains the instance. */
  project: string;
}

/** Database insert request. */
export interface SqlDatabasesInsertRequest {
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Project ID of the project that contains the instance. */
  project: string;
  body: Database | undefined;
}

/** Database list request. */
export interface SqlDatabasesListRequest {
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Project ID of the project that contains the instance. */
  project: string;
}

/** Database update request. */
export interface SqlDatabasesUpdateRequest {
  /** Name of the database to be updated in the instance. */
  database: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Project ID of the project that contains the instance. */
  project: string;
  body: Database | undefined;
}

/** Database list response. */
export interface DatabasesListResponse {
  /** This is always `sql#databasesList`. */
  kind: string;
  /** List of database resources in the instance. */
  items: Database[];
}

function createBaseSqlDatabasesDeleteRequest(): SqlDatabasesDeleteRequest {
  return { database: "", instance: "", project: "" };
}

export const SqlDatabasesDeleteRequest: MessageFns<SqlDatabasesDeleteRequest> = {
  encode(message: SqlDatabasesDeleteRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.database !== "") {
      writer.uint32(10).string(message.database);
    }
    if (message.instance !== "") {
      writer.uint32(18).string(message.instance);
    }
    if (message.project !== "") {
      writer.uint32(26).string(message.project);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SqlDatabasesDeleteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSqlDatabasesDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.database = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instance = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.project = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SqlDatabasesDeleteRequest {
    return {
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      instance: isSet(object.instance) ? globalThis.String(object.instance) : "",
      project: isSet(object.project) ? globalThis.String(object.project) : "",
    };
  },

  toJSON(message: SqlDatabasesDeleteRequest): unknown {
    const obj: any = {};
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.instance !== "") {
      obj.instance = message.instance;
    }
    if (message.project !== "") {
      obj.project = message.project;
    }
    return obj;
  },

  create(base?: DeepPartial<SqlDatabasesDeleteRequest>): SqlDatabasesDeleteRequest {
    return SqlDatabasesDeleteRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SqlDatabasesDeleteRequest>): SqlDatabasesDeleteRequest {
    const message = createBaseSqlDatabasesDeleteRequest();
    message.database = object.database ?? "";
    message.instance = object.instance ?? "";
    message.project = object.project ?? "";
    return message;
  },
};

function createBaseSqlDatabasesGetRequest(): SqlDatabasesGetRequest {
  return { database: "", instance: "", project: "" };
}

export const SqlDatabasesGetRequest: MessageFns<SqlDatabasesGetRequest> = {
  encode(message: SqlDatabasesGetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.database !== "") {
      writer.uint32(10).string(message.database);
    }
    if (message.instance !== "") {
      writer.uint32(18).string(message.instance);
    }
    if (message.project !== "") {
      writer.uint32(26).string(message.project);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SqlDatabasesGetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSqlDatabasesGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.database = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instance = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.project = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SqlDatabasesGetRequest {
    return {
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      instance: isSet(object.instance) ? globalThis.String(object.instance) : "",
      project: isSet(object.project) ? globalThis.String(object.project) : "",
    };
  },

  toJSON(message: SqlDatabasesGetRequest): unknown {
    const obj: any = {};
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.instance !== "") {
      obj.instance = message.instance;
    }
    if (message.project !== "") {
      obj.project = message.project;
    }
    return obj;
  },

  create(base?: DeepPartial<SqlDatabasesGetRequest>): SqlDatabasesGetRequest {
    return SqlDatabasesGetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SqlDatabasesGetRequest>): SqlDatabasesGetRequest {
    const message = createBaseSqlDatabasesGetRequest();
    message.database = object.database ?? "";
    message.instance = object.instance ?? "";
    message.project = object.project ?? "";
    return message;
  },
};

function createBaseSqlDatabasesInsertRequest(): SqlDatabasesInsertRequest {
  return { instance: "", project: "", body: undefined };
}

export const SqlDatabasesInsertRequest: MessageFns<SqlDatabasesInsertRequest> = {
  encode(message: SqlDatabasesInsertRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.instance !== "") {
      writer.uint32(10).string(message.instance);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    if (message.body !== undefined) {
      Database.encode(message.body, writer.uint32(802).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SqlDatabasesInsertRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSqlDatabasesInsertRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instance = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.project = reader.string();
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }

          message.body = Database.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SqlDatabasesInsertRequest {
    return {
      instance: isSet(object.instance) ? globalThis.String(object.instance) : "",
      project: isSet(object.project) ? globalThis.String(object.project) : "",
      body: isSet(object.body) ? Database.fromJSON(object.body) : undefined,
    };
  },

  toJSON(message: SqlDatabasesInsertRequest): unknown {
    const obj: any = {};
    if (message.instance !== "") {
      obj.instance = message.instance;
    }
    if (message.project !== "") {
      obj.project = message.project;
    }
    if (message.body !== undefined) {
      obj.body = Database.toJSON(message.body);
    }
    return obj;
  },

  create(base?: DeepPartial<SqlDatabasesInsertRequest>): SqlDatabasesInsertRequest {
    return SqlDatabasesInsertRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SqlDatabasesInsertRequest>): SqlDatabasesInsertRequest {
    const message = createBaseSqlDatabasesInsertRequest();
    message.instance = object.instance ?? "";
    message.project = object.project ?? "";
    message.body = (object.body !== undefined && object.body !== null) ? Database.fromPartial(object.body) : undefined;
    return message;
  },
};

function createBaseSqlDatabasesListRequest(): SqlDatabasesListRequest {
  return { instance: "", project: "" };
}

export const SqlDatabasesListRequest: MessageFns<SqlDatabasesListRequest> = {
  encode(message: SqlDatabasesListRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.instance !== "") {
      writer.uint32(10).string(message.instance);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SqlDatabasesListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSqlDatabasesListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instance = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.project = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SqlDatabasesListRequest {
    return {
      instance: isSet(object.instance) ? globalThis.String(object.instance) : "",
      project: isSet(object.project) ? globalThis.String(object.project) : "",
    };
  },

  toJSON(message: SqlDatabasesListRequest): unknown {
    const obj: any = {};
    if (message.instance !== "") {
      obj.instance = message.instance;
    }
    if (message.project !== "") {
      obj.project = message.project;
    }
    return obj;
  },

  create(base?: DeepPartial<SqlDatabasesListRequest>): SqlDatabasesListRequest {
    return SqlDatabasesListRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SqlDatabasesListRequest>): SqlDatabasesListRequest {
    const message = createBaseSqlDatabasesListRequest();
    message.instance = object.instance ?? "";
    message.project = object.project ?? "";
    return message;
  },
};

function createBaseSqlDatabasesUpdateRequest(): SqlDatabasesUpdateRequest {
  return { database: "", instance: "", project: "", body: undefined };
}

export const SqlDatabasesUpdateRequest: MessageFns<SqlDatabasesUpdateRequest> = {
  encode(message: SqlDatabasesUpdateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.database !== "") {
      writer.uint32(10).string(message.database);
    }
    if (message.instance !== "") {
      writer.uint32(18).string(message.instance);
    }
    if (message.project !== "") {
      writer.uint32(26).string(message.project);
    }
    if (message.body !== undefined) {
      Database.encode(message.body, writer.uint32(802).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SqlDatabasesUpdateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSqlDatabasesUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.database = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instance = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.project = reader.string();
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }

          message.body = Database.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SqlDatabasesUpdateRequest {
    return {
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      instance: isSet(object.instance) ? globalThis.String(object.instance) : "",
      project: isSet(object.project) ? globalThis.String(object.project) : "",
      body: isSet(object.body) ? Database.fromJSON(object.body) : undefined,
    };
  },

  toJSON(message: SqlDatabasesUpdateRequest): unknown {
    const obj: any = {};
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.instance !== "") {
      obj.instance = message.instance;
    }
    if (message.project !== "") {
      obj.project = message.project;
    }
    if (message.body !== undefined) {
      obj.body = Database.toJSON(message.body);
    }
    return obj;
  },

  create(base?: DeepPartial<SqlDatabasesUpdateRequest>): SqlDatabasesUpdateRequest {
    return SqlDatabasesUpdateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SqlDatabasesUpdateRequest>): SqlDatabasesUpdateRequest {
    const message = createBaseSqlDatabasesUpdateRequest();
    message.database = object.database ?? "";
    message.instance = object.instance ?? "";
    message.project = object.project ?? "";
    message.body = (object.body !== undefined && object.body !== null) ? Database.fromPartial(object.body) : undefined;
    return message;
  },
};

function createBaseDatabasesListResponse(): DatabasesListResponse {
  return { kind: "", items: [] };
}

export const DatabasesListResponse: MessageFns<DatabasesListResponse> = {
  encode(message: DatabasesListResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    for (const v of message.items) {
      Database.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DatabasesListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabasesListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.items.push(Database.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DatabasesListResponse {
    return {
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => Database.fromJSON(e)) : [],
    };
  },

  toJSON(message: DatabasesListResponse): unknown {
    const obj: any = {};
    if (message.kind !== "") {
      obj.kind = message.kind;
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => Database.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DatabasesListResponse>): DatabasesListResponse {
    return DatabasesListResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DatabasesListResponse>): DatabasesListResponse {
    const message = createBaseDatabasesListResponse();
    message.kind = object.kind ?? "";
    message.items = object.items?.map((e) => Database.fromPartial(e)) || [];
    return message;
  },
};

/** Service to manage databases. */
export type SqlDatabasesServiceDefinition = typeof SqlDatabasesServiceDefinition;
export const SqlDatabasesServiceDefinition = {
  name: "SqlDatabasesService",
  fullName: "google.cloud.sql.v1.SqlDatabasesService",
  methods: {
    /** Deletes a database from a Cloud SQL instance. */
    delete: {
      name: "Delete",
      requestType: SqlDatabasesDeleteRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              66,
              42,
              64,
              47,
              118,
              49,
              47,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              123,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              125,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              125,
              47,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              115,
              47,
              123,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Retrieves a resource containing information about a database inside a Cloud
     * SQL instance.
     */
    get: {
      name: "Get",
      requestType: SqlDatabasesGetRequest,
      requestStream: false,
      responseType: Database,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              66,
              18,
              64,
              47,
              118,
              49,
              47,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              123,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              125,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              125,
              47,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              115,
              47,
              123,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Inserts a resource containing information about a database inside a Cloud
     * SQL instance.
     *
     * **Note:** You can't modify the default character set and collation.
     */
    insert: {
      name: "Insert",
      requestType: SqlDatabasesInsertRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              61,
              58,
              4,
              98,
              111,
              100,
              121,
              34,
              53,
              47,
              118,
              49,
              47,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              123,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              125,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              125,
              47,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              115,
            ]),
          ],
        },
      },
    },
    /** Lists databases in the specified Cloud SQL instance. */
    list: {
      name: "List",
      requestType: SqlDatabasesListRequest,
      requestStream: false,
      responseType: DatabasesListResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              55,
              18,
              53,
              47,
              118,
              49,
              47,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              123,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              125,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              125,
              47,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              115,
            ]),
          ],
        },
      },
    },
    /**
     * Partially updates a resource containing information about a database inside
     * a Cloud SQL instance. This method supports patch semantics.
     */
    patch: {
      name: "Patch",
      requestType: SqlDatabasesUpdateRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              72,
              58,
              4,
              98,
              111,
              100,
              121,
              50,
              64,
              47,
              118,
              49,
              47,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              123,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              125,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              125,
              47,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              115,
              47,
              123,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Updates a resource containing information about a database inside a Cloud
     * SQL instance.
     */
    update: {
      name: "Update",
      requestType: SqlDatabasesUpdateRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              72,
              58,
              4,
              98,
              111,
              100,
              121,
              26,
              64,
              47,
              118,
              49,
              47,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              123,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              125,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              125,
              47,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              115,
              47,
              123,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface SqlDatabasesServiceImplementation<CallContextExt = {}> {
  /** Deletes a database from a Cloud SQL instance. */
  delete(request: SqlDatabasesDeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Operation>>;
  /**
   * Retrieves a resource containing information about a database inside a Cloud
   * SQL instance.
   */
  get(request: SqlDatabasesGetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Database>>;
  /**
   * Inserts a resource containing information about a database inside a Cloud
   * SQL instance.
   *
   * **Note:** You can't modify the default character set and collation.
   */
  insert(request: SqlDatabasesInsertRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Operation>>;
  /** Lists databases in the specified Cloud SQL instance. */
  list(
    request: SqlDatabasesListRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<DatabasesListResponse>>;
  /**
   * Partially updates a resource containing information about a database inside
   * a Cloud SQL instance. This method supports patch semantics.
   */
  patch(request: SqlDatabasesUpdateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Operation>>;
  /**
   * Updates a resource containing information about a database inside a Cloud
   * SQL instance.
   */
  update(request: SqlDatabasesUpdateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Operation>>;
}

export interface SqlDatabasesServiceClient<CallOptionsExt = {}> {
  /** Deletes a database from a Cloud SQL instance. */
  delete(request: DeepPartial<SqlDatabasesDeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<Operation>;
  /**
   * Retrieves a resource containing information about a database inside a Cloud
   * SQL instance.
   */
  get(request: DeepPartial<SqlDatabasesGetRequest>, options?: CallOptions & CallOptionsExt): Promise<Database>;
  /**
   * Inserts a resource containing information about a database inside a Cloud
   * SQL instance.
   *
   * **Note:** You can't modify the default character set and collation.
   */
  insert(request: DeepPartial<SqlDatabasesInsertRequest>, options?: CallOptions & CallOptionsExt): Promise<Operation>;
  /** Lists databases in the specified Cloud SQL instance. */
  list(
    request: DeepPartial<SqlDatabasesListRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<DatabasesListResponse>;
  /**
   * Partially updates a resource containing information about a database inside
   * a Cloud SQL instance. This method supports patch semantics.
   */
  patch(request: DeepPartial<SqlDatabasesUpdateRequest>, options?: CallOptions & CallOptionsExt): Promise<Operation>;
  /**
   * Updates a resource containing information about a database inside a Cloud
   * SQL instance.
   */
  update(request: DeepPartial<SqlDatabasesUpdateRequest>, options?: CallOptions & CallOptionsExt): Promise<Operation>;
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
