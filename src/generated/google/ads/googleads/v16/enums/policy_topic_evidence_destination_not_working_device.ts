// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/enums/policy_topic_evidence_destination_not_working_device.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v16.enums";

/**
 * Container for enum describing possible policy topic evidence destination not
 * working devices.
 */
export interface PolicyTopicEvidenceDestinationNotWorkingDeviceEnum {
}

/** The possible policy topic evidence destination not working devices. */
export enum PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice {
  /** UNSPECIFIED - No value has been specified. */
  UNSPECIFIED = 0,
  /**
   * UNKNOWN - The received value is not known in this version.
   *
   * This is a response-only value.
   */
  UNKNOWN = 1,
  /** DESKTOP - Landing page doesn't work on desktop device. */
  DESKTOP = 2,
  /** ANDROID - Landing page doesn't work on Android device. */
  ANDROID = 3,
  /** IOS - Landing page doesn't work on iOS device. */
  IOS = 4,
  UNRECOGNIZED = -1,
}

export function policyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDeviceFromJSON(
  object: any,
): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice
        .UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice.UNKNOWN;
    case 2:
    case "DESKTOP":
      return PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice.DESKTOP;
    case 3:
    case "ANDROID":
      return PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice.ANDROID;
    case 4:
    case "IOS":
      return PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice.IOS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice
        .UNRECOGNIZED;
  }
}

export function policyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDeviceToJSON(
  object: PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice,
): string {
  switch (object) {
    case PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice.UNSPECIFIED:
      return "UNSPECIFIED";
    case PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice.UNKNOWN:
      return "UNKNOWN";
    case PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice.DESKTOP:
      return "DESKTOP";
    case PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice.ANDROID:
      return "ANDROID";
    case PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice.IOS:
      return "IOS";
    case PolicyTopicEvidenceDestinationNotWorkingDeviceEnum_PolicyTopicEvidenceDestinationNotWorkingDevice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePolicyTopicEvidenceDestinationNotWorkingDeviceEnum(): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum {
  return {};
}

export const PolicyTopicEvidenceDestinationNotWorkingDeviceEnum: MessageFns<
  PolicyTopicEvidenceDestinationNotWorkingDeviceEnum
> = {
  encode(
    _: PolicyTopicEvidenceDestinationNotWorkingDeviceEnum,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyTopicEvidenceDestinationNotWorkingDeviceEnum();
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

  fromJSON(_: any): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum {
    return {};
  },

  toJSON(_: PolicyTopicEvidenceDestinationNotWorkingDeviceEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(
    base?: DeepPartial<PolicyTopicEvidenceDestinationNotWorkingDeviceEnum>,
  ): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum {
    return PolicyTopicEvidenceDestinationNotWorkingDeviceEnum.fromPartial(base ?? {});
  },
  fromPartial(
    _: DeepPartial<PolicyTopicEvidenceDestinationNotWorkingDeviceEnum>,
  ): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum {
    const message = createBasePolicyTopicEvidenceDestinationNotWorkingDeviceEnum();
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