// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: zitadel/settings/v2beta/branding_settings.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ResourceOwnerType, resourceOwnerTypeFromJSON, resourceOwnerTypeToJSON } from "./settings.js";

export const protobufPackage = "zitadel.settings.v2beta";

export enum ThemeMode {
  THEME_MODE_UNSPECIFIED = 0,
  THEME_MODE_AUTO = 1,
  THEME_MODE_LIGHT = 2,
  THEME_MODE_DARK = 3,
  UNRECOGNIZED = -1,
}

export function themeModeFromJSON(object: any): ThemeMode {
  switch (object) {
    case 0:
    case "THEME_MODE_UNSPECIFIED":
      return ThemeMode.THEME_MODE_UNSPECIFIED;
    case 1:
    case "THEME_MODE_AUTO":
      return ThemeMode.THEME_MODE_AUTO;
    case 2:
    case "THEME_MODE_LIGHT":
      return ThemeMode.THEME_MODE_LIGHT;
    case 3:
    case "THEME_MODE_DARK":
      return ThemeMode.THEME_MODE_DARK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ThemeMode.UNRECOGNIZED;
  }
}

export function themeModeToJSON(object: ThemeMode): string {
  switch (object) {
    case ThemeMode.THEME_MODE_UNSPECIFIED:
      return "THEME_MODE_UNSPECIFIED";
    case ThemeMode.THEME_MODE_AUTO:
      return "THEME_MODE_AUTO";
    case ThemeMode.THEME_MODE_LIGHT:
      return "THEME_MODE_LIGHT";
    case ThemeMode.THEME_MODE_DARK:
      return "THEME_MODE_DARK";
    case ThemeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface BrandingSettings {
  lightTheme: Theme | undefined;
  darkTheme: Theme | undefined;
  fontUrl: string;
  /** hides the org suffix on the login form if the scope \"urn:zitadel:iam:org:domain:primary:{domainname}\" is set */
  hideLoginNameSuffix: boolean;
  disableWatermark: boolean;
  /** resource_owner_type returns if the setting is managed on the organization or on the instance */
  resourceOwnerType: ResourceOwnerType;
  themeMode: ThemeMode;
}

export interface Theme {
  /** hex value for primary color */
  primaryColor: string;
  /** hex value for background color */
  backgroundColor: string;
  /** hex value for warning color */
  warnColor: string;
  /** hex value for font color */
  fontColor: string;
  /** url where the logo is served */
  logoUrl: string;
  /** url where the icon is served */
  iconUrl: string;
}

function createBaseBrandingSettings(): BrandingSettings {
  return {
    lightTheme: undefined,
    darkTheme: undefined,
    fontUrl: "",
    hideLoginNameSuffix: false,
    disableWatermark: false,
    resourceOwnerType: 0,
    themeMode: 0,
  };
}

export const BrandingSettings: MessageFns<BrandingSettings> = {
  encode(message: BrandingSettings, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.lightTheme !== undefined) {
      Theme.encode(message.lightTheme, writer.uint32(10).fork()).join();
    }
    if (message.darkTheme !== undefined) {
      Theme.encode(message.darkTheme, writer.uint32(18).fork()).join();
    }
    if (message.fontUrl !== "") {
      writer.uint32(26).string(message.fontUrl);
    }
    if (message.hideLoginNameSuffix !== false) {
      writer.uint32(32).bool(message.hideLoginNameSuffix);
    }
    if (message.disableWatermark !== false) {
      writer.uint32(40).bool(message.disableWatermark);
    }
    if (message.resourceOwnerType !== 0) {
      writer.uint32(48).int32(message.resourceOwnerType);
    }
    if (message.themeMode !== 0) {
      writer.uint32(56).int32(message.themeMode);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BrandingSettings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrandingSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lightTheme = Theme.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.darkTheme = Theme.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fontUrl = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hideLoginNameSuffix = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.disableWatermark = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.resourceOwnerType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.themeMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BrandingSettings {
    return {
      lightTheme: isSet(object.lightTheme) ? Theme.fromJSON(object.lightTheme) : undefined,
      darkTheme: isSet(object.darkTheme) ? Theme.fromJSON(object.darkTheme) : undefined,
      fontUrl: isSet(object.fontUrl) ? globalThis.String(object.fontUrl) : "",
      hideLoginNameSuffix: isSet(object.hideLoginNameSuffix) ? globalThis.Boolean(object.hideLoginNameSuffix) : false,
      disableWatermark: isSet(object.disableWatermark) ? globalThis.Boolean(object.disableWatermark) : false,
      resourceOwnerType: isSet(object.resourceOwnerType) ? resourceOwnerTypeFromJSON(object.resourceOwnerType) : 0,
      themeMode: isSet(object.themeMode) ? themeModeFromJSON(object.themeMode) : 0,
    };
  },

  toJSON(message: BrandingSettings): unknown {
    const obj: any = {};
    if (message.lightTheme !== undefined) {
      obj.lightTheme = Theme.toJSON(message.lightTheme);
    }
    if (message.darkTheme !== undefined) {
      obj.darkTheme = Theme.toJSON(message.darkTheme);
    }
    if (message.fontUrl !== "") {
      obj.fontUrl = message.fontUrl;
    }
    if (message.hideLoginNameSuffix !== false) {
      obj.hideLoginNameSuffix = message.hideLoginNameSuffix;
    }
    if (message.disableWatermark !== false) {
      obj.disableWatermark = message.disableWatermark;
    }
    if (message.resourceOwnerType !== 0) {
      obj.resourceOwnerType = resourceOwnerTypeToJSON(message.resourceOwnerType);
    }
    if (message.themeMode !== 0) {
      obj.themeMode = themeModeToJSON(message.themeMode);
    }
    return obj;
  },

  create(base?: DeepPartial<BrandingSettings>): BrandingSettings {
    return BrandingSettings.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BrandingSettings>): BrandingSettings {
    const message = createBaseBrandingSettings();
    message.lightTheme = (object.lightTheme !== undefined && object.lightTheme !== null)
      ? Theme.fromPartial(object.lightTheme)
      : undefined;
    message.darkTheme = (object.darkTheme !== undefined && object.darkTheme !== null)
      ? Theme.fromPartial(object.darkTheme)
      : undefined;
    message.fontUrl = object.fontUrl ?? "";
    message.hideLoginNameSuffix = object.hideLoginNameSuffix ?? false;
    message.disableWatermark = object.disableWatermark ?? false;
    message.resourceOwnerType = object.resourceOwnerType ?? 0;
    message.themeMode = object.themeMode ?? 0;
    return message;
  },
};

function createBaseTheme(): Theme {
  return { primaryColor: "", backgroundColor: "", warnColor: "", fontColor: "", logoUrl: "", iconUrl: "" };
}

export const Theme: MessageFns<Theme> = {
  encode(message: Theme, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.primaryColor !== "") {
      writer.uint32(10).string(message.primaryColor);
    }
    if (message.backgroundColor !== "") {
      writer.uint32(18).string(message.backgroundColor);
    }
    if (message.warnColor !== "") {
      writer.uint32(26).string(message.warnColor);
    }
    if (message.fontColor !== "") {
      writer.uint32(34).string(message.fontColor);
    }
    if (message.logoUrl !== "") {
      writer.uint32(42).string(message.logoUrl);
    }
    if (message.iconUrl !== "") {
      writer.uint32(50).string(message.iconUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Theme {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTheme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.primaryColor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backgroundColor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.warnColor = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fontColor = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.logoUrl = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.iconUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Theme {
    return {
      primaryColor: isSet(object.primaryColor) ? globalThis.String(object.primaryColor) : "",
      backgroundColor: isSet(object.backgroundColor) ? globalThis.String(object.backgroundColor) : "",
      warnColor: isSet(object.warnColor) ? globalThis.String(object.warnColor) : "",
      fontColor: isSet(object.fontColor) ? globalThis.String(object.fontColor) : "",
      logoUrl: isSet(object.logoUrl) ? globalThis.String(object.logoUrl) : "",
      iconUrl: isSet(object.iconUrl) ? globalThis.String(object.iconUrl) : "",
    };
  },

  toJSON(message: Theme): unknown {
    const obj: any = {};
    if (message.primaryColor !== "") {
      obj.primaryColor = message.primaryColor;
    }
    if (message.backgroundColor !== "") {
      obj.backgroundColor = message.backgroundColor;
    }
    if (message.warnColor !== "") {
      obj.warnColor = message.warnColor;
    }
    if (message.fontColor !== "") {
      obj.fontColor = message.fontColor;
    }
    if (message.logoUrl !== "") {
      obj.logoUrl = message.logoUrl;
    }
    if (message.iconUrl !== "") {
      obj.iconUrl = message.iconUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<Theme>): Theme {
    return Theme.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Theme>): Theme {
    const message = createBaseTheme();
    message.primaryColor = object.primaryColor ?? "";
    message.backgroundColor = object.backgroundColor ?? "";
    message.warnColor = object.warnColor ?? "";
    message.fontColor = object.fontColor ?? "";
    message.logoUrl = object.logoUrl ?? "";
    message.iconUrl = object.iconUrl ?? "";
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
