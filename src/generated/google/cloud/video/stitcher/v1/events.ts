// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/video/stitcher/v1/events.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../../protobuf/duration.js";

export const protobufPackage = "google.cloud.video.stitcher.v1";

/** Describes an event and a trigger URI. */
export interface Event {
  /** Describes the event that occurred. */
  type: Event_EventType;
  /** The URI to trigger for this event. */
  uri: string;
  /** The ID of the event. */
  id: string;
  /** The offset in seconds if the event type is `PROGRESS`. */
  offset: Duration | undefined;
}

/** Describes the event that occurred. */
export enum Event_EventType {
  /** EVENT_TYPE_UNSPECIFIED - The event type is unspecified. */
  EVENT_TYPE_UNSPECIFIED = 0,
  /** CREATIVE_VIEW - First frame of creative ad viewed. */
  CREATIVE_VIEW = 1,
  /** START - Creative ad started. */
  START = 2,
  /** BREAK_START - Start of an ad break. */
  BREAK_START = 3,
  /** BREAK_END - End of an ad break. */
  BREAK_END = 4,
  /** IMPRESSION - Impression. */
  IMPRESSION = 5,
  /** FIRST_QUARTILE - First quartile progress. */
  FIRST_QUARTILE = 6,
  /** MIDPOINT - Midpoint progress. */
  MIDPOINT = 7,
  /** THIRD_QUARTILE - Third quartile progress. */
  THIRD_QUARTILE = 8,
  /** COMPLETE - Ad progress completed. */
  COMPLETE = 9,
  /** PROGRESS - Specific progress event with an offset. */
  PROGRESS = 10,
  /** MUTE - Player muted. */
  MUTE = 11,
  /** UNMUTE - Player unmuted. */
  UNMUTE = 12,
  /** PAUSE - Player paused. */
  PAUSE = 13,
  /** CLICK - Click event. */
  CLICK = 14,
  /** CLICK_THROUGH - Click-through event. */
  CLICK_THROUGH = 15,
  /** REWIND - Player rewinding. */
  REWIND = 16,
  /** RESUME - Player resumed. */
  RESUME = 17,
  /** ERROR - Error event. */
  ERROR = 18,
  /** EXPAND - Ad expanded to a larger size. */
  EXPAND = 21,
  /** COLLAPSE - Ad collapsed to a smaller size. */
  COLLAPSE = 22,
  /** CLOSE - Non-linear ad closed. */
  CLOSE = 24,
  /** CLOSE_LINEAR - Linear ad closed. */
  CLOSE_LINEAR = 25,
  /** SKIP - Ad skipped. */
  SKIP = 26,
  /** ACCEPT_INVITATION - Accept invitation event. */
  ACCEPT_INVITATION = 27,
  UNRECOGNIZED = -1,
}

export function event_EventTypeFromJSON(object: any): Event_EventType {
  switch (object) {
    case 0:
    case "EVENT_TYPE_UNSPECIFIED":
      return Event_EventType.EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "CREATIVE_VIEW":
      return Event_EventType.CREATIVE_VIEW;
    case 2:
    case "START":
      return Event_EventType.START;
    case 3:
    case "BREAK_START":
      return Event_EventType.BREAK_START;
    case 4:
    case "BREAK_END":
      return Event_EventType.BREAK_END;
    case 5:
    case "IMPRESSION":
      return Event_EventType.IMPRESSION;
    case 6:
    case "FIRST_QUARTILE":
      return Event_EventType.FIRST_QUARTILE;
    case 7:
    case "MIDPOINT":
      return Event_EventType.MIDPOINT;
    case 8:
    case "THIRD_QUARTILE":
      return Event_EventType.THIRD_QUARTILE;
    case 9:
    case "COMPLETE":
      return Event_EventType.COMPLETE;
    case 10:
    case "PROGRESS":
      return Event_EventType.PROGRESS;
    case 11:
    case "MUTE":
      return Event_EventType.MUTE;
    case 12:
    case "UNMUTE":
      return Event_EventType.UNMUTE;
    case 13:
    case "PAUSE":
      return Event_EventType.PAUSE;
    case 14:
    case "CLICK":
      return Event_EventType.CLICK;
    case 15:
    case "CLICK_THROUGH":
      return Event_EventType.CLICK_THROUGH;
    case 16:
    case "REWIND":
      return Event_EventType.REWIND;
    case 17:
    case "RESUME":
      return Event_EventType.RESUME;
    case 18:
    case "ERROR":
      return Event_EventType.ERROR;
    case 21:
    case "EXPAND":
      return Event_EventType.EXPAND;
    case 22:
    case "COLLAPSE":
      return Event_EventType.COLLAPSE;
    case 24:
    case "CLOSE":
      return Event_EventType.CLOSE;
    case 25:
    case "CLOSE_LINEAR":
      return Event_EventType.CLOSE_LINEAR;
    case 26:
    case "SKIP":
      return Event_EventType.SKIP;
    case 27:
    case "ACCEPT_INVITATION":
      return Event_EventType.ACCEPT_INVITATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Event_EventType.UNRECOGNIZED;
  }
}

