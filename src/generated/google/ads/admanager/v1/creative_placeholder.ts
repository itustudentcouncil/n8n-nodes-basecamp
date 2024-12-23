// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/admanager/v1/creative_placeholder.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { AppliedLabel } from "./applied_label.js";
import { Size } from "./size.js";

export const protobufPackage = "google.ads.admanager.v1";

/**
 * Describes a slot that a creative is expected to fill. This is used in
 * forecasting and to validate that the correct creatives are associated with
 * the line item.
 */
export interface CreativePlaceholder {
  /** Required. The size that the creative is expected to have. */
  size:
    | Size
    | undefined;
  /**
   * The companions that the creative is expected to have. This attribute can
   * only be set if the line item it belongs to has an
   * [EnvironmentType][google.ads.admanager.v1.EnvironmentTypeEnum.EnvironmentType]
   * of VIDEO_PLAYER or [roadblocking_type][LineItem.roadblocking_type] of
   * CREATIVE_SET.
   */
  companionSizes: Size[];
  /**
   * Expected number of creatives that will be uploaded corresponding to this
   * creative placeholder.  This estimate is used to improve the accuracy of
   * forecasting; for example, if label frequency capping limits the number of
   * times a creative may be served.
   */
  expectedCreativeCount: number;
  /** Set of labels applied directly to this CreativePlaceholder. */
  appliedLabels: AppliedLabel[];
  /**
   * Indicates if the expected creative of this placeholder has an AMP only
   * variant. This is used to improve the accuracy of forecasting and has no
   * effect on serving.
   */
  ampOnly: boolean;
  /**
   * The display name of the creative targeting that this CreativePlaceholder
   * represents.
   */
  creativeTargetingDisplayName: string;
}

function createBaseCreativePlaceholder(): CreativePlaceholder {
  return {
    size: undefined,
    companionSizes: [],
    expectedCreativeCount: 0,
    appliedLabels: [],
    ampOnly: false,
    creativeTargetingDisplayName: "",
  };
}

export const CreativePlaceholder: MessageFns<CreativePlaceholder> = {
  encode(message: CreativePlaceholder, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.size !== undefined) {
      Size.encode(message.size, writer.uint32(10).fork()).join();
    }
    for (const v of message.companionSizes) {
      Size.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.expectedCreativeCount !== 0) {
      writer.uint32(24).int32(message.expectedCreativeCount);
    }
    for (const v of message.appliedLabels) {
      AppliedLabel.encode(v!, writer.uint32(34).fork()).join();
    }
    if (message.ampOnly !== false) {
      writer.uint32(40).bool(message.ampOnly);
    }
    if (message.creativeTargetingDisplayName !== "") {
      writer.uint32(50).string(message.creativeTargetingDisplayName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreativePlaceholder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreativePlaceholder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.size = Size.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.companionSizes.push(Size.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.expectedCreativeCount = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.appliedLabels.push(AppliedLabel.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.ampOnly = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.creativeTargetingDisplayName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreativePlaceholder {
    return {
      size: isSet(object.size) ? Size.fromJSON(object.size) : undefined,
      companionSizes: globalThis.Array.isArray(object?.companionSizes)
        ? object.companionSizes.map((e: any) => Size.fromJSON(e))
        : [],
      expectedCreativeCount: isSet(object.expectedCreativeCount) ? globalThis.Number(object.expectedCreativeCount) : 0,
      appliedLabels: globalThis.Array.isArray(object?.appliedLabels)
        ? object.appliedLabels.map((e: any) => AppliedLabel.fromJSON(e))
        : [],
      ampOnly: isSet(object.ampOnly) ? globalThis.Boolean(object.ampOnly) : false,
      creativeTargetingDisplayName: isSet(object.creativeTargetingDisplayName)
        ? globalThis.String(object.creativeTargetingDisplayName)
        : "",
    };
  },

  toJSON(message: CreativePlaceholder): unknown {
    const obj: any = {};
    if (message.size !== undefined) {
      obj.size = Size.toJSON(message.size);
    }
    if (message.companionSizes?.length) {
      obj.companionSizes = message.companionSizes.map((e) => Size.toJSON(e));
    }
    if (message.expectedCreativeCount !== 0) {
      obj.expectedCreativeCount = Math.round(message.expectedCreativeCount);
    }
    if (message.appliedLabels?.length) {
      obj.appliedLabels = message.appliedLabels.map((e) => AppliedLabel.toJSON(e));
    }
    if (message.ampOnly !== false) {
      obj.ampOnly = message.ampOnly;
    }
    if (message.creativeTargetingDisplayName !== "") {
      obj.creativeTargetingDisplayName = message.creativeTargetingDisplayName;
    }
    return obj;
  },

  create(base?: DeepPartial<CreativePlaceholder>): CreativePlaceholder {
    return CreativePlaceholder.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreativePlaceholder>): CreativePlaceholder {
    const message = createBaseCreativePlaceholder();
    message.size = (object.size !== undefined && object.size !== null) ? Size.fromPartial(object.size) : undefined;
    message.companionSizes = object.companionSizes?.map((e) => Size.fromPartial(e)) || [];
    message.expectedCreativeCount = object.expectedCreativeCount ?? 0;
    message.appliedLabels = object.appliedLabels?.map((e) => AppliedLabel.fromPartial(e)) || [];
    message.ampOnly = object.ampOnly ?? false;
    message.creativeTargetingDisplayName = object.creativeTargetingDisplayName ?? "";
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
