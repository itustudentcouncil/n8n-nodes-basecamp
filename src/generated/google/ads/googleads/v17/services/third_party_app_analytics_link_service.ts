// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/third_party_app_analytics_link_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";

export const protobufPackage = "google.ads.googleads.v17.services";

/**
 * Request message for
 * [ThirdPartyAppAnalyticsLinkService.RegenerateShareableLinkId][google.ads.googleads.v17.services.ThirdPartyAppAnalyticsLinkService.RegenerateShareableLinkId].
 */
export interface RegenerateShareableLinkIdRequest {
  /** Resource name of the third party app analytics link. */
  resourceName: string;
}

/**
 * Response message for
 * [ThirdPartyAppAnalyticsLinkService.RegenerateShareableLinkId][google.ads.googleads.v17.services.ThirdPartyAppAnalyticsLinkService.RegenerateShareableLinkId].
 */
export interface RegenerateShareableLinkIdResponse {
}

function createBaseRegenerateShareableLinkIdRequest(): RegenerateShareableLinkIdRequest {
  return { resourceName: "" };
}

export const RegenerateShareableLinkIdRequest: MessageFns<RegenerateShareableLinkIdRequest> = {
  encode(message: RegenerateShareableLinkIdRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RegenerateShareableLinkIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegenerateShareableLinkIdRequest();
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

  fromJSON(object: any): RegenerateShareableLinkIdRequest {
    return { resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "" };
  },

  toJSON(message: RegenerateShareableLinkIdRequest): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    return obj;
  },

  create(base?: DeepPartial<RegenerateShareableLinkIdRequest>): RegenerateShareableLinkIdRequest {
    return RegenerateShareableLinkIdRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegenerateShareableLinkIdRequest>): RegenerateShareableLinkIdRequest {
    const message = createBaseRegenerateShareableLinkIdRequest();
    message.resourceName = object.resourceName ?? "";
    return message;
  },
};

function createBaseRegenerateShareableLinkIdResponse(): RegenerateShareableLinkIdResponse {
  return {};
}

export const RegenerateShareableLinkIdResponse: MessageFns<RegenerateShareableLinkIdResponse> = {
  encode(_: RegenerateShareableLinkIdResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RegenerateShareableLinkIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegenerateShareableLinkIdResponse();
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

  fromJSON(_: any): RegenerateShareableLinkIdResponse {
    return {};
  },

  toJSON(_: RegenerateShareableLinkIdResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<RegenerateShareableLinkIdResponse>): RegenerateShareableLinkIdResponse {
    return RegenerateShareableLinkIdResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<RegenerateShareableLinkIdResponse>): RegenerateShareableLinkIdResponse {
    const message = createBaseRegenerateShareableLinkIdResponse();
    return message;
  },
};

/**
 * This service allows management of links between Google Ads and third party
 * app analytics.
 */
export type ThirdPartyAppAnalyticsLinkServiceDefinition = typeof ThirdPartyAppAnalyticsLinkServiceDefinition;
export const ThirdPartyAppAnalyticsLinkServiceDefinition = {
  name: "ThirdPartyAppAnalyticsLinkService",
  fullName: "google.ads.googleads.v17.services.ThirdPartyAppAnalyticsLinkService",
  methods: {
    /**
     * Regenerate ThirdPartyAppAnalyticsLink.shareable_link_id that should be
     * provided to the third party when setting up app analytics.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [QuotaError]()
     *   [RequestError]()
     */
    regenerateShareableLinkId: {
      name: "RegenerateShareableLinkId",
      requestType: RegenerateShareableLinkIdRequest,
      requestStream: false,
      responseType: RegenerateShareableLinkIdResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              93,
              58,
              1,
              42,
              34,
              88,
              47,
              118,
              49,
              55,
              47,
              123,
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
              61,
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
              42,
              47,
              116,
              104,
              105,
              114,
              100,
              80,
              97,
              114,
              116,
              121,
              65,
              112,
              112,
              65,
              110,
              97,
              108,
              121,
              116,
              105,
              99,
              115,
              76,
              105,
              110,
              107,
              115,
              47,
              42,
              125,
              58,
              114,
              101,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              101,
              83,
              104,
              97,
              114,
              101,
              97,
              98,
              108,
              101,
              76,
              105,
              110,
              107,
              73,
              100,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface ThirdPartyAppAnalyticsLinkServiceImplementation<CallContextExt = {}> {
  /**
   * Regenerate ThirdPartyAppAnalyticsLink.shareable_link_id that should be
   * provided to the third party when setting up app analytics.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  regenerateShareableLinkId(
    request: RegenerateShareableLinkIdRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RegenerateShareableLinkIdResponse>>;
}

export interface ThirdPartyAppAnalyticsLinkServiceClient<CallOptionsExt = {}> {
  /**
   * Regenerate ThirdPartyAppAnalyticsLink.shareable_link_id that should be
   * provided to the third party when setting up app analytics.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  regenerateShareableLinkId(
    request: DeepPartial<RegenerateShareableLinkIdRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RegenerateShareableLinkIdResponse>;
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