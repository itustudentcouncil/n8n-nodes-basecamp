// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/places/v1/ev_charging.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../protobuf/timestamp.js";

export const protobufPackage = "google.maps.places.v1";

/**
 * See http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6872107 for
 * additional information/context on EV charging connector types.
 */
export enum EVConnectorType {
  /** EV_CONNECTOR_TYPE_UNSPECIFIED - Unspecified connector. */
  EV_CONNECTOR_TYPE_UNSPECIFIED = 0,
  /** EV_CONNECTOR_TYPE_OTHER - Other connector types. */
  EV_CONNECTOR_TYPE_OTHER = 1,
  /** EV_CONNECTOR_TYPE_J1772 - J1772 type 1 connector. */
  EV_CONNECTOR_TYPE_J1772 = 2,
  /** EV_CONNECTOR_TYPE_TYPE_2 - IEC 62196 type 2 connector. Often referred to as MENNEKES. */
  EV_CONNECTOR_TYPE_TYPE_2 = 3,
  /** EV_CONNECTOR_TYPE_CHADEMO - CHAdeMO type connector. */
  EV_CONNECTOR_TYPE_CHADEMO = 4,
  /**
   * EV_CONNECTOR_TYPE_CCS_COMBO_1 - Combined Charging System (AC and DC). Based on SAE.
   *  Type-1 J-1772 connector
   */
  EV_CONNECTOR_TYPE_CCS_COMBO_1 = 5,
  /**
   * EV_CONNECTOR_TYPE_CCS_COMBO_2 - Combined Charging System (AC and DC). Based on Type-2
   * Mennekes connector
   */
  EV_CONNECTOR_TYPE_CCS_COMBO_2 = 6,
  /**
   * EV_CONNECTOR_TYPE_TESLA - The generic TESLA connector. This is NACS in the North America but can be
   * non-NACS in other parts of the world (e.g. CCS Combo 2 (CCS2) or GB/T).
   * This value is less representative of an actual connector type, and more
   * represents the ability to charge a Tesla brand vehicle at a Tesla owned
   * charging station.
   */
  EV_CONNECTOR_TYPE_TESLA = 7,
  /**
   * EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T - GB/T type corresponds to the GB/T standard in China. This type covers all
   * GB_T types.
   */
  EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T = 8,
  /** EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET - Unspecified wall outlet. */
  EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET = 9,
  UNRECOGNIZED = -1,
}

export function eVConnectorTypeFromJSON(object: any): EVConnectorType {
  switch (object) {
    case 0:
    case "EV_CONNECTOR_TYPE_UNSPECIFIED":
      return EVConnectorType.EV_CONNECTOR_TYPE_UNSPECIFIED;
    case 1:
    case "EV_CONNECTOR_TYPE_OTHER":
      return EVConnectorType.EV_CONNECTOR_TYPE_OTHER;
    case 2:
    case "EV_CONNECTOR_TYPE_J1772":
      return EVConnectorType.EV_CONNECTOR_TYPE_J1772;
    case 3:
    case "EV_CONNECTOR_TYPE_TYPE_2":
      return EVConnectorType.EV_CONNECTOR_TYPE_TYPE_2;
    case 4:
    case "EV_CONNECTOR_TYPE_CHADEMO":
      return EVConnectorType.EV_CONNECTOR_TYPE_CHADEMO;
    case 5:
    case "EV_CONNECTOR_TYPE_CCS_COMBO_1":
      return EVConnectorType.EV_CONNECTOR_TYPE_CCS_COMBO_1;
    case 6:
    case "EV_CONNECTOR_TYPE_CCS_COMBO_2":
      return EVConnectorType.EV_CONNECTOR_TYPE_CCS_COMBO_2;
    case 7:
    case "EV_CONNECTOR_TYPE_TESLA":
      return EVConnectorType.EV_CONNECTOR_TYPE_TESLA;
    case 8:
    case "EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T":
      return EVConnectorType.EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T;
    case 9:
    case "EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET":
      return EVConnectorType.EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EVConnectorType.UNRECOGNIZED;
  }
}

