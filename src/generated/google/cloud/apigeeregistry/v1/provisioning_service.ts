// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/apigeeregistry/v1/provisioning_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Operation } from "../../../longrunning/operations.js";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.apigeeregistry.v1";

/** Request message for CreateInstance. */
export interface CreateInstanceRequest {
  /** Required. Parent resource of the Instance, of the form: `projects/* /locations/*` */
  parent: string;
  /**
   * Required. Identifier to assign to the Instance. Must be unique within scope of the
   * parent resource.
   */
  instanceId: string;
  /** Required. The Instance. */
  instance: Instance | undefined;
}

/** Request message for DeleteInstance. */
export interface DeleteInstanceRequest {
  /**
   * Required. The name of the Instance to delete.
   * Format: `projects/* /locations/* /instances/*`.
   */
  name: string;
}

/** Request message for GetInstance. */
export interface GetInstanceRequest {
  /**
   * Required. The name of the Instance to retrieve.
   * Format: `projects/* /locations/* /instances/*`.
   */
  name: string;
}

/** Represents the metadata of the long-running operation. */
export interface OperationMetadata {
  /** The time the operation was created. */
  createTime:
    | Date
    | undefined;
  /** The time the operation finished running. */
  endTime:
    | Date
    | undefined;
  /** Server-defined resource path for the target of the operation. */
  target: string;
  /** Name of the verb executed by the operation. */
  verb: string;
  /** Human-readable status of the operation, if any. */
  statusMessage: string;
  /**
   * Identifies whether the user has requested cancellation
   * of the operation. Operations that have successfully been cancelled
   * have [Operation.error][] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
   * corresponding to `Code.CANCELLED`.
   */
  cancellationRequested: boolean;
  /** API version used to start the operation. */
  apiVersion: string;
}

/**
 * An Instance represents the instance resources of the Registry.
 * Currently, only one instance is allowed for each project.
 */
export interface Instance {
  /**
   * Format: `projects/* /locations/* /instance`.
   * Currently only `locations/global` is supported.
   */
  name: string;
  /** Output only. Creation timestamp. */
  createTime:
    | Date
    | undefined;
  /** Output only. Last update timestamp. */
  updateTime:
    | Date
    | undefined;
  /** Output only. The current state of the Instance. */
  state: Instance_State;
  /** Output only. Extra information of Instance.State if the state is `FAILED`. */
  stateMessage: string;
  /** Required. Config of the Instance. */
  config: Instance_Config | undefined;
}

/** State of the Instance. */
export enum Instance_State {
  /** STATE_UNSPECIFIED - The default value. This value is used if the state is omitted. */
  STATE_UNSPECIFIED = 0,
  /** INACTIVE - The Instance has not been initialized or has been deleted. */
  INACTIVE = 1,
  /** CREATING - The Instance is being created. */
  CREATING = 2,
  /** ACTIVE - The Instance has been created and is ready for use. */
  ACTIVE = 3,
  /** UPDATING - The Instance is being updated. */
  UPDATING = 4,
  /** DELETING - The Instance is being deleted. */
  DELETING = 5,
  /** FAILED - The Instance encountered an error during a state change. */
  FAILED = 6,
  UNRECOGNIZED = -1,
}

export function instance_StateFromJSON(object: any): Instance_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Instance_State.STATE_UNSPECIFIED;
    case 1:
    case "INACTIVE":
      return Instance_State.INACTIVE;
    case 2:
    case "CREATING":
      return Instance_State.CREATING;
    case 3:
    case "ACTIVE":
      return Instance_State.ACTIVE;
    case 4:
    case "UPDATING":
      return Instance_State.UPDATING;
    case 5:
    case "DELETING":
      return Instance_State.DELETING;
    case 6:
    case "FAILED":
      return Instance_State.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Instance_State.UNRECOGNIZED;
  }
}

