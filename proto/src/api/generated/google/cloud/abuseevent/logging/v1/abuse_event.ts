// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/abuseevent/logging/v1/abuse_event.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.abuseevent.logging.v1";

/** Logged event discussing an abuse finding on the monitored resource. */
export interface AbuseEvent {
  /** REQUIRED Correlates to the abuse finding causing the notification. */
  detectionType: AbuseEvent_DetectionType;
  /** REQUIRED Explains the meaning of the detection_type. */
  reason: string;
  /** REQUIRED Correlates to the action taken on the monitored resource. */
  action: AbuseEvent_ActionType;
  /**
   * Information about a cryptocurrency mining event observed on the monitored
   * resource.
   */
  cryptoMiningEvent?:
    | CryptoMiningEvent
    | undefined;
  /**
   * Information about the leaked client credentials observed on the monitored
   * resource.
   */
  leakedCredentialEvent?:
    | LeakedCredentialEvent
    | undefined;
  /**
   * Information about the phishing/malware URI(s) associated with the
   * monitored resource.
   */
  harmfulContentEvent?:
    | HarmfulContentEvent
    | undefined;
  /** Information about the reinstatement issued on the monitored resource. */
  reinstatementEvent?:
    | ReinstatementEvent
    | undefined;
  /**
   * Information about the escalation of enforcement action on the monitored
   * resource.
   */
  decisionEscalationEvent?:
    | DecisionEscalationEvent
    | undefined;
  /** Contains the umbrella link for remediation after an abuse notification. */
  remediationLink: string;
}

/** Indicates the type of abuse detected on the monitored resource. */
export enum AbuseEvent_DetectionType {
  /** DETECTION_TYPE_UNSPECIFIED - Default/unspecified abuse detection type. */
  DETECTION_TYPE_UNSPECIFIED = 0,
  /** CRYPTO_MINING - The monitored resource is used to mine cryptocurrencies. */
  CRYPTO_MINING = 1,
  /**
   * LEAKED_CREDENTIALS - The monitored resource's credentials have accidentally been leaked on the
   * internet.
   */
  LEAKED_CREDENTIALS = 2,
  /** PHISHING - The monitored resource is used for phishing attacks. */
  PHISHING = 3,
  /**
   * MALWARE - The monitored resource is associated with content that is infected or
   * infects users with malicious software.
   */
  MALWARE = 4,
  /**
   * NO_ABUSE - No abuse is detected on the monitored resource, but its abuse state may
   * have been updated.
   */
  NO_ABUSE = 5,
  UNRECOGNIZED = -1,
}

export function abuseEvent_DetectionTypeFromJSON(object: any): AbuseEvent_DetectionType {
  switch (object) {
    case 0:
    case "DETECTION_TYPE_UNSPECIFIED":
      return AbuseEvent_DetectionType.DETECTION_TYPE_UNSPECIFIED;
    case 1:
    case "CRYPTO_MINING":
      return AbuseEvent_DetectionType.CRYPTO_MINING;
    case 2:
    case "LEAKED_CREDENTIALS":
      return AbuseEvent_DetectionType.LEAKED_CREDENTIALS;
    case 3:
    case "PHISHING":
      return AbuseEvent_DetectionType.PHISHING;
    case 4:
    case "MALWARE":
      return AbuseEvent_DetectionType.MALWARE;
    case 5:
    case "NO_ABUSE":
      return AbuseEvent_DetectionType.NO_ABUSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AbuseEvent_DetectionType.UNRECOGNIZED;
  }
}

