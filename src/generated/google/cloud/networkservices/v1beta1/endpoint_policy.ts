// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/networkservices/v1beta1/endpoint_policy.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FieldMask } from "../../../protobuf/field_mask.js";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { EndpointMatcher, TrafficPortSelector } from "./common.js";

export const protobufPackage = "google.cloud.networkservices.v1beta1";

/**
 * EndpointPolicy is a resource that helps apply desired configuration
 * on the endpoints that match specific criteria.
 * For example, this resource can be used to apply "authentication config"
 * an all endpoints that serve on port 8080.
 */
export interface EndpointPolicy {
  /**
   * Required. Name of the EndpointPolicy resource. It matches pattern
   * `projects/{project}/locations/global/endpointPolicies/{endpoint_policy}`.
   */
  name: string;
  /** Output only. The timestamp when the resource was created. */
  createTime:
    | Date
    | undefined;
  /** Output only. The timestamp when the resource was updated. */
  updateTime:
    | Date
    | undefined;
  /** Optional. Set of label tags associated with the EndpointPolicy resource. */
  labels: { [key: string]: string };
  /**
   * Required. The type of endpoint policy. This is primarily used to validate
   * the configuration.
   */
  type: EndpointPolicy_EndpointPolicyType;
  /**
   * Optional. This field specifies the URL of AuthorizationPolicy resource that
   * applies authorization policies to the inbound traffic at the
   * matched endpoints. Refer to Authorization. If this field is not
   * specified, authorization is disabled(no authz checks) for this
   * endpoint.
   */
  authorizationPolicy: string;
  /**
   * Required. A matcher that selects endpoints to which the policies should be
   * applied.
   */
  endpointMatcher:
    | EndpointMatcher
    | undefined;
  /**
   * Optional. Port selector for the (matched) endpoints. If no port selector is
   * provided, the matched config is applied to all ports.
   */
  trafficPortSelector:
    | TrafficPortSelector
    | undefined;
  /**
   * Optional. A free-text description of the resource. Max length 1024
   * characters.
   */
  description: string;
  /**
   * Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is
   * used to determine the authentication policy to be applied to terminate the
   * inbound traffic at the identified backends. If this field is not set,
   * authentication is disabled(open) for this endpoint.
   */
  serverTlsPolicy: string;
  /**
   * Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy
   * can be set to specify the authentication for traffic from the proxy to the
   * actual endpoints. More specifically, it is applied to the outgoing traffic
   * from the proxy to the endpoint. This is typically used for sidecar model
   * where the proxy identifies itself as endpoint to the control plane, with
   * the connection between sidecar and endpoint requiring authentication. If
   * this field is not set, authentication is disabled(open). Applicable only
   * when EndpointPolicyType is SIDECAR_PROXY.
   */
  clientTlsPolicy: string;
}

/** The type of endpoint policy. */
export enum EndpointPolicy_EndpointPolicyType {
  /** ENDPOINT_POLICY_TYPE_UNSPECIFIED - Default value. Must not be used. */
  ENDPOINT_POLICY_TYPE_UNSPECIFIED = 0,
  /** SIDECAR_PROXY - Represents a proxy deployed as a sidecar. */
  SIDECAR_PROXY = 1,
  /** GRPC_SERVER - Represents a proxyless gRPC backend. */
  GRPC_SERVER = 2,
  UNRECOGNIZED = -1,
}

export function endpointPolicy_EndpointPolicyTypeFromJSON(object: any): EndpointPolicy_EndpointPolicyType {
  switch (object) {
    case 0:
    case "ENDPOINT_POLICY_TYPE_UNSPECIFIED":
      return EndpointPolicy_EndpointPolicyType.ENDPOINT_POLICY_TYPE_UNSPECIFIED;
    case 1:
    case "SIDECAR_PROXY":
      return EndpointPolicy_EndpointPolicyType.SIDECAR_PROXY;
    case 2:
    case "GRPC_SERVER":
      return EndpointPolicy_EndpointPolicyType.GRPC_SERVER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EndpointPolicy_EndpointPolicyType.UNRECOGNIZED;
  }
}

