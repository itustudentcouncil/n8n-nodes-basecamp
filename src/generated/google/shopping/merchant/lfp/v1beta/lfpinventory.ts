// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/shopping/merchant/lfp/v1beta/lfpinventory.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Timestamp } from "../../../../protobuf/timestamp.js";
import { Price } from "../../../type/types.js";

export const protobufPackage = "google.shopping.merchant.lfp.v1beta";

/** Local Inventory for the merchant. */
export interface LfpInventory {
  /**
   * Output only. Identifier. The name for the `LfpInventory` resource.
   * Format:
   * `accounts/{account}/lfpInventories/{target_merchant}~{store_code}~{offer}`
   */
  name: string;
  /**
   * Required. The Merchant Center ID of the merchant to submit the inventory
   * for.
   */
  targetAccount: Long;
  /**
   * Required. The identifier of the merchant's store. Either the store code
   * inserted through `InsertLfpStore` or the store code in the Business
   * Profile.
   */
  storeCode: string;
  /**
   * Required. Immutable. A unique identifier for the product. If both
   * inventories and sales are submitted for a merchant, this id should match
   * for the same product.
   *
   * **Note**: if the merchant sells the same product new and used, they should
   * have different IDs.
   */
  offerId: string;
  /**
   * Required. The [CLDR territory
   * code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml)
   * for the country where the product is sold.
   */
  regionCode: string;
  /** Required. The two-letter ISO 639-1 language code for the item. */
  contentLanguage: string;
  /** Optional. The Global Trade Item Number of the product. */
  gtin?:
    | string
    | undefined;
  /** Optional. The current price of the product. */
  price:
    | Price
    | undefined;
  /**
   * Required. Availability of the product at this store.
   * For accepted attribute values, see the [local product inventory data
   * specification](https://support.google.com/merchants/answer/3061342)
   */
  availability: string;
  /**
   * Optional. Quantity of the product available at this store. Must be greater
   * than or equal to zero.
   */
  quantity?:
    | Long
    | undefined;
  /**
   * Optional. The time when the inventory is collected. If not set, it will be
   * set to the time when the inventory is submitted.
   */
  collectionTime:
    | Date
    | undefined;
  /**
   * Optional. Supported pickup method for this offer. Unless the value is "not
   * supported", this field must be submitted together with `pickupSla`. For
   * accepted attribute values, see the [local product inventory data
   * specification](https://support.google.com/merchants/answer/3061342).
   */
  pickupMethod?:
    | string
    | undefined;
  /**
   * Optional. Expected date that an order will be ready for pickup relative to
   * the order date. Must be submitted together with `pickupMethod`. For
   * accepted attribute values, see the [local product inventory data
   * specification](https://support.google.com/merchants/answer/3061342).
   */
  pickupSla?:
    | string
    | undefined;
  /**
   * Optional. The [feed
   * label](https://developers.google.com/shopping-content/guides/products/feed-labels)
   * for the product. If this is not set, it will default to `regionCode`.
   */
  feedLabel?: string | undefined;
}

/** Request message for the `InsertLfpInventory` method. */
export interface InsertLfpInventoryRequest {
  /**
   * Required. The LFP provider account.
   * Format: `accounts/{account}`
   */
  parent: string;
  /** Required. The inventory to insert. */
  lfpInventory: LfpInventory | undefined;
}

function createBaseLfpInventory(): LfpInventory {
  return {
    name: "",
    targetAccount: Long.ZERO,
    storeCode: "",
    offerId: "",
    regionCode: "",
    contentLanguage: "",
    gtin: undefined,
    price: undefined,
    availability: "",
    quantity: undefined,
    collectionTime: undefined,
    pickupMethod: undefined,
    pickupSla: undefined,
    feedLabel: undefined,
  };
}

