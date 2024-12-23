// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/devtools/artifactregistry/v1/apt_artifact.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Status } from "../../../rpc/status.js";

export const protobufPackage = "google.devtools.artifactregistry.v1";

/**
 * A detailed representation of an Apt artifact. Information in the record
 * is derived from the archive's control file.
 * See https://www.debian.org/doc/debian-policy/ch-controlfields.html
 */
export interface AptArtifact {
  /** Output only. The Artifact Registry resource name of the artifact. */
  name: string;
  /** Output only. The Apt package name of the artifact. */
  packageName: string;
  /** Output only. An artifact is a binary or source package. */
  packageType: AptArtifact_PackageType;
  /** Output only. Operating system architecture of the artifact. */
  architecture: string;
  /** Output only. Repository component of the artifact. */
  component: string;
  /** Output only. Contents of the artifact's control metadata file. */
  controlFile: Buffer;
}

/** Package type is either binary or source. */
export enum AptArtifact_PackageType {
  /** PACKAGE_TYPE_UNSPECIFIED - Package type is not specified. */
  PACKAGE_TYPE_UNSPECIFIED = 0,
  /** BINARY - Binary package. */
  BINARY = 1,
  /** SOURCE - Source package. */
  SOURCE = 2,
  UNRECOGNIZED = -1,
}

export function aptArtifact_PackageTypeFromJSON(object: any): AptArtifact_PackageType {
  switch (object) {
    case 0:
    case "PACKAGE_TYPE_UNSPECIFIED":
      return AptArtifact_PackageType.PACKAGE_TYPE_UNSPECIFIED;
    case 1:
    case "BINARY":
      return AptArtifact_PackageType.BINARY;
    case 2:
    case "SOURCE":
      return AptArtifact_PackageType.SOURCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AptArtifact_PackageType.UNRECOGNIZED;
  }
}

