// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/enums/user_list_size_range.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.enums";

/** Size range in terms of number of users of a UserList. */
export interface UserListSizeRangeEnum {
}

/** Enum containing possible user list size ranges. */
export enum UserListSizeRangeEnum_UserListSizeRange {
  /** UNSPECIFIED - Not specified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - Used for return value only. Represents value unknown in this version. */
  UNKNOWN = 1,
  /** LESS_THAN_FIVE_HUNDRED - User list has less than 500 users. */
  LESS_THAN_FIVE_HUNDRED = 2,
  /** LESS_THAN_ONE_THOUSAND - User list has number of users in range of 500 to 1000. */
  LESS_THAN_ONE_THOUSAND = 3,
  /** ONE_THOUSAND_TO_TEN_THOUSAND - User list has number of users in range of 1000 to 10000. */
  ONE_THOUSAND_TO_TEN_THOUSAND = 4,
  /** TEN_THOUSAND_TO_FIFTY_THOUSAND - User list has number of users in range of 10000 to 50000. */
  TEN_THOUSAND_TO_FIFTY_THOUSAND = 5,
  /** FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND - User list has number of users in range of 50000 to 100000. */
  FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND = 6,
  /** ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND - User list has number of users in range of 100000 to 300000. */
  ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND = 7,
  /** THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND - User list has number of users in range of 300000 to 500000. */
  THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND = 8,
  /** FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION - User list has number of users in range of 500000 to 1 million. */
  FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION = 9,
  /** ONE_MILLION_TO_TWO_MILLION - User list has number of users in range of 1 to 2 millions. */
  ONE_MILLION_TO_TWO_MILLION = 10,
  /** TWO_MILLION_TO_THREE_MILLION - User list has number of users in range of 2 to 3 millions. */
  TWO_MILLION_TO_THREE_MILLION = 11,
  /** THREE_MILLION_TO_FIVE_MILLION - User list has number of users in range of 3 to 5 millions. */
  THREE_MILLION_TO_FIVE_MILLION = 12,
  /** FIVE_MILLION_TO_TEN_MILLION - User list has number of users in range of 5 to 10 millions. */
  FIVE_MILLION_TO_TEN_MILLION = 13,
  /** TEN_MILLION_TO_TWENTY_MILLION - User list has number of users in range of 10 to 20 millions. */
  TEN_MILLION_TO_TWENTY_MILLION = 14,
  /** TWENTY_MILLION_TO_THIRTY_MILLION - User list has number of users in range of 20 to 30 millions. */
  TWENTY_MILLION_TO_THIRTY_MILLION = 15,
  /** THIRTY_MILLION_TO_FIFTY_MILLION - User list has number of users in range of 30 to 50 millions. */
  THIRTY_MILLION_TO_FIFTY_MILLION = 16,
  /** OVER_FIFTY_MILLION - User list has over 50 million users. */
  OVER_FIFTY_MILLION = 17,
  UNRECOGNIZED = -1,
}

export function userListSizeRangeEnum_UserListSizeRangeFromJSON(object: any): UserListSizeRangeEnum_UserListSizeRange {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return UserListSizeRangeEnum_UserListSizeRange.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return UserListSizeRangeEnum_UserListSizeRange.UNKNOWN;
    case 2:
    case "LESS_THAN_FIVE_HUNDRED":
      return UserListSizeRangeEnum_UserListSizeRange.LESS_THAN_FIVE_HUNDRED;
    case 3:
    case "LESS_THAN_ONE_THOUSAND":
      return UserListSizeRangeEnum_UserListSizeRange.LESS_THAN_ONE_THOUSAND;
    case 4:
    case "ONE_THOUSAND_TO_TEN_THOUSAND":
      return UserListSizeRangeEnum_UserListSizeRange.ONE_THOUSAND_TO_TEN_THOUSAND;
    case 5:
    case "TEN_THOUSAND_TO_FIFTY_THOUSAND":
      return UserListSizeRangeEnum_UserListSizeRange.TEN_THOUSAND_TO_FIFTY_THOUSAND;
    case 6:
    case "FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND":
      return UserListSizeRangeEnum_UserListSizeRange.FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND;
    case 7:
    case "ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND":
      return UserListSizeRangeEnum_UserListSizeRange.ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND;
    case 8:
    case "THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND":
      return UserListSizeRangeEnum_UserListSizeRange.THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND;
    case 9:
    case "FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION":
      return UserListSizeRangeEnum_UserListSizeRange.FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION;
    case 10:
    case "ONE_MILLION_TO_TWO_MILLION":
      return UserListSizeRangeEnum_UserListSizeRange.ONE_MILLION_TO_TWO_MILLION;
    case 11:
    case "TWO_MILLION_TO_THREE_MILLION":
      return UserListSizeRangeEnum_UserListSizeRange.TWO_MILLION_TO_THREE_MILLION;
    case 12:
    case "THREE_MILLION_TO_FIVE_MILLION":
      return UserListSizeRangeEnum_UserListSizeRange.THREE_MILLION_TO_FIVE_MILLION;
    case 13:
    case "FIVE_MILLION_TO_TEN_MILLION":
      return UserListSizeRangeEnum_UserListSizeRange.FIVE_MILLION_TO_TEN_MILLION;
    case 14:
    case "TEN_MILLION_TO_TWENTY_MILLION":
      return UserListSizeRangeEnum_UserListSizeRange.TEN_MILLION_TO_TWENTY_MILLION;
    case 15:
    case "TWENTY_MILLION_TO_THIRTY_MILLION":
      return UserListSizeRangeEnum_UserListSizeRange.TWENTY_MILLION_TO_THIRTY_MILLION;
    case 16:
    case "THIRTY_MILLION_TO_FIFTY_MILLION":
      return UserListSizeRangeEnum_UserListSizeRange.THIRTY_MILLION_TO_FIFTY_MILLION;
    case 17:
    case "OVER_FIFTY_MILLION":
      return UserListSizeRangeEnum_UserListSizeRange.OVER_FIFTY_MILLION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserListSizeRangeEnum_UserListSizeRange.UNRECOGNIZED;
  }
}

