// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/product_link_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { ProductLink } from "../resources/product_link.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [ProductLinkService.CreateProductLink][google.ads.googleads.v17.services.ProductLinkService.CreateProductLink].
 */
export interface CreateProductLinkRequest {
  /** Required. The ID of the customer for which the product link is created. */
  customerId: string;
  /** Required. The product link to be created. */
  productLink: ProductLink | undefined;
}

/**
 * Response message for
 * [ProductLinkService.CreateProductLink][google.ads.googleads.v17.services.ProductLinkService.CreateProductLink].
 */
export interface CreateProductLinkResponse {
  /** Returned for successful operations. Resource name of the product link. */
  resourceName: string;
}

/**
 * Request message for
 * [ProductLinkService.RemoveProductLink][google.ads.googleads.v17.services.ProductLinkService.RemoveProductLink].
 */
export interface RemoveProductLinkRequest {
  /** Required. The ID of the customer being modified. */
  customerId: string;
  /**
   * Required. Remove operation: A resource name for the product link to remove
   * is expected, in this format:
   *
   * `customers/{customer_id}/productLinks/{product_link_id} `
   */
  resourceName: string;
  /**
   * If true, the request is validated but not executed. Only errors are
   * returned, not results.
   */
  validateOnly: boolean;
}

/** Response message for product link removal. */
export interface RemoveProductLinkResponse {
  /** Result for the remove request. */
  resourceName: string;
}

function createBaseCreateProductLinkRequest(): CreateProductLinkRequest {
  return { customerId: "", productLink: undefined };
}

export const CreateProductLinkRequest: MessageFns<CreateProductLinkRequest> = {
  encode(message: CreateProductLinkRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    if (message.productLink !== undefined) {
      ProductLink.encode(message.productLink, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateProductLinkRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductLinkRequest();
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

          message.productLink = ProductLink.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductLinkRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      productLink: isSet(object.productLink) ? ProductLink.fromJSON(object.productLink) : undefined,
    };
  },

  toJSON(message: CreateProductLinkRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.productLink !== undefined) {
      obj.productLink = ProductLink.toJSON(message.productLink);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateProductLinkRequest>): CreateProductLinkRequest {
    return CreateProductLinkRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateProductLinkRequest>): CreateProductLinkRequest {
    const message = createBaseCreateProductLinkRequest();
    message.customerId = object.customerId ?? "";
    message.productLink = (object.productLink !== undefined && object.productLink !== null)
      ? ProductLink.fromPartial(object.productLink)
      : undefined;
    return message;
  },
};

function createBaseCreateProductLinkResponse(): CreateProductLinkResponse {
  return { resourceName: "" };
}

export const CreateProductLinkResponse: MessageFns<CreateProductLinkResponse> = {
  encode(message: CreateProductLinkResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateProductLinkResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductLinkResponse();
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

  fromJSON(object: any): CreateProductLinkResponse {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: CreateProductLinkResponse): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateProductLinkResponse>): CreateProductLinkResponse {
    return CreateProductLinkResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateProductLinkResponse>): CreateProductLinkResponse {
    const message = createBaseCreateProductLinkResponse();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

function createBaseRemoveProductLinkRequest(): RemoveProductLinkRequest {
  return { customerId: "", resourceName: "", validateOnly: false };
}

export const RemoveProductLinkRequest: MessageFns<RemoveProductLinkRequest> = {
  encode(message: RemoveProductLinkRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    if (message.resourceName !== "") {
      writer.uint32(18).string(message.resourceName);
    }
    if (message.validateOnly !== false) {
      writer.uint32(24).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RemoveProductLinkRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveProductLinkRequest();
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

          message.resourceName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.validateOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveProductLinkRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: RemoveProductLinkRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<RemoveProductLinkRequest>): RemoveProductLinkRequest {
    return RemoveProductLinkRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveProductLinkRequest>): RemoveProductLinkRequest {
    const message = createBaseRemoveProductLinkRequest();
    message.customerId = object.customerId ?? "";
    message.resourceName = object.resourceName ?? "";
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseRemoveProductLinkResponse(): RemoveProductLinkResponse {
  return { resourceName: "" };
}

export const RemoveProductLinkResponse: MessageFns<RemoveProductLinkResponse> = {
  encode(message: RemoveProductLinkResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RemoveProductLinkResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveProductLinkResponse();
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

  fromJSON(object: any): RemoveProductLinkResponse {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: RemoveProductLinkResponse): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<RemoveProductLinkResponse>): RemoveProductLinkResponse {
    return RemoveProductLinkResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveProductLinkResponse>): RemoveProductLinkResponse {
    const message = createBaseRemoveProductLinkResponse();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

/**
 * This service allows management of links between  a Google
 * Ads customer and another product.
 */
export type ProductLinkServiceDefinition = typeof ProductLinkServiceDefinition;
export const ProductLinkServiceDefinition = {
  name: "ProductLinkService",
  fullName: "google.ads.googleads.v17.services.ProductLinkService",
  methods: {
    /**
     * Creates a product link.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [DatabaseError]()
     *   [FieldError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [QuotaError]()
     *   [RequestError]()
     */
    createProductLink: {
      name: "CreateProductLink",
      requestType: CreateProductLinkRequest,
      requestStream: false,
      responseType: CreateProductLinkResponse,
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
              112,
              114,
              111,
              100,
              117,
              99,
              116,
              95,
              108,
              105,
              110,
              107,
            ]),
          ],
          578365826: [
            Buffer.from([
              55,
              58,
              1,
              42,
              34,
              50,
              47,
              118,
              49,
              55,
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
              47,
              112,
              114,
              111,
              100,
              117,
              99,
              116,
              76,
              105,
              110,
              107,
              115,
              58,
              99,
              114,
              101,
              97,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /**
     * Removes a product link.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [FieldMaskError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [MutateError]()
     *   [QuotaError]()
     *   [RequestError]()
     */
    removeProductLink: {
      name: "RemoveProductLink",
      requestType: RemoveProductLinkRequest,
      requestStream: false,
      responseType: RemoveProductLinkResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              25,
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
              114,
              101,
              115,
              111,
              117,
              114,
              99,
              101,
              95,
              110,
              97,
              109,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([
              55,
              58,
              1,
              42,
              34,
              50,
              47,
              118,
              49,
              55,
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
              47,
              112,
              114,
              111,
              100,
              117,
              99,
              116,
              76,
              105,
              110,
              107,
              115,
              58,
              114,
              101,
              109,
              111,
              118,
              101,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface ProductLinkServiceImplementation<CallContextExt = {}> {
  /**
   * Creates a product link.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [DatabaseError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  createProductLink(
    request: CreateProductLinkRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateProductLinkResponse>>;
  /**
   * Removes a product link.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  removeProductLink(
    request: RemoveProductLinkRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RemoveProductLinkResponse>>;
}

export interface ProductLinkServiceClient<CallOptionsExt = {}> {
  /**
   * Creates a product link.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [DatabaseError]()
   *   [FieldError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  createProductLink(
    request: DeepPartial<CreateProductLinkRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateProductLinkResponse>;
  /**
   * Removes a product link.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [FieldMaskError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [MutateError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  removeProductLink(
    request: DeepPartial<RemoveProductLinkRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RemoveProductLinkResponse>;
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