export function event_EventTypeToJSON(object: Event_EventType): string {
  switch (object) {
    case Event_EventType.EVENT_TYPE_UNSPECIFIED:
      return "EVENT_TYPE_UNSPECIFIED";
    case Event_EventType.CREATIVE_VIEW:
      return "CREATIVE_VIEW";
    case Event_EventType.START:
      return "START";
    case Event_EventType.BREAK_START:
      return "BREAK_START";
    case Event_EventType.BREAK_END:
      return "BREAK_END";
    case Event_EventType.IMPRESSION:
      return "IMPRESSION";
    case Event_EventType.FIRST_QUARTILE:
      return "FIRST_QUARTILE";
    case Event_EventType.MIDPOINT:
      return "MIDPOINT";
    case Event_EventType.THIRD_QUARTILE:
      return "THIRD_QUARTILE";
    case Event_EventType.COMPLETE:
      return "COMPLETE";
    case Event_EventType.PROGRESS:
      return "PROGRESS";
    case Event_EventType.MUTE:
      return "MUTE";
    case Event_EventType.UNMUTE:
      return "UNMUTE";
    case Event_EventType.PAUSE:
      return "PAUSE";
    case Event_EventType.CLICK:
      return "CLICK";
    case Event_EventType.CLICK_THROUGH:
      return "CLICK_THROUGH";
    case Event_EventType.REWIND:
      return "REWIND";
    case Event_EventType.RESUME:
      return "RESUME";
    case Event_EventType.ERROR:
      return "ERROR";
    case Event_EventType.EXPAND:
      return "EXPAND";
    case Event_EventType.COLLAPSE:
      return "COLLAPSE";
    case Event_EventType.CLOSE:
      return "CLOSE";
    case Event_EventType.CLOSE_LINEAR:
      return "CLOSE_LINEAR";
    case Event_EventType.SKIP:
      return "SKIP";
    case Event_EventType.ACCEPT_INVITATION:
      return "ACCEPT_INVITATION";
    case Event_EventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Indicates a time in which a list of events should be triggered
 * during media playback.
 */
export interface ProgressEvent {
  /**
   * The time when the following tracking events occurs. The time is in
   * seconds relative to the start of the VOD asset.
   */
  timeOffset:
    | Duration
    | undefined;
  /**
   * The list of progress tracking events for the ad break. These can be of
   * the following IAB types: `BREAK_START`, `BREAK_END`, `IMPRESSION`,
   * `CREATIVE_VIEW`, `START`, `FIRST_QUARTILE`, `MIDPOINT`, `THIRD_QUARTILE`,
   * `COMPLETE`, `PROGRESS`.
   */
  events: Event[];
}

function createBaseEvent(): Event {
  return { type: 0, uri: "", id: "", offset: undefined };
}

export const Event: MessageFns<Event> = {
  encode(message: Event, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.offset !== undefined) {
      Duration.encode(message.offset, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Event {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.offset = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      type: isSet(object.type) ? event_EventTypeFromJSON(object.type) : 0,
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      offset: isSet(object.offset) ? Duration.fromJSON(object.offset) : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = event_EventTypeToJSON(message.type);
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.offset !== undefined) {
      obj.offset = Duration.toJSON(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<Event>): Event {
    return Event.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.type = object.type ?? 0;
    message.uri = object.uri ?? "";
    message.id = object.id ?? "";
    message.offset = (object.offset !== undefined && object.offset !== null)
      ? Duration.fromPartial(object.offset)
      : undefined;
    return message;
  },
};

function createBaseProgressEvent(): ProgressEvent {
  return { timeOffset: undefined, events: [] };
}

export const ProgressEvent: MessageFns<ProgressEvent> = {
  encode(message: ProgressEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.timeOffset !== undefined) {
      Duration.encode(message.timeOffset, writer.uint32(10).fork()).join();
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProgressEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProgressEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timeOffset = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.events.push(Event.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProgressEvent {
    return {
      timeOffset: isSet(object.timeOffset) ? Duration.fromJSON(object.timeOffset) : undefined,
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProgressEvent): unknown {
    const obj: any = {};
    if (message.timeOffset !== undefined) {
      obj.timeOffset = Duration.toJSON(message.timeOffset);
    }
    if (message.events?.length) {
      obj.events = message.events.map((e) => Event.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ProgressEvent>): ProgressEvent {
    return ProgressEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProgressEvent>): ProgressEvent {
    const message = createBaseProgressEvent();
    message.timeOffset = (object.timeOffset !== undefined && object.timeOffset !== null)
      ? Duration.fromPartial(object.timeOffset)
      : undefined;
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
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
