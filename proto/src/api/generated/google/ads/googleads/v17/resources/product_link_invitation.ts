// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/product_link_invitation.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  LinkedProductTypeEnum_LinkedProductType,
  linkedProductTypeEnum_LinkedProductTypeFromJSON,
  linkedProductTypeEnum_LinkedProductTypeToJSON,
} from "../enums/linked_product_type.js";
import {
  ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus,
  productLinkInvitationStatusEnum_ProductLinkInvitationStatusFromJSON,
  productLinkInvitationStatusEnum_ProductLinkInvitationStatusToJSON,
} from "../enums/product_link_invitation_status.js";

export const protobufPackage = "google.ads.googleads.v17.resources";

/**
 * Represents an invitation for data sharing connection between a Google Ads
 * account and another account.
 */
export interface ProductLinkInvitation {
  /**
   * Immutable. The resource name of a product link invitation.
   * Product link invitation resource names have the form:
   *
   * `customers/{customer_id}/productLinkInvitations/{product_link_invitation_id}`
   */
  resourceName: string;
  /**
   * Output only. The ID of the product link invitation.
   * This field is read only.
   */
  productLinkInvitationId: Long;
  /**
   * Output only. The status of the product link invitation.
   * This field is read only.
   */
  status: ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus;
  /**
   * Output only. The type of the invited account.
   * This field is read only and can be used for filtering invitations with
   * {@code GoogleAdsService.SearchGoogleAdsRequest}.
   */
  type: LinkedProductTypeEnum_LinkedProductType;
  /** Output only. Hotel link invitation. */
  hotelCenter?:
    | HotelCenterLinkInvitationIdentifier
    | undefined;
  /** Output only. Merchant Center link invitation. */
  merchantCenter?:
    | MerchantCenterLinkInvitationIdentifier
    | undefined;
  /** Output only. Advertising Partner link invitation. */
  advertisingPartner?: AdvertisingPartnerLinkInvitationIdentifier | undefined;
}

/** The identifier for Hotel account. */
export interface HotelCenterLinkInvitationIdentifier {
  /**
   * Output only. The hotel center id of the hotel account.
   * This field is read only
   */
  hotelCenterId: Long;
}

/** The identifier for Merchant Center Account. */
export interface MerchantCenterLinkInvitationIdentifier {
  /**
   * Output only. The Merchant Center id of the Merchant account.
   * This field is read only
   */
  merchantCenterId: Long;
}

/** The identifier for the Advertising Partner Google Ads account. */
export interface AdvertisingPartnerLinkInvitationIdentifier {
  /**
   * Immutable. The resource name of the advertising partner Google Ads account.
   * This field is read only.
   */
  customer?: string | undefined;
}

function createBaseProductLinkInvitation(): ProductLinkInvitation {
  return {
    resourceName: "",
    productLinkInvitationId: Long.ZERO,
    status: 0,
    type: 0,
    hotelCenter: undefined,
    merchantCenter: undefined,
    advertisingPartner: undefined,
  };
}