export function instance_StateToJSON(object: Instance_State): string {
  switch (object) {
    case Instance_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Instance_State.INACTIVE:
      return "INACTIVE";
    case Instance_State.CREATING:
      return "CREATING";
    case Instance_State.ACTIVE:
      return "ACTIVE";
    case Instance_State.UPDATING:
      return "UPDATING";
    case Instance_State.DELETING:
      return "DELETING";
    case Instance_State.FAILED:
      return "FAILED";
    case Instance_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Available configurations to provision an Instance. */
export interface Instance_Config {
  /** Output only. The GCP location where the Instance resides. */
  location: string;
  /**
   * Required. The Customer Managed Encryption Key (CMEK) used for data encryption.
   * The CMEK name should follow the format of
   * `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`,
   * where the `location` must match InstanceConfig.location.
   */
  cmekKeyName: string;
}

function createBaseCreateInstanceRequest(): CreateInstanceRequest {
  return { parent: "", instanceId: "", instance: undefined };
}

export const CreateInstanceRequest: MessageFns<CreateInstanceRequest> = {
  encode(message: CreateInstanceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.instanceId !== "") {
      writer.uint32(18).string(message.instanceId);
    }
    if (message.instance !== undefined) {
      Instance.encode(message.instance, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateInstanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceRequest();
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
          if (tag !== 18) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.instance = Instance.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateInstanceRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      instanceId: isSet(object.instanceId) ? globalThis.String(object.instanceId) : "",
      instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
    };
  },

  toJSON(message: CreateInstanceRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.instanceId !== "") {
      obj.instanceId = message.instanceId;
    }
    if (message.instance !== undefined) {
      obj.instance = Instance.toJSON(message.instance);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateInstanceRequest>): CreateInstanceRequest {
    return CreateInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateInstanceRequest>): CreateInstanceRequest {
    const message = createBaseCreateInstanceRequest();
    message.parent = object.parent ?? "";
    message.instanceId = object.instanceId ?? "";
    message.instance = (object.instance !== undefined && object.instance !== null)
      ? Instance.fromPartial(object.instance)
      : undefined;
    return message;
  },
};

function createBaseDeleteInstanceRequest(): DeleteInstanceRequest {
  return { name: "" };
}

export const DeleteInstanceRequest: MessageFns<DeleteInstanceRequest> = {
  encode(message: DeleteInstanceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteInstanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteInstanceRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeleteInstanceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteInstanceRequest>): DeleteInstanceRequest {
    return DeleteInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteInstanceRequest>): DeleteInstanceRequest {
    const message = createBaseDeleteInstanceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGetInstanceRequest(): GetInstanceRequest {
  return { name: "" };
}

export const GetInstanceRequest: MessageFns<GetInstanceRequest> = {
  encode(message: GetInstanceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetInstanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetInstanceRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetInstanceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetInstanceRequest>): GetInstanceRequest {
    return GetInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetInstanceRequest>): GetInstanceRequest {
    const message = createBaseGetInstanceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseOperationMetadata(): OperationMetadata {
  return {
    createTime: undefined,
    endTime: undefined,
    target: "",
    verb: "",
    statusMessage: "",
    cancellationRequested: false,
    apiVersion: "",
  };
}

export const OperationMetadata: MessageFns<OperationMetadata> = {
  encode(message: OperationMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(10).fork()).join();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(18).fork()).join();
    }
    if (message.target !== "") {
      writer.uint32(26).string(message.target);
    }
    if (message.verb !== "") {
      writer.uint32(34).string(message.verb);
    }
    if (message.statusMessage !== "") {
      writer.uint32(42).string(message.statusMessage);
    }
    if (message.cancellationRequested !== false) {
      writer.uint32(48).bool(message.cancellationRequested);
    }
    if (message.apiVersion !== "") {
      writer.uint32(58).string(message.apiVersion);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OperationMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationMetadata();
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

          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.target = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.verb = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.statusMessage = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.cancellationRequested = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.apiVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationMetadata {
    return {
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      target: isSet(object.target) ? globalThis.String(object.target) : "",
      verb: isSet(object.verb) ? globalThis.String(object.verb) : "",
      statusMessage: isSet(object.statusMessage) ? globalThis.String(object.statusMessage) : "",
      cancellationRequested: isSet(object.cancellationRequested)
        ? globalThis.Boolean(object.cancellationRequested)
        : false,
      apiVersion: isSet(object.apiVersion) ? globalThis.String(object.apiVersion) : "",
    };
  },

  toJSON(message: OperationMetadata): unknown {
    const obj: any = {};
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.endTime !== undefined) {
      obj.endTime = message.endTime.toISOString();
    }
    if (message.target !== "") {
      obj.target = message.target;
    }
    if (message.verb !== "") {
      obj.verb = message.verb;
    }
    if (message.statusMessage !== "") {
      obj.statusMessage = message.statusMessage;
    }
    if (message.cancellationRequested !== false) {
      obj.cancellationRequested = message.cancellationRequested;
    }
    if (message.apiVersion !== "") {
      obj.apiVersion = message.apiVersion;
    }
    return obj;
  },

  create(base?: DeepPartial<OperationMetadata>): OperationMetadata {
    return OperationMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OperationMetadata>): OperationMetadata {
    const message = createBaseOperationMetadata();
    message.createTime = object.createTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.target = object.target ?? "";
    message.verb = object.verb ?? "";
    message.statusMessage = object.statusMessage ?? "";
    message.cancellationRequested = object.cancellationRequested ?? false;
    message.apiVersion = object.apiVersion ?? "";
    return message;
  },
};

function createBaseInstance(): Instance {
  return { name: "", createTime: undefined, updateTime: undefined, state: 0, stateMessage: "", config: undefined };
}

export const Instance: MessageFns<Instance> = {
  encode(message: Instance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(18).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(26).fork()).join();
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.stateMessage !== "") {
      writer.uint32(42).string(message.stateMessage);
    }
    if (message.config !== undefined) {
      Instance_Config.encode(message.config, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Instance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance();
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

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stateMessage = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.config = Instance_Config.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Instance {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      state: isSet(object.state) ? instance_StateFromJSON(object.state) : 0,
      stateMessage: isSet(object.stateMessage) ? globalThis.String(object.stateMessage) : "",
      config: isSet(object.config) ? Instance_Config.fromJSON(object.config) : undefined,
    };
  },

  toJSON(message: Instance): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.state !== 0) {
      obj.state = instance_StateToJSON(message.state);
    }
    if (message.stateMessage !== "") {
      obj.stateMessage = message.stateMessage;
    }
    if (message.config !== undefined) {
      obj.config = Instance_Config.toJSON(message.config);
    }
    return obj;
  },

  create(base?: DeepPartial<Instance>): Instance {
    return Instance.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Instance>): Instance {
    const message = createBaseInstance();
    message.name = object.name ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.state = object.state ?? 0;
    message.stateMessage = object.stateMessage ?? "";
    message.config = (object.config !== undefined && object.config !== null)
      ? Instance_Config.fromPartial(object.config)
      : undefined;
    return message;
  },
};

function createBaseInstance_Config(): Instance_Config {
  return { location: "", cmekKeyName: "" };
}

export const Instance_Config: MessageFns<Instance_Config> = {
  encode(message: Instance_Config, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }
    if (message.cmekKeyName !== "") {
      writer.uint32(18).string(message.cmekKeyName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Instance_Config {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance_Config();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.location = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cmekKeyName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Instance_Config {
    return {
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      cmekKeyName: isSet(object.cmekKeyName) ? globalThis.String(object.cmekKeyName) : "",
    };
  },

  toJSON(message: Instance_Config): unknown {
    const obj: any = {};
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.cmekKeyName !== "") {
      obj.cmekKeyName = message.cmekKeyName;
    }
    return obj;
  },

  create(base?: DeepPartial<Instance_Config>): Instance_Config {
    return Instance_Config.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Instance_Config>): Instance_Config {
    const message = createBaseInstance_Config();
    message.location = object.location ?? "";
    message.cmekKeyName = object.cmekKeyName ?? "";
    return message;
  },
};

/**
 * The service that is used for managing the data plane provisioning of the
 * Registry.
 */
export type ProvisioningDefinition = typeof ProvisioningDefinition;
export const ProvisioningDefinition = {
  name: "Provisioning",
  fullName: "google.cloud.apigeeregistry.v1.Provisioning",
  methods: {
    /** Provisions instance resources for the Registry. */
    createInstance: {
      name: "CreateInstance",
      requestType: CreateInstanceRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          8394: [
            Buffer.from([
              29,
              10,
              8,
              73,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              18,
              17,
              79,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              77,
              101,
              116,
              97,
              100,
              97,
              116,
              97,
            ]),
          ],
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
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              44,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
            ]),
          ],
          578365826: [
            Buffer.from([
              57,
              58,
              8,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              34,
              45,
              47,
              118,
              49,
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
            ]),
          ],
        },
      },
    },
    /** Deletes the Registry instance. */
    deleteInstance: {
      name: "DeleteInstance",
      requestType: DeleteInstanceRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          8394: [
            Buffer.from([
              42,
              10,
              21,
              103,
              111,
              111,
              103,
              108,
              101,
              46,
              112,
              114,
              111,
              116,
              111,
              98,
              117,
              102,
              46,
              69,
              109,
              112,
              116,
              121,
              18,
              17,
              79,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              77,
              101,
              116,
              97,
              100,
              97,
              116,
              97,
            ]),
          ],
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              47,
              42,
              45,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
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
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** Gets details of a single Instance. */
    getInstance: {
      name: "GetInstance",
      requestType: GetInstanceRequest,
      requestStream: false,
      responseType: Instance,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              47,
              18,
              45,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
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
              42,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface ProvisioningServiceImplementation<CallContextExt = {}> {
  /** Provisions instance resources for the Registry. */
  createInstance(
    request: CreateInstanceRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Operation>>;
  /** Deletes the Registry instance. */
  deleteInstance(
    request: DeleteInstanceRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Operation>>;
  /** Gets details of a single Instance. */
  getInstance(request: GetInstanceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Instance>>;
}

export interface ProvisioningClient<CallOptionsExt = {}> {
  /** Provisions instance resources for the Registry. */
  createInstance(
    request: DeepPartial<CreateInstanceRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Operation>;
  /** Deletes the Registry instance. */
  deleteInstance(
    request: DeepPartial<DeleteInstanceRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Operation>;
  /** Gets details of a single Instance. */
  getInstance(request: DeepPartial<GetInstanceRequest>, options?: CallOptions & CallOptionsExt): Promise<Instance>;
}

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
