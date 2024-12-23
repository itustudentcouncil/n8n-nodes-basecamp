// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/websecurityscanner/v1/finding_addon.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.websecurityscanner.v1";

/** ! Information about a vulnerability with an HTML. */
export interface Form {
  /** ! The URI where to send the form when it's submitted. */
  actionUri: string;
  /** ! The names of form fields related to the vulnerability. */
  fields: string[];
}

/** Information reported for an outdated library. */
export interface OutdatedLibrary {
  /** The name of the outdated library. */
  libraryName: string;
  /** The version number. */
  version: string;
  /** URLs to learn more information about the vulnerabilities in the library. */
  learnMoreUrls: string[];
}

/**
 * Information regarding any resource causing the vulnerability such
 * as JavaScript sources, image, audio files, etc.
 */
export interface ViolatingResource {
  /** The MIME type of this resource. */
  contentType: string;
  /** URL of this violating resource. */
  resourceUrl: string;
}

/** Information about vulnerable request parameters. */
export interface VulnerableParameters {
  /** The vulnerable parameter names. */
  parameterNames: string[];
}

/** Information about vulnerable or missing HTTP Headers. */
export interface VulnerableHeaders {
  /** List of vulnerable headers. */
  headers: VulnerableHeaders_Header[];
  /** List of missing headers. */
  missingHeaders: VulnerableHeaders_Header[];
}

/** Describes a HTTP Header. */
export interface VulnerableHeaders_Header {
  /** Header name. */
  name: string;
  /** Header value. */
  value: string;
}

/** Information reported for an XSS. */
export interface Xss {
  /** Stack traces leading to the point where the XSS occurred. */
  stackTraces: string[];
  /** An error message generated by a javascript breakage. */
  errorMessage: string;
  /** The attack vector of the payload triggering this XSS. */
  attackVector: Xss_AttackVector;
  /** The reproduction url for the seeding POST request of a Stored XSS. */
  storedXssSeedingUrl: string;
}

/** Types of XSS attack vector. */
export enum Xss_AttackVector {
  /** ATTACK_VECTOR_UNSPECIFIED - Unknown attack vector. */
  ATTACK_VECTOR_UNSPECIFIED = 0,
  /** LOCAL_STORAGE - The attack comes from fuzzing the browser's localStorage. */
  LOCAL_STORAGE = 1,
  /** SESSION_STORAGE - The attack comes from fuzzing the browser's sessionStorage. */
  SESSION_STORAGE = 2,
  /** WINDOW_NAME - The attack comes from fuzzing the window's name property. */
  WINDOW_NAME = 3,
  /** REFERRER - The attack comes from fuzzing the referrer property. */
  REFERRER = 4,
  /** FORM_INPUT - The attack comes from fuzzing an input element. */
  FORM_INPUT = 5,
  /** COOKIE - The attack comes from fuzzing the browser's cookies. */
  COOKIE = 6,
  /** POST_MESSAGE - The attack comes from hijacking the post messaging mechanism. */
  POST_MESSAGE = 7,
  /** GET_PARAMETERS - The attack comes from fuzzing parameters in the url. */
  GET_PARAMETERS = 8,
  /** URL_FRAGMENT - The attack comes from fuzzing the fragment in the url. */
  URL_FRAGMENT = 9,
  /** HTML_COMMENT - The attack comes from fuzzing the HTML comments. */
  HTML_COMMENT = 10,
  /** POST_PARAMETERS - The attack comes from fuzzing the POST parameters. */
  POST_PARAMETERS = 11,
  /** PROTOCOL - The attack comes from fuzzing the protocol. */
  PROTOCOL = 12,
  /** STORED_XSS - The attack comes from the server side and is stored. */
  STORED_XSS = 13,
  /** SAME_ORIGIN - The attack is a Same-Origin Method Execution attack via a GET parameter. */
  SAME_ORIGIN = 14,
  /**
   * USER_CONTROLLABLE_URL - The attack payload is received from a third-party host via a URL that is
   * user-controllable
   */
  USER_CONTROLLABLE_URL = 15,
  UNRECOGNIZED = -1,
}