export function aptArtifact_PackageTypeToJSON(object: AptArtifact_PackageType): string {
  switch (object) {
    case AptArtifact_PackageType.PACKAGE_TYPE_UNSPECIFIED:
      return "PACKAGE_TYPE_UNSPECIFIED";
    case AptArtifact_PackageType.BINARY:
      return "BINARY";
    case AptArtifact_PackageType.SOURCE:
      return "SOURCE";
    case AptArtifact_PackageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Google Cloud Storage location where the artifacts currently reside. */
export interface ImportAptArtifactsGcsSource {
  /** Cloud Storage paths URI (e.g., gs://my_bucket//my_object). */
  uris: string[];
  /** Supports URI wildcards for matching multiple objects from a single URI. */
  useWildcards: boolean;
}

/** The request to import new apt artifacts. */
export interface ImportAptArtifactsRequest {
  /** Google Cloud Storage location where input content is located. */
  gcsSource?:
    | ImportAptArtifactsGcsSource
    | undefined;
  /** The name of the parent resource where the artifacts will be imported. */
  parent: string;
}

/** Error information explaining why a package was not imported. */
export interface ImportAptArtifactsErrorInfo {
  /** Google Cloud Storage location requested. */
  gcsSource?:
    | ImportAptArtifactsGcsSource
    | undefined;
  /** The detailed error status. */
  error: Status | undefined;
}

/** The response message from importing APT artifacts. */
export interface ImportAptArtifactsResponse {
  /** The Apt artifacts imported. */
  aptArtifacts: AptArtifact[];
  /** Detailed error info for packages that were not imported. */
  errors: ImportAptArtifactsErrorInfo[];
}

/** The operation metadata for importing artifacts. */
export interface ImportAptArtifactsMetadata {
}

function createBaseAptArtifact(): AptArtifact {
  return { name: "", packageName: "", packageType: 0, architecture: "", component: "", controlFile: Buffer.alloc(0) };
}

export const AptArtifact: MessageFns<AptArtifact> = {
  encode(message: AptArtifact, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.packageName !== "") {
      writer.uint32(18).string(message.packageName);
    }
    if (message.packageType !== 0) {
      writer.uint32(24).int32(message.packageType);
    }
    if (message.architecture !== "") {
      writer.uint32(34).string(message.architecture);
    }
    if (message.component !== "") {
      writer.uint32(42).string(message.component);
    }
    if (message.controlFile.length !== 0) {
      writer.uint32(50).bytes(message.controlFile);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AptArtifact {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAptArtifact();
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

          message.packageName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.packageType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.architecture = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.component = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.controlFile = Buffer.from(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AptArtifact {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      packageName: isSet(object.packageName) ? globalThis.String(object.packageName) : "",
      packageType: isSet(object.packageType) ? aptArtifact_PackageTypeFromJSON(object.packageType) : 0,
      architecture: isSet(object.architecture) ? globalThis.String(object.architecture) : "",
      component: isSet(object.component) ? globalThis.String(object.component) : "",
      controlFile: isSet(object.controlFile) ? Buffer.from(bytesFromBase64(object.controlFile)) : Buffer.alloc(0),
    };
  },

  toJSON(message: AptArtifact): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.packageName !== "") {
      obj.packageName = message.packageName;
    }
    if (message.packageType !== 0) {
      obj.packageType = aptArtifact_PackageTypeToJSON(message.packageType);
    }
    if (message.architecture !== "") {
      obj.architecture = message.architecture;
    }
    if (message.component !== "") {
      obj.component = message.component;
    }
    if (message.controlFile.length !== 0) {
      obj.controlFile = base64FromBytes(message.controlFile);
    }
    return obj;
  },

  create(base?: DeepPartial<AptArtifact>): AptArtifact {
    return AptArtifact.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AptArtifact>): AptArtifact {
    const message = createBaseAptArtifact();
    message.name = object.name ?? "";
    message.packageName = object.packageName ?? "";
    message.packageType = object.packageType ?? 0;
    message.architecture = object.architecture ?? "";
    message.component = object.component ?? "";
    message.controlFile = object.controlFile ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseImportAptArtifactsGcsSource(): ImportAptArtifactsGcsSource {
  return { uris: [], useWildcards: false };
}

export const ImportAptArtifactsGcsSource: MessageFns<ImportAptArtifactsGcsSource> = {
  encode(message: ImportAptArtifactsGcsSource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.uris) {
      writer.uint32(10).string(v!);
    }
    if (message.useWildcards !== false) {
      writer.uint32(16).bool(message.useWildcards);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ImportAptArtifactsGcsSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAptArtifactsGcsSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uris.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.useWildcards = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImportAptArtifactsGcsSource {
    return {
      uris: globalThis.Array.isArray(object?.uris) ? object.uris.map((e: any) => globalThis.String(e)) : [],
      useWildcards: isSet(object.useWildcards) ? globalThis.Boolean(object.useWildcards) : false,
    };
  },

  toJSON(message: ImportAptArtifactsGcsSource): unknown {
    const obj: any = {};
    if (message.uris?.length) {
      obj.uris = message.uris;
    }
    if (message.useWildcards !== false) {
      obj.useWildcards = message.useWildcards;
    }
    return obj;
  },

  create(base?: DeepPartial<ImportAptArtifactsGcsSource>): ImportAptArtifactsGcsSource {
    return ImportAptArtifactsGcsSource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ImportAptArtifactsGcsSource>): ImportAptArtifactsGcsSource {
    const message = createBaseImportAptArtifactsGcsSource();
    message.uris = object.uris?.map((e) => e) || [];
    message.useWildcards = object.useWildcards ?? false;
    return message;
  },
};

function createBaseImportAptArtifactsRequest(): ImportAptArtifactsRequest {
  return { gcsSource: undefined, parent: "" };
}

export const ImportAptArtifactsRequest: MessageFns<ImportAptArtifactsRequest> = {
  encode(message: ImportAptArtifactsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gcsSource !== undefined) {
      ImportAptArtifactsGcsSource.encode(message.gcsSource, writer.uint32(18).fork()).join();
    }
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ImportAptArtifactsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAptArtifactsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gcsSource = ImportAptArtifactsGcsSource.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImportAptArtifactsRequest {
    return {
      gcsSource: isSet(object.gcsSource) ? ImportAptArtifactsGcsSource.fromJSON(object.gcsSource) : undefined,
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
    };
  },

  toJSON(message: ImportAptArtifactsRequest): unknown {
    const obj: any = {};
    if (message.gcsSource !== undefined) {
      obj.gcsSource = ImportAptArtifactsGcsSource.toJSON(message.gcsSource);
    }
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    return obj;
  },

  create(base?: DeepPartial<ImportAptArtifactsRequest>): ImportAptArtifactsRequest {
    return ImportAptArtifactsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ImportAptArtifactsRequest>): ImportAptArtifactsRequest {
    const message = createBaseImportAptArtifactsRequest();
    message.gcsSource = (object.gcsSource !== undefined && object.gcsSource !== null)
      ? ImportAptArtifactsGcsSource.fromPartial(object.gcsSource)
      : undefined;
    message.parent = object.parent ?? "";
    return message;
  },
};

function createBaseImportAptArtifactsErrorInfo(): ImportAptArtifactsErrorInfo {
  return { gcsSource: undefined, error: undefined };
}

export const ImportAptArtifactsErrorInfo: MessageFns<ImportAptArtifactsErrorInfo> = {
  encode(message: ImportAptArtifactsErrorInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gcsSource !== undefined) {
      ImportAptArtifactsGcsSource.encode(message.gcsSource, writer.uint32(10).fork()).join();
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ImportAptArtifactsErrorInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAptArtifactsErrorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gcsSource = ImportAptArtifactsGcsSource.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImportAptArtifactsErrorInfo {
    return {
      gcsSource: isSet(object.gcsSource) ? ImportAptArtifactsGcsSource.fromJSON(object.gcsSource) : undefined,
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ImportAptArtifactsErrorInfo): unknown {
    const obj: any = {};
    if (message.gcsSource !== undefined) {
      obj.gcsSource = ImportAptArtifactsGcsSource.toJSON(message.gcsSource);
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<ImportAptArtifactsErrorInfo>): ImportAptArtifactsErrorInfo {
    return ImportAptArtifactsErrorInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ImportAptArtifactsErrorInfo>): ImportAptArtifactsErrorInfo {
    const message = createBaseImportAptArtifactsErrorInfo();
    message.gcsSource = (object.gcsSource !== undefined && object.gcsSource !== null)
      ? ImportAptArtifactsGcsSource.fromPartial(object.gcsSource)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? Status.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseImportAptArtifactsResponse(): ImportAptArtifactsResponse {
  return { aptArtifacts: [], errors: [] };
}

export const ImportAptArtifactsResponse: MessageFns<ImportAptArtifactsResponse> = {
  encode(message: ImportAptArtifactsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.aptArtifacts) {
      AptArtifact.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.errors) {
      ImportAptArtifactsErrorInfo.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ImportAptArtifactsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAptArtifactsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aptArtifacts.push(AptArtifact.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errors.push(ImportAptArtifactsErrorInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImportAptArtifactsResponse {
    return {
      aptArtifacts: globalThis.Array.isArray(object?.aptArtifacts)
        ? object.aptArtifacts.map((e: any) => AptArtifact.fromJSON(e))
        : [],
      errors: globalThis.Array.isArray(object?.errors)
        ? object.errors.map((e: any) => ImportAptArtifactsErrorInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ImportAptArtifactsResponse): unknown {
    const obj: any = {};
    if (message.aptArtifacts?.length) {
      obj.aptArtifacts = message.aptArtifacts.map((e) => AptArtifact.toJSON(e));
    }
    if (message.errors?.length) {
      obj.errors = message.errors.map((e) => ImportAptArtifactsErrorInfo.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ImportAptArtifactsResponse>): ImportAptArtifactsResponse {
    return ImportAptArtifactsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ImportAptArtifactsResponse>): ImportAptArtifactsResponse {
    const message = createBaseImportAptArtifactsResponse();
    message.aptArtifacts = object.aptArtifacts?.map((e) => AptArtifact.fromPartial(e)) || [];
    message.errors = object.errors?.map((e) => ImportAptArtifactsErrorInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseImportAptArtifactsMetadata(): ImportAptArtifactsMetadata {
  return {};
}

export const ImportAptArtifactsMetadata: MessageFns<ImportAptArtifactsMetadata> = {
  encode(_: ImportAptArtifactsMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ImportAptArtifactsMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAptArtifactsMetadata();
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

  fromJSON(_: any): ImportAptArtifactsMetadata {
    return {};
  },

  toJSON(_: ImportAptArtifactsMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ImportAptArtifactsMetadata>): ImportAptArtifactsMetadata {
    return ImportAptArtifactsMetadata.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ImportAptArtifactsMetadata>): ImportAptArtifactsMetadata {
    const message = createBaseImportAptArtifactsMetadata();
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}

function base64FromBytes(arr: Uint8Array): string {
  return globalThis.Buffer.from(arr).toString("base64");
}

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
