// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/billing/budgets/v1/budget_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Empty } from "../../../../protobuf/empty.js";
import { FieldMask } from "../../../../protobuf/field_mask.js";
import { Budget } from "./budget_model.js";

export const protobufPackage = "google.cloud.billing.budgets.v1";

/** Request for CreateBudget */
export interface CreateBudgetRequest {
  /**
   * Required. The name of the billing account to create the budget in. Values
   * are of the form `billingAccounts/{billingAccountId}`.
   */
  parent: string;
  /** Required. Budget to create. */
  budget: Budget | undefined;
}

/** Request for UpdateBudget */
export interface UpdateBudgetRequest {
  /**
   * Required. The updated budget object.
   * The budget to update is specified by the budget name in the budget.
   */
  budget:
    | Budget
    | undefined;
  /**
   * Optional. Indicates which fields in the provided budget to update.
   * Read-only fields (such as `name`) cannot be changed. If this is not
   * provided, then only fields with non-default values from the request are
   * updated. See
   * https://developers.google.com/protocol-buffers/docs/proto3#default for more
   * details about default values.
   */
  updateMask: string[] | undefined;
}

/** Request for GetBudget */
export interface GetBudgetRequest {
  /**
   * Required. Name of budget to get. Values are of the form
   * `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
   */
  name: string;
}

/** Request for ListBudgets */
export interface ListBudgetsRequest {
  /**
   * Required. Name of billing account to list budgets under. Values
   * are of the form `billingAccounts/{billingAccountId}`.
   */
  parent: string;
  /**
   * Optional. Set the scope of the budgets to be returned, in the format of the
   * resource name. The scope of a budget is the cost that it tracks, such as
   * costs for a single project, or the costs for all projects in a folder. Only
   * project scope (in the format of "projects/project-id" or "projects/123") is
   * supported in this field. When this field is set to a project's resource
   * name, the budgets returned are tracking the costs for that project.
   */
  scope: string;
  /**
   * Optional. The maximum number of budgets to return per page.
   * The default and maximum value are 100.
   */
  pageSize: number;
  /**
   * Optional. The value returned by the last `ListBudgetsResponse` which
   * indicates that this is a continuation of a prior `ListBudgets` call,
   * and that the system should return the next page of data.
   */
  pageToken: string;
}

/** Response for ListBudgets */
export interface ListBudgetsResponse {
  /** List of the budgets owned by the requested billing account. */
  budgets: Budget[];
  /**
   * If not empty, indicates that there may be more budgets that match the
   * request; this value should be passed in a new `ListBudgetsRequest`.
   */
  nextPageToken: string;
}

/** Request for DeleteBudget */
export interface DeleteBudgetRequest {
  /**
   * Required. Name of the budget to delete. Values are of the form
   * `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
   */
  name: string;
}

function createBaseCreateBudgetRequest(): CreateBudgetRequest {
  return { parent: "", budget: undefined };
}

export const CreateBudgetRequest: MessageFns<CreateBudgetRequest> = {
  encode(message: CreateBudgetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.budget !== undefined) {
      Budget.encode(message.budget, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateBudgetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBudgetRequest();
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

          message.budget = Budget.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateBudgetRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      budget: isSet(object.budget) ? Budget.fromJSON(object.budget) : undefined,
    };
  },

  toJSON(message: CreateBudgetRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.budget !== undefined) {
      obj.budget = Budget.toJSON(message.budget);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateBudgetRequest>): CreateBudgetRequest {
    return CreateBudgetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateBudgetRequest>): CreateBudgetRequest {
    const message = createBaseCreateBudgetRequest();
    message.parent = object.parent ?? "";
    message.budget = (object.budget !== undefined && object.budget !== null)
      ? Budget.fromPartial(object.budget)
      : undefined;
    return message;
  },
};

function createBaseUpdateBudgetRequest(): UpdateBudgetRequest {
  return { budget: undefined, updateMask: undefined };
}

