// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/services/product_link_invitation_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import {
  ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus,
  productLinkInvitationStatusEnum_ProductLinkInvitationStatusFromJSON,
  productLinkInvitationStatusEnum_ProductLinkInvitationStatusToJSON,
} from "../enums/product_link_invitation_status.js";
import { ProductLinkInvitation } from "../resources/product_link_invitation.js";

export const protobufPackage = "google.ads.googleads.v16.services";

/**
 * Request message for
 * [ProductLinkInvitationService.CreateProductLinkInvitation][google.ads.googleads.v16.services.ProductLinkInvitationService.CreateProductLinkInvitation].
 */
export interface CreateProductLinkInvitationRequest {
  /** Required. The ID of the customer being modified. */
  customerId: string;
  /** Required. The product link invitation to be created. */
  productLinkInvitation: ProductLinkInvitation | undefined;
}

/** Response message for product link invitation create. */
export interface CreateProductLinkInvitationResponse {
  /** Resource name of the product link invitation. */
  resourceName: string;
}

/**
 * Request message for
 * [ProductLinkInvitationService.UpdateProductLinkInvitation][google.ads.googleads.v16.services.ProductLinkInvitationService.UpdateProductLinkInvitation].
 */
export interface UpdateProductLinkInvitationRequest {
  /** Required. The ID of the customer being modified. */
  customerId: string;
  /** Required. The product link invitation to be created. */
  productLinkInvitationStatus: ProductLinkInvitationStatusEnum_ProductLinkInvitationStatus;
  /** Required. Resource name of the product link invitation. */
  resourceName: string;
}

/** Response message for product link invitation update. */
export interface UpdateProductLinkInvitationResponse {
  /** Result of the update. */
  resourceName: string;
}

/**
 * Request message for
 * [ProductLinkinvitationService.RemoveProductLinkInvitation][].
 */
export interface RemoveProductLinkInvitationRequest {
  /** Required. The ID of the product link invitation being removed. */
  customerId: string;
  /**
   * Required. The resource name of the product link invitation being removed.
   * expected, in this format:
   *
   * ` `
   */
  resourceName: string;
}

/** Response message for product link invitation removeal. */
export interface RemoveProductLinkInvitationResponse {
  /** Result for the remove request. */
  resourceName: string;
}

function createBaseCreateProductLinkInvitationRequest(): CreateProductLinkInvitationRequest {
  return { customerId: "", productLinkInvitation: undefined };
}

