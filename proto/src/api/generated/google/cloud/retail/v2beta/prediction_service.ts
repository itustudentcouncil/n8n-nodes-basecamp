// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/retail/v2beta/prediction_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Value } from "../../../protobuf/struct.js";
import { UserEvent } from "./user_event.js";

export const protobufPackage = "google.cloud.retail.v2beta";

/** Request message for Predict method. */
export interface PredictRequest {
  /**
   * Required. Full resource name of the format:
   * `{placement=projects/* /locations/global/catalogs/default_catalog/servingConfigs/*}`
   * or
   * `{placement=projects/* /locations/global/catalogs/default_catalog/placements/*}`.
   * We recommend using the `servingConfigs` resource. `placements` is a legacy
   * resource.
   * The ID of the Recommendations AI serving config or placement.
   * Before you can request predictions from your model, you must create at
   * least one serving config or placement for it. For more information, see
   * [Manage serving configs]
   * (https://cloud.google.com/retail/docs/manage-configs).
   *
   * The full list of available serving configs can be seen at
   * https://console.cloud.google.com/ai/retail/catalogs/default_catalog/configs
   */
  placement: string;
  /**
   * Required. Context about the user, what they are looking at and what action
   * they took to trigger the predict request. Note that this user event detail
   * won't be ingested to userEvent logs. Thus, a separate userEvent write
   * request is required for event logging.
   *
   * Don't set
   * [UserEvent.visitor_id][google.cloud.retail.v2beta.UserEvent.visitor_id] or
   * [UserInfo.user_id][google.cloud.retail.v2beta.UserInfo.user_id] to the same
   * fixed ID for different users. If you are trying to receive non-personalized
   * recommendations (not recommended; this can negatively impact model
   * performance), instead set
   * [UserEvent.visitor_id][google.cloud.retail.v2beta.UserEvent.visitor_id] to
   * a random unique ID and leave
   * [UserInfo.user_id][google.cloud.retail.v2beta.UserInfo.user_id] unset.
   */
  userEvent:
    | UserEvent
    | undefined;
  /**
   * Maximum number of results to return. Set this property to the number of
   * prediction results needed. If zero, the service will choose a reasonable
   * default. The maximum allowed value is 100. Values above 100 will be coerced
   * to 100.
   */
  pageSize: number;
  /**
   * This field is not used; leave it unset.
   *
   * @deprecated
   */
  pageToken: string;
  /**
   * Filter for restricting prediction results with a length limit of 5,000
   * characters. Accepts values for tags and the `filterOutOfStockItems` flag.
   *
   *  * Tag expressions. Restricts predictions to products that match all of the
   *    specified tags. Boolean operators `OR` and `NOT` are supported if the
   *    expression is enclosed in parentheses, and must be separated from the
   *    tag values by a space. `-"tagA"` is also supported and is equivalent to
   *    `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings
   *    with a size limit of 1,000 characters.
   *
   *    Note: "Recently viewed" models don't support tag filtering at the
   *    moment.
   *
   *  * filterOutOfStockItems. Restricts predictions to products that do not
   *  have a
   *    stockState value of OUT_OF_STOCK.
   *
   * Examples:
   *
   *  * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional")
   *  * filterOutOfStockItems  tag=(-"promotional")
   *  * filterOutOfStockItems
   *
   * If your filter blocks all prediction results, the API will return *no*
   * results. If instead you want empty result sets to return generic
   * (unfiltered) popular products, set `strictFiltering` to False in
   * `PredictRequest.params`. Note that the API will never return items with
   * storageStatus of "EXPIRED" or "DELETED" regardless of filter choices.
   *
   * If `filterSyntaxV2` is set to true under the `params` field, then
   * attribute-based expressions are expected instead of the above described
   * tag-based syntax. Examples:
   *
   *  * (colors: ANY("Red", "Blue")) AND NOT (categories: ANY("Phones"))
   *  * (availability: ANY("IN_STOCK")) AND
   *    (colors: ANY("Red") OR categories: ANY("Phones"))
   *
   * For more information, see
   * [Filter recommendations](https://cloud.google.com/retail/docs/filter-recs).
   */
  filter: string;
  /**
   * Use validate only mode for this prediction query. If set to true, a
   * dummy model will be used that returns arbitrary products.
   * Note that the validate only mode should only be used for testing the API,
   * or if the model is not ready.
   */
  validateOnly: boolean;
  /**
   * Additional domain specific parameters for the predictions.
   *
   * Allowed values:
   *
   * * `returnProduct`: Boolean. If set to true, the associated product
   *    object will be returned in the `results.metadata` field in the
   *    prediction response.
   * * `returnScore`: Boolean. If set to true, the prediction 'score'
   *    corresponding to each returned product will be set in the
   *    `results.metadata` field in the prediction response. The given
   *    'score' indicates the probability of a product being clicked/purchased
   *    given the user's context and history.
   * * `strictFiltering`: Boolean. True by default. If set to false, the service
   *    will return generic (unfiltered) popular products instead of empty if
   *    your filter blocks all prediction results.
   * * `priceRerankLevel`: String. Default empty. If set to be non-empty, then
   *    it needs to be one of {'no-price-reranking', 'low-price-reranking',
   *    'medium-price-reranking', 'high-price-reranking'}. This gives
   *    request-level control and adjusts prediction results based on product
   *    price.
   * * `diversityLevel`: String. Default empty. If set to be non-empty, then
   *    it needs to be one of {'no-diversity', 'low-diversity',
   *    'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives
   *    request-level control and adjusts prediction results based on product
   *    category.
   * * `filterSyntaxV2`: Boolean. False by default. If set to true, the `filter`
   *   field is interpreteted according to the new, attribute-based syntax.
   */
  params: { [key: string]: any | undefined };
  /**
   * The labels applied to a resource must meet the following requirements:
   *
   * * Each resource can have multiple labels, up to a maximum of 64.
   * * Each label must be a key-value pair.
   * * Keys have a minimum length of 1 character and a maximum length of 63
   *   characters and cannot be empty. Values can be empty and have a maximum
   *   length of 63 characters.
   * * Keys and values can contain only lowercase letters, numeric characters,
   *   underscores, and dashes. All characters must use UTF-8 encoding, and
   *   international characters are allowed.
   * * The key portion of a label must be unique. However, you can use the same
   *   key with multiple resources.
   * * Keys must start with a lowercase letter or international character.
   *
   * See [Google Cloud
   * Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements)
   * for more details.
   */
  labels: { [key: string]: string };
}

