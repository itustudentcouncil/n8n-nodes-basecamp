// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/resources/conversion_custom_variable.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality,
  conversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinalityFromJSON,
  conversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinalityToJSON,
} from "../enums/conversion_custom_variable_cardinality.js";
import {
  ConversionCustomVariableFamilyEnum_ConversionCustomVariableFamily,
  conversionCustomVariableFamilyEnum_ConversionCustomVariableFamilyFromJSON,
  conversionCustomVariableFamilyEnum_ConversionCustomVariableFamilyToJSON,
} from "../enums/conversion_custom_variable_family.js";
import {
  ConversionCustomVariableStatusEnum_ConversionCustomVariableStatus,
  conversionCustomVariableStatusEnum_ConversionCustomVariableStatusFromJSON,
  conversionCustomVariableStatusEnum_ConversionCustomVariableStatusToJSON,
} from "../enums/conversion_custom_variable_status.js";
import {
  FloodlightVariableDataTypeEnum_FloodlightVariableDataType,
  floodlightVariableDataTypeEnum_FloodlightVariableDataTypeFromJSON,
  floodlightVariableDataTypeEnum_FloodlightVariableDataTypeToJSON,
} from "../enums/floodlight_variable_data_type.js";
import {
  FloodlightVariableTypeEnum_FloodlightVariableType,
  floodlightVariableTypeEnum_FloodlightVariableTypeFromJSON,
  floodlightVariableTypeEnum_FloodlightVariableTypeToJSON,
} from "../enums/floodlight_variable_type.js";

export const protobufPackage = "google.ads.searchads360.v0.resources";

/**
 * A conversion custom variable.
 * See "About custom Floodlight metrics and dimensions in the new
 * Search Ads 360" at https://support.google.com/sa360/answer/13567857
 */
export interface ConversionCustomVariable {
  /**
   * Immutable. The resource name of the conversion custom variable.
   * Conversion custom variable resource names have the form:
   *
   * `customers/{customer_id}/conversionCustomVariables/{conversion_custom_variable_id}`
   */
  resourceName: string;
  /** Output only. The ID of the conversion custom variable. */
  id: Long;
  /**
   * Required. The name of the conversion custom variable.
   * Name should be unique. The maximum length of name is 100 characters.
   * There should not be any extra spaces before and after.
   */
  name: string;
  /**
   * Required. Immutable. The tag of the conversion custom variable.
   * Tag should be unique and consist of a "u" character directly followed with
   * a number less than ormequal to 100. For example: "u4".
   */
  tag: string;
  /** The status of the conversion custom variable for conversion event accrual. */
  status: ConversionCustomVariableStatusEnum_ConversionCustomVariableStatus;
  /**
   * Output only. The resource name of the customer that owns the conversion
   * custom variable.
   */
  ownerCustomer: string;
  /** Output only. Family of the conversion custom variable. */
  family: ConversionCustomVariableFamilyEnum_ConversionCustomVariableFamily;
  /** Output only. Cardinality of the conversion custom variable. */
  cardinality: ConversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinality;
  /**
   * Output only. Fields for Search Ads 360 floodlight conversion custom
   * variables.
   */
  floodlightConversionCustomVariableInfo:
    | ConversionCustomVariable_FloodlightConversionCustomVariableInfo
    | undefined;
  /**
   * Output only. The IDs of custom columns that use this conversion custom
   * variable.
   */
  customColumnIds: Long[];
}

/** Information for Search Ads 360 Floodlight Conversion Custom Variables. */
export interface ConversionCustomVariable_FloodlightConversionCustomVariableInfo {
  /** Output only. Floodlight variable type defined in Search Ads 360. */
  floodlightVariableType?:
    | FloodlightVariableTypeEnum_FloodlightVariableType
    | undefined;
  /** Output only. Floodlight variable data type defined in Search Ads 360. */
  floodlightVariableDataType?: FloodlightVariableDataTypeEnum_FloodlightVariableDataType | undefined;
}

function createBaseConversionCustomVariable(): ConversionCustomVariable {
  return {
    resourceName: "",
    id: Long.ZERO,
    name: "",
    tag: "",
    status: 0,
    ownerCustomer: "",
    family: 0,
    cardinality: 0,
    floodlightConversionCustomVariableInfo: undefined,
    customColumnIds: [],
  };
}

