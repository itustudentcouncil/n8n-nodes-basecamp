// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/admanager/v1/order_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { AppliedLabel } from "./applied_label.js";

export const protobufPackage = "google.ads.admanager.v1";

/** The `Order` resource. */
export interface Order {
  /**
   * Identifier. The resource name of the `Order`.
   * Format: `networks/{network_code}/orders/{order_id}`
   */
  name: string;
  /** Output only. Order ID. */
  orderId: Long;
  /**
   * Required. The display name of the Order.  This value is required to create
   * an order and has a maximum length of 255 characters.
   */
  displayName: string;
  /** Optional. Specifies whether or not the Order is a programmatic order. */
  programmatic: boolean;
  /**
   * Required. The resource name of the User responsible for trafficking the
   * Order. Format: "networks/{network_code}/users/{user_id}"
   */
  trafficker: string;
  /**
   * Optional. The resource names of Contacts from the advertiser of this Order.
   * Format: "networks/{network_code}/contacts/{contact_id}"
   */
  advertiserContacts: string[];
  /**
   * Required. The resource name of the Company, which is of type
   * Company.Type.ADVERTISER, to which this order belongs. This attribute is
   * required. Format: "networks/{network_code}/companies/{company_id}"
   */
  advertiser: string;
  /**
   * Optional. The resource names of Contacts from the advertising Agency of
   * this Order. Format: "networks/{network_code}/contacts/{contact_id}"
   */
  agencyContacts: string[];
  /**
   * Optional. The resource name of the Company, which is of type
   * Company.Type.AGENCY, with which this order is associated. Format:
   * "networks/{network_code}/companies/{company_id}"
   */
  agency: string;
  /**
   * Optional. The resource names of Teams directly applied to this Order.
   * Format: "networks/{network_code}/teams/{team_id}"
   */
  appliedTeams: string[];
  /**
   * Output only. The resource names of Teams applied to this Order including
   * inherited values. Format: "networks/{network_code}/teams/{team_id}"
   */
  effectiveTeams: string[];
  /**
   * Output only. The resource name of the User who created the Order on behalf
   * of the advertiser. This value is assigned by Google. Format:
   * "networks/{network_code}/users/{user_id}"
   */
  creator: string;
  /**
   * Output only. The ISO 4217 3-letter currency code for the currency used by
   * the Order. This value is the network's currency code.
   */
  currencyCode: string;
  /**
   * Output only. The instant at which the Order and its associated line items
   * are eligible to begin serving. This attribute is derived from the line item
   * of the order that has the earliest LineItem.start_time.
   */
  startTime:
    | Date
    | undefined;
  /**
   * Output only. The instant at which the Order and its associated line items
   * stop being served. This attribute is derived from the line item of the
   * order that has the latest LineItem.end_time.
   */
  endTime:
    | Date
    | undefined;
  /**
   * Optional. An arbitrary ID to associate to the Order, which can be used as a
   * key to an external system.
   */
  externalOrderId: Long;
  /** Output only. The archival status of the Order. */
  archived: boolean;
  /**
   * Output only. The application which modified this order. This attribute is
   * assigned by Google.
   */
  lastModifiedByApp: string;
  /** Output only. The instant this Order was last modified. */
  updateTime:
    | Date
    | undefined;
  /**
   * Optional. Provides any additional notes that may annotate the Order. This
   * attribute has a maximum length of 65,535 characters.
   */
  notes: string;
  /**
   * Optional. The purchase order number for the Order. This value has a maximum
   * length of 63 characters.
   */
  poNumber: string;
  /** Output only. The status of the Order. */
  status: Order_Status;
  /**
   * Optional. The resource name of the User responsible for the sales of the
   * Order. Format: "networks/{network_code}/users/{user_id}"
   */
  salesperson: string;
  /**
   * Optional. The resource names of the secondary salespeople associated with
   * the order. Format: "networks/{network_code}/users/{user_id}"
   */
  secondarySalespeople: string[];
  /**
   * Optional. The resource names of the secondary traffickers associated with
   * the order. Format: "networks/{network_code}/users/{user_id}"
   */
  secondaryTraffickers: string[];
  /** Optional. The set of labels applied directly to this order. */
  appliedLabels: AppliedLabel[];
  /**
   * Output only. Contains the set of labels applied directly to the order as
   * well as those inherited from the company that owns the order. If a label
   * has been negated, only the negated label is returned. This field is
   * assigned by Google.
   */
  effectiveAppliedLabels: AppliedLabel[];
}

