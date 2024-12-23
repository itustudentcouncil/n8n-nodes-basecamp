// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/resourcemanager/v3/organizations.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import {
  GetIamPolicyRequest,
  SetIamPolicyRequest,
  TestIamPermissionsRequest,
  TestIamPermissionsResponse,
} from "../../../iam/v1/iam_policy.js";
import { Policy } from "../../../iam/v1/policy.js";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.resourcemanager.v3";

/**
 * The root node in the resource hierarchy to which a particular entity's
 * (a company, for example) resources belong.
 */
export interface Organization {
  /**
   * Output only. The resource name of the organization. This is the
   * organization's relative path in the API. Its format is
   * "organizations/[organization_id]". For example, "organizations/1234".
   */
  name: string;
  /**
   * Output only. A human-readable string that refers to the organization in the
   * Google Cloud Console. This string is set by the server and cannot be
   * changed. The string will be set to the primary domain (for example,
   * "google.com") of the Google Workspace customer that owns the organization.
   */
  displayName: string;
  /** Immutable. The G Suite / Workspace customer id used in the Directory API. */
  directoryCustomerId?:
    | string
    | undefined;
  /** Output only. The organization's current lifecycle state. */
  state: Organization_State;
  /** Output only. Timestamp when the Organization was created. */
  createTime:
    | Date
    | undefined;
  /** Output only. Timestamp when the Organization was last modified. */
  updateTime:
    | Date
    | undefined;
  /** Output only. Timestamp when the Organization was requested for deletion. */
  deleteTime:
    | Date
    | undefined;
  /**
   * Output only. A checksum computed by the server based on the current value
   * of the Organization resource. This may be sent on update and delete
   * requests to ensure the client has an up-to-date value before proceeding.
   */
  etag: string;
}

/** Organization lifecycle states. */
export enum Organization_State {
  /** STATE_UNSPECIFIED - Unspecified state.  This is only useful for distinguishing unset values. */
  STATE_UNSPECIFIED = 0,
  /** ACTIVE - The normal and active state. */
  ACTIVE = 1,
  /** DELETE_REQUESTED - The organization has been marked for deletion by the user. */
  DELETE_REQUESTED = 2,
  UNRECOGNIZED = -1,
}

export function organization_StateFromJSON(object: any): Organization_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Organization_State.STATE_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return Organization_State.ACTIVE;
    case 2:
    case "DELETE_REQUESTED":
      return Organization_State.DELETE_REQUESTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Organization_State.UNRECOGNIZED;
  }
}

