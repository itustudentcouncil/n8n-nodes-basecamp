// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/admob/v1/admob_api.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import {
  MediationReportSpec,
  NetworkReportSpec,
  PublisherAccount,
  ReportFooter,
  ReportHeader,
  ReportRow,
} from "./admob_resources.js";

export const protobufPackage = "google.ads.admob.v1";

/** Request to retrieve the specified publisher account. */
export interface GetPublisherAccountRequest {
  /**
   * Resource name of the publisher account to retrieve.
   * Example: accounts/pub-9876543210987654
   */
  name: string;
}

/**
 * Request to retrieve the AdMob publisher account accessible with the client
 * credential. Currently all credentials have access to at most 1 account.
 */
export interface ListPublisherAccountsRequest {
  /** Maximum number of accounts to return. */
  pageSize: number;
  /**
   * The value returned by the last `ListPublisherAccountsResponse`; indicates
   * that this is a continuation of a prior `ListPublisherAccounts` call, and
   * that the system should return the next page of data.
   */
  pageToken: string;
}

/** Response for the publisher account list request. */
export interface ListPublisherAccountsResponse {
  /** Publisher that the client credentials can access. */
  account: PublisherAccount[];
  /**
   * If not empty, indicates that there might be more accounts for the request;
   * you must pass this value in a new `ListPublisherAccountsRequest`.
   */
  nextPageToken: string;
}

/** Request to generate an AdMob Mediation report. */
export interface GenerateMediationReportRequest {
  /**
   * Resource name of the account to generate the report for.
   * Example: accounts/pub-9876543210987654
   */
  parent: string;
  /** Network report specification. */
  reportSpec: MediationReportSpec | undefined;
}

/**
 * The streaming response for the AdMob Mediation report where the first
 * response contains the report header, then a stream of row responses, and
 * finally a footer as the last response message.
 *
 * For example:
 *
 *     [{
 *       "header": {
 *         "date_range": {
 *           "start_date": {"year": 2018, "month": 9, "day": 1},
 *           "end_date": {"year": 2018, "month": 9, "day": 1}
 *         },
 *         "localization_settings": {
 *           "currency_code": "USD",
 *           "language_code": "en-US"
 *         }
 *       }
 *     },
 *     {
 *       "row": {
 *         "dimension_values": {
 *           "DATE": {"value": "20180918"},
 *           "APP": {
 *             "value": "ca-app-pub-8123415297019784~1001342552",
 *              "display_label": "My app name!"
 *           }
 *         },
 *         "metric_values": {
 *           "ESTIMATED_EARNINGS": {"decimal_value": "1324746"}
 *         }
 *       }
 *     },
 *     {
 *       "footer": {"matching_row_count": 1}
 *     }]
 */
export interface GenerateMediationReportResponse {
  /**
   * Report generation settings that describes the report contents, such as
   * the report date range and localization settings.
   */
  header?:
    | ReportHeader
    | undefined;
  /** Actual report data. */
  row?:
    | ReportRow
    | undefined;
  /**
   * Additional information about the generated report, such as warnings about
   * the data.
   */
  footer?: ReportFooter | undefined;
}

/** Request to generate an AdMob Network report. */
export interface GenerateNetworkReportRequest {
  /**
   * Resource name of the account to generate the report for.
   * Example: accounts/pub-9876543210987654
   */
  parent: string;
  /** Network report specification. */
  reportSpec: NetworkReportSpec | undefined;
}

/**
 * The streaming response for the AdMob Network report where the first response
 * contains the report header, then a stream of row responses, and finally a
 * footer as the last response message.
 *
 * For example:
 *
 *     [{
 *       "header": {
 *         "dateRange": {
 *           "startDate": {"year": 2018, "month": 9, "day": 1},
 *           "endDate": {"year": 2018, "month": 9, "day": 1}
 *         },
 *         "localizationSettings": {
 *           "currencyCode": "USD",
 *           "languageCode": "en-US"
 *         }
 *       }
 *     },
 *     {
 *       "row": {
 *         "dimensionValues": {
 *           "DATE": {"value": "20180918"},
 *           "APP": {
 *             "value": "ca-app-pub-8123415297019784~1001342552",
 *              displayLabel: "My app name!"
 *           }
 *         },
 *         "metricValues": {
 *           "ESTIMATED_EARNINGS": {"microsValue": 6500000}
 *         }
 *       }
 *     },
 *     {
 *       "footer": {"matchingRowCount": 1}
 *     }]
 */
