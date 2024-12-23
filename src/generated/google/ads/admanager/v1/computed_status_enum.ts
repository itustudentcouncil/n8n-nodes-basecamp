// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/admanager/v1/computed_status_enum.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.admanager.v1";

/**
 * Wrapper message for
 * [ComputedStatus][google.ads.admanager.v1.ComputedStatusEnum.ComputedStatus].
 */
export interface ComputedStatusEnum {
}

/**
 * Describes the computed LineItem status that is derived from the
 * current state of the LineItem.
 */
export enum ComputedStatusEnum_ComputedStatus {
  /** COMPUTED_STATUS_UNSPECIFIED - No value specified. */
  COMPUTED_STATUS_UNSPECIFIED = 0,
  /**
   * DELIVERY_EXTENDED - The LineItem has past its link LineItem#endDateTime with an auto
   * extension, but hasn't met its goal.
   */
  DELIVERY_EXTENDED = 1,
  /** DELIVERING - The LineItem has begun serving. */
  DELIVERING = 2,
  /** READY - The LineItem has been activated and is ready to serve. */
  READY = 3,
  /** PAUSED - The LineItem has been paused from serving. */
  PAUSED = 4,
  /**
   * INACTIVE - The LineItem is inactive. It is either caused by missing creatives or
   * the network disabling auto-activation.
   */
  INACTIVE = 5,
  /**
   * PAUSED_INVENTORY_RELEASED - The LineItem has been paused and its reserved inventory has been
   * released. The LineItem will not serve.
   */
  PAUSED_INVENTORY_RELEASED = 6,
  /** PENDING_APPROVAL - The LineItem has been submitted for approval. */
  PENDING_APPROVAL = 7,
  /** COMPLETED - The LineItem has completed its run. */
  COMPLETED = 8,
  /** DISAPPROVED - The LineItem has been disapproved and is not eligible to serve. */
  DISAPPROVED = 9,
  /** DRAFT - The LineItem is still being drafted. */
  DRAFT = 10,
  /**
   * CANCELED - The LineItem has been canceled and is no longer eligible to serve.
   * This is a legacy status imported from Google Ad Manager orders.
   */
  CANCELED = 11,
  UNRECOGNIZED = -1,
}

export function computedStatusEnum_ComputedStatusFromJSON(object: any): ComputedStatusEnum_ComputedStatus {
  switch (object) {
    case 0:
    case "COMPUTED_STATUS_UNSPECIFIED":
      return ComputedStatusEnum_ComputedStatus.COMPUTED_STATUS_UNSPECIFIED;
    case 1:
    case "DELIVERY_EXTENDED":
      return ComputedStatusEnum_ComputedStatus.DELIVERY_EXTENDED;
    case 2:
    case "DELIVERING":
      return ComputedStatusEnum_ComputedStatus.DELIVERING;
    case 3:
    case "READY":
      return ComputedStatusEnum_ComputedStatus.READY;
    case 4:
    case "PAUSED":
      return ComputedStatusEnum_ComputedStatus.PAUSED;
    case 5:
    case "INACTIVE":
      return ComputedStatusEnum_ComputedStatus.INACTIVE;
    case 6:
    case "PAUSED_INVENTORY_RELEASED":
      return ComputedStatusEnum_ComputedStatus.PAUSED_INVENTORY_RELEASED;
    case 7:
    case "PENDING_APPROVAL":
      return ComputedStatusEnum_ComputedStatus.PENDING_APPROVAL;
    case 8:
    case "COMPLETED":
      return ComputedStatusEnum_ComputedStatus.COMPLETED;
    case 9:
    case "DISAPPROVED":
      return ComputedStatusEnum_ComputedStatus.DISAPPROVED;
    case 10:
    case "DRAFT":
      return ComputedStatusEnum_ComputedStatus.DRAFT;
    case 11:
    case "CANCELED":
      return ComputedStatusEnum_ComputedStatus.CANCELED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ComputedStatusEnum_ComputedStatus.UNRECOGNIZED;
  }
}

export function computedStatusEnum_ComputedStatusToJSON(object: ComputedStatusEnum_ComputedStatus): string {
  switch (object) {
    case ComputedStatusEnum_ComputedStatus.COMPUTED_STATUS_UNSPECIFIED:
      return "COMPUTED_STATUS_UNSPECIFIED";
    case ComputedStatusEnum_ComputedStatus.DELIVERY_EXTENDED:
      return "DELIVERY_EXTENDED";
    case ComputedStatusEnum_ComputedStatus.DELIVERING:
      return "DELIVERING";
    case ComputedStatusEnum_ComputedStatus.READY:
      return "READY";
    case ComputedStatusEnum_ComputedStatus.PAUSED:
      return "PAUSED";
    case ComputedStatusEnum_ComputedStatus.INACTIVE:
      return "INACTIVE";
    case ComputedStatusEnum_ComputedStatus.PAUSED_INVENTORY_RELEASED:
      return "PAUSED_INVENTORY_RELEASED";
    case ComputedStatusEnum_ComputedStatus.PENDING_APPROVAL:
      return "PENDING_APPROVAL";
    case ComputedStatusEnum_ComputedStatus.COMPLETED:
      return "COMPLETED";
    case ComputedStatusEnum_ComputedStatus.DISAPPROVED:
      return "DISAPPROVED";
    case ComputedStatusEnum_ComputedStatus.DRAFT:
      return "DRAFT";
    case ComputedStatusEnum_ComputedStatus.CANCELED:
      return "CANCELED";
    case ComputedStatusEnum_ComputedStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseComputedStatusEnum(): ComputedStatusEnum {
  return {};
}

export const ComputedStatusEnum: MessageFns<ComputedStatusEnum> = {
  encode(_: ComputedStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ComputedStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComputedStatusEnum();
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

  fromJSON(_: any): ComputedStatusEnum {
    return {};
  },

  toJSON(_: ComputedStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ComputedStatusEnum>): ComputedStatusEnum {
    return ComputedStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ComputedStatusEnum>): ComputedStatusEnum {
    const message = createBaseComputedStatusEnum();
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