export function xss_AttackVectorFromJSON(object: any): Xss_AttackVector {
  switch (object) {
    case 0:
    case "ATTACK_VECTOR_UNSPECIFIED":
      return Xss_AttackVector.ATTACK_VECTOR_UNSPECIFIED;
    case 1:
    case "LOCAL_STORAGE":
      return Xss_AttackVector.LOCAL_STORAGE;
    case 2:
    case "SESSION_STORAGE":
      return Xss_AttackVector.SESSION_STORAGE;
    case 3:
    case "WINDOW_NAME":
      return Xss_AttackVector.WINDOW_NAME;
    case 4:
    case "REFERRER":
      return Xss_AttackVector.REFERRER;
    case 5:
    case "FORM_INPUT":
      return Xss_AttackVector.FORM_INPUT;
    case 6:
    case "COOKIE":
      return Xss_AttackVector.COOKIE;
    case 7:
    case "POST_MESSAGE":
      return Xss_AttackVector.POST_MESSAGE;
    case 8:
    case "GET_PARAMETERS":
      return Xss_AttackVector.GET_PARAMETERS;
    case 9:
    case "URL_FRAGMENT":
      return Xss_AttackVector.URL_FRAGMENT;
    case 10:
    case "HTML_COMMENT":
      return Xss_AttackVector.HTML_COMMENT;
    case 11:
    case "POST_PARAMETERS":
      return Xss_AttackVector.POST_PARAMETERS;
    case 12:
    case "PROTOCOL":
      return Xss_AttackVector.PROTOCOL;
    case 13:
    case "STORED_XSS":
      return Xss_AttackVector.STORED_XSS;
    case 14:
    case "SAME_ORIGIN":
      return Xss_AttackVector.SAME_ORIGIN;
    case 15:
    case "USER_CONTROLLABLE_URL":
      return Xss_AttackVector.USER_CONTROLLABLE_URL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Xss_AttackVector.UNRECOGNIZED;
  }
}