export function endpointPolicy_EndpointPolicyTypeToJSON(object: EndpointPolicy_EndpointPolicyType): string {
  switch (object) {
    case EndpointPolicy_EndpointPolicyType.ENDPOINT_POLICY_TYPE_UNSPECIFIED:
      return "ENDPOINT_POLICY_TYPE_UNSPECIFIED";
    case EndpointPolicy_EndpointPolicyType.SIDECAR_PROXY:
      return "SIDECAR_PROXY";
    case EndpointPolicy_EndpointPolicyType.GRPC_SERVER:
      return "GRPC_SERVER";
    case EndpointPolicy_EndpointPolicyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EndpointPolicy_LabelsEntry {
  key: string;
  value: string;
}

/** Request used with the ListEndpointPolicies method. */
export interface ListEndpointPoliciesRequest {
  /**
   * Required. The project and location from which the EndpointPolicies should
   * be listed, specified in the format `projects/* /locations/global`.
   */
  parent: string;
  /** Maximum number of EndpointPolicies to return per call. */
  pageSize: number;
  /**
   * The value returned by the last `ListEndpointPoliciesResponse`
   * Indicates that this is a continuation of a prior
   * `ListEndpointPolicies` call, and that the system should return the
   * next page of data.
   */
  pageToken: string;
}

/** Response returned by the ListEndpointPolicies method. */
export interface ListEndpointPoliciesResponse {
  /** List of EndpointPolicy resources. */
  endpointPolicies: EndpointPolicy[];
  /**
   * If there might be more results than those appearing in this response, then
   * `next_page_token` is included. To get the next set of results, call this
   * method again using the value of `next_page_token` as `page_token`.
   */
  nextPageToken: string;
}

/** Request used with the GetEndpointPolicy method. */
export interface GetEndpointPolicyRequest {
  /**
   * Required. A name of the EndpointPolicy to get. Must be in the format
   * `projects/* /locations/global/endpointPolicies/*`.
   */
  name: string;
}

/** Request used with the CreateEndpointPolicy method. */
export interface CreateEndpointPolicyRequest {
  /**
   * Required. The parent resource of the EndpointPolicy. Must be in the
   * format `projects/* /locations/global`.
   */
  parent: string;
  /**
   * Required. Short name of the EndpointPolicy resource to be created.
   * E.g. "CustomECS".
   */
  endpointPolicyId: string;
  /** Required. EndpointPolicy resource to be created. */
  endpointPolicy: EndpointPolicy | undefined;
}

/** Request used with the UpdateEndpointPolicy method. */
export interface UpdateEndpointPolicyRequest {
  /**
   * Optional. Field mask is used to specify the fields to be overwritten in the
   * EndpointPolicy resource by the update.
   * The fields specified in the update_mask are relative to the resource, not
   * the full request. A field will be overwritten if it is in the mask. If the
   * user does not provide a mask then all fields will be overwritten.
   */
  updateMask:
    | string[]
    | undefined;
  /** Required. Updated EndpointPolicy resource. */
  endpointPolicy: EndpointPolicy | undefined;
}

/** Request used with the DeleteEndpointPolicy method. */
export interface DeleteEndpointPolicyRequest {
  /**
   * Required. A name of the EndpointPolicy to delete. Must be in the format
   * `projects/* /locations/global/endpointPolicies/*`.
   */
  name: string;
}

function createBaseEndpointPolicy(): EndpointPolicy {
  return {
    name: "",
    createTime: undefined,
    updateTime: undefined,
    labels: {},
    type: 0,
    authorizationPolicy: "",
    endpointMatcher: undefined,
    trafficPortSelector: undefined,
    description: "",
    serverTlsPolicy: "",
    clientTlsPolicy: "",
  };
}

export const EndpointPolicy: MessageFns<EndpointPolicy> = {
  encode(message: EndpointPolicy, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(18).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(26).fork()).join();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      EndpointPolicy_LabelsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.authorizationPolicy !== "") {
      writer.uint32(58).string(message.authorizationPolicy);
    }
    if (message.endpointMatcher !== undefined) {
      EndpointMatcher.encode(message.endpointMatcher, writer.uint32(74).fork()).join();
    }
    if (message.trafficPortSelector !== undefined) {
      TrafficPortSelector.encode(message.trafficPortSelector, writer.uint32(82).fork()).join();
    }
    if (message.description !== "") {
      writer.uint32(90).string(message.description);
    }
    if (message.serverTlsPolicy !== "") {
      writer.uint32(98).string(message.serverTlsPolicy);
    }
    if (message.clientTlsPolicy !== "") {
      writer.uint32(106).string(message.clientTlsPolicy);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EndpointPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpointPolicy();
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
          if (tag !== 34) {
            break;
          }

          const entry4 = EndpointPolicy_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.authorizationPolicy = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.endpointMatcher = EndpointMatcher.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.trafficPortSelector = TrafficPortSelector.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.description = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.serverTlsPolicy = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.clientTlsPolicy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EndpointPolicy {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      type: isSet(object.type) ? endpointPolicy_EndpointPolicyTypeFromJSON(object.type) : 0,
      authorizationPolicy: isSet(object.authorizationPolicy) ? globalThis.String(object.authorizationPolicy) : "",
      endpointMatcher: isSet(object.endpointMatcher) ? EndpointMatcher.fromJSON(object.endpointMatcher) : undefined,
      trafficPortSelector: isSet(object.trafficPortSelector)
        ? TrafficPortSelector.fromJSON(object.trafficPortSelector)
        : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      serverTlsPolicy: isSet(object.serverTlsPolicy) ? globalThis.String(object.serverTlsPolicy) : "",
      clientTlsPolicy: isSet(object.clientTlsPolicy) ? globalThis.String(object.clientTlsPolicy) : "",
    };
  },

  toJSON(message: EndpointPolicy): unknown {
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
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.type !== 0) {
      obj.type = endpointPolicy_EndpointPolicyTypeToJSON(message.type);
    }
    if (message.authorizationPolicy !== "") {
      obj.authorizationPolicy = message.authorizationPolicy;
    }
    if (message.endpointMatcher !== undefined) {
      obj.endpointMatcher = EndpointMatcher.toJSON(message.endpointMatcher);
    }
    if (message.trafficPortSelector !== undefined) {
      obj.trafficPortSelector = TrafficPortSelector.toJSON(message.trafficPortSelector);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.serverTlsPolicy !== "") {
      obj.serverTlsPolicy = message.serverTlsPolicy;
    }
    if (message.clientTlsPolicy !== "") {
      obj.clientTlsPolicy = message.clientTlsPolicy;
    }
    return obj;
  },

  create(base?: DeepPartial<EndpointPolicy>): EndpointPolicy {
    return EndpointPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EndpointPolicy>): EndpointPolicy {
    const message = createBaseEndpointPolicy();
    message.name = object.name ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.type = object.type ?? 0;
    message.authorizationPolicy = object.authorizationPolicy ?? "";
    message.endpointMatcher = (object.endpointMatcher !== undefined && object.endpointMatcher !== null)
      ? EndpointMatcher.fromPartial(object.endpointMatcher)
      : undefined;
    message.trafficPortSelector = (object.trafficPortSelector !== undefined && object.trafficPortSelector !== null)
      ? TrafficPortSelector.fromPartial(object.trafficPortSelector)
      : undefined;
    message.description = object.description ?? "";
    message.serverTlsPolicy = object.serverTlsPolicy ?? "";
    message.clientTlsPolicy = object.clientTlsPolicy ?? "";
    return message;
  },
};