export const CreateProductLinkInvitationRequest: MessageFns<CreateProductLinkInvitationRequest> = {
  encode(message: CreateProductLinkInvitationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    if (message.productLinkInvitation !== undefined) {
      ProductLinkInvitation.encode(message.productLinkInvitation, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateProductLinkInvitationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductLinkInvitationRequest();
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

          message.productLinkInvitation = ProductLinkInvitation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductLinkInvitationRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      productLinkInvitation: isSet(object.productLinkInvitation)
        ? ProductLinkInvitation.fromJSON(object.productLinkInvitation)
        : undefined,
    };
  },

  toJSON(message: CreateProductLinkInvitationRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.productLinkInvitation !== undefined) {
      obj.productLinkInvitation = ProductLinkInvitation.toJSON(message.productLinkInvitation);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateProductLinkInvitationRequest>): CreateProductLinkInvitationRequest {
    return CreateProductLinkInvitationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateProductLinkInvitationRequest>): CreateProductLinkInvitationRequest {
    const message = createBaseCreateProductLinkInvitationRequest();
    message.customerId = object.customerId ?? "";
    message.productLinkInvitation =
      (object.productLinkInvitation !== undefined && object.productLinkInvitation !== null)
        ? ProductLinkInvitation.fromPartial(object.productLinkInvitation)
        : undefined;
    return message;
  },
};

function createBaseCreateProductLinkInvitationResponse(): CreateProductLinkInvitationResponse {
  return { resourceName: "" };
}

export const CreateProductLinkInvitationResponse: MessageFns<CreateProductLinkInvitationResponse> = {
  encode(message: CreateProductLinkInvitationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateProductLinkInvitationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductLinkInvitationResponse();
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

  fromJSON(object: any): CreateProductLinkInvitationResponse {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: CreateProductLinkInvitationResponse): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateProductLinkInvitationResponse>): CreateProductLinkInvitationResponse {
    return CreateProductLinkInvitationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateProductLinkInvitationResponse>): CreateProductLinkInvitationResponse {
    const message = createBaseCreateProductLinkInvitationResponse();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

function createBaseUpdateProductLinkInvitationRequest(): UpdateProductLinkInvitationRequest {
  return { customerId: "", productLinkInvitationStatus: 0, resourceName: "" };
}

export const UpdateProductLinkInvitationRequest: MessageFns<UpdateProductLinkInvitationRequest> = {
  encode(message: UpdateProductLinkInvitationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    if (message.productLinkInvitationStatus !== 0) {
      writer.uint32(16).int32(message.productLinkInvitationStatus);
    }
    if (message.resourceName !== "") {
      writer.uint32(26).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateProductLinkInvitationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProductLinkInvitationRequest();
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
          if (tag !== 16) {
            break;
          }

          message.productLinkInvitationStatus = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): UpdateProductLinkInvitationRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      productLinkInvitationStatus: isSet(object.productLinkInvitationStatus)
        ? productLinkInvitationStatusEnum_ProductLinkInvitationStatusFromJSON(object.productLinkInvitationStatus)
        : 0,
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
    };
  },

  toJSON(message: UpdateProductLinkInvitationRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.productLinkInvitationStatus !== 0) {
      obj.productLinkInvitationStatus = productLinkInvitationStatusEnum_ProductLinkInvitationStatusToJSON(
        message.productLinkInvitationStatus,
      );
    }
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateProductLinkInvitationRequest>): UpdateProductLinkInvitationRequest {
    return UpdateProductLinkInvitationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateProductLinkInvitationRequest>): UpdateProductLinkInvitationRequest {
    const message = createBaseUpdateProductLinkInvitationRequest();
    message.customerId = object.customerId ?? "";
    message.productLinkInvitationStatus = object.productLinkInvitationStatus ?? 0;
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

function createBaseUpdateProductLinkInvitationResponse(): UpdateProductLinkInvitationResponse {
  return { resourceName: "" };
}

export const UpdateProductLinkInvitationResponse: MessageFns<UpdateProductLinkInvitationResponse> = {
  encode(message: UpdateProductLinkInvitationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateProductLinkInvitationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProductLinkInvitationResponse();
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

  fromJSON(object: any): UpdateProductLinkInvitationResponse {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: UpdateProductLinkInvitationResponse): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateProductLinkInvitationResponse>): UpdateProductLinkInvitationResponse {
    return UpdateProductLinkInvitationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateProductLinkInvitationResponse>): UpdateProductLinkInvitationResponse {
    const message = createBaseUpdateProductLinkInvitationResponse();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

function createBaseRemoveProductLinkInvitationRequest(): RemoveProductLinkInvitationRequest {
  return { customerId: "", resourceName: "" };
}

export const RemoveProductLinkInvitationRequest: MessageFns<RemoveProductLinkInvitationRequest> = {
  encode(message: RemoveProductLinkInvitationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    if (message.resourceName !== "") {
      writer.uint32(18).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RemoveProductLinkInvitationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveProductLinkInvitationRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveProductLinkInvitationRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "",
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
    };
  },

  toJSON(message: RemoveProductLinkInvitationRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<RemoveProductLinkInvitationRequest>): RemoveProductLinkInvitationRequest {
    return RemoveProductLinkInvitationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveProductLinkInvitationRequest>): RemoveProductLinkInvitationRequest {
    const message = createBaseRemoveProductLinkInvitationRequest();
    message.customerId = object.customerId ?? "";
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

function createBaseRemoveProductLinkInvitationResponse(): RemoveProductLinkInvitationResponse {
  return { resourceName: "" };
}

export const RemoveProductLinkInvitationResponse: MessageFns<RemoveProductLinkInvitationResponse> = {
  encode(message: RemoveProductLinkInvitationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RemoveProductLinkInvitationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveProductLinkInvitationResponse();
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

  fromJSON(object: any): RemoveProductLinkInvitationResponse {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: RemoveProductLinkInvitationResponse): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<RemoveProductLinkInvitationResponse>): RemoveProductLinkInvitationResponse {
    return RemoveProductLinkInvitationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveProductLinkInvitationResponse>): RemoveProductLinkInvitationResponse {
    const message = createBaseRemoveProductLinkInvitationResponse();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

/**
 * This service allows management of product link invitations from Google Ads
 * accounts to other accounts.
 */
export type ProductLinkInvitationServiceDefinition = typeof ProductLinkInvitationServiceDefinition;
export const ProductLinkInvitationServiceDefinition = {
  name: "ProductLinkInvitationService",
  fullName: "google.ads.googleads.v16.services.ProductLinkInvitationService",
  methods: {
    /** Creates a product link invitation. */
    createProductLinkInvitation: {
      name: "CreateProductLinkInvitation",
      requestType: CreateProductLinkInvitationRequest,
      requestStream: false,
      responseType: CreateProductLinkInvitationResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              35,
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
              95,
              105,
              110,
              118,
              105,
              116,
              97,
              116,
              105,
              111,
              110,
            ]),
          ],
          578365826: [
            Buffer.from([
              65,
              58,
              1,
              42,
              34,
              60,
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
              73,
              110,
              118,
              105,
              116,
              97,
              116,
              105,
              111,
              110,
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
    /** Update a product link invitation. */
    updateProductLinkInvitation: {
      name: "UpdateProductLinkInvitation",
      requestType: UpdateProductLinkInvitationRequest,
      requestStream: false,
      responseType: UpdateProductLinkInvitationResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              56,
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
              95,
              105,
              110,
              118,
              105,
              116,
              97,
              116,
              105,
              111,
              110,
              95,
              115,
              116,
              97,
              116,
              117,
              115,
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
              65,
              58,
              1,
              42,
              34,
              60,
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
              73,
              110,
              118,
              105,
              116,
              97,
              116,
              105,
              111,
              110,
              115,
              58,
              117,
              112,
              100,
              97,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /** Remove a product link invitation. */
    removeProductLinkInvitation: {
      name: "RemoveProductLinkInvitation",
      requestType: RemoveProductLinkInvitationRequest,
      requestStream: false,
      responseType: RemoveProductLinkInvitationResponse,
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
              65,
              58,
              1,
              42,
              34,
              60,
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
              73,
              110,
              118,
              105,
              116,
              97,
              116,
              105,
              111,
              110,
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

export interface ProductLinkInvitationServiceImplementation<CallContextExt = {}> {
  /** Creates a product link invitation. */
  createProductLinkInvitation(
    request: CreateProductLinkInvitationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateProductLinkInvitationResponse>>;
  /** Update a product link invitation. */
  updateProductLinkInvitation(
    request: UpdateProductLinkInvitationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UpdateProductLinkInvitationResponse>>;
  /** Remove a product link invitation. */
  removeProductLinkInvitation(
    request: RemoveProductLinkInvitationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RemoveProductLinkInvitationResponse>>;
}

export interface ProductLinkInvitationServiceClient<CallOptionsExt = {}> {
  /** Creates a product link invitation. */
  createProductLinkInvitation(
    request: DeepPartial<CreateProductLinkInvitationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateProductLinkInvitationResponse>;
  /** Update a product link invitation. */
  updateProductLinkInvitation(
    request: DeepPartial<UpdateProductLinkInvitationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UpdateProductLinkInvitationResponse>;
  /** Remove a product link invitation. */
  removeProductLinkInvitation(
    request: DeepPartial<RemoveProductLinkInvitationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RemoveProductLinkInvitationResponse>;
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