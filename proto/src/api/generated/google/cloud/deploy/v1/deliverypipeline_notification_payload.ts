// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/deploy/v1/deliverypipeline_notification_payload.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Type, typeFromJSON, typeToJSON } from "./log_enums.js";

export const protobufPackage = "google.cloud.deploy.v1";

/**
 * Payload proto for "clouddeploy.googleapis.com/deliverypipeline_notification"
 * Platform Log event that describes the failure to send delivery pipeline
 * status change Pub/Sub notification.
 */
export interface DeliveryPipelineNotificationEvent {
  /** Debug message for when a notification fails to send. */
  message: string;
  /** Unique identifier of the `DeliveryPipeline`. */
  pipelineUid: string;
  /** The name of the `Delivery Pipeline`. */
  deliveryPipeline: string;
  /** Type of this notification, e.g. for a Pub/Sub failure. */
  type: Type;
}

function createBaseDeliveryPipelineNotificationEvent(): DeliveryPipelineNotificationEvent {
  return { message: "", pipelineUid: "", deliveryPipeline: "", type: 0 };
}

export const DeliveryPipelineNotificationEvent: MessageFns<DeliveryPipelineNotificationEvent> = {
  encode(message: DeliveryPipelineNotificationEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.pipelineUid !== "") {
      writer.uint32(34).string(message.pipelineUid);
    }
    if (message.deliveryPipeline !== "") {
      writer.uint32(18).string(message.deliveryPipeline);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeliveryPipelineNotificationEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeliveryPipelineNotificationEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pipelineUid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deliveryPipeline = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeliveryPipelineNotificationEvent {
    return {
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      pipelineUid: isSet(object.pipelineUid) ? globalThis.String(object.pipelineUid) : "",
      deliveryPipeline: isSet(object.deliveryPipeline) ? globalThis.String(object.deliveryPipeline) : "",
      type: isSet(object.type) ? typeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: DeliveryPipelineNotificationEvent): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.pipelineUid !== "") {
      obj.pipelineUid = message.pipelineUid;
    }
    if (message.deliveryPipeline !== "") {
      obj.deliveryPipeline = message.deliveryPipeline;
    }
    if (message.type !== 0) {
      obj.type = typeToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<DeliveryPipelineNotificationEvent>): DeliveryPipelineNotificationEvent {
    return DeliveryPipelineNotificationEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeliveryPipelineNotificationEvent>): DeliveryPipelineNotificationEvent {
    const message = createBaseDeliveryPipelineNotificationEvent();
    message.message = object.message ?? "";
    message.pipelineUid = object.pipelineUid ?? "";
    message.deliveryPipeline = object.deliveryPipeline ?? "";
    message.type = object.type ?? 0;
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