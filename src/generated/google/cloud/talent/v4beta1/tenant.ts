// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/talent/v4beta1/tenant.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.talent.v4beta1";

/**
 * A Tenant resource represents a tenant in the service. A tenant is a group or
 * entity that shares common access with specific privileges for resources like
 * profiles. Customer may create multiple tenants to provide data isolation for
 * different groups.
 */
export interface Tenant {
  /**
   * Required during tenant update.
   *
   * The resource name for a tenant. This is generated by the service when a
   * tenant is created.
   *
   * The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   * "projects/foo/tenants/bar".
   */
  name: string;
  /**
   * Required. Client side tenant identifier, used to uniquely identify the
   * tenant.
   *
   * The maximum number of allowed characters is 255.
   */
  externalId: string;
  /**
   * Indicates whether data owned by this tenant may be used to provide product
   * improvements across other tenants.
   *
   * Defaults behavior is
   * [DataUsageType.ISOLATED][google.cloud.talent.v4beta1.Tenant.DataUsageType.ISOLATED]
   * if it's unset.
   */
  usageType: Tenant_DataUsageType;
  /**
   * A list of keys of filterable
   * [Profile.custom_attributes][google.cloud.talent.v4beta1.Profile.custom_attributes],
   * whose corresponding `string_values` are used in keyword searches. Profiles
   * with `string_values` under these specified field keys are returned if any
   * of the values match the search keyword. Custom field values with
   * parenthesis, brackets and special symbols are not searchable as-is,
   * and must be surrounded by quotes.
   */
  keywordSearchableProfileCustomAttributes: string[];
}

/** Enum that represents how user data owned by the tenant is used. */
export enum Tenant_DataUsageType {
  /** DATA_USAGE_TYPE_UNSPECIFIED - Default value. */
  DATA_USAGE_TYPE_UNSPECIFIED = 0,
  /**
   * AGGREGATED - Data owned by this tenant is used to improve search/recommendation
   * quality across tenants.
   */
  AGGREGATED = 1,
  /**
   * ISOLATED - Data owned by this tenant is used to improve search/recommendation
   * quality for this tenant only.
   */
  ISOLATED = 2,
  UNRECOGNIZED = -1,
}

export function tenant_DataUsageTypeFromJSON(object: any): Tenant_DataUsageType {
  switch (object) {
    case 0:
    case "DATA_USAGE_TYPE_UNSPECIFIED":
      return Tenant_DataUsageType.DATA_USAGE_TYPE_UNSPECIFIED;
    case 1:
    case "AGGREGATED":
      return Tenant_DataUsageType.AGGREGATED;
    case 2:
    case "ISOLATED":
      return Tenant_DataUsageType.ISOLATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Tenant_DataUsageType.UNRECOGNIZED;
  }
}

export function tenant_DataUsageTypeToJSON(object: Tenant_DataUsageType): string {
  switch (object) {
    case Tenant_DataUsageType.DATA_USAGE_TYPE_UNSPECIFIED:
      return "DATA_USAGE_TYPE_UNSPECIFIED";
    case Tenant_DataUsageType.AGGREGATED:
      return "AGGREGATED";
    case Tenant_DataUsageType.ISOLATED:
      return "ISOLATED";
    case Tenant_DataUsageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTenant(): Tenant {
  return { name: "", externalId: "", usageType: 0, keywordSearchableProfileCustomAttributes: [] };
}

export const Tenant: MessageFns<Tenant> = {
  encode(message: Tenant, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.externalId !== "") {
      writer.uint32(18).string(message.externalId);
    }
    if (message.usageType !== 0) {
      writer.uint32(24).int32(message.usageType);
    }
    for (const v of message.keywordSearchableProfileCustomAttributes) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Tenant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenant();
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

          message.externalId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.usageType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.keywordSearchableProfileCustomAttributes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tenant {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      externalId: isSet(object.externalId) ? globalThis.String(object.externalId) : "",
      usageType: isSet(object.usageType) ? tenant_DataUsageTypeFromJSON(object.usageType) : 0,
      keywordSearchableProfileCustomAttributes:
        globalThis.Array.isArray(object?.keywordSearchableProfileCustomAttributes)
          ? object.keywordSearchableProfileCustomAttributes.map((e: any) => globalThis.String(e))
          : [],
    };
  },

  toJSON(message: Tenant): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.externalId !== "") {
      obj.externalId = message.externalId;
    }
    if (message.usageType !== 0) {
      obj.usageType = tenant_DataUsageTypeToJSON(message.usageType);
    }
    if (message.keywordSearchableProfileCustomAttributes?.length) {
      obj.keywordSearchableProfileCustomAttributes = message.keywordSearchableProfileCustomAttributes;
    }
    return obj;
  },

  create(base?: DeepPartial<Tenant>): Tenant {
    return Tenant.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Tenant>): Tenant {
    const message = createBaseTenant();
    message.name = object.name ?? "";
    message.externalId = object.externalId ?? "";
    message.usageType = object.usageType ?? 0;
    message.keywordSearchableProfileCustomAttributes = object.keywordSearchableProfileCustomAttributes?.map((e) => e) ||
      [];
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