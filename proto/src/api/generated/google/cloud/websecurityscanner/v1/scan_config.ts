// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/websecurityscanner/v1/scan_config.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.websecurityscanner.v1";

/** A ScanConfig resource contains the configurations to launch a scan. */
export interface ScanConfig {
  /**
   * The resource name of the ScanConfig. The name follows the format of
   * 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are
   * generated by the system.
   */
  name: string;
  /** Required. The user provided display name of the ScanConfig. */
  displayName: string;
  /**
   * The maximum QPS during scanning. A valid value ranges from 5 to 20
   * inclusively. If the field is unspecified or its value is set 0, server will
   * default to 15. Other values outside of [5, 20] range will be rejected with
   * INVALID_ARGUMENT error.
   */
  maxQps: number;
  /** Required. The starting URLs from which the scanner finds site pages. */
  startingUrls: string[];
  /**
   * The authentication configuration. If specified, service will use the
   * authentication configuration during scanning.
   */
  authentication:
    | ScanConfig_Authentication
    | undefined;
  /** The user agent used during scanning. */
  userAgent: ScanConfig_UserAgent;
  /**
   * The excluded URL patterns as described in
   * https://cloud.google.com/security-command-center/docs/how-to-use-web-security-scanner#excluding_urls
   */
  blacklistPatterns: string[];
  /** The schedule of the ScanConfig. */
  schedule:
    | ScanConfig_Schedule
    | undefined;
  /**
   * Controls export of scan configurations and results to Security
   * Command Center.
   */
  exportToSecurityCommandCenter: ScanConfig_ExportToSecurityCommandCenter;
  /** The risk level selected for the scan */
  riskLevel: ScanConfig_RiskLevel;
  /**
   * Whether the scan config is managed by Web Security Scanner, output
   * only.
   */
  managedScan: boolean;
  /**
   * Whether the scan configuration has enabled static IP address scan feature.
   * If enabled, the scanner will access applications from static IP addresses.
   */
  staticIpScan: boolean;
  /** Whether to keep scanning even if most requests return HTTP error codes. */
  ignoreHttpStatusErrors: boolean;
}

/** Type of user agents used for scanning. */
export enum ScanConfig_UserAgent {
  /** USER_AGENT_UNSPECIFIED - The user agent is unknown. Service will default to CHROME_LINUX. */
  USER_AGENT_UNSPECIFIED = 0,
  /** CHROME_LINUX - Chrome on Linux. This is the service default if unspecified. */
  CHROME_LINUX = 1,
  /** CHROME_ANDROID - Chrome on Android. */
  CHROME_ANDROID = 2,
  /** SAFARI_IPHONE - Safari on IPhone. */
  SAFARI_IPHONE = 3,
  UNRECOGNIZED = -1,
}

export function scanConfig_UserAgentFromJSON(object: any): ScanConfig_UserAgent {
  switch (object) {
    case 0:
    case "USER_AGENT_UNSPECIFIED":
      return ScanConfig_UserAgent.USER_AGENT_UNSPECIFIED;
    case 1:
    case "CHROME_LINUX":
      return ScanConfig_UserAgent.CHROME_LINUX;
    case 2:
    case "CHROME_ANDROID":
      return ScanConfig_UserAgent.CHROME_ANDROID;
    case 3:
    case "SAFARI_IPHONE":
      return ScanConfig_UserAgent.SAFARI_IPHONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScanConfig_UserAgent.UNRECOGNIZED;
  }
}

