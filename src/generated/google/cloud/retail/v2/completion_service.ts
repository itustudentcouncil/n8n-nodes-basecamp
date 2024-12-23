// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/retail/v2/completion_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Operation } from "../../../longrunning/operations.js";
import { CustomAttribute } from "./common.js";
import { ImportCompletionDataRequest } from "./import_config.js";

export const protobufPackage = "google.cloud.retail.v2";

/** Autocomplete parameters. */
export interface CompleteQueryRequest {
  /**
   * Required. Catalog for which the completion is performed.
   *
   * Full resource name of catalog, such as
   * `projects/* /locations/global/catalogs/default_catalog`.
   */
  catalog: string;
  /**
   * Required. The query used to generate suggestions.
   *
   * The maximum number of allowed characters is 255.
   */
  query: string;
  /**
   * Required field. A unique identifier for tracking visitors. For example,
   * this could be implemented with an HTTP cookie, which should be able to
   * uniquely identify a visitor on a single device. This unique identifier
   * should not change if the visitor logs in or out of the website.
   *
   * The field must be a UTF-8 encoded string with a length limit of 128
   * characters. Otherwise, an INVALID_ARGUMENT error is returned.
   */
  visitorId: string;
  /**
   * Note that this field applies for `user-data` dataset only. For requests
   * with `cloud-retail` dataset, setting this field has no effect.
   *
   * The language filters applied to the output suggestions. If set, it should
   * contain the language of the query. If not set, suggestions are returned
   * without considering language restrictions. This is the BCP-47 language
   * code, such as "en-US" or "sr-Latn". For more information, see [Tags for
   * Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum
   * number of language codes is 3.
   */
  languageCodes: string[];
  /**
   * The device type context for completion suggestions. We recommend that you
   * leave this field empty.
   *
   * It can apply different suggestions on different device types, e.g.
   * `DESKTOP`, `MOBILE`. If it is empty, the suggestions are across all device
   * types.
   *
   * Supported formats:
   *
   * * `UNKNOWN_DEVICE_TYPE`
   *
   * * `DESKTOP`
   *
   * * `MOBILE`
   *
   * * A customized string starts with `OTHER_`, e.g. `OTHER_IPHONE`.
   */
  deviceType: string;
  /**
   * Determines which dataset to use for fetching completion. "user-data" will
   * use the imported dataset through
   * [CompletionService.ImportCompletionData][google.cloud.retail.v2.CompletionService.ImportCompletionData].
   * "cloud-retail" will use the dataset generated by cloud retail based on user
   * events. If leave empty, it will use the "user-data".
   *
   * Current supported values:
   *
   * * user-data
   *
   * * cloud-retail:
   *   This option requires enabling auto-learning function first. See
   *   [guidelines](https://cloud.google.com/retail/docs/completion-overview#generated-completion-dataset).
   */
  dataset: string;
  /**
   * Completion max suggestions. If left unset or set to 0, then will fallback
   * to the configured value
   * [CompletionConfig.max_suggestions][google.cloud.retail.v2.CompletionConfig.max_suggestions].
   *
   * The maximum allowed max suggestions is 20. If it is set higher, it will be
   * capped by 20.
   */
  maxSuggestions: number;
  /**
   * If true, attribute suggestions are enabled and provided in response.
   *
   * This field is only available for "cloud-retail" dataset.
   */
  enableAttributeSuggestions: boolean;
  /**
   * The entity for customers who run multiple entities, domains, sites, or
   * regions, for example, `Google US`, `Google Ads`, `Waymo`,
   * `google.com`, `youtube.com`, etc.
   * If this is set, it must be an exact match with
   * [UserEvent.entity][google.cloud.retail.v2.UserEvent.entity] to get
   * per-entity autocomplete results.
   */
  entity: string;
}

