// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/apps/script/type/extension_point.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { BoolValue } from "../../../protobuf/wrappers.js";

export const protobufPackage = "google.apps.script.type";

/**
 * Common format for declaring a  menu item, or button, that appears within a
 * host app.
 */
export interface MenuItemExtensionPoint {
  /**
   * Required. The endpoint to execute when this extension point is
   * activated.
   */
  runFunction: string;
  /**
   * Required. User-visible text describing the action taken by activating this
   * extension point. For example, "Insert invoice".
   */
  label: string;
  /**
   * The URL for the logo image shown in the add-on toolbar.
   *
   * If not set, defaults to the add-on's primary logo URL.
   */
  logoUrl: string;
}

/** Common format for declaring an add-on's home-page view. */
export interface HomepageExtensionPoint {
  /**
   * Required. The endpoint to execute when this extension point is
   * activated.
   */
  runFunction: string;
  /**
   * Optional. If set to `false`, disable the home-page view in this context.
   *
   * Defaults to `true` if unset.
   *
   * If an add-ons custom home-page view is disabled, an autogenerated overview
   * card will be provided for users instead.
   */
  enabled: boolean | undefined;
}

/** Format for declaring a universal action menu item extension point. */
export interface UniversalActionExtensionPoint {
  /**
   * Required. User-visible text describing the action taken by activating this
   * extension point, for example, "Add a new contact".
   */
  label: string;
  /** URL to be opened by the UniversalAction. */
  openLink?:
    | string
    | undefined;
  /** Endpoint to be run by the UniversalAction. */
  runFunction?: string | undefined;
}

function createBaseMenuItemExtensionPoint(): MenuItemExtensionPoint {
  return { runFunction: "", label: "", logoUrl: "" };
}

export const MenuItemExtensionPoint: MessageFns<MenuItemExtensionPoint> = {
  encode(message: MenuItemExtensionPoint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.runFunction !== "") {
      writer.uint32(10).string(message.runFunction);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.logoUrl !== "") {
      writer.uint32(26).string(message.logoUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MenuItemExtensionPoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMenuItemExtensionPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.runFunction = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.label = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MenuItemExtensionPoint {
    return {
      runFunction: isSet(object.runFunction) ? globalThis.String(object.runFunction) : "",
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      logoUrl: isSet(object.logoUrl) ? globalThis.String(object.logoUrl) : "",
    };
  },

  toJSON(message: MenuItemExtensionPoint): unknown {
    const obj: any = {};
    if (message.runFunction !== "") {
      obj.runFunction = message.runFunction;
    }
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.logoUrl !== "") {
      obj.logoUrl = message.logoUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<MenuItemExtensionPoint>): MenuItemExtensionPoint {
    return MenuItemExtensionPoint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MenuItemExtensionPoint>): MenuItemExtensionPoint {
    const message = createBaseMenuItemExtensionPoint();
    message.runFunction = object.runFunction ?? "";
    message.label = object.label ?? "";
    message.logoUrl = object.logoUrl ?? "";
    return message;
  },
};

function createBaseHomepageExtensionPoint(): HomepageExtensionPoint {
  return { runFunction: "", enabled: undefined };
}

export const HomepageExtensionPoint: MessageFns<HomepageExtensionPoint> = {
  encode(message: HomepageExtensionPoint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.runFunction !== "") {
      writer.uint32(10).string(message.runFunction);
    }
    if (message.enabled !== undefined) {
      BoolValue.encode({ value: message.enabled! }, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HomepageExtensionPoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHomepageExtensionPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.runFunction = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.enabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HomepageExtensionPoint {
    return {
      runFunction: isSet(object.runFunction) ? globalThis.String(object.runFunction) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : undefined,
    };
  },

  toJSON(message: HomepageExtensionPoint): unknown {
    const obj: any = {};
    if (message.runFunction !== "") {
      obj.runFunction = message.runFunction;
    }
    if (message.enabled !== undefined) {
      obj.enabled = message.enabled;
    }
    return obj;
  },

  create(base?: DeepPartial<HomepageExtensionPoint>): HomepageExtensionPoint {
    return HomepageExtensionPoint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HomepageExtensionPoint>): HomepageExtensionPoint {
    const message = createBaseHomepageExtensionPoint();
    message.runFunction = object.runFunction ?? "";
    message.enabled = object.enabled ?? undefined;
    return message;
  },
};

function createBaseUniversalActionExtensionPoint(): UniversalActionExtensionPoint {
  return { label: "", openLink: undefined, runFunction: undefined };
}

export const UniversalActionExtensionPoint: MessageFns<UniversalActionExtensionPoint> = {
  encode(message: UniversalActionExtensionPoint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.openLink !== undefined) {
      writer.uint32(18).string(message.openLink);
    }
    if (message.runFunction !== undefined) {
      writer.uint32(26).string(message.runFunction);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UniversalActionExtensionPoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniversalActionExtensionPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.label = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.openLink = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): UniversalActionExtensionPoint {
    return {
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      openLink: isSet(object.openLink) ? globalThis.String(object.openLink) : undefined,
      runFunction: isSet(object.runFunction) ? globalThis.String(object.runFunction) : undefined,
    };
  },

  toJSON(message: UniversalActionExtensionPoint): unknown {
    const obj: any = {};
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.openLink !== undefined) {
      obj.openLink = message.openLink;
    }
    if (message.runFunction !== undefined) {
      obj.runFunction = message.runFunction;
    }
    return obj;
  },

  create(base?: DeepPartial<UniversalActionExtensionPoint>): UniversalActionExtensionPoint {
    return UniversalActionExtensionPoint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UniversalActionExtensionPoint>): UniversalActionExtensionPoint {
    const message = createBaseUniversalActionExtensionPoint();
    message.label = object.label ?? "";
    message.openLink = object.openLink ?? undefined;
    message.runFunction = object.runFunction ?? undefined;
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
