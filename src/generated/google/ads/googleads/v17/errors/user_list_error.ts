// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/errors/user_list_error.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.ads.googleads.v17.errors";

/** Container for enum describing possible user list errors. */
export interface UserListErrorEnum {
}

/** Enum describing possible user list errors. */
export enum UserListErrorEnum_UserListError {
  /** UNSPECIFIED - Enum unspecified. */
  UNSPECIFIED = 0,
  /** UNKNOWN - The received error code is not known in this version. */
  UNKNOWN = 1,
  /** EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED - Creating and updating external remarketing user lists is not supported. */
  EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED = 2,
  /** CONCRETE_TYPE_REQUIRED - Concrete type of user list is required. */
  CONCRETE_TYPE_REQUIRED = 3,
  /**
   * CONVERSION_TYPE_ID_REQUIRED - Creating/updating user list conversion types requires specifying the
   * conversion type Id.
   */
  CONVERSION_TYPE_ID_REQUIRED = 4,
  /** DUPLICATE_CONVERSION_TYPES - Remarketing user list cannot have duplicate conversion types. */
  DUPLICATE_CONVERSION_TYPES = 5,
  /** INVALID_CONVERSION_TYPE - Conversion type is invalid/unknown. */
  INVALID_CONVERSION_TYPE = 6,
  /** INVALID_DESCRIPTION - User list description is empty or invalid. */
  INVALID_DESCRIPTION = 7,
  /** INVALID_NAME - User list name is empty or invalid. */
  INVALID_NAME = 8,
  /** INVALID_TYPE - Type of the UserList does not match. */
  INVALID_TYPE = 9,
  /** CAN_NOT_ADD_LOGICAL_LIST_AS_LOGICAL_LIST_OPERAND - Embedded logical user lists are not allowed. */
  CAN_NOT_ADD_LOGICAL_LIST_AS_LOGICAL_LIST_OPERAND = 10,
  /** INVALID_USER_LIST_LOGICAL_RULE_OPERAND - User list rule operand is invalid. */
  INVALID_USER_LIST_LOGICAL_RULE_OPERAND = 11,
  /** NAME_ALREADY_USED - Name is already being used for another user list for the account. */
  NAME_ALREADY_USED = 12,
  /** NEW_CONVERSION_TYPE_NAME_REQUIRED - Name is required when creating a new conversion type. */
  NEW_CONVERSION_TYPE_NAME_REQUIRED = 13,
  /** CONVERSION_TYPE_NAME_ALREADY_USED - The given conversion type name has been used. */
  CONVERSION_TYPE_NAME_ALREADY_USED = 14,
  /** OWNERSHIP_REQUIRED_FOR_SET - Only an owner account may edit a user list. */
  OWNERSHIP_REQUIRED_FOR_SET = 15,
  /**
   * USER_LIST_MUTATE_NOT_SUPPORTED - Creating user list without setting type in oneof user_list field, or
   * creating/updating read-only user list types is not allowed.
   */
  USER_LIST_MUTATE_NOT_SUPPORTED = 16,
  /** INVALID_RULE - Rule is invalid. */
  INVALID_RULE = 17,
  /** INVALID_DATE_RANGE - The specified date range is empty. */
  INVALID_DATE_RANGE = 27,
  /**
   * CAN_NOT_MUTATE_SENSITIVE_USERLIST - A UserList which is privacy sensitive or legal rejected cannot be mutated
   * by external users.
   */
  CAN_NOT_MUTATE_SENSITIVE_USERLIST = 28,
  /** MAX_NUM_RULEBASED_USERLISTS - Maximum number of rulebased user lists a customer can have. */
  MAX_NUM_RULEBASED_USERLISTS = 29,
  /** CANNOT_MODIFY_BILLABLE_RECORD_COUNT - BasicUserList's billable record field cannot be modified once it is set. */
  CANNOT_MODIFY_BILLABLE_RECORD_COUNT = 30,
  /**
   * APP_ID_NOT_SET - crm_based_user_list.app_id field must be set when upload_key_type is
   * MOBILE_ADVERTISING_ID.
   */
  APP_ID_NOT_SET = 31,
  /**
   * USERLIST_NAME_IS_RESERVED_FOR_SYSTEM_LIST - Name of the user list is reserved for system generated lists and cannot
   * be used.
   */
  USERLIST_NAME_IS_RESERVED_FOR_SYSTEM_LIST = 32,
  /**
   * ADVERTISER_NOT_ON_ALLOWLIST_FOR_USING_UPLOADED_DATA - Advertiser needs to be on the allow-list to use remarketing lists created
   * from advertiser uploaded data (for example, Customer Match lists).
   */
  ADVERTISER_NOT_ON_ALLOWLIST_FOR_USING_UPLOADED_DATA = 37,
  /** RULE_TYPE_IS_NOT_SUPPORTED - The provided rule_type is not supported for the user list. */
  RULE_TYPE_IS_NOT_SUPPORTED = 34,
  /** CAN_NOT_ADD_A_SIMILAR_USERLIST_AS_LOGICAL_LIST_OPERAND - Similar user list cannot be used as a logical user list operand. */
  CAN_NOT_ADD_A_SIMILAR_USERLIST_AS_LOGICAL_LIST_OPERAND = 35,
  /**
   * CAN_NOT_MIX_CRM_BASED_IN_LOGICAL_LIST_WITH_OTHER_LISTS - Logical user list should not have a mix of CRM based user list and other
   * types of lists in its rules.
   */
  CAN_NOT_MIX_CRM_BASED_IN_LOGICAL_LIST_WITH_OTHER_LISTS = 36,
  /**
   * APP_ID_NOT_ALLOWED - crm_based_user_list.app_id field can only be set when upload_key_type is
   * MOBILE_ADVERTISING_ID.
   */
  APP_ID_NOT_ALLOWED = 39,
  /** CANNOT_MUTATE_SYSTEM_LIST - Google system generated user lists cannot be mutated. */
  CANNOT_MUTATE_SYSTEM_LIST = 40,
  /** MOBILE_APP_IS_SENSITIVE - The mobile app associated with the remarketing list is sensitive. */
  MOBILE_APP_IS_SENSITIVE = 41,
  /** SEED_LIST_DOES_NOT_EXIST - One or more given seed lists do not exist. */
  SEED_LIST_DOES_NOT_EXIST = 42,
  /** INVALID_SEED_LIST_ACCESS_REASON - One or more given seed lists are not accessible to the current user. */
  INVALID_SEED_LIST_ACCESS_REASON = 43,
  /** INVALID_SEED_LIST_TYPE - One or more given seed lists have an unsupported type. */
  INVALID_SEED_LIST_TYPE = 44,
  /** INVALID_COUNTRY_CODES - One or more invalid country codes are added to Lookalike UserList. */
  INVALID_COUNTRY_CODES = 45,
  UNRECOGNIZED = -1,
}

