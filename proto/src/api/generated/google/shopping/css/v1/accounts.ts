// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/shopping/css/v1/accounts.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";

export const protobufPackage = "google.shopping.css.v1";

/** The request message for the `ListChildAccounts` method. */
export interface ListChildAccountsRequest {
  /**
   * Required. The parent account. Must be a CSS group or domain.
   * Format: accounts/{account}
   */
  parent: string;
  /** If set, only the MC accounts with the given label ID will be returned. */
  labelId?:
    | Long
    | undefined;
  /**
   * If set, only the MC accounts with the given name (case sensitive) will be
   * returned.
   */
  fullName?:
    | string
    | undefined;
  /**
   * Optional. The maximum number of accounts to return. The service may return
   * fewer than this value. If unspecified, at most 50 accounts will be
   * returned. The maximum value is 1000; values above 1000 will be coerced to
   * 1000.
   */
  pageSize: number;
  /**
   * Optional. A page token, received from a previous `ListChildAccounts` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListChildAccounts` must
   * match the call that provided the page token.
   */
  pageToken: string;
}

/** Response message for the `ListChildAccounts` method. */
export interface ListChildAccountsResponse {
  /** The CSS/MC accounts returned for the specified CSS parent account. */
  accounts: Account[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

/** The request message for the `GetAccount` method. */
export interface GetAccountRequest {
  /**
   * Required. The name of the managed CSS/MC account.
   * Format: accounts/{account}
   */
  name: string;
  /**
   * Optional. Only required when retrieving MC account information.
   * The CSS domain that is the parent resource of the MC account.
   * Format: accounts/{account}
   */
  parent?: string | undefined;
}

/** The request message for the `UpdateLabels` method. */
export interface UpdateAccountLabelsRequest {
  /**
   * Required. The label resource name.
   * Format: accounts/{account}
   */
  name: string;
  /**
   * The list of label IDs to overwrite the existing account label IDs.
   * If the list is empty, all currently assigned label IDs will be deleted.
   */
  labelIds: Long[];
  /**
   * Optional. Only required when updating MC account labels.
   * The CSS domain that is the parent resource of the MC account.
   * Format: accounts/{account}
   */
  parent?: string | undefined;
}

/** Information about CSS/MC account. */
export interface Account {
  /**
   * The label resource name.
   * Format: accounts/{account}
   */
  name: string;
  /** Output only. Immutable. The CSS/MC account's full name. */
  fullName: string;
  /** The CSS/MC account's short display name. */
  displayName?:
    | string
    | undefined;
  /** Output only. Immutable. The CSS/MC account's homepage. */
  homepageUri?:
    | string
    | undefined;
  /**
   * The CSS/MC account's parent resource. CSS group for CSS domains; CSS
   * domain for MC accounts. Returned only if the user has access to the
   * parent account.
   */
  parent?:
    | string
    | undefined;
  /**
   * Manually created label IDs assigned to the CSS/MC account by a CSS parent
   * account.
   */
  labelIds: Long[];
  /**
   * Automatically created label IDs assigned to the MC account by
   * CSS Center.
   */
  automaticLabelIds: Long[];
  /** Output only. The type of this account. */
  accountType: Account_AccountType;
}

/** The account type. */
export enum Account_AccountType {
  /** ACCOUNT_TYPE_UNSPECIFIED - Unknown account type. */
  ACCOUNT_TYPE_UNSPECIFIED = 0,
  /** CSS_GROUP - CSS group account. */
  CSS_GROUP = 1,
  /** CSS_DOMAIN - CSS domain account. */
  CSS_DOMAIN = 2,
  /** MC_PRIMARY_CSS_MCA - MC Primary CSS MCA account. */
  MC_PRIMARY_CSS_MCA = 3,
  /** MC_CSS_MCA - MC CSS MCA account. */
  MC_CSS_MCA = 4,
  /** MC_MARKETPLACE_MCA - MC Marketplace MCA account. */
  MC_MARKETPLACE_MCA = 5,
  /** MC_OTHER_MCA - MC Other MCA account. */
  MC_OTHER_MCA = 6,
  /** MC_STANDALONE - MC Standalone account. */
  MC_STANDALONE = 7,
  /** MC_MCA_SUBACCOUNT - MC MCA sub-account. */
  MC_MCA_SUBACCOUNT = 8,
  UNRECOGNIZED = -1,
}

export function account_AccountTypeFromJSON(object: any): Account_AccountType {
  switch (object) {
    case 0:
    case "ACCOUNT_TYPE_UNSPECIFIED":
      return Account_AccountType.ACCOUNT_TYPE_UNSPECIFIED;
    case 1:
    case "CSS_GROUP":
      return Account_AccountType.CSS_GROUP;
    case 2:
    case "CSS_DOMAIN":
      return Account_AccountType.CSS_DOMAIN;
    case 3:
    case "MC_PRIMARY_CSS_MCA":
      return Account_AccountType.MC_PRIMARY_CSS_MCA;
    case 4:
    case "MC_CSS_MCA":
      return Account_AccountType.MC_CSS_MCA;
    case 5:
    case "MC_MARKETPLACE_MCA":
      return Account_AccountType.MC_MARKETPLACE_MCA;
    case 6:
    case "MC_OTHER_MCA":
      return Account_AccountType.MC_OTHER_MCA;
    case 7:
    case "MC_STANDALONE":
      return Account_AccountType.MC_STANDALONE;
    case 8:
    case "MC_MCA_SUBACCOUNT":
      return Account_AccountType.MC_MCA_SUBACCOUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Account_AccountType.UNRECOGNIZED;
  }
}

export function account_AccountTypeToJSON(object: Account_AccountType): string {
  switch (object) {
    case Account_AccountType.ACCOUNT_TYPE_UNSPECIFIED:
      return "ACCOUNT_TYPE_UNSPECIFIED";
    case Account_AccountType.CSS_GROUP:
      return "CSS_GROUP";
    case Account_AccountType.CSS_DOMAIN:
      return "CSS_DOMAIN";
    case Account_AccountType.MC_PRIMARY_CSS_MCA:
      return "MC_PRIMARY_CSS_MCA";
    case Account_AccountType.MC_CSS_MCA:
      return "MC_CSS_MCA";
    case Account_AccountType.MC_MARKETPLACE_MCA:
      return "MC_MARKETPLACE_MCA";
    case Account_AccountType.MC_OTHER_MCA:
      return "MC_OTHER_MCA";
    case Account_AccountType.MC_STANDALONE:
      return "MC_STANDALONE";
    case Account_AccountType.MC_MCA_SUBACCOUNT:
      return "MC_MCA_SUBACCOUNT";
    case Account_AccountType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseListChildAccountsRequest(): ListChildAccountsRequest {
  return { parent: "", labelId: undefined, fullName: undefined, pageSize: 0, pageToken: "" };
}

export const ListChildAccountsRequest: MessageFns<ListChildAccountsRequest> = {
  encode(message: ListChildAccountsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.labelId !== undefined) {
      writer.uint32(16).int64(message.labelId.toString());
    }
    if (message.fullName !== undefined) {
      writer.uint32(26).string(message.fullName);
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListChildAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListChildAccountsRequest();
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

          message.labelId = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fullName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): ListChildAccountsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      labelId: isSet(object.labelId) ? Long.fromValue(object.labelId) : undefined,
      fullName: isSet(object.fullName) ? globalThis.String(object.fullName) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListChildAccountsRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.labelId !== undefined) {
      obj.labelId = (message.labelId || Long.ZERO).toString();
    }
    if (message.fullName !== undefined) {
      obj.fullName = message.fullName;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListChildAccountsRequest>): ListChildAccountsRequest {
    return ListChildAccountsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListChildAccountsRequest>): ListChildAccountsRequest {
    const message = createBaseListChildAccountsRequest();
    message.parent = object.parent ?? "";
    message.labelId = (object.labelId !== undefined && object.labelId !== null)
      ? Long.fromValue(object.labelId)
      : undefined;
    message.fullName = object.fullName ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListChildAccountsResponse(): ListChildAccountsResponse {
  return { accounts: [], nextPageToken: "" };
}

export const ListChildAccountsResponse: MessageFns<ListChildAccountsResponse> = {
  encode(message: ListChildAccountsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListChildAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListChildAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(Account.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListChildAccountsResponse {
    return {
      accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListChildAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts?.length) {
      obj.accounts = message.accounts.map((e) => Account.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListChildAccountsResponse>): ListChildAccountsResponse {
    return ListChildAccountsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListChildAccountsResponse>): ListChildAccountsResponse {
    const message = createBaseListChildAccountsResponse();
    message.accounts = object.accounts?.map((e) => Account.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseGetAccountRequest(): GetAccountRequest {
  return { name: "", parent: undefined };
}

export const GetAccountRequest: MessageFns<GetAccountRequest> = {
  encode(message: GetAccountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.parent !== undefined) {
      writer.uint32(18).string(message.parent);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountRequest();
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

          message.parent = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAccountRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      parent: isSet(object.parent) ? globalThis.String(object.parent) : undefined,
    };
  },

  toJSON(message: GetAccountRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.parent !== undefined) {
      obj.parent = message.parent;
    }
    return obj;
  },

  create(base?: DeepPartial<GetAccountRequest>): GetAccountRequest {
    return GetAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAccountRequest>): GetAccountRequest {
    const message = createBaseGetAccountRequest();
    message.name = object.name ?? "";
    message.parent = object.parent ?? undefined;
    return message;
  },
};

function createBaseUpdateAccountLabelsRequest(): UpdateAccountLabelsRequest {
  return { name: "", labelIds: [], parent: undefined };
}

export const UpdateAccountLabelsRequest: MessageFns<UpdateAccountLabelsRequest> = {
  encode(message: UpdateAccountLabelsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    writer.uint32(18).fork();
    for (const v of message.labelIds) {
      writer.int64(v.toString());
    }
    writer.join();
    if (message.parent !== undefined) {
      writer.uint32(26).string(message.parent);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateAccountLabelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAccountLabelsRequest();
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
          if (tag === 16) {
            message.labelIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.labelIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.parent = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAccountLabelsRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      labelIds: globalThis.Array.isArray(object?.labelIds) ? object.labelIds.map((e: any) => Long.fromValue(e)) : [],
      parent: isSet(object.parent) ? globalThis.String(object.parent) : undefined,
    };
  },

  toJSON(message: UpdateAccountLabelsRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.labelIds?.length) {
      obj.labelIds = message.labelIds.map((e) => (e || Long.ZERO).toString());
    }
    if (message.parent !== undefined) {
      obj.parent = message.parent;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAccountLabelsRequest>): UpdateAccountLabelsRequest {
    return UpdateAccountLabelsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateAccountLabelsRequest>): UpdateAccountLabelsRequest {
    const message = createBaseUpdateAccountLabelsRequest();
    message.name = object.name ?? "";
    message.labelIds = object.labelIds?.map((e) => Long.fromValue(e)) || [];
    message.parent = object.parent ?? undefined;
    return message;
  },
};

function createBaseAccount(): Account {
  return {
    name: "",
    fullName: "",
    displayName: undefined,
    homepageUri: undefined,
    parent: undefined,
    labelIds: [],
    automaticLabelIds: [],
    accountType: 0,
  };
}

export const Account: MessageFns<Account> = {
  encode(message: Account, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.fullName !== "") {
      writer.uint32(18).string(message.fullName);
    }
    if (message.displayName !== undefined) {
      writer.uint32(26).string(message.displayName);
    }
    if (message.homepageUri !== undefined) {
      writer.uint32(34).string(message.homepageUri);
    }
    if (message.parent !== undefined) {
      writer.uint32(42).string(message.parent);
    }
    writer.uint32(50).fork();
    for (const v of message.labelIds) {
      writer.int64(v.toString());
    }
    writer.join();
    writer.uint32(58).fork();
    for (const v of message.automaticLabelIds) {
      writer.int64(v.toString());
    }
    writer.join();
    if (message.accountType !== 0) {
      writer.uint32(64).int32(message.accountType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Account {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
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

          message.fullName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.homepageUri = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 6:
          if (tag === 48) {
            message.labelIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.labelIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 56) {
            message.automaticLabelIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.automaticLabelIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.accountType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      fullName: isSet(object.fullName) ? globalThis.String(object.fullName) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : undefined,
      homepageUri: isSet(object.homepageUri) ? globalThis.String(object.homepageUri) : undefined,
      parent: isSet(object.parent) ? globalThis.String(object.parent) : undefined,
      labelIds: globalThis.Array.isArray(object?.labelIds) ? object.labelIds.map((e: any) => Long.fromValue(e)) : [],
      automaticLabelIds: globalThis.Array.isArray(object?.automaticLabelIds)
        ? object.automaticLabelIds.map((e: any) => Long.fromValue(e))
        : [],
      accountType: isSet(object.accountType) ? account_AccountTypeFromJSON(object.accountType) : 0,
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.fullName !== "") {
      obj.fullName = message.fullName;
    }
    if (message.displayName !== undefined) {
      obj.displayName = message.displayName;
    }
    if (message.homepageUri !== undefined) {
      obj.homepageUri = message.homepageUri;
    }
    if (message.parent !== undefined) {
      obj.parent = message.parent;
    }
    if (message.labelIds?.length) {
      obj.labelIds = message.labelIds.map((e) => (e || Long.ZERO).toString());
    }
    if (message.automaticLabelIds?.length) {
      obj.automaticLabelIds = message.automaticLabelIds.map((e) => (e || Long.ZERO).toString());
    }
    if (message.accountType !== 0) {
      obj.accountType = account_AccountTypeToJSON(message.accountType);
    }
    return obj;
  },

  create(base?: DeepPartial<Account>): Account {
    return Account.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Account>): Account {
    const message = createBaseAccount();
    message.name = object.name ?? "";
    message.fullName = object.fullName ?? "";
    message.displayName = object.displayName ?? undefined;
    message.homepageUri = object.homepageUri ?? undefined;
    message.parent = object.parent ?? undefined;
    message.labelIds = object.labelIds?.map((e) => Long.fromValue(e)) || [];
    message.automaticLabelIds = object.automaticLabelIds?.map((e) => Long.fromValue(e)) || [];
    message.accountType = object.accountType ?? 0;
    return message;
  },
};

/** Service for managing CSS/MC account information. */
export type AccountsServiceDefinition = typeof AccountsServiceDefinition;
export const AccountsServiceDefinition = {
  name: "AccountsService",
  fullName: "google.shopping.css.v1.AccountsService",
  methods: {
    /**
     * Lists all the accounts under the specified CSS account ID, and
     * optionally filters by label ID and account name.
     */
    listChildAccounts: {
      name: "ListChildAccounts",
      requestType: ListChildAccountsRequest,
      requestStream: false,
      responseType: ListChildAccountsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              43,
              18,
              41,
              47,
              118,
              49,
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
              58,
              108,
              105,
              115,
              116,
              67,
              104,
              105,
              108,
              100,
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
    /** Retrieves a single CSS/MC account by ID. */
    getAccount: {
      name: "GetAccount",
      requestType: GetAccountRequest,
      requestStream: false,
      responseType: Account,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              23,
              18,
              21,
              47,
              118,
              49,
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
              125,
            ]),
          ],
        },
      },
    },
    /** Updates labels assigned to CSS/MC accounts by a CSS domain. */
    updateLabels: {
      name: "UpdateLabels",
      requestType: UpdateAccountLabelsRequest,
      requestStream: false,
      responseType: Account,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              39,
              58,
              1,
              42,
              34,
              34,
              47,
              118,
              49,
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
              125,
              58,
              117,
              112,
              100,
              97,
              116,
              101,
              76,
              97,
              98,
              101,
              108,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface AccountsServiceImplementation<CallContextExt = {}> {
  /**
   * Lists all the accounts under the specified CSS account ID, and
   * optionally filters by label ID and account name.
   */
  listChildAccounts(
    request: ListChildAccountsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListChildAccountsResponse>>;
  /** Retrieves a single CSS/MC account by ID. */
  getAccount(request: GetAccountRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Account>>;
  /** Updates labels assigned to CSS/MC accounts by a CSS domain. */
  updateLabels(
    request: UpdateAccountLabelsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Account>>;
}

export interface AccountsServiceClient<CallOptionsExt = {}> {
  /**
   * Lists all the accounts under the specified CSS account ID, and
   * optionally filters by label ID and account name.
   */
  listChildAccounts(
    request: DeepPartial<ListChildAccountsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListChildAccountsResponse>;
  /** Retrieves a single CSS/MC account by ID. */
  getAccount(request: DeepPartial<GetAccountRequest>, options?: CallOptions & CallOptionsExt): Promise<Account>;
  /** Updates labels assigned to CSS/MC accounts by a CSS domain. */
  updateLabels(
    request: DeepPartial<UpdateAccountLabelsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Account>;
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