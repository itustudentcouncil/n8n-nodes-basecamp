// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/dialogflow/v2/human_agent_assistant_event.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SuggestionResult } from "./participant.js";

export const protobufPackage = "google.cloud.dialogflow.v2";

/**
 * Represents a notification sent to Cloud Pub/Sub subscribers for
 * human agent assistant events in a specific conversation.
 */
export interface HumanAgentAssistantEvent {
  /**
   * The conversation this notification refers to.
   * Format: `projects/<Project ID>/conversations/<Conversation ID>`.
   */
  conversation: string;
  /**
   * The participant that the suggestion is compiled for.
   * Format: `projects/<Project ID>/conversations/<Conversation
   * ID>/participants/<Participant ID>`. It will not be set in legacy workflow.
   */
  participant: string;
  /** The suggestion results payload that this notification refers to. */
  suggestionResults: SuggestionResult[];
}

function createBaseHumanAgentAssistantEvent(): HumanAgentAssistantEvent {
  return { conversation: "", participant: "", suggestionResults: [] };
}

export const HumanAgentAssistantEvent: MessageFns<HumanAgentAssistantEvent> = {
  encode(message: HumanAgentAssistantEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.conversation !== "") {
      writer.uint32(10).string(message.conversation);
    }
    if (message.participant !== "") {
      writer.uint32(26).string(message.participant);
    }
    for (const v of message.suggestionResults) {
      SuggestionResult.encode(v!, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HumanAgentAssistantEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHumanAgentAssistantEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.conversation = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.participant = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.suggestionResults.push(SuggestionResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HumanAgentAssistantEvent {
    return {
      conversation: isSet(object.conversation) ? globalThis.String(object.conversation) : "",
      participant: isSet(object.participant) ? globalThis.String(object.participant) : "",
      suggestionResults: globalThis.Array.isArray(object?.suggestionResults)
        ? object.suggestionResults.map((e: any) => SuggestionResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HumanAgentAssistantEvent): unknown {
    const obj: any = {};
    if (message.conversation !== "") {
      obj.conversation = message.conversation;
    }
    if (message.participant !== "") {
      obj.participant = message.participant;
    }
    if (message.suggestionResults?.length) {
      obj.suggestionResults = message.suggestionResults.map((e) => SuggestionResult.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<HumanAgentAssistantEvent>): HumanAgentAssistantEvent {
    return HumanAgentAssistantEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HumanAgentAssistantEvent>): HumanAgentAssistantEvent {
    const message = createBaseHumanAgentAssistantEvent();
    message.conversation = object.conversation ?? "";
    message.participant = object.participant ?? "";
    message.suggestionResults = object.suggestionResults?.map((e) => SuggestionResult.fromPartial(e)) || [];
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