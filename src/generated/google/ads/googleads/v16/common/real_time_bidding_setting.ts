// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/common/real_time_bidding_setting.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.common";

/**
 * Settings for Real-Time Bidding, a feature only available for campaigns
 * targeting the Ad Exchange network.
 */
export interface RealTimeBiddingSetting {
  /** Whether the campaign is opted in to real-time bidding. */
  optIn?: boolean | undefined;
}

function createBaseRealTimeBiddingSetting(): RealTimeBiddingSetting {
  return { optIn: undefined };
}

export const RealTimeBiddingSetting: MessageFns<RealTimeBiddingSetting> = {
  encode(message: RealTimeBiddingSetting, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.optIn !== undefined) {
      writer.uint32(16).bool(message.optIn);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RealTimeBiddingSetting {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRealTimeBiddingSetting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.optIn = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RealTimeBiddingSetting {
    return { optIn: isSet(object.optIn) ? globalThis.Boolean(object.optIn) : undefined };
  },

  toJSON(message: RealTimeBiddingSetting): unknown {
    const obj: any = {};
    if (message.optIn !== undefined) {
      obj.optIn = message.optIn;
    }
    return obj;
  },

  create(base?: DeepPartial<RealTimeBiddingSetting>): RealTimeBiddingSetting {
    return RealTimeBiddingSetting.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RealTimeBiddingSetting>): RealTimeBiddingSetting {
    const message = createBaseRealTimeBiddingSetting();
    message.optIn = object.optIn ?? undefined;
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
