// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/tracking_code_type.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Container for enum describing the type of the generated tag snippets for
 * tracking conversions.
 */
export interface TrackingCodeTypeEnum {
}

/** The type of the generated tag snippets for tracking conversions. */
export enum TrackingCodeTypeEnum_TrackingCodeType {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** WEBPAGE - The snippet that is fired as a result of a website page loading. */
  WEBPAGE = 2,
  /**
   * WEBPAGE_ONCLICK - The snippet contains a JavaScript function which fires the tag. This
   * function is typically called from an onClick handler added to a link or
   * button element on the page.
   */
  WEBPAGE_ONCLICK = 3,
  /**
   * CLICK_TO_CALL - For embedding on a mobile webpage. The snippet contains a JavaScript
   * function which fires the tag.
   */
  CLICK_TO_CALL = 4,
  /**
   * WEBSITE_CALL - The snippet that is used to replace the phone number on your website with
   * a Google forwarding number for call tracking purposes.
   */
  WEBSITE_CALL = 5,
  UNRECOGNIZED = -1,
}

export function trackingCodeTypeEnum_TrackingCodeTypeFromJSON(object: any): TrackingCodeTypeEnum_TrackingCodeType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return TrackingCodeTypeEnum_TrackingCodeType.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return TrackingCodeTypeEnum_TrackingCodeType.UNKNOWN;
    case 2:
    case "WEBPAGE":
      return TrackingCodeTypeEnum_TrackingCodeType.WEBPAGE;
    case 3:
    case "WEBPAGE_ONCLICK":
      return TrackingCodeTypeEnum_TrackingCodeType.WEBPAGE_ONCLICK;
    case 4:
    case "CLICK_TO_CALL":
      return TrackingCodeTypeEnum_TrackingCodeType.CLICK_TO_CALL;
    case 5:
    case "WEBSITE_CALL":
      return TrackingCodeTypeEnum_TrackingCodeType.WEBSITE_CALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TrackingCodeTypeEnum_TrackingCodeType.UNRECOGNIZED;
  }
}

export function trackingCodeTypeEnum_TrackingCodeTypeToJSON(object: TrackingCodeTypeEnum_TrackingCodeType): string {
  switch (object) {
    case TrackingCodeTypeEnum_TrackingCodeType.UNSPECIFIED:
      return "UNSPECIFIED";
    case TrackingCodeTypeEnum_TrackingCodeType.UNKNOWN:
      return "UNKNOWN";
    case TrackingCodeTypeEnum_TrackingCodeType.WEBPAGE:
      return "WEBPAGE";
    case TrackingCodeTypeEnum_TrackingCodeType.WEBPAGE_ONCLICK:
      return "WEBPAGE_ONCLICK";
    case TrackingCodeTypeEnum_TrackingCodeType.CLICK_TO_CALL:
      return "CLICK_TO_CALL";
    case TrackingCodeTypeEnum_TrackingCodeType.WEBSITE_CALL:
      return "WEBSITE_CALL";
    case TrackingCodeTypeEnum_TrackingCodeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTrackingCodeTypeEnum(): TrackingCodeTypeEnum {
  return {};
}

export const TrackingCodeTypeEnum: MessageFns<TrackingCodeTypeEnum> = {
  encode(_: TrackingCodeTypeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrackingCodeTypeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackingCodeTypeEnum();
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

  fromJSON(_: any): TrackingCodeTypeEnum {
    return {};
  },

  toJSON(_: TrackingCodeTypeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<TrackingCodeTypeEnum>): TrackingCodeTypeEnum {
    return TrackingCodeTypeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<TrackingCodeTypeEnum>): TrackingCodeTypeEnum {
    const message = createBaseTrackingCodeTypeEnum();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}