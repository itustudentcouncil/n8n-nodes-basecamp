// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/admanager/v1/company_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { AppliedLabel } from "./applied_label.js";
import {
  CompanyCreditStatusEnum_CompanyCreditStatus,
  companyCreditStatusEnum_CompanyCreditStatusFromJSON,
  companyCreditStatusEnum_CompanyCreditStatusToJSON,
} from "./company_credit_status_enum.js";
import {
  CompanyTypeEnum_CompanyType,
  companyTypeEnum_CompanyTypeFromJSON,
  companyTypeEnum_CompanyTypeToJSON,
} from "./company_type_enum.js";

export const protobufPackage = "google.ads.admanager.v1";

/** The `Company` resource. */
export interface Company {
  /**
   * Identifier. The resource name of the `Company`.
   * Format: `networks/{network_code}/companies/{company_id}`
   */
  name: string;
  /** Output only. `Company` ID. */
  companyId: Long;
  /**
   * Required. The display name of the `Company`.
   *
   * This value has a maximum length of 127 characters.
   */
  displayName: string;
  /** Required. The type of the `Company`. */
  type: CompanyTypeEnum_CompanyType;
  /**
   * Optional. The address for the `Company`.
   *
   * This value has a maximum length of 1024 characters.
   */
  address: string;
  /**
   * Optional. The email for the `Company`.
   *
   * This value has a maximum length of 128 characters.
   */
  email: string;
  /**
   * Optional. The fax number for the `Company`.
   *
   * This value has a maximum length of 63 characters.
   */
  fax: string;
  /**
   * Optional. The phone number for the `Company`.
   *
   * This value has a maximum length of 63 characters.
   */
  phone: string;
  /**
   * Optional. The external ID for the `Company`.
   *
   * This value has a maximum length of 255 characters.
   */
  externalId: string;
  /**
   * Optional. Comments about the `Company`.
   *
   * This value has a maximum length of 1024 characters.
   */
  comment: string;
  /**
   * Optional. The credit status of this company.
   *
   * This attribute defaults to `ACTIVE` if basic settings are enabled and
   * `ON_HOLD` if advance settings are enabled.
   */
  creditStatus: CompanyCreditStatusEnum_CompanyCreditStatus;
  /** Optional. The labels that are directly applied to this company. */
  appliedLabels: AppliedLabel[];
  /**
   * Optional. The resource names of primary Contact of this company.
   * Format: "networks/{network_code}/contacts/{contact_id}"
   */
  primaryContact?:
    | string
    | undefined;
  /**
   * Optional. The resource names of Teams that are directly associated with
   * this company. Format: "networks/{network_code}/teams/{team_id}"
   */
  appliedTeams: string[];
}

/** Request object for `GetCompany` method. */
export interface GetCompanyRequest {
  /**
   * Required. The resource name of the Company.
   * Format: `networks/{network_code}/companies/{company_id}`
   */
  name: string;
}

/** Request object for `ListCompanies` method. */
export interface ListCompaniesRequest {
  /**
   * Required. The parent, which owns this collection of Companies.
   * Format: `networks/{network_code}`
   */
  parent: string;
  /**
   * Optional. The maximum number of `Companies` to return. The service may
   * return fewer than this value. If unspecified, at most 50 `Companies` will
   * be returned. The maximum value is 1000; values above 1000 will be coerced
   * to 1000.
   */
  pageSize: number;
  /**
   * Optional. A page token, received from a previous `ListCompanies` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListCompanies` must
   * match the call that provided the page token.
   */
  pageToken: string;
  /**
   * Optional. Expression to filter the response.
   * See syntax details at
   * https://developers.google.com/ad-manager/api/beta/filters
   */
  filter: string;
  /**
   * Optional. Expression to specify sorting order.
   * See syntax details at
   * https://developers.google.com/ad-manager/api/beta/filters#order
   */
  orderBy: string;
  /** Optional. Number of individual resources to skip while paginating. */
  skip: number;
}

/**
 * Response object for `ListCompaniesRequest` containing matching `Company`
 * resources.
 */
