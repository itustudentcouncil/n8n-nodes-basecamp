// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/aiplatform/v1beta1/reasoning_engine.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Struct } from "../../../protobuf/struct.js";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.aiplatform.v1beta1";

/** ReasoningEngine configurations */
export interface ReasoningEngineSpec {
  /** Required. User provided package spec of the ReasoningEngine. */
  packageSpec:
    | ReasoningEngineSpec_PackageSpec
    | undefined;
  /** Optional. Declarations for object class methods. */
  classMethods: { [key: string]: any }[];
}

/** User provided package spec like pickled object and package requirements. */
export interface ReasoningEngineSpec_PackageSpec {
  /** Optional. The Cloud Storage URI of the pickled python object. */
  pickleObjectGcsUri: string;
  /** Optional. The Cloud Storage URI of the dependency files in tar.gz format. */
  dependencyFilesGcsUri: string;
  /** Optional. The Cloud Storage URI of the `requirements.txt` file */
  requirementsGcsUri: string;
  /**
   * Optional. The Python version. Currently support 3.8, 3.9, 3.10, 3.11.
   * If not specified, default value is 3.10.
   */
  pythonVersion: string;
}

/**
 * ReasoningEngine provides a customizable runtime for models to determine
 * which actions to take and in which order.
 */
export interface ReasoningEngine {
  /** Identifier. The resource name of the ReasoningEngine. */
  name: string;
  /** Required. The display name of the ReasoningEngine. */
  displayName: string;
  /** Optional. The description of the ReasoningEngine. */
  description: string;
  /** Required. Configurations of the ReasoningEngine */
  spec:
    | ReasoningEngineSpec
    | undefined;
  /** Output only. Timestamp when this ReasoningEngine was created. */
  createTime:
    | Date
    | undefined;
  /** Output only. Timestamp when this ReasoningEngine was most recently updated. */
  updateTime:
    | Date
    | undefined;
  /**
   * Optional. Used to perform consistent read-modify-write updates. If not set,
   * a blind "overwrite" update happens.
   */
  etag: string;
}

function createBaseReasoningEngineSpec(): ReasoningEngineSpec {
  return { packageSpec: undefined, classMethods: [] };
}