export const ConversionCustomVariable: MessageFns<ConversionCustomVariable> = {
  encode(message: ConversionCustomVariable, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (!message.id.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.id.toString());
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.tag !== "") {
      writer.uint32(34).string(message.tag);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.ownerCustomer !== "") {
      writer.uint32(50).string(message.ownerCustomer);
    }
    if (message.family !== 0) {
      writer.uint32(56).int32(message.family);
    }
    if (message.cardinality !== 0) {
      writer.uint32(64).int32(message.cardinality);
    }
    if (message.floodlightConversionCustomVariableInfo !== undefined) {
      ConversionCustomVariable_FloodlightConversionCustomVariableInfo.encode(
        message.floodlightConversionCustomVariableInfo,
        writer.uint32(74).fork(),
      ).join();
    }
    writer.uint32(82).fork();
    for (const v of message.customColumnIds) {
      writer.int64(v.toString());
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConversionCustomVariable {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionCustomVariable();
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
          if (tag !== 34) {
            break;
          }

          message.tag = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.ownerCustomer = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.family = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.cardinality = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.floodlightConversionCustomVariableInfo =
            ConversionCustomVariable_FloodlightConversionCustomVariableInfo.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag === 80) {
            message.customColumnIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.customColumnIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversionCustomVariable {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      tag: isSet(object.tag) ? globalThis.String(object.tag) : "",
      status: isSet(object.status)
        ? conversionCustomVariableStatusEnum_ConversionCustomVariableStatusFromJSON(object.status)
        : 0,
      ownerCustomer: isSet(object.ownerCustomer) ? globalThis.String(object.ownerCustomer) : "",
      family: isSet(object.family)
        ? conversionCustomVariableFamilyEnum_ConversionCustomVariableFamilyFromJSON(object.family)
        : 0,
      cardinality: isSet(object.cardinality)
        ? conversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinalityFromJSON(object.cardinality)
        : 0,
      floodlightConversionCustomVariableInfo: isSet(object.floodlightConversionCustomVariableInfo)
        ? ConversionCustomVariable_FloodlightConversionCustomVariableInfo.fromJSON(
          object.floodlightConversionCustomVariableInfo,
        )
        : undefined,
      customColumnIds: globalThis.Array.isArray(object?.customColumnIds)
        ? object.customColumnIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: ConversionCustomVariable): unknown {
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
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    if (message.status !== 0) {
      obj.status = conversionCustomVariableStatusEnum_ConversionCustomVariableStatusToJSON(message.status);
    }
    if (message.ownerCustomer !== "") {
      obj.ownerCustomer = message.ownerCustomer;
    }
    if (message.family !== 0) {
      obj.family = conversionCustomVariableFamilyEnum_ConversionCustomVariableFamilyToJSON(message.family);
    }
    if (message.cardinality !== 0) {
      obj.cardinality = conversionCustomVariableCardinalityEnum_ConversionCustomVariableCardinalityToJSON(
        message.cardinality,
      );
    }
    if (message.floodlightConversionCustomVariableInfo !== undefined) {
      obj.floodlightConversionCustomVariableInfo = ConversionCustomVariable_FloodlightConversionCustomVariableInfo
        .toJSON(message.floodlightConversionCustomVariableInfo);
    }
    if (message.customColumnIds?.length) {
      obj.customColumnIds = message.customColumnIds.map((e) => (e || Long.ZERO).toString());
    }
    return obj;
  },

  create(base?: DeepPartial<ConversionCustomVariable>): ConversionCustomVariable {
    return ConversionCustomVariable.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConversionCustomVariable>): ConversionCustomVariable {
    const message = createBaseConversionCustomVariable();
    message.resourceName = object.resourceName ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    message.name = object.name ?? "";
    message.tag = object.tag ?? "";
    message.status = object.status ?? 0;
    message.ownerCustomer = object.ownerCustomer ?? "";
    message.family = object.family ?? 0;
    message.cardinality = object.cardinality ?? 0;
    message.floodlightConversionCustomVariableInfo =
      (object.floodlightConversionCustomVariableInfo !== undefined &&
          object.floodlightConversionCustomVariableInfo !== null)
        ? ConversionCustomVariable_FloodlightConversionCustomVariableInfo.fromPartial(
          object.floodlightConversionCustomVariableInfo,
        )
        : undefined;
    message.customColumnIds = object.customColumnIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseConversionCustomVariable_FloodlightConversionCustomVariableInfo(): ConversionCustomVariable_FloodlightConversionCustomVariableInfo {
  return { floodlightVariableType: undefined, floodlightVariableDataType: undefined };
}

export const ConversionCustomVariable_FloodlightConversionCustomVariableInfo: MessageFns<
  ConversionCustomVariable_FloodlightConversionCustomVariableInfo
> = {
  encode(
    message: ConversionCustomVariable_FloodlightConversionCustomVariableInfo,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.floodlightVariableType !== undefined) {
      writer.uint32(8).int32(message.floodlightVariableType);
    }
    if (message.floodlightVariableDataType !== undefined) {
      writer.uint32(16).int32(message.floodlightVariableDataType);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ConversionCustomVariable_FloodlightConversionCustomVariableInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionCustomVariable_FloodlightConversionCustomVariableInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.floodlightVariableType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.floodlightVariableDataType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversionCustomVariable_FloodlightConversionCustomVariableInfo {
    return {
      floodlightVariableType: isSet(object.floodlightVariableType)
        ? floodlightVariableTypeEnum_FloodlightVariableTypeFromJSON(object.floodlightVariableType)
        : undefined,
      floodlightVariableDataType: isSet(object.floodlightVariableDataType)
        ? floodlightVariableDataTypeEnum_FloodlightVariableDataTypeFromJSON(object.floodlightVariableDataType)
        : undefined,
    };
  },

  toJSON(message: ConversionCustomVariable_FloodlightConversionCustomVariableInfo): unknown {
    const obj: any = {};
    if (message.floodlightVariableType !== undefined) {
      obj.floodlightVariableType = floodlightVariableTypeEnum_FloodlightVariableTypeToJSON(
        message.floodlightVariableType,
      );
    }
    if (message.floodlightVariableDataType !== undefined) {
      obj.floodlightVariableDataType = floodlightVariableDataTypeEnum_FloodlightVariableDataTypeToJSON(
        message.floodlightVariableDataType,
      );
    }
    return obj;
  },

  create(
    base?: DeepPartial<ConversionCustomVariable_FloodlightConversionCustomVariableInfo>,
  ): ConversionCustomVariable_FloodlightConversionCustomVariableInfo {
    return ConversionCustomVariable_FloodlightConversionCustomVariableInfo.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ConversionCustomVariable_FloodlightConversionCustomVariableInfo>,
  ): ConversionCustomVariable_FloodlightConversionCustomVariableInfo {
    const message = createBaseConversionCustomVariable_FloodlightConversionCustomVariableInfo();
    message.floodlightVariableType = object.floodlightVariableType ?? undefined;
    message.floodlightVariableDataType = object.floodlightVariableDataType ?? undefined;
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