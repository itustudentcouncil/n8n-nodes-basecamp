// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v1/resource_value_config.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { CloudProvider, cloudProviderFromJSON, cloudProviderToJSON } from "./resource.js";

export const protobufPackage = "google.cloud.securitycenter.v1";

/** Value enum to map to a resource */
export enum ResourceValue {
  /** RESOURCE_VALUE_UNSPECIFIED - Unspecific value */
  RESOURCE_VALUE_UNSPECIFIED = 0,
  /** HIGH - High resource value */
  HIGH = 1,
  /** MEDIUM - Medium resource value */
  MEDIUM = 2,
  /** LOW - Low resource value */
  LOW = 3,
  /** NONE - No resource value, e.g. ignore these resources */
  NONE = 4,
  UNRECOGNIZED = -1,
}

export function resourceValueFromJSON(object: any): ResourceValue {
  switch (object) {
    case 0:
    case "RESOURCE_VALUE_UNSPECIFIED":
      return ResourceValue.RESOURCE_VALUE_UNSPECIFIED;
    case 1:
    case "HIGH":
      return ResourceValue.HIGH;
    case 2:
    case "MEDIUM":
      return ResourceValue.MEDIUM;
    case 3:
    case "LOW":
      return ResourceValue.LOW;
    case 4:
    case "NONE":
      return ResourceValue.NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceValue.UNRECOGNIZED;
  }
}

