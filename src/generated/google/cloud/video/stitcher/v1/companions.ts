// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/video/stitcher/v1/companions.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Event } from "./events.js";

export const protobufPackage = "google.cloud.video.stitcher.v1";

/** Metadata for companion ads. */
export interface CompanionAds {
  /** Indicates how many of the companions should be displayed with the ad. */
  displayRequirement: CompanionAds_DisplayRequirement;
  /** List of companion ads. */
  companions: Companion[];
}

/** Indicates how many of the companions should be displayed with the ad. */
export enum CompanionAds_DisplayRequirement {
  /** DISPLAY_REQUIREMENT_UNSPECIFIED - Required companions are not specified. The default is ALL. */
  DISPLAY_REQUIREMENT_UNSPECIFIED = 0,
  /** ALL - All companions are required to be displayed. */
  ALL = 1,
  /** ANY - At least one of companions needs to be displayed. */
  ANY = 2,
  /** NONE - All companions are optional for display. */
  NONE = 3,
  UNRECOGNIZED = -1,
}

export function companionAds_DisplayRequirementFromJSON(object: any): CompanionAds_DisplayRequirement {
  switch (object) {
    case 0:
    case "DISPLAY_REQUIREMENT_UNSPECIFIED":
      return CompanionAds_DisplayRequirement.DISPLAY_REQUIREMENT_UNSPECIFIED;
    case 1:
    case "ALL":
      return CompanionAds_DisplayRequirement.ALL;
    case 2:
    case "ANY":
      return CompanionAds_DisplayRequirement.ANY;
    case 3:
    case "NONE":
      return CompanionAds_DisplayRequirement.NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CompanionAds_DisplayRequirement.UNRECOGNIZED;
  }
}