export const UpdateBudgetRequest: MessageFns<UpdateBudgetRequest> = {
  encode(message: UpdateBudgetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.budget !== undefined) {
      Budget.encode(message.budget, writer.uint32(10).fork()).join();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateBudgetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBudgetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.budget = Budget.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateBudgetRequest {
    return {
      budget: isSet(object.budget) ? Budget.fromJSON(object.budget) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateBudgetRequest): unknown {
    const obj: any = {};
    if (message.budget !== undefined) {
      obj.budget = Budget.toJSON(message.budget);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateBudgetRequest>): UpdateBudgetRequest {
    return UpdateBudgetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateBudgetRequest>): UpdateBudgetRequest {
    const message = createBaseUpdateBudgetRequest();
    message.budget = (object.budget !== undefined && object.budget !== null)
      ? Budget.fromPartial(object.budget)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseGetBudgetRequest(): GetBudgetRequest {
  return { name: "" };
}

export const GetBudgetRequest: MessageFns<GetBudgetRequest> = {
  encode(message: GetBudgetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetBudgetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBudgetRequest();
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

  fromJSON(object: any): GetBudgetRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetBudgetRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetBudgetRequest>): GetBudgetRequest {
    return GetBudgetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetBudgetRequest>): GetBudgetRequest {
    const message = createBaseGetBudgetRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListBudgetsRequest(): ListBudgetsRequest {
  return { parent: "", scope: "", pageSize: 0, pageToken: "" };
}

export const ListBudgetsRequest: MessageFns<ListBudgetsRequest> = {
  encode(message: ListBudgetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.scope !== "") {
      writer.uint32(34).string(message.scope);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListBudgetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBudgetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.scope = reader.string();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListBudgetsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListBudgetsRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.scope !== "") {
      obj.scope = message.scope;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListBudgetsRequest>): ListBudgetsRequest {
    return ListBudgetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListBudgetsRequest>): ListBudgetsRequest {
    const message = createBaseListBudgetsRequest();
    message.parent = object.parent ?? "";
    message.scope = object.scope ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListBudgetsResponse(): ListBudgetsResponse {
  return { budgets: [], nextPageToken: "" };
}

export const ListBudgetsResponse: MessageFns<ListBudgetsResponse> = {
  encode(message: ListBudgetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.budgets) {
      Budget.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListBudgetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBudgetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.budgets.push(Budget.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListBudgetsResponse {
    return {
      budgets: globalThis.Array.isArray(object?.budgets) ? object.budgets.map((e: any) => Budget.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListBudgetsResponse): unknown {
    const obj: any = {};
    if (message.budgets?.length) {
      obj.budgets = message.budgets.map((e) => Budget.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListBudgetsResponse>): ListBudgetsResponse {
    return ListBudgetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListBudgetsResponse>): ListBudgetsResponse {
    const message = createBaseListBudgetsResponse();
    message.budgets = object.budgets?.map((e) => Budget.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseDeleteBudgetRequest(): DeleteBudgetRequest {
  return { name: "" };
}

export const DeleteBudgetRequest: MessageFns<DeleteBudgetRequest> = {
  encode(message: DeleteBudgetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteBudgetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBudgetRequest();
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

  fromJSON(object: any): DeleteBudgetRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeleteBudgetRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteBudgetRequest>): DeleteBudgetRequest {
    return DeleteBudgetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteBudgetRequest>): DeleteBudgetRequest {
    const message = createBaseDeleteBudgetRequest();
    message.name = object.name ?? "";
    return message;
  },
};

/**
 * BudgetService stores Cloud Billing budgets, which define a
 * budget plan and rules to execute as we track spend against that plan.
 */
export type BudgetServiceDefinition = typeof BudgetServiceDefinition;
export const BudgetServiceDefinition = {
  name: "BudgetService",
  fullName: "google.cloud.billing.budgets.v1.BudgetService",
  methods: {
    /**
     * Creates a new budget. See
     * [Quotas and limits](https://cloud.google.com/billing/quotas)
     * for more information on the limits of the number of budgets you can create.
     */
    createBudget: {
      name: "CreateBudget",
      requestType: CreateBudgetRequest,
      requestStream: false,
      responseType: Budget,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([13, 112, 97, 114, 101, 110, 116, 44, 98, 117, 100, 103, 101, 116])],
          578365826: [
            Buffer.from([
              48,
              58,
              6,
              98,
              117,
              100,
              103,
              101,
              116,
              34,
              38,
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
              98,
              105,
              108,
              108,
              105,
              110,
              103,
              65,
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
              98,
              117,
              100,
              103,
              101,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /**
     * Updates a budget and returns the updated budget.
     *
     * WARNING: There are some fields exposed on the Google Cloud Console that
     * aren't available on this API. Budget fields that are not exposed in
     * this API will not be changed by this method.
     */
    updateBudget: {
      name: "UpdateBudget",
      requestType: UpdateBudgetRequest,
      requestStream: false,
      responseType: Budget,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([18, 98, 117, 100, 103, 101, 116, 44, 117, 112, 100, 97, 116, 101, 95, 109, 97, 115, 107]),
          ],
          578365826: [
            Buffer.from([
              55,
              58,
              6,
              98,
              117,
              100,
              103,
              101,
              116,
              50,
              45,
              47,
              118,
              49,
              47,
              123,
              98,
              117,
              100,
              103,
              101,
              116,
              46,
              110,
              97,
              109,
              101,
              61,
              98,
              105,
              108,
              108,
              105,
              110,
              103,
              65,
              99,
              99,
              111,
              117,
              110,
              116,
              115,
              47,
              42,
              47,
              98,
              117,
              100,
              103,
              101,
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
     * Returns a budget.
     *
     * WARNING: There are some fields exposed on the Google Cloud Console that
     * aren't available on this API. When reading from the API, you will not
     * see these fields in the return value, though they may have been set
     * in the Cloud Console.
     */
    getBudget: {
      name: "GetBudget",
      requestType: GetBudgetRequest,
      requestStream: false,
      responseType: Budget,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              40,
              18,
              38,
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
              98,
              105,
              108,
              108,
              105,
              110,
              103,
              65,
              99,
              99,
              111,
              117,
              110,
              116,
              115,
              47,
              42,
              47,
              98,
              117,
              100,
              103,
              101,
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
     * Returns a list of budgets for a billing account.
     *
     * WARNING: There are some fields exposed on the Google Cloud Console that
     * aren't available on this API. When reading from the API, you will not
     * see these fields in the return value, though they may have been set
     * in the Cloud Console.
     */
    listBudgets: {
      name: "ListBudgets",
      requestType: ListBudgetsRequest,
      requestStream: false,
      responseType: ListBudgetsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              40,
              18,
              38,
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
              98,
              105,
              108,
              108,
              105,
              110,
              103,
              65,
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
              98,
              117,
              100,
              103,
              101,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /** Deletes a budget. Returns successfully if already deleted. */
    deleteBudget: {
      name: "DeleteBudget",
      requestType: DeleteBudgetRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              40,
              42,
              38,
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
              98,
              105,
              108,
              108,
              105,
              110,
              103,
              65,
              99,
              99,
              111,
              117,
              110,
              116,
              115,
              47,
              42,
              47,
              98,
              117,
              100,
              103,
              101,
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
  },
} as const;

export interface BudgetServiceImplementation<CallContextExt = {}> {
  /**
   * Creates a new budget. See
   * [Quotas and limits](https://cloud.google.com/billing/quotas)
   * for more information on the limits of the number of budgets you can create.
   */
  createBudget(request: CreateBudgetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Budget>>;
  /**
   * Updates a budget and returns the updated budget.
   *
   * WARNING: There are some fields exposed on the Google Cloud Console that
   * aren't available on this API. Budget fields that are not exposed in
   * this API will not be changed by this method.
   */
  updateBudget(request: UpdateBudgetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Budget>>;
  /**
   * Returns a budget.
   *
   * WARNING: There are some fields exposed on the Google Cloud Console that
   * aren't available on this API. When reading from the API, you will not
   * see these fields in the return value, though they may have been set
   * in the Cloud Console.
   */
  getBudget(request: GetBudgetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Budget>>;
  /**
   * Returns a list of budgets for a billing account.
   *
   * WARNING: There are some fields exposed on the Google Cloud Console that
   * aren't available on this API. When reading from the API, you will not
   * see these fields in the return value, though they may have been set
   * in the Cloud Console.
   */
  listBudgets(
    request: ListBudgetsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListBudgetsResponse>>;
  /** Deletes a budget. Returns successfully if already deleted. */
  deleteBudget(request: DeleteBudgetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}

export interface BudgetServiceClient<CallOptionsExt = {}> {
  /**
   * Creates a new budget. See
   * [Quotas and limits](https://cloud.google.com/billing/quotas)
   * for more information on the limits of the number of budgets you can create.
   */
  createBudget(request: DeepPartial<CreateBudgetRequest>, options?: CallOptions & CallOptionsExt): Promise<Budget>;
  /**
   * Updates a budget and returns the updated budget.
   *
   * WARNING: There are some fields exposed on the Google Cloud Console that
   * aren't available on this API. Budget fields that are not exposed in
   * this API will not be changed by this method.
   */
  updateBudget(request: DeepPartial<UpdateBudgetRequest>, options?: CallOptions & CallOptionsExt): Promise<Budget>;
  /**
   * Returns a budget.
   *
   * WARNING: There are some fields exposed on the Google Cloud Console that
   * aren't available on this API. When reading from the API, you will not
   * see these fields in the return value, though they may have been set
   * in the Cloud Console.
   */
  getBudget(request: DeepPartial<GetBudgetRequest>, options?: CallOptions & CallOptionsExt): Promise<Budget>;
  /**
   * Returns a list of budgets for a billing account.
   *
   * WARNING: There are some fields exposed on the Google Cloud Console that
   * aren't available on this API. When reading from the API, you will not
   * see these fields in the return value, though they may have been set
   * in the Cloud Console.
   */
  listBudgets(
    request: DeepPartial<ListBudgetsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListBudgetsResponse>;
  /** Deletes a budget. Returns successfully if already deleted. */
  deleteBudget(request: DeepPartial<DeleteBudgetRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
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
