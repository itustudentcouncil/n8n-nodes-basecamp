// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/actions/sdk/v2/interactionmodel/prompt/surface_capabilities.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.actions.sdk.v2.interactionmodel.prompt";

/** Represents the surface the user is using to make a request to the Action. */
export interface SurfaceCapabilities {
  /** Required. The capabilities of the surface making a request to the Action. */
  capabilities: SurfaceCapabilities_Capability[];
}

/** Capabilities the device surface supports at the time of the request. */
export enum SurfaceCapabilities_Capability {
  /** UNSPECIFIED - Unspecified surface capability. */
  UNSPECIFIED = 0,
  /** SPEECH - Device can speak to the user via text-to-speech or SSML. */
  SPEECH = 1,
  /** RICH_RESPONSE - Device can display rich responses like cards, lists and tables. */
  RICH_RESPONSE = 2,
  /** LONG_FORM_AUDIO - Device can play long form audio media like music and podcasts. */
  LONG_FORM_AUDIO = 3,
  /** INTERACTIVE_CANVAS - Device can display a interactive canvas response. */
  INTERACTIVE_CANVAS = 4,
  /** WEB_LINK - Device can use web links in rich responses to open a web browser. */
  WEB_LINK = 5,
  /** HOME_STORAGE - Device can support saving and fetching home storage. */
  HOME_STORAGE = 6,
  UNRECOGNIZED = -1,
}

export function surfaceCapabilities_CapabilityFromJSON(object: any): SurfaceCapabilities_Capability {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return SurfaceCapabilities_Capability.UNSPECIFIED;
    case 1:
    case "SPEECH":
      return SurfaceCapabilities_Capability.SPEECH;
    case 2:
    case "RICH_RESPONSE":
      return SurfaceCapabilities_Capability.RICH_RESPONSE;
    case 3:
    case "LONG_FORM_AUDIO":
      return SurfaceCapabilities_Capability.LONG_FORM_AUDIO;
    case 4:
    case "INTERACTIVE_CANVAS":
      return SurfaceCapabilities_Capability.INTERACTIVE_CANVAS;
    case 5:
    case "WEB_LINK":
      return SurfaceCapabilities_Capability.WEB_LINK;
    case 6:
    case "HOME_STORAGE":
      return SurfaceCapabilities_Capability.HOME_STORAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SurfaceCapabilities_Capability.UNRECOGNIZED;
  }
}

export function surfaceCapabilities_CapabilityToJSON(object: SurfaceCapabilities_Capability): string {
  switch (object) {
    case SurfaceCapabilities_Capability.UNSPECIFIED:
      return "UNSPECIFIED";
    case SurfaceCapabilities_Capability.SPEECH:
      return "SPEECH";
    case SurfaceCapabilities_Capability.RICH_RESPONSE:
      return "RICH_RESPONSE";
    case SurfaceCapabilities_Capability.LONG_FORM_AUDIO:
      return "LONG_FORM_AUDIO";
    case SurfaceCapabilities_Capability.INTERACTIVE_CANVAS:
      return "INTERACTIVE_CANVAS";
    case SurfaceCapabilities_Capability.WEB_LINK:
      return "WEB_LINK";
    case SurfaceCapabilities_Capability.HOME_STORAGE:
      return "HOME_STORAGE";
    case SurfaceCapabilities_Capability.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseSurfaceCapabilities(): SurfaceCapabilities {
  return { capabilities: [] };
}

export const SurfaceCapabilities: MessageFns<SurfaceCapabilities> = {
  encode(message: SurfaceCapabilities, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.capabilities) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SurfaceCapabilities {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSurfaceCapabilities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.capabilities.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.capabilities.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SurfaceCapabilities {
    return {
      capabilities: globalThis.Array.isArray(object?.capabilities)
        ? object.capabilities.map((e: any) => surfaceCapabilities_CapabilityFromJSON(e))
        : [],
    };
  },

  toJSON(message: SurfaceCapabilities): unknown {
    const obj: any = {};
    if (message.capabilities?.length) {
      obj.capabilities = message.capabilities.map((e) => surfaceCapabilities_CapabilityToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SurfaceCapabilities>): SurfaceCapabilities {
    return SurfaceCapabilities.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SurfaceCapabilities>): SurfaceCapabilities {
    const message = createBaseSurfaceCapabilities();
    message.capabilities = object.capabilities?.map((e) => e) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}