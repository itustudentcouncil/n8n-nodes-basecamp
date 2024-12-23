// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/customizer_attribute.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  CustomizerAttributeStatusEnum_CustomizerAttributeStatus,
  customizerAttributeStatusEnum_CustomizerAttributeStatusFromJSON,
  customizerAttributeStatusEnum_CustomizerAttributeStatusToJSON,
} from "../enums/customizer_attribute_status.js";
import {
  CustomizerAttributeTypeEnum_CustomizerAttributeType,
  customizerAttributeTypeEnum_CustomizerAttributeTypeFromJSON,
  customizerAttributeTypeEnum_CustomizerAttributeTypeToJSON,
} from "../enums/customizer_attribute_type.js";

export const protobufPackage = "google.ads.googleads.v17.resources";

/**
 * A customizer attribute.
 * Use CustomerCustomizer, CampaignCustomizer, AdGroupCustomizer, or
 * AdGroupCriterionCustomizer to associate a customizer attribute and
 * set its value at the customer, campaign, ad group, or ad group criterion
 * level, respectively.
 */
export interface CustomizerAttribute {
  /**
   * Immutable. The resource name of the customizer attribute.
   * Customizer Attribute resource names have the form:
   *
   * `customers/{customer_id}/customizerAttributes/{customizer_attribute_id}`
   */
  resourceName: string;
  /** Output only. The ID of the customizer attribute. */
  id: Long;
  /**
   * Required. Immutable. Name of the customizer attribute. Required. It must
   * have a minimum length of 1 and maximum length of 40. Name of an enabled
   * customizer attribute must be unique (case insensitive).
   */
  name: string;
  /** Immutable. The type of the customizer attribute. */
  type: CustomizerAttributeTypeEnum_CustomizerAttributeType;
  /** Output only. The status of the customizer attribute. */
  status: CustomizerAttributeStatusEnum_CustomizerAttributeStatus;
}

function createBaseCustomizerAttribute(): CustomizerAttribute {
  return { resourceName: "", id: Long.ZERO, name: "", type: 0, status: 0 };
}

export const CustomizerAttribute: MessageFns<CustomizerAttribute> = {
  encode(message: CustomizerAttribute, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (!message.id.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.id.toString());
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomizerAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomizerAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomizerAttribute {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? customizerAttributeTypeEnum_CustomizerAttributeTypeFromJSON(object.type) : 0,
      status: isSet(object.status) ? customizerAttributeStatusEnum_CustomizerAttributeStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: CustomizerAttribute): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (!message.id.equals(Long.ZERO)) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = customizerAttributeTypeEnum_CustomizerAttributeTypeToJSON(message.type);
    }
    if (message.status !== 0) {
      obj.status = customizerAttributeStatusEnum_CustomizerAttributeStatusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<CustomizerAttribute>): CustomizerAttribute {
    return CustomizerAttribute.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomizerAttribute>): CustomizerAttribute {
    const message = createBaseCustomizerAttribute();
    message.resourceName = object.resourceName ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.status = object.status ?? 0;
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
