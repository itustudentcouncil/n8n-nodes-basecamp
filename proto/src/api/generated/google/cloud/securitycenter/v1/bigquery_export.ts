// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v1/bigquery_export.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.securitycenter.v1";

/** Configures how to deliver Findings to BigQuery Instance. */
export interface BigQueryExport {
  /**
   * The relative resource name of this export. See:
   * https://cloud.google.com/apis/design/resource_names#relative_resource_name.
   * Example format:
   * "organizations/{organization_id}/bigQueryExports/{export_id}" Example
   * format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format:
   * "projects/{project_id}/bigQueryExports/{export_id}"
   * This field is provided in responses, and is ignored when provided in create
   * requests.
   */
  name: string;
  /** The description of the export (max of 1024 characters). */
  description: string;
  /**
   * Expression that defines the filter to apply across create/update events
   * of findings. The expression is a list of zero or more restrictions combined
   * via logical operators `AND` and `OR`. Parentheses are supported, and `OR`
   * has higher precedence than `AND`.
   *
   * Restrictions have the form `<field> <operator> <value>` and may have a
   * `-` character in front of them to indicate negation. The fields map to
   * those defined in the corresponding resource.
   *
   * The supported operators are:
   *
   * * `=` for all value types.
   * * `>`, `<`, `>=`, `<=` for integer values.
   * * `:`, meaning substring matching, for strings.
   *
   * The supported value types are:
   *
   * * string literals in quotes.
   * * integer literals without quotes.
   * * boolean literals `true` and `false` without quotes.
   */
  filter: string;
  /**
   * The dataset to write findings' updates to. Its format is
   * "projects/[project_id]/datasets/[bigquery_dataset_id]".
   * BigQuery Dataset unique ID  must contain only letters (a-z, A-Z), numbers
   * (0-9), or underscores (_).
   */
  dataset: string;
  /**
   * Output only. The time at which the BigQuery export was created.
   * This field is set by the server and will be ignored if provided on export
   * on creation.
   */
  createTime:
    | Date
    | undefined;
  /**
   * Output only. The most recent time at which the BigQuery export was updated.
   * This field is set by the server and will be ignored if provided on export
   * creation or update.
   */
  updateTime:
    | Date
    | undefined;
  /**
   * Output only. Email address of the user who last edited the BigQuery export.
   * This field is set by the server and will be ignored if provided on export
   * creation or update.
   */
  mostRecentEditor: string;
  /**
   * Output only. The service account that needs permission to create table and
   * upload data to the BigQuery dataset.
   */
  principal: string;
}

function createBaseBigQueryExport(): BigQueryExport {
  return {
    name: "",
    description: "",
    filter: "",
    dataset: "",
    createTime: undefined,
    updateTime: undefined,
    mostRecentEditor: "",
    principal: "",
  };
}

export const BigQueryExport: MessageFns<BigQueryExport> = {
  encode(message: BigQueryExport, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    if (message.dataset !== "") {
      writer.uint32(34).string(message.dataset);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).join();
    }
    if (message.mostRecentEditor !== "") {
      writer.uint32(58).string(message.mostRecentEditor);
    }
    if (message.principal !== "") {
      writer.uint32(66).string(message.principal);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BigQueryExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBigQueryExport();
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

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dataset = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mostRecentEditor = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.principal = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BigQueryExport {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      dataset: isSet(object.dataset) ? globalThis.String(object.dataset) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      mostRecentEditor: isSet(object.mostRecentEditor) ? globalThis.String(object.mostRecentEditor) : "",
      principal: isSet(object.principal) ? globalThis.String(object.principal) : "",
    };
  },

  toJSON(message: BigQueryExport): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.dataset !== "") {
      obj.dataset = message.dataset;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.mostRecentEditor !== "") {
      obj.mostRecentEditor = message.mostRecentEditor;
    }
    if (message.principal !== "") {
      obj.principal = message.principal;
    }
    return obj;
  },

  create(base?: DeepPartial<BigQueryExport>): BigQueryExport {
    return BigQueryExport.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BigQueryExport>): BigQueryExport {
    const message = createBaseBigQueryExport();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.filter = object.filter ?? "";
    message.dataset = object.dataset ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.mostRecentEditor = object.mostRecentEditor ?? "";
    message.principal = object.principal ?? "";
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