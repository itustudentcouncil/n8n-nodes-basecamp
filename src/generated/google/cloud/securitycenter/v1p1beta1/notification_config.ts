// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v1p1beta1/notification_config.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.securitycenter.v1p1beta1";

/**
 * Security Command Center notification configs.
 *
 * A notification config is a Security Command Center resource that contains the
 * configuration to send notifications for create/update events of findings,
 * assets and etc.
 */
export interface NotificationConfig {
  /**
   * The relative resource name of this notification config. See:
   * https://cloud.google.com/apis/design/resource_names#relative_resource_name
   * Example:
   * "organizations/{organization_id}/notificationConfigs/notify_public_bucket".
   */
  name: string;
  /** The description of the notification config (max of 1024 characters). */
  description: string;
  /** The type of events the config is for, e.g. FINDING. */
  eventType: NotificationConfig_EventType;
  /**
   * The Pub/Sub topic to send notifications to. Its format is
   * "projects/[project_id]/topics/[topic]".
   */
  pubsubTopic: string;
  /**
   * Output only. The service account that needs "pubsub.topics.publish"
   * permission to publish to the Pub/Sub topic.
   */
  serviceAccount: string;
  /** The config for triggering streaming-based notifications. */
  streamingConfig?: NotificationConfig_StreamingConfig | undefined;
}

/** The type of events. */
export enum NotificationConfig_EventType {
  /** EVENT_TYPE_UNSPECIFIED - Unspecified event type. */
  EVENT_TYPE_UNSPECIFIED = 0,
  /** FINDING - Events for findings. */
  FINDING = 1,
  UNRECOGNIZED = -1,
}

export function notificationConfig_EventTypeFromJSON(object: any): NotificationConfig_EventType {
  switch (object) {
    case 0:
    case "EVENT_TYPE_UNSPECIFIED":
      return NotificationConfig_EventType.EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "FINDING":
      return NotificationConfig_EventType.FINDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NotificationConfig_EventType.UNRECOGNIZED;
  }
}

export function notificationConfig_EventTypeToJSON(object: NotificationConfig_EventType): string {
  switch (object) {
    case NotificationConfig_EventType.EVENT_TYPE_UNSPECIFIED:
      return "EVENT_TYPE_UNSPECIFIED";
    case NotificationConfig_EventType.FINDING:
      return "FINDING";
    case NotificationConfig_EventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * The config for streaming-based notifications, which send each event as soon
 * as it is detected.
 */
export interface NotificationConfig_StreamingConfig {
  /**
   * Expression that defines the filter to apply across create/update events
   * of assets or findings as specified by the event type. The expression is a
   * list of zero or more restrictions combined via logical operators `AND`
   * and `OR`. Parentheses are supported, and `OR` has higher precedence than
   * `AND`.
   *
   * Restrictions have the form `<field> <operator> <value>` and may have a
   * `-` character in front of them to indicate negation. The fields map to
   * those defined in the corresponding resource.
   *
   * The supported operators are:
   *
   * * `=` for all value types.
   * * `>`, `<`, `>=`, `<=` for integer values.
   * * `:`, meaning substring matching, for strings.
   *
   * The supported value types are:
   *
   * * string literals in quotes.
   * * integer literals without quotes.
   * * boolean literals `true` and `false` without quotes.
   */
  filter: string;
}

function createBaseNotificationConfig(): NotificationConfig {
  return { name: "", description: "", eventType: 0, pubsubTopic: "", serviceAccount: "", streamingConfig: undefined };
}

export const NotificationConfig: MessageFns<NotificationConfig> = {
  encode(message: NotificationConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.eventType !== 0) {
      writer.uint32(24).int32(message.eventType);
    }
    if (message.pubsubTopic !== "") {
      writer.uint32(34).string(message.pubsubTopic);
    }
    if (message.serviceAccount !== "") {
      writer.uint32(42).string(message.serviceAccount);
    }
    if (message.streamingConfig !== undefined) {
      NotificationConfig_StreamingConfig.encode(message.streamingConfig, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NotificationConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotificationConfig();
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

          message.eventType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pubsubTopic = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.serviceAccount = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.streamingConfig = NotificationConfig_StreamingConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotificationConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      eventType: isSet(object.eventType) ? notificationConfig_EventTypeFromJSON(object.eventType) : 0,
      pubsubTopic: isSet(object.pubsubTopic) ? globalThis.String(object.pubsubTopic) : "",
      serviceAccount: isSet(object.serviceAccount) ? globalThis.String(object.serviceAccount) : "",
      streamingConfig: isSet(object.streamingConfig)
        ? NotificationConfig_StreamingConfig.fromJSON(object.streamingConfig)
        : undefined,
    };
  },

  toJSON(message: NotificationConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.eventType !== 0) {
      obj.eventType = notificationConfig_EventTypeToJSON(message.eventType);
    }
    if (message.pubsubTopic !== "") {
      obj.pubsubTopic = message.pubsubTopic;
    }
    if (message.serviceAccount !== "") {
      obj.serviceAccount = message.serviceAccount;
    }
    if (message.streamingConfig !== undefined) {
      obj.streamingConfig = NotificationConfig_StreamingConfig.toJSON(message.streamingConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<NotificationConfig>): NotificationConfig {
    return NotificationConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NotificationConfig>): NotificationConfig {
    const message = createBaseNotificationConfig();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.eventType = object.eventType ?? 0;
    message.pubsubTopic = object.pubsubTopic ?? "";
    message.serviceAccount = object.serviceAccount ?? "";
    message.streamingConfig = (object.streamingConfig !== undefined && object.streamingConfig !== null)
      ? NotificationConfig_StreamingConfig.fromPartial(object.streamingConfig)
      : undefined;
    return message;
  },
};

function createBaseNotificationConfig_StreamingConfig(): NotificationConfig_StreamingConfig {
  return { filter: "" };
}

export const NotificationConfig_StreamingConfig: MessageFns<NotificationConfig_StreamingConfig> = {
  encode(message: NotificationConfig_StreamingConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NotificationConfig_StreamingConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotificationConfig_StreamingConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotificationConfig_StreamingConfig {
    return { filter: isSet(object.filter) ? globalThis.String(object.filter) : "" };
  },

  toJSON(message: NotificationConfig_StreamingConfig): unknown {
    const obj: any = {};
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    return obj;
  },

  create(base?: DeepPartial<NotificationConfig_StreamingConfig>): NotificationConfig_StreamingConfig {
    return NotificationConfig_StreamingConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NotificationConfig_StreamingConfig>): NotificationConfig_StreamingConfig {
    const message = createBaseNotificationConfig_StreamingConfig();
    message.filter = object.filter ?? "";
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