// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/actions/sdk/v2/conversation/prompt/simple.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.actions.sdk.v2.conversation";

/** Represents a simple prompt to be send to a user. */
export interface Simple {
  /**
   * Optional. Represents the speech to be spoken to the user. Can be SSML or
   * text to speech.
   * If the "override" field in the containing prompt is "true", the speech
   * defined in this field replaces the previous Simple prompt's speech.
   */
  speech: string;
  /**
   * Optional text to display in the chat bubble. If not given, a display
   * rendering of the speech field above will be used. Limited to 640
   * chars.
   * If the "override" field in the containing prompt is "true", the text
   * defined in this field replaces to the previous Simple prompt's text.
   */
  text: string;
}

function createBaseSimple(): Simple {
  return { speech: "", text: "" };
}

export const Simple: MessageFns<Simple> = {
  encode(message: Simple, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.speech !== "") {
      writer.uint32(10).string(message.speech);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Simple {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.speech = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Simple {
    return {
      speech: isSet(object.speech) ? globalThis.String(object.speech) : "",
      text: isSet(object.text) ? globalThis.String(object.text) : "",
    };
  },

  toJSON(message: Simple): unknown {
    const obj: any = {};
    if (message.speech !== "") {
      obj.speech = message.speech;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create(base?: DeepPartial<Simple>): Simple {
    return Simple.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Simple>): Simple {
    const message = createBaseSimple();
    message.speech = object.speech ?? "";
    message.text = object.text ?? "";
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