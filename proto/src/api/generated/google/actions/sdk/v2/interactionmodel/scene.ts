// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/actions/sdk/v2/interactionmodel/scene.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ConditionalEvent } from "./conditional_event.js";
import { EventHandler } from "./event_handler.js";
import { IntentEvent } from "./intent_event.js";
import { Slot } from "./slot.js";

export const protobufPackage = "google.actions.sdk.v2.interactionmodel";

/**
 * Scene is the basic unit of control flow when designing a conversation. They
 * can be chained together with other scenes, generate prompts for the end user,
 * and define slots.
 * The scene name is specified in the name of the file.
 */
export interface Scene {
  /** Handler to invoke when transitioning into this scene. */
  onEnter:
    | EventHandler
    | undefined;
  /**
   * The list of events that trigger based on intents. These events can
   * be triggered at any time after the on_load Handler has been called.
   * Important - these events define the set of intents which are scoped to
   * this scene and will take precedence over any globally defined events that
   * have the same intents or their triggering phrases. Intent names must be
   * unique within a scene.
   */
  intentEvents: IntentEvent[];
  /**
   * The list of events to trigger based on conditional statements. These are
   * evaluated after the form has been filled or immediately after on_load if
   * this scene does not have a form (evaluation is only done once). Only the
   * first matching event will be triggered.
   */
  conditionalEvents: ConditionalEvent[];
  /**
   * Ordered list of slots. Each slot defines the type of data
   * that it will resolve and configuration to customize the experience of this
   * resolution (e.g. prompts).
   */
  slots: Slot[];
  /**
   * Handler called when there is a change in state of a slot not
   * caused by updates within another Handler. This allows slots to be
   * invalidated, the scene invalidated or other changes to scene state.
   */
  onSlotUpdated: EventHandler | undefined;
}

function createBaseScene(): Scene {
  return { onEnter: undefined, intentEvents: [], conditionalEvents: [], slots: [], onSlotUpdated: undefined };
}

export const Scene: MessageFns<Scene> = {
  encode(message: Scene, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.onEnter !== undefined) {
      EventHandler.encode(message.onEnter, writer.uint32(10).fork()).join();
    }
    for (const v of message.intentEvents) {
      IntentEvent.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.conditionalEvents) {
      ConditionalEvent.encode(v!, writer.uint32(26).fork()).join();
    }
    for (const v of message.slots) {
      Slot.encode(v!, writer.uint32(34).fork()).join();
    }
    if (message.onSlotUpdated !== undefined) {
      EventHandler.encode(message.onSlotUpdated, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Scene {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScene();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.onEnter = EventHandler.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.intentEvents.push(IntentEvent.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.conditionalEvents.push(ConditionalEvent.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.slots.push(Slot.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.onSlotUpdated = EventHandler.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Scene {
    return {
      onEnter: isSet(object.onEnter) ? EventHandler.fromJSON(object.onEnter) : undefined,
      intentEvents: globalThis.Array.isArray(object?.intentEvents)
        ? object.intentEvents.map((e: any) => IntentEvent.fromJSON(e))
        : [],
      conditionalEvents: globalThis.Array.isArray(object?.conditionalEvents)
        ? object.conditionalEvents.map((e: any) => ConditionalEvent.fromJSON(e))
        : [],
      slots: globalThis.Array.isArray(object?.slots) ? object.slots.map((e: any) => Slot.fromJSON(e)) : [],
      onSlotUpdated: isSet(object.onSlotUpdated) ? EventHandler.fromJSON(object.onSlotUpdated) : undefined,
    };
  },

  toJSON(message: Scene): unknown {
    const obj: any = {};
    if (message.onEnter !== undefined) {
      obj.onEnter = EventHandler.toJSON(message.onEnter);
    }
    if (message.intentEvents?.length) {
      obj.intentEvents = message.intentEvents.map((e) => IntentEvent.toJSON(e));
    }
    if (message.conditionalEvents?.length) {
      obj.conditionalEvents = message.conditionalEvents.map((e) => ConditionalEvent.toJSON(e));
    }
    if (message.slots?.length) {
      obj.slots = message.slots.map((e) => Slot.toJSON(e));
    }
    if (message.onSlotUpdated !== undefined) {
      obj.onSlotUpdated = EventHandler.toJSON(message.onSlotUpdated);
    }
    return obj;
  },

  create(base?: DeepPartial<Scene>): Scene {
    return Scene.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Scene>): Scene {
    const message = createBaseScene();
    message.onEnter = (object.onEnter !== undefined && object.onEnter !== null)
      ? EventHandler.fromPartial(object.onEnter)
      : undefined;
    message.intentEvents = object.intentEvents?.map((e) => IntentEvent.fromPartial(e)) || [];
    message.conditionalEvents = object.conditionalEvents?.map((e) => ConditionalEvent.fromPartial(e)) || [];
    message.slots = object.slots?.map((e) => Slot.fromPartial(e)) || [];
    message.onSlotUpdated = (object.onSlotUpdated !== undefined && object.onSlotUpdated !== null)
      ? EventHandler.fromPartial(object.onSlotUpdated)
      : undefined;
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