export function resourceValueToJSON(object: ResourceValue): string {
  switch (object) {
    case ResourceValue.RESOURCE_VALUE_UNSPECIFIED:
      return "RESOURCE_VALUE_UNSPECIFIED";
    case ResourceValue.HIGH:
      return "HIGH";
    case ResourceValue.MEDIUM:
      return "MEDIUM";
    case ResourceValue.LOW:
      return "LOW";
    case ResourceValue.NONE:
      return "NONE";
    case ResourceValue.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A resource value configuration (RVC) is a mapping configuration of user's
 * resources to resource values. Used in Attack path simulations.
 */
export interface ResourceValueConfig {
  /** Name for the resource value configuration */
  name: string;
  /** Required. Resource value level this expression represents */
  resourceValue: ResourceValue;
  /**
   * Required. Tag values combined with `AND` to check against.
   * Values in the form "tagValues/123"
   * Example: `[ "tagValues/123", "tagValues/456", "tagValues/789" ]`
   * https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing
   */
  tagValues: string[];
  /**
   * Apply resource_value only to resources that match resource_type.
   * resource_type will be checked with `AND` of other resources.
   * For example, "storage.googleapis.com/Bucket" with resource_value "HIGH"
   * will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources.
   */
  resourceType: string;
  /**
   * Project or folder to scope this configuration to.
   * For example, "project/456" would apply this configuration only to resources
   * in "project/456" scope will be checked with `AND` of other
   * resources.
   */
  scope: string;
  /**
   * List of resource labels to search for, evaluated with `AND`.
   * For example, `"resource_labels_selector": {"key": "value", "env": "prod"}`
   * will match resources with labels "key": "value" `AND` "env":
   * "prod"
   * https://cloud.google.com/resource-manager/docs/creating-managing-labels
   */
  resourceLabelsSelector: { [key: string]: string };
  /** Description of the resource value configuration. */
  description: string;
  /** Output only. Timestamp this resource value configuration was created. */
  createTime:
    | Date
    | undefined;
  /** Output only. Timestamp this resource value configuration was last updated. */
  updateTime:
    | Date
    | undefined;
  /** Cloud provider this configuration applies to */
  cloudProvider: CloudProvider;
  /**
   * A mapping of the sensitivity on Sensitive Data Protection finding to
   * resource values. This mapping can only be used in combination with a
   * resource_type that is related to BigQuery, e.g.
   * "bigquery.googleapis.com/Dataset".
   */
  sensitiveDataProtectionMapping: ResourceValueConfig_SensitiveDataProtectionMapping | undefined;
}

/**
 * Resource value mapping for Sensitive Data Protection findings.
 * If any of these mappings have a resource value that is not unspecified,
 * the resource_value field will be ignored when reading this configuration.
 */
export interface ResourceValueConfig_SensitiveDataProtectionMapping {
  /**
   * Resource value mapping for high-sensitivity Sensitive Data Protection
   * findings
   */
  highSensitivityMapping: ResourceValue;
  /**
   * Resource value mapping for medium-sensitivity Sensitive Data Protection
   * findings
   */
  mediumSensitivityMapping: ResourceValue;
}

export interface ResourceValueConfig_ResourceLabelsSelectorEntry {
  key: string;
  value: string;
}

function createBaseResourceValueConfig(): ResourceValueConfig {
  return {
    name: "",
    resourceValue: 0,
    tagValues: [],
    resourceType: "",
    scope: "",
    resourceLabelsSelector: {},
    description: "",
    createTime: undefined,
    updateTime: undefined,
    cloudProvider: 0,
    sensitiveDataProtectionMapping: undefined,
  };
}

export const ResourceValueConfig: MessageFns<ResourceValueConfig> = {
  encode(message: ResourceValueConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resourceValue !== 0) {
      writer.uint32(16).int32(message.resourceValue);
    }
    for (const v of message.tagValues) {
      writer.uint32(26).string(v!);
    }
    if (message.resourceType !== "") {
      writer.uint32(34).string(message.resourceType);
    }
    if (message.scope !== "") {
      writer.uint32(42).string(message.scope);
    }
    Object.entries(message.resourceLabelsSelector).forEach(([key, value]) => {
      ResourceValueConfig_ResourceLabelsSelectorEntry.encode({ key: key as any, value }, writer.uint32(50).fork())
        .join();
    });
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(66).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(74).fork()).join();
    }
    if (message.cloudProvider !== 0) {
      writer.uint32(80).int32(message.cloudProvider);
    }
    if (message.sensitiveDataProtectionMapping !== undefined) {
      ResourceValueConfig_SensitiveDataProtectionMapping.encode(
        message.sensitiveDataProtectionMapping,
        writer.uint32(90).fork(),
      ).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ResourceValueConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceValueConfig();
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
          if (tag !== 16) {
            break;
          }

          message.resourceValue = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tagValues.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resourceType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.scope = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = ResourceValueConfig_ResourceLabelsSelectorEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.resourceLabelsSelector[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.description = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.cloudProvider = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.sensitiveDataProtectionMapping = ResourceValueConfig_SensitiveDataProtectionMapping.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceValueConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      resourceValue: isSet(object.resourceValue) ? resourceValueFromJSON(object.resourceValue) : 0,
      tagValues: globalThis.Array.isArray(object?.tagValues)
        ? object.tagValues.map((e: any) => globalThis.String(e))
        : [],
      resourceType: isSet(object.resourceType) ? globalThis.String(object.resourceType) : "",
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
      resourceLabelsSelector: isObject(object.resourceLabelsSelector)
        ? Object.entries(object.resourceLabelsSelector).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      cloudProvider: isSet(object.cloudProvider) ? cloudProviderFromJSON(object.cloudProvider) : 0,
      sensitiveDataProtectionMapping: isSet(object.sensitiveDataProtectionMapping)
        ? ResourceValueConfig_SensitiveDataProtectionMapping.fromJSON(object.sensitiveDataProtectionMapping)
        : undefined,
    };
  },

  toJSON(message: ResourceValueConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.resourceValue !== 0) {
      obj.resourceValue = resourceValueToJSON(message.resourceValue);
    }
    if (message.tagValues?.length) {
      obj.tagValues = message.tagValues;
    }
    if (message.resourceType !== "") {
      obj.resourceType = message.resourceType;
    }
    if (message.scope !== "") {
      obj.scope = message.scope;
    }
    if (message.resourceLabelsSelector) {
      const entries = Object.entries(message.resourceLabelsSelector);
      if (entries.length > 0) {
        obj.resourceLabelsSelector = {};
        entries.forEach(([k, v]) => {
          obj.resourceLabelsSelector[k] = v;
        });
      }
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.cloudProvider !== 0) {
      obj.cloudProvider = cloudProviderToJSON(message.cloudProvider);
    }
    if (message.sensitiveDataProtectionMapping !== undefined) {
      obj.sensitiveDataProtectionMapping = ResourceValueConfig_SensitiveDataProtectionMapping.toJSON(
        message.sensitiveDataProtectionMapping,
      );
    }
    return obj;
  },

  create(base?: DeepPartial<ResourceValueConfig>): ResourceValueConfig {
    return ResourceValueConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResourceValueConfig>): ResourceValueConfig {
    const message = createBaseResourceValueConfig();
    message.name = object.name ?? "";
    message.resourceValue = object.resourceValue ?? 0;
    message.tagValues = object.tagValues?.map((e) => e) || [];
    message.resourceType = object.resourceType ?? "";
    message.scope = object.scope ?? "";
    message.resourceLabelsSelector = Object.entries(object.resourceLabelsSelector ?? {}).reduce<
      { [key: string]: string }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.description = object.description ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.cloudProvider = object.cloudProvider ?? 0;
    message.sensitiveDataProtectionMapping =
      (object.sensitiveDataProtectionMapping !== undefined && object.sensitiveDataProtectionMapping !== null)
        ? ResourceValueConfig_SensitiveDataProtectionMapping.fromPartial(object.sensitiveDataProtectionMapping)
        : undefined;
    return message;
  },
};

