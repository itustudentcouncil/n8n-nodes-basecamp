// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/asset/v1p5beta1/assets.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Policy } from "../../../iam/v1/policy.js";
import { AccessLevel } from "../../../identity/accesscontextmanager/v1/access_level.js";
import { AccessPolicy } from "../../../identity/accesscontextmanager/v1/access_policy.js";
import { ServicePerimeter } from "../../../identity/accesscontextmanager/v1/service_perimeter.js";
import { Struct } from "../../../protobuf/struct.js";
import { Policy as Policy1 } from "../../orgpolicy/v1/orgpolicy.js";

export const protobufPackage = "google.cloud.asset.v1p5beta1";

/**
 * An asset in Google Cloud. An asset can be any resource in the Google Cloud
 * [resource
 * hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy),
 * a resource outside the Google Cloud resource hierarchy (such as Google
 * Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy).
 * See [Supported asset
 * types](https://cloud.google.com/asset-inventory/docs/supported-asset-types)
 * for more information.
 */
export interface Asset {
  /**
   * The full name of the asset. Example:
   * `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`
   *
   * See [Resource
   * names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
   * for more information.
   */
  name: string;
  /**
   * The type of the asset. Example: `compute.googleapis.com/Disk`
   *
   * See [Supported asset
   * types](https://cloud.google.com/asset-inventory/docs/supported-asset-types)
   * for more information.
   */
  assetType: string;
  /** A representation of the resource. */
  resource:
    | Resource
    | undefined;
  /**
   * A representation of the IAM policy set on a Google Cloud resource.
   * There can be a maximum of one IAM policy set on any given resource.
   * In addition, IAM policies inherit their granted access scope from any
   * policies set on parent resources in the resource hierarchy. Therefore, the
   * effectively policy is the union of both the policy set on this resource
   * and each policy set on all of the resource's ancestry resource levels in
   * the hierarchy. See
   * [this topic](https://cloud.google.com/iam/help/allow-policies/inheritance)
   * for more information.
   */
  iamPolicy:
    | Policy
    | undefined;
  /**
   * A representation of an [organization
   * policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy).
   * There can be more than one organization policy with different constraints
   * set on a given resource.
   */
  orgPolicy: Policy1[];
  /**
   * Please also refer to the [access policy user
   * guide](https://cloud.google.com/access-context-manager/docs/overview#access-policies).
   */
  accessPolicy?:
    | AccessPolicy
    | undefined;
  /**
   * Please also refer to the [access level user
   * guide](https://cloud.google.com/access-context-manager/docs/overview#access-levels).
   */
  accessLevel?:
    | AccessLevel
    | undefined;
  /**
   * Please also refer to the [service perimeter user
   * guide](https://cloud.google.com/vpc-service-controls/docs/overview).
   */
  servicePerimeter?:
    | ServicePerimeter
    | undefined;
  /**
   * The ancestry path of an asset in Google Cloud [resource
   * hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy),
   * represented as a list of relative resource names. An ancestry path starts
   * with the closest ancestor in the hierarchy and ends at root. If the asset
   * is a project, folder, or organization, the ancestry path starts from the
   * asset itself.
   *
   * Example: `["projects/123456789", "folders/5432", "organizations/1234"]`
   */
  ancestors: string[];
}

/** A representation of a Google Cloud resource. */
export interface Resource {
  /** The API version. Example: "v1". */
  version: string;
  /**
   * The URL of the discovery document containing the resource's JSON schema.
   * Example:
   * `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest`
   *
   * This value is unspecified for resources that do not have an API based on a
   * discovery document, such as Cloud Bigtable.
   */
  discoveryDocumentUri: string;
  /**
   * The JSON schema name listed in the discovery document. Example:
   * `Project`
   *
   * This value is unspecified for resources that do not have an API based on a
   * discovery document, such as Cloud Bigtable.
   */
  discoveryName: string;
  /**
   * The REST URL for accessing the resource. An HTTP `GET` request using this
   * URL returns the resource itself. Example:
   * `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123`
   *
   * This value is unspecified for resources without a REST API.
   */
  resourceUrl: string;
  /**
   * The full name of the immediate parent of this resource. See
   * [Resource
   * Names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
   * for more information.
   *
   * For Google Cloud assets, this value is the parent resource defined in the
   * [IAM policy
   * hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy).
   * Example:
   * `//cloudresourcemanager.googleapis.com/projects/my_project_123`
   *
   * For third-party assets, this field may be set differently.
   */
  parent: string;
  /**
   * The content of the resource, in which some sensitive fields are removed
   * and may not be present.
   */
  data: { [key: string]: any } | undefined;
}

function createBaseAsset(): Asset {
  return {
    name: "",
    assetType: "",
    resource: undefined,
    iamPolicy: undefined,
    orgPolicy: [],
    accessPolicy: undefined,
    accessLevel: undefined,
    servicePerimeter: undefined,
    ancestors: [],
  };
}

