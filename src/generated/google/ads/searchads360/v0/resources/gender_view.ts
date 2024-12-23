// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/resources/gender_view.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.searchads360.v0.resources";

/**
 * A gender view.
 * The gender_view resource reflects the effective serving state, rather than
 * what criteria were added. An ad group without gender criteria by default
 * shows to all genders, so all genders appear in gender_view with stats.
 */
export interface GenderView {
  /**
   * Output only. The resource name of the gender view.
   * Gender view resource names have the form:
   *
   * `customers/{customer_id}/genderViews/{ad_group_id}~{criterion_id}`
   */
  resourceName: string;
}

function createBaseGenderView(): GenderView {
  return { resourceName: "" };
}

export const GenderView: MessageFns<GenderView> = {
  encode(message: GenderView, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenderView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenderView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenderView {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: GenderView): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<GenderView>): GenderView {
    return GenderView.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenderView>): GenderView {
    const message = createBaseGenderView();
    message.resourceName = object.resourceName ?? "";
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
