// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/apps/script/type/calendar/calendar_addon_manifest.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { HomepageExtensionPoint } from "../extension_point.js";

export const protobufPackage = "google.apps.script.type.calendar";

/** Calendar add-on manifest. */
export interface CalendarAddOnManifest {
  /**
   * Defines an endpoint that will be executed contexts that don't
   * match a declared contextual trigger. Any cards generated by this function
   * will always be available to the user, but may be eclipsed by contextual
   * content when this add-on declares more targeted triggers.
   *
   * If present, this overrides the configuration from
   * `addOns.common.homepageTrigger`.
   */
  homepageTrigger:
    | HomepageExtensionPoint
    | undefined;
  /** Defines conference solutions provided by this add-on. */
  conferenceSolution: ConferenceSolution[];
  /** An endpoint to execute that creates a URL to the add-on's settings page. */
  createSettingsUrlFunction: string;
  /** An endpoint to trigger when an event is opened (viewed/edited). */
  eventOpenTrigger:
    | CalendarExtensionPoint
    | undefined;
  /** An endpoint to trigger when the open event is updated. */
  eventUpdateTrigger:
    | CalendarExtensionPoint
    | undefined;
  /** Define the level of data access when an event addon is triggered. */
  currentEventAccess: CalendarAddOnManifest_EventAccess;
}

/** An enum defining the level of data access event triggers require. */
export enum CalendarAddOnManifest_EventAccess {
  /** UNSPECIFIED - Default value when nothing is set for EventAccess. */
  UNSPECIFIED = 0,
  /**
   * METADATA - METADATA gives event triggers the permission to access the metadata of
   * events such as event id and calendar id.
   */
  METADATA = 1,
  /**
   * READ - READ gives event triggers access to all provided event fields including
   * the metadata, attendees, and conference data.
   */
  READ = 3,
  /**
   * WRITE - WRITE gives event triggers access to the metadata of events and the
   * ability to perform all actions, including adding attendees and setting
   * conference data.
   */
  WRITE = 4,
  /**
   * READ_WRITE - READ_WRITE gives event triggers access to all provided event fields
   * including the metadata, attendees, and conference data and the ability to
   * perform all actions.
   */
  READ_WRITE = 5,
  UNRECOGNIZED = -1,
}

export function calendarAddOnManifest_EventAccessFromJSON(object: any): CalendarAddOnManifest_EventAccess {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CalendarAddOnManifest_EventAccess.UNSPECIFIED;
    case 1:
    case "METADATA":
      return CalendarAddOnManifest_EventAccess.METADATA;
    case 3:
    case "READ":
      return CalendarAddOnManifest_EventAccess.READ;
    case 4:
    case "WRITE":
      return CalendarAddOnManifest_EventAccess.WRITE;
    case 5:
    case "READ_WRITE":
      return CalendarAddOnManifest_EventAccess.READ_WRITE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CalendarAddOnManifest_EventAccess.UNRECOGNIZED;
  }
}

