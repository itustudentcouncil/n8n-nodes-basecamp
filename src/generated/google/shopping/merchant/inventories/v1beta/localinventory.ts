// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/shopping/merchant/inventories/v1beta/localinventory.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Empty } from "../../../../protobuf/empty.js";
import { Interval } from "../../../../type/interval.js";
import { CustomAttribute, Price } from "../../../type/types.js";

export const protobufPackage = "google.shopping.merchant.inventories.v1beta";

/**
 * Local inventory information for the product. Represents in-store information
 * for a specific product at the store specified by
 * [`storeCode`][google.shopping.merchant.inventories.v1beta.LocalInventory.store_code].
 * For a list of all accepted attribute values, see the [local product inventory
 * data specification](https://support.google.com/merchants/answer/3061342).
 */
export interface LocalInventory {
  /**
   * Output only. The name of the `LocalInventory` resource.
   * Format:
   * `accounts/{account}/products/{product}/localInventories/{store_code}`
   */
  name: string;
  /**
   * Output only. The account that owns the product. This field will be ignored
   * if set by the client.
   */
  account: Long;
  /**
   * Required. Immutable. Store code (the store ID from your Business Profile)
   * of the physical store the product is sold in. See the [Local product
   * inventory data
   * specification](https://support.google.com/merchants/answer/3061342) for
   * more information.
   */
  storeCode: string;
  /** Price of the product at this store. */
  price:
    | Price
    | undefined;
  /**
   * Sale price of the product at this store. Mandatory if
   * [`salePriceEffectiveDate`][google.shopping.merchant.inventories.v1beta.LocalInventory.sale_price_effective_date]
   * is defined.
   */
  salePrice:
    | Price
    | undefined;
  /**
   * The `TimePeriod` of the
   * sale at this store.
   */
  salePriceEffectiveDate:
    | Interval
    | undefined;
  /**
   * Availability of the product at this store.
   * For accepted attribute values, see the [local product inventory data
   * specification](https://support.google.com/merchants/answer/3061342)
   */
  availability?:
    | string
    | undefined;
  /**
   * Quantity of the product available at this store. Must be greater than or
   * equal to zero.
   */
  quantity?:
    | Long
    | undefined;
  /**
   * Supported pickup method for this product. Unless the value is `"not
   * supported"`, this field must be submitted together with
   * `pickupSla`.
   * For accepted attribute values, see the [local product inventory data
   * specification](https://support.google.com/merchants/answer/3061342)
   */
  pickupMethod?:
    | string
    | undefined;
  /**
   * Relative time period from the order date for an order for this product,
   * from this store, to be ready for pickup. Must be submitted with
   * `pickupMethod`.
   * For accepted attribute values, see the [local product inventory data
   * specification](https://support.google.com/merchants/answer/3061342)
   */
  pickupSla?:
    | string
    | undefined;
  /** Location of the product inside the store. Maximum length is 20 bytes. */
  instoreProductLocation?:
    | string
    | undefined;
  /**
   * A list of custom (merchant-provided) attributes. You can also use
   * `CustomAttribute` to submit any attribute of the data specification in its
   * generic form.
   */
  customAttributes: CustomAttribute[];
}

/** Request message for the `ListLocalInventories` method. */
export interface ListLocalInventoriesRequest {
  /**
   * Required. The `name` of the parent product to list local inventories for.
   * Format:
   * `accounts/{account}/products/{product}`
   */
  parent: string;
  /**
   * The maximum number of `LocalInventory` resources for the given
   * product to return. The service returns fewer than this value if the number
   * of inventories for the given product is less that than the `pageSize`. The
   * default value is 25000. The maximum value is 25000; If a value higher than
   * the maximum is specified, then the `pageSize` will default to the maximum
   */
  pageSize: number;
  /**
   * A page token, received from a previous `ListLocalInventories` call.
   * Provide the page token to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListLocalInventories`
   * must match the call that provided the page token. The token returned as
   * [nextPageToken][google.shopping.merchant.inventories.v1beta.ListLocalInventoriesResponse.next_page_token]
   * in the response to the previous request.
   */
  pageToken: string;
}

