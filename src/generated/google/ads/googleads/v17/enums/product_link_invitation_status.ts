// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/product_link_invitation_status.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/**
 * Container for enum describing possible statuses of a product link
 * invitation.
 */
export interface ProductLinkInvitationStatusEnum {
}

/**
 * Describes the possible statuses for an invitation between a Google Ads
 * customer and another account.
 */
export enum ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** ACCEPTED - The invitation is accepted. */
  ACCEPTED = 2,
  /**
   * REQUESTED - An invitation has been sent to the other account. A user on the other
   * account may now accept the invitation by setting the status to ACCEPTED.
   */
  REQUESTED = 3,
  /**
   * PENDING_APPROVAL - This invitation has been sent by a user on the other account. It may be
   * accepted by a user on this account by setting the status to ACCEPTED.
   */
  PENDING_APPROVAL = 4,
  /** REVOKED - The invitation is revoked by the user who sent the invitation. */
  REVOKED = 5,
  /** REJECTED - The invitation has been rejected by the invitee. */
  REJECTED = 6,
  /**
   * EXPIRED - The invitation has timed out before being accepted by the
   * invitee.
   */
  EXPIRED = 7,
  UNRECOGNIZED = -1,
}

export function productLinkInvitationStatusEnum_ProductLinkInvitationStatusFromJSON(
  object: any,
): ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.UNKNOWN;
    case 2:
    case "ACCEPTED":
      return ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.ACCEPTED;
    case 3:
    case "REQUESTED":
      return ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.REQUESTED;
    case 4:
    case "PENDING_APPROVAL":
      return ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.PENDING_APPROVAL;
    case 5:
    case "REVOKED":
      return ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.REVOKED;
    case 6:
    case "REJECTED":
      return ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.REJECTED;
    case 7:
    case "EXPIRED":
      return ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.UNRECOGNIZED;
  }
}

export function productLinkInvitationStatusEnum_ProductLinkInvitationStatusToJSON(
  object: ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus,
): string {
  switch (object) {
    case ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.UNKNOWN:
      return "UNKNOWN";
    case ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.ACCEPTED:
      return "ACCEPTED";
    case ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.REQUESTED:
      return "REQUESTED";
    case ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.PENDING_APPROVAL:
      return "PENDING_APPROVAL";
    case ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.REVOKED:
      return "REVOKED";
    case ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.REJECTED:
      return "REJECTED";
    case ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.EXPIRED:
      return "EXPIRED";
    case ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseProductLinkInvitationStatusEnum(): ProductLinkInvitationStatusEnum {
  return {};
}

export const ProductLinkInvitationStatusEnum: MessageFns<ProductLinkInvitationStatusEnum> = {
  encode(_: ProductLinkInvitationStatusEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProductLinkInvitationStatusEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductLinkInvitationStatusEnum();
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

  fromJSON(_: any): ProductLinkInvitationStatusEnum {
    return {};
  },

  toJSON(_: ProductLinkInvitationStatusEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ProductLinkInvitationStatusEnum>): ProductLinkInvitationStatusEnum {
    return ProductLinkInvitationStatusEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ProductLinkInvitationStatusEnum>): ProductLinkInvitationStatusEnum {
    const message = createBaseProductLinkInvitationStatusEnum();
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