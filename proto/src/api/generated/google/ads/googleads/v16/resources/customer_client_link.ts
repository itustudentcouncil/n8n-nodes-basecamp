// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v16/resources/customer_client_link.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  ManagerLinkStatusEnum_ManagerLinkStatus,
  managerLinkStatusEnum_ManagerLinkStatusFromJSON,
  managerLinkStatusEnum_ManagerLinkStatusToJSON,
} from "../enums/manager_link_status.js";

export const protobufPackage = "google.ads.googleads.v16.resources";

/** Represents customer client link relationship. */
export interface CustomerClientLink {
  /**
   * Immutable. Name of the resource.
   * CustomerClientLink resource names have the form:
   * `customers/{customer_id}/customerClientLinks/{client_customer_id}~{manager_link_id}`
   */
  resourceName: string;
  /** Immutable. The client customer linked to this customer. */
  clientCustomer?:
    | string
    | undefined;
  /** Output only. This is uniquely identifies a customer client link. Read only. */
  managerLinkId?:
    | Long
    | undefined;
  /** This is the status of the link between client and manager. */
  status: ManagerLinkStatusEnum_ManagerLinkStatus;
  /**
   * The visibility of the link. Users can choose whether or not to see hidden
   * links in the Google Ads UI.
   * Default value is false
   */
  hidden?: boolean | undefined;
}

function createBaseCustomerClientLink(): CustomerClientLink {
  return { resourceName: "", clientCustomer: undefined, managerLinkId: undefined, status: 0, hidden: undefined };
}

export const CustomerClientLink: MessageFns<CustomerClientLink> = {
  encode(message: CustomerClientLink, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.clientCustomer !== undefined) {
      writer.uint32(58).string(message.clientCustomer);
    }
    if (message.managerLinkId !== undefined) {
      writer.uint32(64).int64(message.managerLinkId.toString());
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.hidden !== undefined) {
      writer.uint32(72).bool(message.hidden);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomerClientLink {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerClientLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.clientCustomer = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.managerLinkId = Long.fromString(reader.int64().toString());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.hidden = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomerClientLink {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      clientCustomer: isSet(object.clientCustomer) ? globalThis.String(object.clientCustomer) : undefined,
      managerLinkId: isSet(object.managerLinkId) ? Long.fromValue(object.managerLinkId) : undefined,
      status: isSet(object.status) ? managerLinkStatusEnum_ManagerLinkStatusFromJSON(object.status) : 0,
      hidden: isSet(object.hidden) ? globalThis.Boolean(object.hidden) : undefined,
    };
  },

  toJSON(message: CustomerClientLink): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.clientCustomer !== undefined) {
      obj.clientCustomer = message.clientCustomer;
    }
    if (message.managerLinkId !== undefined) {
      obj.managerLinkId = (message.managerLinkId || Long.ZERO).toString();
    }
    if (message.status !== 0) {
      obj.status = managerLinkStatusEnum_ManagerLinkStatusToJSON(message.status);
    }
    if (message.hidden !== undefined) {
      obj.hidden = message.hidden;
    }
    return obj;
  },

  create(base?: DeepPartial<CustomerClientLink>): CustomerClientLink {
    return CustomerClientLink.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomerClientLink>): CustomerClientLink {
    const message = createBaseCustomerClientLink();
    message.resourceName = object.resourceName ?? "";
    message.clientCustomer = object.clientCustomer ?? undefined;
    message.managerLinkId = (object.managerLinkId !== undefined && object.managerLinkId !== null)
      ? Long.fromValue(object.managerLinkId)
      : undefined;
    message.status = object.status ?? 0;
    message.hidden = object.hidden ?? undefined;
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