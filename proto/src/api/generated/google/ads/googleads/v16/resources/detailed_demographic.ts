// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/detailed_demographic.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CriterionCategoryAvailability } from "../common/criterion_category_availability.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

/**
 * A detailed demographic: a particular interest-based vertical to be targeted
 * to reach users based on long-term life facts.
 */
export interface DetailedDemographic {
  /**
   * Output only. The resource name of the detailed demographic.
   * Detailed demographic resource names have the form:
   *
   * `customers/{customer_id}/detailedDemographics/{detailed_demographic_id}`
   */
  resourceName: string;
  /** Output only. The ID of the detailed demographic. */
  id: Long;
  /**
   * Output only. The name of the detailed demographic. For example,"Highest
   * Level of Educational Attainment"
   */
  name: string;
  /** Output only. The parent of the detailed_demographic. */
  parent: string;
  /**
   * Output only. True if the detailed demographic is launched to all channels
   * and locales.
   */
  launchedToAll: boolean;
  /** Output only. Availability information of the detailed demographic. */
  availabilities: CriterionCategoryAvailability[];
}

function createBaseDetailedDemographic(): DetailedDemographic {
  return { resourceName: "", id: Long.ZERO, name: "", parent: "", launchedToAll: false, availabilities: [] };
}

export const DetailedDemographic: MessageFns<DetailedDemographic> = {
  encode(message: DetailedDemographic, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (!message.id.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.id.toString());
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.parent !== "") {
      writer.uint32(34).string(message.parent);
    }
    if (message.launchedToAll !== false) {
      writer.uint32(40).bool(message.launchedToAll);
    }
    for (const v of message.availabilities) {
      CriterionCategoryAvailability.encode(v!, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DetailedDemographic {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetailedDemographic();
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

          message.parent = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.launchedToAll = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.availabilities.push(CriterionCategoryAvailability.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DetailedDemographic {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      launchedToAll: isSet(object.launchedToAll) ? globalThis.Boolean(object.launchedToAll) : false,
      availabilities: globalThis.Array.isArray(object?.availabilities)
        ? object.availabilities.map((e: any) => CriterionCategoryAvailability.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DetailedDemographic): unknown {
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
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.launchedToAll !== false) {
      obj.launchedToAll = message.launchedToAll;
    }
    if (message.availabilities?.length) {
      obj.availabilities = message.availabilities.map((e) => CriterionCategoryAvailability.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DetailedDemographic>): DetailedDemographic {
    return DetailedDemographic.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DetailedDemographic>): DetailedDemographic {
    const message = createBaseDetailedDemographic();
    message.resourceName = object.resourceName ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    message.name = object.name ?? "";
    message.parent = object.parent ?? "";
    message.launchedToAll = object.launchedToAll ?? false;
    message.availabilities = object.availabilities?.map((e) => CriterionCategoryAvailability.fromPartial(e)) || [];
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