// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v2/exfiltration.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.securitycenter.v2";

/**
 * Exfiltration represents a data exfiltration attempt from one or more sources
 * to one or more targets. The `sources` attribute lists the sources of the
 * exfiltrated data. The `targets` attribute lists the destinations the data was
 * copied to.
 */
export interface Exfiltration {
  /**
   * If there are multiple sources, then the data is considered "joined" between
   * them. For instance, BigQuery can join multiple tables, and each
   * table would be considered a source.
   */
  sources: ExfilResource[];
  /**
   * If there are multiple targets, each target would get a complete copy of the
   * "joined" source data.
   */
  targets: ExfilResource[];
  /** Total exfiltrated bytes processed for the entire job. */
  totalExfiltratedBytes: Long;
}

/** Resource where data was exfiltrated from or exfiltrated to. */
export interface ExfilResource {
  /**
   * The resource's [full resource
   * name](https://cloud.google.com/apis/design/resource_names#full_resource_name).
   */
  name: string;
  /**
   * Subcomponents of the asset that was exfiltrated, like URIs used during
   * exfiltration, table names, databases, and filenames. For example, multiple
   * tables might have been exfiltrated from the same Cloud SQL instance, or
   * multiple files might have been exfiltrated from the same Cloud Storage
   * bucket.
   */
  components: string[];
}

function createBaseExfiltration(): Exfiltration {
  return { sources: [], targets: [], totalExfiltratedBytes: Long.ZERO };
}

export const Exfiltration: MessageFns<Exfiltration> = {
  encode(message: Exfiltration, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.sources) {
      ExfilResource.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.targets) {
      ExfilResource.encode(v!, writer.uint32(18).fork()).join();
    }
    if (!message.totalExfiltratedBytes.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.totalExfiltratedBytes.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Exfiltration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExfiltration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sources.push(ExfilResource.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targets.push(ExfilResource.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalExfiltratedBytes = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Exfiltration {
    return {
      sources: globalThis.Array.isArray(object?.sources)
        ? object.sources.map((e: any) => ExfilResource.fromJSON(e))
        : [],
      targets: globalThis.Array.isArray(object?.targets)
        ? object.targets.map((e: any) => ExfilResource.fromJSON(e))
        : [],
      totalExfiltratedBytes: isSet(object.totalExfiltratedBytes)
        ? Long.fromValue(object.totalExfiltratedBytes)
        : Long.ZERO,
    };
  },

  toJSON(message: Exfiltration): unknown {
    const obj: any = {};
    if (message.sources?.length) {
      obj.sources = message.sources.map((e) => ExfilResource.toJSON(e));
    }
    if (message.targets?.length) {
      obj.targets = message.targets.map((e) => ExfilResource.toJSON(e));
    }
    if (!message.totalExfiltratedBytes.equals(Long.ZERO)) {
      obj.totalExfiltratedBytes = (message.totalExfiltratedBytes || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<Exfiltration>): Exfiltration {
    return Exfiltration.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Exfiltration>): Exfiltration {
    const message = createBaseExfiltration();
    message.sources = object.sources?.map((e) => ExfilResource.fromPartial(e)) || [];
    message.targets = object.targets?.map((e) => ExfilResource.fromPartial(e)) || [];
    message.totalExfiltratedBytes =
      (object.totalExfiltratedBytes !== undefined && object.totalExfiltratedBytes !== null)
        ? Long.fromValue(object.totalExfiltratedBytes)
        : Long.ZERO;
    return message;
  },
};

function createBaseExfilResource(): ExfilResource {
  return { name: "", components: [] };
}

export const ExfilResource: MessageFns<ExfilResource> = {
  encode(message: ExfilResource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.components) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExfilResource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExfilResource();
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

          message.components.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExfilResource {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      components: globalThis.Array.isArray(object?.components)
        ? object.components.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ExfilResource): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.components?.length) {
      obj.components = message.components;
    }
    return obj;
  },

  create(base?: DeepPartial<ExfilResource>): ExfilResource {
    return ExfilResource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExfilResource>): ExfilResource {
    const message = createBaseExfilResource();
    message.name = object.name ?? "";
    message.components = object.components?.map((e) => e) || [];
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