export function scanConfig_UserAgentToJSON(object: ScanConfig_UserAgent): string {
  switch (object) {
    case ScanConfig_UserAgent.USER_AGENT_UNSPECIFIED:
      return "USER_AGENT_UNSPECIFIED";
    case ScanConfig_UserAgent.CHROME_LINUX:
      return "CHROME_LINUX";
    case ScanConfig_UserAgent.CHROME_ANDROID:
      return "CHROME_ANDROID";
    case ScanConfig_UserAgent.SAFARI_IPHONE:
      return "SAFARI_IPHONE";
    case ScanConfig_UserAgent.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Scan risk levels supported by Web Security Scanner. LOW impact
 * scanning will minimize requests with the potential to modify data. To
 * achieve the maximum scan coverage, NORMAL risk level is recommended.
 */
export enum ScanConfig_RiskLevel {
  /** RISK_LEVEL_UNSPECIFIED - Use default, which is NORMAL. */
  RISK_LEVEL_UNSPECIFIED = 0,
  /** NORMAL - Normal scanning (Recommended) */
  NORMAL = 1,
  /** LOW - Lower impact scanning */
  LOW = 2,
  UNRECOGNIZED = -1,
}

export function scanConfig_RiskLevelFromJSON(object: any): ScanConfig_RiskLevel {
  switch (object) {
    case 0:
    case "RISK_LEVEL_UNSPECIFIED":
      return ScanConfig_RiskLevel.RISK_LEVEL_UNSPECIFIED;
    case 1:
    case "NORMAL":
      return ScanConfig_RiskLevel.NORMAL;
    case 2:
    case "LOW":
      return ScanConfig_RiskLevel.LOW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScanConfig_RiskLevel.UNRECOGNIZED;
  }
}

export function scanConfig_RiskLevelToJSON(object: ScanConfig_RiskLevel): string {
  switch (object) {
    case ScanConfig_RiskLevel.RISK_LEVEL_UNSPECIFIED:
      return "RISK_LEVEL_UNSPECIFIED";
    case ScanConfig_RiskLevel.NORMAL:
      return "NORMAL";
    case ScanConfig_RiskLevel.LOW:
      return "LOW";
    case ScanConfig_RiskLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Controls export of scan configurations and results to Security
 * Command Center.
 */
export enum ScanConfig_ExportToSecurityCommandCenter {
  /** EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED - Use default, which is ENABLED. */
  EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED = 0,
  /** ENABLED - Export results of this scan to Security Command Center. */
  ENABLED = 1,
  /** DISABLED - Do not export results of this scan to Security Command Center. */
  DISABLED = 2,
  UNRECOGNIZED = -1,
}

export function scanConfig_ExportToSecurityCommandCenterFromJSON(
  object: any,
): ScanConfig_ExportToSecurityCommandCenter {
  switch (object) {
    case 0:
    case "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED":
      return ScanConfig_ExportToSecurityCommandCenter.EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED;
    case 1:
    case "ENABLED":
      return ScanConfig_ExportToSecurityCommandCenter.ENABLED;
    case 2:
    case "DISABLED":
      return ScanConfig_ExportToSecurityCommandCenter.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScanConfig_ExportToSecurityCommandCenter.UNRECOGNIZED;
  }
}

export function scanConfig_ExportToSecurityCommandCenterToJSON(
  object: ScanConfig_ExportToSecurityCommandCenter,
): string {
  switch (object) {
    case ScanConfig_ExportToSecurityCommandCenter.EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED:
      return "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED";
    case ScanConfig_ExportToSecurityCommandCenter.ENABLED:
      return "ENABLED";
    case ScanConfig_ExportToSecurityCommandCenter.DISABLED:
      return "DISABLED";
    case ScanConfig_ExportToSecurityCommandCenter.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Scan authentication configuration. */
export interface ScanConfig_Authentication {
  /**
   * Authentication using a Google account.
   *
   * @deprecated
   */
  googleAccount?:
    | ScanConfig_Authentication_GoogleAccount
    | undefined;
  /** Authentication using a custom account. */
  customAccount?:
    | ScanConfig_Authentication_CustomAccount
    | undefined;
  /** Authentication using Identity-Aware-Proxy (IAP). */
  iapCredential?: ScanConfig_Authentication_IapCredential | undefined;
}

/**
 * Describes authentication configuration that uses a Google account.
 *
 * @deprecated
 */
export interface ScanConfig_Authentication_GoogleAccount {
  /** Required. The user name of the Google account. */
  username: string;
  /**
   * Required. Input only. The password of the Google account. The credential is stored encrypted
   * and not returned in any response nor included in audit logs.
   */
  password: string;
}

/** Describes authentication configuration that uses a custom account. */
export interface ScanConfig_Authentication_CustomAccount {
  /** Required. The user name of the custom account. */
  username: string;
  /**
   * Required. Input only. The password of the custom account. The credential is stored encrypted
   * and not returned in any response nor included in audit logs.
   */
  password: string;
  /** Required. The login form URL of the website. */
  loginUrl: string;
}

/** Describes authentication configuration for Identity-Aware-Proxy (IAP). */
export interface ScanConfig_Authentication_IapCredential {
  /**
   * Authentication configuration when Web-Security-Scanner service
   * account is added in Identity-Aware-Proxy (IAP) access policies.
   */
  iapTestServiceAccountInfo?: ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo | undefined;
}

/**
 * Describes authentication configuration when Web-Security-Scanner
 * service account is added in Identity-Aware-Proxy (IAP) access policies.
 */
export interface ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo {
  /**
   * Required. Describes OAuth2 client id of resources protected by
   * Identity-Aware-Proxy (IAP).
   */
  targetAudienceClientId: string;
}

/** Scan schedule configuration. */
export interface ScanConfig_Schedule {
  /**
   * A timestamp indicates when the next run will be scheduled. The value is
   * refreshed by the server after each run. If unspecified, it will default
   * to current server time, which means the scan will be scheduled to start
   * immediately.
   */
  scheduleTime:
    | Date
    | undefined;
  /** Required. The duration of time between executions in days. */
  intervalDurationDays: number;
}

function createBaseScanConfig(): ScanConfig {
  return {
    name: "",
    displayName: "",
    maxQps: 0,
    startingUrls: [],
    authentication: undefined,
    userAgent: 0,
    blacklistPatterns: [],
    schedule: undefined,
    exportToSecurityCommandCenter: 0,
    riskLevel: 0,
    managedScan: false,
    staticIpScan: false,
    ignoreHttpStatusErrors: false,
  };
}

export const ScanConfig: MessageFns<ScanConfig> = {
  encode(message: ScanConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.maxQps !== 0) {
      writer.uint32(24).int32(message.maxQps);
    }
    for (const v of message.startingUrls) {
      writer.uint32(34).string(v!);
    }
    if (message.authentication !== undefined) {
      ScanConfig_Authentication.encode(message.authentication, writer.uint32(42).fork()).join();
    }
    if (message.userAgent !== 0) {
      writer.uint32(48).int32(message.userAgent);
    }
    for (const v of message.blacklistPatterns) {
      writer.uint32(58).string(v!);
    }
    if (message.schedule !== undefined) {
      ScanConfig_Schedule.encode(message.schedule, writer.uint32(66).fork()).join();
    }
    if (message.exportToSecurityCommandCenter !== 0) {
      writer.uint32(80).int32(message.exportToSecurityCommandCenter);
    }
    if (message.riskLevel !== 0) {
      writer.uint32(96).int32(message.riskLevel);
    }
    if (message.managedScan !== false) {
      writer.uint32(104).bool(message.managedScan);
    }
    if (message.staticIpScan !== false) {
      writer.uint32(112).bool(message.staticIpScan);
    }
    if (message.ignoreHttpStatusErrors !== false) {
      writer.uint32(120).bool(message.ignoreHttpStatusErrors);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScanConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxQps = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startingUrls.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.authentication = ScanConfig_Authentication.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.userAgent = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.blacklistPatterns.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.schedule = ScanConfig_Schedule.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.exportToSecurityCommandCenter = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.riskLevel = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.managedScan = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.staticIpScan = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.ignoreHttpStatusErrors = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      maxQps: isSet(object.maxQps) ? globalThis.Number(object.maxQps) : 0,
      startingUrls: globalThis.Array.isArray(object?.startingUrls)
        ? object.startingUrls.map((e: any) => globalThis.String(e))
        : [],
      authentication: isSet(object.authentication)
        ? ScanConfig_Authentication.fromJSON(object.authentication)
        : undefined,
      userAgent: isSet(object.userAgent) ? scanConfig_UserAgentFromJSON(object.userAgent) : 0,
      blacklistPatterns: globalThis.Array.isArray(object?.blacklistPatterns)
        ? object.blacklistPatterns.map((e: any) => globalThis.String(e))
        : [],
      schedule: isSet(object.schedule) ? ScanConfig_Schedule.fromJSON(object.schedule) : undefined,
      exportToSecurityCommandCenter: isSet(object.exportToSecurityCommandCenter)
        ? scanConfig_ExportToSecurityCommandCenterFromJSON(object.exportToSecurityCommandCenter)
        : 0,
      riskLevel: isSet(object.riskLevel) ? scanConfig_RiskLevelFromJSON(object.riskLevel) : 0,
      managedScan: isSet(object.managedScan) ? globalThis.Boolean(object.managedScan) : false,
      staticIpScan: isSet(object.staticIpScan) ? globalThis.Boolean(object.staticIpScan) : false,
      ignoreHttpStatusErrors: isSet(object.ignoreHttpStatusErrors)
        ? globalThis.Boolean(object.ignoreHttpStatusErrors)
        : false,
    };
  },

  toJSON(message: ScanConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.maxQps !== 0) {
      obj.maxQps = Math.round(message.maxQps);
    }
    if (message.startingUrls?.length) {
      obj.startingUrls = message.startingUrls;
    }
    if (message.authentication !== undefined) {
      obj.authentication = ScanConfig_Authentication.toJSON(message.authentication);
    }
    if (message.userAgent !== 0) {
      obj.userAgent = scanConfig_UserAgentToJSON(message.userAgent);
    }
    if (message.blacklistPatterns?.length) {
      obj.blacklistPatterns = message.blacklistPatterns;
    }
    if (message.schedule !== undefined) {
      obj.schedule = ScanConfig_Schedule.toJSON(message.schedule);
    }
    if (message.exportToSecurityCommandCenter !== 0) {
      obj.exportToSecurityCommandCenter = scanConfig_ExportToSecurityCommandCenterToJSON(
        message.exportToSecurityCommandCenter,
      );
    }
    if (message.riskLevel !== 0) {
      obj.riskLevel = scanConfig_RiskLevelToJSON(message.riskLevel);
    }
    if (message.managedScan !== false) {
      obj.managedScan = message.managedScan;
    }
    if (message.staticIpScan !== false) {
      obj.staticIpScan = message.staticIpScan;
    }
    if (message.ignoreHttpStatusErrors !== false) {
      obj.ignoreHttpStatusErrors = message.ignoreHttpStatusErrors;
    }
    return obj;
  },

  create(base?: DeepPartial<ScanConfig>): ScanConfig {
    return ScanConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ScanConfig>): ScanConfig {
    const message = createBaseScanConfig();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.maxQps = object.maxQps ?? 0;
    message.startingUrls = object.startingUrls?.map((e) => e) || [];
    message.authentication = (object.authentication !== undefined && object.authentication !== null)
      ? ScanConfig_Authentication.fromPartial(object.authentication)
      : undefined;
    message.userAgent = object.userAgent ?? 0;
    message.blacklistPatterns = object.blacklistPatterns?.map((e) => e) || [];
    message.schedule = (object.schedule !== undefined && object.schedule !== null)
      ? ScanConfig_Schedule.fromPartial(object.schedule)
      : undefined;
    message.exportToSecurityCommandCenter = object.exportToSecurityCommandCenter ?? 0;
    message.riskLevel = object.riskLevel ?? 0;
    message.managedScan = object.managedScan ?? false;
    message.staticIpScan = object.staticIpScan ?? false;
    message.ignoreHttpStatusErrors = object.ignoreHttpStatusErrors ?? false;
    return message;
  },
};

function createBaseScanConfig_Authentication(): ScanConfig_Authentication {
  return { googleAccount: undefined, customAccount: undefined, iapCredential: undefined };
}

export const ScanConfig_Authentication: MessageFns<ScanConfig_Authentication> = {
  encode(message: ScanConfig_Authentication, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.googleAccount !== undefined) {
      ScanConfig_Authentication_GoogleAccount.encode(message.googleAccount, writer.uint32(10).fork()).join();
    }
    if (message.customAccount !== undefined) {
      ScanConfig_Authentication_CustomAccount.encode(message.customAccount, writer.uint32(18).fork()).join();
    }
    if (message.iapCredential !== undefined) {
      ScanConfig_Authentication_IapCredential.encode(message.iapCredential, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScanConfig_Authentication {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanConfig_Authentication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.googleAccount = ScanConfig_Authentication_GoogleAccount.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.customAccount = ScanConfig_Authentication_CustomAccount.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.iapCredential = ScanConfig_Authentication_IapCredential.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanConfig_Authentication {
    return {
      googleAccount: isSet(object.googleAccount)
        ? ScanConfig_Authentication_GoogleAccount.fromJSON(object.googleAccount)
        : undefined,
      customAccount: isSet(object.customAccount)
        ? ScanConfig_Authentication_CustomAccount.fromJSON(object.customAccount)
        : undefined,
      iapCredential: isSet(object.iapCredential)
        ? ScanConfig_Authentication_IapCredential.fromJSON(object.iapCredential)
        : undefined,
    };
  },

  toJSON(message: ScanConfig_Authentication): unknown {
    const obj: any = {};
    if (message.googleAccount !== undefined) {
      obj.googleAccount = ScanConfig_Authentication_GoogleAccount.toJSON(message.googleAccount);
    }
    if (message.customAccount !== undefined) {
      obj.customAccount = ScanConfig_Authentication_CustomAccount.toJSON(message.customAccount);
    }
    if (message.iapCredential !== undefined) {
      obj.iapCredential = ScanConfig_Authentication_IapCredential.toJSON(message.iapCredential);
    }
    return obj;
  },

  create(base?: DeepPartial<ScanConfig_Authentication>): ScanConfig_Authentication {
    return ScanConfig_Authentication.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ScanConfig_Authentication>): ScanConfig_Authentication {
    const message = createBaseScanConfig_Authentication();
    message.googleAccount = (object.googleAccount !== undefined && object.googleAccount !== null)
      ? ScanConfig_Authentication_GoogleAccount.fromPartial(object.googleAccount)
      : undefined;
    message.customAccount = (object.customAccount !== undefined && object.customAccount !== null)
      ? ScanConfig_Authentication_CustomAccount.fromPartial(object.customAccount)
      : undefined;
    message.iapCredential = (object.iapCredential !== undefined && object.iapCredential !== null)
      ? ScanConfig_Authentication_IapCredential.fromPartial(object.iapCredential)
      : undefined;
    return message;
  },
};

function createBaseScanConfig_Authentication_GoogleAccount(): ScanConfig_Authentication_GoogleAccount {
  return { username: "", password: "" };
}

export const ScanConfig_Authentication_GoogleAccount: MessageFns<ScanConfig_Authentication_GoogleAccount> = {
  encode(message: ScanConfig_Authentication_GoogleAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScanConfig_Authentication_GoogleAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanConfig_Authentication_GoogleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanConfig_Authentication_GoogleAccount {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: ScanConfig_Authentication_GoogleAccount): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create(base?: DeepPartial<ScanConfig_Authentication_GoogleAccount>): ScanConfig_Authentication_GoogleAccount {
    return ScanConfig_Authentication_GoogleAccount.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ScanConfig_Authentication_GoogleAccount>): ScanConfig_Authentication_GoogleAccount {
    const message = createBaseScanConfig_Authentication_GoogleAccount();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseScanConfig_Authentication_CustomAccount(): ScanConfig_Authentication_CustomAccount {
  return { username: "", password: "", loginUrl: "" };
}

export const ScanConfig_Authentication_CustomAccount: MessageFns<ScanConfig_Authentication_CustomAccount> = {
  encode(message: ScanConfig_Authentication_CustomAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.loginUrl !== "") {
      writer.uint32(26).string(message.loginUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScanConfig_Authentication_CustomAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanConfig_Authentication_CustomAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.loginUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanConfig_Authentication_CustomAccount {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      loginUrl: isSet(object.loginUrl) ? globalThis.String(object.loginUrl) : "",
    };
  },

  toJSON(message: ScanConfig_Authentication_CustomAccount): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.loginUrl !== "") {
      obj.loginUrl = message.loginUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<ScanConfig_Authentication_CustomAccount>): ScanConfig_Authentication_CustomAccount {
    return ScanConfig_Authentication_CustomAccount.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ScanConfig_Authentication_CustomAccount>): ScanConfig_Authentication_CustomAccount {
    const message = createBaseScanConfig_Authentication_CustomAccount();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.loginUrl = object.loginUrl ?? "";
    return message;
  },
};

function createBaseScanConfig_Authentication_IapCredential(): ScanConfig_Authentication_IapCredential {
  return { iapTestServiceAccountInfo: undefined };
}

export const ScanConfig_Authentication_IapCredential: MessageFns<ScanConfig_Authentication_IapCredential> = {
  encode(message: ScanConfig_Authentication_IapCredential, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.iapTestServiceAccountInfo !== undefined) {
      ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo.encode(
        message.iapTestServiceAccountInfo,
        writer.uint32(10).fork(),
      ).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScanConfig_Authentication_IapCredential {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanConfig_Authentication_IapCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.iapTestServiceAccountInfo = ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanConfig_Authentication_IapCredential {
    return {
      iapTestServiceAccountInfo: isSet(object.iapTestServiceAccountInfo)
        ? ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo.fromJSON(object.iapTestServiceAccountInfo)
        : undefined,
    };
  },

  toJSON(message: ScanConfig_Authentication_IapCredential): unknown {
    const obj: any = {};
    if (message.iapTestServiceAccountInfo !== undefined) {
      obj.iapTestServiceAccountInfo = ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo.toJSON(
        message.iapTestServiceAccountInfo,
      );
    }
    return obj;
  },

  create(base?: DeepPartial<ScanConfig_Authentication_IapCredential>): ScanConfig_Authentication_IapCredential {
    return ScanConfig_Authentication_IapCredential.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ScanConfig_Authentication_IapCredential>): ScanConfig_Authentication_IapCredential {
    const message = createBaseScanConfig_Authentication_IapCredential();
    message.iapTestServiceAccountInfo =
      (object.iapTestServiceAccountInfo !== undefined && object.iapTestServiceAccountInfo !== null)
        ? ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo.fromPartial(
          object.iapTestServiceAccountInfo,
        )
        : undefined;
    return message;
  },
};

function createBaseScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo(): ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo {
  return { targetAudienceClientId: "" };
}

export const ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo: MessageFns<
  ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo
> = {
  encode(
    message: ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.targetAudienceClientId !== "") {
      writer.uint32(10).string(message.targetAudienceClientId);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.targetAudienceClientId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo {
    return {
      targetAudienceClientId: isSet(object.targetAudienceClientId)
        ? globalThis.String(object.targetAudienceClientId)
        : "",
    };
  },

  toJSON(message: ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo): unknown {
    const obj: any = {};
    if (message.targetAudienceClientId !== "") {
      obj.targetAudienceClientId = message.targetAudienceClientId;
    }
    return obj;
  },

  create(
    base?: DeepPartial<ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo>,
  ): ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo {
    return ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo>,
  ): ScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo {
    const message = createBaseScanConfig_Authentication_IapCredential_IapTestServiceAccountInfo();
    message.targetAudienceClientId = object.targetAudienceClientId ?? "";
    return message;
  },
};

function createBaseScanConfig_Schedule(): ScanConfig_Schedule {
  return { scheduleTime: undefined, intervalDurationDays: 0 };
}

export const ScanConfig_Schedule: MessageFns<ScanConfig_Schedule> = {
  encode(message: ScanConfig_Schedule, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.scheduleTime !== undefined) {
      Timestamp.encode(toTimestamp(message.scheduleTime), writer.uint32(10).fork()).join();
    }
    if (message.intervalDurationDays !== 0) {
      writer.uint32(16).int32(message.intervalDurationDays);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScanConfig_Schedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanConfig_Schedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scheduleTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.intervalDurationDays = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScanConfig_Schedule {
    return {
      scheduleTime: isSet(object.scheduleTime) ? fromJsonTimestamp(object.scheduleTime) : undefined,
      intervalDurationDays: isSet(object.intervalDurationDays) ? globalThis.Number(object.intervalDurationDays) : 0,
    };
  },

  toJSON(message: ScanConfig_Schedule): unknown {
    const obj: any = {};
    if (message.scheduleTime !== undefined) {
      obj.scheduleTime = message.scheduleTime.toISOString();
    }
    if (message.intervalDurationDays !== 0) {
      obj.intervalDurationDays = Math.round(message.intervalDurationDays);
    }
    return obj;
  },

  create(base?: DeepPartial<ScanConfig_Schedule>): ScanConfig_Schedule {
    return ScanConfig_Schedule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ScanConfig_Schedule>): ScanConfig_Schedule {
    const message = createBaseScanConfig_Schedule();
    message.scheduleTime = object.scheduleTime ?? undefined;
    message.intervalDurationDays = object.intervalDurationDays ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

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