/** The status of an Order. */
export enum Order_Status {
  /** STATUS_UNSPECIFIED - Default value. This value is unused. */
  STATUS_UNSPECIFIED = 0,
  /**
   * DRAFT - Indicates that the Order has just been created but no approval has been
   * requested yet.
   */
  DRAFT = 2,
  /** PENDING_APPROVAL - Indicates that a request for approval for the Order has been made. */
  PENDING_APPROVAL = 3,
  /** APPROVED - Indicates that the Order has been approved and is ready to serve. */
  APPROVED = 4,
  /**
   * DISAPPROVED - Indicates that the Order has been disapproved and is not eligible to
   * serve.
   */
  DISAPPROVED = 5,
  /**
   * PAUSED - This is a legacy state. Paused status should be checked on LineItems
   * within the order.
   */
  PAUSED = 6,
  /** CANCELED - Indicates that the Order has been canceled and cannot serve. */
  CANCELED = 7,
  /** DELETED - Indicates that the Order has been deleted. */
  DELETED = 8,
  UNRECOGNIZED = -1,
}

export function order_StatusFromJSON(object: any): Order_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Order_Status.STATUS_UNSPECIFIED;
    case 2:
    case "DRAFT":
      return Order_Status.DRAFT;
    case 3:
    case "PENDING_APPROVAL":
      return Order_Status.PENDING_APPROVAL;
    case 4:
    case "APPROVED":
      return Order_Status.APPROVED;
    case 5:
    case "DISAPPROVED":
      return Order_Status.DISAPPROVED;
    case 6:
    case "PAUSED":
      return Order_Status.PAUSED;
    case 7:
    case "CANCELED":
      return Order_Status.CANCELED;
    case 8:
    case "DELETED":
      return Order_Status.DELETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order_Status.UNRECOGNIZED;
  }
}

