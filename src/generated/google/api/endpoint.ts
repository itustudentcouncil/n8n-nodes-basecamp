// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/api/endpoint.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.api";

/**
 * `Endpoint` describes a network address of a service that serves a set of
 * APIs. It is commonly known as a service endpoint. A service may expose
 * any number of service endpoints, and all service endpoints share the same
 * service definition, such as quota limits and monitoring metrics.
 *
 * Example:
 *
 *     type: google.api.Service
 *     name: library-example.googleapis.com
 *     endpoints:
 *       # Declares network address `https://library-example.googleapis.com`
 *       # for service `library-example.googleapis.com`. The `https` scheme
 *       # is implicit for all service endpoints. Other schemes may be
 *       # supported in the future.
 *     - name: library-example.googleapis.com
 *       allow_cors: false
 *     - name: content-staging-library-example.googleapis.com
 *       # Allows HTTP OPTIONS calls to be passed to the API frontend, for it
 *       # to decide whether the subsequent cross-origin request is allowed
 *       # to proceed.
 *       allow_cors: true
 */
export interface Endpoint {
  /** The canonical name of this endpoint. */
  name: string;
  /**
   * Aliases for this endpoint, these will be served by the same UrlMap as the
   * parent endpoint, and will be provisioned in the GCP stack for the Regional
   * Endpoints.
   */
  aliases: string[];
  /**
   * The specification of an Internet routable address of API frontend that will
   * handle requests to this [API
   * Endpoint](https://cloud.google.com/apis/design/glossary). It should be
   * either a valid IPv4 address or a fully-qualified domain name. For example,
   * "8.8.8.8" or "myservice.appspot.com".
   */
  target: string;
  /**
   * Allowing
   * [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka
   * cross-domain traffic, would allow the backends served from this endpoint to
   * receive and respond to HTTP OPTIONS requests. The response will be used by
   * the browser to determine whether the subsequent cross-origin request is
   * allowed to proceed.
   */
  allowCors: boolean;
}

function createBaseEndpoint(): Endpoint {
  return { name: "", aliases: [], target: "", allowCors: false };
}

export const Endpoint: MessageFns<Endpoint> = {
  encode(message: Endpoint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.aliases) {
      writer.uint32(18).string(v!);
    }
    if (message.target !== "") {
      writer.uint32(810).string(message.target);
    }
    if (message.allowCors !== false) {
      writer.uint32(40).bool(message.allowCors);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();
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

          message.aliases.push(reader.string());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.target = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.allowCors = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Endpoint {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      aliases: globalThis.Array.isArray(object?.aliases) ? object.aliases.map((e: any) => globalThis.String(e)) : [],
      target: isSet(object.target) ? globalThis.String(object.target) : "",
      allowCors: isSet(object.allowCors) ? globalThis.Boolean(object.allowCors) : false,
    };
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.aliases?.length) {
      obj.aliases = message.aliases;
    }
    if (message.target !== "") {
      obj.target = message.target;
    }
    if (message.allowCors !== false) {
      obj.allowCors = message.allowCors;
    }
    return obj;
  },

  create(base?: DeepPartial<Endpoint>): Endpoint {
    return Endpoint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Endpoint>): Endpoint {
    const message = createBaseEndpoint();
    message.name = object.name ?? "";
    message.aliases = object.aliases?.map((e) => e) || [];
    message.target = object.target ?? "";
    message.allowCors = object.allowCors ?? false;
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
