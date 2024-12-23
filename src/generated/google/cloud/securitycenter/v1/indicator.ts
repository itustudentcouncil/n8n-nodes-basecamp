// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v1/indicator.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.securitycenter.v1";

/**
 * Represents what's commonly known as an _indicator of compromise_ (IoC) in
 * computer forensics. This is an artifact observed on a network or in an
 * operating system that, with high confidence, indicates a computer intrusion.
 * For more information, see [Indicator of
 * compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
 */
export interface Indicator {
  /** The list of IP addresses that are associated with the finding. */
  ipAddresses: string[];
  /** List of domains associated to the Finding. */
  domains: string[];
  /**
   * The list of matched signatures indicating that the given
   * process is present in the environment.
   */
  signatures: Indicator_ProcessSignature[];
  /** The list of URIs associated to the Findings. */
  uris: string[];
}

/** Indicates what signature matched this process. */
export interface Indicator_ProcessSignature {
  /** Signature indicating that a binary family was matched. */
  memoryHashSignature?:
    | Indicator_ProcessSignature_MemoryHashSignature
    | undefined;
  /** Signature indicating that a YARA rule was matched. */
  yaraRuleSignature?:
    | Indicator_ProcessSignature_YaraRuleSignature
    | undefined;
  /** Describes the type of resource associated with the signature. */
  signatureType: Indicator_ProcessSignature_SignatureType;
}

/** Possible resource types to be associated with a signature. */
export enum Indicator_ProcessSignature_SignatureType {
  /** SIGNATURE_TYPE_UNSPECIFIED - The default signature type. */
  SIGNATURE_TYPE_UNSPECIFIED = 0,
  /** SIGNATURE_TYPE_PROCESS - Used for signatures concerning processes. */
  SIGNATURE_TYPE_PROCESS = 1,
  /** SIGNATURE_TYPE_FILE - Used for signatures concerning disks. */
  SIGNATURE_TYPE_FILE = 2,
  UNRECOGNIZED = -1,
}

export function indicator_ProcessSignature_SignatureTypeFromJSON(
  object: any,
): Indicator_ProcessSignature_SignatureType {
  switch (object) {
    case 0:
    case "SIGNATURE_TYPE_UNSPECIFIED":
      return Indicator_ProcessSignature_SignatureType.SIGNATURE_TYPE_UNSPECIFIED;
    case 1:
    case "SIGNATURE_TYPE_PROCESS":
      return Indicator_ProcessSignature_SignatureType.SIGNATURE_TYPE_PROCESS;
    case 2:
    case "SIGNATURE_TYPE_FILE":
      return Indicator_ProcessSignature_SignatureType.SIGNATURE_TYPE_FILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Indicator_ProcessSignature_SignatureType.UNRECOGNIZED;
  }
}