export const LfpInventory: MessageFns<LfpInventory> = {
  encode(message: LfpInventory, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.targetAccount.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.targetAccount.toString());
    }
    if (message.storeCode !== "") {
      writer.uint32(26).string(message.storeCode);
    }
    if (message.offerId !== "") {
      writer.uint32(34).string(message.offerId);
    }
    if (message.regionCode !== "") {
      writer.uint32(42).string(message.regionCode);
    }
    if (message.contentLanguage !== "") {
      writer.uint32(50).string(message.contentLanguage);
    }
    if (message.gtin !== undefined) {
      writer.uint32(58).string(message.gtin);
    }
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(66).fork()).join();
    }
    if (message.availability !== "") {
      writer.uint32(74).string(message.availability);
    }
    if (message.quantity !== undefined) {
      writer.uint32(80).int64(message.quantity.toString());
    }
    if (message.collectionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.collectionTime), writer.uint32(90).fork()).join();
    }
    if (message.pickupMethod !== undefined) {
      writer.uint32(98).string(message.pickupMethod);
    }
    if (message.pickupSla !== undefined) {
      writer.uint32(106).string(message.pickupSla);
    }
    if (message.feedLabel !== undefined) {
      writer.uint32(114).string(message.feedLabel);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LfpInventory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLfpInventory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.targetAccount = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.storeCode = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.offerId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.regionCode = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.contentLanguage = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.gtin = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.price = Price.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.availability = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.quantity = Long.fromString(reader.int64().toString());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.collectionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.pickupMethod = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.pickupSla = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.feedLabel = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LfpInventory {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      targetAccount: isSet(object.targetAccount) ? Long.fromValue(object.targetAccount) : Long.ZERO,
      storeCode: isSet(object.storeCode) ? globalThis.String(object.storeCode) : "",
      offerId: isSet(object.offerId) ? globalThis.String(object.offerId) : "",
      regionCode: isSet(object.regionCode) ? globalThis.String(object.regionCode) : "",
      contentLanguage: isSet(object.contentLanguage) ? globalThis.String(object.contentLanguage) : "",
      gtin: isSet(object.gtin) ? globalThis.String(object.gtin) : undefined,
      price: isSet(object.price) ? Price.fromJSON(object.price) : undefined,
      availability: isSet(object.availability) ? globalThis.String(object.availability) : "",
      quantity: isSet(object.quantity) ? Long.fromValue(object.quantity) : undefined,
      collectionTime: isSet(object.collectionTime) ? fromJsonTimestamp(object.collectionTime) : undefined,
      pickupMethod: isSet(object.pickupMethod) ? globalThis.String(object.pickupMethod) : undefined,
      pickupSla: isSet(object.pickupSla) ? globalThis.String(object.pickupSla) : undefined,
      feedLabel: isSet(object.feedLabel) ? globalThis.String(object.feedLabel) : undefined,
    };
  },

  toJSON(message: LfpInventory): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (!message.targetAccount.equals(Long.ZERO)) {
      obj.targetAccount = (message.targetAccount || Long.ZERO).toString();
    }
    if (message.storeCode !== "") {
      obj.storeCode = message.storeCode;
    }
    if (message.offerId !== "") {
      obj.offerId = message.offerId;
    }
    if (message.regionCode !== "") {
      obj.regionCode = message.regionCode;
    }
    if (message.contentLanguage !== "") {
      obj.contentLanguage = message.contentLanguage;
    }
    if (message.gtin !== undefined) {
      obj.gtin = message.gtin;
    }
    if (message.price !== undefined) {
      obj.price = Price.toJSON(message.price);
    }
    if (message.availability !== "") {
      obj.availability = message.availability;
    }
    if (message.quantity !== undefined) {
      obj.quantity = (message.quantity || Long.ZERO).toString();
    }
    if (message.collectionTime !== undefined) {
      obj.collectionTime = message.collectionTime.toISOString();
    }
    if (message.pickupMethod !== undefined) {
      obj.pickupMethod = message.pickupMethod;
    }
    if (message.pickupSla !== undefined) {
      obj.pickupSla = message.pickupSla;
    }
    if (message.feedLabel !== undefined) {
      obj.feedLabel = message.feedLabel;
    }
    return obj;
  },

  create(base?: DeepPartial<LfpInventory>): LfpInventory {
    return LfpInventory.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LfpInventory>): LfpInventory {
    const message = createBaseLfpInventory();
    message.name = object.name ?? "";
    message.targetAccount = (object.targetAccount !== undefined && object.targetAccount !== null)
      ? Long.fromValue(object.targetAccount)
      : Long.ZERO;
    message.storeCode = object.storeCode ?? "";
    message.offerId = object.offerId ?? "";
    message.regionCode = object.regionCode ?? "";
    message.contentLanguage = object.contentLanguage ?? "";
    message.gtin = object.gtin ?? undefined;
    message.price = (object.price !== undefined && object.price !== null) ? Price.fromPartial(object.price) : undefined;
    message.availability = object.availability ?? "";
    message.quantity = (object.quantity !== undefined && object.quantity !== null)
      ? Long.fromValue(object.quantity)
      : undefined;
    message.collectionTime = object.collectionTime ?? undefined;
    message.pickupMethod = object.pickupMethod ?? undefined;
    message.pickupSla = object.pickupSla ?? undefined;
    message.feedLabel = object.feedLabel ?? undefined;
    return message;
  },
};

