// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/vision/v1p4beta1/face.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.vision.v1p4beta1";

/** Parameters for a celebrity recognition request. */
export interface FaceRecognitionParams {
  /**
   * The resource names for one or more
   * [CelebritySet][google.cloud.vision.v1p4beta1.CelebritySet]s. A celebrity
   * set is preloaded and can be specified as "builtin/default". If this is
   * specified, the algorithm will try to match the faces detected in the input
   * image to the Celebrities in the CelebritySets.
   */
  celebritySet: string[];
}

/** A Celebrity is a group of Faces with an identity. */
export interface Celebrity {
  /**
   * The resource name of the preloaded Celebrity. Has the format
   * `builtin/{mid}`.
   */
  name: string;
  /** The Celebrity's display name. */
  displayName: string;
  /** The Celebrity's description. */
  description: string;
}

/** Information about a face's identity. */
export interface FaceRecognitionResult {
  /**
   * The [Celebrity][google.cloud.vision.v1p4beta1.Celebrity] that this face was
   * matched to.
   */
  celebrity:
    | Celebrity
    | undefined;
  /** Recognition confidence. Range [0, 1]. */
  confidence: number;
}

function createBaseFaceRecognitionParams(): FaceRecognitionParams {
  return { celebritySet: [] };
}

export const FaceRecognitionParams: MessageFns<FaceRecognitionParams> = {
  encode(message: FaceRecognitionParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.celebritySet) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FaceRecognitionParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaceRecognitionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.celebritySet.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FaceRecognitionParams {
    return {
      celebritySet: globalThis.Array.isArray(object?.celebritySet)
        ? object.celebritySet.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: FaceRecognitionParams): unknown {
    const obj: any = {};
    if (message.celebritySet?.length) {
      obj.celebritySet = message.celebritySet;
    }
    return obj;
  },

  create(base?: DeepPartial<FaceRecognitionParams>): FaceRecognitionParams {
    return FaceRecognitionParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FaceRecognitionParams>): FaceRecognitionParams {
    const message = createBaseFaceRecognitionParams();
    message.celebritySet = object.celebritySet?.map((e) => e) || [];
    return message;
  },
};

function createBaseCelebrity(): Celebrity {
  return { name: "", displayName: "", description: "" };
}

export const Celebrity: MessageFns<Celebrity> = {
  encode(message: Celebrity, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Celebrity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCelebrity();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Celebrity {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: Celebrity): unknown {
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
    return obj;
  },

  create(base?: DeepPartial<Celebrity>): Celebrity {
    return Celebrity.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Celebrity>): Celebrity {
    const message = createBaseCelebrity();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseFaceRecognitionResult(): FaceRecognitionResult {
  return { celebrity: undefined, confidence: 0 };
}

export const FaceRecognitionResult: MessageFns<FaceRecognitionResult> = {
  encode(message: FaceRecognitionResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.celebrity !== undefined) {
      Celebrity.encode(message.celebrity, writer.uint32(10).fork()).join();
    }
    if (message.confidence !== 0) {
      writer.uint32(21).float(message.confidence);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FaceRecognitionResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaceRecognitionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.celebrity = Celebrity.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.confidence = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FaceRecognitionResult {
    return {
      celebrity: isSet(object.celebrity) ? Celebrity.fromJSON(object.celebrity) : undefined,
      confidence: isSet(object.confidence) ? globalThis.Number(object.confidence) : 0,
    };
  },

  toJSON(message: FaceRecognitionResult): unknown {
    const obj: any = {};
    if (message.celebrity !== undefined) {
      obj.celebrity = Celebrity.toJSON(message.celebrity);
    }
    if (message.confidence !== 0) {
      obj.confidence = message.confidence;
    }
    return obj;
  },

  create(base?: DeepPartial<FaceRecognitionResult>): FaceRecognitionResult {
    return FaceRecognitionResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FaceRecognitionResult>): FaceRecognitionResult {
    const message = createBaseFaceRecognitionResult();
    message.celebrity = (object.celebrity !== undefined && object.celebrity !== null)
      ? Celebrity.fromPartial(object.celebrity)
      : undefined;
    message.confidence = object.confidence ?? 0;
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