export function order_StatusToJSON(object: Order_Status): string {
  switch (object) {
    case Order_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Order_Status.DRAFT:
      return "DRAFT";
    case Order_Status.PENDING_APPROVAL:
      return "PENDING_APPROVAL";
    case Order_Status.APPROVED:
      return "APPROVED";
    case Order_Status.DISAPPROVED:
      return "DISAPPROVED";
    case Order_Status.PAUSED:
      return "PAUSED";
    case Order_Status.CANCELED:
      return "CANCELED";
    case Order_Status.DELETED:
      return "DELETED";
    case Order_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Request object for `GetOrder` method. */
export interface GetOrderRequest {
  /**
   * Required. The resource name of the Order.
   * Format: `networks/{network_code}/orders/{order_id}`
   */
  name: string;
}

/** Request object for `ListOrders` method. */
export interface ListOrdersRequest {
  /**
   * Required. The parent, which owns this collection of Orders.
   * Format: `networks/{network_code}`
   */
  parent: string;
  /**
   * Optional. The maximum number of `Orders` to return. The service may return
   * fewer than this value. If unspecified, at most 50 `Orders` will be
   * returned. The maximum value is 1000; values above 1000 will be coerced to
   * 1000.
   */
  pageSize: number;
  /**
   * Optional. A page token, received from a previous `ListOrders` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListOrders` must match
   * the call that provided the page token.
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
 * Response object for `ListOrdersRequest` containing matching `Order`
 * resources.
 */
export interface ListOrdersResponse {
  /** The `Order` from the specified network. */
  orders: Order[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
  /**
   * Total number of `Orders`.
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

function createBaseOrder(): Order {
  return {
    name: "",
    orderId: Long.ZERO,
    displayName: "",
    programmatic: false,
    trafficker: "",
    advertiserContacts: [],
    advertiser: "",
    agencyContacts: [],
    agency: "",
    appliedTeams: [],
    effectiveTeams: [],
    creator: "",
    currencyCode: "",
    startTime: undefined,
    endTime: undefined,
    externalOrderId: Long.ZERO,
    archived: false,
    lastModifiedByApp: "",
    updateTime: undefined,
    notes: "",
    poNumber: "",
    status: 0,
    salesperson: "",
    secondarySalespeople: [],
    secondaryTraffickers: [],
    appliedLabels: [],
    effectiveAppliedLabels: [],
  };
}

export const Order: MessageFns<Order> = {
  encode(message: Order, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.orderId.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.orderId.toString());
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.programmatic !== false) {
      writer.uint32(24).bool(message.programmatic);
    }
    if (message.trafficker !== "") {
      writer.uint32(186).string(message.trafficker);
    }
    for (const v of message.advertiserContacts) {
      writer.uint32(42).string(v!);
    }
    if (message.advertiser !== "") {
      writer.uint32(50).string(message.advertiser);
    }
    for (const v of message.agencyContacts) {
      writer.uint32(58).string(v!);
    }
    if (message.agency !== "") {
      writer.uint32(66).string(message.agency);
    }
    for (const v of message.appliedTeams) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.effectiveTeams) {
      writer.uint32(226).string(v!);
    }
    if (message.creator !== "") {
      writer.uint32(82).string(message.creator);
    }
    if (message.currencyCode !== "") {
      writer.uint32(90).string(message.currencyCode);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(154).fork()).join();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(98).fork()).join();
    }
    if (!message.externalOrderId.equals(Long.ZERO)) {
      writer.uint32(104).int64(message.externalOrderId.toString());
    }
    if (message.archived !== false) {
      writer.uint32(112).bool(message.archived);
    }
    if (message.lastModifiedByApp !== "") {
      writer.uint32(122).string(message.lastModifiedByApp);
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(130).fork()).join();
    }
    if (message.notes !== "") {
      writer.uint32(138).string(message.notes);
    }
    if (message.poNumber !== "") {
      writer.uint32(146).string(message.poNumber);
    }
    if (message.status !== 0) {
      writer.uint32(160).int32(message.status);
    }
    if (message.salesperson !== "") {
      writer.uint32(170).string(message.salesperson);
    }
    for (const v of message.secondarySalespeople) {
      writer.uint32(178).string(v!);
    }
    for (const v of message.secondaryTraffickers) {
      writer.uint32(194).string(v!);
    }
    for (const v of message.appliedLabels) {
      AppliedLabel.encode(v!, writer.uint32(202).fork()).join();
    }
    for (const v of message.effectiveAppliedLabels) {
      AppliedLabel.encode(v!, writer.uint32(210).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Order {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.orderId = Long.fromString(reader.int64().toString());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.programmatic = reader.bool();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.trafficker = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.advertiserContacts.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.advertiser = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.agencyContacts.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.agency = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.appliedTeams.push(reader.string());
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.effectiveTeams.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.currencyCode = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.externalOrderId = Long.fromString(reader.int64().toString());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.archived = reader.bool();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.lastModifiedByApp = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.notes = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.poNumber = reader.string();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.salesperson = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.secondarySalespeople.push(reader.string());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.secondaryTraffickers.push(reader.string());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.appliedLabels.push(AppliedLabel.decode(reader, reader.uint32()));
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.effectiveAppliedLabels.push(AppliedLabel.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      orderId: isSet(object.orderId) ? Long.fromValue(object.orderId) : Long.ZERO,
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      programmatic: isSet(object.programmatic) ? globalThis.Boolean(object.programmatic) : false,
      trafficker: isSet(object.trafficker) ? globalThis.String(object.trafficker) : "",
      advertiserContacts: globalThis.Array.isArray(object?.advertiserContacts)
        ? object.advertiserContacts.map((e: any) => globalThis.String(e))
        : [],
      advertiser: isSet(object.advertiser) ? globalThis.String(object.advertiser) : "",
      agencyContacts: globalThis.Array.isArray(object?.agencyContacts)
        ? object.agencyContacts.map((e: any) => globalThis.String(e))
        : [],
      agency: isSet(object.agency) ? globalThis.String(object.agency) : "",
      appliedTeams: globalThis.Array.isArray(object?.appliedTeams)
        ? object.appliedTeams.map((e: any) => globalThis.String(e))
        : [],
      effectiveTeams: globalThis.Array.isArray(object?.effectiveTeams)
        ? object.effectiveTeams.map((e: any) => globalThis.String(e))
        : [],
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      currencyCode: isSet(object.currencyCode) ? globalThis.String(object.currencyCode) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      externalOrderId: isSet(object.externalOrderId) ? Long.fromValue(object.externalOrderId) : Long.ZERO,
      archived: isSet(object.archived) ? globalThis.Boolean(object.archived) : false,
      lastModifiedByApp: isSet(object.lastModifiedByApp) ? globalThis.String(object.lastModifiedByApp) : "",
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      notes: isSet(object.notes) ? globalThis.String(object.notes) : "",
      poNumber: isSet(object.poNumber) ? globalThis.String(object.poNumber) : "",
      status: isSet(object.status) ? order_StatusFromJSON(object.status) : 0,
      salesperson: isSet(object.salesperson) ? globalThis.String(object.salesperson) : "",
      secondarySalespeople: globalThis.Array.isArray(object?.secondarySalespeople)
        ? object.secondarySalespeople.map((e: any) => globalThis.String(e))
        : [],
      secondaryTraffickers: globalThis.Array.isArray(object?.secondaryTraffickers)
        ? object.secondaryTraffickers.map((e: any) => globalThis.String(e))
        : [],
      appliedLabels: globalThis.Array.isArray(object?.appliedLabels)
        ? object.appliedLabels.map((e: any) => AppliedLabel.fromJSON(e))
        : [],
      effectiveAppliedLabels: globalThis.Array.isArray(object?.effectiveAppliedLabels)
        ? object.effectiveAppliedLabels.map((e: any) => AppliedLabel.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (!message.orderId.equals(Long.ZERO)) {
      obj.orderId = (message.orderId || Long.ZERO).toString();
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.programmatic !== false) {
      obj.programmatic = message.programmatic;
    }
    if (message.trafficker !== "") {
      obj.trafficker = message.trafficker;
    }
    if (message.advertiserContacts?.length) {
      obj.advertiserContacts = message.advertiserContacts;
    }
    if (message.advertiser !== "") {
      obj.advertiser = message.advertiser;
    }
    if (message.agencyContacts?.length) {
      obj.agencyContacts = message.agencyContacts;
    }
    if (message.agency !== "") {
      obj.agency = message.agency;
    }
    if (message.appliedTeams?.length) {
      obj.appliedTeams = message.appliedTeams;
    }
    if (message.effectiveTeams?.length) {
      obj.effectiveTeams = message.effectiveTeams;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.currencyCode !== "") {
      obj.currencyCode = message.currencyCode;
    }
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    if (message.endTime !== undefined) {
      obj.endTime = message.endTime.toISOString();
    }
    if (!message.externalOrderId.equals(Long.ZERO)) {
      obj.externalOrderId = (message.externalOrderId || Long.ZERO).toString();
    }
    if (message.archived !== false) {
      obj.archived = message.archived;
    }
    if (message.lastModifiedByApp !== "") {
      obj.lastModifiedByApp = message.lastModifiedByApp;
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.notes !== "") {
      obj.notes = message.notes;
    }
    if (message.poNumber !== "") {
      obj.poNumber = message.poNumber;
    }
    if (message.status !== 0) {
      obj.status = order_StatusToJSON(message.status);
    }
    if (message.salesperson !== "") {
      obj.salesperson = message.salesperson;
    }
    if (message.secondarySalespeople?.length) {
      obj.secondarySalespeople = message.secondarySalespeople;
    }
    if (message.secondaryTraffickers?.length) {
      obj.secondaryTraffickers = message.secondaryTraffickers;
    }
    if (message.appliedLabels?.length) {
      obj.appliedLabels = message.appliedLabels.map((e) => AppliedLabel.toJSON(e));
    }
    if (message.effectiveAppliedLabels?.length) {
      obj.effectiveAppliedLabels = message.effectiveAppliedLabels.map((e) => AppliedLabel.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Order>): Order {
    return Order.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.name = object.name ?? "";
    message.orderId = (object.orderId !== undefined && object.orderId !== null)
      ? Long.fromValue(object.orderId)
      : Long.ZERO;
    message.displayName = object.displayName ?? "";
    message.programmatic = object.programmatic ?? false;
    message.trafficker = object.trafficker ?? "";
    message.advertiserContacts = object.advertiserContacts?.map((e) => e) || [];
    message.advertiser = object.advertiser ?? "";
    message.agencyContacts = object.agencyContacts?.map((e) => e) || [];
    message.agency = object.agency ?? "";
    message.appliedTeams = object.appliedTeams?.map((e) => e) || [];
    message.effectiveTeams = object.effectiveTeams?.map((e) => e) || [];
    message.creator = object.creator ?? "";
    message.currencyCode = object.currencyCode ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.externalOrderId = (object.externalOrderId !== undefined && object.externalOrderId !== null)
      ? Long.fromValue(object.externalOrderId)
      : Long.ZERO;
    message.archived = object.archived ?? false;
    message.lastModifiedByApp = object.lastModifiedByApp ?? "";
    message.updateTime = object.updateTime ?? undefined;
    message.notes = object.notes ?? "";
    message.poNumber = object.poNumber ?? "";
    message.status = object.status ?? 0;
    message.salesperson = object.salesperson ?? "";
    message.secondarySalespeople = object.secondarySalespeople?.map((e) => e) || [];
    message.secondaryTraffickers = object.secondaryTraffickers?.map((e) => e) || [];
    message.appliedLabels = object.appliedLabels?.map((e) => AppliedLabel.fromPartial(e)) || [];
    message.effectiveAppliedLabels = object.effectiveAppliedLabels?.map((e) => AppliedLabel.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetOrderRequest(): GetOrderRequest {
  return { name: "" };
}

export const GetOrderRequest: MessageFns<GetOrderRequest> = {
  encode(message: GetOrderRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderRequest();
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

  fromJSON(object: any): GetOrderRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetOrderRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetOrderRequest>): GetOrderRequest {
    return GetOrderRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetOrderRequest>): GetOrderRequest {
    const message = createBaseGetOrderRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListOrdersRequest(): ListOrdersRequest {
  return { parent: "", pageSize: 0, pageToken: "", filter: "", orderBy: "", skip: 0 };
}

export const ListOrdersRequest: MessageFns<ListOrdersRequest> = {
  encode(message: ListOrdersRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): ListOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOrdersRequest();
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

  fromJSON(object: any): ListOrdersRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
      skip: isSet(object.skip) ? globalThis.Number(object.skip) : 0,
    };
  },

  toJSON(message: ListOrdersRequest): unknown {
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

  create(base?: DeepPartial<ListOrdersRequest>): ListOrdersRequest {
    return ListOrdersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListOrdersRequest>): ListOrdersRequest {
    const message = createBaseListOrdersRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    message.skip = object.skip ?? 0;
    return message;
  },
};

function createBaseListOrdersResponse(): ListOrdersResponse {
  return { orders: [], nextPageToken: "", totalSize: 0 };
}

export const ListOrdersResponse: MessageFns<ListOrdersResponse> = {
  encode(message: ListOrdersResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    if (message.totalSize !== 0) {
      writer.uint32(24).int32(message.totalSize);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListOrdersResponse {
    return {
      orders: globalThis.Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
      totalSize: isSet(object.totalSize) ? globalThis.Number(object.totalSize) : 0,
    };
  },

  toJSON(message: ListOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders?.length) {
      obj.orders = message.orders.map((e) => Order.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    if (message.totalSize !== 0) {
      obj.totalSize = Math.round(message.totalSize);
    }
    return obj;
  },

  create(base?: DeepPartial<ListOrdersResponse>): ListOrdersResponse {
    return ListOrdersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListOrdersResponse>): ListOrdersResponse {
    const message = createBaseListOrdersResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    message.totalSize = object.totalSize ?? 0;
    return message;
  },
};

/** Provides methods for handling `Order` objects. */
export type OrderServiceDefinition = typeof OrderServiceDefinition;
export const OrderServiceDefinition = {
  name: "OrderService",
  fullName: "google.ads.admanager.v1.OrderService",
  methods: {
    /** API to retrieve an Order object. */
    getOrder: {
      name: "GetOrder",
      requestType: GetOrderRequest,
      requestStream: false,
      responseType: Order,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              32,
              18,
              30,
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
              111,
              114,
              100,
              101,
              114,
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
     * API to retrieve a list of `Order` objects.
     *
     * Fields used for literal matching in filter string:
     * * `order_id`
     * * `display_name`
     * * `external_order_id`
     */
    listOrders: {
      name: "ListOrders",
      requestType: ListOrdersRequest,
      requestStream: false,
      responseType: ListOrdersResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              32,
              18,
              30,
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
              111,
              114,
              100,
              101,
              114,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface OrderServiceImplementation<CallContextExt = {}> {
  /** API to retrieve an Order object. */
  getOrder(request: GetOrderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Order>>;
  /**
   * API to retrieve a list of `Order` objects.
   *
   * Fields used for literal matching in filter string:
   * * `order_id`
   * * `display_name`
   * * `external_order_id`
   */
  listOrders(
    request: ListOrdersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListOrdersResponse>>;
}

export interface OrderServiceClient<CallOptionsExt = {}> {
  /** API to retrieve an Order object. */
  getOrder(request: DeepPartial<GetOrderRequest>, options?: CallOptions & CallOptionsExt): Promise<Order>;
  /**
   * API to retrieve a list of `Order` objects.
   *
   * Fields used for literal matching in filter string:
   * * `order_id`
   * * `display_name`
   * * `external_order_id`
   */
  listOrders(
    request: DeepPartial<ListOrdersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListOrdersResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
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