export function abuseEvent_DetectionTypeToJSON(object: AbuseEvent_DetectionType): string {
  switch (object) {
    case AbuseEvent_DetectionType.DETECTION_TYPE_UNSPECIFIED:
      return "DETECTION_TYPE_UNSPECIFIED";
    case AbuseEvent_DetectionType.CRYPTO_MINING:
      return "CRYPTO_MINING";
    case AbuseEvent_DetectionType.LEAKED_CREDENTIALS:
      return "LEAKED_CREDENTIALS";
    case AbuseEvent_DetectionType.PHISHING:
      return "PHISHING";
    case AbuseEvent_DetectionType.MALWARE:
      return "MALWARE";
    case AbuseEvent_DetectionType.NO_ABUSE:
      return "NO_ABUSE";
    case AbuseEvent_DetectionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Indicates any action taken on the monitored resource due to abuse
 * detection.
 */
export enum AbuseEvent_ActionType {
  /** ACTION_TYPE_UNSPECIFIED - The monitored resource state is unspecified. */
  ACTION_TYPE_UNSPECIFIED = 0,
  /** NOTIFY - The owner of the monitored resource needs to be notified about a finding. */
  NOTIFY = 1,
  /** PROJECT_SUSPENSION - The associated cloud project has been suspended. */
  PROJECT_SUSPENSION = 2,
  /** REINSTATE - The monitored resource has been reinstated. */
  REINSTATE = 3,
  /**
   * WARN - The owner of the monitored resource needs to be warned about abusive
   * behavior. This notification could lead to future enforcements if remedial
   * actions are not taken. This action should not be confused with NOTIFY.
   */
  WARN = 4,
  /** RESOURCE_SUSPENSION - The resource (eg: VM) has been suspended. */
  RESOURCE_SUSPENSION = 5,
  UNRECOGNIZED = -1,
}

export function abuseEvent_ActionTypeFromJSON(object: any): AbuseEvent_ActionType {
  switch (object) {
    case 0:
    case "ACTION_TYPE_UNSPECIFIED":
      return AbuseEvent_ActionType.ACTION_TYPE_UNSPECIFIED;
    case 1:
    case "NOTIFY":
      return AbuseEvent_ActionType.NOTIFY;
    case 2:
    case "PROJECT_SUSPENSION":
      return AbuseEvent_ActionType.PROJECT_SUSPENSION;
    case 3:
    case "REINSTATE":
      return AbuseEvent_ActionType.REINSTATE;
    case 4:
    case "WARN":
      return AbuseEvent_ActionType.WARN;
    case 5:
    case "RESOURCE_SUSPENSION":
      return AbuseEvent_ActionType.RESOURCE_SUSPENSION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AbuseEvent_ActionType.UNRECOGNIZED;
  }
}

export function abuseEvent_ActionTypeToJSON(object: AbuseEvent_ActionType): string {
  switch (object) {
    case AbuseEvent_ActionType.ACTION_TYPE_UNSPECIFIED:
      return "ACTION_TYPE_UNSPECIFIED";
    case AbuseEvent_ActionType.NOTIFY:
      return "NOTIFY";
    case AbuseEvent_ActionType.PROJECT_SUSPENSION:
      return "PROJECT_SUSPENSION";
    case AbuseEvent_ActionType.REINSTATE:
      return "REINSTATE";
    case AbuseEvent_ActionType.WARN:
      return "WARN";
    case AbuseEvent_ActionType.RESOURCE_SUSPENSION:
      return "RESOURCE_SUSPENSION";
    case AbuseEvent_ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Information about a cryptocurrency mining event observed on the monitored
 * resource.
 */
export interface CryptoMiningEvent {
  /**
   * VM and zone in which cryptocurrency mining occurred.
   * Format: projects/{project}/zones/{zone}/instances/{instance}
   */
  vmResource: string[];
  /** Detected start time of the cryptocurrency mining. */
  detectedMiningStartTime:
    | Date
    | undefined;
  /** Detected end time of the cryptocurrency mining. */
  detectedMiningEndTime:
    | Date
    | undefined;
  /**
   * The IP address(es) of the VM associated with the cryptocurrency mining.
   * This field may be empty if this information is not available.
   */
  vmIp: string[];
}

/**
 * Information about the leaked client credentials observed on the monitored
 * resource.
 */
export interface LeakedCredentialEvent {
  /** Information about leaked service accounts. */
  serviceAccountCredential?:
    | ServiceAccountCredential
    | undefined;
  /** Information about leaked API keys. */
  apiKeyCredential?:
    | ApiKeyCredential
    | undefined;
  /** URI where the client credentials were found. */
  detectedUri: string;
}

/** Information about leaked service accounts. */
export interface ServiceAccountCredential {
  /** Service account whose credentials were leaked. */
  serviceAccount: string;
  /** Private Key ID for any leaked keys. */
  keyId: string;
}

/** Information about leaked API keys. */
export interface ApiKeyCredential {
  /** API key that was leaked. */
  apiKey: string;
}

/**
 * Information about the phishing/malware URIs associated with the monitored
 * resource.
 */
export interface HarmfulContentEvent {
  /** URIs associated with the phishing/malware finding. */
  uri: string[];
}

/** Information about the reinstatement issued on the monitored resource. */
export interface ReinstatementEvent {
}

/**
 * Information about the escalation of enforcement action on the monitored
 * resource. Eg: Used for repeat offenders.
 */
export interface DecisionEscalationEvent {
}

function createBaseAbuseEvent(): AbuseEvent {
  return {
    detectionType: 0,
    reason: "",
    action: 0,
    cryptoMiningEvent: undefined,
    leakedCredentialEvent: undefined,
    harmfulContentEvent: undefined,
    reinstatementEvent: undefined,
    decisionEscalationEvent: undefined,
    remediationLink: "",
  };
}

export const AbuseEvent: MessageFns<AbuseEvent> = {
  encode(message: AbuseEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.detectionType !== 0) {
      writer.uint32(8).int32(message.detectionType);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    if (message.cryptoMiningEvent !== undefined) {
      CryptoMiningEvent.encode(message.cryptoMiningEvent, writer.uint32(34).fork()).join();
    }
    if (message.leakedCredentialEvent !== undefined) {
      LeakedCredentialEvent.encode(message.leakedCredentialEvent, writer.uint32(42).fork()).join();
    }
    if (message.harmfulContentEvent !== undefined) {
      HarmfulContentEvent.encode(message.harmfulContentEvent, writer.uint32(50).fork()).join();
    }
    if (message.reinstatementEvent !== undefined) {
      ReinstatementEvent.encode(message.reinstatementEvent, writer.uint32(66).fork()).join();
    }
    if (message.decisionEscalationEvent !== undefined) {
      DecisionEscalationEvent.encode(message.decisionEscalationEvent, writer.uint32(74).fork()).join();
    }
    if (message.remediationLink !== "") {
      writer.uint32(58).string(message.remediationLink);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AbuseEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbuseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.detectionType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cryptoMiningEvent = CryptoMiningEvent.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.leakedCredentialEvent = LeakedCredentialEvent.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.harmfulContentEvent = HarmfulContentEvent.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.reinstatementEvent = ReinstatementEvent.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.decisionEscalationEvent = DecisionEscalationEvent.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.remediationLink = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AbuseEvent {
    return {
      detectionType: isSet(object.detectionType) ? abuseEvent_DetectionTypeFromJSON(object.detectionType) : 0,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
      action: isSet(object.action) ? abuseEvent_ActionTypeFromJSON(object.action) : 0,
      cryptoMiningEvent: isSet(object.cryptoMiningEvent)
        ? CryptoMiningEvent.fromJSON(object.cryptoMiningEvent)
        : undefined,
      leakedCredentialEvent: isSet(object.leakedCredentialEvent)
        ? LeakedCredentialEvent.fromJSON(object.leakedCredentialEvent)
        : undefined,
      harmfulContentEvent: isSet(object.harmfulContentEvent)
        ? HarmfulContentEvent.fromJSON(object.harmfulContentEvent)
        : undefined,
      reinstatementEvent: isSet(object.reinstatementEvent)
        ? ReinstatementEvent.fromJSON(object.reinstatementEvent)
        : undefined,
      decisionEscalationEvent: isSet(object.decisionEscalationEvent)
        ? DecisionEscalationEvent.fromJSON(object.decisionEscalationEvent)
        : undefined,
      remediationLink: isSet(object.remediationLink) ? globalThis.String(object.remediationLink) : "",
    };
  },

  toJSON(message: AbuseEvent): unknown {
    const obj: any = {};
    if (message.detectionType !== 0) {
      obj.detectionType = abuseEvent_DetectionTypeToJSON(message.detectionType);
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.action !== 0) {
      obj.action = abuseEvent_ActionTypeToJSON(message.action);
    }
    if (message.cryptoMiningEvent !== undefined) {
      obj.cryptoMiningEvent = CryptoMiningEvent.toJSON(message.cryptoMiningEvent);
    }
    if (message.leakedCredentialEvent !== undefined) {
      obj.leakedCredentialEvent = LeakedCredentialEvent.toJSON(message.leakedCredentialEvent);
    }
    if (message.harmfulContentEvent !== undefined) {
      obj.harmfulContentEvent = HarmfulContentEvent.toJSON(message.harmfulContentEvent);
    }
    if (message.reinstatementEvent !== undefined) {
      obj.reinstatementEvent = ReinstatementEvent.toJSON(message.reinstatementEvent);
    }
    if (message.decisionEscalationEvent !== undefined) {
      obj.decisionEscalationEvent = DecisionEscalationEvent.toJSON(message.decisionEscalationEvent);
    }
    if (message.remediationLink !== "") {
      obj.remediationLink = message.remediationLink;
    }
    return obj;
  },

  create(base?: DeepPartial<AbuseEvent>): AbuseEvent {
    return AbuseEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AbuseEvent>): AbuseEvent {
    const message = createBaseAbuseEvent();
    message.detectionType = object.detectionType ?? 0;
    message.reason = object.reason ?? "";
    message.action = object.action ?? 0;
    message.cryptoMiningEvent = (object.cryptoMiningEvent !== undefined && object.cryptoMiningEvent !== null)
      ? CryptoMiningEvent.fromPartial(object.cryptoMiningEvent)
      : undefined;
    message.leakedCredentialEvent =
      (object.leakedCredentialEvent !== undefined && object.leakedCredentialEvent !== null)
        ? LeakedCredentialEvent.fromPartial(object.leakedCredentialEvent)
        : undefined;
    message.harmfulContentEvent = (object.harmfulContentEvent !== undefined && object.harmfulContentEvent !== null)
      ? HarmfulContentEvent.fromPartial(object.harmfulContentEvent)
      : undefined;
    message.reinstatementEvent = (object.reinstatementEvent !== undefined && object.reinstatementEvent !== null)
      ? ReinstatementEvent.fromPartial(object.reinstatementEvent)
      : undefined;
    message.decisionEscalationEvent =
      (object.decisionEscalationEvent !== undefined && object.decisionEscalationEvent !== null)
        ? DecisionEscalationEvent.fromPartial(object.decisionEscalationEvent)
        : undefined;
    message.remediationLink = object.remediationLink ?? "";
    return message;
  },
};

function createBaseCryptoMiningEvent(): CryptoMiningEvent {
  return { vmResource: [], detectedMiningStartTime: undefined, detectedMiningEndTime: undefined, vmIp: [] };
}

export const CryptoMiningEvent: MessageFns<CryptoMiningEvent> = {
  encode(message: CryptoMiningEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.vmResource) {
      writer.uint32(10).string(v!);
    }
    if (message.detectedMiningStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.detectedMiningStartTime), writer.uint32(18).fork()).join();
    }
    if (message.detectedMiningEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.detectedMiningEndTime), writer.uint32(26).fork()).join();
    }
    for (const v of message.vmIp) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CryptoMiningEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCryptoMiningEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vmResource.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.detectedMiningStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.detectedMiningEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vmIp.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CryptoMiningEvent {
    return {
      vmResource: globalThis.Array.isArray(object?.vmResource)
        ? object.vmResource.map((e: any) => globalThis.String(e))
        : [],
      detectedMiningStartTime: isSet(object.detectedMiningStartTime)
        ? fromJsonTimestamp(object.detectedMiningStartTime)
        : undefined,
      detectedMiningEndTime: isSet(object.detectedMiningEndTime)
        ? fromJsonTimestamp(object.detectedMiningEndTime)
        : undefined,
      vmIp: globalThis.Array.isArray(object?.vmIp) ? object.vmIp.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: CryptoMiningEvent): unknown {
    const obj: any = {};
    if (message.vmResource?.length) {
      obj.vmResource = message.vmResource;
    }
    if (message.detectedMiningStartTime !== undefined) {
      obj.detectedMiningStartTime = message.detectedMiningStartTime.toISOString();
    }
    if (message.detectedMiningEndTime !== undefined) {
      obj.detectedMiningEndTime = message.detectedMiningEndTime.toISOString();
    }
    if (message.vmIp?.length) {
      obj.vmIp = message.vmIp;
    }
    return obj;
  },

  create(base?: DeepPartial<CryptoMiningEvent>): CryptoMiningEvent {
    return CryptoMiningEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CryptoMiningEvent>): CryptoMiningEvent {
    const message = createBaseCryptoMiningEvent();
    message.vmResource = object.vmResource?.map((e) => e) || [];
    message.detectedMiningStartTime = object.detectedMiningStartTime ?? undefined;
    message.detectedMiningEndTime = object.detectedMiningEndTime ?? undefined;
    message.vmIp = object.vmIp?.map((e) => e) || [];
    return message;
  },
};

function createBaseLeakedCredentialEvent(): LeakedCredentialEvent {
  return { serviceAccountCredential: undefined, apiKeyCredential: undefined, detectedUri: "" };
}

export const LeakedCredentialEvent: MessageFns<LeakedCredentialEvent> = {
  encode(message: LeakedCredentialEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serviceAccountCredential !== undefined) {
      ServiceAccountCredential.encode(message.serviceAccountCredential, writer.uint32(10).fork()).join();
    }
    if (message.apiKeyCredential !== undefined) {
      ApiKeyCredential.encode(message.apiKeyCredential, writer.uint32(18).fork()).join();
    }
    if (message.detectedUri !== "") {
      writer.uint32(26).string(message.detectedUri);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LeakedCredentialEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeakedCredentialEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccountCredential = ServiceAccountCredential.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.apiKeyCredential = ApiKeyCredential.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.detectedUri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LeakedCredentialEvent {
    return {
      serviceAccountCredential: isSet(object.serviceAccountCredential)
        ? ServiceAccountCredential.fromJSON(object.serviceAccountCredential)
        : undefined,
      apiKeyCredential: isSet(object.apiKeyCredential) ? ApiKeyCredential.fromJSON(object.apiKeyCredential) : undefined,
      detectedUri: isSet(object.detectedUri) ? globalThis.String(object.detectedUri) : "",
    };
  },

  toJSON(message: LeakedCredentialEvent): unknown {
    const obj: any = {};
    if (message.serviceAccountCredential !== undefined) {
      obj.serviceAccountCredential = ServiceAccountCredential.toJSON(message.serviceAccountCredential);
    }
    if (message.apiKeyCredential !== undefined) {
      obj.apiKeyCredential = ApiKeyCredential.toJSON(message.apiKeyCredential);
    }
    if (message.detectedUri !== "") {
      obj.detectedUri = message.detectedUri;
    }
    return obj;
  },

  create(base?: DeepPartial<LeakedCredentialEvent>): LeakedCredentialEvent {
    return LeakedCredentialEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LeakedCredentialEvent>): LeakedCredentialEvent {
    const message = createBaseLeakedCredentialEvent();
    message.serviceAccountCredential =
      (object.serviceAccountCredential !== undefined && object.serviceAccountCredential !== null)
        ? ServiceAccountCredential.fromPartial(object.serviceAccountCredential)
        : undefined;
    message.apiKeyCredential = (object.apiKeyCredential !== undefined && object.apiKeyCredential !== null)
      ? ApiKeyCredential.fromPartial(object.apiKeyCredential)
      : undefined;
    message.detectedUri = object.detectedUri ?? "";
    return message;
  },
};

function createBaseServiceAccountCredential(): ServiceAccountCredential {
  return { serviceAccount: "", keyId: "" };
}

export const ServiceAccountCredential: MessageFns<ServiceAccountCredential> = {
  encode(message: ServiceAccountCredential, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serviceAccount !== "") {
      writer.uint32(10).string(message.serviceAccount);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ServiceAccountCredential {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceAccountCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceAccount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceAccountCredential {
    return {
      serviceAccount: isSet(object.serviceAccount) ? globalThis.String(object.serviceAccount) : "",
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: ServiceAccountCredential): unknown {
    const obj: any = {};
    if (message.serviceAccount !== "") {
      obj.serviceAccount = message.serviceAccount;
    }
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create(base?: DeepPartial<ServiceAccountCredential>): ServiceAccountCredential {
    return ServiceAccountCredential.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceAccountCredential>): ServiceAccountCredential {
    const message = createBaseServiceAccountCredential();
    message.serviceAccount = object.serviceAccount ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseApiKeyCredential(): ApiKeyCredential {
  return { apiKey: "" };
}

export const ApiKeyCredential: MessageFns<ApiKeyCredential> = {
  encode(message: ApiKeyCredential, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.apiKey !== "") {
      writer.uint32(10).string(message.apiKey);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ApiKeyCredential {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiKeyCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apiKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApiKeyCredential {
    return { apiKey: isSet(object.apiKey) ? globalThis.String(object.apiKey) : "" };
  },

  toJSON(message: ApiKeyCredential): unknown {
    const obj: any = {};
    if (message.apiKey !== "") {
      obj.apiKey = message.apiKey;
    }
    return obj;
  },

  create(base?: DeepPartial<ApiKeyCredential>): ApiKeyCredential {
    return ApiKeyCredential.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ApiKeyCredential>): ApiKeyCredential {
    const message = createBaseApiKeyCredential();
    message.apiKey = object.apiKey ?? "";
    return message;
  },
};

function createBaseHarmfulContentEvent(): HarmfulContentEvent {
  return { uri: [] };
}

export const HarmfulContentEvent: MessageFns<HarmfulContentEvent> = {
  encode(message: HarmfulContentEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.uri) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HarmfulContentEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHarmfulContentEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HarmfulContentEvent {
    return { uri: globalThis.Array.isArray(object?.uri) ? object.uri.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: HarmfulContentEvent): unknown {
    const obj: any = {};
    if (message.uri?.length) {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<HarmfulContentEvent>): HarmfulContentEvent {
    return HarmfulContentEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HarmfulContentEvent>): HarmfulContentEvent {
    const message = createBaseHarmfulContentEvent();
    message.uri = object.uri?.map((e) => e) || [];
    return message;
  },
};

function createBaseReinstatementEvent(): ReinstatementEvent {
  return {};
}

export const ReinstatementEvent: MessageFns<ReinstatementEvent> = {
  encode(_: ReinstatementEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ReinstatementEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReinstatementEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ReinstatementEvent {
    return {};
  },

  toJSON(_: ReinstatementEvent): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ReinstatementEvent>): ReinstatementEvent {
    return ReinstatementEvent.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ReinstatementEvent>): ReinstatementEvent {
    const message = createBaseReinstatementEvent();
    return message;
  },
};

function createBaseDecisionEscalationEvent(): DecisionEscalationEvent {
  return {};
}

export const DecisionEscalationEvent: MessageFns<DecisionEscalationEvent> = {
  encode(_: DecisionEscalationEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DecisionEscalationEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionEscalationEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DecisionEscalationEvent {
    return {};
  },

  toJSON(_: DecisionEscalationEvent): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<DecisionEscalationEvent>): DecisionEscalationEvent {
    return DecisionEscalationEvent.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<DecisionEscalationEvent>): DecisionEscalationEvent {
    const message = createBaseDecisionEscalationEvent();
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