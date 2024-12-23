// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/brand_suggestion_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import {
  BrandStateEnum_BrandState,
  brandStateEnum_BrandStateFromJSON,
  brandStateEnum_BrandStateToJSON,
} from "../enums/brand_state.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [BrandSuggestionService.SuggestBrands][google.ads.googleads.v16.services.BrandSuggestionService.SuggestBrands].
 */
export interface SuggestBrandsRequest {
  /**
   * Required. The ID of the customer onto which to apply the brand suggestion
   * operation.
   */
  customerId: string;
  /** Required. The prefix of a brand name. */
  brandPrefix?:
    | string
    | undefined;
  /**
   * Optional. Ids of the brands already selected by advertisers. They will be
   * excluded in response. These are expected to be brand ids not brand names.
   */
  selectedBrands: string[];
}

/**
 * Response message for
 * [BrandSuggestionService.SuggestBrands][google.ads.googleads.v16.services.BrandSuggestionService.SuggestBrands].
 */
export interface SuggestBrandsResponse {
  /** Generated brand suggestions of verified brands for the given prefix. */
  brands: BrandSuggestion[];
}

/** Information of brand suggestion. */
export interface BrandSuggestion {
  /** Id for the brand. It would be CKG MID for verified/global scoped brands. */
  id: string;
  /** Name of the brand. */
  name: string;
  /** Urls which uniquely identify the brand. */
  urls: string[];
  /** Current state of the brand. */
  state: BrandStateEnum_BrandState;
}

function createBaseSuggestBrandsRequest(): SuggestBrandsRequest {
  return { customerId: "", brandPrefix: undefined, selectedBrands: [] };
}

export const SuggestBrandsRequest: MessageFns<SuggestBrandsRequest> = {
  encode(message: SuggestBrandsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    if (message.brandPrefix !== undefined) {
      writer.uint32(18).string(message.brandPrefix);
    }
    for (const v of message.selectedBrands) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SuggestBrandsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuggestBrandsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.brandPrefix = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.selectedBrands.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SuggestBrandsRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      brandPrefix: isSet(object.brandPrefix) ? globalThis.String(object.brandPrefix) : undefined,
      selectedBrands: globalThis.Array.isArray(object?.selectedBrands)
        ? object.selectedBrands.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: SuggestBrandsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.brandPrefix !== undefined) {
      obj.brandPrefix = message.brandPrefix;
    }
    if (message.selectedBrands?.length) {
      obj.selectedBrands = message.selectedBrands;
    }
    return obj;
  },

  create(base?: DeepPartial<SuggestBrandsRequest>): SuggestBrandsRequest {
    return SuggestBrandsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SuggestBrandsRequest>): SuggestBrandsRequest {
    const message = createBaseSuggestBrandsRequest();
    message.customerId = object.customerId ?? "";
    message.brandPrefix = object.brandPrefix ?? undefined;
    message.selectedBrands = object.selectedBrands?.map((e) => e) || [];
    return message;
  },
};

function createBaseSuggestBrandsResponse(): SuggestBrandsResponse {
  return { brands: [] };
}

export const SuggestBrandsResponse: MessageFns<SuggestBrandsResponse> = {
  encode(message: SuggestBrandsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.brands) {
      BrandSuggestion.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SuggestBrandsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuggestBrandsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brands.push(BrandSuggestion.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SuggestBrandsResponse {
    return {
      brands: globalThis.Array.isArray(object?.brands)
        ? object.brands.map((e: any) => BrandSuggestion.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SuggestBrandsResponse): unknown {
    const obj: any = {};
    if (message.brands?.length) {
      obj.brands = message.brands.map((e) => BrandSuggestion.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SuggestBrandsResponse>): SuggestBrandsResponse {
    return SuggestBrandsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SuggestBrandsResponse>): SuggestBrandsResponse {
    const message = createBaseSuggestBrandsResponse();
    message.brands = object.brands?.map((e) => BrandSuggestion.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBrandSuggestion(): BrandSuggestion {
  return { id: "", name: "", urls: [], state: 0 };
}

export const BrandSuggestion: MessageFns<BrandSuggestion> = {
  encode(message: BrandSuggestion, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.urls) {
      writer.uint32(26).string(v!);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BrandSuggestion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrandSuggestion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.urls.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BrandSuggestion {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      urls: globalThis.Array.isArray(object?.urls) ? object.urls.map((e: any) => globalThis.String(e)) : [],
      state: isSet(object.state) ? brandStateEnum_BrandStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: BrandSuggestion): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.urls?.length) {
      obj.urls = message.urls;
    }
    if (message.state !== 0) {
      obj.state = brandStateEnum_BrandStateToJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<BrandSuggestion>): BrandSuggestion {
    return BrandSuggestion.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BrandSuggestion>): BrandSuggestion {
    const message = createBaseBrandSuggestion();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.urls = object.urls?.map((e) => e) || [];
    message.state = object.state ?? 0;
    return message;
  },
};

/** This service will suggest brands based on a prefix. */
export type BrandSuggestionServiceDefinition = typeof BrandSuggestionServiceDefinition;
export const BrandSuggestionServiceDefinition = {
  name: "BrandSuggestionService",
  fullName: "google.ads.googleads.v16.services.BrandSuggestionService",
  methods: {
    /**
     * Rpc to return a list of matching brands based on a prefix for this
     * customer.
     */
    suggestBrands: {
      name: "SuggestBrands",
      requestType: SuggestBrandsRequest,
      requestStream: false,
      responseType: SuggestBrandsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              24,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              95,
              105,
              100,
              44,
              98,
              114,
              97,
              110,
              100,
              95,
              112,
              114,
              101,
              102,
              105,
              120,
            ]),
          ],
          578365826: [
            Buffer.from([
              49,
              58,
              1,
              42,
              34,
              44,
              47,
              118,
              49,
              54,
              47,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              115,
              47,
              123,
              99,
              117,
              115,
              116,
              111,
              109,
              101,
              114,
              95,
              105,
              100,
              61,
              42,
              125,
              58,
              115,
              117,
              103,
              103,
              101,
              115,
              116,
              66,
              114,
              97,
              110,
              100,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface BrandSuggestionServiceImplementation<CallContextExt = {}> {
  /**
   * Rpc to return a list of matching brands based on a prefix for this
   * customer.
   */
  suggestBrands(
    request: SuggestBrandsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SuggestBrandsResponse>>;
}

export interface BrandSuggestionServiceClient<CallOptionsExt = {}> {
  /**
   * Rpc to return a list of matching brands based on a prefix for this
   * customer.
   */
  suggestBrands(
    request: DeepPartial<SuggestBrandsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SuggestBrandsResponse>;
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
