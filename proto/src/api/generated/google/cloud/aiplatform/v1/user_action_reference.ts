// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1/user_action_reference.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.aiplatform.v1";

/**
 * References an API call. It contains more information about long running
 * operation and Jobs that are triggered by the API call.
 */
export interface UserActionReference {
  /**
   * For API calls that return a long running operation.
   * Resource name of the long running operation.
   * Format:
   * `projects/{project}/locations/{location}/operations/{operation}`
   */
  operation?:
    | string
    | undefined;
  /**
   * For API calls that start a LabelingJob.
   * Resource name of the LabelingJob.
   * Format:
   * `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}`
   */
  dataLabelingJob?:
    | string
    | undefined;
  /**
   * The method name of the API RPC call. For example,
   * "/google.cloud.aiplatform.{apiVersion}.DatasetService.CreateDataset"
   */
  method: string;
}

function createBaseUserActionReference(): UserActionReference {
  return { operation: undefined, dataLabelingJob: undefined, method: "" };
}

export const UserActionReference: MessageFns<UserActionReference> = {
  encode(message: UserActionReference, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.operation !== undefined) {
      writer.uint32(10).string(message.operation);
    }
    if (message.dataLabelingJob !== undefined) {
      writer.uint32(18).string(message.dataLabelingJob);
    }
    if (message.method !== "") {
      writer.uint32(26).string(message.method);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserActionReference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserActionReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operation = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dataLabelingJob = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.method = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserActionReference {
    return {
      operation: isSet(object.operation) ? globalThis.String(object.operation) : undefined,
      dataLabelingJob: isSet(object.dataLabelingJob) ? globalThis.String(object.dataLabelingJob) : undefined,
      method: isSet(object.method) ? globalThis.String(object.method) : "",
    };
  },

  toJSON(message: UserActionReference): unknown {
    const obj: any = {};
    if (message.operation !== undefined) {
      obj.operation = message.operation;
    }
    if (message.dataLabelingJob !== undefined) {
      obj.dataLabelingJob = message.dataLabelingJob;
    }
    if (message.method !== "") {
      obj.method = message.method;
    }
    return obj;
  },

  create(base?: DeepPartial<UserActionReference>): UserActionReference {
    return UserActionReference.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserActionReference>): UserActionReference {
    const message = createBaseUserActionReference();
    message.operation = object.operation ?? undefined;
    message.dataLabelingJob = object.dataLabelingJob ?? undefined;
    message.method = object.method ?? "";
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