// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/actions/sdk/v2/interactionmodel/event_handler.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { StaticPrompt } from "./prompt/static_prompt.js";

export const protobufPackage = "google.actions.sdk.v2.interactionmodel";

/**
 * Defines a handler to be executed after an event. Examples of events are
 * intent and condition based events in a scene.
 */
export interface EventHandler {
  /** Name of the webhook handler to call. */
  webhookHandler: string;
  /**
   * Inlined static prompt. Can contain references to string resources in
   * bundles.
   */
  staticPrompt?:
    | StaticPrompt
    | undefined;
  /** Name of the static prompt to invoke. */
  staticPromptName?: string | undefined;
}

function createBaseEventHandler(): EventHandler {
  return { webhookHandler: "", staticPrompt: undefined, staticPromptName: undefined };
}

export const EventHandler: MessageFns<EventHandler> = {
  encode(message: EventHandler, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.webhookHandler !== "") {
      writer.uint32(10).string(message.webhookHandler);
    }
    if (message.staticPrompt !== undefined) {
      StaticPrompt.encode(message.staticPrompt, writer.uint32(18).fork()).join();
    }
    if (message.staticPromptName !== undefined) {
      writer.uint32(26).string(message.staticPromptName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventHandler {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventHandler();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.webhookHandler = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.staticPrompt = StaticPrompt.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.staticPromptName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventHandler {
    return {
      webhookHandler: isSet(object.webhookHandler) ? globalThis.String(object.webhookHandler) : "",
      staticPrompt: isSet(object.staticPrompt) ? StaticPrompt.fromJSON(object.staticPrompt) : undefined,
      staticPromptName: isSet(object.staticPromptName) ? globalThis.String(object.staticPromptName) : undefined,
    };
  },

  toJSON(message: EventHandler): unknown {
    const obj: any = {};
    if (message.webhookHandler !== "") {
      obj.webhookHandler = message.webhookHandler;
    }
    if (message.staticPrompt !== undefined) {
      obj.staticPrompt = StaticPrompt.toJSON(message.staticPrompt);
    }
    if (message.staticPromptName !== undefined) {
      obj.staticPromptName = message.staticPromptName;
    }
    return obj;
  },

  create(base?: DeepPartial<EventHandler>): EventHandler {
    return EventHandler.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventHandler>): EventHandler {
    const message = createBaseEventHandler();
    message.webhookHandler = object.webhookHandler ?? "";
    message.staticPrompt = (object.staticPrompt !== undefined && object.staticPrompt !== null)
      ? StaticPrompt.fromPartial(object.staticPrompt)
      : undefined;
    message.staticPromptName = object.staticPromptName ?? undefined;
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