export function calendarAddOnManifest_EventAccessToJSON(object: CalendarAddOnManifest_EventAccess): string {
  switch (object) {
    case CalendarAddOnManifest_EventAccess.UNSPECIFIED:
      return "UNSPECIFIED";
    case CalendarAddOnManifest_EventAccess.METADATA:
      return "METADATA";
    case CalendarAddOnManifest_EventAccess.READ:
      return "READ";
    case CalendarAddOnManifest_EventAccess.WRITE:
      return "WRITE";
    case CalendarAddOnManifest_EventAccess.READ_WRITE:
      return "READ_WRITE";
    case CalendarAddOnManifest_EventAccess.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Defines conference related values. */
export interface ConferenceSolution {
  /** Required. The endpoint to call when ConferenceData should be created. */
  onCreateFunction: string;
  /**
   * Required. IDs should be unique across ConferenceSolutions within one
   * add-on, but this is not strictly enforced. It is up to the add-on developer
   * to assign them uniquely, otherwise the wrong ConferenceSolution may be
   * used when the add-on is triggered. While the developer may change the
   * display name of an add-on, the ID should not be changed.
   */
  id: string;
  /** Required. The display name of the ConferenceSolution. */
  name: string;
  /** Required. The URL for the logo image of the ConferenceSolution. */
  logoUrl: string;
}

/** Common format for declaring a calendar add-on's triggers. */
export interface CalendarExtensionPoint {
  /**
   * Required. The endpoint to execute when this extension point is
   * activated.
   */
  runFunction: string;
}

function createBaseCalendarAddOnManifest(): CalendarAddOnManifest {
  return {
    homepageTrigger: undefined,
    conferenceSolution: [],
    createSettingsUrlFunction: "",
    eventOpenTrigger: undefined,
    eventUpdateTrigger: undefined,
    currentEventAccess: 0,
  };
}

export const CalendarAddOnManifest: MessageFns<CalendarAddOnManifest> = {
  encode(message: CalendarAddOnManifest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.homepageTrigger !== undefined) {
      HomepageExtensionPoint.encode(message.homepageTrigger, writer.uint32(50).fork()).join();
    }
    for (const v of message.conferenceSolution) {
      ConferenceSolution.encode(v!, writer.uint32(26).fork()).join();
    }
    if (message.createSettingsUrlFunction !== "") {
      writer.uint32(42).string(message.createSettingsUrlFunction);
    }
    if (message.eventOpenTrigger !== undefined) {
      CalendarExtensionPoint.encode(message.eventOpenTrigger, writer.uint32(82).fork()).join();
    }
    if (message.eventUpdateTrigger !== undefined) {
      CalendarExtensionPoint.encode(message.eventUpdateTrigger, writer.uint32(90).fork()).join();
    }
    if (message.currentEventAccess !== 0) {
      writer.uint32(96).int32(message.currentEventAccess);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CalendarAddOnManifest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalendarAddOnManifest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.homepageTrigger = HomepageExtensionPoint.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.conferenceSolution.push(ConferenceSolution.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createSettingsUrlFunction = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.eventOpenTrigger = CalendarExtensionPoint.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.eventUpdateTrigger = CalendarExtensionPoint.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.currentEventAccess = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CalendarAddOnManifest {
    return {
      homepageTrigger: isSet(object.homepageTrigger)
        ? HomepageExtensionPoint.fromJSON(object.homepageTrigger)
        : undefined,
      conferenceSolution: globalThis.Array.isArray(object?.conferenceSolution)
        ? object.conferenceSolution.map((e: any) => ConferenceSolution.fromJSON(e))
        : [],
      createSettingsUrlFunction: isSet(object.createSettingsUrlFunction)
        ? globalThis.String(object.createSettingsUrlFunction)
        : "",
      eventOpenTrigger: isSet(object.eventOpenTrigger)
        ? CalendarExtensionPoint.fromJSON(object.eventOpenTrigger)
        : undefined,
      eventUpdateTrigger: isSet(object.eventUpdateTrigger)
        ? CalendarExtensionPoint.fromJSON(object.eventUpdateTrigger)
        : undefined,
      currentEventAccess: isSet(object.currentEventAccess)
        ? calendarAddOnManifest_EventAccessFromJSON(object.currentEventAccess)
        : 0,
    };
  },

  toJSON(message: CalendarAddOnManifest): unknown {
    const obj: any = {};
    if (message.homepageTrigger !== undefined) {
      obj.homepageTrigger = HomepageExtensionPoint.toJSON(message.homepageTrigger);
    }
    if (message.conferenceSolution?.length) {
      obj.conferenceSolution = message.conferenceSolution.map((e) => ConferenceSolution.toJSON(e));
    }
    if (message.createSettingsUrlFunction !== "") {
      obj.createSettingsUrlFunction = message.createSettingsUrlFunction;
    }
    if (message.eventOpenTrigger !== undefined) {
      obj.eventOpenTrigger = CalendarExtensionPoint.toJSON(message.eventOpenTrigger);
    }
    if (message.eventUpdateTrigger !== undefined) {
      obj.eventUpdateTrigger = CalendarExtensionPoint.toJSON(message.eventUpdateTrigger);
    }
    if (message.currentEventAccess !== 0) {
      obj.currentEventAccess = calendarAddOnManifest_EventAccessToJSON(message.currentEventAccess);
    }
    return obj;
  },

  create(base?: DeepPartial<CalendarAddOnManifest>): CalendarAddOnManifest {
    return CalendarAddOnManifest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CalendarAddOnManifest>): CalendarAddOnManifest {
    const message = createBaseCalendarAddOnManifest();
    message.homepageTrigger = (object.homepageTrigger !== undefined && object.homepageTrigger !== null)
      ? HomepageExtensionPoint.fromPartial(object.homepageTrigger)
      : undefined;
    message.conferenceSolution = object.conferenceSolution?.map((e) => ConferenceSolution.fromPartial(e)) || [];
    message.createSettingsUrlFunction = object.createSettingsUrlFunction ?? "";
    message.eventOpenTrigger = (object.eventOpenTrigger !== undefined && object.eventOpenTrigger !== null)
      ? CalendarExtensionPoint.fromPartial(object.eventOpenTrigger)
      : undefined;
    message.eventUpdateTrigger = (object.eventUpdateTrigger !== undefined && object.eventUpdateTrigger !== null)
      ? CalendarExtensionPoint.fromPartial(object.eventUpdateTrigger)
      : undefined;
    message.currentEventAccess = object.currentEventAccess ?? 0;
    return message;
  },
};

function createBaseConferenceSolution(): ConferenceSolution {
  return { onCreateFunction: "", id: "", name: "", logoUrl: "" };
}

export const ConferenceSolution: MessageFns<ConferenceSolution> = {
  encode(message: ConferenceSolution, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.onCreateFunction !== "") {
      writer.uint32(10).string(message.onCreateFunction);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.logoUrl !== "") {
      writer.uint32(50).string(message.logoUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConferenceSolution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConferenceSolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.onCreateFunction = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.id = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.logoUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConferenceSolution {
    return {
      onCreateFunction: isSet(object.onCreateFunction) ? globalThis.String(object.onCreateFunction) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      logoUrl: isSet(object.logoUrl) ? globalThis.String(object.logoUrl) : "",
    };
  },

  toJSON(message: ConferenceSolution): unknown {
    const obj: any = {};
    if (message.onCreateFunction !== "") {
      obj.onCreateFunction = message.onCreateFunction;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.logoUrl !== "") {
      obj.logoUrl = message.logoUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<ConferenceSolution>): ConferenceSolution {
    return ConferenceSolution.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConferenceSolution>): ConferenceSolution {
    const message = createBaseConferenceSolution();
    message.onCreateFunction = object.onCreateFunction ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.logoUrl = object.logoUrl ?? "";
    return message;
  },
};

function createBaseCalendarExtensionPoint(): CalendarExtensionPoint {
  return { runFunction: "" };
}

export const CalendarExtensionPoint: MessageFns<CalendarExtensionPoint> = {
  encode(message: CalendarExtensionPoint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.runFunction !== "") {
      writer.uint32(10).string(message.runFunction);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CalendarExtensionPoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalendarExtensionPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.runFunction = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CalendarExtensionPoint {
    return { runFunction: isSet(object.runFunction) ? globalThis.String(object.runFunction) : "" };
  },

  toJSON(message: CalendarExtensionPoint): unknown {
    const obj: any = {};
    if (message.runFunction !== "") {
      obj.runFunction = message.runFunction;
    }
    return obj;
  },

  create(base?: DeepPartial<CalendarExtensionPoint>): CalendarExtensionPoint {
    return CalendarExtensionPoint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CalendarExtensionPoint>): CalendarExtensionPoint {
    const message = createBaseCalendarExtensionPoint();
    message.runFunction = object.runFunction ?? "";
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