export function userListSizeRangeEnum_UserListSizeRangeToJSON(object: UserListSizeRangeEnum_UserListSizeRange): string {
  switch (object) {
    case UserListSizeRangeEnum_UserListSizeRange.UNSPECIFIED:
      return "UNSPECIFIED";
    case UserListSizeRangeEnum_UserListSizeRange.UNKNOWN:
      return "UNKNOWN";
    case UserListSizeRangeEnum_UserListSizeRange.LESS_THAN_FIVE_HUNDRED:
      return "LESS_THAN_FIVE_HUNDRED";
    case UserListSizeRangeEnum_UserListSizeRange.LESS_THAN_ONE_THOUSAND:
      return "LESS_THAN_ONE_THOUSAND";
    case UserListSizeRangeEnum_UserListSizeRange.ONE_THOUSAND_TO_TEN_THOUSAND:
      return "ONE_THOUSAND_TO_TEN_THOUSAND";
    case UserListSizeRangeEnum_UserListSizeRange.TEN_THOUSAND_TO_FIFTY_THOUSAND:
      return "TEN_THOUSAND_TO_FIFTY_THOUSAND";
    case UserListSizeRangeEnum_UserListSizeRange.FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND:
      return "FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND";
    case UserListSizeRangeEnum_UserListSizeRange.ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND:
      return "ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND";
    case UserListSizeRangeEnum_UserListSizeRange.THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND:
      return "THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND";
    case UserListSizeRangeEnum_UserListSizeRange.FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION:
      return "FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION";
    case UserListSizeRangeEnum_UserListSizeRange.ONE_MILLION_TO_TWO_MILLION:
      return "ONE_MILLION_TO_TWO_MILLION";
    case UserListSizeRangeEnum_UserListSizeRange.TWO_MILLION_TO_THREE_MILLION:
      return "TWO_MILLION_TO_THREE_MILLION";
    case UserListSizeRangeEnum_UserListSizeRange.THREE_MILLION_TO_FIVE_MILLION:
      return "THREE_MILLION_TO_FIVE_MILLION";
    case UserListSizeRangeEnum_UserListSizeRange.FIVE_MILLION_TO_TEN_MILLION:
      return "FIVE_MILLION_TO_TEN_MILLION";
    case UserListSizeRangeEnum_UserListSizeRange.TEN_MILLION_TO_TWENTY_MILLION:
      return "TEN_MILLION_TO_TWENTY_MILLION";
    case UserListSizeRangeEnum_UserListSizeRange.TWENTY_MILLION_TO_THIRTY_MILLION:
      return "TWENTY_MILLION_TO_THIRTY_MILLION";
    case UserListSizeRangeEnum_UserListSizeRange.THIRTY_MILLION_TO_FIFTY_MILLION:
      return "THIRTY_MILLION_TO_FIFTY_MILLION";
    case UserListSizeRangeEnum_UserListSizeRange.OVER_FIFTY_MILLION:
      return "OVER_FIFTY_MILLION";
    case UserListSizeRangeEnum_UserListSizeRange.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUserListSizeRangeEnum(): UserListSizeRangeEnum {
  return {};
}

export const UserListSizeRangeEnum: MessageFns<UserListSizeRangeEnum> = {
  encode(_: UserListSizeRangeEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserListSizeRangeEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserListSizeRangeEnum();
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

  fromJSON(_: any): UserListSizeRangeEnum {
    return {};
  },

  toJSON(_: UserListSizeRangeEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<UserListSizeRangeEnum>): UserListSizeRangeEnum {
    return UserListSizeRangeEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<UserListSizeRangeEnum>): UserListSizeRangeEnum {
    const message = createBaseUserListSizeRangeEnum();
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