export interface GenerateNetworkReportResponse {
  /**
   * Report generation settings that describes the report contents, such as
   * the report date range and localization settings.
   */
  header?:
    | ReportHeader
    | undefined;
  /** Actual report data. */
  row?:
    | ReportRow
    | undefined;
  /**
   * Additional information about the generated report, such as warnings about
   * the data.
   */
  footer?: ReportFooter | undefined;
}

function createBaseGetPublisherAccountRequest(): GetPublisherAccountRequest {
  return { name: "" };
}

export const GetPublisherAccountRequest: MessageFns<GetPublisherAccountRequest> = {
  encode(message: GetPublisherAccountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetPublisherAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPublisherAccountRequest();
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

  fromJSON(object: any): GetPublisherAccountRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetPublisherAccountRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetPublisherAccountRequest>): GetPublisherAccountRequest {
    return GetPublisherAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetPublisherAccountRequest>): GetPublisherAccountRequest {
    const message = createBaseGetPublisherAccountRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListPublisherAccountsRequest(): ListPublisherAccountsRequest {
  return { pageSize: 0, pageToken: "" };
}

export const ListPublisherAccountsRequest: MessageFns<ListPublisherAccountsRequest> = {
  encode(message: ListPublisherAccountsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pageSize !== 0) {
      writer.uint32(8).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListPublisherAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPublisherAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): ListPublisherAccountsRequest {
    return {
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListPublisherAccountsRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListPublisherAccountsRequest>): ListPublisherAccountsRequest {
    return ListPublisherAccountsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPublisherAccountsRequest>): ListPublisherAccountsRequest {
    const message = createBaseListPublisherAccountsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListPublisherAccountsResponse(): ListPublisherAccountsResponse {
  return { account: [], nextPageToken: "" };
}

export const ListPublisherAccountsResponse: MessageFns<ListPublisherAccountsResponse> = {
  encode(message: ListPublisherAccountsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.account) {
      PublisherAccount.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListPublisherAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPublisherAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account.push(PublisherAccount.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListPublisherAccountsResponse {
    return {
      account: globalThis.Array.isArray(object?.account)
        ? object.account.map((e: any) => PublisherAccount.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListPublisherAccountsResponse): unknown {
    const obj: any = {};
    if (message.account?.length) {
      obj.account = message.account.map((e) => PublisherAccount.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListPublisherAccountsResponse>): ListPublisherAccountsResponse {
    return ListPublisherAccountsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPublisherAccountsResponse>): ListPublisherAccountsResponse {
    const message = createBaseListPublisherAccountsResponse();
    message.account = object.account?.map((e) => PublisherAccount.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseGenerateMediationReportRequest(): GenerateMediationReportRequest {
  return { parent: "", reportSpec: undefined };
}

export const GenerateMediationReportRequest: MessageFns<GenerateMediationReportRequest> = {
  encode(message: GenerateMediationReportRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.reportSpec !== undefined) {
      MediationReportSpec.encode(message.reportSpec, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenerateMediationReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateMediationReportRequest();
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
          if (tag !== 18) {
            break;
          }

          message.reportSpec = MediationReportSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateMediationReportRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      reportSpec: isSet(object.reportSpec) ? MediationReportSpec.fromJSON(object.reportSpec) : undefined,
    };
  },

  toJSON(message: GenerateMediationReportRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.reportSpec !== undefined) {
      obj.reportSpec = MediationReportSpec.toJSON(message.reportSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<GenerateMediationReportRequest>): GenerateMediationReportRequest {
    return GenerateMediationReportRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenerateMediationReportRequest>): GenerateMediationReportRequest {
    const message = createBaseGenerateMediationReportRequest();
    message.parent = object.parent ?? "";
    message.reportSpec = (object.reportSpec !== undefined && object.reportSpec !== null)
      ? MediationReportSpec.fromPartial(object.reportSpec)
      : undefined;
    return message;
  },
};

function createBaseGenerateMediationReportResponse(): GenerateMediationReportResponse {
  return { header: undefined, row: undefined, footer: undefined };
}

export const GenerateMediationReportResponse: MessageFns<GenerateMediationReportResponse> = {
  encode(message: GenerateMediationReportResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.header !== undefined) {
      ReportHeader.encode(message.header, writer.uint32(10).fork()).join();
    }
    if (message.row !== undefined) {
      ReportRow.encode(message.row, writer.uint32(18).fork()).join();
    }
    if (message.footer !== undefined) {
      ReportFooter.encode(message.footer, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenerateMediationReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateMediationReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = ReportHeader.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.row = ReportRow.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.footer = ReportFooter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateMediationReportResponse {
    return {
      header: isSet(object.header) ? ReportHeader.fromJSON(object.header) : undefined,
      row: isSet(object.row) ? ReportRow.fromJSON(object.row) : undefined,
      footer: isSet(object.footer) ? ReportFooter.fromJSON(object.footer) : undefined,
    };
  },

  toJSON(message: GenerateMediationReportResponse): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = ReportHeader.toJSON(message.header);
    }
    if (message.row !== undefined) {
      obj.row = ReportRow.toJSON(message.row);
    }
    if (message.footer !== undefined) {
      obj.footer = ReportFooter.toJSON(message.footer);
    }
    return obj;
  },

  create(base?: DeepPartial<GenerateMediationReportResponse>): GenerateMediationReportResponse {
    return GenerateMediationReportResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenerateMediationReportResponse>): GenerateMediationReportResponse {
    const message = createBaseGenerateMediationReportResponse();
    message.header = (object.header !== undefined && object.header !== null)
      ? ReportHeader.fromPartial(object.header)
      : undefined;
    message.row = (object.row !== undefined && object.row !== null) ? ReportRow.fromPartial(object.row) : undefined;
    message.footer = (object.footer !== undefined && object.footer !== null)
      ? ReportFooter.fromPartial(object.footer)
      : undefined;
    return message;
  },
};

function createBaseGenerateNetworkReportRequest(): GenerateNetworkReportRequest {
  return { parent: "", reportSpec: undefined };
}

export const GenerateNetworkReportRequest: MessageFns<GenerateNetworkReportRequest> = {
  encode(message: GenerateNetworkReportRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.reportSpec !== undefined) {
      NetworkReportSpec.encode(message.reportSpec, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenerateNetworkReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateNetworkReportRequest();
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
          if (tag !== 18) {
            break;
          }

          message.reportSpec = NetworkReportSpec.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateNetworkReportRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      reportSpec: isSet(object.reportSpec) ? NetworkReportSpec.fromJSON(object.reportSpec) : undefined,
    };
  },

  toJSON(message: GenerateNetworkReportRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.reportSpec !== undefined) {
      obj.reportSpec = NetworkReportSpec.toJSON(message.reportSpec);
    }
    return obj;
  },

  create(base?: DeepPartial<GenerateNetworkReportRequest>): GenerateNetworkReportRequest {
    return GenerateNetworkReportRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenerateNetworkReportRequest>): GenerateNetworkReportRequest {
    const message = createBaseGenerateNetworkReportRequest();
    message.parent = object.parent ?? "";
    message.reportSpec = (object.reportSpec !== undefined && object.reportSpec !== null)
      ? NetworkReportSpec.fromPartial(object.reportSpec)
      : undefined;
    return message;
  },
};

function createBaseGenerateNetworkReportResponse(): GenerateNetworkReportResponse {
  return { header: undefined, row: undefined, footer: undefined };
}

export const GenerateNetworkReportResponse: MessageFns<GenerateNetworkReportResponse> = {
  encode(message: GenerateNetworkReportResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.header !== undefined) {
      ReportHeader.encode(message.header, writer.uint32(10).fork()).join();
    }
    if (message.row !== undefined) {
      ReportRow.encode(message.row, writer.uint32(18).fork()).join();
    }
    if (message.footer !== undefined) {
      ReportFooter.encode(message.footer, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenerateNetworkReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateNetworkReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = ReportHeader.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.row = ReportRow.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.footer = ReportFooter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateNetworkReportResponse {
    return {
      header: isSet(object.header) ? ReportHeader.fromJSON(object.header) : undefined,
      row: isSet(object.row) ? ReportRow.fromJSON(object.row) : undefined,
      footer: isSet(object.footer) ? ReportFooter.fromJSON(object.footer) : undefined,
    };
  },

  toJSON(message: GenerateNetworkReportResponse): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = ReportHeader.toJSON(message.header);
    }
    if (message.row !== undefined) {
      obj.row = ReportRow.toJSON(message.row);
    }
    if (message.footer !== undefined) {
      obj.footer = ReportFooter.toJSON(message.footer);
    }
    return obj;
  },

  create(base?: DeepPartial<GenerateNetworkReportResponse>): GenerateNetworkReportResponse {
    return GenerateNetworkReportResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenerateNetworkReportResponse>): GenerateNetworkReportResponse {
    const message = createBaseGenerateNetworkReportResponse();
    message.header = (object.header !== undefined && object.header !== null)
      ? ReportHeader.fromPartial(object.header)
      : undefined;
    message.row = (object.row !== undefined && object.row !== null) ? ReportRow.fromPartial(object.row) : undefined;
    message.footer = (object.footer !== undefined && object.footer !== null)
      ? ReportFooter.fromPartial(object.footer)
      : undefined;
    return message;
  },
};

/**
 * The AdMob API allows AdMob publishers programmatically get information about
 * their AdMob account.
 */
export type AdMobApiDefinition = typeof AdMobApiDefinition;
export const AdMobApiDefinition = {
  name: "AdMobApi",
  fullName: "google.ads.admob.v1.AdMobApi",
  methods: {
    /** Gets information about the specified AdMob publisher account. */
    getPublisherAccount: {
      name: "GetPublisherAccount",
      requestType: GetPublisherAccountRequest,
      requestStream: false,
      responseType: PublisherAccount,
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
    /**
     * Lists the AdMob publisher account accessible with the client credential.
     * Currently, all credentials have access to at most one AdMob account.
     */
    listPublisherAccounts: {
      name: "ListPublisherAccounts",
      requestType: ListPublisherAccountsRequest,
      requestStream: false,
      responseType: ListPublisherAccountsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [Buffer.from([14, 18, 12, 47, 118, 49, 47, 97, 99, 99, 111, 117, 110, 116, 115])],
        },
      },
    },
    /**
     * Generates an AdMob Network report based on the provided report
     * specification.
     */
    generateNetworkReport: {
      name: "GenerateNetworkReport",
      requestType: GenerateNetworkReportRequest,
      requestStream: false,
      responseType: GenerateNetworkReportResponse,
      responseStream: true,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              51,
              58,
              1,
              42,
              34,
              46,
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
              47,
              110,
              101,
              116,
              119,
              111,
              114,
              107,
              82,
              101,
              112,
              111,
              114,
              116,
              58,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /**
     * Generates an AdMob Mediation report based on the provided report
     * specification.
     */
    generateMediationReport: {
      name: "GenerateMediationReport",
      requestType: GenerateMediationReportRequest,
      requestStream: false,
      responseType: GenerateMediationReportResponse,
      responseStream: true,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              53,
              58,
              1,
              42,
              34,
              48,
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
              47,
              109,
              101,
              100,
              105,
              97,
              116,
              105,
              111,
              110,
              82,
              101,
              112,
              111,
              114,
              116,
              58,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              101,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface AdMobApiServiceImplementation<CallContextExt = {}> {
  /** Gets information about the specified AdMob publisher account. */
  getPublisherAccount(
    request: GetPublisherAccountRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PublisherAccount>>;
  /**
   * Lists the AdMob publisher account accessible with the client credential.
   * Currently, all credentials have access to at most one AdMob account.
   */
  listPublisherAccounts(
    request: ListPublisherAccountsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListPublisherAccountsResponse>>;
  /**
   * Generates an AdMob Network report based on the provided report
   * specification.
   */
  generateNetworkReport(
    request: GenerateNetworkReportRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<GenerateNetworkReportResponse>>;
  /**
   * Generates an AdMob Mediation report based on the provided report
   * specification.
   */
  generateMediationReport(
    request: GenerateMediationReportRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<GenerateMediationReportResponse>>;
}

export interface AdMobApiClient<CallOptionsExt = {}> {
  /** Gets information about the specified AdMob publisher account. */
  getPublisherAccount(
    request: DeepPartial<GetPublisherAccountRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PublisherAccount>;
  /**
   * Lists the AdMob publisher account accessible with the client credential.
   * Currently, all credentials have access to at most one AdMob account.
   */
  listPublisherAccounts(
    request: DeepPartial<ListPublisherAccountsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListPublisherAccountsResponse>;
  /**
   * Generates an AdMob Network report based on the provided report
   * specification.
   */
  generateNetworkReport(
    request: DeepPartial<GenerateNetworkReportRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<GenerateNetworkReportResponse>;
  /**
   * Generates an AdMob Mediation report based on the provided report
   * specification.
   */
  generateMediationReport(
    request: DeepPartial<GenerateMediationReportRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<GenerateMediationReportResponse>;
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

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