export interface ListCompaniesResponse {
  /** The `Company` from the specified network. */
  companies: Company[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
  /**
   * Total number of `Companies`.
   * If a filter was included in the request, this reflects the total number
   * after the filtering is applied.
   *
   * `total_size` will not be calculated in the response unless it has been
   * included in a response field mask. The response field mask can be provided
   * to the method by using the URL parameter `$fields` or `fields`, or by using
   * the HTTP/gRPC header `X-Goog-FieldMask`.
   *
   * For more information, see
   * https://developers.google.com/ad-manager/api/beta/field-masks
   */
  totalSize: number;
}

function createBaseCompany(): Company {
  return {
    name: "",
    companyId: Long.ZERO,
    displayName: "",
    type: 0,
    address: "",
    email: "",
    fax: "",
    phone: "",
    externalId: "",
    comment: "",
    creditStatus: 0,
    appliedLabels: [],
    primaryContact: undefined,
    appliedTeams: [],
  };
}

export const Company: MessageFns<Company> = {
  encode(message: Company, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.companyId.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.companyId.toString());
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    if (message.email !== "") {
      writer.uint32(50).string(message.email);
    }
    if (message.fax !== "") {
      writer.uint32(58).string(message.fax);
    }
    if (message.phone !== "") {
      writer.uint32(66).string(message.phone);
    }
    if (message.externalId !== "") {
      writer.uint32(74).string(message.externalId);
    }
    if (message.comment !== "") {
      writer.uint32(82).string(message.comment);
    }
    if (message.creditStatus !== 0) {
      writer.uint32(88).int32(message.creditStatus);
    }
    for (const v of message.appliedLabels) {
      AppliedLabel.encode(v!, writer.uint32(98).fork()).join();
    }
    if (message.primaryContact !== undefined) {
      writer.uint32(106).string(message.primaryContact);
    }
    for (const v of message.appliedTeams) {
      writer.uint32(114).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Company {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompany();
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
          if (tag !== 16) {
            break;
          }

          message.companyId = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.address = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.email = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fax = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.externalId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.creditStatus = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.appliedLabels.push(AppliedLabel.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.primaryContact = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.appliedTeams.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Company {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      companyId: isSet(object.companyId) ? Long.fromValue(object.companyId) : Long.ZERO,
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      type: isSet(object.type) ? companyTypeEnum_CompanyTypeFromJSON(object.type) : 0,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      fax: isSet(object.fax) ? globalThis.String(object.fax) : "",
      phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
      externalId: isSet(object.externalId) ? globalThis.String(object.externalId) : "",
      comment: isSet(object.comment) ? globalThis.String(object.comment) : "",
      creditStatus: isSet(object.creditStatus)
        ? companyCreditStatusEnum_CompanyCreditStatusFromJSON(object.creditStatus)
        : 0,
      appliedLabels: globalThis.Array.isArray(object?.appliedLabels)
        ? object.appliedLabels.map((e: any) => AppliedLabel.fromJSON(e))
        : [],
      primaryContact: isSet(object.primaryContact) ? globalThis.String(object.primaryContact) : undefined,
      appliedTeams: globalThis.Array.isArray(object?.appliedTeams)
        ? object.appliedTeams.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Company): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (!message.companyId.equals(Long.ZERO)) {
      obj.companyId = (message.companyId || Long.ZERO).toString();
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.type !== 0) {
      obj.type = companyTypeEnum_CompanyTypeToJSON(message.type);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.fax !== "") {
      obj.fax = message.fax;
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.externalId !== "") {
      obj.externalId = message.externalId;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.creditStatus !== 0) {
      obj.creditStatus = companyCreditStatusEnum_CompanyCreditStatusToJSON(message.creditStatus);
    }
    if (message.appliedLabels?.length) {
      obj.appliedLabels = message.appliedLabels.map((e) => AppliedLabel.toJSON(e));
    }
    if (message.primaryContact !== undefined) {
      obj.primaryContact = message.primaryContact;
    }
    if (message.appliedTeams?.length) {
      obj.appliedTeams = message.appliedTeams;
    }
    return obj;
  },

  create(base?: DeepPartial<Company>): Company {
    return Company.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Company>): Company {
    const message = createBaseCompany();
    message.name = object.name ?? "";
    message.companyId = (object.companyId !== undefined && object.companyId !== null)
      ? Long.fromValue(object.companyId)
      : Long.ZERO;
    message.displayName = object.displayName ?? "";
    message.type = object.type ?? 0;
    message.address = object.address ?? "";
    message.email = object.email ?? "";
    message.fax = object.fax ?? "";
    message.phone = object.phone ?? "";
    message.externalId = object.externalId ?? "";
    message.comment = object.comment ?? "";
    message.creditStatus = object.creditStatus ?? 0;
    message.appliedLabels = object.appliedLabels?.map((e) => AppliedLabel.fromPartial(e)) || [];
    message.primaryContact = object.primaryContact ?? undefined;
    message.appliedTeams = object.appliedTeams?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetCompanyRequest(): GetCompanyRequest {
  return { name: "" };
}

export const GetCompanyRequest: MessageFns<GetCompanyRequest> = {
  encode(message: GetCompanyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetCompanyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCompanyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCompanyRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetCompanyRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetCompanyRequest>): GetCompanyRequest {
    return GetCompanyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetCompanyRequest>): GetCompanyRequest {
    const message = createBaseGetCompanyRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListCompaniesRequest(): ListCompaniesRequest {
  return { parent: "", pageSize: 0, pageToken: "", filter: "", orderBy: "", skip: 0 };
}

export const ListCompaniesRequest: MessageFns<ListCompaniesRequest> = {
  encode(message: ListCompaniesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    if (message.skip !== 0) {
      writer.uint32(48).int32(message.skip);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListCompaniesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCompaniesRequest();
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

          message.pageSize = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderBy = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.skip = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListCompaniesRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
      skip: isSet(object.skip) ? globalThis.Number(object.skip) : 0,
    };
  },

  toJSON(message: ListCompaniesRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    if (message.skip !== 0) {
      obj.skip = Math.round(message.skip);
    }
    return obj;
  },

  create(base?: DeepPartial<ListCompaniesRequest>): ListCompaniesRequest {
    return ListCompaniesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListCompaniesRequest>): ListCompaniesRequest {
    const message = createBaseListCompaniesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    message.skip = object.skip ?? 0;
    return message;
  },
};

function createBaseListCompaniesResponse(): ListCompaniesResponse {
  return { companies: [], nextPageToken: "", totalSize: 0 };
}

export const ListCompaniesResponse: MessageFns<ListCompaniesResponse> = {
  encode(message: ListCompaniesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.companies) {
      Company.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    if (message.totalSize !== 0) {
      writer.uint32(24).int32(message.totalSize);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListCompaniesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCompaniesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.companies.push(Company.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalSize = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListCompaniesResponse {
    return {
      companies: globalThis.Array.isArray(object?.companies)
        ? object.companies.map((e: any) => Company.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
      totalSize: isSet(object.totalSize) ? globalThis.Number(object.totalSize) : 0,
    };
  },

  toJSON(message: ListCompaniesResponse): unknown {
    const obj: any = {};
    if (message.companies?.length) {
      obj.companies = message.companies.map((e) => Company.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    if (message.totalSize !== 0) {
      obj.totalSize = Math.round(message.totalSize);
    }
    return obj;
  },

  create(base?: DeepPartial<ListCompaniesResponse>): ListCompaniesResponse {
    return ListCompaniesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListCompaniesResponse>): ListCompaniesResponse {
    const message = createBaseListCompaniesResponse();
    message.companies = object.companies?.map((e) => Company.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    message.totalSize = object.totalSize ?? 0;
    return message;
  },
};

/** Provides methods for handling `Company` objects. */
export type CompanyServiceDefinition = typeof CompanyServiceDefinition;
export const CompanyServiceDefinition = {
  name: "CompanyService",
  fullName: "google.ads.admanager.v1.CompanyService",
  methods: {
    /** API to retrieve a `Company` object. */
    getCompany: {
      name: "GetCompany",
      requestType: GetCompanyRequest,
      requestStream: false,
      responseType: Company,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              35,
              18,
              33,
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
              110,
              101,
              116,
              119,
              111,
              114,
              107,
              115,
              47,
              42,
              47,
              99,
              111,
              109,
              112,
              97,
              110,
              105,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** API to retrieve a list of `Company` objects. */
    listCompanies: {
      name: "ListCompanies",
      requestType: ListCompaniesRequest,
      requestStream: false,
      responseType: ListCompaniesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              35,
              18,
              33,
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
              110,
              101,
              116,
              119,
              111,
              114,
              107,
              115,
              47,
              42,
              125,
              47,
              99,
              111,
              109,
              112,
              97,
              110,
              105,
              101,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface CompanyServiceImplementation<CallContextExt = {}> {
  /** API to retrieve a `Company` object. */
  getCompany(request: GetCompanyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Company>>;
  /** API to retrieve a list of `Company` objects. */
  listCompanies(
    request: ListCompaniesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListCompaniesResponse>>;
}

export interface CompanyServiceClient<CallOptionsExt = {}> {
  /** API to retrieve a `Company` object. */
  getCompany(request: DeepPartial<GetCompanyRequest>, options?: CallOptions & CallOptionsExt): Promise<Company>;
  /** API to retrieve a list of `Company` objects. */
  listCompanies(
    request: DeepPartial<ListCompaniesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListCompaniesResponse>;
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