/** Response message for the `ListLocalInventories` method. */
export interface ListLocalInventoriesResponse {
  /**
   * The `LocalInventory` resources for the given product from the specified
   * account.
   */
  localInventories: LocalInventory[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

/** Request message for the `InsertLocalInventory` method. */
export interface InsertLocalInventoryRequest {
  /**
   * Required. The account and product where this inventory will be inserted.
   * Format: `accounts/{account}/products/{product}`
   */
  parent: string;
  /**
   * Required. Local inventory information of the product. If the product
   * already has a `LocalInventory` resource for the same `storeCode`, full
   * replacement of the `LocalInventory` resource is performed.
   */
  localInventory: LocalInventory | undefined;
}

/** Request message for the `DeleteLocalInventory` method. */
export interface DeleteLocalInventoryRequest {
  /**
   * Required. The name of the local inventory for the given product to delete.
   * Format:
   * `accounts/{account}/products/{product}/localInventories/{store_code}`
   */
  name: string;
}

function createBaseLocalInventory(): LocalInventory {
  return {
    name: "",
    account: Long.ZERO,
    storeCode: "",
    price: undefined,
    salePrice: undefined,
    salePriceEffectiveDate: undefined,
    availability: undefined,
    quantity: undefined,
    pickupMethod: undefined,
    pickupSla: undefined,
    instoreProductLocation: undefined,
    customAttributes: [],
  };
}

export const LocalInventory: MessageFns<LocalInventory> = {
  encode(message: LocalInventory, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.account.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.account.toString());
    }
    if (message.storeCode !== "") {
      writer.uint32(26).string(message.storeCode);
    }
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(34).fork()).join();
    }
    if (message.salePrice !== undefined) {
      Price.encode(message.salePrice, writer.uint32(42).fork()).join();
    }
    if (message.salePriceEffectiveDate !== undefined) {
      Interval.encode(message.salePriceEffectiveDate, writer.uint32(50).fork()).join();
    }
    if (message.availability !== undefined) {
      writer.uint32(58).string(message.availability);
    }
    if (message.quantity !== undefined) {
      writer.uint32(64).int64(message.quantity.toString());
    }
    if (message.pickupMethod !== undefined) {
      writer.uint32(74).string(message.pickupMethod);
    }
    if (message.pickupSla !== undefined) {
      writer.uint32(82).string(message.pickupSla);
    }
    if (message.instoreProductLocation !== undefined) {
      writer.uint32(90).string(message.instoreProductLocation);
    }
    for (const v of message.customAttributes) {
      CustomAttribute.encode(v!, writer.uint32(98).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LocalInventory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalInventory();
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

          message.account = Long.fromString(reader.int64().toString());
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

          message.price = Price.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.salePrice = Price.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.salePriceEffectiveDate = Interval.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.availability = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.quantity = Long.fromString(reader.int64().toString());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.pickupMethod = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.pickupSla = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.instoreProductLocation = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.customAttributes.push(CustomAttribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocalInventory {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      account: isSet(object.account) ? Long.fromValue(object.account) : Long.ZERO,
      storeCode: isSet(object.storeCode) ? globalThis.String(object.storeCode) : "",
      price: isSet(object.price) ? Price.fromJSON(object.price) : undefined,
      salePrice: isSet(object.salePrice) ? Price.fromJSON(object.salePrice) : undefined,
      salePriceEffectiveDate: isSet(object.salePriceEffectiveDate)
        ? Interval.fromJSON(object.salePriceEffectiveDate)
        : undefined,
      availability: isSet(object.availability) ? globalThis.String(object.availability) : undefined,
      quantity: isSet(object.quantity) ? Long.fromValue(object.quantity) : undefined,
      pickupMethod: isSet(object.pickupMethod) ? globalThis.String(object.pickupMethod) : undefined,
      pickupSla: isSet(object.pickupSla) ? globalThis.String(object.pickupSla) : undefined,
      instoreProductLocation: isSet(object.instoreProductLocation)
        ? globalThis.String(object.instoreProductLocation)
        : undefined,
      customAttributes: globalThis.Array.isArray(object?.customAttributes)
        ? object.customAttributes.map((e: any) => CustomAttribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LocalInventory): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (!message.account.equals(Long.ZERO)) {
      obj.account = (message.account || Long.ZERO).toString();
    }
    if (message.storeCode !== "") {
      obj.storeCode = message.storeCode;
    }
    if (message.price !== undefined) {
      obj.price = Price.toJSON(message.price);
    }
    if (message.salePrice !== undefined) {
      obj.salePrice = Price.toJSON(message.salePrice);
    }
    if (message.salePriceEffectiveDate !== undefined) {
      obj.salePriceEffectiveDate = Interval.toJSON(message.salePriceEffectiveDate);
    }
    if (message.availability !== undefined) {
      obj.availability = message.availability;
    }
    if (message.quantity !== undefined) {
      obj.quantity = (message.quantity || Long.ZERO).toString();
    }
    if (message.pickupMethod !== undefined) {
      obj.pickupMethod = message.pickupMethod;
    }
    if (message.pickupSla !== undefined) {
      obj.pickupSla = message.pickupSla;
    }
    if (message.instoreProductLocation !== undefined) {
      obj.instoreProductLocation = message.instoreProductLocation;
    }
    if (message.customAttributes?.length) {
      obj.customAttributes = message.customAttributes.map((e) => CustomAttribute.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<LocalInventory>): LocalInventory {
    return LocalInventory.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LocalInventory>): LocalInventory {
    const message = createBaseLocalInventory();
    message.name = object.name ?? "";
    message.account = (object.account !== undefined && object.account !== null)
      ? Long.fromValue(object.account)
      : Long.ZERO;
    message.storeCode = object.storeCode ?? "";
    message.price = (object.price !== undefined && object.price !== null) ? Price.fromPartial(object.price) : undefined;
    message.salePrice = (object.salePrice !== undefined && object.salePrice !== null)
      ? Price.fromPartial(object.salePrice)
      : undefined;
    message.salePriceEffectiveDate =
      (object.salePriceEffectiveDate !== undefined && object.salePriceEffectiveDate !== null)
        ? Interval.fromPartial(object.salePriceEffectiveDate)
        : undefined;
    message.availability = object.availability ?? undefined;
    message.quantity = (object.quantity !== undefined && object.quantity !== null)
      ? Long.fromValue(object.quantity)
      : undefined;
    message.pickupMethod = object.pickupMethod ?? undefined;
    message.pickupSla = object.pickupSla ?? undefined;
    message.instoreProductLocation = object.instoreProductLocation ?? undefined;
    message.customAttributes = object.customAttributes?.map((e) => CustomAttribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListLocalInventoriesRequest(): ListLocalInventoriesRequest {
  return { parent: "", pageSize: 0, pageToken: "" };
}

export const ListLocalInventoriesRequest: MessageFns<ListLocalInventoriesRequest> = {
  encode(message: ListLocalInventoriesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListLocalInventoriesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLocalInventoriesRequest();
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
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListLocalInventoriesRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListLocalInventoriesRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListLocalInventoriesRequest>): ListLocalInventoriesRequest {
    return ListLocalInventoriesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListLocalInventoriesRequest>): ListLocalInventoriesRequest {
    const message = createBaseListLocalInventoriesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListLocalInventoriesResponse(): ListLocalInventoriesResponse {
  return { localInventories: [], nextPageToken: "" };
}

export const ListLocalInventoriesResponse: MessageFns<ListLocalInventoriesResponse> = {
  encode(message: ListLocalInventoriesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.localInventories) {
      LocalInventory.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListLocalInventoriesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLocalInventoriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.localInventories.push(LocalInventory.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListLocalInventoriesResponse {
    return {
      localInventories: globalThis.Array.isArray(object?.localInventories)
        ? object.localInventories.map((e: any) => LocalInventory.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListLocalInventoriesResponse): unknown {
    const obj: any = {};
    if (message.localInventories?.length) {
      obj.localInventories = message.localInventories.map((e) => LocalInventory.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListLocalInventoriesResponse>): ListLocalInventoriesResponse {
    return ListLocalInventoriesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListLocalInventoriesResponse>): ListLocalInventoriesResponse {
    const message = createBaseListLocalInventoriesResponse();
    message.localInventories = object.localInventories?.map((e) => LocalInventory.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseInsertLocalInventoryRequest(): InsertLocalInventoryRequest {
  return { parent: "", localInventory: undefined };
}

export const InsertLocalInventoryRequest: MessageFns<InsertLocalInventoryRequest> = {
  encode(message: InsertLocalInventoryRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.localInventory !== undefined) {
      LocalInventory.encode(message.localInventory, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InsertLocalInventoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertLocalInventoryRequest();
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

          message.localInventory = LocalInventory.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InsertLocalInventoryRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      localInventory: isSet(object.localInventory) ? LocalInventory.fromJSON(object.localInventory) : undefined,
    };
  },

  toJSON(message: InsertLocalInventoryRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.localInventory !== undefined) {
      obj.localInventory = LocalInventory.toJSON(message.localInventory);
    }
    return obj;
  },

  create(base?: DeepPartial<InsertLocalInventoryRequest>): InsertLocalInventoryRequest {
    return InsertLocalInventoryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InsertLocalInventoryRequest>): InsertLocalInventoryRequest {
    const message = createBaseInsertLocalInventoryRequest();
    message.parent = object.parent ?? "";
    message.localInventory = (object.localInventory !== undefined && object.localInventory !== null)
      ? LocalInventory.fromPartial(object.localInventory)
      : undefined;
    return message;
  },
};

function createBaseDeleteLocalInventoryRequest(): DeleteLocalInventoryRequest {
  return { name: "" };
}

export const DeleteLocalInventoryRequest: MessageFns<DeleteLocalInventoryRequest> = {
  encode(message: DeleteLocalInventoryRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteLocalInventoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLocalInventoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteLocalInventoryRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeleteLocalInventoryRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteLocalInventoryRequest>): DeleteLocalInventoryRequest {
    return DeleteLocalInventoryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteLocalInventoryRequest>): DeleteLocalInventoryRequest {
    const message = createBaseDeleteLocalInventoryRequest();
    message.name = object.name ?? "";
    return message;
  },
};

/** Service to manage local inventory for products */
export type LocalInventoryServiceDefinition = typeof LocalInventoryServiceDefinition;
export const LocalInventoryServiceDefinition = {
  name: "LocalInventoryService",
  fullName: "google.shopping.merchant.inventories.v1beta.LocalInventoryService",
  methods: {
    /**
     * Lists the `LocalInventory` resources for the given product in your merchant
     * account. The response might contain fewer items than specified by
     * `pageSize`. If `pageToken` was returned in previous request, it can be used
     * to obtain additional results.
     *
     * `LocalInventory` resources are listed per product for a given account.
     */
    listLocalInventories: {
      name: "ListLocalInventories",
      requestType: ListLocalInventoriesRequest,
      requestStream: false,
      responseType: ListLocalInventoriesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              69,
              18,
              67,
              47,
              105,
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
              47,
              112,
              114,
              111,
              100,
              117,
              99,
              116,
              115,
              47,
              42,
              125,
              47,
              108,
              111,
              99,
              97,
              108,
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
            ]),
          ],
        },
      },
    },
    /**
     * Inserts a `LocalInventory` resource to a product in your merchant
     * account.
     *
     * Replaces the full `LocalInventory` resource if an entry with the same
     * [`storeCode`][google.shopping.merchant.inventories.v1beta.LocalInventory.store_code]
     * already exists for the product.
     *
     * It might take up to 30 minutes for the new or updated `LocalInventory`
     * resource to appear in products.
     */
    insertLocalInventory: {
      name: "InsertLocalInventory",
      requestType: InsertLocalInventoryRequest,
      requestStream: false,
      responseType: LocalInventory,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              93,
              58,
              15,
              108,
              111,
              99,
              97,
              108,
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
              74,
              47,
              105,
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
              47,
              112,
              114,
              111,
              100,
              117,
              99,
              116,
              115,
              47,
              42,
              125,
              47,
              108,
              111,
              99,
              97,
              108,
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
    /**
     * Deletes the specified `LocalInventory` from the given product in your
     * merchant account. It might take a up to an hour for the
     * `LocalInventory` to be deleted from the specific product.
     * Once you have received a successful delete response, wait for that
     * period before attempting a delete again.
     */
    deleteLocalInventory: {
      name: "DeleteLocalInventory",
      requestType: DeleteLocalInventoryRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              69,
              42,
              67,
              47,
              105,
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
              47,
              118,
              49,
              98,
              101,
              116,
              97,
              47,
              123,
              110,
              97,
              109,
              101,
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
              47,
              112,
              114,
              111,
              100,
              117,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              108,
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
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface LocalInventoryServiceImplementation<CallContextExt = {}> {
  /**
   * Lists the `LocalInventory` resources for the given product in your merchant
   * account. The response might contain fewer items than specified by
   * `pageSize`. If `pageToken` was returned in previous request, it can be used
   * to obtain additional results.
   *
   * `LocalInventory` resources are listed per product for a given account.
   */
  listLocalInventories(
    request: ListLocalInventoriesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListLocalInventoriesResponse>>;
  /**
   * Inserts a `LocalInventory` resource to a product in your merchant
   * account.
   *
   * Replaces the full `LocalInventory` resource if an entry with the same
   * [`storeCode`][google.shopping.merchant.inventories.v1beta.LocalInventory.store_code]
   * already exists for the product.
   *
   * It might take up to 30 minutes for the new or updated `LocalInventory`
   * resource to appear in products.
   */
  insertLocalInventory(
    request: InsertLocalInventoryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<LocalInventory>>;
  /**
   * Deletes the specified `LocalInventory` from the given product in your
   * merchant account. It might take a up to an hour for the
   * `LocalInventory` to be deleted from the specific product.
   * Once you have received a successful delete response, wait for that
   * period before attempting a delete again.
   */
  deleteLocalInventory(
    request: DeleteLocalInventoryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
}

export interface LocalInventoryServiceClient<CallOptionsExt = {}> {
  /**
   * Lists the `LocalInventory` resources for the given product in your merchant
   * account. The response might contain fewer items than specified by
   * `pageSize`. If `pageToken` was returned in previous request, it can be used
   * to obtain additional results.
   *
   * `LocalInventory` resources are listed per product for a given account.
   */
  listLocalInventories(
    request: DeepPartial<ListLocalInventoriesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListLocalInventoriesResponse>;
  /**
   * Inserts a `LocalInventory` resource to a product in your merchant
   * account.
   *
   * Replaces the full `LocalInventory` resource if an entry with the same
   * [`storeCode`][google.shopping.merchant.inventories.v1beta.LocalInventory.store_code]
   * already exists for the product.
   *
   * It might take up to 30 minutes for the new or updated `LocalInventory`
   * resource to appear in products.
   */
  insertLocalInventory(
    request: DeepPartial<InsertLocalInventoryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<LocalInventory>;
  /**
   * Deletes the specified `LocalInventory` from the given product in your
   * merchant account. It might take a up to an hour for the
   * `LocalInventory` to be deleted from the specific product.
   * Once you have received a successful delete response, wait for that
   * period before attempting a delete again.
   */
  deleteLocalInventory(
    request: DeepPartial<DeleteLocalInventoryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
}

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