function createBaseEndpointPolicy_LabelsEntry(): EndpointPolicy_LabelsEntry {
  return { key: "", value: "" };
}

export const EndpointPolicy_LabelsEntry: MessageFns<EndpointPolicy_LabelsEntry> = {
  encode(message: EndpointPolicy_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EndpointPolicy_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpointPolicy_LabelsEntry();
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

  fromJSON(object: any): EndpointPolicy_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: EndpointPolicy_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<EndpointPolicy_LabelsEntry>): EndpointPolicy_LabelsEntry {
    return EndpointPolicy_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EndpointPolicy_LabelsEntry>): EndpointPolicy_LabelsEntry {
    const message = createBaseEndpointPolicy_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseListEndpointPoliciesRequest(): ListEndpointPoliciesRequest {
  return { parent: "", pageSize: 0, pageToken: "" };
}

export const ListEndpointPoliciesRequest: MessageFns<ListEndpointPoliciesRequest> = {
  encode(message: ListEndpointPoliciesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListEndpointPoliciesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEndpointPoliciesRequest();
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

          message.pageSize = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListEndpointPoliciesRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListEndpointPoliciesRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListEndpointPoliciesRequest>): ListEndpointPoliciesRequest {
    return ListEndpointPoliciesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListEndpointPoliciesRequest>): ListEndpointPoliciesRequest {
    const message = createBaseListEndpointPoliciesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListEndpointPoliciesResponse(): ListEndpointPoliciesResponse {
  return { endpointPolicies: [], nextPageToken: "" };
}

export const ListEndpointPoliciesResponse: MessageFns<ListEndpointPoliciesResponse> = {
  encode(message: ListEndpointPoliciesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.endpointPolicies) {
      EndpointPolicy.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListEndpointPoliciesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEndpointPoliciesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpointPolicies.push(EndpointPolicy.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListEndpointPoliciesResponse {
    return {
      endpointPolicies: globalThis.Array.isArray(object?.endpointPolicies)
        ? object.endpointPolicies.map((e: any) => EndpointPolicy.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListEndpointPoliciesResponse): unknown {
    const obj: any = {};
    if (message.endpointPolicies?.length) {
      obj.endpointPolicies = message.endpointPolicies.map((e) => EndpointPolicy.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListEndpointPoliciesResponse>): ListEndpointPoliciesResponse {
    return ListEndpointPoliciesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListEndpointPoliciesResponse>): ListEndpointPoliciesResponse {
    const message = createBaseListEndpointPoliciesResponse();
    message.endpointPolicies = object.endpointPolicies?.map((e) => EndpointPolicy.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseGetEndpointPolicyRequest(): GetEndpointPolicyRequest {
  return { name: "" };
}

export const GetEndpointPolicyRequest: MessageFns<GetEndpointPolicyRequest> = {
  encode(message: GetEndpointPolicyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetEndpointPolicyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEndpointPolicyRequest();
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

  fromJSON(object: any): GetEndpointPolicyRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetEndpointPolicyRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetEndpointPolicyRequest>): GetEndpointPolicyRequest {
    return GetEndpointPolicyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetEndpointPolicyRequest>): GetEndpointPolicyRequest {
    const message = createBaseGetEndpointPolicyRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCreateEndpointPolicyRequest(): CreateEndpointPolicyRequest {
  return { parent: "", endpointPolicyId: "", endpointPolicy: undefined };
}

export const CreateEndpointPolicyRequest: MessageFns<CreateEndpointPolicyRequest> = {
  encode(message: CreateEndpointPolicyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.endpointPolicyId !== "") {
      writer.uint32(18).string(message.endpointPolicyId);
    }
    if (message.endpointPolicy !== undefined) {
      EndpointPolicy.encode(message.endpointPolicy, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateEndpointPolicyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEndpointPolicyRequest();
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

          message.endpointPolicyId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.endpointPolicy = EndpointPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateEndpointPolicyRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      endpointPolicyId: isSet(object.endpointPolicyId) ? globalThis.String(object.endpointPolicyId) : "",
      endpointPolicy: isSet(object.endpointPolicy) ? EndpointPolicy.fromJSON(object.endpointPolicy) : undefined,
    };
  },

  toJSON(message: CreateEndpointPolicyRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.endpointPolicyId !== "") {
      obj.endpointPolicyId = message.endpointPolicyId;
    }
    if (message.endpointPolicy !== undefined) {
      obj.endpointPolicy = EndpointPolicy.toJSON(message.endpointPolicy);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateEndpointPolicyRequest>): CreateEndpointPolicyRequest {
    return CreateEndpointPolicyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateEndpointPolicyRequest>): CreateEndpointPolicyRequest {
    const message = createBaseCreateEndpointPolicyRequest();
    message.parent = object.parent ?? "";
    message.endpointPolicyId = object.endpointPolicyId ?? "";
    message.endpointPolicy = (object.endpointPolicy !== undefined && object.endpointPolicy !== null)
      ? EndpointPolicy.fromPartial(object.endpointPolicy)
      : undefined;
    return message;
  },
};

function createBaseUpdateEndpointPolicyRequest(): UpdateEndpointPolicyRequest {
  return { updateMask: undefined, endpointPolicy: undefined };
}

export const UpdateEndpointPolicyRequest: MessageFns<UpdateEndpointPolicyRequest> = {
  encode(message: UpdateEndpointPolicyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(10).fork()).join();
    }
    if (message.endpointPolicy !== undefined) {
      EndpointPolicy.encode(message.endpointPolicy, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateEndpointPolicyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEndpointPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endpointPolicy = EndpointPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateEndpointPolicyRequest {
    return {
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      endpointPolicy: isSet(object.endpointPolicy) ? EndpointPolicy.fromJSON(object.endpointPolicy) : undefined,
    };
  },

  toJSON(message: UpdateEndpointPolicyRequest): unknown {
    const obj: any = {};
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.endpointPolicy !== undefined) {
      obj.endpointPolicy = EndpointPolicy.toJSON(message.endpointPolicy);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateEndpointPolicyRequest>): UpdateEndpointPolicyRequest {
    return UpdateEndpointPolicyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateEndpointPolicyRequest>): UpdateEndpointPolicyRequest {
    const message = createBaseUpdateEndpointPolicyRequest();
    message.updateMask = object.updateMask ?? undefined;
    message.endpointPolicy = (object.endpointPolicy !== undefined && object.endpointPolicy !== null)
      ? EndpointPolicy.fromPartial(object.endpointPolicy)
      : undefined;
    return message;
  },
};

function createBaseDeleteEndpointPolicyRequest(): DeleteEndpointPolicyRequest {
  return { name: "" };
}

export const DeleteEndpointPolicyRequest: MessageFns<DeleteEndpointPolicyRequest> = {
  encode(message: DeleteEndpointPolicyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteEndpointPolicyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEndpointPolicyRequest();
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

  fromJSON(object: any): DeleteEndpointPolicyRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeleteEndpointPolicyRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteEndpointPolicyRequest>): DeleteEndpointPolicyRequest {
    return DeleteEndpointPolicyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteEndpointPolicyRequest>): DeleteEndpointPolicyRequest {
    const message = createBaseDeleteEndpointPolicyRequest();
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
