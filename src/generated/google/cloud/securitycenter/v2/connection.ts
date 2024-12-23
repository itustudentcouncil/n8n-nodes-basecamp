// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v2/connection.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.securitycenter.v2";

/** Contains information about the IP connection associated with the finding. */
export interface Connection {
  /**
   * Destination IP address. Not present for sockets that are listening and not
   * connected.
   */
  destinationIp: string;
  /**
   * Destination port. Not present for sockets that are listening and not
   * connected.
   */
  destinationPort: number;
  /** Source IP address. */
  sourceIp: string;
  /** Source port. */
  sourcePort: number;
  /** IANA Internet Protocol Number such as TCP(6) and UDP(17). */
  protocol: Connection_Protocol;
}

/** IANA Internet Protocol Number such as TCP(6) and UDP(17). */
export enum Connection_Protocol {
  /** PROTOCOL_UNSPECIFIED - Unspecified protocol (not HOPOPT). */
  PROTOCOL_UNSPECIFIED = 0,
  /** ICMP - Internet Control Message Protocol. */
  ICMP = 1,
  /** TCP - Transmission Control Protocol. */
  TCP = 6,
  /** UDP - User Datagram Protocol. */
  UDP = 17,
  /** GRE - Generic Routing Encapsulation. */
  GRE = 47,
  /** ESP - Encap Security Payload. */
  ESP = 50,
  UNRECOGNIZED = -1,
}

export function connection_ProtocolFromJSON(object: any): Connection_Protocol {
  switch (object) {
    case 0:
    case "PROTOCOL_UNSPECIFIED":
      return Connection_Protocol.PROTOCOL_UNSPECIFIED;
    case 1:
    case "ICMP":
      return Connection_Protocol.ICMP;
    case 6:
    case "TCP":
      return Connection_Protocol.TCP;
    case 17:
    case "UDP":
      return Connection_Protocol.UDP;
    case 47:
    case "GRE":
      return Connection_Protocol.GRE;
    case 50:
    case "ESP":
      return Connection_Protocol.ESP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Connection_Protocol.UNRECOGNIZED;
  }
}

export function connection_ProtocolToJSON(object: Connection_Protocol): string {
  switch (object) {
    case Connection_Protocol.PROTOCOL_UNSPECIFIED:
      return "PROTOCOL_UNSPECIFIED";
    case Connection_Protocol.ICMP:
      return "ICMP";
    case Connection_Protocol.TCP:
      return "TCP";
    case Connection_Protocol.UDP:
      return "UDP";
    case Connection_Protocol.GRE:
      return "GRE";
    case Connection_Protocol.ESP:
      return "ESP";
    case Connection_Protocol.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseConnection(): Connection {
  return { destinationIp: "", destinationPort: 0, sourceIp: "", sourcePort: 0, protocol: 0 };
}

export const Connection: MessageFns<Connection> = {
  encode(message: Connection, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.destinationIp !== "") {
      writer.uint32(10).string(message.destinationIp);
    }
    if (message.destinationPort !== 0) {
      writer.uint32(16).int32(message.destinationPort);
    }
    if (message.sourceIp !== "") {
      writer.uint32(26).string(message.sourceIp);
    }
    if (message.sourcePort !== 0) {
      writer.uint32(32).int32(message.sourcePort);
    }
    if (message.protocol !== 0) {
      writer.uint32(40).int32(message.protocol);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Connection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.destinationIp = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.destinationPort = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sourceIp = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sourcePort = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.protocol = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Connection {
    return {
      destinationIp: isSet(object.destinationIp) ? globalThis.String(object.destinationIp) : "",
      destinationPort: isSet(object.destinationPort) ? globalThis.Number(object.destinationPort) : 0,
      sourceIp: isSet(object.sourceIp) ? globalThis.String(object.sourceIp) : "",
      sourcePort: isSet(object.sourcePort) ? globalThis.Number(object.sourcePort) : 0,
      protocol: isSet(object.protocol) ? connection_ProtocolFromJSON(object.protocol) : 0,
    };
  },

  toJSON(message: Connection): unknown {
    const obj: any = {};
    if (message.destinationIp !== "") {
      obj.destinationIp = message.destinationIp;
    }
    if (message.destinationPort !== 0) {
      obj.destinationPort = Math.round(message.destinationPort);
    }
    if (message.sourceIp !== "") {
      obj.sourceIp = message.sourceIp;
    }
    if (message.sourcePort !== 0) {
      obj.sourcePort = Math.round(message.sourcePort);
    }
    if (message.protocol !== 0) {
      obj.protocol = connection_ProtocolToJSON(message.protocol);
    }
    return obj;
  },

  create(base?: DeepPartial<Connection>): Connection {
    return Connection.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Connection>): Connection {
    const message = createBaseConnection();
    message.destinationIp = object.destinationIp ?? "";
    message.destinationPort = object.destinationPort ?? 0;
    message.sourceIp = object.sourceIp ?? "";
    message.sourcePort = object.sourcePort ?? 0;
    message.protocol = object.protocol ?? 0;
    return message;
  },
};

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