export function eVConnectorTypeToJSON(object: EVConnectorType): string {
  switch (object) {
    case EVConnectorType.EV_CONNECTOR_TYPE_UNSPECIFIED:
      return "EV_CONNECTOR_TYPE_UNSPECIFIED";
    case EVConnectorType.EV_CONNECTOR_TYPE_OTHER:
      return "EV_CONNECTOR_TYPE_OTHER";
    case EVConnectorType.EV_CONNECTOR_TYPE_J1772:
      return "EV_CONNECTOR_TYPE_J1772";
    case EVConnectorType.EV_CONNECTOR_TYPE_TYPE_2:
      return "EV_CONNECTOR_TYPE_TYPE_2";
    case EVConnectorType.EV_CONNECTOR_TYPE_CHADEMO:
      return "EV_CONNECTOR_TYPE_CHADEMO";
    case EVConnectorType.EV_CONNECTOR_TYPE_CCS_COMBO_1:
      return "EV_CONNECTOR_TYPE_CCS_COMBO_1";
    case EVConnectorType.EV_CONNECTOR_TYPE_CCS_COMBO_2:
      return "EV_CONNECTOR_TYPE_CCS_COMBO_2";
    case EVConnectorType.EV_CONNECTOR_TYPE_TESLA:
      return "EV_CONNECTOR_TYPE_TESLA";
    case EVConnectorType.EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T:
      return "EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T";
    case EVConnectorType.EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET:
      return "EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET";
    case EVConnectorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Information about the EV Charge Station hosted in Place.
 * Terminology follows
 * https://afdc.energy.gov/fuels/electricity_infrastructure.html One port
 * could charge one car at a time. One port has one or more connectors. One
 * station has one or more ports.
 */
export interface EVChargeOptions {
  /**
   * Number of connectors at this station. However, because some ports can have
   * multiple connectors but only be able to charge one car at a time (e.g.) the
   * number of connectors may be greater than the total number of cars which can
   * charge simultaneously.
   */
  connectorCount: number;
  /**
   * A list of EV charging connector aggregations that contain connectors of the
   * same type and same charge rate.
   */
  connectorAggregation: EVChargeOptions_ConnectorAggregation[];
}

/**
 * EV charging information grouped by [type, max_charge_rate_kw].
 * Shows EV charge aggregation of connectors that have the same type and max
 * charge rate in kw.
 */
export interface EVChargeOptions_ConnectorAggregation {
  /** The connector type of this aggregation. */
  type: EVConnectorType;
  /** The static max charging rate in kw of each connector in the aggregation. */
  maxChargeRateKw: number;
  /** Number of connectors in this aggregation. */
  count: number;
  /** Number of connectors in this aggregation that are currently available. */
  availableCount?:
    | number
    | undefined;
  /**
   * Number of connectors in this aggregation that are currently out of
   * service.
   */
  outOfServiceCount?:
    | number
    | undefined;
  /**
   * The timestamp when the connector availability information in this
   * aggregation was last updated.
   */
  availabilityLastUpdateTime: Date | undefined;
}

function createBaseEVChargeOptions(): EVChargeOptions {
  return { connectorCount: 0, connectorAggregation: [] };
}

export const EVChargeOptions: MessageFns<EVChargeOptions> = {
  encode(message: EVChargeOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.connectorCount !== 0) {
      writer.uint32(8).int32(message.connectorCount);
    }
    for (const v of message.connectorAggregation) {
      EVChargeOptions_ConnectorAggregation.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EVChargeOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEVChargeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.connectorCount = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connectorAggregation.push(EVChargeOptions_ConnectorAggregation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EVChargeOptions {
    return {
      connectorCount: isSet(object.connectorCount) ? globalThis.Number(object.connectorCount) : 0,
      connectorAggregation: globalThis.Array.isArray(object?.connectorAggregation)
        ? object.connectorAggregation.map((e: any) => EVChargeOptions_ConnectorAggregation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EVChargeOptions): unknown {
    const obj: any = {};
    if (message.connectorCount !== 0) {
      obj.connectorCount = Math.round(message.connectorCount);
    }
    if (message.connectorAggregation?.length) {
      obj.connectorAggregation = message.connectorAggregation.map((e) =>
        EVChargeOptions_ConnectorAggregation.toJSON(e)
      );
    }
    return obj;
  },

  create(base?: DeepPartial<EVChargeOptions>): EVChargeOptions {
    return EVChargeOptions.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EVChargeOptions>): EVChargeOptions {
    const message = createBaseEVChargeOptions();
    message.connectorCount = object.connectorCount ?? 0;
    message.connectorAggregation =
      object.connectorAggregation?.map((e) => EVChargeOptions_ConnectorAggregation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEVChargeOptions_ConnectorAggregation(): EVChargeOptions_ConnectorAggregation {
  return {
    type: 0,
    maxChargeRateKw: 0,
    count: 0,
    availableCount: undefined,
    outOfServiceCount: undefined,
    availabilityLastUpdateTime: undefined,
  };
}

export const EVChargeOptions_ConnectorAggregation: MessageFns<EVChargeOptions_ConnectorAggregation> = {
  encode(message: EVChargeOptions_ConnectorAggregation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.maxChargeRateKw !== 0) {
      writer.uint32(17).double(message.maxChargeRateKw);
    }
    if (message.count !== 0) {
      writer.uint32(24).int32(message.count);
    }
    if (message.availableCount !== undefined) {
      writer.uint32(32).int32(message.availableCount);
    }
    if (message.outOfServiceCount !== undefined) {
      writer.uint32(40).int32(message.outOfServiceCount);
    }
    if (message.availabilityLastUpdateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.availabilityLastUpdateTime), writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EVChargeOptions_ConnectorAggregation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEVChargeOptions_ConnectorAggregation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.maxChargeRateKw = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.count = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.availableCount = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.outOfServiceCount = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.availabilityLastUpdateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EVChargeOptions_ConnectorAggregation {
    return {
      type: isSet(object.type) ? eVConnectorTypeFromJSON(object.type) : 0,
      maxChargeRateKw: isSet(object.maxChargeRateKw) ? globalThis.Number(object.maxChargeRateKw) : 0,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
      availableCount: isSet(object.availableCount) ? globalThis.Number(object.availableCount) : undefined,
      outOfServiceCount: isSet(object.outOfServiceCount) ? globalThis.Number(object.outOfServiceCount) : undefined,
      availabilityLastUpdateTime: isSet(object.availabilityLastUpdateTime)
        ? fromJsonTimestamp(object.availabilityLastUpdateTime)
        : undefined,
    };
  },

  toJSON(message: EVChargeOptions_ConnectorAggregation): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = eVConnectorTypeToJSON(message.type);
    }
    if (message.maxChargeRateKw !== 0) {
      obj.maxChargeRateKw = message.maxChargeRateKw;
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.availableCount !== undefined) {
      obj.availableCount = Math.round(message.availableCount);
    }
    if (message.outOfServiceCount !== undefined) {
      obj.outOfServiceCount = Math.round(message.outOfServiceCount);
    }
    if (message.availabilityLastUpdateTime !== undefined) {
      obj.availabilityLastUpdateTime = message.availabilityLastUpdateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<EVChargeOptions_ConnectorAggregation>): EVChargeOptions_ConnectorAggregation {
    return EVChargeOptions_ConnectorAggregation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EVChargeOptions_ConnectorAggregation>): EVChargeOptions_ConnectorAggregation {
    const message = createBaseEVChargeOptions_ConnectorAggregation();
    message.type = object.type ?? 0;
    message.maxChargeRateKw = object.maxChargeRateKw ?? 0;
    message.count = object.count ?? 0;
    message.availableCount = object.availableCount ?? undefined;
    message.outOfServiceCount = object.outOfServiceCount ?? undefined;
    message.availabilityLastUpdateTime = object.availabilityLastUpdateTime ?? undefined;
    return message;
  },
};

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