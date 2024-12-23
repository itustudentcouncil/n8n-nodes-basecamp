// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ai/generativelanguage/v1beta2/model.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ai.generativelanguage.v1beta2";

/** Information about a Generative Language Model. */
export interface Model {
  /**
   * Required. The resource name of the `Model`.
   *
   * Format: `models/{model}` with a `{model}` naming convention of:
   *
   * * "{base_model_id}-{version}"
   *
   * Examples:
   *
   * * `models/chat-bison-001`
   */
  name: string;
  /**
   * Required. The name of the base model, pass this to the generation request.
   *
   * Examples:
   *
   * * `chat-bison`
   */
  baseModelId: string;
  /**
   * Required. The version number of the model.
   *
   * This represents the major version
   */
  version: string;
  /**
   * The human-readable name of the model. E.g. "Chat Bison".
   *
   * The name can be up to 128 characters long and can consist of any UTF-8
   * characters.
   */
  displayName: string;
  /** A short description of the model. */
  description: string;
  /** Maximum number of input tokens allowed for this model. */
  inputTokenLimit: number;
  /** Maximum number of output tokens available for this model. */
  outputTokenLimit: number;
  /**
   * The model's supported generation methods.
   *
   * The method names are defined as Pascal case
   * strings, such as `generateMessage` which correspond to API methods.
   */
  supportedGenerationMethods: string[];
  /**
   * Controls the randomness of the output.
   *
   * Values can range over `[0.0,1.0]`, inclusive. A value closer to `1.0` will
   * produce responses that are more varied, while a value closer to `0.0` will
   * typically result in less surprising responses from the model.
   * This value specifies default to be used by the backend while making the
   * call to the model.
   */
  temperature?:
    | number
    | undefined;
  /**
   * For Nucleus sampling.
   *
   * Nucleus sampling considers the smallest set of tokens whose probability
   * sum is at least `top_p`.
   * This value specifies default to be used by the backend while making the
   * call to the model.
   */
  topP?:
    | number
    | undefined;
  /**
   * For Top-k sampling.
   *
   * Top-k sampling considers the set of `top_k` most probable tokens.
   * This value specifies default to be used by the backend while making the
   * call to the model.
   */
  topK?: number | undefined;
}

function createBaseModel(): Model {
  return {
    name: "",
    baseModelId: "",
    version: "",
    displayName: "",
    description: "",
    inputTokenLimit: 0,
    outputTokenLimit: 0,
    supportedGenerationMethods: [],
    temperature: undefined,
    topP: undefined,
    topK: undefined,
  };
}

export const Model: MessageFns<Model> = {
  encode(message: Model, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.baseModelId !== "") {
      writer.uint32(18).string(message.baseModelId);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.inputTokenLimit !== 0) {
      writer.uint32(48).int32(message.inputTokenLimit);
    }
    if (message.outputTokenLimit !== 0) {
      writer.uint32(56).int32(message.outputTokenLimit);
    }
    for (const v of message.supportedGenerationMethods) {
      writer.uint32(66).string(v!);
    }
    if (message.temperature !== undefined) {
      writer.uint32(77).float(message.temperature);
    }
    if (message.topP !== undefined) {
      writer.uint32(85).float(message.topP);
    }
    if (message.topK !== undefined) {
      writer.uint32(88).int32(message.topK);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Model {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModel();
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

          message.baseModelId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.inputTokenLimit = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.outputTokenLimit = reader.int32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.supportedGenerationMethods.push(reader.string());
          continue;
        case 9:
          if (tag !== 77) {
            break;
          }

          message.temperature = reader.float();
          continue;
        case 10:
          if (tag !== 85) {
            break;
          }

          message.topP = reader.float();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.topK = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Model {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      baseModelId: isSet(object.baseModelId) ? globalThis.String(object.baseModelId) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      inputTokenLimit: isSet(object.inputTokenLimit) ? globalThis.Number(object.inputTokenLimit) : 0,
      outputTokenLimit: isSet(object.outputTokenLimit) ? globalThis.Number(object.outputTokenLimit) : 0,
      supportedGenerationMethods: globalThis.Array.isArray(object?.supportedGenerationMethods)
        ? object.supportedGenerationMethods.map((e: any) => globalThis.String(e))
        : [],
      temperature: isSet(object.temperature) ? globalThis.Number(object.temperature) : undefined,
      topP: isSet(object.topP) ? globalThis.Number(object.topP) : undefined,
      topK: isSet(object.topK) ? globalThis.Number(object.topK) : undefined,
    };
  },

  toJSON(message: Model): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.baseModelId !== "") {
      obj.baseModelId = message.baseModelId;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.inputTokenLimit !== 0) {
      obj.inputTokenLimit = Math.round(message.inputTokenLimit);
    }
    if (message.outputTokenLimit !== 0) {
      obj.outputTokenLimit = Math.round(message.outputTokenLimit);
    }
    if (message.supportedGenerationMethods?.length) {
      obj.supportedGenerationMethods = message.supportedGenerationMethods;
    }
    if (message.temperature !== undefined) {
      obj.temperature = message.temperature;
    }
    if (message.topP !== undefined) {
      obj.topP = message.topP;
    }
    if (message.topK !== undefined) {
      obj.topK = Math.round(message.topK);
    }
    return obj;
  },

  create(base?: DeepPartial<Model>): Model {
    return Model.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Model>): Model {
    const message = createBaseModel();
    message.name = object.name ?? "";
    message.baseModelId = object.baseModelId ?? "";
    message.version = object.version ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.inputTokenLimit = object.inputTokenLimit ?? 0;
    message.outputTokenLimit = object.outputTokenLimit ?? 0;
    message.supportedGenerationMethods = object.supportedGenerationMethods?.map((e) => e) || [];
    message.temperature = object.temperature ?? undefined;
    message.topP = object.topP ?? undefined;
    message.topK = object.topK ?? undefined;
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