export function companionAds_DisplayRequirementToJSON(object: CompanionAds_DisplayRequirement): string {
  switch (object) {
    case CompanionAds_DisplayRequirement.DISPLAY_REQUIREMENT_UNSPECIFIED:
      return "DISPLAY_REQUIREMENT_UNSPECIFIED";
    case CompanionAds_DisplayRequirement.ALL:
      return "ALL";
    case CompanionAds_DisplayRequirement.ANY:
      return "ANY";
    case CompanionAds_DisplayRequirement.NONE:
      return "NONE";
    case CompanionAds_DisplayRequirement.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Metadata for a companion. */
export interface Companion {
  /** The IFrame ad resource associated with the companion ad. */
  iframeAdResource?:
    | IframeAdResource
    | undefined;
  /** The static ad resource associated with the companion ad. */
  staticAdResource?:
    | StaticAdResource
    | undefined;
  /** The HTML ad resource associated with the companion ad. */
  htmlAdResource?:
    | HtmlAdResource
    | undefined;
  /** The API necessary to communicate with the creative if available. */
  apiFramework: string;
  /** The pixel height of the placement slot for the intended creative. */
  heightPx: number;
  /** The pixel width of the placement slot for the intended creative. */
  widthPx: number;
  /** The pixel height of the creative. */
  assetHeightPx: number;
  /** The maximum pixel height of the creative in its expanded state. */
  expandedHeightPx: number;
  /** The pixel width of the creative. */
  assetWidthPx: number;
  /** The maximum pixel width of the creative in its expanded state. */
  expandedWidthPx: number;
  /**
   * The ID used to identify the desired placement on a publisher's page.
   * Values to be used should be discussed between publishers and
   * advertisers.
   */
  adSlotId: string;
  /** The list of tracking events for the companion. */
  events: Event[];
}

/** Metadata for an HTML ad resource. */
export interface HtmlAdResource {
  /** The HTML to display for the ad resource. */
  htmlSource: string;
}

/** Metadata for an IFrame ad resource. */
export interface IframeAdResource {
  /** URI source for an IFrame to display for the ad resource. */
  uri: string;
}

/** Metadata for a static ad resource. */
export interface StaticAdResource {
  /** URI to the static file for the ad resource. */
  uri: string;
  /** Describes the MIME type of the ad resource. */
  creativeType: string;
}

function createBaseCompanionAds(): CompanionAds {
  return { displayRequirement: 0, companions: [] };
}

export const CompanionAds: MessageFns<CompanionAds> = {
  encode(message: CompanionAds, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.displayRequirement !== 0) {
      writer.uint32(8).int32(message.displayRequirement);
    }
    for (const v of message.companions) {
      Companion.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompanionAds {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanionAds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.displayRequirement = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.companions.push(Companion.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompanionAds {
    return {
      displayRequirement: isSet(object.displayRequirement)
        ? companionAds_DisplayRequirementFromJSON(object.displayRequirement)
        : 0,
      companions: globalThis.Array.isArray(object?.companions)
        ? object.companions.map((e: any) => Companion.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CompanionAds): unknown {
    const obj: any = {};
    if (message.displayRequirement !== 0) {
      obj.displayRequirement = companionAds_DisplayRequirementToJSON(message.displayRequirement);
    }
    if (message.companions?.length) {
      obj.companions = message.companions.map((e) => Companion.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<CompanionAds>): CompanionAds {
    return CompanionAds.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CompanionAds>): CompanionAds {
    const message = createBaseCompanionAds();
    message.displayRequirement = object.displayRequirement ?? 0;
    message.companions = object.companions?.map((e) => Companion.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCompanion(): Companion {
  return {
    iframeAdResource: undefined,
    staticAdResource: undefined,
    htmlAdResource: undefined,
    apiFramework: "",
    heightPx: 0,
    widthPx: 0,
    assetHeightPx: 0,
    expandedHeightPx: 0,
    assetWidthPx: 0,
    expandedWidthPx: 0,
    adSlotId: "",
    events: [],
  };
}

export const Companion: MessageFns<Companion> = {
  encode(message: Companion, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.iframeAdResource !== undefined) {
      IframeAdResource.encode(message.iframeAdResource, writer.uint32(82).fork()).join();
    }
    if (message.staticAdResource !== undefined) {
      StaticAdResource.encode(message.staticAdResource, writer.uint32(90).fork()).join();
    }
    if (message.htmlAdResource !== undefined) {
      HtmlAdResource.encode(message.htmlAdResource, writer.uint32(98).fork()).join();
    }
    if (message.apiFramework !== "") {
      writer.uint32(10).string(message.apiFramework);
    }
    if (message.heightPx !== 0) {
      writer.uint32(16).int32(message.heightPx);
    }
    if (message.widthPx !== 0) {
      writer.uint32(24).int32(message.widthPx);
    }
    if (message.assetHeightPx !== 0) {
      writer.uint32(32).int32(message.assetHeightPx);
    }
    if (message.expandedHeightPx !== 0) {
      writer.uint32(40).int32(message.expandedHeightPx);
    }
    if (message.assetWidthPx !== 0) {
      writer.uint32(48).int32(message.assetWidthPx);
    }
    if (message.expandedWidthPx !== 0) {
      writer.uint32(56).int32(message.expandedWidthPx);
    }
    if (message.adSlotId !== "") {
      writer.uint32(66).string(message.adSlotId);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(74).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Companion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          if (tag !== 82) {
            break;
          }

          message.iframeAdResource = IframeAdResource.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.staticAdResource = StaticAdResource.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.htmlAdResource = HtmlAdResource.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiFramework = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.heightPx = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.widthPx = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.assetHeightPx = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.expandedHeightPx = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.assetWidthPx = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.expandedWidthPx = reader.int32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.adSlotId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
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

  fromJSON(object: any): Companion {
    return {
      iframeAdResource: isSet(object.iframeAdResource) ? IframeAdResource.fromJSON(object.iframeAdResource) : undefined,
      staticAdResource: isSet(object.staticAdResource) ? StaticAdResource.fromJSON(object.staticAdResource) : undefined,
      htmlAdResource: isSet(object.htmlAdResource) ? HtmlAdResource.fromJSON(object.htmlAdResource) : undefined,
      apiFramework: isSet(object.apiFramework) ? globalThis.String(object.apiFramework) : "",
      heightPx: isSet(object.heightPx) ? globalThis.Number(object.heightPx) : 0,
      widthPx: isSet(object.widthPx) ? globalThis.Number(object.widthPx) : 0,
      assetHeightPx: isSet(object.assetHeightPx) ? globalThis.Number(object.assetHeightPx) : 0,
      expandedHeightPx: isSet(object.expandedHeightPx) ? globalThis.Number(object.expandedHeightPx) : 0,
      assetWidthPx: isSet(object.assetWidthPx) ? globalThis.Number(object.assetWidthPx) : 0,
      expandedWidthPx: isSet(object.expandedWidthPx) ? globalThis.Number(object.expandedWidthPx) : 0,
      adSlotId: isSet(object.adSlotId) ? globalThis.String(object.adSlotId) : "",
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
    };
  },

  toJSON(message: Companion): unknown {
    const obj: any = {};
    if (message.iframeAdResource !== undefined) {
      obj.iframeAdResource = IframeAdResource.toJSON(message.iframeAdResource);
    }
    if (message.staticAdResource !== undefined) {
      obj.staticAdResource = StaticAdResource.toJSON(message.staticAdResource);
    }
    if (message.htmlAdResource !== undefined) {
      obj.htmlAdResource = HtmlAdResource.toJSON(message.htmlAdResource);
    }
    if (message.apiFramework !== "") {
      obj.apiFramework = message.apiFramework;
    }
    if (message.heightPx !== 0) {
      obj.heightPx = Math.round(message.heightPx);
    }
    if (message.widthPx !== 0) {
      obj.widthPx = Math.round(message.widthPx);
    }
    if (message.assetHeightPx !== 0) {
      obj.assetHeightPx = Math.round(message.assetHeightPx);
    }
    if (message.expandedHeightPx !== 0) {
      obj.expandedHeightPx = Math.round(message.expandedHeightPx);
    }
    if (message.assetWidthPx !== 0) {
      obj.assetWidthPx = Math.round(message.assetWidthPx);
    }
    if (message.expandedWidthPx !== 0) {
      obj.expandedWidthPx = Math.round(message.expandedWidthPx);
    }
    if (message.adSlotId !== "") {
      obj.adSlotId = message.adSlotId;
    }
    if (message.events?.length) {
      obj.events = message.events.map((e) => Event.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Companion>): Companion {
    return Companion.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Companion>): Companion {
    const message = createBaseCompanion();
    message.iframeAdResource = (object.iframeAdResource !== undefined && object.iframeAdResource !== null)
      ? IframeAdResource.fromPartial(object.iframeAdResource)
      : undefined;
    message.staticAdResource = (object.staticAdResource !== undefined && object.staticAdResource !== null)
      ? StaticAdResource.fromPartial(object.staticAdResource)
      : undefined;
    message.htmlAdResource = (object.htmlAdResource !== undefined && object.htmlAdResource !== null)
      ? HtmlAdResource.fromPartial(object.htmlAdResource)
      : undefined;
    message.apiFramework = object.apiFramework ?? "";
    message.heightPx = object.heightPx ?? 0;
    message.widthPx = object.widthPx ?? 0;
    message.assetHeightPx = object.assetHeightPx ?? 0;
    message.expandedHeightPx = object.expandedHeightPx ?? 0;
    message.assetWidthPx = object.assetWidthPx ?? 0;
    message.expandedWidthPx = object.expandedWidthPx ?? 0;
    message.adSlotId = object.adSlotId ?? "";
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHtmlAdResource(): HtmlAdResource {
  return { htmlSource: "" };
}

export const HtmlAdResource: MessageFns<HtmlAdResource> = {
  encode(message: HtmlAdResource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.htmlSource !== "") {
      writer.uint32(10).string(message.htmlSource);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HtmlAdResource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHtmlAdResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.htmlSource = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HtmlAdResource {
    return { htmlSource: isSet(object.htmlSource) ? globalThis.String(object.htmlSource) : "" };
  },

  toJSON(message: HtmlAdResource): unknown {
    const obj: any = {};
    if (message.htmlSource !== "") {
      obj.htmlSource = message.htmlSource;
    }
    return obj;
  },

  create(base?: DeepPartial<HtmlAdResource>): HtmlAdResource {
    return HtmlAdResource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HtmlAdResource>): HtmlAdResource {
    const message = createBaseHtmlAdResource();
    message.htmlSource = object.htmlSource ?? "";
    return message;
  },
};

function createBaseIframeAdResource(): IframeAdResource {
  return { uri: "" };
}

export const IframeAdResource: MessageFns<IframeAdResource> = {
  encode(message: IframeAdResource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): IframeAdResource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIframeAdResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IframeAdResource {
    return { uri: isSet(object.uri) ? globalThis.String(object.uri) : "" };
  },

  toJSON(message: IframeAdResource): unknown {
    const obj: any = {};
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<IframeAdResource>): IframeAdResource {
    return IframeAdResource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IframeAdResource>): IframeAdResource {
    const message = createBaseIframeAdResource();
    message.uri = object.uri ?? "";
    return message;
  },
};

function createBaseStaticAdResource(): StaticAdResource {
  return { uri: "", creativeType: "" };
}

export const StaticAdResource: MessageFns<StaticAdResource> = {
  encode(message: StaticAdResource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.creativeType !== "") {
      writer.uint32(18).string(message.creativeType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StaticAdResource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaticAdResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creativeType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StaticAdResource {
    return {
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      creativeType: isSet(object.creativeType) ? globalThis.String(object.creativeType) : "",
    };
  },

  toJSON(message: StaticAdResource): unknown {
    const obj: any = {};
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.creativeType !== "") {
      obj.creativeType = message.creativeType;
    }
    return obj;
  },

  create(base?: DeepPartial<StaticAdResource>): StaticAdResource {
    return StaticAdResource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StaticAdResource>): StaticAdResource {
    const message = createBaseStaticAdResource();
    message.uri = object.uri ?? "";
    message.creativeType = object.creativeType ?? "";
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