/** Response of the autocomplete query. */
export interface CompleteQueryResponse {
  /**
   * Results of the matching suggestions. The result list is ordered and the
   * first result is top suggestion.
   */
  completionResults: CompleteQueryResponse_CompletionResult[];
  /**
   * A unique complete token. This should be included in the
   * [UserEvent.completion_detail][google.cloud.retail.v2.UserEvent.completion_detail]
   * for search events resulting from this completion, which enables accurate
   * attribution of complete model performance.
   */
  attributionToken: string;
  /**
   * Deprecated. Matched recent searches of this user. The maximum number of
   * recent searches is 10. This field is a restricted feature. If you want to
   * enable it, contact Retail Search support.
   *
   * This feature is only available when
   * [CompleteQueryRequest.visitor_id][google.cloud.retail.v2.CompleteQueryRequest.visitor_id]
   * field is set and [UserEvent][google.cloud.retail.v2.UserEvent] is imported.
   * The recent searches satisfy the follow rules:
   *
   *  * They are ordered from latest to oldest.
   *
   *  * They are matched with
   *  [CompleteQueryRequest.query][google.cloud.retail.v2.CompleteQueryRequest.query]
   *  case insensitively.
   *
   *  * They are transformed to lower case.
   *
   *  * They are UTF-8 safe.
   *
   * Recent searches are deduplicated. More recent searches will be reserved
   * when duplication happens.
   *
   * @deprecated
   */
  recentSearchResults: CompleteQueryResponse_RecentSearchResult[];
}

/** Resource that represents completion results. */
export interface CompleteQueryResponse_CompletionResult {
  /** The suggestion for the query. */
  suggestion: string;
  /**
   * Custom attributes for the suggestion term.
   *
   * * For "user-data", the attributes are additional custom attributes
   * ingested through BigQuery.
   *
   * * For "cloud-retail", the attributes are product attributes generated
   * by Cloud Retail. It requires
   * [UserEvent.product_details][google.cloud.retail.v2.UserEvent.product_details]
   * is imported properly.
   */
  attributes: { [key: string]: CustomAttribute };
}

export interface CompleteQueryResponse_CompletionResult_AttributesEntry {
  key: string;
  value: CustomAttribute | undefined;
}

/**
 * Deprecated: Recent search of this user.
 *
 * @deprecated
 */
export interface CompleteQueryResponse_RecentSearchResult {
  /** The recent search query. */
  recentSearch: string;
}

function createBaseCompleteQueryRequest(): CompleteQueryRequest {
  return {
    catalog: "",
    query: "",
    visitorId: "",
    languageCodes: [],
    deviceType: "",
    dataset: "",
    maxSuggestions: 0,
    enableAttributeSuggestions: false,
    entity: "",
  };
}

