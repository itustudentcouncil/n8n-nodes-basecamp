// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/devtools/artifactregistry/v1beta2/version.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Struct } from "../../../protobuf/struct.js";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { Tag } from "./tag.js";

export const protobufPackage = "google.devtools.artifactregistry.v1beta2";

/**
 * The view, which determines what version information is returned in a
 * response.
 */
export enum VersionView {
  /**
   * VERSION_VIEW_UNSPECIFIED - The default / unset value.
   * The API will default to the BASIC view.
   */
  VERSION_VIEW_UNSPECIFIED = 0,
  /** BASIC - Includes basic information about the version, but not any related tags. */
  BASIC = 1,
  /** FULL - Include everything. */
  FULL = 2,
  UNRECOGNIZED = -1,
}

export function versionViewFromJSON(object: any): VersionView {
  switch (object) {
    case 0:
    case "VERSION_VIEW_UNSPECIFIED":
      return VersionView.VERSION_VIEW_UNSPECIFIED;
    case 1:
    case "BASIC":
      return VersionView.BASIC;
    case 2:
    case "FULL":
      return VersionView.FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VersionView.UNRECOGNIZED;
  }
}

export function versionViewToJSON(object: VersionView): string {
  switch (object) {
    case VersionView.VERSION_VIEW_UNSPECIFIED:
      return "VERSION_VIEW_UNSPECIFIED";
    case VersionView.BASIC:
      return "BASIC";
    case VersionView.FULL:
      return "FULL";
    case VersionView.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * The body of a version resource. A version resource represents a
 * collection of components, such as files and other data. This may correspond
 * to a version in many package management schemes.
 */
export interface Version {
  /**
   * The name of the version, for example:
   * "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1".
   * If the package or version ID parts contain slashes, the slashes are
   * escaped.
   */
  name: string;
  /** Optional. Description of the version, as specified in its metadata. */
  description: string;
  /** The time when the version was created. */
  createTime:
    | Date
    | undefined;
  /** The time when the version was last updated. */
  updateTime:
    | Date
    | undefined;
  /**
   * Output only. A list of related tags. Will contain up to 100 tags that
   * reference this version.
   */
  relatedTags: Tag[];
  /**
   * Output only. Repository-specific Metadata stored against this version.
   * The fields returned are defined by the underlying repository-specific
   * resource. Currently, the only resource in use is
   * [DockerImage][google.devtools.artifactregistry.v1.DockerImage]
   */
  metadata: { [key: string]: any } | undefined;
}

/** The request to list versions. */
export interface ListVersionsRequest {
  /** The name of the parent resource whose versions will be listed. */
  parent: string;
  /** The maximum number of versions to return. Maximum page size is 1,000. */
  pageSize: number;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken: string;
  /** The view that should be returned in the response. */
  view: VersionView;
  /** Optional. The field to order the results by. */
  orderBy: string;
}

/** The response from listing versions. */
export interface ListVersionsResponse {
  /** The versions returned. */
  versions: Version[];
  /**
   * The token to retrieve the next page of versions, or empty if there are no
   * more versions to return.
   */
  nextPageToken: string;
}

/** The request to retrieve a version. */
export interface GetVersionRequest {
  /** The name of the version to retrieve. */
  name: string;
  /** The view that should be returned in the response. */
  view: VersionView;
}

/** The request to delete a version. */
export interface DeleteVersionRequest {
  /** The name of the version to delete. */
  name: string;
  /**
   * By default, a version that is tagged may not be deleted. If force=true, the
   * version and any tags pointing to the version are deleted.
   */
  force: boolean;
}

function createBaseVersion(): Version {
  return {
    name: "",
    description: "",
    createTime: undefined,
    updateTime: undefined,
    relatedTags: [],
    metadata: undefined,
  };
}

export const Version: MessageFns<Version> = {
  encode(message: Version, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).join();
    }
    for (const v of message.relatedTags) {
      Tag.encode(v!, writer.uint32(58).fork()).join();
    }
    if (message.metadata !== undefined) {
      Struct.encode(Struct.wrap(message.metadata), writer.uint32(66).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Version {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
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

          message.relatedTags.push(Tag.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.metadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      relatedTags: globalThis.Array.isArray(object?.relatedTags)
        ? object.relatedTags.map((e: any) => Tag.fromJSON(e))
        : [],
      metadata: isObject(object.metadata) ? object.metadata : undefined,
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
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
    if (message.relatedTags?.length) {
      obj.relatedTags = message.relatedTags.map((e) => Tag.toJSON(e));
    }
    if (message.metadata !== undefined) {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create(base?: DeepPartial<Version>): Version {
    return Version.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Version>): Version {
    const message = createBaseVersion();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.relatedTags = object.relatedTags?.map((e) => Tag.fromPartial(e)) || [];
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseListVersionsRequest(): ListVersionsRequest {
  return { parent: "", pageSize: 0, pageToken: "", view: 0, orderBy: "" };
}

export const ListVersionsRequest: MessageFns<ListVersionsRequest> = {
  encode(message: ListVersionsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.view !== 0) {
      writer.uint32(32).int32(message.view);
    }
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListVersionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVersionsRequest();
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
        case 4:
          if (tag !== 32) {
            break;
          }

          message.view = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListVersionsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      view: isSet(object.view) ? versionViewFromJSON(object.view) : 0,
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
    };
  },

  toJSON(message: ListVersionsRequest): unknown {
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
    if (message.view !== 0) {
      obj.view = versionViewToJSON(message.view);
    }
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    return obj;
  },

  create(base?: DeepPartial<ListVersionsRequest>): ListVersionsRequest {
    return ListVersionsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListVersionsRequest>): ListVersionsRequest {
    const message = createBaseListVersionsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.view = object.view ?? 0;
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

function createBaseListVersionsResponse(): ListVersionsResponse {
  return { versions: [], nextPageToken: "" };
}

export const ListVersionsResponse: MessageFns<ListVersionsResponse> = {
  encode(message: ListVersionsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListVersionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.versions.push(Version.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListVersionsResponse {
    return {
      versions: globalThis.Array.isArray(object?.versions) ? object.versions.map((e: any) => Version.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListVersionsResponse): unknown {
    const obj: any = {};
    if (message.versions?.length) {
      obj.versions = message.versions.map((e) => Version.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListVersionsResponse>): ListVersionsResponse {
    return ListVersionsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListVersionsResponse>): ListVersionsResponse {
    const message = createBaseListVersionsResponse();
    message.versions = object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseGetVersionRequest(): GetVersionRequest {
  return { name: "", view: 0 };
}

export const GetVersionRequest: MessageFns<GetVersionRequest> = {
  encode(message: GetVersionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.view !== 0) {
      writer.uint32(16).int32(message.view);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetVersionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetVersionRequest();
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

          message.view = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetVersionRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      view: isSet(object.view) ? versionViewFromJSON(object.view) : 0,
    };
  },

  toJSON(message: GetVersionRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.view !== 0) {
      obj.view = versionViewToJSON(message.view);
    }
    return obj;
  },

  create(base?: DeepPartial<GetVersionRequest>): GetVersionRequest {
    return GetVersionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetVersionRequest>): GetVersionRequest {
    const message = createBaseGetVersionRequest();
    message.name = object.name ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

function createBaseDeleteVersionRequest(): DeleteVersionRequest {
  return { name: "", force: false };
}

export const DeleteVersionRequest: MessageFns<DeleteVersionRequest> = {
  encode(message: DeleteVersionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.force !== false) {
      writer.uint32(16).bool(message.force);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteVersionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteVersionRequest();
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

          message.force = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteVersionRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      force: isSet(object.force) ? globalThis.Boolean(object.force) : false,
    };
  },

  toJSON(message: DeleteVersionRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.force !== false) {
      obj.force = message.force;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteVersionRequest>): DeleteVersionRequest {
    return DeleteVersionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteVersionRequest>): DeleteVersionRequest {
    const message = createBaseDeleteVersionRequest();
    message.name = object.name ?? "";
    message.force = object.force ?? false;
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
