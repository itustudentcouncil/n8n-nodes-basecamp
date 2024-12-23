// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v1/source.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.securitycenter.v1";

/**
 * Security Command Center finding source. A finding source
 * is an entity or a mechanism that can produce a finding. A source is like a
 * container of findings that come from the same scanner, logger, monitor, and
 * other tools.
 */
export interface Source {
  /**
   * The relative resource name of this source. See:
   * https://cloud.google.com/apis/design/resource_names#relative_resource_name
   * Example:
   * "organizations/{organization_id}/sources/{source_id}"
   */
  name: string;
  /**
   * The source's display name.
   * A source's display name must be unique amongst its siblings, for example,
   * two sources with the same parent can't share the same display name.
   * The display name must have a length between 1 and 64 characters
   * (inclusive).
   */
  displayName: string;
  /**
   * The description of the source (max of 1024 characters).
   * Example:
   * "Web Security Scanner is a web security scanner for common
   * vulnerabilities in App Engine applications. It can automatically
   * scan and detect four common vulnerabilities, including cross-site-scripting
   * (XSS), Flash injection, mixed content (HTTP in HTTPS), and
   * outdated or insecure libraries."
   */
  description: string;
  /**
   * The canonical name of the finding source. It's either
   * "organizations/{organization_id}/sources/{source_id}",
   * "folders/{folder_id}/sources/{source_id}", or
   * "projects/{project_number}/sources/{source_id}",
   * depending on the closest CRM ancestor of the resource associated with the
   * finding.
   */
  canonicalName: string;
}

function createBaseSource(): Source {
  return { name: "", displayName: "", description: "", canonicalName: "" };
}

export const Source: MessageFns<Source> = {
  encode(message: Source, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.canonicalName !== "") {
      writer.uint32(114).string(message.canonicalName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Source {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSource();
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

          message.description = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.canonicalName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Source {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      canonicalName: isSet(object.canonicalName) ? globalThis.String(object.canonicalName) : "",
    };
  },

  toJSON(message: Source): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.canonicalName !== "") {
      obj.canonicalName = message.canonicalName;
    }
    return obj;
  },

  create(base?: DeepPartial<Source>): Source {
    return Source.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Source>): Source {
    const message = createBaseSource();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.canonicalName = object.canonicalName ?? "";
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
