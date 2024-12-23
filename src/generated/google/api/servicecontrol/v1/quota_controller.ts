// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/api/servicecontrol/v1/quota_controller.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Status } from "../../../rpc/status.js";
import { MetricValueSet } from "./metric_value.js";

export const protobufPackage = "google.api.servicecontrol.v1";

/** Request message for the AllocateQuota method. */
export interface AllocateQuotaRequest {
  /**
   * Name of the service as specified in the service configuration. For example,
   * `"pubsub.googleapis.com"`.
   *
   * See [google.api.Service][google.api.Service] for the definition of a service name.
   */
  serviceName: string;
  /** Operation that describes the quota allocation. */
  allocateOperation:
    | QuotaOperation
    | undefined;
  /**
   * Specifies which version of service configuration should be used to process
   * the request. If unspecified or no matching version can be found, the latest
   * one will be used.
   */
  serviceConfigId: string;
}

/** Represents information regarding a quota operation. */
export interface QuotaOperation {
  /**
   * Identity of the operation. This is expected to be unique within the scope
   * of the service that generated the operation, and guarantees idempotency in
   * case of retries.
   *
   * In order to ensure best performance and latency in the Quota backends,
   * operation_ids are optimally associated with time, so that related
   * operations can be accessed fast in storage. For this reason, the
   * recommended token for services that intend to operate at a high QPS is
   * Unix time in nanos + UUID
   */
  operationId: string;
  /**
   * Fully qualified name of the API method for which this quota operation is
   * requested. This name is used for matching quota rules or metric rules and
   * billing status rules defined in service configuration.
   *
   * This field should not be set if any of the following is true:
   * (1) the quota operation is performed on non-API resources.
   * (2) quota_metrics is set because the caller is doing quota override.
   *
   * Example of an RPC method name:
   *     google.example.library.v1.LibraryService.CreateShelf
   */
  methodName: string;
  /**
   * Identity of the consumer for whom this quota operation is being performed.
   *
   * This can be in one of the following formats:
   *   project:<project_id>,
   *   project_number:<project_number>,
   *   api_key:<api_key>.
   */
  consumerId: string;
  /** Labels describing the operation. */
  labels: { [key: string]: string };
  /**
   * Represents information about this operation. Each MetricValueSet
   * corresponds to a metric defined in the service configuration.
   * The data type used in the MetricValueSet must agree with
   * the data type specified in the metric definition.
   *
   * Within a single operation, it is not allowed to have more than one
   * MetricValue instances that have the same metric names and identical
   * label value combinations. If a request has such duplicated MetricValue
   * instances, the entire request is rejected with
   * an invalid argument error.
   *
   * This field is mutually exclusive with method_name.
   */
  quotaMetrics: MetricValueSet[];
  /** Quota mode for this operation. */
  quotaMode: QuotaOperation_QuotaMode;
}

/** Supported quota modes. */
export enum QuotaOperation_QuotaMode {
  /** UNSPECIFIED - Guard against implicit default. Must not be used. */
  UNSPECIFIED = 0,
  /**
   * NORMAL - For AllocateQuota request, allocates quota for the amount specified in
   * the service configuration or specified using the quota metrics. If the
   * amount is higher than the available quota, allocation error will be
   * returned and no quota will be allocated.
   * If multiple quotas are part of the request, and one fails, none of the
   * quotas are allocated or released.
   */
  NORMAL = 1,
  /**
   * BEST_EFFORT - The operation allocates quota for the amount specified in the service
   * configuration or specified using the quota metrics. If the amount is
   * higher than the available quota, request does not fail but all available
   * quota will be allocated.
   * For rate quota, BEST_EFFORT will continue to deduct from other groups
   * even if one does not have enough quota. For allocation, it will find the
   * minimum available amount across all groups and deduct that amount from
   * all the affected groups.
   */
  BEST_EFFORT = 2,
  /**
   * CHECK_ONLY - For AllocateQuota request, only checks if there is enough quota
   * available and does not change the available quota. No lock is placed on
   * the available quota either.
   */
  CHECK_ONLY = 3,
  /**
   * QUERY_ONLY - Unimplemented. When used in AllocateQuotaRequest, this returns the
   * effective quota limit(s) in the response, and no quota check will be
   * performed. Not supported for other requests, and even for
   * AllocateQuotaRequest, this is currently supported only for allowlisted
   * services.
   */
  QUERY_ONLY = 4,
  /**
   * ADJUST_ONLY - The operation allocates quota for the amount specified in the service
   * configuration or specified using the quota metrics. If the requested
   * amount is higher than the available quota, request does not fail and
   * remaining quota would become negative (going over the limit).
   * Not supported for Rate Quota.
   */
  ADJUST_ONLY = 5,
  UNRECOGNIZED = -1,
}

