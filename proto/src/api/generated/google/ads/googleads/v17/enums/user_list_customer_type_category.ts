// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/user_list_customer_type_category.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** The user list customer type categories. */
export interface UserListCustomerTypeCategoryEnum {
}

/** Enum containing possible user list customer type categories. */
export enum UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Unknown type. */
  UNKNOWN = 1,
  /** ALL_CUSTOMERS - Customer type category for all customers. */
  ALL_CUSTOMERS = 2,
  /** PURCHASERS - Customer type category for all purchasers. */
  PURCHASERS = 3,
  /** HIGH_VALUE_CUSTOMERS - Customer type category for high value purchasers. */
  HIGH_VALUE_CUSTOMERS = 4,
  /** DISENGAGED_CUSTOMERS - Customer type category for disengaged purchasers. */
  DISENGAGED_CUSTOMERS = 5,
  /** QUALIFIED_LEADS - Customer type category for qualified leads. */
  QUALIFIED_LEADS = 6,
  /** CONVERTED_LEADS - Customer type category for converted leads. */
  CONVERTED_LEADS = 7,
  /** PAID_SUBSCRIBERS - Customer type category for paid subscribers. */
  PAID_SUBSCRIBERS = 8,
  /** LOYALTY_SIGN_UPS - Customer type category for loyalty signups. */
  LOYALTY_SIGN_UPS = 9,
  /** CART_ABANDONERS - Customer type category for cart abandoners. */
  CART_ABANDONERS = 10,
  /** LOYALTY_TIER_1_MEMBERS - Customer type category for loyalty tier 1 members. */
  LOYALTY_TIER_1_MEMBERS = 11,
  /** LOYALTY_TIER_2_MEMBERS - Customer type category for loyalty tier 2 members. */
  LOYALTY_TIER_2_MEMBERS = 12,
  /** LOYALTY_TIER_3_MEMBERS - Customer type category for loyalty tier 3 members. */
  LOYALTY_TIER_3_MEMBERS = 13,
  /** LOYALTY_TIER_4_MEMBERS - Customer type category for loyalty tier 4 members. */
  LOYALTY_TIER_4_MEMBERS = 14,
  /** LOYALTY_TIER_5_MEMBERS - Customer type category for loyalty tier 5 members. */
  LOYALTY_TIER_5_MEMBERS = 15,
  /** LOYALTY_TIER_6_MEMBERS - Customer type category for loyalty tier 6 members. */
  LOYALTY_TIER_6_MEMBERS = 16,
  /** LOYALTY_TIER_7_MEMBERS - Customer type category for loyalty tier 7 members. */
  LOYALTY_TIER_7_MEMBERS = 17,
  UNRECOGNIZED = -1,
}

export function userListCustomerTypeCategoryEnum_UserListCustomerTypeCategoryFromJSON(
  object: any,
): UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.UNKNOWN;
    case 2:
    case "ALL_CUSTOMERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.ALL_CUSTOMERS;
    case 3:
    case "PURCHASERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.PURCHASERS;
    case 4:
    case "HIGH_VALUE_CUSTOMERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.HIGH_VALUE_CUSTOMERS;
    case 5:
    case "DISENGAGED_CUSTOMERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.DISENGAGED_CUSTOMERS;
    case 6:
    case "QUALIFIED_LEADS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.QUALIFIED_LEADS;
    case 7:
    case "CONVERTED_LEADS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.CONVERTED_LEADS;
    case 8:
    case "PAID_SUBSCRIBERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.PAID_SUBSCRIBERS;
    case 9:
    case "LOYALTY_SIGN_UPS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_SIGN_UPS;
    case 10:
    case "CART_ABANDONERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.CART_ABANDONERS;
    case 11:
    case "LOYALTY_TIER_1_MEMBERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_1_MEMBERS;
    case 12:
    case "LOYALTY_TIER_2_MEMBERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_2_MEMBERS;
    case 13:
    case "LOYALTY_TIER_3_MEMBERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_3_MEMBERS;
    case 14:
    case "LOYALTY_TIER_4_MEMBERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_4_MEMBERS;
    case 15:
    case "LOYALTY_TIER_5_MEMBERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_5_MEMBERS;
    case 16:
    case "LOYALTY_TIER_6_MEMBERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_6_MEMBERS;
    case 17:
    case "LOYALTY_TIER_7_MEMBERS":
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_7_MEMBERS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.UNRECOGNIZED;
  }
}

export function userListCustomerTypeCategoryEnum_UserListCustomerTypeCategoryToJSON(
  object: UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory,
): string {
  switch (object) {
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.UNSPECIFIED:
      return "UNSPECIFIED";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.UNKNOWN:
      return "UNKNOWN";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.ALL_CUSTOMERS:
      return "ALL_CUSTOMERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.PURCHASERS:
      return "PURCHASERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.HIGH_VALUE_CUSTOMERS:
      return "HIGH_VALUE_CUSTOMERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.DISENGAGED_CUSTOMERS:
      return "DISENGAGED_CUSTOMERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.QUALIFIED_LEADS:
      return "QUALIFIED_LEADS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.CONVERTED_LEADS:
      return "CONVERTED_LEADS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.PAID_SUBSCRIBERS:
      return "PAID_SUBSCRIBERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_SIGN_UPS:
      return "LOYALTY_SIGN_UPS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.CART_ABANDONERS:
      return "CART_ABANDONERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_1_MEMBERS:
      return "LOYALTY_TIER_1_MEMBERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_2_MEMBERS:
      return "LOYALTY_TIER_2_MEMBERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_3_MEMBERS:
      return "LOYALTY_TIER_3_MEMBERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_4_MEMBERS:
      return "LOYALTY_TIER_4_MEMBERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_5_MEMBERS:
      return "LOYALTY_TIER_5_MEMBERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_6_MEMBERS:
      return "LOYALTY_TIER_6_MEMBERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.LOYALTY_TIER_7_MEMBERS:
      return "LOYALTY_TIER_7_MEMBERS";
    case UserListCustomerTypeCategoryEnum_UserListCustomerTypeCategory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUserListCustomerTypeCategoryEnum(): UserListCustomerTypeCategoryEnum {
  return {};
}

export const UserListCustomerTypeCategoryEnum: MessageFns<UserListCustomerTypeCategoryEnum> = {
  encode(_: UserListCustomerTypeCategoryEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserListCustomerTypeCategoryEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserListCustomerTypeCategoryEnum();
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

  fromJSON(_: any): UserListCustomerTypeCategoryEnum {
    return {};
  },

  toJSON(_: UserListCustomerTypeCategoryEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<UserListCustomerTypeCategoryEnum>): UserListCustomerTypeCategoryEnum {
    return UserListCustomerTypeCategoryEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<UserListCustomerTypeCategoryEnum>): UserListCustomerTypeCategoryEnum {
    const message = createBaseUserListCustomerTypeCategoryEnum();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}