export function xss_AttackVectorToJSON(object: Xss_AttackVector): string {
  switch (object) {
    case Xss_AttackVector.ATTACK_VECTOR_UNSPECIFIED:
      return "ATTACK_VECTOR_UNSPECIFIED";
    case Xss_AttackVector.LOCAL_STORAGE:
      return "LOCAL_STORAGE";
    case Xss_AttackVector.SESSION_STORAGE:
      return "SESSION_STORAGE";
    case Xss_AttackVector.WINDOW_NAME:
      return "WINDOW_NAME";
    case Xss_AttackVector.REFERRER:
      return "REFERRER";
    case Xss_AttackVector.FORM_INPUT:
      return "FORM_INPUT";
    case Xss_AttackVector.COOKIE:
      return "COOKIE";
    case Xss_AttackVector.POST_MESSAGE:
      return "POST_MESSAGE";
    case Xss_AttackVector.GET_PARAMETERS:
      return "GET_PARAMETERS";
    case Xss_AttackVector.URL_FRAGMENT:
      return "URL_FRAGMENT";
    case Xss_AttackVector.HTML_COMMENT:
      return "HTML_COMMENT";
    case Xss_AttackVector.POST_PARAMETERS:
      return "POST_PARAMETERS";
    case Xss_AttackVector.PROTOCOL:
      return "PROTOCOL";
    case Xss_AttackVector.STORED_XSS:
      return "STORED_XSS";
    case Xss_AttackVector.SAME_ORIGIN:
      return "SAME_ORIGIN";
    case Xss_AttackVector.USER_CONTROLLABLE_URL:
      return "USER_CONTROLLABLE_URL";
    case Xss_AttackVector.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Information reported for an XXE. */
export interface Xxe {
  /**
   * The XML string that triggered the XXE vulnerability. Non-payload values
   * might be redacted.
   */
  payloadValue: string;
  /** Location within the request where the payload was placed. */
  payloadLocation: Xxe_Location;
}

/** Locations within a request where XML was substituted. */
export enum Xxe_Location {
  /** LOCATION_UNSPECIFIED - Unknown Location. */
  LOCATION_UNSPECIFIED = 0,
  /** COMPLETE_REQUEST_BODY - The XML payload replaced the complete request body. */
  COMPLETE_REQUEST_BODY = 1,
  UNRECOGNIZED = -1,
}

export function xxe_LocationFromJSON(object: any): Xxe_Location {
  switch (object) {
    case 0:
    case "LOCATION_UNSPECIFIED":
      return Xxe_Location.LOCATION_UNSPECIFIED;
    case 1:
    case "COMPLETE_REQUEST_BODY":
      return Xxe_Location.COMPLETE_REQUEST_BODY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Xxe_Location.UNRECOGNIZED;
  }
}

export function xxe_LocationToJSON(object: Xxe_Location): string {
  switch (object) {
    case Xxe_Location.LOCATION_UNSPECIFIED:
      return "LOCATION_UNSPECIFIED";
    case Xxe_Location.COMPLETE_REQUEST_BODY:
      return "COMPLETE_REQUEST_BODY";
    case Xxe_Location.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseForm(): Form {
  return { actionUri: "", fields: [] };
}

export const Form: MessageFns<Form> = {
  encode(message: Form, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.actionUri !== "") {
      writer.uint32(10).string(message.actionUri);
    }
    for (const v of message.fields) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Form {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.actionUri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fields.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Form {
    return {
      actionUri: isSet(object.actionUri) ? globalThis.String(object.actionUri) : "",
      fields: globalThis.Array.isArray(object?.fields) ? object.fields.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Form): unknown {
    const obj: any = {};
    if (message.actionUri !== "") {
      obj.actionUri = message.actionUri;
    }
    if (message.fields?.length) {
      obj.fields = message.fields;
    }
    return obj;
  },

  create(base?: DeepPartial<Form>): Form {
    return Form.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Form>): Form {
    const message = createBaseForm();
    message.actionUri = object.actionUri ?? "";
    message.fields = object.fields?.map((e) => e) || [];
    return message;
  },
};

function createBaseOutdatedLibrary(): OutdatedLibrary {
  return { libraryName: "", version: "", learnMoreUrls: [] };
}

export const OutdatedLibrary: MessageFns<OutdatedLibrary> = {
  encode(message: OutdatedLibrary, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.libraryName !== "") {
      writer.uint32(10).string(message.libraryName);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    for (const v of message.learnMoreUrls) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OutdatedLibrary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutdatedLibrary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.libraryName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.learnMoreUrls.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutdatedLibrary {
    return {
      libraryName: isSet(object.libraryName) ? globalThis.String(object.libraryName) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      learnMoreUrls: globalThis.Array.isArray(object?.learnMoreUrls)
        ? object.learnMoreUrls.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: OutdatedLibrary): unknown {
    const obj: any = {};
    if (message.libraryName !== "") {
      obj.libraryName = message.libraryName;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.learnMoreUrls?.length) {
      obj.learnMoreUrls = message.learnMoreUrls;
    }
    return obj;
  },

  create(base?: DeepPartial<OutdatedLibrary>): OutdatedLibrary {
    return OutdatedLibrary.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OutdatedLibrary>): OutdatedLibrary {
    const message = createBaseOutdatedLibrary();
    message.libraryName = object.libraryName ?? "";
    message.version = object.version ?? "";
    message.learnMoreUrls = object.learnMoreUrls?.map((e) => e) || [];
    return message;
  },
};

function createBaseViolatingResource(): ViolatingResource {
  return { contentType: "", resourceUrl: "" };
}

export const ViolatingResource: MessageFns<ViolatingResource> = {
  encode(message: ViolatingResource, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.contentType !== "") {
      writer.uint32(10).string(message.contentType);
    }
    if (message.resourceUrl !== "") {
      writer.uint32(18).string(message.resourceUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ViolatingResource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseViolatingResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contentType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ViolatingResource {
    return {
      contentType: isSet(object.contentType) ? globalThis.String(object.contentType) : "",
      resourceUrl: isSet(object.resourceUrl) ? globalThis.String(object.resourceUrl) : "",
    };
  },

  toJSON(message: ViolatingResource): unknown {
    const obj: any = {};
    if (message.contentType !== "") {
      obj.contentType = message.contentType;
    }
    if (message.resourceUrl !== "") {
      obj.resourceUrl = message.resourceUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<ViolatingResource>): ViolatingResource {
    return ViolatingResource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ViolatingResource>): ViolatingResource {
    const message = createBaseViolatingResource();
    message.contentType = object.contentType ?? "";
    message.resourceUrl = object.resourceUrl ?? "";
    return message;
  },
};

function createBaseVulnerableParameters(): VulnerableParameters {
  return { parameterNames: [] };
}

export const VulnerableParameters: MessageFns<VulnerableParameters> = {
  encode(message: VulnerableParameters, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.parameterNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VulnerableParameters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVulnerableParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parameterNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VulnerableParameters {
    return {
      parameterNames: globalThis.Array.isArray(object?.parameterNames)
        ? object.parameterNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: VulnerableParameters): unknown {
    const obj: any = {};
    if (message.parameterNames?.length) {
      obj.parameterNames = message.parameterNames;
    }
    return obj;
  },

  create(base?: DeepPartial<VulnerableParameters>): VulnerableParameters {
    return VulnerableParameters.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VulnerableParameters>): VulnerableParameters {
    const message = createBaseVulnerableParameters();
    message.parameterNames = object.parameterNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseVulnerableHeaders(): VulnerableHeaders {
  return { headers: [], missingHeaders: [] };
}

export const VulnerableHeaders: MessageFns<VulnerableHeaders> = {
  encode(message: VulnerableHeaders, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.headers) {
      VulnerableHeaders_Header.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.missingHeaders) {
      VulnerableHeaders_Header.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VulnerableHeaders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVulnerableHeaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.headers.push(VulnerableHeaders_Header.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.missingHeaders.push(VulnerableHeaders_Header.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VulnerableHeaders {
    return {
      headers: globalThis.Array.isArray(object?.headers)
        ? object.headers.map((e: any) => VulnerableHeaders_Header.fromJSON(e))
        : [],
      missingHeaders: globalThis.Array.isArray(object?.missingHeaders)
        ? object.missingHeaders.map((e: any) => VulnerableHeaders_Header.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VulnerableHeaders): unknown {
    const obj: any = {};
    if (message.headers?.length) {
      obj.headers = message.headers.map((e) => VulnerableHeaders_Header.toJSON(e));
    }
    if (message.missingHeaders?.length) {
      obj.missingHeaders = message.missingHeaders.map((e) => VulnerableHeaders_Header.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<VulnerableHeaders>): VulnerableHeaders {
    return VulnerableHeaders.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VulnerableHeaders>): VulnerableHeaders {
    const message = createBaseVulnerableHeaders();
    message.headers = object.headers?.map((e) => VulnerableHeaders_Header.fromPartial(e)) || [];
    message.missingHeaders = object.missingHeaders?.map((e) => VulnerableHeaders_Header.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVulnerableHeaders_Header(): VulnerableHeaders_Header {
  return { name: "", value: "" };
}

export const VulnerableHeaders_Header: MessageFns<VulnerableHeaders_Header> = {
  encode(message: VulnerableHeaders_Header, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VulnerableHeaders_Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVulnerableHeaders_Header();
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

  fromJSON(object: any): VulnerableHeaders_Header {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: VulnerableHeaders_Header): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<VulnerableHeaders_Header>): VulnerableHeaders_Header {
    return VulnerableHeaders_Header.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VulnerableHeaders_Header>): VulnerableHeaders_Header {
    const message = createBaseVulnerableHeaders_Header();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseXss(): Xss {
  return { stackTraces: [], errorMessage: "", attackVector: 0, storedXssSeedingUrl: "" };
}

export const Xss: MessageFns<Xss> = {
  encode(message: Xss, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.stackTraces) {
      writer.uint32(10).string(v!);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    if (message.attackVector !== 0) {
      writer.uint32(24).int32(message.attackVector);
    }
    if (message.storedXssSeedingUrl !== "") {
      writer.uint32(34).string(message.storedXssSeedingUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Xss {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseXss();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stackTraces.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.attackVector = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.storedXssSeedingUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Xss {
    return {
      stackTraces: globalThis.Array.isArray(object?.stackTraces)
        ? object.stackTraces.map((e: any) => globalThis.String(e))
        : [],
      errorMessage: isSet(object.errorMessage) ? globalThis.String(object.errorMessage) : "",
      attackVector: isSet(object.attackVector) ? xss_AttackVectorFromJSON(object.attackVector) : 0,
      storedXssSeedingUrl: isSet(object.storedXssSeedingUrl) ? globalThis.String(object.storedXssSeedingUrl) : "",
    };
  },

  toJSON(message: Xss): unknown {
    const obj: any = {};
    if (message.stackTraces?.length) {
      obj.stackTraces = message.stackTraces;
    }
    if (message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
    if (message.attackVector !== 0) {
      obj.attackVector = xss_AttackVectorToJSON(message.attackVector);
    }
    if (message.storedXssSeedingUrl !== "") {
      obj.storedXssSeedingUrl = message.storedXssSeedingUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<Xss>): Xss {
    return Xss.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Xss>): Xss {
    const message = createBaseXss();
    message.stackTraces = object.stackTraces?.map((e) => e) || [];
    message.errorMessage = object.errorMessage ?? "";
    message.attackVector = object.attackVector ?? 0;
    message.storedXssSeedingUrl = object.storedXssSeedingUrl ?? "";
    return message;
  },
};

function createBaseXxe(): Xxe {
  return { payloadValue: "", payloadLocation: 0 };
}

export const Xxe: MessageFns<Xxe> = {
  encode(message: Xxe, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.payloadValue !== "") {
      writer.uint32(10).string(message.payloadValue);
    }
    if (message.payloadLocation !== 0) {
      writer.uint32(16).int32(message.payloadLocation);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Xxe {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseXxe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payloadValue = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.payloadLocation = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Xxe {
    return {
      payloadValue: isSet(object.payloadValue) ? globalThis.String(object.payloadValue) : "",
      payloadLocation: isSet(object.payloadLocation) ? xxe_LocationFromJSON(object.payloadLocation) : 0,
    };
  },

  toJSON(message: Xxe): unknown {
    const obj: any = {};
    if (message.payloadValue !== "") {
      obj.payloadValue = message.payloadValue;
    }
    if (message.payloadLocation !== 0) {
      obj.payloadLocation = xxe_LocationToJSON(message.payloadLocation);
    }
    return obj;
  },

  create(base?: DeepPartial<Xxe>): Xxe {
    return Xxe.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Xxe>): Xxe {
    const message = createBaseXxe();
    message.payloadValue = object.payloadValue ?? "";
    message.payloadLocation = object.payloadLocation ?? 0;
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