export function userListErrorEnum_UserListErrorFromJSON(object: any): UserListErrorEnum_UserListError {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return UserListErrorEnum_UserListError.UNSPECIFIED;
    case 1:
    case "UNKNOWN":
      return UserListErrorEnum_UserListError.UNKNOWN;
    case 2:
    case "EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED":
      return UserListErrorEnum_UserListError.EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED;
    case 3:
    case "CONCRETE_TYPE_REQUIRED":
      return UserListErrorEnum_UserListError.CONCRETE_TYPE_REQUIRED;
    case 4:
    case "CONVERSION_TYPE_ID_REQUIRED":
      return UserListErrorEnum_UserListError.CONVERSION_TYPE_ID_REQUIRED;
    case 5:
    case "DUPLICATE_CONVERSION_TYPES":
      return UserListErrorEnum_UserListError.DUPLICATE_CONVERSION_TYPES;
    case 6:
    case "INVALID_CONVERSION_TYPE":
      return UserListErrorEnum_UserListError.INVALID_CONVERSION_TYPE;
    case 7:
    case "INVALID_DESCRIPTION":
      return UserListErrorEnum_UserListError.INVALID_DESCRIPTION;
    case 8:
    case "INVALID_NAME":
      return UserListErrorEnum_UserListError.INVALID_NAME;
    case 9:
    case "INVALID_TYPE":
      return UserListErrorEnum_UserListError.INVALID_TYPE;
    case 10:
    case "CAN_NOT_ADD_LOGICAL_LIST_AS_LOGICAL_LIST_OPERAND":
      return UserListErrorEnum_UserListError.CAN_NOT_ADD_LOGICAL_LIST_AS_LOGICAL_LIST_OPERAND;
    case 11:
    case "INVALID_USER_LIST_LOGICAL_RULE_OPERAND":
      return UserListErrorEnum_UserListError.INVALID_USER_LIST_LOGICAL_RULE_OPERAND;
    case 12:
    case "NAME_ALREADY_USED":
      return UserListErrorEnum_UserListError.NAME_ALREADY_USED;
    case 13:
    case "NEW_CONVERSION_TYPE_NAME_REQUIRED":
      return UserListErrorEnum_UserListError.NEW_CONVERSION_TYPE_NAME_REQUIRED;
    case 14:
    case "CONVERSION_TYPE_NAME_ALREADY_USED":
      return UserListErrorEnum_UserListError.CONVERSION_TYPE_NAME_ALREADY_USED;
    case 15:
    case "OWNERSHIP_REQUIRED_FOR_SET":
      return UserListErrorEnum_UserListError.OWNERSHIP_REQUIRED_FOR_SET;
    case 16:
    case "USER_LIST_MUTATE_NOT_SUPPORTED":
      return UserListErrorEnum_UserListError.USER_LIST_MUTATE_NOT_SUPPORTED;
    case 17:
    case "INVALID_RULE":
      return UserListErrorEnum_UserListError.INVALID_RULE;
    case 27:
    case "INVALID_DATE_RANGE":
      return UserListErrorEnum_UserListError.INVALID_DATE_RANGE;
    case 28:
    case "CAN_NOT_MUTATE_SENSITIVE_USERLIST":
      return UserListErrorEnum_UserListError.CAN_NOT_MUTATE_SENSITIVE_USERLIST;
    case 29:
    case "MAX_NUM_RULEBASED_USERLISTS":
      return UserListErrorEnum_UserListError.MAX_NUM_RULEBASED_USERLISTS;
    case 30:
    case "CANNOT_MODIFY_BILLABLE_RECORD_COUNT":
      return UserListErrorEnum_UserListError.CANNOT_MODIFY_BILLABLE_RECORD_COUNT;
    case 31:
    case "APP_ID_NOT_SET":
      return UserListErrorEnum_UserListError.APP_ID_NOT_SET;
    case 32:
    case "USERLIST_NAME_IS_RESERVED_FOR_SYSTEM_LIST":
      return UserListErrorEnum_UserListError.USERLIST_NAME_IS_RESERVED_FOR_SYSTEM_LIST;
    case 37:
    case "ADVERTISER_NOT_ON_ALLOWLIST_FOR_USING_UPLOADED_DATA":
      return UserListErrorEnum_UserListError.ADVERTISER_NOT_ON_ALLOWLIST_FOR_USING_UPLOADED_DATA;
    case 34:
    case "RULE_TYPE_IS_NOT_SUPPORTED":
      return UserListErrorEnum_UserListError.RULE_TYPE_IS_NOT_SUPPORTED;
    case 35:
    case "CAN_NOT_ADD_A_SIMILAR_USERLIST_AS_LOGICAL_LIST_OPERAND":
      return UserListErrorEnum_UserListError.CAN_NOT_ADD_A_SIMILAR_USERLIST_AS_LOGICAL_LIST_OPERAND;
    case 36:
    case "CAN_NOT_MIX_CRM_BASED_IN_LOGICAL_LIST_WITH_OTHER_LISTS":
      return UserListErrorEnum_UserListError.CAN_NOT_MIX_CRM_BASED_IN_LOGICAL_LIST_WITH_OTHER_LISTS;
    case 39:
    case "APP_ID_NOT_ALLOWED":
      return UserListErrorEnum_UserListError.APP_ID_NOT_ALLOWED;
    case 40:
    case "CANNOT_MUTATE_SYSTEM_LIST":
      return UserListErrorEnum_UserListError.CANNOT_MUTATE_SYSTEM_LIST;
    case 41:
    case "MOBILE_APP_IS_SENSITIVE":
      return UserListErrorEnum_UserListError.MOBILE_APP_IS_SENSITIVE;
    case 42:
    case "SEED_LIST_DOES_NOT_EXIST":
      return UserListErrorEnum_UserListError.SEED_LIST_DOES_NOT_EXIST;
    case 43:
    case "INVALID_SEED_LIST_ACCESS_REASON":
      return UserListErrorEnum_UserListError.INVALID_SEED_LIST_ACCESS_REASON;
    case 44:
    case "INVALID_SEED_LIST_TYPE":
      return UserListErrorEnum_UserListError.INVALID_SEED_LIST_TYPE;
    case 45:
    case "INVALID_COUNTRY_CODES":
      return UserListErrorEnum_UserListError.INVALID_COUNTRY_CODES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserListErrorEnum_UserListError.UNRECOGNIZED;
  }
}

