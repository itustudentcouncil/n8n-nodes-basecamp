// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/unity/clientinfo.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.maps.unity";

/** Client information. */
export interface ClientInfo {
  /**
   * Application ID, such as the package name on Android and the bundle
   * identifier on iOS platforms.
   */
  applicationId: string;
  /**
   * Application version number, such as "1.2.3". The exact format is
   * application-dependent.
   */
  applicationVersion: string;
  /** Platform where the application is running. */
  platform: ClientInfo_Platform;
  /**
   * Operating system name and version as reported by the OS. For example,
   * "Mac OS X 10.10.4". The exact format is platform-dependent.
   */
  operatingSystem: string;
  /**
   * API client name and version. For example, the SDK calling the API. The
   * exact format is up to the client.
   */
  apiClient: string;
  /**
   * Device model as reported by the device. The exact format is
   * platform-dependent.
   */
  deviceModel: string;
  /**
   * Language code (in BCP-47 format) indicating the UI language of the client.
   * Examples are "en", "en-US" or "ja-Latn". For more information, see
   * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
   */
  languageCode: string;
  /**
   * Build number/version of the operating system. e.g., the contents of
   * android.os.Build.ID in Android, or the contents of sysctl "kern.osversion"
   * in iOS.
   */
  operatingSystemBuild: string;
}

/** Platform enum. */
export enum ClientInfo_Platform {
  /** PLATFORM_UNSPECIFIED - Unspecified or unknown OS. */
  PLATFORM_UNSPECIFIED = 0,
  /** EDITOR - Development environment. */
  EDITOR = 1,
  /** MAC_OS - macOS. */
  MAC_OS = 2,
  /** WINDOWS - Windows. */
  WINDOWS = 3,
  /** LINUX - Linux */
  LINUX = 4,
  /** ANDROID - Android */
  ANDROID = 5,
  /** IOS - iOS */
  IOS = 6,
  /** WEB_GL - WebGL. */
  WEB_GL = 7,
  UNRECOGNIZED = -1,
}

export function clientInfo_PlatformFromJSON(object: any): ClientInfo_Platform {
  switch (object) {
    case 0:
    case "PLATFORM_UNSPECIFIED":
      return ClientInfo_Platform.PLATFORM_UNSPECIFIED;
    case 1:
    case "EDITOR":
      return ClientInfo_Platform.EDITOR;
    case 2:
    case "MAC_OS":
      return ClientInfo_Platform.MAC_OS;
    case 3:
    case "WINDOWS":
      return ClientInfo_Platform.WINDOWS;
    case 4:
    case "LINUX":
      return ClientInfo_Platform.LINUX;
    case 5:
    case "ANDROID":
      return ClientInfo_Platform.ANDROID;
    case 6:
    case "IOS":
      return ClientInfo_Platform.IOS;
    case 7:
    case "WEB_GL":
      return ClientInfo_Platform.WEB_GL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClientInfo_Platform.UNRECOGNIZED;
  }
}

export function clientInfo_PlatformToJSON(object: ClientInfo_Platform): string {
  switch (object) {
    case ClientInfo_Platform.PLATFORM_UNSPECIFIED:
      return "PLATFORM_UNSPECIFIED";
    case ClientInfo_Platform.EDITOR:
      return "EDITOR";
    case ClientInfo_Platform.MAC_OS:
      return "MAC_OS";
    case ClientInfo_Platform.WINDOWS:
      return "WINDOWS";
    case ClientInfo_Platform.LINUX:
      return "LINUX";
    case ClientInfo_Platform.ANDROID:
      return "ANDROID";
    case ClientInfo_Platform.IOS:
      return "IOS";
    case ClientInfo_Platform.WEB_GL:
      return "WEB_GL";
    case ClientInfo_Platform.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseClientInfo(): ClientInfo {
  return {
    applicationId: "",
    applicationVersion: "",
    platform: 0,
    operatingSystem: "",
    apiClient: "",
    deviceModel: "",
    languageCode: "",
    operatingSystemBuild: "",
  };
}

export const ClientInfo: MessageFns<ClientInfo> = {
  encode(message: ClientInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.applicationId !== "") {
      writer.uint32(10).string(message.applicationId);
    }
    if (message.applicationVersion !== "") {
      writer.uint32(18).string(message.applicationVersion);
    }
    if (message.platform !== 0) {
      writer.uint32(24).int32(message.platform);
    }
    if (message.operatingSystem !== "") {
      writer.uint32(34).string(message.operatingSystem);
    }
    if (message.apiClient !== "") {
      writer.uint32(42).string(message.apiClient);
    }
    if (message.deviceModel !== "") {
      writer.uint32(50).string(message.deviceModel);
    }
    if (message.languageCode !== "") {
      writer.uint32(58).string(message.languageCode);
    }
    if (message.operatingSystemBuild !== "") {
      writer.uint32(66).string(message.operatingSystemBuild);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ClientInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.applicationId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.applicationVersion = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.platform = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.operatingSystem = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.apiClient = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.deviceModel = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.languageCode = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.operatingSystemBuild = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientInfo {
    return {
      applicationId: isSet(object.applicationId) ? globalThis.String(object.applicationId) : "",
      applicationVersion: isSet(object.applicationVersion) ? globalThis.String(object.applicationVersion) : "",
      platform: isSet(object.platform) ? clientInfo_PlatformFromJSON(object.platform) : 0,
      operatingSystem: isSet(object.operatingSystem) ? globalThis.String(object.operatingSystem) : "",
      apiClient: isSet(object.apiClient) ? globalThis.String(object.apiClient) : "",
      deviceModel: isSet(object.deviceModel) ? globalThis.String(object.deviceModel) : "",
      languageCode: isSet(object.languageCode) ? globalThis.String(object.languageCode) : "",
      operatingSystemBuild: isSet(object.operatingSystemBuild) ? globalThis.String(object.operatingSystemBuild) : "",
    };
  },

  toJSON(message: ClientInfo): unknown {
    const obj: any = {};
    if (message.applicationId !== "") {
      obj.applicationId = message.applicationId;
    }
    if (message.applicationVersion !== "") {
      obj.applicationVersion = message.applicationVersion;
    }
    if (message.platform !== 0) {
      obj.platform = clientInfo_PlatformToJSON(message.platform);
    }
    if (message.operatingSystem !== "") {
      obj.operatingSystem = message.operatingSystem;
    }
    if (message.apiClient !== "") {
      obj.apiClient = message.apiClient;
    }
    if (message.deviceModel !== "") {
      obj.deviceModel = message.deviceModel;
    }
    if (message.languageCode !== "") {
      obj.languageCode = message.languageCode;
    }
    if (message.operatingSystemBuild !== "") {
      obj.operatingSystemBuild = message.operatingSystemBuild;
    }
    return obj;
  },

  create(base?: DeepPartial<ClientInfo>): ClientInfo {
    return ClientInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClientInfo>): ClientInfo {
    const message = createBaseClientInfo();
    message.applicationId = object.applicationId ?? "";
    message.applicationVersion = object.applicationVersion ?? "";
    message.platform = object.platform ?? 0;
    message.operatingSystem = object.operatingSystem ?? "";
    message.apiClient = object.apiClient ?? "";
    message.deviceModel = object.deviceModel ?? "";
    message.languageCode = object.languageCode ?? "";
    message.operatingSystemBuild = object.operatingSystemBuild ?? "";
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