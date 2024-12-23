// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/gkebackup/v1/common.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.gkebackup.v1";

/** A list of Kubernetes Namespaces */
export interface Namespaces {
  /** Optional. A list of Kubernetes Namespaces */
  namespaces: string[];
}

/** A reference to a namespaced resource in Kubernetes. */
export interface NamespacedName {
  /** Optional. The Namespace of the Kubernetes resource. */
  namespace: string;
  /** Optional. The name of the Kubernetes resource. */
  name: string;
}

/** A list of namespaced Kubernetes resources. */
export interface NamespacedNames {
  /** Optional. A list of namespaced Kubernetes resources. */
  namespacedNames: NamespacedName[];
}

/**
 * Defined a customer managed encryption key that will be used to encrypt Backup
 * artifacts.
 */
export interface EncryptionKey {
  /**
   * Optional. Google Cloud KMS encryption key. Format:
   * `projects/* /locations/* /keyRings/* /cryptoKeys/*`
   */
  gcpKmsEncryptionKey: string;
}

/** Message to encapsulate VolumeType enum. */
export interface VolumeTypeEnum {
}

/** Supported volume types. */
export enum VolumeTypeEnum_VolumeType {
  /** VOLUME_TYPE_UNSPECIFIED - Default */
  VOLUME_TYPE_UNSPECIFIED = 0,
  /** GCE_PERSISTENT_DISK - Compute Engine Persistent Disk volume */
  GCE_PERSISTENT_DISK = 1,
  UNRECOGNIZED = -1,
}

export function volumeTypeEnum_VolumeTypeFromJSON(object: any): VolumeTypeEnum_VolumeType {
  switch (object) {
    case 0:
    case "VOLUME_TYPE_UNSPECIFIED":
      return VolumeTypeEnum_VolumeType.VOLUME_TYPE_UNSPECIFIED;
    case 1:
    case "GCE_PERSISTENT_DISK":
      return VolumeTypeEnum_VolumeType.GCE_PERSISTENT_DISK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VolumeTypeEnum_VolumeType.UNRECOGNIZED;
  }
}

export function volumeTypeEnum_VolumeTypeToJSON(object: VolumeTypeEnum_VolumeType): string {
  switch (object) {
    case VolumeTypeEnum_VolumeType.VOLUME_TYPE_UNSPECIFIED:
      return "VOLUME_TYPE_UNSPECIFIED";
    case VolumeTypeEnum_VolumeType.GCE_PERSISTENT_DISK:
      return "GCE_PERSISTENT_DISK";
    case VolumeTypeEnum_VolumeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseNamespaces(): Namespaces {
  return { namespaces: [] };
}

export const Namespaces: MessageFns<Namespaces> = {
  encode(message: Namespaces, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.namespaces) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Namespaces {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespaces();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.namespaces.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Namespaces {
    return {
      namespaces: globalThis.Array.isArray(object?.namespaces)
        ? object.namespaces.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Namespaces): unknown {
    const obj: any = {};
    if (message.namespaces?.length) {
      obj.namespaces = message.namespaces;
    }
    return obj;
  },

  create(base?: DeepPartial<Namespaces>): Namespaces {
    return Namespaces.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Namespaces>): Namespaces {
    const message = createBaseNamespaces();
    message.namespaces = object.namespaces?.map((e) => e) || [];
    return message;
  },
};

function createBaseNamespacedName(): NamespacedName {
  return { namespace: "", name: "" };
}

export const NamespacedName: MessageFns<NamespacedName> = {
  encode(message: NamespacedName, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NamespacedName {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespacedName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.namespace = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): NamespacedName {
    return {
      namespace: isSet(object.namespace) ? globalThis.String(object.namespace) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: NamespacedName): unknown {
    const obj: any = {};
    if (message.namespace !== "") {
      obj.namespace = message.namespace;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<NamespacedName>): NamespacedName {
    return NamespacedName.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NamespacedName>): NamespacedName {
    const message = createBaseNamespacedName();
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseNamespacedNames(): NamespacedNames {
  return { namespacedNames: [] };
}

export const NamespacedNames: MessageFns<NamespacedNames> = {
  encode(message: NamespacedNames, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.namespacedNames) {
      NamespacedName.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NamespacedNames {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespacedNames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.namespacedNames.push(NamespacedName.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NamespacedNames {
    return {
      namespacedNames: globalThis.Array.isArray(object?.namespacedNames)
        ? object.namespacedNames.map((e: any) => NamespacedName.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NamespacedNames): unknown {
    const obj: any = {};
    if (message.namespacedNames?.length) {
      obj.namespacedNames = message.namespacedNames.map((e) => NamespacedName.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<NamespacedNames>): NamespacedNames {
    return NamespacedNames.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NamespacedNames>): NamespacedNames {
    const message = createBaseNamespacedNames();
    message.namespacedNames = object.namespacedNames?.map((e) => NamespacedName.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEncryptionKey(): EncryptionKey {
  return { gcpKmsEncryptionKey: "" };
}

export const EncryptionKey: MessageFns<EncryptionKey> = {
  encode(message: EncryptionKey, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gcpKmsEncryptionKey !== "") {
      writer.uint32(10).string(message.gcpKmsEncryptionKey);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EncryptionKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptionKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gcpKmsEncryptionKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EncryptionKey {
    return {
      gcpKmsEncryptionKey: isSet(object.gcpKmsEncryptionKey) ? globalThis.String(object.gcpKmsEncryptionKey) : "",
    };
  },

  toJSON(message: EncryptionKey): unknown {
    const obj: any = {};
    if (message.gcpKmsEncryptionKey !== "") {
      obj.gcpKmsEncryptionKey = message.gcpKmsEncryptionKey;
    }
    return obj;
  },

  create(base?: DeepPartial<EncryptionKey>): EncryptionKey {
    return EncryptionKey.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EncryptionKey>): EncryptionKey {
    const message = createBaseEncryptionKey();
    message.gcpKmsEncryptionKey = object.gcpKmsEncryptionKey ?? "";
    return message;
  },
};

function createBaseVolumeTypeEnum(): VolumeTypeEnum {
  return {};
}

export const VolumeTypeEnum: MessageFns<VolumeTypeEnum> = {
  encode(_: VolumeTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VolumeTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVolumeTypeEnum();
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

  fromJSON(_: any): VolumeTypeEnum {
    return {};
  },

  toJSON(_: VolumeTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<VolumeTypeEnum>): VolumeTypeEnum {
    return VolumeTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<VolumeTypeEnum>): VolumeTypeEnum {
    const message = createBaseVolumeTypeEnum();
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