export const Asset: MessageFns<Asset> = {
  encode(message: Asset, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.assetType !== "") {
      writer.uint32(18).string(message.assetType);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(26).fork()).join();
    }
    if (message.iamPolicy !== undefined) {
      Policy.encode(message.iamPolicy, writer.uint32(34).fork()).join();
    }
    for (const v of message.orgPolicy) {
      Policy1.encode(v!, writer.uint32(50).fork()).join();
    }
    if (message.accessPolicy !== undefined) {
      AccessPolicy.encode(message.accessPolicy, writer.uint32(58).fork()).join();
    }
    if (message.accessLevel !== undefined) {
      AccessLevel.encode(message.accessLevel, writer.uint32(66).fork()).join();
    }
    if (message.servicePerimeter !== undefined) {
      ServicePerimeter.encode(message.servicePerimeter, writer.uint32(74).fork()).join();
    }
    for (const v of message.ancestors) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Asset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
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

          message.assetType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resource = Resource.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.iamPolicy = Policy.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.orgPolicy.push(Policy1.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.accessPolicy = AccessPolicy.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.accessLevel = AccessLevel.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.servicePerimeter = ServicePerimeter.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.ancestors.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      assetType: isSet(object.assetType) ? globalThis.String(object.assetType) : "",
      resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined,
      iamPolicy: isSet(object.iamPolicy) ? Policy.fromJSON(object.iamPolicy) : undefined,
      orgPolicy: globalThis.Array.isArray(object?.orgPolicy)
        ? object.orgPolicy.map((e: any) => Policy1.fromJSON(e))
        : [],
      accessPolicy: isSet(object.accessPolicy) ? AccessPolicy.fromJSON(object.accessPolicy) : undefined,
      accessLevel: isSet(object.accessLevel) ? AccessLevel.fromJSON(object.accessLevel) : undefined,
      servicePerimeter: isSet(object.servicePerimeter) ? ServicePerimeter.fromJSON(object.servicePerimeter) : undefined,
      ancestors: globalThis.Array.isArray(object?.ancestors)
        ? object.ancestors.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.assetType !== "") {
      obj.assetType = message.assetType;
    }
    if (message.resource !== undefined) {
      obj.resource = Resource.toJSON(message.resource);
    }
    if (message.iamPolicy !== undefined) {
      obj.iamPolicy = Policy.toJSON(message.iamPolicy);
    }
    if (message.orgPolicy?.length) {
      obj.orgPolicy = message.orgPolicy.map((e) => Policy1.toJSON(e));
    }
    if (message.accessPolicy !== undefined) {
      obj.accessPolicy = AccessPolicy.toJSON(message.accessPolicy);
    }
    if (message.accessLevel !== undefined) {
      obj.accessLevel = AccessLevel.toJSON(message.accessLevel);
    }
    if (message.servicePerimeter !== undefined) {
      obj.servicePerimeter = ServicePerimeter.toJSON(message.servicePerimeter);
    }
    if (message.ancestors?.length) {
      obj.ancestors = message.ancestors;
    }
    return obj;
  },

  create(base?: DeepPartial<Asset>): Asset {
    return Asset.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Asset>): Asset {
    const message = createBaseAsset();
    message.name = object.name ?? "";
    message.assetType = object.assetType ?? "";
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Resource.fromPartial(object.resource)
      : undefined;
    message.iamPolicy = (object.iamPolicy !== undefined && object.iamPolicy !== null)
      ? Policy.fromPartial(object.iamPolicy)
      : undefined;
    message.orgPolicy = object.orgPolicy?.map((e) => Policy1.fromPartial(e)) || [];
    message.accessPolicy = (object.accessPolicy !== undefined && object.accessPolicy !== null)
      ? AccessPolicy.fromPartial(object.accessPolicy)
      : undefined;
    message.accessLevel = (object.accessLevel !== undefined && object.accessLevel !== null)
      ? AccessLevel.fromPartial(object.accessLevel)
      : undefined;
    message.servicePerimeter = (object.servicePerimeter !== undefined && object.servicePerimeter !== null)
      ? ServicePerimeter.fromPartial(object.servicePerimeter)
      : undefined;
    message.ancestors = object.ancestors?.map((e) => e) || [];
    return message;
  },
};

function createBaseResource(): Resource {
  return { version: "", discoveryDocumentUri: "", discoveryName: "", resourceUrl: "", parent: "", data: undefined };
}

export const Resource: MessageFns<Resource> = {
  encode(message: Resource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.discoveryDocumentUri !== "") {
      writer.uint32(18).string(message.discoveryDocumentUri);
    }
    if (message.discoveryName !== "") {
      writer.uint32(26).string(message.discoveryName);
    }
    if (message.resourceUrl !== "") {
      writer.uint32(34).string(message.resourceUrl);
    }
    if (message.parent !== "") {
      writer.uint32(42).string(message.parent);
    }
    if (message.data !== undefined) {
      Struct.encode(Struct.wrap(message.data), writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Resource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.discoveryDocumentUri = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.discoveryName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resourceUrl = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.data = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resource {
    return {
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      discoveryDocumentUri: isSet(object.discoveryDocumentUri) ? globalThis.String(object.discoveryDocumentUri) : "",
      discoveryName: isSet(object.discoveryName) ? globalThis.String(object.discoveryName) : "",
      resourceUrl: isSet(object.resourceUrl) ? globalThis.String(object.resourceUrl) : "",
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      data: isObject(object.data) ? object.data : undefined,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.discoveryDocumentUri !== "") {
      obj.discoveryDocumentUri = message.discoveryDocumentUri;
    }
    if (message.discoveryName !== "") {
      obj.discoveryName = message.discoveryName;
    }
    if (message.resourceUrl !== "") {
      obj.resourceUrl = message.resourceUrl;
    }
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.data !== undefined) {
      obj.data = message.data;
    }
    return obj;
  },

  create(base?: DeepPartial<Resource>): Resource {
    return Resource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    message.version = object.version ?? "";
    message.discoveryDocumentUri = object.discoveryDocumentUri ?? "";
    message.discoveryName = object.discoveryName ?? "";
    message.resourceUrl = object.resourceUrl ?? "";
    message.parent = object.parent ?? "";
    message.data = object.data ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

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