export interface PredictRequest_ParamsEntry {
  key: string;
  value: any | undefined;
}

export interface PredictRequest_LabelsEntry {
  key: string;
  value: string;
}

/** Response message for predict method. */
export interface PredictResponse {
  /**
   * A list of recommended products. The order represents the ranking (from the
   * most relevant product to the least).
   */
  results: PredictResponse_PredictionResult[];
  /**
   * A unique attribution token. This should be included in the
   * [UserEvent][google.cloud.retail.v2beta.UserEvent] logs resulting from this
   * recommendation, which enables accurate attribution of recommendation model
   * performance.
   */
  attributionToken: string;
  /** IDs of products in the request that were missing from the inventory. */
  missingIds: string[];
  /** True if the validateOnly property was set in the request. */
  validateOnly: boolean;
}

/** PredictionResult represents the recommendation prediction results. */
export interface PredictResponse_PredictionResult {
  /** ID of the recommended product */
  id: string;
  /**
   * Additional product metadata / annotations.
   *
   * Possible values:
   *
   * * `product`: JSON representation of the product. Is set if
   *   `returnProduct` is set to true in `PredictRequest.params`.
   * * `score`: Prediction score in double value. Is set if
   *   `returnScore` is set to true in `PredictRequest.params`.
   */
  metadata: { [key: string]: any | undefined };
}

export interface PredictResponse_PredictionResult_MetadataEntry {
  key: string;
  value: any | undefined;
}

function createBasePredictRequest(): PredictRequest {
  return {
    placement: "",
    userEvent: undefined,
    pageSize: 0,
    pageToken: "",
    filter: "",
    validateOnly: false,
    params: {},
    labels: {},
  };
}