export function userListErrorEnum_UserListErrorToJSON(object: UserListErrorEnum_UserListError): string {
  switch (object) {
    case UserListErrorEnum_UserListError.UNSPECIFIED:
      return "UNSPECIFIED";
    case UserListErrorEnum_UserListError.UNKNOWN:
      return "UNKNOWN";
    case UserListErrorEnum_UserListError.EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED:
      return "EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED";
    case UserListErrorEnum_UserListError.CONCRETE_TYPE_REQUIRED:
      return "CONCRETE_TYPE_REQUIRED";
    case UserListErrorEnum_UserListError.CONVERSION_TYPE_ID_REQUIRED:
      return "CONVERSION_TYPE_ID_REQUIRED";
    case UserListErrorEnum_UserListError.DUPLICATE_CONVERSION_TYPES:
      return "DUPLICATE_CONVERSION_TYPES";
    case UserListErrorEnum_UserListError.INVALID_CONVERSION_TYPE:
      return "INVALID_CONVERSION_TYPE";
    case UserListErrorEnum_UserListError.INVALID_DESCRIPTION:
      return "INVALID_DESCRIPTION";
    case UserListErrorEnum_UserListError.INVALID_NAME:
      return "INVALID_NAME";
    case UserListErrorEnum_UserListError.INVALID_TYPE:
      return "INVALID_TYPE";
    case UserListErrorEnum_UserListError.CAN_NOT_ADD_LOGICAL_LIST_AS_LOGICAL_LIST_OPERAND:
      return "CAN_NOT_ADD_LOGICAL_LIST_AS_LOGICAL_LIST_OPERAND";
    case UserListErrorEnum_UserListError.INVALID_USER_LIST_LOGICAL_RULE_OPERAND:
      return "INVALID_USER_LIST_LOGICAL_RULE_OPERAND";
    case UserListErrorEnum_UserListError.NAME_ALREADY_USED:
      return "NAME_ALREADY_USED";
    case UserListErrorEnum_UserListError.NEW_CONVERSION_TYPE_NAME_REQUIRED:
      return "NEW_CONVERSION_TYPE_NAME_REQUIRED";
    case UserListErrorEnum_UserListError.CONVERSION_TYPE_NAME_ALREADY_USED:
      return "CONVERSION_TYPE_NAME_ALREADY_USED";
    case UserListErrorEnum_UserListError.OWNERSHIP_REQUIRED_FOR_SET:
      return "OWNERSHIP_REQUIRED_FOR_SET";
    case UserListErrorEnum_UserListError.USER_LIST_MUTATE_NOT_SUPPORTED:
      return "USER_LIST_MUTATE_NOT_SUPPORTED";
    case UserListErrorEnum_UserListError.INVALID_RULE:
      return "INVALID_RULE";
    case UserListErrorEnum_UserListError.INVALID_DATE_RANGE:
      return "INVALID_DATE_RANGE";
    case UserListErrorEnum_UserListError.CAN_NOT_MUTATE_SENSITIVE_USERLIST:
      return "CAN_NOT_MUTATE_SENSITIVE_USERLIST";
    case UserListErrorEnum_UserListError.MAX_NUM_RULEBASED_USERLISTS:
      return "MAX_NUM_RULEBASED_USERLISTS";
    case UserListErrorEnum_UserListError.CANNOT_MODIFY_BILLABLE_RECORD_COUNT:
      return "CANNOT_MODIFY_BILLABLE_RECORD_COUNT";
    case UserListErrorEnum_UserListError.APP_ID_NOT_SET:
      return "APP_ID_NOT_SET";
    case UserListErrorEnum_UserListError.USERLIST_NAME_IS_RESERVED_FOR_SYSTEM_LIST:
      return "USERLIST_NAME_IS_RESERVED_FOR_SYSTEM_LIST";
    case UserListErrorEnum_UserListError.ADVERTISER_NOT_ON_ALLOWLIST_FOR_USING_UPLOADED_DATA:
      return "ADVERTISER_NOT_ON_ALLOWLIST_FOR_USING_UPLOADED_DATA";
    case UserListErrorEnum_UserListError.RULE_TYPE_IS_NOT_SUPPORTED:
      return "RULE_TYPE_IS_NOT_SUPPORTED";
    case UserListErrorEnum_UserListError.CAN_NOT_ADD_A_SIMILAR_USERLIST_AS_LOGICAL_LIST_OPERAND:
      return "CAN_NOT_ADD_A_SIMILAR_USERLIST_AS_LOGICAL_LIST_OPERAND";
    case UserListErrorEnum_UserListError.CAN_NOT_MIX_CRM_BASED_IN_LOGICAL_LIST_WITH_OTHER_LISTS:
      return "CAN_NOT_MIX_CRM_BASED_IN_LOGICAL_LIST_WITH_OTHER_LISTS";
    case UserListErrorEnum_UserListError.APP_ID_NOT_ALLOWED:
      return "APP_ID_NOT_ALLOWED";
    case UserListErrorEnum_UserListError.CANNOT_MUTATE_SYSTEM_LIST:
      return "CANNOT_MUTATE_SYSTEM_LIST";
    case UserListErrorEnum_UserListError.MOBILE_APP_IS_SENSITIVE:
      return "MOBILE_APP_IS_SENSITIVE";
    case UserListErrorEnum_UserListError.SEED_LIST_DOES_NOT_EXIST:
      return "SEED_LIST_DOES_NOT_EXIST";
    case UserListErrorEnum_UserListError.INVALID_SEED_LIST_ACCESS_REASON:
      return "INVALID_SEED_LIST_ACCESS_REASON";
    case UserListErrorEnum_UserListError.INVALID_SEED_LIST_TYPE:
      return "INVALID_SEED_LIST_TYPE";
    case UserListErrorEnum_UserListError.INVALID_COUNTRY_CODES:
      return "INVALID_COUNTRY_CODES";
    case UserListErrorEnum_UserListError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUserListErrorEnum(): UserListErrorEnum {
  return {};
}

export const UserListErrorEnum: MessageFns<UserListErrorEnum> = {
  encode(_: UserListErrorEnum, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserListErrorEnum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserListErrorEnum();
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

  fromJSON(_: any): UserListErrorEnum {
    return {};
  },

  toJSON(_: UserListErrorEnum): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<UserListErrorEnum>): UserListErrorEnum {
    return UserListErrorEnum.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<UserListErrorEnum>): UserListErrorEnum {
    const message = createBaseUserListErrorEnum();
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