export const CompleteQueryRequest: MessageFns<CompleteQueryRequest> = {
  encode(message: CompleteQueryRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.catalog !== "") {
      writer.uint32(10).string(message.catalog);
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    if (message.visitorId !== "") {
      writer.uint32(58).string(message.visitorId);
    }
    for (const v of message.languageCodes) {
      writer.uint32(26).string(v!);
    }
    if (message.deviceType !== "") {
      writer.uint32(34).string(message.deviceType);
    }
    if (message.dataset !== "") {
      writer.uint32(50).string(message.dataset);
    }
    if (message.maxSuggestions !== 0) {
      writer.uint32(40).int32(message.maxSuggestions);
    }
    if (message.enableAttributeSuggestions !== false) {
      writer.uint32(72).bool(message.enableAttributeSuggestions);
    }
    if (message.entity !== "") {
      writer.uint32(82).string(message.entity);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompleteQueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompleteQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.catalog = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.query = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.visitorId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.languageCodes.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.deviceType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.dataset = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxSuggestions = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.enableAttributeSuggestions = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.entity = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompleteQueryRequest {
    return {
      catalog: isSet(object.catalog) ? globalThis.String(object.catalog) : "",
      query: isSet(object.query) ? globalThis.String(object.query) : "",
      visitorId: isSet(object.visitorId) ? globalThis.String(object.visitorId) : "",
      languageCodes: globalThis.Array.isArray(object?.languageCodes)
        ? object.languageCodes.map((e: any) => globalThis.String(e))
        : [],
      deviceType: isSet(object.deviceType) ? globalThis.String(object.deviceType) : "",
      dataset: isSet(object.dataset) ? globalThis.String(object.dataset) : "",
      maxSuggestions: isSet(object.maxSuggestions) ? globalThis.Number(object.maxSuggestions) : 0,
      enableAttributeSuggestions: isSet(object.enableAttributeSuggestions)
        ? globalThis.Boolean(object.enableAttributeSuggestions)
        : false,
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
    };
  },

  toJSON(message: CompleteQueryRequest): unknown {
    const obj: any = {};
    if (message.catalog !== "") {
      obj.catalog = message.catalog;
    }
    if (message.query !== "") {
      obj.query = message.query;
    }
    if (message.visitorId !== "") {
      obj.visitorId = message.visitorId;
    }
    if (message.languageCodes?.length) {
      obj.languageCodes = message.languageCodes;
    }
    if (message.deviceType !== "") {
      obj.deviceType = message.deviceType;
    }
    if (message.dataset !== "") {
      obj.dataset = message.dataset;
    }
    if (message.maxSuggestions !== 0) {
      obj.maxSuggestions = Math.round(message.maxSuggestions);
    }
    if (message.enableAttributeSuggestions !== false) {
      obj.enableAttributeSuggestions = message.enableAttributeSuggestions;
    }
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    return obj;
  },

  create(base?: DeepPartial<CompleteQueryRequest>): CompleteQueryRequest {
    return CompleteQueryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CompleteQueryRequest>): CompleteQueryRequest {
    const message = createBaseCompleteQueryRequest();
    message.catalog = object.catalog ?? "";
    message.query = object.query ?? "";
    message.visitorId = object.visitorId ?? "";
    message.languageCodes = object.languageCodes?.map((e) => e) || [];
    message.deviceType = object.deviceType ?? "";
    message.dataset = object.dataset ?? "";
    message.maxSuggestions = object.maxSuggestions ?? 0;
    message.enableAttributeSuggestions = object.enableAttributeSuggestions ?? false;
    message.entity = object.entity ?? "";
    return message;
  },
};

function createBaseCompleteQueryResponse(): CompleteQueryResponse {
  return { completionResults: [], attributionToken: "", recentSearchResults: [] };
}

export const CompleteQueryResponse: MessageFns<CompleteQueryResponse> = {
  encode(message: CompleteQueryResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.completionResults) {
      CompleteQueryResponse_CompletionResult.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.attributionToken !== "") {
      writer.uint32(18).string(message.attributionToken);
    }
    for (const v of message.recentSearchResults) {
      CompleteQueryResponse_RecentSearchResult.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompleteQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompleteQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.completionResults.push(CompleteQueryResponse_CompletionResult.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attributionToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recentSearchResults.push(CompleteQueryResponse_RecentSearchResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompleteQueryResponse {
    return {
      completionResults: globalThis.Array.isArray(object?.completionResults)
        ? object.completionResults.map((e: any) => CompleteQueryResponse_CompletionResult.fromJSON(e))
        : [],
      attributionToken: isSet(object.attributionToken) ? globalThis.String(object.attributionToken) : "",
      recentSearchResults: globalThis.Array.isArray(object?.recentSearchResults)
        ? object.recentSearchResults.map((e: any) => CompleteQueryResponse_RecentSearchResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CompleteQueryResponse): unknown {
    const obj: any = {};
    if (message.completionResults?.length) {
      obj.completionResults = message.completionResults.map((e) => CompleteQueryResponse_CompletionResult.toJSON(e));
    }
    if (message.attributionToken !== "") {
      obj.attributionToken = message.attributionToken;
    }
    if (message.recentSearchResults?.length) {
      obj.recentSearchResults = message.recentSearchResults.map((e) =>
        CompleteQueryResponse_RecentSearchResult.toJSON(e)
      );
    }
    return obj;
  },

  create(base?: DeepPartial<CompleteQueryResponse>): CompleteQueryResponse {
    return CompleteQueryResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CompleteQueryResponse>): CompleteQueryResponse {
    const message = createBaseCompleteQueryResponse();
    message.completionResults =
      object.completionResults?.map((e) => CompleteQueryResponse_CompletionResult.fromPartial(e)) || [];
    message.attributionToken = object.attributionToken ?? "";
    message.recentSearchResults =
      object.recentSearchResults?.map((e) => CompleteQueryResponse_RecentSearchResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCompleteQueryResponse_CompletionResult(): CompleteQueryResponse_CompletionResult {
  return { suggestion: "", attributes: {} };
}

export const CompleteQueryResponse_CompletionResult: MessageFns<CompleteQueryResponse_CompletionResult> = {
  encode(message: CompleteQueryResponse_CompletionResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.suggestion !== "") {
      writer.uint32(10).string(message.suggestion);
    }
    Object.entries(message.attributes).forEach(([key, value]) => {
      CompleteQueryResponse_CompletionResult_AttributesEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompleteQueryResponse_CompletionResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompleteQueryResponse_CompletionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.suggestion = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = CompleteQueryResponse_CompletionResult_AttributesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.attributes[entry2.key] = entry2.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompleteQueryResponse_CompletionResult {
    return {
      suggestion: isSet(object.suggestion) ? globalThis.String(object.suggestion) : "",
      attributes: isObject(object.attributes)
        ? Object.entries(object.attributes).reduce<{ [key: string]: CustomAttribute }>((acc, [key, value]) => {
          acc[key] = CustomAttribute.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CompleteQueryResponse_CompletionResult): unknown {
    const obj: any = {};
    if (message.suggestion !== "") {
      obj.suggestion = message.suggestion;
    }
    if (message.attributes) {
      const entries = Object.entries(message.attributes);
      if (entries.length > 0) {
        obj.attributes = {};
        entries.forEach(([k, v]) => {
          obj.attributes[k] = CustomAttribute.toJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<CompleteQueryResponse_CompletionResult>): CompleteQueryResponse_CompletionResult {
    return CompleteQueryResponse_CompletionResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CompleteQueryResponse_CompletionResult>): CompleteQueryResponse_CompletionResult {
    const message = createBaseCompleteQueryResponse_CompletionResult();
    message.suggestion = object.suggestion ?? "";
    message.attributes = Object.entries(object.attributes ?? {}).reduce<{ [key: string]: CustomAttribute }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = CustomAttribute.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseCompleteQueryResponse_CompletionResult_AttributesEntry(): CompleteQueryResponse_CompletionResult_AttributesEntry {
  return { key: "", value: undefined };
}

export const CompleteQueryResponse_CompletionResult_AttributesEntry: MessageFns<
  CompleteQueryResponse_CompletionResult_AttributesEntry
> = {
  encode(
    message: CompleteQueryResponse_CompletionResult_AttributesEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CustomAttribute.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompleteQueryResponse_CompletionResult_AttributesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompleteQueryResponse_CompletionResult_AttributesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = CustomAttribute.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompleteQueryResponse_CompletionResult_AttributesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? CustomAttribute.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CompleteQueryResponse_CompletionResult_AttributesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = CustomAttribute.toJSON(message.value);
    }
    return obj;
  },

  create(
    base?: DeepPartial<CompleteQueryResponse_CompletionResult_AttributesEntry>,
  ): CompleteQueryResponse_CompletionResult_AttributesEntry {
    return CompleteQueryResponse_CompletionResult_AttributesEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<CompleteQueryResponse_CompletionResult_AttributesEntry>,
  ): CompleteQueryResponse_CompletionResult_AttributesEntry {
    const message = createBaseCompleteQueryResponse_CompletionResult_AttributesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? CustomAttribute.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseCompleteQueryResponse_RecentSearchResult(): CompleteQueryResponse_RecentSearchResult {
  return { recentSearch: "" };
}

export const CompleteQueryResponse_RecentSearchResult: MessageFns<CompleteQueryResponse_RecentSearchResult> = {
  encode(message: CompleteQueryResponse_RecentSearchResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.recentSearch !== "") {
      writer.uint32(10).string(message.recentSearch);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompleteQueryResponse_RecentSearchResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompleteQueryResponse_RecentSearchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recentSearch = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompleteQueryResponse_RecentSearchResult {
    return { recentSearch: isSet(object.recentSearch) ? globalThis.String(object.recentSearch) : "" };
  },

  toJSON(message: CompleteQueryResponse_RecentSearchResult): unknown {
    const obj: any = {};
    if (message.recentSearch !== "") {
      obj.recentSearch = message.recentSearch;
    }
    return obj;
  },

  create(base?: DeepPartial<CompleteQueryResponse_RecentSearchResult>): CompleteQueryResponse_RecentSearchResult {
    return CompleteQueryResponse_RecentSearchResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CompleteQueryResponse_RecentSearchResult>): CompleteQueryResponse_RecentSearchResult {
    const message = createBaseCompleteQueryResponse_RecentSearchResult();
    message.recentSearch = object.recentSearch ?? "";
    return message;
  },
};

/**
 * Autocomplete service for retail.
 *
 * This feature is only available for users who have Retail Search enabled.
 * Enable Retail Search on Cloud Console before using this feature.
 */
export type CompletionServiceDefinition = typeof CompletionServiceDefinition;
export const CompletionServiceDefinition = {
  name: "CompletionService",
  fullName: "google.cloud.retail.v2.CompletionService",
  methods: {
    /**
     * Completes the specified prefix with keyword suggestions.
     *
     * This feature is only available for users who have Retail Search enabled.
     * Enable Retail Search on Cloud Console before using this feature.
     */
    completeQuery: {
      name: "CompleteQuery",
      requestType: CompleteQueryRequest,
      requestStream: false,
      responseType: CompleteQueryResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              63,
              18,
              61,
              47,
              118,
              50,
              47,
              123,
              99,
              97,
              116,
              97,
              108,
              111,
              103,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              99,
              97,
              116,
              97,
              108,
              111,
              103,
              115,
              47,
              42,
              125,
              58,
              99,
              111,
              109,
              112,
              108,
              101,
              116,
              101,
              81,
              117,
              101,
              114,
              121,
            ]),
          ],
        },
      },
    },
    /**
     * Bulk import of processed completion dataset.
     *
     * Request processing is asynchronous. Partial updating is not supported.
     *
     * The operation is successfully finished only after the imported suggestions
     * are indexed successfully and ready for serving. The process takes hours.
     *
     * This feature is only available for users who have Retail Search enabled.
     * Enable Retail Search on Cloud Console before using this feature.
     */
    importCompletionData: {
      name: "ImportCompletionData",
      requestType: ImportCompletionDataRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          8394: [
            Buffer.from([
              92,
              10,
              51,
              103,
              111,
              111,
              103,
              108,
              101,
              46,
              99,
              108,
              111,
              117,
              100,
              46,
              114,
              101,
              116,
              97,
              105,
              108,
              46,
              118,
              50,
              46,
              73,
              109,
              112,
              111,
              114,
              116,
              67,
              111,
              109,
              112,
              108,
              101,
              116,
              105,
              111,
              110,
              68,
              97,
              116,
              97,
              82,
              101,
              115,
              112,
              111,
              110,
              115,
              101,
              18,
              37,
              103,
              111,
              111,
              103,
              108,
              101,
              46,
              99,
              108,
              111,
              117,
              100,
              46,
              114,
              101,
              116,
              97,
              105,
              108,
              46,
              118,
              50,
              46,
              73,
              109,
              112,
              111,
              114,
              116,
              77,
              101,
              116,
              97,
              100,
              97,
              116,
              97,
            ]),
          ],
          578365826: [
            Buffer.from([
              73,
              58,
              1,
              42,
              34,
              68,
              47,
              118,
              50,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              99,
              97,
              116,
              97,
              108,
              111,
              103,
              115,
              47,
              42,
              125,
              47,
              99,
              111,
              109,
              112,
              108,
              101,
              116,
              105,
              111,
              110,
              68,
              97,
              116,
              97,
              58,
              105,
              109,
              112,
              111,
              114,
              116,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface CompletionServiceImplementation<CallContextExt = {}> {
  /**
   * Completes the specified prefix with keyword suggestions.
   *
   * This feature is only available for users who have Retail Search enabled.
   * Enable Retail Search on Cloud Console before using this feature.
   */
  completeQuery(
    request: CompleteQueryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CompleteQueryResponse>>;
  /**
   * Bulk import of processed completion dataset.
   *
   * Request processing is asynchronous. Partial updating is not supported.
   *
   * The operation is successfully finished only after the imported suggestions
   * are indexed successfully and ready for serving. The process takes hours.
   *
   * This feature is only available for users who have Retail Search enabled.
   * Enable Retail Search on Cloud Console before using this feature.
   */
  importCompletionData(
    request: ImportCompletionDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Operation>>;
}

export interface CompletionServiceClient<CallOptionsExt = {}> {
  /**
   * Completes the specified prefix with keyword suggestions.
   *
   * This feature is only available for users who have Retail Search enabled.
   * Enable Retail Search on Cloud Console before using this feature.
   */
  completeQuery(
    request: DeepPartial<CompleteQueryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CompleteQueryResponse>;
  /**
   * Bulk import of processed completion dataset.
   *
   * Request processing is asynchronous. Partial updating is not supported.
   *
   * The operation is successfully finished only after the imported suggestions
   * are indexed successfully and ready for serving. The process takes hours.
   *
   * This feature is only available for users who have Retail Search enabled.
   * Enable Retail Search on Cloud Console before using this feature.
   */
  importCompletionData(
    request: DeepPartial<ImportCompletionDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Operation>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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
