// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/networkmanagement/v1beta1/vpc_flow_logs_config.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.cloud.networkmanagement.v1beta1";

/** A configuration to generate VPC Flow Logs. */
export interface VpcFlowLogsConfig {
  /**
   * Identifier. Unique name of the configuration using the form:
   *     `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}`
   */
  name: string;
  /**
   * Optional. The user-supplied description of the VPC Flow Logs configuration.
   * Maximum of 512 characters.
   */
  description?:
    | string
    | undefined;
  /**
   * Optional. The state of the VPC Flow Log configuration. Default value is
   * ENABLED. When creating a new configuration, it must be enabled.
   */
  state?:
    | VpcFlowLogsConfig_State
    | undefined;
  /**
   * Optional. The aggregation interval for the logs. Default value is
   * INTERVAL_5_SEC.
   */
  aggregationInterval?:
    | VpcFlowLogsConfig_AggregationInterval
    | undefined;
  /**
   * Optional. The value of the field must be in (0, 1]. The sampling rate of
   * VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
   * sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs,
   * use the state field instead. Default value is 1.0.
   */
  flowSampling?:
    | number
    | undefined;
  /**
   * Optional. Configures whether all, none or a subset of metadata fields
   * should be added to the reported VPC flow logs. Default value is
   * INCLUDE_ALL_METADATA.
   */
  metadata?:
    | VpcFlowLogsConfig_Metadata
    | undefined;
  /**
   * Optional. Custom metadata fields to include in the reported VPC flow logs.
   * Can only be specified if "metadata" was set to CUSTOM_METADATA.
   */
  metadataFields: string[];
  /**
   * Optional. Export filter used to define which VPC Flow Logs should be
   * logged.
   */
  filterExpr?:
    | string
    | undefined;
  /**
   * Traffic will be logged from the Interconnect Attachment.
   * Format:
   * projects/{project_id}/regions/{region}/interconnectAttachments/{name}
   */
  interconnectAttachment?:
    | string
    | undefined;
  /**
   * Traffic will be logged from the VPN Tunnel.
   * Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}
   */
  vpnTunnel?:
    | string
    | undefined;
  /** Optional. Resource labels to represent user-provided metadata. */
  labels: { [key: string]: string };
  /** Output only. The time the config was created. */
  createTime:
    | Date
    | undefined;
  /** Output only. The time the config was updated. */
  updateTime: Date | undefined;
}

/**
 * Determines whether this configuration will be generating logs.
 * Setting state=DISABLED will pause the log generation for this config.
 */
export enum VpcFlowLogsConfig_State {
  /** STATE_UNSPECIFIED - If not specified, will default to ENABLED. */
  STATE_UNSPECIFIED = 0,
  /** ENABLED - When ENABLED, this configuration will generate logs. */
  ENABLED = 1,
  /** DISABLED - When DISABLED, this configuration will not generate logs. */
  DISABLED = 2,
  UNRECOGNIZED = -1,
}

export function vpcFlowLogsConfig_StateFromJSON(object: any): VpcFlowLogsConfig_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return VpcFlowLogsConfig_State.STATE_UNSPECIFIED;
    case 1:
    case "ENABLED":
      return VpcFlowLogsConfig_State.ENABLED;
    case 2:
    case "DISABLED":
      return VpcFlowLogsConfig_State.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VpcFlowLogsConfig_State.UNRECOGNIZED;
  }
}