export const PredictRequest: MessageFns<PredictRequest> = {
  encode(message: PredictRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.placement !== "") {
      writer.uint32(10).string(message.placement);
    }
    if (message.userEvent !== undefined) {
      UserEvent.encode(message.userEvent, writer.uint32(18).fork()).join();
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }
    if (message.validateOnly !== false) {
      writer.uint32(48).bool(message.validateOnly);
    }
    Object.entries(message.params).forEach(([key, value]) => {
      if (value !== undefined) {
        PredictRequest_ParamsEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).join();
      }
    });
    Object.entries(message.labels).forEach(([key, value]) => {
      PredictRequest_LabelsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PredictRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePredictRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placement = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userEvent = UserEvent.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.validateOnly = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = PredictRequest_ParamsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.params[entry7.key] = entry7.value;
          }
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = PredictRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.labels[entry8.key] = entry8.value;
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

  fromJSON(object: any): PredictRequest {
    return {
      placement: isSet(object.placement) ? globalThis.String(object.placement) : "",
      userEvent: isSet(object.userEvent) ? UserEvent.fromJSON(object.userEvent) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
      params: isObject(object.params)
        ? Object.entries(object.params).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PredictRequest): unknown {
    const obj: any = {};
    if (message.placement !== "") {
      obj.placement = message.placement;
    }
    if (message.userEvent !== undefined) {
      obj.userEvent = UserEvent.toJSON(message.userEvent);
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
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    if (message.params) {
      const entries = Object.entries(message.params);
      if (entries.length > 0) {
        obj.params = {};
        entries.forEach(([k, v]) => {
          obj.params[k] = v;
        });
      }
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<PredictRequest>): PredictRequest {
    return PredictRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PredictRequest>): PredictRequest {
    const message = createBasePredictRequest();
    message.placement = object.placement ?? "";
    message.userEvent = (object.userEvent !== undefined && object.userEvent !== null)
      ? UserEvent.fromPartial(object.userEvent)
      : undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.validateOnly = object.validateOnly ?? false;
    message.params = Object.entries(object.params ?? {}).reduce<{ [key: string]: any | undefined }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBasePredictRequest_ParamsEntry(): PredictRequest_ParamsEntry {
  return { key: "", value: undefined };
}

export const PredictRequest_ParamsEntry: MessageFns<PredictRequest_ParamsEntry> = {
  encode(message: PredictRequest_ParamsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PredictRequest_ParamsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePredictRequest_ParamsEntry();
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

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PredictRequest_ParamsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: PredictRequest_ParamsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<PredictRequest_ParamsEntry>): PredictRequest_ParamsEntry {
    return PredictRequest_ParamsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PredictRequest_ParamsEntry>): PredictRequest_ParamsEntry {
    const message = createBasePredictRequest_ParamsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBasePredictRequest_LabelsEntry(): PredictRequest_LabelsEntry {
  return { key: "", value: "" };
}

export const PredictRequest_LabelsEntry: MessageFns<PredictRequest_LabelsEntry> = {
  encode(message: PredictRequest_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PredictRequest_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePredictRequest_LabelsEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PredictRequest_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: PredictRequest_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<PredictRequest_LabelsEntry>): PredictRequest_LabelsEntry {
    return PredictRequest_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PredictRequest_LabelsEntry>): PredictRequest_LabelsEntry {
    const message = createBasePredictRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBasePredictResponse(): PredictResponse {
  return { results: [], attributionToken: "", missingIds: [], validateOnly: false };
}

export const PredictResponse: MessageFns<PredictResponse> = {
  encode(message: PredictResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.results) {
      PredictResponse_PredictionResult.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.attributionToken !== "") {
      writer.uint32(18).string(message.attributionToken);
    }
    for (const v of message.missingIds) {
      writer.uint32(26).string(v!);
    }
    if (message.validateOnly !== false) {
      writer.uint32(32).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PredictResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePredictResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(PredictResponse_PredictionResult.decode(reader, reader.uint32()));
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

          message.missingIds.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.validateOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PredictResponse {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => PredictResponse_PredictionResult.fromJSON(e))
        : [],
      attributionToken: isSet(object.attributionToken) ? globalThis.String(object.attributionToken) : "",
      missingIds: globalThis.Array.isArray(object?.missingIds)
        ? object.missingIds.map((e: any) => globalThis.String(e))
        : [],
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: PredictResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => PredictResponse_PredictionResult.toJSON(e));
    }
    if (message.attributionToken !== "") {
      obj.attributionToken = message.attributionToken;
    }
    if (message.missingIds?.length) {
      obj.missingIds = message.missingIds;
    }
    if (message.validateOnly !== false) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<PredictResponse>): PredictResponse {
    return PredictResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PredictResponse>): PredictResponse {
    const message = createBasePredictResponse();
    message.results = object.results?.map((e) => PredictResponse_PredictionResult.fromPartial(e)) || [];
    message.attributionToken = object.attributionToken ?? "";
    message.missingIds = object.missingIds?.map((e) => e) || [];
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBasePredictResponse_PredictionResult(): PredictResponse_PredictionResult {
  return { id: "", metadata: {} };
}

export const PredictResponse_PredictionResult: MessageFns<PredictResponse_PredictionResult> = {
  encode(message: PredictResponse_PredictionResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      if (value !== undefined) {
        PredictResponse_PredictionResult_MetadataEntry.encode({ key: key as any, value }, writer.uint32(18).fork())
          .join();
      }
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PredictResponse_PredictionResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePredictResponse_PredictionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = PredictResponse_PredictionResult_MetadataEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.metadata[entry2.key] = entry2.value;
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

  fromJSON(object: any): PredictResponse_PredictionResult {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
          acc[key] = value as any | undefined;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PredictResponse_PredictionResult): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.metadata) {
      const entries = Object.entries(message.metadata);
      if (entries.length > 0) {
        obj.metadata = {};
        entries.forEach(([k, v]) => {
          obj.metadata[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<PredictResponse_PredictionResult>): PredictResponse_PredictionResult {
    return PredictResponse_PredictionResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PredictResponse_PredictionResult>): PredictResponse_PredictionResult {
    const message = createBasePredictResponse_PredictionResult();
    message.id = object.id ?? "";
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: any | undefined }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePredictResponse_PredictionResult_MetadataEntry(): PredictResponse_PredictionResult_MetadataEntry {
  return { key: "", value: undefined };
}

export const PredictResponse_PredictionResult_MetadataEntry: MessageFns<
  PredictResponse_PredictionResult_MetadataEntry
> = {
  encode(
    message: PredictResponse_PredictionResult_MetadataEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PredictResponse_PredictionResult_MetadataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePredictResponse_PredictionResult_MetadataEntry();
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

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PredictResponse_PredictionResult_MetadataEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: PredictResponse_PredictionResult_MetadataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },

  create(
    base?: DeepPartial<PredictResponse_PredictionResult_MetadataEntry>,
  ): PredictResponse_PredictionResult_MetadataEntry {
    return PredictResponse_PredictionResult_MetadataEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<PredictResponse_PredictionResult_MetadataEntry>,
  ): PredictResponse_PredictionResult_MetadataEntry {
    const message = createBasePredictResponse_PredictionResult_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

/** Service for making recommendation prediction. */
export type PredictionServiceDefinition = typeof PredictionServiceDefinition;
export const PredictionServiceDefinition = {
  name: "PredictionService",
  fullName: "google.cloud.retail.v2beta.PredictionService",
  methods: {
    /** Makes a recommendation prediction. */
    predict: {
      name: "Predict",
      requestType: PredictRequest,
      requestStream: false,
      responseType: PredictResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              164,
              1,
              58,
              1,
              42,
              90,
              83,
              58,
              1,
              42,
              34,
              78,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              123,
              112,
              108,
              97,
              99,
              101,
              109,
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
              47,
              115,
              101,
              114,
              118,
              105,
              110,
              103,
              67,
              111,
              110,
              102,
              105,
              103,
              115,
              47,
              42,
              125,
              58,
              112,
              114,
              101,
              100,
              105,
              99,
              116,
              34,
              74,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              123,
              112,
              108,
              97,
              99,
              101,
              109,
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
              47,
              112,
              108,
              97,
              99,
              101,
              109,
              101,
              110,
              116,
              115,
              47,
              42,
              125,
              58,
              112,
              114,
              101,
              100,
              105,
              99,
              116,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface PredictionServiceImplementation<CallContextExt = {}> {
  /** Makes a recommendation prediction. */
  predict(request: PredictRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PredictResponse>>;
}

export interface PredictionServiceClient<CallOptionsExt = {}> {
  /** Makes a recommendation prediction. */
  predict(request: DeepPartial<PredictRequest>, options?: CallOptions & CallOptionsExt): Promise<PredictResponse>;
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