export const ReasoningEngineSpec: MessageFns<ReasoningEngineSpec> = {
  encode(message: ReasoningEngineSpec, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.packageSpec !== undefined) {
      ReasoningEngineSpec_PackageSpec.encode(message.packageSpec, writer.uint32(18).fork()).join();
    }
    for (const v of message.classMethods) {
      Struct.encode(Struct.wrap(v!), writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ReasoningEngineSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReasoningEngineSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.packageSpec = ReasoningEngineSpec_PackageSpec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.classMethods.push(Struct.unwrap(Struct.decode(reader, reader.uint32())));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReasoningEngineSpec {
    return {
      packageSpec: isSet(object.packageSpec) ? ReasoningEngineSpec_PackageSpec.fromJSON(object.packageSpec) : undefined,
      classMethods: globalThis.Array.isArray(object?.classMethods) ? [...object.classMethods] : [],
    };
  },

  toJSON(message: ReasoningEngineSpec): unknown {
    const obj: any = {};
    if (message.packageSpec !== undefined) {
      obj.packageSpec = ReasoningEngineSpec_PackageSpec.toJSON(message.packageSpec);
    }
    if (message.classMethods?.length) {
      obj.classMethods = message.classMethods;
    }
    return obj;
  },

  create(base?: DeepPartial<ReasoningEngineSpec>): ReasoningEngineSpec {
    return ReasoningEngineSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ReasoningEngineSpec>): ReasoningEngineSpec {
    const message = createBaseReasoningEngineSpec();
    message.packageSpec = (object.packageSpec !== undefined && object.packageSpec !== null)
      ? ReasoningEngineSpec_PackageSpec.fromPartial(object.packageSpec)
      : undefined;
    message.classMethods = object.classMethods?.map((e) => e) || [];
    return message;
  },
};

function createBaseReasoningEngineSpec_PackageSpec(): ReasoningEngineSpec_PackageSpec {
  return { pickleObjectGcsUri: "", dependencyFilesGcsUri: "", requirementsGcsUri: "", pythonVersion: "" };
}

export const ReasoningEngineSpec_PackageSpec: MessageFns<ReasoningEngineSpec_PackageSpec> = {
  encode(message: ReasoningEngineSpec_PackageSpec, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pickleObjectGcsUri !== "") {
      writer.uint32(10).string(message.pickleObjectGcsUri);
    }
    if (message.dependencyFilesGcsUri !== "") {
      writer.uint32(18).string(message.dependencyFilesGcsUri);
    }
    if (message.requirementsGcsUri !== "") {
      writer.uint32(26).string(message.requirementsGcsUri);
    }
    if (message.pythonVersion !== "") {
      writer.uint32(34).string(message.pythonVersion);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ReasoningEngineSpec_PackageSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReasoningEngineSpec_PackageSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pickleObjectGcsUri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dependencyFilesGcsUri = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requirementsGcsUri = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pythonVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReasoningEngineSpec_PackageSpec {
    return {
      pickleObjectGcsUri: isSet(object.pickleObjectGcsUri) ? globalThis.String(object.pickleObjectGcsUri) : "",
      dependencyFilesGcsUri: isSet(object.dependencyFilesGcsUri) ? globalThis.String(object.dependencyFilesGcsUri) : "",
      requirementsGcsUri: isSet(object.requirementsGcsUri) ? globalThis.String(object.requirementsGcsUri) : "",
      pythonVersion: isSet(object.pythonVersion) ? globalThis.String(object.pythonVersion) : "",
    };
  },

  toJSON(message: ReasoningEngineSpec_PackageSpec): unknown {
    const obj: any = {};
    if (message.pickleObjectGcsUri !== "") {
      obj.pickleObjectGcsUri = message.pickleObjectGcsUri;
    }
    if (message.dependencyFilesGcsUri !== "") {
      obj.dependencyFilesGcsUri = message.dependencyFilesGcsUri;
    }
    if (message.requirementsGcsUri !== "") {
      obj.requirementsGcsUri = message.requirementsGcsUri;
    }
    if (message.pythonVersion !== "") {
      obj.pythonVersion = message.pythonVersion;
    }
    return obj;
  },

  create(base?: DeepPartial<ReasoningEngineSpec_PackageSpec>): ReasoningEngineSpec_PackageSpec {
    return ReasoningEngineSpec_PackageSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ReasoningEngineSpec_PackageSpec>): ReasoningEngineSpec_PackageSpec {
    const message = createBaseReasoningEngineSpec_PackageSpec();
    message.pickleObjectGcsUri = object.pickleObjectGcsUri ?? "";
    message.dependencyFilesGcsUri = object.dependencyFilesGcsUri ?? "";
    message.requirementsGcsUri = object.requirementsGcsUri ?? "";
    message.pythonVersion = object.pythonVersion ?? "";
    return message;
  },
};

function createBaseReasoningEngine(): ReasoningEngine {
  return {
    name: "",
    displayName: "",
    description: "",
    spec: undefined,
    createTime: undefined,
    updateTime: undefined,
    etag: "",
  };
}

export const ReasoningEngine: MessageFns<ReasoningEngine> = {
  encode(message: ReasoningEngine, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    if (message.spec !== undefined) {
      ReasoningEngineSpec.encode(message.spec, writer.uint32(26).fork()).join();
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(34).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(42).fork()).join();
    }
    if (message.etag !== "") {
      writer.uint32(50).string(message.etag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ReasoningEngine {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReasoningEngine();
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
        case 7:
          if (tag !== 58) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.spec = ReasoningEngineSpec.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): ReasoningEngine {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      spec: isSet(object.spec) ? ReasoningEngineSpec.fromJSON(object.spec) : undefined,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
    };
  },

  toJSON(message: ReasoningEngine): unknown {
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
    if (message.spec !== undefined) {
      obj.spec = ReasoningEngineSpec.toJSON(message.spec);
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    return obj;
  },

  create(base?: DeepPartial<ReasoningEngine>): ReasoningEngine {
    return ReasoningEngine.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ReasoningEngine>): ReasoningEngine {
    const message = createBaseReasoningEngine();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.spec = (object.spec !== undefined && object.spec !== null)
      ? ReasoningEngineSpec.fromPartial(object.spec)
      : undefined;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.etag = object.etag ?? "";
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