function createBaseResourceValueConfig_SensitiveDataProtectionMapping(): ResourceValueConfig_SensitiveDataProtectionMapping {
  return { highSensitivityMapping: 0, mediumSensitivityMapping: 0 };
}

export const ResourceValueConfig_SensitiveDataProtectionMapping: MessageFns<
  ResourceValueConfig_SensitiveDataProtectionMapping
> = {
  encode(
    message: ResourceValueConfig_SensitiveDataProtectionMapping,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.highSensitivityMapping !== 0) {
      writer.uint32(8).int32(message.highSensitivityMapping);
    }
    if (message.mediumSensitivityMapping !== 0) {
      writer.uint32(16).int32(message.mediumSensitivityMapping);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ResourceValueConfig_SensitiveDataProtectionMapping {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceValueConfig_SensitiveDataProtectionMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.highSensitivityMapping = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.mediumSensitivityMapping = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceValueConfig_SensitiveDataProtectionMapping {
    return {
      highSensitivityMapping: isSet(object.highSensitivityMapping)
        ? resourceValueFromJSON(object.highSensitivityMapping)
        : 0,
      mediumSensitivityMapping: isSet(object.mediumSensitivityMapping)
        ? resourceValueFromJSON(object.mediumSensitivityMapping)
        : 0,
    };
  },

  toJSON(message: ResourceValueConfig_SensitiveDataProtectionMapping): unknown {
    const obj: any = {};
    if (message.highSensitivityMapping !== 0) {
      obj.highSensitivityMapping = resourceValueToJSON(message.highSensitivityMapping);
    }
    if (message.mediumSensitivityMapping !== 0) {
      obj.mediumSensitivityMapping = resourceValueToJSON(message.mediumSensitivityMapping);
    }
    return obj;
  },

  create(
    base?: DeepPartial<ResourceValueConfig_SensitiveDataProtectionMapping>,
  ): ResourceValueConfig_SensitiveDataProtectionMapping {
    return ResourceValueConfig_SensitiveDataProtectionMapping.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ResourceValueConfig_SensitiveDataProtectionMapping>,
  ): ResourceValueConfig_SensitiveDataProtectionMapping {
    const message = createBaseResourceValueConfig_SensitiveDataProtectionMapping();
    message.highSensitivityMapping = object.highSensitivityMapping ?? 0;
    message.mediumSensitivityMapping = object.mediumSensitivityMapping ?? 0;
    return message;
  },
};

function createBaseResourceValueConfig_ResourceLabelsSelectorEntry(): ResourceValueConfig_ResourceLabelsSelectorEntry {
  return { key: "", value: "" };
}

export const ResourceValueConfig_ResourceLabelsSelectorEntry: MessageFns<
  ResourceValueConfig_ResourceLabelsSelectorEntry
> = {
  encode(
    message: ResourceValueConfig_ResourceLabelsSelectorEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ResourceValueConfig_ResourceLabelsSelectorEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceValueConfig_ResourceLabelsSelectorEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceValueConfig_ResourceLabelsSelectorEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ResourceValueConfig_ResourceLabelsSelectorEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(
    base?: DeepPartial<ResourceValueConfig_ResourceLabelsSelectorEntry>,
  ): ResourceValueConfig_ResourceLabelsSelectorEntry {
    return ResourceValueConfig_ResourceLabelsSelectorEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ResourceValueConfig_ResourceLabelsSelectorEntry>,
  ): ResourceValueConfig_ResourceLabelsSelectorEntry {
    const message = createBaseResourceValueConfig_ResourceLabelsSelectorEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
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
