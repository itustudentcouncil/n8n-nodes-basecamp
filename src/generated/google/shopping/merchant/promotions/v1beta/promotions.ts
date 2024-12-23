// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/shopping/merchant/promotions/v1beta/promotions.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { CustomAttribute } from "../../../type/types.js";
import {
  Attributes,
  PromotionStatus,
  RedemptionChannel,
  redemptionChannelFromJSON,
  redemptionChannelToJSON,
} from "./promotions_common.js";

export const protobufPackage = "google.shopping.merchant.promotions.v1beta";

/**
 * Represents a promotion. See the following articles for more details.
 *
 * Required promotion input attributes to pass data validation checks are
 * primarily defined below:
 *
 * * [Promotions data
 * specification](https://support.google.com/merchants/answer/2906014)
 * * [Local promotions data
 * specification](https://support.google.com/merchants/answer/10146130)
 *
 * After inserting, updating a promotion input, it may take several minutes
 * before the final promotion can be retrieved.
 */
export interface Promotion {
  /**
   * Identifier. The name of the promotion.
   * Format: `accounts/{account}/promotions/{promotion}`
   */
  name: string;
  /**
   * Required. The user provided promotion ID to uniquely identify the
   * promotion. Follow [minimum
   * requirements](https://support.google.com/merchants/answer/7050148?ref_topic=7322920&sjid=871860036916537104-NC#minimum_requirements)
   * to prevent promotion disapprovals.
   */
  promotionId: string;
  /**
   * Required. The two-letter [ISO
   * 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the
   * promotion.
   *
   * Promotions is only for [selected
   * languages](https://support.google.com/merchants/answer/4588281?ref_topic=6396150&sjid=18314938579342094533-NC#option3&zippy=).
   */
  contentLanguage: string;
  /**
   * Required. The target country used as part of the unique identifier.
   * Represented as a [CLDR territory
   * code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml).
   *
   * Promotions are only available in selected
   * countries, [Free Listings and Shopping
   * ads](https://support.google.com/merchants/answer/4588460) [Local Inventory
   * ads](https://support.google.com/merchants/answer/10146326)
   */
  targetCountry: string;
  /**
   * Required. [Redemption
   * channel](https://support.google.com/merchants/answer/13837674?ref_topic=13773355&sjid=17642868584668136159-NC)
   * for the promotion. At least one channel is required.
   */
  redemptionChannel: RedemptionChannel[];
  /** Output only. The primary data source of the promotion. */
  dataSource: string;
  /** Optional. A list of promotion attributes. */
  attributes:
    | Attributes
    | undefined;
  /**
   * Optional. A list of custom (merchant-provided) attributes. It can also be
   * used for submitting any attribute of the data specification in its generic
   * form (for example,
   * `{ "name": "size type", "value": "regular" }`).
   * This is useful for submitting attributes not explicitly exposed by the
   * API.
   */
  customAttributes: CustomAttribute[];
  /**
   * Output only. The [status of a
   * promotion](https://support.google.com/merchants/answer/3398326?ref_topic=7322924&sjid=5155774230887277618-NC),
   * data validation issues, that is, information about a promotion computed
   * asynchronously.
   */
  promotionStatus:
    | PromotionStatus
    | undefined;
  /**
   * Optional. Represents the existing version (freshness) of the promotion,
   * which can be used to preserve the right order when multiple updates are
   * done at the same time.
   *
   * If set, the insertion is prevented when version number is lower than
   * the current version number of the existing promotion. Re-insertion (for
   * example, promotion refresh after 30 days) can be performed with the current
   * `version_number`.
   *
   * If the operation is prevented, the aborted exception will be
   * thrown.
   */
  versionNumber?: Long | undefined;
}

/** Request message for the `InsertPromotion` method. */
export interface InsertPromotionRequest {
  /**
   * Required. The account where the promotion will be inserted.
   * Format: accounts/{account}
   */
  parent: string;
  /** Required. The promotion to insert. */
  promotion:
    | Promotion
    | undefined;
  /**
   * Required. The data source of the
   * [promotion](https://support.google.com/merchants/answer/6396268?sjid=5155774230887277618-NC)
   * Format:
   * `accounts/{account}/dataSources/{datasource}`.
   */
  dataSource: string;
}

/** Request message for the `GetPromotion` method. */
export interface GetPromotionRequest {
  /**
   * Required. The name of the promotion to retrieve.
   * Format: `accounts/{account}/promotions/{promotions}`
   */
  name: string;
}