export const ProductLinkInvitation: MessageFns<ProductLinkInvitation> = {
  encode(message: ProductLinkInvitation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (!message.productLinkInvitationId.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.productLinkInvitationId.toString());
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    if (message.hotelCenter !== undefined) {
      HotelCenterLinkInvitationIdentifier.encode(message.hotelCenter, writer.uint32(34).fork()).join();
    }
    if (message.merchantCenter !== undefined) {
      MerchantCenterLinkInvitationIdentifier.encode(message.merchantCenter, writer.uint32(42).fork()).join();
    }
    if (message.advertisingPartner !== undefined) {
      AdvertisingPartnerLinkInvitationIdentifier.encode(message.advertisingPartner, writer.uint32(58).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProductLinkInvitation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductLinkInvitation();
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

          message.productLinkInvitationId = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hotelCenter = HotelCenterLinkInvitationIdentifier.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.merchantCenter = MerchantCenterLinkInvitationIdentifier.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.advertisingPartner = AdvertisingPartnerLinkInvitationIdentifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductLinkInvitation {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      productLinkInvitationId: isSet(object.productLinkInvitationId)
        ? Long.fromValue(object.productLinkInvitationId)
        : Long.ZERO,
      status: isSet(object.status)
        ? productLinkInvitationStatusEnum_ProductLinkInvitationStatusFromJSON(object.status)
        : 0,
      type: isSet(object.type) ? linkedProductTypeEnum_LinkedProductTypeFromJSON(object.type) : 0,
      hotelCenter: isSet(object.hotelCenter)
        ? HotelCenterLinkInvitationIdentifier.fromJSON(object.hotelCenter)
        : undefined,
      merchantCenter: isSet(object.merchantCenter)
        ? MerchantCenterLinkInvitationIdentifier.fromJSON(object.merchantCenter)
        : undefined,
      advertisingPartner: isSet(object.advertisingPartner)
        ? AdvertisingPartnerLinkInvitationIdentifier.fromJSON(object.advertisingPartner)
        : undefined,
    };
  },

  toJSON(message: ProductLinkInvitation): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (!message.productLinkInvitationId.equals(Long.ZERO)) {
      obj.productLinkInvitationId = (message.productLinkInvitationId || Long.ZERO).toString();
    }
    if (message.status !== 0) {
      obj.status = productLinkInvitationStatusEnum_ProductLinkInvitationStatusToJSON(message.status);
    }
    if (message.type !== 0) {
      obj.type = linkedProductTypeEnum_LinkedProductTypeToJSON(message.type);
    }
    if (message.hotelCenter !== undefined) {
      obj.hotelCenter = HotelCenterLinkInvitationIdentifier.toJSON(message.hotelCenter);
    }
    if (message.merchantCenter !== undefined) {
      obj.merchantCenter = MerchantCenterLinkInvitationIdentifier.toJSON(message.merchantCenter);
    }
    if (message.advertisingPartner !== undefined) {
      obj.advertisingPartner = AdvertisingPartnerLinkInvitationIdentifier.toJSON(message.advertisingPartner);
    }
    return obj;
  },

  create(base?: DeepPartial<ProductLinkInvitation>): ProductLinkInvitation {
    return ProductLinkInvitation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProductLinkInvitation>): ProductLinkInvitation {
    const message = createBaseProductLinkInvitation();
    message.resourceName = object.resourceName ?? "";
    message.productLinkInvitationId =
      (object.productLinkInvitationId !== undefined && object.productLinkInvitationId !== null)
        ? Long.fromValue(object.productLinkInvitationId)
        : Long.ZERO;
    message.status = object.status ?? 0;
    message.type = object.type ?? 0;
    message.hotelCenter = (object.hotelCenter !== undefined && object.hotelCenter !== null)
      ? HotelCenterLinkInvitationIdentifier.fromPartial(object.hotelCenter)
      : undefined;
    message.merchantCenter = (object.merchantCenter !== undefined && object.merchantCenter !== null)
      ? MerchantCenterLinkInvitationIdentifier.fromPartial(object.merchantCenter)
      : undefined;
    message.advertisingPartner = (object.advertisingPartner !== undefined && object.advertisingPartner !== null)
      ? AdvertisingPartnerLinkInvitationIdentifier.fromPartial(object.advertisingPartner)
      : undefined;
    return message;
  },
};

function createBaseHotelCenterLinkInvitationIdentifier(): HotelCenterLinkInvitationIdentifier {
  return { hotelCenterId: Long.ZERO };
}

export const HotelCenterLinkInvitationIdentifier: MessageFns<HotelCenterLinkInvitationIdentifier> = {
  encode(message: HotelCenterLinkInvitationIdentifier, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.hotelCenterId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.hotelCenterId.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HotelCenterLinkInvitationIdentifier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHotelCenterLinkInvitationIdentifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hotelCenterId = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HotelCenterLinkInvitationIdentifier {
    return { hotelCenterId: isSet(object.hotelCenterId) ? Long.fromValue(object.hotelCenterId) : Long.ZERO };
  },

  toJSON(message: HotelCenterLinkInvitationIdentifier): unknown {
    const obj: any = {};
    if (!message.hotelCenterId.equals(Long.ZERO)) {
      obj.hotelCenterId = (message.hotelCenterId || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<HotelCenterLinkInvitationIdentifier>): HotelCenterLinkInvitationIdentifier {
    return HotelCenterLinkInvitationIdentifier.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HotelCenterLinkInvitationIdentifier>): HotelCenterLinkInvitationIdentifier {
    const message = createBaseHotelCenterLinkInvitationIdentifier();
    message.hotelCenterId = (object.hotelCenterId !== undefined && object.hotelCenterId !== null)
      ? Long.fromValue(object.hotelCenterId)
      : Long.ZERO;
    return message;
  },
};

function createBaseMerchantCenterLinkInvitationIdentifier(): MerchantCenterLinkInvitationIdentifier {
  return { merchantCenterId: Long.ZERO };
}

export const MerchantCenterLinkInvitationIdentifier: MessageFns<MerchantCenterLinkInvitationIdentifier> = {
  encode(message: MerchantCenterLinkInvitationIdentifier, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.merchantCenterId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.merchantCenterId.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MerchantCenterLinkInvitationIdentifier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerchantCenterLinkInvitationIdentifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.merchantCenterId = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MerchantCenterLinkInvitationIdentifier {
    return { merchantCenterId: isSet(object.merchantCenterId) ? Long.fromValue(object.merchantCenterId) : Long.ZERO };
  },

  toJSON(message: MerchantCenterLinkInvitationIdentifier): unknown {
    const obj: any = {};
    if (!message.merchantCenterId.equals(Long.ZERO)) {
      obj.merchantCenterId = (message.merchantCenterId || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<MerchantCenterLinkInvitationIdentifier>): MerchantCenterLinkInvitationIdentifier {
    return MerchantCenterLinkInvitationIdentifier.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MerchantCenterLinkInvitationIdentifier>): MerchantCenterLinkInvitationIdentifier {
    const message = createBaseMerchantCenterLinkInvitationIdentifier();
    message.merchantCenterId = (object.merchantCenterId !== undefined && object.merchantCenterId !== null)
      ? Long.fromValue(object.merchantCenterId)
      : Long.ZERO;
    return message;
  },
};

function createBaseAdvertisingPartnerLinkInvitationIdentifier(): AdvertisingPartnerLinkInvitationIdentifier {
  return { customer: undefined };
}

export const AdvertisingPartnerLinkInvitationIdentifier: MessageFns<AdvertisingPartnerLinkInvitationIdentifier> = {
  encode(message: AdvertisingPartnerLinkInvitationIdentifier, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customer !== undefined) {
      writer.uint32(10).string(message.customer);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdvertisingPartnerLinkInvitationIdentifier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdvertisingPartnerLinkInvitationIdentifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AdvertisingPartnerLinkInvitationIdentifier {
    return { customer: isSet(object.customer) ? globalThis.String(object.customer) : undefined };
  },

  toJSON(message: AdvertisingPartnerLinkInvitationIdentifier): unknown {
    const obj: any = {};
    if (message.customer !== undefined) {
      obj.customer = message.customer;
    }
    return obj;
  },

  create(base?: DeepPartial<AdvertisingPartnerLinkInvitationIdentifier>): AdvertisingPartnerLinkInvitationIdentifier {
    return AdvertisingPartnerLinkInvitationIdentifier.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<AdvertisingPartnerLinkInvitationIdentifier>,
  ): AdvertisingPartnerLinkInvitationIdentifier {
    const message = createBaseAdvertisingPartnerLinkInvitationIdentifier();
    message.customer = object.customer ?? undefined;
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