export function vpcFlowLogsConfig_StateToJSON(object: VpcFlowLogsConfig_State): string {
  switch (object) {
    case VpcFlowLogsConfig_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case VpcFlowLogsConfig_State.ENABLED:
      return "ENABLED";
    case VpcFlowLogsConfig_State.DISABLED:
      return "DISABLED";
    case VpcFlowLogsConfig_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Toggles the aggregation interval for collecting flow logs by 5-tuple. */
export enum VpcFlowLogsConfig_AggregationInterval {
  /** AGGREGATION_INTERVAL_UNSPECIFIED - If not specified, will default to INTERVAL_5_SEC. */
  AGGREGATION_INTERVAL_UNSPECIFIED = 0,
  /** INTERVAL_5_SEC - Aggregate logs in 5s intervals. */
  INTERVAL_5_SEC = 1,
  /** INTERVAL_30_SEC - Aggregate logs in 30s intervals. */
  INTERVAL_30_SEC = 2,
  /** INTERVAL_1_MIN - Aggregate logs in 1m intervals. */
  INTERVAL_1_MIN = 3,
  /** INTERVAL_5_MIN - Aggregate logs in 5m intervals. */
  INTERVAL_5_MIN = 4,
  /** INTERVAL_10_MIN - Aggregate logs in 10m intervals. */
  INTERVAL_10_MIN = 5,
  /** INTERVAL_15_MIN - Aggregate logs in 15m intervals. */
  INTERVAL_15_MIN = 6,
  UNRECOGNIZED = -1,
}

export function vpcFlowLogsConfig_AggregationIntervalFromJSON(object: any): VpcFlowLogsConfig_AggregationInterval {
  switch (object) {
    case 0:
    case "AGGREGATION_INTERVAL_UNSPECIFIED":
      return VpcFlowLogsConfig_AggregationInterval.AGGREGATION_INTERVAL_UNSPECIFIED;
    case 1:
    case "INTERVAL_5_SEC":
      return VpcFlowLogsConfig_AggregationInterval.INTERVAL_5_SEC;
    case 2:
    case "INTERVAL_30_SEC":
      return VpcFlowLogsConfig_AggregationInterval.INTERVAL_30_SEC;
    case 3:
    case "INTERVAL_1_MIN":
      return VpcFlowLogsConfig_AggregationInterval.INTERVAL_1_MIN;
    case 4:
    case "INTERVAL_5_MIN":
      return VpcFlowLogsConfig_AggregationInterval.INTERVAL_5_MIN;
    case 5:
    case "INTERVAL_10_MIN":
      return VpcFlowLogsConfig_AggregationInterval.INTERVAL_10_MIN;
    case 6:
    case "INTERVAL_15_MIN":
      return VpcFlowLogsConfig_AggregationInterval.INTERVAL_15_MIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VpcFlowLogsConfig_AggregationInterval.UNRECOGNIZED;
  }
}

export function vpcFlowLogsConfig_AggregationIntervalToJSON(object: VpcFlowLogsConfig_AggregationInterval): string {
  switch (object) {
    case VpcFlowLogsConfig_AggregationInterval.AGGREGATION_INTERVAL_UNSPECIFIED:
      return "AGGREGATION_INTERVAL_UNSPECIFIED";
    case VpcFlowLogsConfig_AggregationInterval.INTERVAL_5_SEC:
      return "INTERVAL_5_SEC";
    case VpcFlowLogsConfig_AggregationInterval.INTERVAL_30_SEC:
      return "INTERVAL_30_SEC";
    case VpcFlowLogsConfig_AggregationInterval.INTERVAL_1_MIN:
      return "INTERVAL_1_MIN";
    case VpcFlowLogsConfig_AggregationInterval.INTERVAL_5_MIN:
      return "INTERVAL_5_MIN";
    case VpcFlowLogsConfig_AggregationInterval.INTERVAL_10_MIN:
      return "INTERVAL_10_MIN";
    case VpcFlowLogsConfig_AggregationInterval.INTERVAL_15_MIN:
      return "INTERVAL_15_MIN";
    case VpcFlowLogsConfig_AggregationInterval.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Configures which log fields would be included. */
export enum VpcFlowLogsConfig_Metadata {
  /** METADATA_UNSPECIFIED - If not specified, will default to INCLUDE_ALL_METADATA. */
  METADATA_UNSPECIFIED = 0,
  /** INCLUDE_ALL_METADATA - Include all metadata fields. */
  INCLUDE_ALL_METADATA = 1,
  /** EXCLUDE_ALL_METADATA - Exclude all metadata fields. */
  EXCLUDE_ALL_METADATA = 2,
  /** CUSTOM_METADATA - Include only custom fields (specified in metadata_fields). */
  CUSTOM_METADATA = 3,
  UNRECOGNIZED = -1,
}

export function vpcFlowLogsConfig_MetadataFromJSON(object: any): VpcFlowLogsConfig_Metadata {
  switch (object) {
    case 0:
    case "METADATA_UNSPECIFIED":
      return VpcFlowLogsConfig_Metadata.METADATA_UNSPECIFIED;
    case 1:
    case "INCLUDE_ALL_METADATA":
      return VpcFlowLogsConfig_Metadata.INCLUDE_ALL_METADATA;
    case 2:
    case "EXCLUDE_ALL_METADATA":
      return VpcFlowLogsConfig_Metadata.EXCLUDE_ALL_METADATA;
    case 3:
    case "CUSTOM_METADATA":
      return VpcFlowLogsConfig_Metadata.CUSTOM_METADATA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VpcFlowLogsConfig_Metadata.UNRECOGNIZED;
  }
}

export function vpcFlowLogsConfig_MetadataToJSON(object: VpcFlowLogsConfig_Metadata): string {
  switch (object) {
    case VpcFlowLogsConfig_Metadata.METADATA_UNSPECIFIED:
      return "METADATA_UNSPECIFIED";
    case VpcFlowLogsConfig_Metadata.INCLUDE_ALL_METADATA:
      return "INCLUDE_ALL_METADATA";
    case VpcFlowLogsConfig_Metadata.EXCLUDE_ALL_METADATA:
      return "EXCLUDE_ALL_METADATA";
    case VpcFlowLogsConfig_Metadata.CUSTOM_METADATA:
      return "CUSTOM_METADATA";
    case VpcFlowLogsConfig_Metadata.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface VpcFlowLogsConfig_LabelsEntry {
  key: string;
  value: string;
}

function createBaseVpcFlowLogsConfig(): VpcFlowLogsConfig {
  return {
    name: "",
    description: undefined,
    state: undefined,
    aggregationInterval: undefined,
    flowSampling: undefined,
    metadata: undefined,
    metadataFields: [],
    filterExpr: undefined,
    interconnectAttachment: undefined,
    vpnTunnel: undefined,
    labels: {},
    createTime: undefined,
    updateTime: undefined,
  };
}

export const VpcFlowLogsConfig: MessageFns<VpcFlowLogsConfig> = {
  encode(message: VpcFlowLogsConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.state !== undefined) {
      writer.uint32(24).int32(message.state);
    }
    if (message.aggregationInterval !== undefined) {
      writer.uint32(32).int32(message.aggregationInterval);
    }
    if (message.flowSampling !== undefined) {
      writer.uint32(45).float(message.flowSampling);
    }
    if (message.metadata !== undefined) {
      writer.uint32(48).int32(message.metadata);
    }
    for (const v of message.metadataFields) {
      writer.uint32(58).string(v!);
    }
    if (message.filterExpr !== undefined) {
      writer.uint32(66).string(message.filterExpr);
    }
    if (message.interconnectAttachment !== undefined) {
      writer.uint32(818).string(message.interconnectAttachment);
    }
    if (message.vpnTunnel !== undefined) {
      writer.uint32(826).string(message.vpnTunnel);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      VpcFlowLogsConfig_LabelsEntry.encode({ key: key as any, value }, writer.uint32(90).fork()).join();
    });
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(74).fork()).join();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(82).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VpcFlowLogsConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVpcFlowLogsConfig();
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

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.aggregationInterval = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.flowSampling = reader.float();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.metadata = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.metadataFields.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.filterExpr = reader.string();
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.interconnectAttachment = reader.string();
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.vpnTunnel = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          const entry11 = VpcFlowLogsConfig_LabelsEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.labels[entry11.key] = entry11.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VpcFlowLogsConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      state: isSet(object.state) ? vpcFlowLogsConfig_StateFromJSON(object.state) : undefined,
      aggregationInterval: isSet(object.aggregationInterval)
        ? vpcFlowLogsConfig_AggregationIntervalFromJSON(object.aggregationInterval)
        : undefined,
      flowSampling: isSet(object.flowSampling) ? globalThis.Number(object.flowSampling) : undefined,
      metadata: isSet(object.metadata) ? vpcFlowLogsConfig_MetadataFromJSON(object.metadata) : undefined,
      metadataFields: globalThis.Array.isArray(object?.metadataFields)
        ? object.metadataFields.map((e: any) => globalThis.String(e))
        : [],
      filterExpr: isSet(object.filterExpr) ? globalThis.String(object.filterExpr) : undefined,
      interconnectAttachment: isSet(object.interconnectAttachment)
        ? globalThis.String(object.interconnectAttachment)
        : undefined,
      vpnTunnel: isSet(object.vpnTunnel) ? globalThis.String(object.vpnTunnel) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: VpcFlowLogsConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.state !== undefined) {
      obj.state = vpcFlowLogsConfig_StateToJSON(message.state);
    }
    if (message.aggregationInterval !== undefined) {
      obj.aggregationInterval = vpcFlowLogsConfig_AggregationIntervalToJSON(message.aggregationInterval);
    }
    if (message.flowSampling !== undefined) {
      obj.flowSampling = message.flowSampling;
    }
    if (message.metadata !== undefined) {
      obj.metadata = vpcFlowLogsConfig_MetadataToJSON(message.metadata);
    }
    if (message.metadataFields?.length) {
      obj.metadataFields = message.metadataFields;
    }
    if (message.filterExpr !== undefined) {
      obj.filterExpr = message.filterExpr;
    }
    if (message.interconnectAttachment !== undefined) {
      obj.interconnectAttachment = message.interconnectAttachment;
    }
    if (message.vpnTunnel !== undefined) {
      obj.vpnTunnel = message.vpnTunnel;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<VpcFlowLogsConfig>): VpcFlowLogsConfig {
    return VpcFlowLogsConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VpcFlowLogsConfig>): VpcFlowLogsConfig {
    const message = createBaseVpcFlowLogsConfig();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.state = object.state ?? undefined;
    message.aggregationInterval = object.aggregationInterval ?? undefined;
    message.flowSampling = object.flowSampling ?? undefined;
    message.metadata = object.metadata ?? undefined;
    message.metadataFields = object.metadataFields?.map((e) => e) || [];
    message.filterExpr = object.filterExpr ?? undefined;
    message.interconnectAttachment = object.interconnectAttachment ?? undefined;
    message.vpnTunnel = object.vpnTunnel ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseVpcFlowLogsConfig_LabelsEntry(): VpcFlowLogsConfig_LabelsEntry {
  return { key: "", value: "" };
}

export const VpcFlowLogsConfig_LabelsEntry: MessageFns<VpcFlowLogsConfig_LabelsEntry> = {
  encode(message: VpcFlowLogsConfig_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VpcFlowLogsConfig_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVpcFlowLogsConfig_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VpcFlowLogsConfig_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: VpcFlowLogsConfig_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<VpcFlowLogsConfig_LabelsEntry>): VpcFlowLogsConfig_LabelsEntry {
    return VpcFlowLogsConfig_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VpcFlowLogsConfig_LabelsEntry>): VpcFlowLogsConfig_LabelsEntry {
    const message = createBaseVpcFlowLogsConfig_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
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