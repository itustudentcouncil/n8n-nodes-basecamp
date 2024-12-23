// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/label.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TextLabel } from "../common/text_label.js";
import {
  LabelStatusEnum_LabelStatus,
  labelStatusEnum_LabelStatusFromJSON,
  labelStatusEnum_LabelStatusToJSON,
} from "../enums/label_status.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

/** A label. */
export interface Label {
  /**
   * Immutable. Name of the resource.
   * Label resource names have the form:
   * `customers/{customer_id}/labels/{label_id}`
   */
  resourceName: string;
  /** Output only. ID of the label. Read only. */
  id?:
    | Long
    | undefined;
  /**
   * The name of the label.
   *
   * This field is required and should not be empty when creating a new label.
   *
   * The length of this string should be between 1 and 80, inclusive.
   */
  name?:
    | string
    | undefined;
  /** Output only. Status of the label. Read only. */
  status: LabelStatusEnum_LabelStatus;
  /** A type of label displaying text on a colored background. */
  textLabel: TextLabel | undefined;
}

function createBaseLabel(): Label {
  return { resourceName: "", id: undefined, name: undefined, status: 0, textLabel: undefined };
}

export const Label: MessageFns<Label> = {
  encode(message: Label, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.id !== undefined) {
      writer.uint32(48).int64(message.id.toString());
    }
    if (message.name !== undefined) {
      writer.uint32(58).string(message.name);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.textLabel !== undefined) {
      TextLabel.encode(message.textLabel, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Label {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.textLabel = TextLabel.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Label {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      status: isSet(object.status) ? labelStatusEnum_LabelStatusFromJSON(object.status) : 0,
      textLabel: isSet(object.textLabel) ? TextLabel.fromJSON(object.textLabel) : undefined,
    };
  },

  toJSON(message: Label): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.id !== undefined) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.status !== 0) {
      obj.status = labelStatusEnum_LabelStatusToJSON(message.status);
    }
    if (message.textLabel !== undefined) {
      obj.textLabel = TextLabel.toJSON(message.textLabel);
    }
    return obj;
  },

  create(base?: DeepPartial<Label>): Label {
    return Label.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Label>): Label {
    const message = createBaseLabel();
    message.resourceName = object.resourceName ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : undefined;
    message.name = object.name ?? undefined;
    message.status = object.status ?? 0;
    message.textLabel = (object.textLabel !== undefined && object.textLabel !== null)
      ? TextLabel.fromPartial(object.textLabel)
      : undefined;
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