function createBaseInsertLfpInventoryRequest(): InsertLfpInventoryRequest {
  return { parent: "", lfpInventory: undefined };
}

export const InsertLfpInventoryRequest: MessageFns<InsertLfpInventoryRequest> = {
  encode(message: InsertLfpInventoryRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.lfpInventory !== undefined) {
      LfpInventory.encode(message.lfpInventory, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InsertLfpInventoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertLfpInventoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lfpInventory = LfpInventory.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InsertLfpInventoryRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      lfpInventory: isSet(object.lfpInventory) ? LfpInventory.fromJSON(object.lfpInventory) : undefined,
    };
  },

  toJSON(message: InsertLfpInventoryRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.lfpInventory !== undefined) {
      obj.lfpInventory = LfpInventory.toJSON(message.lfpInventory);
    }
    return obj;
  },

  create(base?: DeepPartial<InsertLfpInventoryRequest>): InsertLfpInventoryRequest {
    return InsertLfpInventoryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InsertLfpInventoryRequest>): InsertLfpInventoryRequest {
    const message = createBaseInsertLfpInventoryRequest();
    message.parent = object.parent ?? "";
    message.lfpInventory = (object.lfpInventory !== undefined && object.lfpInventory !== null)
      ? LfpInventory.fromPartial(object.lfpInventory)
      : undefined;
    return message;
  },
};

/**
 * Service for a [LFP
 * partner](https://support.google.com/merchants/answer/7676652) to submit local
 * inventories for a merchant.
 */
export type LfpInventoryServiceDefinition = typeof LfpInventoryServiceDefinition;
export const LfpInventoryServiceDefinition = {
  name: "LfpInventoryService",
  fullName: "google.shopping.merchant.lfp.v1beta.LfpInventoryService",
  methods: {
    /**
     * Inserts a `LfpInventory` resource for the given target merchant account. If
     * the resource already exists, it will be replaced. The inventory
     * automatically expires after 30 days.
     */
    insertLfpInventory: {
      name: "InsertLfpInventory",
      requestType: InsertLfpInventoryRequest,
      requestStream: false,
      responseType: LfpInventory,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              70,
              58,
              13,
              108,
              102,
              112,
              95,
              105,
              110,
              118,
              101,
              110,
              116,
              111,
              114,
              121,
              34,
              53,
              47,
              108,
              102,
              112,
              47,
              118,
              49,
              98,
              101,
              116,
              97,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              97,
              99,
              99,
              111,
              117,
              110,
              116,
              115,
              47,
              42,
              125,
              47,
              108,
              102,
              112,
              73,
              110,
              118,
              101,
              110,
              116,
              111,
              114,
              105,
              101,
              115,
              58,
              105,
              110,
              115,
              101,
              114,
              116,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface LfpInventoryServiceImplementation<CallContextExt = {}> {
  /**
   * Inserts a `LfpInventory` resource for the given target merchant account. If
   * the resource already exists, it will be replaced. The inventory
   * automatically expires after 30 days.
   */
  insertLfpInventory(
    request: InsertLfpInventoryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<LfpInventory>>;
}

export interface LfpInventoryServiceClient<CallOptionsExt = {}> {
  /**
   * Inserts a `LfpInventory` resource for the given target merchant account. If
   * the resource already exists, it will be replaced. The inventory
   * automatically expires after 30 days.
   */
  insertLfpInventory(
    request: DeepPartial<InsertLfpInventoryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<LfpInventory>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

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