export function organization_StateToJSON(object: Organization_State): string {
  switch (object) {
    case Organization_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Organization_State.ACTIVE:
      return "ACTIVE";
    case Organization_State.DELETE_REQUESTED:
      return "DELETE_REQUESTED";
    case Organization_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * The request sent to the `GetOrganization` method. The `name` field is
 * required. `organization_id` is no longer accepted.
 */
export interface GetOrganizationRequest {
  /**
   * Required. The resource name of the Organization to fetch. This is the
   * organization's relative path in the API, formatted as
   * "organizations/[organizationId]". For example, "organizations/1234".
   */
  name: string;
}

/** The request sent to the `SearchOrganizations` method. */
export interface SearchOrganizationsRequest {
  /**
   * Optional. The maximum number of organizations to return in the response.
   * The server can return fewer organizations than requested. If unspecified,
   * server picks an appropriate default.
   */
  pageSize: number;
  /**
   * Optional. A pagination token returned from a previous call to
   * `SearchOrganizations` that indicates from where listing should continue.
   */
  pageToken: string;
  /**
   * Optional. An optional query string used to filter the Organizations to
   * return in the response. Query rules are case-insensitive.
   *
   * ```
   * | Field            | Description                                |
   * |------------------|--------------------------------------------|
   * | directoryCustomerId, owner.directoryCustomerId | Filters by directory
   * customer id. |
   * | domain           | Filters by domain.                         |
   * ```
   *
   * Organizations may be queried by `directoryCustomerId` or by
   * `domain`, where the domain is a G Suite domain, for example:
   *
   * * Query `directorycustomerid:123456789` returns Organization
   * resources with `owner.directory_customer_id` equal to `123456789`.
   * * Query `domain:google.com` returns Organization resources corresponding
   * to the domain `google.com`.
   */
  query: string;
}

/** The response returned from the `SearchOrganizations` method. */
export interface SearchOrganizationsResponse {
  /**
   * The list of Organizations that matched the search query, possibly
   * paginated.
   */
  organizations: Organization[];
  /**
   * A pagination token to be used to retrieve the next page of results. If the
   * result is too large to fit within the page size specified in the request,
   * this field will be set with a token that can be used to fetch the next page
   * of results. If this field is empty, it indicates that this response
   * contains the last page of results.
   */
  nextPageToken: string;
}

/**
 * A status object which is used as the `metadata` field for the operation
 * returned by DeleteOrganization.
 */
export interface DeleteOrganizationMetadata {
}

/**
 * A status object which is used as the `metadata` field for the Operation
 * returned by UndeleteOrganization.
 */
export interface UndeleteOrganizationMetadata {
}

function createBaseOrganization(): Organization {
  return {
    name: "",
    displayName: "",
    directoryCustomerId: undefined,
    state: 0,
    createTime: undefined,
    updateTime: undefined,
    deleteTime: undefined,
    etag: "",
  };
}

export const Organization: MessageFns<Organization> = {
  encode(message: Organization, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.directoryCustomerId !== undefined) {
      writer.uint32(26).string(message.directoryCustomerId);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).join();
    }
    if (message.deleteTime !== undefined) {
      Timestamp.encode(toTimestamp(message.deleteTime), writer.uint32(58).fork()).join();
    }
    if (message.etag !== "") {
      writer.uint32(66).string(message.etag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Organization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganization();
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

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.directoryCustomerId = reader.string();
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

          message.deleteTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.etag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Organization {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      directoryCustomerId: isSet(object.directoryCustomerId)
        ? globalThis.String(object.directoryCustomerId)
        : undefined,
      state: isSet(object.state) ? organization_StateFromJSON(object.state) : 0,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      deleteTime: isSet(object.deleteTime) ? fromJsonTimestamp(object.deleteTime) : undefined,
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
    };
  },

  toJSON(message: Organization): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.directoryCustomerId !== undefined) {
      obj.directoryCustomerId = message.directoryCustomerId;
    }
    if (message.state !== 0) {
      obj.state = organization_StateToJSON(message.state);
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.deleteTime !== undefined) {
      obj.deleteTime = message.deleteTime.toISOString();
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    return obj;
  },

  create(base?: DeepPartial<Organization>): Organization {
    return Organization.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Organization>): Organization {
    const message = createBaseOrganization();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.directoryCustomerId = object.directoryCustomerId ?? undefined;
    message.state = object.state ?? 0;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.deleteTime = object.deleteTime ?? undefined;
    message.etag = object.etag ?? "";
    return message;
  },
};

function createBaseGetOrganizationRequest(): GetOrganizationRequest {
  return { name: "" };
}

export const GetOrganizationRequest: MessageFns<GetOrganizationRequest> = {
  encode(message: GetOrganizationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrganizationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrganizationRequest();
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

  fromJSON(object: any): GetOrganizationRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetOrganizationRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetOrganizationRequest>): GetOrganizationRequest {
    return GetOrganizationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetOrganizationRequest>): GetOrganizationRequest {
    const message = createBaseGetOrganizationRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSearchOrganizationsRequest(): SearchOrganizationsRequest {
  return { pageSize: 0, pageToken: "", query: "" };
}

export const SearchOrganizationsRequest: MessageFns<SearchOrganizationsRequest> = {
  encode(message: SearchOrganizationsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pageSize !== 0) {
      writer.uint32(8).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.query !== "") {
      writer.uint32(26).string(message.query);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SearchOrganizationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchOrganizationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.query = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchOrganizationsRequest {
    return {
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      query: isSet(object.query) ? globalThis.String(object.query) : "",
    };
  },

  toJSON(message: SearchOrganizationsRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.query !== "") {
      obj.query = message.query;
    }
    return obj;
  },

  create(base?: DeepPartial<SearchOrganizationsRequest>): SearchOrganizationsRequest {
    return SearchOrganizationsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchOrganizationsRequest>): SearchOrganizationsRequest {
    const message = createBaseSearchOrganizationsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.query = object.query ?? "";
    return message;
  },
};

function createBaseSearchOrganizationsResponse(): SearchOrganizationsResponse {
  return { organizations: [], nextPageToken: "" };
}

export const SearchOrganizationsResponse: MessageFns<SearchOrganizationsResponse> = {
  encode(message: SearchOrganizationsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.organizations) {
      Organization.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SearchOrganizationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchOrganizationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.organizations.push(Organization.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SearchOrganizationsResponse {
    return {
      organizations: globalThis.Array.isArray(object?.organizations)
        ? object.organizations.map((e: any) => Organization.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: SearchOrganizationsResponse): unknown {
    const obj: any = {};
    if (message.organizations?.length) {
      obj.organizations = message.organizations.map((e) => Organization.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<SearchOrganizationsResponse>): SearchOrganizationsResponse {
    return SearchOrganizationsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchOrganizationsResponse>): SearchOrganizationsResponse {
    const message = createBaseSearchOrganizationsResponse();
    message.organizations = object.organizations?.map((e) => Organization.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseDeleteOrganizationMetadata(): DeleteOrganizationMetadata {
  return {};
}

export const DeleteOrganizationMetadata: MessageFns<DeleteOrganizationMetadata> = {
  encode(_: DeleteOrganizationMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteOrganizationMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOrganizationMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DeleteOrganizationMetadata {
    return {};
  },

  toJSON(_: DeleteOrganizationMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<DeleteOrganizationMetadata>): DeleteOrganizationMetadata {
    return DeleteOrganizationMetadata.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<DeleteOrganizationMetadata>): DeleteOrganizationMetadata {
    const message = createBaseDeleteOrganizationMetadata();
    return message;
  },
};

function createBaseUndeleteOrganizationMetadata(): UndeleteOrganizationMetadata {
  return {};
}

export const UndeleteOrganizationMetadata: MessageFns<UndeleteOrganizationMetadata> = {
  encode(_: UndeleteOrganizationMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UndeleteOrganizationMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndeleteOrganizationMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UndeleteOrganizationMetadata {
    return {};
  },

  toJSON(_: UndeleteOrganizationMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<UndeleteOrganizationMetadata>): UndeleteOrganizationMetadata {
    return UndeleteOrganizationMetadata.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<UndeleteOrganizationMetadata>): UndeleteOrganizationMetadata {
    const message = createBaseUndeleteOrganizationMetadata();
    return message;
  },
};

/** Allows users to manage their organization resources. */
export type OrganizationsDefinition = typeof OrganizationsDefinition;
export const OrganizationsDefinition = {
  name: "Organizations",
  fullName: "google.cloud.resourcemanager.v3.Organizations",
  methods: {
    /** Fetches an organization resource identified by the specified resource name. */
    getOrganization: {
      name: "GetOrganization",
      requestType: GetOrganizationRequest,
      requestStream: false,
      responseType: Organization,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              28,
              18,
              26,
              47,
              118,
              51,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              111,
              114,
              103,
              97,
              110,
              105,
              122,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Searches organization resources that are visible to the user and satisfy
     * the specified filter. This method returns organizations in an unspecified
     * order. New organizations do not necessarily appear at the end of the
     * results, and may take a small amount of time to appear.
     *
     * Search will only return organizations on which the user has the permission
     * `resourcemanager.organizations.get`
     */
    searchOrganizations: {
      name: "SearchOrganizations",
      requestType: SearchOrganizationsRequest,
      requestStream: false,
      responseType: SearchOrganizationsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([5, 113, 117, 101, 114, 121])],
          578365826: [
            Buffer.from([
              26,
              18,
              24,
              47,
              118,
              51,
              47,
              111,
              114,
              103,
              97,
              110,
              105,
              122,
              97,
              116,
              105,
              111,
              110,
              115,
              58,
              115,
              101,
              97,
              114,
              99,
              104,
            ]),
          ],
        },
      },
    },
    /**
     * Gets the access control policy for an organization resource. The policy may
     * be empty if no such policy or resource exists. The `resource` field should
     * be the organization's resource name, for example: "organizations/123".
     *
     * Authorization requires the IAM permission
     * `resourcemanager.organizations.getIamPolicy` on the specified organization.
     */
    getIamPolicy: {
      name: "GetIamPolicy",
      requestType: GetIamPolicyRequest,
      requestStream: false,
      responseType: Policy,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([8, 114, 101, 115, 111, 117, 114, 99, 101])],
          578365826: [
            Buffer.from([
              48,
              58,
              1,
              42,
              34,
              43,
              47,
              118,
              51,
              47,
              123,
              114,
              101,
              115,
              111,
              117,
              114,
              99,
              101,
              61,
              111,
              114,
              103,
              97,
              110,
              105,
              122,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              58,
              103,
              101,
              116,
              73,
              97,
              109,
              80,
              111,
              108,
              105,
              99,
              121,
            ]),
          ],
        },
      },
    },
    /**
     * Sets the access control policy on an organization resource. Replaces any
     * existing policy. The `resource` field should be the organization's resource
     * name, for example: "organizations/123".
     *
     * Authorization requires the IAM permission
     * `resourcemanager.organizations.setIamPolicy` on the specified organization.
     */
    setIamPolicy: {
      name: "SetIamPolicy",
      requestType: SetIamPolicyRequest,
      requestStream: false,
      responseType: Policy,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([8, 114, 101, 115, 111, 117, 114, 99, 101])],
          578365826: [
            Buffer.from([
              48,
              58,
              1,
              42,
              34,
              43,
              47,
              118,
              51,
              47,
              123,
              114,
              101,
              115,
              111,
              117,
              114,
              99,
              101,
              61,
              111,
              114,
              103,
              97,
              110,
              105,
              122,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              58,
              115,
              101,
              116,
              73,
              97,
              109,
              80,
              111,
              108,
              105,
              99,
              121,
            ]),
          ],
        },
      },
    },
    /**
     * Returns the permissions that a caller has on the specified organization.
     * The `resource` field should be the organization's resource name,
     * for example: "organizations/123".
     *
     * There are no permissions required for making this API call.
     */
    testIamPermissions: {
      name: "TestIamPermissions",
      requestType: TestIamPermissionsRequest,
      requestStream: false,
      responseType: TestIamPermissionsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              20,
              114,
              101,
              115,
              111,
              117,
              114,
              99,
              101,
              44,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
            ]),
          ],
          578365826: [
            Buffer.from([
              54,
              58,
              1,
              42,
              34,
              49,
              47,
              118,
              51,
              47,
              123,
              114,
              101,
              115,
              111,
              117,
              114,
              99,
              101,
              61,
              111,
              114,
              103,
              97,
              110,
              105,
              122,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              58,
              116,
              101,
              115,
              116,
              73,
              97,
              109,
              80,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface OrganizationsServiceImplementation<CallContextExt = {}> {
  /** Fetches an organization resource identified by the specified resource name. */
  getOrganization(
    request: GetOrganizationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Organization>>;
  /**
   * Searches organization resources that are visible to the user and satisfy
   * the specified filter. This method returns organizations in an unspecified
   * order. New organizations do not necessarily appear at the end of the
   * results, and may take a small amount of time to appear.
   *
   * Search will only return organizations on which the user has the permission
   * `resourcemanager.organizations.get`
   */
  searchOrganizations(
    request: SearchOrganizationsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SearchOrganizationsResponse>>;
  /**
   * Gets the access control policy for an organization resource. The policy may
   * be empty if no such policy or resource exists. The `resource` field should
   * be the organization's resource name, for example: "organizations/123".
   *
   * Authorization requires the IAM permission
   * `resourcemanager.organizations.getIamPolicy` on the specified organization.
   */
  getIamPolicy(request: GetIamPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Policy>>;
  /**
   * Sets the access control policy on an organization resource. Replaces any
   * existing policy. The `resource` field should be the organization's resource
   * name, for example: "organizations/123".
   *
   * Authorization requires the IAM permission
   * `resourcemanager.organizations.setIamPolicy` on the specified organization.
   */
  setIamPolicy(request: SetIamPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Policy>>;
  /**
   * Returns the permissions that a caller has on the specified organization.
   * The `resource` field should be the organization's resource name,
   * for example: "organizations/123".
   *
   * There are no permissions required for making this API call.
   */
  testIamPermissions(
    request: TestIamPermissionsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TestIamPermissionsResponse>>;
}

export interface OrganizationsClient<CallOptionsExt = {}> {
  /** Fetches an organization resource identified by the specified resource name. */
  getOrganization(
    request: DeepPartial<GetOrganizationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Organization>;
  /**
   * Searches organization resources that are visible to the user and satisfy
   * the specified filter. This method returns organizations in an unspecified
   * order. New organizations do not necessarily appear at the end of the
   * results, and may take a small amount of time to appear.
   *
   * Search will only return organizations on which the user has the permission
   * `resourcemanager.organizations.get`
   */
  searchOrganizations(
    request: DeepPartial<SearchOrganizationsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SearchOrganizationsResponse>;
  /**
   * Gets the access control policy for an organization resource. The policy may
   * be empty if no such policy or resource exists. The `resource` field should
   * be the organization's resource name, for example: "organizations/123".
   *
   * Authorization requires the IAM permission
   * `resourcemanager.organizations.getIamPolicy` on the specified organization.
   */
  getIamPolicy(request: DeepPartial<GetIamPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<Policy>;
  /**
   * Sets the access control policy on an organization resource. Replaces any
   * existing policy. The `resource` field should be the organization's resource
   * name, for example: "organizations/123".
   *
   * Authorization requires the IAM permission
   * `resourcemanager.organizations.setIamPolicy` on the specified organization.
   */
  setIamPolicy(request: DeepPartial<SetIamPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<Policy>;
  /**
   * Returns the permissions that a caller has on the specified organization.
   * The `resource` field should be the organization's resource name,
   * for example: "organizations/123".
   *
   * There are no permissions required for making this API call.
   */
  testIamPermissions(
    request: DeepPartial<TestIamPermissionsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TestIamPermissionsResponse>;
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
