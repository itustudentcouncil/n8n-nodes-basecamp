// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/bigquery/v2/job_reference.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { StringValue } from "../../../protobuf/wrappers.js";

export const protobufPackage = "google.cloud.bigquery.v2";

/** A job reference is a fully qualified identifier for referring to a job. */
export interface JobReference {
  /** Required. The ID of the project containing this job. */
  projectId: string;
  /**
   * Required. The ID of the job. The ID must contain only letters (a-z, A-Z),
   * numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024
   * characters.
   */
  jobId: string;
  /**
   * Optional. The geographic location of the job. The default value is US.
   *
   * For more information about BigQuery locations, see:
   * https://cloud.google.com/bigquery/docs/locations
   */
  location:
    | string
    | undefined;
  /** This field should not be used. */
  locationAlternative: string[];
}

function createBaseJobReference(): JobReference {
  return { projectId: "", jobId: "", location: undefined, locationAlternative: [] };
}

export const JobReference: MessageFns<JobReference> = {
  encode(message: JobReference, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.jobId !== "") {
      writer.uint32(18).string(message.jobId);
    }
    if (message.location !== undefined) {
      StringValue.encode({ value: message.location! }, writer.uint32(26).fork()).join();
    }
    for (const v of message.locationAlternative) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): JobReference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jobId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.location = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.locationAlternative.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JobReference {
    return {
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      location: isSet(object.location) ? String(object.location) : undefined,
      locationAlternative: globalThis.Array.isArray(object?.locationAlternative)
        ? object.locationAlternative.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: JobReference): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.location !== undefined) {
      obj.location = message.location;
    }
    if (message.locationAlternative?.length) {
      obj.locationAlternative = message.locationAlternative;
    }
    return obj;
  },

  create(base?: DeepPartial<JobReference>): JobReference {
    return JobReference.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<JobReference>): JobReference {
    const message = createBaseJobReference();
    message.projectId = object.projectId ?? "";
    message.jobId = object.jobId ?? "";
    message.location = object.location ?? undefined;
    message.locationAlternative = object.locationAlternative?.map((e) => e) || [];
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