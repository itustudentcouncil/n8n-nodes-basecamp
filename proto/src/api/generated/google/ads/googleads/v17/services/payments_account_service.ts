// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/services/payments_account_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { PaymentsAccount } from "../resources/payments_account.js";

export const protobufPackage = "google.ads.googleads.v17.services";

/** Request message for fetching all accessible payments accounts. */
export interface ListPaymentsAccountsRequest {
  /**
   * Required. The ID of the customer to apply the PaymentsAccount list
   * operation to.
   */
  customerId: string;
}

/**
 * Response message for
 * [PaymentsAccountService.ListPaymentsAccounts][google.ads.googleads.v17.services.PaymentsAccountService.ListPaymentsAccounts].
 */
export interface ListPaymentsAccountsResponse {
  /** The list of accessible payments accounts. */
  paymentsAccounts: PaymentsAccount[];
}

function createBaseListPaymentsAccountsRequest(): ListPaymentsAccountsRequest {
  return { customerId: "" };
}

export const ListPaymentsAccountsRequest: MessageFns<ListPaymentsAccountsRequest> = {
  encode(message: ListPaymentsAccountsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListPaymentsAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPaymentsAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListPaymentsAccountsRequest {
    return { customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : "" };
  },

  toJSON(message: ListPaymentsAccountsRequest): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    return obj;
  },

  create(base?: DeepPartial<ListPaymentsAccountsRequest>): ListPaymentsAccountsRequest {
    return ListPaymentsAccountsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPaymentsAccountsRequest>): ListPaymentsAccountsRequest {
    const message = createBaseListPaymentsAccountsRequest();
    message.customerId = object.customerId ?? "";
    return message;
  },
};

function createBaseListPaymentsAccountsResponse(): ListPaymentsAccountsResponse {
  return { paymentsAccounts: [] };
}

export const ListPaymentsAccountsResponse: MessageFns<ListPaymentsAccountsResponse> = {
  encode(message: ListPaymentsAccountsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.paymentsAccounts) {
      PaymentsAccount.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListPaymentsAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPaymentsAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paymentsAccounts.push(PaymentsAccount.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListPaymentsAccountsResponse {
    return {
      paymentsAccounts: globalThis.Array.isArray(object?.paymentsAccounts)
        ? object.paymentsAccounts.map((e: any) => PaymentsAccount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListPaymentsAccountsResponse): unknown {
    const obj: any = {};
    if (message.paymentsAccounts?.length) {
      obj.paymentsAccounts = message.paymentsAccounts.map((e) => PaymentsAccount.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListPaymentsAccountsResponse>): ListPaymentsAccountsResponse {
    return ListPaymentsAccountsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPaymentsAccountsResponse>): ListPaymentsAccountsResponse {
    const message = createBaseListPaymentsAccountsResponse();
    message.paymentsAccounts = object.paymentsAccounts?.map((e) => PaymentsAccount.fromPartial(e)) || [];
    return message;
  },
};

/**
 * Service to provide payments accounts that can be used to set up consolidated
 * billing.
 */
export type PaymentsAccountServiceDefinition = typeof PaymentsAccountServiceDefinition;
export const PaymentsAccountServiceDefinition = {
  name: "PaymentsAccountService",
  fullName: "google.ads.googleads.v17.services.PaymentsAccountService",
  methods: {
    /**
     * Returns all payments accounts associated with all managers
     * between the login customer ID and specified serving customer in the
     * hierarchy, inclusive.
     *
     * List of thrown errors:
     *   [AuthenticationError]()
     *   [AuthorizationError]()
     *   [HeaderError]()
     *   [InternalError]()
     *   [PaymentsAccountError]()
     *   [QuotaError]()
     *   [RequestError]()
     */
    listPaymentsAccounts: {
      name: "ListPaymentsAccounts",
      requestType: ListPaymentsAccountsRequest,
      requestStream: false,
      responseType: ListPaymentsAccountsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([11, 99, 117, 115, 116, 111, 109, 101, 114, 95, 105, 100])],
          578365826: [
            Buffer.from([
              49,
              18,
              47,
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
              97,
              121,
              109,
              101,
              110,
              116,
              115,
              65,
              99,
              99,
              111,
              117,
              110,
              116,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface PaymentsAccountServiceImplementation<CallContextExt = {}> {
  /**
   * Returns all payments accounts associated with all managers
   * between the login customer ID and specified serving customer in the
   * hierarchy, inclusive.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [PaymentsAccountError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  listPaymentsAccounts(
    request: ListPaymentsAccountsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListPaymentsAccountsResponse>>;
}

export interface PaymentsAccountServiceClient<CallOptionsExt = {}> {
  /**
   * Returns all payments accounts associated with all managers
   * between the login customer ID and specified serving customer in the
   * hierarchy, inclusive.
   *
   * List of thrown errors:
   *   [AuthenticationError]()
   *   [AuthorizationError]()
   *   [HeaderError]()
   *   [InternalError]()
   *   [PaymentsAccountError]()
   *   [QuotaError]()
   *   [RequestError]()
   */
  listPaymentsAccounts(
    request: DeepPartial<ListPaymentsAccountsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListPaymentsAccountsResponse>;
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