// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/api/backend.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.api";

/** `Backend` defines the backend configuration for a service. */
export interface Backend {
  /**
   * A list of API backend rules that apply to individual API methods.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: BackendRule[];
}

/** A backend rule provides configuration for an individual API element. */
export interface BackendRule {
  /**
   * Selects the methods to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   */
  selector: string;
  /**
   * The address of the API backend.
   *
   * The scheme is used to determine the backend protocol and security.
   * The following schemes are accepted:
   *
   *    SCHEME        PROTOCOL    SECURITY
   *    http://       HTTP        None
   *    https://      HTTP        TLS
   *    grpc://       gRPC        None
   *    grpcs://      gRPC        TLS
   *
   * It is recommended to explicitly include a scheme. Leaving out the scheme
   * may cause constrasting behaviors across platforms.
   *
   * If the port is unspecified, the default is:
   * - 80 for schemes without TLS
   * - 443 for schemes with TLS
   *
   * For HTTP backends, use [protocol][google.api.BackendRule.protocol]
   * to specify the protocol version.
   */
  address: string;
  /**
   * The number of seconds to wait for a response from a request. The default
   * varies based on the request protocol and deployment environment.
   */
  deadline: number;
  /**
   * Deprecated, do not use.
   *
   * @deprecated
   */
  minDeadline: number;
  /**
   * The number of seconds to wait for the completion of a long running
   * operation. The default is no deadline.
   */
  operationDeadline: number;
  pathTranslation: BackendRule_PathTranslation;
  /**
   * The JWT audience is used when generating a JWT ID token for the backend.
   * This ID token will be added in the HTTP "authorization" header, and sent
   * to the backend.
   */
  jwtAudience?:
    | string
    | undefined;
  /**
   * When disable_auth is true, a JWT ID token won't be generated and the
   * original "Authorization" HTTP header will be preserved. If the header is
   * used to carry the original token and is expected by the backend, this
   * field must be set to true to preserve the header.
   */
  disableAuth?:
    | boolean
    | undefined;
  /**
   * The protocol used for sending a request to the backend.
   * The supported values are "http/1.1" and "h2".
   *
   * The default value is inferred from the scheme in the
   * [address][google.api.BackendRule.address] field:
   *
   *    SCHEME        PROTOCOL
   *    http://       http/1.1
   *    https://      http/1.1
   *    grpc://       h2
   *    grpcs://      h2
   *
   * For secure HTTP backends (https://) that support HTTP/2, set this field
   * to "h2" for improved performance.
   *
   * Configuring this field to non-default values is only supported for secure
   * HTTP backends. This field will be ignored for all other backends.
   *
   * See
   * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
   * for more details on the supported values.
   */
  protocol: string;
  /** The map between request protocol and the backend address. */
  overridesByRequestProtocol: { [key: string]: BackendRule };
}

/**
 * Path Translation specifies how to combine the backend address with the
 * request path in order to produce the appropriate forwarding URL for the
 * request.
 *
 * Path Translation is applicable only to HTTP-based backends. Backends which
 * do not accept requests over HTTP/HTTPS should leave `path_translation`
 * unspecified.
 */
export enum BackendRule_PathTranslation {
  PATH_TRANSLATION_UNSPECIFIED = 0,
  /**
   * CONSTANT_ADDRESS - Use the backend address as-is, with no modification to the path. If the
   * URL pattern contains variables, the variable names and values will be
   * appended to the query string. If a query string parameter and a URL
   * pattern variable have the same name, this may result in duplicate keys in
   * the query string.
   *
   * # Examples
   *
   * Given the following operation config:
   *
   *     Method path:        /api/company/{cid}/user/{uid}
   *     Backend address:    https://example.cloudfunctions.net/getUser
   *
   * Requests to the following request paths will call the backend at the
   * translated path:
   *
   *     Request path: /api/company/widgetworks/user/johndoe
   *     Translated:
   *     https://example.cloudfunctions.net/getUser?cid=widgetworks&uid=johndoe
   *
   *     Request path: /api/company/widgetworks/user/johndoe?timezone=EST
   *     Translated:
   *     https://example.cloudfunctions.net/getUser?timezone=EST&cid=widgetworks&uid=johndoe
   */
  CONSTANT_ADDRESS = 1,
  /**
   * APPEND_PATH_TO_ADDRESS - The request path will be appended to the backend address.
   *
   * # Examples
   *
   * Given the following operation config:
   *
   *     Method path:        /api/company/{cid}/user/{uid}
   *     Backend address:    https://example.appspot.com
   *
   * Requests to the following request paths will call the backend at the
   * translated path:
   *
   *     Request path: /api/company/widgetworks/user/johndoe
   *     Translated:
   *     https://example.appspot.com/api/company/widgetworks/user/johndoe
   *
   *     Request path: /api/company/widgetworks/user/johndoe?timezone=EST
   *     Translated:
   *     https://example.appspot.com/api/company/widgetworks/user/johndoe?timezone=EST
   */
  APPEND_PATH_TO_ADDRESS = 2,
  UNRECOGNIZED = -1,
}

export function backendRule_PathTranslationFromJSON(object: any): BackendRule_PathTranslation {
  switch (object) {
    case 0:
    case "PATH_TRANSLATION_UNSPECIFIED":
      return BackendRule_PathTranslation.PATH_TRANSLATION_UNSPECIFIED;
    case 1:
    case "CONSTANT_ADDRESS":
      return BackendRule_PathTranslation.CONSTANT_ADDRESS;
    case 2:
    case "APPEND_PATH_TO_ADDRESS":
      return BackendRule_PathTranslation.APPEND_PATH_TO_ADDRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BackendRule_PathTranslation.UNRECOGNIZED;
  }
}

export function backendRule_PathTranslationToJSON(object: BackendRule_PathTranslation): string {
  switch (object) {
    case BackendRule_PathTranslation.PATH_TRANSLATION_UNSPECIFIED:
      return "PATH_TRANSLATION_UNSPECIFIED";
    case BackendRule_PathTranslation.CONSTANT_ADDRESS:
      return "CONSTANT_ADDRESS";
    case BackendRule_PathTranslation.APPEND_PATH_TO_ADDRESS:
      return "APPEND_PATH_TO_ADDRESS";
    case BackendRule_PathTranslation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface BackendRule_OverridesByRequestProtocolEntry {
  key: string;
  value: BackendRule | undefined;
}

function createBaseBackend(): Backend {
  return { rules: [] };
}

export const Backend: MessageFns<Backend> = {
  encode(message: Backend, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.rules) {
      BackendRule.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Backend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rules.push(BackendRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Backend {
    return {
      rules: globalThis.Array.isArray(object?.rules) ? object.rules.map((e: any) => BackendRule.fromJSON(e)) : [],
    };
  },

  toJSON(message: Backend): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => BackendRule.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Backend>): Backend {
    return Backend.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Backend>): Backend {
    const message = createBaseBackend();
    message.rules = object.rules?.map((e) => BackendRule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBackendRule(): BackendRule {
  return {
    selector: "",
    address: "",
    deadline: 0,
    minDeadline: 0,
    operationDeadline: 0,
    pathTranslation: 0,
    jwtAudience: undefined,
    disableAuth: undefined,
    protocol: "",
    overridesByRequestProtocol: {},
  };
}

export const BackendRule: MessageFns<BackendRule> = {
  encode(message: BackendRule, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.deadline !== 0) {
      writer.uint32(25).double(message.deadline);
    }
    if (message.minDeadline !== 0) {
      writer.uint32(33).double(message.minDeadline);
    }
    if (message.operationDeadline !== 0) {
      writer.uint32(41).double(message.operationDeadline);
    }
    if (message.pathTranslation !== 0) {
      writer.uint32(48).int32(message.pathTranslation);
    }
    if (message.jwtAudience !== undefined) {
      writer.uint32(58).string(message.jwtAudience);
    }
    if (message.disableAuth !== undefined) {
      writer.uint32(64).bool(message.disableAuth);
    }
    if (message.protocol !== "") {
      writer.uint32(74).string(message.protocol);
    }
    Object.entries(message.overridesByRequestProtocol).forEach(([key, value]) => {
      BackendRule_OverridesByRequestProtocolEntry.encode({ key: key as any, value }, writer.uint32(82).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BackendRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackendRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.deadline = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.minDeadline = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.operationDeadline = reader.double();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.pathTranslation = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.jwtAudience = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.disableAuth = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          const entry10 = BackendRule_OverridesByRequestProtocolEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.overridesByRequestProtocol[entry10.key] = entry10.value;
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

  fromJSON(object: any): BackendRule {
    return {
      selector: isSet(object.selector) ? globalThis.String(object.selector) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      deadline: isSet(object.deadline) ? globalThis.Number(object.deadline) : 0,
      minDeadline: isSet(object.minDeadline) ? globalThis.Number(object.minDeadline) : 0,
      operationDeadline: isSet(object.operationDeadline) ? globalThis.Number(object.operationDeadline) : 0,
      pathTranslation: isSet(object.pathTranslation) ? backendRule_PathTranslationFromJSON(object.pathTranslation) : 0,
      jwtAudience: isSet(object.jwtAudience) ? globalThis.String(object.jwtAudience) : undefined,
      disableAuth: isSet(object.disableAuth) ? globalThis.Boolean(object.disableAuth) : undefined,
      protocol: isSet(object.protocol) ? globalThis.String(object.protocol) : "",
      overridesByRequestProtocol: isObject(object.overridesByRequestProtocol)
        ? Object.entries(object.overridesByRequestProtocol).reduce<{ [key: string]: BackendRule }>(
          (acc, [key, value]) => {
            acc[key] = BackendRule.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: BackendRule): unknown {
    const obj: any = {};
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.deadline !== 0) {
      obj.deadline = message.deadline;
    }
    if (message.minDeadline !== 0) {
      obj.minDeadline = message.minDeadline;
    }
    if (message.operationDeadline !== 0) {
      obj.operationDeadline = message.operationDeadline;
    }
    if (message.pathTranslation !== 0) {
      obj.pathTranslation = backendRule_PathTranslationToJSON(message.pathTranslation);
    }
    if (message.jwtAudience !== undefined) {
      obj.jwtAudience = message.jwtAudience;
    }
    if (message.disableAuth !== undefined) {
      obj.disableAuth = message.disableAuth;
    }
    if (message.protocol !== "") {
      obj.protocol = message.protocol;
    }
    if (message.overridesByRequestProtocol) {
      const entries = Object.entries(message.overridesByRequestProtocol);
      if (entries.length > 0) {
        obj.overridesByRequestProtocol = {};
        entries.forEach(([k, v]) => {
          obj.overridesByRequestProtocol[k] = BackendRule.toJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<BackendRule>): BackendRule {
    return BackendRule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BackendRule>): BackendRule {
    const message = createBaseBackendRule();
    message.selector = object.selector ?? "";
    message.address = object.address ?? "";
    message.deadline = object.deadline ?? 0;
    message.minDeadline = object.minDeadline ?? 0;
    message.operationDeadline = object.operationDeadline ?? 0;
    message.pathTranslation = object.pathTranslation ?? 0;
    message.jwtAudience = object.jwtAudience ?? undefined;
    message.disableAuth = object.disableAuth ?? undefined;
    message.protocol = object.protocol ?? "";
    message.overridesByRequestProtocol = Object.entries(object.overridesByRequestProtocol ?? {}).reduce<
      { [key: string]: BackendRule }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BackendRule.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseBackendRule_OverridesByRequestProtocolEntry(): BackendRule_OverridesByRequestProtocolEntry {
  return { key: "", value: undefined };
}

export const BackendRule_OverridesByRequestProtocolEntry: MessageFns<BackendRule_OverridesByRequestProtocolEntry> = {
  encode(
    message: BackendRule_OverridesByRequestProtocolEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      BackendRule.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BackendRule_OverridesByRequestProtocolEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackendRule_OverridesByRequestProtocolEntry();
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

          message.value = BackendRule.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BackendRule_OverridesByRequestProtocolEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? BackendRule.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: BackendRule_OverridesByRequestProtocolEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = BackendRule.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<BackendRule_OverridesByRequestProtocolEntry>): BackendRule_OverridesByRequestProtocolEntry {
    return BackendRule_OverridesByRequestProtocolEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<BackendRule_OverridesByRequestProtocolEntry>,
  ): BackendRule_OverridesByRequestProtocolEntry {
    const message = createBaseBackendRule_OverridesByRequestProtocolEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? BackendRule.fromPartial(object.value)
      : undefined;
    return message;
  },
};

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