export function quotaOperation_QuotaModeFromJSON(object: any): QuotaOperation_QuotaMode {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return QuotaOperation_QuotaMode.UNSPECIFIED;
    case 1:
    case "NORMAL":
      return QuotaOperation_QuotaMode.NORMAL;
    case 2:
    case "BEST_EFFORT":
      return QuotaOperation_QuotaMode.BEST_EFFORT;
    case 3:
    case "CHECK_ONLY":
      return QuotaOperation_QuotaMode.CHECK_ONLY;
    case 4:
    case "QUERY_ONLY":
      return QuotaOperation_QuotaMode.QUERY_ONLY;
    case 5:
    case "ADJUST_ONLY":
      return QuotaOperation_QuotaMode.ADJUST_ONLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaOperation_QuotaMode.UNRECOGNIZED;
  }
}

export function quotaOperation_QuotaModeToJSON(object: QuotaOperation_QuotaMode): string {
  switch (object) {
    case QuotaOperation_QuotaMode.UNSPECIFIED:
      return "UNSPECIFIED";
    case QuotaOperation_QuotaMode.NORMAL:
      return "NORMAL";
    case QuotaOperation_QuotaMode.BEST_EFFORT:
      return "BEST_EFFORT";
    case QuotaOperation_QuotaMode.CHECK_ONLY:
      return "CHECK_ONLY";
    case QuotaOperation_QuotaMode.QUERY_ONLY:
      return "QUERY_ONLY";
    case QuotaOperation_QuotaMode.ADJUST_ONLY:
      return "ADJUST_ONLY";
    case QuotaOperation_QuotaMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface QuotaOperation_LabelsEntry {
  key: string;
  value: string;
}

/** Response message for the AllocateQuota method. */
export interface AllocateQuotaResponse {
  /**
   * The same operation_id value used in the AllocateQuotaRequest. Used for
   * logging and diagnostics purposes.
   */
  operationId: string;
  /** Indicates the decision of the allocate. */
  allocateErrors: QuotaError[];
  /**
   * Quota metrics to indicate the result of allocation. Depending on the
   * request, one or more of the following metrics will be included:
   *
   * 1. Per quota group or per quota metric incremental usage will be specified
   * using the following delta metric :
   *   "serviceruntime.googleapis.com/api/consumer/quota_used_count"
   *
   * 2. The quota limit reached condition will be specified using the following
   * boolean metric :
   *   "serviceruntime.googleapis.com/quota/exceeded"
   */
  quotaMetrics: MetricValueSet[];
  /** ID of the actual config used to process the request. */
  serviceConfigId: string;
}

/** Represents error information for [QuotaOperation][google.api.servicecontrol.v1.QuotaOperation]. */
export interface QuotaError {
  /** Error code. */
  code: QuotaError_Code;
  /**
   * Subject to whom this error applies. See the specific enum for more details
   * on this field. For example, "clientip:<ip address of client>" or
   * "project:<Google developer project id>".
   */
  subject: string;
  /** Free-form text that provides details on the cause of the error. */
  description: string;
  /**
   * Contains additional information about the quota error.
   * If available, `status.code` will be non zero.
   */
  status: Status | undefined;
}

/**
 * Error codes related to project config validations are deprecated since the
 * quota controller methods do not perform these validations. Instead services
 * have to call the Check method, without quota_properties field, to perform
 * these validations before calling the quota controller methods. These
 * methods check only for project deletion to be wipe out compliant.
 */
export enum QuotaError_Code {
  /** UNSPECIFIED - This is never used. */
  UNSPECIFIED = 0,
  /**
   * RESOURCE_EXHAUSTED - Quota allocation failed.
   * Same as [google.rpc.Code.RESOURCE_EXHAUSTED][google.rpc.Code.RESOURCE_EXHAUSTED].
   */
  RESOURCE_EXHAUSTED = 8,
  /**
   * BILLING_NOT_ACTIVE - Consumer cannot access the service because the service requires active
   * billing.
   */
  BILLING_NOT_ACTIVE = 107,
  /** PROJECT_DELETED - Consumer's project has been marked as deleted (soft deletion). */
  PROJECT_DELETED = 108,
  /** API_KEY_INVALID - Specified API key is invalid. */
  API_KEY_INVALID = 105,
  /** API_KEY_EXPIRED - Specified API Key has expired. */
  API_KEY_EXPIRED = 112,
  UNRECOGNIZED = -1,
}

export function quotaError_CodeFromJSON(object: any): QuotaError_Code {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return QuotaError_Code.UNSPECIFIED;
    case 8:
    case "RESOURCE_EXHAUSTED":
      return QuotaError_Code.RESOURCE_EXHAUSTED;
    case 107:
    case "BILLING_NOT_ACTIVE":
      return QuotaError_Code.BILLING_NOT_ACTIVE;
    case 108:
    case "PROJECT_DELETED":
      return QuotaError_Code.PROJECT_DELETED;
    case 105:
    case "API_KEY_INVALID":
      return QuotaError_Code.API_KEY_INVALID;
    case 112:
    case "API_KEY_EXPIRED":
      return QuotaError_Code.API_KEY_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaError_Code.UNRECOGNIZED;
  }
}

export function quotaError_CodeToJSON(object: QuotaError_Code): string {
  switch (object) {
    case QuotaError_Code.UNSPECIFIED:
      return "UNSPECIFIED";
    case QuotaError_Code.RESOURCE_EXHAUSTED:
      return "RESOURCE_EXHAUSTED";
    case QuotaError_Code.BILLING_NOT_ACTIVE:
      return "BILLING_NOT_ACTIVE";
    case QuotaError_Code.PROJECT_DELETED:
      return "PROJECT_DELETED";
    case QuotaError_Code.API_KEY_INVALID:
      return "API_KEY_INVALID";
    case QuotaError_Code.API_KEY_EXPIRED:
      return "API_KEY_EXPIRED";
    case QuotaError_Code.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAllocateQuotaRequest(): AllocateQuotaRequest {
  return { serviceName: "", allocateOperation: undefined, serviceConfigId: "" };
}

export const AllocateQuotaRequest: MessageFns<AllocateQuotaRequest> = {
  encode(message: AllocateQuotaRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.allocateOperation !== undefined) {
      QuotaOperation.encode(message.allocateOperation, writer.uint32(18).fork()).join();
    }
    if (message.serviceConfigId !== "") {
      writer.uint32(34).string(message.serviceConfigId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AllocateQuotaRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocateQuotaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.allocateOperation = QuotaOperation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.serviceConfigId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllocateQuotaRequest {
    return {
      serviceName: isSet(object.serviceName) ? globalThis.String(object.serviceName) : "",
      allocateOperation: isSet(object.allocateOperation)
        ? QuotaOperation.fromJSON(object.allocateOperation)
        : undefined,
      serviceConfigId: isSet(object.serviceConfigId) ? globalThis.String(object.serviceConfigId) : "",
    };
  },

  toJSON(message: AllocateQuotaRequest): unknown {
    const obj: any = {};
    if (message.serviceName !== "") {
      obj.serviceName = message.serviceName;
    }
    if (message.allocateOperation !== undefined) {
      obj.allocateOperation = QuotaOperation.toJSON(message.allocateOperation);
    }
    if (message.serviceConfigId !== "") {
      obj.serviceConfigId = message.serviceConfigId;
    }
    return obj;
  },

  create(base?: DeepPartial<AllocateQuotaRequest>): AllocateQuotaRequest {
    return AllocateQuotaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AllocateQuotaRequest>): AllocateQuotaRequest {
    const message = createBaseAllocateQuotaRequest();
    message.serviceName = object.serviceName ?? "";
    message.allocateOperation = (object.allocateOperation !== undefined && object.allocateOperation !== null)
      ? QuotaOperation.fromPartial(object.allocateOperation)
      : undefined;
    message.serviceConfigId = object.serviceConfigId ?? "";
    return message;
  },
};

function createBaseQuotaOperation(): QuotaOperation {
  return { operationId: "", methodName: "", consumerId: "", labels: {}, quotaMetrics: [], quotaMode: 0 };
}

export const QuotaOperation: MessageFns<QuotaOperation> = {
  encode(message: QuotaOperation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }
    if (message.methodName !== "") {
      writer.uint32(18).string(message.methodName);
    }
    if (message.consumerId !== "") {
      writer.uint32(26).string(message.consumerId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      QuotaOperation_LabelsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    for (const v of message.quotaMetrics) {
      MetricValueSet.encode(v!, writer.uint32(42).fork()).join();
    }
    if (message.quotaMode !== 0) {
      writer.uint32(48).int32(message.quotaMode);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuotaOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operationId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.methodName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.consumerId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = QuotaOperation_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quotaMetrics.push(MetricValueSet.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.quotaMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuotaOperation {
    return {
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
      methodName: isSet(object.methodName) ? globalThis.String(object.methodName) : "",
      consumerId: isSet(object.consumerId) ? globalThis.String(object.consumerId) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      quotaMetrics: globalThis.Array.isArray(object?.quotaMetrics)
        ? object.quotaMetrics.map((e: any) => MetricValueSet.fromJSON(e))
        : [],
      quotaMode: isSet(object.quotaMode) ? quotaOperation_QuotaModeFromJSON(object.quotaMode) : 0,
    };
  },

  toJSON(message: QuotaOperation): unknown {
    const obj: any = {};
    if (message.operationId !== "") {
      obj.operationId = message.operationId;
    }
    if (message.methodName !== "") {
      obj.methodName = message.methodName;
    }
    if (message.consumerId !== "") {
      obj.consumerId = message.consumerId;
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
    if (message.quotaMetrics?.length) {
      obj.quotaMetrics = message.quotaMetrics.map((e) => MetricValueSet.toJSON(e));
    }
    if (message.quotaMode !== 0) {
      obj.quotaMode = quotaOperation_QuotaModeToJSON(message.quotaMode);
    }
    return obj;
  },

  create(base?: DeepPartial<QuotaOperation>): QuotaOperation {
    return QuotaOperation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuotaOperation>): QuotaOperation {
    const message = createBaseQuotaOperation();
    message.operationId = object.operationId ?? "";
    message.methodName = object.methodName ?? "";
    message.consumerId = object.consumerId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.quotaMetrics = object.quotaMetrics?.map((e) => MetricValueSet.fromPartial(e)) || [];
    message.quotaMode = object.quotaMode ?? 0;
    return message;
  },
};

function createBaseQuotaOperation_LabelsEntry(): QuotaOperation_LabelsEntry {
  return { key: "", value: "" };
}

export const QuotaOperation_LabelsEntry: MessageFns<QuotaOperation_LabelsEntry> = {
  encode(message: QuotaOperation_LabelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuotaOperation_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaOperation_LabelsEntry();
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

  fromJSON(object: any): QuotaOperation_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: QuotaOperation_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<QuotaOperation_LabelsEntry>): QuotaOperation_LabelsEntry {
    return QuotaOperation_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuotaOperation_LabelsEntry>): QuotaOperation_LabelsEntry {
    const message = createBaseQuotaOperation_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAllocateQuotaResponse(): AllocateQuotaResponse {
  return { operationId: "", allocateErrors: [], quotaMetrics: [], serviceConfigId: "" };
}

export const AllocateQuotaResponse: MessageFns<AllocateQuotaResponse> = {
  encode(message: AllocateQuotaResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }
    for (const v of message.allocateErrors) {
      QuotaError.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.quotaMetrics) {
      MetricValueSet.encode(v!, writer.uint32(26).fork()).join();
    }
    if (message.serviceConfigId !== "") {
      writer.uint32(34).string(message.serviceConfigId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AllocateQuotaResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocateQuotaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operationId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.allocateErrors.push(QuotaError.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quotaMetrics.push(MetricValueSet.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.serviceConfigId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllocateQuotaResponse {
    return {
      operationId: isSet(object.operationId) ? globalThis.String(object.operationId) : "",
      allocateErrors: globalThis.Array.isArray(object?.allocateErrors)
        ? object.allocateErrors.map((e: any) => QuotaError.fromJSON(e))
        : [],
      quotaMetrics: globalThis.Array.isArray(object?.quotaMetrics)
        ? object.quotaMetrics.map((e: any) => MetricValueSet.fromJSON(e))
        : [],
      serviceConfigId: isSet(object.serviceConfigId) ? globalThis.String(object.serviceConfigId) : "",
    };
  },

  toJSON(message: AllocateQuotaResponse): unknown {
    const obj: any = {};
    if (message.operationId !== "") {
      obj.operationId = message.operationId;
    }
    if (message.allocateErrors?.length) {
      obj.allocateErrors = message.allocateErrors.map((e) => QuotaError.toJSON(e));
    }
    if (message.quotaMetrics?.length) {
      obj.quotaMetrics = message.quotaMetrics.map((e) => MetricValueSet.toJSON(e));
    }
    if (message.serviceConfigId !== "") {
      obj.serviceConfigId = message.serviceConfigId;
    }
    return obj;
  },

  create(base?: DeepPartial<AllocateQuotaResponse>): AllocateQuotaResponse {
    return AllocateQuotaResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AllocateQuotaResponse>): AllocateQuotaResponse {
    const message = createBaseAllocateQuotaResponse();
    message.operationId = object.operationId ?? "";
    message.allocateErrors = object.allocateErrors?.map((e) => QuotaError.fromPartial(e)) || [];
    message.quotaMetrics = object.quotaMetrics?.map((e) => MetricValueSet.fromPartial(e)) || [];
    message.serviceConfigId = object.serviceConfigId ?? "";
    return message;
  },
};

function createBaseQuotaError(): QuotaError {
  return { code: 0, subject: "", description: "", status: undefined };
}

export const QuotaError: MessageFns<QuotaError> = {
  encode(message: QuotaError, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.subject !== "") {
      writer.uint32(18).string(message.subject);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuotaError {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subject = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuotaError {
    return {
      code: isSet(object.code) ? quotaError_CodeFromJSON(object.code) : 0,
      subject: isSet(object.subject) ? globalThis.String(object.subject) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: QuotaError): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = quotaError_CodeToJSON(message.code);
    }
    if (message.subject !== "") {
      obj.subject = message.subject;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== undefined) {
      obj.status = Status.toJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<QuotaError>): QuotaError {
    return QuotaError.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuotaError>): QuotaError {
    const message = createBaseQuotaError();
    message.code = object.code ?? 0;
    message.subject = object.subject ?? "";
    message.description = object.description ?? "";
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

/**
 * [Google Quota Control API](/service-control/overview)
 *
 * Allows clients to allocate and release quota against a [managed
 * service](https://cloud.google.com/service-management/reference/rpc/google.api/servicemanagement.v1#google.api.servicemanagement.v1.ManagedService).
 */
export type QuotaControllerDefinition = typeof QuotaControllerDefinition;
export const QuotaControllerDefinition = {
  name: "QuotaController",
  fullName: "google.api.servicecontrol.v1.QuotaController",
  methods: {
    /**
     * Attempts to allocate quota for the specified consumer. It should be called
     * before the operation is executed.
     *
     * This method requires the `servicemanagement.services.quota`
     * permission on the specified service. For more information, see
     * [Cloud IAM](https://cloud.google.com/iam).
     *
     * **NOTE:** The client **must** fail-open on server errors `INTERNAL`,
     * `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
     * reliability, the server may inject these errors to prohibit any hard
     * dependency on the quota functionality.
     */
    allocateQuota: {
      name: "AllocateQuota",
      requestType: AllocateQuotaRequest,
      requestStream: false,
      responseType: AllocateQuotaResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              46,
              58,
              1,
              42,
              34,
              41,
              47,
              118,
              49,
              47,
              115,
              101,
              114,
              118,
              105,
              99,
              101,
              115,
              47,
              123,
              115,
              101,
              114,
              118,
              105,
              99,
              101,
              95,
              110,
              97,
              109,
              101,
              125,
              58,
              97,
              108,
              108,
              111,
              99,
              97,
              116,
              101,
              81,
              117,
              111,
              116,
              97,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface QuotaControllerServiceImplementation<CallContextExt = {}> {
  /**
   * Attempts to allocate quota for the specified consumer. It should be called
   * before the operation is executed.
   *
   * This method requires the `servicemanagement.services.quota`
   * permission on the specified service. For more information, see
   * [Cloud IAM](https://cloud.google.com/iam).
   *
   * **NOTE:** The client **must** fail-open on server errors `INTERNAL`,
   * `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
   * reliability, the server may inject these errors to prohibit any hard
   * dependency on the quota functionality.
   */
  allocateQuota(
    request: AllocateQuotaRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AllocateQuotaResponse>>;
}

export interface QuotaControllerClient<CallOptionsExt = {}> {
  /**
   * Attempts to allocate quota for the specified consumer. It should be called
   * before the operation is executed.
   *
   * This method requires the `servicemanagement.services.quota`
   * permission on the specified service. For more information, see
   * [Cloud IAM](https://cloud.google.com/iam).
   *
   * **NOTE:** The client **must** fail-open on server errors `INTERNAL`,
   * `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
   * reliability, the server may inject these errors to prohibit any hard
   * dependency on the quota functionality.
   */
  allocateQuota(
    request: DeepPartial<AllocateQuotaRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AllocateQuotaResponse>;
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