/** Request message for the `ListPromotions` method. */
export interface ListPromotionsRequest {
  /**
   * Required. The account to list processed promotions for.
   * Format: `accounts/{account}`
   */
  parent: string;
  /**
   * Output only. The maximum number of promotions to return. The service may
   * return fewer than this value. The maximum value is 1000; values above 1000
   * will be coerced to 1000. If unspecified, the maximum number of promotions
   * will be returned.
   */
  pageSize: number;
  /**
   * Output only. A page token, received from a previous `ListPromotions` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListPromotions` must
   * match the call that provided the page token.
   */
  pageToken: string;
}

/** Response message for the `ListPromotions` method. */
export interface ListPromotionsResponse {
  /** The processed promotions from the specified account. */
  promotions: Promotion[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

function createBasePromotion(): Promotion {
  return {
    name: "",
    promotionId: "",
    contentLanguage: "",
    targetCountry: "",
    redemptionChannel: [],
    dataSource: "",
    attributes: undefined,
    customAttributes: [],
    promotionStatus: undefined,
    versionNumber: undefined,
  };
}

export const Promotion: MessageFns<Promotion> = {
  encode(message: Promotion, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.promotionId !== "") {
      writer.uint32(18).string(message.promotionId);
    }
    if (message.contentLanguage !== "") {
      writer.uint32(26).string(message.contentLanguage);
    }
    if (message.targetCountry !== "") {
      writer.uint32(34).string(message.targetCountry);
    }
    writer.uint32(42).fork();
    for (const v of message.redemptionChannel) {
      writer.int32(v);
    }
    writer.join();
    if (message.dataSource !== "") {
      writer.uint32(50).string(message.dataSource);
    }
    if (message.attributes !== undefined) {
      Attributes.encode(message.attributes, writer.uint32(58).fork()).join();
    }
    for (const v of message.customAttributes) {
      CustomAttribute.encode(v!, writer.uint32(66).fork()).join();
    }
    if (message.promotionStatus !== undefined) {
      PromotionStatus.encode(message.promotionStatus, writer.uint32(74).fork()).join();
    }
    if (message.versionNumber !== undefined) {
      writer.uint32(80).int64(message.versionNumber.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Promotion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePromotion();
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
          if (tag !== 18) {
            break;
          }

          message.promotionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contentLanguage = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.targetCountry = reader.string();
          continue;
        case 5:
          if (tag === 40) {
            message.redemptionChannel.push(reader.int32() as any);

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.redemptionChannel.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.dataSource = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.attributes = Attributes.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.customAttributes.push(CustomAttribute.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.promotionStatus = PromotionStatus.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.versionNumber = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Promotion {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      promotionId: isSet(object.promotionId) ? globalThis.String(object.promotionId) : "",
      contentLanguage: isSet(object.contentLanguage) ? globalThis.String(object.contentLanguage) : "",
      targetCountry: isSet(object.targetCountry) ? globalThis.String(object.targetCountry) : "",
      redemptionChannel: globalThis.Array.isArray(object?.redemptionChannel)
        ? object.redemptionChannel.map((e: any) => redemptionChannelFromJSON(e))
        : [],
      dataSource: isSet(object.dataSource) ? globalThis.String(object.dataSource) : "",
      attributes: isSet(object.attributes) ? Attributes.fromJSON(object.attributes) : undefined,
      customAttributes: globalThis.Array.isArray(object?.customAttributes)
        ? object.customAttributes.map((e: any) => CustomAttribute.fromJSON(e))
        : [],
      promotionStatus: isSet(object.promotionStatus) ? PromotionStatus.fromJSON(object.promotionStatus) : undefined,
      versionNumber: isSet(object.versionNumber) ? Long.fromValue(object.versionNumber) : undefined,
    };
  },

  toJSON(message: Promotion): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.promotionId !== "") {
      obj.promotionId = message.promotionId;
    }
    if (message.contentLanguage !== "") {
      obj.contentLanguage = message.contentLanguage;
    }
    if (message.targetCountry !== "") {
      obj.targetCountry = message.targetCountry;
    }
    if (message.redemptionChannel?.length) {
      obj.redemptionChannel = message.redemptionChannel.map((e) => redemptionChannelToJSON(e));
    }
    if (message.dataSource !== "") {
      obj.dataSource = message.dataSource;
    }
    if (message.attributes !== undefined) {
      obj.attributes = Attributes.toJSON(message.attributes);
    }
    if (message.customAttributes?.length) {
      obj.customAttributes = message.customAttributes.map((e) => CustomAttribute.toJSON(e));
    }
    if (message.promotionStatus !== undefined) {
      obj.promotionStatus = PromotionStatus.toJSON(message.promotionStatus);
    }
    if (message.versionNumber !== undefined) {
      obj.versionNumber = (message.versionNumber || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<Promotion>): Promotion {
    return Promotion.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Promotion>): Promotion {
    const message = createBasePromotion();
    message.name = object.name ?? "";
    message.promotionId = object.promotionId ?? "";
    message.contentLanguage = object.contentLanguage ?? "";
    message.targetCountry = object.targetCountry ?? "";
    message.redemptionChannel = object.redemptionChannel?.map((e) => e) || [];
    message.dataSource = object.dataSource ?? "";
    message.attributes = (object.attributes !== undefined && object.attributes !== null)
      ? Attributes.fromPartial(object.attributes)
      : undefined;
    message.customAttributes = object.customAttributes?.map((e) => CustomAttribute.fromPartial(e)) || [];
    message.promotionStatus = (object.promotionStatus !== undefined && object.promotionStatus !== null)
      ? PromotionStatus.fromPartial(object.promotionStatus)
      : undefined;
    message.versionNumber = (object.versionNumber !== undefined && object.versionNumber !== null)
      ? Long.fromValue(object.versionNumber)
      : undefined;
    return message;
  },
};

function createBaseInsertPromotionRequest(): InsertPromotionRequest {
  return { parent: "", promotion: undefined, dataSource: "" };
}

export const InsertPromotionRequest: MessageFns<InsertPromotionRequest> = {
  encode(message: InsertPromotionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.promotion !== undefined) {
      Promotion.encode(message.promotion, writer.uint32(18).fork()).join();
    }
    if (message.dataSource !== "") {
      writer.uint32(26).string(message.dataSource);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InsertPromotionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertPromotionRequest();
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

          message.promotion = Promotion.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dataSource = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InsertPromotionRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      promotion: isSet(object.promotion) ? Promotion.fromJSON(object.promotion) : undefined,
      dataSource: isSet(object.dataSource) ? globalThis.String(object.dataSource) : "",
    };
  },

  toJSON(message: InsertPromotionRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.promotion !== undefined) {
      obj.promotion = Promotion.toJSON(message.promotion);
    }
    if (message.dataSource !== "") {
      obj.dataSource = message.dataSource;
    }
    return obj;
  },

  create(base?: DeepPartial<InsertPromotionRequest>): InsertPromotionRequest {
    return InsertPromotionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InsertPromotionRequest>): InsertPromotionRequest {
    const message = createBaseInsertPromotionRequest();
    message.parent = object.parent ?? "";
    message.promotion = (object.promotion !== undefined && object.promotion !== null)
      ? Promotion.fromPartial(object.promotion)
      : undefined;
    message.dataSource = object.dataSource ?? "";
    return message;
  },
};

function createBaseGetPromotionRequest(): GetPromotionRequest {
  return { name: "" };
}

export const GetPromotionRequest: MessageFns<GetPromotionRequest> = {
  encode(message: GetPromotionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetPromotionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPromotionRequest();
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

  fromJSON(object: any): GetPromotionRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetPromotionRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetPromotionRequest>): GetPromotionRequest {
    return GetPromotionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetPromotionRequest>): GetPromotionRequest {
    const message = createBaseGetPromotionRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListPromotionsRequest(): ListPromotionsRequest {
  return { parent: "", pageSize: 0, pageToken: "" };
}

export const ListPromotionsRequest: MessageFns<ListPromotionsRequest> = {
  encode(message: ListPromotionsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): ListPromotionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPromotionsRequest();
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

  fromJSON(object: any): ListPromotionsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListPromotionsRequest): unknown {
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

  create(base?: DeepPartial<ListPromotionsRequest>): ListPromotionsRequest {
    return ListPromotionsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPromotionsRequest>): ListPromotionsRequest {
    const message = createBaseListPromotionsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListPromotionsResponse(): ListPromotionsResponse {
  return { promotions: [], nextPageToken: "" };
}

export const ListPromotionsResponse: MessageFns<ListPromotionsResponse> = {
  encode(message: ListPromotionsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.promotions) {
      Promotion.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListPromotionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPromotionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.promotions.push(Promotion.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListPromotionsResponse {
    return {
      promotions: globalThis.Array.isArray(object?.promotions)
        ? object.promotions.map((e: any) => Promotion.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListPromotionsResponse): unknown {
    const obj: any = {};
    if (message.promotions?.length) {
      obj.promotions = message.promotions.map((e) => Promotion.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListPromotionsResponse>): ListPromotionsResponse {
    return ListPromotionsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPromotionsResponse>): ListPromotionsResponse {
    const message = createBaseListPromotionsResponse();
    message.promotions = object.promotions?.map((e) => Promotion.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

/** Service to manage promotions for products. */
export type PromotionsServiceDefinition = typeof PromotionsServiceDefinition;
export const PromotionsServiceDefinition = {
  name: "PromotionsService",
  fullName: "google.shopping.merchant.promotions.v1beta.PromotionsService",
  methods: {
    /**
     * Inserts a promotion for your Merchant Center account. If the promotion
     * already exists, then it updates the promotion instead.
     */
    insertPromotion: {
      name: "InsertPromotion",
      requestType: InsertPromotionRequest,
      requestStream: false,
      responseType: Promotion,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              61,
              58,
              1,
              42,
              34,
              56,
              47,
              112,
              114,
              111,
              109,
              111,
              116,
              105,
              111,
              110,
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
              125,
              47,
              112,
              114,
              111,
              109,
              111,
              116,
              105,
              111,
              110,
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
     * Retrieves the promotion from your Merchant Center account.
     *
     * After inserting or updating a promotion input, it may take several
     * minutes before the updated promotion can be retrieved.
     */
    getPromotion: {
      name: "GetPromotion",
      requestType: GetPromotionRequest,
      requestStream: false,
      responseType: Promotion,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              51,
              18,
              49,
              47,
              112,
              114,
              111,
              109,
              111,
              116,
              105,
              111,
              110,
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
              109,
              111,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Lists the promotions in your Merchant Center account. The
     * response might contain fewer items than specified by `pageSize`. Rely on
     * `pageToken` to determine if there are more items to be requested.
     *
     * After inserting or updating a promotion, it may take several minutes before
     * the updated processed promotion can be retrieved.
     */
    listPromotions: {
      name: "ListPromotions",
      requestType: ListPromotionsRequest,
      requestStream: false,
      responseType: ListPromotionsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              51,
              18,
              49,
              47,
              112,
              114,
              111,
              109,
              111,
              116,
              105,
              111,
              110,
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
              125,
              47,
              112,
              114,
              111,
              109,
              111,
              116,
              105,
              111,
              110,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface PromotionsServiceImplementation<CallContextExt = {}> {
  /**
   * Inserts a promotion for your Merchant Center account. If the promotion
   * already exists, then it updates the promotion instead.
   */
  insertPromotion(
    request: InsertPromotionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Promotion>>;
  /**
   * Retrieves the promotion from your Merchant Center account.
   *
   * After inserting or updating a promotion input, it may take several
   * minutes before the updated promotion can be retrieved.
   */
  getPromotion(request: GetPromotionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Promotion>>;
  /**
   * Lists the promotions in your Merchant Center account. The
   * response might contain fewer items than specified by `pageSize`. Rely on
   * `pageToken` to determine if there are more items to be requested.
   *
   * After inserting or updating a promotion, it may take several minutes before
   * the updated processed promotion can be retrieved.
   */
  listPromotions(
    request: ListPromotionsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListPromotionsResponse>>;
}

export interface PromotionsServiceClient<CallOptionsExt = {}> {
  /**
   * Inserts a promotion for your Merchant Center account. If the promotion
   * already exists, then it updates the promotion instead.
   */
  insertPromotion(
    request: DeepPartial<InsertPromotionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Promotion>;
  /**
   * Retrieves the promotion from your Merchant Center account.
   *
   * After inserting or updating a promotion input, it may take several
   * minutes before the updated promotion can be retrieved.
   */
  getPromotion(request: DeepPartial<GetPromotionRequest>, options?: CallOptions & CallOptionsExt): Promise<Promotion>;
  /**
   * Lists the promotions in your Merchant Center account. The
   * response might contain fewer items than specified by `pageSize`. Rely on
   * `pageToken` to determine if there are more items to be requested.
   *
   * After inserting or updating a promotion, it may take several minutes before
   * the updated processed promotion can be retrieved.
   */
  listPromotions(
    request: DeepPartial<ListPromotionsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListPromotionsResponse>;
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
