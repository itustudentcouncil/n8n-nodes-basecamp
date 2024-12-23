// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v2/valued_resource.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.securitycenter.v2";

/** A resource that is determined to have value to a user's system */
export interface ValuedResource {
  /**
   * Valued resource name, for example,
   *  e.g.:
   *  `organizations/123/simulations/456/valuedResources/789`
   */
  name: string;
  /**
   * The
   * [full resource
   * name](https://cloud.google.com/apis/design/resource_names#full_resource_name)
   * of the valued resource.
   */
  resource: string;
  /**
   * The [resource
   * type](https://cloud.google.com/asset-inventory/docs/supported-asset-types)
   * of the valued resource.
   */
  resourceType: string;
  /** Human-readable name of the valued resource. */
  displayName: string;
  /** How valuable this resource is. */
  resourceValue: ValuedResource_ResourceValue;
  /**
   * Exposed score for this valued resource. A value of 0 means no exposure was
   * detected exposure.
   */
  exposedScore: number;
  /**
   * List of resource value configurations' metadata used to determine the value
   * of this resource. Maximum of 100.
   */
  resourceValueConfigsUsed: ResourceValueConfigMetadata[];
}

/** How valuable the resource is. */
export enum ValuedResource_ResourceValue {
  /** RESOURCE_VALUE_UNSPECIFIED - The resource value isn't specified. */
  RESOURCE_VALUE_UNSPECIFIED = 0,
  /** RESOURCE_VALUE_LOW - This is a low-value resource. */
  RESOURCE_VALUE_LOW = 1,
  /** RESOURCE_VALUE_MEDIUM - This is a medium-value resource. */
  RESOURCE_VALUE_MEDIUM = 2,
  /** RESOURCE_VALUE_HIGH - This is a high-value resource. */
  RESOURCE_VALUE_HIGH = 3,
  UNRECOGNIZED = -1,
}

export function valuedResource_ResourceValueFromJSON(object: any): ValuedResource_ResourceValue {
  switch (object) {
    case 0:
    case "RESOURCE_VALUE_UNSPECIFIED":
      return ValuedResource_ResourceValue.RESOURCE_VALUE_UNSPECIFIED;
    case 1:
    case "RESOURCE_VALUE_LOW":
      return ValuedResource_ResourceValue.RESOURCE_VALUE_LOW;
    case 2:
    case "RESOURCE_VALUE_MEDIUM":
      return ValuedResource_ResourceValue.RESOURCE_VALUE_MEDIUM;
    case 3:
    case "RESOURCE_VALUE_HIGH":
      return ValuedResource_ResourceValue.RESOURCE_VALUE_HIGH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ValuedResource_ResourceValue.UNRECOGNIZED;
  }
}

export function valuedResource_ResourceValueToJSON(object: ValuedResource_ResourceValue): string {
  switch (object) {
    case ValuedResource_ResourceValue.RESOURCE_VALUE_UNSPECIFIED:
      return "RESOURCE_VALUE_UNSPECIFIED";
    case ValuedResource_ResourceValue.RESOURCE_VALUE_LOW:
      return "RESOURCE_VALUE_LOW";
    case ValuedResource_ResourceValue.RESOURCE_VALUE_MEDIUM:
      return "RESOURCE_VALUE_MEDIUM";
    case ValuedResource_ResourceValue.RESOURCE_VALUE_HIGH:
      return "RESOURCE_VALUE_HIGH";
    case ValuedResource_ResourceValue.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Metadata about a ResourceValueConfig. For example, id and name. */
export interface ResourceValueConfigMetadata {
  /** Resource value config name */
  name: string;
}

function createBaseValuedResource(): ValuedResource {
  return {
    name: "",
    resource: "",
    resourceType: "",
    displayName: "",
    resourceValue: 0,
    exposedScore: 0,
    resourceValueConfigsUsed: [],
  };
}

export const ValuedResource: MessageFns<ValuedResource> = {
  encode(message: ValuedResource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resource !== "") {
      writer.uint32(18).string(message.resource);
    }
    if (message.resourceType !== "") {
      writer.uint32(26).string(message.resourceType);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    if (message.resourceValue !== 0) {
      writer.uint32(40).int32(message.resourceValue);
    }
    if (message.exposedScore !== 0) {
      writer.uint32(49).double(message.exposedScore);
    }
    for (const v of message.resourceValueConfigsUsed) {
      ResourceValueConfigMetadata.encode(v!, writer.uint32(58).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ValuedResource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValuedResource();
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

          message.resource = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.resourceValue = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.exposedScore = reader.double();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.resourceValueConfigsUsed.push(ResourceValueConfigMetadata.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValuedResource {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      resource: isSet(object.resource) ? globalThis.String(object.resource) : "",
      resourceType: isSet(object.resourceType) ? globalThis.String(object.resourceType) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      resourceValue: isSet(object.resourceValue) ? valuedResource_ResourceValueFromJSON(object.resourceValue) : 0,
      exposedScore: isSet(object.exposedScore) ? globalThis.Number(object.exposedScore) : 0,
      resourceValueConfigsUsed: globalThis.Array.isArray(object?.resourceValueConfigsUsed)
        ? object.resourceValueConfigsUsed.map((e: any) => ResourceValueConfigMetadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ValuedResource): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.resource !== "") {
      obj.resource = message.resource;
    }
    if (message.resourceType !== "") {
      obj.resourceType = message.resourceType;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.resourceValue !== 0) {
      obj.resourceValue = valuedResource_ResourceValueToJSON(message.resourceValue);
    }
    if (message.exposedScore !== 0) {
      obj.exposedScore = message.exposedScore;
    }
    if (message.resourceValueConfigsUsed?.length) {
      obj.resourceValueConfigsUsed = message.resourceValueConfigsUsed.map((e) => ResourceValueConfigMetadata.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ValuedResource>): ValuedResource {
    return ValuedResource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValuedResource>): ValuedResource {
    const message = createBaseValuedResource();
    message.name = object.name ?? "";
    message.resource = object.resource ?? "";
    message.resourceType = object.resourceType ?? "";
    message.displayName = object.displayName ?? "";
    message.resourceValue = object.resourceValue ?? 0;
    message.exposedScore = object.exposedScore ?? 0;
    message.resourceValueConfigsUsed =
      object.resourceValueConfigsUsed?.map((e) => ResourceValueConfigMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResourceValueConfigMetadata(): ResourceValueConfigMetadata {
  return { name: "" };
}

export const ResourceValueConfigMetadata: MessageFns<ResourceValueConfigMetadata> = {
  encode(message: ResourceValueConfigMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ResourceValueConfigMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceValueConfigMetadata();
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

  fromJSON(object: any): ResourceValueConfigMetadata {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: ResourceValueConfigMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<ResourceValueConfigMetadata>): ResourceValueConfigMetadata {
    return ResourceValueConfigMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResourceValueConfigMetadata>): ResourceValueConfigMetadata {
    const message = createBaseResourceValueConfigMetadata();
    message.name = object.name ?? "";
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