export function indicator_ProcessSignature_SignatureTypeToJSON(
  object: Indicator_ProcessSignature_SignatureType,
): string {
  switch (object) {
    case Indicator_ProcessSignature_SignatureType.SIGNATURE_TYPE_UNSPECIFIED:
      return "SIGNATURE_TYPE_UNSPECIFIED";
    case Indicator_ProcessSignature_SignatureType.SIGNATURE_TYPE_PROCESS:
      return "SIGNATURE_TYPE_PROCESS";
    case Indicator_ProcessSignature_SignatureType.SIGNATURE_TYPE_FILE:
      return "SIGNATURE_TYPE_FILE";
    case Indicator_ProcessSignature_SignatureType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A signature corresponding to memory page hashes. */
export interface Indicator_ProcessSignature_MemoryHashSignature {
  /** The binary family. */
  binaryFamily: string;
  /**
   * The list of memory hash detections contributing to the binary family
   * match.
   */
  detections: Indicator_ProcessSignature_MemoryHashSignature_Detection[];
}

/** Memory hash detection contributing to the binary family match. */
export interface Indicator_ProcessSignature_MemoryHashSignature_Detection {
  /**
   * The name of the binary associated with the memory hash
   * signature detection.
   */
  binary: string;
  /**
   * The percentage of memory page hashes in the signature
   * that were matched.
   */
  percentPagesMatched: number;
}

/** A signature corresponding to a YARA rule. */
export interface Indicator_ProcessSignature_YaraRuleSignature {
  /** The name of the YARA rule. */
  yaraRule: string;
}

function createBaseIndicator(): Indicator {
  return { ipAddresses: [], domains: [], signatures: [], uris: [] };
}

export const Indicator: MessageFns<Indicator> = {
  encode(message: Indicator, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.ipAddresses) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.domains) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.signatures) {
      Indicator_ProcessSignature.encode(v!, writer.uint32(26).fork()).join();
    }
    for (const v of message.uris) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Indicator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndicator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ipAddresses.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.domains.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signatures.push(Indicator_ProcessSignature.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.uris.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Indicator {
    return {
      ipAddresses: globalThis.Array.isArray(object?.ipAddresses)
        ? object.ipAddresses.map((e: any) => globalThis.String(e))
        : [],
      domains: globalThis.Array.isArray(object?.domains) ? object.domains.map((e: any) => globalThis.String(e)) : [],
      signatures: globalThis.Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => Indicator_ProcessSignature.fromJSON(e))
        : [],
      uris: globalThis.Array.isArray(object?.uris) ? object.uris.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Indicator): unknown {
    const obj: any = {};
    if (message.ipAddresses?.length) {
      obj.ipAddresses = message.ipAddresses;
    }
    if (message.domains?.length) {
      obj.domains = message.domains;
    }
    if (message.signatures?.length) {
      obj.signatures = message.signatures.map((e) => Indicator_ProcessSignature.toJSON(e));
    }
    if (message.uris?.length) {
      obj.uris = message.uris;
    }
    return obj;
  },

  create(base?: DeepPartial<Indicator>): Indicator {
    return Indicator.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Indicator>): Indicator {
    const message = createBaseIndicator();
    message.ipAddresses = object.ipAddresses?.map((e) => e) || [];
    message.domains = object.domains?.map((e) => e) || [];
    message.signatures = object.signatures?.map((e) => Indicator_ProcessSignature.fromPartial(e)) || [];
    message.uris = object.uris?.map((e) => e) || [];
    return message;
  },
};

function createBaseIndicator_ProcessSignature(): Indicator_ProcessSignature {
  return { memoryHashSignature: undefined, yaraRuleSignature: undefined, signatureType: 0 };
}

export const Indicator_ProcessSignature: MessageFns<Indicator_ProcessSignature> = {
  encode(message: Indicator_ProcessSignature, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.memoryHashSignature !== undefined) {
      Indicator_ProcessSignature_MemoryHashSignature.encode(message.memoryHashSignature, writer.uint32(50).fork())
        .join();
    }
    if (message.yaraRuleSignature !== undefined) {
      Indicator_ProcessSignature_YaraRuleSignature.encode(message.yaraRuleSignature, writer.uint32(58).fork()).join();
    }
    if (message.signatureType !== 0) {
      writer.uint32(64).int32(message.signatureType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Indicator_ProcessSignature {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndicator_ProcessSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.memoryHashSignature = Indicator_ProcessSignature_MemoryHashSignature.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.yaraRuleSignature = Indicator_ProcessSignature_YaraRuleSignature.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.signatureType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Indicator_ProcessSignature {
    return {
      memoryHashSignature: isSet(object.memoryHashSignature)
        ? Indicator_ProcessSignature_MemoryHashSignature.fromJSON(object.memoryHashSignature)
        : undefined,
      yaraRuleSignature: isSet(object.yaraRuleSignature)
        ? Indicator_ProcessSignature_YaraRuleSignature.fromJSON(object.yaraRuleSignature)
        : undefined,
      signatureType: isSet(object.signatureType)
        ? indicator_ProcessSignature_SignatureTypeFromJSON(object.signatureType)
        : 0,
    };
  },

  toJSON(message: Indicator_ProcessSignature): unknown {
    const obj: any = {};
    if (message.memoryHashSignature !== undefined) {
      obj.memoryHashSignature = Indicator_ProcessSignature_MemoryHashSignature.toJSON(message.memoryHashSignature);
    }
    if (message.yaraRuleSignature !== undefined) {
      obj.yaraRuleSignature = Indicator_ProcessSignature_YaraRuleSignature.toJSON(message.yaraRuleSignature);
    }
    if (message.signatureType !== 0) {
      obj.signatureType = indicator_ProcessSignature_SignatureTypeToJSON(message.signatureType);
    }
    return obj;
  },

  create(base?: DeepPartial<Indicator_ProcessSignature>): Indicator_ProcessSignature {
    return Indicator_ProcessSignature.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Indicator_ProcessSignature>): Indicator_ProcessSignature {
    const message = createBaseIndicator_ProcessSignature();
    message.memoryHashSignature = (object.memoryHashSignature !== undefined && object.memoryHashSignature !== null)
      ? Indicator_ProcessSignature_MemoryHashSignature.fromPartial(object.memoryHashSignature)
      : undefined;
    message.yaraRuleSignature = (object.yaraRuleSignature !== undefined && object.yaraRuleSignature !== null)
      ? Indicator_ProcessSignature_YaraRuleSignature.fromPartial(object.yaraRuleSignature)
      : undefined;
    message.signatureType = object.signatureType ?? 0;
    return message;
  },
};

function createBaseIndicator_ProcessSignature_MemoryHashSignature(): Indicator_ProcessSignature_MemoryHashSignature {
  return { binaryFamily: "", detections: [] };
}

export const Indicator_ProcessSignature_MemoryHashSignature: MessageFns<
  Indicator_ProcessSignature_MemoryHashSignature
> = {
  encode(
    message: Indicator_ProcessSignature_MemoryHashSignature,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.binaryFamily !== "") {
      writer.uint32(10).string(message.binaryFamily);
    }
    for (const v of message.detections) {
      Indicator_ProcessSignature_MemoryHashSignature_Detection.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Indicator_ProcessSignature_MemoryHashSignature {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndicator_ProcessSignature_MemoryHashSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.binaryFamily = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.detections.push(
            Indicator_ProcessSignature_MemoryHashSignature_Detection.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Indicator_ProcessSignature_MemoryHashSignature {
    return {
      binaryFamily: isSet(object.binaryFamily) ? globalThis.String(object.binaryFamily) : "",
      detections: globalThis.Array.isArray(object?.detections)
        ? object.detections.map((e: any) => Indicator_ProcessSignature_MemoryHashSignature_Detection.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Indicator_ProcessSignature_MemoryHashSignature): unknown {
    const obj: any = {};
    if (message.binaryFamily !== "") {
      obj.binaryFamily = message.binaryFamily;
    }
    if (message.detections?.length) {
      obj.detections = message.detections.map((e) =>
        Indicator_ProcessSignature_MemoryHashSignature_Detection.toJSON(e)
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<Indicator_ProcessSignature_MemoryHashSignature>,
  ): Indicator_ProcessSignature_MemoryHashSignature {
    return Indicator_ProcessSignature_MemoryHashSignature.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<Indicator_ProcessSignature_MemoryHashSignature>,
  ): Indicator_ProcessSignature_MemoryHashSignature {
    const message = createBaseIndicator_ProcessSignature_MemoryHashSignature();
    message.binaryFamily = object.binaryFamily ?? "";
    message.detections =
      object.detections?.map((e) => Indicator_ProcessSignature_MemoryHashSignature_Detection.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIndicator_ProcessSignature_MemoryHashSignature_Detection(): Indicator_ProcessSignature_MemoryHashSignature_Detection {
  return { binary: "", percentPagesMatched: 0 };
}

export const Indicator_ProcessSignature_MemoryHashSignature_Detection: MessageFns<
  Indicator_ProcessSignature_MemoryHashSignature_Detection
> = {
  encode(
    message: Indicator_ProcessSignature_MemoryHashSignature_Detection,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.binary !== "") {
      writer.uint32(18).string(message.binary);
    }
    if (message.percentPagesMatched !== 0) {
      writer.uint32(25).double(message.percentPagesMatched);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Indicator_ProcessSignature_MemoryHashSignature_Detection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndicator_ProcessSignature_MemoryHashSignature_Detection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.binary = reader.string();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.percentPagesMatched = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Indicator_ProcessSignature_MemoryHashSignature_Detection {
    return {
      binary: isSet(object.binary) ? globalThis.String(object.binary) : "",
      percentPagesMatched: isSet(object.percentPagesMatched) ? globalThis.Number(object.percentPagesMatched) : 0,
    };
  },

  toJSON(message: Indicator_ProcessSignature_MemoryHashSignature_Detection): unknown {
    const obj: any = {};
    if (message.binary !== "") {
      obj.binary = message.binary;
    }
    if (message.percentPagesMatched !== 0) {
      obj.percentPagesMatched = message.percentPagesMatched;
    }
    return obj;
  },

  create(
    base?: DeepPartial<Indicator_ProcessSignature_MemoryHashSignature_Detection>,
  ): Indicator_ProcessSignature_MemoryHashSignature_Detection {
    return Indicator_ProcessSignature_MemoryHashSignature_Detection.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<Indicator_ProcessSignature_MemoryHashSignature_Detection>,
  ): Indicator_ProcessSignature_MemoryHashSignature_Detection {
    const message = createBaseIndicator_ProcessSignature_MemoryHashSignature_Detection();
    message.binary = object.binary ?? "";
    message.percentPagesMatched = object.percentPagesMatched ?? 0;
    return message;
  },
};

function createBaseIndicator_ProcessSignature_YaraRuleSignature(): Indicator_ProcessSignature_YaraRuleSignature {
  return { yaraRule: "" };
}

export const Indicator_ProcessSignature_YaraRuleSignature: MessageFns<Indicator_ProcessSignature_YaraRuleSignature> = {
  encode(
    message: Indicator_ProcessSignature_YaraRuleSignature,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.yaraRule !== "") {
      writer.uint32(42).string(message.yaraRule);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Indicator_ProcessSignature_YaraRuleSignature {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndicator_ProcessSignature_YaraRuleSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 42) {
            break;
          }

          message.yaraRule = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Indicator_ProcessSignature_YaraRuleSignature {
    return { yaraRule: isSet(object.yaraRule) ? globalThis.String(object.yaraRule) : "" };
  },

  toJSON(message: Indicator_ProcessSignature_YaraRuleSignature): unknown {
    const obj: any = {};
    if (message.yaraRule !== "") {
      obj.yaraRule = message.yaraRule;
    }
    return obj;
  },

  create(
    base?: DeepPartial<Indicator_ProcessSignature_YaraRuleSignature>,
  ): Indicator_ProcessSignature_YaraRuleSignature {
    return Indicator_ProcessSignature_YaraRuleSignature.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<Indicator_ProcessSignature_YaraRuleSignature>,
  ): Indicator_ProcessSignature_YaraRuleSignature {
    const message = createBaseIndicator_ProcessSignature_YaraRuleSignature();
    message.yaraRule = object.yaraRule ?? "";
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
